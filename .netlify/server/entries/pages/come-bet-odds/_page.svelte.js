import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { g as calculateSixEightComeOdds, h as calculateFiveNineComeOdds, i as calculateFourTenComeOdds, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Betting Odds on a Come Bet in Craps";
let description = "Odds for a Come bet get Paid True Odds so there is a maximum amount of money you can add to them. Odds pay different depending on the Point they are on.";
let url = "come-bet-odds";
let phref = "come-bet-basics";
let prev = "Come Bet Basics";
let nhref = "coming-down-with-odds";
let next = "Coming Down w/Odds";
let tblAria = "Come Bet Odds Payment Table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Come Bet Odds",
      href: "#bettingComeBetOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Odds Placement",
      href: "#comeBetOddsPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Odds Off During Comeout Roll",
      href: "#comeBetOddsOff",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Payment for Come Bet Odds",
      href: "#comeBetOddsPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Odds Calculators",
      href: "#comeBetOddsCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Max Come Bet Odds",
      href: "#maxComeBetOdds",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealer Come Bet Odds",
      href: "#dealerComeBetOdds",
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
    ["6 or 8", "6:5", "When point rolls", "7"],
    ["5 or 9", "3:2", "When point rolls", "7"],
    ["4 or 10", "2:1", "When point rolls", "7"]
  ];
  let tblPnts = [
    "Odds are not contract bets",
    "You can add Odds to your Come Bet at any time",
    "Odds are OFF during the Comeout Roll"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1sop1pb_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1uai0h4">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Odds for a Come Bet",
  "description": "A detailed guide on how to bet odds for a Come Bet in Craps, including the similarities to Pass Line odds, the placement of odds, and potential payouts.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/come-bet-odds",
  "image": "http://parlaynation.com/images/come-bet-odds/come-bet-odds-header.webp",
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
    "@id": "http://parlaynation.com/come-bet-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Come Bet Odds",
      "description": "Outlines how Come Bet odds work, including the process of betting, placement, and how they're paid.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Odds for a Come Bet in Craps?",
          "description": "Instructions for adding odds to your Come Bet by placing money in the COME area and informing the dealer."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Do the Odds Go for Your Come Bet?",
          "description": "Details on the placement of odds on top of the Come Bet, offset for clarity."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Odds Are OFF During the Comeout Roll",
          "description": "Explanation of the Odds status during the Comeout Roll and how players can choose to keep them on."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Do Your Odds Pay on a Come Bet in Craps?",
          "description": "A breakdown of the payouts for Odds on a Come Bet, depending on the point numbers."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "3x 4x 5x Odds on a Come Bet in Craps",
          "description": "Explanation of the maximum odds allowed on a Come Bet based on the casino's rules."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-odds/come-bet-odds_640x360.webp",
      "caption": "Illustration of a Come Bet with odds placed on the Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-odds/how-to-bet-come-bet-odds_640x360.webp",
      "caption": "A close-up on how to place Come Bet odds next to an existing Come Bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-odds/placement-of-come-bet-odds_640x360.webp",
      "caption": "Demonstration of the correct placement for Come Bet odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-odds/odds-are-off-during-the-comeout-roll_640x360.webp",
      "caption": "Visual explanation showing that Odds are off during the Comeout Roll."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-odds/6-8-come-bet-odds_640x360.webp",
      "caption": "Example of Come Bet odds on the 6 & 8 points."
    }
  ]
}<\/script><!-- HEAD_svelte-1sop1pb_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Come Bets",
          title: "Betting Odds for a Come Bet",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Odds for a Come bet work the same way as the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Odds for a Pass Line",
                href: "pass-line-odds"
              },
              {},
              {}
            )} bet. Just like the Come bet, Odds are also betting the Point will be rolled before a 7. If
				the Point is rolled, the Come bet and its Odds win. If 7 rolls, your Come bet and its Odds lose.
				Odds can be less than table minimum.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/come-bet-odds_640x360.webp",
                mdImg: "/images/" + url + "/come-bet-odds_960x540.webp",
                lgImg: "/images/" + url + "/come-bet-odds_1280x720.webp",
                title: "Come Bet Odds",
                alt: "$10 with $10 odds on the point eight."
              },
              {},
              {}
            )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingComeBetOdds",
          title: "How Do You Bet Odds for a Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you want to add Odds to your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bet",
                href: "come-bet-basics"
              },
              {},
              {}
            )} put your
				money in the COME and tell the dealer those are Odds for your Come bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-come-bet-odds_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-come-bet-odds_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-come-bet-odds_1280x720.webp",
                title: "How to Bet Come Bet odds",
                alt: "$10 in the Come and $10 on the point six."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetOddsPlacement",
          title: "Where Do the Odds Go for Your Come Bet?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1nobgwe">The Odds for a Come bet are placed on top of the Come bet but are offset. They are offset so
				you could distinguish the Come bet from the Odds.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-come-bet-odds_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-come-bet-odds_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-come-bet-odds_1280x720.webp",
                title: "Placement of Come Bet Odds",
                alt: "Up close view of $15 offset and sitting on top of another $10 sitting inside the point eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetOddsOff",
          title: "Odds Are OFF During the Comeout Roll"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">During the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})} the Odds on all Come Bets do not work,
				although the Come bet itself is always working. If a seven is rolled during the Comeout Roll
				you will lose all your Come Bets and all the Odds on those Come Bets will be returned to you.
				If the next Point that is rolled is one that you have a Come bet on then the Come Bet itself
				will get paid even money and its Odds will just be given back.</p> <p class="pb-4" data-svelte-h="svelte-atib4g">You can turn your Odds ON during the Comeout Roll and if the seven rolled you would lose
				both the Come Bet and its Odds. If that Point rolled during the Comeout Roll then you would
				get paid for both the Come Bet and its Odds.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/odds-are-off-during-the-comeout-roll_640x360.webp",
                mdImg: "/images/" + url + "/odds-are-off-during-the-comeout-roll_960x540.webp",
                lgImg: "/images/" + url + "/odds-are-off-during-the-comeout-roll_1280x720.webp",
                title: "Odds Are Off During the Comeout Roll",
                alt: "Puck is off and in the don't come. There are two come bets with highlighted odds on the points four and five."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetOddsPayment",
          title: "What Do Your Odds Pay on a Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Odds on a Come bet work the same way as ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})} on the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}. You bet them in the same increments and they pay the same amounts. When Come bet Odds
				win the dealer will add the payout for the Come bet + the payout for its Odds to get one
				total. The total is what you are given because they both won at the same time.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 6:5 on the 6 and 8" }, {}, {
              default: () => {
                return `<p class="pb-4">Odds on the 6 or 8 must be bet in increments of $5. Every $5 you bet as Odds for a Come
					Bet on the 6 or 8 gets paid $6. Otherwise known as 6:5 which is read ${validate_component(Quote, "Quote").$$render($$result, { text: "6 to 5" }, {}, {})} or you can think of it as you win ${validate_component(Quote, "Quote").$$render($$result, { text: "$6 for every $5" }, {}, {})}. When the Point is
					rolled, the dealer will add together the payment of the Come Bet and its Odds and pay you
					the total.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Odds - 6 & 8",
                    smImg: "/images/" + url + "/6-8-come-bet-odds_640x360.webp",
                    mdImg: "/images/" + url + "/6-8-come-bet-odds_960x540.webp",
                    lgImg: "/images/" + url + "/6-8-come-bet-odds_1280x720.webp",
                    title: "Come Bet Odds - 6 & 8",
                    alt: "Four different come bets with odds on the point eight."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Payments - 6 & 8",
                    smImg: "/images/" + url + "/6-8-come-bet-payment_640x360.webp",
                    mdImg: "/images/" + url + "/6-8-come-bet-payment_960x540.webp",
                    lgImg: "/images/" + url + "/6-8-come-bet-payment_1280x720.webp",
                    title: "Come Bet Payment - 6 & 8",
                    alt: "Split image. Left has $10 come with $10 odds on point six. Right has $10 w/$10 odds in the come and a $22 payment. Two orange dice show 1-5."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 3:2 on the 5 and 9" }, {}, {
              default: () => {
                return `<p class="pb-4">You must add an even number as Odds on the 5 and 9. Every $2 you bet as Odds gets paid $3.
					This is known as 3:2 which is read ${validate_component(Quote, "Quote").$$render($$result, { text: "3 to 2" }, {}, {})} or you win ${validate_component(Quote, "Quote").$$render($$result, { text: "$3 for every $2" }, {}, {})}. You could also think of this as 1 and ½ times your bet or a Blackjack. When the Point
					is rolled, the dealer will add together the payment of the Come Bet and its Odds and pay
					you the total.</p> <p class="pb-4" data-svelte-h="svelte-140wbwb">When you bet an odd number such as $5 Odds, the bet will get paid 1 and ½ times the bet or
					$7.50. There are no $0.50 or $2.50 cheques on a Craps table so your bet will be rounded
					down and you will be paid $7. The casino makes $0.50 off your improper bet. This is giving
					money to the casino and not recommended.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Odds - 5 & 9",
                    smImg: "/images/" + url + "/5-9-come-bet-odds_640x360.webp",
                    mdImg: "/images/" + url + "/5-9-come-bet-odds_960x540.webp",
                    lgImg: "/images/" + url + "/5-9-come-bet-odds_1280x720.webp",
                    title: "Come Bet Odds - 5 & 9",
                    alt: "Four different come bets with odds on the point nine."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Payment - 5 & 9",
                    smImg: "/images/" + url + "/5-9-come-bet-payment_640x360.webp",
                    mdImg: "/images/" + url + "/5-9-come-bet-payment_960x540.webp",
                    lgImg: "/images/" + url + "/5-9-come-bet-payment_1280x720.webp",
                    title: "Come Bet Payment - 5 & 9",
                    alt: "Split image. Left has $10 come w/$16 odds. Right has $10 w/$16 odds in the come and a $34 payment. Two orange dice show 3-2."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Pays 2:1 on the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4">Odds on the 4 and 10 can be any amount. Regardless of what you bet, the amount will win
					double or 2:1 which is read ${validate_component(Quote, "Quote").$$render($$result, { text: "2 to 1" }, {}, {})} or you can think of it as ${validate_component(Quote, "Quote").$$render($$result, { text: "$2 for every $1" }, {}, {})}. When the Point is rolled, the dealer will add together the payment of the Come Bet and
					its Odds and pay you the total.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Odds - 4 & 10",
                    smImg: "/images/" + url + "/4-10-come-bet-odds_640x360.webp",
                    mdImg: "/images/" + url + "/4-10-come-bet-odds_960x540.webp",
                    lgImg: "/images/" + url + "/4-10-come-bet-odds_1280x720.webp",
                    title: "Come Bet Odds - 4 & 10",
                    alt: "Four different come bets with odds on the point 10."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Come Bet Payment - 4 & 10",
                    smImg: "/images/" + url + "/4-10-come-bet-payment_640x360.webp",
                    mdImg: "/images/" + url + "/4-10-come-bet-payment_960x540.webp",
                    lgImg: "/images/" + url + "/4-10-come-bet-payment_1280x720.webp",
                    title: "Come Bet Payment - 4 & 10",
                    alt: "Split image. Left $10 with $15 odds. Right has $10 w/$15 odds in the come and a $40 payment. Two orange dice show 2-2."
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
          aria: "Come bet odds payment calculator",
          id: "comeBetOddsCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for Odds on a Come bet.",
                title: "Come Bet Odds Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateSixEightComeOdds,
                      id: "six_eight_come_odds_pymnt_calc",
                      pId: "six_eight_come_odds_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Enter Odds amount for Point 6 or 8:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFiveNineComeOdds,
                      id: "five_nine_come_odds_pymnt_calc",
                      pId: "five_nine_come_odds_calc_result",
                      placeholder: "$2 minimum",
                      step: 2,
                      title: "Enter Odds amount for Point 5 or 9:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateFourTenComeOdds,
                      id: "four_ten_come_odds_pymnt_calc",
                      pId: "four_ten_come_odds_calc_result",
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
          id: "maxComeBetOdds",
          title: "What Are 3x 4x 5x Odds on a Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-gux99">Odds on a Come bet have no house advantage so there is a limit on the amount you can add. 3x
				4x 5x Odds means the maximum Odds you can add to a Come bet is 3x the Come bet on the 4 or
				10, 4x the Come bet on the 5 or 9, and 5x the Come bet on the 6 and 8.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "3x on the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1mj5u5c">Max Odds on the 4 and 10 is 3 times the Come bet. A $25 Come bet on the 4 and 10 would be
					able to add up to $75. The payment would still be 7 times the Come bet ($25) or $175. The
					$75 odds would be paid 2:1 or $150 and the $25 Come bet would win even money for a total
					payment of $175.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/max-come-bet-odds-4-10_640x360.webp",
                    mdImg: "/images/" + url + "/max-come-bet-odds-4-10_960x540.webp",
                    lgImg: "/images/" + url + "/max-come-bet-odds-4-10_1280x720.webp",
                    title: "Max Come Bet Odds 4 & 10",
                    alt: "$25 Come bet with $75 odds on the point four."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "4x on the 5 & 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-14y45dg">You can bet up to 4 times your Come bet when the Point is 5 or 9. A $15 Come bet would be
					able to add up to $60 as Odds and the payment would be 7x the Come bet ($15) or $105. The
					$60 Odds would pay $90 and the come bet would win even money, $15, for a payment of $105.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/max-come-bet-odds-5-9_640x360.webp",
                    mdImg: "/images/" + url + "/max-come-bet-odds-5-9_960x540.webp",
                    lgImg: "/images/" + url + "/max-come-bet-odds-5-9_1280x720.webp",
                    title: "Max Come Bet Odds 5 & 9",
                    alt: "$15 come bet with $60 odds on point nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "5x on the 6 & 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1i6htxs">When the Point is 6 or 8 you&#39;re able to bet up to 5 times your Come bet. If you had a $10
					Come bet you would be able to bet $50. The payment would be 7 times the Come bet ($10) or
					$70. The $50 Odds would pay $60 and the Come bet would win even money, $10, for a total of
					$70.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/max-come-bet-odds-6-and-8_640x360.webp",
                    mdImg: "/images/" + url + "/max-come-bet-odds-6-and-8_960x540.webp",
                    lgImg: "/images/" + url + "/max-come-bet-odds-6-and-8_1280x720.webp",
                    title: "Max Come Bet Odds 6 & 8",
                    alt: "$10 come bet with $50 odds on the point 8."
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
          id: "dealerComeBetOdds",
          title: "How Can You Bet a Come Bet with Odds for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ritge1">If you make a Come bet for the dealers you can also add Odds to it. Just like a player&#39;s Come
				bet, there is a maximum amount of Odds you can add to a dealer&#39;s Come bet that is determined
				by the casino.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dealer-come-bet-with-odds_640x360.webp",
                mdImg: "/images/" + url + "/dealer-come-bet-with-odds_960x540.webp",
                lgImg: "/images/" + url + "/dealer-come-bet-with-odds_1280x720.webp",
                title: "Dealer Come Bet with Odds",
                alt: "$1 with $3 in the middle of the point 10."
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
