(function(ns) {
  var moe = window.moe || {};

  moe.Element = function() {
    this.constructor = function(){};
    this.settings = {};
  }

  moe.Element.fromPath = function(path) {
    var element = new moe.Element();

    return $.ajax({
      url: path,
      type: "GET",
      dataType: "text"
    }).then(function(json) {
      var obj = moe.utils.deserialize(json);

      element.constructor = obj.constructor;
      moe.utils.mergeInto(obj.settings, element.settings);
    });
  }

  window.moe = moe;
})(window);
