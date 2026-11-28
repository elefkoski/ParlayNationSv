<script lang="ts">
	import { onMount } from 'svelte';
	import { isInitializing } from '$lib/utils/auth';
	import { user, savedBookmarks } from '$lib/utils/userData';
	import { deleteProfilePageBookmark, fetchUserBookmarks } from '$lib/utils/userDataOperations';
	import SingleColumnLayout from '$lib/components/layouts/SingleColumnLayout.svelte';
	import ProfileBookmarkCard from '$lib/components/profilePage/ProfileBookmarkCard.svelte';

	let current_user: any = null;

	$: current_user = $user;

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
			await deleteProfilePageBookmark(bookmarkId);
			console.log('Bookmark deleted:', bookmarkId);
		} catch (error) {
			console.error('Error deleting bookmark:', error);
		}
	}
</script>

<svelte:head>
	<title>Profile | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href="http://parlaynation.com/profile" />
	<meta
		name="description"
		content="Your Parlay Nation profile: your account details and the craps pages you have bookmarked, all in one place."
	/>
	<meta property="og:url" content="http://parlaynation.com/profile" />
	<meta property="og:title" content="Profile | Parlay Nation - How to Play Craps" />
	<meta
		property="og:description"
		content="Your Parlay Nation profile: your account details and the craps pages you have bookmarked, all in one place."
	/>
	<meta property="og:image" content={'images/profile/profile-header.jpg'} />
	<meta name="twitter:image" content={'images/profile/profile-header.jpg'} />
</svelte:head>

<SingleColumnLayout>
	<body class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
		<main class="bg-gray-100 dark:bg-gray-800">
			<div class="container mx-auto py-8">
				<div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
					<section aria-label="Left column basic profile info" class="col-span-4 sm:col-span-3">
						<div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
							<div class="flex flex-col items-center">
								{#if current_user && current_user.photoURL}
									<img
										alt="Your profile photo"
										src={current_user.photoURL}
										class="w-32 h-32 bg-gray-300 dark:bg-gray-500 rounded-full mb-4 shrink-0"
									/>
								{/if}

								<h1 class="text-xl font-bold text-gray-900 dark:text-gray-200">
									{current_user?.displayName}
								</h1>
								<p class="text-gray-600 dark:text-gray-400">{current_user?.email ?? 'Parlay Nation Member'}</p>
								<div class="mt-6 flex flex-wrap gap-4 justify-center">
									<a href="/contact" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
										>Contact</a
									>
									<a
										href="/craps-simulator"
										class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded"
										>Play the Simulator</a
									>
								</div>
							</div>
							<hr class="my-6 border-t border-gray-300 dark:border-gray-600" />
							<div class="flex flex-col">
								<span
									class="text-gray-600 dark:text-gray-400 uppercase font-bold tracking-wider mb-2"
									>Keep Learning</span
								>
								<ul>
									<li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps" class="underline">Learn Craps</a></li>
									<li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/practice-craps" class="underline">Practice Craps</a></li>
									<li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps-calculators" class="underline">Craps Calculators</a></li>
									<li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps-simulator" class="underline">Craps Simulator</a></li>
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
							{#if isInitializing}
								{#if $savedBookmarks.length > 0}
									<div class="hidden lg:block" style="column-count: 3; column-gap: 1em; ">
										{#each $savedBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
												<ProfileBookmarkCard
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
										{#each $savedBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
												<ProfileBookmarkCard
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
										{#each $savedBookmarks as bookmark (bookmark.bookmarkId)}
											<div style="break-inside: avoid; margin-bottom:1em">
												<ProfileBookmarkCard
													title={bookmark.title}
													description={bookmark.description}
													imageUrl={bookmark.imageUrl}
													pageUrl={bookmark.pageUrl}
													handleDelete={() => handleDelete(bookmark.bookmarkId)}
												/>
											</div>
										{/each}
									</div>
								{:else if current_user && !isInitializing}
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
							<h2 class="text-xl font-bold mt-6 mb-4">From the Craps Blog</h2>
							<div class="mb-6">
								<p class="font-bold">
									<a href="/rank-of-craps-bets" class="underline">Rank of Craps Bets</a>
								</p>
								<p class="mt-2">
									Ranked for your advantage: Explore every Craps bet from Odds to Propositions,
									mastering the game by understanding their house edges.
								</p>
							</div>
							<div class="mb-6">
								<p class="font-bold">
									<a href="/first-time-craps-player" class="underline">First Time at the Craps Table</a>
								</p>
								<p class="mt-2">
									New to Craps? Learn the essentials with our guide, featuring strategies to block
									out the noise, utilize dealer advice, and gradually expand your gameplay
									knowledge.
								</p>
							</div>
							<div class="mb-6">
								<p class="font-bold">
									<a href="/craps-superstitions" class="underline">Craps Superstitions</a>
								</p>
								<p class="mt-2">
									Discover the psychology of Craps superstitions: what to do when the dice get cold
									or why a lucky charm can make all the difference. Perfect your play with practical
									advice.
								</p>
							</div>
						</section>
					</section>
				</div>
			</div>
		</main>
	</body>
</SingleColumnLayout>
