<script lang="ts">
	console.log('LgMenu component loading');

	import { onMount } from 'svelte';
	import { scalePopup, toggleUiSetting } from '../../utils/simulator/craps-simulator-scaling';
	import type { UiToggleKey } from '../../utils/simulator/craps-simulator-scaling';
	export let title: string;
	export let toggleKey: UiToggleKey = 'showSettingsPopup';
	export let scalePopupKey: string = 'scalePopupKey';

	onMount(() => {
		console.log('LgMenu component mounted.');

		scalePopup(scalePopupKey);
	});
	function handleClick() {
		toggleUiSetting(toggleKey);
	}

	console.log('LgMenu component loaded.');
</script>

<div
	class="game-popup rounded-md popup z-40"
	data-type={scalePopupKey}
	data-x="50"
	data-y="50"
	data-width="80"
	data-height="83"
	data-paddinglr="2"
	data-paddingtb="2.5"
>
	<div class="relative flex justify-between items-center">
		<h2 data-type={scalePopupKey} data-fontsize="3.5">{title}</h2>
		<button
			id="toggle-button"
			data-type={scalePopupKey}
			data-fontsize="4"
			on:click={handleClick}
			on:keydown={(e) => e.key === 'Enter' && handleClick()}
			on:keyup={(e) => e.key === ' ' && handleClick()}>☒</button
		>
	</div>
	<div class="grid grid-rows-[auto,1fr,auto]" data-type={scalePopupKey} data-gap="1.25">
		<slot />
	</div>
</div>
``
