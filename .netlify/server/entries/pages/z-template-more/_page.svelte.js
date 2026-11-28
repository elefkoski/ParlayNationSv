import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "";
let description = "";
let url = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sets = [
    {
      question: "Whare are the most common bets on the Craps table?",
      answer: "The most common bets on the Craps table are the Pass Line with Odds, Place bets on the 6 and 8, and possibly some Hardways. If you learn these few bets then you'll be able to play with everyone else while having a decent understanding of the game.",
      hashTags: ["passLineBets", "passLineOdds", "placeBets", "theHardways"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1bkx6b2_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><!-- HEAD_svelte-1bkx6b2_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<main aria-label="Main content" class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6"><h1 class="text-4xl font-bold mb-10 text-center" data-svelte-h="svelte-1dz81p9">Craps FAQ</h1> ${each(sets, (set) => {
        return `<div class="mb-8 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"><div class="px-6 py-4"><h2 class="font-bold text-xl mb-2 text-gray-800 dark:text-gray-300">${escape(set.question)}</h2> <p class="text-gray-700 dark:text-gray-400 text-base">${escape(set.answer)}</p></div> <div class="px-6 pt-4 pb-2"><ul>${each(set.hashTags, (hashTag) => {
          return `<li class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-gray-300">#${escape(hashTag)} </li>`;
        })} </ul></div> </div>`;
      })}</main>`;
    }
  })}`;
});
export {
  Page as default
};
