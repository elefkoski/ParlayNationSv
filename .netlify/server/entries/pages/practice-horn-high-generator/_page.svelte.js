import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Practice Horn High Generator";
let description = "Practice Horn High payments with this random Horn High Generator. Pull one of each type of card and figure out the payment.";
let url = "practice-horn-high-generator";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "/images/practice-horn-high-generator/bet-cards_960x1242.webp",
    "/images/practice-horn-high-generator/roll-cards_960x1242.webp",
    "/images/practice-horn-high-generator/amount-cards_960x1242.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1hxl2ox_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1b547sq">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice Horn High payments with this random Horn High Generator. Pull one of each type of card and figure out the payment.",
			"url": "https://parlaynation.com/practice-horn-high-generator.html"
		}<\/script><!-- HEAD_svelte-1hxl2ox_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Horn High Generator" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Horn High Generator",
          description: "Practice learning Craps by practicing with the Horn High Generator. First pick an amount, pick a bet, pick a roll then figure out the payment.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/horn-high-generator.pdf"
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
