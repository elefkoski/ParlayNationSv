import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { f as calculateComeBet, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting a Come Bet in Craps";
let description = "Come Bets are mini Pass Line Bets except you play them during the Intermediate Roll. After moving into a Point you can add Odds to the Come bet.";
let url = "come-bet-basics";
let phref = "come-bets";
let prev = "Come Bets";
let nhref = "come-bet-odds";
let next = "Come Bet Odds";
let tblAria = "Come bets Intermediate Roll pay table";
let tblAria2 = "Come bets Comeout Roll pay table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Come Bets",
      href: "#bettingComeBets",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bets Are Always Working",
      href: "#alwaysWork",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Stages",
      href: "#comeBetStages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Placement",
      href: "#comeBetPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Payment",
      href: "#comeBetPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Come Bet Calculator",
      href: "#comeBetCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Come Bet Terms",
      href: "#comeBetTerms",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealer Come Bets",
      href: "#dealerComeBets",
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
    ["While in COME", "Even money", "7 or 11", "2, 3, 12"],
    ["While in point", "Even money", "When point rolls", "7"]
  ];
  let tblPnts = ["You can only make a Come Bet during the Intermediate Roll"];
  let tblHeaders2 = ["Comeout Roll", "Pays", "Wins", "Loses"];
  let tblRows2 = [["While in point", "Even money", "When point rolls", "7"]];
  let tblPnts2 = [
    "Come bets are contract bets after they move into a point",
    "Come bets are always working"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-co7ods_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1vn8xl9">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting a Come Bet in Craps",
  "description": "An in-depth look at how to place and win with Come Bets in Craps, including the stages of a Come Bet and how it compares to Place Bets and Odds.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/come-bet-basics",
  "image": "http://parlaynation.com/images/come-bet-basics/come-bet-basics-header.webp",
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
    "@id": "http://parlaynation.com/come-bet-basics"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Come Bets in Craps",
      "description": "Explains the concept of Come Bets in Craps, how they function similarly to Pass Line bets, and the strategy behind placing them.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet a Come Bet in Craps?",
          "description": "Guidelines for placing Come Bets in the COME area and ensuring they are distinguished from other bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Come Bets Work During the Comeout Roll",
          "description": "Details how Come Bets remain active during the Comeout Roll, highlighting their constant working state."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Two Stages of a Come Bet in Craps",
          "description": "Explains the two stages of a Come Bet: initially in the COME area, and then moving to a specific point on the table."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Placement of a Come Bet on the Craps Table",
          "description": "Describes the placement of Come Bets relative to Place Bets and Buy Bets."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Come Bet Payment",
          "description": "Clarifies the even-money payout of Come Bets regardless of game stage."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Come Bet Terms",
          "description": "Introduction to specific terms and phrases associated with Come Bets, including 'On For', 'Off For', and 'Off and On For'."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Betting a Come Bet for the Dealers",
          "description": "How to place Come Bets for the benefit of the table's dealers, including placement and payout details."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-basics/come-bet_640x360.webp",
      "caption": "Visual guide to Come Bets in Craps."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-basics/how-to-bet-a-come-bet_640x360.webp",
      "caption": "Instructions for placing a Come Bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-basics/come-bets-always-work_640x360.webp",
      "caption": "Come Bets are always in play."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-basics/placement-of-a-come-bet-inside-point_640x360.webp",
      "caption": "Detailed placement of Come Bets within the points."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/come-bet-basics/dealer-come-bet_640x360.webp",
      "caption": "How to bet a Come Bet for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-co7ods_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Come Bets",
          title: "Betting a Come Bet in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">You can think of Come Bets as mini Pass Line bets or even traveling Pass Line bets. Win
				7-11, lose 2-3-12; otherwise, a Point is rolled, it goes into that Point, and just like the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}, you&#39;re able to add ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})} to it. If the Point rolls again,
				it wins; if the 7 rolls, it loses.</p> <p class="pb-4">Most players shy away from Come Bets. A number has to be rolled twice to be paid, and they
				can get expensive because you should be adding Odds. ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )} are a good alternative for players who don&#39;t want to spend much money. You can pick a number
				and call it a day.</p> <p class="pb-4" data-svelte-h="svelte-1wcj1ln">Come Bets are good bets from a math point of view because you get maximum value with the
				Odds, so players who are most concerned with getting the most bang for their dollar will
				play Come Bets.</p> <span class="text-center pb-1" data-svelte-h="svelte-hw8whl">Come Bets - Intermediate Roll</span> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} <span class="text-center pb-1" data-svelte-h="svelte-17hh8n4">Come Bets - Comeout Roll</span> ${validate_component(ContentTable, "ContentTable").$$render(
              $$result,
              {
                tblAria: tblAria2,
                tblHeaders: tblHeaders2,
                tblRows: tblRows2,
                tblPnts: tblPnts2
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/come-bet_640x360.webp",
                mdImg: "/images/" + url + "/come-bet_960x540.webp",
                lgImg: "/images/" + url + "/come-bet_1280x720.webp",
                title: "Come Bet",
                alt: "Overhead view of the come bet area."
              },
              {},
              {}
            )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingComeBets",
          title: "How Do You Bet a Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1n69viw">Come bets are self-service so if you want to make a Come bet then you must place it in the
				COME yourself. Watch your bet. If other players are making Come bets then you need to be
				able to know which is yours and make sure the dealer is placing that bet in your spot.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-a-come-bet_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-a-come-bet_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-a-come-bet_1280x720.webp",
                title: "How to Bet a Come Bet",
                alt: "Up close view of multiple bets in the COME area."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "alwaysWork",
          title: "Come Bets Work During the Comeout Roll"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ovsouz">Come bets are always working. After a Come bet is inside a Point it is always betting that
				the Point it&#39;s inside will roll before the 7. You can&#39;t turn it off or take it back so no
				matter what stage in the game you&#39;re at you can count on your Come Bet winning or losing at
				any given moment.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/come-bets-always-work_640x360.webp",
                mdImg: "/images/" + url + "/come-bets-always-work_960x540.webp",
                lgImg: "/images/" + url + "/come-bets-always-work_1280x720.webp",
                title: "Come Bets Always Work",
                alt: "A come bet on the point eight and the puck is off."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetStages",
          title: "What Are the Two Stages of a Come Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-13br3lw">There are two stages to a Come bet. The first is the original bet, which you place in the
				COME. While in the COME the Come bet wins when 7 or 11 is rolled and loses when 2, 3, or 12
				are rolled.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Stage One - In the COME",
                smImg: "/images/" + url + "/stage-one-of-a-come-bet_640x360.webp",
                mdImg: "/images/" + url + "/stage-one-of-a-come-bet_960x540.webp",
                lgImg: "/images/" + url + "/stage-one-of-a-come-bet_1280x720.webp",
                title: "Stage One - In the COME",
                alt: "$10 in the come with the puck on nine."
              },
              {},
              {}
            )} <div class="pb-4"></div> <div class="pb-4"></div> <p class="pb-4">The second stage is the Point it moves to, which is determined by the roll of the dice.
				While inside a Point, the Come bet wins when that Point is rolled again and loses if the 7
				is rolled.
				${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "come-bet-odds" }, {}, {})} on your Come bets are not contract so you can take
				them back at any time.</p> <p class="pb-4" data-svelte-h="svelte-9sc7ow">Once a Come bet moves inside a Point it becomes a contract bet meaning that once it&#39;s in
				there you can&#39;t take it back.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Stage Two - Inside a Point",
                smImg: "/images/" + url + "/stage-two-of-a-come-bet_640x360.webp",
                mdImg: "/images/" + url + "/stage-two-of-a-come-bet_960x540.webp",
                lgImg: "/images/" + url + "/stage-two-of-a-come-bet_1280x720.webp",
                title: "Stage Two - Inside a Point",
                alt: "$10 come bet on the point eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetPlacement",
          title: "Where Is Your Come Bet on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Come bets are placed in the same spot as your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )}
				except inside the box so you can tell the difference between the two. A ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Buy Bet",
                href: "buying-place-bets"
              },
              {},
              {}
            )} on a Point is actually put in the same spot as a Come bet and the only way to distinguish
				between the two is the fact that a Buy bet has a BUY lammer on top of it to let everyone know
				it&#39;s a Buy bet. Without the lammer on top, a Buy bet would look exactly like a Come bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-a-come-bet-inside-point_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-come-bet-inside-point_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-come-bet-inside-point_1280x720.webp",
                title: "Placement of a Come Bet Inside a Point",
                alt: "Up close view of two place bets and the Craps rail. There are eight colored spots that correspond with each other."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeBetPayment",
          title: "What Does the Come Bet Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-g9w21r">A Come bet can win during the Comeout Roll or the Intermediate Roll. No matter what stage of
				the game you&#39;re in, a Come bet will always win even money.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Even Money in the COME",
                smImg: "/images/" + url + "/come-bets-even-money-a_640x360.webp",
                mdImg: "/images/" + url + "/come-bets-even-money-a_960x540.webp",
                lgImg: "/images/" + url + "/come-bets-even-money-a_1280x720.webp",
                title: "Come Bets Win Even Money in the COME",
                alt: "$10 paid $10 in the come bet area. There are two sets of orange dice. One reads 2-5 and the other 6-5."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Even Money When Point Rolls",
                smImg: "/images/" + url + "/come-bets-even-money-b_640x360.webp",
                mdImg: "/images/" + url + "/come-bets-even-money-b_960x540.webp",
                lgImg: "/images/" + url + "/come-bets-even-money-b_1280x720.webp",
                title: "Come Bets Win Even Money When Point Rolls",
                alt: "$25 paid $25 in the come area with an arrow coming out of the point nine. Two orange dice read 5-4."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Come bet payment calculator",
          id: "comeBetCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a Come Bet.",
                title: "Come Bet Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateComeBet,
                      id: "come_bet_pymnt_calc",
                      pId: "come_bet_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Enter Come bet amount:"
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
          id: "comeBetTerms",
          title: "What Are Some Come Bet Terms Used at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-10z7pnb">There are certain terms used when setting up, taking down, and paying your Come bets. Know
				what the dealers are doing and saying while servicing your Come bets.</p> <p class="pb-4">When a Point is rolled a Come bet will move into that Point. When that happens the dealer
				will let you know that your Come bet has moved into that Point by saying ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "you're on the __point__ for\n		__amount__."
              },
              {},
              {}
            )} They are letting you know they moved your Come bet into the Point and now would be the time
				to add ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "come-bet-odds" }, {}, {})}. E.g. if you had a $10 Come bet and the 6
				rolled the dealer would say
				${validate_component(Quote, "Quote").$$render($$result, { text: "you're on the six for $10." }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Come Bets - On For...",
                smImg: "/images/" + url + "/on-for_640x360.webp",
                mdImg: "/images/" + url + "/on-for_960x540.webp",
                lgImg: "/images/" + url + "/on-for_1280x720.webp",
                title: "Come Bets - On For",
                alt: "$10 moving from the come area into the point six. Two orange dice show 1-5."
              },
              {},
              {}
            )} <div class="pb-4"></div> <p class="pb-4">When a Come Bet is inside of a Point and it wins the dealer will figure the total payout,
				move the winning Come bet off of the Point, back into the COME, pay it, and say ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "you're off the\n		__point__for __total payout__."
              },
              {},
              {}
            )} This lets you know that your Come bet won and it&#39;s no longer on that Point. Your winnings
				will sit in the COME and then it&#39;s your responsibility to pick them up. E.g. if you had a $15
				Come bet on the 8 and the 8 rolled the dealer would take your Come bet and its payment, move
				it into the COME and say ${validate_component(Quote, "Quote").$$render($$result, { text: "you're off the eight for $15." }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Come Bets - Off For...",
                smImg: "/images/" + url + "/off-for_640x360.webp",
                mdImg: "/images/" + url + "/off-for_960x540.webp",
                lgImg: "/images/" + url + "/off-for_1280x720.webp",
                title: "Come Bets - Off For",
                alt: "$10 moving off the point eight, moved into the come, and paid $10. Two orange dice show 5-3."
              },
              {},
              {}
            )} <div class="pb-4"></div> <p class="pb-4">When you have a Come bet in a Point and you have a Come bet of the same amount in the COME
				then that Point is rolled, you have what is called ${validate_component(Quote, "Quote").$$render($$result, { text: "Off and on" }, {}, {})}. Let&#39;s say
				you have $5 on both a Point and another in the COME then that Point rolls. Your Come bet
				($5) would come off the Point with its winnings (another $5). Your new Come bet (same amount
				as the first) would then move into the Point (same as the first). You end up with the same
				amount of money on the Point and in the Come with the difference being the $5 that was won.
				The process of moving the $5 out of the Point and moving the new $5 in the Point is
				redundant because the same amounts of money end up in the same spots. The only thing that
				changed are the winnings that are now sitting in the COME too. To save the process of moving
				the same amount of money around to the same places we decide to skip it all and just put the
				payment out there in the COME and say ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "you're Off and On for\n		__the winnings__"
              },
              {},
              {}
            )} and call it a day. You can now just pick up those winnings and the game goes on.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Off and On For...",
                smImg: "/images/" + url + "/off-and-on-for_640x360.webp",
                mdImg: "/images/" + url + "/off-and-on-for_960x540.webp",
                lgImg: "/images/" + url + "/off-and-on-for_1280x720.webp",
                title: "Off and On For",
                alt: "$10 in the point five and in the come. $10 payment is also in the come. Two orange dice show 3-2."
              },
              {},
              {}
            )} <div class="pb-4"></div> <p class="pb-4">This gets confusing. It means that you have a Come bet inside a Point that has just rolled
				and you also have a bet in the COME of a different amount. You cannot go &#39;Off and On For...&#39;
				because your first Come bet and your second Come bet are not the same amount. The flat bets
				are different. The dealer takes your first winning Come bet off the Point, and says ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "you're off for\n		__however much you won__"
              },
              {},
              {}
            )}, brings the new Come bet in and says ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "you're on for __the new Come bet\n		amount__."
              },
              {},
              {}
            )} E.g. you have a $5 Come Bet on the 8 and $15 in the COME. When the 8 rolls the dealer will
				take your $5 off the 8 with its payment and say ${validate_component(Quote, "Quote").$$render($$result, { text: "you're off the 8 for $5…" }, {}, {})} and
				bring your new $15 Come bet on and say ${validate_component(Quote, "Quote").$$render($$result, { text: "… and on for $15." }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Off For... On For...",
                smImg: "/images/" + url + "/off-for-on-for_640x360.webp",
                mdImg: "/images/" + url + "/off-for-on-for_960x540.webp",
                lgImg: "/images/" + url + "/off-for-on-for_1280x720.webp",
                title: "Off For - On For",
                alt: "Split image. Left side show $5 on point eight and $15 in come. Right side shows $15 on point eight and $5 paid $5 in the come. Two orange dice show 5-3."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerComeBets",
          title: "How Can You Bet a Come Bet for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-s3bhjj">Come bets for dealers don&#39;t have to be in any specific denomination because you can&#39;t bet an
				improper amount in the Come. Just like a player&#39;s bet, a Come bet for the dealers goes right
				into the next Point that rolls. The dealer&#39;s bet is placed in the middle of the Point to
				signify it belongs to the dealers and gets paid even money if the Point is rolled again.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dealer-come-bet_640x360.webp",
                mdImg: "/images/" + url + "/dealer-come-bet_960x540.webp",
                lgImg: "/images/" + url + "/dealer-come-bet_1280x720.webp",
                title: "Dealer Come Bet",
                alt: "$1 in the middle of the point four."
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
