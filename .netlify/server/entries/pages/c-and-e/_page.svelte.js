import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { d as calculateCAndESplit, e as calculateCAndE, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput2 } from "../../../chunks/CalcInput2.js";
import { C as CalcInput3 } from "../../../chunks/CalcInput3.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
let title = "Betting the C & E in Craps";
let description = "The C &amp; E is a combination of two bets. The “C” stands for the Any Craps, which is the Aces, Ace Deuce, and the 12. The “E” stands for the Eleven, or “Yo”. The C &amp; E has a two-dollar minimum.";
let url = "c-and-e";
let phref = "straight-up";
let prev = "Straight Up";
let nhref = "any-seven";
let next = "Any Seven";
let tblAria = "C & E bet separately pay table";
let tblAria2 = "C & E bet split pay table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Placement of a C & E",
      href: "#cAndEPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Payments of a C & E",
      href: "#cAndEPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "C & E Split Calculator",
      href: "#cAndESplitCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "C & E Calculator",
      href: "#cAndECalc",
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
  let tblHeaders = ["Separately", "Pays", "Wins", "Loses"];
  let tblRows = [
    ["C - Any Craps", "7:1", "2, 3, 12", "Any other number"],
    ["E - Eleven", "15:1", "11", "Any other number"]
  ];
  let tblPnts = ["There is a $2 minimum on the C & E"];
  let tblHeaders2 = ["Split", "Pays", "Wins", "Loses"];
  let tblRows2 = [
    ["Craps Roll", "3:1", "2, 3, 12", "Any other number"],
    ["Eleven Rolls", "7:1", "11", "Any other number"]
  ];
  let tblPnts2 = ["C & Es are one-roll bets"];
  return `${$$result.head += `<!-- HEAD_svelte-df7cwu_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1uf0niz">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the C & E in Craps",
  "description": "A guide to understanding and placing the C & E bets in Craps, covering the basics, payment structures, and strategic considerations.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/c-and-e",
  "image": "http://parlaynation.com/images/c-and-e/c-and-e-header.webp",
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
    "@id": "http://parlaynation.com/c-and-e"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding the C & E in Craps",
      "description": "Explains the combination of two bets: the 'C' (Any Craps) and the 'E' (Eleven), including betting strategies and minimum requirements.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Where Is Your C & E on the Craps Table?",
          "description": "Describes the placement of the C & E bets on the Craps table, emphasizing their relative positions to the player's spot."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Does the C & E Pay in a Craps Game?",
          "description": "Details the payout structure for the C & E bet, covering split bets and separate amounts on the C and E."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/c-and-e/c-and-e_640x360.webp",
      "caption": "Overview of the C & E betting area."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/c-and-e/placement-of-c-and-e_640x360.webp",
      "caption": "Visual guide to placing C & E bets on the table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/c-and-e/5-c-and-e-split_640x360.webp",
      "caption": "Example of a $5 C & E split bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/c-and-e/4-c-1-e_640x360.webp",
      "caption": "Illustration of separate amounts on the C and E."
    }
  ]
}<\/script><!-- HEAD_svelte-df7cwu_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the C & E in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The C &amp; E is a combination of two bets. The &#39;C&#39; is the ${validate_component(Link, "Link").$$render($$result, { text: "Any Craps", href: "any-craps" }, {}, {})}: Aces, Ace Deuce, and 12. The &#39;E&#39; stands for Eleven or the Yo. You can bet the C &amp; E as a
				split (both simultaneously) or individually (a different amount on each the C and the E).</p> <p class="pb-4" data-svelte-h="svelte-tgt1d1">The C &amp; E is sort of the poor man&#39;s Horn. It bets all the same numbers but has a different
				pay structure and a $2 minimum; you need at least $1 on the &#39;C&#39; and $1 on the &#39;E&#39;. On the
				Horn, you need to bet $4.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(ContentTable, "ContentTable").$$render(
              $$result,
              {
                tblAria: tblAria2,
                tblHeaders: tblHeaders2,
                tblRows: tblRows2,
                tblPnts: tblPnts2
              },
              {},
              {}
            )} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/c-and-e_640x360.webp",
                mdImg: "/images/" + url + "/c-and-e_960x540.webp",
                lgImg: "/images/" + url + "/c-and-e_1280x720.webp",
                title: "The C & E",
                alt: "Overhead up close view of the c & e betting area."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "cAndEPlacement",
          title: "Where Is Your C & E on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1q0i56u">There are usually enough spots of the C &amp; E for every player on the table. They are also not
				confined to a box so there&#39;s plenty of space to place the bets. Placements of the C &amp; Es
				are relative to your spot on the table.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/placement-of-c-and-e_640x360.webp",
                mdImg: "/images/" + url + "/placement-of-c-and-e_960x540.webp",
                lgImg: "/images/" + url + "/placement-of-c-and-e_1280x720.webp",
                title: "Placement of the C & E",
                alt: "Overhead view up C & E area with arrows pointing to their respective spots in the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "cAndEPayment",
          title: "What Does the C & E Pay in a Craps Game?"
        },
        {},
        {}
      )} <p class="pb-4" data-svelte-h="svelte-1m6wipm">Splitting - There are two payouts possible when splitting the C &amp; E. If any of the Craps roll
			(2, 3, or 12) the payout will be 3x the bet. E.g. a $5 C &amp; E will pay 3 x 5 or $15. If the Yo
			rolls (11) the payout will be 7x the bet.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render(
        $$result,
        {
          title: "Pays 7:1 or 3:1 When it is Split"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$5 C & E Split",
                smImg: "/images/" + url + "/5-c-and-e-split_640x360.webp",
                mdImg: "/images/" + url + "/5-c-and-e-split_960x540.webp",
                lgImg: "/images/" + url + "/5-c-and-e-split_1280x720.webp",
                title: "$5 C & E Split",
                alt: "$5 C & E split with two bubbles. One reads $15 payout. The second reads $35 payout."
              },
              {},
              {}
            )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
              $$result,
              {
                aria: "C & E split calculator",
                id: "cAndESplitCalc"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcBox, "CalcBox").$$render(
                    $$result,
                    {
                      description: "Check the payment for a bet made on the C & E split.",
                      title: "C & E Split Payment Calculator"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CalcInput2, "CalcInput2").$$render(
                          $$result,
                          {
                            calculate: calculateCAndESplit,
                            id: "c_and_e_split_pymnt_calc",
                            pId: "c_and_e_split_calc_result",
                            placeholder: "$2 minimum",
                            rollValues: [2, 3, 11, 12],
                            valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                            step: 2,
                            title: "Enter amount to split:"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render(
        $$result,
        {
          title: "Pays Differently Every Time When You Have Separate Amounts"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "$4C - $1E",
                smImg: "/images/" + url + "/4-c-1-e_640x360.webp",
                mdImg: "/images/" + url + "/4-c-1-e_960x540.webp",
                lgImg: "/images/" + url + "/4-c-1-e_1280x720.webp",
                title: "$4C and $1E",
                alt: "$4 on the Any Craps and $1 on the yo. Two bubbles: one reads $27 payment and the other $11 payment."
              },
              {},
              {}
            )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
              $$result,
              {
                aria: "C & E separated calculators",
                id: "cAndECalc"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcBox, "CalcBox").$$render(
                    $$result,
                    {
                      description: "Check the payment for the C & E when you only bet the C, when you only bet the E, or you bet them together.",
                      title: "C & E Payment Calculator"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(CalcInput3, "CalcInput3").$$render(
                          $$result,
                          {
                            calculate: calculateCAndE,
                            id: "c_and_e_split_pymnt_calc",
                            idTwo: "c_and_e_pymnt_calc",
                            pId: "c_and_e_calc_result",
                            placeholder: "$1 minimum",
                            placeholderTwo: "$1 minimum",
                            rollValues: [2, 3, 11, 12],
                            valueTitles: ["Aces", "Ace Deuce", "Eleven", "Twelve"],
                            step: 1,
                            title: "Enter amount for the C (Any Craps):",
                            titleTwo: "Enter amount for the E (Eleven):"
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
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
