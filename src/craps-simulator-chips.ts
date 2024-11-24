import { writable } from 'svelte/store';

export {
	railTotal,
	layoutTotal,
	totalBankroll,
	addToBankAndRail,
	takeFromBankAndRail,
	chips
} from './craps-simulator-bank';

export const showSettingsPopup = writable(false);
export const showStickperson = writable(true);
export const showGuide = writable(true);
export const showBankroll = writable(true);
export const showRail = writable(true);
export const showLayout = writable(true);
export const showRollButton = writable(true);
export const showEnterBtn = writable(true);
export const showExitBtn = writable(false);

export const settings = {
	showSettingsPopup,
	showStickperson,
	showGuide,
	showBankroll,
	showRail,
	showLayout,
	showRollButton,
	showEnterBtn,
	showExitBtn
};

export function toggleSetting(key: keyof typeof settings): void {
	settings[key].update((current) => !current);
}
// Helper function to scale elements via 16:9 aspect ratio
export function scaleElements() {
	console.log('scaleElements: scaling elements');
	const gameArea = document.getElementById('game-area');
	if (!gameArea) {
		console.log('scaleElements: gameArea not found');
		return;
	}

	// Get the actual dimensions of the game area
	const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();
	console.log(
		'scaleElements: containerWidth:',
		containerWidth,
		'containerHeight:',
		containerHeight
	);

	// Scale elements relative to the container size
	const elements = document.querySelectorAll('.game-element');
	elements.forEach((el) => {
		const x = parseFloat(el.dataset.x) || 0;
		const y = parseFloat(el.dataset.y) || 0;
		const fontSize = parseFloat(el.dataset.fontsize) || 2.25;
		const height = parseFloat(el.dataset.height) || null;
		const width = parseFloat(el.dataset.width) || null;
		const paddingLR = parseFloat(el.dataset.paddinglr) || 0;
		const paddingTB = parseFloat(el.dataset.paddingtb) || 0;

		console.log('scaleElements: element:', el, 'x:', x, 'y:', y, 'size:', fontSize);

		// Dynamically calculate position and size
		el.style.left = `${(x / 100) * containerWidth}px`;
		el.style.top = `${(y / 100) * containerHeight}px`;
		el.style.fontSize = `${(fontSize / 100) * containerWidth}px`;
		el.style.paddingLeft = el.style.paddingRight = `${(paddingLR / 100) * containerWidth}px`;
		el.style.paddingTop = el.style.paddingBottom = `${(paddingTB / 100) * containerWidth}px`;

		if (width !== null) {
			el.style.width = `${(width / 100) * containerWidth}px`;
		} else {
			el.style.removeProperty('width'); // Remove width if null
		}

		if (height !== null) {
			el.style.height = `${(height / 100) * containerHeight}px`;
		} else {
			el.style.removeProperty('height'); // Remove height if null
		}

		console.log('scaleElements: updated styles for element:', el);
		console.log('Element Styles:', {
			left: el.style.left,
			top: el.style.top,
			width: el.style.width,
			height: el.style.height,
			paddingLeft: el.style.paddingLeft,
			paddingTop: el.style.paddingTop,
			fontSize: el.style.fontSize
		});
	});
}
// Helper function to scale chips to fit the rail
export function scaleChipsToFit() {
	// Select the .chip-area container
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
	});
}

export function enterFullScreen() {
	if (typeof document !== 'undefined') {
		const gameWrapper = document.getElementById('game-area-wrapper');
		const gameContainer = document.getElementById('game-area-container');
		const gameArea = document.getElementById('game-area');
		console.log('Toggling showEnterBtn');
		toggleSetting('showEnterBtn');
		console.log('Toggling showExitBtn');
		toggleSetting('showExitBtn');
		console.log('Toggling showSettingsPopup');
		toggleSetting('showSettingsPopup');
		console.log('gameWrapper:', gameWrapper);

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
		scaleElements();
		setTimeout(() => {
			scaleChipsToFit();
		}, 750);
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

if (typeof window !== 'undefined') {
	// Add resize listener globally to handle responsiveness
	window.addEventListener('resize', () => {
		console.log('Window resized');
		scaleElements();
		setTimeout(() => {
			scaleChipsToFit();
		}, 750);
	});
}
