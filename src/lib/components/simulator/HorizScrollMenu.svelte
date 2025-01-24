<script lang="ts">
	console.log('HorizScrollMenu component loading');

	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';

	export let scalePopupKey: string = 'scalePopupKey';

	onMount(() => {
		console.log('HorizScrollMenu component mounted.');

		scalePopup(scalePopupKey);
	});
	console.log('HorizScrollMenu component loaded.');
</script>

<div class="scroll-menu" data-type={scalePopupKey} data-paddingtb="1" data-borderRadius="1">
	<div
		class="scroll-menu-inner"
		data-type={scalePopupKey}
		data-paddingtb="2"
		data-paddinglr="1.5"
		data-gap="1.75"
		data-border=".25"
	>
		<slot />
	</div>
</div>
