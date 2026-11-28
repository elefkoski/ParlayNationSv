import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const CalcInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "the title" } = $$props;
  let { id = "the_id" } = $$props;
  let { step = 5 } = $$props;
  let { pId = "the p id" } = $$props;
  let { placeholder = "Enter amount" } = $$props;
  let { calculate } = $$props;
  let inputValue;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.pId === void 0 && $$bindings.pId && pId !== void 0)
    $$bindings.pId(pId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.calculate === void 0 && $$bindings.calculate && calculate !== void 0)
    $$bindings.calculate(calculate);
  return `<form autocomplete="off" novalidate><label${add_attribute("for", id, 0)} class="block font-medium calc-input-label">${escape(title)}</label> <input type="number" class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"${add_attribute("id", id, 0)} inputmode="numeric" pattern="[0-9]*"${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", id, 0)}${add_attribute("step", step, 0)}${add_attribute("value", inputValue, 0)}> <button data-track="${"calc-" + escape(id, true)}" class="calculator-btn p-2 rounded mt-2" type="submit">Check</button> <p${add_attribute("id", pId, 0)} class=""></p></form>`;
});
export {
  CalcInput as C
};
