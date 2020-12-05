
var wall, thickness;
var bullet, speed, weight;




function setup() {
  createCanvas(1600,400);
  
  
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  
  speed=random(223,321);
  weight=random(30,52);
  
  
  
  
  
  bullet=createSprite(400, 200, 50, 10);
  bullet.shapeColor=("white");
  
}

function draw() {
  background("black");  
  
  
  bullet.velocityX =4;
  
  
  
  
  
  
  if(hasCollided(wall, wall)){
   
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/(thickness*thickness*thickness);


    if(damage>10){

      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){

      wall.shapeColor=color(0,255,0);
    }


  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}

function hasCollided(Lbullet, Lwall){

bulletRightEdge= Lbullet.x + Lbullet.width;
wallLeftEdge= wall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true;
}


return false;


}











