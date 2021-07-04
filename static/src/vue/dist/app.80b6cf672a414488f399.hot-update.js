webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  mounted: function mounted() {\n    console.log('mounted, all filters are', this.all_filters);\n    var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n    this.$store.commit('setActiveFilters', active_attr);\n  },\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"collectActiveAttributes\"],\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      var checked = event.target.checked;\n\n      if (checked) {\n        this.$store.commit('addCheckboxFilter', filter_params);\n      } else {\n        this.$store.commit('removeCheckboxFilter', filter_params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    setFilterOption: function setFilterOption(filter_key, filter_value) {\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      this.$store.commit('addOptionFilter', filter_params);\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuXG5hbGwgZmlsdGVyczoge3sgdGhpcy5hbGxfZmlsdGVycyB9fVxuPGRpdj5hY3RpdmUgZmlsdGVyczoge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fSA8L2Rpdj5cbjxkaXZcbnYtZm9yPVwiZmlsdGVyX2tleSBpbiBPYmplY3Qua2V5cyhhbGxfZmlsdGVycylcIiBcbjprZXk9XCJmaWx0ZXJfa2V5XCJcbj5cblx0PGRpdiBjbGFzcz1cImJnLWdyZWVuLTUwMFwiPiB7eyB0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmF0dHJpYnV0ZV9uYW1lIH19IDwvZGl2PlxuXG5cblx0PGRpdiBcblx0di1zaG93PVwidGhpcy5hbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS5maWx0ZXJfdHlwZSA9PSAnbXVsdGlwbGUnXCJcblx0Y2xhc3M9XCJiZy1yZWQtMTAwXCIgXG5cdHYtZm9yPVwiZmlsdGVyX3ZhbHVlIGluIGFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLnZhbHVlc1wiXG5cdDprZXk9XCJmaWx0ZXJfdmFsdWVcIlxuXHQ+XG5cdCAgPGlucHV0IFxuXHQgIDppZD1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHQgIHR5cGU9XCJjaGVja2JveFwiXG5cdCAgOmNoZWNrZWQ9XCJpc0ZpbHRlclZhbHVlQ2hlY2tlZChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUuY29kZSlcIlxuXHQgIEBpbnB1dD1cInRoaXMuc2V0RmlsdGVyQWN0aXZlKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcIlxuXHQgIC8+XG5cdCAgPGxhYmVsXG5cdCAgOmZvcj1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHQgID5cblx0ICB7eyBmaWx0ZXJfdmFsdWUuZGlzcGxheV92YWx1ZSB9fVxuXHQgIDwvbGFiZWw+XG5cdDwvZGl2PlxuXG5cdDxkaXZcblx0di1zaG93PVwidGhpcy5hbGxfZmlsdGVyc1tmaWx0ZXJfa2V5XS5maWx0ZXJfdHlwZSA9PSAnb3B0aW9uJ1wiXG5cdGNsYXNzPVwiYnItcmVkLTEwMFwiXG5cdHYtZm9yPVwiZmlsdGVyX3ZhbHVlIGluIGFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLnZhbHVlc1wiXG5cdDprZXk9XCJmaWx0ZXJfdmFsdWVcIlxuXHQ+XG5cdFx0PGlucHV0XG5cdFx0OmlkPVwiJ2ZpbHRlcl9hdHRyXycgKyBmaWx0ZXJfdmFsdWUuY29kZVwiXG5cdFx0dHlwZT1cInJhZGlvXCJcblx0XHQ6Y2hlY2tlZD1cImlzRmlsdGVyVmFsdWVDaGVja2VkKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZS5jb2RlKVwiXG5cdFx0QGlucHV0PVwidGhpcy5zZXRGaWx0ZXJPcHRpb24oZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKVwiXHRcblx0XHQvPlxuXHRcdDxsYWJlbFxuXHRcdDpmb3I9XCInZmlsdGVyX2F0dHJfJyArIGZpbHRlcl92YWx1ZS5jb2RlXCJcblx0XHQ+XG5cdFx0IHt7IGZpbHRlcl92YWx1ZS5kaXNwbGF5X3ZhbHVlIH19XG5cdFx0PC9sYWJlbD5cblx0PC9kaXY+XG5cbjwvZGl2PlxuXG48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuXG5pbXBvcnQgIHsgY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi91c2VmdWxfbWV0aG9kcy5qcyc7XG5cdFxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnTWFpbkZpbHRlckNvbnRhaW5lcicsXG5cdG1vdW50ZWQgKCkge1xuXHRcdGNvbnNvbGUubG9nKCdtb3VudGVkLCBhbGwgZmlsdGVycyBhcmUnLCB0aGlzLmFsbF9maWx0ZXJzKVxuXHRcdHZhciBhY3RpdmVfYXR0ciA9IHRoaXMuY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXModGhpcy4kcm91dGUucXVlcnksIHRoaXMuYWxsX2ZpbHRlcnMpO1xuXHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWN0aXZlRmlsdGVycycsIGFjdGl2ZV9hdHRyKVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGFsbF9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWxsX2ZpbHRlcnM7XG5cdFx0fSxcblx0XHRhY3RpdmVfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzO1xuXHRcdH0sXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyxcblx0XHRpc0ZpbHRlclZhbHVlQ2hlY2tlZChmaWx0ZXJfa2V5LCBmaWx0ZXJfY29kZSkge1xuXHRcdFx0aWYgKGZpbHRlcl9rZXkgaW4gdGhpcy5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5hY3RpdmVfZmlsdGVyc1tmaWx0ZXJfa2V5XS5zb21lKFxuXHRcdFx0XHRcdCBhdHRyX3ZhbCA9PiBhdHRyX3ZhbCA9PSBmaWx0ZXJfY29kZVx0XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHNldEZpbHRlckFjdGl2ZShmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dmFyIGNoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxuXHRcdFx0aWYgKGNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRDaGVja2JveEZpbHRlcicsIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3JlbW92ZUNoZWNrYm94RmlsdGVyJywgZmlsdGVyX3BhcmFtcylcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRmlsdGVyUm91dGVzKClcblx0XHR9LFxuXHRcdHNldEZpbHRlck9wdGlvbihmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHQnZl9rZXknOiBmaWx0ZXJfa2V5LFxuXHRcdFx0XHQnZmlsdGVyX3ZhbHVlJzogZmlsdGVyX3ZhbHVlLFxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdhZGRPcHRpb25GaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6IkFBNERBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFmQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})