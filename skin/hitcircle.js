return boilerplate(
  svg({
    width: 128, height: 128,
    viewBox: "0 0 128 128"
  })(
    circle({
      cx: 64, cy: 64,
      r: 64,
      fill: "rgba(255, 255, 255, 0.7)"
    }),
    circle({
      cx: 64, cy: 64,
      r: 64 - 7,
      stroke: "#fff",
      "stroke-width": 5,
      fill: "none",
      filter: "url(#z-depth1)"
    })
  )
);
