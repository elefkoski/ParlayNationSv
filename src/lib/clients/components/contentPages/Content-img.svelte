<script lang="ts">
	export let caption: string = 'Caption';
	export let smImg: string = 'https://picsum.photos/640/360';
	export let mdImg: string = 'https://picsum.photos/960/540';
	export let lgImg: string = 'https://picsum.photos/1280/720';
	export let title: string = '';
	export let alt: string = 'Alt img text';
</script>

<figure>
	<figcaption class="pt-2 text-lg">{caption}</figcaption>
	<img src={smImg} {alt} {title} class="object-cover w-full block md:hidden lg:hidden" />
	<img src={mdImg} {alt} {title} class="object-cover w-full hidden md:block lg:hidden" />
	<img src={lgImg} {alt} {title} class="object-cover w-full hidden sm:hidden md:hidden lg:block" />
</figure>
