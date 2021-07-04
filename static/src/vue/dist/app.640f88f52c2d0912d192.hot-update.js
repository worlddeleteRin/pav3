webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainFilterMultiple.vue */ \"./src/components/MainFilterMultiple.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  components: {\n    MainFilterMultiple: _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log('mounted, all filters are', this.all_filters);\n    var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n    this.$store.commit('setActiveFilters', active_attr);\n  },\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    getFilterValuesCheched: function getFilterValuesCheched(filter_key) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].values;\n      }\n\n      return '';\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      console.log('call set active filter', filter_key, filter_value);\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      var checked = event.target.checked;\n\n      if (checked) {\n        this.$store.commit('addCheckboxFilter', filter_params);\n      } else {\n        this.$store.commit('removeCheckboxFilter', filter_params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    setFilterOption: function setFilterOption(filter_key, filter_value) {\n      console.log('set filter option running');\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addOptionFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuXG48ZGl2PiB7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19IDwvZGl2Plx0XG5cbjxkaXZcbnYtZm9yPVwiZmlsdGVyX2tleSBpbiBPYmplY3Qua2V5cyhhbGxfZmlsdGVycylcIiBcbjprZXk9XCJmaWx0ZXJfa2V5XCJcbj5cblx0PGRpdiBjbGFzcz1cInB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+IHt7IHRoaXMuYWxsX2ZpbHRlcnNbZmlsdGVyX2tleV0uYXR0cmlidXRlX25hbWUgfX0gPC9kaXY+XG5cblxuXHQ8TWFpbkZpbHRlck11bHRpcGxlXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdtdWx0aXBsZSdcIlxuXHRjbGFzcz1cImZsZXggZmxleC1jb2xcIlxuXHQvPlxuXG5cdDxkaXZcdFxuXHR2LWlmPVwidGhpcy5hbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS5maWx0ZXJfdHlwZSA9PSAnb3B0aW9uJ1wiXG5cdD5cblx0PGRpdlxuXHRjbGFzcz1cImJyLXJlZC0xMDBcIlxuXHR2LWZvcj1cImZpbHRlcl92YWx1ZSBpbiBhbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS52YWx1ZXNcIlxuXHQ6a2V5PVwiZmlsdGVyX3ZhbHVlXCJcblx0PlxuXHRcdDxpbnB1dFxuXHRcdDppZD1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHRcdDp2YWx1ZT1cImZpbHRlcl92YWx1ZS5jb2RlXCJcblx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdDpjaGVja2VkPVwiaXNGaWx0ZXJWYWx1ZUNoZWNrZWQoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlLmNvZGUpXCJcblx0XHRAaW5wdXQ9XCJ0aGlzLnNldEZpbHRlck9wdGlvbihmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUuY29kZSlcIlx0XG5cdFx0Lz5cblx0XHQ8bGFiZWxcblx0XHQ6Zm9yPVwiJ2ZpbHRlcl9hdHRyXycgKyBmaWx0ZXJfdmFsdWUuY29kZVwiXG5cdFx0PlxuXHRcdCB7eyBmaWx0ZXJfdmFsdWUuZGlzcGxheV92YWx1ZSB9fVxuXHRcdDwvbGFiZWw+XG5cdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG48L2Rpdj5cblxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cblxuaW1wb3J0ICB7IGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdXNlZnVsX21ldGhvZHMuanMnO1xuaW1wb3J0IE1haW5GaWx0ZXJNdWx0aXBsZSBmcm9tICcuLi9jb21wb25lbnRzL01haW5GaWx0ZXJNdWx0aXBsZS52dWUnO1xuXHRcbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ01haW5GaWx0ZXJDb250YWluZXInLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0TWFpbkZpbHRlck11bHRpcGxlLFxuXHR9LFxuXHRtb3VudGVkICgpIHtcblx0XHRjb25zb2xlLmxvZygnbW91bnRlZCwgYWxsIGZpbHRlcnMgYXJlJywgdGhpcy5hbGxfZmlsdGVycylcblx0XHR2YXIgYWN0aXZlX2F0dHIgPSB0aGlzLmNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzKHRoaXMuJHJvdXRlLnF1ZXJ5LCB0aGlzLmFsbF9maWx0ZXJzKTtcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldEFjdGl2ZUZpbHRlcnMnLCBhY3RpdmVfYXR0cilcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhbGxfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFsbF9maWx0ZXJzO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hY3RpdmVfZmlsdGVycztcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMsXG5cdFx0aXNGaWx0ZXJWYWx1ZUNoZWNrZWQoZmlsdGVyX2tleSwgZmlsdGVyX2NvZGUpIHtcblx0XHRcdGlmIChmaWx0ZXJfa2V5IGluIHRoaXMuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uc29tZShcblx0XHRcdFx0XHQgYXR0cl92YWwgPT4gYXR0cl92YWwgPT0gZmlsdGVyX2NvZGVcdFxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRnZXRGaWx0ZXJWYWx1ZXNDaGVjaGVkKGZpbHRlcl9rZXkpIHtcblx0XHRcdGlmIChmaWx0ZXJfa2V5IGluIHRoaXMuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0udmFsdWVzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcnXG5cdFx0fSxcblx0XHRzZXRGaWx0ZXJBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnY2FsbCBzZXQgYWN0aXZlIGZpbHRlcicsIGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dmFyIGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxuXHRcdFx0aWYgKGNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRDaGVja2JveEZpbHRlcicsIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3JlbW92ZUNoZWNrYm94RmlsdGVyJywgZmlsdGVyX3BhcmFtcylcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdHNldEZpbHRlck9wdGlvbihmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzZXQgZmlsdGVyIG9wdGlvbiBydW5uaW5nJylcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRPcHRpb25GaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdFx0dGhpcy51cGRhdGVGaWx0ZXJSb3V0ZXMoKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUFsQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})