<script lang="ts">
	export let phref = '/';
	export let prev = 'Previous';
	export let nhref = '/';
	export let next = 'Next';
</script>

<section aria-label="Previous next buttons" class="flex justify-between">
	<!-- Previous Button -->
	<a
		data-track="prvs-top-{phref}"
		href={phref}
		class="flex items-center justify-right px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
		data-track="nxt-top-{nhref}"
		href={nhref}
		class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
