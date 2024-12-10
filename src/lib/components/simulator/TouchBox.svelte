<script lang="ts">
	import { toggleUiSetting } from '../../../craps-simulator-layout';
	import type { UiToggleKey } from '../../../craps-simulator-layout';
	export let id: string = '';
	export let dataX: number = 0;
	export let dataY: number = 0;
	export let dataWidth: number = 0;
	export let dataHeight: number = 0;
	export let toggleKey: UiToggleKey = 'showSettingsPopup';

	function handleClick() {
		toggleUiSetting(toggleKey);
	}
</script>

<div
	{id}
	class="touch-box game-element"
	data-x={dataX}
	data-y={dataY}
	data-width={dataWidth}
	data-height={dataHeight}
	role="button"
	tabindex="0"
	on:click={handleClick}
	on:keydown={(e) => e.key === 'Enter' && handleClick()}
	on:keyup={(e) => e.key === ' ' && handleClick()}
/>
