webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductsFilterContainer.vue */ \"./src/components/ProductsFilterContainer.vue\");\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActiveFiltersContainer.vue */ \"./src/components/ActiveFiltersContainer.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProductsFilterContainer: _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ActiveFiltersContainer: _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  beforeMount: function beforeMount() {//\t\tconsole.log('category is mounted now');\n    //\t\t// getting products attributesd\n    //\t\tvar products_filters = collectProductsAttributes(\n    //\t\t\tthis.current_category_products\t\n    //\t\t);\n    //\t\tthis.$store.commit('setAllFilters', products_filters);\n    //\t\n    //\t\t// getting products active filters\n    //\t\tvar active_filters = collectActiveAttributes(this.$route.query, products_filters);\n    //\t\tthis.$store.commit('setActiveFilters', active_filters);\n    //\t\tconsole.log('active filters are: ', active_filters);\t\t\n  },\n  computed: {//\t\tcurrent_category () {\n    //\t\t\treturn this.$store.getters.getCategoryById(this.category_id);\t\n    //\t\t},\n    //\t\tcurrent_category_products () {\n    //\t\t\treturn this.$store.getters.getProductsByCategoryId(this.category_id);\n    //\t\t},\n    //\t\tcurrent_products () {\n    //\t\t\treturn this.$store.getters.getProductsFilter(\n    //\t\t\t\tthis.current_category_products\n    //\t\t\t);\n    //\t\t},\n  },\n  methods: {\n    collectActiveAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectActiveAttributes\"],\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImZsZXggbXgtYXV0b1wiPlxuXG5cdFx0PGRpdiBjbGFzcz1cImJvcmRlci00IGJvcmRlci1ncmVlbi01MDBcIj5cblx0XHQ8UHJvZHVjdHNGaWx0ZXJDb250YWluZXIgLz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0PEFjdGl2ZUZpbHRlcnNDb250YWluZXIgLz5cblx0XHQ8UHJvZHVjdHNDb250YWluZXIgXG5cdFx0OnByb2R1Y3RzPVwidGhpcy5jdXJyZW50X3Byb2R1Y3RzXCJcblx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cdFx0XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXIudnVlJztcbmltcG9ydCBQcm9kdWN0c0ZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzRmlsdGVyQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgeyBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLCBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyB9IGZyb20gJy4uL3VzZWZ1bF9tZXRob2RzLmpzJztcbmltcG9ydCBBY3RpdmVGaWx0ZXJzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQWN0aXZlRmlsdGVyc0NvbnRhaW5lci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdDYXRlZ29yeVBhZ2UnLFxuXHRwcm9wczogWydjYXRlZ29yeV9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdFx0UHJvZHVjdHNGaWx0ZXJDb250YWluZXIsXG5cdFx0QWN0aXZlRmlsdGVyc0NvbnRhaW5lcixcblx0fSxcblx0YmVmb3JlTW91bnQgKCkge1xuLy9cdFx0Y29uc29sZS5sb2coJ2NhdGVnb3J5IGlzIG1vdW50ZWQgbm93Jyk7XG4vL1x0XHQvLyBnZXR0aW5nIHByb2R1Y3RzIGF0dHJpYnV0ZXNkXG4vL1x0XHR2YXIgcHJvZHVjdHNfZmlsdGVycyA9IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMoXG4vL1x0XHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1x0XG4vL1x0XHQpO1xuLy9cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBbGxGaWx0ZXJzJywgcHJvZHVjdHNfZmlsdGVycyk7XG4vL1x0XG4vL1x0XHQvLyBnZXR0aW5nIHByb2R1Y3RzIGFjdGl2ZSBmaWx0ZXJzXG4vL1x0XHR2YXIgYWN0aXZlX2ZpbHRlcnMgPSBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgcHJvZHVjdHNfZmlsdGVycyk7XG4vL1x0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3NldEFjdGl2ZUZpbHRlcnMnLCBhY3RpdmVfZmlsdGVycyk7XG4vL1x0XHRjb25zb2xlLmxvZygnYWN0aXZlIGZpbHRlcnMgYXJlOiAnLCBhY3RpdmVfZmlsdGVycyk7XHRcdFxuXHR9LFxuXHRjb21wdXRlZDoge1xuLy9cdFx0Y3VycmVudF9jYXRlZ29yeSAoKSB7XG4vL1x0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcdFxuLy9cdFx0fSxcbi8vXHRcdGN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHMgKCkge1xuLy9cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcbi8vXHRcdH0sXG4vL1x0XHRjdXJyZW50X3Byb2R1Y3RzICgpIHtcbi8vXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNGaWx0ZXIoXG4vL1x0XHRcdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG4vL1x0XHRcdCk7XG4vL1x0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMsXG5cdFx0Y29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyxcdFxuXHR9LFxufVxuXG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiQUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFsQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})