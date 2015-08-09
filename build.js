
// node build.js -a indigo -p indigo
var pjson = require("./package.json");

var xmgen = require("xmgen");
var program = require("commander");

var palette = require("./palette");
var themes = require("./themes");
var shadows = require("./shadows")


function main() {
  program
    .version(pjson.version)
    .option("-t, --theme [dark/light]", "base theme (\"light\")", "light")
    .option("-p, --primary [color]", "primary hue (\"blue\")", "blue")
    .option("-a, --accent [color]", "accent hue (\"pink\")", "pink")

    .option("-i, --in [path]", "input file (\"./skin/skin.json\")", "./skin/skin.json")
    .option("-o, --out [path]", "output file or folder (\"./Moeterial-light-blue-pink.osk\")", String)
    .parse(process.argv)

  program.out = program.out ||
    "./Moeterial-" + program.theme + "-" + program.primary + "-" + program.accent + ".osk";

  if (!palette.hasOwnProperty(program.primary)) {
    console.error("Invalid primary color: " + program.primary);
    var colors = [];
    for (var i in palette)
      colors.push(i);
    console.log("Valid colors are " + colors.join(", "));
  }
  if (!palette.hasOwnProperty(program.accent) || palette[program.accent].a.length == 0) {
    console.error("Invalid accent color: " + program.accent);
    var colors = [];
    for (var i in palette)
      if (palette[i].a.length > 0)
        colors.push(i);
    console.log("Valid colors are " + colors.join(", "));
  }
}

main();
