self["webpackHotUpdate_N_E"]("pages/[name]/[itemName]",{

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.h1, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_6__.headVariants,
          initial: "hide",
          animate: "show",
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
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL1tpdGVtTmFtZV0vaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcnkiLCJsb2dvIiwiYWNjIiwiaXRlbXMiLCJlcnIiLCJtZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJtU3RhdGUiLCJzZXRNU3RhdGUiLCJsZW5ndGgiLCJvU3RhdGUiLCJzZXRPU3RhdGUiLCJkb1NlbGVjdCIsIm5hbWUiLCJyb3V0ZSIsImFzUGF0aCIsInByZXZSb3V0ZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwicmVwbGFjZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJxdWVyeSIsInkiLCJ4IiwibGVmdCIsInJvdGF0ZSIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImR1cmF0aW9uIiwiZWFzZSIsImxpc3RWYXJpYW50cyIsIm1hcCIsIml0ZW0iLCJzZWxlY3RlZCIsImhlYWRWYXJpYW50cyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSx3QkFIREMsS0FHQztBQUFBLE1BSERBLEtBR0MsMkJBSE8sRUFHUDtBQUFBLHNCQUZEQyxHQUVDO0FBQUEsTUFGREEsR0FFQyx5QkFGSyxLQUVMO0FBQUEsMEJBRERDLE9BQ0M7QUFBQSxNQUREQSxPQUNDLDZCQURTLEVBQ1Q7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURDLGtCQUUyQkMsK0NBQVEsQ0FBQ0wsS0FBRCxDQUZuQztBQUFBLE1BRU1NLE1BRk47QUFBQSxNQUVjQyxTQUZkOztBQUFBLG1CQUcyQkYsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCLENBQWxCLEdBQXNCRixNQUFNLENBQUMsQ0FBRCxDQUE1QixHQUFrQyxFQUFuQyxDQUhuQztBQUFBLE1BR01HLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQUtELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QixRQUFNQyxLQUFLLEdBQUdWLE1BQU0sQ0FBQ1csTUFBckI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixDQUFoQixFQUFtQkgsS0FBSyxDQUFDSSxXQUFOLENBQWtCLEdBQWxCLENBQW5CLENBQWxCLENBRnlCLENBR3pCO0FBQ0E7O0FBQ0FkLFVBQU0sQ0FBQ2UsT0FBUCxXQUFrQkgsU0FBbEIsY0FBK0JILElBQS9CLEdBQXVDTyxTQUF2QyxFQUFrRDtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFsRDtBQUNELEdBTkQ7O0FBUUEsTUFBSW5CLEdBQUosRUFBUztBQUNQLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBREY7QUFXRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFTyxNQUFNLEtBQUtVLFNBQVgsR0FBdUJWLE1BQU0sQ0FBQ0csSUFBOUIsR0FBcUNULE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVQ7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLG9CQUFhYixHQUFiLENBQWQ7QUFBQSxnQ0FDRSw4REFBQyxtREFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBRXVCLGFBQUMsRUFBRSxDQUFMO0FBQVFDLGFBQUMsRUFBRSxNQUFYO0FBQW1CQyxnQkFBSSxFQUFFLEtBQXpCO0FBQWdDQyxrQkFBTSxFQUFFO0FBQXhDLFdBRFg7QUFFRSxpQkFBTyxFQUFFO0FBQUVILGFBQUMsRUFBRTtBQUFMLFdBRlg7QUFHRSxvQkFBVSxFQUFFO0FBQ1ZJLGtCQUFNLEVBQUVDLFFBREU7QUFFVkMsc0JBQVUsRUFBRSxTQUZGO0FBR1ZDLG9CQUFRLEVBQUUsQ0FIQTtBQUlWQyxnQkFBSSxFQUFFO0FBSkksV0FIZDtBQVNFLG1CQUFTLEVBQUVoQztBQVRiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFHLG1CQUFTLEVBQUMsVUFBYjtBQUFBLG9CQUF5QkssTUFBTSxDQUFDa0IsS0FBUCxDQUFhVDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBY0UsOERBQUMscURBQUQ7QUFDRSxrQkFBUSxFQUFFbUIsd0RBRFo7QUFFRSxpQkFBTyxFQUFDLE1BRlY7QUFHRSxpQkFBTyxFQUFDLE1BSFY7QUFJRSxtQkFBUyxFQUFDLE1BSlo7QUFBQSxvQkFNR3pCLE1BQU0sQ0FBQzBCLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsZ0NBQ1YsOERBQUMscURBQUQ7QUFDRSxzQkFBUSxFQUFFRix3REFEWjtBQUdFLHFCQUFPLEVBQUVFLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixVQUFoQixHQUE2QixNQUh4QztBQUlFLHVCQUFTLGlCQUFVRCxJQUFJLENBQUNDLFFBQUwsSUFBaUIsUUFBM0IsQ0FKWDtBQUtFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXZCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ3JCLElBQU4sQ0FBZDtBQUFBLGVBTFg7QUFBQSx3QkFPR3FCLElBQUksQ0FBQ3JCO0FBUFIsZUFFT3FCLElBQUksQ0FBQ3JCLElBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVTtBQUFBLFdBQVg7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBa0NFO0FBQVMsaUJBQVMsRUFBQyxvQkFBbkI7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFXLGtCQUFRLEVBQUV1Qix3REFBckI7QUFBbUMsaUJBQU8sRUFBRSxNQUE1QztBQUFvRCxpQkFBTyxFQUFFLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxvQkFDRzFCLE1BQU0sQ0FBQzJCLE9BQVAsQ0FBZUosR0FBZixDQUFtQixVQUFDQyxJQUFEO0FBQUEsZ0NBQ2xCLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksWUFBSzlCLE1BQU0sQ0FBQ1csTUFBWixjQUFzQm1CLElBQUksQ0FBQ3JCLElBQTNCLENBQVY7QUFBQSxxQ0FDRTtBQUFxQix5QkFBUyxpQkFBVWIsR0FBVixDQUE5QjtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsWUFBS2tDLElBQUksQ0FBQ25DLElBQVY7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw0QkFBSW1DLElBQUksQ0FBQ3JCO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBLGlCQUFVcUIsSUFBSSxDQUFDckIsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEa0I7QUFBQSxXQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0REOztHQXpGdUJmLFE7VUFPUE8sa0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW25hbWVdL1tpdGVtTmFtZV0uNGJjOTgwMmQxODhiMmNiY2M1YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEluY2x1ZGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvSW5jbHVkZVwiO1xyXG5pbXBvcnQgeyBsaXN0VmFyaWFudHMsIGhlYWRWYXJpYW50cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3ZhcmlhbnRzXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yeSh7XHJcbiAgbG9nbyxcclxuICBhY2MsXHJcbiAgaXRlbXMgPSBbXSxcclxuICBlcnIgPSBmYWxzZSxcclxuICBtZXNzYWdlID0gXCJcIixcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttU3RhdGUsIHNldE1TdGF0ZV0gPSB1c2VTdGF0ZShpdGVtcyk7XHJcbiAgY29uc3QgW29TdGF0ZSwgc2V0T1N0YXRlXSA9IHVzZVN0YXRlKG1TdGF0ZS5sZW5ndGggIT09IDAgPyBtU3RhdGVbMF0gOiBbXSk7XHJcblxyXG4gIGNvbnN0IGRvU2VsZWN0ID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVyLmFzUGF0aDtcclxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHJvdXRlLnN1YnN0cmluZygwLCByb3V0ZS5sYXN0SW5kZXhPZihcIi9cIikpO1xyXG4gICAgLy9yb3V0ZXIuYmFjaygpO1xyXG4gICAgLy9yb3V0ZXIucmVwbGFjZShgJHtwcmV2Um91dGV9LyR7bmFtZX1gKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKGAke3ByZXZSb3V0ZX0vJHtuYW1lfWAsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoZXJyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxJbmNsdWRlIHRpdGxlPVwiU2VydmVyIEVycm9yXCIgLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyUGFuZWxcIj5cclxuICAgICAgICAgICAgPGgxPnttZXNzYWdlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPkNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbiBvciBSZWxvYWQgcGFnZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbmNsdWRlIHRpdGxlPXtvU3RhdGUgIT09IHVuZGVmaW5lZCA/IG9TdGF0ZS5uYW1lIDogcm91dGVyLnF1ZXJ5Lm5hbWV9IC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVCYXIgJHthY2N9YH0+XHJcbiAgICAgICAgICA8bW90aW9uLmlcclxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAwLCB4OiBcIi02MCVcIiwgbGVmdDogXCI1MCVcIiwgcm90YXRlOiBcIi0yMGRlZ1wiIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMjAgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtsb2dvfVxyXG4gICAgICAgICAgPjwvbW90aW9uLmk+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlSGVhZFwiPntyb3V0ZXIucXVlcnkubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e2xpc3RWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bVN0YXRlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXtpdGVtLnNlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtICR7aXRlbS5zZWxlY3RlZCAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb1NlbGVjdChpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJDYXRlZ29yeVNlY3Rpb25cIj5cclxuICAgICAgICAgIDxtb3Rpb24uaDEgdmFyaWFudHM9e2hlYWRWYXJpYW50c30gaW5pdGlhbD17XCJoaWRlXCJ9IGFuaW1hdGU9e1wic2hvd1wifT5cclxuICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0Q2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAge29TdGF0ZS5vcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3JvdXRlci5hc1BhdGh9LyR7aXRlbS5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtgaXRlbSAke2FjY31gfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtpdGVtLmxvZ299IHVzZXR4dGB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgbmFtZSwgaXRlbU5hbWUgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2VwaWNYNjcvbWRfYmxvZ3MvbWFpblwiO1xyXG5cclxuICBjb25zdCBzVXJsID0gYCR7VVJMfS9jYXRlZ29yaWVzLyR7bmFtZX0uanNvbmA7XHJcblxyXG4gIGNvbnN0IHNSZXMgPSBhd2FpdCBmZXRjaChzVXJsKTtcclxuICBjb25zdCBzRGF0YSA9IGF3YWl0IHNSZXMuanNvbigpO1xyXG5cclxuICBjb25zdCB7IGxvZ28sIGFjYyB9ID0gc0RhdGEuY29uZmlncztcclxuXHJcbiAgY29uc3QgaXRlbXMgPSBzRGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAuLi5pdGVtLFxyXG4gICAgc2VsZWN0ZWQ6IGl0ZW1OYW1lID09PSBpdGVtLm5hbWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaXRlbU5hbWU6IGl0ZW1OYW1lLFxyXG4gICAgICBpdGVtczogaXRlbXMsXHJcbiAgICAgIGxvZ286IGxvZ28sXHJcbiAgICAgIGFjYzogYWNjLFxyXG4gICAgICBrZXk6IGl0ZW1OYW1lLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgVVJMID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZXBpY1g2Ny9tZF9ibG9ncy9tYWluXCI7XHJcbiAgY29uc3QgbVVybCA9IGAke1VSTH0vREIuanNvbmA7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobVVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IG5hbWVzID0gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xyXG5cclxuICBsZXQgcGF0aHMgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY1VybCA9IGAke1VSTH0vY2F0ZWdvcmllcy8ke25hbWVzW2ldLm5hbWUudG9Mb3dlckNhc2UoKX0uanNvbmA7XHJcbiAgICBjb25zdCBjUmVzID0gYXdhaXQgZmV0Y2goY1VybCk7XHJcbiAgICBjb25zdCBjRGF0YSA9IGF3YWl0IGNSZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gY0RhdGEuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgcGF0aHMucHVzaCh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICBpdGVtTmFtZTogaXRlbXNbal0ubmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=