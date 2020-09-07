/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/images/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/icon-calculator.svg":
/*!************************************!*\
  !*** ./images/icon-calculator.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzQ3NEY1NCIgZD0iTTY0IDB2NDEuMjVsLTMuNzUgMy44NzVIMy43NUwwIDQxLjI1VjB6Ii8+PHBhdGggZmlsbD0iIzMyMzkzRiIgZD0iTTY0IDB2NDEuMjVsLTMuNzUgMy44NzVIMzJWMHoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNMjIuNjI1IDUwLjg3NWgxOC43NXYxMS4yNWgtMTguNzV6Ii8+PHBhdGggZmlsbD0iI0M5QzlEMyIgZD0iTTMyIDUwLjg3NWg5LjM3NXYxMS4yNUgzMnoiLz48cGF0aCBmaWxsPSIjRUZFRkY0IiBkPSJNMCA0MS4yNWg2NHYxMS41SDB6Ii8+PHBhdGggZmlsbD0iI0RBREFFNSIgZD0iTTMyIDQxLjI1aDMydjExLjVIMzJ6Ii8+PHBhdGggZmlsbD0iI0VGRUZGNCIgZD0iTTE1LjEyNSA2MC4yNWgzMy43NVY2NGgtMzMuNzV6Ii8+PHBhdGggZmlsbD0iI0RBREFFNSIgZD0iTTMyIDYwLjI1aDE2Ljg3NVY2NEgzMnoiLz48cGF0aCBmaWxsPSIjNTQ5RUYyIiBkPSJNMjAuNzUgNy41Yy03LjIzNiAwLTEzLjEyNSA1Ljg4OS0xMy4xMjUgMTMuMTI1UzEzLjUxNCAzMy43NSAyMC43NSAzMy43NXMxMy4xMjUtNS44ODkgMTMuMTI1LTEzLjEyNVMyNy45ODYgNy41IDIwLjc1IDcuNXptMCAxOC43NWE1LjYzMSA1LjYzMSAwIDAxLTUuNjI1LTUuNjI1QTUuNjMxIDUuNjMxIDAgMDEyMC43NSAxNWE1LjYzMSA1LjYzMSAwIDAxNS42MjUgNS42MjUgNS42MzEgNS42MzEgMCAwMS01LjYyNSA1LjYyNXoiLz48ZyBmaWxsPSIjMzc3RkQyIj48cGF0aCBkPSJNNDUuMTI1IDcuNUg1Ni41djMuNzVINDUuMTI1ek0zNy42MjUgNy41aDMuNzV2My43NWgtMy43NXpNNDUuMTI1IDIyLjVINTYuNXYzLjc1SDQ1LjEyNXpNMzcuNjI1IDIyLjVoMy43NXYzLjc1aC0zLjc1ek0zNy42MjUgMTVINTYuNXYzLjc1SDM3LjYyNXpNMzcuNjI1IDMwSDU2LjV2My43NUgzNy42MjV6Ii8+PC9nPjwvZz48L3N2Zz4=\");\n\n//# sourceURL=webpack:///./images/icon-calculator.svg?");

/***/ }),

