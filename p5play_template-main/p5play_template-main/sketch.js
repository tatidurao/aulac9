var box

function setup() {
  createCanvas(400,400);
  //criar sprite aqui
  box = createSprite(100,200,20,20)

}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 2;
  }

  
  //código para mostrar sprites
  drawSprites();
}




