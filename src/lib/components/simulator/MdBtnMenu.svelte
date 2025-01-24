<script lang="ts">
	console.log('MdBtnMenu component loading');
	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';

	export let scalePopupKey: string = 'scalePopupKey';

	onMount(() => {
		scalePopup(scalePopupKey);
	});
	console.log('MdBtnMenu component loaded.');
</script>

<div class="grid grid-cols-2" data-type={scalePopupKey} data-gap="2">
	<slot />
</div>
