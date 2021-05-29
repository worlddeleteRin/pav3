webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductsFilterContainer',\n  data: function data() {\n    return {};\n  },\n  computed: {\n    current_attr: function current_attr() {\n      return this.$store.getters.getAllFilters(this.$parent.current_category_products);\n    },\n    active_filters: function active_filters() {\n      return this.$store.getters.getActiveFilters(this.$route, this.current_attr);\n    }\n  },\n  methods: {\n    isActive: function isActive() {\n      return true;\n    },\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"collectProductsAttributes\"],\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_0__[\"collectActiveAttributes\"],\n    updateCheckbox: function updateCheckbox(attr_key, attr_value) {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHRcblx0PGRpdlxuXHR2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiB0aGlzLmN1cnJlbnRfYXR0clwiXG5cdDprZXk9XCJrZXlcIj5cblx0XHR7eyBrZXkgfX1cblx0XHQ8aW5wdXRcblx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdHYtZm9yPVwiYXR0cl92YWx1ZSBpbiB2YWx1ZVwiXG5cdFx0di1tb2RlbD1cInRoaXMuYWN0aXZlX2ZpbHRlcnNba2V5XVwiXG5cdFx0OmtleT1cImF0dHJfdmFsdWVcIlxuXHRcdDp2YWx1ZT1cImF0dHJfdmFsdWVcIlxuXHRcdEBpbnB1dD1cInVwZGF0ZUNoZWNrYm94KGtleSwgYXR0cl92YWx1ZSlcIlxuXHRcdC8+XG5cdDwvZGl2PlxuXHRcblxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLCBjb2xsZWN0QWN0aXZlQXR0cmlidXRlc30gZnJvbSAnLi4vdXNlZnVsX21ldGhvZHMuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnUHJvZHVjdHNGaWx0ZXJDb250YWluZXInLFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2F0dHIgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QWxsRmlsdGVycyhcblx0XHRcdHRoaXMuJHBhcmVudC5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0YWN0aXZlX2ZpbHRlcnMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0QWN0aXZlRmlsdGVycyh0aGlzLiRyb3V0ZSwgdGhpcy5jdXJyZW50X2F0dHIpO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGlzQWN0aXZlICgpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0Y29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyxcblx0XHRjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyxcblx0XHR1cGRhdGVDaGVja2JveCAoYXR0cl9rZXksIGF0dHJfdmFsdWUpIHtcblx0XHR9LFxuXHR9LFxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiJBQWdDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js\n");

/***/ })

})