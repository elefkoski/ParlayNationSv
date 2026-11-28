import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "Contact";
let description = "If you have any questions, comments, or concerns, contact Parlay Nation so we can hear what you have to say and do what we can do to help.";
let url = "contact";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  return `${$$result.head += `<!-- HEAD_svelte-2m0zsb_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-pj15to">{
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "Contact",
			"description": "If you have any questions, comments, or concerns, contact Parlay Nation so we can hear what you have to say and do what we can do to help.",
			"url": "http://parlaynation.com/contact",
			"image": "http://parlaynation.com/images/contact/contact-header.jpg"
		}<\/script><!-- HEAD_svelte-2m0zsb_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="p-6"><div class="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8"><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center" data-svelte-h="svelte-1gatjd4">Contact</h1> <form class="home-page-body-bg-1 shadow-md rounded px-6 py-8 mb-4 w-full max-w-md"><div class="mb-4"><label class="block text-sm sm:text-base font-bold mb-2" for="name" data-svelte-h="svelte-18fvium">Name</label> <input class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input" id="name" type="text" placeholder="John Doe"${add_attribute("value", name, 0)}></div> <div class="mb-4"><label class="block text-sm sm:text-base font-bold mb-2" for="email" data-svelte-h="svelte-16o5wx0">Email</label> <input class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input" id="email" type="text" placeholder="john.doe@example.com"${add_attribute("value", email, 0)}></div> <div class="mb-4"><label class="block text-sm sm:text-base font-bold mb-2" for="message" data-svelte-h="svelte-17dmf24">Message</label> <textarea class="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring contact-input" id="message" placeholder="Type your message..." rows="5">${escape("")}</textarea></div> <div class="flex items-center justify-between" data-svelte-h="svelte-1waybde"><button class="btn contact-btn w-full sm:w-auto" type="submit">Submit</button></div></form></div></main>`;
    }
  })}`;
});
export {
  Page as default
};
