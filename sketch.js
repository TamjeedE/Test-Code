var box

function preload(){
  holder = loadImage("sphere.jpg")
}

function setup() {
  createCanvas(400,400);
  box2 = createSprite(30, 10, 15, 20)
  box = createSprite(200, 200, 200, 140)
  box.scale = 0.2
  box.addImage(holder)
  box.shapeColor = 'blue'
  edges = createEdgeSprites()
}

function draw() 
{
  background(30);

  if(keyDown("up_arrow")){
    box.y = box.y - 5;
  }
  if(keyDown("right_arrow")){
    box.x = box.x + 5;
  }
  if(keyDown("left_arrow")){
    box.x = box.x - 5;
  }
  if(keyDown("down_arrow")){
    box.y = box.y + 5;
  }
  //,0,1,2,3 = left, right, top, bottom
  box.bounceOff(edges[3])
  box.bounceOff(edges[2])
  box.bounceOff(edges[1])
  box.bounceOff(edges[0])

  drawSprites()
}




