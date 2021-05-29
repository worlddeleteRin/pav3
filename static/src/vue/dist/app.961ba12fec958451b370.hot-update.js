webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ActiveFiltersContainer',\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.state.ecommerce.active_filters;\n    },\n    active_filters: function active_filters() {\n      //\t\t\treturn this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n      return {};\n    }\n  },\n  methods: {\n    clickDeleteActiveFilter: function clickDeleteActiveFilter(f_key, f_value) {\n      console.log('click to delete active filter', f_key, f_value);\n      var params = {\n        \"f_key\": f_key,\n        \"filter_value\": f_value\n      };\n      this.$store.commit('deleteActiveFilter', params);\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    getAttributeDisplayName: function getAttributeDisplayName(attr_key) {\n      return this.current_attr[attr_key].display_name;\n    },\n    getAttributeDisplayValue: function getAttributeDisplayValue(attr_key, attr_value) {\n      var attr_val = this.current_attr[attr_key][\"values\"].find(function (val) {\n        return val.code == attr_value;\n      });\n      return attr_val.display_name;\n    },\n    active_filters_exists: function active_filters_exists() {\n      if (Object.keys(this.active_filters).length > 0) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUZpbHRlcnNDb250YWluZXIudnVlPzI2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXG5cdDxkaXYgdi1zaG93PVwidGhpcy5hY3RpdmVfZmlsdGVyc19leGlzdHMoKVwiPlxuXHRcdDxzcGFuXG5cdFx0di1mb3I9XCIoYWN0aXZlX3ZhbHVlcywga2V5KSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzXCJcblx0XHQ6a2V5PVwia2V5XCJcblx0XHQ+XG5cdFx0PGJ1dHRvblxuXHRcdGNsYXNzPVwibXgtNCB0ZXh0LXJlZC01MDAgYmctZ3JlZW4tNTAwXCJcblx0XHR2LWZvcj1cImF0X3ZhbCBpbiBhY3RpdmVfdmFsdWVzXCJcblx0XHQ6a2V5PVwiYXRfdmFsXCJcblx0XHRAY2xpY2s9XCJ0aGlzLmNsaWNrRGVsZXRlQWN0aXZlRmlsdGVyKGtleSwgYXRfdmFsKVwiXG5cdFx0PlxuXHRcdHt7IGdldEF0dHJpYnV0ZURpc3BsYXlOYW1lKGtleSkgfX0gOiB7eyBnZXRBdHRyaWJ1dGVEaXNwbGF5VmFsdWUoa2V5LCBhdF92YWwpIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0FjdGl2ZUZpbHRlcnNDb250YWluZXInLFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfYXR0ciAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuLy9cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRBY3RpdmVGaWx0ZXJzKHRoaXMuJHJvdXRlLCB0aGlzLmN1cnJlbnRfYXR0cik7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fSxcdFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2xpY2tEZWxldGVBY3RpdmVGaWx0ZXIgKGZfa2V5LCBmX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2sgdG8gZGVsZXRlIGFjdGl2ZSBmaWx0ZXInLCBmX2tleSwgZl92YWx1ZSlcblx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdFwiZl9rZXlcIjogZl9rZXksXG5cdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZUFjdGl2ZUZpbHRlcicsIHBhcmFtcylcblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdHVwZGF0ZUZpbHRlclJvdXRlcygpIHtcblx0XHRcdGNvbnNvbGUubG9nKCduZWVkIHRvIHVwZGF0ZSByb3V0ZScpXG5cdFx0XHR2YXIgZmlsdGVyX3F1ZXJ5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRGaWx0ZXJRdWVyeTtcblx0XHRcdHZhciBuZXdfcGF0aCA9IHRoaXMuJHJvdXRlLnBhdGgrJz8nK2ZpbHRlcl9xdWVyeVxuXHRcdFx0Y29uc29sZS5sb2coJ3JvdXRlIHF1ZXJ5IGlzJywgdGhpcy4kcm91dGUucGF0aClcblx0XHRcdGNvbnNvbGUubG9nKCdmaWx0ZXIgcXVlcnkgaXMnLCBmaWx0ZXJfcXVlcnkpXG5cdFx0XHRjb25zb2xlLmxvZygndGhlIHdob2xlIHJvdXRlIGlzJywgbmV3X3BhdGgpXG5cdFx0XHR0aGlzLiRyb3V0ZXIucHVzaChuZXdfcGF0aClcblx0XHR9LFxuXHRcdGdldEF0dHJpYnV0ZURpc3BsYXlOYW1lIChhdHRyX2tleSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudF9hdHRyW2F0dHJfa2V5XS5kaXNwbGF5X25hbWU7XHRcblx0XHR9LFxuXHRcdGdldEF0dHJpYnV0ZURpc3BsYXlWYWx1ZSAoYXR0cl9rZXksIGF0dHJfdmFsdWUpIHtcblx0XHRcdHZhciBhdHRyX3ZhbCA9IHRoaXMuY3VycmVudF9hdHRyW2F0dHJfa2V5XVtcInZhbHVlc1wiXS5maW5kKFxuXHRcdFx0XHR2YWwgPT4gdmFsLmNvZGUgPT0gYXR0cl92YWx1ZSBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gYXR0cl92YWwuZGlzcGxheV9uYW1lO1xuXHRcdH0sXHRcblx0XHRhY3RpdmVfZmlsdGVyc19leGlzdHMgKCkge1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlX2ZpbHRlcnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuXHRcdFxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js\n");

/***/ })

})