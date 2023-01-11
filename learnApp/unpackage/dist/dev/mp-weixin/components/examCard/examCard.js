"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  _easycom_u_empty2();
}
const _easycom_u_empty = () => "../../node-modules/uview-plus/components/u-empty/u-empty.js";
if (!Math) {
  _easycom_u_empty();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "examCard",
  setup(__props) {
    let store = common_vendor.useStore();
    let toAnalysis = (e) => {
      const examItem = e.currentTarget.dataset.item;
      const userInfo = store.state.Home.userInfo;
      const common_vip_level = userInfo.common_vip_level;
      const major_vip_level = userInfo.major_vip_level;
      if (examItem.type == 1) {
        if (common_vip_level < examItem.vip_level) {
          common_vendor.index.showToast({
            title: "\u6682\u672A\u89E3\u9501",
            icon: "none"
          });
        } else if (examItem.problem_num == 0 || examItem.num == 0) {
          common_vendor.index.showToast({
            title: "\u6682\u65E0\u9898\u76EE",
            icon: "none"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id=" + examItem.id + "&atype=" + 2
          });
        }
      } else {
        if (major_vip_level < examItem.vip_level) {
          wx.showToast({
            title: "\u6682\u672A\u89E3\u9501",
            icon: "none"
          });
        } else if (examItem.problem_num == 0 || examItem.num == 0) {
          common_vendor.index.showToast({
            title: "\u6682\u65E0\u9898\u76EE",
            icon: "none"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id=" + examItem.id + "&atype=" + 2
          });
        }
      }
    };
    let toExam = () => {
      console.log("toExam");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(store).state.Home.examList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.problem_num),
            c: item.type == 1
          }, item.type == 1 ? common_vendor.e({
            d: common_vendor.unref(store).state.Home.major_vip_level >= item.vip_level
          }, common_vendor.unref(store).state.Home.major_vip_level >= item.vip_level ? {
            e: common_vendor.o((...args) => common_vendor.unref(toExam) && common_vendor.unref(toExam)(...args)),
            f: item,
            g: item
          } : {
            h: common_vendor.o((...args) => common_vendor.unref(toExam) && common_vendor.unref(toExam)(...args)),
            i: item,
            j: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            k: item
          }) : {}, {
            l: item.type == 2
          }, item.type == 2 ? common_vendor.e({
            m: common_vendor.unref(store).state.Home.userInfo.major_vip_level >= item.vip_level
          }, common_vendor.unref(store).state.Home.userInfo.major_vip_level >= item.vip_level ? {
            n: common_vendor.o((...args) => common_vendor.unref(toExam) && common_vendor.unref(toExam)(...args)),
            o: item,
            p: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            q: item
          } : {
            r: common_vendor.o((...args) => common_vendor.unref(toExam) && common_vendor.unref(toExam)(...args)),
            s: item,
            t: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            v: item
          }) : {}, {
            w: index
          });
        }),
        b: common_vendor.unref(store).state.Home.examList.length == 0
      }, common_vendor.unref(store).state.Home.examList.length == 0 ? {
        c: common_vendor.p({
          mode: "data",
          icon: "http://cdn.uviewui.com/uview/empty/data.png"
        })
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/components/examCard/examCard.vue"]]);
wx.createComponent(Component);
