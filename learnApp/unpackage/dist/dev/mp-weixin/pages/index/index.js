"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_set_get = require("../../utils/set_get.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let store = common_vendor.useStore();
    common_vendor.onLoad(() => {
      let token = utils_set_get.t.getToken();
      console.log(token);
      if (token) {
        store.commit("Global/SETINDEXBTN");
      } else {
        store.dispatch("Global/Login");
      }
    });
    let toHome = () => {
      common_vendor.index.switchTab({
        url: "/pages/home/home"
      });
    };
    common_vendor.onShow(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(store).state.Global.showIndexBtn
      }, common_vendor.unref(store).state.Global.showIndexBtn ? {
        b: common_vendor.o((...args) => common_vendor.unref(toHome) && common_vendor.unref(toHome)(...args))
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
