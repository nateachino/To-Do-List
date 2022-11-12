/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\r\n\r\n\r\nconst taskButton = document.getElementById(\"add-task\");\r\nconst bodyContainer = document.getElementsByClassName(\"body-container\")[0];\r\nconst sidebar = document.getElementsByClassName(\"sidebar\")[0];\r\nconst content = document.getElementsByClassName(\"content\")[0];\r\nconst sidebarButton = document.getElementById(\"sidebar-button\");\r\nconst createTask = document.getElementById(\"create-task\");\r\nconst createContainer = document.getElementsByClassName(\"task-create\")[0];\r\nconst background = document.getElementsByClassName(\"test\")[0];\r\nconst exitButton = document.getElementsByClassName(\"fa\")[2];\r\n\r\nif (exitButton) {\r\n  console.log(exitButton);\r\n}\r\n\r\nvar sidebarVisibility = true;\r\n\r\nfunction createCard(task) {\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"task-container\");\r\n  content.appendChild(container);\r\n}\r\n\r\ncreateTask.addEventListener(\"click\", () => {\r\n  const taskName = document.getElementById(\"task-name\");\r\n  const taskDesc = document.getElementById(\"task-desc\");\r\n  const taskDate = document.getElementById(\"task-date\");\r\n\r\n  let taskObj = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(\r\n    taskName.value,\r\n    taskDesc.value,\r\n    taskDate.value\r\n  );\r\n  (0,_modules_storage__WEBPACK_IMPORTED_MODULE_1__.addToTask)(taskObj);\r\n  createCard(taskObj);\r\n  createContainer.style.visibility = \"hidden\";\r\n  background.style.visibility = \"hidden\";\r\n});\r\n\r\n// createTask.addEventListener(\"click\", () => {\r\n//   const taskName = document.getElementById(\"task-name\");\r\n//   const taskDesc = document.getElementById(\"task-desc\");\r\n//   const taskDate = document.getElementById(\"task-date\");\r\n//   const taskPriority = document.getElementById(\"task-priority\");\r\n//   var task = createTaskObject(\r\n//     taskName.innerHTML,\r\n//     taskDesc.innerHTML,\r\n//     taskDate.innerHTML,\r\n//     taskPriority\r\n//   );\r\n//   console.log(task);\r\n//   createContainer.style.visibility = \"hidden\";\r\n\r\n//   const taskContainer = document.createElement(\"div\");\r\n//   taskContainer.classList.add(\"task-container\");\r\n\r\n//   const taskTitle = document.createElement(\"div\");\r\n//   taskContainer.classList.add(\"task-name\");\r\n// });\r\n\r\ntaskButton.addEventListener(\"click\", () => {\r\n  createContainer.style.visibility = \"visible\";\r\n  background.style.visibility = \"visible\";\r\n});\r\n\r\nexitButton.addEventListener(\"click\", () => {\r\n  createContainer.style.visibility = \"hidden\";\r\n  background.style.visibility = \"hidden\";\r\n});\r\n\r\nsidebarButton.addEventListener(\"click\", () => {\r\n  if (sidebarVisibility == true) {\r\n    sidebar.style.flex = \"0\";\r\n    sidebar.style.visibility = \"hidden\";\r\n    sidebarVisibility = false;\r\n\r\n    sidebar.childNodes.forEach((element) => {});\r\n  } else {\r\n    sidebarVisibility = true;\r\n    sidebar.style.flex = \"0 0 15%\";\r\n    sidebar.style.visibility = \"visible\";\r\n    sidebar.childNodes.forEach((element) => {});\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToTask\": () => (/* binding */ addToTask),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\nlet taskArray = [];\r\nfunction addToTask(task) {\r\n  taskArray.push(task);\r\n  console.log(taskArray);\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\nlet num = 0;\r\n\r\nfunction createTaskObject(taskName, taskDesc, dueDate, prio) {\r\n  var task = {\r\n    name: taskName,\r\n    description: taskDesc,\r\n    date: dueDate,\r\n    priority: prio,\r\n    num: num,\r\n  };\r\n  num += 1;\r\n  console.log(task);\r\n  return task;\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;