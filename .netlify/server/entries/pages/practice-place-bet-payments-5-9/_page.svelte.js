import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Practice Place Bet Payments 5 & 9";
let description = "Practice Place Bet Payments on the 5 & 9. Downloadable PDF to practice Craps.";
let url = "practice-place-bet-payments-5-9";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-1_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-2_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-3_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-4_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-5_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-6_960x1242.webp",
    "src/images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-7_960x1242.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-4oswv2_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1sowu2j">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice Place Bet Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-place-bet-payments-5-9.html"
		}<\/script><!-- HEAD_svelte-4oswv2_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render(
        $$result,
        {
          title: "Place Bet Payments for the 5 & 9"
        },
        {},
        {}
      )} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "5 & 9 Place Bet Payments",
          description: "60 cut-out cards meant to practice payments for Place Bets when the Point is 5 or 9. Bets range from $5 up to $5,000. You can cover the answer with your thumb, fold it over, or cut it off.",
          listPara: "The cards are broken into three difficulties:",
          listItems: ["20 Easy", "20 Medium", "20 Hard"],
          downloadUrl: "src/pdf/place-bet-payments-5-9.pdf"
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
