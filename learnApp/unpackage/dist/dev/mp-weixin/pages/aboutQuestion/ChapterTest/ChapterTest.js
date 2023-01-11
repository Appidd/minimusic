"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  (_easycom_u_radio2 + _easycom_u_radio_group2)();
}
const _easycom_u_radio = () => "../../../node-modules/uview-plus/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../../node-modules/uview-plus/components/u-radio-group/u-radio-group.js";
if (!Math) {
  (_easycom_u_radio + _easycom_u_radio_group + LastNext + Footer)();
}
const Footer = () => "../../../components/TestFooter/TestFooter.js";
const LastNext = () => "../../../components/LastNext/LastNext.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ChapterTest",
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
    let chooseone = (e) => {
      console.log(curProblem);
      store.commit("TestExam/RESETPONE", e.currentTarget.dataset.chooseanswer);
    };
    let choosesome = (e) => {
      console.log("choosesome");
      store.commit("TestExam/RESETPSOME", e.currentTarget.dataset.chooseanswer);
    };
    let inpanswer = (e) => {
      store.commit("TestExam/RESETTK", e.detail.value);
      console.log(e.detail);
    };
    let radioChange = (e) => {
      console.log(e);
      store.commit("TestExam/RESETRADIO", e);
    };
    let openana = (e) => {
      store.commit("TestExam/CHANGEAN", e.currentTarget.dataset.index);
    };
    common_vendor.onLoad((e) => {
      console.log(e);
      store.dispatch("TestExam/getChapterProblem", e.id);
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
      }, common_vendor.unref(curProblem).type == 1 ? common_vendor.e({
        n: !common_vendor.unref(curProblem).openanalysis
      }, !common_vendor.unref(curProblem).openanalysis ? {
        o: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "chbtnd" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: selectItem.number,
            f: index
          };
        }),
        p: common_vendor.o((...args) => common_vendor.unref(chooseone) && common_vendor.unref(chooseone)(...args))
      } : {}, {
        q: common_vendor.unref(curProblem).openanalysis
      }, common_vendor.unref(curProblem).openanalysis ? {
        r: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) ? "chbtnd" : common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "errchbtn" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) || common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: index
          };
        })
      } : {}) : {}, {
        s: common_vendor.unref(curProblem).type == 2
      }, common_vendor.unref(curProblem).type == 2 ? common_vendor.e({
        t: !common_vendor.unref(curProblem).openanalysis
      }, !common_vendor.unref(curProblem).openanalysis ? {
        v: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "chbtnd" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: selectItem.number,
            f: index
          };
        }),
        w: common_vendor.o((...args) => common_vendor.unref(choosesome) && common_vendor.unref(choosesome)(...args))
      } : {}, {
        x: common_vendor.unref(curProblem).openanalysis
      }, common_vendor.unref(curProblem).openanalysis ? {
        y: common_vendor.f(common_vendor.unref(curProblem).ans, (selectItem, index, i0) => {
          return {
            a: common_vendor.t(selectItem.number),
            b: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) ? "chbtnd" : common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "errchbtn" : "chbtn"),
            c: common_vendor.t(selectItem.content),
            d: common_vendor.n(common_vendor.unref(curProblem).right_keyList.includes(selectItem.number) || common_vendor.unref(curProblem).choosedList.includes(selectItem.number) ? "choosedItem" : "chCardIitem"),
            e: index
          };
        })
      } : {}) : {}, {
        z: common_vendor.unref(curProblem).type == 3
      }, common_vendor.unref(curProblem).type == 3 ? {
        A: common_vendor.o((...args) => common_vendor.unref(inpanswer) && common_vendor.unref(inpanswer)(...args)),
        B: common_vendor.unref(curProblem).textanswer
      } : {}, {
        C: common_vendor.unref(curProblem).type == 4
      }, common_vendor.unref(curProblem).type == 4 ? common_vendor.e({
        D: !common_vendor.unref(curProblem).openanalysis
      }, !common_vendor.unref(curProblem).openanalysis ? {
        E: common_vendor.o(common_vendor.unref(radioChange)),
        F: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: "\u6B63\u786E",
          name: "1"
        }),
        G: common_vendor.o(common_vendor.unref(radioChange)),
        H: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: "\u9519\u8BEF",
          name: "2"
        }),
        I: common_vendor.o(($event) => common_vendor.unref(curProblem).radio = $event),
        J: common_vendor.p({
          placement: "column",
          modelValue: common_vendor.unref(curProblem).radio
        })
      } : {}, {
        K: common_vendor.unref(curProblem).openanalysis
      }, common_vendor.unref(curProblem).openanalysis ? {
        L: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: "\u6B63\u786E",
          labelDisabled: true,
          name: "1",
          activeColor: common_vendor.unref(curProblem).result == 1 ? "" : "red"
        }),
        M: common_vendor.p({
          customStyle: {
            marginBottom: "8px"
          },
          label: "\u9519\u8BEF",
          labelDisabled: true,
          name: "2",
          activeColor: common_vendor.unref(curProblem).result == 1 ? "" : "red"
        }),
        N: common_vendor.o(($event) => common_vendor.unref(curProblem).radio = $event),
        O: common_vendor.p({
          placement: "column",
          modelValue: common_vendor.unref(curProblem).radio
        })
      } : {}) : {}, {
        P: common_vendor.unref(curProblem).type == 5
      }, common_vendor.unref(curProblem).type == 5 ? {
        Q: common_vendor.o((...args) => common_vendor.unref(inpanswer) && common_vendor.unref(inpanswer)(...args)),
        R: common_vendor.unref(curProblem).textanswer
      } : {}, {
        S: common_vendor.unref(curProblem).openanalysis && (common_vendor.unref(curProblem).type == 1 || common_vendor.unref(curProblem).type == 2 || common_vendor.unref(curProblem).type == 4)
      }, common_vendor.unref(curProblem).openanalysis && (common_vendor.unref(curProblem).type == 1 || common_vendor.unref(curProblem).type == 2 || common_vendor.unref(curProblem).type == 4) ? common_vendor.e({
        T: common_vendor.unref(curProblem).type == 4
      }, common_vendor.unref(curProblem).type == 4 ? {
        U: common_vendor.t(common_vendor.unref(curProblem).right_key == "1" ? "\u6B63\u786E" : "\u9519\u8BEF"),
        V: common_vendor.t(common_vendor.unref(curProblem).radio == "1" ? "\u6B63\u786E" : "\u9519\u8BEF"),
        W: common_vendor.n(common_vendor.unref(curProblem).result == 1 ? "rright" : "rwrong")
      } : {
        X: common_vendor.t(common_vendor.unref(curProblem).right_key),
        Y: common_vendor.t(common_vendor.unref(curProblem).choosed_key)
      }, {
        Z: common_vendor.unref(curProblem).right_key_img
      }, common_vendor.unref(curProblem).right_key_img ? {
        aa: common_vendor.unref(curProblem).right_key_img
      } : {}, {
        ab: common_vendor.t(common_vendor.unref(curProblem).explain)
      }) : {}, {
        ac: common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5
      }, common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5 ? {
        ad: common_vendor.t(common_vendor.unref(curProblem).openanalysis ? "\u9690\u85CF\u89E3\u6790" : "\u67E5\u770B\u89E3\u6790"),
        ae: common_vendor.o((...args) => common_vendor.unref(openana) && common_vendor.unref(openana)(...args)),
        af: common_vendor.unref(currentIndex)
      } : {}, {
        ag: (common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5) && common_vendor.unref(curProblem).openanalysis
      }, (common_vendor.unref(curProblem).type == 3 || common_vendor.unref(curProblem).type == 5) && common_vendor.unref(curProblem).openanalysis ? common_vendor.e({
        ah: common_vendor.unref(curProblem).right_key_img
      }, common_vendor.unref(curProblem).right_key_img ? {
        ai: common_vendor.unref(curProblem).right_key_img
      } : {}, {
        aj: common_vendor.t(common_vendor.unref(curProblem).explain)
      }) : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/pages/aboutQuestion/ChapterTest/ChapterTest.vue"]]);
wx.createPage(MiniProgramPage);
