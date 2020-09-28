var okay
var no
function setup() {
  createCanvas(800,400);
okay = createSprite(400, 200, 50, 50);
no = createSprite(World.mouseX,World.mouseY,50,50) 
no.shapeColor = "blue"
okay.shapeColor = "blue"
}

function draw() {
  no.x = World.mouseX
  no.y = World.mouseY
  background(0);  
  drawSprites();
  if (okay.x-no.x < no.width/2+okay.width/2 && okay.y-no.y < no.height/2+okay.height/2 && no.x-okay.x < no.width/2+okay.width/2 && no.y-okay.y < no.height/2+okay.height/2 ) {
    no.shapeColor="red"
    okay.shapeColor="red"
  }
  else{
    no.shapeColor="blue"
    okay.shapeColor="blue" 
  }
}