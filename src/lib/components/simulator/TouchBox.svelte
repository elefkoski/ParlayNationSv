<script lang="ts">
	export let id: string = '';
	export let dataX: number = 0;
	export let dataY: number = 0;
	export let dataWidth: number = 0;
	export let dataHeight: number = 0;
</script>

<div
	{id}
	class="touch-box game-element"
	data-x={dataX}
	data-y={dataY}
	data-width={dataWidth}
	data-height={dataHeight}
/>
