<script lang="ts">
	export let message = '';
</script>

<div class="relative">
	<div
		class="absolute top-0 right-0 p-2 w-64 z-10
		       bg-gray-100 dark:bg-gray-800
		       border border-gray-300 dark:border-red-400
		       text-gray-900 dark:text-red-400
		       rounded-md"
	>
		{message}
	</div>
</div>
