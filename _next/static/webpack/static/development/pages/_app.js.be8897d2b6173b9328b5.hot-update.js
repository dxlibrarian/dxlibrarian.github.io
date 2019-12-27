webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/createStore.js":
/*!******************************!*\
  !*** ./redux/createStore.js ***!
  \******************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares */ "./redux/middlewares/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./redux/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./constants.js");








var composeEnhancers = _constants__WEBPACK_IMPORTED_MODULE_7__["IS_CLIENT"] && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
var createStore = function createStore() {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]), composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_middlewares__WEBPACK_IMPORTED_MODULE_4__["middlewares"]))));

  if (_constants__WEBPACK_IMPORTED_MODULE_7__["IS_CLIENT"]) {
    var jwtToken;

    var _parse = Object(query_string__WEBPACK_IMPORTED_MODULE_1__["parse"])(window.location.search);

    jwtToken = _parse.jwtToken;

    if (jwtToken == null) {
      jwtToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('jwtToken');
    }

    if (jwtToken != null && jwtToken.constructor === String && jwtToken.length > 0) {
      store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["login"])(jwtToken));
    } else {
      store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["authorize"])(jwtToken));
    }
  }

  return store;
};

/***/ })

})
//# sourceMappingURL=_app.js.be8897d2b6173b9328b5.hot-update.js.map