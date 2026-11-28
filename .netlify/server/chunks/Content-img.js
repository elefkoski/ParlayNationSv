import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const Content_h2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "The Title" } = $$props;
  let { id = "the-id" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("aria-label", title, 0)}><h2${add_attribute("id", id, 0)} class="article-h2 text-2xl pb-1">${escape(title)}</h2> ${slots.default ? slots.default({}) : ``}</section>`;
});
const Content_img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { caption = "Caption" } = $$props;
  let { smImg = "" } = $$props;
  let { mdImg = "" } = $$props;
  let { lgImg = "" } = $$props;
  let { title = "" } = $$props;
  let { alt = "Alt img text" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.smImg === void 0 && $$bindings.smImg && smImg !== void 0)
    $$bindings.smImg(smImg);
  if ($$props.mdImg === void 0 && $$bindings.mdImg && mdImg !== void 0)
    $$bindings.mdImg(mdImg);
  if ($$props.lgImg === void 0 && $$bindings.lgImg && lgImg !== void 0)
    $$bindings.lgImg(lgImg);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<figure><figcaption class="pt-2 text-lg">${escape(caption)}</figcaption> <img${add_attribute("src", smImg, 0)}${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full block md:hidden lg:hidden"> <img${add_attribute("src", mdImg, 0)}${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full hidden md:block lg:hidden"> <img${add_attribute("src", lgImg, 0)}${add_attribute("alt", alt, 0)}${add_attribute("title", title, 0)} class="object-cover w-full hidden sm:hidden md:hidden lg:block"></figure>`;
});
export {
  Content_img as C,
  Content_h2 as a
};
