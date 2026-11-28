import { c as create_ssr_component } from "./ssr.js";
/* empty css     */const EmptyLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wugy6g_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-N6DDTMN7FM" data-svelte-h="svelte-esg29s"><\/script><script data-svelte-h="svelte-1i56beg">window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-N6DDTMN7FM');<\/script><!-- HEAD_svelte-wugy6g_END -->`, ""} <div id="parentElement" class="container mx-auto pt-20 min-h-screen">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  EmptyLayout as E
};
