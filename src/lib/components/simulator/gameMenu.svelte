<script lang="ts">
	export let id: string;
	export let title: string;
	export let className: string = '';
	export let onClose: () => void;
</script>

<div
	{id}
	class="game-element hidden rounded-md float-right {className}"
	data-x="50"
	data-y="50"
	data-fontsize="1.5"
	data-width="80"
	data-height="60"
	data-paddinglr="2"
	data-paddingtb="2"
>
	<h2>{title}</h2>
	<slot />
	<button on:click={onClose}>Close</button>
</div>
