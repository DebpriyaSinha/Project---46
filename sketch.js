  var thor,Thor_img,thorHitting;
  var hela;
  var thanos;
  var loki;
  var hammer,hammer_img,hammerGroup;
  var villain,villainGroup;

function preload(){
  Thor_img=loadAnimation("Thor2.png");
  thorHitting=loadAnimation("Thor 5.png","Thor3.jpg","Thor4.png");
  
  hammer_img=loadImage("Mjolnir.png");

  hela=loadImage("Hela.jpg");
  thanos=loadImage("Thanos.png");
  loki=loadImage("Loki.png");


}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  thor = createSprite(170,windowHeight/2,20,200); 
  thor.addAnimation("Standing",Thor_img);
  thor.addAnimation("Hitting",thorHitting);
  thor.scale=0.5;

  hammerGroup=createGroup();
  villainGroup=createGroup();
 
  
}

function draw(){
  background("white");
  
  if (keyDown("enter")){
    thor.changeAnimation("Hitting",thorHitting);
    Hammer();
  }
  thor.changeAnimation("Hitting",Thor_img);
  thor.y=mouseY;
  
  Villain();

  drawSprites();
}