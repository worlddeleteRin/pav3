webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterRange.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['filter_key'],\n  name: 'MainFilterOption',\n  mounted: function mounted() {\n    var curr = this.$store.state.ecommerce.active_filters[this.filter_key];\n\n    if (curr) {\n      this.active_filters = curr;\n    }\n  },\n  data: function data() {\n    return {\n      active_filters: [this.getRangeMin(), this.getRangeMax()]\n    };\n  },\n  computed: {\n    active_filters: {\n      get: function get() {\n        var val = this.$store.state.ecommerce.active_filters[this.filter_key];\n\n        if (val) {\n          return val;\n        }\n      },\n      set: function set(val) {}\n    }\n  },\n  methods: {\n    testAction: function testAction(event) {\n      console.log(event);\n    },\n    getRangeMin: function getRangeMin() {\n      console.log('start getting min range');\n      var values = this.$parent.all_filters[this.filter_key].values;\n      var min = parseInt(values[0].code);\n      values.forEach(function (val) {\n        if (parseInt(val.code) < min) {\n          min = parseInt(val.code);\n        }\n      });\n      return min;\n    },\n    getRangeMax: function getRangeMax() {\n      var values = this.$parent.all_filters[this.filter_key].values;\n      var max = parseInt(values[0].code);\n      values.forEach(function (val) {\n        if (parseInt(val.code) > max) {\n          max = parseInt(val.code);\n        }\n      });\n      console.log('max is', max);\n      return max;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyUmFuZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkZpbHRlclJhbmdlLnZ1ZT8xOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0YWN0aXZlIGZpbHRlcnM6IHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnMgfX1cblxuXHQ8ZWwtc2xpZGVyXG5cdHYtbW9kZWw9XCJ0aGlzLmFjdGl2ZV9maWx0ZXJzXCJcblx0cmFuZ2VcblxuXHRzaG93LXN0b3BzXG5cdDptaW49XCJ0aGlzLmdldFJhbmdlTWluKClcIlxuXHQ6bWF4PVwidGhpcy5nZXRSYW5nZU1heCgpXCJcblx0QGNoYW5nZT1cInRoaXMuJHBhcmVudC5zZXRGaWx0ZXJSYW5nZSh0aGlzLmZpbHRlcl9rZXksICRldmVudClcIlxuXHQ+XG5cdDwvZWwtc2xpZGVyPlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2ZpbHRlcl9rZXknXSxcblx0bmFtZTogJ01haW5GaWx0ZXJPcHRpb24nLFxuXHRtb3VudGVkICgpIHtcblx0XHR2YXIgY3VyciA9IHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hY3RpdmVfZmlsdGVyc1t0aGlzLmZpbHRlcl9rZXldXG5cdFx0aWYgKGN1cnIpIHtcblx0XHRcdHRoaXMuYWN0aXZlX2ZpbHRlcnMgPSBjdXJyXG5cdFx0fVxuXHR9LFxuXHRkYXRhICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlX2ZpbHRlcnM6IFt0aGlzLmdldFJhbmdlTWluKCksIHRoaXMuZ2V0UmFuZ2VNYXgoKV0sXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGFjdGl2ZV9maWx0ZXJzOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHR2YXIgdmFsID0gdGhpcy4kc3RvcmUuc3RhdGUuZWNvbW1lcmNlLmFjdGl2ZV9maWx0ZXJzW3RoaXMuZmlsdGVyX2tleV1cdFx0XHRcblx0XHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0dGVzdEFjdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KVx0XG5cdFx0fSxcblx0XHRnZXRSYW5nZU1pbigpIHtcblx0XHRjb25zb2xlLmxvZygnc3RhcnQgZ2V0dGluZyBtaW4gcmFuZ2UnKVxuXHRcdFx0dmFyIHZhbHVlcyA9IHRoaXMuJHBhcmVudC5hbGxfZmlsdGVyc1t0aGlzLmZpbHRlcl9rZXldLnZhbHVlc1xuXHRcdFx0dmFyIG1pbiA9IHBhcnNlSW50KHZhbHVlc1swXS5jb2RlKVxuXHRcdFx0dmFsdWVzLmZvckVhY2godmFsID0+IHtcblx0XHRcdFx0aWYgKHBhcnNlSW50KHZhbC5jb2RlKSA8IG1pbikge1xuXHRcdFx0XHRcdG1pbiA9IHBhcnNlSW50KHZhbC5jb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdHJldHVybiBtaW5cblx0XHR9LFxuXHRcdGdldFJhbmdlTWF4KCkge1xuXHRcdFx0dmFyIHZhbHVlcyA9IHRoaXMuJHBhcmVudC5hbGxfZmlsdGVyc1t0aGlzLmZpbHRlcl9rZXldLnZhbHVlc1xuXHRcdFx0dmFyIG1heCA9IHBhcnNlSW50KHZhbHVlc1swXS5jb2RlKVxuXHRcdFx0dmFsdWVzLmZvckVhY2godmFsID0+IHtcblx0XHRcdFx0aWYgKHBhcnNlSW50KHZhbC5jb2RlKSA+IG1heCkge1xuXHRcdFx0XHRcdG1heCA9IHBhcnNlSW50KHZhbC5jb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKCdtYXggaXMnLCBtYXgpXG5cdFx0XHRyZXR1cm4gbWF4XG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js\n");

/***/ })

})