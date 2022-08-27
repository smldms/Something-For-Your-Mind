let bg = {
    n: fxrand(),
    name: "",
    clr: 0,
    frclr: 0,
}

if (bg.n < 0.25) {
    bg.name = "WHITE";
    bg.clr = 255;
    bg.frclr = 0;
}
else {
    bg.name = "BLACK";
    bg.clr = 0;
    bg.frclr = 255;
}