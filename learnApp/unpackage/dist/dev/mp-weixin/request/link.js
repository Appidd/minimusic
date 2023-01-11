"use strict";
var request_service = require("./service.js");
let _send = request_service.service._send;
let apiUrl = {
  loginWX(t) {
    return _send({
      url: "wx_mini_new_login",
      method: "POST",
      login: 1,
      data: t
    });
  },
  getUserInfo(t) {
    return _send({
      url: "getUserInfo",
      method: "GET",
      login: 0,
      data: t
    });
  },
  editUserInfo(t) {
    return _send({
      url: "editUserInfo",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getBanner(t) {
    return _send({
      url: "getBanner",
      method: "GET",
      login: 1,
      data: t
    });
  },
  getClassify(t) {
    return _send({
      url: "getClassify",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getProblemChapter(t) {
    return _send({
      url: "getProblemChapter",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getChapterProblem(t) {
    return _send({
      url: "getChapterProblem",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getExam(t) {
    return _send({
      url: "getExam",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getExamProblem(t) {
    return _send({
      url: "getExamProblem",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getCourseClass(t) {
    return _send({
      url: "getCourseClass",
      method: "GET",
      login: 0,
      data: t
    });
  },
  noteReport(t) {
    return _send({
      url: "noteReport",
      method: "POST",
      login: 0,
      data: t
    });
  },
  addNote(t) {
    return _send({
      url: "addNote",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getNoteList(t) {
    return _send({
      url: "getNoteList",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getDate(t) {
    return _send({
      url: "getDate",
      method: "GET",
      login: 1,
      data: t
    });
  },
  getCourseList(t) {
    return _send({
      url: "getCourseList",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getData(t) {
    return _send({
      url: "getData",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getDataDetails(t) {
    return _send({
      url: "getDataDetails",
      method: "GET",
      login: 0,
      data: t
    });
  },
  getErrorTrainProblem(t) {
    return _send({
      url: "getErrorTrainProblem",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getMyErrorExamLog(t) {
    return _send({
      url: "getMyErrorExamLog",
      method: "POST",
      login: 0,
      data: t
    });
  },
  delNote(t) {
    return _send({
      url: "delNote",
      method: "POST",
      login: 0,
      data: t
    });
  },
  upImage(t) {
    return _send({
      url: "upImage",
      method: "POST",
      login: 1,
      data: t
    });
  },
  subExamResult(t) {
    return _send({
      url: "subExamResult",
      method: "POST",
      login: 0,
      data: t
    });
  },
  subTrainResult(t) {
    return _send({
      url: "subTrainResult",
      method: "POST",
      login: 0,
      data: t
    });
  },
  getCourseVideo(t) {
    return _send({
      url: "getCourseVideo",
      method: "GET",
      login: 0,
      data: t
    });
  }
};
exports.apiUrl = apiUrl;
