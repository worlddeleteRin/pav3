webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainFilterMultiple.vue */ \"./src/components/MainFilterMultiple.vue\");\n/* harmony import */ var _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  components: {\n    MainFilterMultiple: _components_MainFilterMultiple_vue__WEBPACK_IMPORTED_MODULE_1___default.a\n  },\n  mounted: function mounted() {\n    console.log('mounted, all filters are', this.all_filters);\n    var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n    this.$store.commit('setActiveFilters', active_attr);\n  },\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"collectActiveAttributes\"],\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      var checked = event.target.checked;\n\n      if (checked) {\n        this.$store.commit('addCheckboxFilter', filter_params);\n      } else {\n        this.$store.commit('removeCheckboxFilter', filter_params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    setFilterOption: function setFilterOption(filter_key, filter_value) {\n      console.log('set filter option running');\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addOptionFilter', filter_params);\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuXG48ZGl2PiB7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19IDwvZGl2Plx0XG5cbjxkaXZcbnYtZm9yPVwiZmlsdGVyX2tleSBpbiBPYmplY3Qua2V5cyhhbGxfZmlsdGVycylcIiBcbjprZXk9XCJmaWx0ZXJfa2V5XCJcbj5cblx0PGRpdiBjbGFzcz1cInB5LTIgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+IHt7IHRoaXMuYWxsX2ZpbHRlcnNbZmlsdGVyX2tleV0uYXR0cmlidXRlX25hbWUgfX0gPC9kaXY+XG5cblxuXHQ8TWFpbkZpbHRlck11bHRpcGxlXG5cdDpmaWx0ZXJfa2V5PVwiZmlsdGVyX2tleVwiXG5cdHYtaWY9XCJ0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlID09ICdtdWx0aXBsZSdcIlxuXHRjbGFzcz1cImZsZXggZmxleC1jb2xcIlxuXHQvPlxuXG5cdDxkaXZcdFxuXHR2LWlmPVwidGhpcy5hbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS5maWx0ZXJfdHlwZSA9PSAnb3B0aW9uJ1wiXG5cdD5cblx0PGRpdlxuXHRjbGFzcz1cImJyLXJlZC0xMDBcIlxuXHR2LWZvcj1cImZpbHRlcl92YWx1ZSBpbiBhbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS52YWx1ZXNcIlxuXHQ6a2V5PVwiZmlsdGVyX3ZhbHVlXCJcblx0PlxuXHRcdDxpbnB1dFxuXHRcdDppZD1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHRcdDp2YWx1ZT1cImZpbHRlcl92YWx1ZS5jb2RlXCJcblx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdDpjaGVja2VkPVwiaXNGaWx0ZXJWYWx1ZUNoZWNrZWQoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlLmNvZGUpXCJcblx0XHRAaW5wdXQ9XCJ0aGlzLnNldEZpbHRlck9wdGlvbihmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpXCJcdFxuXHRcdC8+XG5cdFx0PGxhYmVsXG5cdFx0OmZvcj1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHRcdD5cblx0XHQge3sgZmlsdGVyX3ZhbHVlLmRpc3BsYXlfdmFsdWUgfX1cblx0XHQ8L2xhYmVsPlxuXHQ8L2Rpdj5cblx0PC9kaXY+XG5cblxuPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cbmltcG9ydCAgeyBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyB9IGZyb20gJy4uL3VzZWZ1bF9tZXRob2RzLmpzJztcbmltcG9ydCBNYWluRmlsdGVyTXVsdGlwbGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluRmlsdGVyTXVsdGlwbGUudnVlJztcblx0XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdNYWluRmlsdGVyQ29udGFpbmVyJyxcblx0Y29tcG9uZW50czoge1xuXHRcdE1haW5GaWx0ZXJNdWx0aXBsZSxcblx0fSxcblx0bW91bnRlZCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ21vdW50ZWQsIGFsbCBmaWx0ZXJzIGFyZScsIHRoaXMuYWxsX2ZpbHRlcnMpXG5cdFx0dmFyIGFjdGl2ZV9hdHRyID0gdGhpcy5jb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgdGhpcy5hbGxfZmlsdGVycyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBY3RpdmVGaWx0ZXJzJywgYWN0aXZlX2F0dHIpXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0YWxsX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hbGxfZmlsdGVycztcblx0XHR9LFxuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnM7XG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzLFxuXHRcdGlzRmlsdGVyVmFsdWVDaGVja2VkKGZpbHRlcl9rZXksIGZpbHRlcl9jb2RlKSB7XG5cdFx0XHRpZiAoZmlsdGVyX2tleSBpbiB0aGlzLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLnNvbWUoXG5cdFx0XHRcdFx0IGF0dHJfdmFsID0+IGF0dHJfdmFsID09IGZpbHRlcl9jb2RlXHRcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0c2V0RmlsdGVyQWN0aXZlKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdFx0dmFyIGZpbHRlcl9wYXJhbXMgPSB7XG5cdFx0XHRcdCdmX2tleSc6IGZpbHRlcl9rZXksXG5cdFx0XHRcdCdmaWx0ZXJfdmFsdWUnOiBmaWx0ZXJfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR2YXIgY2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXG5cdFx0XHRpZiAoY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2FkZENoZWNrYm94RmlsdGVyJywgZmlsdGVyX3BhcmFtcylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgncmVtb3ZlQ2hlY2tib3hGaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVGaWx0ZXJSb3V0ZXMoKVxuXHRcdH0sXG5cdFx0c2V0RmlsdGVyT3B0aW9uKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3NldCBmaWx0ZXIgb3B0aW9uIHJ1bm5pbmcnKVxuXHRcdFx0dmFyIGZpbHRlcl9wYXJhbXMgPSB7XG5cdFx0XHRcdCdmX2tleSc6IGZpbHRlcl9rZXksXG5cdFx0XHRcdCdmaWx0ZXJfdmFsdWUnOiBmaWx0ZXJfdmFsdWUsXG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2FkZE9wdGlvbkZpbHRlcicsIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0XHR1cGRhdGVGaWx0ZXJSb3V0ZXMoKSB7XG5cdFx0XHR2YXIgZmlsdGVyX3F1ZXJ5ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRGaWx0ZXJRdWVyeTtcblx0XHRcdHZhciBuZXdfcGF0aCA9IHRoaXMuJHJvdXRlLnBhdGgrJz8nK2ZpbHRlcl9xdWVyeVxuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2gobmV3X3BhdGgpXG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiQUFvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFsQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterMultiple.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterMultiple.vue?vue&type=template&id=4b481d1e":
false,

/***/ "./src/components/MainFilterMultiple.vue":
/*!***********************************************!*\
  !*** ./src/components/MainFilterMultiple.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyTXVsdGlwbGUudnVlLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainFilterMultiple.vue\n");

/***/ }),

/***/ "./src/components/MainFilterMultiple.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/MainFilterMultiple.vue?vue&type=template&id=4b481d1e":
false

})