/***/ "./images/icon-karma.svg":
/*!*******************************!*\
  !*** ./images/icon-karma.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzY3NkU3NCIgZD0iTTI2LjM3NSA1Mi42MjVoMTEuMjVWNjRoLTExLjI1eiIvPjxwYXRoIGZpbGw9IiMzMzM2MzciIGQ9Ik0zMiA1Mi42MjVoNS42MjVWNjRIMzJ6Ii8+PHBhdGggZmlsbD0iIzRDNTQ1QSIgZD0iTTIyLjYyNSA0N2gxOC43NXY5LjM3NWgtMTguNzV6Ii8+PHBhdGggZmlsbD0iIzUyNTg1QyIgZD0iTTMyIDQ3aDkuMzc1djkuMzc1SDMyeiIvPjxwYXRoIGZpbGw9IiNGRkRBMkQiIGQ9Ik00NS4wMTIgMzYuNzI1Yy0yLjMyNSAxLjkxMy0zLjYzNyA0LjYxMi0zLjYzNyA3LjQyNVY0N2gtMTguNzV2LTIuODVjMC0yLjg1LTEuMjM4LTUuNTEyLTMuMy03LjEyNS01LjA2Mi0zLjkzOC03Ljk1LTkuODYyLTcuOTUtMTYuMjc1YTIwLjU4NSAyMC41ODUgMCAwMTcuNjEzLTE2LjAxM0MyMi43IDEuNzM3IDI3LjIzOCAwIDMyIDBjMS40NjIgMCAyLjk2Mi4xNSA0LjQyNS40NSA4LjEgMS42ODggMTQuNDc1IDguNDUgMTUuOSAxNi42NjMgMS4yNzUgNy41LTEuNDI1IDE0Ljg1LTcuMzEzIDE5LjYxMnoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNNDUuMDEyIDM2LjcyNWMtMi4zMjUgMS45MTMtMy42MzcgNC42MTItMy42MzcgNy40MjVWNDdIMzJWMGMxLjQ2MiAwIDIuOTYyLjE1IDQuNDI1LjQ1IDguMSAxLjY4OCAxNC40NzUgOC40NSAxNS45IDE2LjY2MyAxLjI3NSA3LjUtMS40MjUgMTQuODUtNy4zMTMgMTkuNjEyeiIvPjxwYXRoIGZpbGw9IiM2NzZFNzQiIGQ9Ik0xOC44NzUgNDUuMTI1aDI2LjI1djMuNzVoLTI2LjI1eiIvPjxwYXRoIGZpbGw9IiNGRjkxMDAiIGQ9Ik0zOS45NTYgMTAuMTQzbDIuNjUxIDIuNjUxLTMuOTc5IDMuOTc4LTIuNjUxLTIuNjUxeiIvPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik0yNS4zNzIgMjQuNzI3bDIuNjUxIDIuNjUxLTMuOTc5IDMuOTc5LTIuNjUxLTIuNjUxek0zMC4xMjUgMjguMjVoMy43NXY1LjYyNWgtMy43NXoiLz48cGF0aCBmaWxsPSIjRkY5MTAwIiBkPSJNMzguNjI4IDI0LjcyN2wzLjk3OSAzLjk3OS0yLjY1MSAyLjY1MS0zLjk3OS0zLjk3OXpNMzkuNSAxOC44NzVoNS42MjV2My43NUgzOS41eiIvPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik0yNC4wNDQgMTAuMTQzbDMuOTc5IDMuOTc5LTIuNjUxIDIuNjUtMy45NzktMy45Nzh6TTE4Ljg3NSAxOC44NzVIMjQuNXYzLjc1aC01LjYyNXpNMzAuMTI1IDcuNjI1aDMuNzV2NS42MjVoLTMuNzV6Ii8+PGcgZmlsbD0iI0ZGREEyRCI+PHBhdGggZD0iTTAgMTguODc1aDcuNjI1djMuNzVIMHpNNi41ODUgMTQuODFsLTUuNzUtMy43NSAyLjA4LTMuMTIgNS43NSAzLjc1ek0yLjkxNSAzMy41NmwtMi4wOC0zLjEyIDUuNzUtMy43NSAyLjA4IDMuMTJ6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGREJGMDAiIGQ9Ik01Ni4zNzUgMTguODc1SDY0djMuNzVoLTcuNjI1ek02MS4wODUgMzMuNTZsLTUuNzUtMy43NSAyLjA4LTMuMTIgNS43NSAzLjc1ek01Ny40MTUgMTQuODFsLTIuMDgtMy4xMiA1Ljc1LTMuNzUgMi4wOCAzLjEyeiIvPjxwYXRoIGZpbGw9IiNGRjkxMDAiIGQ9Ik0zMiA3LjYyNWgxLjg3NXY1LjYyNUgzMnpNMzIgMjguMjVoMS44NzV2NS42MjVIMzJ6Ii8+PHBhdGggZmlsbD0iIzMzMzYzNyIgZD0iTTMyIDQ1LjEyNWgxMy4xMjV2My43NUgzMnoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNMzIgMTEuMzc1Yy01LjE3NSAwLTkuMzc1IDQuMi05LjM3NSA5LjM3NXM0LjIgOS4zNzUgOS4zNzUgOS4zNzUgOS4zNzUtNC4yIDkuMzc1LTkuMzc1LTQuMi05LjM3NS05LjM3NS05LjM3NXoiLz48cGF0aCBmaWxsPSIjRkY5MTAwIiBkPSJNMzIgMzAuMTI1di0xOC43NWM1LjE3NSAwIDkuMzc1IDQuMiA5LjM3NSA5LjM3NXMtNC4yIDkuMzc1LTkuMzc1IDkuMzc1eiIvPjxwYXRoIGZpbGw9IiNGRkRBMkQiIGQ9Ik0zMC4xMjUgMTguODc1aDMuNzV2My43NWgtMy43NXoiLz48cGF0aCBmaWxsPSIjRkRCRjAwIiBkPSJNMzIgMTguODc1aDEuODc1djMuNzVIMzJ6Ii8+PC9nPjwvc3ZnPg==\");\n\n//# sourceURL=webpack:///./images/icon-karma.svg?");

/***/ }),

