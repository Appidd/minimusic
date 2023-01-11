"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LastNext",
  setup(__props) {
    let store = common_vendor.useStore();
    let current = common_vendor.computed$1(() => {
      return store.state.TestExam.currentIndex + 1;
    });
    let total = common_vendor.computed$1(() => {
      return store.state.TestExam.problemList.length;
    });
    let lastquestion = () => {
      store.commit("TestExam/SUBINDEX");
    };
    let nextquestion = () => {
      store.commit("TestExam/ADDINDEX");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(current) != 1
      }, common_vendor.unref(current) != 1 ? {
        b: common_assets._imports_0$3,
        c: common_vendor.o((...args) => common_vendor.unref(lastquestion) && common_vendor.unref(lastquestion)(...args))
      } : {}, {
        d: common_vendor.unref(current) != common_vendor.unref(total)
      }, common_vendor.unref(current) != common_vendor.unref(total) ? {
        e: common_assets._imports_0$3,
        f: common_vendor.o((...args) => common_vendor.unref(nextquestion) && common_vendor.unref(nextquestion)(...args))
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/components/LastNext/LastNext.vue"]]);
wx.createComponent(Component);
