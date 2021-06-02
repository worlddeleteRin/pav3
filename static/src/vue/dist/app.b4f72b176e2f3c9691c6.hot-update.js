webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: apiGetProducts, apiGetCategoryProducts, apiGetCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetProducts\", function() { return apiGetProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetCategoryProducts\", function() { return apiGetCategoryProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetCategories\", function() { return apiGetCategories; });\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction apiGetProducts() {\n  return _apiGetProducts.apply(this, arguments);\n}\n\nfunction _apiGetProducts() {\n  _apiGetProducts = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/get_products').then(function (response) {\n              var r_status = response.data.status;\n\n              if (r_status == 1) {\n                _this.$store.commit('setProducts', response.data.products);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _apiGetProducts.apply(this, arguments);\n}\n\nfunction apiGetCategoryProducts() {\n  return _apiGetCategoryProducts.apply(this, arguments);\n}\n\nfunction _apiGetCategoryProducts() {\n  _apiGetCategoryProducts = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/get_category_products/', {\n              params: {\n                'category_id': 10\n              }\n            }).then(function (resp) {});\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _apiGetCategoryProducts.apply(this, arguments);\n}\n\nfunction apiGetCategories() {\n  return _apiGetCategories.apply(this, arguments);\n}\n\nfunction _apiGetCategories() {\n  _apiGetCategories = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var _this2 = this;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/get_categories').then(function (response) {\n              var r_status = response.data.status;\n\n              if (r_status == 1) {\n                _this2.$store.commit('setCategories', response.data.categories);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _apiGetCategories.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXRQcm9kdWN0cygpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvYXBpL2dldF9wcm9kdWN0cycsXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdHZhciByX3N0YXR1cyA9IHJlc3BvbnNlLmRhdGEuc3RhdHVzXG5cdFx0aWYgKHJfc3RhdHVzID09IDEpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdHMnLCByZXNwb25zZS5kYXRhLnByb2R1Y3RzKVxuXHRcdH1cbiAgICB9KVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaUdldENhdGVnb3J5UHJvZHVjdHMoKSB7XG5cdGF3YWl0IGF4aW9zLmdldChcblx0XHQnL2FwaS9nZXRfY2F0ZWdvcnlfcHJvZHVjdHMvJywge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdCdjYXRlZ29yeV9pZCc6IDEwLFxuXHRcdFx0fVxuXHRcdH1cblx0KS50aGVuKChyZXNwKSA9PiB7XG5cdFx0XG5cdH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXRDYXRlZ29yaWVzICgpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvYXBpL2dldF9jYXRlZ29yaWVzJyxcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0dmFyIHJfc3RhdHVzID0gcmVzcG9uc2UuZGF0YS5zdGF0dXNcblx0XHRpZiAocl9zdGF0dXMgPT0gMSkge1xuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRDYXRlZ29yaWVzJywgcmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKVxuXHRcdH1cbiAgICB9KVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBWUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})