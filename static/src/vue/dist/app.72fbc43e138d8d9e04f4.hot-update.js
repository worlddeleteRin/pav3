webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ActiveFiltersContainer',\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    clickDeleteActiveFilter: function clickDeleteActiveFilter(f_key, f_value) {\n      console.log('click to delete active filter', f_key, f_value);\n      var params = {\n        \"f_key\": f_key,\n        \"filter_value\": f_value\n      };\n      this.$store.commit('deleteActiveFilter', params);\n      this.updateFilterRoutes();\n    },\n    clickDeleteRangeFilter: function clickDeleteRangeFilter(f_key) {\n      for (var indx in f_values) {\n        var f_value = f_values[indx];\n        var params = {\n          \"f_key\": f_key,\n          \"filter_value\": f_value\n        };\n        this.$store.commit('deleteActiveFilter', params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    getAttributeDisplayName: function getAttributeDisplayName(attr_key) {\n      return this.current_attr[attr_key].attribute_name;\n    },\n    getAttributeDisplayValue: function getAttributeDisplayValue(attr_key, attr_value) {\n      var attr_val = this.current_attr[attr_key][\"values\"].find(function (val) {\n        return val.code == attr_value;\n      });\n\n      if (attr_val) {\n        return attr_val.display_value;\n      }\n    },\n    active_filters_exists: function active_filters_exists() {\n      console.log('active filters are', this.active_filters);\n\n      if (Object.keys(this.active_filters).length > 0) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUZpbHRlcnNDb250YWluZXIudnVlPzI2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2XG5cdGNsYXNzPVwicGItM1wiXG5cdD5cblxuXHQ8ZGl2IFxuXHR2LWlmPVwidGhpcy5hY3RpdmVfZmlsdGVyc19leGlzdHMoKVwiXG5cdD5cblx0XHRcdDxzcGFuXG5cdFx0XHR2LWZvcj1cIihhY3RpdmVfdmFsdWVzLCBrZXkpIGluIHRoaXMuYWN0aXZlX2ZpbHRlcnNcIlxuXHRcdFx0OmtleT1cImtleVwiXG5cdFx0XHQ+XG5cdFx0XHRcdFxuXHRcdFx0PHNwYW5cblx0XHRcdHYtaWY9XCJhY3RpdmVfdmFsdWVzLmxlbmd0aCA+IDBcIlxuXHRcdFx0PlxuXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0di1pZj1cInRoaXMuY3VycmVudF9hdHRyW2tleV0uZmlsdGVyX3R5cGUgPT0gJ3JhbmdlJ1wiXG5cdFx0XHRcdGNsYXNzPVwicHgtNCBweS0xIG14LTEgbXktMSB0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdEBjbGljaz1cInRoaXMuY2xpY2tEZWxldGVSYW5nZUZpbHRlcihrZXksIHRoaXMuYWN0aXZlX2ZpbHRlcnNba2V5XSlcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgZ2V0QXR0cmlidXRlRGlzcGxheU5hbWUoa2V5KSB9fSA6INC+0YIgXG5cdFx0XHRcdFx0e3sgdGhpcy5hY3RpdmVfZmlsdGVyc1trZXldWzBdIH19INC00L4gXG5cdFx0XHRcdFx0e3sgdGhpcy5hY3RpdmVfZmlsdGVyc1trZXldWzFdIH19IFx0XG5cdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0di1lbHNlXG5cdFx0XHRcdGNsYXNzPVwicHgtNCBweS0xIG14LTEgbXktMSB0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdHYtZm9yPVwiYXRfdmFsIGluIGFjdGl2ZV92YWx1ZXNcIlxuXHRcdFx0XHQ6a2V5PVwiYXRfdmFsXCJcblx0XHRcdFx0QGNsaWNrPVwidGhpcy5jbGlja0RlbGV0ZUFjdGl2ZUZpbHRlcihrZXksIGF0X3ZhbClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdHt7IGdldEF0dHJpYnV0ZURpc3BsYXlOYW1lKGtleSkgfX0gOiB7eyBnZXRBdHRyaWJ1dGVEaXNwbGF5VmFsdWUoa2V5LCBhdF92YWwpIH19XG5cdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8L3NwYW4+XG5cblx0XHRcdDwvc3Bhbj5cblx0PC9kaXY+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdBY3RpdmVGaWx0ZXJzQ29udGFpbmVyJyxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2F0dHIgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnM7XG5cdFx0fSxcdFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2xpY2tEZWxldGVBY3RpdmVGaWx0ZXIgKGZfa2V5LCBmX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2sgdG8gZGVsZXRlIGFjdGl2ZSBmaWx0ZXInLCBmX2tleSwgZl92YWx1ZSlcblx0XHRcdHZhciBwYXJhbXMgPSB7XG5cdFx0XHRcdFwiZl9rZXlcIjogZl9rZXksXG5cdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZUFjdGl2ZUZpbHRlcicsIHBhcmFtcylcblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdGNsaWNrRGVsZXRlUmFuZ2VGaWx0ZXIgKGZfa2V5KSB7XG5cdFx0XHRmb3IgKHZhciBpbmR4IGluIGZfdmFsdWVzKSB7XG5cdFx0XHRcdHZhciBmX3ZhbHVlID0gZl92YWx1ZXNbaW5keF1cblx0XHRcdFx0dmFyIHBhcmFtcyA9IHtcblx0XHRcdFx0XHRcImZfa2V5XCI6IGZfa2V5LFxuXHRcdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZfdmFsdWUsXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdkZWxldGVBY3RpdmVGaWx0ZXInLCBwYXJhbXMpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJSb3V0ZXMoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbmVlZCB0byB1cGRhdGUgcm91dGUnKVxuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdGNvbnNvbGUubG9nKCdyb3V0ZSBxdWVyeSBpcycsIHRoaXMuJHJvdXRlLnBhdGgpXG5cdFx0XHRjb25zb2xlLmxvZygnZmlsdGVyIHF1ZXJ5IGlzJywgZmlsdGVyX3F1ZXJ5KVxuXHRcdFx0Y29uc29sZS5sb2coJ3RoZSB3aG9sZSByb3V0ZSBpcycsIG5ld19wYXRoKVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2gobmV3X3BhdGgpXG5cdFx0fSxcblx0XHRnZXRBdHRyaWJ1dGVEaXNwbGF5TmFtZSAoYXR0cl9rZXkpIHtcblx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRfYXR0clthdHRyX2tleV0uYXR0cmlidXRlX25hbWU7XHRcblx0XHR9LFxuXHRcdGdldEF0dHJpYnV0ZURpc3BsYXlWYWx1ZSAoYXR0cl9rZXksIGF0dHJfdmFsdWUpIHtcblx0XHRcdHZhciBhdHRyX3ZhbCA9IHRoaXMuY3VycmVudF9hdHRyW2F0dHJfa2V5XVtcInZhbHVlc1wiXS5maW5kKFxuXHRcdFx0XHR2YWwgPT4gdmFsLmNvZGUgPT0gYXR0cl92YWx1ZSBcblx0XHRcdCk7XG5cdFx0XHRpZiAoYXR0cl92YWwpIHtcblx0XHRcdFx0cmV0dXJuIGF0dHJfdmFsLmRpc3BsYXlfdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSxcdFxuXHRcdGFjdGl2ZV9maWx0ZXJzX2V4aXN0cyAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYWN0aXZlIGZpbHRlcnMgYXJlJywgdGhpcy5hY3RpdmVfZmlsdGVycylcblx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZV9maWx0ZXJzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH1cblx0XHRcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREE7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js\n");

/***/ })

})