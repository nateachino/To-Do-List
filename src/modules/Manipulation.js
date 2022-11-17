import { removeAndDetails } from "..";
import { taskArray } from "./storage";

function createCard(task) {
  const content = document.getElementsByClassName("content")[0];
  const container = document.createElement("div");
  container.classList.add("task-container");
  container.dataset.index = task.num;

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
  taskDetails.setAttribute("id", "task-details");

  const removeTask = document.createElement("button");
  const cssIconTwo = document.createElement("i");

  cssIconTwo.classList.add("fa");
  cssIconTwo.classList.add("fa-trash");

  removeTask.appendChild(cssIconTwo);
  secondButtonDiv.appendChild(removeTask);
  removeTask.setAttribute("id", "remove-task");

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
  const detailsPrio = document.getElementsByClassName("prio-card")[0];

  const editName = document.getElementById("edit-name");
  const editDesc = document.getElementById("edit-desc");
  const editDate = document.getElementById("edit-date");
  const editPrio = document.getElementsByName("edit-priority");

  editName.value = detailsName.innerHTML;
  editDesc.value = detailsDesc.innerHTML;
  editDate.value = detailsDate.innerHTML;
}

function updateDetails(num) {
  const editName = document.getElementById("edit-name");
  const editDesc = document.getElementById("edit-desc");
  const editDate = document.getElementById("edit-date");
  const editPrio = document.getElementsByName("edit-priority");
  let current = "";
  const number = num;

  console.log(num);

  let selectedPrio = "";

  for (let i = 0; i < editPrio.length; i++) {
    if (editPrio[i].checked) {
      selectedPrio = editPrio[i].value;
      editPrio[i].checked;
    }
  }

  const detailsName = document.getElementsByClassName("details-header")[0];
  const detailsDesc = document.getElementsByClassName("details-desc")[0];
  const detailsDate = document.getElementsByClassName("details-date")[0];
  const detailsPrio = document.getElementsByClassName("prio-card");

  detailsName.innerHTML = editName.value;
  detailsDate.innerHTML = editDate.value;
  detailsDesc.innerHTML = editDesc.value;

  return selectedPrio;
}

function updateCard(num) {
  console.log(document.querySelector("[data-index=" + num + "]"));

  // const getCardName = card.getElementsByClassName;
  // const getCardDate = card.querySelector(".task-date");
  // const getCardPrio = card.querySelector(".prio-card");

  // const editName = document.getElementById("edit-name");
  // const editDesc = document.getElementById("edit-desc");
  // const editDate = document.getElementById("edit-date");
  // const editPrio = document.getElementsByName("edit-priority");

  // const objName = editName.value;
  // const objDate = editDate.value;
  // const objPrio = obj;

  // console.log(obj);
  // getCardName.innerHTML = objName;
  // getCardDate.innerHTML = objDate;
  // getCardPrio.className = "prio-card" + " " + objPrio;
  // getCardPrio.innerHTML = objPrio.toUpperCase();
}

function projectSelected(projectName) {
  console.log(projectName + " selected");
  const content = document.getElementsByClassName("content")[0];

  while (content.firstChild) {
    if (content.removeChild(content.firstChild)) {
    }
  }

  let newArray = [];
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].projectAssign == projectName) {
      newArray.push(taskArray[i]);
      for (let j = 0; j < newArray.length; j++) {
        let card = createCard(newArray[j]);
        removeAndDetails(card, newArray[j]);
      }
    }
  }
}

function homePage() {
  const content = document.getElementsByClassName("content")[0];

  while (content.firstChild) {
    if (content.removeChild(content.firstChild)) {
    }
  }

  for (let i = 0; i < taskArray.length; i++) {
    let card = createCard(taskArray[i]);
    removeAndDetails(card, taskArray[i]);
  }
}

export {
  createCard,
  deleteCard,
  cardDetails,
  editDetails,
  projectSelected,
  homePage,
  updateDetails,
  updateCard,
};
