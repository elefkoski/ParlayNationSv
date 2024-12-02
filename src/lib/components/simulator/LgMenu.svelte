<script lang="ts">
	export let title: string;
</script>

<div
	class="game-popup game-element rounded-md popup"
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
</div>
