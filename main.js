document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
  let circles = ciclegraph.querySelectorAll( '.bubble' )
  let angle = 360-30, dangle = 360 / circles.length
  for( let i = 0; i < circles.length; ++i ){
    let circle = circles[i]
    angle += dangle
    circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
  }
})
