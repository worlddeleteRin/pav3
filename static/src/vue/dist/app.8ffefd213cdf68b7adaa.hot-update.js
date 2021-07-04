webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterContainer.vue */ \"./src/components/MainFilterContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    MainFilterContainer: _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    this.getApiCategoryProducts();\n  },\n  data: function data() {\n    return {\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    }\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_4__[\"apiGetCategoryProducts\"],\n    changePage: function changePage() {\n      console.log(\"trigger page change. new page:\", event.target);\n      var path = this.$route.fullPath;\n      var query = this.$route.query;\n      var new_query = {};\n\n      for (var q_key in query) {\n        new_query[q_key] = query[q_key];\n      }\n\n      new_query['page'] = event.target.textContent;\n      console.log(path, new_query);\n      this.$router.push({\n        path: path,\n        query: new_query\n      });\n    },\n    getApiCategoryProducts: function getApiCategoryProducts() {\n      var _this = this;\n\n      return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var products_response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_api_js__WEBPACK_IMPORTED_MODULE_4__[\"apiGetCategoryProducts\"])(_this.category_id, _this.$route.query);\n\n              case 2:\n                products_response = _context.sent;\n                _this.products = products_response.data;\n                _this.current_page = products_response.current_page;\n                _this.page_start = products_response.page_start;\n                _this.page_end = products_response.page_end;\n                _this.page_has_next = products_response.page_has_next;\n                _this.page_has_prev = products_response.page_has_prev; // set all filters for current products\n\n                _this.$store.commit('setAllFilters', products_response.products_filters);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5jdXJyZW50IHBhZ2Uge3sgdGhpcy5jdXJyZW50X3BhZ2UgfX0gcGFnZSBzdGFydCB7eyB0aGlzLnBhZ2Vfc3RhcnQgfX0gcGFnZSBlbmQge3sgdGhpcy5wYWdlX2VuZCB9fSA8L2Rpdj5cblx0XHQ8ZGl2PiBoYXMgbmV4dCBwYWdlIHt7IHRoaXMucGFnZV9oYXNfbmV4dCB9fSBoYXMgcHJldiBwYWdlIHt7IHRoaXMucGFnZV9oYXNfcHJldiB9fSA8L2Rpdj5cblx0XHQ8ZGl2PnByb2R1Y3RzIGxlbmd0aCB7eyB0aGlzLnByb2R1Y3RzLmxlbmd0aCB9fTwvZGl2PlxuXHRcdDxkaXY+IGN1cnJlbnQgcm91dGUgcXVlcnkge3sgdGhpcy4kcm91dGUucXVlcnkgfX0gPC9kaXY+XG5cblxuXHRcdDxNYWluRmlsdGVyQ29udGFpbmVyIC8+XHRcblxuXHRcdDxkaXY+XG5cdFx0PFByb2R1Y3RzQ29udGFpbmVyIFxuXHRcdDpwcm9kdWN0cz1cInRoaXMucHJvZHVjdHNcIlxuXHRcdC8+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZWwtcGFnaW5hdGlvblxuXHRcdGJhY2tncm91bmRcblx0XHRAY3VycmVudC1jaGFuZ2U9XCJ0aGlzLmNoYW5nZVBhZ2UoKVwiXG5cdFx0bGF5b3V0PVwicHJldiwgcGFnZXIsIG5leHQsIHRvdGFsXCJcblx0XHQ6Y3VycmVudC1wYWdlPVwidGhpcy5jdXJyZW50X3BhZ2VcIlxuXHRcdDp0b3RhbD1cIjEwMDAgKiAxMFwiPlxuXHRcdDwvZWwtcGFnaW5hdGlvbj5cblxuXHRcdFxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgTWFpbkZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlJztcbmltcG9ydCB7IGFwaUdldENhdGVnb3J5UHJvZHVjdHMgfSBmcm9tICcuLi9hcGkuanMnOyBcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdDYXRlZ29yeVBhZ2UnLFxuXHRwcm9wczogWydjYXRlZ29yeV9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdFx0TWFpbkZpbHRlckNvbnRhaW5lcixcblx0fSxcblx0YmVmb3JlTW91bnQgKCkge1xuXHRcdHRoaXMuZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cygpXG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9kdWN0czoge30sXG5cdFx0XHRjdXJyZW50X3BhZ2U6IG51bGwsXG5cdFx0XHRwYWdlX3N0YXJ0OiBudWxsLFxuXHRcdFx0cGFnZV9lbmQ6IG51bGwsXG5cdFx0XHRwYWdlX2hhc19uZXh0OiBudWxsLFxuXHRcdFx0cGFnZV9oYXNfcHJldjogbnVsbCxcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Y3VycmVudF9jYXRlZ29yeSAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQodGhpcy5jYXRlZ29yeV9pZCk7XHRcblx0XHR9LFxuLy9cdFx0Y3VycmVudF9jYXRlZ29yeV9wcm9kdWN0cyAoKSB7XG4vL1x0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzQnlDYXRlZ29yeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1xuLy9cdFx0fSxcbi8vXHRcdGN1cnJlbnRfcHJvZHVjdHMgKCkge1xuLy9cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0ZpbHRlcihcbi8vXHRcdFx0XHR0aGlzLmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcbi8vXHRcdFx0KTtcbi8vXHRcdH0sXG5cdFx0YWxsX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyxcblx0XHRjaGFuZ2VQYWdlKCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cmlnZ2VyIHBhZ2UgY2hhbmdlLiBuZXcgcGFnZTpcIiwgZXZlbnQudGFyZ2V0KVxuXHRcdFx0dmFyIHBhdGggPSB0aGlzLiRyb3V0ZS5mdWxsUGF0aDtcblx0XHRcdHZhciBxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5O1x0XG5cdFx0XHR2YXIgbmV3X3F1ZXJ5ID0ge31cblx0XHRcdGZvciAodmFyIHFfa2V5IGluIHF1ZXJ5KSB7XG5cdFx0XHRcdG5ld19xdWVyeVtxX2tleV0gPSBxdWVyeVtxX2tleV1cblx0XHRcdH1cblx0XHRcdG5ld19xdWVyeVsncGFnZSddID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XG5cdFx0XHRjb25zb2xlLmxvZyhwYXRoLCBuZXdfcXVlcnkpXG5cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGgsIHF1ZXJ5OiBuZXdfcXVlcnl9KVxuXHRcdH0sXG5cdFx0YXN5bmMgZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cygpIHtcblx0XHRcdHZhciBwcm9kdWN0c19yZXNwb25zZSA9IGF3YWl0IGFwaUdldENhdGVnb3J5UHJvZHVjdHModGhpcy5jYXRlZ29yeV9pZCwgdGhpcy4kcm91dGUucXVlcnkpO1xuXHRcdCBcdHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0c19yZXNwb25zZS5kYXRhXHRcblx0XHQgXHR0aGlzLmN1cnJlbnRfcGFnZSA9IHByb2R1Y3RzX3Jlc3BvbnNlLmN1cnJlbnRfcGFnZVxuXHRcdCBcdHRoaXMucGFnZV9zdGFydCA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2Vfc3RhcnRcblx0XHQgXHR0aGlzLnBhZ2VfZW5kID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9lbmRcblx0XHQgXHR0aGlzLnBhZ2VfaGFzX25leHQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2hhc19uZXh0XG5cdFx0IFx0dGhpcy5wYWdlX2hhc19wcmV2ID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9oYXNfcHJldlx0XG5cdFx0XHQvLyBzZXQgYWxsIGZpbHRlcnMgZm9yIGN1cnJlbnQgcHJvZHVjdHNcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWxsRmlsdGVycycsIHByb2R1Y3RzX3Jlc3BvbnNlLnByb2R1Y3RzX2ZpbHRlcnMpXG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBeEJBO0FBcENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})