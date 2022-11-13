import { taskArray } from "./storage";

function createCard(task) {
  const content = document.getElementsByClassName("content")[0];
  const container = document.createElement("div");
  container.classList.add("task-container");

  const taskRight = document.createElement("div");
  taskRight.classList.add("task-right");

  const status = document.createElement("input");
  status.type = "checkbox";

  const name = document.createElement("div");
  name.classList.add("task-name");

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const date = document.createElement("div");
  date.classList.add("task-date");

  const priorityCard = document.createElement("div");
  priorityCard.classList.add("prio-card");
  priorityCard.classList.add(task.priority);
  priorityCard.innerHTML = task.priority.toUpperCase();

  const firstButtonDiv = document.createElement("div");
  const secondButtonDiv = document.createElement("div");

  const taskDetails = document.createElement("button");
  const cssIconOne = document.createElement("i");

  cssIconOne.classList.add("fa");
  cssIconOne.classList.add("fa-info-circle");

  taskDetails.appendChild(cssIconOne);
  firstButtonDiv.appendChild(taskDetails);
  taskDetails.classList.add("task-details");

  const removeTask = document.createElement("button");
  const cssIconTwo = document.createElement("i");

  cssIconTwo.classList.add("fa");
  cssIconTwo.classList.add("fa-trash");

  removeTask.appendChild(cssIconTwo);
  secondButtonDiv.appendChild(removeTask);
  removeTask.classList.add("remove-task");

  name.innerHTML = task.name;
  date.innerHTML = task.date;

  container.append(taskRight, taskLeft);
  taskRight.append(status, name);

  taskLeft.append(date, priorityCard, firstButtonDiv, secondButtonDiv);

  content.appendChild(container);

  return container;
}

function deleteCard(container, number) {
  const content = document.getElementsByClassName("content")[0];
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  content.removeChild(container);
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].num == number) {
      taskArray.splice(i, 1);
    }
  }
}

function cardDetails(task) {
  const taskDetailsContainer = document.getElementsByClassName(
    "task-details-container"
  )[0];
  const detailsName = document.getElementsByClassName("details-header")[0];
  const detailsDesc = document.getElementsByClassName("details-desc")[0];
  const detailsDate = document.getElementsByClassName("details-date")[0];
  const detailsPrio = document.getElementsByClassName("prio-card")[0];

  detailsName.innerHTML = task.name;
  detailsDesc.innerHTML = task.description;
  detailsDate.innerHTML = task.date;

  detailsPrio.classList.add(task.priority);
  detailsPrio.innerHTML = task.priority.toUpperCase();
}

function editDetails(task) {
  const detailsName = document.getElementsByClassName("details-header")[0];
  const detailsDesc = document.getElementsByClassName("details-desc")[0];
  const detailsDate = document.getElementsByClassName("details-date")[0];

  const editName = document.createElement("input");
  editName.setAttribute("id", "task-name");

  const editDesc = document.createElement("textarea");
  editDesc.setAttribute("id", "task-desc");

  const editDate = document.createElement("input");
  editDate.type = "date";
  editDate.setAttribute("id", "task-date");

  const submit = document.getElementById("edit-task");

  editName.value = detailsName.innerHTML;
  editDesc.value = detailsDesc.innerHTML;
  editDate.value = detailsDate.innerHTML;

  detailsName.parentNode.replaceChild(editName, detailsName);
  detailsDesc.parentNode.replaceChild(editDesc, detailsDesc);
  detailsDate.parentNode.replaceChild(editDate, detailsDate);
}

function projectSelected(projectName) {
  const content = document.getElementsByClassName("content")[0];
  console.log("project name: " + projectName);

  while (content.firstChild) {
    if (content.removeChild(content.firstChild)) {
    }
  }

  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].projectAssign == projectName) {
      createCard(taskArray[i]);
    }
  }
}

export { createCard, deleteCard, cardDetails, editDetails, projectSelected };
