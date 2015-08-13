
// node build.js --install
var pjson = require("./package.json");
var fs = require("fs");
var path = require("path");

var Q = require("q");
var Qfs = require("q-io/fs");
var xmgen = require("xmgen");
var args = require("commander");
var childprocess = require("child_process");
var archiver = require("archiver");

var Colour = require("./colour");
var palette = require("./palette");
var themes = require("./themes");
var shadows = require("./shadows");

var theme = themes.light;
var primary = palette.blue;
var accent = palette.pink;

function boilerplate(svg) {
  svg.xmlns = "http://www.w3.org/2000/svg";
  svg["xmlns:xlink"] = "http://www.w3.org/1999/xlink";

  svg._children.unshift(shadows);

  return xmgen.Element()(
    xmgen.Element("?xml", {version: "1.0", encoding: "UTF-8"}),
    svg
  );
}

function evaluateFile(filename, withsvg) {
  return Q.nfcall(fs.readFile, filename, {
    encoding: "utf-8",
    flag: "r"
  }).then(function(data) {
    if (withsvg) {
      data = "with (xmgen.svg()) {\n" + data + "\n}";
    }

    try {
      // TODO: Figure out a better way to pass this junk
      var f = new Function(
        "theme", "primary", "accent",
        "palette", "themes",
        "Colour", "xmgen", "args", "pjson",
        "boilerplate", data
      ).bind(this);

      var r = f(
        theme, primary, accent,
        palette, themes,
        Colour, xmgen, args, pjson,
        boilerplate
      );
    } catch (e) {
      console.error(e.stack);
      throw e;
    }

    return r;
  });
}

function writeSkinINI(skin, filename) {
  var ini = "";
  for (i in skin) {
    if (!skin.hasOwnProperty(i)
      || i == "Elements"
      || typeof skin[i] != "object") {
      continue;
    }
    ini += "[" + i + "]\r\n";
    for (j in skin[i])
      ini += j + ": " + skin[i][j].toString() + "\r\n";
  }

  return Qfs.write(filename, ini);
}

function writeSkinElement(el, svgfile, file1x, file2x) {
  var svg = el.toString();

  // fuck it
  if (!args.force
    && fs.existsSync(svgfile)
    && fs.readFileSync(svgfile, {encoding: "utf-8"}) == svg) {
    console.log("skipping", svgfile);
    return;
  }

  return Qfs.write(svgfile, svg)
    .then(function() {
      return Q.all([
        Q.nfcall(
          childprocess.exec,
          "rsvg-convert -o " + file1x + " " + svgfile
        ).then(function(stdout, stderr) {
          process.stdout.write(stdout.join("\n").trim());
          console.log(file1x, "done");
        }),
        Q.nfcall(
          childprocess.exec,
          "rsvg-convert -z 2 -o " + file2x + " " + svgfile
        ).then(function(stdout, stderr) {
          process.stdout.write(stdout.join("\n").trim());
          console.log(file2x, "done");
        })
      ]);
    });
}

function getStartCommand() {
  switch (process.platform) { 
    case "darwin": return "open";
    case "win32": return "start";
    case "win64": return "start";
    default: return "xdg-open";
  }
}

function main() {
  args
    .version(pjson.version)
    .option("-t, --theme [dark/light]", "base theme (\"light\")", "light")
    .option("-p, --primary [color]", "primary hue (\"blue\")", "blue")
    .option("-a, --accent [color]", "accent hue (\"pink\")", "pink")

    .option("-i, --in [path]", "input file (\"./skin/Skin.js\")", "./skin/Skin.js")
    .option("-o, --out [path]", "output file (\"./Moeterial-light-blue-pink.osk\")", String)
    .option("--install", "launch output file after building", false)
    .option("--force", "rebuild and render files even if not modified", false)
    .parse(process.argv);

  args.out = args.out || "./Moeterial-" + pjson.version + "-"
      + args.theme + "-" + args.primary + "-" + args.accent + ".osk";

  if (!themes.hasOwnProperty(args.theme)) {
    console.error("Invalid theme: " + args.theme);
    var t = [];
    for (var i in themes)
      t.push(i);
    console.log("Valid themes are " + t.join(", "));
  }
  if (!palette.hasOwnProperty(args.primary)) {
    console.error("Invalid primary color: " + args.primary);
    var c = [];
    for (var i in palette)
      c.push(i);
    console.log("Valid colors are " + c.join(", "));
  }
  if (!palette.hasOwnProperty(args.accent) || palette[args.accent].a.length == 0) {
    console.error("Invalid accent color: " + args.accent);
    var c = [];
    for (var i in palette)
      if (palette[i].a.length > 0)
        c.push(i);
    console.log("Valid colors are " + c.join(", "));
  }

  theme = themes[args.theme];
  primary = palette[args.primary];
  accent = palette[args.accent];

  var indir = path.dirname(args.in);
  var outdir = "./build";
  var name = path.basename(args.out, path.extname(args.out));

  Qfs.exists(outdir)
    .then(function(exists) {
      if (!exists)
        return Qfs.makeDirectory(outdir);
    })
    .then(function() { return evaluateFile(args.in); })
    .then(function(skin) {
      var promises = [
        writeSkinINI(skin, path.join(outdir, "skin.ini"))
      ];

      Object.keys(skin.Elements).forEach(function(i) {
        var o = skin.Elements[i];

        promises.push(
          evaluateFile(path.join(indir, i), true)
          .then(function(el) {
            
            if (el.constructor == Array) {

              return el.reduce(function(p, v, j) {
                return p.then(function() {
                  var or = o.replace(/%n/gi, j);
                  return writeSkinElement(
                    v,
                    path.join(outdir, or + ".svg"),
                    path.join(outdir, or + ".png"),
                    path.join(outdir, or + "@2x.png")
                  );
                });
              }, Q());

            } else {
              
              return writeSkinElement(
                el,
                path.join(outdir, o + ".svg"),
                path.join(outdir, o + ".png"),
                path.join(outdir, o + "@2x.png")
              );

            }
          })
        );
      });

      return Q.allSettled(promises);
    })

    .then(function() {
      var deferred = Q.defer();
      console.log("Archiving to", args.out);

      var archive = archiver.create("zip", {});
      var output = fs.createWriteStream(args.out);

      output.on("finish", function() {
        deferred.resolve();
      })
      archive.on("finish", function() {
        console.log(archive.pointer() + " total bytes");
      });
      archive.on("error", function(e) {
        throw e;
      });

      archive.pipe(output);
      archive.bulk([
        {expand: true, cwd: outdir, src: "*.png"},
        {expand: true, cwd: indir, src: "*.wav"},
        {expand: true, cwd: outdir, src: "skin.ini"}
      ]);
      archive.finalize();

      return deferred.promise;
    })

    .then(function() {
      if (args.install) {
        console.log("Installing...")
        childprocess.exec(getStartCommand() + " " + args.out);
      }
    })

    .fail(function(e) {
      console.error(e.stack);
    });
}

main();
