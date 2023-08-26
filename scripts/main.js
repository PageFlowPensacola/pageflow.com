import {choc, set_content, on, DOM} from './factory.js';
const {H1, "svg:a": SVGA, "svg:g": GROUP, "svg:circle": CIRCLE, "svg:path": PATH, "svg:svg": SVG, "svg:text": SVGTEXT} = choc; //autoimport

window.onscroll = function () {
  checkScroll();
}

function checkScroll() {
  if (window.scrollY > 500) {
    document.getElementById('scrollToTop').style.opacity = '0.5';
  }

  if (window.scrollY < 100) {
    document.getElementById('scrollToTop').style.opacity = '0';
  }
}

on('click', '#downarrow', function (event) {
  event.match.closest('section').nextElementSibling.scrollIntoView({ behavior: "smooth" });
});

on('click', ".menu", function (event) {
  event.preventDefault();
  burgerClick();
  switch (event.target.id) {
    case 'service':
      DOM("#service").scrollIntoView({ behavior: "smooth" });
      break;
    case 'howitworks':
      DOM("#howitworks").scrollIntoView({behavior: "smooth"});
      break;
    case 'about':
      DOM("#about").scrollIntoView({ behavior: "smooth" });
      break;
    case 'contact':
      DOM("#contact").scrollIntoView({behavior: "smooth"});
      break;
    default:
      DOM("header").scrollIntoView({ behavior: "smooth" });
  }

});

const burgerClick = function () {
  DOM(".menu").classList.toggle("showMenu");
  DOM('#menutop').classList.toggle("showMenu");
  DOM('#menumid').classList.toggle("showMenu");
  DOM('#menubot').classList.toggle("showMenu");
}

on("click", "#hamburger", burgerClick);

on('click', '#scrollToTop', function (event) {
  DOM("header").scrollIntoView({behavior: "smooth"});
});
