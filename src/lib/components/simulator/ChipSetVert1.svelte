<script lang="ts">
	export let id: string = '';
	export let dataX: number = 0;
	export let dataY: number = 0;
</script>

<div {id}>
	<img
		id="{id}-5000"
		class="cheque game-element"
		src="src/images/craps-simulator/orange_cheque.webp"
		alt="Five thousand dollar cheque"
		data-x={dataX}
		data-y={dataY + 2.25}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-1000"
		class="cheque game-element"
		src="src/images/craps-simulator/orange_cheque.webp"
		alt="One thousand dollar cheque"
		data-x={dataX}
		data-y={dataY + 1.875}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-500"
		class="cheque game-element"
		src="src/images/craps-simulator/purple_cheque.webp"
		alt="Five hundred dollar cheque"
		data-x={dataX}
		data-y={dataY + 1.5}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-100"
		class="cheque game-element"
		src="src/images/craps-simulator/black_cheque.webp"
		alt="One hundred dollar cheque"
		data-x={dataX}
		data-y={dataY + 1.125}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-25"
		class="cheque game-element"
		src="src/images/craps-simulator/green_cheque.webp"
		alt="Twenty-five dollar cheque"
		data-x={dataX}
		data-y={dataY + 0.75}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-5"
		class="cheque game-element"
		src="src/images/craps-simulator/red_cheque.webp"
		alt="Five dollar cheque"
		data-x={dataX}
		data-y={dataY + 0.375}
		data-width="1.8"
		data-height="3.2"
	/>
	<img
		id="{id}-1"
		class="cheque game-element"
		src="src/images/craps-simulator/white_cheque.webp"
		alt="One dollar cheque"
		data-x={dataX}
		data-y={dataY}
		data-width="1.8"
		data-height="3.2"
	/>
</div>
