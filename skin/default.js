var out = [];

for (var i = 0; i < 10; i++) {
  out.push(boilerplate(
    svg({
      width: 40, height: 64,
      viewBox: "0 0 40 52"
    })(
      text({
        "font-family": "RobotoRegular",
        "font-size": "52px",
        "fill": themes.dark.text.primary.css,
        "x": "50%",
        "y": "44px",
        "text-anchor": "middle",
        "filter": "url(#z-depth1)"
      })(i)
    )
  ));
}

return out;
