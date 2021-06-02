webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductPageImageContainer.vue */ \"./src/components/ProductPageImageContainer.vue\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"./src/api.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProductPage',\n  props: ['product_id'],\n  components: {\n    ProductPageImageContainer: _components_ProductPageImageContainer_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    return Object(_Users_noname_work_ilya_pav3_vueapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var product_data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.apiGetProductById(_this.product_id);\n\n            case 2:\n              product_data = _context.sent;\n              _this.current_product = product_data.product;\n              console.log('product is:', _this.current_product);\n              _this.product_loaded = true;\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  data: function data() {\n    return {\n      product_loaded: false,\n      current_product: {}\n    };\n  },\n  computed: {\n    api_url: function api_url() {\n      return this.$store.state.common.api_url;\n    }\n  },\n  methods: {\n    apiGetProductById: _api_js__WEBPACK_IMPORTED_MODULE_3__[\"apiGetProductById\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UGFnZS52dWU/OGVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgdi1pZj1cIiF0aGlzLnByb2R1Y3RfbG9hZGVkXCI+XG5cdFx0bG9hZGluZyBwcm9kdWN0Li4uXG5cdDwvZGl2PlxuXHQ8ZGl2IFxuXHR2LWlmPVwidGhpcy5wcm9kdWN0X2xvYWRlZFwiXG5cdGNsYXNzPVwicHgtNCBteC1hdXRvIG1heC13LTd4bFwiPlxuXG5cdDxQcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyXG5cdDpwcm9kdWN0PVwidGhpcy5jdXJyZW50X3Byb2R1Y3RcIlxuXHQvPlxuXG5cdFx0cHJvZHVjdCBwYWdlIGlzIGhlcmVcblx0cHJvZHVjdCBpZCBpcyB7eyB0aGlzLnByb2R1Y3RfaWQgfX1cblx0PGJyIC8+XG5cdHByb2R1Y3Q6IHt7IHRoaXMuY3VycmVudF9wcm9kdWN0IH19XG5cdHByb2R1Y3QgaXM6IHt7IHRoaXMuY3VycmVudF9wcm9kdWN0LmlkIH19XG5cdDxiciAvPlxuXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb2R1Y3RQYWdlSW1hZ2VDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0UGFnZUltYWdlQ29udGFpbmVyLnZ1ZSc7XG5pbXBvcnQgeyBhcGlHZXRQcm9kdWN0QnlJZCB9IGZyb20gJy4uL2FwaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ1Byb2R1Y3RQYWdlJyxcblx0cHJvcHM6IFsncHJvZHVjdF9pZCddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0UHJvZHVjdFBhZ2VJbWFnZUNvbnRhaW5lcixcblx0fSxcblx0YXN5bmMgYmVmb3JlTW91bnQgKCkge1xuXHRcdHZhciBwcm9kdWN0X2RhdGEgPSBhd2FpdCB0aGlzLmFwaUdldFByb2R1Y3RCeUlkKHRoaXMucHJvZHVjdF9pZCk7XG5cdFx0dGhpcy5jdXJyZW50X3Byb2R1Y3QgPSBwcm9kdWN0X2RhdGEucHJvZHVjdDtcblx0XHRjb25zb2xlLmxvZygncHJvZHVjdCBpczonLCB0aGlzLmN1cnJlbnRfcHJvZHVjdCk7XG5cdFx0dGhpcy5wcm9kdWN0X2xvYWRlZCA9IHRydWU7XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwcm9kdWN0X2xvYWRlZDogZmFsc2UsXG5cdFx0XHRjdXJyZW50X3Byb2R1Y3Q6IHt9LFxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhcGlfdXJsICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uYXBpX3VybDtcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXBpR2V0UHJvZHVjdEJ5SWQsXG5cdH0sXG59XG5cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXdCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUF2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductPage.vue?vue&type=script&lang=js\n");

/***/ })

})