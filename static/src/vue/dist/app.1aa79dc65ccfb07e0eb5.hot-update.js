webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductsFilterContainer',\n  data: function data() {\n    return {};\n  },\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.getters.getAllFilters(this.$parent.current_category_products);\n    },\n    active_filters: function active_filters() {\n      return this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n    }\n  },\n  methods: {\n    isActive: function isActive() {\n      return true;\n    },\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"],\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueActive: function isFilterValueActive(filter_key, filter_value) {\n      console.log('check if filter active, f value is', filter_value);\n\n      if (filter_key in this.active_filters) {\n        if (this.active_filters[filter_key].includes(filter_value.code)) {\n          return true;\n        }\n      }\n\n      return false;\n    },\n    getFilterType: function getFilterType(filter_key) {\n      return this.current_attr[filter_key].filter_type;\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    updateFilterOption: function updateFilterOption(filter_key, filter_value) {\n      console.log(filter_key, filter_value);\n    },\n    updateFilterCheckbox: function updateFilterCheckbox(filter_key, filter_value) {\n      // first add or remove current key/value to active filters\n      var filter_params = {\n        \"f_key\": filter_key,\n        \"filter_value\": filter_value\n      };\n\n      if (!event.target.checked) {\n        console.log('target is checked, try to remove', filter_value);\n        this.$store.commit('removeActiveFilter', filter_params);\n      } else {\n        console.log('to add is params:', filter_params);\n        this.$store.commit('addActiveFilter', filter_params);\n      } // now update filter routes\n\n\n      this.updateFilterRoutes();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHRcblx0PGRpdlxuXHR2LWZvcj1cIih2YWx1ZXMsIGtleSkgaW4gdGhpcy5jdXJyZW50X2F0dHJcIlxuXHQ6a2V5PVwia2V5XCI+XG5cdFx0e3sgdGhpcy5jdXJyZW50X2F0dHJba2V5XS5kaXNwbGF5X25hbWUgfX1cblx0XHRcdFxuXHRcdDxkaXZcblx0XHR2LXNob3c9XCJ0aGlzLmdldEZpbHRlclR5cGUoa2V5LCBhdHRyX3ZhbHVlKSA9PSAnbXVsdGlwbGUnXCJcblx0XHR2LWZvcj1cImF0dHJfdmFsdWUgaW4gdmFsdWVzLnZhbHVlc1wiXG5cdFx0OmtleT1cImF0dHJfdmFsdWVcIlxuXHRcdD5cblx0XHQ8aW5wdXRcblx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdDppZD1cImtleSArICctJyArIGF0dHJfdmFsdWVcIlxuXHRcdDp2YWx1ZT1cImF0dHJfdmFsdWVcIlxuXHRcdDpjaGVja2VkPVwiaXNGaWx0ZXJWYWx1ZUFjdGl2ZShrZXksIGF0dHJfdmFsdWUpXCJcblx0XHRAaW5wdXQ9XCJ1cGRhdGVGaWx0ZXJDaGVja2JveChrZXksIGF0dHJfdmFsdWUpXCJcblx0XHQvPlxuXHRcdDxsYWJlbFxuXHRcdDpmb3I9XCJrZXkgKyAnLScgKyBhdHRyX3ZhbHVlXCJcdFxuXHRcdD5cblx0XHRcdHt7IGF0dHJfdmFsdWUgfX1cblx0XHQge3sgYXR0cl92YWx1ZS5kaXNwbGF5X25hbWUgfX1cblx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXG5cdFx0XG5cdFx0PGRpdlxuXHRcdHYtc2hvdz1cInRoaXMuZ2V0RmlsdGVyVHlwZShrZXkpID09ICdvcHRpb24nXCJcblx0XHR2LWZvcj1cImF0dHJfdmFsdWUgaW4gdmFsdWVzLnZhbHVlc1wiXG5cdFx0OmtleT1cImF0dHJfdmFsdWVcIlxuXHRcdD5cblx0XHQ8aW5wdXRcblx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdDppZD1cImtleSArICctJyArIGF0dHJfdmFsdWVcIlxuXHRcdDp2YWx1ZT1cImF0dHJfdmFsdWVcIlxuXHRcdDpjaGVja2VkPVwiaXNGaWx0ZXJWYWx1ZUFjdGl2ZShrZXkpXCJcblx0XHRAaW5wdXQ9XCJ1cGRhdGVGaWx0ZXJPcHRpb24oa2V5LCBhdHRyX3ZhbHVlKVwiXG5cdFx0Lz5cblx0XHQ8bGFiZWxcblx0XHQ6Zm9yPVwia2V5ICsgJy0nICsgYXR0cl92YWx1ZVwiXG5cdFx0PlxuXHRcdCB7eyBhdHRyX3ZhbHVlLmRpc3BsYXlfbmFtZSB9fVxuXHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cblx0PC9kaXY+XG5cdFxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMsIGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzfSBmcm9tICcuLi91c2VmdWxfbWV0aG9kcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdQcm9kdWN0c0ZpbHRlckNvbnRhaW5lcicsXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfYXR0ciAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBbGxGaWx0ZXJzKFxuXHRcdFx0dGhpcy4kcGFyZW50LmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRhY3RpdmVfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBY3RpdmVGaWx0ZXJzKHRoaXMuJHJvdXRlLCB0aGlzLmN1cnJlbnRfYXR0cik7XG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aXNBY3RpdmUgKCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLFxuXHRcdGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzLFxuXHRcdGlzRmlsdGVyVmFsdWVBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0Y29uc29sZS5sb2coJ2NoZWNrIGlmIGZpbHRlciBhY3RpdmUsIGYgdmFsdWUgaXMnLCBmaWx0ZXJfdmFsdWUpXG5cdFx0XHRpZiAoZmlsdGVyX2tleSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRcdGlmKHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uaW5jbHVkZXMoZmlsdGVyX3ZhbHVlLmNvZGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGdldEZpbHRlclR5cGUoZmlsdGVyX2tleSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudF9hdHRyW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlO1xuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ25lZWQgdG8gdXBkYXRlIHJvdXRlJylcblx0XHRcdHZhciBmaWx0ZXJfcXVlcnkgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEZpbHRlclF1ZXJ5O1xuXHRcdFx0dmFyIG5ld19wYXRoID0gdGhpcy4kcm91dGUucGF0aCsnPycrZmlsdGVyX3F1ZXJ5XG5cdFx0XHRjb25zb2xlLmxvZygncm91dGUgcXVlcnkgaXMnLCB0aGlzLiRyb3V0ZS5wYXRoKVxuXHRcdFx0Y29uc29sZS5sb2coJ2ZpbHRlciBxdWVyeSBpcycsIGZpbHRlcl9xdWVyeSlcblx0XHRcdGNvbnNvbGUubG9nKCd0aGUgd2hvbGUgcm91dGUgaXMnLCBuZXdfcGF0aClcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyT3B0aW9uIChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHR9LFxuXHRcdHVwZGF0ZUZpbHRlckNoZWNrYm94IChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdC8vIGZpcnN0IGFkZCBvciByZW1vdmUgY3VycmVudCBrZXkvdmFsdWUgdG8gYWN0aXZlIGZpbHRlcnNcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHRcImZfa2V5XCI6IGZpbHRlcl9rZXksXG5cdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZpbHRlcl92YWx1ZSxcblx0XHRcdH1cblx0XHRcdGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RhcmdldCBpcyBjaGVja2VkLCB0cnkgdG8gcmVtb3ZlJywgZmlsdGVyX3ZhbHVlKVxuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3JlbW92ZUFjdGl2ZUZpbHRlcicsIGZpbHRlcl9wYXJhbXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RvIGFkZCBpcyBwYXJhbXM6JywgIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkQWN0aXZlRmlsdGVyJywgZmlsdGVyX3BhcmFtcyApO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbm93IHVwZGF0ZSBmaWx0ZXIgcm91dGVzXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTdDQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})