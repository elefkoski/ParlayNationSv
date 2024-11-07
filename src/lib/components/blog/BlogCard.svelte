<script lang="ts">
	export let blog: {
		title: string;
		description: string;
		href: string;
		imageUrl: string;
		imageAlt: string;
	};
</script>

<div class="card bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col h-full">
	<img src={blog.imageUrl} alt={blog.imageAlt} class="w-full h-48 object-cover rounded-t-lg" />
	<div class="p-4 flex flex-col flex-grow">
		<h2 class="text-xl font-bold">{blog.title}</h2>
		<p class="flex-grow">{blog.description}</p>
		<a href={blog.href} class="text-blue-500 hover:underline">Read more</a>
	</div>
</div>
