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
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "errPanel",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Check your internet connection or Reload page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Include__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: oState !== undefined ? oState.name : router.query.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sideBar ".concat(acc),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "sideHead",
          children: router.query.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "list",
          children: mState.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "item ".concat(item.selected && "active"),
              onClick: function onClick() {
                return doSelect(item.name);
              },
              children: item.name
            }, item.name, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "subCategorySection",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Category"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)]
              }, item.name, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW25hbWVdL1tpdGVtTmFtZV0vaW5kZXguanMiXSwibmFtZXMiOlsiY2F0ZWdvcnkiLCJsb2dvIiwiYWNjIiwiaXRlbXMiLCJlcnIiLCJtZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJtU3RhdGUiLCJzZXRNU3RhdGUiLCJsZW5ndGgiLCJvU3RhdGUiLCJzZXRPU3RhdGUiLCJkb1NlbGVjdCIsIm5hbWUiLCJyb3V0ZSIsImFzUGF0aCIsInByZXZSb3V0ZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwicmVwbGFjZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJxdWVyeSIsIm1hcCIsIml0ZW0iLCJzZWxlY3RlZCIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BTVo7QUFBQTs7QUFBQTs7QUFBQSxNQUxEQyxJQUtDLFFBTERBLElBS0M7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSx3QkFIREMsS0FHQztBQUFBLE1BSERBLEtBR0MsMkJBSE8sRUFHUDtBQUFBLHNCQUZEQyxHQUVDO0FBQUEsTUFGREEsR0FFQyx5QkFGSyxLQUVMO0FBQUEsMEJBRERDLE9BQ0M7QUFBQSxNQUREQSxPQUNDLDZCQURTLEVBQ1Q7QUFDRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURDLGtCQUUyQkMsK0NBQVEsQ0FBQ0wsS0FBRCxDQUZuQztBQUFBLE1BRU1NLE1BRk47QUFBQSxNQUVjQyxTQUZkOztBQUFBLG1CQUcyQkYsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCLENBQWxCLEdBQXNCRixNQUFNLENBQUMsQ0FBRCxDQUE1QixHQUFrQyxFQUFuQyxDQUhuQztBQUFBLE1BR01HLE1BSE47QUFBQSxNQUdjQyxTQUhkOztBQUtELE1BQU1D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QURrQjtBQUFBLFdBQW5CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0dBdEV1QmYsUTtVQU9QTyxrRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbmFtZV0vW2l0ZW1OYW1lXS4zYmY2N2MxMDUzYTU0MDE5MzdiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSW5jbHVkZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9JbmNsdWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yeSh7XHJcbiAgbG9nbyxcclxuICBhY2MsXHJcbiAgaXRlbXMgPSBbXSxcclxuICBlcnIgPSBmYWxzZSxcclxuICBtZXNzYWdlID0gXCJcIixcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttU3RhdGUsIHNldE1TdGF0ZV0gPSB1c2VTdGF0ZShpdGVtcyk7XHJcbiAgY29uc3QgW29TdGF0ZSwgc2V0T1N0YXRlXSA9IHVzZVN0YXRlKG1TdGF0ZS5sZW5ndGggIT09IDAgPyBtU3RhdGVbMF0gOiBbXSk7XHJcblxyXG4gIGNvbnN0IGRvU2VsZWN0ID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVyLmFzUGF0aDtcclxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHJvdXRlLnN1YnN0cmluZygwLCByb3V0ZS5sYXN0SW5kZXhPZihcIi9cIikpO1xyXG4gICAgLy9yb3V0ZXIuYmFjaygpO1xyXG4gICAgLy9yb3V0ZXIucmVwbGFjZShgJHtwcmV2Um91dGV9LyR7bmFtZX1gKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKGAke3ByZXZSb3V0ZX0vJHtuYW1lfWAsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoZXJyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxJbmNsdWRlIHRpdGxlPVwiU2VydmVyIEVycm9yXCIgLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyUGFuZWxcIj5cclxuICAgICAgICAgICAgPGgxPnttZXNzYWdlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPkNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbiBvciBSZWxvYWQgcGFnZTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbmNsdWRlIHRpdGxlPXtvU3RhdGUgIT09IHVuZGVmaW5lZCA/IG9TdGF0ZS5uYW1lIDogcm91dGVyLnF1ZXJ5Lm5hbWV9IC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGVCYXIgJHthY2N9YH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2xvZ299PjwvaT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGVIZWFkXCI+e3JvdXRlci5xdWVyeS5uYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAge21TdGF0ZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gJHtpdGVtLnNlbGVjdGVkICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvU2VsZWN0KGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdWJDYXRlZ29yeVNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMT5DYXRlZ29yeTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RDYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICB7b1N0YXRlLm9wdGlvbnMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cm91dGVyLmFzUGF0aH0vJHtpdGVtLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e2BpdGVtICR7YWNjfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake2l0ZW0ubG9nb30gdXNldHh0YH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBuYW1lLCBpdGVtTmFtZSB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgVVJMID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZXBpY1g2Ny9tZF9ibG9ncy9tYWluXCI7XHJcblxyXG4gIGNvbnN0IHNVcmwgPSBgJHtVUkx9L2NhdGVnb3JpZXMvJHtuYW1lfS5qc29uYDtcclxuXHJcbiAgY29uc3Qgc1JlcyA9IGF3YWl0IGZldGNoKHNVcmwpO1xyXG4gIGNvbnN0IHNEYXRhID0gYXdhaXQgc1Jlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHsgbG9nbywgYWNjIH0gPSBzRGF0YS5jb25maWdzO1xyXG5cclxuICBjb25zdCBpdGVtcyA9IHNEYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIC4uLml0ZW0sXHJcbiAgICBzZWxlY3RlZDogaXRlbU5hbWUgPT09IGl0ZW0ubmFtZSA/IHRydWUgOiBmYWxzZSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtTmFtZTogaXRlbU5hbWUsXHJcbiAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgbG9nbzogbG9nbyxcclxuICAgICAgYWNjOiBhY2MsXHJcbiAgICAgIGtleTogaXRlbU5hbWUsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBVUkwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lcGljWDY3L21kX2Jsb2dzL21haW5cIjtcclxuICBjb25zdCBtVXJsID0gYCR7VVJMfS9EQi5qc29uYDtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChtVXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgbmFtZXMgPSBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbSk7XHJcblxyXG4gIGxldCBwYXRocyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjVXJsID0gYCR7VVJMfS9jYXRlZ29yaWVzLyR7bmFtZXNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpfS5qc29uYDtcclxuICAgIGNvbnN0IGNSZXMgPSBhd2FpdCBmZXRjaChjVXJsKTtcclxuICAgIGNvbnN0IGNEYXRhID0gYXdhaXQgY1Jlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBjRGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBwYXRocy5wdXNoKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWVzW2ldLm5hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgIGl0ZW1OYW1lOiBpdGVtc1tqXS5uYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==