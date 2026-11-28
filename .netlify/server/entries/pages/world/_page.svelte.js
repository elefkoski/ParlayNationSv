import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { J as calculateWorld, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput2 } from "../../../chunks/CalcInput2.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting the World in Craps";
let description = "The World is a Horn with extra on the Any Seven. You must make this bet in increments of five and is a one-roll bet. When 7 rolls the bet is a push.";
let url = "world";
let phref = "horn-high";
let prev = "Horn High";
let nhref = "hop-bets";
let next = "Hop Bets";
let tblAria = "World payment table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "$5 World Bet",
      href: "#fiveWorld",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "World Placement",
      href: "#worldPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "World Payment",
      href: "#worldPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "World Calculator",
      href: "#worldCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Dealer World",
      href: "#dealerWorld",
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
    ["High Side", "26:5", "2 or 12", "Any other number"],
    ["Low Side", "11:5", "3 or 11", "Any other number"]
  ];
  let tblPnts = ["The World is a one-roll bet"];
  return `${$$result.head += `<!-- HEAD_svelte-1hq2q1b_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1gevmag">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the World in Craps",
  "description": "An exploration of the World bet in Craps, including how to make the bet, its placement on the table, payout details, and tips for betting the World for dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/world",
  "image": "http://parlaynation.com/images/world/world-header.webp",
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
    "@id": "http://parlaynation.com/world"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Details on the World bet in Craps, a combination of a Horn and Any Seven bet, its strategic placement, and its unique payout structure.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is a $5 World in Craps?",
          "description": "Describes the composition of a $5 World bet and its requirement to be bet in increments of five."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Is Your World on the Craps Table?",
          "description": "Explains the typical absence of a World image on Craps tables and how the bet is recognized by dealers and players."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does a $5 World Pay on the Craps Table?",
          "description": "Outlines the various payouts for the World bet based on the rolled number, including scenarios for when the 7, high side, or low side rolls."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "How Do You Bet the World for the Dealers?",
          "description": "Advises on the preferred multiples of $5 when placing World bets for the dealers to avoid complications."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/world_640x360.webp",
      "caption": "Up close overhead view of the world on the Craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world_640x360.webp",
      "caption": "Split image showing $5 on the world and $1 each on the aces, ace deuce, yo, twelve, and the any seven."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/placement-of-world-a_640x360.webp",
      "caption": "Overhead view of a blown up picture of a world and the Craps table rail with eight colored spots on each that correspond with each other."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/placement-of-a-world-b_640x360.webp",
      "caption": "Overhead view of the center bar above the any seven on the Craps table and the Craps table rail with eight colored spots on each that correspond."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-7-rolls_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-6 and a bubble reading push."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-ace-deuce-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-2 and a bubble reading $11 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-yo-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 5-6 and a bubble reading $11 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-aces-hit_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 1-1 and a bubble reading $26 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/5-world-twelve-hits_640x360.webp",
      "caption": "$1 on each the aces, ace deuce, yo, twelve, and the any seven with two green dice showing 6-6 and a bubble reading $26 payment."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/world/dealer-world_640x360.webp",
      "caption": "Split image showing $1 in the middle of the proposition bar and $1 in the middle of the world for the dealer."
    }
  ]
}<\/script><!-- HEAD_svelte-1hq2q1b_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the World in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">People love to bet the ${validate_component(Link, "Link").$$render($$result, { text: "Horn", href: "horn" }, {}, {})} and the ${validate_component(Link, "Link").$$render($$result, { text: "Horn Highs", href: "horn-high" }, {}, {})} during the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}. It&#39;s a one-roll bet and the
				payoffs can be pretty good but, like most other bets, it falls prey to a roll of the 7. This
				is where the World, aka Whirl, comes into play. The World is a combination of a Horn and an ${validate_component(Link, "Link").$$render($$result, { text: "Any Seven", href: "any-seven" }, {}, {})}.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/world_640x360.webp",
                mdImg: "/images/" + url + "/world_960x540.webp",
                lgImg: "/images/" + url + "/world_1280x720.webp",
                title: "The World",
                alt: "Up close overhead view of the world on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "fiveWorld",
          title: "What Is a $5 World in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1qyzztx">A $5 World is a $1 on each the Aces, Ace Deuce, Yo, Twelve, and the Any Seven. The minimum is
				five dollars because you must put at least $1 on those five bets so the World needs to be
				bet in increments of five. You can also consider a $5 World to be a $4 Horn with $1 on the
				Any Seven.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/5-world_640x360.webp",
                mdImg: "/images/" + url + "/5-world_960x540.webp",
                lgImg: "/images/" + url + "/5-world_1280x720.webp",
                title: "$5 World",
                alt: "Split image. On top is $5 on the world. On bottom is $1 each on the aces, ace deuce, yo, twelve, and the Any Seven."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "worldPlacement",
          title: "Where Is Your World on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-18of9gz">I would say that the majority of Craps tables don&#39;t have a picture of the World on them. The
				World is more of a bet that dealer and players know by heart. Example 2 shows one of the
				other ways I&#39;ve seen a world set up on a table without the globe image.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Placement of World Around Globe",
                smImg: "/images/" + url + "/placement-of-world-a_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-world-a_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-world-a_1280x720.webp",
                title: "Placement of World on Globe",
                alt: "Overhead view of a blown up picture of a world and the Craps table rail. There are eight colored spots on each the world and the rail that correspond with each other."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "Placement of World on Bar",
                smImg: "/images/" + url + "/placement-of-a-world-b_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-a-world-b_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-a-world-b_1280x720.webp",
                title: "Placement of World on Bar",
                alt: "Overhead view of the center bar above the any seven on the Craps table and the Craps table rail. There are eight colored spots on each the bar and the rail that correspond with each other."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "worldPayment",
          title: "What Does a $5 World Pay on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Like all other ${validate_component(Link, "Link").$$render($$result, { text: "Multi-Bets", href: "multi-bets" }, {}, {})}, the World pays differently
				depending on what rolls. There are three options: the 7 rolls, the high side rolls (2, 12),
				or the low side rolls (3, 11).</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Seven Rolls - Push" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-i02swc">When the 7 rolls the World is a push; it does not win or lose. It&#39;s a push because the
					dollar bet on the Any Seven wins four dollars, and that four dollars pays for the rest of
					the losing bets in the World: the Aces, Ace Deuce, Yo and Twelve.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/5-world-7-rolls_640x360.webp",
                    mdImg: "/images/" + url + "/5-world-7-rolls_960x540.webp",
                    lgImg: "/images/" + url + "/5-world-7-rolls_1280x720.webp",
                    title: "$5 World Payment - Seven Rolls",
                    alt: "$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-6. A bubble reads push."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Low Side - $11" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1dqfyym">The Low Side is considered the Ace Deuce or the Yo. When they hit for a dollar they pay
					$15 minus $4 (the rest of the other four losing bets) for a payment of $11.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$5 World - Ace Deuce Rolls",
                    smImg: "/images/" + url + "/5-world-ace-deuce-hits_640x360.webp",
                    mdImg: "/images/" + url + "/5-world-ace-deuce-hits_960x540.webp",
                    lgImg: "/images/" + url + "/5-world-ace-deuce-hits_1280x720.webp",
                    title: "$5 World - Ace Deuce Rolls",
                    alt: "$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-2. A bubble reads $11 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$5 World - Yo Rolls",
                    smImg: "/images/" + url + "/5-world-yo-hits_640x360.webp",
                    mdImg: "/images/" + url + "/5-world-yo-hits_960x540.webp",
                    lgImg: "/images/" + url + "/5-world-yo-hits_1280x720.webp",
                    title: "$5 World - Yo Rolls",
                    alt: "$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 5-6. A bubble reads $11 payment."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "High Side - $26" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1nnj9lz">The two High Side numbers are the Aces and Twelve. When either of these numbers roll they
					pay $30 minus $4 (the rest of the other four losing bets) for a payment of $26.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$5 World - Aces Roll",
                    smImg: "/images/" + url + "/5-world-aces-hit_640x360.webp",
                    mdImg: "/images/" + url + "/5-world-aces-hit_960x540.webp",
                    lgImg: "/images/" + url + "/5-world-aces-hit_1280x720.webp",
                    title: "$5 World - Aces Roll",
                    alt: "$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 1-1. A bubble reads $26 payment."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "$5 World - Twelve Rolls",
                    smImg: "/images/" + url + "/5-world-twelve-hits_640x360.webp",
                    mdImg: "/images/" + url + "/5-world-twelve-hits_960x540.webp",
                    lgImg: "/images/" + url + "/5-world-twelve-hits_1280x720.webp",
                    title: "$5 World - Twelve Rolls",
                    alt: "$1 on each the aces, ace deuce, yo, twelve, and the any seven. Two green dice show 6-6. A bubble reads $26 payment."
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
          aria: "World payment calculator",
          id: "worldCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for a bet made on the World.",
                title: "World Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput2, "CalcInput2").$$render(
                    $$result,
                    {
                      calculate: calculateWorld,
                      id: "world_pymnt_calc",
                      pId: "world_calc_result",
                      placeholder: "$5 minimum",
                      rollValues: [2, 3, 7, 11, 12],
                      valueTitles: ["Aces", "Ace Deuce", "Seven", "Yo", "Twelve"],
                      step: 5,
                      title: "Enter amount on the World:"
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
          id: "dealerWorld",
          title: "How Do You Bet the World for the Dealers?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-17058hl">Ideally, multiples of $5 would be best for the dealers. Anything less would be an improper
				bet that requires some odd math for the dealers and usually ends up getting rounded down.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/dealer-world_640x360.webp",
                mdImg: "/images/" + url + "/dealer-world_960x540.webp",
                lgImg: "/images/" + url + "/dealer-world_1280x720.webp",
                title: "Dealer World",
                alt: "Split image. On left is $1 in the middle of the proposition bar. On bottom is $1 in the middle of the world."
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
