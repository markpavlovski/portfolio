// DRAW ON CANVAS

let yoff = 0.0
function setup() {
  const cnv = createCanvas(window.innerWidth, window.innerHeight)
  cnv.parent(document.querySelector('header'))
}

function draw() {
background(79,139,204,);
stroke('rgba(50%,100%,70%,0.0)');
strokeWeight(1)
fill(255);
// We are going to draw a polygon out of the wave points
beginShape();

var xoff = 0;

// Iterate over horizontal pixels
for (var x = 0; x <= width; x += 1) {
  var y = map(noise(xoff, yoff), 0.5, 1, window.innerHeight*.85,window.innerHeight*.95);
  vertex(x, y);
  xoff += 0.001;
}
// increment y dimension for noise
yoff += 0.002;
vertex(width, height);
vertex(0, height);
endShape(CLOSE);

}


//


document.addEventListener("scroll",()=>{

  const main = document.querySelector("main")
  const topLeft = document.querySelector("#top-left")
  const allI = document.querySelector("i")

  if (window.pageYOffset > main.offsetTop*.81){
    topLeft.classList.add("dark-font")
    allI.classList.add("dark-font")
  } else {
    topLeft.classList.remove("dark-font")
    allI.classList.remove("dark-font")
  }
  
})
