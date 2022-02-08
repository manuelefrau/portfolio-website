
function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle' && $(window).width() < 540) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
