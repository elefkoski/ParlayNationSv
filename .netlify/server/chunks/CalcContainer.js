import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const CalcContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { aria = "Aria label" } = $$props;
  let { id = "" } = $$props;
  if ($$props.aria === void 0 && $$bindings.aria && aria !== void 0)
    $$bindings.aria(aria);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("aria-label", aria, 0)}${add_attribute("id", id, 0)} class="home-page-body-bg-1 p-6 rounded-lg shadow-lg flex-col space-y-6">${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  CalcContainer as C
};
