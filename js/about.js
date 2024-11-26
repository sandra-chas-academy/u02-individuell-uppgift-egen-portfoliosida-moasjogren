// CV i JSON
const cv = document.querySelector(".cv");
const education = document.querySelector(".education");

async function getCv() {
  try {
    const response = await fetch("./cv.json");
    if (!response.ok) {
      throw new Error(`HTTP ERROR STATUS ${response.status}`);
    }
    const data = await response.json();
    displayEducation(data.education);
    displayCv(data.work);
  } catch (error) {
    console.log("ERROR", error);
  }

  function displayCv(entry) {
    entry.forEach(function (item) {
      Object.entries(item).forEach(([key, value]) => {
        const text = document.createElement("p");
        text.textContent = `${value}`;
        switch (key) {
          case "role":
            text.classList.add("cv-sub__title");
            break;
          case "company":
          case "years":
            text.classList.add("cv-p");
            break;
        }
        cv.appendChild(text);
      });
    });
  }
  function displayEducation(entry) {
    entry.forEach(function (item) {
      Object.entries(item).forEach(([key, value]) => {
        const text = document.createElement("p");
        text.textContent = `${value}`;
        switch (key) {
          case "program":
            text.classList.add("cv-sub__title");
            break;
          case "school":
          case "years":
          case "city":
            text.classList.add("cv-p");
            break;
        }
        education.appendChild(text);
      });
    });
  }
}
getCv();
