return boilerplate(
  svg({
    width: 128, height: 128,
    viewBox: "0 0 128 128"
  })(
    circle({
      cx: 64, cy: 64,
      r: 64 - 5,
      stroke: "none",
      "stroke-width": 5,
      fill: "none",
      filter: "url(#z-depth1)"
    }),
    circle({
      cx: 64, cy: 64,
      r: 64 - 5,
      stroke: theme.text.primary,
      "stroke-width": 10,
      fill: "none",
    })
  )
);
