import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { href = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a data-track="${"link-" + escape(href, true)}"${add_attribute("href", href, 0)} class="hyperlink">${escape(text)}</a>`;
});
export {
  Link as L
};
