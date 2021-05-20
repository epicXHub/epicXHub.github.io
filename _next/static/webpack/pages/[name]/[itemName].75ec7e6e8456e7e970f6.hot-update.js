self["webpackHotUpdate_N_E"]("pages/[name]/[itemName]",{

/***/ "./data/variants.js":
/*!**************************!*\
  !*** ./data/variants.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listVariants": function() { return /* binding */ listVariants; },
/* harmony export */   "headVariants": function() { return /* binding */ headVariants; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var listVariants = {
  show: {
    y: "0",
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1
    }
  },
  hide: {
    y: "-5%",
    opacity: 0
  },
  selected: {
    y: "0",
    opacity: 1,
    originX: 0
  }
};
var headVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8
    }
  },
  hide: {
    y: -20,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8
    }
  }
};


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


/***/ }),

/***/ "./pages/[name]/[itemName]/index.js":
/*!******************************************!*\
  !*** ./pages/[name]/[itemName]/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ category; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Include__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Include */ "./components/Include.js");
/* harmony import */ var _data_variants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/variants */ "./data/variants.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\epicX\\Documents\\testnext\\pages\\[name]\\[itemName]\\index.js",
    _s = $RefreshSig$();








var __N_SSG = true;
function category(_ref) {
  _s();

  var _this = this;

  var logo = _ref.logo,
      acc = _ref.acc,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$err = _ref.err,
      err = _ref$err === void 0 ? false : _ref$err,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? "" : _ref$message;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(items),
      mState = _useState[0],
      setMState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mState.length !== 0 ? mState[0] : []),
      oState = _useState2[0],
      setOState = _useState2[1];

  var doSelect = function doSelect(name) {
    var route = router.asPath;
    var prevRoute = route.substring(0, route.lastIndexOf("/")); //router.back();
    //router.replace(`${prevRoute}/${name}`);

    router.replace("".concat(prevRoute, "/").concat(name), undefined, {
      shallow: false
    });
  };

  if (err) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: "Server Error"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "errPanel",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Check your internet connection or Reload page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: oState !== undefined ? oState.name : router.query.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sideBar ".concat(acc),
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
          className: logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "sideHead",
          children: router.query.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_6__.listVariants,
          initial: "hide",
          animate: "show",
          className: "list",
          children: mState.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
              variants: _data_variants__WEBPACK_IMPORTED_MODULE_6__.listVariants,
              animate: item.selected ? "selected" : "show",
              className: "item ".concat(item.selected && "active"),
              onClick: function onClick() {
                return doSelect(item.name);
              },
              children: item.name
            }, item.name, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "subCategorySection",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "listCategory",
          children: oState.options.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "".concat(router.asPath, "/").concat(item.name),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "item ".concat(acc),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "".concat(item.logo, " usetxt")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

