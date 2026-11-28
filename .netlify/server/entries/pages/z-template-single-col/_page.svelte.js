import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { S as SingleColumnLayout } from "../../../chunks/SingleColumnLayout.js";
let title = "";
let description = "";
let url = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-72qmpc_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><!-- HEAD_svelte-72qmpc_END -->`, ""} ${validate_component(SingleColumnLayout, "SingleColumnLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6" data-svelte-h="svelte-fmzpoi"><div>1</div> <div>2</div></main>`;
    }
  })}`;
});
export {
  Page as default
};
