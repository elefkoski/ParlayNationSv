import { c as create_ssr_component, j as createEventDispatcher, f as each, e as escape } from "./ssr.js";
const CalcRoll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rollInfo = [] } = $$props;
  let selectedValue = null;
  createEventDispatcher();
  if ($$props.rollInfo === void 0 && $$bindings.rollInfo && rollInfo !== void 0)
    $$bindings.rollInfo(rollInfo);
  return `<div class="flex mb-3 space-x-3">${each(rollInfo, ({ value, title }) => {
    return `<div class="flex flex-col items-center justify-center"><button class="${"btn calculator-roll-btn flex font-extrabold h-16 items-center justify-center text-3xl w-16 " + escape(
      selectedValue === value ? "border-4 calculator-roll-btn-active" : "",
      true
    )}" type="button">${escape(value)}</button> <h4 class="text-white font-medium">${escape(title)}</h4> </div>`;
  })}</div>`;
});
export {
  CalcRoll as C
};
