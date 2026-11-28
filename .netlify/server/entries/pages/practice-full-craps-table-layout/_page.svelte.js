import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "Printable Full Craps Table Layout";
let description = "Practice using a printable Craps table layout. First page has the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.";
let url = "practice-full-craps-table-layout";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "src/images/practice-full-craps-table-layout/full-craps-table-layout_1200x923.webp",
    "src/images/practice-full-craps-table-layout/full-craps-table-layout-empty_1200x923.webp"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1mgyofz_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-fq79k8">{
		  "@context": "http://schema.org/",
			"@type": "DigitalDocument",
			"author":{
			  "@type": "Person",
			  "name": "Elvis Lefkoski"
			  },
			"description": "Practice using a printable Craps table layout. First page has the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.",
			"url": "https://parlaynation.com/practice-full-craps-table-layout.html"
		}<\/script><!-- HEAD_svelte-1mgyofz_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Full Craps Table Layout" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Full Craps Table Layout",
          description: "Practice learning Craps by studying the Craps table layout. Test yourself using the empty Craps table layout. This is the whole version of the Craps table layout. If you would like to use a larger layout which may be easier to read, visit the Half Craps Table Layout.",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/full-craps-table-layout.pdf"
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
