import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as LeftNavMainMenu, S as Structure_LeftNav, a as Structure_Remaining } from "./Structure-Remaining.js";
import { L as LeftNav_ul2 } from "./LeftNav-ul2.js";
const LeftNavPracticeMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subMenus = [
    {
      title: "Pass Line Odds",
      items: ["Odds Payments 6 & 8", "Odds Payment 5 & 9", "Odds Payments 4 & 10"],
      href: [
        "practice-pass-line-odds-payments-6-8",
        "practice-pass-line-odds-payments-5-9",
        "practice-pass-line-odds-payments-4-10"
      ]
    },
    {
      title: "Place Bet Payments",
      items: [
        "Place Bet Payment 6 & 8",
        "Place Bet Payment 5 & 9",
        "Place Bet Payment 4 & 10"
      ],
      href: [
        "practice-place-bet-payments-6-8",
        "practice-place-bet-payments-5-9",
        "practice-place-bet-payments-4-10"
      ]
    },
    {
      title: "Come Bet w/Odds",
      items: ["Come Bet w/Odds 6 & 8", "Come Bet w/Odds 5 & 9", "Come Bet w/Odds 4 & 10"],
      href: [
        "practice-come-bet-w-odds-payments-6-8",
        "practice-come-bet-w-odds-payments-5-9",
        "practice-come-bet-w-odds-payments-4-10"
      ]
    },
    {
      title: "Lay Odds Payments",
      items: ["Lay Odds 6 & 8", "Lay Odds 5 & 9", "Lay Odds 4 & 10"],
      href: [
        "practice-lay-odds-payments-6-8",
        "practice-lay-odds-payments-5-9",
        "practice-lay-odds-payments-4-10"
      ]
    },
    {
      title: "Craps Cards",
      items: ["Craps Cards - Black", "Craps Cards- Grey"],
      href: ["practice-craps-cards-black", "practice-craps-cards-grey"]
    },
    {
      title: "Foldable Dice",
      items: ["60mm Craps Dice", "40mm Craps Dice", "19mm Craps Dice"],
      href: [
        "practice-60mm-craps-dice",
        "practice-40mm-craps-dice",
        "practice-19mm-craps-dice"
      ]
    },
    {
      title: "Craps Table Layouts",
      items: ["Full Craps Table", "Half Craps Table"],
      href: ["practice-full-craps-table-layout", "practice-half-craps-table-layout"]
    },
    {
      title: "Other Printouts",
      items: ["Horn High Generator", "Craps Roll Cards"],
      href: ["practice-horn-high-generator", "practice-craps-roll-cards"]
    }
  ] } = $$props;
  if ($$props.subMenus === void 0 && $$bindings.subMenus && subMenus !== void 0)
    $$bindings.subMenus(subMenus);
  return `<nav id="nav" class="lg:leading-6"><ul class="flex-grow overscroll-contain">${validate_component(LeftNavMainMenu, "LeftNavMainUl").$$render($$result, {}, {}, {})} ${validate_component(LeftNav_ul2, "LeftNavUl2").$$render($$result, { subMenus }, {}, {})}</ul></nav>`;
});
const PracticeCrapsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showContentMenuBox } = $$props;
  if ($$props.showContentMenuBox === void 0 && $$bindings.showContentMenuBox && showContentMenuBox !== void 0)
    $$bindings.showContentMenuBox(showContentMenuBox);
  return `${validate_component(Structure_LeftNav, "LeftNavStructure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LeftNavPracticeMenu, "LeftNavPracticeMenu").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Structure_Remaining, "StructureRemaining").$$render($$result, { showContentMenuBox }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  PracticeCrapsLayout as P
};
