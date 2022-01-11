var path,boy,boy_running
var coin,score
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  boy_running = loadImage("Runner-1.png","Runner-2png");
}

function setup(){
  createCanvas(400,800);
  //create sprites here
path = createSprite(200,200);
path.addImage("path",pathImage);
path.velocityY = 4;
path.scale = 1.2;
boy = createSprite(200,385,20,20);
boy.addImage("running",boy_running);
boy.scale = 0.095;
line1 = createSprite(30,400,10,800);
line1.shapeColor = "white";
line2 = createSprite(370,400,10,800);
line2.shapeColor = "white";
score = createSprite(385,20,10,10);
textsize(20);
stroke("red");
text("score",385,20);
}

function draw() {
  background("white");
  boy.velocityX = 0;
  boy.velocityY = 0;
  if(path.y > 400 ) {
    path.y = height/2;
  }
  if(keyDown("space")){
    boy.velocityY = -5;
  }
  if(keyDown("RIGHT_ARROW")){
    boy.velocityX = 5;
  }
  if(keyDown("LEFT_ARROW")){
    boy.velocityX = -5;
  }
  if(keyDown("UP_ARROW")){
    boy.velocityY = -5;
  }
  boy.collide(line1);
  boy.collide(line2);
  
drawSprites();
}
