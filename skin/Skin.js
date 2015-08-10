return {
  General: {
    Name: "Moetorial " + pjson.version
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
    SliderStyle: 2, // 1: segmented, 2: smooth, 3: gradient
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
    // Combos (1-5)
    Combo1: "220,220,220",
    Combo2: "220,220,220",
    // Menus
    SongSelectActiveText: "0,0,0",
    SongSelectInactiveText: "255,255,255",
    MenuGlow: "0,78,155" // visualization bar (supporters only)
  },

  Elements: {
    "score.js": "score-%n"
  }
};
