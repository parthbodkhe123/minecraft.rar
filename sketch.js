const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6;
var box11,box12,box13,box14,box15,box16;
var box21,box22,box23,box24,box25,box26;
var engine,world;
var ground,ground1,ground2,ground3
var slingShot;
function preload() {

}

function setup(){
 createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

ground = new Ground(600,10,1200,10)
ground1 = new Ground(300,150,120,10)
ground2 = new Ground(600,300,120,10)
ground3 = new Ground(900,450,120,10)

box1= new Box(260,160,40,30)
box2 = new Box(300,160,40,30)
box3 = new Box(340,160,40,30) 
box4= new Box(280,190,40,30)
box5 = new Box(320,190,40,30)
box6 = new Box(300,220,40,30) 

box11= new Box(560,310,40,30)
box12 = new Box(600,310,40,30)
box13 = new Box(640,310,40,30) 
box14= new Box(580,340,40,30)
box15 = new Box(620,340,40,30)
box16 = new Box(600,370,40,30) 

box21= new Box(860,460,40,30)
box22 = new Box(900,460,40,30)
box23 = new Box(940,460,40,30) 
box24= new Box(880,490,40,30)
box25 = new Box(920,490,40,30)
box26 = new Box(900,520,40,30) 

slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    
    background("green");
    Engine.update(engine);
    drawSprites()
    ground.display()
    ground1.display()
    ground2.display()
    ground3.display()
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    
    slingshot.display()

}
function mouseDragged(){ 
       Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200 , y: 50});  
        slingshot.attach(polygon.body);
    }
}


