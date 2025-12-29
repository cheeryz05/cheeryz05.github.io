// setup() is called once at page-load
function setup() {
    createCanvas(650,500); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background("black");
    
    //hours
    fill(255, 255, 255, 200)
    strokeWeight(1);
    circle(200,200,24*12)
  
    fill("aqua")
    noStroke()
    circle(200,200, hr*12)
    
    noFill()
    stroke("black")
    strokeWeight(4);
    circle(200,200, 24*12/2)
    strokeWeight(1);
    circle(200,200, 36)
    circle(200,200, 36*2)
    circle(200,200, 36*3)
    circle(200,200, 36*4)
    circle(200,200, 36*5)
    circle(200,200, 36*6)
    circle(200,200, 36*7)
  
    //minutes
    fill(213,213,213,150)
    strokeWeight(1);
    circle(400,300,60*4)
  
    fill("green")
    noStroke()
    circle(400,300, min*4)
    
    noFill()
    stroke("black")
    strokeWeight(4);
    circle(400,300, 60*4/2)
    strokeWeight(1);
    circle(400,300, 60*4/4)
    circle(400,300, 180)
    
  
    //seconds
    
    fill(128,128,128,150)
    circle(530,200, 60*2)
    
    fill("yellow")
    noStroke()
    circle(530,200,sec*2)
    
    noFill()
    stroke("black")
    strokeWeight(4)
    circle(530,200,60*2/2)
    strokeWeight(1)
    circle(530,200,60*2/4)
    circle(530,200,90)
    
    let lastMinute = -1;
    if (sec === 0 && min !== lastMinute) {
    console.log("Minute:", min);
    lastMinute = min;
    }
}
    
