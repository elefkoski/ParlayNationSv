export function scrollHorizontal(node: HTMLElement): { destroy(): void } {
	const handleWheel = (event: WheelEvent) => {
		const isMouseWheel = event.deltaMode === 1;
		const deltaY = isMouseWheel ? event.deltaY * 30 : event.deltaY;

		event.preventDefault(); // Always prevent vertical scrolling
		node.scrollLeft += deltaY; // Always scroll horizontally
	};

	node.addEventListener('wheel', handleWheel, { passive: false });

	return {
		destroy() {
			node.removeEventListener('wheel', handleWheel);
		}
	};
}
