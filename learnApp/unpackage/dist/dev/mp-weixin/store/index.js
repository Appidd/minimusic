"use strict";
var common_vendor = require("../common/vendor.js");
var store_modules_global = require("./modules/global.js");
var store_modules_home = require("./modules/home.js");
var store_modules_test_exam = require("./modules/test_exam.js");
var store_modules_service = require("./modules/service.js");
const store = common_vendor.createStore({
  modules: {
    Global: store_modules_global.Global,
    Home: store_modules_home.Home,
    TestExam: store_modules_test_exam.TestExam,
    Service: store_modules_service.Service
  }
});
exports.store = store;
