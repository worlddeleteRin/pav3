webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterRange.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['filter_key'],\n  name: 'MainFilterOption',\n  computed: {\n    active_filters: {\n      get: function get() {\n        var val = this.$store.state.ecommerce.active_filters[this.filter_key];\n\n        if (val) {\n          if (val.length > 0) {\n            return val;\n          }\n        }\n\n        return [this.getRangeMin(), this.getRangeMax()];\n      },\n      set: function set(val) {\n        console.log('val is', val);\n\n        if (val[0] == this.getRangeMin() && val[1] == this.getRangeMax()) {\n          this.$parent.setFilterRange(this.filter_key, [10, 10]);\n        } else {\n          this.$parent.setFilterRange(this.filter_key, val, false);\n        }\n      }\n    }\n  },\n  methods: {\n    testAction: function testAction(event) {\n      console.log(event);\n    },\n    getRangeMin: function getRangeMin() {\n      console.log('start getting min range');\n      var values = this.$parent.all_filters[this.filter_key].values;\n      var min = parseInt(values[0].code);\n      values.forEach(function (val) {\n        if (parseInt(val.code) < min) {\n          min = parseInt(val.code);\n        }\n      });\n      return min;\n    },\n    getRangeMax: function getRangeMax() {\n      var values = this.$parent.all_filters[this.filter_key].values;\n      var max = parseInt(values[0].code);\n      values.forEach(function (val) {\n        if (parseInt(val.code) > max) {\n          max = parseInt(val.code);\n        }\n      });\n      console.log('max is', max);\n      return max;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyUmFuZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkZpbHRlclJhbmdlLnZ1ZT8xOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0YWN0aXZlIGZpbHRlcnM6IHt7IHRoaXMuYWN0aXZlX2ZpbHRlcnMgfX1cblxuXHQ8ZWwtc2xpZGVyXG5cdHYtbW9kZWw9XCJ0aGlzLmFjdGl2ZV9maWx0ZXJzXCJcblx0cmFuZ2Vcblx0c2hvdy1zdG9wc1xuXHQ6bWluPVwidGhpcy5nZXRSYW5nZU1pbigpXCJcblx0Om1heD1cInRoaXMuZ2V0UmFuZ2VNYXgoKVwiXG5cdEBjaGFuZ2U9XCJ0aGlzLiRwYXJlbnQuc2V0RmlsdGVyUmFuZ2UodGhpcy5maWx0ZXJfa2V5LCAkZXZlbnQpXCJcblx0PlxuXHQ8L2VsLXNsaWRlcj5cblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogWydmaWx0ZXJfa2V5J10sXG5cdG5hbWU6ICdNYWluRmlsdGVyT3B0aW9uJyxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhY3RpdmVfZmlsdGVyczoge1xuXHRcdFx0Z2V0ICgpIHtcblx0XHRcdFx0dmFyIHZhbCA9IHRoaXMuJHN0b3JlLnN0YXRlLmVjb21tZXJjZS5hY3RpdmVfZmlsdGVyc1t0aGlzLmZpbHRlcl9rZXldXHRcdFx0XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHRpZiAodmFsLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBbdGhpcy5nZXRSYW5nZU1pbigpLCB0aGlzLmdldFJhbmdlTWF4KCldO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd2YWwgaXMnLCB2YWwpXG5cdFx0XHRcdGlmICh2YWxbMF0gPT0gdGhpcy5nZXRSYW5nZU1pbigpICYmIHZhbFsxXSA9PSB0aGlzLmdldFJhbmdlTWF4KCkgKSB7XG5cdFx0XHRcdFx0dGhpcy4kcGFyZW50LnNldEZpbHRlclJhbmdlKHRoaXMuZmlsdGVyX2tleSwgWzEwLCAxMF0sKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJHBhcmVudC5zZXRGaWx0ZXJSYW5nZSh0aGlzLmZpbHRlcl9rZXksIHZhbCwgZmFsc2UpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHRlc3RBY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudClcdFxuXHRcdH0sXG5cdFx0Z2V0UmFuZ2VNaW4oKSB7XG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0IGdldHRpbmcgbWluIHJhbmdlJylcblx0XHRcdHZhciB2YWx1ZXMgPSB0aGlzLiRwYXJlbnQuYWxsX2ZpbHRlcnNbdGhpcy5maWx0ZXJfa2V5XS52YWx1ZXNcblx0XHRcdHZhciBtaW4gPSBwYXJzZUludCh2YWx1ZXNbMF0uY29kZSlcblx0XHRcdHZhbHVlcy5mb3JFYWNoKHZhbCA9PiB7XG5cdFx0XHRcdGlmIChwYXJzZUludCh2YWwuY29kZSkgPCBtaW4pIHtcblx0XHRcdFx0XHRtaW4gPSBwYXJzZUludCh2YWwuY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRyZXR1cm4gbWluXG5cdFx0fSxcblx0XHRnZXRSYW5nZU1heCgpIHtcblx0XHRcdHZhciB2YWx1ZXMgPSB0aGlzLiRwYXJlbnQuYWxsX2ZpbHRlcnNbdGhpcy5maWx0ZXJfa2V5XS52YWx1ZXNcblx0XHRcdHZhciBtYXggPSBwYXJzZUludCh2YWx1ZXNbMF0uY29kZSlcblx0XHRcdHZhbHVlcy5mb3JFYWNoKHZhbCA9PiB7XG5cdFx0XHRcdGlmIChwYXJzZUludCh2YWwuY29kZSkgPiBtYXgpIHtcblx0XHRcdFx0XHRtYXggPSBwYXJzZUludCh2YWwuY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZygnbWF4IGlzJywgbWF4KVxuXHRcdFx0cmV0dXJuIG1heFxuXHRcdH0sXG5cdH0sXG59XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUF4QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterRange.vue?vue&type=script&lang=js\n");

/***/ })

})