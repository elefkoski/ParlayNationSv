import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "./ssr.js";
const PracticeCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides = [] } = $$props;
  let currentSlide = 0;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  return `<div class="w-full"><div class="slideshow-container relative">${each(slides, (slide, i) => {
    return `<div${add_attribute("class", `mySlides ${currentSlide === i ? "block" : "hidden"}`, 0)}><div class="numbertext absolute left-2 top-1">${escape(i + 1)} / ${escape(slides.length)}</div> <div class="relative"><img class="w-full h-auto"${add_attribute("src", slide, 0)} alt="${"Slide " + escape(i + 1, true)}"> <div class="absolute inset-0 image-cover dark:opacity-20"></div></div> </div>`;
  })} <button class="absolute top-1/2 left-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full z-10" data-svelte-h="svelte-1kxlo7">❮</button> <button class="absolute top-1/2 right-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full z-10" data-svelte-h="svelte-1fxy5b6">❯</button></div></div>`;
});
export {
  PracticeCarousel as P
};
