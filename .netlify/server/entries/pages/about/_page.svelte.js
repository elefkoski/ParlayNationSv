import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "About";
let description = "About me and why I made a site teaching people how to play the casino game of Craps.";
let url = "about";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1x6krs9_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1okfbg2">{
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
                "@type": "WebPage",
                "@id": "http://parlaynation.com/about",
                "name": "About | Parlay Nation - How to Play Craps",
                "description": "About me and why I made a site teaching people how to play the casino game of Craps.",
                "author": {
                    "@type": "Person",
                    "name": "Elvis Lefkoski"
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "src/images/about/about-header.jpg"
                },
                "url": "http://parlaynation.com/about"
            }
        }<\/script><!-- HEAD_svelte-1x6krs9_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="p-6" data-svelte-h="svelte-1mhhk3k"><div class="flex flex-col px-4 sm:px-6 lg:px-8"><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">About Me</h1> <div class="home-page-body-bg-1 shadow-md rounded-lg overflow-hidden w-full max-w-4xl mb-10"><div class="w-full text-center p-6"><p class="text-lg sm:text-xl">Welcome to Parlay Nation! I&#39;m Elvis, a passionate Craps dealer with over a decade of
						experience. My mission is to teach people how to play Craps and mentor aspiring dealers.
						Whether you&#39;re a beginner or a seasoned player, I&#39;ll guide you towards confident and
						successful Craps expertise while leveraging my love for coding and technology to enhance
						the learning experience. Join me on this thrilling journey as we uncover the secrets of
						Craps excellence together!</p></div></div> <div class="flex flex-col items-center"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"><div class="home-page-body-bg-1 shadow-md rounded px-6 py-8"><h2 class="text-xl sm:text-2xl font-bold mb-4">The Mission</h2> <p class="text-base sm:text-lg">At Parlay Nation, my mission is to empower individuals to become confident and
							successful Craps players by providing accessible resources, step-by-step guides, and
							expert advice. Join me on this exciting journey to unlock the secrets of Craps and
							elevate your game to new heights of success.</p></div> <div class="home-page-body-bg-1 shadow-md rounded px-6 py-8"><h2 class="text-xl sm:text-2xl font-bold mb-4">The Vision</h2> <p class="text-base sm:text-lg">My vision is to create a supportive platform where individuals can discover the joy of
							playing Craps and develop their skills, while fostering a community of confident and
							strategic players. Together, let&#39;s unlock the potential within each player and fully
							appreciate the game of Craps.</p></div></div></div></div></main>`;
    }
  })}`;
});
export {
  Page as default
};
