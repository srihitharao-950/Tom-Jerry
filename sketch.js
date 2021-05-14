var canvas,Bg
var jerry, mouseImg,mouseImg2
var tom, catImg,catImg2, catImg3



function preload() {
Bg = loadImage ("bg.jpg");
mouseImg = loadAnimation  ("jerry.png");
mouseImg2 = loadAnimation ("zzzz.png");
catImg = loadAnimation  ("tom2.png");
catImg2 = loadAnimation ("tom_running.png");
catImg3 = loadAnimation  ("tom_laugh.png");
    
}

function setup(){

    canvas = createCanvas(windowWidth,windowHeight);

   jerry = createSprite(width/5,height/1.2,20,20)
   jerry.addAnimation("M",mouseImg)
    jerry.scale = 0.5
    
   
   tom = createSprite(width/1.1 ,height/1.4)
    tom.addAnimation("C",catImg)
    tom.scale = 0.8



   


    tom.setCollider("circle",0,0,100)
    tom.debug = false;
}

function draw() {


    background(Bg);

   if(tom.x - jerry.x< (tom.width - jerry.width)/2){
     tom.velocityX=0
     tom.y=height/1.4
     tom.addAnimation("C3",catImg3)
     tom.changeAnimation("C3")
     tom.scale=1.2
     jerry.destroy();

   }

    drawSprites();
}


function keyPressed(){

if(keyDown("left_arrow")){
  tom.velocityX=-5
  tom.y=windowHeight/1.3
  tom.addAnimation("C2",catImg2)
  tom.changeAnimation("C2")
  tom.scale=1.8
  tom.frameDelay=25
}

jerry.addAnimation("M2",mouseImg2)
jerry.changeAnimation("M2")

  


}
