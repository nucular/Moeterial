var themes = require("./themes");
var palette = require("./palette");

function Skin() {
  this.theme = themes.light;
  this.primary = palette.blue;
  this.accent = palette.pink;

  this.meta = {};
  this.elements = {};
}
var proto = Skin.prototype;

proto.loadMeta = function(js) {
  var func = new Function(js).bind(this);
  this.meta = func();

  for (var k in this.meta.Elements) {
    if (!this.meta.Elements.hasOwnProperty(k)) continue;

    this.elements[k] = new Function("skin", js)(this);
  }
}

module.exports = Skin;
