<script lang="ts">
	export let aria: string = 'Aria label';
</script>

<section
	aria-label={aria}
	class="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg flex-col space-y-6"
>
	<slot />
</section>
