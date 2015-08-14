return boilerplate(
  svg({
    width: 30, height: 46,
    viewBox: "0 0 30 46"
  })(
    text({
      "font-family": "RobotoBold",
      "font-size": "46px",
      "fill": themes.dark.text.primary.css,
      "stroke": themes.dark.background.css,
      "stroke-width": 2,
      "filter": "url(#z-depth1)",
      "x": "50%",
      "y": "30px",
      "text-anchor": "middle"
    })(",")
  )
);
