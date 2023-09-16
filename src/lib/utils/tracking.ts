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
			let target: HTMLElement | null = event.target as HTMLElement;

			// Traverse up to find the closest parent that has a 'data-track' attribute
			while (target && !target.getAttribute('data-track')) {
				target = target.parentElement;
			}

			if (target) {
				const trackType = target.getAttribute('data-track');
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
