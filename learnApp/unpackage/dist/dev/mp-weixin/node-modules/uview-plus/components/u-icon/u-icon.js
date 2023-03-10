"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-icon",
  data() {
    return {};
  },
  emits: ["click"],
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$3],
  computed: {
    uClasses() {
      let classes = [];
      classes.push(this.customPrefix + "-" + this.name);
      if (this.color && common_vendor.index.$u.config.type.includes(this.color))
        classes.push("u-icon__icon--" + this.color);
      return classes;
    },
    iconStyle() {
      let style = {};
      style = {
        fontSize: common_vendor.index.$u.addUnit(this.size),
        lineHeight: common_vendor.index.$u.addUnit(this.size),
        fontWeight: this.bold ? "bold" : "normal",
        top: common_vendor.index.$u.addUnit(this.top)
      };
      if (this.color && !common_vendor.index.$u.config.type.includes(this.color))
        style.color = this.color;
      return style;
    },
    isImg() {
      return this.name.indexOf("/") !== -1;
    },
    imgStyle() {
      let style = {};
      style.width = this.width ? common_vendor.index.$u.addUnit(this.width) : common_vendor.index.$u.addUnit(this.size);
      style.height = this.height ? common_vendor.index.$u.addUnit(this.height) : common_vendor.index.$u.addUnit(this.size);
      return style;
    },
    icon() {
      return common_vendor.icons["uicon-" + this.name] || this.name;
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", this.index);
      this.stop && this.preventEvent(e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.isImg
  }, $options.isImg ? {
    b: _ctx.name,
    c: _ctx.imgMode,
    d: common_vendor.s($options.imgStyle),
    e: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle))
  } : {
    f: common_vendor.t($options.icon),
    g: common_vendor.n($options.uClasses),
    h: common_vendor.s($options.iconStyle),
    i: common_vendor.s(_ctx.$u.addStyle(_ctx.customStyle)),
    j: _ctx.hoverClass
  }, {
    k: _ctx.label !== ""
  }, _ctx.label !== "" ? {
    l: common_vendor.t(_ctx.label),
    m: _ctx.labelColor,
    n: _ctx.$u.addUnit(_ctx.labelSize),
    o: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
    p: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
    q: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
    r: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
  } : {}, {
    s: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    t: common_vendor.n("u-icon--" + _ctx.labelPos)
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6dbbd241"], ["__file", "/Users/appid/\u5C0F\u7A0B\u5E8F\u9879\u76EE/uniapp/\u5B66\u4E60/learnApp/learnApp/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
wx.createComponent(Component);
