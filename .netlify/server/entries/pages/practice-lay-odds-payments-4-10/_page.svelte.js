import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Practice Lay Odds Payments 4 & 10";
let description = "Practice Lay Odds Payments on the 4 & 10. Downloadable PDF to practice Craps.";
let url = "practice-lay-odds-payments-4-10";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-1_960x1242.webp",
    "src/images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-2_960x1242.webp",
    "src/images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-3_960x1242.webp",
    "src/images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-4_960x1242.webp",
    "src/images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-5_960x1242.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-60yj6f_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1cum4wg">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice Lay Odds Payments on the 4 & 10. Downloadable PDF to practice Craps.",
			"url": "https://parlaynation.com/practice-lay-odds-payments-4-10.html"
		}<\/script><!-- HEAD_svelte-60yj6f_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render(
        $$result,
        {
          title: "Lay Odds Payments for the 4 & 10"
        },
        {},
        {}
      )} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "4 & 10 Lay Odds Payments",
          description: "40 cut-out cards meant to practice payments for Lay Odds when the Point is 4 or 10. Bets range from $2 up to $4,952. You can cover the answer with your thumb, fold it over, or cut it off.",
          listPara: "The cards are broken into two difficulties:",
          listItems: ["20 Easy", "20 Medium"],
          downloadUrl: "src/pdf/lay-odds-payments-4-10.pdf"
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
