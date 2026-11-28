import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "./ssr.js";
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { aria = "Aria Label" } = $$props;
  let { title = "The Title" } = $$props;
  let { pOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." } = $$props;
  let { pTwo = "Morbi feugiat, enim non blandit auctor, nulla eros cursus augue, eu posuere cubilia curae, euismod ligula arcu non risus." } = $$props;
  let { pThree = "Consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat, enim non blandit." } = $$props;
  let { button = "My Button" } = $$props;
  let { href = "/" } = $$props;
  if ($$props.aria === void 0 && $$bindings.aria && aria !== void 0)
    $$bindings.aria(aria);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.pOne === void 0 && $$bindings.pOne && pOne !== void 0)
    $$bindings.pOne(pOne);
  if ($$props.pTwo === void 0 && $$bindings.pTwo && pTwo !== void 0)
    $$bindings.pTwo(pTwo);
  if ($$props.pThree === void 0 && $$bindings.pThree && pThree !== void 0)
    $$bindings.pThree(pThree);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<header${add_attribute("aria-label", aria, 0)} class="p-6 learn-home-page-header shadow-lg rounded-lg"><h1 class="text-2xl font-bold mb-2">${escape(title)}</h1> <p class="mb-4">${escape(pOne)}</p> <p class="mb-4">${escape(pTwo)}</p> <p class="mb-4">${escape(pThree)}</p> <a data-track="${"home-header-btn-" + escape(href, true)}"${add_attribute("href", href, 0)} class="btn learn-home-page-header-btn">${escape(button)}</a></header>`;
});
const HomeSections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { aria = "The aria" } = $$props;
  let { smImg = "https://picsum.photos/600/600" } = $$props;
  let { mdImg = "https://picsum.photos/992/558" } = $$props;
  let { lgImg = "https://picsum.photos/1280/240" } = $$props;
  let { alt = "The alt img" } = $$props;
  let { title = "The title" } = $$props;
  let { href = "/" } = $$props;
  let { body = "Consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat, enim non blandit." } = $$props;
  let { badges = ["Badge Here", "Another Badge", "Badge Three", "Badgering Me"] } = $$props;
  if ($$props.aria === void 0 && $$bindings.aria && aria !== void 0)
    $$bindings.aria(aria);
  if ($$props.smImg === void 0 && $$bindings.smImg && smImg !== void 0)
    $$bindings.smImg(smImg);
  if ($$props.mdImg === void 0 && $$bindings.mdImg && mdImg !== void 0)
    $$bindings.mdImg(mdImg);
  if ($$props.lgImg === void 0 && $$bindings.lgImg && lgImg !== void 0)
    $$bindings.lgImg(lgImg);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.badges === void 0 && $$bindings.badges && badges !== void 0)
    $$bindings.badges(badges);
  return `<section${add_attribute("aria-label", aria, 0)} class="card learn-home-page-section b shadow-xl"><figure><img${add_attribute("src", smImg, 0)}${add_attribute("alt", alt, 0)} class="object-cover w-full block md:hidden lg:hidden"> <img${add_attribute("src", mdImg, 0)}${add_attribute("alt", alt, 0)} class="object-cover w-full hidden md:block lg:hidden"> <img${add_attribute("src", lgImg, 0)}${add_attribute("alt", alt, 0)} class="object-cover w-full hidden sm:hidden md:hidden lg:block"></figure> <div class="card-body"><a data-track="${"home-section-" + escape(href, true)}"${add_attribute("href", href, 0)} class="learn-home-page-section-title"><h2 class="card-title">${escape(title)}</h2></a> <p class="pb-4">${escape(body)}</p> <div class="card-actions justify-end">${each(badges, (badge) => {
    return `<div class="badge badge-outline">${escape(badge)}</div>`;
  })}</div></div></section>`;
});
export {
  HomeHeader as H,
  HomeSections as a
};
