var svg = require("xmgen").svg;

var roboto;
with (svg()) {
  roboto = defs({
    id: "moeterial-roboto"
  })(
    style({type: "text/css"})(
      "@import url('node_modules/roboto-fontface/css/roboto-fontface.css');"
    )
  )
}

module.exports = roboto;
