<script lang="ts">
	import CalcRoll2 from './CalcRoll2.svelte';
	export let id: string = 'the_id';
	export let mainTitle: string = 'main title';
	export let pId: string = 'the p id';
	export let placeholder: string = 'Enter amount';
	export let rollCombo: string[] = [];
	export let valueTitles: string[] = [];
	export const rollInfo = rollCombo.map((value, index) => {
		return { rollCombo: rollCombo[index], title: valueTitles[index] };
	});
	export let step: number = 5;
	export let title: string = 'the title';
	export let calculate: (amt: number, roll: string, pId: string) => any;

	let inputValue: number;
	let selectedRoll: string;

	function handleRollSelected(event: CustomEvent<string>) {
		selectedRoll = event.detail;
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		calculate(inputValue, selectedRoll, pId);
	}
</script>

<div>
	<h3 class="text-2xl font-medium">{mainTitle}</h3>
	<form autocomplete="off" on:submit={handleSubmit}>
		<label for={id} class="block font-medium calc-input-label">{title}</label>
		<input
			bind:value={inputValue}
			type="number"
			class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"
			{id}
			inputmode="numeric"
			pattern="[0-9]*"
			{placeholder}
			name={id}
			{step}
		/>

		<p class="font-medium mt-3">Pick what rolled:</p>
		<CalcRoll2 {rollInfo} on:rollSelected={handleRollSelected} />
		<p class="mb-2" id={pId} />
		<button class="calculator-btn p-2 rounded" type="submit"> Check </button>
	</form>
</div>
