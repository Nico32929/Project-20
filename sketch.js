var brush,bath,drink,eat,gym,bg,move,sleep
var astronaut
var edges

function preload(){
bg=loadImage("assets/iss.png")
sleep=loadAnimation("assets/sleep.png")
brush=loadAnimation("assets/brush.png")
gym=loadAnimation("assets/gym1.png","assets/gym2.png")
eat=loadAnimation("assets/eat1.png","assets/eat2.png")
drink=loadAnimation("assets/drink1.png","assets/drink2.png")
move=loadAnimation("assets/move.png","assets/move1.png")
bath=loadAnimation("assets/bath1.png","assets/bath2.png")
}

function setup() {
  createCanvas(800,400);
  

  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
  
 
  edges=createEdgeSprites()
  console.log(edges)

  astronaut.bounceOff(edges)
}

function draw() {

  background(bg);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350
     
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=350
     
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=350
     
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350
     
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("m")){
    astronaut.velocityX=3
    astronaut.velocityY=-4
  }

textSize(32)
text("Instructions:",10,30)
textSize(25)
text("Up arrow = Brushing",10,50)
text("Down Arrow = Gymming",10,70)
text("Left Arrow = Eating",10,90)
text("Right Arrow = Bathing",10,110)
text("m key = Moving",10,130)

drawSprites();

}