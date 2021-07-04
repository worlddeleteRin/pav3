webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterMultiple.vue */ \"./src/components/MainFilterMultiple.vue\");\n/* harmony import */ var _components_MainFilterOption_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainFilterOption.vue */ \"./src/components/MainFilterOption.vue\");\n/* harmony import */ var _components_MainFilterRange_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainFilterRange.vue */ \"./src/components/MainFilterRange.vue\");\n/* harmony import */ var _components_MainFilterBoolean_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainFilterBoolean.vue */ \"./src/components/MainFilterBoolean.vue\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  components: {\n    MainFilterMultiple: _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    MainFilterOption: _components_MainFilterOption_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    MainFilterRange: _components_MainFilterRange_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    MainFilterBoolean: _components_MainFilterBoolean_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log('mounted, all filters are', this.all_filters);\n    var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n    this.$store.commit('setActiveFilters', active_attr);\n    this.filters_loaded = true;\n  },\n  data: function data() {\n    return {\n      filters_loaded: false\n    };\n  },\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    getFilterValuesCheched: function getFilterValuesCheched(filter_key) {\n      console.log('call getFiletrValuesCheched');\n\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].values;\n      }\n\n      return '';\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      console.log('call set active filter', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      console.log(\"call with filter params\", filter_params);\n      this.$store.commit('addCheckboxFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    setFilterOption: function setFilterOption(filter_key, filter_value) {\n      console.log('set filter option running', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addOptionFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    setFilterRange: function setFilterRange(filter_key, filter_value) {\n      console.log('set filter range running', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addRangeFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log(\"new path is\", new_path);\n      console.log('active attr are', this.active_attr);\n      this.$parent.getApiCategoryProducts(this.active_attr); //\tthis.$router.push(new_path)\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2IFxudi1pZj1cInRoaXMuZmlsdGVyc19sb2FkZWRcIlxuY2xhc3M9XCJwci02XCI+XG5cbjxkaXY+IHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnMgfX0gPC9kaXY+XHRcblxuPGRpdlxudi1mb3I9XCJmaWx0ZXJfa2V5IGluIE9iamVjdC5rZXlzKGFsbF9maWx0ZXJzKVwiIFxuOmtleT1cImZpbHRlcl9rZXlcIlxuPlxuXHQ8c3BhbiBjbGFzcz1cInB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+IHt7IHRoaXMuYWxsX2ZpbHRlcnNbZmlsdGVyX2tleV0uYXR0cmlidXRlX25hbWUgfX0gPC9zcGFuPlxuXG5cdDxkaXY+XG5cdDxNYWluRmlsdGVyTXVsdGlwbGVcblx0OmZpbHRlcl9rZXk9XCJmaWx0ZXJfa2V5XCJcblx0di1pZj1cInRoaXMuYWxsX2ZpbHRlcnNbZmlsdGVyX2tleV0uZmlsdGVyX3R5cGUgPT0gJ211bHRpcGxlJ1wiXG5cdGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiXG5cdC8+XG5cdDwvZGl2PlxuXG5cdDxkaXY+XG5cdDxNYWluRmlsdGVyT3B0aW9uXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdvcHRpb24nXCJcblx0Lz5cblx0PC9kaXY+XG5cblx0PGRpdj5cblx0PE1haW5GaWx0ZXJSYW5nZVxuXHQ6ZmlsdGVyX2tleT1cImZpbHRlcl9rZXlcIlxuXHR2LWlmPVwidGhpcy5hbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS5maWx0ZXJfdHlwZSA9PSAncmFuZ2UnXCJcblx0Lz5cblx0PC9kaXY+XG5cblx0PE1haW5GaWx0ZXJCb29sZWFuXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdib29sZWFuJ1wiXG5cdC8+XG5cblxuPC9kaXY+XG5cbjwvZGl2PlxuXG48ZGl2IHYtZWxzZT5cblx00JfQsNCz0YDRg9C30LrQsCDRhNC40LvRjNGC0YDQvtCyXHRcbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cbmltcG9ydCAgeyBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyB9IGZyb20gJy4uL3VzZWZ1bF9tZXRob2RzLmpzJztcbmltcG9ydCBNYWluRmlsdGVyTXVsdGlwbGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluRmlsdGVyTXVsdGlwbGUudnVlJztcbmltcG9ydCBNYWluRmlsdGVyT3B0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkZpbHRlck9wdGlvbi52dWUnO1xuaW1wb3J0IE1haW5GaWx0ZXJSYW5nZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5GaWx0ZXJSYW5nZS52dWUnO1xuaW1wb3J0IE1haW5GaWx0ZXJCb29sZWFuIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkZpbHRlckJvb2xlYW4udnVlJztcblx0XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdNYWluRmlsdGVyQ29udGFpbmVyJyxcblx0Y29tcG9uZW50czoge1xuXHRcdE1haW5GaWx0ZXJNdWx0aXBsZSxcblx0XHRNYWluRmlsdGVyT3B0aW9uLFxuXHRcdE1haW5GaWx0ZXJSYW5nZSxcblx0XHRNYWluRmlsdGVyQm9vbGVhbixcblx0fSxcblx0bW91bnRlZCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21vdW50ZWQsIGFsbCBmaWx0ZXJzIGFyZScsIHRoaXMuYWxsX2ZpbHRlcnMpXG5cdFx0dmFyIGFjdGl2ZV9hdHRyID0gdGhpcy5jb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgdGhpcy5hbGxfZmlsdGVycyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBY3RpdmVGaWx0ZXJzJywgYWN0aXZlX2F0dHIpXG5cdFx0dGhpcy5maWx0ZXJzX2xvYWRlZCA9IHRydWU7XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRmaWx0ZXJzX2xvYWRlZDogZmFsc2UsXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGFsbF9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWxsX2ZpbHRlcnM7XG5cdFx0fSxcblx0XHRhY3RpdmVfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzO1xuXHRcdH0sXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyxcblx0XHRpc0ZpbHRlclZhbHVlQ2hlY2tlZChmaWx0ZXJfa2V5LCBmaWx0ZXJfY29kZSkge1xuXHRcdFx0aWYgKGZpbHRlcl9rZXkgaW4gdGhpcy5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY3RpdmVfZmlsdGVyc1tmaWx0ZXJfa2V5XS5zb21lKFxuXHRcdFx0XHRcdCBhdHRyX3ZhbCA9PiBhdHRyX3ZhbCA9PSBmaWx0ZXJfY29kZVx0XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGdldEZpbHRlclZhbHVlc0NoZWNoZWQoZmlsdGVyX2tleSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2NhbGwgZ2V0RmlsZXRyVmFsdWVzQ2hlY2hlZCcpXG5cdFx0XHRpZiAoZmlsdGVyX2tleSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLnZhbHVlcztcblx0XHRcdH1cblx0XHRcdHJldHVybiAnJ1xuXHRcdH0sXG5cdFx0c2V0RmlsdGVyQWN0aXZlKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2NhbGwgc2V0IGFjdGl2ZSBmaWx0ZXInLCBmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpXG5cdFx0XHR2YXIgZmlsdGVyX3BhcmFtcyA9IHtcblx0XHRcdFx0J2Zfa2V5JzogZmlsdGVyX2tleSxcblx0XHRcdFx0J2ZpbHRlcl92YWx1ZSc6IGZpbHRlcl92YWx1ZSxcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKFwiY2FsbCB3aXRoIGZpbHRlciBwYXJhbXNcIiwgZmlsdGVyX3BhcmFtcylcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkQ2hlY2tib3hGaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0XHRzZXRGaWx0ZXJPcHRpb24oZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc2V0IGZpbHRlciBvcHRpb24gcnVubmluZycsIGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRPcHRpb25GaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdFx0dGhpcy51cGRhdGVGaWx0ZXJSb3V0ZXMoKVxuXHRcdH0sXG5cdFx0c2V0RmlsdGVyUmFuZ2UoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc2V0IGZpbHRlciByYW5nZSBydW5uaW5nJywgZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVxuXHRcdFx0dmFyIGZpbHRlcl9wYXJhbXMgPSB7XG5cdFx0XHRcdCdmX2tleSc6IGZpbHRlcl9rZXksXG5cdFx0XHRcdCdmaWx0ZXJfdmFsdWUnOiBmaWx0ZXJfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2FkZFJhbmdlRmlsdGVyJywgZmlsdGVyX3BhcmFtcylcblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdHVwZGF0ZUZpbHRlclJvdXRlcygpIHtcblx0XHRcdHZhciBmaWx0ZXJfcXVlcnkgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEZpbHRlclF1ZXJ5O1xuXHRcdFx0dmFyIG5ld19wYXRoID0gdGhpcy4kcm91dGUucGF0aCsnPycrZmlsdGVyX3F1ZXJ5XG5cdFx0XHRjb25zb2xlLmxvZyhcIm5ldyBwYXRoIGlzXCIsIG5ld19wYXRoKVxuXHRcdFx0Y29uc29sZS5sb2coJ2FjdGl2ZSBhdHRyIGFyZScsIHRoaXMuYWN0aXZlX2F0dHIpXG5cdFx0XHR0aGlzLiRwYXJlbnQuZ2V0QXBpQ2F0ZWdvcnlQcm9kdWN0cyh0aGlzLmFjdGl2ZV9hdHRyKVxuXHRcdC8vXHR0aGlzLiRyb3V0ZXIucHVzaChuZXdfcGF0aClcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF0REE7QUEzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})