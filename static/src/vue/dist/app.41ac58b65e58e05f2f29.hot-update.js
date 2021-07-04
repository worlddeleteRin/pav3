webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterContainer.vue */ \"./src/components/MainFilterContainer.vue\");\n/* harmony import */ var _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ActiveFiltersContainer.vue */ \"./src/components/ActiveFiltersContainer.vue\");\n/* harmony import */ var _components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MobileProductsMenu.vue */ \"./src/components/MobileProductsMenu.vue\");\n/* harmony import */ var _components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ActiveFiltersContainer: _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    MainFilterContainer: _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    MobileProductsMenu: _components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5___default.a\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.getApiCategoryProducts();\n\n            case 2:\n              _this.api_products_loaded = true;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      api_products_loaded: false,\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    }\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_6__[\"apiGetCategoryProducts\"],\n    changePage: function changePage() {\n      console.log(\"trigger page change. new page:\", event.target);\n      var path = this.$route.fullPath;\n      var query = this.$route.query;\n      var new_query = {};\n\n      for (var q_key in query) {\n        new_query[q_key] = query[q_key];\n      }\n\n      new_query['page'] = event.target.textContent;\n      console.log(path, new_query);\n      this.$router.push({\n        path: path,\n        query: new_query\n      });\n    },\n    getApiCategoryProducts: function getApiCategoryProducts() {\n      var _this2 = this;\n\n      return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var products_response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return Object(_api_js__WEBPACK_IMPORTED_MODULE_6__[\"apiGetCategoryProducts\"])(_this2.category_id, _this2.$route.query);\n\n              case 2:\n                products_response = _context2.sent;\n                _this2.products = products_response.data;\n                _this2.current_page = products_response.current_page;\n                _this2.page_start = products_response.page_start;\n                _this2.page_end = products_response.page_end;\n                _this2.page_has_next = products_response.page_has_next;\n                _this2.page_has_prev = products_response.page_has_prev; // set all filters for current products\n\n                _this2.$store.commit('setAllFilters', products_response.products_filters);\n\n              case 10:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBcblx0di1pZj1cInRoaXMuYXBpX3Byb2R1Y3RzX2xvYWRlZFwiXG5cdGNsYXNzPVwicHgtNCBteC1hdXRvIGJvcmRlciBib3JkZXItcmVkLTUwMCBtYXgtdy03eGxcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXCI+XG5cdFx0XHR7eyB0aGlzLmN1cnJlbnRfY2F0ZWdvcnkubmFtZSB9fVx0XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PiBhbGwgZmlsdGVyczoge3sgdGhpcy5hbGxfZmlsdGVycyB9fSA8L2Rpdj5cblx0XHQ8ZGl2PmN1cnJlbnQgcGFnZSB7eyB0aGlzLmN1cnJlbnRfcGFnZSB9fSBwYWdlIHN0YXJ0IHt7IHRoaXMucGFnZV9zdGFydCB9fSBwYWdlIGVuZCB7eyB0aGlzLnBhZ2VfZW5kIH19IDwvZGl2PlxuXHRcdDxkaXY+IGhhcyBuZXh0IHBhZ2Uge3sgdGhpcy5wYWdlX2hhc19uZXh0IH19IGhhcyBwcmV2IHBhZ2Uge3sgdGhpcy5wYWdlX2hhc19wcmV2IH19IDwvZGl2PlxuXHRcdDxkaXY+cHJvZHVjdHMgbGVuZ3RoIHt7IHRoaXMucHJvZHVjdHMubGVuZ3RoIH19PC9kaXY+XG5cdFx0PGRpdj4gY3VycmVudCByb3V0ZSBxdWVyeSB7eyB0aGlzLiRyb3V0ZS5xdWVyeSB9fSA8L2Rpdj5cblxuXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleFwiPlxuXG5cdFx0PE1haW5GaWx0ZXJDb250YWluZXJcblx0XHRjbGFzcz1cImludmlzaWJsZSB3LTAgbWQ6dy0xLzQgbWQ6dmlzaWJsZVwiXG5cdFx0Lz5cdFxuXG5cdFx0PGRpdlxuXHRcdGNsYXNzPVwidy1mdWxsIGJvcmRlci0yIGJvcmRlci1yZWQtNTAwIG1kOnctNC81XCJcblx0XHQ+XG5cdFx0PE1vYmlsZVByb2R1Y3RzTWVudSAvPlxuXG5cdFx0PEFjdGl2ZUZpbHRlcnNDb250YWluZXIgLz5cblxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLnByb2R1Y3RzXCJcblx0XHQvPlxuXG5cdFx0PC9kaXY+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXZcblx0XHR2LWlmPVwiKHRoaXMucGFnZV9lbmQgLSB0aGlzLnBhZ2Vfc3RhcnQpID4gMFwiXG5cdFx0PlxuXHRcdDxlbC1wYWdpbmF0aW9uXG5cdFx0YmFja2dyb3VuZFxuXHRcdEBjdXJyZW50LWNoYW5nZT1cInRoaXMuY2hhbmdlUGFnZSgpXCJcblx0XHRsYXlvdXQ9XCJwcmV2LCBwYWdlciwgbmV4dFwiXG5cdFx0OmN1cnJlbnQtcGFnZT1cInRoaXMuY3VycmVudF9wYWdlXCJcblx0XHQ6dG90YWw9XCJ0aGlzLnBhZ2VfZW5kICogMTBcIj5cblx0XHQ8L2VsLXBhZ2luYXRpb24+XG5cdFx0PC9kaXY+XG5cblx0XHRcblx0PC9kaXY+XG5cblx0PGRpdiB2LWVsc2U+XG5cdFx0TG9hZGluZyBwcm9kdWN0cy4uLlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgTWFpbkZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlJztcbmltcG9ydCBBY3RpdmVGaWx0ZXJzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQWN0aXZlRmlsdGVyc0NvbnRhaW5lci52dWUnO1xuaW1wb3J0IE1vYmlsZVByb2R1Y3RzTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZVByb2R1Y3RzTWVudS52dWUnO1xuaW1wb3J0IHsgYXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyB9IGZyb20gJy4uL2FwaS5qcyc7IFxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBY3RpdmVGaWx0ZXJzQ29udGFpbmVyLFx0XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdFx0TWFpbkZpbHRlckNvbnRhaW5lcixcblx0XHRNb2JpbGVQcm9kdWN0c01lbnUsXG5cdH0sXG5cdGFzeW5jIGJlZm9yZU1vdW50ICgpIHtcblx0XHRhd2FpdCB0aGlzLmdldEFwaUNhdGVnb3J5UHJvZHVjdHMoKVxuXHRcdHRoaXMuYXBpX3Byb2R1Y3RzX2xvYWRlZCA9IHRydWU7XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcGlfcHJvZHVjdHNfbG9hZGVkOiBmYWxzZSxcblx0XHRcdHByb2R1Y3RzOiB7fSxcblx0XHRcdGN1cnJlbnRfcGFnZTogbnVsbCxcblx0XHRcdHBhZ2Vfc3RhcnQ6IG51bGwsXG5cdFx0XHRwYWdlX2VuZDogbnVsbCxcblx0XHRcdHBhZ2VfaGFzX25leHQ6IG51bGwsXG5cdFx0XHRwYWdlX2hhc19wcmV2OiBudWxsLFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2NhdGVnb3J5ICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcdFxuXHRcdH0sXG4vL1x0XHRjdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzICgpIHtcbi8vXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5SWQodGhpcy5jYXRlZ29yeV9pZCk7XG4vL1x0XHR9LFxuLy9cdFx0Y3VycmVudF9wcm9kdWN0cyAoKSB7XG4vL1x0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzRmlsdGVyKFxuLy9cdFx0XHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1xuLy9cdFx0XHQpO1xuLy9cdFx0fSxcblx0XHRhbGxfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFsbF9maWx0ZXJzO1xuXHRcdH0sXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRhcGlHZXRDYXRlZ29yeVByb2R1Y3RzLFxuXHRcdGNoYW5nZVBhZ2UoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInRyaWdnZXIgcGFnZSBjaGFuZ2UuIG5ldyBwYWdlOlwiLCBldmVudC50YXJnZXQpXG5cdFx0XHR2YXIgcGF0aCA9IHRoaXMuJHJvdXRlLmZ1bGxQYXRoO1xuXHRcdFx0dmFyIHF1ZXJ5ID0gdGhpcy4kcm91dGUucXVlcnk7XHRcblx0XHRcdHZhciBuZXdfcXVlcnkgPSB7fVxuXHRcdFx0Zm9yICh2YXIgcV9rZXkgaW4gcXVlcnkpIHtcblx0XHRcdFx0bmV3X3F1ZXJ5W3Ffa2V5XSA9IHF1ZXJ5W3Ffa2V5XVxuXHRcdFx0fVxuXHRcdFx0bmV3X3F1ZXJ5WydwYWdlJ10gPSBldmVudC50YXJnZXQudGV4dENvbnRlbnRcblx0XHRcdGNvbnNvbGUubG9nKHBhdGgsIG5ld19xdWVyeSlcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogcGF0aCwgcXVlcnk6IG5ld19xdWVyeX0pXG5cdFx0fSxcblx0XHRhc3luYyBnZXRBcGlDYXRlZ29yeVByb2R1Y3RzKCkge1xuXHRcdFx0dmFyIHByb2R1Y3RzX3Jlc3BvbnNlID0gYXdhaXQgYXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyh0aGlzLmNhdGVnb3J5X2lkLCB0aGlzLiRyb3V0ZS5xdWVyeSk7XG5cdFx0IFx0dGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzX3Jlc3BvbnNlLmRhdGFcdFxuXHRcdCBcdHRoaXMuY3VycmVudF9wYWdlID0gcHJvZHVjdHNfcmVzcG9uc2UuY3VycmVudF9wYWdlXG5cdFx0IFx0dGhpcy5wYWdlX3N0YXJ0ID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9zdGFydFxuXHRcdCBcdHRoaXMucGFnZV9lbmQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2VuZFxuXHRcdCBcdHRoaXMucGFnZV9oYXNfbmV4dCA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2VfaGFzX25leHRcblx0XHQgXHR0aGlzLnBhZ2VfaGFzX3ByZXYgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2hhc19wcmV2XHRcblx0XHRcdC8vIHNldCBhbGwgZmlsdGVycyBmb3IgY3VycmVudCBwcm9kdWN0c1xuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBbGxGaWx0ZXJzJywgcHJvZHVjdHNfcmVzcG9uc2UucHJvZHVjdHNfZmlsdGVycylcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUF4QkE7QUF4Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MobileProductsMenu.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MobileProductsMenu.vue?vue&type=template&id=a1719b56":
false,

/***/ "./src/components/MobileProductsMenu.vue":
/*!***********************************************!*\
  !*** ./src/components/MobileProductsMenu.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVQcm9kdWN0c01lbnUudnVlLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MobileProductsMenu.vue\n");

/***/ }),

/***/ "./src/components/MobileProductsMenu.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/MobileProductsMenu.vue?vue&type=template&id=a1719b56":
false

})