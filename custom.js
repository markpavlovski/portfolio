// DRAW ON CANVAS

let yoff = 0.0
let height = innerHeight
let width = innerWidth

function setup() {
  const cnv = createCanvas(window.innerWidth, window.innerHeight)
  cnv.parent(document.querySelector('header'))
}

function draw() {
// background(79,139,204,);
background(51,51,51);
stroke('rgba(50%,100%,70%,0.0)');
strokeWeight(1)
fill(255);
// We are going to draw a polygon out of the wave points
beginShape();

var xoff = 0;

// Iterate over horizontal pixels
for (var x = 0; x <= width; x += 1) {
  var y = map(noise(xoff, yoff), 0.5, 1, window.innerHeight*.80,window.innerHeight*.90);
  vertex(x, y);
  xoff += 0.001;
}
// increment y dimension for noise
yoff += 0.002;
vertex(width, height);
vertex(0, height);
endShape(CLOSE);

}

// RESIZE CANVAS ON WINDOW RESIZE

window.addEventListener("resize",()=>{
  const canvas = document.querySelector("header > canvas")
  canvas.style = `width: ${innerWidth}px; height: ${innerHeight}px;`
})

//

document.querySelector("#title").addEventListener("click",()=>{
  console.log("nice")
  document.querySelector('#title')
          .scrollIntoView({behavior: "smooth", block: "start"});
})

// Change navbar color

document.addEventListener("scroll",()=>{

  const main = document.querySelector("main")
  const topLeft = document.querySelector("#top-left")
  let icons = document.querySelectorAll("#top-right i")

  if (window.pageYOffset > main.offsetTop*.81){
    topLeft.classList.add("dark-font")
    for(let i=0; i < icons.length; i++){
      icons[i].classList.add("dark-font")
    }

  } else {
    topLeft.classList.remove("dark-font")
    for(let i=0; i < icons.length; i++){
      icons[i].classList.remove("dark-font")
    }
  }

})

// TILTING

const tilt = 5
const shade = 15
const calculator = document.querySelector(".card")

document.addEventListener("mousemove",(event)=>{
  center = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
  }
  delta = {
    x: (event.x - center.x)/(window.innerWidth - center.x),
    y: (event.y - center.y)/(window.innerHeight - center.y)
  }
  calculator.style.transform = `perspective( 600px ) rotateY( ${delta.x * tilt}deg ) rotateX( ${-delta.y * tilt}deg )`;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  calculator.style.boxShadow = `${-delta.x * shade + 0}px ${-delta.y * shade + 0}px ${40}px ${0}px rgba(0, 0, 0, 0.2)`
})
