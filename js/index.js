// Öppna hamburgermeny
const nav = document.getElementById("header__nav");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function () {
  console.log("hit");
  nav.classList.toggle("header__nav__show");
});

// CV i JSON
const cv = document.querySelector(".about__cv");

async function getCv() {
  try {
    const response = await fetch("./cv.json");
    if (!response.ok) {
      throw new Error(`HTTP ERROR STATUS ${response.status}`);
    }
    const data = await response.json();
    displayCv(data.education);
    displayCv(data.work);
  } catch (error) {
    console.log("ERROR", error);
  }

  function displayCv(entry) {
    entry.forEach(function (item) {
      Object.entries(item).forEach(([key, value]) => {
        const text = document.createElement("p");
        text.textContent = `${key}: ${value}`;
        cv.appendChild(text);
      });
    });
  }
}
getCv();
