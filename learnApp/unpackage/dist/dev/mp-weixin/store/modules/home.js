"use strict";
var request_link = require("../../request/link.js");
var utils_set_get = require("../../utils/set_get.js");
let Home = {
  namespaced: true,
  state: {
    banner: [],
    classList: [],
    classItem: {},
    chapterList: [],
    examList: [],
    userInfo: {}
  },
  actions: {
    GetBanner({ commit }) {
      request_link.apiUrl.getBanner({}).then((res) => {
        console.log(res.data.data);
        commit("SETBANNER", res.data.data);
      });
    },
    async CheckClassItem({ commit }) {
      const ruserInfo = await request_link.apiUrl.getUserInfo();
      let userInfo = ruserInfo.data.data;
      commit("SETUSERINFO", userInfo);
      let rclassList = await request_link.apiUrl.getClassify();
      let classList = rclassList.data.data;
      commit("SETCLASSLIST", classList);
      let classItem = utils_set_get.t.getClassItem();
      if (classItem) {
        commit("SETCLASSITEM", classItem);
        let rchapterList = await request_link.apiUrl.getProblemChapter({ class_id: classItem.id });
        const chapterList = rchapterList.data.data;
        chapterList.forEach((item) => {
          item.open = false;
        });
        commit("SETCHAPTARLISR", chapterList);
        let rexamList = await request_link.apiUrl.getExam({ class_id: classItem.id });
        const examList = rexamList.data.data;
        commit("SETEXAMLIST", examList);
      } else {
        let classItem2 = classList[0].children[0];
        commit("SETCLASSITEM", classItem2);
        utils_set_get.t.setClassItem(classItem2);
        let rchapterList = await request_link.apiUrl.getProblemChapter({ class_id: classList[0].children[0].id });
        const chapterList = rchapterList.data.data;
        chapterList.forEach((item) => {
          item.open = false;
        });
        commit("SETCHAPTARLISR", chapterList);
        let rexamList = await request_link.apiUrl.getExam({ class_id: classList[0].children[0].id });
        const examList = rexamList.data.data;
        commit("SETEXAMLIST", examList);
        console.log(rclassList, classList, rchapterList);
      }
    }
  },
  mutations: {
    SETBANNER(state, banner) {
      state.banner = banner;
    },
    SETCLASSLIST(state, classList) {
      state.classList = classList;
    },
    SETCLASSITEM(state, classItem) {
      state.classItem = classItem;
    },
    SETCHAPTARLISR(state, chapterList) {
      state.chapterList = chapterList;
    },
    SETEXAMLIST(state, examList) {
      state.examList = examList;
    },
    SETUSERINFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  getters: {}
};
exports.Home = Home;
