webpackHotUpdate("app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _useful_methods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useful_methods */ \"./src/useful_methods.js\");\n\n\n\n\n\n\n\n\n/* store start */\n\n\nvar storeDialogs = {\n  state: function state() {\n    return {\n      simple_dialog: {\n        show: false,\n        button_text: '',\n        heading: '',\n        description: ''\n      },\n      call_phone_dialog: {\n        show: false\n      }\n    };\n  },\n  mutations: {\n    openSimpleDialog: function openSimpleDialog(state, _ref) {\n      var button_text = _ref.button_text,\n          heading = _ref.heading,\n          description = _ref.description;\n      state.simple_dialog.show = true;\n      state.simple_dialog.button_text = button_text;\n      state.simple_dialog.heading = heading;\n      state.simple_dialog.description = description;\n    },\n    closeSimpleDialog: function closeSimpleDialog(state) {\n      state.simple_dialog.show = false;\n    },\n    openCallPhoneDialog: function openCallPhoneDialog(state) {\n      state.call_phone_dialog.show = true;\n    },\n    closeCallPhoneDialog: function closeCallPhoneDialog(state) {\n      state.call_phone_dialog.show = false;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar storeEcommerce = {\n  state: function state() {\n    return {\n      products: {},\n      categories: {},\n      active_filters: {},\n      all_filters: {}\n    };\n  },\n  mutations: {\n    setProducts: function setProducts(state, products) {\n      state.products = products;\n    },\n    setCategories: function setCategories(state, categories) {\n      state.categories = categories;\n    },\n    setActiveFilters: function setActiveFilters(state, active_filters) {\n      console.log('call set active filters');\n      state.active_filters = active_filters;\n    },\n    addOptionFilter: function addOptionFilter(state, filter_params) {\n      var filter_key = filter_params.f_key;\n      var filter_item = filter_params.filter_value;\n      console.clear();\n      console.log('start add option filter'); // code to add option filter\t\n\n      if (filter_key in state.active_filters) {\n        delete state.active_filters[filter_key];\n      }\n\n      state.active_filters[filter_key] = [];\n      state.active_filters[filter_key].push(filter_item.code);\n    },\n    addActiveFilter: function addActiveFilter(state, filter_params) {\n      console.log('run add filter to active it', filter_params);\n      var filter_key = filter_params.f_key;\n      var filter_item = filter_params.filter_value;\n      console.log('filter item is', filter_key, filter_item); // code to add checkbox filter\n\n      if (filter_key in state.active_filters) {\n        state.active_filters[filter_key].push(filter_item.code);\n      } else {\n        state.active_filters[filter_key] = [];\n        state.active_filters[filter_key].push(filter_item.code);\n      }\n    },\n    removeActiveFilter: function removeActiveFilter(state, filter_params) {\n      console.clear();\n      var filter_key = filter_params.f_key;\n      var filter_item = filter_params.filter_value;\n      console.log('filter value to remove', filter_item);\n\n      for (var indx in state.active_filters[filter_key]) {\n        var current_item = state.active_filters[filter_key][indx];\n\n        if (current_item == filter_item.code) {\n          state.active_filters[filter_key].splice(indx, 1);\n        }\n      }\n\n      if (state.active_filters[filter_key].length == 0) {\n        delete state.active_filters[filter_key];\n      }\n    }\n  },\n  actions: {},\n  getters: {\n    getCategoryById: function getCategoryById(state) {\n      return function (id) {\n        return state.categories.filter(function (category) {\n          return category.id == id;\n        })[0];\n      };\n    },\n    getProductById: function getProductById(state) {\n      return function (id) {\n        return state.products.filter(function (product) {\n          return product.id == id;\n        })[0];\n      };\n    },\n    getProductsByCategoryId: function getProductsByCategoryId(state) {\n      return function (cat_id) {\n        var id = parseInt(cat_id);\n        var result = state.products.filter(function (product) {\n          return product.categories.includes(id);\n        });\n        return result;\n      };\n    },\n    getAllFilters: function getAllFilters(state) {\n      return function (products) {\n        var filters = Object(_useful_methods__WEBPACK_IMPORTED_MODULE_8__[\"collectProductsAttributes\"])(products);\n        state.all_filters = filters;\n        return filters;\n      };\n    },\n    getActiveFilters: function getActiveFilters(state) {\n      return function (route, current_attr) {\n        console.log('from filter route is', route.query);\n        var active_attr = Object(_useful_methods__WEBPACK_IMPORTED_MODULE_8__[\"collectActiveAttributes\"])(route.query, current_attr);\n        state.active_filters = active_attr;\n        console.log('active filters are', state.active_filters);\n        return state.active_filters;\n      };\n    },\n    getFilterQuery: function getFilterQuery(state) {\n      var query = \"\";\n\n      for (var filter_key in state.active_filters) {\n        query += filter_key + '=';\n        var filter_values = state.active_filters[filter_key];\n\n        for (var filter_value in filter_values) {\n          query += filter_values[filter_value] + ',';\n        }\n\n        query += '&';\n      }\n\n      return query;\n    },\n    getProductsFilter: function getProductsFilter(state) {\n      return function (products) {\n        if (Object.keys(state.active_filters).length > 0) {\n          console.log('start filterig --- ');\n          console.log('acive filters are', state.active_filters);\n          var final_products = products.filter(function (product) {\n            var to_include = false; // iterate through active filters keys\n\n            for (var atr_key in state.active_filters) {\n              // filter only if key has values, so they are specified\t\n              var atr_values = state.active_filters[atr_key];\n\n              if (atr_values.length > 0) {\n                if (atr_values.includes(product.attributes[atr_key][\"value\"])) {\n                  to_include = true;\n                } else {\n                  to_include = false;\n                  return to_include;\n                }\n              }\n            }\n\n            return to_include;\n          });\n          return final_products;\n        } else {\n          return products;\n        }\n      };\n    }\n  }\n};\nvar storeCommon = {\n  state: function state() {\n    return {\n      api_url: 'http://127.0.0.1:8000',\n      //api_url: 'http://192.168.1.111:8000',\n      isGlobalDataLoaded: false\n    };\n  },\n  mutations: {\n    setGlobalDataLoaded: function setGlobalDataLoaded(state, is_loaded) {\n      state.isGlobalDataLoaded = is_loaded;\n    }\n  },\n  actions: {},\n  getters: {}\n};\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_7__[\"createStore\"])({\n  modules: {\n    dialogs: storeDialogs,\n    common: storeCommon,\n    ecommerce: storeEcommerce\n  }\n});\n/* store end *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdG9yZSBzdGFydCAqL1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHtjb2xsZWN0QWN0aXZlQXR0cmlidXRlcywgY29sbGVjdFByb2R1Y3RzQXR0cmlidXRlc30gZnJvbSAnLi91c2VmdWxfbWV0aG9kcyc7XG5cbmNvbnN0IHN0b3JlRGlhbG9ncyA9IHtcbiAgc3RhdGU6ICgpID0+ICh7XG5cdHNpbXBsZV9kaWFsb2c6IHtcblx0XHRzaG93OiBmYWxzZSxcblx0XHRidXR0b25fdGV4dDogJycsXG5cdFx0aGVhZGluZzogJycsXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxuXHR9LFxuXHRjYWxsX3Bob25lX2RpYWxvZzoge1xuXHRcdHNob3c6IGZhbHNlLFxuXHR9LFxuICB9KSxcbiAgbXV0YXRpb25zOiB7XG4gICAgICBvcGVuU2ltcGxlRGlhbG9nKHN0YXRlLCB7IFxuXHRcdGJ1dHRvbl90ZXh0LCBoZWFkaW5nLCBkZXNjcmlwdGlvbiBcblx0XHR9KSB7XG4gICAgICAgIHN0YXRlLnNpbXBsZV9kaWFsb2cuc2hvdyA9IHRydWU7XG5cdFx0c3RhdGUuc2ltcGxlX2RpYWxvZy5idXR0b25fdGV4dCA9IGJ1dHRvbl90ZXh0O1xuXHRcdHN0YXRlLnNpbXBsZV9kaWFsb2cuaGVhZGluZyA9IGhlYWRpbmc7XG5cdFx0c3RhdGUuc2ltcGxlX2RpYWxvZy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgfSxcbiAgICAgIGNsb3NlU2ltcGxlRGlhbG9nKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlLnNpbXBsZV9kaWFsb2cuc2hvdyA9IGZhbHNlO1xuICAgICAgfSxcblx0XHRvcGVuQ2FsbFBob25lRGlhbG9nKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5jYWxsX3Bob25lX2RpYWxvZy5zaG93ID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGNsb3NlQ2FsbFBob25lRGlhbG9nKHN0YXRlKSB7XG5cdFx0XHRzdGF0ZS5jYWxsX3Bob25lX2RpYWxvZy5zaG93ID0gZmFsc2U7XG5cdFx0fSxcbiAgfSxcbiAgYWN0aW9uczoge30sXG4gIGdldHRlcnM6IHt9XG59XG5cbmNvbnN0IHN0b3JlRWNvbW1lcmNlID0ge1xuICBzdGF0ZTogKCkgPT4gKHtcblx0cHJvZHVjdHM6IHt9LFxuXHRjYXRlZ29yaWVzOiB7fSxcblx0YWN0aXZlX2ZpbHRlcnM6IHt9LFxuXHRhbGxfZmlsdGVyczoge30sXG4gIH0pLFxuICBtdXRhdGlvbnM6IHtcblx0c2V0UHJvZHVjdHMoc3RhdGUsIHByb2R1Y3RzKSB7XG5cdFx0c3RhdGUucHJvZHVjdHMgPSBwcm9kdWN0cztcblx0fSxcblx0c2V0Q2F0ZWdvcmllcyhzdGF0ZSwgY2F0ZWdvcmllcykge1xuXHRcdHN0YXRlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXHR9LFxuXHRzZXRBY3RpdmVGaWx0ZXJzKHN0YXRlLCBhY3RpdmVfZmlsdGVycykge1xuXHRcdGNvbnNvbGUubG9nKCdjYWxsIHNldCBhY3RpdmUgZmlsdGVycycpXG5cdFx0c3RhdGUuYWN0aXZlX2ZpbHRlcnMgPSBhY3RpdmVfZmlsdGVycztcblx0fSxcblx0YWRkT3B0aW9uRmlsdGVyKHN0YXRlLCBmaWx0ZXJfcGFyYW1zKSB7XG5cdFx0dmFyIGZpbHRlcl9rZXkgPSBmaWx0ZXJfcGFyYW1zLmZfa2V5XG5cdFx0dmFyIGZpbHRlcl9pdGVtID0gZmlsdGVyX3BhcmFtcy5maWx0ZXJfdmFsdWVcblx0XHRjb25zb2xlLmNsZWFyKClcblx0XHRjb25zb2xlLmxvZygnc3RhcnQgYWRkIG9wdGlvbiBmaWx0ZXInKVxuXHRcdC8vIGNvZGUgdG8gYWRkIG9wdGlvbiBmaWx0ZXJcdFxuXHRcdGlmIChmaWx0ZXJfa2V5IGluIHN0YXRlLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRkZWxldGUgc3RhdGUuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV1cblx0XHR9XG5cdFx0c3RhdGUuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0gPSBbXVxuXHRcdHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLnB1c2goZmlsdGVyX2l0ZW0uY29kZSlcblx0fSxcblx0YWRkQWN0aXZlRmlsdGVyKHN0YXRlLCBmaWx0ZXJfcGFyYW1zKSB7XG5cdFx0Y29uc29sZS5sb2coJ3J1biBhZGQgZmlsdGVyIHRvIGFjdGl2ZSBpdCcsIGZpbHRlcl9wYXJhbXMpXG5cdFx0dmFyIGZpbHRlcl9rZXkgPSBmaWx0ZXJfcGFyYW1zLmZfa2V5IFxuXHRcdHZhciBmaWx0ZXJfaXRlbSA9IGZpbHRlcl9wYXJhbXMuZmlsdGVyX3ZhbHVlXG5cdFx0Y29uc29sZS5sb2coJ2ZpbHRlciBpdGVtIGlzJyxmaWx0ZXJfa2V5LCBmaWx0ZXJfaXRlbSlcblx0XHQvLyBjb2RlIHRvIGFkZCBjaGVja2JveCBmaWx0ZXJcblx0XHRpZihmaWx0ZXJfa2V5IGluIHN0YXRlLmFjdGl2ZV9maWx0ZXJzKSB7XG5cdFx0XHRzdGF0ZS5hY3RpdmVfZmlsdGVyc1tmaWx0ZXJfa2V5XS5wdXNoKGZpbHRlcl9pdGVtLmNvZGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldID0gW11cblx0XHRcdHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLnB1c2goZmlsdGVyX2l0ZW0uY29kZSlcblx0XHR9XG5cdH0sXG5cdHJlbW92ZUFjdGl2ZUZpbHRlcihzdGF0ZSwgZmlsdGVyX3BhcmFtcykge1xuXHRcdGNvbnNvbGUuY2xlYXIoKVxuXHRcdHZhciBmaWx0ZXJfa2V5ID0gZmlsdGVyX3BhcmFtcy5mX2tleVxuXHRcdHZhciBmaWx0ZXJfaXRlbSA9IGZpbHRlcl9wYXJhbXMuZmlsdGVyX3ZhbHVlXG5cdFx0Y29uc29sZS5sb2coJ2ZpbHRlciB2YWx1ZSB0byByZW1vdmUnLCBmaWx0ZXJfaXRlbSlcblx0XHRmb3IgKHZhciBpbmR4IGluIHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldKSB7XG5cdFx0XHR2YXIgY3VycmVudF9pdGVtID0gc3RhdGUuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV1baW5keF1cdFxuXHRcdFx0aWYoY3VycmVudF9pdGVtID09IGZpbHRlcl9pdGVtLmNvZGUpIHtcblx0XHRcdFx0c3RhdGUuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV0uc3BsaWNlKGluZHgsIDEpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRkZWxldGUgc3RhdGUuYWN0aXZlX2ZpbHRlcnNbZmlsdGVyX2tleV1cblx0XHR9XG5cdH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBnZXR0ZXJzOiB7XG5cdGdldENhdGVnb3J5QnlJZDogKHN0YXRlKSA9PiAoaWQpID0+IHtcblx0XHRyZXR1cm4gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoXG5cdFx0Y2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT0gaWQpWzBdO1xuXHR9LFx0XG5cdGdldFByb2R1Y3RCeUlkOiAoc3RhdGUpID0+IChpZCkgPT4ge1xuXHRcdHJldHVybiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXG5cdFx0cHJvZHVjdCA9PiBwcm9kdWN0LmlkID09IGlkKVswXTtcblx0fSxcdFxuXHRnZXRQcm9kdWN0c0J5Q2F0ZWdvcnlJZDogKHN0YXRlKSA9PiAoY2F0X2lkKSA9PiB7XG5cdFx0dmFyIGlkID0gcGFyc2VJbnQoY2F0X2lkKVxuXHRcdHZhciByZXN1bHQgPSAgc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxuXHRcdHByb2R1Y3QgPT4gcHJvZHVjdC5jYXRlZ29yaWVzLmluY2x1ZGVzKGlkKSk7XG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9LFx0XG5cdGdldEFsbEZpbHRlcnM6IChzdGF0ZSkgPT4gKHByb2R1Y3RzKSA9PiB7XG5cdFx0dmFyIGZpbHRlcnMgPSBjb2xsZWN0UHJvZHVjdHNBdHRyaWJ1dGVzKFxuXHRcdFx0cHJvZHVjdHNcblx0XHQpO1xuXHRcdHN0YXRlLmFsbF9maWx0ZXJzID0gZmlsdGVycztcblx0XHRyZXR1cm4gZmlsdGVycztcblx0fSxcblx0Z2V0QWN0aXZlRmlsdGVyczogKHN0YXRlKSA9PiAocm91dGUsIGN1cnJlbnRfYXR0cikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdmcm9tIGZpbHRlciByb3V0ZSBpcycsIHJvdXRlLnF1ZXJ5KVx0XG5cblx0XHR2YXIgYWN0aXZlX2F0dHIgPSBjb2xsZWN0QWN0aXZlQXR0cmlidXRlcyhyb3V0ZS5xdWVyeSwgY3VycmVudF9hdHRyKTtcblx0XHRzdGF0ZS5hY3RpdmVfZmlsdGVycyA9IGFjdGl2ZV9hdHRyO1xuXHRcdGNvbnNvbGUubG9nKCdhY3RpdmUgZmlsdGVycyBhcmUnLCBzdGF0ZS5hY3RpdmVfZmlsdGVycylcblx0XHRyZXR1cm4gc3RhdGUuYWN0aXZlX2ZpbHRlcnM7XG5cdH0sXG5cdGdldEZpbHRlclF1ZXJ5OiAoc3RhdGUpID0+IHtcblx0XHR2YXIgcXVlcnkgPSBcIlwiXG5cdFx0Zm9yICh2YXIgZmlsdGVyX2tleSBpbiBzdGF0ZS5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0cXVlcnkgKz0gZmlsdGVyX2tleSArICc9J1x0XG5cdFx0XHR2YXIgZmlsdGVyX3ZhbHVlcyA9IHN0YXRlLmFjdGl2ZV9maWx0ZXJzW2ZpbHRlcl9rZXldXG5cdFx0XHRmb3IgKHZhciBmaWx0ZXJfdmFsdWUgaW4gZmlsdGVyX3ZhbHVlcykge1xuXHRcdFx0XHRxdWVyeSArPSBmaWx0ZXJfdmFsdWVzW2ZpbHRlcl92YWx1ZV0gKyAnLCdcblx0XHRcdH1cblx0XHRcdHF1ZXJ5ICs9ICcmJ1xuXHRcdH1cblx0XHRyZXR1cm4gcXVlcnlcblx0fSxcblx0Z2V0UHJvZHVjdHNGaWx0ZXI6IChzdGF0ZSkgPT4gKHByb2R1Y3RzKSA9PiB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHN0YXRlLmFjdGl2ZV9maWx0ZXJzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhcnQgZmlsdGVyaWcgLS0tICcgKVxuXHRcdFx0Y29uc29sZS5sb2coJ2FjaXZlIGZpbHRlcnMgYXJlJywgc3RhdGUuYWN0aXZlX2ZpbHRlcnMpXG5cdFx0XHR2YXIgZmluYWxfcHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XG5cdFx0XHRcdHZhciB0b19pbmNsdWRlID0gZmFsc2U7XG5cdFx0XHRcdC8vIGl0ZXJhdGUgdGhyb3VnaCBhY3RpdmUgZmlsdGVycyBrZXlzXG5cdFx0XHRcdGZvcih2YXIgYXRyX2tleSBpbiBzdGF0ZS5hY3RpdmVfZmlsdGVycykge1xuXHRcdFx0XHRcdC8vIGZpbHRlciBvbmx5IGlmIGtleSBoYXMgdmFsdWVzLCBzbyB0aGV5IGFyZSBzcGVjaWZpZWRcdFxuXHRcdFx0XHRcdHZhciBhdHJfdmFsdWVzID0gc3RhdGUuYWN0aXZlX2ZpbHRlcnNbYXRyX2tleV07XG5cdFx0XHRcdFx0aWYgKGF0cl92YWx1ZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aWYoYXRyX3ZhbHVlcy5pbmNsdWRlcyhwcm9kdWN0LmF0dHJpYnV0ZXNbYXRyX2tleV1bXCJ2YWx1ZVwiXSkpIHtcblx0XHRcdFx0XHRcdFx0dG9faW5jbHVkZSA9IHRydWVcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRvX2luY2x1ZGUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRvX2luY2x1ZGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0b19pbmNsdWRlXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBmaW5hbF9wcm9kdWN0cztcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gcHJvZHVjdHM7XG5cdFx0fVxuXHR9LFxuICB9XG59XG5cblxuY29uc3Qgc3RvcmVDb21tb24gPSB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGFwaV91cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuXHQvL2FwaV91cmw6ICdodHRwOi8vMTkyLjE2OC4xLjExMTo4MDAwJyxcblx0aXNHbG9iYWxEYXRhTG9hZGVkOiBmYWxzZSxcbiAgfSksXG4gIG11dGF0aW9uczoge1xuXHRzZXRHbG9iYWxEYXRhTG9hZGVkIChzdGF0ZSwgaXNfbG9hZGVkKSB7XG5cdFx0c3RhdGUuaXNHbG9iYWxEYXRhTG9hZGVkID0gaXNfbG9hZGVkO1xuXHR9LFxuICB9LFxuICBhY3Rpb25zOiB7fSxcbiAgZ2V0dGVyczoge1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIGRpYWxvZ3M6IHN0b3JlRGlhbG9ncyxcbiAgICBjb21tb246IHN0b3JlQ29tbW9uLFxuXHRlY29tbWVyY2U6IHN0b3JlRWNvbW1lcmNlLFxuICB9XG59KVxuXG4vKiBzdG9yZSBlbmQgKi9cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQWhDQTtBQW1DQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQTtBQW9EQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBMUNBO0FBNURBO0FBcUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})