<script lang="ts">
	import { onMount } from 'svelte';
	import { isDataReady } from '$lib/utils/auth';
	import { user, bookmarks } from '$lib/utils/userData';
	import { deleteUserBookmark, fetchUserBookmarks } from '$lib/utils/userDataOperations';
	import SingleColumnLayout from '$lib/components/layouts/SingleColumnLayout.svelte';
	import ProfileContentCard from '$lib/components/profilePage/ProfileContentCard.svelte';

	let current_user: any = null;

	$: current_user = $user;
	$: allBookmarks = $bookmarks;

	onMount(async () => {
		if (current_user) {
			await fetchUserBookmarks(current_user.id);
		}
	});

	async function handleDelete(bookmarkId: string) {
		if (!bookmarkId) {
			console.error('Cannot delete bookmark: Bookmark ID is undefined.');
			return;
		}
		try {
			await deleteUserBookmark(current_user.id, bookmarkId);
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
								{#if current_user && current_user.profile && current_user.profile.profilePicture}
									<img
										alt=""
										src={current_user.profile.profilePicture}
										class="w-32 h-32 bg-gray-300 dark:bg-gray-500 rounded-full mb-4 shrink-0"
									/>
								{/if}

								<h1 class="text-xl font-bold text-gray-900 dark:text-gray-200">
									{current_user?.profile.displayName}
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
							{#if isDataReady}
								{#if allBookmarks.length > 0}
									<div class="hidden lg:block" style="column-count: 3; column-gap: 1em; ">
										{#each allBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
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
										{#each allBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
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
										{#each allBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
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
								{:else if current_user && !isDataReady}
									<p>Loading bookmarks...</p>
								{:else}
									<p>No bookmarks available</p>
								{/if}
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
