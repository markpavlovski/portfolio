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

const tiltY = 10
const tiltX = 1
const shadeY = 15
const shadeX = 2


const calculator = document.querySelectorAll(".card")
let z
document.addEventListener("mousemove",(event)=>{
  console.log(event.target.getBoundingClientRect().x, event.target.getBoundingClientRect().y)
  const target = event.target.getBoundingClientRect()
  center = {
    x: target.x + target.width/2,
    y: target.y+ target.height/2
  }
  delta = {
    x: (event.x - center.x)/(window.innerWidth - center.x),
    y: (event.y - center.y)/(window.innerHeight - center.y)
  }
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  for (let i=0; i< calculator.length; i++){
    calculator[i].style.boxShadow = `${-delta.x * shadeX + 0}px ${-delta.y * shadeY + 0}px ${20}px ${0}px rgba(0, 0, 0, 0.2)`
    calculator[i].style.transform = `perspective( 600px ) rotateY( ${delta.x * tiltX}deg ) rotateX( ${-delta.y * tiltY}deg )`
  }
  // calculator.style.boxShadow = `${-delta.x * shadeX + 0}px ${-delta.y * shadeY + 0}px ${20}px ${0}px rgba(0, 0, 0, 0.2)`
  // calculator.style.transform = `perspective( 600px ) rotateY( ${delta.x * tiltX}deg ) rotateX( ${-delta.y * tiltY}deg )`
})
