webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterRange.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['filter_key'],\n  name: 'MainFilterOption',\n  mounted: function mounted() {\n    var curr = this.$store.state.ecommerce.active_filters[this.filter_key];\n\n    if (curr) {\n      this.active_filters = curr[0];\n    }\n  },\n  data: function data() {\n    return {\n      active_filters: [4, 8]\n    };\n  },\n  methods: {\n    testAction: function testAction(event) {\n      console.log(event);\n    },\n    getRangeMin: function getRangeMin() {\n      console.log('start getting min range');\n      var values = this.$parent.all_filters[this.filter_key].values;\n      var min = values[0].code;\n      values.forEach(function (val) {\n        if (val < min) {\n          min = val;\n        }\n      });\n      console.log('min is', min);\n      return 2;\n    },\n    getRangeMax: function getRangeMax() {\n      return 10;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyUmFuZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkZpbHRlclJhbmdlLnZ1ZT8xOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0YWN0aXZlIGZpbHRlcnM6IHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnMgfX1cblxuXHQ8ZWwtc2xpZGVyXG5cdHYtbW9kZWw9XCJ0aGlzLmFjdGl2ZV9maWx0ZXJzXCJcblx0cmFuZ2Vcblx0c2hvdy1zdG9wc1xuXHQ6bWluPVwidGhpcy5nZXRSYW5nZU1pbigpXCJcblx0Om1heD1cInRoaXMuZ2V0UmFuZ2VNYXgoKVwiXG5cdD5cblx0XHRcblx0PC9lbC1zbGlkZXI+XG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IFsnZmlsdGVyX2tleSddLFxuXHRuYW1lOiAnTWFpbkZpbHRlck9wdGlvbicsXG5cdG1vdW50ZWQgKCkge1xuXHRcdHZhciBjdXJyID0gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzW3RoaXMuZmlsdGVyX2tleV1cblx0XHRpZiAoY3Vycikge1xuXHRcdFx0dGhpcy5hY3RpdmVfZmlsdGVycyA9IGN1cnJbMF1cblx0XHR9XG5cdH0sXG5cdGRhdGEgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmVfZmlsdGVyczogWzQsOF0sXG5cdFx0fVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0dGVzdEFjdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KVx0XG5cdFx0fSxcblx0XHRnZXRSYW5nZU1pbigpIHtcblx0XHRjb25zb2xlLmxvZygnc3RhcnQgZ2V0dGluZyBtaW4gcmFuZ2UnKVxuXHRcdFx0dmFyIHZhbHVlcyA9IHRoaXMuJHBhcmVudC5hbGxfZmlsdGVyc1t0aGlzLmZpbHRlcl9rZXldLnZhbHVlc1xuXHRcdFx0dmFyIG1pbiA9IHZhbHVlc1swXS5jb2RlXG5cdFx0XHR2YWx1ZXMuZm9yRWFjaCh2YWwgPT4ge1xuXHRcdFx0XHRpZiAodmFsIDwgbWluKSB7XG5cdFx0XHRcdFx0bWluID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coJ21pbiBpcycsIG1pbilcblx0XHRcdHJldHVybiAyXG5cdFx0fSxcblx0XHRnZXRSYW5nZU1heCgpIHtcblx0XHRcdHJldHVybiAxMFxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQWRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js\n");

/***/ })

})