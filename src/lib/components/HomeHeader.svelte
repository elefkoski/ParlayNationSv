<script lang="ts">
	export let aria = 'Aria Label';
	export let title = 'The Title';
	export let pOne =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.';
	export let pTwo =
		'Morbi feugiat, enim non blandit auctor, nulla eros cursus augue, eu posuere cubilia curae, euismod ligula arcu non risus.';
	export let pThree =
		'Consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat, enim non blandit.';
	export let button = 'My Button';
	export let href = '/';
</script>

<header aria-label={aria} class="p-6 learn-home-page-header shadow-lg rounded-lg">
	<h1 class="text-2xl font-bold mb-2">{title}</h1>
	<p class="mb-4">{pOne}</p>
	<p class="mb-4">{pTwo}</p>
	<p class="mb-4">{pThree}</p>
	<a data-track="home-header-btn-{href}" {href} class="btn learn-home-page-header-btn">
		{button}
	</a>
</header>
