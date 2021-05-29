webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductsFilterContainer',\n  data: function data() {\n    return {};\n  },\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.getters.getAllFilters(this.$parent.current_category_products);\n    },\n    active_filters: function active_filters() {\n      return this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n    }\n  },\n  methods: {\n    isActive: function isActive() {\n      return true;\n    },\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"],\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueActive: function isFilterValueActive(filter_key, filter_value) {\n      console.log('check if filter active, f value is', filter_key, filter_value);\n\n      if (filter_key in this.active_filters) {\n        if (!filter_value === undefined) {\n          if (this.active_filters[filter_key].includes(filter_value.code)) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    },\n    getFilterType: function getFilterType(filter_key) {\n      return this.current_attr[filter_key].filter_type;\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    updateFilterOption: function updateFilterOption(filter_key, filter_value) {\n      console.log(filter_key, filter_value);\n    },\n    updateFilterCheckbox: function updateFilterCheckbox(filter_key, filter_value) {\n      // first add or remove current key/value to active filters\n      var filter_params = {\n        \"f_key\": filter_key,\n        \"filter_value\": filter_value\n      };\n\n      if (!event.target.checked) {\n        console.log('target is checked, try to remove', filter_value);\n        this.$store.commit('removeActiveFilter', filter_params);\n      } else {\n        console.log('to add is params:', filter_params);\n        this.$store.commit('addActiveFilter', filter_params);\n      } // now update filter routes\n\n\n      this.updateFilterRoutes();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHRcblx0PGRpdlxuXHR2LWZvcj1cIih2YWx1ZXMsIGtleSkgaW4gdGhpcy5jdXJyZW50X2F0dHJcIlxuXHQ6a2V5PVwia2V5XCI+XG5cdFx0e3sgdGhpcy5jdXJyZW50X2F0dHJba2V5XS5kaXNwbGF5X25hbWUgfX1cblx0XHRcdFxuXHRcdDxkaXZcblx0XHR2LWlmPVwidGhpcy5nZXRGaWx0ZXJUeXBlKGtleSwgYXR0cl92YWx1ZSkgPT0gJ211bHRpcGxlJ1wiXG5cdFx0di1mb3I9XCJhdHRyX3ZhbHVlIGluIHZhbHVlcy52YWx1ZXNcIlxuXHRcdDprZXk9XCJhdHRyX3ZhbHVlXCJcblx0XHQ+XG5cdFx0PGlucHV0XG5cdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHQ6aWQ9XCJrZXkgKyAnLScgKyBhdHRyX3ZhbHVlXCJcblx0XHQ6dmFsdWU9XCJhdHRyX3ZhbHVlXCJcblx0XHQ6Y2hlY2tlZD1cImlzRmlsdGVyVmFsdWVBY3RpdmUoa2V5LCBhdHRyX3ZhbHVlKVwiXG5cdFx0QGlucHV0PVwidXBkYXRlRmlsdGVyQ2hlY2tib3goa2V5LCBhdHRyX3ZhbHVlKVwiXG5cdFx0Lz5cblx0XHQ8bGFiZWxcblx0XHQ6Zm9yPVwia2V5ICsgJy0nICsgYXR0cl92YWx1ZVwiXHRcblx0XHQ+XG5cdFx0XHR7eyBhdHRyX3ZhbHVlIH19XG5cdFx0IHt7IGF0dHJfdmFsdWUuZGlzcGxheV9uYW1lIH19XG5cdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblxuXHRcdFxuXHRcdDxkaXZcblx0XHR2LXNob3c9XCJ0aGlzLmdldEZpbHRlclR5cGUoa2V5KSA9PSAnb3B0aW9uJ1wiXG5cdFx0di1mb3I9XCJhdHRyX3ZhbHVlIGluIHZhbHVlcy52YWx1ZXNcIlxuXHRcdDprZXk9XCJhdHRyX3ZhbHVlXCJcblx0XHQ+XG5cdFx0PGlucHV0XG5cdFx0dHlwZT1cInJhZGlvXCJcblx0XHQ6aWQ9XCJrZXkgKyAnLScgKyBhdHRyX3ZhbHVlXCJcblx0XHQ6dmFsdWU9XCJhdHRyX3ZhbHVlXCJcblx0XHQ6Y2hlY2tlZD1cImlzRmlsdGVyVmFsdWVBY3RpdmUoa2V5KVwiXG5cdFx0QGlucHV0PVwidXBkYXRlRmlsdGVyT3B0aW9uKGtleSwgYXR0cl92YWx1ZSlcIlxuXHRcdC8+XG5cdFx0PGxhYmVsXG5cdFx0OmZvcj1cImtleSArICctJyArIGF0dHJfdmFsdWVcIlxuXHRcdD5cblx0XHQge3sgYXR0cl92YWx1ZS5kaXNwbGF5X25hbWUgfX1cblx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXG5cdDwvZGl2PlxuXHRcblxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLCBjb2xsZWN0QWN0aXZlQXR0cmlidXRlc30gZnJvbSAnLi4vdXNlZnVsX21ldGhvZHMuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnUHJvZHVjdHNGaWx0ZXJDb250YWluZXInLFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2F0dHIgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QWxsRmlsdGVycyhcblx0XHRcdHRoaXMuJHBhcmVudC5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QWN0aXZlRmlsdGVycyh0aGlzLiRyb3V0ZSwgdGhpcy5jdXJyZW50X2F0dHIpO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGlzQWN0aXZlICgpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0Y29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyxcblx0XHRjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyxcblx0XHRpc0ZpbHRlclZhbHVlQWN0aXZlKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdGNvbnNvbGUubG9nKCdjaGVjayBpZiBmaWx0ZXIgYWN0aXZlLCBmIHZhbHVlIGlzJywgZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVxuXHRcdFx0aWYgKGZpbHRlcl9rZXkgaW4gdGhpcy5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0XHRpZiAoIWZpbHRlcl92YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5hY3RpdmVfZmlsdGVyc1tmaWx0ZXJfa2V5XS5pbmNsdWRlcyhmaWx0ZXJfdmFsdWUuY29kZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0Z2V0RmlsdGVyVHlwZShmaWx0ZXJfa2V5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50X2F0dHJbZmlsdGVyX2tleV0uZmlsdGVyX3R5cGU7XG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJSb3V0ZXMoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbmVlZCB0byB1cGRhdGUgcm91dGUnKVxuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdGNvbnNvbGUubG9nKCdyb3V0ZSBxdWVyeSBpcycsIHRoaXMuJHJvdXRlLnBhdGgpXG5cdFx0XHRjb25zb2xlLmxvZygnZmlsdGVyIHF1ZXJ5IGlzJywgZmlsdGVyX3F1ZXJ5KVxuXHRcdFx0Y29uc29sZS5sb2coJ3RoZSB3aG9sZSByb3V0ZSBpcycsIG5ld19wYXRoKVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2gobmV3X3BhdGgpXG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJPcHRpb24gKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyQ2hlY2tib3ggKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdFx0Ly8gZmlyc3QgYWRkIG9yIHJlbW92ZSBjdXJyZW50IGtleS92YWx1ZSB0byBhY3RpdmUgZmlsdGVyc1xuXHRcdFx0dmFyIGZpbHRlcl9wYXJhbXMgPSB7XG5cdFx0XHRcdFwiZl9rZXlcIjogZmlsdGVyX2tleSxcblx0XHRcdFx0XCJmaWx0ZXJfdmFsdWVcIjogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0aWYgKCFldmVudC50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGFyZ2V0IGlzIGNoZWNrZWQsIHRyeSB0byByZW1vdmUnLCBmaWx0ZXJfdmFsdWUpXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgncmVtb3ZlQWN0aXZlRmlsdGVyJywgZmlsdGVyX3BhcmFtcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndG8gYWRkIGlzIHBhcmFtczonLCAgZmlsdGVyX3BhcmFtcylcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRBY3RpdmVGaWx0ZXInLCBmaWx0ZXJfcGFyYW1zICk7XG5cdFx0XHR9XG5cdFx0XHQvLyBub3cgdXBkYXRlIGZpbHRlciByb3V0ZXNcblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9DQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})