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
const exitButton = document.getElementsByClassName("fa")[5];
const projectAdd = document.getElementById("add-project");
const projectList = document.getElementsByClassName("project-list")[0];
const homeButton = document.getElementById("home");
const taskEdit = document.getElementsByClassName("task-edit")[0];
const detailsName = document.getElementsByClassName("details-header")[0];
const detailsDesc = document.getElementsByClassName("details-desc")[0];
const detailsDate = document.getElementsByClassName("details-date")[0];
const detailsPrio = document.getElementsByClassName("prio-card")[0];

let selectedProject = home;
let arrayTask = taskArray;

let creating = false;
var sidebarVisibility = true;
let creatingTask = false;

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
    cardDetails(obj);

    detailsContainer.style.visibility = "visible";
    background.style.visibility = "visible";
  });

  let detailsEdit = document.getElementById("edit-button");
  detailsEdit.addEventListener("click", () => {
    editDetails(obj);
    taskEdit.style.visibility = "visible";
    detailsContainer.style.visibility = "hidden";
  });

  let detailsRemove = document.getElementById("detail-exit-button");

  detailsRemove.addEventListener("click", () => {
    detailsContainer.style.visibility = "hidden";
    background.style.visibility = "hidden";
  });

  let editExit = document.getElementsByClassName("edit-exit-button")[0];
  editExit.addEventListener("click", () => {
    taskEdit.style.visibility = "hidden";
    background.style.visibility = "hidden";
  });

  detailsName.addEventListener("click", () => {
    const nameInput = document.createElement("input");
    nameInput.value = detailsName.innerHTML;
    const parent = detailsName.parentElement;
    parent.replaceChild(nameInput, detailsName);

    nameInput.addEventListener("keypress", (e) => {
      if (e.which == 13) {
        detailsName.innerHTML = nameInput.value;
        parent.replaceChild(detailsName, nameInput);
        card;
      }
    });
  });

  detailsDate.addEventListener("click", () => {
    console.log("test");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    const parent = detailsDate.parentElement;
    parent.replaceChild(dateInput, detailsDate);

    dateInput.addEventListener("keypress", (e) => {
      if (e.which == 13) {
        detailsDate.innerHTML = dateInput.value;
        parent.replaceChild(detailsDate, dateInput);
      }
    });
  });
}

createTask.addEventListener("click", () => {
  let match = false;

  const taskName = document.getElementById("task-name");
  let remText = taskName.value.replace(/\s/g, "");

  for (let p = 0; p < taskArray.length; p++) {
    if (taskArray[p].name == remText) {
      taskName.focus;
      match = true;
    }
  }

  if (remText.length == 0 || match == true) {
    taskName.focus;
    alert("Invalid task name");
  } else {
    const taskDesc = document.getElementById("task-desc");
    const taskDate = document.getElementById("task-date");

    if (taskDate.value == undefined || taskDate.value == "") {
      taskDate.type = "input";
      taskDate.value = "No Date";
      console.log(taskDate.value);
    }

    console.log(taskDate.value);
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

    let confirmCreate = document.getElementById("edit-task");

    confirmCreate.addEventListener("click", () => {
      taskEdit.style.visibility = "hidden";
      background.style.visibility = "hidden";
      let newDetails = updateDetails(taskObj.num);
      updateCard(taskCard, newDetails, taskObj.num);
    });
  }
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
    sidebar.style.flex = "0 0 clamp(150px, 15%, 350px)";
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
