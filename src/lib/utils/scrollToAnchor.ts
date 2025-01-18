export function enableSmoothScroll(offset = 85): () => void {
	console.log('Enabling smooth scrolling for anchor links.');

	const anchors = document.querySelectorAll('a[href^="#"]');
	const handleClick = function (e: Event) {
		e.preventDefault();
		const targetElement = document.querySelector(this.getAttribute('href'));
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - offset,
				behavior: 'smooth'
			});
		}
	};

	anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

	// Return a cleanup function
	return () => {
		anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
	};
}
