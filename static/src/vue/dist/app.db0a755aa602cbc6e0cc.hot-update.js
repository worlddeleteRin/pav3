webpackHotUpdate("app",{

/***/ "./src/useful_methods.js":
/*!*******************************!*\
  !*** ./src/useful_methods.js ***!
  \*******************************/
/*! exports provided: close_mobile_header, open_mobile_header, collectProductsAttributes, collectActiveAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close_mobile_header\", function() { return close_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open_mobile_header\", function() { return open_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectProductsAttributes\", function() { return collectProductsAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectActiveAttributes\", function() { return collectActiveAttributes; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction close_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', false);\n}\nfunction open_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', true);\n}\nfunction collectProductsAttributes(products) {\n  var attr = {};\n  products.forEach(function (product) {\n    var k = Object.keys(product.attributes);\n\n    for (var key_item in k) {\n      var atr_key = k[key_item];\n      var atr_val = product.attributes[atr_key];\n\n      if (atr_key in attr) {\n        // key already exist, need to check value\n        if (attr[atr_key].includes(atr_val)) {// if already has that value, just skip it\n        } else {\n          attr[atr_key].push(atr_val);\n        }\n      } else {\n        // key not exist, create it and add value\n        attr[atr_key] = [];\n        attr[atr_key].push(atr_val);\n      }\n    }\n  });\n  return attr;\n}\nfunction collectActiveAttributes(query) {\n  console.log('start collect active attributes');\n  var query = this.$route.query;\n  console.log('query is', query);\n  console.log(this.current_attr);\n  var active_attr = {};\n\n  for (var common_atr in this.current_attr) {\n    active_attr[common_atr] = [];\n\n    if (common_atr in query) {\n      var q_val = query[common_atr];\n\n      if (this.current_attr[common_atr].includes(q_val)) {\n        active_attr[common_atr].push(q_val);\n      }\n    }\n  }\n\n  return active_attr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlZnVsX21ldGhvZHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXNlZnVsX21ldGhvZHMuanM/NDViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xvc2VfbW9iaWxlX2hlYWRlciAoKSB7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRNb2JpbGVIZWFkZXJTaG93JywgZmFsc2UpXG59XG5leHBvcnQgZnVuY3Rpb24gb3Blbl9tb2JpbGVfaGVhZGVyICgpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldE1vYmlsZUhlYWRlclNob3cnLCB0cnVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyAocHJvZHVjdHMpIHtcblx0dmFyIGF0dHIgPSB7fVxuXHRwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuXHRcdHZhciBrID0gT2JqZWN0LmtleXMocHJvZHVjdC5hdHRyaWJ1dGVzKVxuXHRcdGZvciAodmFyIGtleV9pdGVtIGluIGspIHtcblx0XHRcdHZhciBhdHJfa2V5ID0ga1trZXlfaXRlbV1cdFx0XHRcblx0XHRcdHZhciBhdHJfdmFsID0gcHJvZHVjdC5hdHRyaWJ1dGVzW2F0cl9rZXldXG5cdFx0XHRpZiAoYXRyX2tleSBpbiBhdHRyKSB7XG5cdFx0XHRcdC8vIGtleSBhbHJlYWR5IGV4aXN0LCBuZWVkIHRvIGNoZWNrIHZhbHVlXG5cdFx0XHRcdGlmIChhdHRyW2F0cl9rZXldLmluY2x1ZGVzKGF0cl92YWwpKSB7XG5cdFx0XHRcdC8vIGlmIGFscmVhZHkgaGFzIHRoYXQgdmFsdWUsIGp1c3Qgc2tpcCBpdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGF0dHJbYXRyX2tleV0ucHVzaChhdHJfdmFsKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBrZXkgbm90IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB2YWx1ZVxuXHRcdFx0XHRhdHRyW2F0cl9rZXldID0gW11cblx0XHRcdFx0YXR0clthdHJfa2V5XS5wdXNoKGF0cl92YWwpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdClcblxuXHRyZXR1cm4gYXR0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzIChxdWVyeSkge1x0XG5cdGNvbnNvbGUubG9nKCdzdGFydCBjb2xsZWN0IGFjdGl2ZSBhdHRyaWJ1dGVzJylcblx0dmFyXHRxdWVyeSA9IHRoaXMuJHJvdXRlLnF1ZXJ5XG5cdGNvbnNvbGUubG9nKCdxdWVyeSBpcycsIHF1ZXJ5KVxuXHRjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfYXR0cilcblx0dmFyIGFjdGl2ZV9hdHRyID0ge31cblx0Zm9yICh2YXIgY29tbW9uX2F0ciBpbiB0aGlzLmN1cnJlbnRfYXR0cikge1xuXHRcdGFjdGl2ZV9hdHRyW2NvbW1vbl9hdHJdID0gW107XG5cdFx0aWYgKGNvbW1vbl9hdHIgaW4gcXVlcnkpIHtcblx0XHRcdHZhciBxX3ZhbCA9IHF1ZXJ5W2NvbW1vbl9hdHJdXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50X2F0dHJbY29tbW9uX2F0cl0uaW5jbHVkZXMocV92YWwpKSB7XG5cdFx0XHRcdGFjdGl2ZV9hdHRyW2NvbW1vbl9hdHJdLnB1c2gocV92YWwpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhY3RpdmVfYXR0clxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useful_methods.js\n");

/***/ })

})