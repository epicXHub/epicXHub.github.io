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
      err = _ref$err === void 0 ? true : _ref$err,
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
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "errPanel",
          children: "Error Ocurred"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: oState !== undefined ? oState.name.charAt(0).toUpperCase() + oState.name.slice(1) : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "sideHead",
          children: router.query.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
              lineNumber: 71,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
          lineNumber: 84,
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
                      lineNumber: 105,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 25
                    }, _this)]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, _this)
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5IiwiY29uZmlncyIsIml0ZW1zIiwiZXJyIiwibWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibVN0YXRlIiwic2V0TVN0YXRlIiwidW5kZWZpbmVkIiwib1N0YXRlIiwic2V0T1N0YXRlIiwiZG9TZWxlY3QiLCJuYW1lIiwiblN0YXRlIiwibWFwIiwiaXRlbSIsInNlbGVjdGVkIiwib25TdGF0ZSIsImZpbHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhY2MiLCJ5IiwieCIsImxlZnQiLCJyb3RhdGUiLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkdXJhdGlvbiIsImVhc2UiLCJsb2dvIiwicXVlcnkiLCJsaXN0VmFyaWFudHMiLCJoZWFkVmFyaWFudHMiLCJvcHRpb25zIiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUNDLE9BQTRDLFFBQTVDQSxPQUE0QztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxzQkFBNUJDLEdBQTRCO0FBQUEsTUFBNUJBLEdBQTRCLHlCQUF0QixJQUFzQjtBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTtBQUM3RSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQ2RSxrQkFFakRDLCtDQUFRLENBQUNMLEtBQUQsQ0FGeUM7QUFBQSxNQUV0RU0sTUFGc0U7QUFBQSxNQUU5REMsU0FGOEQ7O0FBQUEsbUJBR2pERiwrQ0FBUSxDQUNsQ0MsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLElBQWQsR0FBcUJB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QUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBLHFCQUFVRyxJQUFJLENBQUNILElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixpQkFDT0csSUFBSSxDQUFDSCxJQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGlCO0FBQUEsYUFBbkI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4RUQ7O0dBN0d1QmQsUTtVQUNQTSxrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0uYWE4MjZiZTMzZmQyZjYwYTIwNmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IGxpc3RWYXJpYW50cywgaGVhZFZhcmlhbnRzIH0gZnJvbSBcIi4uLy4uL2RhdGEvdmFyaWFudHNcIjtcclxuaW1wb3J0IEluY2x1ZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5jbHVkZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2F0ZWdvcnkoeyBjb25maWdzLCBpdGVtcywgZXJyID0gdHJ1ZSwgbWVzc2FnZSA9IFwiXCIgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttU3RhdGUsIHNldE1TdGF0ZV0gPSB1c2VTdGF0ZShpdGVtcyk7XHJcbiAgY29uc3QgW29TdGF0ZSwgc2V0T1N0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgbVN0YXRlWzBdICE9PSBudWxsID8gbVN0YXRlWzBdIDogdW5kZWZpbmVkXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZG9TZWxlY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgLy8gVXBkYXRpbmcgU2VsZWN0aW9uIGxpc3RcclxuICAgIGNvbnN0IG5TdGF0ZSA9IG1TdGF0ZS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgIC4uLml0ZW0sXHJcbiAgICAgIHNlbGVjdGVkOiBpdGVtLm5hbWUgPT09IG5hbWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICB9KSk7XHJcbiAgICBzZXRNU3RhdGUoblN0YXRlKTtcclxuXHJcbiAgICAvLyBVcGRhdGluZyBjYXRhZ29yeSBsaXN0XHJcbiAgICBjb25zdCBvblN0YXRlID0gblN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcclxuICAgIHNldE9TdGF0ZShvblN0YXRlWzBdKTtcclxuICB9O1xyXG5cclxuICBpZiAoZXJyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxJbmNsdWRlIHRpdGxlPVwiU2VydmVyIEVycm9yXCIgLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyUGFuZWxcIj5FcnJvciBPY3VycmVkPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEluY2x1ZGVcclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBvU3RhdGUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IG9TdGF0ZS5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgb1N0YXRlLm5hbWUuc2xpY2UoMSlcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlQmFyICR7Y29uZmlncy5hY2N9YH0+XHJcbiAgICAgICAgICA8bW90aW9uLmlcclxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAwLCB4OiBcIi02MCVcIiwgbGVmdDogXCI1MCVcIiwgcm90YXRlOiBcIi0yMGRlZ1wiIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMjAgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjb25maWdzLmxvZ299XHJcbiAgICAgICAgICA+PC9tb3Rpb24uaT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGVIZWFkXCI+e3JvdXRlci5xdWVyeS5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZVwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttU3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e2l0ZW0uc2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcInNob3dcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHtpdGVtLnNlbGVjdGVkICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VsZWN0KGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YkNhdGVnb3J5U2VjdGlvblwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17aGVhZFZhcmlhbnRzfSBpbml0aWFsPXtcImhpZGVcIn0gYW5pbWF0ZT17XCJzaG93XCJ9PlxyXG4gICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17aGVhZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPXtcImhpZGVcIn1cclxuICAgICAgICAgICAgYW5pbWF0ZT17XCJzaG93XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RDYXRlZ29yeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAge29TdGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBvU3RhdGUub3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17aGVhZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZXhpdD1cImhpZGVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cm91dGVyLmFzUGF0aH0vJHtvU3RhdGUubmFtZX0vJHtpdGVtLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e2BpdGVtICR7Y29uZmlncy5hY2N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7aXRlbS5sb2dvfSB1c2V0eHRgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZXBpY1g2Ny9tZF9ibG9ncy9tYWluL2NhdGVnb3JpZXMvJHtjb250ZXh0LnBhcmFtcy5uYW1lfS5qc29uYDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBsZXQgY0l0ZW1zID0gZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0sIHNlbGVjdGVkOiBmYWxzZSB9KSk7XHJcblxyXG4gICAgaWYgKGNJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNJdGVtc1swXS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgY29uZmlnczogZGF0YS5jb25maWdzLCBpdGVtczogY0l0ZW1zIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgZXJyOiB0cnVlLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2VwaWNYNjcvbWRfYmxvZ3MvbWFpbi9EQi5qc29uYDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zdCBuYW1lcyA9IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgY29uc3QgcGF0aHMgPSBuYW1lcy5tYXAoKG5hbWUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbmFtZTogbmFtZSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9