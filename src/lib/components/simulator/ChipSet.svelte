<script lang="ts">
	console.log('ChipSet component loading');

	import { onMount } from 'svelte';
	import { scaleElement } from '$lib/utils/simulator/craps-simulator-scaling';
	import { calculateChipPlacement } from '$lib/utils/simulator/craps-simulator-chip-placement';
	import { directionOffsets } from '$lib/utils/simulator/craps-simulator-chip-placement';
	import { removePlayerBet } from '$lib/utils/userDataOperations';
	import { playerBets, type PlayerBet } from '$lib/utils/userData';
	import { makeBet } from '$lib/utils/simulator/bet-objects';
	import { coordinates, type Coordinate } from '$lib/utils/simulator/touchboxes';
	import { get } from 'svelte/store';
	import { toggleUiSetting } from '$lib/utils/simulator/craps-simulator-scaling';

	export let id: string = '';
	export let amount: number = 0;
	export let chipDirection: keyof typeof directionOffsets = 'n';
	export let toggleKey: string = 'toggleKey';

	let currentBetData: PlayerBet | null = null;
	let dragging = false;

	let offsetX = 0;
	let offsetY = 0;
	let initialDragX = 0;
	let initialDragY = 0;
	const movementThreshold = 5;

	// Helper functions
	const getBaseCoordinate = (id: string, axis: 'x' | 'y') => {
		return getCoordinateByIdName(id, axis);
	};
	const getCoordinateByIdName = (id: string, axis: 'x' | 'y') => {
		const extractedName = extractIdName(id);
		const coordinate = coordinates.find((coord) => coord.id === extractedName);
		return coordinate ? coordinate[axis] : null;
	};
	const extractIdName = (id: string) => {
		const match = id.match(/^(.*?)-\d+$/);
		return match ? match[1] : id;
	};

	let baseX: number = getBaseCoordinate(id, 'x') ?? 0;
	let baseY: number = getBaseCoordinate(id, 'y') ?? 0;
	let originalX = baseX;
	let originalY = baseY;

	// Recalculate chip placements whenever the baseX, baseY, or direction changes
	let placements = calculateChipPlacement({ amount, chipDirection });
	console.log('Initial placements:', placements);

	onMount(() => {
		scaleElement(id);
	});

	// Begin tracking the pointer.
	const startDragOrMenu = (event: MouseEvent) => {
		console.log('Starting drag or menu:', { event });
		// Record the initial pointer position.
		initialDragX = event.clientX;
		initialDragY = event.clientY;
		// Prevent default behavior if needed.
		event.preventDefault();

		// Attach document-level events.
		document.addEventListener('mousemove', drag);
		document.addEventListener('mouseup', stopDrag);
	};

	// This function initializes the drag state.
	const startDrag = (event: MouseEvent) => {
		const bets = get(playerBets);
		currentBetData = bets.find((bet) => bet.id === id) || null;
		dragging = true;
		console.log('Starting drag:', { event, baseX, baseY });
		const chipElement = document.getElementById(id);
		if (chipElement) {
			const { left, top } = chipElement.getBoundingClientRect();
			offsetX = event.clientX - left;
			offsetY = event.clientY - top;
			console.log('Calculated offsets:', { offsetX, offsetY });
			// Save original position in case snapping fails.
			originalX = baseX;
			originalY = baseY;
			console.log('Saved original coordinates:', { originalX, originalY });
		}
	};

	// Update the chip’s position as the pointer moves.
	const drag = (event: MouseEvent) => {
		// If we haven’t started dragging yet, check if the movement exceeds the threshold.
		if (!dragging) {
			const deltaX = Math.abs(event.clientX - initialDragX);
			const deltaY = Math.abs(event.clientY - initialDragY);
			if (deltaX > movementThreshold || deltaY > movementThreshold) {
				// Movement exceeds threshold – start dragging.
				startDrag(event);
			} else {
				return; // Not enough movement; do nothing.
			}
		}

		// Now that dragging is active, update the chip's position.
		const gameArea = document.querySelector('.game-area');
		if (!gameArea) {
			console.error('Game area not found.');
			return;
		}
		const chipElement = document.getElementById(id);
		if (!chipElement) {
			console.error('Chip element not found.');
			return;
		}

		const { offsetWidth: gameAreaWidth, offsetHeight: gameAreaHeight } = gameArea as HTMLElement;
		const rect = gameArea.getBoundingClientRect();
		// Calculate pointer position relative to the game area.
		const currentXPx = event.clientX - rect.left - offsetX;
		const currentYPx = event.clientY - rect.top - offsetY;
		// Clamp the position.
		const clampedXPx = Math.max(0, Math.min(gameAreaWidth, currentXPx));
		const chipHeight = chipElement.offsetHeight || 0;
		const clampedYPx = Math.max(0, Math.min(gameAreaHeight - chipHeight, currentYPx));

		// Update the chip’s position (in percentages).
		baseX = (clampedXPx / gameAreaWidth) * 100;
		baseY = (clampedYPx / gameAreaHeight) * 100;
		console.log(`Updated percentages: baseX=${baseX.toFixed(2)}%, baseY=${baseY.toFixed(2)}%`);

		// Recalculate chip placements.
		placements = calculateChipPlacement({ amount, chipDirection });
		console.log('Updated placements:', placements);
	};

	// Called when the pointer is released.
	const stopDrag = (event: MouseEvent) => {
		// Remove document-level events.
		document.removeEventListener('mousemove', drag);
		document.removeEventListener('mouseup', stopDrag);

		if (dragging) {
			// If dragging did occur, snap or restore the chip.
			snapOrRestorePosition();
		} else {
			// Otherwise, treat it as a click.
			toggleUiSetting(toggleKey);
		}
		// Reset the dragging flag.
		dragging = false;
	};

	// Snap to the closest coordinate if within range, or restore the original position.
	const snapOrRestorePosition = () => {
		let closestCoordinate: Coordinate | null = null;
		let minDistance = Infinity;
		for (const coord of coordinates) {
			const distance = Math.sqrt(Math.pow(baseX - coord.x, 2) + Math.pow(baseY - coord.y, 2));
			console.log(`Distance to coordinate ${coord.id}:`, distance);
			if (distance < minDistance) {
				minDistance = distance;
				closestCoordinate = coord;
			}
		}
		if (closestCoordinate && minDistance < 50) {
			console.log('Closest Coordinate:', closestCoordinate);
			console.log(`Snapping to coordinate ${closestCoordinate.id} with distance ${minDistance}.`);
			handlePostSnap(id, closestCoordinate);
		} else {
			console.log('No valid snap. Returning to original position.');
			baseX = originalX;
			baseY = originalY;
			scaleElement(id); // Reapply scaling.
		}
	};

	const handlePostSnap = (betId: string, newCoordinate: Coordinate) => {
		console.log('Handling post-snap actions:', { betId, newCoordinate });
		if (!currentBetData) {
			console.error(`No bet data stored for ID: ${betId}`);
			return;
		}
		// Use currentBetData instead of looking it up from the store:
		const currentBet = currentBetData;
		// Remove the old bet
		console.log(`Removing bet with ID: ${betId}`);
		removePlayerBet(betId);

		// Find if there's already a bet at the destination coordinate:
		const bets = get(playerBets);
		console.log('Current bets:', bets);
		const existingBetAtCoordinate = bets.find((bet) => bet.id.startsWith(newCoordinate.id));
		console.log('Existing bet at coordinate:', existingBetAtCoordinate);
		const newAmount = (existingBetAtCoordinate?.amount || 0) + currentBet.amount;
		console.log('Calculated new total amount:', { newAmount });
		makeBet(newCoordinate.id, newAmount);
		console.log(`Moved bet ${betId} to ${newCoordinate.id} with total amount ${newAmount}`);

		// Optionally, clear the stored bet data:
		currentBetData = null;
	};

	// (Optional) Log how far the chip has moved.
	const distanceMoved = () => {
		const gameArea = document.getElementById('game-area');
		if (!gameArea) return { distanceX: 0, distanceY: 0 };
		const { offsetWidth: containerWidth, offsetHeight: containerHeight } = gameArea;
		const originalXPx = (originalX / 100) * containerWidth;
		const originalYPx = (originalY / 100) * containerHeight;
		const currentXPx = (baseX / 100) * containerWidth;
		const currentYPx = (baseY / 100) * containerHeight;
		return {
			distanceX: currentXPx - originalXPx,
			distanceY: currentYPx - originalYPx
		};
	};

	const { distanceX, distanceY } = distanceMoved();
	console.log(`Distance moved: (${distanceX.toFixed(2)}px, ${distanceY.toFixed(2)}px)`);
	console.log('ChipSet Props:', { id, amount, baseX, baseY, chipDirection });
	console.log('ChipSet component loaded.');
</script>

<div
	{id}
	class="game-element chip-stack z-50"
	data-type={id}
	data-x={baseX}
	data-y={baseY}
	data-width="2.7"
	data-height="4.8"
	style="left: {baseX}%; top: {baseY}%;"
>
	{#each placements as { type, x, y }}
		<!--
        Notice: Only on:mousedown is attached here.
        We removed on:mouseup and on:click so that the document-level events can fully handle the drag.
    -->
		<button
			class="cheque-button"
			on:mousedown={startDragOrMenu}
			style="background: none; border: none; padding: 0; margin: 0;"
		>
			<img
				class="cheque game-element"
				src={`src/images/craps-simulator/${type.toLowerCase()}_cheque.webp`}
				alt={`${type} cheque`}
				data-x={x}
				data-y={y}
				data-type={id}
				data-width="1.8"
				data-height="3.2"
			/>
		</button>
	{/each}
</div>
