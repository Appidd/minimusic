"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_set_get = require("../../../utils/set_get.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Category",
  setup(__props) {
    let store = common_vendor.useStore();
    common_vendor.onLoad(() => {
    });
    common_vendor.onShow(() => {
    });
    let currentindex = common_vendor.ref(0);
    let choosed = (e) => {
      const classItem = e.currentTarget.dataset.child;
      utils_set_get.t.setClassItem(classItem);
      store.commit("Home/SETCLASSITEM", classItem);
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 100);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(store).state.Home.classList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(common_vendor.unref(currentindex) == index ? "active" : "cateitem"),
            c: index,
            d: index,
            e: common_vendor.o(($event) => common_vendor.isRef(currentindex) ? currentindex.value = index : currentindex = index, index)
          };
        }),
        b: common_vendor.f(common_vendor.unref(store).state.Home.classList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.unref(currentindex) == index
          }, common_vendor.unref(currentindex) == index ? {
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.children, (child, k1, i1) => {
              return {
                a: common_vendor.t(child.title),
                b: child,
                c: common_vendor.n(child.id == common_vendor.unref(store).state.Home.classItem.id ? "blueborder" : "")
              };
            }),
            d: common_vendor.o((...args) => common_vendor.unref(choosed) && common_vendor.unref(choosed)(...args))
          } : {});
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/aboutHome/Category/Category.vue"]]);
wx.createPage(MiniProgramPage);
