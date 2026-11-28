import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { E as calculateHorn, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput2 } from "../../../chunks/CalcInput2.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting the Horn in Craps";
let description = "A Horn is an equal amount bet on each the Aces, Ace Deuce, Yo, and Twelve. You must bet it in increments of four dollars and is a one-roll bet.";
let url = "horn";
let phref = "multi-bets";
let prev = "Multi-Bets";
let nhref = "horn-high";
let next = "Horn High";
let tblAria = "Horn Payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "A $4 Horn",
      href: "#fourHorn",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn Placement",
      href: "#hornPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn Payment",
      href: "#hornPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Horn Calculator",
      href: "#hornCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer Horn",
      href: "#dealerHorn",
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
  let tblHeaders = ["Roll", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["High Side", "27:4", "2 or 12", "Any other number"],
    ["Low Side", "3x the bet", "3 or 11", "Any other number"]
  ];
  let tblPnts = ["The Horn is a one-roll bet", "Horns must be bet in multiples of $4."];
  return `${$$result.head += `<!-- HEAD_svelte-hc9wwe_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1432eob">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Horn in Craps",
  "description": "An in-depth guide to understanding the Horn bet in Craps, a convenient proposition bet that covers four specific numbers. Learn how to place this bet, its payout structure, and tips for betting the Horn for the dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/horn",
  "image": "http://parlaynation.com/images/horn/horn-header.webp",
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
    "@id": "http://parlaynation.com/horn"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding the Horn Bet",
      "description": "A comprehensive guide to the Horn bet in Craps, including the basics of placing the bet, payout details, and how to bet the Horn for the dealers.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "$4 Horn Explanation",
          "description": "Detailed explanation of a $4 Horn bet and its comparison to the C & E bet."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Horn Bet Placement",
          "description": "Information on where Horn bets are placed on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Horn Bet Payouts",
          "description": "A breakdown of Horn bet payouts for high and low side hits."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Betting the Horn for Dealers",
          "description": "How to place a Horn bet for the table's dealers."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn/horn_640x360.webp",
      "caption": "Up close overhead view of the horn bet on the Craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn/4-horn_640x360.webp",
      "caption": "An image split with $4 on the Horn on one side, and $1 each on the aces, ace deuce, yo, twelve on the other."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn/placement-of-a-horn_640x360.webp",
      "caption": "Up close image of the horn bet and the Craps rail. There are eight colored spots corresponding to the horn and the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/horn/betting-a-horn-for-the-dealers_640x360.webp",
      "caption": "$4 sitting in the middle of the horn for the dealers."
    }
  ]
}<\/script><!-- HEAD_svelte-hc9wwe_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Horn in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Craps has a bet that easily lets you bet all four ${validate_component(Link, "Link").$$render($$result, { text: "Straight Up", href: "straight-up" }, {}, {})}
				bets simultaneously called the Horn. You must bet an equal amount on each of the four Straight
				Up bets, so you make your Horn bets in $4 increments.</p> <p class="pb-4">The Horn makes betting Proposition Bets easier. Not only does it wrap up four bets in one,
				but it&#39;s also the basis to the ${validate_component(Link, "Link").$$render($$result, { text: "Horn Highs", href: "horn-high" }, {}, {})}, which
				conveniently let you bet in five-dollar increments.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/horn_640x360.webp",
                mdImg: "/images/" + url + "/horn_960x540.webp",
                lgImg: "/images/" + url + "/horn_1280x720.webp",
                title: "The Horn",
                alt: "Up close overhead view of the horn bet on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fourHorn",
          title: "What Is a $4 Horn in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">A $4 Horn is the minimum bet for a Horn. It&#39;s $1 on each of the four ${validate_component(Link, "Link").$$render($$result, { text: "Straight Up", href: "straight-up" }, {}, {})} bets: the Aces, Ace Deuce, Yo, and Twelve. The $4 Horn offers better payouts than the ${validate_component(Link, "Link").$$render($$result, { text: "C & E", href: "c-and-e" }, {}, {})} which also bets all of the Straight Up numbers but only has a $2 minimum.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/4-horn_640x360.webp",
                mdImg: "/images/" + url + "/4-horn_960x540.webp",
                lgImg: "/images/" + url + "/4-horn_1280x720.webp",
                title: "$4 Horn",
                alt: "An image split with $4 on the Horn on one side, and $1 each on the aces, ace deuce, yo, twelve on the other."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hornPlacement",
          title: "Where Is Your Horn on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1i7y6fw">Like most other bets on the Craps table, the Horn bet is divided into two sides: the left
				and right sides of the table. There isn&#39;t enough space for 16 players in the box, and you
				normally won&#39;t see more than a few people betting the Horn at once anyway, so four spots on
				each side are good enough.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-a-horn_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-horn_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-horn_1280x720.webp",
                title: "Placement of a Horn",
                alt: "Up close image of the horn bet and the Craps rail. There are eight colored spots corresponding to the horn and the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "hornPayment",
          title: "What Does the Horn Pay in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1xxekp5">A Horn pays differently based on what rolls, a high number, which would be the Aces and the
				Twelve, or a low number, which would be the Ace Deuce and the Yo.</p> <p class="pb-4" data-svelte-h="svelte-1ifvkzs">No matter which of the four bets hit, you always take what the winning bet paid and subtract
				the rest of the losers in order to keep the whole bet up to win again.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "$4 Horn Pays $12 or $27" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-nrvfz0">If either low side hits, the Ace Deuce or Yo, it would win $15 but then you would subtract
					the other three losers and it would pay $12. Likewise if the high side hits, the Aces or
					Twelve, it would win $30 but then you would subtract the other three losers and it would
					pay $27.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$4 Horn on the Low Side Pays $12",
                    smImg: "/images/" + url + "/4-winner-low-side_640x360.webp",
                    mdImg: "/images/" + url + "/4-winner-low-side_960x540.webp",
                    lgImg: "/images/" + url + "/4-winner-low-side_1280x720.webp",
                    title: "$4 Horn on the Low Side",
                    alt: "$1 on each the horn numbers. Two green dice read 1-2. A bubble reads $12 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$4 Horn on the High Side Pays $27",
                    smImg: "/images/" + url + "/4-winner-high-side_640x360.webp",
                    mdImg: "/images/" + url + "/4-winner-high-side_960x540.webp",
                    lgImg: "/images/" + url + "/4-winner-high-side_1280x720.webp",
                    title: "$4 Horn on the High Side",
                    alt: "$1 on each the horn numbers. Two green dice read 6-6. A bubble reads $27 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Low Side Pays 3x the Bet" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1wghn3o">When you&#39;re betting a Horn and a low number rolls, the Ace Deuce or the Yo, the payment is
					to multiply the bet by three.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$8 Horn on Low Side Pays $24",
                    smImg: "/images/" + url + "/8-horn-low-side_640x360.webp",
                    mdImg: "/images/" + url + "/8-horn-low-side_960x540.webp",
                    lgImg: "/images/" + url + "/8-horn-low-side_1280x720.webp",
                    title: "$8 Horn Low Side Payment",
                    alt: "$8 on the horn with a bubble that reads $24 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$24 Horn on Low Side Pays $72",
                    smImg: "/images/" + url + "/24-horn-low-side_640x360.webp",
                    mdImg: "/images/" + url + "/24-horn-low-side_960x540.webp",
                    lgImg: "/images/" + url + "/24-horn-low-side_1280x720.webp",
                    title: "$24 Horn Low Side Payment",
                    alt: "$24 on the horn with a bubble that reads $72 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
              $$result,
              {
                title: "High Side Pays 7x minus 1/4 of the Bet"
              },
              {},
              {
                default: () => {
                  return `<p class="pb-4" data-svelte-h="svelte-r7ox4u">When the Horn hits on the high side, the Aces or the Twelve, the payment is a bit more
					confusing. The first way I learned to pay the high side of the Horn was to multiply the
					bet by 7 then subtract ¼ of the bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$8 Horn on High Side Pays $54",
                      smImg: "/images/" + url + "/8-horn-high-side-a_640x360.webp",
                      mdImg: "/images/" + url + "/8-horn-high-side-a_960x540.webp",
                      lgImg: "/images/" + url + "/8-horn-high-side-a_1280x720.webp",
                      title: "$8 Horn High Side Payment",
                      alt: "$8 on the Horn. A bubble reads $54 payment."
                    },
                    {},
                    {}
                  )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                    $$result,
                    {
                      caption: "$24 Horn High Side Pays $162",
                      smImg: "/images/" + url + "/24-horn-high-side-a_640x360.webp",
                      mdImg: "/images/" + url + "/24-horn-high-side-a_960x540.webp",
                      lgImg: "/images/" + url + "/24-horn-high-side-a_1280x720.webp",
                      title: "$24 Horn High Side Payment",
                      alt: "$24 on the Horn. A bubble reads $162 payment."
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
          aria: "Horn payment calculator",
          id: "hornCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a bet made on the Horn.",
                title: "Horn Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput2, "CalcInput2").$$render(
                    $$result,
                    {
                      calculate: calculateHorn,
                      id: "horn_pymnt_calc",
                      pId: "horn_calc_result",
                      placeholder: "$4 minimum",
                      rollValues: [2, 3, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                      step: 4,
                      title: "Enter amount on the Horn:"
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
          id: "dealerHorn",
          title: "How Can You Bet the Horn for the Dealers on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When a bet on the Horn comes in for the dealers it is placed in the middle of the Horn area.
				While a proper $4 would be best, any amount put on the Horn for the dealers is appreciated.
				A good easy way to bet for the dealers on the Horn is to throw in a nickel and say ${validate_component(Quote, "Quote").$$render($$result, { text: "Two-way Horn!" }, {}, {})}. That will give you a $4 Horn and $1 for the dealers.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/betting-a-horn-for-the-dealers_640x360.webp",
                mdImg: "/images/" + url + "/betting-a-horn-for-the-dealers_960x540.webp",
                lgImg: "/images/" + url + "/betting-a-horn-for-the-dealers_1280x720.webp",
                title: "Betting a Horn for the Dealers",
                alt: "$4 sitting in the middle of the horn."
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
