webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterContainer.vue */ \"./src/components/MainFilterContainer.vue\");\n/* harmony import */ var _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ActiveFiltersContainer.vue */ \"./src/components/ActiveFiltersContainer.vue\");\n/* harmony import */ var _components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MobileProductsMenu.vue */ \"./src/components/MobileProductsMenu.vue\");\n/* harmony import */ var _components_MobileMainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MobileMainFilterContainer.vue */ \"./src/components/MobileMainFilterContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ActiveFiltersContainer: _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    MainFilterContainer: _components_MainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    MobileProductsMenu: _components_MobileProductsMenu_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    MobileMainFilterContainer: _components_MobileMainFilterContainer_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.getApiCategoryProducts();\n\n            case 2:\n              _context.next = 4;\n              return _this.initFilters();\n\n            case 4:\n              _this.api_products_loaded = true;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      api_products_loaded: false,\n      products: {},\n      current_page: null,\n      page_start: null,\n      page_end: null,\n      page_has_next: null,\n      page_has_prev: null\n    };\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    }\n  },\n  methods: {\n    apiGetCategoryProducts: _api_js__WEBPACK_IMPORTED_MODULE_7__[\"apiGetCategoryProducts\"],\n    initActiveFilters: initActiveFilters,\n    changePage: function changePage() {\n      console.log(\"trigger page change. new page:\", event.target);\n      var path = this.$route.fullPath;\n      var query = this.$route.query;\n      var new_query = {};\n\n      for (var q_key in query) {\n        new_query[q_key] = query[q_key];\n      }\n\n      new_query['page'] = event.target.textContent;\n      console.log(path, new_query);\n      this.$router.push({\n        path: path,\n        query: new_query\n      });\n    },\n    getApiCategoryProducts: function getApiCategoryProducts() {\n      var _arguments = arguments,\n          _this2 = this;\n\n      return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var query, products_response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : _this2.$route.query;\n                console.log('query is', query);\n                _context2.next = 4;\n                return Object(_api_js__WEBPACK_IMPORTED_MODULE_7__[\"apiGetCategoryProducts\"])(_this2.category_id, query);\n\n              case 4:\n                products_response = _context2.sent;\n                _this2.products = products_response.data;\n                _this2.current_page = products_response.current_page;\n                _this2.page_start = products_response.page_start;\n                _this2.page_end = products_response.page_end;\n                _this2.page_has_next = products_response.page_has_next;\n                _this2.page_has_prev = products_response.page_has_prev; // set all filters for current products\n\n                _this2.$store.commit('setAllFilters', products_response.products_filters);\n\n              case 12:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBcblx0di1pZj1cInRoaXMuYXBpX3Byb2R1Y3RzX2xvYWRlZFwiXG5cdGNsYXNzPVwicHgtNCBteC1hdXRvIGJvcmRlciBib3JkZXItcmVkLTUwMCBtYXgtdy03eGxcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgdXBwZXJjYXNlIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXCI+XG5cdFx0XHR7eyB0aGlzLmN1cnJlbnRfY2F0ZWdvcnkubmFtZSB9fVx0XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PiBhbGwgZmlsdGVyczoge3sgdGhpcy5hbGxfZmlsdGVycyB9fSA8L2Rpdj5cblx0XHQ8ZGl2PmN1cnJlbnQgcGFnZSB7eyB0aGlzLmN1cnJlbnRfcGFnZSB9fSBwYWdlIHN0YXJ0IHt7IHRoaXMucGFnZV9zdGFydCB9fSBwYWdlIGVuZCB7eyB0aGlzLnBhZ2VfZW5kIH19IDwvZGl2PlxuXHRcdDxkaXY+IGhhcyBuZXh0IHBhZ2Uge3sgdGhpcy5wYWdlX2hhc19uZXh0IH19IGhhcyBwcmV2IHBhZ2Uge3sgdGhpcy5wYWdlX2hhc19wcmV2IH19IDwvZGl2PlxuXHRcdDxkaXY+cHJvZHVjdHMgbGVuZ3RoIHt7IHRoaXMucHJvZHVjdHMubGVuZ3RoIH19PC9kaXY+XG5cdFx0PGRpdj4gY3VycmVudCByb3V0ZSBxdWVyeSB7eyB0aGlzLiRyb3V0ZS5xdWVyeSB9fSA8L2Rpdj5cblxuXG5cdFx0PE1vYmlsZU1haW5GaWx0ZXJDb250YWluZXIgLz5cblxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4XCI+XG5cblx0XHQ8TWFpbkZpbHRlckNvbnRhaW5lclxuXHRcdGNsYXNzPVwiaW52aXNpYmxlIHctMCBtZDp3LTEvNCBtZDp2aXNpYmxlXCJcblx0XHQvPlx0XG5cblx0XHQ8ZGl2XG5cdFx0Y2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgbWQ6dy00LzVcIlxuXHRcdD5cblx0XHQ8TW9iaWxlUHJvZHVjdHNNZW51IC8+XG5cblx0XHQ8QWN0aXZlRmlsdGVyc0NvbnRhaW5lciAvPlxuXG5cdFx0PFByb2R1Y3RzQ29udGFpbmVyIFxuXHRcdDpwcm9kdWN0cz1cInRoaXMucHJvZHVjdHNcIlxuXHRcdC8+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdlxuXHRcdHYtaWY9XCIodGhpcy5wYWdlX2VuZCAtIHRoaXMucGFnZV9zdGFydCkgPiAwXCJcblx0XHQ+XG5cdFx0PGVsLXBhZ2luYXRpb25cblx0XHRiYWNrZ3JvdW5kXG5cdFx0QGN1cnJlbnQtY2hhbmdlPVwidGhpcy5jaGFuZ2VQYWdlKClcIlxuXHRcdGxheW91dD1cInByZXYsIHBhZ2VyLCBuZXh0XCJcblx0XHQ6Y3VycmVudC1wYWdlPVwidGhpcy5jdXJyZW50X3BhZ2VcIlxuXHRcdDp0b3RhbD1cInRoaXMucGFnZV9lbmQgKiAxMFwiPlxuXHRcdDwvZWwtcGFnaW5hdGlvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdFxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IHYtZWxzZT5cblx0XHRMb2FkaW5nIHByb2R1Y3RzLi4uXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXIudnVlJztcbmltcG9ydCBNYWluRmlsdGVyQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkZpbHRlckNvbnRhaW5lci52dWUnO1xuaW1wb3J0IEFjdGl2ZUZpbHRlcnNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgTW9iaWxlUHJvZHVjdHNNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlUHJvZHVjdHNNZW51LnZ1ZSc7XG5pbXBvcnQgTW9iaWxlTWFpbkZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZU1haW5GaWx0ZXJDb250YWluZXIudnVlJztcbmltcG9ydCB7IGFwaUdldENhdGVnb3J5UHJvZHVjdHMgfSBmcm9tICcuLi9hcGkuanMnOyBcbmltcG9ydCB7IGluaXRGaWx0ZXJzIH0gZnJvbSAnLi4vdXNlZnVsX21ldGhvZHMuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBY3RpdmVGaWx0ZXJzQ29udGFpbmVyLFx0XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdFx0TWFpbkZpbHRlckNvbnRhaW5lcixcblx0XHRNb2JpbGVQcm9kdWN0c01lbnUsXG5cdFx0TW9iaWxlTWFpbkZpbHRlckNvbnRhaW5lcixcblx0fSxcblx0YXN5bmMgYmVmb3JlTW91bnQgKCkge1xuXHRcdGF3YWl0IHRoaXMuZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cygpXG5cdFx0YXdhaXQgdGhpcy5pbml0RmlsdGVycygpO1xuXHRcdHRoaXMuYXBpX3Byb2R1Y3RzX2xvYWRlZCA9IHRydWU7XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcGlfcHJvZHVjdHNfbG9hZGVkOiBmYWxzZSxcblx0XHRcdHByb2R1Y3RzOiB7fSxcblx0XHRcdGN1cnJlbnRfcGFnZTogbnVsbCxcblx0XHRcdHBhZ2Vfc3RhcnQ6IG51bGwsXG5cdFx0XHRwYWdlX2VuZDogbnVsbCxcblx0XHRcdHBhZ2VfaGFzX25leHQ6IG51bGwsXG5cdFx0XHRwYWdlX2hhc19wcmV2OiBudWxsLFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2NhdGVnb3J5ICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcdFxuXHRcdH0sXG5cdFx0YWxsX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXBpR2V0Q2F0ZWdvcnlQcm9kdWN0cyxcblx0XHRpbml0QWN0aXZlRmlsdGVycyxcblx0XHRjaGFuZ2VQYWdlKCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cmlnZ2VyIHBhZ2UgY2hhbmdlLiBuZXcgcGFnZTpcIiwgZXZlbnQudGFyZ2V0KVxuXHRcdFx0dmFyIHBhdGggPSB0aGlzLiRyb3V0ZS5mdWxsUGF0aDtcblx0XHRcdHZhciBxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5O1x0XG5cdFx0XHR2YXIgbmV3X3F1ZXJ5ID0ge31cblx0XHRcdGZvciAodmFyIHFfa2V5IGluIHF1ZXJ5KSB7XG5cdFx0XHRcdG5ld19xdWVyeVtxX2tleV0gPSBxdWVyeVtxX2tleV1cblx0XHRcdH1cblx0XHRcdG5ld19xdWVyeVsncGFnZSddID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50XG5cdFx0XHRjb25zb2xlLmxvZyhwYXRoLCBuZXdfcXVlcnkpXG5cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IHBhdGgsIHF1ZXJ5OiBuZXdfcXVlcnl9KVxuXHRcdH0sXG5cdFx0YXN5bmMgZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cyhxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5KSB7XG5cdFx0XHRjb25zb2xlLmxvZygncXVlcnkgaXMnLCBxdWVyeSlcblx0XHRcdHZhciBwcm9kdWN0c19yZXNwb25zZSA9IGF3YWl0IGFwaUdldENhdGVnb3J5UHJvZHVjdHModGhpcy5jYXRlZ29yeV9pZCwgcXVlcnkpO1xuXHRcdCBcdHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0c19yZXNwb25zZS5kYXRhXHRcblx0XHQgXHR0aGlzLmN1cnJlbnRfcGFnZSA9IHByb2R1Y3RzX3Jlc3BvbnNlLmN1cnJlbnRfcGFnZVxuXHRcdCBcdHRoaXMucGFnZV9zdGFydCA9IHByb2R1Y3RzX3Jlc3BvbnNlLnBhZ2Vfc3RhcnRcblx0XHQgXHR0aGlzLnBhZ2VfZW5kID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9lbmRcblx0XHQgXHR0aGlzLnBhZ2VfaGFzX25leHQgPSBwcm9kdWN0c19yZXNwb25zZS5wYWdlX2hhc19uZXh0XG5cdFx0IFx0dGhpcy5wYWdlX2hhc19wcmV2ID0gcHJvZHVjdHNfcmVzcG9uc2UucGFnZV9oYXNfcHJldlx0XG5cdFx0XHQvLyBzZXQgYWxsIGZpbHRlcnMgZm9yIGN1cnJlbnQgcHJvZHVjdHNcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWxsRmlsdGVycycsIHByb2R1Y3RzX3Jlc3BvbnNlLnByb2R1Y3RzX2ZpbHRlcnMpXG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBMUJBO0FBbENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})