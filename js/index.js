// Your code goes here

// number 1. click event on heading.
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', event => {
  event.target.style.fontSize = '4.5rem';
  event.target.style.color = 'dodgerblue';
});
