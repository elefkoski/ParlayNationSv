import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { k as calculateSixEightOdds, l as calculateFiveNineOdds, m as calculateFourTenOdds, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Pass Line Odds";
let description = "Odds for the Pass Line pay differently depending on what the Point is. They get paid True Odds and have no advantage for the casino, which is why they have limits.";
let url = "pass-line-odds";
let phref = "pass-line-basics";
let prev = "Pass Line Basics";
let nhref = "max-odds";
let next = "Max Odds";
let tblAria = "Odds pay table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Pass Line Odds",
      href: "#oddsBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Pass Line Odds Payment",
      href: "#oddsPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Pass Line Odds Calculators",
      href: "#passLineOddsCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Pass Line Odds",
      href: "#dealerOdds",
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
  let tblHeaders = ["Point", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["6 or 8", "6:5", "When point rolls", "7"],
    ["5 or 9", "3:2", "When point rolls", "7"],
    ["4 or 10", "2:1", "When point rolls", "7"]
  ];
  let tblPnts = [
    "Odds are not contract bets",
    "You can only make the odds bet during the Intermediate Roll",
    "If you don't plan on adding Odds then you probably shouldn't bet the Pass Line"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-16snt4j_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-hy04s4">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Pass Line Odds",
  "description": "An in-depth exploration of betting Odds on the Pass Line in Craps, illustrating how to place these bets, their payout structure based on the point, and how to extend these bets to the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/pass-line-odds",
  "image": "http://parlaynation.com/images/pass-line-odds/pass-line-odds-header.webp",
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
    "@id": "http://parlaynation.com/pass-line-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Pass Line Odds",
      "description": "Comprehensive guide on placing Odds bets behind the Pass Line in Craps, their True Odds payouts, and including dealers in these advantageous bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Pass Line Odds in Craps?",
          "description": "Steps to place Odds bets properly behind the Pass Line, ensuring clarity and optimal positioning for successful gameplay."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Do Pass Line Odds Pay on a Craps Game?",
          "description": "Detailed breakdown of True Odds payments for different points on the Pass Line, emphasizing the zero house edge on these bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Can You Bet the Pass Line w/Odds for the Dealers?",
          "description": "Instructions on placing Pass Line bets with Odds on behalf of the dealers, highlighting the potential rewards for the casino staff."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-odds/pass-line-odds_640x360.webp",
      "caption": "$5 on the pass line with $20 odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-odds/how-to-bet-the-pass-line-with-odds_640x360.webp",
      "caption": "Four bets on the pass line. Each bet pointing to a spot in the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/pass-line-odds/dealer-pass-line-with-odds_640x360.webp",
      "caption": "$10 on the pass line with $20 odds. Next to it is a $1 pass line bet with $2 odds."
    }
  ]
}<\/script><!-- HEAD_svelte-16snt4j_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The pass line",
          title: "Pass Line Odds",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-vnom5u">During the Intermediate Roll, you can add an extra bet called Odds directly behind your Pass
				Line bet. They are paid True Odds and are also betting that the Point will be rolled before
				the 7. The wonderful thing about the Odds bet is THE CASINO HAS ZERO ADVANTAGE, so you
				should always want to make this bet.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/pass-line-odds_640x360.webp",
                mdImg: "src/images/" + url + "/pass-line-odds_960x540.webp",
                lgImg: "src/images/" + url + "/pass-line-odds_1280x720.webp",
                alt: "$5 on the pass line with $20 odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "oddsBetting",
          title: "How Do You Bet Pass Line Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Odds for the Pass Line are put directly behind the Pass Line bet. Try not to put the Odds
				bet directly behind the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} because you need some
				space for a die to land between the two bets. Two dice is a good measure, which is also about
				the width of two fingers.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/how-to-bet-the-pass-line-with-odds_640x360.webp",
                mdImg: "src/images/" + url + "/how-to-bet-the-pass-line-with-odds_960x540.webp",
                lgImg: "src/images/" + url + "/how-to-bet-the-pass-line-with-odds_1280x720.webp",
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
          id: "oddsPayment",
          title: "What Do Pass Line Odds Pay on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-18rq3fb">Odds for the Pass Line pay differently depending on what the Point is. They pay what is
				called True Odds. True Odds are different for each Point, which is why you must bet Odds
				differently for each of those Points.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Odds Pay 6:5 on Point 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4">When you add Odds to a Pass Line Bet on the 6 or 8, you must bet in increments of five.
					$5, $10, $15, etc. Every $5 you bet as Odds for a Pass Line bet on the 6 or 8 gets paid
					$6. Otherwise known as 6:5, which reads ${validate_component(Quote, "Quote").$$render($$result, { text: "6 to 5" }, {}, {})}, or you can think of it as ${validate_component(Quote, "Quote").$$render($$result, { text: "$6 for every $5" }, {}, {})}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 1",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-6-8-a_640x360.webp",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-6-8-a_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-6-8-a_1280x720.webp",
                    alt: "$5 on the Pass line with $5 odds. The pass line is paid even money and the $5 odds are paid $6."
                  },
                  {},
                  {}
                )} ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 2",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-6-8-b_640x360.webp",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-6-8-b_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-6-8-b_1280x720.webp",
                    alt: "$25 on the Pass line with $75 odds. The pass line is paid even money and the $75 odds are paid $90."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Odds Pay 3:2 on Point 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4">It would be best if you had even Odds on the 5 and 9. This means any even number, such as
					$2, $4, $10, $30, etc., could be used. Every $2 you bet as Odds gets paid $3. This is
					known as 3:2, which reads, ${validate_component(Quote, "Quote").$$render($$result, { text: "3 to 2" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "$3 for every $2" }, {}, {})}.
					You could also think of this as 1 and ½ times your bet or a Blackjack.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 1",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-5-9-a_640x360.webp",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-5-9-a_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-5-9-a_1280x720.webp",
                    alt: "$10 on the pass line with $10 odds. The pass line is paid even money and the $10 odds are paid $15."
                  },
                  {},
                  {}
                )} ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 2",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-5-9-b_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-5-9-b_1280x720.webp",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-5-9-b_640x360.webp",
                    alt: "$15 on the pass line with $40 odds. The pass line is paid even money and the $40 odds are paid $60."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Odds Pay 2:1 on Point 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4">Odds on the 4 and 10 can be any amount. Regardless of what you bet, the amount you will
					win will be double or 2:1, which reads ${validate_component(Quote, "Quote").$$render($$result, { text: "2 to 1" }, {}, {})}, or you can think of it as ${validate_component(Quote, "Quote").$$render($$result, { text: "$2 for every $1" }, {}, {})}. $3 Odds will win $6. $20 odds will win $40.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 1",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-4-10-a_640x360.webp",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-4-10-a_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-4-10-a_1280x720.webp",
                    alt: "$5 on the pass line with $10 odds. The pass line is paid even money and the $10 odds are paid $20."
                  },
                  {},
                  {}
                )} ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Example 2",
                    smImg: "src/images/" + url + "/pass-line-odds-pay-4-10-b_640x360.webp",
                    mdImg: "src/images/" + url + "/pass-line-odds-pay-4-10-b_960x540.webp",
                    lgImg: "src/images/" + url + "/pass-line-odds-pay-4-10-b_1280x720.webp",
                    alt: "$25 on the pass line with $25 odds. The pass line is paid even money and the $25 odds are paid $50."
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
          aria: "Pass Line Odds Calculators",
          id: "passLineOddsCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for Odds on a Pass Line Bet.",
                title: "Pass Line Odds Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateSixEightOdds,
                      id: "six_eight_odds_pymnt_calc",
                      pId: "six_eight_odds_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Enter Odds amount for Point 6 or 8:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFiveNineOdds,
                      id: "five_nine_odds_pymnt_calc",
                      pId: "five_nine_odds_calc_result",
                      placeholder: "$2 minimum",
                      step: 2,
                      title: "Enter Odds amount for Point 5 or 9:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFourTenOdds,
                      id: "four_ten_odds_pymnt_calc",
                      pId: "four_ten_odds_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Odds amount for Point 4 or 10:"
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
          id: "dealerOdds",
          title: "How Can You Bet the Pass Line w/Odds for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-njxwp4">If you make a Pass Line bet for the dealers, you can also add Odds to it. Like a players&#39;
				Pass Line bet, there is a maximum amount of Odds you can add to a dealers&#39; Pass Line bet.
				The Pass Line bet gets paid even money and the Odds accordingly.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/dealer-pass-line-with-odds_640x360.webp",
                mdImg: "src/images/" + url + "/dealer-pass-line-with-odds_960x540.webp",
                lgImg: "src/images/" + url + "/dealer-pass-line-with-odds_1280x720.webp",
                alt: "$10 on the pass line with $20 odds. Next to it is a $1 pass line bet with $2 odds."
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
