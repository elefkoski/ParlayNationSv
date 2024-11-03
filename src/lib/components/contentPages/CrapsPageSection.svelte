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
	interface Page {
		name: string;
		sentence: string;
		href: string;
		src: string;
		alt: string;
		transform?: string;
	}

	interface SectionType {
		title: string;
		subtitle: string;
		description: string;
		href: string;
		pages: Page[];
	}
	export let section: SectionType;
</script>

<div class="grid grid-cols-1 md:grid-cols-8 gap-8">
	<div class="grid md:col-span-3 content-center">
		<h2 class="text-3xl font-bold craps-home-page-section-title">{section.title}</h2>
		<h3 class="text-base craps-home-page-section-tag">{section.subtitle}</h3>
		<p class="pb-4">
			{section.description}
		</p>
		<a
			data-track="craps-home-section-{section.href}"
			href={section.href}
			class="justify-self-end craps-home-page-section-link">READ MORE</a
		>
	</div>
	<div class="flex flex-col gap-2 md:col-span-5 justify-center">
		<ul class="space-y-2">
			{#each section.pages as page}
				<li class="pl-2 rounded-lg transition-colors duration-200 craps-home-page-sub-section">
					<a
						data-track="craps-home-page-{page.href}"
						href={page.href}
						class="flex items-center space-x-2 craps-home-page-sub-section-text"
					>
						<img
							src={page.src}
							alt={page.alt}
							class="w-6 h-6 mr-2 filter {currentTheme === 'dark'
								? 'dark:invert dark:brightness-200 dark:saturate-150'
								: ''} {page.transform}"
						/>
						<span
							>{page.sentence}<span class="font-semibold craps-home-page-sub-section-link"
								>{page.name}</span
							>.</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
