import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "./ssr.js";
import { L as LeftNavMainMenu, S as Structure_LeftNav, a as Structure_Remaining } from "./Structure-Remaining.js";
const LeftNavMoreMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submenus = [
    { title: "Glossary", href: "glossary" },
    { title: "Craps FAQ", href: "faq" },
    { title: "Contact", href: "contact" },
    { title: "About", href: "about" },
    {
      title: "Privacy Policy",
      href: "privacy-policy"
    },
    {
      title: "Terms of Service",
      href: "terms-of-service"
    },
    { title: "Site Map", href: "site-map" }
  ];
  return `<nav id="nav" class="lg:leading-6"><div class="flex-grow overscroll-contain">${validate_component(LeftNavMainMenu, "LeftNavMainUl").$$render($$result, {}, {}, {})} <div class="mt-8"><ul class="space-y-6 lg:space-y-2 border-l border-transparent left-nav-vert-bars">${each(submenus, (submenu) => {
    return `<li><a class="block pl-4 -ml-px uppercase border-l left-nav-more-menu"${add_attribute("href", submenu.href, 0)}>${escape(submenu.title)}</a> </li>`;
  })}</ul></div></div></nav>`;
});
const MoreCrapsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showContentMenuBox } = $$props;
  if ($$props.showContentMenuBox === void 0 && $$bindings.showContentMenuBox && showContentMenuBox !== void 0)
    $$bindings.showContentMenuBox(showContentMenuBox);
  return `${validate_component(Structure_LeftNav, "LeftNavStructure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LeftNavMoreMenu, "LeftNavMoreMenu").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Structure_Remaining, "StructureRemaining").$$render($$result, { showContentMenuBox }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  MoreCrapsLayout as M
};
