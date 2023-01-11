"use strict";
var common_vendor = require("../../common/vendor.js");
var request_link = require("../../request/link.js");
let TestExam = {
  namespaced: true,
  state: {
    currentIndex: 0,
    problemList: []
  },
  actions: {
    getChapterProblem({ commit }, id) {
      request_link.apiUrl.getChapterProblem({ chapter_id: id }).then((res) => {
        console.log(res);
        const problemList = res.data.data;
        problemList.forEach((item) => {
          item.choosedList = [], item.answerd = false, item.openanalysis = false, item.right_keyList = item.right_key.split(""), item.result = 3, item.textanswer = "";
        });
        commit("SETPROBLEMLIST", problemList);
        commit("RESETINDEX");
      });
    },
    getExamProblem({ commit }, id) {
      request_link.apiUrl.getExamProblem({ id }).then((res) => {
        console.log(res);
        const problemList = res.data.data;
        problemList.forEach((item) => {
          item.choosedList = [], item.answerd = false, item.openanalysis = false, item.right_keyList = item.right_key.split(""), item.result = 3, item.textanswer = "";
        });
        commit("SETPROBLEMLIST", problemList);
        commit("RESETINDEX");
      });
    }
  },
  mutations: {
    SETPROBLEMLIST(state, problemlist) {
      state.problemList = problemlist;
    },
    ADDINDEX(state) {
      state.currentIndex += 1;
    },
    SUBINDEX(state) {
      state.currentIndex -= 1;
    },
    RESETINDEX(state) {
      state.currentIndex = 0;
    },
    SETINDEX(state, index) {
      state.currentIndex = index;
    },
    RESETPONE(state, chooseanswer) {
      console.log(chooseanswer);
      const problemList = state.problemList;
      const currentIndex = state.currentIndex;
      problemList[currentIndex].choosedList.splice(0, 1, chooseanswer);
      problemList[currentIndex].answerd = true;
      problemList[currentIndex].openanalysis = true;
      problemList[currentIndex].choosed_key = chooseanswer;
      problemList[currentIndex].result = problemList[currentIndex].choosed_key == problemList[currentIndex].right_key ? 1 : 2;
      if (problemList[currentIndex].result == 2) {
        common_vendor.index.vibrateShort({});
      } else {
        state.currentIndex = currentIndex == problemList.length - 1 ? currentIndex : currentIndex + 1;
      }
    },
    RESETPSOME(state, chooseanswer) {
      const problemList = state.problemList;
      const currentIndex = state.currentIndex;
      if (problemList[currentIndex].choosedList.includes(chooseanswer)) {
        let index = problemList[currentIndex].choosedList.findIndex((item) => item == chooseanswer);
        problemList[currentIndex].choosedList.splice(index, 1);
        if (problemList[currentIndex].choosedList.length == 0) {
          problemList[currentIndex].answerd = false;
        }
      } else {
        problemList[currentIndex].choosedList.push(chooseanswer);
        problemList[currentIndex].answerd = true;
      }
      if (problemList[currentIndex].right_keyList.includes(chooseanswer)) {
        if (problemList[currentIndex].choosedList.length == problemList[currentIndex].right_keyList.length) {
          problemList[currentIndex].answerd = true;
          problemList[currentIndex].openanalysis = true;
          problemList[currentIndex].result = 1;
          problemList[currentIndex].choosed_key = problemList[currentIndex].choosedList.join("");
        }
      } else {
        problemList[currentIndex].answerd = true;
        problemList[currentIndex].openanalysis = true;
        problemList[currentIndex].result = 2;
        problemList[currentIndex].choosed_key = problemList[currentIndex].choosedList.join("");
      }
      if (problemList[currentIndex].result == 2) {
        common_vendor.index.vibrateShort({});
      } else if (problemList[currentIndex].result == 1) {
        state.currentIndex = currentIndex == problemList.length - 1 ? currentIndex : currentIndex + 1;
      }
    },
    RESETTK(state, answer) {
      console.log(answer);
      const problemList = state.problemList;
      const currentIndex = state.currentIndex;
      problemList[currentIndex].textanswer = answer;
      if (problemList[currentIndex].textanswer != "") {
        problemList[currentIndex].answerd = true;
      }
    },
    RESETRADIO(state, radio) {
      const problemList = state.problemList;
      const currentIndex = state.currentIndex;
      console.log(problemList[currentIndex]);
      problemList[currentIndex].radio = radio;
      problemList[currentIndex].answerd = true;
      problemList[currentIndex].result = problemList[currentIndex].right_key == radio ? 1 : 2;
      problemList[currentIndex].openanalysis = true;
      if (problemList[currentIndex].result == 2) {
        common_vendor.index.vibrateShort({});
      }
    },
    CHANGEAN(state, index) {
      const problemList = state.problemList;
      state.problemList[index].openanalysis = !problemList[index].openanalysis;
    }
  },
  getters: {
    curProblem(state) {
      const problemList = state.problemList;
      const currentIndex = state.currentIndex;
      return problemList[currentIndex];
    },
    persent(state) {
      let answerNumber = 0, rightNumber = 0;
      state.problemList.forEach((item) => {
        var right_keyList = item.right_key.split("");
        if (item.answerd) {
          answerNumber += 1;
          if (item.type == 4) {
            if (item.right_key == item.radio) {
              item.result = 1;
              rightNumber += 1;
            } else {
              item.result = 2;
            }
          } else if (item.type == 3) {
            item.result = 1;
            rightNumber += 1;
          } else {
            item.result = right_keyList.length === item.choosedList.length && right_keyList.sort().toString() === item.choosedList.sort().toString() ? 1 : 2;
            if (item.result == 1) {
              rightNumber += 1;
            }
          }
        } else {
          item.result = 3;
        }
      });
      return (rightNumber / answerNumber * 100).toFixed(2);
    }
  }
};
exports.TestExam = TestExam;
