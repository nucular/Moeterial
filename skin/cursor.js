return boilerplate(
  svg({
    width: 76, height: 76,
    viewBox: "0 0 76 76"
  })(
    circle({
      cx: 38, cy: 38,
      r: 28 - 3,
      stroke: "#fff",
      "stroke-width": 6,
      fill: "none",
      filter: "url(#z-depth2)"
    })
  )
);
