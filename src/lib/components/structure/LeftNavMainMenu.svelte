<script lang="ts">
	import { theme } from '$lib/stores/theme';

	// Apply theme to document
	$: if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', $theme);
	}

	export const pages = [
		{
			href: 'craps',
			lightSrc: '/images/icons/grad-hat-black-icon.png',
			darkSrc: '/images/icons/grad-hat-white-icon.png',
			alt: 'Graduation Hat Icon',
			title: 'Learn Craps'
		},
		{
			href: 'practice-craps',
			lightSrc: '/images/icons/bullseye-black-icon.png',
			darkSrc: '/images/icons/bullseye-white-icon.png',
			alt: 'Bullseye',
			title: 'Practice Craps'
		},
		{
			href: 'craps-blog',
			lightSrc: '/images/icons/paper-black-icon.png',
			darkSrc: '/images/icons/paper-white-icon.png',
			alt: 'Piece of paper',
			title: 'Craps Blog'
		},
		{
			href: 'craps-corner',
			lightSrc: '/images/icons/more-black-icon.png',
			darkSrc: '/images/icons/more-white-icon.png',
			alt: 'Icon',
			title: 'Craps Corner'
		},
		{
			href: 'craps-calculators',
			lightSrc: '/images/icons/calculator-black-icon.png',
			darkSrc: '/images/icons/calculator-white-icon.png',
			alt: 'Calculator',
			title: 'Craps Calculators'
		},
		{
			href: 'craps-simulator',
			lightSrc: '/images/icons/controller-black-icon.png',
			darkSrc: '/images/icons/controller-white-icon.png',
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
				src={$theme === 'dark' ? page.darkSrc : page.lightSrc}
				alt={page.alt}
				class="w-5 h-5 mr-2 filter"
			/>
			<h4>{page.title}</h4>
		</a>
	</li>
{/each}
