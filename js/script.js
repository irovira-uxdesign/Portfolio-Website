
console.log('Hi! Welcome to My Portfolio Site')
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
