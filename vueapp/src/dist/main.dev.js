"use strict";

var _vue = require("vue");

var _vuex = require("vuex");

var _App = _interopRequireDefault(require("./App.vue"));

var _MainPage = _interopRequireDefault(require("./components/MainPage.vue"));

var _DegustationPage = _interopRequireDefault(require("./components/DegustationPage.vue"));

var _AboutUsPage = _interopRequireDefault(require("./components/AboutUsPage.vue"));

var _OfferPage = _interopRequireDefault(require("./components/OfferPage.vue"));

var _vueRouter = require("vue-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
var routes = [{
  path: '/',
  name: 'MainPage',
  component: _MainPage["default"]
}, {
  path: '/degustation',
  name: 'DegustationPage',
  component: _DegustationPage["default"]
}, {
  path: '/aboutus',
  name: 'AboutUsPage',
  component: _AboutUsPage["default"]
}, {
  path: '/offer',
  name: 'OfferPage',
  component: _OfferPage["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)('/app'),
  routes: routes
});
/* store start */

var store = (0, _vuex.createStore)({
  state: function state() {
    return {
      /* api_url: 'http://127.0.0.1:8000', */

      /* api_url: 'http://192.168.1.141:8000', */
      api_url: 'http://vino.fast-code.ru',
      main_slider_controller: null,
      second_slider_controller: null,

      /* bool variables */
      main_phone: '+79782215509',
      main_phone_display: "+7 (978) 221 55 09",
      mobile_header_show: false
    };
  },
  mutations: {
    setMainSlider: function setMainSlider(state, slider) {
      console.log('init slider', slider);
      this.state.main_slider_controller = slider;
    },
    setSecondSlider: function setSecondSlider(state, slider) {
      console.log('init second slider', slider);
      this.state.second_slider_controller = slider;
    },
    setMobileHeaderShow: function setMobileHeaderShow(state, is_show) {
      this.state.mobile_header_show = is_show;
    }
  }
  /* getters: {
  } */

});
/* store end */

/* initialize everything to app */

app.use(store);
app.use(router);
app.mount('#app');