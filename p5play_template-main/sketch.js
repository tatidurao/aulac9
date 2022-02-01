var box

function setup() {
  createCanvas(1200,400);

 
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

}




