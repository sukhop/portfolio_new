// navbar script
let ham = document.querySelector('.ham');
let menu = document.querySelector('.menu');

ham.addEventListener('click', () => {
    menu.classList.toggle('active_nav');
});

let header = document.querySelector(".header");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add('glass');
} else {
    header.classList.remove('glass');
  }
}