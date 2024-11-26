// Projekt från Github API
const projects = document.querySelector(".projects-section");

async function getProjects() {
  const url = "https://api.github.com/users/moasjogren/repos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error();
  }
}
getProjects();
