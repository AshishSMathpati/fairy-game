// mujhe lagta he ki mene ye code galta likhe he �
// so aap mujhe meri mistake bata dijiye :'-|


var fairy, fairy1, fairy2;
var star, starNight;
var music;

function preload(){
   //preload the images here
   // OK :-|
   fairy = loadImage("fairy.png");
   fairy1 = loadImage("fairy2.png");
   fairy3 = loadImage("fairy3.png");
   star = loadImage("star.png");
   starNight = loadImage("starnight.png");

  music = loadSound("JoyMusic.mp3");


}

function setup() {
  createCanvas(400, 400);
   
  starNight = createSprite(200,200,400,400);
  starNight.addImage("background",starNight);
  
  fairy1 = createSprite(130,360,25,25);
  fairy1.addImage("fairy",fairy1);
  fairy1.scale = 0.5;

  star = createSprite (250,20,20,20);
  star.addImage("shine", star);
  star.scale = 0.5;


}


function draw() {
  background("black");

if(keyDown(RIGHT_ARROW)){
   fairy1.velocityX = 2;
}

if(keyDown(LEFT_ARROW)){
    fairy1.velocityX = -2;
}

if(keyDown(down_arrow)){
    spawnStar.velocityY = 3;
}

if( starBody.position.y > 362){
  star.velocityY = 0;
  star.x = fairy1.x;
}






star.x = starBody.position.x;
star.y = starBody.position.y;
 drawSprite();
}

//function spawnStar(){
//if(World.frameCount % 60 === 0){
   // var star = craeteSprite(10,400,20,20);
     //    star.y = Math.round(random(10,370));
       //   star.addImage(star);
         //  star.scale = 0.5;
 //}
//}
