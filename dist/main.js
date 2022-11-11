/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const sidebar = document.getElementsByClassName(\"sidebar\")[0];\r\nconst content = document.getElementsByClassName(\"content\")[0];\r\nconst sidebarButton = document.getElementById(\"sidebar-button\");\r\nconst bodyContainer = document.getElementsByClassName(\"body-container\")[0];\r\nvar sidebarVisibility = true;\r\n\r\nsidebarButton.addEventListener(\"click\", () => {\r\n  if (sidebarVisibility == true) {\r\n    sidebar.style.transform = \"translateX(-500px)\";\r\n  } else {\r\n    sidebarVisibility = true;\r\n    sidebar.style.position = \"static\";\r\n    sidebar.style.transform = \"translateX(0px)\";\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;