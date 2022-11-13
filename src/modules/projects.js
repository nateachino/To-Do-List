import { addToProject } from "./storage";

export function addProject() {
  const projectList = document.getElementsByClassName("project-list")[0];
  const projectCreateContainter = document.createElement("div");
  projectList.appendChild(projectCreateContainter);

  const projectNameLabel = document.createElement("div");
  const projectNameInput = document.createElement("input");
  const projectCreate = document.createElement("button");

  projectNameLabel.innerHTML = "Project Name";
  projectNameInput.setAttribute("id", "project-name");
  projectCreate.setAttribute("id", "project-create");
  projectCreate.innerHTML = "CREATE";

  projectCreateContainter.append(
    projectNameLabel,
    projectNameInput,
    projectCreate
  );

  projectCreateContainter.classList.add("project-create-container");
  return projectCreateContainter;
}

export function createProject(projectName) {
  addToProject(projectName);

  const projectSide = document.createElement("div");
  const projectList = document.getElementsByClassName("project-list")[0];
  projectList.classList.add("project-list");
  projectSide.classList.add("project");

  projectSide.innerHTML = projectName;

  projectList.appendChild(projectSide);

  return projectSide;
}

export function clearSelected() {
  let selected = document.getElementsByClassName("selected");

  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.remove("selected");
  }
}
