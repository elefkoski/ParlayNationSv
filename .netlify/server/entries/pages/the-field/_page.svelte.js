import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { v as calculateSingleField, w as calculateDoubleField, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting the Field in Craps";
let description = "One of the most popular bets in the game is the Field. It's popular because it has one of the largest betting areas in the game. You can't miss it and there are a lot of numbers written in there that you can win with.";
let url = "the-field";
let phref = "any-craps";
let prev = "Any Craps";
let nhref = "multi-bets";
let next = "Multi-Bets";
let tblAria = "The field betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting the Field",
      href: "#fieldBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Placement in the Field",
      href: "#fieldPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Field Bet Payment",
      href: "#fieldPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Field Bet Calculators",
      href: "#fieldBetCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Field Bet",
      href: "#dealerFieldBet",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.jpg"
  };
  let tblHeaders = ["Roll", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["3, 4, 9, 10, 11", "1:1", "3, 4, 9, 10, or 11", "Any other number"],
    ["2, 12", "2:1", "2 or 12", "Any other number"]
  ];
  let tblPnts = ["The field is a one-roll bet"];
  return `${$$result.head += `<!-- HEAD_svelte-5v277q_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-13id9cj">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Field in Craps",
  "description": "An overview of Field bets in Craps, including how to place these bets, understanding their payouts, and the strategy behind betting for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-field",
  "image": "http://parlaynation.com/images/the-field/the-field-header.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Parlay Nation",
    "logo": {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "http://parlaynation.com/the-field"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Guidance on Field bets in Craps, from placing the bet to understanding its payouts and how to bet for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Make a Field Bet in Craps?",
          "description": "Details on how to place a Field bet, including strategies for letting it ride or adjusting the bet amount mid-play."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Which Field Bet Is Yours on the Craps Table?",
          "description": "Advice on keeping track of your Field bet among many, to avoid disputes and ensure your winnings are claimed."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Field Pay on a Craps Game?",
          "description": "Explanation of Field bet payouts, including conditions where 2 or 12 can pay double or triple."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "The Field Payment Calculator",
          "description": "Introduction to a tool for calculating payouts on Field bets, aiding players in their betting strategy."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Can You Bet in the Field for the Dealers?",
          "description": "How to place Field bets for the dealers, a gesture of appreciation that dealers always welcome."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/the-field_640x360.webp",
      "caption": "Overhead up close view of the field area on the Craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/placement-of-the-field_640x360.webp",
      "caption": "Up close view of multiple bets in the field."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/what-does-the-field-pay-a_640x360.webp",
      "caption": "3, 4, 9, 10, 11 Pay Even Money"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/what-does-the-field-pay-b_640x360.webp",
      "caption": "2 or 12 Pay Double"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-field/field-bet-for-the-dealers_640x360.webp",
      "caption": "$3 in the field for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-5v277q_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Field in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-z7m5md">The Field is a one-roll bet on 2, 3, 4, 9, 10, 11, or 12. It has such an allure to it. It&#39;s
				big. It has a ton of numbers, you can play it any time you want, and sometimes it will win
				over and over and over again. I can&#39;t tell you how many times I&#39;ve seen someone drop a
				$20 to bet the Field and 15 minutes later have a rail full of quarters and nickels.</p> <p class="pb-4">Meanwhile, the dealers are looking at each other thinking, &quot;I hope they don&#39;t think this is
				how you win at Craps.&quot; cause those same people will come back and think the Field will make
				them rich again when in reality, you&#39;re gonna lose a lot more than ya win in there. There
				are better bets on the Craps table like the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} or ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )}.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-field_640x360.webp",
                mdImg: "/images/" + url + "/the-field_960x540.webp",
                lgImg: "/images/" + url + "/the-field_1280x720.webp",
                title: "The Field",
                alt: "Overhead up close view of the field area on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fieldBetting",
          title: "How Do You Make a Field Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1njlwkn">The Field is a self-service bet meaning that you must take care of it yourself. When you
				make a Field bet, you don&#39;t need to tell the dealer, just put the money in the Field, and
				the dealer will pay or take it after the roll.</p> <p class="pb-4" data-svelte-h="svelte-sdnem8">If you won, then you can pick up your winnings. If you want to let it ride, then stack it
				up; put your winnings on top of the original bet. Stacking it up lets the dealer know you
				acknowledged you won and want to let it all ride. If you accidentally leave money in the
				Field and another roll goes by, it&#39;s considered a bet and will be paid or taken.</p> <p class="pb-4">If you notice you won, and the dice are out, and you don&#39;t want to stick your hands out
				there to be hit by the dice, tell the dealer how much you want in the Field, and the bet
				will be resolved after the roll. For example, if you put $10 in the Field and win, and the
				dice are out, but you only want to leave $10 in the Field, tell the dealer, ${validate_component(Quote, "Quote").$$render($$result, { text: "I only want $10 in the Field." }, {}, {})} and your bet will only be $10. After the roll, the dealer will return the extra $10 then pay
				or take the $10 you wanted to bet.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fieldPlacement",
          title: "Which Field Bet Is Yours on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1dh2t3v">Since the Field is self-service, you need to pay attention to your money. Many cheques get
				put in there, and if a game is going fast, it&#39;s not hard to get some bets mixed up. If you
				place a Field bet and forget that it&#39;s yours, anyone can claim it. A good way to make sure
				you don&#39;t mix up your Field bet is to place it in the same spot on the layout every time.
				Consistency at the Craps table will always give you a leg up when a dispute breaks out.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-the-field_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-the-field_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-the-field_1280x720.webp",
                title: "Placement of the Field",
                alt: "Up close view of multiple bets in the field."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fieldPayment",
          title: "What Does the Field Pay on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-12op0se">The Field Pays even money if the 3, 4, 9, 10, or 11 are rolled. If the 2 or 12 rolls, it
				usually pays double. In some casinos either the 2 or 12 will pay triple but never both.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "3, 4, 9, 10, 11 Pay Even Money",
                smImg: "/images/" + url + "/what-does-the-field-pay-a_640x360.webp",
                mdImg: "/images/" + url + "/what-does-the-field-pay-a_960x540.webp",
                lgImg: "/images/" + url + "/what-does-the-field-pay-a_1280x720.webp",
                title: "3, 4, 9, 10, 11 Pay Even Money",
                alt: "Two bets in the field paid even money. Two green dice read 5-5. Two bubbles read wins even money."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "2 or 12 Pay Double",
                smImg: "/images/" + url + "/what-does-the-field-pay-b_640x360.webp",
                mdImg: "/images/" + url + "/what-does-the-field-pay-b_960x540.webp",
                lgImg: "/images/" + url + "/what-does-the-field-pay-b_1280x720.webp",
                title: "2 or 12 Pay Double",
                alt: "Two bets in the field paid double. Two green dice read 1-1. Two bubbles read wins double."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "The Field Payment Calculator",
          id: "fieldBetCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for the Field.",
                title: "The Field Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateSingleField,
                      id: "single_field_pymnt_calc",
                      pId: "single_field_calc_result",
                      placeholder: "Table minimum",
                      step: 5,
                      title: "Amount for a roll of 3, 4, 9, 10, or 11:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateDoubleField,
                      id: "double_field_pymnt_calc",
                      pId: "double_field_calc_result",
                      placeholder: "Table minimum",
                      step: 5,
                      title: "Amount for a roll of 2 or 12:"
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerFieldBet",
          title: "How Can You Bet in the Field for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">If you want to make a bet for the dealers, it&#39;s as easy as pie. Throw some money in there
				and say, ${validate_component(Quote, "Quote").$$render($$result, { text: "For the dealers!" }, {}, {})}. The dealers always love a Field bet. Not many
				players do it, and I don&#39;t know why, but we always appreciate it.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/field-bet-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/field-bet-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/field-bet-for-the-dealers_1280x720.webp",
                title: "Field Bet for the Dealers",
                alt: "$3 in the field for the dealers."
              },
              {},
              {}
            )}`;
          }
        }
      )}</main> ${validate_component(PrevNext2, "PrevNext2").$$render($$result, { phref, prev, nhref, next }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