/***/ "./images/icon-supervisor.svg":
/*!************************************!*\
  !*** ./images/icon-supervisor.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzY3NkU3NCIgZD0iTTU2Ljg0MiA3LjE1OGMtOS41MjYtOS41NjMtMjQuOTAyLTkuNTI1LTM0LjQyOCAwLTguMDI1IDguMDI2LTkuNDUgMjAuNDQtMy41MjUgMzAuMDAzbC0yLjUxMyAyLjU1LTEuMzU2IDYuMTQ0IDQuMjE0IDQuMjE0IDUuMDkzLTIuNDA4IDIuNTEyLTIuNTVhMjQuMjU0IDI0LjI1NCAwIDAwMzAuMDAzLTMuNTI1YzkuNTYzLTkuNTI2IDkuNTI1LTI0LjkwMiAwLTM0LjQyOHoiLz48cGF0aCBmaWxsPSIjNDc0RjU0IiBkPSJNMjQuMzI3IDQ3LjY2MWwyLjUxMi0yLjU1YTI0LjI1NCAyNC4yNTQgMCAwMDMwLjAwMy0zLjUyNWM5LjU2My05LjUyNiA5LjUyNS0yNC45MDIgMC0zNC40MjhsLTQwLjI2IDQwLjI2IDIuNjUyIDIuNjUxIDUuMDkzLTIuNDA4eiIvPjxwYXRoIGZpbGw9IiM2NEUxREMiIGQ9Ik01NC4yMTMgOS43ODdhMjAuNTYgMjAuNTYgMCAwMC0xNC41ODUtNi4wNDFDMjguMjM2IDMuNzQ2IDE5IDEyLjk4IDE5IDI0LjM3MmEyMC41NjQgMjAuNTY0IDAgMDA2LjA0MSAxNC41ODYgMjAuNTY0IDIwLjU2NCAwIDAwMTQuNTg2IDYuMDRjMTEuMzkyIDAgMjAuNjI2LTkuMjM0IDIwLjYyNi0yMC42MjZhMjAuNTYgMjAuNTYgMCAwMC02LjA0MS0xNC41ODV6Ii8+PHBhdGggZmlsbD0iIzAwQzhDOCIgZD0iTTYwLjI1NCAyNC4zNzJhMjAuNTYgMjAuNTYgMCAwMC02LjA0MS0xNC41ODVsLTI5LjE3IDI5LjE3QTIwLjU2NCAyMC41NjQgMCAwMDM5LjYyNyA0NWMxMS4zOTIgMCAyMC42MjYtOS4yMzUgMjAuNjI2LTIwLjYyN3oiLz48cGF0aCBmaWxsPSIjRUZFRkY0IiBkPSJNNTYuMjM5IDIzLjQxYy0uMTg0LS4zMDctMi45OC00LjkxNC03LjI4MS04LjM2OC0yLjYzLTIuMTEzLTUuODIyLTMuNzk2LTkuMzMtMy43OTYtOS4yNDIgMC0xNi4zMTQgMTEuNjY5LTE2LjYxIDEyLjE2NWwtLjU3Ni45NjEuNTc1Ljk2MWMuMTg0LjMwOSAyLjk4IDQuOTE2IDcuMjggOC4zNyAyLjYzMSAyLjExMiA1LjgyMyAzLjc5NSA5LjMzIDMuNzk1IDkuMjQzIDAgMTYuMzE1LTExLjY2OCAxNi42MTItMTIuMTY1bC41NzQtLjk2LS41NzQtLjk2MnoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNNTYuMjM5IDI1LjMzM2wuNTc0LS45Ni0uNTc0LS45NjJjLS4xODQtLjMwOC0yLjk4LTQuOTE1LTcuMjgxLTguMzY5bC0xOC42NiAxOC42NmMyLjYzIDIuMTEzIDUuODIyIDMuNzk2IDkuMzMgMy43OTYgOS4yNDIgMCAxNi4zMTQtMTEuNjY4IDE2LjYxLTEyLjE2NXoiLz48cGF0aCBmaWxsPSIjNjRFMURDIiBkPSJNNDMuNjA0IDIwLjM5NmE1LjYwNyA1LjYwNyAwIDAwLTMuOTc2LTEuNjUgNS42MzIgNS42MzIgMCAwMC01LjYyNiA1LjYyNmMwIDEuNTUxLjYzMSAyLjk1OCAxLjY1IDMuOTc2YTUuNjA5IDUuNjA5IDAgMDAzLjk3NiAxLjY1IDUuNjMyIDUuNjMyIDAgMDA1LjYyNS01LjYyNmMwLTEuNTUtLjYzLTIuOTU3LTEuNjQ5LTMuOTc2eiIvPjxwYXRoIGZpbGw9IiMwMEM4QzgiIGQ9Ik00NS4yNTMgMjQuMzcyYzAtMS41NS0uNjMtMi45NTctMS42NDktMy45NzZsLTcuOTUyIDcuOTUyYTUuNjA4IDUuNjA4IDAgMDAzLjk3NiAxLjY1IDUuNjMyIDUuNjMyIDAgMDA1LjYyNS01LjYyNnoiLz48cGF0aCBmaWxsPSIjNjc2RTc0IiBkPSJNNDAuOTU0IDIzLjA0NmExLjg3NiAxLjg3NiAwIDEwLTEuMzI2IDMuMiAxLjg3NiAxLjg3NiAwIDAwMS4zMjYtMy4yeiIvPjxwYXRoIGZpbGw9IiM0NzRGNTQiIGQ9Ik00MS41MDMgMjQuMzcyYzAtLjUxNy0uMjEtLjk4Ni0uNTUtMS4zMjZsLTIuNjUgMi42NTJhMS44NzYgMS44NzYgMCAwMDMuMi0xLjMyNnoiLz48cGF0aCBmaWxsPSIjNTc1QzYwIiBkPSJNMjAuMzMzIDQzLjY2N2wtMy45NTctMy45NTdMMCA1Ni4wNDlsMy45NzUgMy45NzZMNy45NTEgNjRsMTYuMzc2LTE2LjMzOXoiLz48cGF0aCBmaWxsPSIjMzMzNjM3IiBkPSJNMjQuMzI3IDQ3LjY2MWwtMy45OTQtMy45OTRMMy45NzUgNjAuMDI1IDcuOTUxIDY0eiIvPjwvZz48L3N2Zz4=\");\n\n//# sourceURL=webpack:///./images/icon-supervisor.svg?");

/***/ }),

