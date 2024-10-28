<script lang="ts">
	import CalcRoll from './CalcRoll.svelte';
	export let id: string = 'the_id';
	export let mainTitle: string = 'main title';
	export let pId: string = 'the p id';
	export let placeholder: string = 'Enter amount';
	export let rollValues: number[] = [];
	export let valueTitles: string[] = [];
	export const rollInfo = rollValues.map((value, index) => {
		return { value, title: valueTitles[index] };
	});
	export let step: number = 5;
	export let title: string = 'the title';
	export let calculate: (amt: number, roll: number, pId: string) => any;

	let inputValue: number;
	let selectedRoll: number;

	function handleRollSelected(event: CustomEvent<number>) {
		selectedRoll = event.detail;
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		calculate(inputValue, selectedRoll, pId);
	}
</script>

<div>
	<h3 class="text-2xl font-medium">{mainTitle}</h3>
	<form
		autocomplete="off"
		novalidate
		on:submit={handleSubmit}
		class="text-gray-900 dark:text-gray-400"
	>
		<label for={id} class="block font-medium">{title}</label>
		<input
			bind:value={inputValue}
			type="number"
			class="p-2 mr-2 rounded border bg-white dark:bg-slate-900 text-black dark:text-white"
			{id}
			inputmode="numeric"
			pattern="[0-9]*"
			{placeholder}
			name={id}
			{step}
		/>

		<p class="font-medium mt-3">Pick what rolled:</p>
		<CalcRoll {rollInfo} on:rollSelected={handleRollSelected} />
		<p class="mb-2" id={pId} />
		<button class="bg-blue-500 text-white p-2 rounded" type="submit"> Check </button>
	</form>
</div>
