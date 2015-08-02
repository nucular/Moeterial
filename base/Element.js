(function(ns) {
  var moe = window.moe || {};

  moe.Element = function() {
    this.constructor = function(){};
    this.settings = {};
  }

  moe.Element.fromObject = function(obj) {
    var element = new moe.Element();
    element.constructor = obj.constructor;
    moe.utils.mergeInto(obj.settings, element.settings);
  }

  moe.Element.fromJSON = function(json) {
    return moe.Element.fromObject(eval(json));
  }

  moe.Element.fromPath = function(path) {
    return $.ajax({
      url: path,
      type: "GET",
      dataType: "text"
    }).then(function(json) {
      return moe.Element.fromJSON(json);
    });
  }

  var proto = moe.Element.prototype;

  proto.generate = function(scale) {
    this.settings.scale = scale;
    
  }

  window.moe = moe;
})(window);
