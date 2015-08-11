Moeterial
=========

An osu! skin based on [Material Design](https://www.google.com/design/spec) and
a [Node.js](https://nodejs.org) tool to render it.

Building
--------

Setting up the environment is a bit hard right now. Converting SVGs from Node,
including filters and fonts, sucks.

1. `npm install`
2. Go to `node_modules\roboto-fontface\fonts` and install all TTF fonts
  - This is required due to fontconfig being retarded
3. Get a binary of rsvg-convert and drop it in your PATH or `.`
4. `node build.js --help`
