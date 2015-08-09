var svg = require("xmgen").svg;

var shadows;
with (svg()) {
  shadows = defs({
    "id": "material-shadows"
  })(
    filter({
      "style": "color-interpolation-filters:sRGB;",
      "id": "z-depth1",
      "x": "-10%", "y": "-10%",
      "width": "120%", "height": "120%"
    })(
      feFlood({
        "flood-opacity": "0.12",
        "flood-color": "rgb(0,0,0)",
        "result": "flood"
      }),
      feComposite({
        "in": "flood",
        "in2": "SourceGraphic",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "1.5",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "1",
        "result": "offset"
      }),
      feComposite({
        "in": "SourceGraphic",
        "in2": "offset",
        "operator": "over",
        "result": "fbSourceGraphic"
      }),
      feColorMatrix({
        "result": "fbSourceGraphicAlpha",
        "in": "fbSourceGraphic",
        "values": "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
      }),
      feFlood({
        "flood-opacity": "0.24",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "in": "fbSourceGraphic"
      }),
      feComposite({
        "in2": "fbSourceGraphic",
        "in": "flood",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "1",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "1",
        "result": "offset"
      }),
      feComposite({
        "in2": "offset",
        "in": "fbSourceGraphic",
        "operator": "over",
        "result": "composite2"
      })
    ),
    filter({
      "style": "color-interpolation-filters:sRGB;",
      "id": "z-depth2",
      "x": "-10%", "y": "-20%",
      "width": "120%", "height": "140%"
    })(
      feFlood({
        "flood-opacity": "0.16",
        "flood-color": "rgb(0,0,0)",
        "result": "flood"
      }),
      feComposite({
        "in": "flood",
        "in2": "SourceGraphic",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "3",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "3",
        "result": "offset"
      }),
      feComposite({
        "in": "SourceGraphic",
        "in2": "offset",
        "operator": "over",
        "result": "fbSourceGraphic"
      }),
      feColorMatrix({
        "result": "fbSourceGraphicAlpha",
        "in": "fbSourceGraphic",
        "values": "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
      }),
      feFlood({
        "flood-opacity": "0.23",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "in": "fbSourceGraphic"
      }),
      feComposite({
        "in2": "fbSourceGraphic",
        "in": "flood",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "3",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "3",
        "result": "offset"
      }),
      feComposite({
        "in2": "offset",
        "in": "fbSourceGraphic",
        "operator": "over",
        "result": "composite2"
      })
    ),
    filter({
      "style": "color-interpolation-filters:sRGB;",
      "id": "z-depth3",
      "x": "-40%", "y": "-50%",
      "width": "180%", "height": "200%"
    })(
      feFlood({
        "flood-opacity": "0.19",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "id": "feFlood4377"
      }),
      feComposite({
        "in": "flood",
        "in2": "SourceGraphic",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "10",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "10",
        "result": "offset"
      }),
      feComposite({
        "in": "SourceGraphic",
        "in2": "offset",
        "operator": "over",
        "result": "fbSourceGraphic"
      }),
      feColorMatrix({
        "result": "fbSourceGraphicAlpha",
        "in": "fbSourceGraphic",
        "values": "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
      }),
      feFlood({
        "flood-opacity": "0.23",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "in": "fbSourceGraphic"
      }),
      feComposite({
        "in2": "fbSourceGraphic",
        "in": "flood",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "3",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "6",
        "result": "offset"
      }),
      feComposite({
        "in2": "offset",
        "in": "fbSourceGraphic",
        "operator": "over",
        "result": "composite2"
      })
    ),
    filter({
      "style": "color-interpolation-filters:sRGB;",
      "id": "z-depth4",
      "x": "-50%", "y": "-60%",
      "width": "200%", "height": "240%"
    })(
      feFlood({
        "flood-opacity": "0.25",
        "flood-color": "rgb(0,0,0)",
        "result": "flood"
      }),
      feComposite({
        "in": "flood",
        "in2": "SourceGraphic",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "14",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "14",
        "result": "offset"
      }),
      feComposite({
        "in": "SourceGraphic",
        "in2": "offset",
        "operator": "over",
        "result": "fbSourceGraphic"
      }),
      feColorMatrix({
        "result": "fbSourceGraphicAlpha",
        "in": "fbSourceGraphic",
        "values": "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
      }),
      feFlood({
        "flood-opacity": "0.22",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "in": "fbSourceGraphic"
      }),
      feComposite({
        "in2": "fbSourceGraphic",
        "in": "flood",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "5",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "10",
        "result": "offset"
      }),
      feComposite({
        "in2": "offset",
        "in": "fbSourceGraphic",
        "operator": "over",
        "result": "composite2"
      })
    ),
    filter({
      "style": "color-interpolation-filters:sRGB;",
      "id": "z-depth5",
      "x": "-70%", "y": "-80%",
      "width": "240%", "height": "290%"
    })(
      feFlood({
        "flood-opacity": "0.3",
        "flood-color": "rgb(0,0,0)",
        "result": "flood"
      }),
      feComposite({
        "in": "flood",
        "in2": "SourceGraphic",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "19",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "19",
        "result": "offset"
      }),
      feComposite({
        "in": "SourceGraphic",
        "in2": "offset",
        "operator": "over",
        "result": "fbSourceGraphic"
      }),
      feColorMatrix({
        "result": "fbSourceGraphicAlpha",
        "in": "fbSourceGraphic",
        "values": "0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
      }),
      feFlood({
        "flood-opacity": "0.22",
        "flood-color": "rgb(0,0,0)",
        "result": "flood",
        "in": "fbSourceGraphic"
      }),
      feComposite({
        "in2": "fbSourceGraphic",
        "in": "flood",
        "operator": "in",
        "result": "composite1"
      }),
      feGaussianBlur({
        "in": "composite",
        "stdDeviation": "6",
        "result": "blur"
      }),
      feOffset({
        "dx": "0",
        "dy": "15",
        "result": "offset"
      }),
      feComposite({
        "in2": "offset",
        "in": "fbSourceGraphic",
        "operator": "over",
        "result": "composite2"
      })
    )
  );
}

module.exports = shadows;
