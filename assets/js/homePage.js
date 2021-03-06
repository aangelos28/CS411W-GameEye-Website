// Screen media query
const onSmallScreen = window.matchMedia("(max-width: 992px)");

// Transition effect for navbar
$(document).ready(function() {
  if (!onSmallScreen.matches) {
    if($(this).scrollTop() > 10) {
      $('.navbar').addClass('navbar-solid');
    }

    $(window).scroll(function() {
      if($(this).scrollTop() > 10) {
        $('.navbar').addClass('navbar-solid');
      } else {
        $('.navbar').removeClass('navbar-solid');
      }
    });
  }
});

// Collapse mobile navbar when clicking on a link
$('.nav-link:not(.nav-dropdown-button)').click(function() {
  if (onSmallScreen.matches) {
    const navbarToggler = $('.navbar-toggler');
    navbarToggler.click();
  }
});

// Click event for the header button
$("#header-button").click(function() {
  var element = document.getElementById("problem-info-section")
  element.scrollIntoView({behavior: "smooth", inline: "nearest"});
});

const particlesJsConfig = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "top-right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
};

// Activate particle.js
particlesJS('particles-canvas', particlesJsConfig, function() {
  console.log('callback - particles.js config loaded');
});
