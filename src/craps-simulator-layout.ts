import { writable } from 'svelte/store';
export {
	railTotal,
	layoutTotal,
	totalBankroll,
	addToBankAndRail,
	takeFromBankAndRail,
	chips
} from './craps-simulator-bank';

// Track elements that need to be scaled
const scaledElements = new WeakSet();

function resetScaledElements() {
	scaledElements.clear();
	console.log('All elements marked for re-scaling');
}

export const visibilityState = writable<Record<string, boolean>>({
	rollButton: true,
	layout: true,
	settingsMenu: true,
	stickperson: true
});

export function toggleVisibility(elementId: string): void {
	visibilityState.update((state) => {
		const element = document.getElementById(elementId);
		if (element) {
			const isVisible = !state[elementId];
			if (isVisible) {
				element.classList.remove('hidden');
			} else {
				element.classList.add('hidden');
			}
			return { ...state, [elementId]: isVisible }; // Update state
		}
		return state;
	});
}

// Helper function to scale elements via 16:9 aspect ratio
export async function scaleElements(elementId: string | null = null): Promise<void> {
	console.log('scaleElements: scaling elements');
	await new Promise((resolve) => setTimeout(resolve, 100));
	const gameArea = document.getElementById('game-area');
	if (!gameArea) return;
	const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();
	const elements = elementId
		? [document.getElementById(elementId)]
		: document.querySelectorAll('.game-element');

	elements.forEach((el) => {
		// Skip already scaled elements
		if (scaledElements.has(el)) {
			console.log('scaleElements: skipping already scaled element:', el);
			return;
		}

		scaledElements.add(el); // Mark element as scaled

		const x = parseFloat(el.dataset.x) || 0;
		const y = parseFloat(el.dataset.y) || 0;
		const fontSize = parseFloat(el.dataset.fontsize) || 2.25;
		const width = parseFloat(el.dataset.width) || null;
		const height = parseFloat(el.dataset.height) || null;
		const gap = parseFloat(el.dataset.gap) || null;
		const paddingLR = parseFloat(el.dataset.paddinglr) || 0;
		const paddingTB = parseFloat(el.dataset.paddingtb) || 0;

		// Apply dynamic styles
		el.style.position = 'absolute'; // Default to absolute positioning
		el.style.left = `${(x / 100) * containerWidth}px`;
		el.style.top = `${(y / 100) * containerHeight}px`;
		el.style.fontSize = `${(fontSize / 100) * containerWidth}px`;
		el.style.paddingLeft = el.style.paddingRight = `${(paddingLR / 100) * containerWidth}px`;
		el.style.paddingTop = el.style.paddingBottom = `${(paddingTB / 100) * containerHeight}px`;

		if (width !== null) el.style.width = `${(width / 100) * containerWidth}px`;
		else el.style.removeProperty('width');

		if (height !== null) el.style.height = `${(height / 100) * containerHeight}px`;
		else el.style.removeProperty('height');

		if (gap !== null) el.style.rowGap = `${(gap / 100) * containerWidth}px`;
		else el.style.removeProperty('gap');

		// Remove hidden class
		el.classList.remove('hidden');
		const childElements = el.querySelectorAll('.hidden');
		childElements.forEach((child) => child.classList.remove('hidden'));

		console.log('scaleElements: updated styles for element:', el);
	});
}

export async function scaleAllPopups() {
	console.log('scaleAllPopups: scaling all popups');
	await scaleElements(null, true);
}

// Helper function to scale chips to fit the rail
export async function scaleChipsToFit() {
	await new Promise((resolve) => setTimeout(resolve, 100));
	const chipArea = document.querySelector('.chip-area');
	console.log('chipArea:', chipArea);
	if (!chipArea) {
		console.log('scaleChipsToFit: .chip-area not found');
		return;
	}

	// Use the actual rendered width of .chip-area
	const renderedWidth = chipArea.getBoundingClientRect().width;
	console.log('Rendered width:', renderedWidth);

	// Calculate the width for each chip
	const numberOfChips = 70; // Total number of chips you want to fit in the rail
	const chipWidth = renderedWidth / numberOfChips; // Divide by total number of chips
	console.log('chipWidth: ', chipWidth);

	// Apply the calculated width to all .chip-image elements
	const chips = chipArea.querySelectorAll('.chip-image');
	chips.forEach((chip) => {
		chip.style.width = `${chipWidth}px`;
		chip.classList.remove('hidden');
	});
}

