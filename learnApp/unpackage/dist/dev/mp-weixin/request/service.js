"use strict";
var common_vendor = require("../common/vendor.js");
var utils_set_get = require("../utils/set_get.js");
let requestDomain = "https://api.xmyjy.net.cn/api/v1/";
var service = {
  _send: function(t) {
    var n = t.data, o = t.method || "POST", a = {
      "app-type": "ios",
      "access-user-token": "",
      "token": ""
    };
    if (!t.login) {
      let token = utils_set_get.t.getToken();
      console.log(6666, token);
      a = {
        "access-user-token": token,
        "app-type": "ios",
        "token": token
      };
    }
    return new Promise((r, i) => {
      common_vendor.index.request({
        method: o,
        url: requestDomain + t.url,
        data: n,
        header: a,
        success: (res) => {
          if (res.data.status != 200) {
            if (res.data.status == 203) {
              common_vendor.index.clearStorage();
              console.log("\u767B\u9646\u8FC7\u671F");
              common_vendor.index.navigateTo({
                url: "/pages/index/index"
              });
            } else {
              common_vendor.index.showToast({
                title: res.data.message || "\u7CFB\u7EDF\u9519\u8BEF",
                mask: true,
                icon: "none"
              });
            }
            i(res);
          } else {
            r(res);
          }
        },
        fail: (err) => {
          common_vendor.index.hideLoading();
          i(err);
        }
      });
    });
  }
};
exports.service = service;
