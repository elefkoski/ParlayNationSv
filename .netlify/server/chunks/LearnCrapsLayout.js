import { c as create_ssr_component, f as each, e as escape, d as add_attribute, v as validate_component, o as onDestroy } from "./ssr.js";
import { L as LeftNavMainMenu, S as Structure_LeftNav, a as Structure_Remaining } from "./Structure-Remaining.js";
const LeftNav_ul = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subMenus = [
    {
      title: "Title One",
      items: ["Link One", "Link Two", "Link Three"],
      mainHref: "/",
      href: ["/", "/", "/"]
    },
    {
      title: "Title Two",
      items: ["Link One", "Link Two", "Link Three"],
      mainHref: "/",
      href: ["/", "/", "/"]
    },
    {
      title: "Title Three",
      items: ["Link One", "Link Two", "Link Three"],
      mainHref: "/",
      href: ["/", "/", "/"]
    }
  ] } = $$props;
  if ($$props.subMenus === void 0 && $$bindings.subMenus && subMenus !== void 0)
    $$bindings.subMenus(subMenus);
  return `${each(subMenus, (subMenu) => {
    return `<li class="mt-8 lg:mt-0"><h5 class="mt-2 font-semibold left-nav-header-text h-10 flex items-center"><a data-track="${"l-nav-menu-" + escape(subMenu.mainHref, true)}" class="transform ease-in-out duration-300"${add_attribute("href", subMenu.mainHref, 0)}>${escape(subMenu.title)}</a></h5> <ul class="space-y-6 lg:space-y-2 border-l left-nav-menu-left-border">${each(subMenu.items, (item, index) => {
      return `<li><a data-track="${"l-nav-submenu-" + escape(subMenu.href[index], true)}" class="block border-l pl-4 -ml-px left-nav-menu-text"${add_attribute("href", subMenu.href[index], 0)}>${escape(item)}</a> </li>`;
    })}</ul> </li>`;
  })}`;
});
const LeftNavLearnMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subMenus = [
    {
      title: "Craps Basics",
      items: [
        "The Crew",
        "The Craps Table",
        "The Dice",
        "The Stages",
        "Verbal Betting",
        "To Consider"
      ],
      mainHref: "craps-basics",
      href: [
        "the-crew",
        "the-craps-table",
        "the-dice",
        "the-stages",
        "verbal-betting",
        "to-consider"
      ]
    },
    {
      title: "The Pass Line",
      items: ["Pass Line Basics", "Pass Line Odds", "Max Odds on the Pass Line"],
      mainHref: "the-pass-line",
      href: ["pass-line-basics", "pass-line-odds", "max-odds"]
    },
    {
      title: "Place Bets",
      items: ["Place Bet Basics", "Buying Place Bets", "Your Money", "Presses"],
      mainHref: "place-bets",
      href: ["place-bet-basics", "buying-place-bets", "your-money", "presses"]
    },
    {
      title: "Spread Bets",
      items: [
        "Across",
        "Inside",
        "Outside",
        "Uptown/Downtown",
        "Even Numbers",
        "Including the Point"
      ],
      mainHref: "spread-bets",
      href: [
        "across",
        "inside",
        "outside",
        "uptown-downtown",
        "even-numbers",
        "including-the-point"
      ]
    },
    {
      title: "Proposition Bets",
      items: [
        "Proposition Basics",
        "The Hardways",
        "Straight Up",
        "C & E",
        "Any Seven",
        "Any Craps",
        "The Field",
        "Multi-Bets",
        "Horn",
        "Horn High",
        "World",
        "Hop Bets"
      ],
      mainHref: "proposition-bets",
      href: [
        "proposition-basics",
        "the-hardways",
        "straight-up",
        "c-and-e",
        "any-seven",
        "any-craps",
        "the-field",
        "multi-bets",
        "horn",
        "horn-high",
        "world",
        "hop-bets"
      ]
    },
    {
      title: "Come Bets",
      items: ["Come Bet Basics", "Come Bet Odds", "Coming Down w/Odds"],
      mainHref: "come-bets",
      href: ["come-bet-basics", "come-bet-odds", "coming-down-with-odds"]
    },
    {
      title: "The Don't Side",
      items: [
        "Don't Pass",
        "Don't Pass Lay Odds",
        "Don't Come",
        "Don't Come Lay Odds",
        "Overlays",
        "Bridging Lay Odds"
      ],
      mainHref: "the-donts",
      href: [
        "dont-pass",
        "dont-pass-lay-odds",
        "dont-come",
        "dont-come-lay-odds",
        "overlays",
        "bridging-lay-odds"
      ]
    }
  ];
  return `<nav id="nav" class="lg:leading-6"><ul class="flex-grow overscroll-contain">${validate_component(LeftNavMainMenu, "LeftNavMainUl").$$render($$result, {}, {}, {})} ${validate_component(LeftNav_ul, "LeftNavUl").$$render($$result, { subMenus }, {}, {})}</ul></nav>`;
});
const LearnCrapsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageLinks = [] } = $$props;
  let { showContentMenuBox = true } = $$props;
  onDestroy(() => {
  });
  if ($$props.pageLinks === void 0 && $$bindings.pageLinks && pageLinks !== void 0)
    $$bindings.pageLinks(pageLinks);
  if ($$props.showContentMenuBox === void 0 && $$bindings.showContentMenuBox && showContentMenuBox !== void 0)
    $$bindings.showContentMenuBox(showContentMenuBox);
  return `${validate_component(Structure_LeftNav, "LeftNavStructure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LeftNavLearnMenu, "LeftNavLearnMenu").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Structure_Remaining, "StructureRemaining").$$render($$result, { pageLinks, showContentMenuBox }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  LearnCrapsLayout as L
};
