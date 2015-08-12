return {
  General: {
    Name: "Moeterial " + pjson.version
      + " " + theme.name + "-" + primary.name+ "-" + accent.name,
    Author: "nucular and contributors",
    Version: "latest",

    // Cursor
    CursorRotate: 0,
    CursorTrailRotate: 0,
    CursorExpand: 1,
    CursorCentre: 1, // 0: top-left, 1: center
    // Sliders
    SliderBallFlip: 0, // for reverse sliders
    SliderBallFrames: 1,
    AllowSliderBallTint: 1, // depending on slider combo colour
    SliderStyle: 3, // 1: segmented, 2: smooth, 3: gradient
    // Spinners
    SpinnerFrequencyModulate: 1,
    SpinnerFadePlayfield: 0,
    SpinnerNoBlink: 0, // don't blink the last spinner bar
    // Combo bursts
    //CustomComboBurstSounds: // bursts with sounds
    //ComboBurstRandom: 0,
    // Misc
    HitCircleOverlayAboveNumber: 0,
    AnimationFramerate: -1
  },

  Colours: {
    // Cursor
    StarBreakAdditive: "255,182,193", // cursor particle colour
    // Sliders
    SliderBorder: "100,100,100",
    SliderBall: "2,170,255",
    // Spinners
    SpinnerApproachCircle: "200,200,255",
    // Combos (1-8)
    Combo1: primary.p400.rgba.join(","),
    Combo2: primary.p500.rgba.join(","),
    Combo3: primary.p600.rgba.join(","),
    Combo4: primary.p700.rgba.join(","),
    // Menus
    SongSelectActiveText: "0,0,0",
    SongSelectInactiveText: "255,255,255",
    MenuGlow: "0,78,155" // visualization bar (supporters only)
  },

  Elements: {
    "score.js": "score-%n",
    "default.js": "default-%n",
    "hitcircle.js": "hitcircle",
    "hitcircleoverlay.js": "hitcircleoverlay",
    "approachcircle.js": "approachcircle",
    "menu-back.js": "menu-back"
  }
};
