var palette = require("./palette");
var Colour = require("./colour");

var themes = {
  light: {
    name: "light",
    statusbar: palette.grey.p300,
    appbar: palette.grey.p100,
    background: palette.grey.p50,
    card: palette.white.p50,
    dialog: palette.white.p50,
    text: {
      primary: new Colour([0, 0, 0, 0.87]),
      secondary: new Colour([0, 0, 0, 0.54]),
      hint: new Colour([0, 0, 0, 0.26]),
      disabled: new Colour([0, 0, 0, 0.26]),
      divider: new Colour([0, 0, 0, 0.12])
    }
  },

  dark: {
    name: "dark",
    statusbar: palette.black.p900,
    appbar: palette.grey.p900,
    background: new Colour("#303030"),
    card: palette.grey.p800,
    dialog: palette.grey.p800,
    text: {
      primary: new Colour([255, 255, 255, 1.0]),
      secondary: new Colour([255, 255, 255, 0.70]),
      hint: new Colour([255, 255, 255, 0.30]),
      disabled: new Colour([255, 255, 255, 0.30]),
      divider: new Colour([255, 255, 255, 0.12])
    }
  }
}

module.exports = themes;
