webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterBoolean.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/MainFilterBoolean.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['filter_key'],\n  name: 'MainFilterBoolean',\n  mounted: function mounted() {\n    var curr = this.$store.state.ecommerce.active_filters[this.filter_key];\n    console.log('curr is', curr);\n\n    if (curr) {\n      if (curr.length > 0) {\n        this.active_filters = true;\n      }\n    }\n  },\n  computed: {\n    active_filters: function active_filters() {\n      var val = this.$store.state.ecommerce.active_filters[this.filter_key];\n\n      if (val) {\n        return true;\n      }\n\n      return false;\n    }\n  },\n  //\tdata () {\n  //\t\treturn {\n  //\t\t\tactive_filters: false,\n  //\t\t}\n  //\t},\n  methods: {\n    testAction: function testAction(event) {\n      console.log(event);\n    },\n    getFilterValue: function getFilterValue(event) {\n      if (event == true) {\n        return 't';\n      }\n\n      return '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQm9vbGVhbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluRmlsdGVyQm9vbGVhbi52dWU/NTkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdGFjdGl2ZSBmaWx0ZXJzOiB7eyB0aGlzLmFjdGl2ZV9maWx0ZXJzIH19XG5cdDxlbC1zd2l0Y2hcblx0di1tb2RlbD1cInRoaXMuYWN0aXZlX2ZpbHRlcnNcIlxuXHRAY2hhbmdlPVwidGhpcy4kcGFyZW50LnNldEZpbHRlck9wdGlvbih0aGlzLmZpbHRlcl9rZXksIHRoaXMuZ2V0RmlsdGVyVmFsdWUoJGV2ZW50KSlcIlxuXHQ+XG5cdDwvZWwtc3dpdGNoPlxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiBbJ2ZpbHRlcl9rZXknXSxcblx0bmFtZTogJ01haW5GaWx0ZXJCb29sZWFuJyxcblx0bW91bnRlZCAoKSB7XG5cdFx0dmFyIGN1cnIgPSB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnNbdGhpcy5maWx0ZXJfa2V5XVxuXHRcdGNvbnNvbGUubG9nKCdjdXJyIGlzJywgY3Vycilcblx0XHRpZiAoY3Vycikge1xuXHRcdFx0aWYgKGN1cnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZV9maWx0ZXJzID0gdHJ1ZTsgXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGFjdGl2ZV9maWx0ZXJzICgpIHtcblx0XHRcdHZhciB2YWwgPSB0aGlzLiRzdG9yZS5zdGF0ZS5lY29tbWVyY2UuYWN0aXZlX2ZpbHRlcnNbdGhpcy5maWx0ZXJfa2V5XTtcblx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuLy9cdGRhdGEgKCkge1xuLy9cdFx0cmV0dXJuIHtcbi8vXHRcdFx0YWN0aXZlX2ZpbHRlcnM6IGZhbHNlLFxuLy9cdFx0fVxuLy9cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHR0ZXN0QWN0aW9uIChldmVudCkge1xuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQpXHRcblx0XHR9LFxuXHRcdGdldEZpbHRlclZhbHVlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRyZXR1cm4gJ3QnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0fSxcbn1cbjwvc2NyaXB0PlxuIl0sIm1hcHBpbmdzIjoiQUFZQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/MainFilterBoolean.vue?vue&type=script&lang=js\n");

/***/ })

})