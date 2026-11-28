import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
import { P as PracticeCarousel } from "../../../chunks/PracticeCarousel.js";
import { P as Practice_h1, a as PracticeDescription, b as PracticeThumbnailCarousel } from "../../../chunks/PracticeThumbnailCarousel.js";
let title = "";
let description = "";
let url = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = ["/images/practice-___/___-page-1_1200x630.webp"];
  return `${$$result.head += `<!-- HEAD_svelte-72qmpc_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><!-- HEAD_svelte-72qmpc_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(Practice_h1, "PracticeH1").$$render($$result, { title: "Title Me" }, {}, {})} <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 pb-8">${validate_component(PracticeCarousel, "PracticeCarousel").$$render($$result, { slides }, {}, {})} ${validate_component(PracticeDescription, "PracticeDescription").$$render(
        $$result,
        {
          title: "Second Title Me",
          description: "",
          listPara: "",
          listItems: [],
          downloadUrl: "src/pdf/____.pdf"
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
