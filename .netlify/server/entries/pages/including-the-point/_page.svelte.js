import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { a as Content_h2, C as Content_img } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting Including the Point at the Craps Table";
let description = "When you bet Including the Point you are betting a spread bet that includes the point. You can bet Across, Inside, Outside, Uptown, or Downtown Including the Point.";
let url = "including-the-point";
let phref = "even-numbers";
let prev = "Even Numbers";
let nhref = "proposition-bets";
let next = "Proposition Bets";
let tblAria = "Including the point betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Across Including the Point",
      href: "#bettingAcrossIncluding",
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
  let tblHeaders = ["The Spread", "Total Bet"];
  let tblRows = [
    ["*One Unit: $5/number", "$32 Across Including"],
    ["Two Units: $10/number", "$44 Inside Including"],
    ["Three Units: $15/number", "$60 Outside Including"],
    ["*One Unit: $25/number", "$162 Across Including"],
    ["Two Units: $50/number", "$220 Inside Including"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-pbl985_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1129ex2">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Including the Point at the Craps Table",
  "description": "Learn how to include the point in your spread bets at the Craps table, enhancing your betting strategy and understanding of how to bet across including the point.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/including-the-point",
  "image": "http://parlaynation.com/images/including-the-point/including-the-point-header.webp",
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
    "@id": "http://parlaynation.com/including-the-point"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Betting Strategies Including the Point",
      "description": "An in-depth look at how betting including the point can impact your Craps strategy, with examples of betting across including the point.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Across Including the Point",
          "description": "Detailed explanation on how to bet across including the point in Craps, with examples for different betting amounts."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/including-the-point/32-across-including-the-point_640x360.webp",
      "caption": "Betting $32 Across Including the Point."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/including-the-point/162-across-including-the-point_640x360.webp",
      "caption": "Betting $162 Across Including the Point."
    }
  ]
}<\/script><!-- HEAD_svelte-pbl985_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Including the Point at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When players bet Including the Point they are usually not on the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} which is why they include the Point. You bet them like you would bet any other ${validate_component(Link, "Link").$$render($$result, { text: "Spread Bet", href: "spread-bets" }, {}, {})} but add ${validate_component(Quote, "Quote").$$render($$result, { text: "… including the point." }, {}, {})} to the end of their Spread Bet.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingAcross",
          title: "How Do You Bet Across Including the Point in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-jvz7ag">Across Including the Point is betting all the Place Bet numbers including the Point. E.g.
				$64 Across would be $10 on the 4, $10 on the 5, $12 on the 6, $12 on the 8, $10 on the 9,
				and $10 on the 10 — $10 + $10 + $12 + $12 + $10 + $10 = $64.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/32-across-including-the-point_640x360.webp",
                mdImg: "/images/" + url + "/32-across-including-the-point_960x540.webp",
                lgImg: "/images/" + url + "/32-across-including-the-point_1280x720.webp",
                title: "Betting $32 Across",
                alt: "Betting $32 Across Including the Point"
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/162-across-including-the-point_640x360.webp",
                mdImg: "/images/" + url + "/162-across-including-the-point_960x540.webp",
                lgImg: "/images/" + url + "/162-across-including-the-point_1280x720.webp",
                title: "Betting $162 Across Including the Point",
                alt: "Betting $162 Across Including the Point"
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
