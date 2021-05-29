webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n\nvar _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(\" products filter container is here \");\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_5 = {\n  key: 0\n};\nvar _hoisted_6 = {\n  key: 1\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _this = this;\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", null, [_hoisted_1, _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(this.current_attr) + \" \", 1\n  /* TEXT */\n  ), _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(\" active attributes: \" + Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(this.active_filters) + \" \", 1\n  /* TEXT */\n  ), _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(\" active filters are \" + Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(this.active_filters) + \" \", 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"div\", null, \" route is \" + Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(this.$router), 1\n  /* TEXT */\n  ), (Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"renderList\"])(this.current_attr, function (values, key) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", {\n      key: key\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(_this.current_attr[key].display_name) + \" \", 1\n    /* TEXT */\n    ), _this.getFilterType(key) == 'multiple' ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", _hoisted_5, [(Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"renderList\"])(values['values'], function (attr_value) {\n      return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", {\n        key: attr_value\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"input\", {\n        type: \"checkbox\",\n        id: key + '-' + attr_value,\n        value: attr_value,\n        checked: $options.isFilterValueActive(key, attr_value),\n        onInput: function onInput($event) {\n          return $options.updateFilterCheckbox(key, attr_value);\n        }\n      }, null, 40\n      /* PROPS, HYDRATE_EVENTS */\n      , [\"id\", \"value\", \"checked\", \"onInput\"]), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"label\", {\n        for: key + '-' + attr_value\n      }, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(attr_value.display_name), 9\n      /* TEXT, PROPS */\n      , [\"for\"])]);\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))])) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createCommentVNode\"])(\"v-if\", true), _this.getFilterType(key) == 'option' ? (Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", _hoisted_6)) : Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createCommentVNode\"])(\"v-if\", true), (Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"renderList\"])(values.values, function (attr_value) {\n      return Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"withDirectives\"])((Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createBlock\"])(\"div\", {\n        key: attr_value\n      }, [Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"input\", {\n        type: \"radio\",\n        id: key + '-' + attr_value,\n        value: attr_value,\n        checked: $options.isFilterValueActive(key),\n        onInput: function onInput($event) {\n          return $options.updateFilterOption(key, attr_value);\n        }\n      }, null, 40\n      /* PROPS, HYDRATE_EVENTS */\n      , [\"id\", \"value\", \"checked\", \"onInput\"]), Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"createVNode\"])(\"label\", {\n        for: key + '-' + attr_value\n      }, Object(vue__WEBPACK_IMPORTED_MODULE_2__[\"toDisplayString\"])(attr_value.display_name), 9\n      /* TEXT, PROPS */\n      , [\"for\"])], 512\n      /* NEED_PATCH */\n      )), [[vue__WEBPACK_IMPORTED_MODULE_2__[\"vShow\"], _this.getFilterType(key) == 'option']]);\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQ5MTYxNjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0c0ZpbHRlckNvbnRhaW5lci52dWU/OTNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuXG5wcm9kdWN0cyBmaWx0ZXIgY29udGFpbmVyIGlzIGhlcmUgPGJyIC8+XG5cblx0e3sgdGhpcy5jdXJyZW50X2F0dHIgfX1cblx0PGJyIC8+XG5cdGFjdGl2ZSBhdHRyaWJ1dGVzOlxuXHR7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxiciAvPlxuXHRhY3RpdmUgZmlsdGVycyBhcmUge3sgdGhpcy5hY3RpdmVfZmlsdGVycyB9fVxuXHQ8ZGl2PlxuXHRyb3V0ZSBpcyB7eyB0aGlzLiRyb3V0ZXIgfX1cblx0PC9kaXY+XG5cdFxuXHQ8ZGl2XG5cdHYtZm9yPVwiKHZhbHVlcywga2V5KSBpbiB0aGlzLmN1cnJlbnRfYXR0clwiXG5cdDprZXk9XCJrZXlcIj5cblx0XHR7eyB0aGlzLmN1cnJlbnRfYXR0cltrZXldLmRpc3BsYXlfbmFtZSB9fVxuXHRcdFx0XG5cdFx0PGRpdlxuXHRcdHYtaWY9XCJ0aGlzLmdldEZpbHRlclR5cGUoa2V5KSA9PSAnbXVsdGlwbGUnXCI+XG5cdFx0PGRpdlxuXHRcdHYtZm9yPVwiYXR0cl92YWx1ZSBpbiB2YWx1ZXNbJ3ZhbHVlcyddXCJcblx0XHQ6a2V5PVwiYXR0cl92YWx1ZVwiXG5cdFx0PlxuXHRcdDxpbnB1dFxuXHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0OmlkPVwia2V5ICsgJy0nICsgYXR0cl92YWx1ZVwiXG5cdFx0OnZhbHVlPVwiYXR0cl92YWx1ZVwiXG5cdFx0OmNoZWNrZWQ9XCJpc0ZpbHRlclZhbHVlQWN0aXZlKGtleSwgYXR0cl92YWx1ZSlcIlxuXHRcdEBpbnB1dD1cInVwZGF0ZUZpbHRlckNoZWNrYm94KGtleSwgYXR0cl92YWx1ZSlcIlxuXHRcdC8+XG5cdFx0PGxhYmVsXG5cdFx0OmZvcj1cImtleSArICctJyArIGF0dHJfdmFsdWVcIlx0XG5cdFx0PlxuXHRcdCB7eyBhdHRyX3ZhbHVlLmRpc3BsYXlfbmFtZSB9fVxuXHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHRcblx0XHQ8ZGl2XG5cdFx0di1pZj1cInRoaXMuZ2V0RmlsdGVyVHlwZShrZXkpID09ICdvcHRpb24nXCJcblx0XHQvPlxuXHRcdDxkaXZcblx0XHR2LXNob3c9XCJ0aGlzLmdldEZpbHRlclR5cGUoa2V5KSA9PSAnb3B0aW9uJ1wiXG5cdFx0di1mb3I9XCJhdHRyX3ZhbHVlIGluIHZhbHVlcy52YWx1ZXNcIlxuXHRcdDprZXk9XCJhdHRyX3ZhbHVlXCJcblx0XHQ+XG5cdFx0PGlucHV0XG5cdFx0dHlwZT1cInJhZGlvXCJcblx0XHQ6aWQ9XCJrZXkgKyAnLScgKyBhdHRyX3ZhbHVlXCJcblx0XHQ6dmFsdWU9XCJhdHRyX3ZhbHVlXCJcblx0XHQ6Y2hlY2tlZD1cImlzRmlsdGVyVmFsdWVBY3RpdmUoa2V5KVwiXG5cdFx0QGlucHV0PVwidXBkYXRlRmlsdGVyT3B0aW9uKGtleSwgYXR0cl92YWx1ZSlcIlxuXHRcdC8+XG5cdFx0PGxhYmVsXG5cdFx0OmZvcj1cImtleSArICctJyArIGF0dHJfdmFsdWVcIlxuXHRcdD5cblx0XHQge3sgYXR0cl92YWx1ZS5kaXNwbGF5X25hbWUgfX1cblx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IHsgY29sbGVjdFByb2R1Y3RzQXR0cmlidXRlcywgY29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXN9IGZyb20gJy4uL3VzZWZ1bF9tZXRob2RzLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ1Byb2R1Y3RzRmlsdGVyQ29udGFpbmVyJyxcblx0ZGF0YSAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0Y3VycmVudF9hdHRyICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEFsbEZpbHRlcnMoXG5cdFx0XHR0aGlzLiRwYXJlbnQuY3VycmVudF9jYXRlZ29yeV9wcm9kdWN0c1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEFjdGl2ZUZpbHRlcnModGhpcy4kcm91dGUsIHRoaXMuY3VycmVudF9hdHRyKTtcblx0XHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRpc0FjdGl2ZSAoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGNvbGxlY3RQcm9kdWN0c0F0dHJpYnV0ZXMsXG5cdFx0Y29sbGVjdEFjdGl2ZUF0dHJpYnV0ZXMsXG5cdFx0aXNGaWx0ZXJWYWx1ZUFjdGl2ZShmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZygnY2hlY2sgaWYgZmlsdGVyIGFjdGl2ZSwgZiB2YWx1ZSBpcycsIGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHRcdGlmIChmaWx0ZXJfa2V5IGluIHRoaXMuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0aWYgKCFmaWx0ZXJfdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGlmKHRoaXMuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uaW5jbHVkZXMoZmlsdGVyX3ZhbHVlLmNvZGUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGdldEZpbHRlclR5cGUoZmlsdGVyX2tleSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudF9hdHRyW2ZpbHRlcl9rZXldLmZpbHRlcl90eXBlO1xuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyUm91dGVzKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ25lZWQgdG8gdXBkYXRlIHJvdXRlJylcblx0XHRcdHZhciBmaWx0ZXJfcXVlcnkgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEZpbHRlclF1ZXJ5O1xuXHRcdFx0dmFyIG5ld19wYXRoID0gdGhpcy4kcm91dGUucGF0aCsnPycrZmlsdGVyX3F1ZXJ5XG5cdFx0XHRjb25zb2xlLmxvZygncm91dGUgcXVlcnkgaXMnLCB0aGlzLiRyb3V0ZS5wYXRoKVxuXHRcdFx0Y29uc29sZS5sb2coJ2ZpbHRlciBxdWVyeSBpcycsIGZpbHRlcl9xdWVyeSlcblx0XHRcdGNvbnNvbGUubG9nKCd0aGUgd2hvbGUgcm91dGUgaXMnLCBuZXdfcGF0aClcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKG5ld19wYXRoKVxuXHRcdH0sXG5cdFx0dXBkYXRlRmlsdGVyT3B0aW9uIChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGZpbHRlcl9rZXksIGZpbHRlcl92YWx1ZSlcblx0XHR9LFxuXHRcdHVwZGF0ZUZpbHRlckNoZWNrYm94IChmaWx0ZXJfa2V5LCBmaWx0ZXJfdmFsdWUpIHtcblx0XHRcdC8vIGZpcnN0IGFkZCBvciByZW1vdmUgY3VycmVudCBrZXkvdmFsdWUgdG8gYWN0aXZlIGZpbHRlcnNcblx0XHRcdHZhciBmaWx0ZXJfcGFyYW1zID0ge1xuXHRcdFx0XHRcImZfa2V5XCI6IGZpbHRlcl9rZXksXG5cdFx0XHRcdFwiZmlsdGVyX3ZhbHVlXCI6IGZpbHRlcl92YWx1ZSxcblx0XHRcdH1cblx0XHRcdGlmICghZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RhcmdldCBpcyBjaGVja2VkLCB0cnkgdG8gcmVtb3ZlJywgZmlsdGVyX3ZhbHVlKVxuXHRcdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoJ3JlbW92ZUFjdGl2ZUZpbHRlcicsIGZpbHRlcl9wYXJhbXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RvIGFkZCBpcyBwYXJhbXM6JywgIGZpbHRlcl9wYXJhbXMpXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnYWRkQWN0aXZlRmlsdGVyJywgZmlsdGVyX3BhcmFtcyApO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbm93IHVwZGF0ZSBmaWx0ZXIgcm91dGVzXG5cdFx0XHR0aGlzLnVwZGF0ZUZpbHRlclJvdXRlcygpXG5cdFx0fSxcblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFUQTtBQUtBO0FBNERBO0FBekRBO0FBeURBO0FBdkRBO0FBdURBO0FBdERBO0FBREE7QUFJQTtBQUVBO0FBOENBO0FBM0NBO0FBSEE7QUFLQTtBQUVBO0FBY0E7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFHQTtBQURBO0FBSEE7QUFLQTs7QUFoQkE7QUF1QkE7QUFHQTtBQWNBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFOQTtBQVFBO0FBR0E7QUFEQTtBQUhBOztBQVpBO0FBaUJBOztBQWpCQTtBQWtCQTs7QUFoREE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/ProductsFilterContainer.vue?vue&type=template&id=24916165\n");

/***/ })

})