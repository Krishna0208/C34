const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2,750,width,50);

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(800,100,70,70);
    box5 = new Box(800,100,70,70);
    box6 = new Box(800,100,70,70);
    box7 = new Box(700,100,70,70);
    box8 = new Box(700,100,70,70);
    box9 = new Box(700,100,70,70);
    box10 = new Box(600,100,70,70);
    box11 = new Box(600,100,70,70);
    box12 = new Box(600,100,70,70);
    
    bob = new Bob(200,200,60);

    slingshot = new Slingshot(bob.body,{x:500,y:50});


}

function draw(){
    background(0);
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
    box10.display();
    box11.display();
    box12.display();

    bob.display();

    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bob.body,{x: mouseX, y: mouseY});
}