import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
let title = "Betting Inside at the Craps Table";
let description = "Betting Inside is a Spread Bet on either 3 or 4 of the Inside Points: Five, Six, Eight, and Nine. When betting Inside, you are betting all the Inside Points in the same unit amount, not including the Point.";
let url = "inside";
let phref = "across";
let prev = "Across";
let nhref = "outside";
let next = "Outside";
let tblAria = "Inside betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Inside",
      href: "#bettingInside",
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
  let tblHeaders = ["Spread", "Total Bet"];
  let tblRows = [
    ["*One Unit: $5/number", "$16/17/22 Inside"],
    ["Two Units: $10/number", "$32/34/44 Inside"],
    ["Three Units: $15/number", "$48/51/66 Inside"],
    ["*One Unit: $25/number", "$80/85/110 Inside"],
    ["Two Units: $50/number", "$160/170/220 Inside"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-aipvia_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1fk2d7r">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Inside at the Craps Table",
  "description": "A guide on how to place Inside bets on the Craps table, covering the strategy for betting on the inside points (5, 6, 8, and 9), excluding the point, and the implications of different points on the cost of bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/inside",
  "image": "http://parlaynation.com/images/inside/inside-header.webp",
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
    "@id": "http://parlaynation.com/inside"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Inside Betting Strategies",
      "description": "Insights on Inside betting at a Craps table, highlighting strategies based on the point and the costs associated with Inside bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Point 6 or 8",
          "description": "Discussion on Inside betting when the Point is 6 or 8, including cost considerations."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Point 5 or 9",
          "description": "Overview of Inside betting costs and strategies when the Point is 5 or 9."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Point 4 or 10",
          "description": "Explanation of why Inside betting is most expensive when the Point is 4 or 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/inside/inside_640x360.webp",
      "caption": "Puck is on point four and points 5, 6, 8, and 9 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/inside/32-inside_640x360.webp",
      "caption": "$32 inside with the point on eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/inside/34-inside_640x360.webp",
      "caption": "$34 inside with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/inside/44-inside_640x360.webp",
      "caption": "$44 inside with the point on ten."
    }
  ]
}<\/script><!-- HEAD_svelte-aipvia_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Inside at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-lzxg9t">5, 6, 8, and 9 are the Inside Points. When you bet Inside you are betting all the Inside
				Points, in the same unit amount, not including the Point. For example, if the Point was 6,
				32 inside would be: $10 on 5, $12 on the 8, and $10 on the 9 — $10 + $12 + $10 = $32 Inside.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/inside_640x360.webp",
                mdImg: "/images/" + url + "/inside_960x540.webp",
                lgImg: "/images/" + url + "/inside_1280x720.webp",
                title: "Inside Place Bets",
                alt: "Puck is on point four and points 5, 6, 8, and 9 are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingInside",
          title: "How Do You Bet Inside on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-3dckzv">When you make an Inside bet you don&#39;t include the 4 or 10. Since those numbers are not
				included you don&#39;t have to worry about paying a commission. Regardless of whether or not you
				have to pay a commission, there are still three different possibilities for Inside bets.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-r2cky7">When the Point is 6 or 8 the amount of your bet is going to be less. This is
					because it costs more to bet on the 6 or 8 and the fact that it is the Point and you are
					not betting it, the total cost of the bet is going to be less.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/32-inside_640x360.webp",
                    mdImg: "/images/" + url + "/32-inside_960x540.webp",
                    lgImg: "/images/" + url + "/32-inside_1280x720.webp",
                    title: "Betting $32 Inside",
                    alt: "$32 inside with the point on eight."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 5 or 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-6myu81">When the Point is 5 or 9 you must still bet three other numbers. You have to bet both the
					6 and 8, which cost more than the rest so it&#39;s more expensive than when the Point is 6 or
					8.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/34-inside_640x360.webp",
                    mdImg: "/images/" + url + "/34-inside_960x540.webp",
                    lgImg: "/images/" + url + "/34-inside_1280x720.webp",
                    title: "Betting $34 Inside",
                    alt: "$34 inside with the point on five"
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4 or 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1a7o5fu">Betting Inside is most expensive when the Point is 4 and 10 because you must bet all four
					of the Inside numbers.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/44-inside_640x360.webp",
                    mdImg: "/images/" + url + "/44-inside_960x540.webp",
                    lgImg: "/images/" + url + "/44-inside_1280x720.webp",
                    title: "Betting $44 Inside",
                    alt: "$44 inside with the point on ten."
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
