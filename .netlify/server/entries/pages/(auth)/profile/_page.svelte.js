import { c as create_ssr_component, d as add_attribute, e as escape, a as subscribe, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { i as isInitializing } from "../../../../chunks/auth.js";
import { u as user, a as savedBookmarks, d as deleteProfilePageBookmark } from "../../../../chunks/userDataOperations.js";
import { S as SingleColumnLayout } from "../../../../chunks/SingleColumnLayout.js";
const ProfileBookmarkCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "My Content Page Title" } = $$props;
  let { description = "A description to my page" } = $$props;
  let { imageUrl = "https://picsum.photos/1280/720" } = $$props;
  let { pageUrl = "/" } = $$props;
  let { handleDelete } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.pageUrl === void 0 && $$bindings.pageUrl && pageUrl !== void 0)
    $$bindings.pageUrl(pageUrl);
  if ($$props.handleDelete === void 0 && $$bindings.handleDelete && handleDelete !== void 0)
    $$bindings.handleDelete(handleDelete);
  return `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a${add_attribute("href", pageUrl, 0)}><img class="rounded-t-lg"${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title, 0)}></a> <div class="p-5"><a${add_attribute("href", pageUrl, 0)}><h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">${escape(title)}</h5></a> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${escape(description)}</p> <div class=""><button class="bg-red-500 float-right px-2 py-1 rounded-lg text-white" data-svelte-h="svelte-w555cx">Delete</button> <p class="clear-both"></p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $savedBookmarks, $$unsubscribe_savedBookmarks;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_savedBookmarks = subscribe(savedBookmarks, (value) => $savedBookmarks = value);
  let current_user = null;
  async function handleDelete(bookmarkId) {
    if (!bookmarkId) {
      console.error("Cannot delete bookmark: Bookmark ID is undefined.");
      return;
    }
    try {
      await deleteProfilePageBookmark(bookmarkId);
      console.log("Bookmark deleted:", bookmarkId);
    } catch (error) {
      console.error("Error deleting bookmark:", error);
    }
  }
  current_user = $user;
  $$unsubscribe_user();
  $$unsubscribe_savedBookmarks();
  return `${$$result.head += `<!-- HEAD_svelte-1abuj34_START -->${$$result.title = `<title>Profile | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical" href="http://parlaynation.com/profile"><meta name="description" content="Your Parlay Nation profile: your account details and the craps pages you have bookmarked, all in one place."><meta property="og:url" content="http://parlaynation.com/profile"><meta property="og:title" content="Profile | Parlay Nation - How to Play Craps"><meta property="og:description" content="Your Parlay Nation profile: your account details and the craps pages you have bookmarked, all in one place."><meta property="og:image"${add_attribute("content", "images/profile/profile-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/profile/profile-header.jpg", 0)}><!-- HEAD_svelte-1abuj34_END -->`, ""} ${validate_component(SingleColumnLayout, "SingleColumnLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<body class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"><main class="bg-gray-100 dark:bg-gray-800"><div class="container mx-auto py-8"><div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4"><section aria-label="Left column basic profile info" class="col-span-4 sm:col-span-3"><div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"><div class="flex flex-col items-center">${current_user && current_user.photoURL ? `<img alt="Your profile photo"${add_attribute("src", current_user.photoURL, 0)} class="w-32 h-32 bg-gray-300 dark:bg-gray-500 rounded-full mb-4 shrink-0">` : ``} <h1 class="text-xl font-bold text-gray-900 dark:text-gray-200">${escape(current_user?.displayName)}</h1> <p class="text-gray-600 dark:text-gray-400">${escape(current_user?.email ?? "Parlay Nation Member")}</p> <div class="mt-6 flex flex-wrap gap-4 justify-center" data-svelte-h="svelte-1tuxuq1"><a href="/contact" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a> <a href="/craps-simulator" class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded">Play the Simulator</a></div></div> <hr class="my-6 border-t border-gray-300 dark:border-gray-600"> <div class="flex flex-col" data-svelte-h="svelte-1eaci0a"><span class="text-gray-600 dark:text-gray-400 uppercase font-bold tracking-wider mb-2">Keep Learning</span> <ul><li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps" class="underline">Learn Craps</a></li> <li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/practice-craps" class="underline">Practice Craps</a></li> <li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps-calculators" class="underline">Craps Calculators</a></li> <li class="mb-2 text-gray-900 dark:text-gray-200"><a href="/craps-simulator" class="underline">Craps Simulator</a></li></ul></div></div></section> <section aria-label="Right column profile info" class="col-span-4 flex-col sm:col-span-9 space-y-3"><section aria-label="Learn craps pages" class="bg-white dark:bg-gray-700 shadow rounded-lg p-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-hntlux">Learn Craps</h2> ${isInitializing ? `${$savedBookmarks.length > 0 ? `<div class="hidden lg:block" style="column-count: 3; column-gap: 1em; ">${each($savedBookmarks, (bookmark) => {
        return `<div style="break-inside: avoid; margin-bottom:1em">${validate_component(ProfileBookmarkCard, "ProfileBookmarkCard").$$render(
          $$result,
          {
            title: bookmark.title,
            description: bookmark.description,
            imageUrl: bookmark.imageUrl,
            pageUrl: bookmark.pageUrl,
            handleDelete: () => handleDelete(bookmark.bookmarkId)
          },
          {},
          {}
        )} </div>`;
      })}</div> <div class="hidden sm:block lg:hidden" style="column-count: 2; column-gap: 1em; ">${each($savedBookmarks, (bookmark) => {
        return `<div style="break-inside: avoid; margin-bottom:1em">${validate_component(ProfileBookmarkCard, "ProfileBookmarkCard").$$render(
          $$result,
          {
            title: bookmark.title,
            description: bookmark.description,
            imageUrl: bookmark.imageUrl,
            pageUrl: bookmark.pageUrl,
            handleDelete: () => handleDelete(bookmark.bookmarkId)
          },
          {},
          {}
        )} </div>`;
      })}</div> <div class="block sm:hidden" style="column-count: 1; column-gap: 1em; ">${each($savedBookmarks, (bookmark) => {
        return `<div style="break-inside: avoid; margin-bottom:1em">${validate_component(ProfileBookmarkCard, "ProfileBookmarkCard").$$render(
          $$result,
          {
            title: bookmark.title,
            description: bookmark.description,
            imageUrl: bookmark.imageUrl,
            pageUrl: bookmark.pageUrl,
            handleDelete: () => handleDelete(bookmark.bookmarkId)
          },
          {},
          {}
        )} </div>`;
      })}</div>` : `${current_user && !isInitializing ? `<p data-svelte-h="svelte-a5tb87">Loading bookmarks...</p>` : `<p data-svelte-h="svelte-hwhlyb">No bookmarks available</p>`}`}` : ``}</section> <section aria-label="Craps articles" class="bg-white dark:bg-gray-700 shadow rounded-lg p-6" data-svelte-h="svelte-1hitci3"><h2 class="text-xl font-bold mt-6 mb-4">From the Craps Blog</h2> <div class="mb-6"><p class="font-bold"><a href="/rank-of-craps-bets" class="underline">Rank of Craps Bets</a></p> <p class="mt-2">Ranked for your advantage: Explore every Craps bet from Odds to Propositions,
									mastering the game by understanding their house edges.</p></div> <div class="mb-6"><p class="font-bold"><a href="/first-time-craps-player" class="underline">First Time at the Craps Table</a></p> <p class="mt-2">New to Craps? Learn the essentials with our guide, featuring strategies to block
									out the noise, utilize dealer advice, and gradually expand your gameplay
									knowledge.</p></div> <div class="mb-6"><p class="font-bold"><a href="/craps-superstitions" class="underline">Craps Superstitions</a></p> <p class="mt-2">Discover the psychology of Craps superstitions: what to do when the dice get cold
									or why a lucky charm can make all the difference. Perfect your play with practical
									advice.</p></div></section></section></div></div></main></body>`;
    }
  })}`;
});
export {
  Page as default
};
