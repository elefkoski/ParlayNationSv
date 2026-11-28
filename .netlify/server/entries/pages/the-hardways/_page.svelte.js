import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { r as calculateHardSixEight, s as calculateHardFourTen, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting the Hardways in Craps";
let description = "A Hardway is when one of the even Points: 4, 6, 8, or 10, land as a pair. A 6 that lands as a 3-3 is a Hard 6. Any other combination of a Hardway that does not come as a pair such as 4-2 is considered Easy.";
let url = "the-hardways";
let phref = "proposition-bets";
let prev = "Proposition Bets";
let nhref = "straight-up";
let next = "Straight Up";
let tblAria = "The hardways payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting a Buffalo",
      href: "#buffaloBet",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hardway Placement",
      href: "#hardwayPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hardway Payment",
      href: "#hardwayPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hardway Payment Calculator",
      href: "#hardwayPymntCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Hardways",
      href: "#dealerHardways",
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
    ["Hard 6", "9:1", "3-3", "Any Seven, 5-1, 4-2"],
    ["Hard 8", "9:1", "4-4", "Any Seven, 6-2, 5-3"],
    ["Hard 4", "7:1", "2-2", "Any Seven, 3-1"],
    ["Hard 10", "7:1", "5-5", "Any Seven, 6-4"]
  ];
  let tblPnts = [
    "The Hardways are not one-roll bets",
    "Hardways are not contract bets",
    "Hardways are off during the Comeout Roll"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1g7hhn_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1gbkggs">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Hardways in Craps",
  "description": "Explore the dynamics of betting the Hardways in Craps, including strategy, placement, and payout details, as well as unique bets like the Buffalo.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-hardways",
  "image": "http://parlaynation.com/images/the-hardways/the-hardways-header.webp",
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
    "@id": "http://parlaynation.com/the-hardways"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "An in-depth guide on making Hardway bets in Craps, understanding Buffalo bets, the precise placement of Hardways, their payouts, and how to bet for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What is a Buffalo Bet in Craps?",
          "description": "Explains the Buffalo bet, a strategy combining Hardway bets with a hedge against rolling a 7."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Are Your Hardways on the Craps Table?",
          "description": "Details on the specific locations for Hardway bets on the Craps table and tips for tracking your bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Do the Hardways Pay in Craps?",
          "description": "Outlines the payout rates for Hardway bets, distinguishing between the 6 and 8 versus the 4 and 10."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Hardway Payment Calculators",
          "description": "Introduces calculators for determining payouts on Hardway bets for a clearer betting strategy."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "How Do You Bet the Hardways for the Dealers on a Craps Game?",
          "description": "Guidance on placing Hardway bets for the game's dealers, showcasing the practice of tipping and engaging with the table's staff."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways_640x360.webp",
      "caption": "Up close view of the Hardway Section on the Craps table. There are no cheques on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/buffalo_640x360.webp",
      "caption": "Overhead view of $1 each the hardways with a dollar on the any seven. There is an on lammer on top of one of the cheques. The puck reads off in the corner."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/placement-of-the-hardways_640x360.webp",
      "caption": "Up close view of the Hardways section and the Craps rail with 18 colored spots."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways-pay-6-8_640x360.webp",
      "caption": "$3 on the hard six with two green dice that read 3-3. A bubble reads $27 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/hardways-pay-4-10_640x360.webp",
      "caption": "$30 on the hard ten with two green dice that read 5-5. A bubble reads $210 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-hardways/dealer-hardways_640x360.webp",
      "caption": "$1 in the middle of the hard six."
    }
  ]
}<\/script><!-- HEAD_svelte-1g7hhn_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Hardways in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1v3h27n">Many players love the Hardways because they are one of the Proposition Bets that aren&#39;t a
				one-roll bet, yet they offer a pretty good return. Another good thing about the Hardways is
				their ability to win simultaneously with your Pass Line Bet. It&#39;s always fun to win the
				Point then pick up a decent payout on your Hardway.</p> <p class="pb-4">There are four even Points: the 4, 6, 8, and 10. When one of those rolls as a pair, it is
				considered to have rolled ${validate_component(Quote, "Quote").$$render($$result, { text: "hard" }, {}, {})}. When they don&#39;t land as a pair, it is
				considered ${validate_component(Quote, "Quote").$$render($$result, { text: "easy" }, {}, {})}. A Hardway is betting that the dice will land ${validate_component(Quote, "Quote").$$render($$result, { text: "hard" }, {}, {})} before they land ${validate_component(Quote, "Quote").$$render($$result, { text: "easy" }, {}, {})} or before a 7 is rolled.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/hardways_640x360.webp",
                mdImg: "src/images/" + url + "/hardways_960x540.webp",
                lgImg: "src/images/" + url + "/hardways_1280x720.webp",
                title: "The Hardways",
                alt: "Up close view of the Hardway Section on the Craps table. There are no cheques on the table."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buffaloBet",
          title: "What is a Buffalo Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Buffalo is for the players that love their Hardways. A player will bet an equal amount
				on each Hardway, working on the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}, and hedges
				them by betting the same amount on the ${validate_component(Link, "Link").$$render($$result, { text: "Any Seven", href: "any-seven" }, {}, {})}. These players
				don&#39;t want to wait for a Point to be established to bet the Hardways, and they also don&#39;t
				want to lose those bets if 7 rolls. If the 7 rolls, the Any Seven will pay four times and cover
				the four Hardways that just lost. It&#39;s a push. They are all up to win again.</p> <p class="pb-4" data-svelte-h="svelte-6c8em0">One thing to remember is if any other natural is rolled during the Comeout Roll, the player
				must bet the Any Seven again to continue hedging their Hardways. If either the 4, 6, 8, or 10
				are rolled “easy,” then that Hardway will lose, and you have to bet it again if you still
				want it.</p> <p class="pb-4">Many casinos won&#39;t acknowledge the phrase ${validate_component(Quote, "Quote").$$render($$result, { text: "Buffalo" }, {}, {})}. They understand what it
				means, but instead of booking your bet as a ${validate_component(Quote, "Quote").$$render($$result, { text: "Buffalo" }, {}, {})}, they will book it as ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "A dollar all the\n			Hardways working and a dollar any 7."
              },
              {},
              {}
            )} Either way, make sure the dealer books your bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/buffalo_640x360.webp",
                mdImg: "src/images/" + url + "/buffalo_960x540.webp",
                lgImg: "src/images/" + url + "/buffalo_1280x720.webp",
                title: "Buffalo Bet",
                alt: "Overhead view of $1 each the hardways with a dollar on the any seven. There is an on lammer on top of one of the cheques. The puck reads off in the corner."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hardwayPlacement",
          title: "Where Are Your Hardways on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-jg63qj">Hardways are very popular bets, and there will be many times where almost everyone on the
				table is betting them; when that happens, the potential for mistakes increases. A dealer may
				put your bet in the wrong spot or may press the wrong Hardway. The only way to know for sure
				if a dealer may be making a mistake with your money is to know where your bets are. Watch
				where the dealer places your bets and make sure it&#39;s consistent among all your Hardways.</p> <p class="pb-4" data-svelte-h="svelte-1ecebl">Each Hardway section on the Craps layout is divided into four quadrants, with each quadrant
				optimally holding four players. Sometimes the dealers can&#39;t fit all the cheques in those
				sections, so they improvise the position, or the dealer will place them in an area you may
				not relate to as your spot in the rail. You don&#39;t need to be married to your spot on the
				Craps layout. As long as the dealer is consistent with where they put your bets in each
				Hardway section, you can learn where they have your bet assigned on the layout.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-the-hardways_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-the-hardways_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-the-hardways_1280x720.webp",
                title: "Placement of a Hardway",
                alt: "Up close view of the Hardways section and the Craps rail with 18 colored spots."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hardwayPayment",
          title: "What Do the Hardways Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1iwa3t4">The Hard 6 and 8 pay more than the 4 and 10 because there are more ways for them to lose.
				There are 10 ways for the 6 or 8 to lose (any 7 or any &#39;easy&#39; way) and 8 ways for the 4 or
				10 to lose (any 7 or &#39;easy&#39; way).</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 9:1 on the 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1r504gb">The Hard 6 and 8 each pay 9:1 or $9 for every $1 you bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/hardways-pay-6-8_640x360.webp",
                    mdImg: "src/images/" + url + "/hardways-pay-6-8_960x540.webp",
                    lgImg: "src/images/" + url + "/hardways-pay-6-8_1280x720.webp",
                    title: "Hard 6 and 8 Pay 9:1",
                    alt: "$3 on the hard six with two green dice that read 3-3. A bubble reads $27 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 7:1 on the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-9k5hf6">The Hard 4 and 10 each pay 7:1 or $7 for every $1 you bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/hardways-pay-4-10_640x360.webp",
                    mdImg: "src/images/" + url + "/hardways-pay-4-10_960x540.webp",
                    lgImg: "src/images/" + url + "/hardways-pay-4-10_1280x720.webp",
                    title: "Hard 4 and 10 Pay 7:1",
                    alt: "$30 on the hard ten with two green dice that read 5-5. A bubble reads $210 payment."
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
          aria: "Hardway Payment Calculators",
          id: "hardwayPymntCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a Hardway bet.",
                title: "Hardway Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateHardSixEight,
                      id: "hard_six_eight_pymnt_calc",
                      pId: "hard_six_eight_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Hard 6 or 8 amount:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateHardFourTen,
                      id: "hard_four_ten_pymnt_calc",
                      pId: "hard_four_ten_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Hard 4 or 10 amount:"
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
          id: "dealerHardways",
          title: "How Do You Bet the Hardways for the Dealers on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Dealers love Hardways as much as players do. The odds aren&#39;t horrible to hit one and they
				pay off well enough when they come. Throw a dollar or two to the stickperson and tell em the ${validate_component(Quote, "Quote").$$render($$result, { text: "Dealer\n		hard six and eight!" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "Two way hard four!" }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/dealer-hardways_640x360.webp",
                mdImg: "src/images/" + url + "/dealer-hardways_960x540.webp",
                lgImg: "src/images/" + url + "/dealer-hardways_1280x720.webp",
                title: "Dealer Hardways",
                alt: "$1 in the middle of the hard six."
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
