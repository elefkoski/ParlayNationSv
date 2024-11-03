<script lang="ts">
	export let title = 'the title';
	export let id = 'the_id';
	export let step: number = 5;
	export let pId = 'the p id';
	export let placeholder = 'Enter amount';
	export let calculate: (amt: number, pId: string) => any;

	let inputValue: number;

	function handleSubmit(event: Event) {
		event.preventDefault();
		calculate(inputValue, pId);
	}
</script>

<form autocomplete="off" novalidate on:submit={handleSubmit}>
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
	<button data-track="calc-{id}" class="calculator-btn p-2 rounded mt-2" type="submit">
		Check
	</button>

	<p id={pId} class="" />
</form>
