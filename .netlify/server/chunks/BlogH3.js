import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const BlogH3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "The title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section${add_attribute("aria-label", title, 0)}><h3 class="article-h3 font-bold text-xl">${escape(title)}</h3> ${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  BlogH3 as B
};
