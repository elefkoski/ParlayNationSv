<script lang="ts">
	export let aria: string = 'Aria label';
	export let id: string = '';
</script>

<section
	aria-label={aria}
	{id}
	class="home-page-body-bg-1 p-6 rounded-lg shadow-lg flex-col space-y-6"
>
	<slot />
</section>
