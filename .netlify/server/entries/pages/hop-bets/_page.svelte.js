import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { K as calculateHopLowSide, L as calculateHopHighSide, M as calculateHopFours, N as calculateHopFives, O as calculateHopNines, P as calculateHopTens, Q as calculateHopSixes, R as calculateHopSevens, S as calculateHopEights, T as calculateHopHardways, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { C as CalcInput5 } from "../../../chunks/CalcInput5.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting Hop Bets in Craps";
let description = "Hop bets are all the possible combinations of the six Points and the combinations of the 7. They are one-roll bets and pay either 15:1 or 30:1.";
let url = "hop-bets";
let phref = "world";
let prev = "World";
let nhref = "come-bets";
let next = "Come Bets";
let tblAria = "Hop Bets payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Hop Bet Placement",
      href: "#hopBetPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hop Bet Payment",
      href: "#hopBetPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hop Bet Payment Calculator",
      href: "#hopBetPymntCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Hop Bet Terms",
      href: "#hopBetTerms",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Multi-Bet Hop Bets",
      href: "#multiBetHops",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Two Number Hop Bet Calculator",
      href: "#twoNumHopCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Three Number Hop Bet Calculator",
      href: "#threeNumHopCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Four Number Hop Bet Calculator",
      href: "#fourNumHopCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Hop Bets",
      href: "#dealerHops",
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
    ["Hopping Hardways", "30:1", "2-2, 3-3, 4-4, 5-5", "Any other number"],
    [
      "All Other Hops",
      "15:1",
      "Easy 4's, 6's, 8's, 10's, 5's, 9's, and 7's",
      "Any other number"
    ]
  ];
  let tblPnts = ["All the Hops are one-roll bets"];
  return `${$$result.head += `<!-- HEAD_svelte-1n2lt8n_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-fozsow">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Hop Bets in Craps",
  "description": "Learn about Hop bets in Craps, including how to place these bets, their payouts, betting terminology, and tips for making multi-bets and betting for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/hop-bets",
  "image": "http://parlaynation.com/images/hop-bets/hop-bets-header.webp",
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
    "@id": "http://parlaynation.com/hop-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Exploring Hop Bets",
      "description": "An exploration of Hop bets in Craps, covering bet placement, payout details, terminology, common multi-bets, and how to place bets for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hop Bet Placement",
          "description": "Guidance on how to place Hop bets on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hop Bet Payouts",
          "description": "Explanation of the payout structure for Hop bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hop Bet Terminology",
          "description": "Overview of the terminology used when placing Hop bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Common Multi-Bets for Hops",
          "description": "Examples of common multi-bets for Hop bets in Craps."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Betting Hops for the Dealers",
          "description": "How to place Hop bets for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/hop-bets/hop-bets_640x360.webp",
      "caption": "Up close image of the hop bets."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/hop-bets/placement-of-hops_640x360.webp",
      "caption": "Up close view of four hop bets and the rail of the Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/hop-bets/low-side-hop-payment_640x360.webp",
      "caption": "Low Side Hop Payment Pays 15:1"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/hop-bets/high-side-hop-payment_640x360.webp",
      "caption": "High Side Hop Payment Pays 30:1"
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/hop-bets/dealer-hop-bet_640x360.webp",
      "caption": "$1 in the middle of the hopping 4-2 for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-1n2lt8n_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting Hop Bets in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-11ec80o">Hop Bets have every combination of the dice not including the Aces, Ace Deuce, Yo, and the
				Twelve. There are 17 different possible Hop bets as shown which are the possible
				combinations of the 4, 5, 6, 7, 8, 9, and 10.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/hop-bets_640x360.webp",
                mdImg: "src/images/" + url + "/hop-bets_960x540.webp",
                lgImg: "src/images/" + url + "/hop-bets_1280x720.webp",
                title: "Hop Bets",
                alt: "Up close image of the hop bets."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hopBetPlacement",
          title: "Where Are Your Hop Bets on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you want to make a Hop bet, throw the bet to ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Stickperson",
                href: "the-crew"
              },
              {},
              {}
            )} then tell them how much you want and on which one. E.g. Throw your money to the Stickperson
				and say ${validate_component(Quote, "Quote").$$render($$result, { text: "I'd like $1 each 6's hopping" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "I want a $5 easy four hopping" }, {}, {})}. The Hop bet boxes are pretty small so the dealers try to use the corners of the boxes
				but really they do what they can and try to remember whose bets belong to whom.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-hops_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-hops_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-hops_1280x720.webp",
                title: "Placement of Hops",
                alt: "Up close view of four hop bets and the rail of the Craps table. There are four colored spots that correspond with each other."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hopBetPayment",
          title: "What Do Hop Bets Pay on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1299s9">When you bet a Hop bet there are always two possible payouts. 30:1 and 15:1. The Hops that
				are pairs pay 30:1 which are: 2-2 (Hard Four), 3-3 (Hard Six), 4-4 (Hard Eight), and 5-5
				(Hard Ten). They pay the most on the table because there is only one way to roll each of
				them. The rest of the combinations pay 15:1 because there are two ways to roll each of them.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Low Side Hop Payment Pays 15:1",
                smImg: "src/images/" + url + "/low-side-hop-payment_640x360.webp",
                mdImg: "src/images/" + url + "/low-side-hop-payment_960x540.webp",
                lgImg: "src/images/" + url + "/low-side-hop-payment_1280x720.webp",
                title: "Low Side Hop Payment Pays 15:1",
                alt: "$3 on the hop 4-2. Two green dice show 4-2. Bubble reads $45 payment."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "High Side Hop Payment Pays 30:1",
                smImg: "src/images/" + url + "/high-side-hop-payment_640x360.webp",
                mdImg: "src/images/" + url + "/high-side-hop-payment_960x540.webp",
                lgImg: "src/images/" + url + "/high-side-hop-payment_1280x720.webp",
                title: "High Side Hop Payment Pays 30:1",
                alt: "$2 on the hop 4-4. Two green dice show 4-4. Bubble reads $60 payment."
              },
              {},
              {}
            )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
              $$result,
              {
                aria: "Hop payment calculators",
                id: "hopBetPymntCalc"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcBox, "CalcBox").$$render(
                    $$result,
                    {
                      description: "Check the payment for a bet made Straight Up on any of the Hop bets.",
                      title: "Hop Bet Payment Calculator"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            id: "hop_low_side_pymnt_calc",
                            pId: "hop_low_side_calc_result",
                            calculate: calculateHopLowSide,
                            placeholder: "$1 minimum",
                            step: 1,
                            title: "Enter amount for any non-pair Hop bet:"
                          },
                          {},
                          {}
                        )} ${validate_component(CalcInput, "CalcInput").$$render(
                          $$result,
                          {
                            calculate: calculateHopHighSide,
                            id: "hop_high_side_pymnt_calc",
                            pId: "hop_high_side_calc_result",
                            placeholder: "$1 minimum",
                            step: 1,
                            title: "Enter amount for any Hopping Hardway:"
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
          id: "hopBetTerms",
          title: "What Kind of Hop Bet Terminology Is Used in Craps?"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-z2zxdj">There are several phrases you can use to tell a dealer you want to make a Hop bet.</p> <ul class="pl-4 pb-4 list-disc"><li><strong data-svelte-h="svelte-drdiuw">Hop the ___ - </strong>${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like to hop the thirty-two for a dollar."
              },
              {},
              {}
            )}</li> <li><strong data-svelte-h="svelte-1y8pq2h">Hopping ___ - </strong>${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like a hopping hard-eight for a dollar."
              },
              {},
              {}
            )}</li> <li><strong data-svelte-h="svelte-1mjr5rl">___ on the Hop- </strong>${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like the sixty-four on the Hop for a dollar."
              },
              {},
              {}
            )}</li></ul> <p class="pb-4"><strong data-svelte-h="svelte-4c7gbp">For Any and All Hop Bets - </strong>You can refer to all of the Hop bets as if they
				were a two-digit number. E.g. if you wanted to bet a hop bet on the 5, specifically the 3-2
				combination, you could tell the dealer ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like thirty-two on the hop for $1."
              },
              {},
              {}
            )} When making a bet using a two-digit number you should make the bet using the larger number
				first: 6-4 would be said as ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "Sixty-four” as opposed to “Forty-six."
              },
              {},
              {}
            )}</p> <p class="pb-4"><strong data-svelte-h="svelte-kaabzh">Hopping Hard - </strong>Since there are only 4 possible Hop bets that can come the
				hard way, you only need to tell the dealer which Hardway you would like: ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like a hopping hard 6 for $1."
              },
              {},
              {}
            )}</p> <p class="pb-4"><strong data-svelte-h="svelte-37ycga">Hopping Easy - </strong>The 4, 6, 8, and 10 can be hopped &#39;easy&#39; meaning the numbers
				will come NOT as a pair. E.g. ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like to hop the easy 10 for $1."
              },
              {},
              {}
            )}</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "multiBetHops",
          title: "What Are Some Common Multi-Bets for Hops in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1ukk3pu">Since there are 17 different Hop Bets you can bet there are a lot of ways to bet them
				together but for the most part players stick to these most common ones.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Two Number Hop Bets" }, {}, {
              default: () => {
                return `<p class="pb-4">There are 2 combinations for each the 4, 5, 9, and 10 so for $2 you can tell the dealers ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "I would like to hop the 4's (or 5's, or 9's, or 10's) for $1 each ($2 total)."
                  },
                  {},
                  {}
                )}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/2-number-hops_640x360.webp",
                    mdImg: "src/images/" + url + "/2-number-hops_960x540.webp",
                    lgImg: "src/images/" + url + "/2-number-hops_1280x720.webp",
                    title: "Two Number Hop Bets",
                    alt: "An outlined view of the hopping 4's, hopping 5's, hopping 9's, and hopping 10's."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Two number hop payment calculators",
                    id: "twoNumHopCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for a bet made on the Hopping 4's, 5's, 9's, or 10's.",
                          title: "Two Number Hop Bet Payment Calculators"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopFours,
                                id: "hop_fours_pymnt_calc",
                                mainTitle: "Hop 4's",
                                pId: "hop_fours_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["3-1", "2-2"],
                                valueTitles: ["Easy 4", "Hard 4"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopFives,
                                id: "hop_fives_pymnt_calc",
                                mainTitle: "Hop 5's",
                                pId: "hop_fives_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["4-1", "3-2"],
                                valueTitles: ["Forty-One", "Thirty-Two"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopNines,
                                id: "hop_nines_pymnt_calc",
                                mainTitle: "Hop 9's",
                                pId: "hop_nines_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["6-3", "5-4"],
                                valueTitles: ["Sixty-Three", "Fifty-Four"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopTens,
                                id: "hop_tens_pymnt_calc",
                                mainTitle: "Hop 10's",
                                pId: "hop_tens_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["6-4", "5-5"],
                                valueTitles: ["Easy 10", "Hard 10"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Three Number Hop Bets" }, {}, {
              default: () => {
                return `<p class="pb-4">There are 3 combinations for each the 6, 7, and 8 so for $3 you can tell the dealers ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "I would like\n		6's (or 7's, or 8's) on the hop for $1 each ($3 total)."
                  },
                  {},
                  {}
                )}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/3-number-hops_640x360.webp",
                    mdImg: "src/images/" + url + "/3-number-hops_960x540.webp",
                    lgImg: "src/images/" + url + "/3-number-hops_1280x720.webp",
                    title: "Three Number Hop Bets",
                    alt: "An outlined view of the hopping 7's, hopping 6's, and hopping 8's."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Three number hop payment calculators",
                    id: "threeNumHopCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for a bet made on the Hopping 6's, 7's, or 8's.",
                          title: "Three Number Hop Bet Payment Calculators"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopSixes,
                                id: "hop_sixes_pymnt_calc",
                                mainTitle: "Hop 6's",
                                pId: "hop_sixes_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["5-1", "4-2", "3-3"],
                                valueTitles: ["Fifty-One", "Forty-Two", "Hard 6"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopSevens,
                                id: "hop_sevens_pymnt_calc",
                                mainTitle: "Hop 7's",
                                pId: "hop_sevens_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["6-1", "5-2", "4-3"],
                                valueTitles: ["Sixty-One", "Fifty-Two", "Forty-Three"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
                              },
                              {},
                              {}
                            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
                              $$result,
                              {
                                calculate: calculateHopEights,
                                id: "hop_eights_pymnt_calc",
                                mainTitle: "Hop 8's",
                                pId: "hop_eights_calc_result",
                                placeholder: "$1 minimum",
                                rollCombo: ["6-2", "5-3", "4-4"],
                                valueTitles: ["Sixty-Two", "Fifty-Three", "Hard 8"],
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
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
            })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Four Number Hop Bet" }, {}, {
              default: () => {
                return `<p class="pb-4">There are four different hopping hardways so you can tell the dealer ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "I would like the hopping hardways for $1 each ($4 total)."
                  },
                  {},
                  {}
                )}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/4-number-hops_640x360.webp",
                    mdImg: "src/images/" + url + "/4-number-hops_960x540.webp",
                    lgImg: "src/images/" + url + "/4-number-hops_1280x720.webp",
                    title: "Four Number Hop Bets",
                    alt: "An outlined view of the four hopping hardways."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Four number hop calculator",
                    id: "fourNumHopCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for a bet made on the Hopping Hardways.",
                          title: "Hopping Hardways Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput, "CalcInput").$$render(
                              $$result,
                              {
                                calculate: calculateHopHardways,
                                id: "hop_hardways_pymnt_calc",
                                pId: "hop_hardways_calc_result",
                                placeholder: "$1 minimum",
                                step: 1,
                                title: "Enter amount to bet on EACH Hop:"
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
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerHops",
          title: "How Do You Bet the Hops for the Dealers in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-6a5hhj">You can always bet the Hops for the dealers by throwing the money to the Stickperson and
				telling them which number(s) you would like to Hop for the dealers.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/dealer-hop-bet_640x360.webp",
                mdImg: "src/images/" + url + "/dealer-hop-bet_960x540.webp",
                lgImg: "src/images/" + url + "/dealer-hop-bet_1280x720.webp",
                title: "Dealer Hop Bet",
                alt: "$1 in the middle of the hopping 4-2."
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
