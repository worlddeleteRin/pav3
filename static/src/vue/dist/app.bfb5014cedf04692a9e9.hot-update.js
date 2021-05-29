webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductsFilterContainer.vue */ \"./src/components/ProductsFilterContainer.vue\");\n/* harmony import */ var _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useful_methods.js */ \"./src/useful_methods.js\");\n/* harmony import */ var _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActiveFiltersContainer.vue */ \"./src/components/ActiveFiltersContainer.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProductsFilterContainer: _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ActiveFiltersContainer: _components_ActiveFiltersContainer_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log('category is mounted now'); // getting products attributesd\n\n    var products_filters = Object(_useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"])(this.current_category_products);\n    this.$store.commit('setAllFilters', products_filters); // getting products active filters\n\n    var active_filters = collectActiveAttributes(this.$route.query, products_filters);\n    this.$store.commit('setActiveFilters', active_filters);\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    current_category_products: function current_category_products() {\n      return this.$store.getters.getProductsByCategoryId(this.category_id);\n    },\n    current_products: function current_products() {\n      return this.$store.getters.getProductsFilter(this.current_category_products);\n    }\n  },\n  methods: {\n    collectProductsAttributes: _useful_methods_js__WEBPACK_IMPORTED_MODULE_2__[\"collectProductsAttributes\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImZsZXggbXgtYXV0b1wiPlxuXG5cdFx0PGRpdiBjbGFzcz1cImJvcmRlci00IGJvcmRlci1ncmVlbi01MDBcIj5cblx0XHQ8UHJvZHVjdHNGaWx0ZXJDb250YWluZXIgLz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0PEFjdGl2ZUZpbHRlcnNDb250YWluZXIgLz5cblx0XHQ8UHJvZHVjdHNDb250YWluZXIgXG5cdFx0OnByb2R1Y3RzPVwidGhpcy5jdXJyZW50X3Byb2R1Y3RzXCJcblx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdFx0PC9kaXY+XG5cdFx0XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXIudnVlJztcbmltcG9ydCBQcm9kdWN0c0ZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzRmlsdGVyQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgeyBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdXNlZnVsX21ldGhvZHMuanMnO1xuaW1wb3J0IEFjdGl2ZUZpbHRlcnNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BY3RpdmVGaWx0ZXJzQ29udGFpbmVyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRQcm9kdWN0c0NvbnRhaW5lcixcblx0XHRQcm9kdWN0c0ZpbHRlckNvbnRhaW5lcixcblx0XHRBY3RpdmVGaWx0ZXJzQ29udGFpbmVyLFxuXHR9LFxuXHRtb3VudGVkKCkge1xuXHRcdGNvbnNvbGUubG9nKCdjYXRlZ29yeSBpcyBtb3VudGVkIG5vdycpO1xuXHRcdC8vIGdldHRpbmcgcHJvZHVjdHMgYXR0cmlidXRlc2Rcblx0XHR2YXIgcHJvZHVjdHNfZmlsdGVycyA9IGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMoXG5cdFx0XHR0aGlzLmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcdFxuXHRcdCk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBbGxGaWx0ZXJzJywgcHJvZHVjdHNfZmlsdGVycyk7XG5cdFxuXHRcdC8vIGdldHRpbmcgcHJvZHVjdHMgYWN0aXZlIGZpbHRlcnNcblx0XHR2YXIgYWN0aXZlX2ZpbHRlcnMgPSBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgcHJvZHVjdHNfZmlsdGVycyk7XG5cdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdzZXRBY3RpdmVGaWx0ZXJzJywgYWN0aXZlX2ZpbHRlcnMpO1xuXHRcdFxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfY2F0ZWdvcnkgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0fSxcblx0XHRjdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzQnlDYXRlZ29yeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1xuXHRcdH0sXG5cdFx0Y3VycmVudF9wcm9kdWN0cyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0ZpbHRlcihcblx0XHRcdFx0dGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXG5cdFx0XHQpO1xuXHRcdH0sXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzLFx0XG5cdH0sXG59XG5cbjwvc2NyaXB0PlxuXG4iXSwibWFwcGluZ3MiOiJBQTBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFYQTtBQWFBO0FBQ0E7QUFEQTtBQWxDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})