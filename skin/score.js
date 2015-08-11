var out = [];

for (var i = 0; i < 10; i++) {
  out.push(boilerplate(
    svg({
      width: 46, height: 46,
      viewBox: "0 0 46 46"
    })(
      text({
        "font-family": "RobotoBlack",
        "font-size": "46px",
        "fill": "#fff",
        "stroke": "#000",
        "stroke-width": 2,
        "filter": "url(#z-depth1)",
        "x": "50%",
        "y": "40px",
        "text-anchor": "middle"
      })(i)
    )
  ));
}

return out;
