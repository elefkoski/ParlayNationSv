import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { Z as calculateDontCome, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting Don't Come Bets in Craps";
let description = "The Don't Come Bet is like a mini Don't Pass Bet. They both win and lose the same way and there are two stages to a Don't Come Bet.";
let url = "dont-come";
let phref = "dont-pass-lay-odds";
let prev = "Don't Pass Lay Odds";
let nhref = "dont-come-lay-odds";
let next = "Don't Come Lay Odds";
let tblAria = "Don't come intermediate roll payment table";
let tblAria2 = "Don't Come Comeout Roll payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Don't Come",
      href: "#bettingDontCome",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Stages",
      href: "#dontComeStages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "No Action",
      href: "#noAction",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Placement",
      href: "#dontComePlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Payment",
      href: "#dontComePayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Come Payment Calculator",
      href: "#dontComeCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Always Working",
      href: "#alwaysWorking",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealer Don't Come",
      href: "#dealerDontCome",
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
  let tblHeaders = ["Intermediate Roll", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["In the Don't Come", "Even money", "2 or 3", "7 or 11"],
    ["Behind a point", "Even money", "7", "When point rolls"]
  ];
  let tblPnts = ["You can only make a Don't Come Bet during the Intermediate Roll"];
  let tblHeaders2 = ["Comeout Roll", "Pays", "Wins", "Loses"];
  let tblRows2 = [["Behind a point", "Even money", "7", "When point rolls"]];
  let tblPnts2 = ["Don't Come Bets are not contract bets"];
  return `${$$result.head += `<!-- HEAD_svelte-16xtuit_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-6au1li">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting a Don't Come Bet in Craps",
  "description": "An exhaustive guide on Don't Come Bets in Craps, detailing how they parallel Don't Pass Bets, bet placement, the significance of the bet's stages, and how to bet for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/dont-come",
  "image": "http://parlaynation.com/images/dont-come/dont-come-header.webp",
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
    "@id": "http://parlaynation.com/dont-come"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Don't Come Bets",
      "description": "Deep dive into the mechanics of Don't Come Bets in Craps, including how to place the bet, its stages, and dealer betting.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Placing a Don't Come Bet",
          "description": "Instructions on making Don't Come Bets in Craps."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Stages of a Don't Come Bet",
          "description": "Explanation of the two main stages of Don't Come Bets and their implications."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "'No Action' in Don't Come Bets",
          "description": "Clarification on the 'No Action' call for Don't Come Bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Don't Come Bet Placement",
          "description": "Details on where Don't Come Bets are placed on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Don't Come Bet Payouts",
          "description": "Information on the payouts for Don't Come Bets."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Don't Come Bets for Dealers",
          "description": "How to place Don't Come Bets for the game's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come/dont-come_640x360.webp",
      "caption": "Overview of the Don't Come betting area."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come/how-to-bet-a-dont-come_640x360.webp",
      "caption": "Guidance on placing a Don't Come Bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come/stage-one-of-a-dont-come_640x360.webp",
      "caption": "Stage one of a Don't Come Bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come/stage-two-of-a-dont-come_640x360.webp",
      "caption": "Stage two of a Don't Come Bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/dont-come/betting-a-dont-come-for-the-dealers_640x360.webp",
      "caption": "How to bet a Don't Come for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-16xtuit_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The Don't Side",
          title: "Betting a Don't Come Bet in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">You can think of the Don&#39;t Come as mini ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})} bets because
				they work the same way. They win and lose on the same numbers, and just like the Don&#39;t Pass,
				after a Point is rolled, it is betting against that Point. The Don&#39;t Come moves behind the Point
				and you can then ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Lay Odds",
                href: "dont-pass-lay-odds"
              },
              {},
              {}
            )}. You can only make a
				Don&#39;t Come Bet during the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Intermediate Roll",
                href: "the-stages"
              },
              {},
              {}
            )}, never during
				the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}.</p> <span class="text-center pb-1" data-svelte-h="svelte-aslbq5">Don&#39;t Come - Intermediate Roll</span> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} <span class="text-center pb-1" data-svelte-h="svelte-1uep1o2">Don&#39;t Come - Comeout Roll</span> ${validate_component(ContentTable, "ContentTable").$$render(
              $$result,
              {
                tblAria: tblAria2,
                tblHeaders: tblHeaders2,
                tblRows: tblRows2,
                tblPnts: tblPnts2
              },
              {},
              {}
            )} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-come_640x360.webp",
                mdImg: "/images/" + url + "/dont-come_960x540.webp",
                lgImg: "/images/" + url + "/dont-come_1280x720.webp",
                title: "Don't Come",
                alt: "Up close overhead view of the Don't Come betting area."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingDontCome",
          title: "How Do You Bet a Don't Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-19fl1d8">Don&#39;t Come Bets are self-service so if the bet wins while in the DC, it is your
				responsibility to pick up your winnings. You do not need to tell the Dealer you are making
				the bet but would be a courtesy to let them know that it belongs to you.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-a-dont-come_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-a-dont-come_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-a-dont-come_1280x720.webp",
                title: "How to Bet a Don't Come",
                alt: "Multiple bets sitting in the Don't Come area."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dontComeStages",
          title: "What Are the Two Stages of a Don't Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Stage One - In the Don't Come (DC)"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-di15pv">The first stage of a Don&#39;t Come Bet is the initial bet. This is when you place your bet in
					the DC and wait for a Point to be rolled. While in the DC the bet wins when the 2 or 3 are
					rolled and loses when the 7 or 11 are rolled. If the 12 rolls the Don&#39;t Come is a push, it
					doesn’t win or lose. Any other number that rolls must be a Point and the Don&#39;t Come Bet
					moves behind that Point.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "/images/" + url + "/stage-one-of-a-dont-come_640x360.webp",
                      mdImg: "/images/" + url + "/stage-one-of-a-dont-come_960x540.webp",
                      lgImg: "/images/" + url + "/stage-one-of-a-dont-come_1280x720.webp",
                      title: "Stages of a Don't Come Bet - In the Don't Come",
                      alt: "$10 sitting in the Don't Come. The puck is on a point you cannot see."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Stage Two - Behind a Point" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-bbu397">The second stage is behind a Point. The Don&#39;t Come is then betting the 7 will be rolled
					before the Point it is behind. If the Point rolls, your Don&#39;t Come Bet loses.</p> <p class="pb-4" data-svelte-h="svelte-b6ft4a">Once behind a Point, the Don&#39;t Come Bet has the advantage because it wins on a 7 which is
					the most commonly rolled number. Regardless of which Point you move behind, you shouldn&#39;t
					take it back.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/stage-two-of-a-dont-come_640x360.webp",
                    mdImg: "/images/" + url + "/stage-two-of-a-dont-come_960x540.webp",
                    lgImg: "/images/" + url + "/stage-two-of-a-dont-come_1280x720.webp",
                    title: "Stages of a Don't Come Bet - Behind a Point",
                    alt: "$10 sitting behind the point five. The puck is on a point you cannot see."
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
          id: "noAction",
          title: "What Does 'No Action' Mean at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Some players don&#39;t like their Don&#39;t Come Bets to move behind certain Points, like the 6 or
				the 8, because they are the most commonly rolled Points and players think they&#39;re likely to
				lose their bet. If a player doesn&#39;t want a Don&#39;t Come Bet to move behind a Point they can
				say ${validate_component(Quote, "Quote").$$render($$result, { text: "No\n			Action" }, {}, {})}. This means if a Point rolls but they don&#39;t want their bet to move behind that Point,
				they could instead leave it in the DC. They are allowed to do this because none of the Don&#39;t
				bets are contract bets. If that bet moved behind a Point they could take it down and put it
				back in the DC. Saying ${validate_component(Quote, "Quote").$$render($$result, { text: "No Action" }, {}, {})} is used to save the time of the dealer moving
				the Don&#39;t Come Bet behind the Point and then moving it back to the DC when a player doesn&#39;t want
				it there.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dontComePlacement",
          title: "Where Is Your Don't Come Bet on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-bha34u">The boxes behind Points aren&#39;t big enough to hold bets for eight players. Most of the time
				you wouldn&#39;t have more than three or four Don&#39;t players at any given time so it&#39;s usually
				not a problem but there is still a general rule for where players&#39; bets are supposed to be
				placed.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-a-dont-come-behind-a-point_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-dont-come-behind-a-point_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-dont-come-behind-a-point_1280x720.webp",
                title: "Placement of a Don't Come Behind a Point",
                alt: "Up close view of the boxes behind the points and of the Craps table rail. There are 16 bubbles corresponding with each other on betting area and the Craps table rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dontComePayment",
          title: "What Does the Don't Come Bet Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-h3k098">Regardless of whether or not a Don&#39;t Come Bet is in the DC or behind a Point, it&#39;s going to
				win even money.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "In the Don't Come",
                smImg: "/images/" + url + "/dont-come-bets-get-even-money-a_640x360.webp",
                mdImg: "/images/" + url + "/dont-come-bets-get-even-money-a_960x540.webp",
                lgImg: "/images/" + url + "/dont-come-bets-get-even-money-a_1280x720.webp",
                title: "Don't Come Bets Win Even Money - In the Don't Come",
                alt: "$10 paid $10 in the Don't Come. Two purple dice 1-1 and another set show 1-2."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Behind a Point",
                smImg: "/images/" + url + "/dont-come-bets-get-even-money-b_640x360.webp",
                mdImg: "/images/" + url + "/dont-come-bets-get-even-money-b_960x540.webp",
                lgImg: "/images/" + url + "/dont-come-bets-get-even-money-b_1280x720.webp",
                title: "Don't Come Bets Win Even Money - Behind a Point",
                alt: "$10 paid $10 behind the point ten. Two purple dice show 2-5."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Don't come payment calculator",
          id: "dontComeCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a Don't Come Bet.",
                title: "Don't Come Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateDontCome,
                      id: "dont_come_pymnt_calc",
                      pId: "dont_come_calc_result",
                      placeholder: "$5 minimum",
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
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "alwaysWorking",
          title: "Don't Come Bets Are Always Working"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1mtzfog">Once behind a Point, the Don&#39;t Come is always betting against that Point. You cannot turn it
				“Off”. Even if a new Comeout Roll begins the Don&#39;t Come still wants a 7 to roll before the
				Point that it is behind. If you don&#39;t want your Don&#39;t Come Bet behind a certain Point because
				you think it may roll, your only option is to take it back.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dont-come-bets-are-always-working_640x360.webp",
                mdImg: "/images/" + url + "/dont-come-bets-are-always-working_960x540.webp",
                lgImg: "/images/" + url + "/dont-come-bets-are-always-working_1280x720.webp",
                title: "Don't Come Bets Are Always Working",
                alt: "$25 sitting behind the point four. The puck is off and in the Don't Come."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerDontCome",
          title: "How Can You Bet a Don't Come Bet for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-l8f0k1">You can make a Don&#39;t Come Bet for the dealers just like any of the other bets. You only
				need to place it in the DC and let the dealer know you are making a Don&#39;t Come Bet for them.
				If a dealer sees random dollars sitting in the DC, they&#39;re usually not going to assume it&#39;s
				a bet for them.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/betting-a-dont-come-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/betting-a-dont-come-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/betting-a-dont-come-for-the-dealers_1280x720.webp",
                title: "Betting a Don't Come for the Dealers",
                alt: "$1 sitting in the middle of the Don't Come"
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
