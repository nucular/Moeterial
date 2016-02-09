var Colour = function(a) {
  this.__defineGetter__("rgb", function() {
    return [this.r, this.g, this.b];
  });
  this.__defineSetter__("rgb", function(a) {
    if (a.constructor == Array && a.length >= 3) {
      this.r = Number(a[0]);
      this.g = Number(a[1]);
      this.b = Number(a[2]);
    } else {
      throw new Error("Invalid rgb colour");
    }
  });

  this.__defineGetter__("rgba", function() {
    return [this.r, this.g, this.b, this.a];
  });
  this.__defineSetter__("rgba", function(a) {
    if (a.constructor == Array && a.length >= 4) {
      this.r = Number(a[0]);
      this.g = Number(a[1]);
      this.b = Number(a[2]);
      this.a = Number(a[3]);
    } else {
      throw new Error("Invalid rgba colour");
    }
  });

  this.__defineGetter__("hex", function() {
    var componentToHex = function(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
  });
  this.__defineSetter__("hex", function(a) {
    if (a.length == 6 || a.length == 7) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
      this.r = parseInt(result[1], 16);
      this.g = parseInt(result[2], 16);
      this.b = parseInt(result[3], 16);
    } else if (a.length == 3 || a.length == 4) {
      var result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(a);
      this.r = parseInt(result[1], 16) * 17;
      this.g = parseInt(result[2], 16) * 17;
      this.b = parseInt(result[3], 16) * 17;
    } else {
      throw new Error("Invalid hex colour");
    }
  });

  this.__defineGetter__("css", function() {
    return "rgba(" + this.rgba.join(", ") + ")";
  });

  this.rgba = [0, 0, 0, 1];

  if (typeof a == "string")
    this.hex = a;
  else if (a.length >= 4)
    this.rgba = a;
  else if (a.length >= 3)
    this.rgb = a;
  else
    throw new Array("Invalid colour constructor");
}

module.exports = Colour;
