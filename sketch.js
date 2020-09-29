var wall , bullet;
var speed , weight , thickness;
var bulletRE , wallLE;

function setup() {
  createCanvas(1400,400);
  thickness = random(23,83);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80)
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
}
 
function hasCollided(object1 , object2){
  bulletRE = object1.x + object1.width;
  wallLE = object2.x;

 if(bulletRE>=wallLE) 
  {
    return true
  }
    return false;
}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet , wall)) {
  bullet.velocityX = 0;

  var damage = 0.5 * width * speed * speed/ (thickness * thickness * thickness);

  if(damage < 10) {
    bullet.shapeColor = color(0, 255, 0);
  }
  
  if(damage > 10 ) {
    bullet.shapeColor = color(255, 0, 0);
  } 
  
}
  drawSprites();
}

