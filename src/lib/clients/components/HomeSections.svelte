<script lang="ts">
	export let aria: string = 'The aria';
	export let smImg: string = 'https://picsum.photos/600/600';
	export let mdImg: string = 'https://picsum.photos/992/558';
	export let lgImg: string = 'https://picsum.photos/1280/240';
	export let alt: string = 'The alt img';
	export let title: string = 'The title';
	export let href: string = '/';
	export let body: string =
		'Consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat, enim non blandit.';
	export let badges: string[] = ['Badge Here', 'Another Badge', 'Badge Three', 'Badgering Me'];
</script>

<section aria-label={aria} class="card bg-gray-900 b shadow-xl">
	<figure>
		<img src={smImg} {alt} class="object-cover w-full block md:hidden lg:hidden" />
		<img src={mdImg} {alt} class="object-cover w-full hidden md:block lg:hidden" />
		<img src={lgImg} {alt} class="object-cover w-full hidden sm:hidden md:hidden lg:block" />
	</figure>
	<div class="card-body">
		<a {href} class="hover:text-gray-50"><h2 class="card-title">{title}</h2></a>
		<p class="pb-4">{body}</p>
		<div class="card-actions justify-end">
			{#each badges as badge (badge)}
				<div class="badge badge-outline">{badge}</div>
			{/each}
		</div>
	</div>
</section>
