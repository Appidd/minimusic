"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
if (!Math) {
  (QuesCard + ExamCard)();
}
const ExamCard = () => "../../components/examCard/examCard.js";
const QuesCard = () => "../../components/quesCard/quesCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    let store = common_vendor.useStore();
    let currentIndex = common_vendor.ref(1);
    common_vendor.onLoad((options) => {
      store.dispatch("Home/GetBanner");
      console.log(options);
    });
    common_vendor.onShow(() => {
      console.log(getApp());
      store.dispatch("Home/CheckClassItem");
    });
    let topath = (e) => {
      const item = e.currentTarget.dataset.item;
      console.log(item);
      switch (item.type) {
        case 1:
          common_vendor.index.navigateTo({
            url: "../web/web?targetUrl=" + item.path
          });
          break;
        case 2:
          common_vendor.index.navigateTo({
            url: item.path
          });
          break;
      }
    };
    let chooseClass = () => {
      common_vendor.index.navigateTo({
        url: "../aboutHome/Category/Category"
      });
    };
    let toerrbook = () => {
      common_vendor.index.navigateTo({
        url: "../aboutHome/ErroBook/ErroBook"
      });
    };
    let changeCaquestion = (e) => {
      console.log(e);
      currentIndex.value = e.currentTarget.dataset.index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(store).state.Home.classItem.title),
        b: common_assets._imports_0,
        c: common_vendor.o((...args) => common_vendor.unref(chooseClass) && common_vendor.unref(chooseClass)(...args)),
        d: common_assets._imports_1,
        e: common_vendor.o((...args) => common_vendor.unref(toerrbook) && common_vendor.unref(toerrbook)(...args)),
        f: common_vendor.f(common_vendor.unref(store).state.Home.banner, (item, index, i0) => {
          return {
            a: item.img_url,
            b: item,
            c: index
          };
        }),
        g: common_vendor.o((...args) => common_vendor.unref(topath) && common_vendor.unref(topath)(...args)),
        h: common_vendor.n(common_vendor.unref(currentIndex) == 1 ? "active" : ""),
        i: common_vendor.o((...args) => common_vendor.unref(changeCaquestion) && common_vendor.unref(changeCaquestion)(...args)),
        j: common_vendor.n(common_vendor.unref(currentIndex) == 2 ? "active" : ""),
        k: common_vendor.o((...args) => common_vendor.unref(changeCaquestion) && common_vendor.unref(changeCaquestion)(...args)),
        l: common_vendor.unref(currentIndex) == 1,
        m: common_vendor.unref(currentIndex) == 2
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
