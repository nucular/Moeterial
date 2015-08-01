(function(ns) {
  var moe = window.moe || {};

  moe.Skin = function() {
    this.elements = [];
    this.settings = {};
    this.meta = {
      General: {
        Name: "Moeterial Skin",
        Author: "Unknown",
        "Version": "latest"
      }
    }
  }

  moe.Skin.fromObject = function(obj) {
    var skin = new moe.Skin();
    var promises = [];

    moe.utils.mergeInto(obj.meta, skin.meta);
    moe.utils.mergeInto(obj.settings, skin.settings);

    for (var i = 0; i < obj.elements.length; i++) {
      promises.push(
        moe.Element.fromPath(path + "/" + obj.elements[i])
          .then(function(el) {
            skin.elements.push(el);
          })
      );
    }

    return $.when.apply(null, promises).then(function() {
      return skin;
    });
  }

  moe.Skin.fromJSON = function(json) {
    return moe.Skin.fromObject(moe.utils.deserialize(json));
  }

  moe.Skin.fromPath = function(path) {
    return $.ajax({
      url: path + "/Skin.json",
      type: "GET",
      dataType: "text"
    }).then(function(json) {
      return moe.Skin.fromJSON(json);
    });
  }

  var proto = moe.Skin.prototype;

  window.moe = moe;
})(window);
