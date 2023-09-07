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

<header aria-label={aria} class="p-6 bg-gray-100 dark:bg-gray-900">
	<h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{title}</h1>
	<p class="text-gray-700 dark:text-gray-300 mb-4">{pOne}</p>
	<p class="text-gray-700 dark:text-gray-300 mb-4">{pTwo}</p>
	<p class="text-gray-700 dark:text-gray-300 mb-4">{pThree}</p>
	<a
		{href}
		class="btn bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-900 dark:hover:bg-blue-800"
	>
		{button}
	</a>
</header>
