import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { c as calculateAnyCraps, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting the Any Craps in Craps";
let description = "The Any Craps is also more of a hedge bet. You can use it to hedge the Pass Line during the Comeout Roll or while making a Come bet. It's similar to a Three Way Craps because they both bet the Aces, Ace Deuce, and Twelve.";
let url = "any-craps";
let phref = "any-seven";
let prev = "Any Seven";
let nhref = "the-field";
let next = "The Field";
let tblAria = "Any Craps payout table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Any Craps Placement ",
      href: "#anyCrapsPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Any Craps Payment",
      href: "#anyCrapsPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Any Craps Payment Calculator",
      href: "#anyCrapsCalc",
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
  let tblRows = [["Any Craps", "7:1", "2, 3, 12", "Any other number"]];
  let tblPnts = ["The Any Craps is a one-roll bet"];
  return `${$$result.head += `<!-- HEAD_svelte-1nqfjsm_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-r83dcz">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Any Craps in Craps",
  "description": "A comprehensive guide on betting the Any Craps in a Craps game, explaining its usage, differences from Three Way Craps, and its placement and payment on the Craps table.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/any-craps",
  "image": "http://parlaynation.com/images/any-craps/any-craps-header.webp",
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
    "@id": "http://parlaynation.com/any-craps"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Information on the Any Craps bet in Craps games, including how it's used to hedge bets, its similarities and differences from Three Way Craps, and its payout structure.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting the Any Craps",
          "description": "An overview of the Any Craps bet, a one-roll bet used to hedge other bets in Craps games."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Where Is Your Any Craps on the Craps Table?",
          "description": "Details the placement of the Any Craps bet on the Craps table, highlighting its location in the middle of the table."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Does the Any Craps Pay in a Craps Game?",
          "description": "Explains the payout for the Any Craps bet, which pays 7:1."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/any-craps_640x360.webp",
      "caption": "Overhead up close view of the any Craps area on the Craps layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/placement-of-the-any-craps_640x360.webp",
      "caption": "Up close view of the any Craps bar and the Craps rail, showing color-coordinated spots on the bet and rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-craps/what-does-the-any-craps-pay_640x360.webp",
      "caption": "$3 on the any Craps with two green dice reading 1-3 and a bubble indicating a $21 payment."
    }
  ]
}<\/script><!-- HEAD_svelte-1nqfjsm_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Any Craps in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Any Craps is a one-roll bet and mainly used to hedge bets. You can use it to hedge the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass\n		Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} during the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})} or while making a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bet",
                href: "come-bet-basics"
              },
              {},
              {}
            )}. It&#39;s similar to a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Three Way Craps",
                href: "multi-bets"
              },
              {},
              {}
            )} because they both bet
				the Aces, Ace Deuce, and Twelve.</p> <p class="pb-4" data-svelte-h="svelte-14ydptb">The difference in the Any Craps and Three Way Craps is they pay differently based on what
				rolls. The Three Way pays different based on which number rolls. The Any Craps pays the same
				regardless of which rolls.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/any-craps_640x360.webp",
                mdImg: "src/images/" + url + "/any-craps_960x540.webp",
                lgImg: "src/images/" + url + "/any-craps_1280x720.webp",
                title: "The Any Craps",
                alt: "Overhead up close view of the any Craps area on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "anyCrapsPlacement",
          title: "Where Is Your Any Craps on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Just like the placement of the ${validate_component(Link, "Link").$$render($$result, { text: "Any Seven", href: "any-seven" }, {}, {})}, The Any Craps is a
				bar in the middle of the table. The center of the bar is the middle of the table and the
				edges of the bar are the two bases. Everything in between the center and the edge is a
				different spot on the table.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-the-any-craps_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-the-any-craps_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-the-any-craps_1280x720.webp",
                title: "Placement of the Any Craps",
                alt: "Up close view of the any Craps bar and the Craps rail. There are eight spots that are color coordinated on the bet and the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "anyCrapsPayment",
          title: "What Does the Any Craps Pay in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-8eosxo">The Any Craps pays 7:1 or $7 for every $1.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/what-does-the-any-craps-pay_640x360.webp",
                mdImg: "src/images/" + url + "/what-does-the-any-craps-pay_960x540.webp",
                lgImg: "src/images/" + url + "/what-does-the-any-craps-pay_1280x720.webp",
                title: "Any Craps Payment",
                alt: "$3 on the any Craps with two green dice that read 1-3. There is a bubble that reads $21 payment."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Any Craps payment calculator",
          id: "anyCrapsCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for an Any Craps bet.",
                title: "Any Craps Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateAnyCraps,
                      id: "any_craps_pymnt_calc",
                      pId: "any_craps_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Any Craps Amount:"
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
