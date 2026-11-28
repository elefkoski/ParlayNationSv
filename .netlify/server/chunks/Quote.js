import { c as create_ssr_component, e as escape } from "./ssr.js";
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<span class="quote">&quot;${escape(text)}&quot;</span>`;
});
export {
  Quote as Q
};
