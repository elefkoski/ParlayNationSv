import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
let title = "Betting Uptown/Downtown at the Craps Table";
let description = "Betting Uptown or Downtown is a Spread Bet on the three points on either side of the 7. The Uptown Points are the Eight, Nine, and 10. The Downtown Points are Four, Five, and Six. You bet Uptown and Downtown in the same unit amount.";
let url = "uptown-downtown";
let phref = "outside";
let prev = "Outside";
let nhref = "even-numbers";
let next = "Even Numbers";
let tblAria = "Uptown/Downtown betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Uptown/Downtown w/o Commission",
      href: "#upDownWoCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Up/Downtown w/Commission",
      href: "#upDownWCommission",
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
    ["*One Unit: $5/number", "$16 Up/Downtown"],
    ["Two Units: $10/number", "$32 Up/Downtown"],
    ["Three Units: $15/number", "$48 Up/Downtown"],
    ["*One Unit: $25/number", "$76 Up/Downtown"],
    ["Two Units: $50/number", "$162 Up/Downtown"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-14w7qje_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-sli1n3">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Uptown and Downtown in Craps",
  "description": "A guide to understanding and placing Uptown and Downtown bets in Craps, covering how to bet with and without commission.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/uptown-downtown",
  "image": "http://parlaynation.com/images/uptown-downtown/uptown-downtown-header.webp",
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
    "@id": "http://parlaynation.com/uptown-downtown"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Spread Bets",
      "description": "Details on 'Betting Uptown and Downtown' in Craps, strategies for placing these bets based on the point, and examples of betting amounts.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "How Do You Bet Uptown or Downtown on the Craps Table?",
          "description": "Explanation of Uptown and Downtown betting strategies without commission, including equal cost implications."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet Uptown or Downtown with a Commission?",
          "description": "Guidance on Uptown and Downtown betting strategies with commission, emphasizing the equal cost of bets."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/uptown_640x360.webp",
      "caption": "Puck is on point six and points 8, 9, and 10 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/downtown_640x360.webp",
      "caption": "Puck is on point eight and points 4, 5, and 6 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/16-uptown_640x360.webp",
      "caption": "Betting $16 Uptown with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/16-downtown_640x360.webp",
      "caption": "Betting $16 downtown with the point on nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/65-uptown_640x360.webp",
      "caption": "$65 uptown with the point on four."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/uptown-downtown/65-downtown_640x360.webp",
      "caption": "$65 downtown with the point on ten."
    }
  ]
}<\/script><!-- HEAD_svelte-14w7qje_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Uptown and Downtown in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-k0okpd">After the Point has been established, players like to bet the opposite side of the board and
				it&#39;s called betting Uptown or Downtown. When the Point is 4, 5, or 6 the players will bet the
				8, 9, and 10, or Uptown. When the Point is 8, 9, or 10 the players will bet the 4, 5, and 6,
				or Downtown. They are always betting three numbers.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/uptown_640x360.webp",
                mdImg: "/images/" + url + "/uptown_960x540.webp",
                lgImg: "/images/" + url + "/uptown_1280x720.webp",
                title: "Uptown Place Bets",
                alt: "Puck is on point six and points 8, 9, and 10 are highlighted."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/downtown_640x360.webp",
                mdImg: "/images/" + url + "/downtown_960x540.webp",
                lgImg: "/images/" + url + "/downtown_1280x720.webp",
                title: "Downtown Place Bets",
                alt: "Puck is on point eight and points 4, 5, and 6 are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "upDownWoCommission",
          title: "How Do You Bet Uptown or Downtown on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1lzf02t">When you bet Downtown or Uptown at lower limits you will not have to pay a commission on the
				4 or 10. If you bet the same number of units Uptown or Downtown the cost will be the same.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/16-uptown_640x360.webp",
                mdImg: "/images/" + url + "/16-uptown_960x540.webp",
                lgImg: "/images/" + url + "/16-uptown_1280x720.webp",
                title: "Betting $16 Uptown",
                alt: "Betting $16 Uptown with the point on five."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/16-downtown_640x360.webp",
                mdImg: "/images/" + url + "/16-downtown_960x540.webp",
                lgImg: "/images/" + url + "/16-downtown_1280x720.webp",
                title: "Betting $16 Downtown",
                alt: "Betting $16 downtown with the point on nine."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "upDownWCommission",
          title: "How Do You Bet Uptown or Downtown with a Commission?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-wfohie">When you bet Downtown or Uptown at higher limits you will have to include the commission
				charged on either the 4 or 10. If you bet the same number of units Uptown or Downtown the
				cost of the bets will always be the same.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/65-uptown_640x360.webp",
                mdImg: "/images/" + url + "/65-uptown_960x540.webp",
                lgImg: "/images/" + url + "/65-uptown_1280x720.webp",
                title: "Betting $65 Uptown",
                alt: "$65 uptown with the point on four."
              },
              {},
              {}
            )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/65-downtown_640x360.webp",
                mdImg: "/images/" + url + "/65-downtown_960x540.webp",
                lgImg: "/images/" + url + "/65-downtown_1280x720.webp",
                title: "Betting $65 Downtown",
                alt: "$65 downtown with the point on ten."
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
