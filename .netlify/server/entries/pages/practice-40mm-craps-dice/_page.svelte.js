import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "40mm Foldable Craps Dice";
let description = "Practice playing Craps with dice by making your own Craps dice. Print out a pair of 40mm Craps dice that can be cut-out and folded into 3D Craps dice.";
let url = "practice-40mm-craps-dice";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-txyxbn_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1thnixg">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice playing Craps with dice by making your own Craps dice. Print out a pair of 40mm Craps dice that can be cut-out and folded into 3D Craps dice.",
			"url": "https://parlaynation.com/practice-40mm-craps-dice.html"
		}<\/script><!-- HEAD_svelte-txyxbn_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Foldable Craps Dice - 40mm" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8"><div class="w-full" data-svelte-h="svelte-1pbdpng"><div class="relative"><img class="w-full h-auto" src="/images/practice-40mm-craps-dice/40mm-foldable-craps-dice_960x1242.webp" alt="40mm Foldable Craps Dice"> <div class="absolute inset-0 bg-black dark:bg-black opacity-0 dark:opacity-20"></div></div></div> ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "40mm Foldable Craps Dice",
          description: "Practice playing Craps by printing two 40mm foldable Craps dice. These dice are a little more than double the size of a real die (19mm). Use heavy stock paper to make even sturdier folded Craps dice.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/40mm-foldable-craps-dice.pdf"
        },
        {},
        {}
      )}</div> ${validate_component(PracticeThumbnailCarousel, "PracticeThumbnailCarousel").$$render($$result, {}, {}, {})}</main>`;
    }
  })}`;
});
export {
  Page as default
};
