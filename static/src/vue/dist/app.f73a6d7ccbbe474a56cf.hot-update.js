webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductsFilterContainer',\n  data: function data() {\n    return {};\n  },\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.getters.getAllFilters(this.$parent.current_category_products);\n    },\n    active_filters: function active_filters() {\n      return this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n    }\n  },\n  methods: {\n    isActive: function isActive() {\n      return true;\n    },\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"],\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueActive: function isFilterValueActive(filter_key, filter_value) {\n      if (filter_key in this.active_filters) {\n        if (this.active_filters[filter_key].includes(filter_value.id)) {\n          return true;\n        }\n      }\n\n      return false;\n    },\n    updateCheckbox: function updateCheckbox(filter_key, filter_value) {\n      // first add or remove current key/value to active filters\n      var current_value = filter_value[\"id\"];\n\n      if (!event.target.checked) {\n        console.log('target is checked, try to remove');\n        this.$store.commit('removeActiveFilter', {\n          filter_key: filter_key,\n          current_value: current_value\n        });\n      } else {\n        console.log('to add:', filter_key, filter_value);\n        this.$store.commit('addActiveFilter', {\n          filter_key: filter_key,\n          current_value: current_value\n        });\n      }\n\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHRcblx0PGRpdlxuXHR2LWZvcj1cIih2YWx1ZXMsIGtleSkgaW4gdGhpcy5jdXJyZW50X2F0dHJcIlxuXHQ6a2V5PVwia2V5XCI+XG5cdFx0e3sgdGhpcy5jdXJyZW50X2F0dHJba2V5XS5kaXNwbGF5X25hbWUgfX1cblx0XHQ8ZGl2XG5cdFx0di1mb3I9XCJhdHRyX3ZhbHVlIGluIHZhbHVlcy52YWx1ZXNcIlxuXHRcdDprZXk9XCJhdHRyX3ZhbHVlXCJcblx0XHQ+XG5cdFx0PGlucHV0XG5cdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHQ6aWQ9XCJrZXkgKyAnLScgKyBhdHRyX3ZhbHVlXCJcblx0XHQ6dmFsdWU9XCJhdHRyX3ZhbHVlXCJcblx0XHQ6Y2hlY2tlZD1cImlzRmlsdGVyVmFsdWVBY3RpdmUoa2V5LCBhdHRyX3ZhbHVlKVwiXG5cdFx0QGlucHV0PVwidXBkYXRlQ2hlY2tib3goa2V5LCBhdHRyX3ZhbHVlKVwiXG5cdFx0Lz5cblx0XHQ8bGFiZWxcblx0XHQ6Zm9yPVwia2V5ICsgJy0nICsgYXR0cl92YWx1ZVwiXHRcblx0XHQ+XG5cdFx0IHt7IGF0dHJfdmFsdWUuZGlzcGxheV9uYW1lIH19XG5cdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdFxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMsIGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzfSBmcm9tICcuLi91c2VmdWxfbWV0aG9kcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdQcm9kdWN0c0ZpbHRlckNvbnRhaW5lcicsXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfYXR0ciAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBbGxGaWx0ZXJzKFxuXHRcdFx0dGhpcy4kcGFyZW50LmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRhY3RpdmVfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBY3RpdmVGaWx0ZXJzKHRoaXMuJHJvdXRlLCB0aGlzLmN1cnJlbnRfYXR0cik7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aXNBY3RpdmUgKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLFxuXHRcdGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzLFxuXHRcdGlzRmlsdGVyVmFsdWVBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRpZiAoZmlsdGVyX2tleSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRcdGlmKHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uaW5jbHVkZXMoZmlsdGVyX3ZhbHVlLmlkKSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHR1cGRhdGVDaGVja2JveCAoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHQvLyBmaXJzdCBhZGQgb3IgcmVtb3ZlIGN1cnJlbnQga2V5L3ZhbHVlIHRvIGFjdGl2ZSBmaWx0ZXJzXG5cdFx0XHR2YXIgY3VycmVudF92YWx1ZSA9IGZpbHRlcl92YWx1ZVtcImlkXCJdXG5cdFx0XHRpZiAoIWV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0YXJnZXQgaXMgY2hlY2tlZCwgdHJ5IHRvIHJlbW92ZScpXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgncmVtb3ZlQWN0aXZlRmlsdGVyJyxcblx0XHRcdFx0e2ZpbHRlcl9rZXksIGN1cnJlbnRfdmFsdWUgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndG8gYWRkOicsIGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRBY3RpdmVGaWx0ZXInLCBcblx0XHRcdFx0e2ZpbHRlcl9rZXksIGN1cnJlbnRfdmFsdWUgfSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnNvbGUubG9nKCduZWVkIHRvIHVwZGF0ZSByb3V0ZScpXG5cdFx0XHR2YXIgZmlsdGVyX3F1ZXJ5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRGaWx0ZXJRdWVyeTsgXG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdGNvbnNvbGUubG9nKCdyb3V0ZSBxdWVyeSBpcycsIHRoaXMuJHJvdXRlLnBhdGgpXG5cdFx0XHRjb25zb2xlLmxvZygnZmlsdGVyIHF1ZXJ5IGlzJywgZmlsdGVyX3F1ZXJ5KVxuXHRcdFx0Y29uc29sZS5sb2coJ3RoZSB3aG9sZSByb3V0ZSBpcycsIG5ld19wYXRoKVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2gobmV3X3BhdGgpXG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})