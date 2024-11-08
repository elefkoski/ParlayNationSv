<script lang="ts">
	export let blog: {
		title: string;
		description: string;
		href: string;
		imageUrlSmall: string;
		imageUrlMedium: string;
		imageUrlLarge: string;
		imageAlt: string;
	};
</script>

<div
	class="card border blog-home-page-section-border rounded-lg shadow-sm flex flex-col h-full home-page-body-bg-1"
>
	<img
		srcset="{blog.imageUrlSmall} 480w, {blog.imageUrlMedium} 768w, {blog.imageUrlLarge} 1024w"
		sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1024px"
		src={blog.imageUrlLarge}
		alt={blog.imageAlt}
		class="w-full h-48 object-cover rounded-t-lg"
	/>
	<div class="p-8 flex flex-col flex-grow">
		<h2 class="text-xl font-bold">{blog.title}</h2>
		<p class="flex-grow">{blog.description}</p>
		<a href={blog.href} class="hyperlink hover:underline">Read more</a>
	</div>
</div>
