"use strict";
(() => {
var exports = {};
exports.id = "pages/result";
exports.ids = ["pages/result"];
exports.modules = {

/***/ "./components/ViewExam.js":
/*!********************************!*\
  !*** ./components/ViewExam.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewQuestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewQuestion */ "./components/ViewQuestion.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\LENOVO\\Documents\\GitHub\\multiple-choice\\frontend\\exam-bank\\components\\ViewExam.js";



function ViewExam() {
  const arr = [{
    question: "What is your name?",
    chosenAnswer: "B",
    correctAnswer: "A",
    answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "]
  }, {
    question: "How old are you?",
    chosenAnswer: "C",
    correctAnswer: "C",
    answers: ["12", "18", "20", "22"]
  }, {
    question: "Where are you live?",
    chosenAnswer: "C",
    correctAnswer: "B",
    answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"]
  }, {
    question: "Which major are you studying? ",
    chosenAnswer: "D",
    correctAnswer: "D",
    answers: ["Computer Sience", "Information Systems", "Information Technology", "Software Engineering"]
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: arr.map((e, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewQuestion__WEBPACK_IMPORTED_MODULE_0__.default, {
      index: i,
      question: e.question,
      chosenAnswer: e.chosenAnswer,
      correctAnswer: e.correctAnswer,
      answers: e.answers
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewExam);

/***/ }),

/***/ "./components/ViewQuestion.js":
/*!************************************!*\
  !*** ./components/ViewQuestion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\LENOVO\\Documents\\GitHub\\multiple-choice\\frontend\\exam-bank\\components\\ViewQuestion.js";


function ViewQuestion({
  index,
  question,
  chosenAnswer,
  correctAnswer,
  answers
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "pb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "pl-20",
      children: ["Cau ", index + 1, ": ", question]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-20 text-center ",
        children: correctAnswer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-80",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: `p-1 w-full ${chosenAnswer === "A" ? chosenAnswer === correctAnswer ? "bg-green-300" : "bg-red-300" : null} `,
            children: ["A. ", answers[0]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: `p-1 w-full ${chosenAnswer === "B" ? chosenAnswer === correctAnswer ? "bg-green-300" : "bg-red-300" : null} `,
            children: ["B. ", answers[1]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: `p-1 w-full ${chosenAnswer === "C" ? chosenAnswer === correctAnswer ? "bg-green-300" : "bg-red-300" : null} `,
            children: ["C. ", answers[2]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: `p-1 w-full ${chosenAnswer === "D" ? chosenAnswer === correctAnswer ? "bg-green-300" : "bg-red-300" : null} `,
            children: ["D. ", answers[3]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewQuestion);

/***/ }),

/***/ "./pages/result.js":
/*!*************************!*\
  !*** ./pages/result.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ViewExam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ViewExam */ "./components/ViewExam.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LENOVO\\Documents\\GitHub\\multiple-choice\\frontend\\exam-bank\\pages\\result.js";

 // Done form: question-answer-rightAnswer - 14-10-2021


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Result"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ViewExam__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/result.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmVzdWx0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ25CLFFBQU1DLEdBQUcsR0FBRyxDQUNYO0FBQ0NDLElBQUFBLFFBQVEsRUFBRSxvQkFEWDtBQUVDQyxJQUFBQSxZQUFZLEVBQUUsR0FGZjtBQUdDQyxJQUFBQSxhQUFhLEVBQUUsR0FIaEI7QUFJQ0MsSUFBQUEsT0FBTyxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFqQixFQUErQixVQUEvQixFQUEyQyxhQUEzQztBQUpWLEdBRFcsRUFPWDtBQUNDSCxJQUFBQSxRQUFRLEVBQUUsa0JBRFg7QUFFQ0MsSUFBQUEsWUFBWSxFQUFFLEdBRmY7QUFHQ0MsSUFBQUEsYUFBYSxFQUFFLEdBSGhCO0FBSUNDLElBQUFBLE9BQU8sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUpWLEdBUFcsRUFhWDtBQUNDSCxJQUFBQSxRQUFRLEVBQUUscUJBRFg7QUFFQ0MsSUFBQUEsWUFBWSxFQUFFLEdBRmY7QUFHQ0MsSUFBQUEsYUFBYSxFQUFFLEdBSGhCO0FBSUNDLElBQUFBLE9BQU8sRUFBRSxDQUFDLGlCQUFELEVBQW9CLFVBQXBCLEVBQWdDLFlBQWhDLEVBQThDLFdBQTlDO0FBSlYsR0FiVyxFQW1CWDtBQUNDSCxJQUFBQSxRQUFRLEVBQUUsZ0NBRFg7QUFFQ0MsSUFBQUEsWUFBWSxFQUFFLEdBRmY7QUFHQ0MsSUFBQUEsYUFBYSxFQUFFLEdBSGhCO0FBSUNDLElBQUFBLE9BQU8sRUFBRSxDQUNSLGlCQURRLEVBRVIscUJBRlEsRUFHUix3QkFIUSxFQUlSLHNCQUpRO0FBSlYsR0FuQlcsQ0FBWjtBQWdDQSxzQkFDQztBQUFBLGNBQ0VKLEdBQUcsQ0FBQ0ssR0FBSixDQUFRLENBQUNDLENBQUQsRUFBSUMsQ0FBSixrQkFDUiw4REFBQyxrREFBRDtBQUVDLFdBQUssRUFBRUEsQ0FGUjtBQUdDLGNBQVEsRUFBRUQsQ0FBQyxDQUFDTCxRQUhiO0FBSUMsa0JBQVksRUFBRUssQ0FBQyxDQUFDSixZQUpqQjtBQUtDLG1CQUFhLEVBQUVJLENBQUMsQ0FBQ0gsYUFMbEI7QUFNQyxhQUFPLEVBQUVHLENBQUMsQ0FBQ0Y7QUFOWixPQUNNRyxDQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWNBOztBQUVELGlFQUFlUixRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBLFNBQVNELFlBQVQsQ0FBc0I7QUFDckJVLEVBQUFBLEtBRHFCO0FBRXJCUCxFQUFBQSxRQUZxQjtBQUdyQkMsRUFBQUEsWUFIcUI7QUFJckJDLEVBQUFBLGFBSnFCO0FBS3JCQyxFQUFBQTtBQUxxQixDQUF0QixFQU1HO0FBQ0Ysc0JBQ0M7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLE9BQWQ7QUFBQSx5QkFDTUksS0FBSyxHQUFHLENBRGQsUUFDbUJQLFFBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBSUM7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxrQkFBb0NFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUcsY0FDWEQsWUFBWSxLQUFLLEdBQWpCLEdBQ0dBLFlBQVksS0FBS0MsYUFBakIsR0FDQyxjQURELEdBRUMsWUFISixHQUlHLElBQ0gsR0FQRjtBQUFBLDhCQVNLQyxPQUFPLENBQUMsQ0FBRCxDQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVlDO0FBQ0MscUJBQVMsRUFBRyxjQUNYRixZQUFZLEtBQUssR0FBakIsR0FDR0EsWUFBWSxLQUFLQyxhQUFqQixHQUNDLGNBREQsR0FFQyxZQUhKLEdBSUcsSUFDSCxHQVBGO0FBQUEsOEJBU0tDLE9BQU8sQ0FBQyxDQUFELENBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpELGVBdUJDO0FBQ0MscUJBQVMsRUFBRyxjQUNYRixZQUFZLEtBQUssR0FBakIsR0FDR0EsWUFBWSxLQUFLQyxhQUFqQixHQUNDLGNBREQsR0FFQyxZQUhKLEdBSUcsSUFDSCxHQVBGO0FBQUEsOEJBU0tDLE9BQU8sQ0FBQyxDQUFELENBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZCRCxlQWtDQztBQUNDLHFCQUFTLEVBQUcsY0FDWEYsWUFBWSxLQUFLLEdBQWpCLEdBQ0dBLFlBQVksS0FBS0MsYUFBakIsR0FDQyxjQURELEdBRUMsWUFISixHQUlHLElBQ0gsR0FQRjtBQUFBLDhCQVNLQyxPQUFPLENBQUMsQ0FBRCxDQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMERBOztBQUVELGlFQUFlTixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtDQUdBOzs7QUFFZSxTQUFTWSxJQUFULEdBQWdCO0FBQzlCLHNCQUNDO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFPQyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFXQTs7Ozs7Ozs7OztBQ2pCRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS8uL2NvbXBvbmVudHMvVmlld0V4YW0uanMiLCJ3ZWJwYWNrOi8vZm9ybS8uL2NvbXBvbmVudHMvVmlld1F1ZXN0aW9uLmpzIiwid2VicGFjazovL2Zvcm0vLi9wYWdlcy9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vZm9ybS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zvcm0vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld1F1ZXN0aW9uIGZyb20gXCIuL1ZpZXdRdWVzdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gVmlld0V4YW0oKSB7XHJcblx0Y29uc3QgYXJyID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRxdWVzdGlvbjogXCJXaGF0IGlzIHlvdXIgbmFtZT9cIixcclxuXHRcdFx0Y2hvc2VuQW5zd2VyOiBcIkJcIixcclxuXHRcdFx0Y29ycmVjdEFuc3dlcjogXCJBXCIsXHJcblx0XHRcdGFuc3dlcnM6IFtcIk5ndXnhu4VuIFbEg24gQVwiLCBcIlBo4bqhbSBUaOG7iyBCXCIsIFwiTMOqIFbEg24gQ1wiLCBcIlRy4bqnbiBUaOG7iyBEIFwiXSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHF1ZXN0aW9uOiBcIkhvdyBvbGQgYXJlIHlvdT9cIixcclxuXHRcdFx0Y2hvc2VuQW5zd2VyOiBcIkNcIixcclxuXHRcdFx0Y29ycmVjdEFuc3dlcjogXCJDXCIsXHJcblx0XHRcdGFuc3dlcnM6IFtcIjEyXCIsIFwiMThcIiwgXCIyMFwiLCBcIjIyXCJdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cXVlc3Rpb246IFwiV2hlcmUgYXJlIHlvdSBsaXZlP1wiLFxyXG5cdFx0XHRjaG9zZW5BbnN3ZXI6IFwiQ1wiLFxyXG5cdFx0XHRjb3JyZWN0QW5zd2VyOiBcIkJcIixcclxuXHRcdFx0YW5zd2VyczogW1wiVFAuIEjhu5MgQ2jDrSBNaW5oXCIsIFwixJDhu5NuZyBOYWlcIiwgXCJCw6xuaCBExrDGoW5nXCIsIFwiS2jDoW5oIEhvw6BcIl0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRxdWVzdGlvbjogXCJXaGljaCBtYWpvciBhcmUgeW91IHN0dWR5aW5nPyBcIixcclxuXHRcdFx0Y2hvc2VuQW5zd2VyOiBcIkRcIixcclxuXHRcdFx0Y29ycmVjdEFuc3dlcjogXCJEXCIsXHJcblx0XHRcdGFuc3dlcnM6IFtcclxuXHRcdFx0XHRcIkNvbXB1dGVyIFNpZW5jZVwiLFxyXG5cdFx0XHRcdFwiSW5mb3JtYXRpb24gU3lzdGVtc1wiLFxyXG5cdFx0XHRcdFwiSW5mb3JtYXRpb24gVGVjaG5vbG9neVwiLFxyXG5cdFx0XHRcdFwiU29mdHdhcmUgRW5naW5lZXJpbmdcIixcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHthcnIubWFwKChlLCBpKSA9PiAoXHJcblx0XHRcdFx0PFZpZXdRdWVzdGlvblxyXG5cdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0aW5kZXg9e2l9XHJcblx0XHRcdFx0XHRxdWVzdGlvbj17ZS5xdWVzdGlvbn1cclxuXHRcdFx0XHRcdGNob3NlbkFuc3dlcj17ZS5jaG9zZW5BbnN3ZXJ9XHJcblx0XHRcdFx0XHRjb3JyZWN0QW5zd2VyPXtlLmNvcnJlY3RBbnN3ZXJ9XHJcblx0XHRcdFx0XHRhbnN3ZXJzPXtlLmFuc3dlcnN9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3RXhhbTtcclxuIiwiZnVuY3Rpb24gVmlld1F1ZXN0aW9uKHtcclxuXHRpbmRleCxcclxuXHRxdWVzdGlvbixcclxuXHRjaG9zZW5BbnN3ZXIsXHJcblx0Y29ycmVjdEFuc3dlcixcclxuXHRhbnN3ZXJzLFxyXG59KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGItMlwiPlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwicGwtMjBcIj5cclxuXHRcdFx0XHRDYXUge2luZGV4ICsgMX06IHtxdWVzdGlvbn1cclxuXHRcdFx0PC9oMj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0yMCB0ZXh0LWNlbnRlciBcIj57Y29ycmVjdEFuc3dlcn08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTgwXCI+XHJcblx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcC0xIHctZnVsbCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hvc2VuQW5zd2VyID09PSBcIkFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGNob3NlbkFuc3dlciA9PT0gY29ycmVjdEFuc3dlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJiZy1ncmVlbi0zMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJiZy1yZWQtMzAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBudWxsXHJcblx0XHRcdFx0XHRcdFx0fSBgfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0QS4ge2Fuc3dlcnNbMF19XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BwLTEgdy1mdWxsICR7XHJcblx0XHRcdFx0XHRcdFx0XHRjaG9zZW5BbnN3ZXIgPT09IFwiQlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8gY2hvc2VuQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBcImJnLWdyZWVuLTMwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcImJnLXJlZC0zMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IG51bGxcclxuXHRcdFx0XHRcdFx0XHR9IGB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRCLiB7YW5zd2Vyc1sxXX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHAtMSB3LWZ1bGwgJHtcclxuXHRcdFx0XHRcdFx0XHRcdGNob3NlbkFuc3dlciA9PT0gXCJDXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PyBjaG9zZW5BbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiYmctZ3JlZW4tMzAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwiYmctcmVkLTMwMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDogbnVsbFxyXG5cdFx0XHRcdFx0XHRcdH0gYH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEMuIHthbnN3ZXJzWzJdfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcC0xIHctZnVsbCAke1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hvc2VuQW5zd2VyID09PSBcIkRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGNob3NlbkFuc3dlciA9PT0gY29ycmVjdEFuc3dlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJiZy1ncmVlbi0zMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogXCJiZy1yZWQtMzAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBudWxsXHJcblx0XHRcdFx0XHRcdFx0fSBgfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0RC4ge2Fuc3dlcnNbM119XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdRdWVzdGlvbjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgVmlld0V4YW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld0V4YW1cIjtcclxuXHJcbi8vIERvbmUgZm9ybTogcXVlc3Rpb24tYW5zd2VyLXJpZ2h0QW5zd2VyIC0gMTQtMTAtMjAyMVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5SZXN1bHQ8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxWaWV3RXhhbSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJWaWV3UXVlc3Rpb24iLCJWaWV3RXhhbSIsImFyciIsInF1ZXN0aW9uIiwiY2hvc2VuQW5zd2VyIiwiY29ycmVjdEFuc3dlciIsImFuc3dlcnMiLCJtYXAiLCJlIiwiaSIsImluZGV4IiwiSGVhZCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9