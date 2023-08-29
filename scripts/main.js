import {choc, set_content, on, DOM} from './factory.js';
const {P} = choc; //autoimport

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

on("submit", "#contactform", function (event) {
  event.preventDefault();
  const formData = new FormData(event.match);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  console.log(JSON.stringify(data));
  fetch(event.match.action, {
    method: event.match.method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.status === 200) {
      set_content('.formnotification', P(`Message sent. We'll get back to you ASAP.`));
      DOM('.formnotification').classList.remove('error');
      DOM('.formnotification').classList.add('success');
      DOM('#contactform').reset();
    } else {
      set_content('.formnotification', P(`Whoops. Please try calling or emailing us.`));
      DOM('.formnotification').classList.remove('success');
      DOM('.formnotification').classList.add('error');
      DOM('#contactform').reset();
    }
  }).catch(error => {
    console.error(error);
    set_content('.formnotification', P(`Whoops. Please try calling or emailing us.`));
    DOM('.formnotification').classList.remove('success');
    DOM('.formnotification').classList.add('error');
    DOM('#contactform').reset();
  });
});
