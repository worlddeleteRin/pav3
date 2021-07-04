webpackHotUpdate("app",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: apiGetProducts, apiGetProductById, apiGetCategoryProducts, apiGetCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetProducts\", function() { return apiGetProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetProductById\", function() { return apiGetProductById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetCategoryProducts\", function() { return apiGetCategoryProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiGetCategories\", function() { return apiGetCategories; });\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction apiGetProducts() {\n  return _apiGetProducts.apply(this, arguments);\n}\n\nfunction _apiGetProducts() {\n  _apiGetProducts = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var _this = this;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/get_products').then(function (response) {\n              var r_status = response.data.status;\n\n              if (r_status == 1) {\n                _this.$store.commit('setProducts', response.data.products);\n\n                _this.$store.commit('setAllFilters', response.data.products_filters);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _apiGetProducts.apply(this, arguments);\n}\n\nfunction apiGetProductById(_x) {\n  return _apiGetProductById.apply(this, arguments);\n}\n\nfunction _apiGetProductById() {\n  _apiGetProductById = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product_id) {\n    var product_data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            product_data = {};\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/product/' + product_id).then(function (resp) {\n              product_data = resp.data.product_data;\n            });\n\n          case 3:\n            return _context2.abrupt(\"return\", product_data);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _apiGetProductById.apply(this, arguments);\n}\n\nfunction apiGetCategoryProducts(_x2, _x3) {\n  return _apiGetCategoryProducts.apply(this, arguments);\n}\n\nfunction _apiGetCategoryProducts() {\n  _apiGetCategoryProducts = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(category_id, query) {\n    var products, params, key;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            products = {};\n            params = {\n              'category_id': category_id,\n              'size': \"large,small\"\n            };\n\n            for (key in query) {\n              if (query[key]) {\n                params[key] = query[key].join(',');\n              }\n            }\n\n            console.log('params are', params);\n            _context3.next = 6;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/get_category_products/', {\n              params: params\n            }).then(function (resp) {\n              products = resp.data.products;\n              console.log('response is', resp.data.products);\n            });\n\n          case 6:\n            return _context3.abrupt(\"return\", products);\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _apiGetCategoryProducts.apply(this, arguments);\n}\n\nfunction apiGetCategories() {\n  return _apiGetCategories.apply(this, arguments);\n}\n\nfunction _apiGetCategories() {\n  _apiGetCategories = Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var _this2 = this;\n\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/get_categories/').then(function (response) {\n              var r_status = response.data.status;\n\n              if (r_status == 1) {\n                _this2.$store.commit('setCategories', response.data.categories);\n              }\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _apiGetCategories.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS5qcz9kNzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXRQcm9kdWN0cygpIHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICcvYXBpL2dldF9wcm9kdWN0cycsXG4gICAgKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdHZhciByX3N0YXR1cyA9IHJlc3BvbnNlLmRhdGEuc3RhdHVzXG5cdFx0aWYgKHJfc3RhdHVzID09IDEpIHtcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UHJvZHVjdHMnLCByZXNwb25zZS5kYXRhLnByb2R1Y3RzKVxuXHRcdFx0IHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWxsRmlsdGVycycsIHJlc3BvbnNlLmRhdGEucHJvZHVjdHNfZmlsdGVycylcblx0XHR9XG4gICAgfSlcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXRQcm9kdWN0QnlJZChwcm9kdWN0X2lkKSB7XG5cdHZhciBwcm9kdWN0X2RhdGEgPSB7fVxuXHRhd2FpdCBheGlvcy5nZXQoXG5cdCcvYXBpL3Byb2R1Y3QvJyArIHByb2R1Y3RfaWRcblx0KS50aGVuKChyZXNwKSA9PiB7XG5cdFx0cHJvZHVjdF9kYXRhID0gcmVzcC5kYXRhLnByb2R1Y3RfZGF0YVx0XG5cdH0pO1xuXHRyZXR1cm4gcHJvZHVjdF9kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlHZXRDYXRlZ29yeVByb2R1Y3RzKGNhdGVnb3J5X2lkLCBxdWVyeSkge1xuXHR2YXIgcHJvZHVjdHMgPSB7fVxuXHR2YXIgcGFyYW1zID0ge1xuXHRcdCdjYXRlZ29yeV9pZCc6IGNhdGVnb3J5X2lkLFxuXHRcdCdzaXplJzogXCJsYXJnZSxzbWFsbFwiLFxuXHR9XG5cdGZvciAodmFyIGtleSBpbiBxdWVyeSkge1xuXHRcdGlmIChxdWVyeVtrZXldKSB7XG5cdFx0XHRwYXJhbXNba2V5XSA9IHF1ZXJ5W2tleV0uam9pbignLCcpXHRcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coJ3BhcmFtcyBhcmUnLCBwYXJhbXMpXG5cdGF3YWl0IGF4aW9zLmdldChcblx0XHQnL2FwaS9nZXRfY2F0ZWdvcnlfcHJvZHVjdHMvJywge1xuXHRcdFx0cGFyYW1zOiBwYXJhbXMsXG5cdFx0fVxuXHQpLnRoZW4oKHJlc3ApID0+IHtcblx0XHRwcm9kdWN0cyA9IHJlc3AuZGF0YS5wcm9kdWN0cztcblx0XHRjb25zb2xlLmxvZygncmVzcG9uc2UgaXMnLCByZXNwLmRhdGEucHJvZHVjdHMpXHRcblx0fSlcblx0cmV0dXJuIHByb2R1Y3RzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBpR2V0Q2F0ZWdvcmllcyAoKSB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAnL2FwaS9nZXRfY2F0ZWdvcmllcy8nLFxuICAgICkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHR2YXIgcl9zdGF0dXMgPSByZXNwb25zZS5kYXRhLnN0YXR1c1xuXHRcdGlmIChyX3N0YXR1cyA9PSAxKSB7XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldENhdGVnb3JpZXMnLCByZXNwb25zZS5kYXRhLmNhdGVnb3JpZXMpXG5cdFx0fVxuICAgIH0pXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFXQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQVVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFBQTtBQWNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQXVCQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api.js\n");

/***/ })

})