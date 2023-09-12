<script lang="ts">
	import SingleColumnLayout from '$lib/clients/components/layouts/SingleColumnLayout.svelte';
	import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
	import { db, fetchBookmarks } from '$lib/utils/firebase';
	import ProfileContentCard from '$lib/clients/components/profilePage/ProfileContentCard.svelte';
	import { bookmarkedPages, user, type User } from '$lib/utils/store';

	let current_user: User | null = null;

	user.subscribe((value: any) => {
		current_user = value;
		if (current_user && current_user.id) {
			fetchBookmarks(current_user.id);
		}
	});

	async function handleDelete(bookmarkId: string) {
		try {
			// Step 1: Delete from Firestore
			const bookmarkRef = doc(db, `users/${current_user?.id}/bookmarks`, bookmarkId);
			await deleteDoc(bookmarkRef);

			// Step 2: Update Svelte store
			const updatedBookmarks = $bookmarkedPages.filter((b) => b.id !== bookmarkId);
			bookmarkedPages.set(updatedBookmarks);
		} catch (error) {
			console.error('Error deleting bookmark:', error);
		}
	}
</script>

<SingleColumnLayout>
	<body class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
		<main class="bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto py-8">
				<div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
					<section aria-label="Left column basic profile info" class="col-span-4 sm:col-span-3">
						<div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
							<div class="flex flex-col items-center">
								<img
									alt=""
									src="https://randomuser.me/api/portraits/men/94.jpg"
									class="w-32 h-32 bg-gray-300 dark:bg-gray-500 rounded-full mb-4 shrink-0"
								/>
								<h1 class="text-xl font-bold text-gray-900 dark:text-gray-200">John Doe</h1>
								<p class="text-gray-600 dark:text-gray-400">Software Developer</p>
								<div class="mt-6 flex flex-wrap gap-4 justify-center">
									<a href="/" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
										>Contact</a
									>
									<a
										href="/"
										class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded"
										>Resume</a
									>
								</div>
							</div>
							<hr class="my-6 border-t border-gray-300 dark:border-gray-600" />
							<div class="flex flex-col">
								<span
									class="text-gray-600 dark:text-gray-400 uppercase font-bold tracking-wider mb-2"
									>Skills</span
								>
								<ul>
									<li class="mb-2 text-gray-900 dark:text-gray-200">JavaScript</li>
									<li class="mb-2 text-gray-900 dark:text-gray-200">React</li>
									<li class="mb-2 text-gray-900 dark:text-gray-200">Node.js</li>
									<li class="mb-2 text-gray-900 dark:text-gray-200">HTML/CSS</li>
									<li class="mb-2 text-gray-900 dark:text-gray-200">Tailwind Css</li>
								</ul>
							</div>
						</div>
					</section>
					<section
						aria-label="Right column profile info"
						class="col-span-4 flex-col sm:col-span-9 space-y-3"
					>
						<section
							aria-label="Craps calculators"
							class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"
						>
							<h2 class="text-xl font-bold mt-6 mb-4">Craps Calculators</h2>
							<div class="mb-6">
								<div class="flex dark:text-gray-400 text-gray-600 justify-between">
									<span class="font-bold">Web Developer</span>
									<p>
										<span class="mr-2">at ABC Company</span>
										<span>2017 - 2019</span>
									</p>
								</div>
								<p class="mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
									tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit
									egestas suscipit.
								</p>
							</div>
						</section>
						<section
							aria-label="Learn craps pages"
							class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"
						>
							<h2 class="text-xl font-bold mb-4">Learn Craps</h2>
							<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
								{#if $bookmarkedPages.length > 0}
									{#each $bookmarkedPages as bookmark}
										<ProfileContentCard
											title={bookmark.title}
											description={bookmark.description}
											imageUrl={bookmark.imageUrl}
											pageUrl={bookmark.pageUrl}
											id={bookmark.id}
											onDelete={handleDelete}
										/>
									{/each}
								{:else}
									<p>No bookmarks available</p>
								{/if}
							</div>
						</section>
						<section
							aria-label="Craps articles"
							class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"
						>
							<h2 class="text-xl font-bold mt-6 mb-4">Craps Articles</h2>
							<div class="mb-6">
								<div class="flex dark:text-gray-400 text-gray-600 justify-between">
									<span class="font-bold">Web Developer</span>
									<p>
										<span class="mr-2">at ABC Company</span>
										<span>2017 - 2019</span>
									</p>
								</div>
								<p class="mt-2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
									tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit
									egestas suscipit.
								</p>
							</div>
						</section>
					</section>
				</div>
			</div>
		</main>
	</body>
</SingleColumnLayout>
