declare var gtag: any;

export function enableEventTracking() {
	const parentElement = document.getElementById('parentElement');

	if (parentElement) {
		parentElement.addEventListener('click', (event) => {
			const target = event.target as HTMLElement;
			const trackType = target.getAttribute('data-track');

			if (trackType) {
				gtag('event', 'click', {
					event_category: 'Element',
					event_label: trackType
				});
			}
		});
	}
}
