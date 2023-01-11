"use strict";
var common_vendor = require("../../common/vendor.js");
var request_link = require("../../request/link.js");
var utils_set_get = require("../../utils/set_get.js");
let Global = {
  namespaced: true,
  state: {
    showIndexBtn: false,
    userInfo: {},
    yearlist: [],
    daylist: [],
    day: "0",
    year: "0"
  },
  actions: {
    async Login({ commit }) {
      let code = "";
      let token = "";
      await new Promise((resolve, reject) => {
        common_vendor.index.login({
          provider: "weixin",
          onlyAuthorize: true,
          success: function(loginRes) {
            console.log(loginRes);
            code = loginRes.code;
            resolve(code);
          },
          fail() {
            reject();
          }
        });
      });
      const apiGetToken = await request_link.apiUrl.loginWX({ code, mobile: "" });
      token = apiGetToken.data.data.token;
      utils_set_get.t.setToken(token);
      console.log(code, apiGetToken);
      commit("SETINDEXBTN");
    },
    async GetUserInfo({ commit }) {
      const ruserInfo = await request_link.apiUrl.getUserInfo();
      let userInfo = ruserInfo.data.data;
      commit("SETUSERINFO", userInfo);
    },
    async GetDate({ commit }) {
      let originlist = await request_link.apiUrl.getDate();
      const list = originlist.data.data;
      var yearlist = [];
      var daylist = [];
      list.forEach((item) => {
        yearlist.push(item.exam_date);
        daylist.push(item.day);
      });
      commit("SETYEARLIST", yearlist);
      commit("SETDAYLIST", daylist);
      commit("SETDAY", daylist[0]);
      commit("SETYEAR", yearlist[0]);
    }
  },
  mutations: {
    SETINDEXBTN(state) {
      state.showIndexBtn = true;
    },
    SETUSERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SETYEARLIST(state, yearlist) {
      state.yearlist = yearlist;
    },
    SETDAYLIST(state, daylist) {
      state.daylist = daylist;
    },
    SETDAY(state, day) {
      state.day = day;
    },
    SETYEAR(state, year) {
      state.year = year;
    },
    CHANGETIME(state, index) {
      console.log(index);
      state.year = state.yearlist[index];
      state.day = state.daylist[index];
    }
  },
  getters: {}
};
exports.Global = Global;
