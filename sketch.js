var fixedRect,movingRect;
function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(600,400,50,80);
  movingRect = createSprite(400,200,80,30);
}

function draw() {  
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}