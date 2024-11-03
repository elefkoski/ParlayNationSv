<script lang="ts">
	import CalcRoll from './CalcRoll.svelte';
	export let id: string = 'the_id';
	export let idTwo: string = 'the_id';
	export let pId: string = 'the p id';
	export let placeholder: string = 'Enter amount';
	export let placeholderTwo: string = 'Enter second amount';
	export let rollValues: number[] = [];
	export let valueTitles: string[] = [];
	export const rollInfo = rollValues.map((value, index) => {
		return { value, title: valueTitles[index] };
	});
	export let step: number = 5;
	export let title: string = 'the title';
	export let titleTwo: string = 'the second title';
	export let calculate: (amt: any, amtTwo: any, roll: number, pId: string) => any;

	let inputValue: number;
	let inputValueTwo: number;
	let selectedRoll: number;

	function handleRollSelected(event: CustomEvent<number>) {
		selectedRoll = event.detail;
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		calculate(inputValue, inputValueTwo, selectedRoll, pId);
	}
</script>

<form autocomplete="off" novalidate on:submit={handleSubmit}>
	<div>
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
	</div>
	<div>
		<label for={idTwo} class="block font-medium mt-2">{titleTwo}</label>
		<input
			bind:value={inputValueTwo}
			type="number"
			class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"
			id={idTwo}
			inputmode="numeric"
			pattern="[0-9]*"
			placeholder={placeholderTwo}
			name={idTwo}
			{step}
		/>
	</div>
	<div>
		<p class="font-medium mt-2">Pick what rolled:</p>
		<CalcRoll {rollInfo} on:rollSelected={handleRollSelected} />
		<p class="mb-2" id={pId} />
		<button class="calculator-btn p-2 rounded" type="submit"> Check </button>
	</div>
</form>
