import { c as create_ssr_component, a as subscribe, e as escape } from "./ssr.js";
import { u as user, i as isPageBookmarked } from "./userDataOperations.js";
const Content_h1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  console.log("Content-h1 component loading");
  let { sectionTitle = "Section Title" } = $$props;
  let { title = "The title" } = $$props;
  let { pageData = "" } = $$props;
  let bookmarked = false;
  console.log("Content-h1 component loaded");
  if ($$props.sectionTitle === void 0 && $$bindings.sectionTitle && sectionTitle !== void 0)
    $$bindings.sectionTitle(sectionTitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0)
    $$bindings.pageData(pageData);
  bookmarked = isPageBookmarked(pageData.pageUrl);
  $$unsubscribe_user();
  return `<header><div class="flex justify-between"><span class="text-lg uppercase font-semibold page-section-title">${escape(sectionTitle)}</span> <div class="flex">${!bookmarked ? `<p class="text-sm bookmark pt-1 mr-1" data-svelte-h="svelte-fj3u3z">Bookmark this page</p> <button data-track="bookmark" data-svelte-h="svelte-96fn9t"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--bookmark)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg></button> ${``}` : `<p class="text-sm bookmark pt-1 mr-1" data-svelte-h="svelte-1pbx7es">Remove bookmark</p> <button data-track="unbookmark" data-svelte-h="svelte-hydv1d"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--bookmark)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg></button>`}</div></div> <h1 class="article-h1 text-3xl pb-2 font-bold">${escape(title)}</h1></header> <section aria-label="Intro Section">${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Content_h1 as C
};
