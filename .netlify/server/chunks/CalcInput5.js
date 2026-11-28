import { c as create_ssr_component, j as createEventDispatcher, f as each, e as escape, d as add_attribute, v as validate_component } from "./ssr.js";
const CalcRoll2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rollInfo = [] } = $$props;
  let selectedValue = null;
  createEventDispatcher();
  if ($$props.rollInfo === void 0 && $$bindings.rollInfo && rollInfo !== void 0)
    $$bindings.rollInfo(rollInfo);
  return `<div class="flex mb-3 space-x-3">${each(rollInfo, ({ rollCombo, title }) => {
    return `<div class="flex flex-col items-center justify-center"><button class="${"btn calculator-roll-btn flex font-extrabold h-16 items-center justify-center text-2xl tracking-tighter w-16 whitespace-nowrap " + escape(
      selectedValue === rollCombo ? "border-4 calculator-roll-btn-active" : "",
      true
    )}" type="button">${escape(rollCombo)}</button> <h4 class="font-medium">${escape(title)}</h4> </div>`;
  })}</div>`;
});
const CalcInput5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "the_id" } = $$props;
  let { mainTitle = "main title" } = $$props;
  let { pId = "the p id" } = $$props;
  let { placeholder = "Enter amount" } = $$props;
  let { rollCombo = [] } = $$props;
  let { valueTitles = [] } = $$props;
  const rollInfo = rollCombo.map((value, index) => {
    return {
      rollCombo: rollCombo[index],
      title: valueTitles[index]
    };
  });
  let { step = 5 } = $$props;
  let { title = "the title" } = $$props;
  let { calculate } = $$props;
  let inputValue;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.mainTitle === void 0 && $$bindings.mainTitle && mainTitle !== void 0)
    $$bindings.mainTitle(mainTitle);
  if ($$props.pId === void 0 && $$bindings.pId && pId !== void 0)
    $$bindings.pId(pId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.rollCombo === void 0 && $$bindings.rollCombo && rollCombo !== void 0)
    $$bindings.rollCombo(rollCombo);
  if ($$props.valueTitles === void 0 && $$bindings.valueTitles && valueTitles !== void 0)
    $$bindings.valueTitles(valueTitles);
  if ($$props.rollInfo === void 0 && $$bindings.rollInfo && rollInfo !== void 0)
    $$bindings.rollInfo(rollInfo);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.calculate === void 0 && $$bindings.calculate && calculate !== void 0)
    $$bindings.calculate(calculate);
  return `<div><h3 class="text-2xl font-medium">${escape(mainTitle)}</h3> <form autocomplete="off"><label${add_attribute("for", id, 0)} class="block font-medium calc-input-label">${escape(title)}</label> <input type="number" class="p-2 mr-2 rounded border focus:outline-none focus:ring calculator-input"${add_attribute("id", id, 0)} inputmode="numeric" pattern="[0-9]*"${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", id, 0)}${add_attribute("step", step, 0)}${add_attribute("value", inputValue, 0)}> <p class="font-medium mt-3" data-svelte-h="svelte-xmva5m">Pick what rolled:</p> ${validate_component(CalcRoll2, "CalcRoll2").$$render($$result, { rollInfo }, {}, {})} <p class="mb-2"${add_attribute("id", pId, 0)}></p> <button class="calculator-btn p-2 rounded" type="submit" data-svelte-h="svelte-ro3r3b">Check</button></form></div>`;
});
export {
  CalcInput5 as C
};
