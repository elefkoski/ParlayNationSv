import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { F as calculateHornHighAces, G as calculateHornHighAceDeuce, H as calculateHornHighYo, I as calculateHornHighTwelve, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput4 } from "../../../chunks/CalcInput4.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { C as Content_ul_b } from "../../../chunks/Content-ul-b.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting the Horn High in Craps";
let description = "There are four Horn Highs in Craps; the Horn High Aces, the Horn High Ace Deuce, the Horn High Yo, and the Horn High Twelve.";
let url = "horn-high";
let phref = "horn";
let prev = "Horn";
let nhref = "world";
let next = "World";
let tblAria = "Horn High Payment Table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "The Four Horn Highs",
      href: "#fourHornHighs",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn High Placement",
      href: "#hornHighPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn High Payment",
      href: "#hornHighPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn High Calculators",
      href: "#hornHighCalcs",
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
  let tblHeaders = ["Roll", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["Low Side Hits", "11:5", "3 or 11", "Any other number"],
    ["High Side Hits", "26:5", "2 or 12", "Any other number"],
    ["Low Side Hits Directly", "27:5", "3 or 11", "Any other number"],
    ["High Side Hits Directly", "57:5", "2 or 12", "Any other number"]
  ];
  let tblPnts = [
    "All the Horn Highs are one-roll bets",
    "All the Horn Highs must be bet in increments of $5."
  ];
  let liBs = [
    {
      title: "How the dice land:",
      subTitle: ["Directly -", "Indirectly -", "High Side -", "Low Side -"],
      items: [
        "The Horn High that you bet is the number that rolled. For example, you bet the Horn High Twelve and the Twelve rolled or you bet the Horn High Ace Deuce and the Ace Deuce rolls. That is a direct hit.",
        "One of the other numbers rolled. For example, you bet the Horn High Aces and the Twelve rolled or you bet the Horn High Yo and the Aces roll. Those are indirect hits.",
        "The Horn High Aces and the Horn High Twelve pay the exact same when they hit directly or indirectly because both the Aces and the Twelve pay 30 to 1. They are both considered the high side.",
        "The Horn High Ace Deuce and the Horn High Yo pay the exact same when they hit directly or indirectly because both the Ace Deuce and the Yo pay 15 to 1. They are both considered the low side."
      ]
    },
    {
      title: "The Horn High will pay 1 of 4 payments:",
      subTitle: ["$57 -", "$27 -", "$26 -", "$11 -"],
      items: [
        "High side hits directly. For example, Horn High Twelve, and Twelve rolls.",
        "Low side hits directly. For example, Horn High Yo, and Yo rolls.",
        "High side hits indirectly. For example, Horn High Ace Deuce, and Twelve Rolls.",
        "Low side hits indirectly. For example, Horn High Aces, and Yo rolls."
      ]
    }
  ];
  let liBs2 = [
    {
      title: "Three possible payments:",
      subTitle: ["$57 -", "$26 -", "$11 -"],
      items: [
        "The bet hits directly.",
        "The opposite high side number is rolled. E.g. you bet the Horn High Aces and the Twelve rolled.",
        "The low side rolled. E.g. you bet the Horn High Twelve and the Ace Deuce or Yo rolled. Ace Deuce and Yo are the low side numbers."
      ]
    }
  ];
  let liBs3 = [
    {
      title: "Three possible payments:",
      subTitle: ["$27 -", "$11 -", "$26 -"],
      items: [
        "The bet hits directly.",
        "The opposite low side number is rolled. E.g. you bet the Horn High Yo and the Ace Deuce rolled.",
        "The high side rolled. E.g. you bet the Horn High Ace Deuce and the Aces or Twelve rolled. Aces and Twelve are the high side numbers."
      ]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-9mti14_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1b4vyut">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Horn High in Craps",
  "description": "Explore the Horn High bets in Craps, including Horn High Yo, Horn High Ace Deuce, Horn High Aces, and Horn High Twelve, and learn how these bets are placed and paid.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/horn-high",
  "image": "http://parlaynation.com/images/horn-high/horn-high-header.webp",
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
    "@id": "http://parlaynation.com/horn-high"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Horn High Bets",
      "description": "A detailed guide to understanding Horn High bets in Craps, including the strategies behind Horn High Yo, Horn High Ace Deuce, Horn High Aces, and Horn High Twelve, as well as instructions on how these bets are placed and their payouts.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Four Different Horn Highs",
          "description": "Explains the difference between the four types of Horn High bets and how to bet them."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Horn High Placement",
          "description": "Describes where to place Horn High bets on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Horn High Payout",
          "description": "Details the payout process for Horn High bets."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn-high/horn-high_640x360.webp",
      "caption": "Up close overhead view of the horn highs on the Craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn-high/5-horn-high-yo-1_640x360.webp",
      "caption": "$5 Horn High Yo."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn-high/5-horn-high-ace-deuce-1_640x360.webp",
      "caption": "$5 Horn High Ace Deuce."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn-high/5-horn-high-aces-1_640x360.webp",
      "caption": "$5 Horn High Aces."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn-high/5-horn-high-twelve-1_640x360.webp",
      "caption": "$5 Horn High Twelve."
    }
  ]
}<\/script><!-- HEAD_svelte-9mti14_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Horn High in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-10ygv0f">There are four different Horn Highs that all bet the same numbers as the Horn. They are the
				Horn High Yo, Horn High Ace Deuce, Horn High Aces, and the Horn High Twelve.</p> <p class="pb-4" data-svelte-h="svelte-4h2dgo">The difference in each is you are adding an extra unit to one of those bets; the Aces, Ace
				Deuce, Twelve, or the Yo in order to determine which Horn High you&#39;re betting.</p> <p class="pb-4">Horn Highs are great if you want to throw a nickel in, spread your money around a bunch of
				prop bets, and pick a special number you want to roll, like... the Yo. ${validate_component(Quote, "Quote").$$render($$result, { text: "Nickel Horn High Yo!" }, {}, {})}</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/horn-high_640x360.webp",
                mdImg: "src/images/" + url + "/horn-high_960x540.webp",
                lgImg: "src/images/" + url + "/horn-high_1280x720.webp",
                title: "Horn High",
                alt: "Up close overhead view of the horn highs on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fourHornHighs",
          title: "What Are the Four Different Horn Highs in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">If you bet a four-dollar ${validate_component(Link, "Link").$$render($$result, { text: "Horn", href: "horn" }, {}, {})} then took another dollar and added
				it to the Yo then you would be betting a Horn High Yo. If instead you took that extra dollar
				and put it on the Twelve you would be betting a Horn High Twelve. I presume the Horn High was
				created in order to make betting simpler. Betting four dollars requires either splashing four
				(4) dollar cheques or betting a five-dollar cheque then having ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Stickperson",
                href: "the-crew"
              },
              {},
              {}
            )} tell the Base Dealer to give a dollar change. Either way, it&#39;s easier to make a five-dollar
				bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$5 Horn High Yo",
                smImg: "src/images/" + url + "/5-horn-high-yo-1_640x360.webp",
                mdImg: "src/images/" + url + "/5-horn-high-yo-1_960x540.webp",
                lgImg: "src/images/" + url + "/5-horn-high-yo-1_1280x720.webp",
                title: "$5 Horn High Yo",
                alt: "Split image. On top is $5 on the Horn High Yo. On bottom is $1 each on the aces, twelve, and ace deuce. There are two dollars on the yo."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$5 Horn High Ace Deuce",
                smImg: "src/images/" + url + "/5-horn-high-ace-deuce-1_640x360.webp",
                mdImg: "src/images/" + url + "/5-horn-high-ace-deuce-1_960x540.webp",
                lgImg: "src/images/" + url + "/5-horn-high-ace-deuce-1_1280x720.webp",
                title: "$5 Horn High Ace Deuce",
                alt: "Split image. On top is $5 on the Horn High Ace Deuce. On bottom is $1 each on the aces, twelve, and yo. There are two dollars on the ace deuce."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$5 Horn High Aces",
                smImg: "src/images/" + url + "/5-horn-high-aces-1_640x360.webp",
                mdImg: "src/images/" + url + "/5-horn-high-aces-1_960x540.webp",
                lgImg: "src/images/" + url + "/5-horn-high-aces-1_1280x720.webp",
                title: "$5 Horn High Aces",
                alt: "Split image. On top is $5 on the Horn High Aces. On bottom is $1 each on the ace deuce, twelve, and yo. There are two dollars on the aces."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$5 Horn High Twelve",
                smImg: "src/images/" + url + "/5-horn-high-twelve-1_640x360.webp",
                mdImg: "src/images/" + url + "/5-horn-high-twelve-1_960x540.webp",
                lgImg: "src/images/" + url + "/5-horn-high-twelve-1_1280x720.webp",
                title: "$5 Horn High Twelve",
                alt: "Split image. On top is $5 on the Horn High Twelve. On bottom is $1 each on the aces, ace deuce, and yo. There are two dollars on the twelve."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hornHighPlacement",
          title: "Where Is Your Horn High Bet on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-c8s65d">For the most part, all of the Horn Highs are separated into two sections: the left side of
				the table and the right side of the table. If two players from the same side of the table
				bet the same Horn High we wouldn&#39;t even be able to fit both cheques in the box. There isn&#39;t
				enough room for them both so we would have to go over the edges or put the edge of one
				cheque on top of the other. Whatever we need to do in order to get an understanding of where
				the bets should be.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-a-horn-high_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-a-horn-high_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-a-horn-high_1280x720.webp",
                title: "Placement of a Horn High",
                alt: "Overhead up close view of the Horn High bets and the Craps table rail. There are eight color coded spots on the bets referencing eight colored spots on the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hornHighPayment",
          title: "What Does the Horn High Pay on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-eoahpk">The Horn Highs are some of the most confusing bets to pay on a Craps table. There are only
				four payments you need to know in order to pay all the bets but it&#39;s knowing when to apply
				each of those four numbers that makes paying them so difficult. You need to understand a few
				things before you&#39;ll be able to figure out the payments of the Horn Highs right off the bat.</p> ${validate_component(Content_ul_b, "ContentUl2").$$render($$result, { liBs }, {}, {})} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "$5 Horn High Aces and Horn High Twelve"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-1xwlkkh">There are three possible outcomes/payments when you have to pay both the Horn High Aces
					and the Horn High Twelve:</p> ${validate_component(Content_ul_b, "ContentUl2").$$render($$result, { liBs: liBs2 }, {}, {})} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-ph60sw">A $5 Horn High Aces has $2 on the Aces and $1 on the other three numbers. If the Aces
					rolled it would win $60 ($2 x 30) minus $3 (the other losing bets - $1 on each the Twelve,
					Ace Deuce, and Yo) for a payment of $57.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Twelve Direct Hit Payment",
                      smImg: "src/images/" + url + "/5-hh-twelve-direct_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-twelve-direct_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-twelve-direct_1280x720.webp",
                      title: "$5 Horn High Twelve Direct Hit Payment",
                      alt: "$1 each on the aces, ace deuce, and yo. There are two dollars on the twelve. Two green dice show 6-6. A bubble reads $57 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Aces Direct Hit Payment",
                      smImg: "src/images/" + url + "/5-hh-aces-direct_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-aces-direct_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-aces-direct_1280x720.webp",
                      title: "$5 Horn High Aces Direct Hit Payment",
                      alt: "$1 each on the twelve, ace deuce, and yo. There are two dollars on the aces. Two green dice show 1-1. A bubble reads $57 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-7om95g">A $5 Horn High Twelve has $2 on the Twelve and $1 on the other three numbers. If the
					opposite high side rolled, the Aces, it would win $30 ($1 x 30) minus $4 (the other losing
					bets - $2 on the Twelve and $1 on each the Aces Deuce and Yo) for a payment of $26.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Twelve Opposite High Side Payment",
                      smImg: "src/images/" + url + "/5-hh-twelve-opp-high_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-twelve-opp-high_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-twelve-opp-high_1280x720.webp",
                      title: "$5 Horn High Twelve Opposite High Side Payment",
                      alt: "A $5 Horn High Twelve has $2 on the Twelve and $1 on the other three numbers. If the opposite high side rolled, the Aces, it would win $30 ($1 x 30) minus $4 (the other losing bets - $2 on the Twelve and $1 on each the Aces Deuce and Yo) for a payment of $26."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-1jpjqhv">A $5 Horn High Aces has $2 on the Aces and $1 on the other three numbers. If an Ace Deuce
					rolled it would win $15 ($1 x 15) minus $4 (the other losing bets - $2 on the Twelve and
					$1 each on the Aces and Yo) for a payment of $11. Since the Yo pays the same as the Ace
					Deuce, if their places were switched, the end payment ($11) would still be the same.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Aces Low Side Hits",
                      smImg: "src/images/" + url + "/5-hh-aces-low-side_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-aces-low-side_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-aces-low-side_1280x720.webp",
                      title: "$5 Horn High Aces Low Side Hits",
                      alt: "$1 each on the twelve, ace deuce, and the yo, there are two dollars on the Aces. Two green dice show 1-2. A bubble reads $11 payment."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "$5 Horn High Ace Deuce and Horn High Yo"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-1u8e4v5">There are three possible outcomes/payments possible when you pay both the Horn High Ace
					Deuce and the Horn High Yo.</p> ${validate_component(Content_ul_b, "ContentUl2").$$render($$result, { liBs: liBs3 }, {}, {})} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-140z0kb">A $5 Horn High Yo has $2 on the Yo and $1 on the other three numbers. If the Yo rolled it
					would win $30 ($2 x 15) minus $3 (the other losing bets - $1 on each the Ace Deuce, Aces,
					and Twelve) for a payment of $27.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Yo Direct Hit Payment",
                      smImg: "src/images/" + url + "/5-hh-yo-direct_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-yo-direct_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-yo-direct_1280x720.webp",
                      title: "$5 Horn High Yo Direct Hit Payment",
                      alt: "$1 each on the aces, ace deuce, and twelve. There are two dollars on the yo. Two green dice show 5-6. A bubble reads $27 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Ace Deuce Direct Hit Payment",
                      smImg: "src/images/" + url + "/5-hh-ace-deuce-direct_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-ace-deuce-direct_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-ace-deuce-direct_1280x720.webp",
                      title: "$5 Horn High Ace Deuce Direct Hit Payment",
                      alt: "$1 each on the aces, yo, and twelve. There are two dollars on the ace deuce. Two green dice show 1-2. A bubble reads $27 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-1np2bix">A $5 Horn High Ace Deuce has $2 on the Ace Deuce and $1 on the other three numbers. If the
					opposite low side rolled, the Yo, it would win $15 ($1 x 15) minus $4 (the other losing
					bets - $2 on the Ace Deuce and $1 on each the Aces and Twelve) for a payment of $11.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Ace Deuce Opposite Low Side Payment.",
                      smImg: "src/images/" + url + "/5-hh-ace-deuce-opp-low_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-ace-deuce-opp-low_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-ace-deuce-opp-low_1280x720.webp",
                      title: "$5 Horn High Ace Deuce Opposite Low Side Payment.",
                      alt: "$1 each on the aces, twelve, and yo. There are two dollars on the ace deuce. Two green dice show 5-6. A bubble reads $11 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-1la82wx">A $5 Horn High Yo has $2 on the Yo and $1 on the other three numbers. If a Twelve rolled
					it would win $30 ($1 x 30) minus $4 (the other losing bets - $2 on the Yo and $1 each on
					the Ace Deuce and Aces) for a payment of $26. Since the Twelve pays the same as the Aces,
					if their places were switched, the end payment ($26) would still be the same.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$5 Horn High Yo High Side Payment",
                      smImg: "src/images/" + url + "/5-hh-yo-high-side_640x360.webp",
                      mdImg: "src/images/" + url + "/5-hh-yo-high-side_960x540.webp",
                      lgImg: "src/images/" + url + "/5-hh-yo-high-side_1280x720.webp",
                      title: "$5 Horn High Yo High Side Payment",
                      alt: "$1 each on the aces, twelve, and ace deuce. There are two dollars on the yo. Two green dice show 6-6. A bubble reads $26 payment."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Horn high payment calculators",
          id: "hornHighCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a bet made on the four Horn High bets.",
                title: "Horn High Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput4, "CalcInput4").$$render(
                    $$result,
                    {
                      calculate: calculateHornHighAces,
                      id: "horn_high_aces_pymnt_calc",
                      mainTitle: "Horn High Aces",
                      pId: "horn_high_aces_calc_result",
                      placeholder: "$5 minimum",
                      rollValues: [2, 3, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                      step: 5,
                      title: "Enter amount on the Horn High Aces:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput4, "CalcInput4").$$render(
                    $$result,
                    {
                      calculate: calculateHornHighAceDeuce,
                      id: "horn_high_ace_deuce_pymnt_calc",
                      mainTitle: "Horn High Ace Deuce",
                      pId: "horn_high_ace_deuce_calc_result",
                      placeholder: "$5 minimum",
                      rollValues: [2, 3, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                      step: 5,
                      title: "Enter amount on the Horn High Ace Deuce:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput4, "CalcInput4").$$render(
                    $$result,
                    {
                      calculate: calculateHornHighYo,
                      id: "horn_high_yo_pymnt_calc",
                      mainTitle: "Horn High Yo",
                      pId: "horn_high_yo_calc_result",
                      placeholder: "$5 minimum",
                      rollValues: [2, 3, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                      step: 5,
                      title: "Enter amount on the Horn High Yo:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput4, "CalcInput4").$$render(
                    $$result,
                    {
                      calculate: calculateHornHighTwelve,
                      id: "horn_high_twelve_pymnt_calc",
                      mainTitle: "Horn High Twelve",
                      pId: "horn_high_twelve_calc_result",
                      placeholder: "$5 minimum",
                      rollValues: [2, 3, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                      step: 5,
                      title: "Enter amount on the Horn High Twelve:"
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
