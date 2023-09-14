<script lang="ts">
	import SingleColumnLayout from '$lib/clients/components/layouts/SingleColumnLayout.svelte';
	import { deleteDoc, doc } from 'firebase/firestore';
	import { db, fetchAllBookmarks } from '$lib/utils/firebase';
	import ProfileContentCard from '$lib/clients/components/profilePage/ProfileContentCard.svelte';
	import { bookmarkedPages, user, type User } from '$lib/utils/store';

	let current_user: User | null = null;
	let bookmarks: any[] = [];

	user.subscribe(async (value: any) => {
		current_user = value;
		if (current_user && current_user.id) {
			bookmarks = await fetchAllBookmarks(current_user.id);
		}
	});

	async function handleDelete(bookmarkId: string) {
		console.log('Entered handleDelete');
		try {
			// Step 1: Delete from Firestore
			const bookmarkRef = doc(db, `users/${current_user?.id}/bookmarks`, bookmarkId);
			await deleteDoc(bookmarkRef);

			// Step 2: Update local state
			bookmarks = bookmarks.filter((b) => b.bookmarkId !== bookmarkId);

			// Step 3: Update Svelte store
			const updatedBookmarks = bookmarks.filter((b) => b.bookmarkId !== bookmarkId);
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
								{#if current_user && current_user.profilePicture}
									<img
										alt=""
										src={current_user.profilePicture}
										class="w-32 h-32 bg-gray-300 dark:bg-gray-500 rounded-full mb-4 shrink-0"
									/>
								{/if}

								<h1 class="text-xl font-bold text-gray-900 dark:text-gray-200">
									{current_user?.display_name}
								</h1>
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
									<li class="mb-2 text-gray-900 dark:text-gray-200">Svelte</li>
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
							aria-label="Learn craps pages"
							class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"
						>
							<h2 class="text-xl font-bold mb-4">Learn Craps</h2>
							{#if bookmarks.length > 0}
								<div class="hidden lg:block" style="column-count: 3; column-gap: 1em; ">
									{#each bookmarks as bookmark}
										<div style="break-inside: avoid; margin-bottom: 1em;">
											<ProfileContentCard
												title={bookmark.title}
												description={bookmark.description}
												imageUrl={bookmark.imageUrl}
												pageUrl={bookmark.pageUrl}
												handleDelete={() => handleDelete(bookmark.bookmarkId)}
											/>
										</div>
									{/each}
								</div>
								<div class="hidden sm:block lg:hidden" style="column-count: 2; column-gap: 1em; ">
									{#each bookmarks as bookmark}
										<div style="break-inside: avoid; margin-bottom: 1em;">
											<ProfileContentCard
												title={bookmark.title}
												description={bookmark.description}
												imageUrl={bookmark.imageUrl}
												pageUrl={bookmark.pageUrl}
												handleDelete={() => handleDelete(bookmark.bookmarkId)}
											/>
										</div>
									{/each}
								</div>
								<div class="block sm:hidden" style="column-count: 1; column-gap: 1em; ">
									{#each bookmarks as bookmark}
										<div style="break-inside: avoid; margin-bottom: 1em;">
											<ProfileContentCard
												title={bookmark.title}
												description={bookmark.description}
												imageUrl={bookmark.imageUrl}
												pageUrl={bookmark.pageUrl}
												handleDelete={() => handleDelete(bookmark.bookmarkId)}
											/>
										</div>
									{/each}
								</div>
							{:else}
								<p>No bookmarks available</p>
							{/if}
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
