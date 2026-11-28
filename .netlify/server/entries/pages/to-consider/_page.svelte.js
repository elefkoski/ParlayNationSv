import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { a as Content_h2, C as Content_img } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Considerations on the Craps Table";
let description = "What happens if you accidentally leave your winning bet on the Craps table and the dice roll again? This page will offer you a guide on things to consider while playing Craps.";
let url = "to-consider";
let phref = "/verbal-betting";
let prev = "Verbal Betting";
let nhref = "/the-pass-line";
let next = "The Pass Line";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.jpg"
  };
  let pageLinks = [
    {
      title: "Self-Service Bets",
      href: "#selfService",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "If It Lays It Plays",
      href: "#laysItPlays",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "String Betting",
      href: "#stringBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Two-Way Bets",
      href: "#twoWay",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Three-Way Bets",
      href: "#threeWay",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Hedging Your Bets",
      href: "#hedgingBets",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-db8212_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-xl4mz7">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "To Consider at the Craps Table",
  "description": "Insights into various betting strategies and etiquettes at the Craps table, including self-service bets, string betting, two-way and three-way bets, and hedging bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/to-consider",
  "image": "http://parlaynation.com/images/to-consider/to-consider-header.webp",
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
    "@id": "http://parlaynation.com/to-consider"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "Exploring various nuances and strategies to consider at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Craps Bets Are Self-Service?",
          "description": "Discusses bets that players manage themselves, including the Pass Line and Odds, Don't Pass and Lay Odds, Come Bet, Don't Come, and the Field."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Does 'If it Lays it Plays' Mean in Craps?",
          "description": "Explains the meaning behind the dealer's phrase indicating that unclaimed winnings will be added to the original bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What is String Betting at a Craps Table?",
          "description": "Covers the concept of string betting and encourages learning spread bets to place multiple bets simultaneously."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Is a Two-Way Bet in Craps?",
          "description": "Defines a two-way bet as one made for both the player and the dealers, often used for Proposition Bets."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "What Is a Three-Way Bet in Craps?",
          "description": "Describes a three-way bet made for the player, the dealers, and the shooter, typically to show appreciation."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "What Does it Mean to Hedge Your Bets at the Craps Table?",
          "description": "Explains hedging as a strategy to offset potential losses, with examples of common hedge bets."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/to-consider/self-service_640x360.webp",
      "caption": "Arrows pointing to the pass line, pass line odds, field, don't come, don't come odds, come, and don't come areas."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/to-consider/lays-it-plays_640x360.webp",
      "caption": "A winning $75 bet sitting in the field."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/to-consider/two-way-bet_640x360.webp",
      "caption": "A $5 bet on the hard 10 in spot three with $5 in the middle of the hard 10 for the dealers."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/to-consider/three-way-bet_640x360.webp",
      "caption": "Three dollars on the aces. One in spot four, one in spot ten, and one in the middle."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/to-consider/hedging_640x360.webp",
      "caption": "Ten dollars on the pass line with two dollars on the any craps."
    }
  ]
}<\/script><!-- HEAD_svelte-db8212_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Basics",
          title: "To Consider at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1xgw7mx">There are more ways to bet in Craps besides picking bets. Some are good, and some are bad.
				You may accidentally leave money from a winning bet on the table, or you may want to bet
				with the dealers or the shooter. Here are some other Craps nuances you&#39;ll want to consider.</p>`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "selfService",
          title: "What Craps Bets Are Self-Service?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">A self-service bet is a bet that is taken care of by the player, not the dealers. You gotta
				keep an eye on your own bets and not forget to pick up your winnings. If you forget whether
				a bet is yours, don&#39;t be afraid to ask the player next to you. Normally they will tell the
				truth out of fear of being called out by the dealers if they lie. The self-service bets are
				the Pass Line and Odds, the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})} and its ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Lay Odds",
                href: "dont-pass-lay-odds"
              },
              {},
              {}
            )}, the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bet",
                href: "come-bet-basics"
              },
              {},
              {}
            )}, the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Come", href: "dont-come" }, {}, {})}, and ${validate_component(Link, "Link").$$render($$result, { text: "the Field", href: "the-field" }, {}, {})}. All other bets on the table are taken
				care of by the dealers.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/self-service_640x360.webp",
                mdImg: "src/images/" + url + "/self-service_960x540.webp",
                lgImg: "src/images/" + url + "/self-service_1280x720.webp",
                title: "Self-Service Bets",
                alt: "Arrows pointing to the pass line, pass line odd, field, don't come, don't come odds, come, and don't come areas."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "laysItPlays",
          title: "What Does “If it Lays it Plays” Mean in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you hear a dealer say, ${validate_component(Quote, "Quote").$$render($$result, { text: "If it lays, it plays." }, {}, {})} they are telling someone that
				they have won a self-service bet but haven&#39;t picked up their winnings. If a roll goes by without
				that player picking up their money, then it will be added to the original bet regardless of whether
				the player wanted it or not.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/lays-it-plays_640x360.webp",
                mdImg: "src/images/" + url + "/lays-it-plays_960x540.webp",
                lgImg: "src/images/" + url + "/lays-it-plays_1280x720.webp",
                title: "If it Lays it Plays",
                alt: "A winning $75 bet sitting in the field."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "stringBetting",
          title: "What is String Betting at a Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Imagine going to the bar and ordering a drink, and when they come back with your drink, you
				order another drink, and when they come back with that one, you order a third, and yes, when
				they come back with that drink, you order a fourth. I guarantee the next time the bartender
				sees you, they&#39;ll turn their head. String Betting is when you make one bet, then another,
				then another… etc. It&#39;s making the dealer go back and forth repeatedly. Learn ${validate_component(Link, "Link").$$render($$result, { text: "Spread Bets", href: "spread-bets" }, {}, {})} so you can make multiple bets simultaneously or know what you want before you start handing
				the dealer money and tell them all at once.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "twoWay",
          title: "What Is a Two-Way Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Since most players don&#39;t bet for the dealers without making a bet themselves, we have a
				phrase
				${validate_component(Quote, "Quote").$$render($$result, { text: "Two way." }, {}, {})} When you make a Two-Way bet, you are: betting for yourself and the
				dealer simultaneously, on the same bet, and is generally used for ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Proposition Bets",
                href: "proposition-basics"
              },
              {},
              {}
            )}.</p> <p class="pb-4">You could throw in a couple of dollars and say, ${validate_component(Quote, "Quote").$$render($$result, { text: "Two-way Hard 10" }, {}, {})}, and the
				dealer would know you are betting one of those cheques for you and the other for the
				dealers. If you throw in two cheques that are a different amount, let&#39;s say a nickel and a
				dollar, the dealer will know the larger amount is for you, and the lesser is for the
				dealers. You could also say
				${validate_component(Quote, "Quote").$$render($$result, { text: "Five and one on the Hard 10" }, {}, {})}, five for you and one for them on the Hard 10.</p> <p class="pb-4" data-svelte-h="svelte-hdi7u8">No matter how much money you bet, the dealers will always be highly appreciative of the
				gesture.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/two-way-bet_640x360.webp",
                mdImg: "src/images/" + url + "/two-way-bet_960x540.webp",
                lgImg: "src/images/" + url + "/two-way-bet_1280x720.webp",
                title: "Two-Way Bet",
                alt: "A $5 bet on the hard 10 in spot three with $5 in the middle of the hard 10 for the dealers."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "threeWay",
          title: "What Is a Three-Way Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Sometimes a player would like to thank the shooter for having a good roll or possibly
				invoking them to roll a certain number. This is where the Three-Way bet comes into play. It
				is a bet for themselves, the dealers, and the shooter. It&#39;s unorthodox to bet only for
				yourself and the shooter because the dealer is the one servicing both people. E.g., if you
				throw $3 to ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the\n			stickperson",
                href: "the-crew"
              },
              {},
              {}
            )}, you would say ${validate_component(Quote, "Quote").$$render($$result, { text: "Three-Way Aces" }, {}, {})}, meaning $1 on ${validate_component(Link, "Link").$$render($$result, { text: "Aces", href: "straight-up" }, {}, {})} for each the shooter, the dealers, and yourself.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/three-way-bet_640x360.webp",
                mdImg: "src/images/" + url + "/three-way-bet_960x540.webp",
                lgImg: "src/images/" + url + "/three-way-bet_1280x720.webp",
                title: "Three-Way Bet",
                alt: "Three dollars on the aces. One in spot four, one in spot ten, and one in the middle."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hedgingBets",
          title: "What Does it Mean to Hedge Your Bets at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Hedging is insurance. It&#39;s making a bet that wins when another bet loses. A common hedge bet
				is the ${validate_component(Link, "Link").$$render($$result, { text: "Any Craps", href: "any-craps" }, {}, {})} when you&#39;re betting the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}. The Pass Line loses during the Comeout Roll when a 2, 3, or 12 is rolled, and the Any
				Craps wins when the 2, 3, or 12 rolls. To protect a $5 Pass Line bet, you would bet $1 on
				the Any Craps. If a crap rolls, the $5 Pass Line would lose but, you would win $7 for your
				$1 Any Craps, which covers your loss.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/hedging_640x360.webp",
                mdImg: "src/images/" + url + "/hedging_960x540.webp",
                lgImg: "src/images/" + url + "/hedging_1280x720.webp",
                title: "Hedging Bets",
                alt: "Ten dollars on the pass line with two dollars on the any craps."
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
