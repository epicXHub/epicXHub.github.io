self["webpackHotUpdate_N_E"]("pages/[name]",{

/***/ "./pages/[name]/index.js":
/*!*******************************!*\
  !*** ./pages/[name]/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ category; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_epicX_Documents_testnext_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _data_variants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/variants */ "./data/variants.js");
/* harmony import */ var _components_Include__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Include */ "./components/Include.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\epicX\\Documents\\testnext\\pages\\[name]\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_epicX_Documents_testnext_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var __N_SSG = true;
function category(_ref) {
  _s();

  var _this = this;

  var configs = _ref.configs,
      items = _ref.items,
      _ref$err = _ref.err,
      err = _ref$err === void 0 ? false : _ref$err,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? "" : _ref$message;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(items),
      mState = _useState[0],
      setMState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(mState[0] !== null ? mState[0] : undefined),
      oState = _useState2[0],
      setOState = _useState2[1];

  var doSelect = function doSelect(name) {
    // Updating Selection list
    var nState = mState.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        selected: item.name === name ? true : false
      });
    });
    setMState(nState); // Updating catagory list

    var onState = nState.filter(function (item) {
      return item.name === name;
    });
    setOState(onState[0]);
  };

  if (err) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_6__.default, {
        title: "Server Error"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "errPanel",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Check your internet connection or Reload page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: oState !== undefined ? oState.name.charAt(0).toUpperCase() + oState.name.slice(1) : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sideBar ".concat(configs.acc),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.i, {
          initial: {
            y: 0,
            x: "-60%",
            left: "50%",
            rotate: "-20deg"
          },
          animate: {
            y: 20
          },
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          },
          className: configs.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "sideHead",
          children: router.query.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_5__.listVariants,
          initial: "hide",
          animate: "show",
          className: "list",
          children: mState.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              variants: _data_variants__WEBPACK_IMPORTED_MODULE_5__.listVariants,
              animate: item.selected ? "selected" : "show",
              className: "item ".concat(item.selected && "active"),
              onClick: function onClick() {
                return doSelect(item.name);
              },
              children: item.name
            }, item.name, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "subCategorySection",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h1, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_5__.headVariants,
          initial: "hide",
          animate: "show",
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_5__.headVariants,
          initial: "hide",
          animate: "show",
          className: "listCategory",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {
            children: oState !== undefined && oState.options.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                variants: _data_variants__WEBPACK_IMPORTED_MODULE_5__.headVariants,
                initial: "hide",
                animate: "show",
                exit: "hide",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: "".concat(router.asPath, "/").concat(oState.name, "/").concat(item.name),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "item ".concat(configs.acc),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "".concat(item.logo, " usetxt")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, _this)]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, _this)
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(category, "uDAiceWKzyHXlZbDo6aJnBmsyCo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5IiwiY29uZmlncyIsIml0ZW1zIiwiZXJyIiwibWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibVN0YXRlIiwic2V0TVN0YXRlIiwidW5kZWZpbmVkIiwib1N0YXRlIiwic2V0T1N0YXRlIiwiZG9TZWxlY3QiLCJuYW1lIiwiblN0YXRlIiwibWFwIiwiaXRlbSIsInNlbGVjdGVkIiwib25TdGF0ZSIsImZpbHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhY2MiLCJ5IiwieCIsImxlZnQiLCJyb3RhdGUiLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkdXJhdGlvbiIsImVhc2UiLCJsb2dvIiwicXVlcnkiLCJsaXN0VmFyaWFudHMiLCJoZWFkVmFyaWFudHMiLCJvcHRpb25zIiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BS1o7QUFBQTs7QUFBQTs7QUFBQSxNQUpEQyxPQUlDLFFBSkRBLE9BSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxzQkFGREMsR0FFQztBQUFBLE1BRkRBLEdBRUMseUJBRkssS0FFTDtBQUFBLDBCQUREQyxPQUNDO0FBQUEsTUFEREEsT0FDQyw2QkFEUyxFQUNUO0FBQ0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEQyxrQkFFMkJDLCtDQUFRLENBQUNMLEtBQUQsQ0FGbkM7QUFBQSxNQUVNTSxNQUZOO0FBQUEsTUFFY0MsU0FGZDs7QUFBQSxtQkFHMkJGLCtDQUFRLENBQ2xDQyxNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsSUFBZCxHQUFxQkEsTUFBTSxDQUFDLENBQUQsQ0FBM0IsR0FB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QUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUEsZ0NBQUlqQixJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBLHFCQUFVRyxJQUFJLENBQUNILElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixpQkFDT0csSUFBSSxDQUFDSCxJQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGlCO0FBQUEsYUFBbkI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RUQ7O0dBckh1QmQsUTtVQU1QTSxrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0uNmVjYTM4M2QxNGQ0MmUxMjU4M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IGxpc3RWYXJpYW50cywgaGVhZFZhcmlhbnRzIH0gZnJvbSBcIi4uLy4uL2RhdGEvdmFyaWFudHNcIjtcclxuaW1wb3J0IEluY2x1ZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5jbHVkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2F0ZWdvcnkoe1xyXG4gIGNvbmZpZ3MsXHJcbiAgaXRlbXMsXHJcbiAgZXJyID0gZmFsc2UsXHJcbiAgbWVzc2FnZSA9IFwiXCIsXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbVN0YXRlLCBzZXRNU3RhdGVdID0gdXNlU3RhdGUoaXRlbXMpO1xyXG4gIGNvbnN0IFtvU3RhdGUsIHNldE9TdGF0ZV0gPSB1c2VTdGF0ZShcclxuICAgIG1TdGF0ZVswXSAhPT0gbnVsbCA/IG1TdGF0ZVswXSA6IHVuZGVmaW5lZFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRvU2VsZWN0ID0gKG5hbWUpID0+IHtcclxuICAgIC8vIFVwZGF0aW5nIFNlbGVjdGlvbiBsaXN0XHJcbiAgICBjb25zdCBuU3RhdGUgPSBtU3RhdGUubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAuLi5pdGVtLFxyXG4gICAgICBzZWxlY3RlZDogaXRlbS5uYW1lID09PSBuYW1lID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgfSkpO1xyXG4gICAgc2V0TVN0YXRlKG5TdGF0ZSk7XHJcblxyXG4gICAgLy8gVXBkYXRpbmcgY2F0YWdvcnkgbGlzdFxyXG4gICAgY29uc3Qgb25TdGF0ZSA9IG5TdGF0ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XHJcbiAgICBzZXRPU3RhdGUob25TdGF0ZVswXSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGVycikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SW5jbHVkZSB0aXRsZT1cIlNlcnZlciBFcnJvclwiIC8+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVyclBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxoMT57bWVzc2FnZX08L2gxPlxyXG4gICAgICAgICAgICA8cD5DaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24gb3IgUmVsb2FkIHBhZ2U8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SW5jbHVkZVxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIG9TdGF0ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gb1N0YXRlLm5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBvU3RhdGUubmFtZS5zbGljZSgxKVxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVCYXIgJHtjb25maWdzLmFjY31gfT5cclxuICAgICAgICAgIDxtb3Rpb24uaVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDAsIHg6IFwiLTYwJVwiLCBsZWZ0OiBcIjUwJVwiLCByb3RhdGU6IFwiLTIwZGVnXCIgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAyMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcInJldmVyc2VcIixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbmZpZ3MubG9nb31cclxuICAgICAgICAgID48L21vdGlvbi5pPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2lkZUhlYWRcIj57cm91dGVyLnF1ZXJ5Lm5hbWV9PC9wPlxyXG5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0VmFyaWFudHN9XHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRlXCJcclxuICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21TdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2xpc3RWYXJpYW50c31cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17aXRlbS5zZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwic2hvd1wifVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSAke2l0ZW0uc2VsZWN0ZWQgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG9TZWxlY3QoaXRlbS5uYW1lKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3ViQ2F0ZWdvcnlTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8bW90aW9uLmgxIHZhcmlhbnRzPXtoZWFkVmFyaWFudHN9IGluaXRpYWw9e1wiaGlkZVwifSBhbmltYXRlPXtcInNob3dcIn0+XHJcbiAgICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgICA8L21vdGlvbi5oMT5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtoZWFkVmFyaWFudHN9XHJcbiAgICAgICAgICAgIGluaXRpYWw9e1wiaGlkZVwifVxyXG4gICAgICAgICAgICBhbmltYXRlPXtcInNob3dcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdENhdGVnb3J5XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAgICB7b1N0YXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIG9TdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtoZWFkVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgICAgICAgICBleGl0PVwiaGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtyb3V0ZXIuYXNQYXRofS8ke29TdGF0ZS5uYW1lfS8ke2l0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17YGl0ZW0gJHtjb25maWdzLmFjY31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtpdGVtLmxvZ299IHVzZXR4dGB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lcGljWDY3L21kX2Jsb2dzL21haW4vY2F0ZWdvcmllcy8ke2NvbnRleHQucGFyYW1zLm5hbWV9Lmpzb25gO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGxldCBjSXRlbXMgPSBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbSwgc2VsZWN0ZWQ6IGZhbHNlIH0pKTtcclxuXHJcbiAgICBpZiAoY0l0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY0l0ZW1zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBjb25maWdzOiBkYXRhLmNvbmZpZ3MsIGl0ZW1zOiBjSXRlbXMgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBlcnI6IHRydWUsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZXBpY1g2Ny9tZF9ibG9ncy9tYWluL0RCLmpzb25gO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IG5hbWVzID0gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICBjb25zdCBwYXRocyA9IG5hbWVzLm1hcCgobmFtZSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=