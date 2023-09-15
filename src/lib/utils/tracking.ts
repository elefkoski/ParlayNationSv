declare var gtag: any;

export function enableScrollTracking() {
	let maxScroll = 0;

	window.addEventListener('scroll', () => {
		if (typeof gtag !== 'function') {
			console.log('gtag is not defined');
			return;
		}
		const scrolled = window.scrollY;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;

		const scrollPercentage = (scrolled / (fullHeight - windowHeight)) * 100;
		const roundedScroll = Math.round(scrollPercentage);

		if (roundedScroll > maxScroll) {
			maxScroll = roundedScroll;

			if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
				gtag('event', 'scroll', {
					event_category: 'Scroll Depth',
					event_label: `Scrolled ${maxScroll}%`
				});
			}
		}
	});
}

export function enableEventTracking() {
	const parentElement = document.getElementById('parentElement');

	if (parentElement) {
		parentElement.addEventListener('click', (event) => {
			if (typeof gtag !== 'function') {
				console.log('gtag is not defined');
				return;
			}
			const target = event.target as HTMLElement;
			const trackType = target.getAttribute('data-track');

			if (trackType) {
				const currentPage = window.location.pathname;
				gtag('event', 'click', {
					event_category: 'Element',
					event_label: trackType,
					event_action: currentPage
				});
			}
		});
	}
}
