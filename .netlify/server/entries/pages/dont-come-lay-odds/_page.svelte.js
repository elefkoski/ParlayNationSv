import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { _ as calculateSixEightDcLayOdds, $ as calculateFiveNineDcLayOdds, a0 as calculateFourTenDcLayOdds, a1 as calculateMaxDcLay, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting Don't Come Lay Odds in Craps";
let description = "Don't Come Lay Odds get paid True Odds so the casinos have no advantage. You want to take advantage of this bet.";
let url = "dont-come-lay-odds";
let phref = "dont-come";
let prev = "Don't Come";
let nhref = "overlays";
let next = "Overlays";
let tblAria = "Don't come lay odds payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Don't Come Lay Odds",
      href: "#bettingDCLayOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Lay Odds Placement",
      href: "#dcLayOddsPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Lay Odds Payment",
      href: "#dcLayOddsPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Lay Odds Calculators",
      href: "#dcLayOddsCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Max Don't Come Lay Odds",
      href: "#maxDCLayOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Check Max Don't Come Lay Odds",
      href: "#maxDCLayOddsCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Don't Come Lay Odds",
      href: "#dealerDCLayOdds",
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
  return `${$$result.head += `<!-- HEAD_svelte-1ye45ee_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1q5kcw3">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Don't Come Lay Odds in Craps",
  "description": "A guide on Don't Come Lay Odds in Craps, including how to place them, their placement on the table, payout rates, and how to bet for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-come-lay-odds",
  "image": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds-header.webp",
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
    "@id": "http://parlaynation.com/dont-come-lay-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Don't Come Lay Odds Insights",
      "description": "Insights into Don't Come Lay Odds in Craps, including bet placement, table placement, payouts, and dealer bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing Don't Come Lay Odds",
          "description": "How to place Don't Come Lay Odds on a Craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Don't Come Lay Odds Placement",
          "description": "Where to place Don't Come Lay Odds on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don't Come Lay Odds Payouts",
          "description": "The payout rates for Don't Come Lay Odds depending on the point."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Betting Don't Come Lay Odds for Dealers",
          "description": "How to place Don't Come Lay Odds bets for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds_640x360.webp",
      "caption": "Don't Come Lay Odds on a Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_640x360.webp",
      "caption": "Guide on placing Don't Come Lay Odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/placement-of-dont-come-lay-odds_640x360.webp",
      "caption": "The placement of Don't Come Lay Odds on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_640x360.webp",
      "caption": "Don't Come Lay Odds placed for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-1ye45ee_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The Don't Side",
          title: "Betting Don't Come Lay Odds in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Lay Odds for a Don&#39;t Come work the same way as ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Lay Odds",
                href: "dont-pass-lay-odds"
              },
              {},
              {}
            )} on the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})}. You add them to your Don&#39;t Come Bet
				after it has moved behind a Point and is also betting that a 7 will be rolled before the
				Point. If the 7 rolls your Don&#39;t Come Bet and its Lay Odds win. If the Point is rolled the
				Don&#39;t Come Bet and its Lay Odds lose.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-come-lay-odds_640x360.webp",
                mdImg: "/images/" + url + "/dont-come-lay-odds_960x540.webp",
                lgImg: "/images/" + url + "/dont-come-lay-odds_1280x720.webp",
                title: "Don't Come Lay Odds",
                alt: "$10 with $18 Lay odds behind the point eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingDCLayOdds",
          title: "How Do You Bet Don't Come Lay Odds in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you bet Don&#39;t Come Lay Odds you put your money in the COME and tell the dealer what ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Don't\n			Come",
                href: "dont-come"
              },
              {},
              {}
            )} bet you are adding Lay Odds to.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-dont-come-lay-odds_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-dont-come-lay-odds_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-dont-come-lay-odds_1280x720.webp",
                title: "How to Bet Don't Come Lay Odds",
                alt: "$10 behind the point five and $15 sitting in the COME."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dcLayOddsPlacement",
          title: "Where Are Your Don't Come Lay Odds at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Place your money in the COME and tell the dealer you want to ${validate_component(Quote, "Quote").$$render($$result, { text: "Lay Odds" }, {}, {})} on whichever
				Point you&#39;re behind. The dealer will take the money and heel it next to your Don&#39;t Come Bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-dont-come-lay-odds_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-dont-come-lay-odds_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-dont-come-lay-odds_1280x720.webp",
                title: "Placement of Don't Come Lay Odds",
                alt: "$50 with $90 Lay Odds behind the point six."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dcLayOddsPayment",
          title: "What Do the Lay Odds Pay for a Don't Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-lwrxpr">Lay Odds for a Don&#39;t Come Bet work the same way as Lay Odds for the Don&#39;t Pass. They pay
				differently depending on the Point and you must make them in certain increments. When your
				Don&#39;t Come and its Lay Odds win, the dealer will pay each bet and then stack all the money
				into one stack, move it through the DC and hand it off to you.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Lay Odds Pay 5:6 on the 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4">Like the Lay Odds on the Don&#39;t Pass, when the Point is 6 or 8 you get paid 5:6, said as ${validate_component(Quote, "Quote").$$render($$result, { text: "5 to 6." }, {}, {})} This means that you must bet in increments of $6 and get paid $5 for every $6.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$24 Don't Come Lay Odds",
                    smImg: "/images/" + url + "/dont-come-lay-odds-6-8_640x360.webp",
                    mdImg: "/images/" + url + "/dont-come-lay-odds-6-8_960x540.webp",
                    lgImg: "/images/" + url + "/dont-come-lay-odds-6-8_1280x720.webp",
                    title: "$24 Don't Come Lay Odds Against the Six",
                    alt: "$10 paid even money behind the point six. There are $24 Lay Odds next to it paid $20."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Lay Odds Pay 2:3 on the 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4">When you&#39;re Laying Odds for a Don&#39;t Come on the 5 and 9 you get paid 2:3, said as ${validate_component(Quote, "Quote").$$render($$result, { text: "2 to 3" }, {}, {})} so you must bet the Lay Odds in increments of $3 and get paid $2 for every $3.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$6 Don't Come Lay Odds",
                    smImg: "/images/" + url + "/dont-come-lay-odds-5-9_640x360.webp",
                    mdImg: "/images/" + url + "/dont-come-lay-odds-5-9_960x540.webp",
                    lgImg: "/images/" + url + "/dont-come-lay-odds-5-9_1280x720.webp",
                    title: "$6 Don't Come Lay Odds Against the Nine",
                    alt: "$5 paid even money behind the point nine. There are $6 Lay Odds next to it paid $4."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Lay Odds Pay 1:2 on the 4 and 10"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4">When you&#39;re Laying Odds for a Don&#39;t Come on the 4 and 10 you get paid 1:2, said as ${validate_component(Quote, "Quote").$$render($$result, { text: "1 to 2" }, {}, {})} so you must bet the Lay Odds in increments of $2 and you get paid $1 for every $2.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "/images/" + url + "/dont-come-lay-odds-4-10_640x360.webp",
                      mdImg: "/images/" + url + "/dont-come-lay-odds-4-10_960x540.webp",
                      lgImg: "/images/" + url + "/dont-come-lay-odds-4-10_1280x720.webp",
                      title: "$60 Don't Come Lay Odds Against the Four",
                      alt: "$15 paid even money behind the point four. There are $60 Lay Odds next to it paid $30."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
              $$result,
              {
                aria: "Don't come lay odds payment calculators",
                id: "dcLayOddsCalcs"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcBox, "CalcBox").$$render(
                    $$result,
                    {
                      description: "Check the payment for Lay Odds on the Don't Come.",
                      title: "Don't Come Lay Odds Payment Calculators"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            calculate: calculateSixEightDcLayOdds,
                            id: "six_eight_dont_come_lay_odds_pymnt_calc",
                            pId: "six_eight_dont_come_lay_odds_calc_result",
                            placeholder: "$6 minimum",
                            step: 6,
                            title: "Enter Lay Odds amount for 6 or 8:"
                          },
                          {},
                          {}
                        )} ${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            calculate: calculateFiveNineDcLayOdds,
                            id: "five_nine_dont_come_lay_odds_pymnt_calc",
                            pId: "five_nine_dont_come_lay_odds_calc_result",
                            placeholder: "$3 minimum",
                            step: 3,
                            title: "Enter Lay Odds amount for 5 or 9:"
                          },
                          {},
                          {}
                        )} ${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            calculate: calculateFourTenDcLayOdds,
                            id: "four_ten_dont_come_lay_odds_pymnt_calc",
                            pId: "four_ten_dont_come_lay_odds_calc_result",
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
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "maxDCLayOdds",
          title: "What Are the Max Lay Odds for a Don't Come Bet?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-23zf7h">Since the casino has no advantage on this bet they put a limit on it. The maximum Lay Odds
				you can add to a Don&#39;t Come Bet are the same as for the Don&#39;t Pass. No matter the number,
				the maximum Lay Odds you can add are six times the Don&#39;t Come Bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/max-lay-odds-for-the-dont-come_640x360.webp",
                mdImg: "/images/" + url + "/max-lay-odds-for-the-dont-come_960x540.webp",
                lgImg: "/images/" + url + "/max-lay-odds-for-the-dont-come_1280x720.webp",
                title: "Max Lay Odds for the Don't Come",
                alt: "$25 with $150 Lay Odds behind the point eight."
              },
              {},
              {}
            )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
              $$result,
              {
                aria: "Check max don't come lay odds",
                id: "maxDCLayOddsCalc"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcBox, "CalcBox").$$render(
                    $$result,
                    {
                      description: "Check the Max Lay Odds for your bet on the Don't Come.",
                      title: "Check Max Don't Come Lay Odds"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            calculate: calculateMaxDcLay,
                            id: "max_dont_come_lay_pymnt_calc",
                            pId: "max_dont_come_lay_calc_result",
                            placeholder: "Table minimum",
                            step: 5,
                            title: "Enter Don't Come amount:"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerDCLayOdds",
          title: "How Do You Bet Don't Come Lay Odds for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-fp3m2c">If you make a Don&#39;t Come Bet for the dealers and their bet gets put behind a Point, you can
				add Lay Odds to it. Max for the dealers is still six times.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-come-lay-odds-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/dont-come-lay-odds-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/dont-come-lay-odds-for-the-dealers_1280x720.webp",
                title: "Don't Come Lay Odds for the Dealers",
                alt: "$2 with $12 Lay Odds behind the point ten."
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
