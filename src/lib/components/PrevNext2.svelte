<script lang="ts">
	export let phref = '/';
	export let prev = 'Previous';
	export let nhref = '/';
	export let next = 'Next';
</script>

<section aria-label="Previous next buttons" class="flex justify-between">
	<!-- Previous Button -->
	<a
		data-track="prvs-btm-{phref}"
		href={phref}
		class="flex items-center justify-right px-4 h-10 mr-3 text-base font-medium border rounded-lg prev-next-btn"
	>
		<svg
			class="w-3.5 h-3.5 mr-2"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 5H1m0 0 4 4M1 5l4-4"
			/>
		</svg>
		{prev}
	</a>
	<a
		data-track="nxt-btm-{nhref}"
		href={nhref}
		class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn"
	>
		{next}
		<svg
			class="w-3.5 h-3.5 ml-2"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 5h12m0 0L9 1m4 4L9 9"
			/>
		</svg>
	</a>
</section>
