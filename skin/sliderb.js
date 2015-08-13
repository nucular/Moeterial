return boilerplate(
  svg({
    width: 128, height: 128,
    viewBox: "0 0 128 128"
  })(
    circle({
      cx: 64, cy: 64,
      r: 64 - 7,
      stroke: accent.a200.css,
      "stroke-width": 5,
      fill: "none",
      filter: "url(#z-depth1)"
    }),
    circle({
      cx: 64, cy: 64,
      r: 64 - 5,
      stroke: accent.a200.css,
      "stroke-width": 10,
      fill: "none"
    })
  )
);
