var palette = require("./palette");

var themes = {
  light: {
    name: "light",
    statusbar: palette.grey.p300,
    appbar: palette.grey.p100,
    background: palette.grey.p50,
    card: palette.white.p50,
    dialog: palette.white.p50,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      hint: "rgba(0, 0, 0, 0.26)",
      disabled: "rgba(0, 0, 0, 0.26)",
      divider: "rgba(0, 0, 0, 0.12)"
    }
  },

  dark: {
    name: "dark",
    statusbar: palette.black.p900,
    appbar: palette.grey.p900,
    background: "#303030",
    card: palette.grey.p800,
    dialog: palette.grey.p800,
    text: {
      primary: "rgba(255, 255, 255, 1.0)",
      secondary: "rgba(255, 255, 255, 0.70)",
      hint: "rgba(255, 255, 255, 0.30)",
      disabled: "rgba(255, 255, 255, 0.30)",
      divider: "rgba(255, 255, 255, 0.12)"
    }
  }
}

module.exports = themes;
