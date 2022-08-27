let a = fxrand();
let h = fxrand() * 360;
let s = fxrand() * 100;
let b = fxrand() * 100;
class myAgent {
  constructor() {
    this.NORTH = 0;
    this.EAST = 1;
    this.SOUTH = 2;
    this.WEST = 3;
    this.direction = 16
    // this.direction = floor(fxrandBetween(1, 3))
    this.posX = width / 2;
    this.posY = height / 2
    this.posXcross = width / 2
    this.posYcross = height / 2
    // this.stepSize = fxrandBetween(50, 150);
    this.stepSize = 50
    this.minLenght = 1;
    this.angle = 0;
    this.angleCount = Math.floor(fxrandBetween(1, 4));
    this.diameter = 1;
    this.offset = fxrand();
    this.offsetH = fxrand();
    this.offsetS = fxrand();
    this.offsetB = fxrand();
    this.reachBorder = false;
  }

  show() {
    a = map(noise(this.offset), 0, 1, 0.01, 0.75)
    h = map(noise(this.offsetH), 0, 1, 0, 360)
    s = map(noise(this.offsetS), 0, 1, 75, 100)
    b = map(noise(this.offsetB), 0, 1, 0, 100)
    rectMode(CENTER)
    strokeWeight(this.diameter)
    let strokeColor = color(h, s, b, a);
    stroke(strokeColor)
    let sizer = map(noise(this.offset), 0, 1, height/1000, height/250);
    dropShad(0, 5, sizer * 2, 0, 1)
    dropShad(0, 25, sizer * 3, 0, 0.85)
    this.diameter = sizer;
    // point(this.posX, this.posY)

    this.posX += cos(radians(this.angle)) * this.stepSize
    this.posY += sin(radians(this.angle)) * this.stepSize

    if (this.posY <= 5) {
      this.direction = this.SOUTH;
      this.reachBorder = true;
    } else if (this.posY >= height - 5) {
      this.direction = this.NORTH;
      this.reachBorder = true;
    } else if (this.posX >= width - 5) {
      this.direction = this.WEST;
      this.reachBorder = true;
    } else if (this.posX <= 5) {
      this.direction = this.EST;
      this.reachBorder = true;
    }

    loadPixels();
    let currentPixel = get(floor(this.posX), floor(this.posY));


    if (
      this.reachedBorder || (currentPixel[0] != 255 && currentPixel[1] != 255 && currentPixel[2] != 255)) {
      this.angle = this.getRandomAngle(this.direction);
    }

    push()
    // line(this.posX, this.posY, this.posXcross, this.posYcross)
    beginShape(LINES)
    fill(strokeColor)
    strokeWeight(this.diameter/2)
      if (fxrand() < 0.25) {
        vertex(width / 2, height / 2)
      }
    vertex(this.posX, this.posY)
    vertex(this.posXcross, this.posYcross)
    endShape()
    pop()

    ///////MIRROR
    push()
    blendMode(random([ADD, OVERLAY, DIFFERENCE, SCREEN, MULTIPLY]))
    scale(0.98)
    // point(this.posX, this.posY)
    beginShape(TRIANGLE_STRIP)
    fill(strokeColor)
    noFill()
    if (fxrand() < 0.05) {
      vertex(width / 2, height / 2)
    }
    vertex(this.posX, this.posY)
    vertex(this.posXcross, this.posYcross)
    endShape()
    pop()

    ///////MIRROR
    push()
    blendMode(random([ADD, OVERLAY, DIFFERENCE, SCREEN, MULTIPLY]))
    scale(1.02)
    // point(this.posX, this.posY)
    beginShape(TRIANGLE_STRIP)
    fill(strokeColor)
    if (fxrand() < 0.75) {
      vertex(width / 2, height / 2)
    }
    vertex(this.posX, this.posY)
    vertex(this.posXcross, this.posYcross)
    endShape()
    pop()

    ///////MIRROR
    push()
    blendMode(random([ADD, OVERLAY, DIFFERENCE, SCREEN, MULTIPLY]))
    translate(width, height)
    scale(-1.02)
    // point(this.posX, this.posY)
    beginShape()
    fill(strokeColor)
    if (fxrand() < 0.05) {
      vertex(width / 2, height / 2)
    }
    vertex(this.posX, this.posY)
    vertex(this.posXcross, this.posYcross)
    endShape()
    pop()

    this.posXcross = this.posX;
    this.posYcross = this.posY;

    this.offset += 0.05;
    this.offsetH += 0.01;
    this.offsetS += 0.25;
    this.offsetB += 0.033;
    this.stepSize -= 0.05
  }

  getRandomAngle(currentDirection) {
    let a = (floor(random(-this.angleCount, this.angleCount)) + 0.5) * 90 / this.angleCount;
    if (currentDirection == this.NORTH) return a - 90;
    if (currentDirection == this.EAST) return a - 180;
    if (currentDirection == this.SOUTH) return a + 90;
    if (currentDirection == this.WEST) return a + 180;
    return a;
  }
}