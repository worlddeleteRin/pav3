webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n/* harmony import */ var _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductsFilterContainer.vue */ \"./src/components/ProductsFilterContainer.vue\");\n/* harmony import */ var _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_2__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ProductsFilterContainer: _components_ProductsFilterContainer_vue__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    current_category_products: function current_category_products() {\n      return this.$store.getters.getProductsByCategoryId(this.category_id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXHRcdGNhdCBpZCBpcyB7eyB0aGlzLmNhdGVnb3J5X2lkIH19XG5cblx0XHRjYXRlZ29yeSBwcm9kdWN0cyBhcmU6IHt7IHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0cyB9fVxuXG5cdFx0PFByb2R1Y3RzRmlsdGVyQ29udGFpbmVyIC8+XG5cblx0XHQ8UHJvZHVjdHNDb250YWluZXIgXG5cdFx0OnByb2R1Y3RzPVwidGhpcy5jdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzXCJcblx0XHQvPlxuXHRcdFxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgUHJvZHVjdHNGaWx0ZXJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdDYXRlZ29yeVBhZ2UnLFxuXHRwcm9wczogWydjYXRlZ29yeV9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdHNDb250YWluZXIsXG5cdFx0UHJvZHVjdHNGaWx0ZXJDb250YWluZXIsXG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Y3VycmVudF9jYXRlZ29yeSAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRDYXRlZ29yeUJ5SWQodGhpcy5jYXRlZ29yeV9pZCk7XHRcblx0XHR9LFxuXHRcdGN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHMgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5SWQodGhpcy5jYXRlZ29yeV9pZCk7XG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+XG5cbiJdLCJtYXBwaW5ncyI6IkFBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVBBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165":
false,

/***/ "./src/components/ProductsFilterContainer.vue":
/*!****************************************************!*\
  !*** ./src/components/ProductsFilterContainer.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWUuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductsFilterContainer.vue\n");

/***/ }),

/***/ "./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165":
false,

/***/ "./src/useful_methods.js":
false

})