<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let currentTheme: string;

	theme.subscribe((value) => {
		currentTheme = value;
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	// Function to detect system theme
	function detectSystemTheme() {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	}

	// Apply the initial theme on mount
	onMount(() => {
		if (typeof document !== 'undefined') {
			const systemTheme = detectSystemTheme();
			theme.set(systemTheme); // Set the initial theme based on system preference
			document.documentElement.setAttribute('data-theme', currentTheme);
		}
	});

	export const pages = [
		{
			href: 'craps',
			lightSrc: 'src/images/icons/grad-hat-black-icon.png',
			darkSrc: 'src/images/icons/grad-hat-white-icon.png',
			alt: 'Graduation Hat Icon',
			title: 'Learn Craps'
		},
		{
			href: 'practice-craps',
			lightSrc: 'src/images/icons/bullseye-black-icon.png',
			darkSrc: 'src/images/icons/bullseye-white-icon.png',
			alt: 'Bullseye',
			title: 'Practice Craps'
		},
		{
			href: 'craps-blog',
			lightSrc: 'src/images/icons/paper-black-icon.png',
			darkSrc: 'src/images/icons/paper-white-icon.png',
			alt: 'Piece of paper',
			title: 'Craps Blog'
		},
		{
			href: 'craps-corner',
			lightSrc: 'src/images/icons/more-black-icon.png',
			darkSrc: 'src/images/icons/more-white-icon.png',
			alt: 'Icon',
			title: 'Craps Corner'
		},
		{
			href: 'craps-calculators',
			lightSrc: 'src/images/icons/calculator-black-icon.png',
			darkSrc: 'src/images/icons/calculator-white-icon.png',
			alt: 'Calculator',
			title: 'Craps Calculators'
		},
		{
			href: 'craps-simulator',
			lightSrc: 'src/images/icons/controller-black-icon.png',
			darkSrc: 'src/images/icons/controller-white-icon.png',
			alt: 'Controller',
			title: 'Craps Simulator'
		}
	];
</script>

{#each pages as page (page.title)}
	<li class="mt-2 flex items-center">
		<a
			data-track="l-nav-main-menu-{page.href}"
			href={page.href}
			class="flex items-center left-nav-main-menu-text"
		>
			<img
				src={currentTheme === 'dark' ? page.darkSrc : page.lightSrc}
				alt={page.alt}
				class="w-5 h-5 mr-2 filter"
			/>
			<h4>{page.title}</h4>
		</a>
	</li>
{/each}
