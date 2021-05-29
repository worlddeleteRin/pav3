webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProductsFilterContainer.vue */ \"./src/components/ProductsFilterContainer.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProductsFilterContainer: _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    console.log('product page code run before mount');\n    console.log('route is', this.$route);\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    current_category_products: function current_category_products() {\n      return this.$store.getters.getProductsByCategoryId(this.category_id);\n    },\n    current_products: function current_products() {\n      return this.$store.getters.getProductsFilter(this.current_category_products);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXHRcdGNhdCBpZCBpcyB7eyB0aGlzLmNhdGVnb3J5X2lkIH19XG5cblx0XHRjYXRlZ29yeSBwcm9kdWN0cyBhcmU6IHt7IHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0cyB9fVxuXHRcdDxiciAvPlxuXHRcdHJvdXRlIGlzIHF1ZXJ5IHt7IHRoaXMuJHJvdXRlLnF1ZXJ5IH19XG5cdFx0PGJyIC8+XG5cblx0XHQ8UHJvZHVjdHNGaWx0ZXJDb250YWluZXIgLz5cblxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcIlxuXHRcdC8+XG5cdFx0XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXIudnVlJztcbmltcG9ydCBQcm9kdWN0c0ZpbHRlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzRmlsdGVyQ29udGFpbmVyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0NhdGVnb3J5UGFnZScsXG5cdHByb3BzOiBbJ2NhdGVnb3J5X2lkJ10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRQcm9kdWN0c0NvbnRhaW5lcixcblx0XHRQcm9kdWN0c0ZpbHRlckNvbnRhaW5lcixcblx0fSxcblx0YmVmb3JlTW91bnQgKCkge1xuXHRcdGNvbnNvbGUubG9nKCdwcm9kdWN0IHBhZ2UgY29kZSBydW4gYmVmb3JlIG1vdW50Jylcblx0XHRcblx0XHRjb25zb2xlLmxvZygncm91dGUgaXMnLCB0aGlzLiRyb3V0ZSlcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRjdXJyZW50X2NhdGVnb3J5ICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENhdGVnb3J5QnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcdFxuXHRcdH0sXG5cdFx0Y3VycmVudF9jYXRlZ29yeV9wcm9kdWN0cyAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZCh0aGlzLmNhdGVnb3J5X2lkKTtcblx0XHR9LFxuXHRcdGN1cnJlbnRfcHJvZHVjdHMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNGaWx0ZXIoXG5cdFx0XHRcdHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1xuXHRcdFx0KTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD5cblxuIl0sIm1hcHBpbmdzIjoiQUF1QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVhBO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ })

})