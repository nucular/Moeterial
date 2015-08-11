return boilerplate(
  svg({
    width: 128, height: 128,
    viewBox: "0 0 128 128"
  })(
    circle({
      cx: 64, cy: 64,
      r: 64 - 4,
      fill: "#fff"
    })
  )
);
