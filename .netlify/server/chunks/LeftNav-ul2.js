import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "./ssr.js";
const LeftNav_ul2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subMenus = [
    {
      title: "Title One",
      items: ["Link One", "Link Two", "Link Three"],
      href: ["/", "/", "/"]
    },
    {
      title: "Title Two",
      items: ["Link One", "Link Two", "Link Three"],
      href: ["/", "/", "/"]
    },
    {
      title: "Title Three",
      items: ["Link One", "Link Two", "Link Three"],
      href: ["/", "/", "/"]
    }
  ] } = $$props;
  if ($$props.subMenus === void 0 && $$bindings.subMenus && subMenus !== void 0)
    $$bindings.subMenus(subMenus);
  return `${each(subMenus, (subMenu) => {
    return `<li class="mt-8 lg:mt-0"><h5 class="mt-2 font-semibold left-nav-practice-header-text h-10 flex items-center">${escape(subMenu.title)}</h5> <ul class="space-y-6 lg:space-y-2 border-l left-nav-menu-left-border">${each(subMenu.items, (item, index) => {
      return `<li><a data-track="${"l-nav-submenu-" + escape(subMenu.href[index], true)}" class="block border-l pl-4 -ml-px left-nav-menu-text"${add_attribute("href", subMenu.href[index], 0)}>${escape(item)}</a> </li>`;
    })}</ul> </li>`;
  })}`;
});
export {
  LeftNav_ul2 as L
};
