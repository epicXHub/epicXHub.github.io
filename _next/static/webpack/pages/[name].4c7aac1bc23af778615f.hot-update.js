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
      title: oState !== undefined ? oState.name : router.query.name
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
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "sideHead",
          children: router.query.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
              lineNumber: 73,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
          lineNumber: 86,
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
                      lineNumber: 107,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 25
                    }, _this)]
                  }, item.name, true, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this)
              }, item.name, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5IiwiY29uZmlncyIsIml0ZW1zIiwiZXJyIiwibWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibVN0YXRlIiwic2V0TVN0YXRlIiwidW5kZWZpbmVkIiwib1N0YXRlIiwic2V0T1N0YXRlIiwiZG9TZWxlY3QiLCJuYW1lIiwiblN0YXRlIiwibWFwIiwiaXRlbSIsInNlbGVjdGVkIiwib25TdGF0ZSIsImZpbHRlciIsInF1ZXJ5IiwiYWNjIiwieSIsIngiLCJsZWZ0Iiwicm90YXRlIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiZHVyYXRpb24iLCJlYXNlIiwibG9nbyIsImxpc3RWYXJpYW50cyIsImhlYWRWYXJpYW50cyIsIm9wdGlvbnMiLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVQsT0FLWjtBQUFBOztBQUFBOztBQUFBLE1BSkRDLE9BSUMsUUFKREEsT0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLHNCQUZEQyxHQUVDO0FBQUEsTUFGREEsR0FFQyx5QkFGSyxLQUVMO0FBQUEsMEJBRERDLE9BQ0M7QUFBQSxNQUREQSxPQUNDLDZCQURTLEVBQ1Q7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURDLGtCQUUyQkMsK0NBQVEsQ0FBQ0wsS0FBRCxDQUZuQztBQUFBLE1BRU1NLE1BRk47QUFBQSxNQUVjQyxTQUZkOztBQUFBLG1CQUcyQkYsK0NBQVEsQ0FDbENDLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxJQUFkLEdBQXFCQSxNQUFNLENBQUMsQ0FBRCxDQUEzQixHQUFpQ0UsU0FEQyxDQUhuQztBQUFBLE1BR01DLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQU9ELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QjtBQUNBLFFBQU1DLE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLDZDQUNyQkEsSUFEcUI7QUFFeEJDLGdCQUFRLEVBQUVELElBQUksQ0FBQ0gsSUFBTCxLQUFjQSxJQUFkLEdBQXFCLElBQXJCLEdBQTRCO0FBRmQ7QUFBQSxLQUFYLENBQWY7QUFJQUwsYUFBUyxDQUFDTSxNQUFELENBQVQsQ0FOeUIsQ0FRekI7O0FBQ0EsUUFBTUksT0FBTyxHQUFHSixNQUFNLENBQUNLLE1BQVAsQ0FBYyxVQUFDSCxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDSCxJQUFMLEtBQWNBLElBQXhCO0FBQUEsS0FBZCxDQUFoQjtBQUNBRixhQUFTLENBQUNPLE9BQU8sQ0FBQyxDQUFELENBQVIsQ0FBVDtBQUNELEdBWEQ7O0FBYUEsTUFBSWhCLEdBQUosRUFBUztBQUNQLHdCQUNFO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUEsb0JBREY7QUFXRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHdEQUFEO0FBQVMsV0FBSyxFQUFFTyxNQUFNLEtBQUtELFNBQVgsR0FBdUJDLE1BQU0sQ0FBQ0csSUFBOUIsR0FBcUNULE1BQU0sQ0FBQ2dCLEtBQVAsQ0FBYVA7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLG9CQUFhYixPQUFPLENBQUNxQixHQUFyQixDQUFkO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBTyxFQUFFO0FBQUVDLGFBQUMsRUFBRSxDQUFMO0FBQVFDLGFBQUMsRUFBRSxNQUFYO0FBQW1CQyxnQkFBSSxFQUFFLEtBQXpCO0FBQWdDQyxrQkFBTSxFQUFFO0FBQXhDLFdBRFg7QUFFRSxpQkFBTyxFQUFFO0FBQUVILGFBQUMsRUFBRTtBQUFMLFdBRlg7QUFHRSxvQkFBVSxFQUFFO0FBQ1ZJLGtCQUFNLEVBQUVDLFFBREU7QUFFVkMsc0JBQVUsRUFBRSxTQUZGO0FBR1ZDLG9CQUFRLEVBQUUsQ0FIQTtBQUlWQyxnQkFBSSxFQUFFO0FBSkksV0FIZDtBQVNFLG1CQUFTLEVBQUU5QixPQUFPLENBQUMrQjtBQVRyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUU7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxvQkFBeUIzQixNQUFNLENBQUNnQixLQUFQLENBQWFQO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsZUFjRSw4REFBQyxxREFBRDtBQUNFLGtCQUFRLEVBQUVtQix3REFEWjtBQUVFLGlCQUFPLEVBQUMsTUFGVjtBQUdFLGlCQUFPLEVBQUMsTUFIVjtBQUlFLG1CQUFTLEVBQUMsTUFKWjtBQUFBLG9CQU1HekIsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLGdDQUNWLDhEQUFDLHFEQUFEO0FBQ0Usc0JBQVEsRUFBRWdCLHdEQURaO0FBR0UscUJBQU8sRUFBRWhCLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixVQUFoQixHQUE2QixNQUh4QztBQUlFLHVCQUFTLGlCQUFVRCxJQUFJLENBQUNDLFFBQUwsSUFBaUIsUUFBM0IsQ0FKWDtBQUtFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUwsUUFBUSxDQUFDSSxJQUFJLENBQUNILElBQU4sQ0FBZDtBQUFBLGVBTFg7QUFBQSx3QkFPR0csSUFBSSxDQUFDSDtBQVBSLGVBRU9HLElBQUksQ0FBQ0gsSUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVO0FBQUEsV0FBWDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFrQ0U7QUFBUyxpQkFBUyxFQUFDLG9CQUFuQjtBQUFBLGdDQUNFLDhEQUFDLG9EQUFEO0FBQVcsa0JBQVEsRUFBRW9CLHdEQUFyQjtBQUFtQyxpQkFBTyxFQUFFLE1BQTVDO0FBQW9ELGlCQUFPLEVBQUUsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSw4REFBQyxxREFBRDtBQUNFLGtCQUFRLEVBQUVBLHdEQURaO0FBRUUsaUJBQU8sRUFBRSxNQUZYO0FBR0UsaUJBQU8sRUFBRSxNQUhYO0FBSUUsbUJBQVMsRUFBQyxjQUpaO0FBQUEsaUNBTUUsOERBQUMsMERBQUQ7QUFBQSxzQkFDR3ZCLE1BQU0sS0FBS0QsU0FBWCxJQUNDQyxNQUFNLENBQUN3QixPQUFQLENBQWVuQixHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxrQ0FDakIsOERBQUMscURBQUQ7QUFFRSx3QkFBUSxFQUFFaUIsd0RBRlo7QUFHRSx1QkFBTyxFQUFDLE1BSFY7QUFJRSx1QkFBTyxFQUFDLE1BSlY7QUFLRSxvQkFBSSxFQUFDLE1BTFA7QUFBQSx1Q0FPRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLFlBQUs3QixNQUFNLENBQUMrQixNQUFaLGNBQXNCekIsTUFBTSxDQUFDRyxJQUE3QixjQUFxQ0csSUFBSSxDQUFDSCxJQUExQyxDQUFWO0FBQUEseUNBQ0U7QUFBcUIsNkJBQVMsaUJBQVViLE9BQU8sQ0FBQ3FCLEdBQWxCLENBQTlCO0FBQUEsNENBQ0U7QUFBRywrQkFBUyxZQUFLTCxJQUFJLENBQUNlLElBQVY7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBQSxnQ0FBSWYsSUFBSSxDQUFDSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQSxxQkFBVUcsSUFBSSxDQUFDSCxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsaUJBQ09HLElBQUksQ0FBQ0gsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURpQjtBQUFBLGFBQW5CO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0VEOztHQS9HdUJkLFE7VUFNUE0sa0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW25hbWVdLjRjN2FhYzFiYzIzYWY3Nzg2MTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBsaXN0VmFyaWFudHMsIGhlYWRWYXJpYW50cyB9IGZyb20gXCIuLi8uLi9kYXRhL3ZhcmlhbnRzXCI7XHJcbmltcG9ydCBJbmNsdWRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0luY2x1ZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhdGVnb3J5KHtcclxuICBjb25maWdzLFxyXG4gIGl0ZW1zLFxyXG4gIGVyciA9IGZhbHNlLFxyXG4gIG1lc3NhZ2UgPSBcIlwiLFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21TdGF0ZSwgc2V0TVN0YXRlXSA9IHVzZVN0YXRlKGl0ZW1zKTtcclxuICBjb25zdCBbb1N0YXRlLCBzZXRPU3RhdGVdID0gdXNlU3RhdGUoXHJcbiAgICBtU3RhdGVbMF0gIT09IG51bGwgPyBtU3RhdGVbMF0gOiB1bmRlZmluZWRcclxuICApO1xyXG5cclxuICBjb25zdCBkb1NlbGVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICAvLyBVcGRhdGluZyBTZWxlY3Rpb24gbGlzdFxyXG4gICAgY29uc3QgblN0YXRlID0gbVN0YXRlLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgLi4uaXRlbSxcclxuICAgICAgc2VsZWN0ZWQ6IGl0ZW0ubmFtZSA9PT0gbmFtZSA/IHRydWUgOiBmYWxzZSxcclxuICAgIH0pKTtcclxuICAgIHNldE1TdGF0ZShuU3RhdGUpO1xyXG5cclxuICAgIC8vIFVwZGF0aW5nIGNhdGFnb3J5IGxpc3RcclxuICAgIGNvbnN0IG9uU3RhdGUgPSBuU3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgc2V0T1N0YXRlKG9uU3RhdGVbMF0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChlcnIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEluY2x1ZGUgdGl0bGU9XCJTZXJ2ZXIgRXJyb3JcIiAvPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJQYW5lbFwiPlxyXG4gICAgICAgICAgICA8aDE+e21lc3NhZ2V9PC9oMT5cclxuICAgICAgICAgICAgPHA+Q2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIG9yIFJlbG9hZCBwYWdlPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEluY2x1ZGUgdGl0bGU9e29TdGF0ZSAhPT0gdW5kZWZpbmVkID8gb1N0YXRlLm5hbWUgOiByb3V0ZXIucXVlcnkubmFtZX0gLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZUJhciAke2NvbmZpZ3MuYWNjfWB9PlxyXG4gICAgICAgICAgPG1vdGlvbi5pXHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogMCwgeDogXCItNjAlXCIsIGxlZnQ6IFwiNTAlXCIsIHJvdGF0ZTogXCItMjBkZWdcIiB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDIwIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxyXG4gICAgICAgICAgICAgIHJlcGVhdFR5cGU6IFwicmV2ZXJzZVwiLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y29uZmlncy5sb2dvfVxyXG4gICAgICAgICAgPjwvbW90aW9uLmk+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlSGVhZFwiPntyb3V0ZXIucXVlcnkubmFtZX08L3A+XHJcblxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e2xpc3RWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGVcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwic2hvd1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bVN0YXRlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17bGlzdFZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXtpdGVtLnNlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtICR7aXRlbS5zZWxlY3RlZCAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb1NlbGVjdChpdGVtLm5hbWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJDYXRlZ29yeVNlY3Rpb25cIj5cclxuICAgICAgICAgIDxtb3Rpb24uaDEgdmFyaWFudHM9e2hlYWRWYXJpYW50c30gaW5pdGlhbD17XCJoaWRlXCJ9IGFuaW1hdGU9e1wic2hvd1wifT5cclxuICAgICAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgICAgIDwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e2hlYWRWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD17XCJoaWRlXCJ9XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e1wic2hvd1wifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0Q2F0ZWdvcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgICAgIHtvU3RhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgb1N0YXRlLm9wdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2hlYWRWYXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cInNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIGV4aXQ9XCJoaWRlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3JvdXRlci5hc1BhdGh9LyR7b1N0YXRlLm5hbWV9LyR7aXRlbS5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPXtgaXRlbSAke2NvbmZpZ3MuYWNjfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake2l0ZW0ubG9nb30gdXNldHh0YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2VwaWNYNjcvbWRfYmxvZ3MvbWFpbi9jYXRlZ29yaWVzLyR7Y29udGV4dC5wYXJhbXMubmFtZX0uanNvbmA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgbGV0IGNJdGVtcyA9IGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLCBzZWxlY3RlZDogZmFsc2UgfSkpO1xyXG5cclxuICAgIGlmIChjSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjSXRlbXNbMF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IGNvbmZpZ3M6IGRhdGEuY29uZmlncywgaXRlbXM6IGNJdGVtcyB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IGVycjogdHJ1ZSwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lcGljWDY3L21kX2Jsb2dzL21haW4vREIuanNvbmA7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbmFtZXMgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGNvbnN0IHBhdGhzID0gbmFtZXMubWFwKChuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==