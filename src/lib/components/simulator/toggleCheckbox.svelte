<script lang="ts">
	console.log('ToggleCheckbox component loading');
	import { visibilityState, scaleElements } from '../../utils/simulator/craps-simulator-scaling';
	export let id: string;
	export let label: string = '';

	const visibilityStateValue = visibilityState;

	function toggle() {
		const element = document.getElementById(id);
		if (!element) return;

		if ($visibilityStateValue[id]) {
			element.classList.remove('hidden');
		} else {
			element.classList.add('hidden');
		}
	}

	function handleChange() {
		toggle();
		setTimeout(() => scaleElements(id), 0); // Delay to allow DOM updates
	}

	console.log('ToggleCheckbox component loaded.');
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={$visibilityStateValue[id]} on:change={handleChange} />
		{label}
	</label>
</div>
