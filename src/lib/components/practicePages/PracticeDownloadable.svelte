<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrlSm: string;
	export let imageUrlLg: string;
	export let pageUrl: string;
	export let pdfUrl: string;
</script>

<div class="flex flex-col home-page-body-bg-3 shadow-lg rounded-lg p-4">
	<div class="flex-shrink-0 relative">
		<picture>
			<source media="(min-width: 768px)" srcset={imageUrlLg} />
			<img class="h-100 w-full object-cover" src={imageUrlSm} alt={title} />
		</picture>
		<div class="absolute inset-0 image-cover dark:opacity-20" />
	</div>

	<div class="mt-4 flex items-center">
		<div class="text-lg leading-7 font-semibold">
			<h3>{title}</h3>
		</div>
	</div>
	<div class="mt-2">
		<p>{description}</p>
	</div>
	<div class="mt-4 flex justify-between">
		<a
			data-track="view-pdf-{pageUrl}"
			href={pageUrl}
			class="px-3 py-2 text-xs font-medium rounded practice-view-btn">View</a
		>

		<a
			data-track="dwnld-pdf-{pageUrl}"
			href={pdfUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="px-3 py-2 text-xs font-medium rounded flex items-center space-x-2 practice-dwnld-btn"
		>
			Download
			<svg class="fill-current w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
				><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg
			>
		</a>
	</div>
</div>
