import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
const PrevNext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { phref = "/" } = $$props;
  let { prev = "Previous" } = $$props;
  let { nhref = "/" } = $$props;
  let { next = "Next" } = $$props;
  if ($$props.phref === void 0 && $$bindings.phref && phref !== void 0)
    $$bindings.phref(phref);
  if ($$props.prev === void 0 && $$bindings.prev && prev !== void 0)
    $$bindings.prev(prev);
  if ($$props.nhref === void 0 && $$bindings.nhref && nhref !== void 0)
    $$bindings.nhref(nhref);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  return `<section aria-label="Previous next buttons" class="flex justify-between"> <a data-track="${"prvs-top-" + escape(phref, true)}"${add_attribute("href", phref, 0)} class="flex items-center justify-right px-4 h-10 mr-3 text-base font-medium border rounded-lg prev-next-btn shadow-lg"><svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg> ${escape(prev)}</a>  <a data-track="${"nxt-top-" + escape(nhref, true)}"${add_attribute("href", nhref, 0)} class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn shadow-lg">${escape(next)} <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></section>`;
});
const PrevNext2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { phref = "/" } = $$props;
  let { prev = "Previous" } = $$props;
  let { nhref = "/" } = $$props;
  let { next = "Next" } = $$props;
  if ($$props.phref === void 0 && $$bindings.phref && phref !== void 0)
    $$bindings.phref(phref);
  if ($$props.prev === void 0 && $$bindings.prev && prev !== void 0)
    $$bindings.prev(prev);
  if ($$props.nhref === void 0 && $$bindings.nhref && nhref !== void 0)
    $$bindings.nhref(nhref);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  return `<section aria-label="Previous next buttons" class="flex justify-between"> <a data-track="${"prvs-btm-" + escape(phref, true)}"${add_attribute("href", phref, 0)} class="flex items-center justify-right px-4 h-10 mr-3 text-base font-medium border rounded-lg prev-next-btn"><svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path></svg> ${escape(prev)}</a> <a data-track="${"nxt-btm-" + escape(nhref, true)}"${add_attribute("href", nhref, 0)} class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn">${escape(next)} <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></section>`;
});
export {
  PrevNext as P,
  PrevNext2 as a
};
