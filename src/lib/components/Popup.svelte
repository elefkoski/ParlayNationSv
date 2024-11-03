<script lang="ts">
	export let message = '';
</script>

<div class="relative">
	<div
		class="absolute top-0 right-0 p-2 w-64 z-10
		       bookmark-popup border
		       rounded-md"
	>
		{message}
	</div>
</div>
