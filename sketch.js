const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,backgroundImg;
var hero,monster,rope,ground,bg;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  if(backgroundImg)
        background(backgroundImg);



  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(750, 100, 70, 70);
  box8 = new Box(750, 100, 70, 70);
  box9 = new Box(750, 100, 70, 70);
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "gamingbackground2.png";
  }
  else{
      bg = "gamingbackground1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
