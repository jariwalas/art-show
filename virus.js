class virus {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    //this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.y -= 5;
    
  //   this.x++;
  // this.y++;
  // if(this.x>400){
  //   this.x=200;
  // }
  // if(this.y>400){
  //   this.y=200;
  // }
  }

  display() {
    push();
  translate(this.x,this.y);
  fill(178, 250, 50);
  ellipse(200, 100, 30, 30); //middle

  triangle(200, 100, 165, 95, 165, 105);

  triangle(200, 100, 235, 95, 235, 105);

  triangle(200, 100, 220, 120, 212, 130);

  triangle(200, 100, 185, 120, 190, 125);

  triangle(200, 100, 180, 80, 190, 70);

  triangle(200, 100, 220, 70, 210, 60);

  ellipse(165, 100, 15, 15); //left
  ellipse(235, 100, 14, 14); //right
  ellipse(218, 126, 18, 18); //bottom right
  ellipse(187, 122, 12, 12); //bottom left
  ellipse(215, 65, 15, 15); //top right
  ellipse(185, 75, 14, 14); //top left

  fill(178, 230, 50);
  ellipse(202, 97, 17, 17);
  pop();
  }
  
  
}
