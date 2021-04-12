var gun1,gun2,gun1Img,gun2Img;

var mainGun,mainGun1,mainGun2;

var target,targetImg;

var bullet,bulletImg;

var bg;

var etc1,etc2;

var START=0;
var LEVEL1=1;
var LEVEL2=2;
var LEVEL3=3;
var LEVEL4=4;
var gameState=START;

function preload(){
  gun1Img=loadImage("/images/startGun1.jpg");
  gun2Img=loadImage("/images/startGun2.jpg");

  mainGun1=loadImage("/images/mainGun1.png");
  mainGun2=loadImage("/images/mainGun2.png");

  targetImg=loadImage("/images/target.png")

  bulletImg=loadImage("/images/bullet.png")

bg=loadImage("/images/bg.jpg")
}

function setup() {
  createCanvas(1100,600); 

  gun1=createSprite(200,400)
  gun1.addImage(gun1Img);

  gun2=createSprite(800,400)
  gun2.addImage(gun2Img);

  target = createSprite(300,80);
  target.addImage(targetImg);
  target.scale=0.7;



  

  etc1=createSprite(1130,300,50,600)
  etc2=createSprite(-30,300,50,600)

  createEdgeSprites();
  

}

function draw() {
background(bg);

target.bounceOff(etc1);
target.bounceOff(etc2)



  if(keyWentDown("s") && gameState!== START){
    bullet=createSprite(mainGun.x,mainGun.y)
    bullet.addImage(bulletImg)
    bullet.scale=0.45;
    bullet.velocityY=-30;
    }



  if(gameState===START){

target.visible=false;

    textStyle(BOLDITALIC)
    textSize(40);
    fill("GOLD");
    text("MILITARY PRACTICE SHOOTER",200,50);

  textStyle(NORMAL)
  fill("skyblue")
  textSize(30)
  text("CHOOSE A GUN",350,150);
  


if(mousePressedOver(gun1)){
  gameState=LEVEL1;
mainGun=createSprite(300,500);
mainGun.addImage(mainGun1);
}
else if(mousePressedOver(gun2)){
  gameState=LEVEL1;
  mainGun=createSprite(300,500);
  mainGun.addImage(mainGun2)
}
}  

if (gameState===LEVEL1){

target.visible=true;

gun1.destroy();
gun2.destroy();


textStyle(NORMAL)
  fill("red")
  textSize(30)
text("press S to shoot",500,400)
 
if(bullet!== undefined && bullet.isTouching(target) ){
  
  gameState=LEVEL2;
  
  
  }

}

if(gameState===LEVEL2){

target.x=1000

if(bullet!== undefined && bullet.isTouching(target) ){
  
  gameState=LEVEL3;
  
  
  }

}

if(gameState===LEVEL3)
{

target.x=100;

if(bullet!== undefined && bullet.isTouching(target) ){
  
  gameState=LEVEL4;
  
  
  }

}

if(gameState===LEVEL4){


target.velocityX=10;


}




if(gameState!==START && gameState!==LEVEL1){

mainGun.x=World.mouseX;


}
  drawSprites();
}


