"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TestAnswerSheet",
  setup(__props) {
    let store = common_vendor.useStore();
    let choosePro = (e) => {
      store.commit("TestExam/SETINDEX", e.currentTarget.dataset.index);
      common_vendor.index.navigateBack();
      console.log(e);
      console.log("\u9009\u62E9\u9898\u76EE");
    };
    let getback = () => {
      common_vendor.index.navigateBack();
      console.log("\u8FD4\u56DE\u7EC3\u4E60");
    };
    let collect = () => {
      console.log("\u6536\u85CF\u7ED3\u679C");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(store).getters["TestExam/persent"] || 0),
        b: common_vendor.f(common_vendor.unref(store).state.TestExam.problemList, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.n(item.result == 1 ? "cright" : item.result == 2 ? "ccenter" : ""),
            c: index
          };
        }),
        c: common_vendor.o((...args) => common_vendor.unref(choosePro) && common_vendor.unref(choosePro)(...args)),
        d: common_vendor.o((...args) => common_vendor.unref(getback) && common_vendor.unref(getback)(...args)),
        e: common_vendor.o((...args) => common_vendor.unref(collect) && common_vendor.unref(collect)(...args))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/aboutQuestion/TestAnswerSheet/TestAnswerSheet.vue"]]);
wx.createPage(MiniProgramPage);
