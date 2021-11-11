(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LENOVO\\Documents\\GitHub\\multiple-choice\\frontend\\exam-bank\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_1__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./store/slices/answerSlice.js":
/*!*************************************!*\
  !*** ./store/slices/answerSlice.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initAnswers": () => (/* binding */ initAnswers),
/* harmony export */   "chooseAnswer": () => (/* binding */ chooseAnswer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const answer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "answers",
  initialState: [],
  reducers: {
    initAnswers: (state, action) => {
      return typeof action.payload == "number" ? state = new Array(action.payload).fill(null) : state = action.payload;
    },
    chooseAnswer: (state, action) => {
      const questionIndex = action.payload.index;
      state[questionIndex] = action.payload.value;
    }
  }
});
const {
  reducer,
  actions
} = answer;
const {
  initAnswers,
  chooseAnswer
} = actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_answerSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/answerSlice */ "./store/slices/answerSlice.js");


const rootReducer = {
  answers: _slices_answerSlice__WEBPACK_IMPORTED_MODULE_1__.default
};
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: rootReducer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0UsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3hDLHNCQUNDLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFSCxpREFBakI7QUFBQSwyQkFDQyw4REFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUEsTUFBTUksTUFBTSxHQUFHRCw2REFBVyxDQUFDO0FBQzFCRSxFQUFBQSxJQUFJLEVBQUUsU0FEb0I7QUFFMUJDLEVBQUFBLFlBQVksRUFBRSxFQUZZO0FBRzFCQyxFQUFBQSxRQUFRLEVBQUU7QUFDVEMsSUFBQUEsV0FBVyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMvQixhQUFPLE9BQU9BLE1BQU0sQ0FBQ0MsT0FBZCxJQUF5QixRQUF6QixHQUNIRixLQUFLLEdBQUcsSUFBSUcsS0FBSixDQUFVRixNQUFNLENBQUNDLE9BQWpCLEVBQTBCRSxJQUExQixDQUErQixJQUEvQixDQURMLEdBRUhKLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxPQUZuQjtBQUdBLEtBTFE7QUFNVEcsSUFBQUEsWUFBWSxFQUFFLENBQUNMLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNoQyxZQUFNSyxhQUFhLEdBQUdMLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxLQUFyQztBQUNBUCxNQUFBQSxLQUFLLENBQUNNLGFBQUQsQ0FBTCxHQUF1QkwsTUFBTSxDQUFDQyxPQUFQLENBQWVNLEtBQXRDO0FBQ0E7QUFUUTtBQUhnQixDQUFELENBQTFCO0FBZ0JBLE1BQU07QUFBRUMsRUFBQUEsT0FBRjtBQUFXQyxFQUFBQTtBQUFYLElBQXVCZixNQUE3QjtBQUNPLE1BQU07QUFBRUksRUFBQUEsV0FBRjtBQUFlTSxFQUFBQTtBQUFmLElBQWdDSyxPQUF0QztBQUNQLGlFQUFlRCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVBLE1BQU1JLFdBQVcsR0FBRztBQUNuQkMsRUFBQUEsT0FBTyxFQUFFRix3REFBYUE7QUFESCxDQUFwQjtBQUlBLE1BQU10QixLQUFLLEdBQUdxQixnRUFBYyxDQUFDO0FBQzVCRixFQUFBQSxPQUFPLEVBQUVJO0FBRG1CLENBQUQsQ0FBNUI7QUFJQSxpRUFBZXZCLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRVhBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9ybS8uL3N0b3JlL3NsaWNlcy9hbnN3ZXJTbGljZS5qcyIsIndlYnBhY2s6Ly9mb3JtLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9ybS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIndlYnBhY2s6Ly9mb3JtL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Zvcm0vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvcm0vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdDwvUHJvdmlkZXI+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgYW5zd2VyID0gY3JlYXRlU2xpY2Uoe1xyXG5cdG5hbWU6IFwiYW5zd2Vyc1wiLFxyXG5cdGluaXRpYWxTdGF0ZTogW10sXHJcblx0cmVkdWNlcnM6IHtcclxuXHRcdGluaXRBbnN3ZXJzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGFjdGlvbi5wYXlsb2FkID09IFwibnVtYmVyXCJcclxuXHRcdFx0XHQ/IChzdGF0ZSA9IG5ldyBBcnJheShhY3Rpb24ucGF5bG9hZCkuZmlsbChudWxsKSlcclxuXHRcdFx0XHQ6IChzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdH0sXHJcblx0XHRjaG9vc2VBbnN3ZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0XHRcdGNvbnN0IHF1ZXN0aW9uSW5kZXggPSBhY3Rpb24ucGF5bG9hZC5pbmRleDtcclxuXHRcdFx0c3RhdGVbcXVlc3Rpb25JbmRleF0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCB7IHJlZHVjZXIsIGFjdGlvbnMgfSA9IGFuc3dlcjtcclxuZXhwb3J0IGNvbnN0IHsgaW5pdEFuc3dlcnMsIGNob29zZUFuc3dlciB9ID0gYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYW5zd2VyUmVkdWNlciBmcm9tIFwiLi9zbGljZXMvYW5zd2VyU2xpY2VcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0ge1xyXG5cdGFuc3dlcnM6IGFuc3dlclJlZHVjZXIsXHJcbn07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuXHRyZWR1Y2VyOiByb290UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZVNsaWNlIiwiYW5zd2VyIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiaW5pdEFuc3dlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJBcnJheSIsImZpbGwiLCJjaG9vc2VBbnN3ZXIiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJ2YWx1ZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwiY29uZmlndXJlU3RvcmUiLCJhbnN3ZXJSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJhbnN3ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==