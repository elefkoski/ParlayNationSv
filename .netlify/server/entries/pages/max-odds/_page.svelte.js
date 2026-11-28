import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { n as calculateMaxOdds, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Max Odds on the Pass Line";
let description = "Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the amount you can add as odds. The limit changes from casino to casino but is based on the amount of your Pass Line bet.";
let url = "max-odds";
let phref = "pass-line-odds";
let prev = "Pass Line Odds";
let nhref = "place-bets";
let next = "Place Bets";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Single Odds",
      href: "#singleOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Double Odds",
      href: "#doubleOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "3x 4x 5x Odds",
      href: "#threeFourFive",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "3x4x5x Max Odds Calculator",
      href: "#maxOddsCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Five Times Odds",
      href: "#fiveTimes",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Ten Times Odds",
      href: "#tenTimes",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "100 times Odds",
      href: "#oneHundredTimes",
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
  return `${$$result.head += `<!-- HEAD_svelte-10f694a_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-qbkj0f">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Max Odds on the Pass Line",
  "description": "An exploration of the limits on Odds bets in Craps, highlighting how casinos cap the maximum Odds bet based on the Pass Line bet and the advantages of betting max odds.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/max-odds",
  "image": "http://parlaynation.com/images/max-odds/max-odds-header.webp",
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
    "@id": "http://parlaynation.com/max-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Max Odds in Craps",
      "description": "Details on various levels of max odds allowed on the Pass Line in Craps, from single to 100x, and their implications for players.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Single (1x) Odds",
          "description": "Explanation of Single Odds, allowing equal amounts to the Pass Line bet as odds."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Double (2x) Odds",
          "description": "Overview of Double Odds, permitting bets up to twice the amount of the Pass Line bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "3x 4x 5x Odds",
          "description": "Details on the 3x 4x 5x Odds structure, a common casino standard for maximum Odds bets based on the point number."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "5x Odds",
          "description": "Insights into 5x Odds, allowing bets up to five times the Pass Line bet."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "10x Odds",
          "description": "Explanation of 10x Odds, where players can bet ten times their Pass Line bet."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "100x Odds",
          "description": "A look at the rare and high-risk 100x Odds bets, requiring significant bankrolls."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/max-odds-on-the-pass-line_640x360.webp",
      "caption": "$5 on the pass line with $25 odds in the back as odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/single-odds_640x360.webp",
      "caption": "$10 on the Pass Line with $10 Pass Line Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/double-odds_640x360.webp",
      "caption": "$10 on the Pass Line with $20 as Pass Line Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/3x-on-4-10_640x360.webp",
      "caption": "3x Odds on Points 4 and 10."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/4x-on-5-9_640x360.webp",
      "caption": "4x Odds on Points 5 and 9."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/5x-on-6-8_640x360.webp",
      "caption": "5x Odds on Points 6 or 8."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/five-times-max-odds_640x360.webp",
      "caption": "$50 on the Pass Line with $250 Pass Line Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/ten-times-max-odds_640x360.webp",
      "caption": "$10 on the Pass Line with $100 Pass Line Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/max-odds/one-hundred-times-max-odds_640x360.webp",
      "caption": "$5 on the Pass Line with $500 Pass Line Odds."
    }
  ]
}<\/script><!-- HEAD_svelte-10f694a_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The pass line",
          title: "Max Odds on the Pass Line",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-gj9if8">Odds on the Pass Line have no house advantage. For this reason, casinos put a limit on the
				amount you can add as odds. The limit changes from casino to casino but is based on the
				amount of your Pass Line bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/max-odds-on-the-pass-line_640x360.webp",
                mdImg: "/images/" + url + "/max-odds-on-the-pass-line_960x540.webp",
                lgImg: "/images/" + url + "/max-odds-on-the-pass-line_1280x720.webp",
                alt: "$5 on the pass line with $25 odds in the back as odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "singleOdds",
          title: "What Are Single (1x) Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-14g4cw5">Single Odds is when you can bet the same amount in Odds as you have on the Pass Line. This
				is the bottom of the barrel in terms of what a casino will allow you to bet but it is still
				a good bet with a low house advantage.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/single-odds_640x360.webp",
                mdImg: "/images/" + url + "/single-odds_960x540.webp",
                lgImg: "/images/" + url + "/single-odds_1280x720.webp",
                alt: "$10 on the Pass Line with $10 Pass Line Odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "doubleOdds",
          title: "What Are Double (2x) Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-w2uiw8">Double Odds are when you can bet twice your Pass Line bet. While not the best, I&#39;ve seen a
				lot of players go all night without ever having bet more than double their Pass Line bet. If
				you don&#39;t plan on spending a lot at the Craps table, double odds should be good for you.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/double-odds_640x360.webp",
                mdImg: "/images/" + url + "/double-odds_960x540.webp",
                lgImg: "/images/" + url + "/double-odds_1280x720.webp",
                alt: "$10 on the Pass Line with $20 as Pass Line Odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "threeFourFive",
          title: "What Are 3x 4x 5x Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">3-4-5 is standard in many casinos. This means the max odds that you can bet on the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} are 3x (your Pass Line bet) on the 4 and 10, 4x (your Pass Line bet) on the 5 and 9, and 5x
				(your Pass Line bet) on the 6 and 8.</p> <p class="pb-4" data-svelte-h="svelte-5yd82">No matter what Point is, if it has Max Odds using 3x 4x 5x, the total payout is going to be
				7x your Pass Line Bet. E.g., if you have a Pass Line bet of $5, the total payout of the Odds
				and the Pass Line is going to be $35 (7 x $5).</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "3x Odds on Points 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-o3nf45">Max Odds on the 4 and 10 are 3 times the Pass Line bet. A $25 Pass Line bet on the 4 and
					10 would allow $75 Odds. The payment would be 7 times the Pass Line bet (7 x $25) or $175.
					You win $150 on your $75 Odds (2:1) and the $25 for the Pass Line totaling $175.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "3x Pass Line",
                    smImg: "/images/" + url + "/3x-on-4-10_640x360.webp",
                    mdImg: "/images/" + url + "/3x-on-4-10_960x540.webp",
                    lgImg: "/images/" + url + "/3x-on-4-10_1280x720.webp",
                    alt: "$10 on the pass line with $30 odds. Point is four or ten."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "4x Odds on Points 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1pt1i3">You can bet up to 4 times your Pass Line bet when the Point is 5 or 9. A $15 Pass Line bet
					would allow up to $60 as Odds, and the payment would be 7x the Pass Line bet (7 x $15) or
					$105. You win $90 for your $60 odds (3:2), and the Pass Line bet would win even money,
					$15, for a total payment of $105.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "4x Pass Line",
                    smImg: "/images/" + url + "/4x-on-5-9_640x360.webp",
                    mdImg: "/images/" + url + "/4x-on-5-9_960x540.webp",
                    lgImg: "/images/" + url + "/4x-on-5-9_1280x720.webp",
                    alt: "$15 on the pass line with $60 odds. Point is five or nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "5x Odds on Points 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-uuef37">When the Point is 6 or 8, you&#39;re able to bet up to 5 times your Pass Line bet. The max on
					$10 would be $50, and the payout would be 7 times the Pass Line bet ($10) or $70. $50 Odds
					win $60 (6:5), and $10 Pass wins even money.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "5x Pass Line",
                    smImg: "/images/" + url + "/5x-on-6-8_640x360.webp",
                    mdImg: "/images/" + url + "/5x-on-6-8_960x540.webp",
                    lgImg: "/images/" + url + "/5x-on-6-8_1280x720.webp",
                    alt: "$10 on the pass line with $50 odds. Point is six or eight. The $50 odds are paid $60 and the $10 Pass Line is paid even money."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Max odds payment calculator",
          id: "maxOddsCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the total payment for a Pass Line with Max Odds when the table has 3x4x5x Odds.",
                title: "Max Odds Payment Calculator for 3x4x5x Odds"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateMaxOdds,
                      id: "max_odds_pymnt_calc",
                      pId: "max_odds_calc_result",
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
          id: "fiveTimes",
          title: "What Are 5x Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1srmdw5">5x Odds are when you can bet five times your Pass Line bet as Odds. This is also another
				common maximum amount for Odds at casinos. Maxing 5x Odds is still expensive so don&#39;t be
				deterred if you see it. If you want to bet more, you can always add more to your Pass Line
				bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/five-times-max-odds_640x360.webp",
                mdImg: "/images/" + url + "/five-times-max-odds_960x540.webp",
                lgImg: "/images/" + url + "/five-times-max-odds_1280x720.webp",
                alt: "$50 on the Pass Line with $250 Pass Line Odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "tenTimes",
          title: "What Are 10x Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-f0vnbw">10x Odds are when you can bet 10x your Pass Line bet as Odds. This is amazing but expensive.
				On a $5 game it&#39;s sustainable but when you start 10x maxing Odds on $15 or $25 games, you
				can drop thousands in minutes. It becomes scary to cut that house edge down real low.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/ten-times-max-odds_640x360.webp",
                mdImg: "/images/" + url + "/ten-times-max-odds_960x540.webp",
                lgImg: "/images/" + url + "/ten-times-max-odds_1280x720.webp",
                alt: "$10 on the Pass Line with $100 Pass Line Odds"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "oneHundredTimes",
          title: "What Are 100x Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-6aj4ep">100x Odds in Craps is when you can bet 100 times your Pass Line bet as Odds. This is crazy
				and I don&#39;t even know where you would find these games. Vegas? You&#39;re gonna need a serious
				bankroll if you want to keep up with those Odds.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/one-hundred-times-max-odds_640x360.webp",
                mdImg: "/images/" + url + "/one-hundred-times-max-odds_960x540.webp",
                lgImg: "/images/" + url + "/one-hundred-times-max-odds_1280x720.webp",
                alt: "$5 on the Pass Line with $500 Pass Line Odds"
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
