import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { a as calculateAnySeven, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting the Any Seven in Craps";
let description = "The Any Seven is a one-roll bet Don't players use to hedge or invoke the seven. Add it to the Horn to make a World, or bet it during the Comeout Roll and win twice on the Pass Line.";
let url = "any-seven";
let phref = "c-and-e";
let prev = "C & E";
let nhref = "any-craps";
let next = "Any Craps";
let tblAria = "The Any Seven payout table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Any Seven Placement",
      href: "#anySevenPlacement",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Any Seven Payment",
      href: "#anySevenPayment",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Any Seven Payment Calculator",
      href: "#anySevenCalc",
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
  let tblRows = [["Any Seven", "4:1", "7", "Any other number"]];
  let tblPnts = ["The Any Seven is a one-roll bet"];
  return `${$$result.head += `<!-- HEAD_svelte-1f2dz56_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-olmgkf">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting the Any Seven in Craps",
  "description": "An overview of the Any Seven bet in Craps, including strategies for hedging, incorporation into other bets, and its placement and payout on the Craps table.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/any-seven",
  "image": "http://parlaynation.com/images/any-seven/any-seven-header.webp",
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
    "@id": "http://parlaynation.com/any-seven"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding the Any Seven Bet",
      "description": "Details the Any Seven bet in Craps, its strategic uses, and how it's integrated with other bets like the Horn and the World.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Where Is Your Any Seven on the Craps Table?",
          "description": "Explains the placement of the Any Seven bet on the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Does the Any Seven Pay in a Craps Game?",
          "description": "Details the payout for the Any Seven bet, which is 4:1."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/any-seven_640x360.webp",
      "caption": "Visual representation of the Any Seven bet area on the Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/placement-of-the-any-seven_640x360.webp",
      "caption": "Detailed view of the Any Seven bet placement relative to player positions."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/any-seven/what-does-the-any-seven-pay_640x360.webp",
      "caption": "Example of a $4 Any Seven bet and its $16 payout."
    }
  ]
}<\/script><!-- HEAD_svelte-1f2dz56_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting the Any Seven in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Any Seven is a one-roll bet and could be used any number of ways. Many of the Don&#39;t players
				use it to hedge or invoke the seven. You can add it to the ${validate_component(Link, "Link").$$render($$result, { text: "Horn", href: "horn" }, {}, {})}
				to make a ${validate_component(Link, "Link").$$render($$result, { text: "World", href: "the-world" }, {}, {})} or many players bet it during the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})} so they could win twice if they are on the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/any-seven_640x360.webp",
                mdImg: "src/images/" + url + "/any-seven_960x540.webp",
                lgImg: "src/images/" + url + "/any-seven_1280x720.webp",
                title: "The Any Seven",
                alt: "Overhead up close view of the any seven area on the Craps layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "anySevenPlacement",
          title: "Where Is Your Any Seven on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-weiqir">The Any Seven is a bar across the middle of the table. The bar is split into a left and right
				side of the table with the center of the bar is the middle of the table and the edges of the
				bar are the two bases.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/placement-of-the-any-seven_640x360.webp",
                mdImg: "src/images/" + url + "/placement-of-the-any-seven_960x540.webp",
                lgImg: "src/images/" + url + "/placement-of-the-any-seven_1280x720.webp",
                title: "Placement of the Any Seven",
                alt: "Up close view of the any seven bar and the Craps rail. There are eight spots that are color coordinated on the bet and the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "anySevenPayment",
          title: "What Does the Any Seven Pay in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-mknvxo">The Any Seven pays 4:1 or $4 for every $1.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/what-does-the-any-seven-pay_640x360.webp",
                mdImg: "src/images/" + url + "/what-does-the-any-seven-pay_960x540.webp",
                lgImg: "src/images/" + url + "/what-does-the-any-seven-pay_1280x720.webp",
                title: "What Does the Any Seven Pay",
                alt: "$4 on the any seven with two green dice that read 1-6. There is a bubble that reads $16 payment."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
        $$result,
        {
          aria: "Any seven payment calculator",
          id: "anySevenCalc"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcBox, "CalcBox").$$render(
              $$result,
              {
                description: "Check the payment for an Any Seven bet.",
                title: "Any Seven Payment Calculator"
              },
              {},
              {
                default: () => {
                  return `${validate_component(CalcInput, "CalcInput").$$render(
                    $$result,
                    {
                      calculate: calculateAnySeven,
                      id: "any_seven_pymnt_calc",
                      pId: "any_seven_calc_result",
                      placeholder: "$1 minimum",
                      step: 1,
                      title: "Enter Any Seven Amount:"
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
