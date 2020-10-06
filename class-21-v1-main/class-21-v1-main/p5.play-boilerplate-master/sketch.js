var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";

  GamObject1 = createSprite(109,200,50,50);
  GamObject1.shapeColor = "green";

  GamObject2 = createSprite(200,200,50,50);
  GamObject2.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, fixedRect);

  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect))
{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
}
else if (isTouching(movingRect,GamObject1))
{
    movingRect.shapeColor = "red";
    GamObject1.shapeColor = "red";
}
else if (isTouching(movingRect,GamObject2))
{
    movingRect.shapeColor = "red";
    GamObject2.shapeColor = "red";
}
else
{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    GamObject1.shapeColor = "green";
    GamObject2.shapeColor = "green";
}
*/

  drawSprites();
}

