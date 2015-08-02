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
    return eval(string);
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
