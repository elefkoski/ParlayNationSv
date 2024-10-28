<script lang="ts">
	export let caption: string = '';
	export let url: string = '';
	export let img: string = '';
	export let title: string = '';
	export let alt: string = 'Alt img text';
</script>

<figure>
	<figcaption class="pt-2 text-lg">{caption}</figcaption>
	<img
		src="src/images/{url}/{img}_640x360.webp"
		{alt}
		{title}
		class="object-cover w-full block md:hidden lg:hidden"
	/>
	<img
		src="src/images/{url}/{img}_960x540.webp"
		{alt}
		{title}
		class="object-cover w-full hidden md:block lg:hidden"
	/>
	<img
		src="src/images/{url}/{img}_1280x720.webp"
		{alt}
		{title}
		class="object-cover w-full hidden sm:hidden md:hidden lg:block"
	/>
</figure>