/***/ "./images/icon-team-builder.svg":
/*!**************************************!*\
  !*** ./images/icon-team-builder.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0VGRUZGNCIgZD0iTTY0IDE0LjQ1NHY0MS43ODhIMFYxNC40NTRsMy43NS0zLjc4N2g1Ni41eiIvPjxwYXRoIGZpbGw9IiNEQURBRTUiIGQ9Ik02NCAxNC40NTR2NDEuNzg4SDMyVjEwLjY2N2gyOC4yNXoiLz48cGF0aCBmaWxsPSIjNDc0RjU0IiBkPSJNMCAwaDY0djE1LjUxNUgweiIvPjxwYXRoIGZpbGw9IiMzMjM5M0YiIGQ9Ik0zMiAwaDMydjE1LjUxNUgzMnoiLz48ZyBmaWxsPSIjRkY2MzdCIj48cGF0aCBkPSJNNy43NTggNS44MThoMy42ODV2My44NzlINy43NTh6TTE1LjEyOCA1LjgxOGgzLjY4NXYzLjg3OWgtMy42ODV6TTIyLjQ5NyA1LjgxOGgzLjY4NXYzLjg3OWgtMy42ODV6Ii8+PC9nPjxwYXRoIGZpbGw9IiNGRjYzN0IiIGQ9Ik00NS41NzYgNDIuMjQ1VjY0SDM0LjM1NXYtMy43MWgtMy43NFY2NEgxOS4zOTRWNDIuMjQ1bDExLjM3LTkuMjc1aDMuMTA1eiIvPjxwYXRoIGZpbGw9IiNEQURBRTUiIGQ9Ik0xMS42MzYgMjIuMzAzaDQxLjY5N3YzLjg3OUgxMS42MzZ6Ii8+PHBhdGggZmlsbD0iI0M5QzlEMyIgZD0iTTMyIDIyLjMwM2gyMC4zNjR2My44NzlIMzJ6Ii8+PHBhdGggZmlsbD0iI0U2Mzk1MCIgZD0iTTQ1LjU3NiA0Mi4yNDVWNjRIMzMuOTM5di0zLjcxSDMyVjMyLjk3aDEuNDM1eiIvPjxwYXRoIGZpbGw9IiNFRkVGRjQiIGQ9Ik0zMC4wNjEgNDUuNTc2aDMuODc4djMuODc5aC0zLjg3OHoiLz48cGF0aCBmaWxsPSIjREFEQUU1IiBkPSJNMzIgNDUuNTc2aDEuOTM5djMuODc5SDMyeiIvPjxwYXRoIGZpbGw9IiM2NzZFNzQiIGQ9Ik01MC40MjQgNDUuNzc5bC0yLjQ1MiAyLjcwNi0xNS40ODctMTMuNTI2LTE1LjQ4OCAxMy41MjYtMi40NTItMi43MDYgMTcuOTQtMTUuNzE4eiIvPjxwYXRoIGZpbGw9IiM0NzRGNTQiIGQ9Ik0zMiAzMC4wNjFsMTguNDI0IDE1LjcxOC0yLjUxOCAyLjcwNkwzMiAzNC45NTl6Ii8+PC9nPjwvc3ZnPg==\");\n\n//# sourceURL=webpack:///./images/icon-team-builder.svg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".attribution {\\n  font-size: 11px;\\n  text-align: center;\\n}\\n.attribution a {\\n  color: #3e52a3;\\n}\\nbody {\\n  margin: 0;\\n  font-size: 15px;\\n  font-family: 'Poppins';\\n}\\n.main-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.main-container .title {\\n  font-size: 1.5rem;\\n}\\n.main-container .title-single {\\n  font-weight: 200;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_icon_calculator_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon-calculator.svg */ \"./images/icon-calculator.svg\");\n/* harmony import */ var _images_icon_karma_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-karma.svg */ \"./images/icon-karma.svg\");\n/* harmony import */ var _images_icon_supervisor_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-supervisor.svg */ \"./images/icon-supervisor.svg\");\n/* harmony import */ var _images_icon_team_builder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon-team-builder.svg */ \"./images/icon-team-builder.svg\");\n\n\n\n\nconst style = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n// const calculator = require('../images/icon-calculator.svg');ç\nvar icon1 = document.querySelector('.card-icon.karma img')\nicon1.src = _images_icon_karma_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nconsole.log(icon1)\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ })

/******/ });