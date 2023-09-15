<script lang="ts">
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
		<h2 class="text-3xl font-bold text-blue-600 dark:text-blue-400">{section.title}</h2>
		<h3 class="text-base text-blue-500 dark:text-blue-300">{section.subtitle}</h3>
		<p class="pb-4 text-black dark:text-gray-300">
			{section.description}
		</p>
		<a href={section.href} class="justify-self-end">READ MORE</a>
	</div>
	<div class="flex flex-col gap-2 md:col-span-5 justify-center">
		<ul class="space-y-2">
			{#each section.pages as page}
				<li
					class="pl-2 rounded-lg transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 bg-white dark:bg-gray-800"
				>
					<a
						href={page.href}
						class="flex items-center space-x-2 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200"
					>
						<img
							src={page.src}
							alt={page.alt}
							class="w-6 h-6 mr-2 filter dark:invert dark:brightness-200 dark:saturate-150 {page.transform}"
						/>
						<span
							>{page.sentence}<span class="font-semibold text-orange-300">{page.name}</span>.</span
						>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
