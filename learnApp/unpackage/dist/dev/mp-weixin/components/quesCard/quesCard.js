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
  __name: "quesCard",
  setup(__props) {
    let store = common_vendor.useStore();
    let totest = (e) => {
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
        } else if (examItem.num == 0) {
          common_vendor.index.showToast({
            title: "\u6682\u65E0\u9898\u76EE",
            icon: "none"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "../../pages/aboutQuestion/ChapterTest/ChapterTest?id=" + examItem.id
          });
          console.log("\u7B54\u9898");
        }
      } else {
        if (major_vip_level < examItem.vip_level) {
          console.log(1);
          common_vendor.index.showToast({
            title: "\u6682\u672A\u89E3\u9501",
            icon: "none"
          });
        } else if (examItem.num == 0) {
          common_vendor.index.showToast({
            title: "\u6682\u65E0\u9898\u76EE",
            icon: "none"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "../../pages/aboutQuestion/ChapterTest/ChapterTest?id=" + examItem.id
          });
          console.log("\u7B54\u9898");
        }
      }
    };
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
            url: "/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id=" + examItem.id + "&atype=" + 1
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
            url: "/pages/aboutQuestion/HomeAnalysis/HomeAnalysis?id=" + examItem.id + "&atype=" + 1
          });
        }
      }
    };
    let checkopen = () => {
      console.log("\u5C55\u5F00");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(store).state.Home.chapterList, (item, index, i0) => {
          return common_vendor.e({
            a: item.children.length != 0
          }, item.children.length != 0 ? {
            b: item.open ? "../../static/images/home/odd.png" : "../../static/images/home/add.png",
            c: common_vendor.t(item.title),
            d: common_vendor.o((...args) => common_vendor.unref(checkopen) && common_vendor.unref(checkopen)(...args)),
            e: item.open,
            f: index
          } : {}, {
            g: item.children.length != 0
          }, item.children.length != 0 ? {
            h: common_vendor.f(item.children, (citem, k1, i1) => {
              return common_vendor.e({
                a: common_vendor.t(citem.title),
                b: common_vendor.t(citem.num),
                c: citem.type == 1
              }, citem.type == 1 ? common_vendor.e({
                d: common_vendor.unref(store).state.Home.userInfo.common_vip_level >= citem.vip_level
              }, common_vendor.unref(store).state.Home.userInfo.common_vip_level >= citem.vip_level ? {
                e: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
                f: citem,
                g: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
                h: citem
              } : {
                i: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
                j: citem,
                k: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
                l: citem
              }) : {}, {
                m: citem.type == 2
              }, citem.type == 2 ? common_vendor.e({
                n: common_vendor.unref(store).state.Home.userInfo.major_vip_level >= citem.vip_level
              }, common_vendor.unref(store).state.Home.userInfo.major_vip_level >= citem.vip_level ? {
                o: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
                p: citem,
                q: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
                r: citem
              } : {
                s: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
                t: citem,
                v: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
                w: citem
              }) : {});
            })
          } : common_vendor.e({
            i: common_vendor.t(item.title),
            j: common_vendor.t(item.num),
            k: item.type == 1
          }, item.type == 1 ? common_vendor.e({
            l: common_vendor.unref(store).state.Home.userInfo.common_vip_level >= item.vip_level
          }, common_vendor.unref(store).state.Home.userInfo.common_vip_level >= item.vip_level ? {
            m: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
            n: item,
            o: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            p: item
          } : {
            q: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
            r: item,
            s: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            t: item
          }) : {}, {
            v: item.type == 2
          }, item.type == 2 ? common_vendor.e({
            w: common_vendor.unref(store).state.Home.userInfo.major_vip_level >= item.vip_level
          }, common_vendor.unref(store).state.Home.userInfo.major_vip_level >= item.vip_level ? {
            x: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
            y: item,
            z: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            A: item
          } : {
            B: common_vendor.o((...args) => common_vendor.unref(totest) && common_vendor.unref(totest)(...args)),
            C: item,
            D: common_vendor.o((...args) => common_vendor.unref(toAnalysis) && common_vendor.unref(toAnalysis)(...args)),
            E: item
          }) : {}), {
            F: index
          });
        }),
        b: common_vendor.unref(store).state.Home.chapterList.length == 0
      }, common_vendor.unref(store).state.Home.chapterList.length == 0 ? {
        c: common_vendor.p({
          mode: "data",
          icon: "http://cdn.uviewui.com/uview/empty/data.png"
        })
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/components/quesCard/quesCard.vue"]]);
wx.createComponent(Component);
