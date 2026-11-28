import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { V as calculateSixEightLayOdds, W as calculateFiveNineLayOdds, X as calculateFourTenLayOdds, Y as calculateMaxLay, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting Don't Pass Lay Odds in Craps";
let description = "Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add.";
let url = "dont-pass-lay-odds";
let phref = "dont-pass";
let prev = "Don't Pass";
let nhref = "dont-come";
let next = "Don't Come";
let tblAria = "Dont pass lay odds payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Don't Pass Lay Odds",
      href: "#bettingLayOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Payment for Don't Pass Lay Odds",
      href: "#layOddsPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Pass Lay Odds Calculators",
      href: "#dontPassLayOddsCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Max Don't Pass Lay Odds",
      href: "#maxLayOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Check Max Don't Pass Lay Odds",
      href: "#maxDontPassLayOdds",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Don't Pass Lay Odds",
      href: "#dealerLayOdds",
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
  let tblHeaders = ["Point", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["6 or 8", "5:6", "7", "When point rolls"],
    ["5 or 9", "2:3", "7", "When point rolls"],
    ["4 or 10", "1:2", "7", "When point rolls"]
  ];
  let tblPnts = [
    "Lay Odds get paid True Odds",
    "Lay Odds are not contract bets",
    "Lay Odds have zero advantage for the casino"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-121r1h4_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-4n80x1">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Don't Pass Lay Odds in Craps",
  "description": "A detailed guide on betting Don't Pass Lay Odds in Craps, including placement, payouts, maximum Lay Odds, and how to bet Lay Odds for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-pass-lay-odds",
  "image": "http://parlaynation.com/images/dont-pass-lay-odds/dont-pass-lay-odds-header.webp",
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
    "@id": "http://parlaynation.com/dont-pass-lay-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Don't Pass Lay Odds",
      "description": "Insights on Don't Pass Lay Odds bets in Craps, covering how to place these bets, their payouts based on the point, and how to maximize Lay Odds.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing Don't Pass Lay Odds",
          "description": "Instructions on how to place Lay Odds bets next to the Don't Pass Bet on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Don't Pass Lay Odds Payments",
          "description": "Details on the payout ratios for Lay Odds depending on the point number."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Maximum Lay Odds",
          "description": "Explanation of the maximum Lay Odds allowed for Don't Pass Bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Lay Odds for Dealers",
          "description": "Guidance on placing Lay Odds bets for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/dont-pass-lay-odds_640x360.webp",
      "caption": "$10 on the Don't Pass with $24 Lay Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_640x360.webp",
      "caption": "Several Don't Pass Bets with Lay Odds Heeled in the direction of the base dealer."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-pass-lay-odds/lay-odds-for-the-dealers_640x360.webp",
      "caption": "$1 with $6 Lay Odds on the Don't Pass for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-121r1h4_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The Don't Side",
          title: "Betting Don't Pass Lay Odds in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Just like the Pass Line, after the Point has been established, you are allowed to make an
				Odds bet but there is a big difference between the two. On the Pass Line you ${validate_component(Quote, "Quote").$$render($$result, { text: "Take Odds" }, {}, {})}, where they win more. On the Don&#39;t Pass you ${validate_component(Quote, "Quote").$$render($$result, { text: "Lay Odds" }, {}, {})} and bet more to win
				less because you&#39;re more likely to win.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-pass-lay-odds_640x360.webp",
                mdImg: "/images/" + url + "/dont-pass-lay-odds_960x540.webp",
                lgImg: "/images/" + url + "/dont-pass-lay-odds_1280x720.webp",
                title: "Don't Pass Lay Odds",
                alt: "$10 on the Don't Pass with $24 Lay Odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingLayOdds",
          title: "How Do You Bet Don't Pass Lay Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Lay Odds on the Don&#39;t Pass go right next to your ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})}
				bet on the side that&#39;s closest to the ${validate_component(Link, "Link").$$render($$result, { text: "Base Dealer", href: "the-crew" }, {}, {})}. They
				aren&#39;t stacked straight up like ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Odds on the Pass line",
                href: "pass-line-odds"
              },
              {},
              {}
            )}.
				They are heeled off which make it look like they are at an angle and you should heel them
				off in the direction towards the Base Dealer.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-dont-pass-lay-odds_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-dont-pass-lay-odds_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-dont-pass-lay-odds_1280x720.webp",
                title: "How to Bet Don't Pass Lay Odds",
                alt: "Several Don't Pass Bets with Lay Odds Heeled in the direction of the base dealer."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "layOddsPayment",
          title: "What Do Lay Odds on the Don't Pass Pay?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-czg349">Lay Odds on the Don&#39;t Pass pay differently depending on what the Point is. The Point also
				determines the dollar amount you should be Laying for that Point. You Lay the 6 and 8 in
				multiples of 6, the 5 and 9 in multiples of 3, and the 4 and 10 in multiples of 2. These
				multiples were created based on the number of ways the bet can lose compared to the number
				of ways they can win.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 5:6 on the 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4">There are 5 ways to lose and 6 ways to win when the Point is 6 or 8. It&#39;s written 5:6 and
					read
					${validate_component(Quote, "Quote").$$render($$result, { text: "5 to 6" }, {}, {})} or you win ${validate_component(Quote, "Quote").$$render($$result, { text: "$5 for every $6" }, {}, {})}. This means that you
					can only make the Lay Odds bet in multiples of six.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$6 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-6-8-a_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-6-8-a_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-6-8-a_1280x720.webp",
                    title: "$6 Don't Pass Lay Odds Payment 6 & 8",
                    alt: "$5 Don't Pass with a $5 payment. Next to it are $6 Lay Odds with $5 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$18 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-6-8-b_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-6-8-b_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-6-8-b_1280x720.webp",
                    title: "$18 Don't Pass Lay Odds Payment 6 & 8",
                    alt: "$10 Don't Pass with a $10 payment. Next to it are $18 Lay Odds with $15 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 2:3 on the 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4">There are 4 ways to win and 6 ways to lose on the 5 and 9 which is written 4:6 and then
					reduced to 2:3. You read it as ${validate_component(Quote, "Quote").$$render($$result, { text: "2 to 3" }, {}, {})} or you win ${validate_component(Quote, "Quote").$$render($$result, { text: "$2 for every $3" }, {}, {})}. Lay Odds on the 5 and 9 must be made in multiples of 3.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$3 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-5-9-a_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-5-9-a_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-5-9-a_1280x720.webp",
                    title: "$3 Don't Pass Lay Odds Payment 5 & 9",
                    alt: "$5 on the Don't Pass with a $5 payment. Next to it are $3 Lay Odds with $2 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$90 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-5-9-b_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-5-9-b_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-5-9-b_1280x720.webp",
                    title: "$90 Don't Pass Lay Odds Payment 5 & 9",
                    alt: "$25 on the Don't Pass with a $25 payment. Next to it are $90 Lay Odds with $75 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 1:2 on the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4">There are 3 ways to lose and 6 ways to win on the 4 and 10 which is written 3:6 then
					reduced to 1:2. It&#39;s spoken as ${validate_component(Quote, "Quote").$$render($$result, { text: "1 to 2" }, {}, {})} and when you think about getting paid
					for your Lay Odds, it&#39;s ${validate_component(Quote, "Quote").$$render($$result, { text: "$1 for every $2" }, {}, {})}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$2 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-4-10-a_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-4-10-a_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-4-10-a_1280x720.webp",
                    title: "$2 Don't Pass Lay Odds Payment 4 & 10",
                    alt: "$5 on the Don't Pass with a $5 payment. Next to it are $2 Lay Odds with $1 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$80 Lay Odds",
                    smImg: "/images/" + url + "/lay-odds-4-10-b_640x360.webp",
                    mdImg: "/images/" + url + "/lay-odds-4-10-b_960x540.webp",
                    lgImg: "/images/" + url + "/lay-odds-4-10-b_1280x720.webp",
                    title: "$80 Don't Pass Lay Odds Payment 4 & 10",
                    alt: "$20 on the Don't Pass with a $20 payment. Next to it are $80 Lay odds with $40 payment."
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
          aria: "Don't pass lay odds payment calculators",
          id: "dontPassLayOddsCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for Lay Odds on the Don't Pass.",
                title: "Don't Pass Lay Odds Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateSixEightLayOdds,
                      id: "six_eight_lay_odds_pymnt_calc",
                      pId: "six_eight_lay_odds_calc_result",
                      placeholder: "$6 minimum",
                      step: 6,
                      title: "Enter Lay Odds amount for 6 or 8:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFiveNineLayOdds,
                      id: "five_nine_lay_odds_pymnt_calc",
                      pId: "five_nine_lay_odds_calc_result",
                      placeholder: "$3 minimum",
                      step: 3,
                      title: "Enter Lay Odds amount for 5 or 9:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFourTenLayOdds,
                      id: "four_ten_lay_odds_pymnt_calc",
                      pId: "four_ten_lay_odds_calc_result",
                      placeholder: "$2 minimum",
                      step: 2,
                      title: "Enter Lay Odds amount for 4 or 10:"
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
          id: "maxLayOdds",
          title: "What Are Max Lay Odds on the Don't Pass?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-18io3c6">No matter what Point you are Laying Odds on, the maximum allowed is always going to be 6
				times the Don&#39;t Pass Bet. The casino has no advantage with this bet so there must be a limit
				and it&#39;s a flat rate across all the numbers.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/max-lay-odds-on-the-dont-pass_640x360.webp",
                mdImg: "/images/" + url + "/max-lay-odds-on-the-dont-pass_960x540.webp",
                lgImg: "/images/" + url + "/max-lay-odds-on-the-dont-pass_1280x720.webp",
                title: "Max Lay Odds on the Don't Pass",
                alt: "$10 on the Don't Pass with $60 Lay Odds."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Don't pass lay odds payment calculator",
          id: "maxDontPassLayOdds"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the Max Lay Odds for your bet on the Don't Pass.",
                title: "Check Max Don't Pass Lay Odds"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateMaxLay,
                      id: "max_lay_pymnt_calc",
                      pId: "max_lay_calc_result",
                      placeholder: "Table minimum",
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
          id: "dealerLayOdds",
          title: "How Do You Bet Don't Pass Lay Odds for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1r3huah">You can add Lay Odds to a dealer&#39;s Don&#39;t Pass Bet in the same way you add Lay Odds to your
				own Don&#39;t Pass Bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/lay-odds-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/lay-odds-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/lay-odds-for-the-dealers_1280x720.webp",
                title: "Dealer Lay Odds",
                alt: "$1 with $6 Lay Odds on the Don't Pass."
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
