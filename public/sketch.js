var bstring  = "Erase"
var bool = false;
var mousexold = 0
var mousexnew = 0
var mouseyold = 0
var mouseynew = 0
var socket
//SETUP
function setup(){
createCanvas(600,600)
background(255)
noFill()
stroke('black')
rect(0,0,599.5,599.5)
button = createButton(bstring);
button.position(700, 0);
button.mousePressed(erase);
socket= io.connect('http://localhost:3001')
socket.on('mouse',newDrawing)
}
function newDrawing(dt){

    fill('blue')
    stroke('blue')
    ellipse(dt.x,dt.y,8,8)
}

function draw(){

  //  background(0)
  noFill()
  stroke('black')
  strokeWeight(5)
  rect(0,0,599.5,599.5)
  
    mousexold  = mousexnew
    mouseyold = mouseynew
    mousexnew  = mouseX
    mouseynew = mouseY
    if(mouseIsPressed){
    var data = {
        x: mouseX,
        y: mouseY
    }
    console.log(data)
    
   

        if(bool == false){
            stroke('red');
            line( mousexold,mouseyold,mousexnew,mouseynew)
            strokeWeight(4)
            socket.emit('mouse',data)
            
        }
        else

        {  
             stroke('white');
             strokeWeight(50) 
            line( mousexold,mouseyold,mousexnew,mouseynew)
            
        }
    }

}
function erase(){

if (bool ==false)
    {bool = true
    bstring  = "Erase"}
else 
   { bool = false
    bstring  = "draw"}

}

