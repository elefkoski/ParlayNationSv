<script lang="ts">
	console.log('LgMenuTextBox component loading');

	import { onMount } from 'svelte';
	import { scalePopup } from '$lib/utils/simulator/craps-simulator-scaling';

	export let scalePopupKey: string = 'scalePopupKey';

	onMount(() => {
		scalePopup(scalePopupKey);
	});

	console.log('LgMenuTextBox component loaded.');
</script>

<div
	id="lg-menu-text-box"
	class="lg-menu-text-box border flex items-center justify-center"
	data-type={scalePopupKey}
	data-height="21"
	data-paddingtb="2"
	data-paddinglr="2"
	data-borderRadius="1"
	data-border=".25"
>
	<p data-type={scalePopupKey} data-fontsize="2">
		At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis piusto.
	</p>
</div>
