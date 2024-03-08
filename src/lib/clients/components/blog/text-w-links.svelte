<script lang="ts">
	export let textParts: { text: string; url?: string }[];
</script>

{#each textParts as part}
	{#if part.url}
		<a href={part.url} class="text-blue-600 hover:text-blue-700">{part.text}</a>
	{:else}
		{part.text}
	{/if}
{/each}
