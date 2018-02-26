$(document).ready(() => {
  $(".content-item-y").click(goMain)
  $(".name").click(goMain)
  $(".title").click(goMain)
  $(".email").click(goContent)
  $(".main-grid-item").click(goContent)
  setTimeout(() => $('.fixed-action-btn').openFAB(), 750)
  $('.content-card').hide()
  $('.back-end').show()

  $(".front-end-link").click(() => {
    $('.content-card').hide()
    $('.front-end').show()
  })
  $(".back-end-link").click(() => {
    $('.content-card').hide()
    $('.front-end').show()
  })
  $(".back-end-link").click(() => {
    $('.content-card').hide()
    $('.back-end').show()
  })
  $(".math-link").click(() => {
    $('.content-card').hide()
    $('.math').show()
  })
  $(".design-link").click(() => {
    $('.content-card').hide()
    $('.design').show()
  })
  $(".visuals-link").click(() => {
    $('.content-card').hide()
    $('.visuals').show()
  })
  $(".games-link").click(() => {
    $('.content-card').hide()
    $('.games').show()
  })
  $(".other-link").click(() => {
    $('.content-card').hide()
    $('.other').show()
  })
})


function goMain() {
  $( ".content-grid-container" )
    .css( "opacity", "1" )
    .animate({"opacity": "0"}, 500)

  setTimeout(() => {
    $( ".content-grid-container" ).css( "display", "none" )
    $( ".main-grid-container" )
      .css( "opacity", "0" )
      .css( "display", "grid" )
      .animate({"opacity": "1"}, 500)
  }, 500)
}


function goContent() {
  $( ".main-grid-container" )
    .animate({"opacity": "0"}, 500)

  setTimeout(() => {
    $( ".main-grid-container" ).css( "display", "none" )
    $( ".content-grid-container" )
      .css( "opacity", "0" )
      .css( "display", "grid" )
      .animate({"opacity": "1"}, 500)
  }, 500)
}
