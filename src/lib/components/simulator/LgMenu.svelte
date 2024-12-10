<script lang="ts">
	import { toggleUiSetting } from '../../../craps-simulator-layout';
	import type { UiToggleKey } from '../../../craps-simulator-layout';
	export let title: string;
	export let toggleKey: UiToggleKey = 'showSettingsPopup';

	function handleClick() {
		toggleUiSetting(toggleKey);
	}
</script>

<div
	class="game-popup game-element rounded-md popup z-20"
	data-x="50"
	data-y="50"
	data-fontsize="2.25"
	data-width="80"
	data-height="60"
	data-paddinglr="2"
	data-paddingtb="2.5"
>
	<div class="relative flex justify-between items-center">
		<h2>{title}</h2>
		<button
			id="toggle-button"
			class="settings-close-btn"
			on:click={handleClick}
			on:keydown={(e) => e.key === 'Enter' && handleClick()}
			on:keyup={(e) => e.key === ' ' && handleClick()}>Close</button
		>
	</div>
	<slot />
</div>
