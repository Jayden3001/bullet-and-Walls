var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(800, 200, 25, 25)
  bullet.shapeColor=color(255)
  speed=random(200,300)
  bullet.velocityX=speed
  thickness=random(22,83)
  wall=createSprite(1400, 200, thickness, height/2)
 
  weight=random(30,52)
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }
    

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
    
  drawSprites();
 
}

function hasCollided(obj1,obj2){

  obj1RightEdge=obj1.x+obj1.width
  obj2LeftEdge=obj2.x
  if(obj1RightEdge>=obj2LeftEdge)
  {
    return true
  }
  return false
}
