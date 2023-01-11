"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
require("./store/modules/global.js");
require("./request/link.js");
require("./request/service.js");
require("./utils/set_get.js");
require("./store/modules/home.js");
require("./store/modules/test_exam.js");
require("./store/modules/service.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/home.js";
  "./pages/service/service.js";
  "./pages/mine/mine.js";
  "./pages/aboutHome/Category/Category.js";
  "./pages/aboutHome/ErroBook/ErroBook.js";
  "./pages/aboutQuestion/ChapterTest/ChapterTest.js";
  "./pages/aboutQuestion/TestAnswerSheet/TestAnswerSheet.js";
  "./pages/aboutQuestion/HomeAnalysis/HomeAnalysis.js";
  "./pages/aboutCourse/Category/Category.js";
}
const _sfc_main = {
  onLaunch: function() {
    const updateManager = common_vendor.index.getUpdateManager();
    updateManager.onCheckForUpdate(function(res) {
      console.log(res.hasUpdate);
    });
    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: "\u66F4\u65B0\u63D0\u793A",
        content: "\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u662F\u5426\u91CD\u542F\u5E94\u7528\uFF1F",
        success: function(res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed(function() {
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  globalData: {
    baseUrl: "https://www.baidu.com/",
    logined: false,
    capsuleInfo: common_vendor.index.getMenuButtonBoundingClientRect()
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
