webpackHotUpdate("app",{

/***/ "./src/useful_methods.js":
/*!*******************************!*\
  !*** ./src/useful_methods.js ***!
  \*******************************/
/*! exports provided: close_mobile_header, open_mobile_header, collectProductsAttributes, collectActiveAttributes, initFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close_mobile_header\", function() { return close_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open_mobile_header\", function() { return open_mobile_header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectProductsAttributes\", function() { return collectProductsAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectActiveAttributes\", function() { return collectActiveAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFilters\", function() { return initFilters; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction close_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', false);\n}\nfunction open_mobile_header() {\n  this.$store.commit('setMobileHeaderShow', true);\n}\nfunction collectProductsAttributes(products) {\n  var attr = {};\n  products.forEach(function (product) {\n    var k = Object.keys(product.attributes); // iterate for product attribute keys\n\n    for (var key_item in k) {\n      var atr_key = k[key_item];\n      var attribute_values = product.attributes[atr_key]; // iterate through each product attribute value\n\n      for (var atr_indx in attribute_values) {\n        var current_attr = attribute_values[atr_indx];\n\n        if (current_attr[\"use_filter\"]) {\n          var atr_val = current_attr[\"value\"];\n          var atr_code = current_attr[\"code\"];\n          var new_attr = {\n            'code': atr_code,\n            'display_name': atr_val\n          };\n\n          if (atr_key in attr) {\n            // key already exist, need to check value\n            if (attr[atr_key][\"values\"].some(function (el) {\n              return el.code == atr_code;\n            })) {// if already has that value, just skip it\n            } else {\n              attr[atr_key][\"values\"].push(new_attr);\n            }\n          } else {\n            // key not exist, create it and add value\n            // init attr key with all parameters\n            attr[atr_key] = {};\n            attr[atr_key][\"values\"] = [];\n            attr[atr_key][\"display_name\"] = current_attr[\"display_name\"];\n            attr[atr_key][\"type\"] = current_attr[\"type\"];\n            attr[atr_key][\"filter_type\"] = current_attr[\"filter_type\"];\n            attr[atr_key][\"values\"].push(new_attr);\n          }\n        }\n      }\n    }\n  });\n  return attr;\n}\nfunction collectActiveAttributes(query, current_attr) {\n  console.log('start collect active filters', query, current_attr);\n  var active_attr = {};\n\n  for (var common_atr in current_attr) {\n    active_attr[common_atr] = [];\n\n    if (common_atr in query) {\n      var q_values = query[common_atr].split(',');\n\n      for (var indx in q_values) {\n        var q_val = q_values[indx];\n\n        if (q_val) {\n          if (current_attr[common_atr][\"values\"].some(function (el) {\n            return el.code == q_val;\n          })) {\n            active_attr[common_atr].push(q_val);\n          } else if (current_attr[common_atr][\"filter_type\"] == 'range') {\n            active_attr[common_atr].push(q_val);\n          }\n        }\n      }\n    }\n  }\n\n  return active_attr;\n}\nfunction initFilters(something) {\n  console.log('mounted, all filters are', something);\n  var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);\n  this.$store.commit('setActiveFilters', active_attr);\n  this.filters_loaded = true;\n  return null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXNlZnVsX21ldGhvZHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXNlZnVsX21ldGhvZHMuanM/NDViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xvc2VfbW9iaWxlX2hlYWRlciAoKSB7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRNb2JpbGVIZWFkZXJTaG93JywgZmFsc2UpXG59XG5leHBvcnQgZnVuY3Rpb24gb3Blbl9tb2JpbGVfaGVhZGVyICgpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldE1vYmlsZUhlYWRlclNob3cnLCB0cnVlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcyAocHJvZHVjdHMpIHtcblx0dmFyIGF0dHIgPSB7fVxuXHRwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuXHRcdHZhciBrID0gT2JqZWN0LmtleXMocHJvZHVjdC5hdHRyaWJ1dGVzKVxuXHRcdFxuXHRcdC8vIGl0ZXJhdGUgZm9yIHByb2R1Y3QgYXR0cmlidXRlIGtleXNcblx0XHRmb3IgKHZhciBrZXlfaXRlbSBpbiBrKSB7XG5cdFx0XHR2YXIgYXRyX2tleSA9IGtba2V5X2l0ZW1dXHRcdFx0XG5cdFx0XHR2YXIgYXR0cmlidXRlX3ZhbHVlcyA9IHByb2R1Y3QuYXR0cmlidXRlc1thdHJfa2V5XVxuXHRcdFx0XG5cdFx0XHQvLyBpdGVyYXRlIHRocm91Z2ggZWFjaCBwcm9kdWN0IGF0dHJpYnV0ZSB2YWx1ZVxuXHRcdFx0Zm9yICh2YXIgYXRyX2luZHggaW4gYXR0cmlidXRlX3ZhbHVlcykge1xuXHRcdFx0dmFyIGN1cnJlbnRfYXR0ciA9IGF0dHJpYnV0ZV92YWx1ZXNbYXRyX2luZHhdXHRcblxuXHRcdFx0aWYgKGN1cnJlbnRfYXR0cltcInVzZV9maWx0ZXJcIl0pIHtcblx0XHRcdHZhciBhdHJfdmFsID0gY3VycmVudF9hdHRyW1widmFsdWVcIl1cblx0XHRcdHZhciBhdHJfY29kZSA9IGN1cnJlbnRfYXR0cltcImNvZGVcIl1cblx0XHRcdHZhciBuZXdfYXR0ciA9IHtcblx0XHRcdFx0J2NvZGUnOiBhdHJfY29kZSxcblx0XHRcdFx0J2Rpc3BsYXlfbmFtZSc6IGF0cl92YWwsXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXRyX2tleSBpbiBhdHRyKSB7XG5cdFx0XHRcdC8vIGtleSBhbHJlYWR5IGV4aXN0LCBuZWVkIHRvIGNoZWNrIHZhbHVlXG5cdFx0XHRcdGlmIChhdHRyW2F0cl9rZXldW1widmFsdWVzXCJdLnNvbWUoZWwgPT4gZWwuY29kZSA9PSBhdHJfY29kZSkpIHtcblx0XHRcdFx0Ly8gaWYgYWxyZWFkeSBoYXMgdGhhdCB2YWx1ZSwganVzdCBza2lwIGl0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YXR0clthdHJfa2V5XVtcInZhbHVlc1wiXS5wdXNoKG5ld19hdHRyKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBrZXkgbm90IGV4aXN0LCBjcmVhdGUgaXQgYW5kIGFkZCB2YWx1ZVxuXHRcdFx0XHQvLyBpbml0IGF0dHIga2V5IHdpdGggYWxsIHBhcmFtZXRlcnNcblx0XHRcdFx0YXR0clthdHJfa2V5XSA9IHt9XG5cdFx0XHRcdGF0dHJbYXRyX2tleV1bXCJ2YWx1ZXNcIl0gPSBbXVxuXHRcdFx0XHRhdHRyW2F0cl9rZXldW1wiZGlzcGxheV9uYW1lXCJdID0gY3VycmVudF9hdHRyW1wiZGlzcGxheV9uYW1lXCJdXG5cdFx0XHRcdGF0dHJbYXRyX2tleV1bXCJ0eXBlXCJdID0gY3VycmVudF9hdHRyW1widHlwZVwiXSBcblx0XHRcdFx0YXR0clthdHJfa2V5XVtcImZpbHRlcl90eXBlXCJdID0gY3VycmVudF9hdHRyW1wiZmlsdGVyX3R5cGVcIl1cblxuXHRcdFx0XHRhdHRyW2F0cl9rZXldW1widmFsdWVzXCJdLnB1c2gobmV3X2F0dHIpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdH1cblx0XHR9XG5cdH1cblx0KVxuXG5cdHJldHVybiBhdHRyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMgKHF1ZXJ5LCBjdXJyZW50X2F0dHIpIHtcdFxuXHRjb25zb2xlLmxvZygnc3RhcnQgY29sbGVjdCBhY3RpdmUgZmlsdGVycycsIHF1ZXJ5LCBjdXJyZW50X2F0dHIpXG5cdHZhciBhY3RpdmVfYXR0ciA9IHt9XG5cdGZvciAodmFyIGNvbW1vbl9hdHIgaW4gY3VycmVudF9hdHRyKSB7XG5cdFx0YWN0aXZlX2F0dHJbY29tbW9uX2F0cl0gPSBbXVxuXHRcdGlmIChjb21tb25fYXRyIGluIHF1ZXJ5KSB7XG5cdFx0XHR2YXIgcV92YWx1ZXMgPSBxdWVyeVtjb21tb25fYXRyXS5zcGxpdCgnLCcpXG5cdFx0XHRmb3IgKHZhciBpbmR4IGluIHFfdmFsdWVzKSB7XG5cdFx0XHRcdHZhciBxX3ZhbCA9IHFfdmFsdWVzW2luZHhdXG5cdFx0XHRcdGlmIChxX3ZhbCkge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50X2F0dHJbY29tbW9uX2F0cl1bXCJ2YWx1ZXNcIl0uc29tZShlbCA9PiBlbC5jb2RlID09IHFfdmFsKSkge1xuXHRcdFx0XHRcdFx0YWN0aXZlX2F0dHJbY29tbW9uX2F0cl0ucHVzaChxX3ZhbClcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnRfYXR0cltjb21tb25fYXRyXVtcImZpbHRlcl90eXBlXCJdID09ICdyYW5nZScpIHtcblx0XHRcdFx0XHRcdGFjdGl2ZV9hdHRyW2NvbW1vbl9hdHJdLnB1c2gocV92YWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhY3RpdmVfYXR0clxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RmlsdGVycyhzb21ldGhpbmcpIHtcblx0Y29uc29sZS5sb2coJ21vdW50ZWQsIGFsbCBmaWx0ZXJzIGFyZScsIHNvbWV0aGluZylcblx0dmFyIGFjdGl2ZV9hdHRyID0gdGhpcy5jb2xsZWN0QWN0aXZlQXR0cmlidXRlcyh0aGlzLiRyb3V0ZS5xdWVyeSwgdGhpcy5hbGxfZmlsdGVycyk7XG5cdHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0QWN0aXZlRmlsdGVycycsIGFjdGl2ZV9hdHRyKVxuXHR0aGlzLmZpbHRlcnNfbG9hZGVkID0gdHJ1ZTtcblx0cmV0dXJuIG51bGw7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/useful_methods.js\n");

/***/ })

})