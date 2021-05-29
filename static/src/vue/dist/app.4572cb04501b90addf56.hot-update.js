webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ActiveFiltersContainer',\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.state.ecommerce.active_filters;\n    },\n    active_filters: function active_filters() {\n      return {};\n    }\n  },\n  methods: {\n    clickDeleteActiveFilter: function clickDeleteActiveFilter(f_key, f_value) {\n      console.log('click to delete active filter', f_key, f_value);\n      var params = {\n        \"f_key\": f_key,\n        \"filter_value\": f_value\n      };\n      this.$store.commit('deleteActiveFilter', params);\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      console.log('need to update route');\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log('route query is', this.$route.path);\n      console.log('filter query is', filter_query);\n      console.log('the whole route is', new_path);\n      this.$router.push(new_path);\n    },\n    getAttributeDisplayName: function getAttributeDisplayName(attr_key) {\n      return this.current_attr[attr_key].display_name;\n    },\n    getAttributeDisplayValue: function getAttributeDisplayValue(attr_key, attr_value) {\n      var attr_val = this.current_attr[attr_key][\"values\"].find(function (val) {\n        return val.code == attr_value;\n      });\n      return attr_val.display_name;\n    },\n    active_filters_exists: function active_filters_exists() {\n      if (Object.keys(this.active_filters).length > 0) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUZpbHRlcnNDb250YWluZXIudnVlPzI2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXG5cdDxkaXYgdi1zaG93PVwidGhpcy5hY3RpdmVfZmlsdGVyc19leGlzdHMoKVwiPlxuXHRcdDxzcGFuXG5cdFx0di1mb3I9XCIoYWN0aXZlX3ZhbHVlcywga2V5KSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzXCJcblx0XHQ6a2V5PVwia2V5XCJcblx0XHQ+XG5cdFx0PGJ1dHRvblxuXHRcdGNsYXNzPVwibXgtNCB0ZXh0LXJlZC01MDAgYmctZ3JlZW4tNTAwXCJcblx0XHR2LWZvcj1cImF0X3ZhbCBpbiBhY3RpdmVfdmFsdWVzXCJcblx0XHQ6a2V5PVwiYXRfdmFsXCJcblx0XHRAY2xpY2s9XCJ0aGlzLmNsaWNrRGVsZXRlQWN0aXZlRmlsdGVyKGtleSwgYXRfdmFsKVwiXG5cdFx0PlxuXHRcdHt7IGdldEF0dHJpYnV0ZURpc3BsYXlOYW1lKGtleSkgfX0gOiB7eyBnZXRBdHRyaWJ1dGVEaXNwbGF5VmFsdWUoa2V5LCBhdF92YWwpIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0FjdGl2ZUZpbHRlcnNDb250YWluZXInLFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfYXR0ciAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH0sXHRcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNsaWNrRGVsZXRlQWN0aXZlRmlsdGVyIChmX2tleSwgZl92YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2NsaWNrIHRvIGRlbGV0ZSBhY3RpdmUgZmlsdGVyJywgZl9rZXksIGZfdmFsdWUpXG5cdFx0XHR2YXIgcGFyYW1zID0ge1xuXHRcdFx0XHRcImZfa2V5XCI6IGZfa2V5LFxuXHRcdFx0XHRcImZpbHRlcl92YWx1ZVwiOiBmX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdkZWxldGVBY3RpdmVGaWx0ZXInLCBwYXJhbXMpXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJSb3V0ZXMoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbmVlZCB0byB1cGRhdGUgcm91dGUnKVxuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdGNvbnNvbGUubG9nKCdyb3V0ZSBxdWVyeSBpcycsIHRoaXMuJHJvdXRlLnBhdGgpXG5cdFx0XHRjb25zb2xlLmxvZygnZmlsdGVyIHF1ZXJ5IGlzJywgZmlsdGVyX3F1ZXJ5KVxuXHRcdFx0Y29uc29sZS5sb2coJ3RoZSB3aG9sZSByb3V0ZSBpcycsIG5ld19wYXRoKVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2gobmV3X3BhdGgpXG5cdFx0fSxcblx0XHRnZXRBdHRyaWJ1dGVEaXNwbGF5TmFtZSAoYXR0cl9rZXkpIHtcblx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRfYXR0clthdHRyX2tleV0uZGlzcGxheV9uYW1lO1x0XG5cdFx0fSxcblx0XHRnZXRBdHRyaWJ1dGVEaXNwbGF5VmFsdWUgKGF0dHJfa2V5LCBhdHRyX3ZhbHVlKSB7XG5cdFx0XHR2YXIgYXR0cl92YWwgPSB0aGlzLmN1cnJlbnRfYXR0clthdHRyX2tleV1bXCJ2YWx1ZXNcIl0uZmluZChcblx0XHRcdFx0dmFsID0+IHZhbC5jb2RlID09IGF0dHJfdmFsdWUgXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIGF0dHJfdmFsLmRpc3BsYXlfbmFtZTtcblx0XHR9LFx0XG5cdFx0YWN0aXZlX2ZpbHRlcnNfZXhpc3RzICgpIHtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZV9maWx0ZXJzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH1cblx0XHRcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQVZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ActiveFiltersContainer.vue?vue&type=script&lang=js\n");

/***/ })

})