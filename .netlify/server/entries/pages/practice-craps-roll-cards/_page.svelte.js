import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Practice Craps Roll Cards";
let description = "Practice determining what is a roll or not a roll with Craps Roll Cards.";
let url = "practice-craps-roll-cards";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-craps-roll-cards/craps-roll-cards-page-1_960x1242.webp",
    "src/images/practice-craps-roll-cards/craps-roll-cards-page-2_960x1242.webp",
    "src/images/practice-craps-roll-cards/craps-roll-cards-page-3_960x1242.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-vz9058_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-17d16oh">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice determining what is a roll or not a roll with Craps Roll Cards.",
			"url": "https://parlaynation.com/practice-craps-roll-cards.html"
		}<\/script><!-- HEAD_svelte-vz9058_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Practice Craps Roll Cards" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Practice Craps Roll Cards",
          description: "Practice determining what is a roll and what is not a roll using the Roll Cards. There are 14 images of dice landing in different positions. Some are considered a roll and some are considered a no roll. What is considered a roll differs between each casino, boxperson, and dealer. What one person or casino may call a roll may not be what another casino or person calls a roll.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/craps-roll-cards.pdf"
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
