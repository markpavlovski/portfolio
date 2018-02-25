$(document).ready(() => {
  $(".content-item-y").click(goMain)
  $(".name").click(goMain)
  $(".title").click(goMain)
  $(".email").click(goContent)
  $(".main-grid-item").click(goContent)
  setTimeout(() => $('.fixed-action-btn').openFAB(), 750)
});


function goMain() {
  $( ".content-grid-container" )
    .css( "opacity", "1" )
    .animate({opacity: "0"}, 300)

  setTimeout(() => {
    $( ".content-grid-container" ).css( "display", "none" )
    $( ".main-grid-container" )
      .css( "opacity", "0" )
      .css( "display", "grid" )
      .animate({opacity: "1"}, 300)
  }, 500)
}


function goContent() {
  $( ".main-grid-container" )
    .animate({opacity: "0"}, 300)

  setTimeout(() => {
    $( ".main-grid-container" ).css( "display", "none" )
    $( ".content-grid-container" )
      .css( "opacity", "0" )
      .css( "display", "grid" )
      .animate({opacity: "1"}, 300)
  }, 500)
}
