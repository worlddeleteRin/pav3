webpackHotUpdate("app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _useful_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useful_methods */ \"./src/useful_methods.js\");\n\n\n\n\n\n\n\n/* store start */\n\n\nvar storeDialogs = {\n  state: function state() {\n    return {\n      simple_dialog: {\n        show: false,\n        button_text: '',\n        heading: '',\n        description: ''\n      },\n      call_phone_dialog: {\n        show: false\n      }\n    };\n  },\n  mutations: {\n    openSimpleDialog: function openSimpleDialog(state, _ref) {\n      var button_text = _ref.button_text,\n          heading = _ref.heading,\n          description = _ref.description;\n      state.simple_dialog.show = true;\n      state.simple_dialog.button_text = button_text;\n      state.simple_dialog.heading = heading;\n      state.simple_dialog.description = description;\n    },\n    closeSimpleDialog: function closeSimpleDialog(state) {\n      state.simple_dialog.show = false;\n    },\n    openCallPhoneDialog: function openCallPhoneDialog(state) {\n      state.call_phone_dialog.show = true;\n    },\n    closeCallPhoneDialog: function closeCallPhoneDialog(state) {\n      state.call_phone_dialog.show = false;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar storeEcommerce = {\n  state: function state() {\n    return {\n      products: {},\n      categories: {},\n      active_filters: {}\n    };\n  },\n  mutations: {\n    setProducts: function setProducts(state, products) {\n      state.products = products;\n    },\n    setCategories: function setCategories(state, categories) {\n      state.categories = categories;\n    },\n    setActiveFilters: function setActiveFilters(state, active_filters) {\n      console.log('call set active filters');\n      state.active_filters = active_filters;\n    }\n  },\n  actions: {},\n  getters: {\n    getCategoryById: function getCategoryById(state) {\n      return function (id) {\n        return state.categories.filter(function (category) {\n          return category.id == id;\n        })[0];\n      };\n    },\n    getProductById: function getProductById(state) {\n      return function (id) {\n        return state.products.filter(function (product) {\n          return product.id == id;\n        })[0];\n      };\n    },\n    getProductsByCategoryId: function getProductsByCategoryId(state) {\n      return function (cat_id) {\n        var id = parseInt(cat_id);\n        var result = state.products.filter(function (product) {\n          return product.categories.includes(id);\n        });\n        return result;\n      };\n    },\n    getActiveAttributes: function getActiveAttributes(state) {\n      var active_attr = Object(_useful_methods__WEBPACK_IMPORTED_MODULE_7__[\"collectActiveAttributes\"])();\n      state.active_filters = active_attr;\n      return state.active_attr;\n    },\n    getProductsFilter: function getProductsFilter(state) {\n      return function (products) {\n        if (Object.keys(state.active_filters).length > 0) {\n          console.log('start filterig --- ');\n          console.log('acive filters are', state.active_filters);\n          var final_products = products.filter(function (product) {\n            var to_include = false; // iterate through active filters keys\n\n            for (var atr_key in state.active_filters) {\n              // filter only if key has values, so they are specified\t\n              var atr_values = state.active_filters[atr_key];\n\n              if (atr_values.length > 0) {\n                if (atr_values.includes(product.attributes[atr_key])) {\n                  to_include = true;\n                } else {}\n              }\n            }\n\n            return to_include;\n          });\n          return final_products;\n        } else {\n          return products;\n        }\n      };\n    }\n  }\n};\nvar storeCommon = {\n  state: function state() {\n    return {\n      api_url: 'http://127.0.0.1:8000',\n      //api_url: 'http://192.168.1.111:8000',\n      isGlobalDataLoaded: false\n    };\n  },\n  mutations: {\n    setGlobalDataLoaded: function setGlobalDataLoaded(state, is_loaded) {\n      state.isGlobalDataLoaded = is_loaded;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_6__[\"createStore\"])({\n  modules: {\n    dialogs: storeDialogs,\n    common: storeCommon,\n    ecommerce: storeEcommerce\n  }\n});\n/* store end *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdG9yZSBzdGFydCAqL1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHtjb2xsZWN0QWN0aXZlQXR0cmlidXRlc30gZnJvbSAnLi91c2VmdWxfbWV0aG9kcyc7XG5cbmNvbnN0IHN0b3JlRGlhbG9ncyA9IHtcbiAgc3RhdGU6ICgpID0+ICh7XG5cdHNpbXBsZV9kaWFsb2c6IHtcblx0XHRzaG93OiBmYWxzZSxcblx0XHRidXR0b25fdGV4dDogJycsXG5cdFx0aGVhZGluZzogJycsXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxuXHR9LFxuXHRjYWxsX3Bob25lX2RpYWxvZzoge1xuXHRcdHNob3c6IGZhbHNlLFxuXHR9LFxuICB9KSxcbiAgbXV0YXRpb25zOiB7XG4gICAgICBvcGVuU2ltcGxlRGlhbG9nKHN0YXRlLCB7IFxuXHRcdGJ1dHRvbl90ZXh0LCBoZWFkaW5nLCBkZXNjcmlwdGlvbiBcblx0XHR9KSB7XG4gICAgICAgIHN0YXRlLnNpbXBsZV9kaWFsb2cuc2hvdyA9IHRydWU7XG5cdFx0c3RhdGUuc2ltcGxlX2RpYWxvZy5idXR0b25fdGV4dCA9IGJ1dHRvbl90ZXh0O1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuaGVhZGluZyA9IGhlYWRpbmc7XG5cdFx0c3RhdGUuc2ltcGxlX2RpYWxvZy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgfSxcbiAgICAgIGNsb3NlU2ltcGxlRGlhbG9nKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLnNpbXBsZV9kaWFsb2cuc2hvdyA9IGZhbHNlO1xuICAgICAgfSxcblx0XHRvcGVuQ2FsbFBob25lRGlhbG9nKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5jYWxsX3Bob25lX2RpYWxvZy5zaG93ID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNsb3NlQ2FsbFBob25lRGlhbG9nKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5jYWxsX3Bob25lX2RpYWxvZy5zaG93ID0gZmFsc2U7XG5cdFx0fSxcbiAgfSxcbiAgYWN0aW9uczoge30sXG4gIGdldHRlcnM6IHt9XG59XG5cbmNvbnN0IHN0b3JlRWNvbW1lcmNlID0ge1xuICBzdGF0ZTogKCkgPT4gKHtcblx0cHJvZHVjdHM6IHt9LFxuXHRjYXRlZ29yaWVzOiB7fSxcblx0YWN0aXZlX2ZpbHRlcnM6IHt9LFxuICB9KSxcbiAgbXV0YXRpb25zOiB7XG5cdHNldFByb2R1Y3RzKHN0YXRlLCBwcm9kdWN0cykge1xuXHRcdHN0YXRlLnByb2R1Y3RzID0gcHJvZHVjdHM7XG5cdH0sXG5cdHNldENhdGVnb3JpZXMoc3RhdGUsIGNhdGVnb3JpZXMpIHtcblx0XHRzdGF0ZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblx0fSxcblx0c2V0QWN0aXZlRmlsdGVycyhzdGF0ZSwgYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRjb25zb2xlLmxvZygnY2FsbCBzZXQgYWN0aXZlIGZpbHRlcnMnKVxuXHRcdHN0YXRlLmFjdGl2ZV9maWx0ZXJzID0gYWN0aXZlX2ZpbHRlcnM7XG5cdH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBnZXR0ZXJzOiB7XG5cdGdldENhdGVnb3J5QnlJZDogKHN0YXRlKSA9PiAoaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoXG5cdFx0Y2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT0gaWQpWzBdO1xuXHR9LFx0XG5cdGdldFByb2R1Y3RCeUlkOiAoc3RhdGUpID0+IChpZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXG5cdFx0cHJvZHVjdCA9PiBwcm9kdWN0LmlkID09IGlkKVswXTtcblx0fSxcdFxuXHRnZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZDogKHN0YXRlKSA9PiAoY2F0X2lkKSA9PiB7XG5cdFx0dmFyIGlkID0gcGFyc2VJbnQoY2F0X2lkKVxuXHRcdHZhciByZXN1bHQgPSAgc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxuXHRcdHByb2R1Y3QgPT4gcHJvZHVjdC5jYXRlZ29yaWVzLmluY2x1ZGVzKGlkKSk7XG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9LFx0XG5cdGdldEFjdGl2ZUF0dHJpYnV0ZXM6IChzdGF0ZSkgPT4ge1xuXHRcdHZhciBhY3RpdmVfYXR0ciA9IGNvbGxlY3RBY3RpdmVBdHRyaWJ1dGVzKCk7XG5cdFx0c3RhdGUuYWN0aXZlX2ZpbHRlcnMgPSBhY3RpdmVfYXR0cjtcblx0XHRyZXR1cm4gc3RhdGUuYWN0aXZlX2F0dHI7XG5cdH0sXG5cdGdldFByb2R1Y3RzRmlsdGVyOiAoc3RhdGUpID0+IChwcm9kdWN0cykgPT4ge1xuXHRcdGlmIChPYmplY3Qua2V5cyhzdGF0ZS5hY3RpdmVfZmlsdGVycykubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXJ0IGZpbHRlcmlnIC0tLSAnIClcblx0XHRcdGNvbnNvbGUubG9nKCdhY2l2ZSBmaWx0ZXJzIGFyZScsIHN0YXRlLmFjdGl2ZV9maWx0ZXJzKVxuXHRcdFx0dmFyIGZpbmFsX3Byb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuXHRcdFx0XHR2YXIgdG9faW5jbHVkZSA9IGZhbHNlO1xuXHRcdFx0XHQvLyBpdGVyYXRlIHRocm91Z2ggYWN0aXZlIGZpbHRlcnMga2V5c1xuXHRcdFx0XHRmb3IodmFyIGF0cl9rZXkgaW4gc3RhdGUuYWN0aXZlX2ZpbHRlcnMpIHtcblx0XHRcdFx0XHQvLyBmaWx0ZXIgb25seSBpZiBrZXkgaGFzIHZhbHVlcywgc28gdGhleSBhcmUgc3BlY2lmaWVkXHRcblx0XHRcdFx0XHR2YXIgYXRyX3ZhbHVlcyA9IHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2F0cl9rZXldO1xuXHRcdFx0XHRcdGlmIChhdHJfdmFsdWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmKGF0cl92YWx1ZXMuaW5jbHVkZXMocHJvZHVjdC5hdHRyaWJ1dGVzW2F0cl9rZXldKSkge1xuXHRcdFx0XHRcdFx0XHR0b19pbmNsdWRlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRvX2luY2x1ZGVcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGZpbmFsX3Byb2R1Y3RzO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBwcm9kdWN0cztcblx0XHR9XG5cdH0sXG4gIH1cbn1cblxuXG5jb25zdCBzdG9yZUNvbW1vbiA9IHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgYXBpX3VybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCcsXG5cdC8vYXBpX3VybDogJ2h0dHA6Ly8xOTIuMTY4LjEuMTExOjgwMDAnLFxuXHRpc0dsb2JhbERhdGFMb2FkZWQ6IGZhbHNlLFxuICB9KSxcbiAgbXV0YXRpb25zOiB7XG5cdHNldEdsb2JhbERhdGFMb2FkZWQgKHN0YXRlLCBpc19sb2FkZWQpIHtcblx0XHRzdGF0ZS5pc0dsb2JhbERhdGFMb2FkZWQgPSBpc19sb2FkZWQ7XG5cdH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBnZXR0ZXJzOiB7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoe1xuICBtb2R1bGVzOiB7XG4gICAgZGlhbG9nczogc3RvcmVEaWFsb2dzLFxuICAgIGNvbW1vbjogc3RvcmVDb21tb24sXG5cdGVjb21tZXJjZTogc3RvcmVFY29tbWVyY2UsXG4gIH1cbn0pXG5cbi8qIHN0b3JlIGVuZCAqL1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQVBBO0FBQUE7QUFXQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBaENBO0FBbUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBcEJBO0FBbkJBO0FBb0VBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})