import { createTaskObject } from "./modules/task";
import {
  taskArray,
  addToTask,
  projectArray,
  addToProject,
} from "./modules/storage";
import {
  createCard,
  deleteCard,
  cardDetails,
  editDetails,
} from "./modules/Manipulation";
import { addProject, createProject, clearSelected } from "./modules/projects";
import { projectSelected } from "./modules/Manipulation";

const taskButton = document.getElementById("add-task");
const bodyContainer = document.getElementsByClassName("body-container")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const sidebarButton = document.getElementById("sidebar-button");
const createTask = document.getElementById("create-task");
const createContainer = document.getElementsByClassName("task-create")[0];
const background = document.getElementsByClassName("test")[0];
const exitButton = document.getElementsByClassName("fa")[4];
const projectAdd = document.getElementById("add-project");
const projectList = document.getElementsByClassName("project-list")[0];

let selectedProject;
let arrayTask = taskArray;

let creating = false;
var sidebarVisibility = true;

createTask.addEventListener("click", () => {
  const taskName = document.getElementById("task-name");
  const taskDesc = document.getElementById("task-desc");
  const taskDate = document.getElementById("task-date");
  const prioritySelector = document.getElementsByName("priority");
  let selectedPrio = "";
  for (let i = 0; i < prioritySelector.length; i++) {
    if (prioritySelector[i].checked) {
      selectedPrio = prioritySelector[i].value;
    }
  }

  let taskObj = createTaskObject(
    taskName.value,
    taskDesc.value,
    taskDate.value,
    selectedPrio,
    selectedProject
  );
  addToTask(taskObj);

  taskName.value = "";
  taskDesc.value = "";
  taskDate.value = "";
  let taskCard = createCard(taskObj);

  createContainer.style.visibility = "hidden";
  background.style.visibility = "hidden";

  let remove = taskCard.querySelectorAll(".remove-task")[0];

  remove.addEventListener("click", () => {
    remove.addEventListener("click", deleteCard(taskCard, taskObj.num));
  });

  let details = taskCard.querySelectorAll(".task-details")[0];

  if (details) {
    console.log("found details");
  }
  const detailsContainer = document.getElementsByClassName(
    "task-details-container"
  )[0];

  details.addEventListener("click", () => {
    cardDetails(taskObj);
    detailsContainer.style.visibility = "visible";
    background.style.visibility = "visible";
  });

  let detailsEdit = document.getElementById("edit-button");

  detailsEdit.addEventListener("click", () => {
    editDetails(taskObj);
  });

  let detailsExit = document.getElementsByClassName("detail-exit-button")[0];

  detailsExit.addEventListener("click", () => {
    detailsContainer.style.visibility = "hidden";
    background.style.visibility = "hidden";
  });
});

taskButton.addEventListener("click", () => {
  createContainer.style.visibility = "visible";
  background.style.visibility = "visible";
});

exitButton.addEventListener("click", () => {
  createContainer.style.visibility = "hidden";
  background.style.visibility = "hidden";
});

sidebarButton.addEventListener("click", () => {
  if (sidebarVisibility == true) {
    let children = sidebar.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = "translateX(-500px)";
    }
    sidebar.style.flex = "0";
    sidebar.style.padding = "0";
    sidebarVisibility = false;
  } else {
    sidebarVisibility = true;
    sidebar.style.flex = "0 0 15%";
    sidebar.style.padding = "1rem";
    sidebar.style.visibility = "visible";
    let children = sidebar.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = "translateX(0px)";
    }
    sidebar.childNodes.forEach((element) => {});
  }
});

projectAdd.addEventListener("click", () => {
  if (creating == false) {
    creating = true;
    let proj = addProject();
    let createButton = proj.querySelector("#project-create");

    createButton.addEventListener("click", () => {
      let nameInput = proj.querySelector("#project-name");
      if (nameInput == "") {
        creating = false;
      } else {
        console.log(nameInput.value);
        let project = createProject(nameInput.value);
        projectList.removeChild(proj);

        selectedProject = nameInput.value;

        projectSelected(nameInput.value);
        clearSelected();

        project.classList.add("selected");
        creating = false;

        const projectSide = document.getElementsByClassName("project");

        Array.from(projectSide).forEach((element) => {
          element.addEventListener("click", () => {
            clearSelected();
            projectSelected(element.innerHTML);
            element.classList.add("selected");
            selectedProject = element;
          });
        });
      }
    });
  } else {
  }
});
