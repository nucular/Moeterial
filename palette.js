var Colour = require("./colour");

var palette = {
  red: {
    p: [
      new Colour("#FFEBEE"), new Colour("#FFCDD2"), new Colour("#EF9A9A"),
      new Colour("#E57373"), new Colour("#EF5350"), new Colour("#F44336"),
      new Colour("#E53935"), new Colour("#D32F2F"), new Colour("#C62828"),
      new Colour("#B71C1C")
    ],
    a: [
      new Colour("#FF8A80"), new Colour("#FF5252"), new Colour("#FF1744"),
      new Colour("#D50000")
    ]
  },
  pink: {
    p: [
      new Colour("#FCE4EC"), new Colour("#F8BBD0"), new Colour("#F48FB1"),
      new Colour("#F06292"), new Colour("#EC407A"), new Colour("#E91E63"),
      new Colour("#D81B60"), new Colour("#C2185B"), new Colour("#AD1457"),
      new Colour("#880E4F")
    ],
    a: [
      new Colour("#FF80AB"), new Colour("#FF4081"), new Colour("#F50057"),
      new Colour("#C51162")
    ]
  },
  purple: {
    p: [
      new Colour("#F3E5F5"), new Colour("#E1BEE7"), new Colour("#CE93D8"),
      new Colour("#BA68C8"), new Colour("#AB47BC"), new Colour("#9C27B0"),
      new Colour("#8E24AA"), new Colour("#7B1FA2"), new Colour("#6A1B9A"),
      new Colour("#4A148C")
    ],
    a: [
      new Colour("#EA80FC"), new Colour("#E040FB"), new Colour("#D500F9"),
      new Colour("#AA00FF")
    ]
  },
  deepPurple: {
    p: [
      new Colour("#EDE7F6"), new Colour("#D1C4E9"), new Colour("#B39DDB"),
      new Colour("#9575CD"), new Colour("#7E57C2"), new Colour("#673AB7"),
      new Colour("#5E35B1"), new Colour("#512DA8"), new Colour("#4527A0"),
      new Colour("#311B92")
    ],
    a: [
      new Colour("#B388FF"), new Colour("#7C4DFF"), new Colour("#651FFF"),
      new Colour("#6200EA")
    ]
  },
  indigo: {
    p: [
      new Colour("#E8EAF6"), new Colour("#C5CAE9"), new Colour("#9FA8DA"),
      new Colour("#7986CB"), new Colour("#5C6BC0"), new Colour("#3F51B5"),
      new Colour("#3949AB"), new Colour("#303F9F"), new Colour("#283593"),
      new Colour("#1A237E")
    ],
    a: [
      new Colour("#8C9EFF"), new Colour("#536DFE"), new Colour("#3D5AFE"),
      new Colour("#304FFE")
    ]
  },
  blue: {
    p: [
      new Colour("#E3F2FD"), new Colour("#BBDEFB"), new Colour("#90CAF9"),
      new Colour("#64B5F6"), new Colour("#42A5F5"), new Colour("#2196F3"),
      new Colour("#1E88E5"), new Colour("#1976D2"), new Colour("#1565C0"),
      new Colour("#0D47A1")
    ],
    a: [
      new Colour("#82B1FF"), new Colour("#448AFF"), new Colour("#2979FF"),
      new Colour("#2962FF")
    ]
  },
  lightBlue: {
    p: [
      new Colour("#E1F5FE"), new Colour("#B3E5FC"), new Colour("#81D4FA"),
      new Colour("#4FC3F7"), new Colour("#29B6F6"), new Colour("#03A9F4"),
      new Colour("#039BE5"), new Colour("#0288D1"), new Colour("#0277BD"),
      new Colour("#01579B")
    ],
    a: [
      new Colour("#80D8FF"), new Colour("#40C4FF"), new Colour("#00B0FF"),
      new Colour("#0091EA")
    ]
  },
  cyan: {
    p: [
      new Colour("#E0F7FA"), new Colour("#B2EBF2"), new Colour("#80DEEA"),
      new Colour("#4DD0E1"), new Colour("#26C6DA"), new Colour("#00BCD4"),
      new Colour("#00ACC1"), new Colour("#0097A7"), new Colour("#00838F"),
      new Colour("#006064")
    ],
    a: [
      new Colour("#84FFFF"), new Colour("#18FFFF"), new Colour("#00E5FF"),
      new Colour("#00B8D4")
    ]
  },
  teal: {
    p: [
      new Colour("#E0F2F1"), new Colour("#B2DFDB"), new Colour("#80CBC4"),
      new Colour("#4DB6AC"), new Colour("#26A69A"), new Colour("#009688"),
      new Colour("#00897B"), new Colour("#00796B"), new Colour("#00695C"),
      new Colour("#004D40")
    ],
    a: [
      new Colour("#A7FFEB"), new Colour("#64FFDA"), new Colour("#1DE9B6"),
      new Colour("#00BFA5")
    ]
  },
  green: {
    p: [
      new Colour("#E8F5E9"), new Colour("#C8E6C9"), new Colour("#A5D6A7"),
      new Colour("#81C784"), new Colour("#66BB6A"), new Colour("#4CAF50"),
      new Colour("#43A047"), new Colour("#388E3C"), new Colour("#2E7D32"),
      new Colour("#1B5E20")
    ],
    a: [
      new Colour("#B9F6CA"), new Colour("#69F0AE"), new Colour("#00E676"),
      new Colour("#00C853")
    ]
  },
  lightGreen: {
    p: [
      new Colour("#F1F8E9"), new Colour("#DCEDC8"), new Colour("#C5E1A5"),
      new Colour("#AED581"), new Colour("#9CCC65"), new Colour("#8BC34A"),
      new Colour("#7CB342"), new Colour("#689F38"), new Colour("#558B2F"),
      new Colour("#33691E")
    ],
    a: [
      new Colour("#CCFF90"), new Colour("#B2FF59"), new Colour("#76FF03"),
      new Colour("#64DD17")
    ]
  },
  lime: {
    p: [
      new Colour("#F9FBE7"), new Colour("#F0F4C3"), new Colour("#E6EE9C"),
      new Colour("#DCE775"), new Colour("#D4E157"), new Colour("#CDDC39"),
      new Colour("#C0CA33"), new Colour("#AFB42B"), new Colour("#9E9D24"),
      new Colour("#827717")
    ],
    a: [
      new Colour("#F4FF81"), new Colour("#EEFF41"), new Colour("#C6FF00"),
      new Colour("#AEEA00")
    ]
  },
  yellow: {
    p: [
      new Colour("#FFFDE7"), new Colour("#FFF9C4"), new Colour("#FFF59D"),
      new Colour("#FFF176"), new Colour("#FFEE58"), new Colour("#FFEB3B"),
      new Colour("#FDD835"), new Colour("#FBC02D"), new Colour("#F9A825"),
      new Colour("#F57F17")
    ],
    a: [
      new Colour("#FFFF8D"), new Colour("#FFFF00"), new Colour("#FFEA00"),
      new Colour("#FFD600")
    ]
  },
  amber: {
    p: [
      new Colour("#FFF8E1"), new Colour("#FFECB3"), new Colour("#FFE082"),
      new Colour("#FFD54F"), new Colour("#FFCA28"), new Colour("#FFC107"),
      new Colour("#FFB300"), new Colour("#FFA000"), new Colour("#FF8F00"),
      new Colour("#FF6F00")
    ],
    a: [
      new Colour("#FFE57F"), new Colour("#FFD740"), new Colour("#FFC400"),
      new Colour("#FFAB00")
    ]
  },
  orange: {
    p: [
      new Colour("#FFF3E0"), new Colour("#FFE0B2"), new Colour("#FFCC80"),
      new Colour("#FFB74D"), new Colour("#FFA726"), new Colour("#FF9800"),
      new Colour("#FB8C00"), new Colour("#F57C00"), new Colour("#EF6C00"),
      new Colour("#E65100")
    ],
    a: [
      new Colour("#FFD180"), new Colour("#FFAB40"), new Colour("#FF9100"),
      new Colour("#FF6D00")
    ]
  },
  deepOrange: {
    p: [
      new Colour("#FBE9E7"), new Colour("#FFCCBC"), new Colour("#FFAB91"),
      new Colour("#FF8A65"), new Colour("#FF7043"), new Colour("#FF5722"),
      new Colour("#F4511E"), new Colour("#E64A19"), new Colour("#D84315"),
      new Colour("#BF360C")
    ],
    a: [
      new Colour("#FF9E80"), new Colour("#FF6E40"), new Colour("#FF3D00"),
      new Colour("#DD2C00")
    ]
  },
  brown: {
    p: [
      new Colour("#EFEBE9"), new Colour("#D7CCC8"), new Colour("#BCAAA4"),
      new Colour("#A1887F"), new Colour("#8D6E63"), new Colour("#795548"),
      new Colour("#6D4C41"), new Colour("#5D4037"), new Colour("#4E342E"),
      new Colour("#3E2723")
    ],
    a: []
  },
  grey: {
    p: [
      new Colour("#FAFAFA"), new Colour("#F5F5F5"), new Colour("#EEEEEE"),
      new Colour("#E0E0E0"), new Colour("#BDBDBD"), new Colour("#9E9E9E"),
      new Colour("#757575"), new Colour("#616161"), new Colour("#424242"),
      new Colour("#212121")
    ],
    a: []
  },
  blueGrey: {
    p: [
      new Colour("#ECEFF1"), new Colour("#CFD8DC"), new Colour("#B0BEC5"),
      new Colour("#90A4AE"), new Colour("#78909C"), new Colour("#607D8B"),
      new Colour("#546E7A"), new Colour("#455A64"), new Colour("#37474F"),
      new Colour("#263238")
    ],
    a: []
  },
  white: {
    p: [
      new Colour("#FFFFFF"), new Colour("#FFFFFF"), new Colour("#FFFFFF"),
      new Colour("#FFFFFF"), new Colour("#FFFFFF"), new Colour("#FFFFFF"),
      new Colour("#FFFFFF"), new Colour("#FFFFFF"), new Colour("#FFFFFF"),
      new Colour("#FFFFFF")
    ],
    a: []
  },
  black: {
    p: [
      new Colour("#000000"), new Colour("#000000"), new Colour("#000000"),
      new Colour("#000000"), new Colour("#000000"), new Colour("#000000"),
      new Colour("#000000"), new Colour("#000000"), new Colour("#000000"),
      new Colour("#000000")
    ],
    a: []
  }
}

for (var i in palette) {
  if (palette.hasOwnProperty(i)) {
    var color = palette[i];
    color.name = i;
    for (var j = 0; j < color.p.length; j++) {
      if (j == 0) color.P50 = color.p[j];
      else color["p" + j*100] = color.p[j];
    }
    for (var j = 0; j < color.a.length; j++) {
      if (j == 0) color.P50 = color.a[j];
      else color["a" + j*100] = color.a[j];
    }
  }
}

module.exports = palette;
