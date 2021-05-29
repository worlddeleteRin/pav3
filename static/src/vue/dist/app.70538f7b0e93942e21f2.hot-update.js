webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/CategoryPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ProductsContainer.vue */ \"./src/components/ProductsContainer.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'CategoryPage',\n  props: ['category_id'],\n  components: {\n    ProductsContainer: _components_ProductsContainer_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    console.log('product page code run before mount');\n    console.log('route is', this.$route);\n  },\n  computed: {\n    current_category: function current_category() {\n      return this.$store.getters.getCategoryById(this.category_id);\n    },\n    current_category_products: function current_category_products() {\n      return this.$store.getters.getProductsByCategoryId(this.category_id);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlQYWdlLnZ1ZT9iYWZjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInB4LTQgbXgtYXV0byBib3JkZXIgYm9yZGVyLXJlZC01MDAgbWF4LXctN3hsXCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiPlxuXHRcdFx0e3sgdGhpcy5jdXJyZW50X2NhdGVnb3J5Lm5hbWUgfX1cdFxuXHRcdDwvZGl2PlxuXHRcdGNhdCBpZCBpcyB7eyB0aGlzLmNhdGVnb3J5X2lkIH19XG5cblx0XHRjYXRlZ29yeSBwcm9kdWN0cyBhcmU6IHt7IHRoaXMuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0cyB9fVxuXHRcdDxiciAvPlxuXHRcdHJvdXRlIGlzIHF1ZXJ5IHt7IHRoaXMuJHJvdXRlLnF1ZXJ5IH19XG5cdFx0PGJyIC8+XG5cblxuXHRcdDxQcm9kdWN0c0NvbnRhaW5lciBcblx0XHQ6cHJvZHVjdHM9XCJ0aGlzLmN1cnJlbnRfY2F0ZWdvcnlfcHJvZHVjdHNcIlxuXHRcdC8+XG5cdFx0XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXIudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnQ2F0ZWdvcnlQYWdlJyxcblx0cHJvcHM6IFsnY2F0ZWdvcnlfaWQnXSxcblx0Y29tcG9uZW50czoge1xuXHRcdFByb2R1Y3RzQ29udGFpbmVyLFxuXHR9LFxuXHRiZWZvcmVNb3VudCAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Byb2R1Y3QgcGFnZSBjb2RlIHJ1biBiZWZvcmUgbW91bnQnKVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCdyb3V0ZSBpcycsIHRoaXMuJHJvdXRlKVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGN1cnJlbnRfY2F0ZWdvcnkgKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q2F0ZWdvcnlCeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1x0XG5cdFx0fSxcblx0XHRjdXJyZW50X2NhdGVnb3J5X3Byb2R1Y3RzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2R1Y3RzQnlDYXRlZ29yeUlkKHRoaXMuY2F0ZWdvcnlfaWQpO1xuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PlxuXG4iXSwibWFwcGluZ3MiOiJBQXNCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/CategoryPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165":
false,

/***/ "./src/components/ProductsFilterContainer.vue":
false,

/***/ "./src/components/ProductsFilterContainer.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165":
false,

/***/ "./src/useful_methods.js":
false

})