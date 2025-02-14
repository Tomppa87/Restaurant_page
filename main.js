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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPageLoad: () => (/* binding */ aboutPageLoad)\n/* harmony export */ });\nfunction aboutPageLoad() {\n    let content = document.getElementById(\"content\");\n    let aboutPage = document.createElement(\"div\");\n    let aboutHead = document.createElement(\"h2\");\n    aboutHead.innerHTML = \"Paikallista ruokaa\"\n    aboutPage.appendChild(aboutHead)\n    content.appendChild(aboutPage);\n    let aboutP = document.createElement(\"p\");\n    let aboutPText = document.createTextNode(\"Valmistamme ruuat mahdollisimman läheltä tuotetuista raaka-aineista omassa keittiössämme.\")\n    aboutP.appendChild(aboutPText);\n    aboutPage.appendChild(aboutP)\n}\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ \"./src/page_load.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\nlet content = document.getElementById(\"content\");\nconst homeBtn = document.getElementById(\"homeBtn\");\nconst menuBtn = document.getElementById(\"menuBtn\");\nconst aboutBtn = document.getElementById(\"aboutBtn\")\n\nmenuBtn.addEventListener(\"click\", () => {\n    content.removeChild(content.lastChild)\n    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuPageLoad)()\n})\naboutBtn.addEventListener(\"click\", () => {\n    content.removeChild(content.lastChild)\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_1__.aboutPageLoad)()\n})\n\nhomeBtn.addEventListener(\"click\", () => {\n    content.removeChild(content.lastChild)\n    ;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)\n/* harmony export */ });\nfunction menuPageLoad() {\n    let content = document.getElementById(\"content\");\n    let menuPage = document.createElement(\"div\");\n    menuPage.innerHTML = \"I like Pizza!\";\n    content.appendChild(menuPage);\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad() {\n    let content = document.getElementById(\"content\");\n    let homePage = document.createElement(\"div\");\n    let homeHead = document.createElement(\"h2\");\n    homeHead.innerHTML = \"Rantolan Puoti\"\n    homePage.appendChild(homeHead)\n    content.appendChild(homePage);\n    let homeP = document.createElement(\"p\");\n    let homePText = document.createTextNode(\"Sauvossa, Karunan kylän keskustassa, meren rannalla sijaitseva Rantolan Puoti tarjoaa kesäisin kahvila -ja ravintolapalveluita. Kursailematonta tuoretta ruokaa ja leivonnaisia, jotka valmistetaan puhtaista ja mahdollisemman paikallisista raaka-aineista. Viihtyisässä kahvilassamme on mukava rentoutua hyvässä seurassa, nauttia herkuista ja maistella viiniä tai paikallista olutta ja siideriä.\")\n    homeP.appendChild(homePText);\n    homePage.appendChild(homeP)\n}\n\n\n//# sourceURL=webpack:///./src/page_load.js?");

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