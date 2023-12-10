<script lang="ts">
	export let caption: string = 'Caption';
	export let smImg: string = '';
	export let mdImg: string = '';
	export let lgImg: string = '';
	export let title: string = '';
	export let alt: string = 'Alt img text';
</script>

<figure>
	<figcaption class="pt-2 text-lg">{caption}</figcaption>
	<img src={smImg} {alt} {title} class="object-cover w-full block md:hidden lg:hidden" />
	<img src={mdImg} {alt} {title} class="object-cover w-full hidden md:block lg:hidden" />
	<img src={lgImg} {alt} {title} class="object-cover w-full hidden sm:hidden md:hidden lg:block" />
</figure>
