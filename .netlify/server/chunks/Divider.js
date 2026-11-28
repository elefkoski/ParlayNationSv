import { c as create_ssr_component, e as escape } from "./ssr.js";
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "h-[0.75px]" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<div class="${escape(height, true) + " divider my-6 w-3/4 mx-auto"}"></div>`;
});
export {
  Divider as D
};
