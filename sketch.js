

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,20,20)
}

function draw() 
{

    if(keyIsDown(UP_ARROW)){
      sprite.position.y -= 30
      sprite.shapeColor = "green"
    }
  background(30);


  drawSprites();
  if(keyIsDown(DOWN_ARROW)){
    sprite.position.y += 30
    sprite.shapeColor = "red"
  }if(keyIsDown(LEFT_ARROW)){
    sprite.position.x -= 30
    sprite.shapeColor = "black"
  }if(keyIsDown(RIGHT_ARROW)){
      sprite.position.x += 30
      
    sprite.shapeColor = "blue"
}

}




