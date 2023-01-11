"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "service",
  setup(__props) {
    let store = common_vendor.useStore();
    let chooseCategory = () => {
      common_vendor.index.navigateTo({
        url: "/pages/aboutCourse/Category/Category"
      });
    };
    let lookmore = () => {
      console.log("\u67E5\u770B\u66F4\u591A");
    };
    let tocourse = () => {
      console.log("\u8BFE\u7A0B\u8BE6\u60C5");
    };
    common_vendor.onLoad((options) => {
      store.dispatch("Service/ReadyService");
      console.log(options);
    });
    common_vendor.onShow(() => {
      store.dispatch("Home/CheckClassItem");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(store).state.Service.classItem.title),
        b: common_assets._imports_0,
        c: common_vendor.o((...args) => common_vendor.unref(chooseCategory) && common_vendor.unref(chooseCategory)(...args)),
        d: common_vendor.f(common_vendor.unref(store).state.Service.courseClassList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item,
            c: common_vendor.f(item.tag, (tag, index1, i1) => {
              return {
                a: common_vendor.t(tag),
                b: index1
              };
            }),
            d: common_vendor.f(item.course, (course, index2, i1) => {
              return common_vendor.e({
                a: index2 < 2
              }, index2 < 2 ? {
                b: course.cover,
                c: common_vendor.t(course.name)
              } : {}, {
                d: common_vendor.o((...args) => common_vendor.unref(tocourse) && common_vendor.unref(tocourse)(...args), index2),
                e: course.id,
                f: index2
              });
            }),
            e: index
          };
        }),
        e: common_assets._imports_3,
        f: common_vendor.o((...args) => common_vendor.unref(lookmore) && common_vendor.unref(lookmore)(...args))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/service/service.vue"]]);
wx.createPage(MiniProgramPage);
