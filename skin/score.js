var out = [];

for (var i = 0; i < 3; i++) {
  out.push(boilerplate(
    svg({
      width: 46, height: 46,
      viewBox: "0 0 46 46"
    })(
      rect({
        "x": 0, "y": 0,
        "width": 46, "height": 46,
        fill: "#f00"
      }),
      text({
        "font-family": "RobotoBlack",
        "font-size": "46px",
        "fill": "#fff",
        "filter": "url(#z-depth1)",
        "x": "50%",
        "y": "46px",
        "text-anchor": "middle"
      })(i)
    )
  ));
}

return out;
