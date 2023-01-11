"use strict";
var common_vendor = require("../common/vendor.js");
var t = {
  setToken: function(data) {
    common_vendor.index.setStorageSync("token", data);
  },
  getToken: function() {
    return common_vendor.index.getStorageSync("token");
  },
  setUserInfo: function(data) {
    common_vendor.index.setStorageSync("userInfo", data);
  },
  getUserInfo: function() {
    return common_vendor.index.getStorageSync("userInfo");
  },
  setClassItem: function(data) {
    common_vendor.index.setStorageSync("classItem", data);
  },
  getClassItem: function() {
    return common_vendor.index.getStorageSync("classItem");
  },
  setChapterObj: function(data) {
    return common_vendor.index.setStorageSync("chapterObj", data);
  },
  getChapterObj: function() {
    return common_vendor.index.getStorageSync("chapterObj");
  },
  setExamObj: function(data) {
    return common_vendor.index.setStorageSync("examObj", data);
  },
  getExamObj: function() {
    return common_vendor.index.getStorageSync("examObj");
  },
  setproblemList: function(data) {
    return common_vendor.index.setStorageSync("problemList", data);
  },
  getproblemList: function() {
    return common_vendor.index.getStorageSync("problemList");
  },
  setanalysisList: function(data) {
    return common_vendor.index.setStorageSync("analysisList", data);
  },
  getanalysisList: function() {
    return common_vendor.index.getStorageSync("analysisList");
  },
  setcouresList: function(data) {
    return common_vendor.index.setStorageSync("couresList", data);
  },
  getcouresList: function() {
    return common_vendor.index.getStorageSync("couresList");
  }
};
exports.t = t;
