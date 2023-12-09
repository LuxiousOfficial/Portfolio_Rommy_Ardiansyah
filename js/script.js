
const navigasiNav = document.querySelector('.navigasi-nav');

document.querySelector('#humberger-menu').onclick = () => {
	navigasiNav.classList.toggle('active');
};

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
	if (!humberger.contains(e.target) && !navigasiNav.contains(e.target)) {
		navigasiNav.classList.remove('active');
	}
});

// Start Scroll Reveal //

ScrollReveal({
	reset:true, 
	distance: '100px',
	duration: 1800,
	delay: 200 
});


ScrollReveal().reveal('.home-content, .about h2, .skills h2, .project h2, .contactme h2', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills .container, .project .projec, .contactme .contact', {origin: 'bottom'});
ScrollReveal().reveal('.about .aboutme .image', {origin: 'left'});
ScrollReveal().reveal('.about .aboutme .aboutme1', {origin: 'right'});


// End Scroll Reveal //



// Start Multiple Text //

const typed = new Typed('.multiple-text', {
	strings: ['Frontend Web Developer','Backend Web Developer', 'Youtuber'],
	typedSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});


