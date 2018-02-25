$(document).ready(() => {
  $(".content-item-y").click(goMain)
  $(".email").click(goContent)
  $(".main-grid-item").click(goContent)
  setTimeout(() => $('.fixed-action-btn').openFAB(), 750)
});


function goMain() {
  $( ".content-grid-container" ).css( "display", "none" )
  $( ".main-grid-container" ).css( "display", "grid" )
}


function goContent() {
  $( ".main-grid-container" ).css( "display", "none" )
  $( ".content-grid-container" ).css( "display", "grid" )
}
