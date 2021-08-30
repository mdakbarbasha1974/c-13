var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var orangeLeafs


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
 orangeLeafs_Image = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0){
if(select_sprites == 1){
  createApples();
}else {
createOrangeLeafs()
}

}
  drawSprites();
}

//creating apples
function createApples(){
apple = createSprite(random(50,320),40,10,10);
apple.addImage(appleImage);
apple.scale = 0.1;
apple.velocityY = 5;
apple.lifetime = 50
}

  //creating orangeLeafs
  function createOrangeLeafs(){
    orangeLeafs = createSprite(random(40,200),30,10,10);
    orangeLeafs.addImage(orangeLeafs_Image);
    orangeLeafs.scale = 0.1;
    orangeLeafs.velocityY = 5;
    orangeLeafs.lifetime = 50;
  }
