import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Printable Half Craps Table Layout";
let description = "Practice using a printable Craps table layout. First page has half the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.";
let url = "practice-half-craps-table-layout";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-half-craps-table-layout/half-craps-table-layout_1200x923.webp",
    "src/images/practice-half-craps-table-layout/half-craps-table-layout-empty_1200x923.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-luakgc_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-cp4wbl">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice using a printable Craps table layout. First page has half the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.",
			"url": "https://parlaynation.com/practice-half-craps-table-layout.html"
		}<\/script><!-- HEAD_svelte-luakgc_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Half Craps Table Layout" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Half Craps Table Layout",
          description: "Practice learning Craps by studying the Craps table layout then test yourself using the half empty Craps table layout. This half version is meant to be easier to read and write on. If you would like to view the entire Craps table layout visit Full Craps Table Layout.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/half-craps-table-layout.pdf"
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
