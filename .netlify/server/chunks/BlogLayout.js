import { c as create_ssr_component, v as validate_component, o as onDestroy } from "./ssr.js";
import { L as LeftNavMainMenu, S as Structure_LeftNav, a as Structure_Remaining } from "./Structure-Remaining.js";
import { L as LeftNav_ul2 } from "./LeftNav-ul2.js";
const LeftNavBlogMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subMenus = [
    {
      title: "Craps Info",
      items: [
        "First Time Craps Player",
        "Rank of Craps Bets",
        "Craps Myths",
        "Craps Supersitions"
      ],
      href: [
        "first-time-craps-player",
        "rank-of-craps-bets",
        "craps-myths",
        "craps-superstitions"
      ]
    },
    {
      title: "Better Player",
      items: [
        "Better Craps Shooter",
        "Advantage of a Great Roll",
        "Dealing with New Players",
        "What Not To Do"
      ],
      href: [
        "better-craps-shooter",
        "a-great-craps-roll",
        "dealing-with-new-craps-players",
        "not-to-do-at-craps-table"
      ]
    },
    {
      title: "Improve Your Game",
      items: ["Be an Efficient Player", "Art of Verbal Betting", "A Perfect Craps Bet"],
      href: [
        "be-an-efficient-craps-player",
        "art-of-verbal-betting",
        "a-perfect-craps-bet"
      ]
    },
    {
      title: "Dealing with Dealers",
      items: ["Tipping the Dealers", "Win a Dispute", "Dealer Pet Peeves"],
      href: ["tipping-the-dealers", "win-a-craps-dispute", "craps-dealer-pet-peeves"]
    },
    {
      title: "Money Management",
      items: [
        "Money Techniques",
        "Managing Your Bankroll",
        "Protecting Your Money",
        "Choosing the Right Table",
        "When to Leave the Table"
      ],
      href: [
        "craps-money-techniques",
        "managing-your-craps-bankroll",
        "protecting-your-money",
        "right-craps-table",
        "leaving-the-craps-table"
      ]
    },
    {
      title: "Craps Betting",
      items: [
        "Playing the Don'ts",
        "Come VS Place Bets",
        "Lure of Proposition Bets",
        "Order of Operation"
      ],
      href: [
        "playing-the-donts",
        "come-vs-place-bets",
        "lure-of-craps-proposition-bets",
        "craps-order-of-operation"
      ]
    }
  ];
  return `<nav id="nav" class="lg:leading-6"><ul class="flex-grow overscroll-contain">${validate_component(LeftNavMainMenu, "LeftNavMainUl").$$render($$result, {}, {}, {})} ${validate_component(LeftNav_ul2, "LeftNavUl2").$$render($$result, { subMenus }, {}, {})}</ul></nav>`;
});
const BlogLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      return `${validate_component(LeftNavBlogMenu, "LeftNavBlogMenu").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Structure_Remaining, "StructureRemaining").$$render($$result, { pageLinks, showContentMenuBox }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  BlogLayout as B
};