_s(category, "P0TaSmXtdubFaG7kwRmrzfdeFtg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS92YXJpYW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL1tpdGVtTmFtZV0vaW5kZXguanMiXSwibmFtZXMiOlsibGlzdFZhcmlhbnRzIiwic2hvdyIsInkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImR1cmF0aW9uIiwiaGlkZSIsInNlbGVjdGVkIiwib3JpZ2luWCIsImhlYWRWYXJpYW50cyIsImNhdGVnb3J5IiwibG9nbyIsImFjYyIsIml0ZW1zIiwiZXJyIiwibWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibVN0YXRlIiwic2V0TVN0YXRlIiwibGVuZ3RoIiwib1N0YXRlIiwic2V0T1N0YXRlIiwiZG9TZWxlY3QiLCJuYW1lIiwicm91dGUiLCJhc1BhdGgiLCJwcmV2Um91dGUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwicXVlcnkiLCJ4IiwibGVmdCIsInJvdGF0ZSIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImVhc2UiLCJtYXAiLCJpdGVtIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUU7QUFDSkMsS0FBQyxFQUFFLEdBREM7QUFFSkMsV0FBTyxFQUFFLENBRkw7QUFHSkMsY0FBVSxFQUFFO0FBQ1ZDLHFCQUFlLEVBQUUsR0FEUDtBQUVWQyxjQUFRLEVBQUU7QUFGQTtBQUhSLEdBRGE7QUFTbkJDLE1BQUksRUFBRTtBQUNKTCxLQUFDLEVBQUUsS0FEQztBQUVKQyxXQUFPLEVBQUU7QUFGTCxHQVRhO0FBY25CSyxVQUFRLEVBQUU7QUFDUk4sS0FBQyxFQUFFLEdBREs7QUFFUkMsV0FBTyxFQUFFLENBRkQ7QUFHUk0sV0FBTyxFQUFFO0FBSEQ7QUFkUyxDQUFy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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxvQkFDR0gsTUFBTSxDQUFDc0IsT0FBUCxDQUFlRixHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxnQ0FDbEIsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxZQUFLM0IsTUFBTSxDQUFDVyxNQUFaLGNBQXNCZ0IsSUFBSSxDQUFDbEIsSUFBM0IsQ0FBVjtBQUFBLHFDQUNFO0FBQXFCLHlCQUFTLGlCQUFVYixHQUFWLENBQTlCO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxZQUFLK0IsSUFBSSxDQUFDaEMsSUFBVjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFJZ0MsSUFBSSxDQUFDbEI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsaUJBQVVrQixJQUFJLENBQUNsQixJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLFdBQW5CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBdkZ1QmYsUTtVQU9QTyxrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0vW2l0ZW1OYW1lXS43NWVjN2U2ZTg0NTZlN2U5NzBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdFZhcmlhbnRzID0ge1xyXG4gIHNob3c6IHtcclxuICAgIHk6IFwiMFwiLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIHk6IFwiLTUlXCIsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdGVkOiB7XHJcbiAgICB5OiBcIjBcIixcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBvcmlnaW5YOiAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBoZWFkVmFyaWFudHMgPSB7XHJcbiAgc2hvdzoge1xyXG4gICAgeTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIHk6IC0yMCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbGlzdFZhcmlhbnRzLCBoZWFkVmFyaWFudHMgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSW5jbHVkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9JbmNsdWRlXCI7XHJcbmltcG9ydCB7IGxpc3RWYXJpYW50cywgaGVhZFZhcmlhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdmFyaWFudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhdGVnb3J5KHtcclxuICBsb2dvLFxyXG4gIGFjYyxcclxuICBpdGVtcyA9IFtdLFxyXG4gIGVyciA9IGZhbHNlLFxyXG4gIG1lc3NhZ2UgPSBcIlwiLFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21TdGF0ZSwgc2V0TVN0YXRlXSA9IHVzZVN0YXRlKGl0ZW1zKTtcclxuICBjb25zdCBbb1N0YXRlLCBzZXRPU3RhdGVdID0gdXNlU3RhdGUobVN0YXRlLmxlbmd0aCAhPT0gMCA/IG1TdGF0ZVswXSA6IFtdKTtcclxuXHJcbiAgY29uc3QgZG9TZWxlY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXIuYXNQYXRoO1xyXG4gICAgY29uc3QgcHJldlJvdXRlID0gcm91dGUuc3Vic3RyaW5nKDAsIHJvdXRlLmxhc3RJbmRleE9mKFwiL1wiKSk7XHJcbiAgICAvL3JvdXRlci5iYWNrKCk7XHJcbiAgICAvL3JvdXRlci5yZXBsYWNlKGAke3ByZXZSb3V0ZX0vJHtuYW1lfWApO1xyXG4gICAgcm91dGVyLnJlcGxhY2UoYCR7cHJldlJvdXRlfS8ke25hbWV9YCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChlcnIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEluY2x1ZGUgdGl0bGU9XCJTZXJ2ZXIgRXJyb3JcIiAvPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJQYW5lbFwiPlxyXG4gICAgICAgICAgICA8aDE+e21lc3NhZ2V9PC9oMT5cclxuICAgICAgICAgICAgPHA+Q2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIG9yIFJlbG9hZCBwYWdlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEluY2x1ZGUgdGl0bGU9e29TdGF0ZSAhPT0gdW5kZWZpbmVkID8gb1N0YXRlLm5hbWUgOiByb3V0ZXIucXVlcnkubmFtZX0gLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJhciAke2FjY31gfT5cclxuICAgICAgICAgIDxtb3Rpb24uaVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDAsIHg6IFwiLTYwJVwiLCBsZWZ0OiBcIjUwJVwiLCByb3RhdGU6IFwiLTIwZGVnXCIgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAyMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcInJldmVyc2VcIixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2xvZ299XHJcbiAgICAgICAgICA+PC9tb3Rpb24uaT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGVIZWFkXCI+e3JvdXRlci5xdWVyeS5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZVwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttU3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e2l0ZW0uc2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcInNob3dcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHtpdGVtLnNlbGVjdGVkICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VsZWN0KGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YkNhdGVnb3J5U2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgxPkNhdGVnb3J5PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdENhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgIHtvU3RhdGUub3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtyb3V0ZXIuYXNQYXRofS8ke2l0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17YGl0ZW0gJHthY2N9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7aXRlbS5sb2dvfSB1c2V0eHRgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IG5hbWUsIGl0ZW1OYW1lIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBVUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lcGljWDY3L21kX2Jsb2dzL21haW5cIjtcclxuXHJcbiAgY29uc3Qgc1VybCA9IGAke1VSTH0vY2F0ZWdvcmllcy8ke25hbWV9Lmpzb25gO1xyXG5cclxuICBjb25zdCBzUmVzID0gYXdhaXQgZmV0Y2goc1VybCk7XHJcbiAgY29uc3Qgc0RhdGEgPSBhd2FpdCBzUmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgeyBsb2dvLCBhY2MgfSA9IHNEYXRhLmNvbmZpZ3M7XHJcblxyXG4gIGNvbnN0IGl0ZW1zID0gc0RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgLi4uaXRlbSxcclxuICAgIHNlbGVjdGVkOiBpdGVtTmFtZSA9PT0gaXRlbS5uYW1lID8gdHJ1ZSA6IGZhbHNlLFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGl0ZW1OYW1lOiBpdGVtTmFtZSxcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICBsb2dvOiBsb2dvLFxyXG4gICAgICBhY2M6IGFjYyxcclxuICAgICAga2V5OiBpdGVtTmFtZSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2VwaWNYNjcvbWRfYmxvZ3MvbWFpblwiO1xyXG4gIGNvbnN0IG1VcmwgPSBgJHtVUkx9L0RCLmpzb25gO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG1VcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zdCBuYW1lcyA9IGRhdGEubWFwKChpdGVtKSA9PiBpdGVtKTtcclxuXHJcbiAgbGV0IHBhdGhzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNVcmwgPSBgJHtVUkx9L2NhdGVnb3JpZXMvJHtuYW1lc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCl9Lmpzb25gO1xyXG4gICAgY29uc3QgY1JlcyA9IGF3YWl0IGZldGNoKGNVcmwpO1xyXG4gICAgY29uc3QgY0RhdGEgPSBhd2FpdCBjUmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IGNEYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbSk7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIHBhdGhzLnB1c2goe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgbmFtZTogbmFtZXNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgaXRlbU5hbWU6IGl0ZW1zW2pdLm5hbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9