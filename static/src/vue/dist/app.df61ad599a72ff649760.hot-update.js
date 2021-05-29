webpackHotUpdate("app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n\n\n\n\n\n\n\n/* store start */\n\nvar storeDialogs = {\n  state: function state() {\n    return {\n      simple_dialog: {\n        show: false,\n        button_text: '',\n        heading: '',\n        description: ''\n      },\n      call_phone_dialog: {\n        show: false\n      }\n    };\n  },\n  mutations: {\n    openSimpleDialog: function openSimpleDialog(state, _ref) {\n      var button_text = _ref.button_text,\n          heading = _ref.heading,\n          description = _ref.description;\n      state.simple_dialog.show = true;\n      state.simple_dialog.button_text = button_text;\n      state.simple_dialog.heading = heading;\n      state.simple_dialog.description = description;\n    },\n    closeSimpleDialog: function closeSimpleDialog(state) {\n      state.simple_dialog.show = false;\n    },\n    openCallPhoneDialog: function openCallPhoneDialog(state) {\n      state.call_phone_dialog.show = true;\n    },\n    closeCallPhoneDialog: function closeCallPhoneDialog(state) {\n      state.call_phone_dialog.show = false;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar storeEcommerce = {\n  state: function state() {\n    return {\n      products: {},\n      categories: {},\n      active_filters: {}\n    };\n  },\n  mutations: {\n    setProducts: function setProducts(state, products) {\n      state.products = products;\n    },\n    setCategories: function setCategories(state, categories) {\n      state.categories = categories;\n    },\n    setActiveFilters: function setActiveFilters(state, active_filters) {\n      console.log('call set active filters');\n      state.active_filters = active_filters;\n    }\n  },\n  actions: {},\n  getters: {\n    getCategoryById: function getCategoryById(state) {\n      return function (id) {\n        return state.categories.filter(function (category) {\n          return category.id == id;\n        })[0];\n      };\n    },\n    getProductById: function getProductById(state) {\n      return function (id) {\n        return state.products.filter(function (product) {\n          return product.id == id;\n        })[0];\n      };\n    },\n    getProductsByCategoryId: function getProductsByCategoryId(state) {\n      return function (cat_id) {\n        var id = parseInt(cat_id);\n        var result = state.products.filter(function (product) {\n          return product.categories.includes(id);\n        });\n        return result;\n      };\n    },\n    getProductsFilter: function getProductsFilter(state) {\n      return function (products) {\n        if (Object.keys(state.active_filters).length > 0) {\n          console.log('start filterig --- ');\n          var filtered_products = [];\n          products.forEach(function (product) {\n            var is_include = false; // iterate through active filters keys\n\n            for (var atr_key in state.active_filters) {\n              console.log('key is', atr_key);\n\n              for (var atr_value in state.active_filters[atr_key]) {\n                if (product.attributes[atr_key] == atr_value) {\n                  is_include = true;\n                }\n              }\n            }\n\n            if (is_include) {\n              filtered_products.push(product);\n            }\n          });\n          console.log('filtered products are', filtered_products);\n          return filtered_products;\n        } else {\n          return products;\n        }\n      };\n    }\n  }\n};\nvar storeCommon = {\n  state: function state() {\n    return {\n      api_url: 'http://127.0.0.1:8000',\n      //api_url: 'http://192.168.1.111:8000',\n      isGlobalDataLoaded: false\n    };\n  },\n  mutations: {\n    setGlobalDataLoaded: function setGlobalDataLoaded(state, is_loaded) {\n      state.isGlobalDataLoaded = is_loaded;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_7__[\"createStore\"])({\n  modules: {\n    dialogs: storeDialogs,\n    common: storeCommon,\n    ecommerce: storeEcommerce\n  }\n});\n/* store end *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdG9yZSBzdGFydCAqL1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xuXG5jb25zdCBzdG9yZURpYWxvZ3MgPSB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuXHRzaW1wbGVfZGlhbG9nOiB7XG5cdFx0c2hvdzogZmFsc2UsXG5cdFx0YnV0dG9uX3RleHQ6ICcnLFxuXHRcdGhlYWRpbmc6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0fSxcblx0Y2FsbF9waG9uZV9kaWFsb2c6IHtcblx0XHRzaG93OiBmYWxzZSxcblx0fSxcbiAgfSksXG4gIG11dGF0aW9uczoge1xuICAgICAgb3BlblNpbXBsZURpYWxvZyhzdGF0ZSwgeyBcblx0XHRidXR0b25fdGV4dCwgaGVhZGluZywgZGVzY3JpcHRpb24gXG5cdFx0fSkge1xuICAgICAgICBzdGF0ZS5zaW1wbGVfZGlhbG9nLnNob3cgPSB0cnVlO1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuYnV0dG9uX3RleHQgPSBidXR0b25fdGV4dDtcblx0XHRzdGF0ZS5zaW1wbGVfZGlhbG9nLmhlYWRpbmcgPSBoZWFkaW5nO1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIH0sXG4gICAgICBjbG9zZVNpbXBsZURpYWxvZyhzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5zaW1wbGVfZGlhbG9nLnNob3cgPSBmYWxzZTtcbiAgICAgIH0sXG5cdFx0b3BlbkNhbGxQaG9uZURpYWxvZyhzdGF0ZSkge1xuXHRcdFx0c3RhdGUuY2FsbF9waG9uZV9kaWFsb2cuc2hvdyA9IHRydWU7XG5cdFx0fSxcblx0XHRjbG9zZUNhbGxQaG9uZURpYWxvZyhzdGF0ZSkge1xuXHRcdFx0c3RhdGUuY2FsbF9waG9uZV9kaWFsb2cuc2hvdyA9IGZhbHNlO1xuXHRcdH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBnZXR0ZXJzOiB7fVxufVxuXG5jb25zdCBzdG9yZUVjb21tZXJjZSA9IHtcbiAgc3RhdGU6ICgpID0+ICh7XG5cdHByb2R1Y3RzOiB7fSxcblx0Y2F0ZWdvcmllczoge30sXG5cdGFjdGl2ZV9maWx0ZXJzOiB7fSxcbiAgfSksXG4gIG11dGF0aW9uczoge1xuXHRzZXRQcm9kdWN0cyhzdGF0ZSwgcHJvZHVjdHMpIHtcblx0XHRzdGF0ZS5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuXHR9LFxuXHRzZXRDYXRlZ29yaWVzKHN0YXRlLCBjYXRlZ29yaWVzKSB7XG5cdFx0c3RhdGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG5cdH0sXG5cdHNldEFjdGl2ZUZpbHRlcnMoc3RhdGUsIGFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0Y29uc29sZS5sb2coJ2NhbGwgc2V0IGFjdGl2ZSBmaWx0ZXJzJylcblx0XHRzdGF0ZS5hY3RpdmVfZmlsdGVycyA9IGFjdGl2ZV9maWx0ZXJzO1xuXHR9LFxuICB9LFxuICBhY3Rpb25zOiB7fSxcbiAgZ2V0dGVyczoge1xuXHRnZXRDYXRlZ29yeUJ5SWQ6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XG5cdFx0cmV0dXJuIHN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKFxuXHRcdGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09IGlkKVswXTtcblx0fSxcdFxuXHRnZXRQcm9kdWN0QnlJZDogKHN0YXRlKSA9PiAoaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxuXHRcdHByb2R1Y3QgPT4gcHJvZHVjdC5pZCA9PSBpZClbMF07XG5cdH0sXHRcblx0Z2V0UHJvZHVjdHNCeUNhdGVnb3J5SWQ6IChzdGF0ZSkgPT4gKGNhdF9pZCkgPT4ge1xuXHRcdHZhciBpZCA9IHBhcnNlSW50KGNhdF9pZClcblx0XHR2YXIgcmVzdWx0ID0gIHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcblx0XHRwcm9kdWN0ID0+IHByb2R1Y3QuY2F0ZWdvcmllcy5pbmNsdWRlcyhpZCkpO1xuXHRcdHJldHVybiByZXN1bHRcblx0fSxcdFxuXHRnZXRQcm9kdWN0c0ZpbHRlcjogKHN0YXRlKSA9PiAocHJvZHVjdHMpID0+IHtcblx0XHRpZiAoT2JqZWN0LmtleXMoc3RhdGUuYWN0aXZlX2ZpbHRlcnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdGFydCBmaWx0ZXJpZyAtLS0gJyApXG5cdFx0XHR2YXIgZmlsdGVyZWRfcHJvZHVjdHMgPSBbXVxuXHRcdFx0cHJvZHVjdHMuZm9yRWFjaCggcHJvZHVjdCA9PiB7XG5cdFx0dmFyIGlzX2luY2x1ZGUgPSBmYWxzZSBcblx0XHQvLyBpdGVyYXRlIHRocm91Z2ggYWN0aXZlIGZpbHRlcnMga2V5c1xuXHRcdGZvcih2YXIgYXRyX2tleSBpbiBzdGF0ZS5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0Y29uc29sZS5sb2coJ2tleSBpcycsIGF0cl9rZXkpXG5cdFx0XHRmb3IodmFyIGF0cl92YWx1ZSBpbiBzdGF0ZS5hY3RpdmVfZmlsdGVyc1thdHJfa2V5XSkge1xuXHRcdFx0XHRpZiAocHJvZHVjdC5hdHRyaWJ1dGVzW2F0cl9rZXldID09IGF0cl92YWx1ZSkge1xuXHRcdFx0XHRcdGlzX2luY2x1ZGUgPSB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGlzX2luY2x1ZGUpIHtcblx0XHRcdGZpbHRlcmVkX3Byb2R1Y3RzLnB1c2gocHJvZHVjdClcdFx0XG5cdFx0fVxuXHR9KTtcblx0XHRjb25zb2xlLmxvZygnZmlsdGVyZWQgcHJvZHVjdHMgYXJlJywgZmlsdGVyZWRfcHJvZHVjdHMpXG5cdFx0cmV0dXJuIGZpbHRlcmVkX3Byb2R1Y3RzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcHJvZHVjdHM7XG5cdFx0fVxuXHR9LFxuICB9XG59XG5cblxuY29uc3Qgc3RvcmVDb21tb24gPSB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGFwaV91cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuXHQvL2FwaV91cmw6ICdodHRwOi8vMTkyLjE2OC4xLjExMTo4MDAwJyxcblx0aXNHbG9iYWxEYXRhTG9hZGVkOiBmYWxzZSxcbiAgfSksXG4gIG11dGF0aW9uczoge1xuXHRzZXRHbG9iYWxEYXRhTG9hZGVkIChzdGF0ZSwgaXNfbG9hZGVkKSB7XG5cdFx0c3RhdGUuaXNHbG9iYWxEYXRhTG9hZGVkID0gaXNfbG9hZGVkO1xuXHR9LFxuICB9LFxuICBhY3Rpb25zOiB7fSxcbiAgZ2V0dGVyczoge1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIGRpYWxvZ3M6IHN0b3JlRGlhbG9ncyxcbiAgICBjb21tb246IHN0b3JlQ29tbW9uLFxuXHRlY29tbWVyY2U6IHN0b3JlRWNvbW1lcmNlLFxuICB9XG59KVxuXG4vKiBzdG9yZSBlbmQgKi9cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQWhDQTtBQW1DQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQWZBO0FBbkJBO0FBK0RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})