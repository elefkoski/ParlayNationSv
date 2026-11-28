import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { a2 as calculateSixEightOverlay, a3 as calculateFiveNineOverlay, a4 as calculateFourTenOverlay, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting Overlays in Craps";
let description = "An Overlay is the opposite of a Buy bet. You bet the 7 will be rolled before a Point and pay a commission based on how much it wins.";
let url = "overlays";
let phref = "dont-come-lay-odds";
let prev = "Don't Come Lay Odds";
let nhref = "bridging-lay-odds";
let next = "Bridging Lay Odds";
let tblAria = "Overlay payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "5% Commission",
      href: "#fiveCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Overlays",
      href: "#bettingOverlays",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Overlay Placement",
      href: "#overlayPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Overlay Payment",
      href: "#overlayPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Overlay Calculators",
      href: "#overlayCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.jpg"
  };
  let tblHeaders = ["Overlay", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["6 or 8", "5:6", "7", "When point rolls"],
    ["5 or 9", "2:3", "7", "When point rolls"],
    ["4 or 10", "1:2", "7", "When point rolls"]
  ];
  let tblPnts = [
    "All bets have a 5% commission fee on winnings",
    "Overlays are not contract bets",
    "You cannot turn OFF Overlays, you can only take them back"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-15lon4_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1b5i70d">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Overlays in Craps",
  "description": "An in-depth guide on Overlay bets in Craps, a direct bet against a Point, including details on making the bet, commission costs, and payout information.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/overlays",
  "image": "http://parlaynation.com/images/overlays/overlays-header.webp",
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
    "@id": "http://parlaynation.com/overlays"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Overlays in Craps",
      "description": "Comprehensive coverage on the mechanics of Overlay bets in Craps, including the concept, betting process, and the calculation of payouts.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "5% Commission on Overlay Winnings",
          "description": "Explains the commission structure for Overlay bets, emphasizing the charge on winnings rather than the bet amount itself."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How to Bet an Overlay in Craps",
          "description": "Detailed instructions on placing Overlay bets, including terms and the inclusion of commission fees."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Overlay Placement on the Craps Table",
          "description": "Describes how and where Overlay bets are placed on the table relative to the chosen Point."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Overlay Payment Structure",
          "description": "Breaks down the True Odds payment system for Overlays, including minimum win requirements and examples for the 6, 8, 5, 9, 4, and 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/overlays/overlays_640x360.webp",
      "caption": "$60 Overlay behind the point nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/overlays/how-to-bet-an-overlay_640x360.webp",
      "caption": "Overlay bets are set up behind each of the six points."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/overlays/placement-of-an-overlay_640x360.webp",
      "caption": "Up close overhead view of the boxes behind the place bets and the Craps table rail. There are 16 colored spots that correspond with each other."
    }
  ]
}<\/script><!-- HEAD_svelte-15lon4_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "The Don't Side",
          title: "Betting Overlays in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">An Overlay is when you bet directly against a Point. Unlike the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})} or ${validate_component(Link, "Link").$$render($$result, { text: "Don't Come", href: "dont-come" }, {}, {})}, where the dice determines the Point, you
				get to pick which Point you want to bet against. The dealer will put your Overlay behind the
				Point you picked and put a lammer on it that says &#39;Lay&#39;. You get paid True Odds for an
				Overlay but must pay a commission. Once you have decided to Overlay a Point, you win when
				the 7 is rolled and lose if that Point is rolled.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/overlays_640x360.webp",
                mdImg: "src/images/" + url + "/overlays_960x540.webp",
                lgImg: "src/images/" + url + "/overlays_1280x720.webp",
                title: "Overlays",
                alt: "$60 Overlay behind the point nine."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fiveCommission",
          title: "5% Commission on the Winnings of an Overlay Bet in Craps"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-5093ll">Overlays get paid True Odds, which have no advantage for a casino, so they charge a 5%
				Commission on how much your bet wins. This is different from the &#39;buy&#39; which charges a 5%
				commission on the bet itself, not its winnings. For every $20 you would win on your Overlay
				you pay $1 for commission.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingOverlays",
          title: "How Do You Bet an Overlay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you want to make an Overlay you say it using the term ${validate_component(Quote, "Quote").$$render($$result, { text: "No ___(Point)___" }, {}, {})}
				and you add the cost of commission in with the bet. E.g. If you want to Overlay the 10 for $40
				+ $1 commission, you&#39;d say ${validate_component(Quote, "Quote").$$render($$result, { text: "Can I have a $41 No 10?" }, {}, {})}. If you wanted to
				Overlay the 5, you could say ${validate_component(Quote, "Quote").$$render($$result, { text: "$31 No 5" }, {}, {})}. You should know how much you want to
				bet including the Vig.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/how-to-bet-an-overlay_640x360.webp",
                mdImg: "src/images/" + url + "/how-to-bet-an-overlay_960x540.webp",
                lgImg: "src/images/" + url + "/how-to-bet-an-overlay_1280x720.webp",
                title: "How to Bet an Overlay",
                alt: "Overlay bets are set up behind each of the six points."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "overlayPlacement",
          title: "Where Are Your Overlays on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Like most other bets on ${validate_component(Link, "Link").$$render($$result, { text: "the Don'ts", href: "the-donts" }, {}, {})}, Overlays are put behind
				the Point they are betting against. To distinguish an Overlay from a Don&#39;t Come Bet, the
				dealers put a lammer on top of the bet that says &#39;Lay&#39;. This tells you, ${validate_component(Link, "Link").$$render($$result, { text: "the Boxperson", href: "the-crew" }, {}, {})}, and any other dealer that the bet is not a Don&#39;t Come Bet but an Overlay. Overlays are
				placed in a general area behind each Point relative to the player&#39;s place on the table.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-an-overlay_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-an-overlay_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-an-overlay_1280x720.webp",
                title: "Placement of an Overlay",
                alt: "Up close overhead view of the boxes behind the place bets and the Craps table rail. There are 16 colored spots that correspond with each other."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "overlayPayment",
          title: "What Does an Overlay Pay at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-x3ol8b">An Overlay pays True Odds but you need to pay a commission in order to make the bet. Because
				they are True Odds you need to bet them in correct increments and while making the bet
				include the commission that you&#39;ll be paying.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "You Must Pay a 5% Commission on its Winnings"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4">Overlays are essentially the opposite of ${validate_component(Link, "Link").$$render($$result, { text: "a Buy", href: "buying-place-bets" }, {}, {})} on
					a
					${validate_component(Link, "Link").$$render(
                    $$result,
                    {
                      text: "Place\n				Bet",
                      href: "place-bet-basics"
                    },
                    {},
                    {}
                  )}. Where you pay a 5% Commission on the amount of a Buy on a Place Bet, for an Overlay,
					you pay 5% Commission on what that Overlay is going to win. For every $20 you would win on
					your Overlay you pay $1 for commission.</p>`;
                }
              }
            )} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Overlays Must Win at Least $20" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-pvf9pp">The minimum commission you must pay for an Overlay is $1. $1 is 5% of $20. The minimum
					amount you need to win is going to be $20 in order to pay the minimum commission of $1.
					Regardless of the Point you are going to Overlay, the minimum the Overlay is going to win
					must be $20.</p>`;
              }
            })} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Overlay the 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4">True Odds for the Don&#39;t Side on the 6 and 8 are 5:6 or ${validate_component(Quote, "Quote").$$render($$result, { text: "5 for every 6." }, {}, {})}
					Therefore you must bet an Overlay in increments of 6. At the same time, your Overlay must win
					at least $20. The minimum you can Overlay the 6 or 8 for is $24 because $24 wins $20. When
					you include the cost of commission the bet total is $25. You would make that bet by telling
					the dealer
					${validate_component(Quote, "Quote").$$render($$result, { text: "I would like a $25 no 6 (or 8)." }, {}, {})} If you would like to keep the bet up after
					it wins you would have to drop $1 for commission.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$25 No Six",
                    smImg: "src/images/" + url + "/25-no-six_640x360.webp",
                    mdImg: "src/images/" + url + "/25-no-six_960x540.webp",
                    lgImg: "src/images/" + url + "/25-no-six_1280x720.webp",
                    title: "$25 No Six",
                    alt: "$24 behind the point six with a lay button on top. Bubble reads $25 total bet cost."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$25 No Six - Paid",
                    smImg: "src/images/" + url + "/25-no-six-paid_640x360.webp",
                    mdImg: "src/images/" + url + "/25-no-six-paid_960x540.webp",
                    lgImg: "src/images/" + url + "/25-no-six-paid_1280x720.webp",
                    title: "$25 No Six - Paid",
                    alt: "$24 behind the point six paid $20. Two purple dice show 2-5."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Overlay the 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4">True Odds for the Don&#39;t Side on the 5 and 9 are 2:3 or ${validate_component(Quote, "Quote").$$render($$result, { text: "2 for every 3." }, {}, {})} You
					must bet an Overlay in increments of 3 and it must win at least $20 so the minimum you can
					Overlay the 5 or 9 for is $30 because $30 wins $20. When you include the cost of commission
					the bet total is $31 and you would bet it by telling the dealer ${validate_component(Quote, "Quote").$$render($$result, { text: "I would like a $31 no 5 (or 9)." }, {}, {})} If you would like to keep the bet up after it wins you would have to drop $1 for commission.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$31 No Five",
                    smImg: "src/images/" + url + "/31-no-five_640x360.webp",
                    mdImg: "src/images/" + url + "/31-no-five_960x540.webp",
                    lgImg: "src/images/" + url + "/31-no-five_1280x720.webp",
                    title: "$31 No Five",
                    alt: "$31 behind the point five with a lay button on top. Bubble reads $31 total bet cost."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$31 No Five - Paid",
                    smImg: "src/images/" + url + "/31-no-five-paid_640x360.webp",
                    mdImg: "src/images/" + url + "/31-no-five-paid_960x540.webp",
                    lgImg: "src/images/" + url + "/31-no-five-paid_1280x720.webp",
                    title: "$31 No Five - Paid",
                    alt: "$31 behind the point five paid $20. Two purple dice show 2-5."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Overlay the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4">True Odds for the Don&#39;t Side on the 4 and 10 are 1:2 or ${validate_component(Quote, "Quote").$$render($$result, { text: "1 for every 2." }, {}, {})} You
					must bet an Overlay in increments of 2 or anything that&#39;s an even number. The minimum it must
					win is $20 so the Overlay must be at least $40 because $40 wins $20. When you include the cost
					of commission the bet total is $41 and you would bet it by telling the dealer ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "I would like a $41\n				no 4 (or 10)."
                  },
                  {},
                  {}
                )} If you would like to keep the bet up after it wins you would have to drop $1 for commission.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$41 No Four",
                    smImg: "src/images/" + url + "/41-no-four_640x360.webp",
                    mdImg: "src/images/" + url + "/41-no-four_960x540.webp",
                    lgImg: "src/images/" + url + "/41-no-four_1280x720.webp",
                    title: "$41 No Four",
                    alt: "$41 behind the point four with a lay button on top. Bubble reads $41 total bet cost."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$41 No Four - Paid",
                    smImg: "src/images/" + url + "/41-no-four-paid_640x360.webp",
                    mdImg: "src/images/" + url + "/41-no-four-paid_960x540.webp",
                    lgImg: "src/images/" + url + "/41-no-four-paid_1280x720.webp",
                    title: "$41 No Four - Paid",
                    alt: "$41 behind the point four paid $20. Two purple dice show 2-5."
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
          aria: "Overlay payment calculators",
          id: "overlayCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for Overlays against any Point.",
                title: "Overlay Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateSixEightOverlay,
                      id: "six_eight_overlay_pymnt_calc",
                      pId: "six_eight_overlay_calc_result",
                      placeholder: "$24 minimum",
                      step: 6,
                      title: "Enter Overlay amount for 6 or 8:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFiveNineOverlay,
                      id: "five_nine_overlay_pymnt_calc",
                      pId: "five_nine_overlay_calc_result",
                      placeholder: "$30 minimum",
                      step: 6,
                      title: "Enter Overlay amount for 5 or 9:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFourTenOverlay,
                      id: "four_ten_overlay_pymnt_calc",
                      pId: "four_ten_overlay_calc_result",
                      placeholder: "$40 minimum",
                      step: 10,
                      title: "Enter Overlay amount for 4 or 10:"
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}</main> ${validate_component(PrevNext2, "PrevNext2").$$render($$result, { phref, prev, nhref, next }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
