import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { j as calculatePassLine, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { L as Link } from "../../../chunks/Link.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
let title = "Learn the Pass Line";
let description = "It's pretty much as easy as putting your money on the line then sitting back and waiting for your point to Roll.";
let url = "pass-line-basics";
let phref = "the-pass-line";
let prev = "The Pass Line";
let nhref = "pass-line-odds";
let next = "Pass Line Odds";
let tblAria = "Stages pay table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting the Pass Line",
      href: "#passLineBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Stages of the Pass Line",
      href: "#passLineStages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Pass Line Payments",
      href: "#passLinePayments",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Pass Line Payment Calculator",
      href: "#passLinePymntCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "After the Comeout Roll",
      href: "#postComeout",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealer Pass Line",
      href: "#dealerPassLine",
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
  let tblHeaders = ["Stage", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["Comeout Roll", "Even Money", "7 or 11", "2,3, or 12"],
    ["Intermediate Roll", "Even Money", "When point rolls", "7"]
  ];
  let tblPnts = [
    "Contract bet during the Intermediate Roll",
    "During the Comeout Roll you're twice as likely to win on the Pass Line than lose",
    "Put the table minimum on the Pass Line and if you want to bet more, wait for the puck to turn ON and put that extra money in the back as odds"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1t0xozz_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1afem3c">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Pass Line in Craps",
  "description": "A fundamental guide to understanding and placing bets on the Pass Line in Craps, including game stages, betting procedures, and the camaraderie it builds among players.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/pass-line-basics",
  "image": "http://parlaynation.com/images/pass-line-basics/pass-line-basics-header.webp",
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
    "@id": "http://parlaynation.com/pass-line-basics"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Pass Line Betting in Craps",
      "description": "Exploring the significance of the Pass Line bet in Craps, how to place these bets, the stages of the game they influence, and their impact on the gameplay experience.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet the Pass Line in Craps?",
          "description": "Guidance on placing Pass Line bets, emphasizing timing relative to the puck's status for optimal betting."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What are the Stages of the Pass Line in a Craps Game?",
          "description": "An overview of the two crucial stages of Pass Line betting: the Comeout Roll and the Intermediate Roll, including the actions and outcomes associated with each."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Pass Line Pay in Craps?",
          "description": "Details on the even money payout structure of the Pass Line bet, alongside the advantageous Odds bet it facilitates."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Should You Bet the Pass Line After the Comeout Roll?",
          "description": "Analysis of the strategic considerations for Pass Line betting post-Comeout Roll, recommending alternative betting strategies for increased profit."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Can You Bet the Pass Line for the Dealers?",
          "description": "Instructions for placing Pass Line bets on behalf of the dealers, fostering a shared experience of wins and losses at the table."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-basics/the-pass-line_640x360.webp",
      "caption": "Overhead view of the pass line. There are no bets on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-basics/how-to-bet-the-pass-line_640x360.webp",
      "caption": "Four bets on the pass line. Each bet pointing to a spot in the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-basics/pass-line-for-the-dealers_640x360.webp",
      "caption": "A $20 bet on the pass line with a dollar sitting next to it."
    }
  ]
}<\/script><!-- HEAD_svelte-1t0xozz_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The pass line",
          title: "Betting the Pass Line in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-peurwc">If you want to know how to play Craps, you&#39;re gonna have to learn the Pass Line. Lucky for
				you it&#39;s not hard to understand.</p> <p class="pb-4" data-svelte-h="svelte-1g9g4s5">To sum it up quickly, the Pass Line bets that the shooter will establish a Point and roll
				that Point again before a 7. If they roll the Point first, you win. If they roll the 7
				first, you lose. No other rolls matter.</p> <p class="pb-4" data-svelte-h="svelte-16ojp9b">The best part of the Pass Line is that everyone on the Pass Line wins and loses together,
				and it&#39;s the joy and pain felt together that builds camaraderie among the players.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-pass-line_640x360.webp",
                mdImg: "/images/" + url + "/the-pass-line_960x540.webp",
                lgImg: "/images/" + url + "/the-pass-line_1280x720.webp",
                alt: "Overhead view of the pass line. There are no bets on the table."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "passLineBetting",
          title: "How Do You Bet the Pass Line in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-sbosu8">When you bet the Pass Line, put your money on the bar marked Pass Line in front of where you
				are standing. If the puck is ON when you are ready to buy in, then a Point is established,
				and you should wait until the following Comeout Roll, when the puck is OFF, to bet the Pass
				Line.</p> <p class="pb-4" data-svelte-h="svelte-aolajv">Some casinos will allow you to bet the Pass Line during the Intermediate Roll, but you don&#39;t
				want to do that. When the puck is OFF, the Pass Line is twice as likely to win than to lose.
				When the puck is ON, the Pass Line becomes more likely to lose.</p> <p class="pb-4">If you want to bet the number the Pass Line represents, you can always ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place it",
                href: "place-bet-basics"
              },
              {},
              {}
            )} instead.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-the-pass-line_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-the-pass-line_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-the-pass-line_1280x720.webp",
                alt: "Four bets on the pass line. Each bet pointing to a spot in the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "passLineStages",
          title: "What are the Stages of the Pass Line in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Stage 1 - The Comeout Roll" }, {}, {
              default: () => {
                return `<p class="pb-4">There are two stages to the Pass Line. The first is when ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "the puck",
                    href: "the-craps-table"
                  },
                  {},
                  {}
                )} is OFF. This is called the Comeout Roll and is where the game starts, and one of three outcomes
					can happen: you win if the shooter rolls a 7 or 11, you lose if they roll 2, 3, or 12, or they
					roll a Point (4, 5, 6, 8, 9, or 10). If they roll a Point, they move on to Stage Two of a Craps
					game, the Intermediate Roll.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/stage-one-of-pass-line_640x360.webp",
                    mdImg: "/images/" + url + "/stage-one-of-pass-line_960x540.webp",
                    lgImg: "/images/" + url + "/stage-one-of-pass-line_1280x720.webp",
                    alt: "Stage One of the Pass Line, the Comeout Roll. The puck is OFF and a $5 bet is on the Pass Line."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Stage 2 - The Intermediate Roll" }, {}, {
              default: () => {
                return `<p class="pb-4">Stage 2 is called the Intermediate Roll, when the Point must be rolled again before the 7
					to win. If they roll the 7 before the Point, you lose. No other rolls matter. If the
					shooter makes their Point, the puck will be turned OFF, and a new Comeout Roll will begin.
					The same shooter will establish another Point, and the game repeats. If the Shooter
					doesn&#39;t make their Point, the puck will be turned OFF, and ${validate_component(Link, "Link").$$render($$result, { text: "the dice", href: "the-dice" }, {}, {})} will be passed to the next shooter.</p> <p class="pb-4" data-svelte-h="svelte-12a8vei">During the Comeout Roll, you can add and subtract from the Pass Line but keep in mind that
					the Pass Line is a contract bet during the Intermediate Roll.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/stage-two-of-pass-line_640x360.webp",
                    mdImg: "/images/" + url + "/stage-two-of-pass-line_960x540.webp",
                    lgImg: "/images/" + url + "/stage-two-of-pass-line_1280x720.webp",
                    alt: "Up close image of $10 on the pass line. It's near the puck which is on the four and in the on position."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "passLinePayments",
          title: "What Does the Pass Line Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ohknkl">The Pass Line always wins even money. You bet $10; you win $10. Even though the Pass Line
				pays even money, it allows you to bet the Odds bet, which has no advantage for the casino.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "During the Comeout Roll",
                smImg: "/images/" + url + "/pass-line-pay-a_640x360.webp",
                mdImg: "/images/" + url + "/pass-line-pay-a_960x540.webp",
                lgImg: "/images/" + url + "/pass-line-pay-a_1280x720.webp",
                alt: "$10 on the pass line with a $10 payment right next to it. The puck is off and in the don't come. Two pair of dice are in the corner. One is showing a seven and the other an eleven."
              },
              {},
              {}
            )} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "During the Intermediate Roll",
                smImg: "/images/" + url + "/pass-line-pay-b_640x360.webp",
                mdImg: "/images/" + url + "/pass-line-pay-b_960x540.webp",
                lgImg: "/images/" + url + "/pass-line-pay-b_1280x720.webp",
                alt: "$10 on the pass line with a $10 payment right next to it. The puck is on and on the point four. A pair of dice are in the corner and are showing the hard four."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Pass Line Calculator",
          id: "passLinePymntCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a Pass Line Bet.",
                title: "Pass Line Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculatePassLine,
                      id: "pass_line_pymnt_calc",
                      pId: "pass_line_calc_result",
                      placeholder: "Table minimum",
                      step: 5,
                      title: "Enter Pass Line Amount:"
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
          id: "postComeout",
          title: "Should You Bet the Pass Line After the Comeout Roll?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1a46v4c">No. In some casinos, you can only bet the Pass Line during the Comeout Roll. In others, you
				can make or add to it at any time. The only reason you&#39;d want to add to the Pass Line during
				the Intermediate Roll is to increase the amount you have behind it. In almost all cases,
				it will be better for you to use the money you wanted to put down on the Pass Line after the
				Comeout Roll and use it as a Place Bet on that number. In most cases, you&#39;ll get paid more
				money for the same risk.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/coming-down-on-pass-line_640x360.webp",
                mdImg: "/images/" + url + "/coming-down-on-pass-line_960x540.webp",
                lgImg: "/images/" + url + "/coming-down-on-pass-line_1280x720.webp",
                alt: "A chip is moving from the rail of the Craps table to the pass line bet on the layout. The puck is on and on the point nine."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerPassLine",
          title: "How Can You Bet the Pass Line for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1nk2pyn">Putting the dealers on the Pass Line is common. The players and dealers win and lose
				together. Just like a player&#39;s bet, a dealer&#39;s Pass Line bet is a contract bet, so once a
				Point is established, a dealers&#39; Pass Line bet must stay there until a decision has been
				made.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/pass-line-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/pass-line-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/pass-line-for-the-dealers_1280x720.webp",
                alt: "A $20 bet on the pass line with a dollar sitting next to it."
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
