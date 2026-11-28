import { c as create_ssr_component, a as subscribe, o as onDestroy, g as get_store_value } from "../../chunks/ssr.js";
/* empty css                *//* empty css                   */import "../../chunks/theme.js";
import "../../chunks/auth.js";
import { u as user, s as syncLocalToFirebase } from "../../chunks/userDataOperations.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  console.log("+layout component loading");
  onDestroy(() => {
    if (typeof window !== "undefined") {
      detachBeforeUnloadListener();
    }
  });
  function detachBeforeUnloadListener() {
    console.log("Detaching beforeunload listener");
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
  async function handleBeforeUnload() {
    console.log("Handling beforeunload event.");
    const current_user = get_store_value(user);
    if (current_user?.id) {
      console.log("Syncing user data before unload...");
      await syncLocalToFirebase();
    }
  }
  console.log("+layout component loaded");
  {
    {
      console.log("User in +layout:", $user);
    }
  }
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-4x1hda_START --><link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png"><meta name="author" content="Elvis Lefkoski"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="Parlay Nation"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script async src="https://www.googletagmanager.com/gtag/js?id=G-N6DDTMN7FM" data-svelte-h="svelte-esg29s"><\/script><script data-svelte-h="svelte-1i56beg">window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-N6DDTMN7FM');<\/script><!-- HEAD_svelte-4x1hda_END -->`, ""} ${`<div class="loading-page bg-gray-900 text-white min-h-screen flex items-center justify-center" data-svelte-h="svelte-aq5u7n">Loading...</div>`}`;
});
export {
  Layout as default
};
