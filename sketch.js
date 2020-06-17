//Scene Number
var sceneNum = 1;
var sanitizerY = 23;
var dropY = 24;
var vir = [];

function setup() {
  for (var i = 0; i < 100; i++) {
    vir[i] = new virus(random(-200, 200), 400 + i * 300);
  }
}

//Button Click
function buttonClick() {

  if (mouseIsPressed && mouseX >= 50 && mouseY >= 250 && mouseX <= 350 && mouseY <= 300) {
    if (sceneNum === 1) {
      sceneNum++;
    }
  }
}

//Start button
function drawButton() {
  fill(0, 0, 0);
  if (mouseX >= 50 && mouseY >= 250 && mouseX <= 350 && mouseY <= 300) {
    fill(40, 40, 40);
  }
  rect(50, 250, 300, 50);
  fill(255, 255, 255);
  textSize(25);
  text("Start", 200, 280);
}

//Hand Sanitizer
function drawSanitizer() {
  fill(198, 242, 247);
  rect(mouseX, 38, 30, 50);
  fill(255, 255, 255);
  rect(mouseX + 7.5, 23, 15, 15);
  rect(mouseX + 13.5, sanitizerY - 10, 3, 10);
  rect(mouseX + 6, sanitizerY - 13, 12, 3);
}

//Projectile
function drawDrop() {
  //Projectile
  ellipse(mouseX + 6, dropY, 5, 10);
}

//Start Screen Virus
function drawStartVirus() {
  noStroke();
  fill(178, 250, 50);
  ellipse(200, 100, 125, 125); //middle

  triangle(200, 100, 75, 90, 75, 110);

  triangle(200, 100, 300, 90, 300, 110);

  translate(175, -125);
  rotate(45);
  triangle(200, 100, 325, 86, 325, 107);

  translate(175, -125);
  rotate(45);
  triangle(200, 100, 300, 90, 300, 110);

  resetMatrix();

  triangle(200, 100, 130, 50, 150, 30);

  triangle(200, 100, 270, 40, 250, 20);

  ellipse(90, 100, 35, 35); //left
  ellipse(300, 100, 30, 30); //right
  ellipse(265, 200, 35, 35); //bottom right
  ellipse(150, 180, 30, 30); //bottom left
  ellipse(265, 25, 35, 35); //top right
  ellipse(140, 40, 30, 30); //top left

  fill(178, 230, 50);
  ellipse(230, 100, 30, 30);
  ellipse(190, 120, 50, 50);
  ellipse(205, 70, 40, 40);
}

//Scene1
function drawScene1() {

  drawButton();
  background(220, 50);

  //virus
  drawStartVirus();


  strokeWeight(2);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(70);
  textFont('arial');
  text('VIRAL', 200, 125);
}

//Scene2
function drawScene2() {
  strokeWeight(15);
  background(205, 205, 205);
  drawSanitizer();
  for (var i = 0; i < 30; i += 1) {
    vir[i].display();
    vir[i].move();
  }
  if (mouseIsPressed && sceneNum === 2) {
    sanitizerY = 30;
    dropY += 5;
    fill(0, 0, 255);

    drawDrop();


  } else if (sceneNum === 2) {
    sanitizerY = 23;
    dropY = 24;
  }
}

//Play
function draw() {
  createCanvas(400, 400);

  if (sceneNum === 1) {
    drawScene1();
  } else if (sceneNum === 2) {
    drawScene2();
  }
  buttonClick();
}
