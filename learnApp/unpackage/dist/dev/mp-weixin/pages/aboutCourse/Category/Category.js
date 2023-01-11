"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Category",
  setup(__props) {
    let store = common_vendor.useStore();
    let changeCate = (item) => {
      store.dispatch("Service/GetCourceList", item);
      console.log(item);
      wx.navigateBack();
    };
    common_vendor.onLoad((options) => {
      console.log(options);
    });
    common_vendor.onShow(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(store).state.Service.classList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(common_vendor.unref(store).state.Service.classItem.id == item.id ? "classnamed" : "classname"),
            c: common_vendor.o(($event) => common_vendor.unref(changeCate)(item)),
            d: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/aboutCourse/Category/Category.vue"]]);
wx.createPage(MiniProgramPage);
