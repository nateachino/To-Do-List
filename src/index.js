import { createTaskObject } from "./modules/task";
import { taskArray, addToTask } from "./modules/storage";

const taskButton = document.getElementById("add-task");
const bodyContainer = document.getElementsByClassName("body-container")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const content = document.getElementsByClassName("content")[0];
const sidebarButton = document.getElementById("sidebar-button");
const createTask = document.getElementById("create-task");
const createContainer = document.getElementsByClassName("task-create")[0];
const background = document.getElementsByClassName("test")[0];
const exitButton = document.getElementsByClassName("fa")[2];

if (exitButton) {
  console.log(exitButton);
}

var sidebarVisibility = true;

function createCard(task) {
  const container = document.createElement("div");
  container.classList.add("task-container");
  content.appendChild(container);
}

createTask.addEventListener("click", () => {
  const taskName = document.getElementById("task-name");
  const taskDesc = document.getElementById("task-desc");
  const taskDate = document.getElementById("task-date");

  let taskObj = createTaskObject(
    taskName.value,
    taskDesc.value,
    taskDate.value
  );
  addToTask(taskObj);
  createCard(taskObj);
  createContainer.style.visibility = "hidden";
  background.style.visibility = "hidden";
});

// createTask.addEventListener("click", () => {
//   const taskName = document.getElementById("task-name");
//   const taskDesc = document.getElementById("task-desc");
//   const taskDate = document.getElementById("task-date");
//   const taskPriority = document.getElementById("task-priority");
//   var task = createTaskObject(
//     taskName.innerHTML,
//     taskDesc.innerHTML,
//     taskDate.innerHTML,
//     taskPriority
//   );
//   console.log(task);
//   createContainer.style.visibility = "hidden";

//   const taskContainer = document.createElement("div");
//   taskContainer.classList.add("task-container");

//   const taskTitle = document.createElement("div");
//   taskContainer.classList.add("task-name");
// });

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

    sidebar.childNodes.forEach((element) => {});
  } else {
    sidebarVisibility = true;
    sidebar.style.flex = "0 0 15%";
    sidebar.style.visibility = "visible";
    sidebar.childNodes.forEach((element) => {});
  }
});
