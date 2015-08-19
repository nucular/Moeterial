var out = [];

for (var i = 0; i < 10; i++) {
  if (!args.nonumbers) {
    out.push(boilerplate(
      svg({
        width: 40, height: 64,
        viewBox: "0 0 40 64"
      })(
        text({
          "font-family": "RobotoRegular",
          "font-size": "52px",
          "fill": themes.dark.text.primary.css,
          "x": "50%",
          "y": "49px",
          "text-anchor": "middle",
          "filter": "url(#z-depth1)"
        })(i)
      )
    ));
  } else {
    out.push(boilerplate(
      svg({
        width: 16, height: 16
      })
    ));
  }
}

return out;
