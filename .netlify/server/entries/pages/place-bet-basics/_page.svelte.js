import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { o as calculatePlaceSixEight, p as calculatePlaceFiveNine, q as calculatePlaceFourTen, C as CalcBox } from "../../../chunks/craps-calculators.js";
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
import { C as Content_ul_b } from "../../../chunks/Content-ul-b.js";
let title = "Betting Place Bets in Craps";
let description = "Place Bets are bet during the Intermediate Roll. They get paid differently depending on which Point you Place. There are certain terms used when betting Place Bets.";
let url = "place-bet-basics";
let phref = "place-bets";
let prev = "Place Bets";
let nhref = "buying-place-bets";
let next = "Buying Place Bets";
let tblAria = "Place Bet Payment Table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting a Place Bet",
      href: "#bettingPlaceBets",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Wrong Place Bet Betting",
      href: "#badPlaceBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Place Bet Payment",
      href: "#placePayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Place Bet Calculators",
      href: "#placePaymentCalcs",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Place Bet Terms",
      href: "#placeBetTerms",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealer Place Bets",
      href: "#dealerPlaceBets",
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
    ["6 or 8", "7:6", "When point rolls", "7"],
    ["5 or 9", "7:5", "When point rolls", "7"],
    ["4 or 10", "9:5", "When point rolls", "7"]
  ];
  let tblPnts = [
    "Place Bets are not contract bets",
    "Place Bets do not work during the Comeout Roll",
    "You can ask to have your Place Bets turned ON during the Comeout Roll"
  ];
  let liBs = [
    {
      title: "Please don't put your money in the following places: ",
      subTitle: [
        "Next to or behind a dealers' working stacks - ",
        "In the Place Bet boxes - ",
        "In the Field - ",
        "In the Don't Come - "
      ],
      items: [
        "This is no good because money falls off the working stacks and could accidentally be picked up by the dealer and put away.",
        "Other people's money is in these boxes, so if you throw money in there, you will only mix that money with yours, causing some issues.",
        "Players bet many different amounts in the Field so it wouldn't be hard for the dealer to mistake it as a normal Field Bet.",
        "This spot is reserved for DC Bets and the Puck, so use the COME."
      ]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-11xzokh_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1qv1evu">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Place Bets in Craps",
  "description": "A comprehensive guide on Place Bets in Craps, detailing the process of placing bets, identifying common mistakes, understanding payout ratios, using proper betting terms, and including dealers in the game.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/place-bet-basics",
  "image": "http://parlaynation.com/images/place-bet-basics/place-bet-basics-header.webp",
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
    "@id": "http://parlaynation.com/place-bet-basics"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Place Bets",
      "description": "Deep dive into Place Bets in Craps, from betting strategies and pitfalls to payout nuances and etiquette for betting on behalf of the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Place Bets in a Craps Game?",
          "description": "Instructions on how to properly place Place Bets after the Point is established, ensuring bets are recognized and not mistaken for Come Bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Not to Put Your Money on a Craps Table",
          "description": "Advice on improper betting locations and practices that could lead to confusion or loss of bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Where Are Your Place Bets on the Craps Table?",
          "description": "Clarification on the specific locations for Place Bets on the Craps table to ensure clarity and ownership of each bet."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Does a Place Bet Pay in Craps?",
          "description": "Detailed explanation of the payout ratios for Place Bets on different numbers, highlighting the importance of betting in proper increments."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "What Are Proper Terms for Betting Place Bets?",
          "description": "An overview of the correct terminology to use when placing Place Bets, facilitating clear communication with dealers."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "How Do You Bet a Place Bet for the Dealers in a Craps Game?",
          "description": "Guidance on placing Place Bets for the dealers, including how these bets are identified and paid out."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/place-bet-basics/place-bets_640x360.webp",
      "caption": "Overhead view of the right side of the Craps table layout. You can see all six place bets boxes."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/place-bet-basics/how-to-bet-place-bets_640x360.webp",
      "caption": "Multiple sets of bets sitting in the come. The puck is on the point nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/place-bet-basics/not-behind-boxes_640x360.webp",
      "caption": "A bunch of splashed cheques behind the boxes with a red 'do not' circle around them and a red x. There is another pile of cheques in the COME with a green circle around them and a green checkmark."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/place-bet-basics/placement-of-a-place-bet_640x360.webp",
      "caption": "Overhead view of Craps table with the numbers one through eighteen evenly distributed on the rail. The six and eight on the layout are zoomed in on and the numbers one through eighteen are evenly distributed on the six and eight."
    }
  ]
}<\/script><!-- HEAD_svelte-11xzokh_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Place Bets",
          title: "Betting Place Bets in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-6fhpqh">Place Bets take a minute to learn but a lifetime to master. They&#39;re straightforward. You bet
				them when the Puck is ON, and you get paid every time that number rolls.</p> <p class="pb-4" data-svelte-h="svelte-yewvxb">The cool thing about Place Bets is they can win over and over again really quickly. You
				could also take one bet and turn it into a dozen bets in a matter of minutes. You could roll
				the dice for an hour, hitting only a few points in that time. The rest of that time... Place
				Bets.</p> <p class="pb-4" data-svelte-h="svelte-rqvdc4">There are six different Place Bets: 4, 5, 6, 8, 9, and 10. A Place Bet wins if it rolls
				before the 7 and loses if the 7 rolls first. So you know, you&#39;re allowed to add and remove
				from your Place Bets as much money as you want at any time.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/place-bets_640x360.webp",
                mdImg: "/images/" + url + "/place-bets_960x540.webp",
                lgImg: "/images/" + url + "/place-bets_1280x720.webp",
                title: "Place Bets",
                alt: "Overhead view of the right side of the Craps table layout. There are no cheques on the table. You can see all six place bets boxes."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingPlaceBets",
          title: "How Do You Bet Place Bets in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">After the Point is established, it&#39;s time to make some Place Bets. Put your money in the
				COME, then tell the dealers which bets you&#39;d like to make. Make sure the dealer repeats your
				bet. If they don&#39;t, repeat it until they do because if you place a bet in the COME without
				saying anything to the dealers, it&#39;s considered a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bet",
                href: "come-bet-basics"
              },
              {},
              {}
            )}.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/how-to-bet-place-bets_640x360.webp",
                mdImg: "/images/" + url + "/how-to-bet-place-bets_960x540.webp",
                lgImg: "/images/" + url + "/how-to-bet-place-bets_1280x720.webp",
                title: "How to Bet Place Bets",
                alt: "Multiple sets of bets sitting in the come. The puck is on the point nine."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "badPlaceBetting",
          title: "Where Not to Put Your Money on a Craps Table"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1jwwu6h">Some people think it&#39;s easier to throw cheques at the dealer than to place them in the COME.</p> ${validate_component(Content_ul_b, "ContentUlb").$$render($$result, { liBs }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/not-behind-boxes_640x360.webp",
                mdImg: "/images/" + url + "/not-behind-boxes_960x540.webp",
                lgImg: "/images/" + url + "/not-behind-boxes_1280x720.webp",
                title: "Where Not to Bet",
                alt: "A bunch of splashed cheques behind the boxes with a red 'do not' circle around them and a red x. There is another pile of cheques in the COME with a green circle around them and a green checkmark."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "placePlacement",
          title: "Where Are Your Place Bets on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1aysxh2">Understanding where your Bets are on the table will help you enjoy Craps a lot more. It&#39;s
				like a large horseshoe on each side of the table. A spot in the rail corresponds with a spot
				on the layout. Each player has a spot for their Place Bets, so every dealer knows which bets
				belong to whom. There are four spots in front and four spots behind it to represent eight
				possible players on each side.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-a-place-bet_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-place-bet_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-place-bet_1280x720.webp",
                title: "Placement of a Place Bet",
                alt: "Overhead view of Craps table with the numbers one through eighteen evenly distributed on the rail. The six and eight on the layout are zoomed in on and the numbers one through eighteen are evenly distributed on the six and eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "placePayment",
          title: "What Does a Place Bet Pay in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-11rf6fk">Like many other bets on the table, you must bet Place Bets in certain increments, and they
				pay differently depending on which number you&#39;re betting.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Place Bets Pay 7:6 on the 6 and 8"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-ozkh5i">Every $6 you bet wins $7 on the 6 or 8, so you must bet in increments of $6 such as $12,
					$18, or $30.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "/images/" + url + "/place-pay-6-8_640x360.webp",
                      mdImg: "/images/" + url + "/place-pay-6-8_960x540.webp",
                      lgImg: "/images/" + url + "/place-pay-6-8_1280x720.webp",
                      title: "Place Payment on the 6 or 8",
                      alt: "$6 place bet on the six with a $7 payment sitting in the COME."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Place Bets Pay 7:5 on the 5 and 9"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-fe0tz3">Every $5 you bet wins $7 on the 5 or 9, so any increment of $5 is good.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "/images/" + url + "/place-pay-5-9_640x360.webp",
                      mdImg: "/images/" + url + "/place-pay-5-9_960x540.webp",
                      lgImg: "/images/" + url + "/place-pay-5-9_1280x720.webp",
                      title: "Place Payment on the 5 or 9",
                      alt: "$5 place bet on the five with a $7 payment sitting in the COME."
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "Place Bets Pay 9:5 on the 4 and 10"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-bea8xp">Every $5 you bet wins $9 on the 4 or 10, so increments of $5 are good.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "",
                      smImg: "/images/" + url + "/place-pay-4-10_640x360.webp",
                      mdImg: "/images/" + url + "/place-pay-4-10_960x540.webp",
                      lgImg: "/images/" + url + "/place-pay-4-10_1280x720.webp",
                      title: "Place Payment on the 4 or 10",
                      alt: "$5 place bet on the four with a $9 payment sitting in the COME."
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
          aria: "Place bet payment calculators",
          id: "placePaymentCalcs"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for the six different Place Bets.",
                title: "Place Bet Payment Calculators"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculatePlaceSixEight,
                      id: "place_six_eight_pymnt_calc",
                      pId: "place_six_eight_calc_result",
                      placeholder: "$6 minimum",
                      step: 6,
                      title: "Amount to Place on the 6 or 8:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      id: "place_five_nine_pymnt_calc",
                      calculate: calculatePlaceFiveNine,
                      pId: "place_five_nine_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Amount to Place on the 5 or 9:"
                    },
                    {},
                    {}
                  )} ${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculatePlaceFourTen,
                      id: "place_four_ten_pymnt_calc",
                      pId: "place_four_ten_calc_result",
                      placeholder: "$5 minimum",
                      step: 5,
                      title: "Amount to Place on the 4 or 10:"
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
          id: "placeBetTerms",
          title: "What Are Proper Terms for Betting Place Bets?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "Place" }, {}, {})} - When you bet a Place Bet, you tell the Base Dealer to ${validate_component(Quote, "Quote").$$render($$result, { text: "place" }, {}, {})} that number. For example, if you want to bet $10 on the 5, you drop $10 on the table and say,
				${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "I would like to\n			place the 5 for ten dollars."
              },
              {},
              {}
            )} The dealer should repeat ${validate_component(Quote, "Quote").$$render($$result, { text: "Ten dollar 5." }, {}, {})}</p> <p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "Each" }, {}, {})} - The term ${validate_component(Quote, "Quote").$$render($$result, { text: "each" }, {}, {})} is used when you bet the same amount on
				two numbers. Only use it when you&#39;re betting two Place Bets that could be the same amount. 6
				and 8 are bet in $6 increments. If you wanted $6 on both the 6 and 8, you would say, ${validate_component(Quote, "Quote").$$render($$result, { text: "Six each six and eight.\n			" }, {}, {})}The 4, 5, 9, and 10 are all bet in $5 increments. If you wanted $10 on both the 4 and 10,
				you would tell the dealer, ${validate_component(Quote, "Quote").$$render($$result, { text: "Ten each four and ten." }, {}, {})}</p> <p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "Buy" }, {}, {})} - When you use the term ${validate_component(Quote, "Quote").$$render($$result, { text: "buy" }, {}, {})}, you are betting a Place
				bet that is being paid True Odds. A commission is involved and is usually paid when you make
				the bet, although some casinos will charge the commission only after the bet has won.</p> <p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "Across" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "Inside" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "Outside" }, {}, {})} - These terms are
				used when you&#39;re betting three or more numbers at the same time. When using these terms, you
				do not include the point. These are known as ${validate_component(Link, "Link").$$render($$result, { text: "Spread Bets", href: "spread-bets" }, {}, {})}.</p> <p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "... Including the Point" }, {}, {})} - This is used when you are betting a Place Bet that
				is also the Point. People who use this usually won&#39;t be betting the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}, which is why they are Including the Point as part of their Place Bets. These are also
				Spread Bets.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "dealerPlaceBets",
          title: "How Do You Bet a Place Bet for the Dealers in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-f588ay">Dealer Place Bets are encouraged! The dealer will put that bet in the middle of the number
				representing that it is a bet for the dealer. The amount that gets paid differs from point
				to point and from casino to casino but I move the decimal over and pay it as a Place Bet.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Dealer Place Bets on 6 & 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-15vlg4r">Let&#39;s say you have $3 on the 6 for the dealers. The $3 dealer bet pays $3.60, which gets
					rounded up to $4. The $4 is added to the original $3 bet for one total of $7 to drop for
					the dealers, and the bet comes down.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/dealer-place-bet-6-8_640x360.webp",
                    mdImg: "/images/" + url + "/dealer-place-bet-6-8_960x540.webp",
                    lgImg: "/images/" + url + "/dealer-place-bet-6-8_1280x720.webp",
                    title: "Dealer Place Bet on the 8",
                    alt: "$6 sitting in the middle of the point eight."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Dealer Place Bets on 5 & 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1oasqan">If you bet $4 for the dealers on the 5 or 9, the $4 dealer bet pays $5.60, which gets
					rounded up to $6. The $6 is added to the original $4 bet for one total of $10 to drop
					for the dealers, and the bet comes down. Thank you!</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/dealer-place-bet-5-9_640x360.webp",
                    mdImg: "/images/" + url + "/dealer-place-bet-5-9_960x540.webp",
                    lgImg: "/images/" + url + "/dealer-place-bet-5-9_1280x720.webp",
                    title: "Dealer Place Bet on the 9",
                    alt: "$2 in the middle of the point nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Dealer Place Bets on 4 & 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1md09a3">A $1 bet on a 4 or 10 for the dealers pays $1.80, which gets rounded up to $2. The $2 is
					added to the original $1 bet for one total of $3 to drop for the dealers, and the bet
					comes down!</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/dealer-place-bet-4-10_640x360.webp",
                    mdImg: "/images/" + url + "/dealer-place-bet-4-10_960x540.webp",
                    lgImg: "/images/" + url + "/dealer-place-bet-4-10_1280x720.webp",
                    title: "Dealer Place Bet on the 10",
                    alt: "$4 in the middle of the point ten."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )}</main> ${validate_component(PrevNext2, "PrevNext2").$$render($$result, { phref, prev, nhref, next }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
