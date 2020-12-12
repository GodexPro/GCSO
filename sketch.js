var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight);

  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1125, 200, 60,height/2);
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  

  if(car.isTouching(wall)){
    deformation = 0.5*weight*speed*speed/22500;
    console.log(deformation);
    car.velocityX = 0;

    if(deformation <= 100){
      car.shapeColor = "green";
    }

    if(deformation > 100 && deformation <=180){
      car.shapeColor = "yellow";
    }

    if(deformation >180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}