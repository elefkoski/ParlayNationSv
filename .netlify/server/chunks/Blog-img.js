import { c as create_ssr_component, a as subscribe, e as escape, f as each, d as add_attribute } from "./ssr.js";
import { u as user, i as isPageBookmarked } from "./userDataOperations.js";
const BlogH1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  console.log("BlogH1 component loading");
  let { sectionTitle = "Section Title" } = $$props;
  let { title = "The title" } = $$props;
  let { pageData = "" } = $$props;
  let { introParas = [""] } = $$props;
  let bookmarked = false;
  console.log("BlogH1 component loaded");
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  if ($$props.introParas === void 0 && $$bindings.introParas && introParas !== void 0)
    $$bindings.introParas(introParas);
  bookmarked = isPageBookmarked(pageData.pageUrl);
  $$unsubscribe_user();
  return `<header><h1 class="text-3xl md:text-5xl lg:text-6xl pb-2 font-bold article-h1">${escape(title)}</h1> <div class="flex justify-between"><span class="text-lg uppercase font-semibold page-section-title">${escape(sectionTitle)}</span> <div class="flex">${!bookmarked ? `<p class="text-sm bookmark pt-1 mr-1" data-svelte-h="svelte-fj3u3z">Bookmark this page</p> <button data-track="bookmark" data-svelte-h="svelte-96fn9t"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--bookmark)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg></button>` : `<p class="text-sm bookmark pt-1 mr-1" data-svelte-h="svelte-1pbx7es">Remove bookmark</p> <button data-track="unbookmark" data-svelte-h="svelte-hydv1d"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--bookmark)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg></button>`} ${``}</div></div></header> <section aria-label="Main paragraph">${each(introParas, (para) => {
    return `<p class="pb-4">${escape(para)} </p>`;
  })}</section>`;
});
const BlogH2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "theId" } = $$props;
  let { title = "The Title" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section${add_attribute("aria-label", title, 0)} class="blog"><h2${add_attribute("id", id, 0)} class="article-h2 font-semibold text-2xl pb-1">${escape(title)}</h2> ${slots.default ? slots.default({}) : ``}</section>`;
});
const Blog_img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "" } = $$props;
  let { url = "" } = $$props;
  let { img = "" } = $$props;
  let { title = "" } = $$props;
  let { alt = "Alt img text" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<figure><figcaption class="pt-2 text-lg">${escape(caption)}</figcaption> <img src="${"/images/" + escape(url, true) + "/" + escape(img, true) + "_640x360.webp"}"${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full block md:hidden lg:hidden"> <img src="${"/images/" + escape(url, true) + "/" + escape(img, true) + "_960x540.webp"}"${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full hidden md:block lg:hidden"> <img src="${"/images/" + escape(url, true) + "/" + escape(img, true) + "_1280x720.webp"}"${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full hidden sm:hidden md:hidden lg:block"></figure>`;
});
export {
  BlogH1 as B,
  Blog_img as a,
  BlogH2 as b
};
