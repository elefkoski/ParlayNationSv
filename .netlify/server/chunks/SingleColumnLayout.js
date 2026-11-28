import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { F as Footer } from "./Footer.js";
const SingleColumnLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  SingleColumnLayout as S
};
