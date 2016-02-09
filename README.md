Moeterial
=========

An osu! skin based on [Material Design](https://www.google.com/design/spec) and
a [Node.js](https://nodejs.org) tool to render it.

Building (moebuild.js)
----------------------

Setting up the environment for offline building is a bit hard right now.
Converting SVGs from Node, including filters and fonts, sucks.

1. `npm install`
2. Go to `node_modules\roboto-fontface\fonts` and install all TTF fonts
  - This is required due to fontconfig being retarded
3. Install [Imagemagick](http://www.imagemagick.org) and make sure that
  `convert` is inside your `PATH`.
4. `node moebuild.js --help`


Packing (moeweb.js)
-------------------

The web interface uses the SVG renderer of the browser, so it doesn't have any
additional dependencies.

1. `npm install`
2. `webpack`

To push a build to the `gh-pages` branch without breaking anything, do the
following git tricks:

To set up a new gh-pages work tree (kept for reference only):

```
git --work-tree dist checkout --orphan -b gh-pages
git --work-tree dist rm -r *
```

To deploy a new build:

```
(git fetch origin)
git checkout gh-pages
webpack
git --work-tree dist add --all
git --work-tree dist commit -m "Build"
git push origin gh-pages
git symbolic-ref HEAD refs/heads/master && git reset --mixed
```
