return boilerplate(
  svg({
    width: 32, height: 32,
    viewBox: "0 0 32 32"
  })(
    circle({
      cx: 16, cy: 16,
      r: 5,
      fill: accent.a400.css,
      filter: "url(#z-depth1)"
    })
  )
);
