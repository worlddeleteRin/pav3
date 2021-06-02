webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.getApiCategoryProducts();\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    } //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_3__[\"apiGetCategoryProducts\"],\n    changePage: function changePage() {\n      console.log(\"trigger page change. new page:\", event.target);\n      var path = this.$route.fullPath;\n      var query = this.$route.query;\n      query['page'] = event.target.textContent;\n      console.log(path, query.page); //\t\t\tthis.$router.push({ path: path, query: query })\n\n      this.$router.push({\n        path: path,\n        query: {\n          'somequery': 'somevalue'\n        }\n      });\n    },\n    getApiCategoryProducts: function getApiCategoryProducts() {\n      var _this2 = this;\n\n      return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var products_response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return Object(_api_js__WEBPACK_IMPORTED_MODULE_3__[\"apiGetCategoryProducts\"])(_this2.category_id, _this2.$route.query);\n\n              case 2:\n                products_response = _context2.sent;\n                _this2.products = products_response.data;\n                _this2.current_page = products_response.current_page;\n                _this2.page_start = products_response.page_start;\n                _this2.page_end = products_response.page_end;\n                _this2.page_has_next = products_response.page_has_next;\n                _this2.page_has_prev = products_response.page_has_prev;\n\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5jdXJyZW50IHBhZ2Uge3sgdGhpcy5jdXJyZW50X3BhZ2UgfX0gcGFnZSBzdGFydCB7eyB0aGlzLnBhZ2Vfc3RhcnQgfX0gcGFnZSBlbmQge3sgdGhpcy5wYWdlX2VuZCB9fSA8L2Rpdj5cblx0XHQ8ZGl2PiBoYXMgbmV4dCBwYWdlIHt7IHRoaXMucGFnZV9oYXNfbmV4dCB9fSBoYXMgcHJldiBwYWdlIHt7IHRoaXMucGFnZV9oYXNfcHJldiB9fSA8L2Rpdj5cblx0XHQ8ZGl2PnByb2R1Y3RzIGxlbmd0aCB7eyB0aGlzLnByb2R1Y3RzLmxlbmd0aCB9fTwvZGl2PlxuXHRcdDxkaXY+IGN1cnJlbnQgcm91dGUgcXVlcnkge3sgdGhpcy4kcm91dGUucXVlcnkgfX0gPC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLnByb2R1Y3RzXCJcblx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGVsLXBhZ2luYXRpb25cblx0XHRiYWNrZ3JvdW5kXG5cdFx0QGN1cnJlbnQtY2hhbmdlPVwidGhpcy5jaGFuZ2VQYWdlKClcIlxuXHRcdGxheW91dD1cInByZXYsIHBhZ2VyLCBuZXh0LCB0b3RhbFwiXG5cdFx0OmN1cnJlbnQtcGFnZT1cInRoaXMuY3VycmVudF9wYWdlXCJcblx0XHQ6dG90YWw9XCIxMDAwICogMTBcIj5cblx0XHQ8L2VsLXBhZ2luYXRpb24+XG5cblx0XHRcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbnRhaW5lci52dWUnO1xuaW1wb3J0IHsgYXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyB9IGZyb20gJy4uL2FwaS5qcyc7IFxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdDYXRlZ29yeVBhZ2UnLFxuXHRwcm9wczogWydjYXRlZ29yeV9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdH0sXG5cdGFzeW5jIGJlZm9yZU1vdW50ICgpIHtcblx0XHRhd2FpdCB0aGlzLmdldEFwaUNhdGVnb3J5UHJvZHVjdHMoKVxuLy9cdFx0Y29uc29sZS5sb2coJ2NhdGVnb3J5IGlzIG1vdW50ZWQgbm93Jyk7XG4vL1x0XHQvLyBnZXR0aW5nIHByb2R1Y3RzIGF0dHJpYnV0ZXNkXG4vL1x0XHR2YXIgcHJvZHVjdHNfZmlsdGVycyA9IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMoXG4vL1x0XHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1x0XG4vL1x0XHQpO1xuLy9cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBbGxGaWx0ZXJzJywgcHJvZHVjdHNfZmlsdGVycyk7XG4vL1x0XG4vL1x0XHQvLyBnZXR0aW5nIHByb2R1Y3RzIGFjdGl2ZSBmaWx0ZXJzXG4vL1x0XHR2YXIgYWN0aXZlX2ZpbHRlcnMgPSBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgcHJvZHVjdHNfZmlsdGVycyk7XG4vL1x0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldEFjdGl2ZUZpbHRlcnMnLCBhY3RpdmVfZmlsdGVycyk7XG4vL1x0XHRjb25zb2xlLmxvZygnYWN0aXZlIGZpbHRlcnMgYXJlOiAnLCBhY3RpdmVfZmlsdGVycyk7XHRcdFxuXHR9LFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvZHVjdHM6IHt9LFxuXHRcdFx0Y3VycmVudF9wYWdlOiBudWxsLFxuXHRcdFx0cGFnZV9zdGFydDogbnVsbCxcblx0XHRcdHBhZ2VfZW5kOiBudWxsLFxuXHRcdFx0cGFnZV9oYXNfbmV4dDogbnVsbCxcblx0XHRcdHBhZ2VfaGFzX3ByZXY6IG51bGwsXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfY2F0ZWdvcnkgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0fSxcbi8vXHRcdGN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHMgKCkge1xuLy9cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcbi8vXHRcdH0sXG4vL1x0XHRjdXJyZW50X3Byb2R1Y3RzICgpIHtcbi8vXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNGaWx0ZXIoXG4vL1x0XHRcdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG4vL1x0XHRcdCk7XG4vL1x0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyxcblx0XHRjaGFuZ2VQYWdlKCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cmlnZ2VyIHBhZ2UgY2hhbmdlLiBuZXcgcGFnZTpcIiwgZXZlbnQudGFyZ2V0KVxuXHRcdFx0dmFyIHBhdGggPSB0aGlzLiRyb3V0ZS5mdWxsUGF0aDtcblx0XHRcdHZhciBxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5O1x0XG5cdFx0XHRxdWVyeVsncGFnZSddID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XG5cdFx0XHRjb25zb2xlLmxvZyhwYXRoLCBxdWVyeS5wYWdlKVxuLy9cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGgsIHF1ZXJ5OiBxdWVyeSB9KVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBwYXRoLCAgcXVlcnk6IHsgJ3NvbWVxdWVyeSc6ICdzb21ldmFsdWUnIH19KVxuXHRcdH0sXG5cdFx0YXN5bmMgZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cygpIHtcblx0XHRcdHZhciBwcm9kdWN0c19yZXNwb25zZSA9IGF3YWl0IGFwaUdldENhdGVnb3J5UHJvZHVjdHModGhpcy5jYXRlZ29yeV9pZCwgdGhpcy4kcm91dGUucXVlcnkpO1xuXHRcdCBcdHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0c19yZXNwb25zZS5kYXRhXHRcblx0XHQgXHR0aGlzLmN1cnJlbnRfcGFnZSA9IHByb2R1Y3RzX3Jlc3BvbnNlLmN1cnJlbnRfcGFnZVxuXHRcdCBcdHRoaXMucGFnZV9zdGFydCA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2Vfc3RhcnRcblx0XHQgXHR0aGlzLnBhZ2VfZW5kID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9lbmRcblx0XHQgXHR0aGlzLnBhZ2VfaGFzX25leHQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2hhc19uZXh0XG5cdFx0IFx0dGhpcy5wYWdlX2hhc19wcmV2ID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9oYXNfcHJldlx0XG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUErQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQW5CQTtBQTNDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})