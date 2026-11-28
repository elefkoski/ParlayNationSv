import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const Content_h3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "The title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<section${add_attribute("aria-label", title, 0)}><h3 class="article-h3 text-xl pb-1">${escape(title)}</h3> ${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Content_h3 as C
};
