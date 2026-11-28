import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { t as calculateAceDeuceYo, u as calculateAcesTwelve, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting Straight Up in Craps";
let description = "There are four proposition bets you can bet Straight Up. Aces, Ace Deuce, Twelve, and Yo. They are one-roll bets but pay the most because they're hard to hit.";
let url = "straight-up";
let phref = "the-hardways";
let prev = "The Hardways";
let nhref = "c-and-e";
let next = "C & E";
let tblAria = "Straight Up payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Straight Up",
      href: "#straightUpBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Straight Up Placement",
      href: "#straightUpPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Straight Up Payment",
      href: "#straightUpPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Straight Up Payment Calculators",
      href: "#straightUpCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Straight Up",
      href: "#dealerStraightUp",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.jpg"
  };
  let tblHeaders = ["Roll", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["Aces - 2", "30:1", "2", "Any other number"],
    ["Ace Deuce - 3", "15:1", "3", "Any other number"],
    ["Yo - 11", "15:1", "11", "Any other number"],
    ["Twelve - 12", "30:1", "12", "Any other number"]
  ];
  let tblPnts = ["All Straight Up bets are one-roll bets"];
  return `${$$result.head += `<!-- HEAD_svelte-k39072_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1m127p7">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Straight Up in Craps",
  "description": "Dive into the world of Straight Up bets in Craps, from how to place them, to their placement on the table, their lucrative payouts, and how to include the dealers in your betting strategy.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/straight-up",
  "image": "http://parlaynation.com/images/straight-up/straight-up-header.webp",
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
    "@id": "http://parlaynation.com/straight-up"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Exploring the high stakes of Straight Up betting in Craps, including strategic betting for dealers and payout calculations.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Straight Up on the Craps Table?",
          "description": "Guidelines for placing Straight Up bets, utilizing the specific lingo associated with each bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Are Your Straight Up Bets on the Craps Table?",
          "description": "Insight into the placement of Straight Up bets on the Craps layout to ensure proper tracking during the game."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Do Your Straight Up Bets Pay in a Craps Game?",
          "description": "Details on the payout rates for Straight Up bets, highlighting the high rewards of these wagers."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Straight Up Payment Calculators",
          "description": "Introduction to tools designed to calculate the potential winnings from Straight Up bets."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Do You Bet Straight Up for the Dealers?",
          "description": "Tips for including the dealers in your Straight Up betting strategy, enhancing the game's camaraderie."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/straight-up-bets_640x360.webp",
      "caption": "Up close overhead view of the Straight Up area on the Craps table. The aces, ace deuce, yo, and twelve are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/placement-of-straight-up_640x360.webp",
      "caption": "Up close overhead view of the Straight Up bets and the Craps table rail. There are eight on the layout that correspond with the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/straight-up/dealer-straight-up_640x360.webp",
      "caption": "Up close overhead view of $1 in the middle of the yo."
    }
  ]
}<\/script><!-- HEAD_svelte-k39072_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting Straight Up in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1g9kh2j">If you&#39;re looking for a quick way to turn a dollar into hundreds or thousands of dollars,
				then betting Straight Up on the Craps table might be your best bet. There are four Straight
				Up bets that each have their own names: 2 is known as “Aces”, 3 is referred to as “Ace
				Deuce”, the 11 is called “Yo”, and 12 is simply “Twelve”.</p> <p class="pb-4" data-svelte-h="svelte-15gbra9">The payout for Straight Up bets is the highest on the table, either 15:1 or 30:1, which
				means that if you parlay your bets, you could potentially turn $1 into $961 in just two
				rolls. Although it&#39;s not something that happens often, it&#39;s not impossible.</p> <p class="pb-4" data-svelte-h="svelte-1v625b7">Many people tend to cash out after the first roll, but here&#39;s something interesting - Aces
				and Twelves roll back to back more often than you may think, and if you&#39;re willing to take a
				chance, you might just hit a jackpot.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/straight-up-bets_640x360.webp",
                mdImg: "src/images/" + url + "/straight-up-bets_960x540.webp",
                lgImg: "src/images/" + url + "/straight-up-bets_1280x720.webp",
                title: "Straight Up Bets",
                alt: "Up close overhead view of the Straight Up area on the Craps table. The aces, ace deuce, yo, and twelve are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "straightUpBetting",
          title: "How Do You Bet Straight Up on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you want to make a Straight Up bet, you throw your money to the Stickperson, say a
				dollar amount, then say which bet you want. For example, toss the cheques in, say ${validate_component(Quote, "Quote").$$render($$result, { text: "$2 Yo!" }, {}, {})} and wait for the dealer to repeat your bet. If the dealer does not repeat your bet, make sure
				you repeat it until they do.</p> <p class="pb-4">Except for the Twelve, you don&#39;t refer to them as their totals. You should not be saying ${validate_component(Quote, "Quote").$$render($$result, { text: "$5\n		two!" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "$1 three!" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "$3 eleven!" }, {}, {})} You would bet them using their
				names like ${validate_component(Quote, "Quote").$$render($$result, { text: "$5 Aces!" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "$1 Ace\n		Deuce!" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "$3 Yo!" }, {}, {})}</p> <p class="pb-4">When you start to bet multiple Straight Up bets simultaneously, you&#39;re getting into ${validate_component(Link, "Link").$$render($$result, { text: "Multi-Bets", href: "multi-bets" }, {}, {})}. Check it out to learn the lingo on how to easily bet multiple Straight Up Bets at the
				same time.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "straightUpPlacement",
          title: "Where Are Your Straight Up Bets on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-sdn8wy">Bets in the Straight Up boxes are placed a little looser. Each section is broken into the
				left and right sides of the table then each side can be broken into four or more spots on
				the layout for each player. Bets are placed in a horseshoe fashion around each side of the
				table like other Prop Bets.</p> <p class="pb-4" data-svelte-h="svelte-7wz00y">Some layouts might have more or less space, so keep an eye on where the dealer is placing
				your bets on the layout. When things start to get crazy, it&#39;s not hard for cheques to get
				mixed up.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-straight-up_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-straight-up_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-straight-up_1280x720.webp",
                title: "Placement of Straight Up",
                alt: "Up close overhead view of the Straight Up bets and the Craps table rail. There are eight on the layout that correspond with the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "straightUpPayment",
          title: "What Do Your Straight Up Bets Pay in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-12hgjde">When you bet Straight Up, there are two possible payouts. 30:1 and 15:1. The Aces (1-1) and
				the Twelve (6-6) pay 30:1 or $30 for every $1. The Ace Deuce (1-2, 2-1) and the Yo (5-6,
				6-5) pay 15:1 or $15 for every $1.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Pays 30:1 on the High Side (2, 12)"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-srgwhk">The Aces and Twelve pay more because there is only one way to roll each of them, while the
					Ace Deuce and Yo each can be rolled two different ways.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "src/images/" + url + "/high-side-straight-up-payment_640x360.webp",
                      mdImg: "src/images/" + url + "/high-side-straight-up-payment_960x540.webp",
                      lgImg: "src/images/" + url + "/high-side-straight-up-payment_1280x720.webp",
                      title: "High Side Straight Up Payment",
                      alt: "Up close view of $3 on the aces. Two green dice read 1-1 in the corner. A bubble reads $90 payment."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Pays 15:1 on the Low Side (3, 11)"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-1rjizmp">The Ace Deuce and Yo pay half as much because there are two ways to roll each.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "src/images/" + url + "/low-side-straight-up-payment_640x360.webp",
                      mdImg: "src/images/" + url + "/low-side-straight-up-payment_960x540.webp",
                      lgImg: "src/images/" + url + "/low-side-straight-up-payment_1280x720.webp",
                      title: "Low Side Straight Up Payment",
                      alt: "Up close view of $4 on the yo. Two green dice read 6-5 in the corner. A bubble reads $60 payment."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Straight Up payment calculators",
          id: "straightUpCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a bet made Straight Up on the Aces, Ace Deuce, Yo or Twelve.",
                title: "Straight Up Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateAceDeuceYo,
                      id: "straight_low_side_pymnt_calc",
                      pId: "straight_low_side_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Ace Deuce or Yo amount:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateAcesTwelve,
                      id: "straight_high_side_pymnt_calc",
                      pId: "straight_high_side_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Aces or Twelve amount:"
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
          id: "dealerStraightUp",
          title: "How Do You Bet Straight Up for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The dealers aren&#39;t going to get more bang from a buck than with these bets. Straight Up bets
				are cheap and easy two-way bets when you only need to throw two dollars to the stickperson
				and say
				${validate_component(Quote, "Quote").$$render($$result, { text: "Two-way Yo!" }, {}, {})}. When they start dropping these high-paying bets, you can be
				sure it&#39;s gonna be appreciated.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/dealer-straight-up_640x360.webp",
                mdImg: "src/images/" + url + "/dealer-straight-up_960x540.webp",
                lgImg: "src/images/" + url + "/dealer-straight-up_1280x720.webp",
                title: "Dealer Straight Up",
                alt: "Up close overhead view of $1 in the middle of the yo."
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
