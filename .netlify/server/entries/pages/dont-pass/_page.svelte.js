import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { U as calculateDontPass, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting the Don't Pass in Craps";
let description = "The Don't Pass is the opposite of the Pass Line. When the Don't Pass wins the Pass Line loses and vice versa.";
let url = "dont-pass";
let phref = "the-donts";
let prev = "The Don'ts";
let nhref = "dont-pass-lay-odds";
let next = "Don't Pass Lay Odds";
let tblAria = "Don't pass payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting the Don't Pass",
      href: "#bettingDontPass",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Pass Stages",
      href: "#dontStages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Pass Payment",
      href: "#dontPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Pass Calculator",
      href: "#dontPassCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Don't Pass",
      href: "#dealerDontPass",
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
    ["Comeout Roll", "Even money", "2 or 3", "7 or 11"],
    ["Intermediate Roll", "Even money", "7", "When point rolls"]
  ];
  let tblPnts = [
    "You can take the Don't Pass back at any time",
    "You cannot turn Off a Don't Pass Bet, you must take them down"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-19vzrqm_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-emxtxn">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Don't Pass in Craps",
  "description": "Exploration of the Don't Pass Bet in Craps, detailing its comparison to the Pass Line, the process of placing a bet, the two stages of betting, payout information, and dealer bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-pass",
  "image": "http://parlaynation.com/images/dont-pass/dont-pass-header.webp",
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
    "@id": "http://parlaynation.com/dont-pass"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Don't Pass Bet Insights",
      "description": "Comprehensive guidance on the Don't Pass Bet, including how to place the bet, the stages of betting, the payouts, and tips for betting on behalf of the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing the Don't Pass Bet",
          "description": "Instructions on how to place a Don't Pass Bet on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Stages of the Don't Pass Bet",
          "description": "Explanation of the Comeout Roll and Intermediate Roll stages of the Don't Pass Bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don't Pass Bet Payouts",
          "description": "Information on the payout structure of the Don't Pass Bet."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Betting the Don't Pass for Dealers",
          "description": "How to place a Don't Pass Bet for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass_640x360.webp",
      "caption": "Overview of the Don't Pass betting area on a Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/how-to-bet-the-dont-pass_640x360.webp",
      "caption": "Guide on placing Don't Pass Bets."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass-stage-one_640x360.webp",
      "caption": "Don't Pass Bet during the Comeout Roll stage."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dont-pass-stage-two_640x360.webp",
      "caption": "Don't Pass Bet during the Intermediate Roll stage."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass/dealer-dont-pass_640x360.webp",
      "caption": "Don't Pass Bet placed for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-19vzrqm_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The Don't Side",
          title: "Betting the Don't Pass in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">For the most part, the Don&#39;t Pass is the complete opposite of the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}. Where the Pass Line wins, the Don&#39;t Pass loses and vice versa. You can only bet the
				Don&#39;t Pass during the Comeout Roll because after the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})} the Don&#39;t Pass is most likely to win and the casinos would never give you that advantage.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-pass_640x360.webp",
                mdImg: "/images/" + url + "/dont-pass_960x540.webp",
                lgImg: "/images/" + url + "/dont-pass_1280x720.webp",
                title: "The Don't Pass Bar",
                alt: "The Don't Pass Bar outlined on the Craps table."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingDontPass",
          title: "How Do You Bet the Don't Pass in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-anexnp">When you bet the Don&#39;t Pass all you have to do is put the money right in front of you
				relative to your spot in the rail.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-the-dont-pass_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-the-dont-pass_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-the-dont-pass_1280x720.webp",
                title: "How to Bet the Don't Pass",
                alt: "Up close view of the Don't Pass bar with bets and the Craps table rail. The Don't Pass Bets have lines pointing to spots in the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dontStages",
          title: "What Are the Two Stages of the Don't Pass in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Stage 1 - The Comeout Roll" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-14nifp6">Stage one is the Comeout Roll, before the Point is established. During the Comeout Roll
					the Don&#39;t Pass wins when 2 or 3 are rolled. It loses if a 7 or 11 is rolled, and
					if the 12 rolls it&#39;s a push, it doesn&#39;t win or lose. The Comeout Roll is where the casino
					makes its money on the Don&#39;t Pass because once a Point is established the Don&#39;t Pass has
					advantage over the house.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/dont-pass-stage-one_640x360.webp",
                    mdImg: "/images/" + url + "/dont-pass-stage-one_960x540.webp",
                    lgImg: "/images/" + url + "/dont-pass-stage-one_1280x720.webp",
                    title: "Don't Pass - Stage One",
                    alt: "$25 on the Don't Pass. The Puck is OFF."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Stage 2 - Intermediate Roll" }, {}, {
              default: () => {
                return `<p class="pb-4">The second stage is the ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "Intermediate Roll",
                    href: "the-stages"
                  },
                  {},
                  {}
                )}, after the
					Point is established. During the Intermediate Roll the Don&#39;t Pass is betting that the 7
					will roll before the Point is rolled. If the 7 rolls before the Point the Don&#39;t Pass wins.
					If the Point rolls before the 7 the Don&#39;t Pass loses.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/dont-pass-stage-two_640x360.webp",
                    mdImg: "/images/" + url + "/dont-pass-stage-two_960x540.webp",
                    lgImg: "/images/" + url + "/dont-pass-stage-two_1280x720.webp",
                    title: "Don't Pass - Stage Two",
                    alt: "$25 on the Don't Pass. The Puck is On the ten."
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
          id: "dontPayment",
          title: "What Does the Don't Pass Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1b6a6lf">Regardless of where you are in the game, the Don&#39;t Pass will always win even money.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Comeout Roll",
                smImg: "/images/" + url + "/dont-pass-wins-even-money-b_640x360.webp",
                mdImg: "/images/" + url + "/dont-pass-wins-even-money-b_960x540.webp",
                lgImg: "/images/" + url + "/dont-pass-wins-even-money-b_1280x720.webp",
                title: "Don't Pass Wins Even Money During Comeout Roll",
                alt: "$20 with $20 payment on the Don't Pass. The Puck is Off. Two purple dice show 1-1 and another pair show 1-2."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Seven Out",
                smImg: "/images/" + url + "/dont-pass-wins-even-money-a_640x360.webp",
                mdImg: "/images/" + url + "/dont-pass-wins-even-money-a_960x540.webp",
                lgImg: "/images/" + url + "/dont-pass-wins-even-money-a_1280x720.webp",
                title: "Don't Pass Wins Even Money on Seven Out",
                alt: "$25 with $25 payment on the Don't Pass. The Puck is on point ten. Two purple dice show 2-5."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Don't pass payment calculator",
          id: "dontPassCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a Don't Pass Bet.",
                title: "Don't Pass Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateDontPass,
                      id: "dont_pass_pymnt_calc",
                      pId: "dont_pass_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Enter Don't Pass amount:"
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
          id: "dealerDontPass",
          title: "How Do You Bet the Don't Pass for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-llwnup">You can make a Don&#39;t Pass Bet for the dealers in any amount. Like players, it must be done
				during the Comeout Roll and you can put it right next to your bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dealer-dont-pass_640x360.webp",
                mdImg: "/images/" + url + "/dealer-dont-pass_960x540.webp",
                lgImg: "/images/" + url + "/dealer-dont-pass_1280x720.webp",
                title: "Dealer Don't Pass",
                alt: "$1 next to $5 on the Don't Pass."
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
