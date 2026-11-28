import { c as create_ssr_component, a as subscribe, f as each, e as escape, d as add_attribute, v as validate_component } from "./ssr.js";
import { t as theme } from "./theme.js";
import { F as Footer } from "./Footer.js";
const Structure_LeftNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full lg:w-1/4 lg:block hidden p-6"><div class="lg:h-screen lg:fixed lg:max-w-[20%] lg:overflow-y-auto pb-40 left-nav-bg px-10 pt-6 drop-shadow-sm">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const LeftNavMainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const pages = [
    {
      href: "craps",
      lightSrc: "/images/icons/grad-hat-black-icon.png",
      darkSrc: "/images/icons/grad-hat-white-icon.png",
      alt: "Graduation Hat Icon",
      title: "Learn Craps"
    },
    {
      href: "practice-craps",
      lightSrc: "/images/icons/bullseye-black-icon.png",
      darkSrc: "/images/icons/bullseye-white-icon.png",
      alt: "Bullseye",
      title: "Practice Craps"
    },
    {
      href: "craps-blog",
      lightSrc: "/images/icons/paper-black-icon.png",
      darkSrc: "/images/icons/paper-white-icon.png",
      alt: "Piece of paper",
      title: "Craps Blog"
    },
    {
      href: "craps-corner",
      lightSrc: "/images/icons/more-black-icon.png",
      darkSrc: "/images/icons/more-white-icon.png",
      alt: "Icon",
      title: "Craps Corner"
    },
    {
      href: "craps-calculators",
      lightSrc: "/images/icons/calculator-black-icon.png",
      darkSrc: "/images/icons/calculator-white-icon.png",
      alt: "Calculator",
      title: "Craps Calculators"
    },
    {
      href: "craps-simulator",
      lightSrc: "/images/icons/controller-black-icon.png",
      darkSrc: "/images/icons/controller-white-icon.png",
      alt: "Controller",
      title: "Craps Simulator"
    }
  ];
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", $theme);
    }
  }
  $$unsubscribe_theme();
  return `${each(pages, (page) => {
    return `<li class="mt-2 flex items-center"><a data-track="${"l-nav-main-menu-" + escape(page.href, true)}"${add_attribute("href", page.href, 0)} class="flex items-center left-nav-main-menu-text"><img${add_attribute("src", $theme === "dark" ? page.darkSrc : page.lightSrc, 0)}${add_attribute("alt", page.alt, 0)} class="w-5 h-5 mr-2 filter"> <h4>${escape(page.title)}</h4></a> </li>`;
  })}`;
});
const PageMenuBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageLinks = [] } = $$props;
  if ($$props.pageLinks === void 0 && $$bindings.pageLinks && pageLinks !== void 0)
    $$bindings.pageLinks(pageLinks);
  return `<div class="page-menu-box p-4 rounded-lg shadow-lg"><h2 class="uppercase text-lg font-semibold" data-svelte-h="svelte-1vmujhx">Contents</h2> <section aria-label="Inner page links">${pageLinks.length > 0 ? `${each(pageLinks, (pageLink) => {
    return `<a data-track="${"page-link-" + escape(pageLink.href, true)}"${add_attribute("href", pageLink.href, 0)} class="flex py-2 px-2 rounded page-menu-link transition duration-200"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">${pageLink.iconD ? `${each(pageLink.iconD, (d, i) => {
      return `<path${add_attribute("d", d, 0)}${add_attribute("fill", pageLink.iconFills ? pageLink.iconFills[i] : "none", 0)}${add_attribute("stroke", pageLink.iconStrokes ? pageLink.iconStrokes[i] : "none", 0)}></path>`;
    })} ` : ``}</svg> <h3 class="ml-2">${escape(pageLink.title)}</h3> </a>`;
  })}` : ``}</section></div>`;
});
const Htpc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1lqkcd9">Get more knowledge sent straight to your inbox. Sign up for new updates, announcements and more.</p> <input type="text" placeholder="Type here" class="input input-bordered sub-input w-full"> <button data-track="subscribe" class="btn btn-neutral subscribe-btn" data-svelte-h="svelte-kn7qwl">Subscribe</button> <section aria-label="How to play craps pdf download" class="flex flex-col items-center text-center space-y-6" data-svelte-h="svelte-1fx4c58"><h2 class="uppercase text-3xl font-bold">Learn how to play craps in 15 minutes</h2> <figure class="max-w-xs md:max-w-lg relative"><img src="/images/home-page/htpc-cover_612x792.webp" alt="How to Play Craps in 15 Minutes" class=""> <div class="absolute inset-0 image-cover dark:opacity-20"></div></figure> <p>Want something quick? Download the free guide on How to Play Craps in 15 Minutes.</p> <button class="btn" data-track="download-htpc">Download<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg></button></section>`;
});
const Structure_Remaining = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageLinks = [] } = $$props;
  let { showContentMenuBox = true } = $$props;
  if ($$props.pageLinks === void 0 && $$bindings.pageLinks && pageLinks !== void 0)
    $$bindings.pageLinks(pageLinks);
  if ($$props.showContentMenuBox === void 0 && $$bindings.showContentMenuBox && showContentMenuBox !== void 0)
    $$bindings.showContentMenuBox(showContentMenuBox);
  return `<div class="w-full lg:w-3/4 flex flex-col"><div class="w-full flex flex-col lg:flex-row"><div class="w-full lg:w-2/3 p-6">${slots.default ? slots.default({}) : ``}</div> <div class="w-full lg:w-1/3 p-6 flex flex-col space-y-4">${showContentMenuBox ? `<div class="hidden lg:block">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div>` : ``}  ${validate_component(Htpc, "Htpc").$$render($$result, {}, {}, {})}</div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  LeftNavMainMenu as L,
  PageMenuBox as P,
  Structure_LeftNav as S,
  Structure_Remaining as a
};
