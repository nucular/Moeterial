var cr = 28;

var w = (cr*2 + 16) / 0.8;
var h = (cr*2 + 43) / 0.8;

return boilerplate(
  svg({
    width: w, height: h,
    viewBox: "0 0 " + w + " " + h
  })(
    circle({
      cx: w - cr - 10, cy: cr + 8,
      r: cr,
      fill: accent.p400.css,
      filter: "url(#z-depth2)"
    }),
    svg({
      xmlns: "http://www.w3.org/2000/svg",
      width: 24, height: 24,
      x: (w - cr - 10) - 12, y: (cr + 8) - 12,
      viewBox: "0 0 24 24"
    })(
      path({
        d: "M0 0h24v24H0z",
        fill: "none"
      }),
      path({
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        fill: themes.dark.text.primary.css
      })
    )
  )
);
