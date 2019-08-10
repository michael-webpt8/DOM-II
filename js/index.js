// Your code goes here

/**
 * number 1. click event on heading.
 */
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', (event) => {
	event.target.style.fontSize = '4.5rem';
	event.target.style.color = 'dodgerblue';
});

/**
 * 2. on load event nav turns blue
 */
window.addEventListener('load', (event) => {
	const introHeading = document.querySelector('.intro h2');
	const headingsOnLoad = document.querySelectorAll('.text-content h2');
	introHeading.style.color = 'dodgerblue';
	headingsOnLoad.forEach((heading) => {
		heading.style.color = 'dodgerblue';
	});
});

/**
 *  3. dblclick event
 */
const funBus = document.querySelector('#bus');
funBus.addEventListener('dblclick', (event) => {
	const funBusImg = document.querySelector('img#bus');
	funBusImg.classList.toggle('fun-bus');
});

/**
 * 4. mousedown event
 */
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('mousedown', (event) => {
	event.currentTarget.style.transition = 'all .3s ease-in-out';
	event.currentTarget.style.transform = 'scale(.5)';
});

/**
 * prevent nav from refreshing.
 */
const navPreventRefresh = document.querySelectorAll('.nav-link');
navPreventRefresh.forEach((navLinks) => {
	navLinks.addEventListener('click', (event) => {
		event.preventDefault();
	});
});
