webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductsFilterContainer',\n  data: function data() {\n    return {};\n  },\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.getters.getAllFilters(this.$parent.current_category_products);\n    },\n    active_filters: function active_filters() {\n      return this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n    }\n  },\n  methods: {\n    isActive: function isActive() {\n      return true;\n    },\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"],\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueActive: function isFilterValueActive(filter_key, filter_value) {\n      if (this.active_filters[filter_key].includes(filter_value)) {\n        return true;\n      }\n\n      return false;\n    },\n    updateCheckbox: function updateCheckbox(filter_key, filter_value) {\n      // first add current key/value to active filters\n      console.log('to add:', filter_key, filter_value);\n      console.log('ev', event.target.value);\n      this.$store.commit('addActiveFilter', {\n        filter_key: filter_key,\n        filter_value: filter_value\n      });\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHRcblx0PGRpdlxuXHR2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiB0aGlzLmN1cnJlbnRfYXR0clwiXG5cdDprZXk9XCJrZXlcIj5cblx0XHR7eyBrZXkgfX1cblx0XHQ8aW5wdXRcblx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdHYtZm9yPVwiYXR0cl92YWx1ZSBpbiB2YWx1ZVwiXG5cdFx0OmtleT1cImF0dHJfdmFsdWVcIlxuXHRcdDp2YWx1ZT1cImF0dHJfdmFsdWVcIlxuXHRcdDpjaGVja2VkPVwiaXNGaWx0ZXJWYWx1ZUFjdGl2ZShrZXksIGF0dHJfdmFsdWUpXCJcblx0XHRAaW5wdXQ9XCJ1cGRhdGVDaGVja2JveChrZXksIHZhbHVlKVwiXG5cdFx0Lz5cblx0PC9kaXY+XG5cdFxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMsIGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzfSBmcm9tICcuLi91c2VmdWxfbWV0aG9kcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdQcm9kdWN0c0ZpbHRlckNvbnRhaW5lcicsXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfYXR0ciAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBbGxGaWx0ZXJzKFxuXHRcdFx0dGhpcy4kcGFyZW50LmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRhY3RpdmVfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBY3RpdmVGaWx0ZXJzKHRoaXMuJHJvdXRlLCB0aGlzLmN1cnJlbnRfYXR0cik7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aXNBY3RpdmUgKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLFxuXHRcdGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzLFxuXHRcdGlzRmlsdGVyVmFsdWVBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRpZih0aGlzLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLmluY2x1ZGVzKGZpbHRlcl92YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHR1cGRhdGVDaGVja2JveCAoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHQvLyBmaXJzdCBhZGQgY3VycmVudCBrZXkvdmFsdWUgdG8gYWN0aXZlIGZpbHRlcnNcblx0XHRcdGNvbnNvbGUubG9nKCd0byBhZGQ6JywgZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVxuXHRcdFx0Y29uc29sZS5sb2coJ2V2JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRBY3RpdmVGaWx0ZXInLCB7ZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlfSk7XG5cdFx0XHRjb25zb2xlLmxvZygnbmVlZCB0byB1cGRhdGUgcm91dGUnKVxuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7IFxuXHRcdFx0dmFyIG5ld19wYXRoID0gdGhpcy4kcm91dGUucGF0aCsnPycrZmlsdGVyX3F1ZXJ5XG5cdFx0XHRjb25zb2xlLmxvZygncm91dGUgcXVlcnkgaXMnLCB0aGlzLiRyb3V0ZS5wYXRoKVxuXHRcdFx0Y29uc29sZS5sb2coJ2ZpbHRlciBxdWVyeSBpcycsIGZpbHRlcl9xdWVyeSlcblx0XHRcdGNvbnNvbGUubG9nKCd0aGUgd2hvbGUgcm91dGUgaXMnLCBuZXdfcGF0aClcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})