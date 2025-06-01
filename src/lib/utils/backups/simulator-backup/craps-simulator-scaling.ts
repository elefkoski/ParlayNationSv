console.log('Entering craps-simulator-layout.ts');
import { writable } from 'svelte/store';

export { chips } from './craps-simulator-rail';

export const settingsPopupKey = writable(false);
export const enterBtnKey = writable(true);
export const exitBtnKey = writable(false);
export const passLinePopupKey = writable(false);

const uiToggles = {
	settingsPopupKey,
	enterBtnKey,
	exitBtnKey,
	passLinePopupKey
};

export type UiToggleKey = keyof typeof uiToggles | string;

export function toggleUiSetting(key: UiToggleKey): void {
	console.log('Entering toggleUiSetting');
	if (key in uiToggles) {
		console.log(`Toggling key: ${key}`);

		const store = uiToggles[key as keyof typeof uiToggles];
		store.update((current) => !current);

		store.subscribe((newValue) => {
			console.log(`New value for key '${key}': ${newValue}`);
		})();
	} else {
		console.warn(`Key '${key}' does not exist in uiToggles.`);
	}
	console.log('Leaving toggleUiSetting');
}

export async function scaleEverything(): Promise<void> {
	console.log('Entering scaleEverything');
	scaleElement();
	scaleChipsToFit();
	console.log('Leaving scaleEverything');
}
export async function scaleElement(type: string | null = null) {
	console.log('Entering scaleElement');
	await new Promise((resolve) => setTimeout(resolve, 100));
	const gameArea = document.getElementById('game-area');
	if (!gameArea) {
		console.log('scaleElement: gameArea not found');
		return;
	}

	// Get the actual dimensions of the game area
	const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();
	console.log('Container dimensions:', { containerWidth, containerHeight });

	// Scale elements relative to the container size
	const selector = type ? `.game-element[data-type="${type}"]` : '.game-element';
	console.log('Selector:', selector);
	const elements = document.querySelectorAll(selector);
	//console.log('Elements being scaled :', elements);
	elements.forEach((el) => {
		const x = parseFloat((el as HTMLElement).dataset.x ?? '') || null;
		const y = parseFloat((el as HTMLElement).dataset.y ?? '') || null;
		const fontSize = parseFloat((el as HTMLElement).dataset.fontsize ?? '') || null;
		const height = parseFloat((el as HTMLElement).dataset.height ?? '') || null;
		const width = parseFloat((el as HTMLElement).dataset.width ?? '') || null;
		const paddingLR = parseFloat((el as HTMLElement).dataset.paddinglr ?? '') || null;
		const paddingTB = parseFloat((el as HTMLElement).dataset.paddingtb ?? '') || null;
		const marginLR = parseFloat((el as HTMLElement).dataset.marginlr ?? '') || null;
		const marginTB = parseFloat((el as HTMLElement).dataset.margintb ?? '') || null;
		const border = parseFloat((el as HTMLElement).dataset.border ?? '') || null;
		const borderRadius = parseFloat((el as HTMLElement).dataset.borderradius ?? '') || null;
		const rowGap = parseFloat((el as HTMLElement).dataset.rowgap ?? '') || null;
		const gap = parseFloat((el as HTMLElement).dataset.gap ?? '') || null;

		if (x !== null) {
			(el as HTMLElement).style.left = `${(x / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('left'); // Remove left if null
		}
		if (y !== null) {
			(el as HTMLElement).style.top = `${(y / 100) * containerHeight}px`;
		} else {
			(el as HTMLElement).style.removeProperty('top'); // Remove top if null
		}
		if (fontSize !== null) {
			(el as HTMLElement).style.fontSize = `${(fontSize / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('fontSize'); // Remove fontSize if null
		}
		if (height !== null) {
			(el as HTMLElement).style.height = `${(height / 100) * containerHeight}px`;
		} else {
			(el as HTMLElement).style.removeProperty('height'); // Remove height if null
		}
		if (width !== null) {
			(el as HTMLElement).style.width = `${(width / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('width'); // Remove width if null
		}
		if (paddingLR !== null) {
			(el as HTMLElement).style.paddingLeft = (el as HTMLElement).style.paddingRight = `${
				(paddingLR / 100) * containerWidth
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('paddingLeft'); // Remove padding if null
			(el as HTMLElement).style.removeProperty('paddingRight');
		}
		if (paddingTB !== null) {
			(el as HTMLElement).style.paddingTop = (el as HTMLElement).style.paddingBottom = `${
				(paddingTB / 100) * containerHeight
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('paddingTop'); // Remove padding if null
			(el as HTMLElement).style.removeProperty('paddingBottom');
		}
		if (marginLR !== null) {
			(el as HTMLElement).style.marginLeft = (el as HTMLElement).style.marginRight = `${
				(marginLR / 100) * containerWidth
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('marginLeft'); // Remove margin if null
			(el as HTMLElement).style.removeProperty('marginRight');
		}
		if (marginTB !== null) {
			(el as HTMLElement).style.marginTop = (el as HTMLElement).style.marginBottom = `${
				(marginTB / 100) * containerHeight
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('marginTop'); // Remove margin if null
			(el as HTMLElement).style.removeProperty('marginBottom	');
		}
		if (border !== null) {
			(el as HTMLElement).style.borderWidth = `${(border / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('borderWidth');
		}
		if (borderRadius !== null) {
			(el as HTMLElement).style.borderRadius = `${(borderRadius / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('borderRadius'); // Remove border radius if null
		}
		// Gap for flex containers
		if (gap !== null) {
			(el as HTMLElement).style.gap = `${(gap / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('gap');
		}
		// Row gap for grid containers or vertical spacing
		if (rowGap !== null) {
			(el as HTMLElement).style.rowGap = `${(rowGap / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('rowGap');
		}

		// Remove the hidden class from the element and its children
		el.classList.remove('hidden');
		const childElements = el.querySelectorAll('.hidden');
		childElements.forEach((child) => child.classList.remove('hidden'));
		console.log(`Scaling element:`, {
			name: el,
			left: (el as HTMLElement).style.left,
			top: (el as HTMLElement).style.top,
			width: (el as HTMLElement).style.width,
			height: (el as HTMLElement).style.height
		});
	});
	console.log('Leaving scaleElement');
}
export async function scalePopup(type: string | null = null) {
	console.log('Entering scalePopup');
	await new Promise((resolve) => setTimeout(resolve, 100));
	const gameArea = document.getElementById('game-area');
	if (!gameArea) {
		console.log('scalePopup: gameArea not found');
		return;
	}

	// Get the actual dimensions of the game area
	const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();

	// Scale elements relative to the container size
	const selector = type ? `[data-type="${type}"]` : '.popup';
	console.log('Selector:', selector);
	const elements = document.querySelectorAll(selector); // Select all elements with the .popup class
	elements.forEach((el) => {
		el.classList.remove('hidden');
	});

	elements.forEach((el) => {
		const x = parseFloat((el as HTMLElement).dataset.x ?? '') || null;
		const y = parseFloat((el as HTMLElement).dataset.y ?? '') || null;
		const fontSize = parseFloat((el as HTMLElement).dataset.fontsize ?? '') || null;
		const height = parseFloat((el as HTMLElement).dataset.height ?? '') || null;
		const width = parseFloat((el as HTMLElement).dataset.width ?? '') || null;
		const paddingLR = parseFloat((el as HTMLElement).dataset.paddinglr ?? '') || null;
		const paddingTB = parseFloat((el as HTMLElement).dataset.paddingtb ?? '') || null;
		const marginLR = parseFloat((el as HTMLElement).dataset.marginlr ?? '') || null;
		const marginTB = parseFloat((el as HTMLElement).dataset.margintb ?? '') || null;
		const border = parseFloat((el as HTMLElement).dataset.border ?? '') || null;
		const borderRadius = parseFloat((el as HTMLElement).dataset.borderradius ?? '') || null;
		const rowGap = parseFloat((el as HTMLElement).dataset.rowgap ?? '') || null;
		const gap = parseFloat((el as HTMLElement).dataset.gap ?? '') || null;

		if (x !== null) {
			(el as HTMLElement).style.left = `${(x / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('left'); // Remove left if null
		}
		if (y !== null) {
			(el as HTMLElement).style.top = `${(y / 100) * containerHeight}px`;
		} else {
			(el as HTMLElement).style.removeProperty('top'); // Remove top if null
		}
		if (fontSize !== null) {
			(el as HTMLElement).style.fontSize = `${(fontSize / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('fontSize'); // Remove fontSize if null
		}
		if (height !== null) {
			(el as HTMLElement).style.height = `${(height / 100) * containerHeight}px`;
		} else {
			(el as HTMLElement).style.removeProperty('height'); // Remove height if null
		}
		if (width !== null) {
			(el as HTMLElement).style.width = `${(width / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('width'); // Remove width if null
		}
		if (paddingLR !== null) {
			(el as HTMLElement).style.paddingLeft = (el as HTMLElement).style.paddingRight = `${
				(paddingLR / 100) * containerWidth
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('paddingLeft'); // Remove padding if null
			(el as HTMLElement).style.removeProperty('paddingRight');
		}
		if (paddingTB !== null) {
			(el as HTMLElement).style.paddingTop = (el as HTMLElement).style.paddingBottom = `${
				(paddingTB / 100) * containerHeight
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('paddingTop'); // Remove padding if null
			(el as HTMLElement).style.removeProperty('paddingBottom');
		}
		if (marginLR !== null) {
			(el as HTMLElement).style.marginLeft = (el as HTMLElement).style.marginRight = `${
				(marginLR / 100) * containerWidth
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('marginLeft'); // Remove margin if null
			(el as HTMLElement).style.removeProperty('marginRight');
		}
		if (marginTB !== null) {
			(el as HTMLElement).style.marginTop = (el as HTMLElement).style.marginBottom = `${
				(marginTB / 100) * containerHeight
			}px`;
		} else {
			(el as HTMLElement).style.removeProperty('marginTop'); // Remove margin if null
			(el as HTMLElement).style.removeProperty('marginBottom	');
		}
		if (border !== null) {
			(el as HTMLElement).style.borderWidth = `${(border / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('borderWidth');
		}
		if (borderRadius !== null) {
			(el as HTMLElement).style.borderRadius = `${(borderRadius / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('borderRadius'); // Remove border radius if null
		}
		// Gap for flex containers
		if (gap !== null) {
			(el as HTMLElement).style.gap = `${(gap / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('gap');
		}
		// Row gap for grid containers or vertical spacing
		if (rowGap !== null) {
			(el as HTMLElement).style.rowGap = `${(rowGap / 100) * containerWidth}px`;
		} else {
			(el as HTMLElement).style.removeProperty('rowGap');
		}
		// Once scaling is done, add the 'scaled' class to make it visible
		el.classList.add('scaled');
	});

	const stickCallElement = document.querySelector('.stick-call');
	if (stickCallElement) {
		stickCallElement.classList.remove('hidden');
	}
	console.log(`Total number of elements scaled: ${elements.length}`);
	console.log('Leaving scalePopup');
}
export async function scaleChipsToFit() {
	console.log('Entering scaleChipsToFit');
	await new Promise((resolve) => setTimeout(resolve, 100));
	const chipArea = document.querySelector('.chip-area');
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
	console.log('Leaving scaleChipsToFit');
}

export function enterFullScreen() {
	console.log('Entering enterFullScreen');
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
		toggleUiSetting('showEnterBtn');
		toggleUiSetting('showExitBtn');
		toggleUiSetting('showSettingsPopup');
		scaleElement();
		scaleChipsToFit();
	}
	console.log('Leaving enterFullScreen');
}

export function exitFullScreen() {
	console.log('Entering exitFullScreen');
	if (typeof document !== 'undefined') {
		const gameWrapper = document.getElementById('game-area-wrapper');
		const gameContainer = document.getElementById('game-area-container');
		const gameArea = document.getElementById('game-area');
		toggleUiSetting('showEnterBtn');
		toggleUiSetting('showExitBtn');
		toggleUiSetting('showSettingsPopup');
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
		scaleElement();
		setTimeout(() => {
			scaleChipsToFit();
		}, 1000);
	}
	console.log('Leaving exitFullScreen');
}

// Add event listeners for window resize and device orientation change
if (typeof window !== 'undefined') {
	const handleResizeOrOrientationChange = () => {
		console.log('Entering handleResizeOrOrientationChange');
		console.log('Window resized or device orientation changed');
		scaleElement();
		scaleChipsToFit();
		scalePopup();
		console.log('Leaving handleResizeOrOrientationChange');
	};

	window.addEventListener('resize', handleResizeOrOrientationChange);
	window.addEventListener('orientationchange', handleResizeOrOrientationChange);
	window.addEventListener('fullscreenchange', handleResizeOrOrientationChange);
}
console.log('Exiting craps-simulator-layout.ts');
