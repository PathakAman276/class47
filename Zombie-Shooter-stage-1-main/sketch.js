var back,hunter,backimg,hunterimg;
var shoot,zombi2,zomimage;
var zombieGroup;
var heart1,heart2,heart3;
var heart1img,heart2img,heart3img;
var gameState="fight"
var bullets=70



function preload(){
 backimg=loadImage("assets/bg.jpeg") 
 hunterimg=loadImage("assets/shooter_2.png") 
 shoot=loadImage("assets/shooter_3.png")
 zomimage=loadImage("assets/zombie.png")
 
heart1img=loadImage("assets/heart_1.png")
heart2img=loadImage("assets/heart_2.png")
heart3img=loadImage("assets/heart_3.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  back=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  hunter=createSprite(displayWidth-1150,displayHeight-300,50,50)
   
  back.addImage(backimg)
  hunter.addImage(hunterimg)
  hunter.scale=0.3

  

heart1=createSprite(displayWidth-150,40,20,20)
heart1.visible=false
heart1.addImage( "heart1", heart1img)
heart1.scale=0.4

heart2=createSprite(displayWidth-100,40,20,20)
heart2.visible=false
heart2.addImage( "heart2", heart2img)
heart2.scale=0.4

heart3=createSprite(displayWidth-50,40,20,20)
heart3.visible=false
heart3.addImage( "heart3", heart3img)
heart3.scale=0.4

zombieGroup=new Group()
bulletGroup=new Group()
}

function draw() {
  background(0);

if(gameState==="fight"){

  if(keyDown("UP_ARROW")) {
    hunter.y=hunter.y-20 
   }
   if(keyDown("DOWN_ARROW")) {
     hunter.y=hunter.y+20 
    }
    if(keyWentDown("space")) {
     hunter.addImage(shoot)
    
    bullets=createSprite(displayWidth-1150,player.y-30,20,10)
    bullets.velocityX=20
    bulletGroup.add(bullets)
    bullets=bullets-1
    }else{
      hunter.addImage(hunterimg)
    }
    if(bullets===0){
    gameState="bullet"
    }
  if(zombieGroup.isTouching(bulletGroup)){
    for(var i =0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(bulletGroup)){
        zombieGroup[i].destroy()
      bulletGroup.destroyEach()} 
    }

  }
    if(zombieGroup.isTouching(hunter)  ){
    for(var i =0;i<zombieGroup.length;i++){
     if(zombieGroup[i].isTouching(hunter)){
       zombieGroup[i].destroy()
     } 
    }
 
 
    }
    zombie()

} 


  



   

  drawSprites()
if(gameState==="lost"){
  textSize(100)
  fill("red")
  text("you lost",400,400)

}else if(gameState==="won"){
  textSize(100)
  fill("black")
  text("you won",400,400)

}else if(gameState==="bullet"){
  textSize(100)
  fill("black")
  text("you ran out of bullets",400,400)

} 
  

}
function zombie(){
  if(frameCount%50===0){
  zombi2=createSprite(random(500,1000),random(100,500),40,40)
  zombi2.addImage(zomimage)
  zombi2.scale=0.15  
  zombi2.velocityX=-4
  zombi2.debug=true
  zombi2.setCollider("rectangle",0,0,400,400)
  zombi2.lifetime=400

  zombieGroup.add(zombi2)

  }
  
}
