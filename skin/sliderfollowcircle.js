return boilerplate(
  svg({
    width: 259, height: 259,
    viewBox: "0 0 259 259"
  })(
    circle({
      cx: 259 / 2, cy: 259 / 2,
      r: 259 / 2 - 4,
      stroke: accent.a400.css,
      "stroke-width": 8,
      fill: "none"
    })
  )
);
