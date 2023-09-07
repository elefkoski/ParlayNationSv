<script lang="ts">
	export const pages = [
		{
			href: '/craps',
			src: 'src/images/icons/grad-hat.svg',
			alt: 'Graduation Hat Icon',
			title: 'Learn Craps'
		},
		{
			href: '/practice',
			src: 'src/images/icons/bullseye.svg',
			alt: 'Bullseye',
			title: 'Practice Craps'
		},
		{
			href: '/craps-calculators',
			src: 'src/images/icons/calculator.svg',
			alt: 'Calculator',
			title: 'Craps Calculators'
		},
		{
			href: '/craps-simulator',
			src: 'src/images/icons/controller.svg',
			alt: 'Controller',
			title: 'Craps Simulator'
		},
		{
			href: '/craps-blog',
			src: 'src/images/icons/feed.svg',
			alt: 'Piece of paper',
			title: 'Craps Blog'
		},
		{
			href: '/faq',
			src: 'src/images/icons/more.svg',
			alt: 'Icon',
			title: 'More Stuff'
		}
	];
</script>

{#each pages as page (page.title)}
	<li class="mt-2 flex items-center">
		<a
			href={page.href}
			class="flex items-center text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 transition-colors duration-200"
		>
			<img
				src={page.src}
				alt={page.alt}
				class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150"
			/>
			<h4>{page.title}</h4>
		</a>
	</li>
{/each}
