"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TestFooter",
  setup(__props) {
    let toAnswerSheet = () => {
      common_vendor.index.navigateTo({
        url: "/pages/aboutQuestion/TestAnswerSheet/TestAnswerSheet"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o((...args) => common_vendor.unref(toAnswerSheet) && common_vendor.unref(toAnswerSheet)(...args)),
        c: common_assets._imports_1$2
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/components/TestFooter/TestFooter.vue"]]);
wx.createComponent(Component);
