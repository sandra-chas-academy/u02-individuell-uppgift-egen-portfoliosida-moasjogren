// Projekt från Github API
const projects = document.querySelector(".projects-section__container");

async function getProjects() {
  const APIurl = "https://api.github.com/users/moasjogren/repos";
  try {
    const response = await fetch(APIurl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    data.forEach((object) => {
      console.log(object);
      const article = document.createElement("article");
      const projectName = document.createElement("h3");
      const projectDescription = document.createElement("p");
      const link = document.createElement("a");
      link.setAttribute("href", object.html_url);
      link.innerHTML = "Github";
      article.classList.add("projects-section__item");
      projectName.textContent = `${object.name}`;
      projectDescription.textContent = `${object.description}`;
      projectName.classList.add("project-title");
      projectDescription.classList.add("project__text-block");
      link.classList.add("project__link");
      article.appendChild(projectName);
      article.appendChild(projectDescription);
      article.appendChild(link);
      projects.appendChild(article);
    });
  } catch (error) {
    console.error();
  }
}

getProjects();
