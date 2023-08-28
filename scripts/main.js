import {choc, set_content, on, DOM} from './factory.js';
const {H1, "svg:a": SVGA, "svg:g": GROUP, "svg:circle": CIRCLE, "svg:path": PATH, "svg:svg": SVG, "svg:text": SVGTEXT} = choc; //autoimport

on('click', '#downarrow', function (event) {
  event.match.closest('section').nextElementSibling.scrollIntoView({ behavior: "smooth" });
});

on('click', ".menu", function (event) {
  event.preventDefault();
  burgerClick();
  switch (event.target.id) {
    case 'servicesLink':
      DOM("#services").scrollIntoView({ behavior: "smooth" });
      break;
    case 'howitworksLink':
      DOM("#howitworks").scrollIntoView({behavior: "smooth"});
      break;
    case 'aboutLink':
      DOM("#about").scrollIntoView({ behavior: "smooth" });
      break;
    case 'contactLink':
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

on("click", "button.hamburger", burgerClick);
