"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  LastNext();
}
const LastNext = () => "../../../components/LastNext/LastNext.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HomeAnalysis",
  setup(__props) {
    let store = common_vendor.useStore();
    let curProblem = common_vendor.computed$1(() => {
      return store.getters["TestExam/curProblem"];
    });
    let currentIndex = common_vendor.computed$1(() => {
      return store.state.TestExam.currentIndex;
    });
    let problemList = common_vendor.computed$1(() => {
      return store.state.TestExam.problemList;
    });
    let inpanswer = (e) => {
      store.commit("TestExam/RESETTK", e.detail.value);
      console.log(e.detail);
    };
    common_vendor.onLoad((e) => {
      if (e.atype == "1") {
        store.dispatch("TestExam/getChapterProblem", e.id);
      } else {
        store.dispatch("TestExam/getExamProblem", e.id);
      }
    });
    common_vendor.onShow(() => {
      console.log("onshow");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(curProblem).title_type == 1
      }, common_vendor.unref(curProblem).title_type == 1 ? {
        b: common_vendor.t(common_vendor.unref(curProblem).title),
        c: common_vendor.unref(curProblem).right_key_img,
        d: common_vendor.unref(curProblem).right_key_img
      } : {}, {
        e: common_vendor.unref(curProblem).title_type == 2
      }, common_vendor.unref(curProblem).title_type == 2 ? {
        f: common_vendor.t(common_vendor.unref(curProblem).title),
        g: common_vendor.unref(curProblem).voice_title
      } : {}, {
        h: common_vendor.unref(curProblem).title_type == 3
      }, common_vendor.unref(curProblem).title_type == 3 ? {
        i: common_vendor.t(common_vendor.unref(curProblem).title)
      } : {}, {
        j: common_vendor.t(common_vendor.unref(curProblem).type == 1 ? "\u5355\u9009\u9898" : common_vendor.unref(curProblem).type == 2 ? "\u591A\u9009\u9898" : common_vendor.unref(curProblem).type == 3 ? "\u586B\u7A7A\u9898" : common_vendor.unref(curProblem).type == 4 ? "\u5224\u65AD\u9898" : "\u4E3B\u89C2\u9898"),
        k: common_vendor.t(common_vendor.unref(currentIndex) + 1),
        l: common_vendor.t(common_vendor.unref(problemList).length),
        m: common_vendor.unref(curProblem).type == 1
      }, common_vendor.unref(curProblem).type == 1 ? {
        n: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) ? "chbtnd" : common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "errchbtn" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) || common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: index
          };
        })
      } : {}, {
        o: common_vendor.unref(curProblem).type == 2
      }, common_vendor.unref(curProblem).type == 2 ? {
        p: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) ? "chbtnd" : common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "errchbtn" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) || common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: index
          };
        })
      } : {}, {
        q: common_vendor.unref(curProblem).type == 3
      }, common_vendor.unref(curProblem).type == 3 ? {
        r: common_vendor.o((...args) => common_vendor.unref(inpanswer) && common_vendor.unref(inpanswer)(...args)),
        s: common_vendor.unref(curProblem).textanswer
      } : {}, {
        t: common_vendor.unref(curProblem).type == 4
      }, common_vendor.unref(curProblem).type == 4 ? {} : {}, {
        v: common_vendor.unref(curProblem).type == 5
      }, common_vendor.unref(curProblem).type == 5 ? {
        w: common_vendor.o((...args) => common_vendor.unref(inpanswer) && common_vendor.unref(inpanswer)(...args)),
        x: common_vendor.unref(curProblem).textanswer
      } : {}, {
        y: common_vendor.unref(curProblem).type == 1 || common_vendor.unref(curProblem).type == 2 || common_vendor.unref(curProblem).type == 4
      }, common_vendor.unref(curProblem).type == 1 || common_vendor.unref(curProblem).type == 2 || common_vendor.unref(curProblem).type == 4 ? common_vendor.e({
        z: common_vendor.t(common_vendor.unref(curProblem).right_key),
        A: common_vendor.unref(curProblem).right_key_img
      }, common_vendor.unref(curProblem).right_key_img ? {
        B: common_vendor.unref(curProblem).right_key_img
      } : {}, {
        C: common_vendor.t(common_vendor.unref(curProblem).explain)
      }) : {}, {
        D: common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5
      }, common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5 ? common_vendor.e({
        E: common_vendor.unref(curProblem).right_key_img
      }, common_vendor.unref(curProblem).right_key_img ? {
        F: common_vendor.unref(curProblem).right_key_img
      } : {}, {
        G: common_vendor.t(common_vendor.unref(curProblem).explain)
      }) : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/aboutQuestion/HomeAnalysis/HomeAnalysis.vue"]]);
wx.createPage(MiniProgramPage);
