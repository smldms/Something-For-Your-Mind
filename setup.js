////////////////INFO & FEATURES
let myTitle = "Something For Your Mind";
let present = '<h2>' + myTitle + '<hr>'
let info = '<h3>During the generation process<h/3><h5>Press h to hide this window</br>Press j to display it</h5>'
console.log(myTitle + " | smldms 2022.08"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "BG": bg.name,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let globalSize = 2048;
let cnv;
let pD = 1;
let gen = [];
let nbrAgent = 1;
let maxF = 250

function preload() {}

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  cnv = createCanvas(globalSize, globalSize)
  cnv.parent('fullScreen');
  pixelDensity(pD);
  let hue = fxrandBetween(200, 360)
  colorMode(HSB, hue, 100, 100, 1)
  background(bg.clr);
  myFrame(0, 0, 25, width, height, color(bg.frclr))
  stars()
  dropShad(0, 5, 10, 0, 1)

  push()
  radialGradientFill(0, 0, height / 2, width / 2, height / 2, 0, palette.bgClr[1], palette.bgClr[0])
  noStroke()
  translate(width / 2, height / 2)
  rotate(fxrand() * 360)
  arc(0, 0, width, height, 0, random([QUARTER_PI, HALF_PI, PI]))
  pop()
  push()
  radialGradientFill(0, 0, height / 2, width / 2, height / 2, 0, palette.bgClr[1], palette.bgClr[0])
  noStroke()
  translate(width / 2, height / 2)
  rotate(fxrand() * 360)
  arc(0, 0, width / 1.168, height / 1.168, 0, random([QUARTER_PI, HALF_PI, PI]))
  pop()
  push()
  radialGradientFill(width / 2, height / 2, height / 2, width / 2, height / 28, 0, palette.bgClr[1], palette.bgClr[0])
  noStroke()
  translate(width / 2, height / 2)
  rotate(fxrand() * 360)
  arc(0, 0, width / 1.6128, height / 1.6128, 0, random([HALF_PI, PI, TWO_PI]))
  pop()

  push()
  radialGradientFill(width / 2, height / 2, height / 2, width / 2, height / 2, 0, palette.bgClr[1], palette.bgClr[0])
  noStroke()
  translate(width / 2, height / 2)
  rotate(fxrand() * 360)
  arc(0, 0, width / 2, height / 2, 0, random([QUARTER_PI, HALF_PI, PI, TWO_PI]))
  pop()

  push()
  radialGradientFill(width / 2, height / 2, height / 2, width / 2, height / 2, 0, palette.bgClr[0], palette.bgClr[1])
  noStroke()
  ellipse(width / 2, height / 2, width / 4)
  pop()

  push()
  noStroke()
  fill(0)
  ellipse(width / 2, height / 2, width / 16)
  pop()

  for (let i = 0; i < nbrAgent; i++) {
    gen[i] = new myAgent();
  }
textOn()
}

function draw() {

  blendMode(ADD)
  if (frameCount < maxF) {
    for (let i = 0; i < gen.length; i++) {
      gen[i].show();
    }
  } else {
    postProd();
  }
}

function postProd() {
  document.body.style.cursor = 'default';
  noLoop()
  ellipse(width/2, height/2, )
  grainy(25)
  progressClear();
  myPreview()
  // saver()
  // timer()
}

function stars() {

  for (let i = 0; i < 1000; i++) {
    noStroke()
    fill(bg.frclr)
    ellipse(fxrand() * width, fxrand() * height, fxrand() * width / 500)
  }
}

function textOn() {
  push()
  dropShad(0, 0, 0, 0, 0)
  fill(255)
  blendMode(EXCLUSION)
  textAlign(CENTER, CENTER)
  for (let i = 0; i < 1; i++) {
    // let choiceTxt = ["WEB3","BITCOIN","SEED PHRASE", "COLD WALLET", "METAVERSE", "TEZOS","GENERATIVE", "ARTIFICIAL INTELLIGENCE", "ART", "NFT","TECHNOLOGY", "FUTURE", "SINGULARITY", "BLOCKCHAIN", "CODE", "CRYPTO", "LOVE", "FXHASH"]
    // let txtSize = fxrandBetween(width / 15, width / 15)
    let txtSize = width / 14
    textSize(txtSize);
    drawingContext.filter = 'blur(' + txtSize / 23 + 'px)'
    // text(random(choiceTxt), fxrand() * width, fxrand() * height);
    text("SOMETHING FOR YOUR MIND", width/2, fxrand()*height);
    // text(random(choiceTxt), fxrand()*width, fxrand()*height);
  }
  pop()
}