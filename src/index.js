import { createTaskObject } from "./modules/task";
import { taskArray, addToTask } from "./modules/storage";
import {
  createCard,
  deleteCard,
  cardDetails,
  editDetails,
} from "./modules/Manipulation";

const taskButton = document.getElementById("add-task");
const bodyContainer = document.getElementsByClassName("body-container")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const sidebarButton = document.getElementById("sidebar-button");
const createTask = document.getElementById("create-task");
const createContainer = document.getElementsByClassName("task-create")[0];
const background = document.getElementsByClassName("test")[0];
const exitButton = document.getElementsByClassName("fa")[2];

let page = 0;
let arrayTask = taskArray;

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
      console.log(selectedPrio);
    }
  }

  let taskObj = createTaskObject(
    taskName.value,
    taskDesc.value,
    taskDate.value,
    selectedPrio
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
    sidebar.style.flex = "0";
    sidebar.style.visibility = "hidden";
    sidebarVisibility = false;

    sidebar.childNodes.forEach((ele) => {
      if (ele) {
        console.log(ele);
      }
    });

    sidebar.childNodes.forEach((element) => {});
  } else {
    sidebarVisibility = true;
    sidebar.style.flex = "0 0 15%";
    sidebar.style.visibility = "visible";
    sidebar.childNodes.forEach((element) => {});
  }
});
