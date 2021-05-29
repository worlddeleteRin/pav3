"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close_mobile_header = close_mobile_header;
exports.open_mobile_header = open_mobile_header;

function close_mobile_header() {
  this.$store.commit('setMobileHeaderShow', false);
}

function open_mobile_header() {
  this.$store.commit('setMobileHeaderShow', true);
}