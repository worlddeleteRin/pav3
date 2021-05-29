webpackHotUpdate("app",{

/***/ "./src/useful_methods.js":
/*!*******************************!*\
  !*** ./src/useful_methods.js ***!
  \*******************************/
/*! exports provided: close_mobile_header, open_mobile_header, collectProductsAttributes, collectActiveAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close_mobile_header\", function() { return close_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open_mobile_header\", function() { return open_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectProductsAttributes\", function() { return collectProductsAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectActiveAttributes\", function() { return collectActiveAttributes; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction close_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', false);\n}\nfunction open_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', true);\n}\nfunction collectProductsAttributes(products) {\n  var attr = {};\n  products.forEach(function (product) {\n    var k = Object.keys(product.attributes);\n\n    for (var key_item in k) {\n      var atr_key = k[key_item];\n\n      if (product.attributes[atr_key][\"use_filter\"]) {\n        var atr_val = product.attributes[atr_key][\"value\"];\n        var atr_id = product.attributes[atr_key][\"id\"];\n        var new_attr = {\n          'id': atr_id,\n          'display_name': atr_val\n        };\n\n        if (atr_key in attr) {\n          // key already exist, need to check value\n          if (attr[atr_key][\"values\"].some(function (el) {\n            return el.id == atr_id;\n          })) {// if already has that value, just skip it\n          } else {\n            attr[atr_key][\"values\"].push(new_attr);\n          }\n        } else {\n          // key not exist, create it and add value\n          // init attr key with all parameters\n          attr[atr_key] = {};\n          attr[atr_key][\"values\"] = [];\n          attr[atr_key][\"display_name\"] = product.attributes[atr_key][\"display_name\"];\n          attr[atr_key][\"type\"] = product.attributes[atr_key][\"type\"];\n          attr[atr_key][\"filter_type\"] = product.attributes[atr_key][\"filter_type\"];\n          attr[atr_key][\"values\"].push(new_attr);\n        }\n      }\n    }\n  });\n  return attr;\n}\nfunction collectActiveAttributes(query, current_attr) {\n  console.log('start collect active attributes');\n  console.log('query is', query);\n  console.log(current_attr);\n  var active_attr = {};\n\n  for (var common_atr in current_attr) {\n    if (common_atr in query) {\n      active_attr[common_atr] = [];\n      var q_values = query[common_atr].split(',');\n\n      for (var indx in q_values) {\n        var q_val = q_values[indx];\n\n        if (current_attr[common_atr][\"values\"].some(function (el) {\n          return el.id == q_val;\n        })) {\n          active_attr[common_atr].push(q_val);\n        }\n      }\n    }\n  }\n\n  console.log('active attributes are', active_attr);\n  return active_attr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlZnVsX21ldGhvZHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXNlZnVsX21ldGhvZHMuanM/NDViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xvc2VfbW9iaWxlX2hlYWRlciAoKSB7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRNb2JpbGVIZWFkZXJTaG93JywgZmFsc2UpXG59XG5leHBvcnQgZnVuY3Rpb24gb3Blbl9tb2JpbGVfaGVhZGVyICgpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldE1vYmlsZUhlYWRlclNob3cnLCB0cnVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyAocHJvZHVjdHMpIHtcblx0dmFyIGF0dHIgPSB7fVxuXHRwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuXHRcdHZhciBrID0gT2JqZWN0LmtleXMocHJvZHVjdC5hdHRyaWJ1dGVzKVxuXHRcdGZvciAodmFyIGtleV9pdGVtIGluIGspIHtcblx0XHRcdHZhciBhdHJfa2V5ID0ga1trZXlfaXRlbV1cdFx0XHRcblx0XHRcdGlmIChwcm9kdWN0LmF0dHJpYnV0ZXNbYXRyX2tleV1bXCJ1c2VfZmlsdGVyXCJdKSB7XG5cdFx0XHR2YXIgYXRyX3ZhbCA9IHByb2R1Y3QuYXR0cmlidXRlc1thdHJfa2V5XVtcInZhbHVlXCJdXG5cdFx0XHR2YXIgYXRyX2lkID0gcHJvZHVjdC5hdHRyaWJ1dGVzW2F0cl9rZXldW1wiaWRcIl1cblx0XHRcdHZhciBuZXdfYXR0ciA9IHtcblx0XHRcdFx0J2lkJzogYXRyX2lkLFxuXHRcdFx0XHQnZGlzcGxheV9uYW1lJzogYXRyX3ZhbCxcblx0XHRcdH1cblx0XHRcdGlmIChhdHJfa2V5IGluIGF0dHIpIHtcblx0XHRcdFx0Ly8ga2V5IGFscmVhZHkgZXhpc3QsIG5lZWQgdG8gY2hlY2sgdmFsdWVcblx0XHRcdFx0aWYgKGF0dHJbYXRyX2tleV1bXCJ2YWx1ZXNcIl0uc29tZShlbCA9PiBlbC5pZCA9PSBhdHJfaWQpKSB7XG5cdFx0XHRcdC8vIGlmIGFscmVhZHkgaGFzIHRoYXQgdmFsdWUsIGp1c3Qgc2tpcCBpdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGF0dHJbYXRyX2tleV1bXCJ2YWx1ZXNcIl0ucHVzaChuZXdfYXR0cilcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8ga2V5IG5vdCBleGlzdCwgY3JlYXRlIGl0IGFuZCBhZGQgdmFsdWVcblx0XHRcdFx0Ly8gaW5pdCBhdHRyIGtleSB3aXRoIGFsbCBwYXJhbWV0ZXJzXG5cdFx0XHRcdGF0dHJbYXRyX2tleV0gPSB7fVxuXHRcdFx0XHRhdHRyW2F0cl9rZXldW1widmFsdWVzXCJdID0gW11cblx0XHRcdFx0YXR0clthdHJfa2V5XVtcImRpc3BsYXlfbmFtZVwiXSA9IHByb2R1Y3QuYXR0cmlidXRlc1thdHJfa2V5XVtcImRpc3BsYXlfbmFtZVwiXVxuXHRcdFx0XHRhdHRyW2F0cl9rZXldW1widHlwZVwiXSA9IHByb2R1Y3QuYXR0cmlidXRlc1thdHJfa2V5XVtcInR5cGVcIl0gXG5cdFx0XHRcdGF0dHJbYXRyX2tleV1bXCJmaWx0ZXJfdHlwZVwiXSA9IHByb2R1Y3QuYXR0cmlidXRlc1thdHJfa2V5XVtcImZpbHRlcl90eXBlXCJdXG5cblx0XHRcdFx0YXR0clthdHJfa2V5XVtcInZhbHVlc1wiXS5wdXNoKG5ld19hdHRyKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR9XG5cdH1cblx0KVxuXG5cdHJldHVybiBhdHRyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMgKHF1ZXJ5LCBjdXJyZW50X2F0dHIpIHtcdFxuXHRjb25zb2xlLmxvZygnc3RhcnQgY29sbGVjdCBhY3RpdmUgYXR0cmlidXRlcycpXG5cdGNvbnNvbGUubG9nKCdxdWVyeSBpcycsIHF1ZXJ5KVxuXHRjb25zb2xlLmxvZyhjdXJyZW50X2F0dHIpXG5cdHZhciBhY3RpdmVfYXR0ciA9IHt9XG5cdGZvciAodmFyIGNvbW1vbl9hdHIgaW4gY3VycmVudF9hdHRyKSB7XG5cdFx0aWYgKGNvbW1vbl9hdHIgaW4gcXVlcnkpIHtcblx0XHRcdGFjdGl2ZV9hdHRyW2NvbW1vbl9hdHJdID0gW107XG5cdFx0XHR2YXIgcV92YWx1ZXMgPSBxdWVyeVtjb21tb25fYXRyXS5zcGxpdCgnLCcpXG5cdFx0XHRmb3IgKHZhciBpbmR4IGluIHFfdmFsdWVzKSB7XG5cdFx0XHRcdHZhciBxX3ZhbCA9IHFfdmFsdWVzW2luZHhdXG5cdFx0XHRcdGlmIChjdXJyZW50X2F0dHJbY29tbW9uX2F0cl1bXCJ2YWx1ZXNcIl0uc29tZShlbCA9PiBlbC5pZCA9PSBxX3ZhbCkpIHtcblx0XHRcdFx0XHRhY3RpdmVfYXR0cltjb21tb25fYXRyXS5wdXNoKHFfdmFsKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGNvbnNvbGUubG9nKCdhY3RpdmUgYXR0cmlidXRlcyBhcmUnLCBhY3RpdmVfYXR0cilcblx0cmV0dXJuIGFjdGl2ZV9hdHRyXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/useful_methods.js\n");

/***/ })

})