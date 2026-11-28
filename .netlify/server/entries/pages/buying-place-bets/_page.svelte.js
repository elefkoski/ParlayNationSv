import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { b as calculateBuyFourTen, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
let title = "Buying Place Bets in Craps";
let description = "When you Buy a Place Bet in Craps you pay a commission to get paid True Odds for that bet. You normally pay that commission upfront and again after your bet wins.";
let url = "buying-place-bets";
let phref = "place-bet-basics";
let prev = "Place Bet Basics";
let nhref = "your-money";
let next = "Your Money";
let tblAria = "Buy Place Payment Table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "5% Commission",
      href: "#buyCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting a Buy Bet",
      href: "#buyBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Buy Bet Placement",
      href: "#buyPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Buy Bet Payment",
      href: "#buyPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Buy 4 & 10 Calculator",
      href: "#buyFourTenCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.jpg"
  };
  let tblHeaders = ["Point", "Pays", "Wins", "Loses", "Vig"];
  let tblRows = [
    ["6 or 8", "6:5", "When point rolls", "7", "5%"],
    ["5 or 9", "3:2", "When point rolls", "7", "5%"],
    ["4 or 10", "2:1", "When point rolls", "7", "5%"]
  ];
  let tblPnts = [
    "$1 commission for each $20 of the bet",
    "People usually only buy the 4 and 10",
    "Buy bets are not contract bets",
    "Commission can also be called Vigorish (Vig) or Juice"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1laqug_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-12j9zg5">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Buying Place Bets in Craps",
  "description": "An informative guide on how Buy Bets work in Craps, including details on commission, betting strategies, and payouts.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/buying-place-bets",
  "image": "http://parlaynation.com/images/buying-place-bets/buying-place-bets-header.webp",
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
    "@id": "http://parlaynation.com/buying-place-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding Buy Bets in Craps",
      "description": "Covers what Buy Bets are, the role of commissions, and how these bets differ from Place Bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is the 5% Commission on Buy Bets in Craps?",
          "description": "Explains the commission associated with Buy Bets and how it affects payouts."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet the Buy Bet in a Craps Game?",
          "description": "Describes the process of making a Buy Bet, including where to place your bet and how to include commission."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Where is Your Buy Bet on the Craps Table?",
          "description": "Details the placement of Buy Bets on the Craps table and how they are marked to distinguish them from Place Bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Does a Buy Bet Pay in Craps?",
          "description": "Outlines the payout structure for Buy Bets, focusing especially on buying the 4 and 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buying-place-bets_640x360.webp",
      "caption": "Example of a $20 bet on the inside of the ten with a buy lammer on top."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/how-to-bet-a-buy-bet_640x360.webp",
      "caption": "Visual guide on how to place a Buy Bet in Craps."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/placement-of-a-buy-bet_640x360.webp",
      "caption": "Detailing the positioning of a Buy Bet on the Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-1_640x360.webp",
      "caption": "Example of a Buy Bet on the 4 or 10 for $35 with expected payouts."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-2_640x360.webp",
      "caption": "Illustration of a $75 Buy Bet on the 10 and the commission costs."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/buying-place-bets/buy-place-ex-3_640x360.webp",
      "caption": "Example of buying the 4 and 10 for $75 each and the total commission."
    }
  ]
}<\/script><!-- HEAD_svelte-1laqug_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Place Bets",
          title: "Buying Place Bets in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-15kikq0">Countless players ask about the BUY lammer. The ON and OFF lammers are self-explanatory on
				bets, but what is the BUY? Buy Bets are Place Bets that pay True Odds because you paid a
				commission.</p> <p class="pb-4" data-svelte-h="svelte-1p3bslo">Once your bet gets high enough, the dealers will BUY the bet for you. Like Place Bets, your
				BUY must be rolled before a 7 to win. If a 7 is rolled before the Place Bet you bought, then
				it loses.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/buying-place-bets_640x360.webp",
                mdImg: "/images/" + url + "/buying-place-bets_960x540.webp",
                lgImg: "/images/" + url + "/buying-place-bets_1280x720.webp",
                title: "Buying Place Bets",
                alt: "$20 bet on the inside of the ten with a buy lammer on top."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buyCommission",
          title: "What Is the 5% Commission on Buy Bets in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-mnh1gn">The commission is money you pay to get paid True Odds on your Place Bets. True Odds are what
				a bet is supposed to get paid, a bet with no advantage for the casino. You must pay a 5%
				Commission on the cost of the bet. For every $20 you bet, you must pay $1 commission. If you
				bet $21, $22, $23… all the way up to $39, it would still cost $1. Once you get to $40, it
				would cost $2.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buyBetting",
          title: "How Do You Bet the Buy Bet in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1t6tnzf">Normally, when your bet gets to an amount that requires you to BUY it, the dealer will tell
				you to drop the required commission amount. You don&#39;t need to worry about doing the math.
				The dealer will do it for you, and all you need to do is make sure the dealer knows how much
				money you want and where.</p> <p class="pb-4">When you make a Buy bet, you put your money in the COME and tell the dealer you want to ${validate_component(Quote, "Quote").$$render($$result, { text: "Buy" }, {}, {})}
				whichever Point it is. You would also add in the commission to the bet. E.g., If you wanted to
				buy the 4 for $20, you would put the bet plus commission into the COME, then tell the dealer,
				${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would\n			like to 'buy' the 4 for $20."
              },
              {},
              {}
            )}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-a-buy-bet_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-a-buy-bet_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-a-buy-bet_1280x720.webp",
                title: "How to Bet a Buy Bet",
                alt: "$21 sitting in the COME area."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buyPlacement",
          title: "Where is Your Buy Bet on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Buy Bets are relative to your spot in the rail and get put on the inside of the box to
				differentiate it from a Place Bet. The Base Dealer will also put a BUY lammer on it to
				signify it has been bought. Check out ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )} to see
				how your money in the rail is relative to your bets on the layout.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-a-buy-bet_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-buy-bet_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-buy-bet_1280x720.webp",
                title: "Placement of a Buy Bet",
                alt: "A $20 buy bet on the inside of the four. The inside of the four is outlined in orange."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buyPayment",
          title: "What Does a Buy Bet Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-c08ts0">Like many other bets on the table, you must bet Place Bets in certain increments, and they
				pay differently depending on which number you&#39;re betting. Once a Buy bet wins, you must pay
				the same commission to keep the bet up to win again. If you decide to take your Buy Bet down
				after it wins, you won&#39;t need to pay commission a second time.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Buying the 5, 6, 8, and 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-168r2lz">The difference from Place Bet odds to true odds when buying the 5, 6, 8, or 9 are so small
					that the 5% commission you are paying could lose you money. Seasoned players will only buy
					the 4 or 10.</p>`;
              }
            })} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Buying the 4 and 10" }, {}, {
              default: () => {
                return `<p class="pb-4">Buying the 4 or 10 is worth the cost of commission. $20 Buy on the 10 nets you $40 instead
					of $36. You get 4:1 on that dollar but must still pay another $1 vig to keep it up to win
					again. When you want to Buy the 4 and 10 simultaneously, the dealer will add up the total
					of the two bets to determine the commission. E.g., If you wanted to buy the 4 and 10 for
					$50 each, you would think, ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "I need to pay $2 for the 4 and another $2 for the 10"
                  },
                  {},
                  {}
                )}, but you don&#39;t think of them as separate bets. You have a total of $100 in action,
					which is $5 commission.</p> <p class="pb-4" data-svelte-h="svelte-13lm7qz">In this example, you Buy the 10 for $35 + $1 in commission. When it hits, it pays 2:1 or
					$70, but you must pay the $1 commission again.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Buy 4 or 10 for $35",
                    smImg: "/images/" + url + "/buy-place-ex-1_640x360.webp",
                    mdImg: "/images/" + url + "/buy-place-ex-1_960x540.webp",
                    lgImg: "/images/" + url + "/buy-place-ex-1_1280x720.webp",
                    title: "Buy 4 or 10 for $35",
                    alt: "$35 buy on the point 10 with a $70 payout in the come and $1 next to it as commission to stay up again."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-tnvbgo">In this example, you decide to Buy the 10 for $75, which is $3 vig. It wins $150 instead
					of $135 but would have to pay another $3 to keep the buy up to win again.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Buy 4 or 10 for $75",
                    smImg: "/images/" + url + "/buy-place-ex-2_640x360.webp",
                    mdImg: "/images/" + url + "/buy-place-ex-2_960x540.webp",
                    lgImg: "/images/" + url + "/buy-place-ex-2_1280x720.webp",
                    title: "Buy 4 or 10 for $75",
                    alt: "$75 buy on the point 10 with a $150 payout in the come and $3 next to it as commission to stay up again."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> <p class="pb-4" data-svelte-h="svelte-q0cpwj">When you want to buy the 4 and 10 simultaneously, you add up the total of the two bets and
					determine the commission that way. Here you buy the 4 and 10 for $75 each for a total of
					$150. You wouldn&#39;t pay $3 for the 4 and $3 for the 10 for a $6 commission total. Your
					total action is $150 for a commission cost of $7.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Buy 4 & 10 for $75 Each",
                    smImg: "/images/" + url + "/buy-place-ex-3_640x360.webp",
                    mdImg: "/images/" + url + "/buy-place-ex-3_960x540.webp",
                    lgImg: "/images/" + url + "/buy-place-ex-3_1280x720.webp",
                    title: "Buy 4 & 10 for $75 Each",
                    alt: "$75 buy on both the 4 and 10 total $150 for a $7 commission."
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
          aria: "Buy 4 or 10 payment calculator",
          id: "buyFourTenCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for Buying a 4 or 10.",
                title: "Buy 4 or 10 Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateBuyFourTen,
                      id: "buy_pymnt_calc",
                      pId: "buy_calc_result",
                      placeholder: "$20 minimum",
                      step: 5,
                      title: "Enter Buy Amount:"
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
