var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(50,50,50,50);
  rect1.shapeColor = "white";
  rect2 = createSprite(200,60.20,40);
  rect2.shapeColor = "white";
  r = createSprite(300,200,50,50);
  r.shapeColor = "orange";
  r.velocityX = 5;
  r1= createSprite(700,200,50,50);
  r1.shapeColor = "red";
  r1.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if( isTouching(movingRect,rect2)){
  movingRect.shapeColor = "blue";
  rect2.shapeColor = "yellow";
} else{
  movingRect.shapeColor = "pink";
  rect2.shapeColor = "pink";
}
 bounceOff(r,r1);
  drawSprites();
}
