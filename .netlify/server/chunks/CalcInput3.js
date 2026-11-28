import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { C as CalcRoll } from "./CalcRoll.js";
const CalcInput3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "the_id" } = $$props;
  let { idTwo = "the_id" } = $$props;
  let { pId = "the p id" } = $$props;
  let { placeholder = "Enter amount" } = $$props;
  let { placeholderTwo = "Enter second amount" } = $$props;
  let { rollValues = [] } = $$props;
  let { valueTitles = [] } = $$props;
  const rollInfo = rollValues.map((value, index) => {
    return { value, title: valueTitles[index] };
  });
  let { step = 5 } = $$props;
  let { title = "the title" } = $$props;
  let { titleTwo = "the second title" } = $$props;
  let { calculate } = $$props;
  let inputValue;
  let inputValueTwo;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.idTwo === void 0 && $$bindings.idTwo && idTwo !== void 0)
    $$bindings.idTwo(idTwo);
  if ($$props.pId === void 0 && $$bindings.pId && pId !== void 0)
    $$bindings.pId(pId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderTwo === void 0 && $$bindings.placeholderTwo && placeholderTwo !== void 0)
    $$bindings.placeholderTwo(placeholderTwo);
  if ($$props.rollValues === void 0 && $$bindings.rollValues && rollValues !== void 0)
    $$bindings.rollValues(rollValues);
  if ($$props.valueTitles === void 0 && $$bindings.valueTitles && valueTitles !== void 0)
    $$bindings.valueTitles(valueTitles);
  if ($$props.rollInfo === void 0 && $$bindings.rollInfo && rollInfo !== void 0)
    $$bindings.rollInfo(rollInfo);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTwo === void 0 && $$bindings.titleTwo && titleTwo !== void 0)
    $$bindings.titleTwo(titleTwo);
  if ($$props.calculate === void 0 && $$bindings.calculate && calculate !== void 0)
    $$bindings.calculate(calculate);
  return `<form autocomplete="off" novalidate><div><label${add_attribute("for", id, 0)} class="block font-medium calc-input-label">${escape(title)}</label> <input type="number" class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"${add_attribute("id", id, 0)} inputmode="numeric" pattern="[0-9]*"${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", id, 0)}${add_attribute("step", step, 0)}${add_attribute("value", inputValue, 0)}></div> <div><label${add_attribute("for", idTwo, 0)} class="block font-medium mt-2">${escape(titleTwo)}</label> <input type="number" class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"${add_attribute("id", idTwo, 0)} inputmode="numeric" pattern="[0-9]*"${add_attribute("placeholder", placeholderTwo, 0)}${add_attribute("name", idTwo, 0)}${add_attribute("step", step, 0)}${add_attribute("value", inputValueTwo, 0)}></div> <div><p class="font-medium mt-2" data-svelte-h="svelte-1v95c9x">Pick what rolled:</p> ${validate_component(CalcRoll, "CalcRoll").$$render($$result, { rollInfo }, {}, {})} <p class="mb-2"${add_attribute("id", pId, 0)}></p> <button class="calculator-btn p-2 rounded" type="submit" data-svelte-h="svelte-ro3r3b">Check</button></div></form>`;
});
export {
  CalcInput3 as C
};
