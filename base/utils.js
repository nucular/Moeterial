(function(ns) {
  var moe = window.moe || {};
  moe.utils = {};

  moe.utils.mergeInto = function(frm, to) {
    for (var k in frm) {
      if (frm.hasOwnProperty(k)) {
        if (to.hasOwnProperty(k)
          && typeof frm[k] == "object" && typeof to[k] == "object")
          moe.utils.mergeInto(frm[k], to[k]);
        else
          to[k] = frm[k];
      }
    }
  }

  moe.utils.deserialize = function(string) {
    return JSON.parse(string, function(k, v) {
      if (typeof(v) == "string") {
        var fm = v.match(/^function\(([\s\S]*)\) *\{([\s\S]*)\}$/);
        if (fm && fm.length == 3) {
          return new Function(fm[1], fm[2]);
        }
      }
      return v;
    });
  }

  moe.utils.serialize = function(obj) {
    return JSON.stringify(obj, function(k, v) {
      if (typeof(v) == "function")
        return v.toString();
      return v;
    })
  }

  window.moe = moe;
})(window);
