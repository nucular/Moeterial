var out = [];

for (var i = 0; i < 10; i++) {
  var fillcolor = new Colour(primary.p400.rgba);
  fillcolor.a = 0.7;

  var element = svg({
      width: 220, height: 220,
      viewBox: "0 0 220 220"
    })(
    circle({
      cx: 110, cy: 110,
      r: 64 / 0.8,
      fill: fillcolor.css
    }),
    circle({
      cx: 110, cy: 110,
      r: (64 - 7) / 0.8,
      stroke: "#fff",
      "stroke-width": 5,
      fill: "none",
      filter: "url(#z-depth1)"
    }),

    circle({
      cx: 110, cy: 110,
      r: (64 - 5) / 0.8,
      stroke: "#fff",
      "stroke-width": 10,
      fill: "none"
    })
  );

  if (!args.nonumbers) {
    element(
      text({
        "font-family": "RobotoRegular",
        "font-size": "52px",
        "fill": themes.dark.text.primary.css,
        "x": 110,
        "y": 127,
        "text-anchor": "middle",
        "filter": "url(#z-depth1)"
      })(i)
    );
  }

  out.push(boilerplate(element));
}

return out;
