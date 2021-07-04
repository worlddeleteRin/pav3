webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterContainer.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MainFilterContainer',\n  computed: {\n    all_filters: function all_filters() {\n      return this.$store.state.ecommerce.all_filters;\n    },\n    active_filters: function active_filters() {\n      return this.$store.state.ecommerce.active_filters;\n    }\n  },\n  methods: {\n    isFilterValueChecked: function isFilterValueChecked(filter_key, filter_code) {\n      if (filter_key in this.active_filters) {\n        return this.active_filters[filter_key].some(function (attr_val) {\n          return attr_val == filter_code;\n        });\n      }\n\n      return false;\n    },\n    setFilterActive: function setFilterActive(filter_key, filter_value) {\n      var filter_params = {\n        'f_key': filter_key,\n        'filter_value': filter_value\n      };\n      var checked = event.target.checked;\n      console.log('click input checkbox');\n      console.log(filter_key, filter_value);\n      console.log(event.target.checked);\n\n      if (checked) {\n        this.$store.commit('addCheckboxFilter', filter_params);\n      } else {\n        this.$store.commit('removeCheckboxFilter', filter_params);\n      }\n\n      this.updateFilterRoutes();\n    },\n    updateFilterRoutes: function updateFilterRoutes() {\n      var filter_query = this.$store.getters.getFilterQuery;\n      var new_path = this.$route.path + '?' + filter_query;\n      this.$router.push(new_path);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQ29udGFpbmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5GaWx0ZXJDb250YWluZXIudnVlPzI5YmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuXG5hbGwgZmlsdGVyczoge3sgdGhpcy5hbGxfZmlsdGVycyB9fVxuPGRpdj5hY3RpdmUgZmlsdGVyczoge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fSA8L2Rpdj5cbjxkaXZcbnYtZm9yPVwiZmlsdGVyX2tleSBpbiBPYmplY3Qua2V5cyhhbGxfZmlsdGVycylcIiBcbjprZXk9XCJmaWx0ZXJfa2V5XCJcbj5cblx0PGRpdiBjbGFzcz1cImJnLWdyZWVuLTUwMFwiPiB7eyB0aGlzLmFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLmF0dHJpYnV0ZV9uYW1lIH19IDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYmctcmVkLTEwMFwiXG5cdHYtZm9yPVwiZmlsdGVyX3ZhbHVlIGluIGFsbF9maWx0ZXJzW2ZpbHRlcl9rZXldLnZhbHVlc1wiXG5cdDprZXk9XCJmaWx0ZXJfdmFsdWVcIlxuXHQ+XG5cdCAgPGlucHV0IFxuXHQgIDppZD1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHQgIHR5cGU9XCJjaGVja2JveFwiXG5cdCAgOmNoZWNrZWQ9XCJpc0ZpbHRlclZhbHVlQ2hlY2tlZChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUuY29kZSlcIlxuXHQgIEBpbnB1dD1cInRoaXMuc2V0RmlsdGVyQWN0aXZlKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcIlxuXHQgIC8+XG5cdCAgPGxhYmVsXG5cdCAgOmZvcj1cIidmaWx0ZXJfYXR0cl8nICsgZmlsdGVyX3ZhbHVlLmNvZGVcIlxuXHQgID5cblx0ICB7eyBmaWx0ZXJfdmFsdWUuZGlzcGxheV92YWx1ZSB9fVxuXHQgIDwvbGFiZWw+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdNYWluRmlsdGVyQ29udGFpbmVyJyxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhbGxfZmlsdGVycyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFsbF9maWx0ZXJzO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hY3RpdmVfZmlsdGVycztcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aXNGaWx0ZXJWYWx1ZUNoZWNrZWQoZmlsdGVyX2tleSwgZmlsdGVyX2NvZGUpIHtcblx0XHRcdGlmIChmaWx0ZXJfa2V5IGluIHRoaXMuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uc29tZShcblx0XHRcdFx0XHQgYXR0cl92YWwgPT4gYXR0cl92YWwgPT0gZmlsdGVyX2NvZGVcdFxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRzZXRGaWx0ZXJBY3RpdmUoZmlsdGVyX2tleSwgZmlsdGVyX3ZhbHVlKSB7XG5cdFx0XHR2YXIgZmlsdGVyX3BhcmFtcyA9IHtcblx0XHRcdFx0J2Zfa2V5JzogZmlsdGVyX2tleSxcblx0XHRcdFx0J2ZpbHRlcl92YWx1ZSc6IGZpbHRlcl92YWx1ZSxcblx0XHRcdH1cblx0XHRcdHZhciBjaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcblx0XHRcdGNvbnNvbGUubG9nKCdjbGljayBpbnB1dCBjaGVja2JveCcpXHRcblx0XHRcdGNvbnNvbGUubG9nKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuXG5cdFx0XHRpZiAoY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ2FkZENoZWNrYm94RmlsdGVyJywgZmlsdGVyX3BhcmFtcylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgncmVtb3ZlQ2hlY2tib3hGaWx0ZXInLCBmaWx0ZXJfcGFyYW1zKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVGaWx0ZXJSb3V0ZXMoKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0dmFyIGZpbHRlcl9xdWVyeSA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RmlsdGVyUXVlcnk7XG5cdFx0XHR2YXIgbmV3X3BhdGggPSB0aGlzLiRyb3V0ZS5wYXRoKyc/JytmaWx0ZXJfcXVlcnlcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6IkFBbUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})