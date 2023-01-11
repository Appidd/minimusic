"use strict";
var request_link = require("../../request/link.js");
let Service = {
  namespaced: true,
  state: {
    banner: [],
    classList: [],
    classItem: {},
    courseClassList: [],
    userInfo: {}
  },
  actions: {
    async ReadyService({ commit }) {
      const ruserInfo = await request_link.apiUrl.getUserInfo();
      let userInfo = ruserInfo.data.data;
      commit("SETUSERINFO", userInfo);
      let rclassList = await request_link.apiUrl.getClassify();
      let classList = rclassList.data.data;
      let rcourseClassList = await request_link.apiUrl.getCourseClass({ class_id: classList[0].id });
      console.log(rcourseClassList);
      let courseClassList = rcourseClassList.data.data;
      commit("SETCOURSECLASSLIST", courseClassList);
      commit("SETCLASSLIST", classList);
      commit("SETCLASSITEM", classList[0]);
    },
    async GetCourceList({ commit }, classItem) {
      console.log(classItem);
      let rcourseClassList = await request_link.apiUrl.getCourseClass({ class_id: classItem.id });
      console.log(rcourseClassList);
      let courseClassList = rcourseClassList.data.data;
      console.log(courseClassList);
      commit("SETCOURSECLASSLIST", courseClassList);
      commit("SETCLASSITEM", classItem);
    }
  },
  mutations: {
    SETCLASSLIST(state, classList) {
      state.classList = classList;
    },
    SETCLASSITEM(state, classItem) {
      state.classItem = classItem;
    },
    SETUSERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SETCOURSECLASSLIST(state, courseClassList) {
      state.courseClassList = courseClassList;
    }
  },
  getters: {}
};
exports.Service = Service;
