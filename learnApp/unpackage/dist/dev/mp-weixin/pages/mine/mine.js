"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "mine",
  setup(__props) {
    let store = common_vendor.useStore();
    let app = getApp();
    console.log(app);
    let capsuleInfo = app.globalData.capsuleInfo;
    let yearchange = (e) => {
      console.log(e.detail.value);
      store.commit("Global/CHANGETIME", e.detail.value);
      console.log("\u5207\u6362\u5E74\u4EFD", e);
    };
    common_vendor.onLoad(() => {
      store.dispatch("Global/GetDate");
      console.log(capsuleInfo);
    });
    common_vendor.onShow(() => {
      store.dispatch("Global/GetUserInfo");
      console.log("onshow");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.s("margin-top:" + common_vendor.unref(capsuleInfo).top + "px;height:" + common_vendor.unref(capsuleInfo).height + "px;"),
        b: common_assets._imports_0$1,
        c: common_vendor.unref(store).state.Global.userInfo.headimgurl || "@/static/images/mine/head.png",
        d: common_vendor.t(common_vendor.unref(store).state.Global.userInfo.nickname || "\u6E38\u5BA2"),
        e: common_vendor.t(common_vendor.unref(store).state.Global.year),
        f: common_vendor.unref(store).state.Global.yearlist,
        g: common_vendor.o((...args) => common_vendor.unref(yearchange) && common_vendor.unref(yearchange)(...args)),
        h: _ctx.index,
        i: common_assets._imports_1$1,
        j: common_vendor.unref(store).state.Global.day >= 0
      }, common_vendor.unref(store).state.Global.day >= 0 ? {
        k: common_vendor.t(common_vendor.unref(store).state.Global.day)
      } : {}, {
        l: common_vendor.t(-common_vendor.unref(store).state.Global.day),
        m: common_assets._imports_2,
        n: common_assets._imports_3,
        o: common_assets._imports_4,
        p: common_assets._imports_3,
        q: common_assets._imports_5,
        r: common_assets._imports_3
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
