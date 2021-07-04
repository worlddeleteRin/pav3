webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ActiveFiltersContainer',\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    clickDeleteActiveFilter: function clickDeleteActiveFilter(f_key, f_value) {\n      console.log('click to delete active filter', f_key, f_value);\n      var params = {\n        \"f_key\": f_key,\n        \"filter_value\": f_value\n      };\n      this.$store.commit('deleteActiveFilter', params);\n      this.updateFilterRoutes();\n    },\n    clickDeleteRangeFilter: function clickDeleteRangeFilter(f_key, f_values) {\n      for (var indx in f_values) {\n        var f_value = f_values[indx];\n        var params = {\n          \"f_key\": f_key,\n          \"filter_value\": f_value\n        };\n        this.$store.commit('deleteActiveFilter', params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    getAttributeDisplayName: function getAttributeDisplayName(attr_key) {\n      return this.current_attr[attr_key].attribute_name;\n    },\n    getAttributeDisplayValue: function getAttributeDisplayValue(attr_key, attr_value) {\n      var attr_val = this.current_attr[attr_key][\"values\"].find(function (val) {\n        return val.code == attr_value;\n      });\n\n      if (attr_val) {\n        return attr_val.display_value;\n      }\n    },\n    active_filters_exists: function active_filters_exists() {\n      console.log('active filters are', this.active_filters);\n\n      if (Object.keys(this.active_filters).length > 0) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUZpbHRlcnNDb250YWluZXIudnVlPzI2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2XG5cdGNsYXNzPVwicGItM1wiXG5cdD5cblxuXHQ8ZGl2IFxuXHR2LWlmPVwidGhpcy5hY3RpdmVfZmlsdGVyc19leGlzdHMoKVwiXG5cdD5cblx0XHRcdDxzcGFuXG5cdFx0XHR2LWZvcj1cIihhY3RpdmVfdmFsdWVzLCBrZXkpIGluIHRoaXMuYWN0aXZlX2ZpbHRlcnNcIlxuXHRcdFx0OmtleT1cImtleVwiXG5cdFx0XHQ+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdHYtaWY9XCJ0aGlzLmN1cnJlbnRfYXR0cltrZXldLmZpbHRlcl90eXBlID09ICdyYW5nZSdcIlxuXHRcdFx0XHRjbGFzcz1cInB4LTQgcHktMSBteC0xIG15LTEgdGV4dC1zbSBmb250LWxpZ2h0IHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCByb3VuZGVkLWZ1bGxcIlxuXHRcdFx0XHRAY2xpY2s9XCJ0aGlzLmNsaWNrRGVsZXRlUmFuZ2VGaWx0ZXIoa2V5LCB0aGlzLmFjdGl2ZV9maWx0ZXJzW2tleV0pXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IGdldEF0dHJpYnV0ZURpc3BsYXlOYW1lKGtleSkgfX0gOiDQvtGCIFxuXHRcdFx0XHRcdHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnNba2V5XVswXSB9fSDQtNC+IFxuXHRcdFx0XHRcdHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnNba2V5XVsxXSB9fSBcdFxuXHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdHYtZWxzZVxuXHRcdFx0XHRjbGFzcz1cInB4LTQgcHktMSBteC0xIG15LTEgdGV4dC1zbSBmb250LWxpZ2h0IHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCByb3VuZGVkLWZ1bGxcIlxuXHRcdFx0XHR2LWZvcj1cImF0X3ZhbCBpbiBhY3RpdmVfdmFsdWVzXCJcblx0XHRcdFx0OmtleT1cImF0X3ZhbFwiXG5cdFx0XHRcdEBjbGljaz1cInRoaXMuY2xpY2tEZWxldGVBY3RpdmVGaWx0ZXIoa2V5LCBhdF92YWwpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHR7eyBnZXRBdHRyaWJ1dGVEaXNwbGF5TmFtZShrZXkpIH19IDoge3sgZ2V0QXR0cmlidXRlRGlzcGxheVZhbHVlKGtleSwgYXRfdmFsKSB9fVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvc3Bhbj5cblx0PC9kaXY+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdBY3RpdmVGaWx0ZXJzQ29udGFpbmVyJyxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2F0dHIgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnM7XG5cdFx0fSxcdFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2xpY2tEZWxldGVBY3RpdmVGaWx0ZXIgKGZfa2V5LCBmX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2sgdG8gZGVsZXRlIGFjdGl2ZSBmaWx0ZXInLCBmX2tleSwgZl92YWx1ZSlcblx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdFwiZl9rZXlcIjogZl9rZXksXG5cdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZUFjdGl2ZUZpbHRlcicsIHBhcmFtcylcblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdGNsaWNrRGVsZXRlUmFuZ2VGaWx0ZXIgKGZfa2V5LCBmX3ZhbHVlcykge1xuXHRcdFx0Zm9yICh2YXIgaW5keCBpbiBmX3ZhbHVlcykge1xuXHRcdFx0XHR2YXIgZl92YWx1ZSA9IGZfdmFsdWVzW2luZHhdXG5cdFx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdFx0XCJmX2tleVwiOiBmX2tleSxcblx0XHRcdFx0XHRcImZpbHRlcl92YWx1ZVwiOiBmX3ZhbHVlLFxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnZGVsZXRlQWN0aXZlRmlsdGVyJywgcGFyYW1zKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVGaWx0ZXJSb3V0ZXMoKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ25lZWQgdG8gdXBkYXRlIHJvdXRlJylcblx0XHRcdHZhciBmaWx0ZXJfcXVlcnkgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEZpbHRlclF1ZXJ5O1xuXHRcdFx0dmFyIG5ld19wYXRoID0gdGhpcy4kcm91dGUucGF0aCsnPycrZmlsdGVyX3F1ZXJ5XG5cdFx0XHRjb25zb2xlLmxvZygncm91dGUgcXVlcnkgaXMnLCB0aGlzLiRyb3V0ZS5wYXRoKVxuXHRcdFx0Y29uc29sZS5sb2coJ2ZpbHRlciBxdWVyeSBpcycsIGZpbHRlcl9xdWVyeSlcblx0XHRcdGNvbnNvbGUubG9nKCd0aGUgd2hvbGUgcm91dGUgaXMnLCBuZXdfcGF0aClcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdFx0Z2V0QXR0cmlidXRlRGlzcGxheU5hbWUgKGF0dHJfa2V5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50X2F0dHJbYXR0cl9rZXldLmF0dHJpYnV0ZV9uYW1lO1x0XG5cdFx0fSxcblx0XHRnZXRBdHRyaWJ1dGVEaXNwbGF5VmFsdWUgKGF0dHJfa2V5LCBhdHRyX3ZhbHVlKSB7XG5cdFx0XHR2YXIgYXR0cl92YWwgPSB0aGlzLmN1cnJlbnRfYXR0clthdHRyX2tleV1bXCJ2YWx1ZXNcIl0uZmluZChcblx0XHRcdFx0dmFsID0+IHZhbC5jb2RlID09IGF0dHJfdmFsdWUgXG5cdFx0XHQpO1xuXHRcdFx0aWYgKGF0dHJfdmFsKSB7XG5cdFx0XHRcdHJldHVybiBhdHRyX3ZhbC5kaXNwbGF5X3ZhbHVlO1xuXHRcdFx0fVxuXHRcdH0sXHRcblx0XHRhY3RpdmVfZmlsdGVyc19leGlzdHMgKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2FjdGl2ZSBmaWx0ZXJzIGFyZScsIHRoaXMuYWN0aXZlX2ZpbHRlcnMpXG5cdFx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5hY3RpdmVfZmlsdGVycykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHR9XG5cdFx0XG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBVkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js\n");

/***/ })

})