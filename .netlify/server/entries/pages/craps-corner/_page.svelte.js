import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "Craps Corner";
let description = "Craps Corner is a place where you can find all the other craps related odds and ends.";
let url = "craps-corner";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1j2clr5_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-152ygfu">{
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "Craps Corner",
			"description": "Craps Corner is a place where you can find all the other craps related odds and ends.",
			"url": "http://parlaynation.com/craps-corner",
			"image": "http://parlaynation.com/images/craps-corner/craps-corner-header.jpg"
		}<\/script><!-- HEAD_svelte-1j2clr5_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="p-6" data-svelte-h="svelte-yv84cf"><h1 class="text-4xl font-bold mb-10 text-center">Craps Corner</h1> <p class="text-lg mb-10">Craps Corner is where the rest of Parlay Nation lives: the tools and references that do not
			fit inside a lesson. Run the numbers, practice on the simulator, get a quick answer, or
			brush up on the lingo.</p> <h2 class="mb-4 text-2xl"><a href="craps-calculators" class="underline">Craps Calculators</a></h2> <p class="text-lg mb-8">Craps bet calculators for all the bets on the Craps table. Look up exactly what a bet pays
			before you put your money down.</p> <h2 class="mb-4 text-2xl"><a href="craps-simulator" class="underline">Craps Simulator</a></h2> <p class="text-lg mb-8">Practice on a full Craps table without risking a dollar. Roll the dice, place your bets,
			and learn how the game flows at your own pace.</p> <h2 class="mb-4 text-2xl"><a href="faq" class="underline">Craps FAQ</a></h2> <p class="text-lg mb-8">The questions every new player asks, answered straight: the most common bets, what the Pass
			Line is, why eleven is called Yo, and more.</p> <h2 class="mb-4 text-2xl"><a href="glossary" class="underline">Craps Glossary</a></h2> <p class="text-lg mb-8">Talking like a Craps player starts with the words. Look up the terms you hear at the table,
			from the Pass Line to the Hardways.</p></main>`;
    }
  })}`;
});
export {
  Page as default
};
