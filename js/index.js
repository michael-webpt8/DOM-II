// Your code goes here

/**
 * number 1. click event on heading.
 */
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', event => {
  event.target.style.fontSize = '4.5rem';
  event.target.style.color = 'dodgerblue';
});

/**
 * 2. on load event nav turns blue
 */
window.addEventListener('load', event => {
  const introHeading = document.querySelector('.intro h2');
  const headingsOnLoad = document.querySelectorAll('.text-content h2');
  introHeading.style.color = 'dodgerblue';
  headingsOnLoad.forEach(heading => {
    heading.style.color = 'dodgerblue';
  });
});

/**
 *  3. dblclick event
 */
const funBus = document.querySelector('#bus');
funBus.addEventListener('dblclick', event => {
  const funBusImg = document.querySelector('img#bus');
  funBusImg.classList.toggle('fun-bus');
});

/**
 * 4. mousedown event
 */
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('mousedown', event => {
  event.currentTarget.style.transition = 'all .3s ease-in-out';
  event.currentTarget.style.transform = 'scale(.5)';
});

/**
 *  5. key up event NOT WORKING CORRECTLY.
 */
window.addEventListener('keyup', event => {
  let key = event.key;
  let header = null;
  switch (key) {
    case 'p':
      header = document.querySelector('.content-destination h2');
      console.log(header);
      header.classList.toggle('highlight');
      break;
    default:
      console.log('that is not the key you are looking for.....');
  }
});

/**
 * 6. mouseup event and nest
 */

const destinationSection = document.querySelector('.destination');
const destinationButton = document.querySelector('.destination .btn');

destinationSection.addEventListener('mouseup', event => {
  event.currentTarget.style.backgroundColor = 'lightblue';
});
destinationButton.addEventListener('mouseup', event => {
  event.stopPropagation();
  event.currentTarget.style.backgroundColor = 'red';
});

/**
 * 7. contextmenu event
 */
const noContextOnImg = document.querySelector('.inverse-content img');
noContextOnImg.addEventListener('contextmenu', event => {
  event.preventDefault();
});

/**
 * 8. mouse over
 */

const navs = document.querySelectorAll('.destination h4');
navs.forEach(links => {
  links.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
  });
});

/**
 * 9. mouseout
 */
navs.forEach(links => {
  links.addEventListener('mouseout', event => {
    event.target.style.color = '#212529';
  });
});

const pTags = document.querySelectorAll('p');
const pars = document.querySelectorAll('p');
pars.forEach(par => {
  par.classList.add('dropzone');
});

pTags.forEach(p => {
  let dragged;
  /* events fired on the draggable target */
  document.addEventListener(
    'drag',
    function(event) {
      event.target.draggable = true;
    },
    false
  );

  p.addEventListener(
    'dragstart',
    function(event) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = 0.5;
    },
    false
  );

  document.addEventListener(
    'dragend',
    function(event) {
      // reset the transparency
      event.target.style.opacity = '';
    },
    false
  );

  /* events fired on the drop targets */
  document.addEventListener(
    'dragover',
    function(event) {
      // prevent default to allow drop
      event.preventDefault();
    },
    false
  );

  document.addEventListener(
    'dragenter',
    function(event) {
      // highlight potential drop target when the draggable element enters it
      if (event.target.className === 'drop-area') {
        event.target.style.backgroundColor = 'white';
      }
    },
    false
  );

  document.addEventListener(
    'dragleave',
    function(event) {
      // reset background of potential drop target when the draggable element leaves it
      if (event.target.className == 'dropzone') {
        event.target.style.background = '';
      }
    },
    false
  );

  document.addEventListener(
    'drop',
    function(event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.className == 'dropzone') {
        event.target.style.background = '';
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
      }
    },
    false
  );
});

/**
 * 1. click
 * 2. load
 * 3. dblclick
 * 4. mousedown
 * 5. keyup
 * 6. mouseup
 * 7. contextmenu
 * 8. mouseover
 * 9. mouseout
 */
/**
 * prevent nav from refreshing.
 */
const navPreventRefresh = document.querySelectorAll('.nav-link');
navPreventRefresh.forEach(navLinks => {
  navLinks.addEventListener('click', event => {
    event.preventDefault();
  });
});
