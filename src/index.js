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
  homePage,
  updateDetails,
  updateCard,
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
const homeButton = document.getElementById("home");
const taskEdit = document.getElementsByClassName("task-edit")[0];

let selectedProject = home;
let arrayTask = taskArray;

let creating = false;
var sidebarVisibility = true;

export function removeAndDetails(card, obj) {
  let remove = card.querySelector("#remove-task");

  remove.addEventListener("click", () => {
    deleteCard(card, obj.num);
  });

  let details = card.querySelector("#task-details");

  const detailsContainer = document.getElementsByClassName(
    "task-details-container"
  )[0];

  details.addEventListener("click", () => {
    console.log(123);
    cardDetails(obj);
    detailsContainer.style.visibility = "visible";
    background.style.visibility = "visible";
  });

  let detailsEdit = document.getElementById("edit-button");

  detailsEdit.addEventListener("click", () => {
    console.log(121231233);
    editDetails();
    taskEdit.style.visibility = "visible";
    detailsContainer.style.visibility = "hidden";
  });

  const editConfirm = document.getElementById("edit-task");

  editConfirm.addEventListener("click", () => {
    let newTask = updateDetails(obj.num);
    updateCard(card, obj);

    taskEdit.style.visibility = "hidden";
    background.style.visibility = "hidden";
  });

  let detailsRemove = document.getElementById("detail-exit-button");

  detailsRemove.addEventListener("click", () => {
    detailsContainer.style.visibility = "hidden";
    background.style.visibility = "hidden";
  });
}

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

  removeAndDetails(taskCard, taskObj);
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

homeButton.addEventListener("click", () => {
  if (selectedProject != home) {
    clearSelected();
    home.classList.add("selected");
    homePage();
  }
});

projectAdd.addEventListener("click", () => {
  if (creating == false) {
    creating = true;
    let proj = addProject();
    let createButton = proj.querySelector("#project-create");
    let cancelButton = proj.querySelector("#project-cancel");

    cancelButton.addEventListener("click", () => {
      const parent = cancelButton.parentElement.parentElement;
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      parent.remove();
      creating = false;
    });

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
