webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterMultiple.vue */ \"./src/components/MainFilterMultiple.vue\");\n/* harmony import */ var _components_MainFilterOption_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainFilterOption.vue */ \"./src/components/MainFilterOption.vue\");\n/* harmony import */ var _components_MainFilterRange_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainFilterRange.vue */ \"./src/components/MainFilterRange.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  components: {\n    MainFilterMultiple: _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    MainFilterOption: _components_MainFilterOption_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    MainFilterRange: _components_MainFilterRange_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log('mounted, all filters are', this.all_filters);\n    var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n    this.$store.commit('setActiveFilters', active_attr);\n  },\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    getFilterValuesCheched: function getFilterValuesCheched(filter_key) {\n      console.log('call getFiletrValuesCheched');\n\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].values;\n      }\n\n      return '';\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      console.log('call set active filter', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      console.log(\"call with filter params\", filter_params);\n      this.$store.commit('addCheckboxFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    setFilterOption: function setFilterOption(filter_key, filter_value) {\n      console.log('set filter option running', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addOptionFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    setFilterRange: function setFilterRange() {\n      console.log('set filter range running', filter_key, filter_value);\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      console.log(\"new path is\", new_path);\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuXG48ZGl2PiB7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19IDwvZGl2Plx0XG5cbjxkaXZcbnYtZm9yPVwiZmlsdGVyX2tleSBpbiBPYmplY3Qua2V5cyhhbGxfZmlsdGVycylcIiBcbjprZXk9XCJmaWx0ZXJfa2V5XCJcbj5cblx0PGRpdiBjbGFzcz1cInB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+IHt7IHRoaXMuYWxsX2ZpbHRlcnNbZmlsdGVyX2tleV0uYXR0cmlidXRlX25hbWUgfX0gPC9kaXY+XG5cblxuXHQ8TWFpbkZpbHRlck11bHRpcGxlXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdtdWx0aXBsZSdcIlxuXHRjbGFzcz1cImZsZXggZmxleC1jb2xcIlxuXHQvPlxuXG5cdDxNYWluRmlsdGVyT3B0aW9uXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdvcHRpb24nXCJcblx0Lz5cblxuXHQ8TWFpbkZpbHRlclJhbmdlXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdyYW5nZSdcIlxuXHQvPlxuXG5cbjwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuXG5pbXBvcnQgIHsgY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi91c2VmdWxfbWV0aG9kcy5qcyc7XG5pbXBvcnQgTWFpbkZpbHRlck11bHRpcGxlIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkZpbHRlck11bHRpcGxlLnZ1ZSc7XG5pbXBvcnQgTWFpbkZpbHRlck9wdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL01haW5GaWx0ZXJPcHRpb24udnVlJztcbmltcG9ydCBNYWluRmlsdGVyUmFuZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluRmlsdGVyUmFuZ2UudnVlJztcblx0XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdNYWluRmlsdGVyQ29udGFpbmVyJyxcblx0Y29tcG9uZW50czoge1xuXHRcdE1haW5GaWx0ZXJNdWx0aXBsZSxcblx0XHRNYWluRmlsdGVyT3B0aW9uLFxuXHRcdE1haW5GaWx0ZXJSYW5nZSxcblx0fSxcblx0bW91bnRlZCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21vdW50ZWQsIGFsbCBmaWx0ZXJzIGFyZScsIHRoaXMuYWxsX2ZpbHRlcnMpXG5cdFx0dmFyIGFjdGl2ZV9hdHRyID0gdGhpcy5jb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgdGhpcy5hbGxfZmlsdGVycyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBY3RpdmVGaWx0ZXJzJywgYWN0aXZlX2F0dHIpXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0YWxsX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnM7XG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzLFxuXHRcdGlzRmlsdGVyVmFsdWVDaGVja2VkKGZpbHRlcl9rZXksIGZpbHRlcl9jb2RlKSB7XG5cdFx0XHRpZiAoZmlsdGVyX2tleSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLnNvbWUoXG5cdFx0XHRcdFx0IGF0dHJfdmFsID0+IGF0dHJfdmFsID09IGZpbHRlcl9jb2RlXHRcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0Z2V0RmlsdGVyVmFsdWVzQ2hlY2hlZChmaWx0ZXJfa2V5KSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2FsbCBnZXRGaWxldHJWYWx1ZXNDaGVjaGVkJylcblx0XHRcdGlmIChmaWx0ZXJfa2V5IGluIHRoaXMuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0udmFsdWVzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcnXG5cdFx0fSxcblx0XHRzZXRGaWx0ZXJBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2FsbCBzZXQgYWN0aXZlIGZpbHRlcicsIGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coXCJjYWxsIHdpdGggZmlsdGVyIHBhcmFtc1wiLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRDaGVja2JveEZpbHRlcicsIGZpbHRlcl9wYXJhbXMpXG5cblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdHNldEZpbHRlck9wdGlvbihmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzZXQgZmlsdGVyIG9wdGlvbiBydW5uaW5nJywgZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVxuXHRcdFxuXHRcdFx0dmFyIGZpbHRlcl9wYXJhbXMgPSB7XG5cdFx0XHRcdCdmX2tleSc6IGZpbHRlcl9rZXksXG5cdFx0XHRcdCdmaWx0ZXJfdmFsdWUnOiBmaWx0ZXJfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2FkZE9wdGlvbkZpbHRlcicsIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0XHRzZXRGaWx0ZXJSYW5nZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzZXQgZmlsdGVyIHJhbmdlIHJ1bm5pbmcnLCBmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpXG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJSb3V0ZXMoKSB7XG5cdFx0XHR2YXIgZmlsdGVyX3F1ZXJ5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRGaWx0ZXJRdWVyeTtcblx0XHRcdHZhciBuZXdfcGF0aCA9IHRoaXMuJHJvdXRlLnBhdGgrJz8nK2ZpbHRlcl9xdWVyeVxuXHRcdFx0Y29uc29sZS5sb2coXCJuZXcgcGF0aCBpc1wiLCBuZXdfcGF0aClcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBcEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})