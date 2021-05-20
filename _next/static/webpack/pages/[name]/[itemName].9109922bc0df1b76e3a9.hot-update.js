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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
          variants: _data_variants__WEBPACK_IMPORTED_MODULE_6__.headVariants,
          initial: "hide",
          animate: "show",
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
                  lineNumber: 93,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL1tpdGVtTmFtZV0vaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcnkiLCJsb2dvIiwiYWNjIiwiaXRlbXMiLCJlcnIiLCJtZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJtU3RhdGUiLCJzZXRNU3RhdGUiLCJsZW5ndGgiLCJvU3RhdGUiLCJzZXRPU3RhdGUiLCJkb1NlbGVjdCIsIm5hbWUiLCJyb3V0ZSIsImFzUGF0aCIsInByZXZSb3V0ZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwicmVwbGFjZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJxdWVyeSIsInkiLCJ4IiwibGVmdCIsInJvdGF0ZSIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImR1cmF0aW9uIiwiZWFzZSIsImxpc3RWYXJpYW50cyIsIm1hcCIsIml0ZW0iLCJzZWxlY3RlZCIsImhlYWRWYXJpYW50cyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSx3QkFIREMsS0FHQztBQUFBLE1BSERBLEtBR0MsMkJBSE8sRUFHUDtBQUFBLHNCQUZEQyxHQUVDO0FBQUEsTUFGREEsR0FFQyx5QkFGSyxLQUVMO0FBQUEsMEJBRERDLE9BQ0M7QUFBQSxNQUREQSxPQUNDLDZCQURTLEVBQ1Q7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURDLGtCQUUyQkMsK0NBQVEsQ0FBQ0wsS0FBRCxDQUZuQztBQUFBLE1BRU1NLE1BRk47QUFBQSxNQUVjQyxTQUZkOztBQUFBLG1CQUcyQkYsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCLENBQWxCLEdBQXNCRixNQUFNLENBQUMsQ0FBRCxDQUE1QixHQUFrQyxFQUFuQyxDQUhuQztBQUFBLE1BR01HLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQUtELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QixRQUFNQyxLQUFLLEdBQUdWLE1BQU0sQ0FBQ1csTUFBckI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixDQUFoQixFQUFtQkgsS0FBSyxDQUFDSSxXQUFOLENBQWtCLEdBQWxCLENBQW5CLENBQWxCLENBRnlCLENBR3pCO0FBQ0E7O0FBQ0FkLFVBQU0sQ0FBQ2UsT0FBUCxXQUFrQkgsU0FBbEIsY0FBK0JILElBQS9CLEdBQXVDTyxTQUF2QyxFQUFrRDtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFsRDtBQUNELEdBTkQ7O0FBUUEsTUFBSW5CLEdBQUosRUFBUztBQUNQLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBREY7QUFXRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFTyxNQUFNLEtBQUtVLFNBQVgsR0FBdUJWLE1BQU0sQ0FBQ0csSUFBOUIsR0FBcUNULE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVQ7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLG9CQUFhYixHQUFiLENBQWQ7QUFBQSxnQ0FDRSw4REFBQyxtREFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBRXVCLGFBQUMsRUFBRSxDQUFMO0FBQVFDLGFBQUMsRUFBRSxNQUFYO0FBQW1CQyxnQkFBSSxFQUFFLEtBQXpCO0FBQWdDQyxrQkFBTSxFQUFFO0FBQXhDLFdBRFg7QUFFRSxpQkFBTyxFQUFFO0FBQUVILGFBQUMsRUFBRTtBQUFMLFdBRlg7QUFHRSxvQkFBVSxFQUFFO0FBQ1ZJLGtCQUFNLEVBQUVDLFFBREU7QUFFVkMsc0JBQVUsRUFBRSxTQUZGO0FBR1ZDLG9CQUFRLEVBQUUsQ0FIQTtBQUlWQyxnQkFBSSxFQUFFO0FBSkksV0FIZDtBQVNFLG1CQUFTLEVBQUVoQztBQVRiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFHLG1CQUFTLEVBQUMsVUFBYjtBQUFBLG9CQUF5QkssTUFBTSxDQUFDa0IsS0FBUCxDQUFhVDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBY0UsOERBQUMscURBQUQ7QUFDRSxrQkFBUSxFQUFFbUIsd0RBRFo7QUFFRSxpQkFBTyxFQUFDLE1BRlY7QUFHRSxpQkFBTyxFQUFDLE1BSFY7QUFJRSxtQkFBUyxFQUFDLE1BSlo7QUFBQSxvQkFNR3pCLE1BQU0sQ0FBQzBCLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsZ0NBQ1YsOERBQUMscURBQUQ7QUFDRSxzQkFBUSxFQUFFRix3REFEWjtBQUdFLHFCQUFPLEVBQUVFLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixVQUFoQixHQUE2QixNQUh4QztBQUlFLHVCQUFTLGlCQUFVRCxJQUFJLENBQUNDLFFBQUwsSUFBaUIsUUFBM0IsQ0FKWDtBQUtFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXZCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ3JCLElBQU4sQ0FBZDtBQUFBLGVBTFg7QUFBQSx3QkFPR3FCLElBQUksQ0FBQ3JCO0FBUFIsZUFFT3FCLElBQUksQ0FBQ3JCLElBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVTtBQUFBLFdBQVg7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBa0NFO0FBQVMsaUJBQVMsRUFBQyxvQkFBbkI7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFXLGtCQUFRLEVBQUV1Qix3REFBckI7QUFBbUMsaUJBQU8sRUFBRSxNQUE1QztBQUFvRCxpQkFBTyxFQUFFLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsOERBQUMscURBQUQ7QUFDRSxrQkFBUSxFQUFFQSx3REFEWjtBQUVFLGlCQUFPLEVBQUUsTUFGWDtBQUdFLGlCQUFPLEVBQUUsTUFIWDtBQUlFLG1CQUFTLEVBQUMsY0FKWjtBQUFBLG9CQU1HMUIsTUFBTSxDQUFDMkIsT0FBUCxDQUFlSixHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxnQ0FDbEIsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxZQUFLOUIsTUFBTSxDQUFDVyxNQUFaLGNBQXNCbUIsSUFBSSxDQUFDckIsSUFBM0IsQ0FBVjtBQUFBLHFDQUNFO0FBQXFCLHlCQUFTLGlCQUFVYixHQUFWLENBQTlCO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxZQUFLa0MsSUFBSSxDQUFDbkMsSUFBVjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBLDRCQUFJbUMsSUFBSSxDQUFDckI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsaUJBQVVxQixJQUFJLENBQUNyQixJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLFdBQW5CO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2REQ7O0dBOUZ1QmYsUTtVQU9QTyxrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0vW2l0ZW1OYW1lXS45MTA5OTIyYmMwZGYxYjc2ZTNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSW5jbHVkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9JbmNsdWRlXCI7XHJcbmltcG9ydCB7IGxpc3RWYXJpYW50cywgaGVhZFZhcmlhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdmFyaWFudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhdGVnb3J5KHtcclxuICBsb2dvLFxyXG4gIGFjYyxcclxuICBpdGVtcyA9IFtdLFxyXG4gIGVyciA9IGZhbHNlLFxyXG4gIG1lc3NhZ2UgPSBcIlwiLFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21TdGF0ZSwgc2V0TVN0YXRlXSA9IHVzZVN0YXRlKGl0ZW1zKTtcclxuICBjb25zdCBbb1N0YXRlLCBzZXRPU3RhdGVdID0gdXNlU3RhdGUobVN0YXRlLmxlbmd0aCAhPT0gMCA/IG1TdGF0ZVswXSA6IFtdKTtcclxuXHJcbiAgY29uc3QgZG9TZWxlY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXIuYXNQYXRoO1xyXG4gICAgY29uc3QgcHJldlJvdXRlID0gcm91dGUuc3Vic3RyaW5nKDAsIHJvdXRlLmxhc3RJbmRleE9mKFwiL1wiKSk7XHJcbiAgICAvL3JvdXRlci5iYWNrKCk7XHJcbiAgICAvL3JvdXRlci5yZXBsYWNlKGAke3ByZXZSb3V0ZX0vJHtuYW1lfWApO1xyXG4gICAgcm91dGVyLnJlcGxhY2UoYCR7cHJldlJvdXRlfS8ke25hbWV9YCwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChlcnIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEluY2x1ZGUgdGl0bGU9XCJTZXJ2ZXIgRXJyb3JcIiAvPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJQYW5lbFwiPlxyXG4gICAgICAgICAgICA8aDE+e21lc3NhZ2V9PC9oMT5cclxuICAgICAgICAgICAgPHA+Q2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIG9yIFJlbG9hZCBwYWdlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEluY2x1ZGUgdGl0bGU9e29TdGF0ZSAhPT0gdW5kZWZpbmVkID8gb1N0YXRlLm5hbWUgOiByb3V0ZXIucXVlcnkubmFtZX0gLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJhciAke2FjY31gfT5cclxuICAgICAgICAgIDxtb3Rpb24uaVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDAsIHg6IFwiLTYwJVwiLCBsZWZ0OiBcIjUwJVwiLCByb3RhdGU6IFwiLTIwZGVnXCIgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAyMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcInJldmVyc2VcIixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2xvZ299XHJcbiAgICAgICAgICA+PC9tb3Rpb24uaT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGVIZWFkXCI+e3JvdXRlci5xdWVyeS5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZVwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJzaG93XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttU3RhdGUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsaXN0VmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e2l0ZW0uc2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcInNob3dcIn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHtpdGVtLnNlbGVjdGVkICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VsZWN0KGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YkNhdGVnb3J5U2VjdGlvblwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17aGVhZFZhcmlhbnRzfSBpbml0aWFsPXtcImhpZGVcIn0gYW5pbWF0ZT17XCJzaG93XCJ9PlxyXG4gICAgICAgICAgICBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17aGVhZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPXtcImhpZGVcIn1cclxuICAgICAgICAgICAgYW5pbWF0ZT17XCJzaG93XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RDYXRlZ29yeVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtvU3RhdGUub3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtyb3V0ZXIuYXNQYXRofS8ke2l0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT17YGl0ZW0gJHthY2N9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7aXRlbS5sb2dvfSB1c2V0eHRgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBuYW1lLCBpdGVtTmFtZSB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgVVJMID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZXBpY1g2Ny9tZF9ibG9ncy9tYWluXCI7XHJcblxyXG4gIGNvbnN0IHNVcmwgPSBgJHtVUkx9L2NhdGVnb3JpZXMvJHtuYW1lfS5qc29uYDtcclxuXHJcbiAgY29uc3Qgc1JlcyA9IGF3YWl0IGZldGNoKHNVcmwpO1xyXG4gIGNvbnN0IHNEYXRhID0gYXdhaXQgc1Jlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHsgbG9nbywgYWNjIH0gPSBzRGF0YS5jb25maWdzO1xyXG5cclxuICBjb25zdCBpdGVtcyA9IHNEYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICBzZWxlY3RlZDogaXRlbU5hbWUgPT09IGl0ZW0ubmFtZSA/IHRydWUgOiBmYWxzZSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtTmFtZTogaXRlbU5hbWUsXHJcbiAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgbG9nbzogbG9nbyxcclxuICAgICAgYWNjOiBhY2MsXHJcbiAgICAgIGtleTogaXRlbU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBVUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lcGljWDY3L21kX2Jsb2dzL21haW5cIjtcclxuICBjb25zdCBtVXJsID0gYCR7VVJMfS9EQi5qc29uYDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChtVXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbmFtZXMgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbSk7XHJcblxyXG4gIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjVXJsID0gYCR7VVJMfS9jYXRlZ29yaWVzLyR7bmFtZXNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpfS5qc29uYDtcclxuICAgIGNvbnN0IGNSZXMgPSBhd2FpdCBmZXRjaChjVXJsKTtcclxuICAgIGNvbnN0IGNEYXRhID0gYXdhaXQgY1Jlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBjRGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWVzW2ldLm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOiBpdGVtc1tqXS5uYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==