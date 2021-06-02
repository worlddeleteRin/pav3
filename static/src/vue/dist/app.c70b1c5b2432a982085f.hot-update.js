webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var products_response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_api_js__WEBPACK_IMPORTED_MODULE_3__[\"apiGetCategoryProducts\"])(_this.category_id, _this.$route.query);\n\n            case 2:\n              products_response = _context.sent;\n              _this.products = products_response.data;\n              _this.current_page = products_response.current_page;\n              _this.page_start = products_response.page_start;\n              _this.page_end = products_response.page_end;\n              _this.page_has_next = products_response.page_has_next;\n              _this.page_has_prev = products_response.page_has_prev; //\t\tconsole.log('category is mounted now');\n              //\t\t// getting products attributesd\n              //\t\tvar products_filters = collectProductsAttributes(\n              //\t\t\tthis.current_category_products\t\n              //\t\t);\n              //\t\tthis.$store.commit('setAllFilters', products_filters);\n              //\t\n              //\t\t// getting products active filters\n              //\t\tvar active_filters = collectActiveAttributes(this.$route.query, products_filters);\n              //\t\tthis.$store.commit('setActiveFilters', active_filters);\n              //\t\tconsole.log('active filters are: ', active_filters);\t\t\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    } //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_3__[\"apiGetCategoryProducts\"],\n    changePage: function changePage(new_page) {\n      console.log('trigger page change. new page: ', new_page);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5jdXJyZW50IHBhZ2Uge3sgdGhpcy5jdXJyZW50X3BhZ2UgfX0gcGFnZSBzdGFydCB7eyB0aGlzLnBhZ2Vfc3RhcnQgfX0gcGFnZSBlbmQge3sgdGhpcy5wYWdlX2VuZCB9fSA8L2Rpdj5cblx0XHQ8ZGl2PiBoYXMgbmV4dCBwYWdlIHt7IHRoaXMucGFnZV9oYXNfbmV4dCB9fSBoYXMgcHJldiBwYWdlIHt7IHRoaXMucGFnZV9oYXNfcHJldiB9fSA8L2Rpdj5cblx0XHQ8ZGl2PnByb2R1Y3RzIGxlbmd0aCB7eyB0aGlzLnByb2R1Y3RzLmxlbmd0aCB9fTwvZGl2PlxuXHRcdDxkaXY+IGN1cnJlbnQgcm91dGUgcXVlcnkge3sgdGhpcy4kcm91dGUucXVlcnkgfX0gPC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLnByb2R1Y3RzXCJcblx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGVsLXBhZ2luYXRpb25cblx0XHRiYWNrZ3JvdW5kXG5cdFx0QGN1cnJlbnQtY2hhbmdlZD1cInRoaXMuY2hhbmdlUGFnZShuZXdfcGFnZSlcIlxuXHRcdGxheW91dD1cInByZXYsIHBhZ2VyLCBuZXh0LCB0b3RhbFwiXG5cdFx0OmN1cnJlbnQtcGFnZT1cInRoaXMuY3VycmVudF9wYWdlXCJcblx0XHQ6dG90YWw9XCIxMDAwICogMTBcIj5cblx0XHQ8L2VsLXBhZ2luYXRpb24+XG5cblx0XHRcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbnRhaW5lci52dWUnO1xuaW1wb3J0IHsgYXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyB9IGZyb20gJy4uL2FwaS5qcyc7IFxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdDYXRlZ29yeVBhZ2UnLFxuXHRwcm9wczogWydjYXRlZ29yeV9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdH0sXG5cdGFzeW5jIGJlZm9yZU1vdW50ICgpIHtcblx0XHR2YXIgcHJvZHVjdHNfcmVzcG9uc2UgPSBhd2FpdCBhcGlHZXRDYXRlZ29yeVByb2R1Y3RzKHRoaXMuY2F0ZWdvcnlfaWQsIHRoaXMuJHJvdXRlLnF1ZXJ5KTtcblx0XHQgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzX3Jlc3BvbnNlLmRhdGFcdFxuXHRcdCB0aGlzLmN1cnJlbnRfcGFnZSA9IHByb2R1Y3RzX3Jlc3BvbnNlLmN1cnJlbnRfcGFnZVxuXHRcdCB0aGlzLnBhZ2Vfc3RhcnQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX3N0YXJ0XG5cdFx0IHRoaXMucGFnZV9lbmQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2VuZFxuXHRcdCB0aGlzLnBhZ2VfaGFzX25leHQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2hhc19uZXh0XG5cdFx0IHRoaXMucGFnZV9oYXNfcHJldiA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2VfaGFzX3ByZXZcbi8vXHRcdGNvbnNvbGUubG9nKCdjYXRlZ29yeSBpcyBtb3VudGVkIG5vdycpO1xuLy9cdFx0Ly8gZ2V0dGluZyBwcm9kdWN0cyBhdHRyaWJ1dGVzZFxuLy9cdFx0dmFyIHByb2R1Y3RzX2ZpbHRlcnMgPSBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzKFxuLy9cdFx0XHR0aGlzLmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcdFxuLy9cdFx0KTtcbi8vXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWxsRmlsdGVycycsIHByb2R1Y3RzX2ZpbHRlcnMpO1xuLy9cdFxuLy9cdFx0Ly8gZ2V0dGluZyBwcm9kdWN0cyBhY3RpdmUgZmlsdGVyc1xuLy9cdFx0dmFyIGFjdGl2ZV9maWx0ZXJzID0gY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXModGhpcy4kcm91dGUucXVlcnksIHByb2R1Y3RzX2ZpbHRlcnMpO1xuLy9cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBY3RpdmVGaWx0ZXJzJywgYWN0aXZlX2ZpbHRlcnMpO1xuLy9cdFx0Y29uc29sZS5sb2coJ2FjdGl2ZSBmaWx0ZXJzIGFyZTogJywgYWN0aXZlX2ZpbHRlcnMpO1x0XHRcblx0fSxcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb2R1Y3RzOiB7fSxcblx0XHRcdGN1cnJlbnRfcGFnZTogbnVsbCxcblx0XHRcdHBhZ2Vfc3RhcnQ6IG51bGwsXG5cdFx0XHRwYWdlX2VuZDogbnVsbCxcblx0XHRcdHBhZ2VfaGFzX25leHQ6IG51bGwsXG5cdFx0XHRwYWdlX2hhc19wcmV2OiBudWxsLFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2NhdGVnb3J5ICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcdFxuXHRcdH0sXG4vL1x0XHRjdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzICgpIHtcbi8vXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5SWQodGhpcy5jYXRlZ29yeV9pZCk7XG4vL1x0XHR9LFxuLy9cdFx0Y3VycmVudF9wcm9kdWN0cyAoKSB7XG4vL1x0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzRmlsdGVyKFxuLy9cdFx0XHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1xuLy9cdFx0XHQpO1xuLy9cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGFwaUdldENhdGVnb3J5UHJvZHVjdHMsXG5cdFx0Y2hhbmdlUGFnZShuZXdfcGFnZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3RyaWdnZXIgcGFnZSBjaGFuZ2UuIG5ldyBwYWdlOiAnLCBuZXdfcGFnZSlcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQStCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFqREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})