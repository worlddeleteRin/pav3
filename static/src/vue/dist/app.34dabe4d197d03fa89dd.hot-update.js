webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterContainer.vue */ \"./src/components/MainFilterContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    MainFilterContainer: _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.getApiCategoryProducts();\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    }\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_4__[\"apiGetCategoryProducts\"],\n    changePage: function changePage() {\n      console.log(\"trigger page change. new page:\", event.target);\n      var path = this.$route.fullPath;\n      var query = this.$route.query;\n      var new_query = {};\n\n      for (var q_key in query) {\n        new_query[q_key] = query[q_key];\n      }\n\n      new_query['page'] = event.target.textContent;\n      console.log(path, new_query);\n      this.$router.push({\n        path: path,\n        query: new_query\n      });\n    },\n    getApiCategoryProducts: function getApiCategoryProducts() {\n      var _this2 = this;\n\n      return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var products_response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return Object(_api_js__WEBPACK_IMPORTED_MODULE_4__[\"apiGetCategoryProducts\"])(_this2.category_id, _this2.$route.query);\n\n              case 2:\n                products_response = _context2.sent;\n                _this2.products = products_response.data;\n                _this2.current_page = products_response.current_page;\n                _this2.page_start = products_response.page_start;\n                _this2.page_end = products_response.page_end;\n                _this2.page_has_next = products_response.page_has_next;\n                _this2.page_has_prev = products_response.page_has_prev; // set all filters for current products\n\n                _this2.$store.commit('setAllFilters', products_response.products_filters);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5jdXJyZW50IHBhZ2Uge3sgdGhpcy5jdXJyZW50X3BhZ2UgfX0gcGFnZSBzdGFydCB7eyB0aGlzLnBhZ2Vfc3RhcnQgfX0gcGFnZSBlbmQge3sgdGhpcy5wYWdlX2VuZCB9fSA8L2Rpdj5cblx0XHQ8ZGl2PiBoYXMgbmV4dCBwYWdlIHt7IHRoaXMucGFnZV9oYXNfbmV4dCB9fSBoYXMgcHJldiBwYWdlIHt7IHRoaXMucGFnZV9oYXNfcHJldiB9fSA8L2Rpdj5cblx0XHQ8ZGl2PnByb2R1Y3RzIGxlbmd0aCB7eyB0aGlzLnByb2R1Y3RzLmxlbmd0aCB9fTwvZGl2PlxuXHRcdDxkaXY+IGN1cnJlbnQgcm91dGUgcXVlcnkge3sgdGhpcy4kcm91dGUucXVlcnkgfX0gPC9kaXY+XG5cdFx0PGRpdj4gYWxsIGZpbHRlcnM6IHt7IHRoaXMuYWxsX2ZpbHRlcnMgfX0gPC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLnByb2R1Y3RzXCJcblx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGVsLXBhZ2luYXRpb25cblx0XHRiYWNrZ3JvdW5kXG5cdFx0QGN1cnJlbnQtY2hhbmdlPVwidGhpcy5jaGFuZ2VQYWdlKClcIlxuXHRcdGxheW91dD1cInByZXYsIHBhZ2VyLCBuZXh0LCB0b3RhbFwiXG5cdFx0OmN1cnJlbnQtcGFnZT1cInRoaXMuY3VycmVudF9wYWdlXCJcblx0XHQ6dG90YWw9XCIxMDAwICogMTBcIj5cblx0XHQ8L2VsLXBhZ2luYXRpb24+XG5cblx0XHRcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbnRhaW5lci52dWUnO1xuaW1wb3J0IE1haW5GaWx0ZXJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgeyBhcGlHZXRDYXRlZ29yeVByb2R1Y3RzIH0gZnJvbSAnLi4vYXBpLmpzJzsgXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnQ2F0ZWdvcnlQYWdlJyxcblx0cHJvcHM6IFsnY2F0ZWdvcnlfaWQnXSxcblx0Y29tcG9uZW50czoge1xuXHRcdFByb2R1Y3RzQ29udGFpbmVyLFxuXHRcdE1haW5GaWx0ZXJDb250YWluZXIsXG5cdH0sXG5cdGFzeW5jIGJlZm9yZU1vdW50ICgpIHtcblx0XHRhd2FpdCB0aGlzLmdldEFwaUNhdGVnb3J5UHJvZHVjdHMoKVxuXHR9LFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvZHVjdHM6IHt9LFxuXHRcdFx0Y3VycmVudF9wYWdlOiBudWxsLFxuXHRcdFx0cGFnZV9zdGFydDogbnVsbCxcblx0XHRcdHBhZ2VfZW5kOiBudWxsLFxuXHRcdFx0cGFnZV9oYXNfbmV4dDogbnVsbCxcblx0XHRcdHBhZ2VfaGFzX3ByZXY6IG51bGwsXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfY2F0ZWdvcnkgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0fSxcbi8vXHRcdGN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHMgKCkge1xuLy9cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcbi8vXHRcdH0sXG4vL1x0XHRjdXJyZW50X3Byb2R1Y3RzICgpIHtcbi8vXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNGaWx0ZXIoXG4vL1x0XHRcdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG4vL1x0XHRcdCk7XG4vL1x0XHR9LFxuXHRcdGFsbF9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWxsX2ZpbHRlcnM7XG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGFwaUdldENhdGVnb3J5UHJvZHVjdHMsXG5cdFx0Y2hhbmdlUGFnZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJpZ2dlciBwYWdlIGNoYW5nZS4gbmV3IHBhZ2U6XCIsIGV2ZW50LnRhcmdldClcblx0XHRcdHZhciBwYXRoID0gdGhpcy4kcm91dGUuZnVsbFBhdGg7XG5cdFx0XHR2YXIgcXVlcnkgPSB0aGlzLiRyb3V0ZS5xdWVyeTtcdFxuXHRcdFx0dmFyIG5ld19xdWVyeSA9IHt9XG5cdFx0XHRmb3IgKHZhciBxX2tleSBpbiBxdWVyeSkge1xuXHRcdFx0XHRuZXdfcXVlcnlbcV9rZXldID0gcXVlcnlbcV9rZXldXG5cdFx0XHR9XG5cdFx0XHRuZXdfcXVlcnlbJ3BhZ2UnXSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudFxuXHRcdFx0Y29uc29sZS5sb2cocGF0aCwgbmV3X3F1ZXJ5KVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBwYXRoLCBxdWVyeTogbmV3X3F1ZXJ5fSlcblx0XHR9LFxuXHRcdGFzeW5jIGdldEFwaUNhdGVnb3J5UHJvZHVjdHMoKSB7XG5cdFx0XHR2YXIgcHJvZHVjdHNfcmVzcG9uc2UgPSBhd2FpdCBhcGlHZXRDYXRlZ29yeVByb2R1Y3RzKHRoaXMuY2F0ZWdvcnlfaWQsIHRoaXMuJHJvdXRlLnF1ZXJ5KTtcblx0XHQgXHR0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHNfcmVzcG9uc2UuZGF0YVx0XG5cdFx0IFx0dGhpcy5jdXJyZW50X3BhZ2UgPSBwcm9kdWN0c19yZXNwb25zZS5jdXJyZW50X3BhZ2Vcblx0XHQgXHR0aGlzLnBhZ2Vfc3RhcnQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX3N0YXJ0XG5cdFx0IFx0dGhpcy5wYWdlX2VuZCA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2VfZW5kXG5cdFx0IFx0dGhpcy5wYWdlX2hhc19uZXh0ID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9oYXNfbmV4dFxuXHRcdCBcdHRoaXMucGFnZV9oYXNfcHJldiA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2VfaGFzX3ByZXZcdFxuXHRcdFx0Ly8gc2V0IGFsbCBmaWx0ZXJzIGZvciBjdXJyZW50IHByb2R1Y3RzXG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldEFsbEZpbHRlcnMnLCBwcm9kdWN0c19yZXNwb25zZS5wcm9kdWN0c19maWx0ZXJzKVxuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PlxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBeEJBO0FBcENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})