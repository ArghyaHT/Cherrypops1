"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/orderReducer.js":
/*!**********************************!*\
  !*** ./reducers/orderReducer.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orderpaymentDetailReducer\": function() { return /* binding */ orderpaymentDetailReducer; },\n/* harmony export */   \"placeOrderReducer\": function() { return /* binding */ placeOrderReducer; }\n/* harmony export */ });\n/* harmony import */ var _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/orderConstant */ \"./constant/orderConstant.js\");\n\nconst placeOrderReducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.PLACE_ORDER_FAIL:\n            return {\n                loading: true\n            };\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.PLACE_ORDER_SUCCESS:\n            return {\n                loading: false,\n                ...action.payload\n            };\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.PLACE_ORDER_FAIL:\n            return {\n                loading: false,\n                error: action.payload\n            };\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.PLACE_ORDER_RESET:\n            return {};\n        default:\n            return state;\n    }\n};\nconst orderpaymentDetailReducer = function() {\n    let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.ORDER_PAYMENT_DETAIL_REQ:\n            return {\n                loading: true\n            };\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.ORDER_PAYMENT_DETAIL_SUCCESS:\n            return {\n                loading: false,\n                ...action.payload\n            };\n        case _constant_orderConstant__WEBPACK_IMPORTED_MODULE_0__.ORDER_PAYMENT_DETAIL_FAIL:\n            return {\n                loading: false,\n                error: action.payload\n            };\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9vcmRlclJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdMO0FBRWpMLE1BQU1NLG9CQUFvQixXQUFxQjtRQUFwQkMseUVBQU0sQ0FBQyxHQUFFQztJQUN2QyxPQUFPQSxPQUFPQyxJQUFJO1FBQ2QsS0FBS04scUVBQWdCQTtZQUNqQixPQUFPO2dCQUFDTyxTQUFRLElBQUk7WUFBQTtRQUN4QixLQUFLTCx3RUFBbUJBO1lBQ3BCLE9BQU87Z0JBQ0hLLFNBQVEsS0FBSztnQkFDYixHQUFHRixPQUFPRyxPQUFPO1lBQ3JCO1FBQ0osS0FBS1IscUVBQWdCQTtZQUNqQixPQUFPO2dCQUFDTyxTQUFRLEtBQUs7Z0JBQUNFLE9BQU1KLE9BQU9HLE9BQU87WUFBQTtRQUM5QyxLQUFLUCxzRUFBaUJBO1lBQ2xCLE9BQU8sQ0FBQztRQUNaO1lBQ0ksT0FBT0c7SUFDZjtBQUNKLEVBQUM7QUFFTSxNQUFNTSw0QkFBNEIsV0FBd0I7UUFBdkJOLHlFQUFRLENBQUMsR0FBR0M7SUFDbEQsT0FBT0EsT0FBT0MsSUFBSTtRQUNkLEtBQUtSLDZFQUF3QkE7WUFDekIsT0FBTztnQkFBQ1MsU0FBUSxJQUFJO1lBQUE7UUFDeEIsS0FBS1IsaUZBQTRCQTtZQUM3QixPQUFPO2dCQUFDUSxTQUFRLEtBQUs7Z0JBQUMsR0FBR0YsT0FBT0csT0FBTztZQUFBO1FBQzNDLEtBQUtYLDhFQUF5QkE7WUFDMUIsT0FBTztnQkFBQ1UsU0FBUSxLQUFLO2dCQUFDRSxPQUFNSixPQUFPRyxPQUFPO1lBQUE7UUFDOUM7WUFDSSxPQUFPSjtJQUNmO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9vcmRlclJlZHVjZXIuanM/YmEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPUkRFUl9QQVlNRU5UX0RFVEFJTF9GQUlMLCBPUkRFUl9QQVlNRU5UX0RFVEFJTF9SRVEsIE9SREVSX1BBWU1FTlRfREVUQUlMX1NVQ0NFU1MsIFBMQUNFX09SREVSX0ZBSUwsIFBMQUNFX09SREVSX1JFU0VULCBQTEFDRV9PUkRFUl9TVUNDRVNTIH0gZnJvbSBcIi4uL2NvbnN0YW50L29yZGVyQ29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGFjZU9yZGVyUmVkdWNlciA9IChzdGF0ZT17fSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBQTEFDRV9PUkRFUl9GQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4ge2xvYWRpbmc6dHJ1ZX1cclxuICAgICAgICBjYXNlIFBMQUNFX09SREVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUExBQ0VfT1JERVJfRkFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtsb2FkaW5nOmZhbHNlLGVycm9yOmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGNhc2UgUExBQ0VfT1JERVJfUkVTRVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7fVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJwYXltZW50RGV0YWlsUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBPUkRFUl9QQVlNRU5UX0RFVEFJTF9SRVE6XHJcbiAgICAgICAgICAgIHJldHVybiB7bG9hZGluZzp0cnVlfVxyXG4gICAgICAgIGNhc2UgT1JERVJfUEFZTUVOVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtsb2FkaW5nOmZhbHNlLC4uLmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGNhc2UgT1JERVJfUEFZTUVOVF9ERVRBSUxfRkFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtsb2FkaW5nOmZhbHNlLGVycm9yOmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk9SREVSX1BBWU1FTlRfREVUQUlMX0ZBSUwiLCJPUkRFUl9QQVlNRU5UX0RFVEFJTF9SRVEiLCJPUkRFUl9QQVlNRU5UX0RFVEFJTF9TVUNDRVNTIiwiUExBQ0VfT1JERVJfRkFJTCIsIlBMQUNFX09SREVSX1JFU0VUIiwiUExBQ0VfT1JERVJfU1VDQ0VTUyIsInBsYWNlT3JkZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsInBheWxvYWQiLCJlcnJvciIsIm9yZGVycGF5bWVudERldGFpbFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/orderReducer.js\n"));

/***/ })

});