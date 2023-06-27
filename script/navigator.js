$(document).ready(function() {
  $('.hamburger-menu').click(function() {
    $('.links').toggleClass('show-menu');
  });
});

const main-page = document.getElementById("main-page");
var img;
switch (Math.floor(Math.random() * 4)) {
  case 1:
    img = "nature.jpg"
    break;

  case 2: 
  img = "nature2.jpg"
    break;

  case 3: 
  img = "nature3.jpg"

  default: 
  img = "meme.jpg"
}
main-page.style.background-image = 'url(../photos/'+img')';
