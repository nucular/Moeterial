return boilerplate(
  svg({
    width: 126, height: 126,
    viewBox: "0 0 126 126"
  })(
    circle({
      cx: 63, cy: 63,
      r: 63 - 2,
      stroke: accent.a400.css,
      "stroke-width": 4,
      fill: "none"
    })
  )
);