export function enterFullScreen() {
	if (typeof document !== 'undefined') {
		const gameWrapper = document.getElementById('game-area-wrapper');
		const gameContainer = document.getElementById('game-area-container');
		const gameArea = document.getElementById('game-area');

		if (gameWrapper) {
			if (gameWrapper.requestFullscreen) {
				console.log('Requesting fullscreen');
				gameWrapper.requestFullscreen();
			} else if ((gameWrapper as any).mozRequestFullScreen) {
				(gameWrapper as any).mozRequestFullScreen();
			} else if ((gameWrapper as any).webkitRequestFullscreen) {
				(gameWrapper as any).webkitRequestFullscreen();
			} else if ((gameWrapper as any).msRequestFullscreen) {
				(gameWrapper as any).msRequestFullscreen();
			}

			// Apply full-screen styles to all screen sizes
			console.log('Applying full-screen styles');
			gameWrapper.classList.add('mobile-game-active');
			gameContainer?.classList.add('mobile-game-active');
			gameArea?.classList.add('mobile-game-active');

			// Calculate the aspect ratio and add/remove the class based on the initial aspect ratio
			const aspectRatio = window.innerWidth / window.innerHeight;
			if (gameArea) {
				if (aspectRatio < 16 / 9) {
					console.log('Aspect ratio is less than 16:9');
					gameArea.classList.add('w-full');
					gameArea.classList.add('h-auto');
					gameArea.classList.remove('h-full');
					gameArea.classList.remove('w-auto');
				} else {
					console.log('Aspect ratio is greater than 16:9');
					gameArea.classList.remove('w-full');
					gameArea.classList.remove('h-auto');
					gameArea.classList.add('h-full');
					gameArea.classList.add('w-auto');
				}
			}

			// Listen for screen resize to dynamically update
			window.addEventListener('resize', () => {
				const newAspectRatio = window.innerWidth / window.innerHeight;
				if (gameArea) {
					if (newAspectRatio < 16 / 9) {
						gameArea.classList.add('w-full');
						gameArea.classList.add('h-auto');
						gameArea.classList.remove('h-full');
						gameArea.classList.remove('w-auto');
					} else {
						gameArea.classList.remove('w-full');
						gameArea.classList.remove('h-auto');
						gameArea.classList.add('h-full');
						gameArea.classList.add('w-auto');
					}
				}
			});
		} else {
			console.error('Element with ID "game-area-wrapper" not found.');
		}
		console.log('Toggling showEnterBtn');
		toggleSetting('showEnterBtn');
		console.log('Toggling showExitBtn');
		toggleSetting('showExitBtn');
		console.log('Toggling showSettingsPopup');
		toggleSetting('showSettingsPopup');
		scaleElements();
		scaleChipsToFit();
	}
}

export function exitFullScreen() {
	if (typeof document !== 'undefined') {
		const gameWrapper = document.getElementById('game-area-wrapper');
		const gameContainer = document.getElementById('game-area-container');
		const gameArea = document.getElementById('game-area');
		toggleSetting('showEnterBtn');
		toggleSetting('showExitBtn');
		toggleSetting('showSettingsPopup');
		console.log('gameWrapper:', gameWrapper);

		if (gameWrapper) {
			// Only exit full screen if supported by the browser
			if (document.exitFullscreen) {
				console.log('Exiting fullscreen');
				document.exitFullscreen();
			} else if ((document as any).mozCancelFullScreen) {
				(document as any).mozCancelFullScreen();
			} else if ((document as any).webkitExitFullscreen) {
				(document as any).webkitExitFullscreen();
			} else if ((document as any).msExitFullscreen) {
				(document as any).msExitFullscreen();
			}

			// Remove full-screen styles
			console.log('Removing full-screen styles');
			gameWrapper.classList.remove('mobile-game-active');
			gameContainer?.classList.remove('mobile-game-active');
			gameArea?.classList.remove('mobile-game-active');
			gameArea?.classList.remove('w-full');
			gameArea?.classList.remove('h-full');
		} else {
			console.error('Element with ID "game-area-wrapper" not found.');
		}
		scaleElements();
		setTimeout(() => {
			scaleChipsToFit();
		}, 1000);
	}
}

// Add event listeners for window resize and device orientation change
if (typeof window !== 'undefined') {
	const handleResizeOrOrientationChange = () => {
		console.log('Window resized or device orientation changed');
		resetScaledElements();
		scaleElements();
		scaleChipsToFit();
	};

	window.addEventListener('resize', handleResizeOrOrientationChange);
	window.addEventListener('orientationchange', handleResizeOrOrientationChange);
	window.addEventListener('fullscreenchange', handleResizeOrOrientationChange);
}
