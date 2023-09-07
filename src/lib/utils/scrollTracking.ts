declare var gtag: any;

export function enableScrollTracking() {
	let maxScroll = 0;

	window.addEventListener('scroll', () => {
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
