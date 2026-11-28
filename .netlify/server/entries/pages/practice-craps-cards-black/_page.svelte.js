import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Craps Cards - Black";
let description = "Practice playing Craps with Craps Cards. Play Craps with cards using 36 black cut-out cards.";
let url = "practice-craps-cards-black";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-craps-cards-black/black-craps-cards-page-1_960x1242.webp",
    "src/images/practice-craps-cards-black/black-craps-cards-page-2_960x1242.webp",
    "src/images/practice-craps-cards-black/black-craps-cards-page-3_960x1242.webp",
    "src/images/practice-craps-cards-black/black-craps-cards-page-4_960x1242.webp",
    "src/images/practice-craps-cards-black/black-craps-cards-page-5_960x1242.webp",
    "src/images/practice-craps-cards-black/black-craps-cards-page-6_960x1242.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1lujttu_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-98r5af">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice playing Craps with Craps Cards. Play Craps with cards using 36 black cut-out cards.",
			"url": "https://parlaynation.com/practice-craps-cards-black.html"
		}<\/script><!-- HEAD_svelte-1lujttu_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Practice Craps Cards - Black" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Black Craps Cards",
          description: "Practice playing Craps with 36 cut-out Craps cards. 36 Craps cards show you every combination of the dice so you can play or practice Craps with cards. Heavy stock paper is recommended in order for the ink not to show through the back. Or you can print the Grey Craps Cards so the ink will not show through the back.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/black-craps-cards.pdf"
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
