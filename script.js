particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let scrollPos = 0;
const nav = document.getElementById('navbar');
let windowHeight = window.innerHeight;
let navHeight = nav.innerHeight;



function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < windowHeight) {
      // Scrolling UP
      nav.style.visibility = "hidden"
      // nav.classList.toggle("active");
    } else {
      // Scrolling DOWN
        nav.style.visibility = "visible"
        // nav.classList.toggle("active");
    }
    scrollPos = windowY;
  }

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  window.addEventListener('scroll', debounce(checkPosition));