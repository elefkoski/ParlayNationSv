import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting Even Numbers at the Craps Table";
let description = "Betting Even is a Spread Bet on either 3 or 4 of the Even Numbered Points: Four, Six, Eight, and Ten. When betting Even, you are betting all the Even Points in the same unit amount, not including the Point.";
let url = "even-numbers";
let phref = "uptown-downtown";
let prev = "Uptown/Downtown";
let nhref = "including-the-point";
let next = "Including the Point";
let tblAria = "Even betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Even w/o Commission",
      href: "#bettingEvenWoCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Even w/Commission",
      href: "#bettingEvenWCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let tblHeaders = ["The Spread", "Total Bet"];
  let tblRows = [
    ["*One Unit: $5/number", "$16/17/22 Even"],
    ["Two Units: $10/number", "$32/34/44 Even"],
    ["Three Units: $15/number", "$48/51/66 Even"],
    ["*One Unit: $25/number", "$82/86/112 Even"],
    ["Two Units: $50/number", "$165/172/225 Even"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4 and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-eviiaa_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-10pw5w7">{
  "@context": "http://schema.org",
  "@type": "Article",
  "headline": "Betting Even Numbers at the Craps Table",
  "description": "A comprehensive guide on betting even numbers at the Craps table, including methods without commission for lower limits and with commission for larger bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/even-numbers",
  "image": "http://parlaynation.com/images/even-numbers/even-numbers-header.webp",
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
    "@id": "https://www.parlaynation.com/even-numbers"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Betting Even Numbers Without Commission",
        "description": "Learn how to bet on even numbers at the Craps table without commission, adjusting your bets based on the Point.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Point 5 or 9",
            "description": "Betting strategy for all four Even numbers when the point is 5 or 9."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Point 4 or 10",
            "description": "How to bet three of the Even numbers when the point is 4 or 10."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Point 6 or 8",
            "description": "The cost-effective approach to betting three Even numbers when the point is 6 or 8."
          }
        ]
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Betting Even Numbers With Commission",
        "description": "A guide to betting even numbers with commission for larger bets, including how to manage commissions on the 4 and 10.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Point 5 or 9",
            "description": "Strategies for when the point is 5 or 9, including commission for the 4 and 10."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Point 4 or 10",
            "description": "Details on betting with commission when the point is 4 or 10."
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Point 6 or 8",
            "description": "How to minimize costs when betting with commission and the point is 6 or 8."
          }
        ]
      }
    ]
  }
}<\/script><!-- HEAD_svelte-eviiaa_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Even Numbers at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The four Even Points are 4, 6, 8, and 10 - and you bet them in the same ${validate_component(Link, "Link").$$render($$result, { text: "unit amount", href: "presses" }, {}, {})}, not including the Point. i.e. Suppose the Point was 6 and you wanted to bet $10 on each
				of the numbers, you would have to bet the following: $10 on the 4, $12 on the 8, and $10 the
				10 — $10 + $12 + $10 = $32. This bet would be 32 Even.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/even-numbers_640x360.webp",
                mdImg: "src/images/" + url + "/even-numbers_960x540.webp",
                lgImg: "src/images/" + url + "/even-numbers_1280x720.webp",
                title: "Even Number Place Bets",
                alt: "Puck is on point 8 and points 4, 6, and 10 are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingEvenWoCommission",
          title: "How Do You Bet Even Numbers on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-17xf39w">When you bet the Even numbers at lower limits you don&#39;t have to worry about commission
				because you&#39;re not betting large enough that a vig needs to be charged. Since you will
				always include either the 6 or 8, the bet amounts will always be different based on the
				Point.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 5 or 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-56217b">When the Point is 5 or 9 you are betting all four Even numbers. This is when the cost is
					going to be the most.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/44-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/44-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/44-even-numbers_1280x720.webp",
                    title: "Betting $44 Even Numbers",
                    alt: "$44 even with the point on 5"
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4 or 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-fbxa3o">When the Point is 4 or 10 you are only betting three of the Even numbers. This is when the
					cost is second most because you&#39;re betting both the 6 &amp; 8.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/34-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/34-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/34-even-numbers_1280x720.webp",
                    title: "Betting $34 Even Numbers",
                    alt: "$34 even with the point on 10"
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1w3go62">When the Point is 6 or 8 you&#39;re only betting three of the Even numbers - and at the same
					time only one of them will be a six or an eight. This makes the cost the least.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/32-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/32-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/32-even-numbers_1280x720.webp",
                    title: "Betting $32 Even",
                    alt: "$32 even with point on 6"
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingEvenWCommission",
          title: "How Do You Bet Even with a Commission in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you begin to bet larger amounts you&#39;ll begin to start ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "paying commission",
                href: "buying-place-bets"
              },
              {},
              {}
            )} on the 4 and 10.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 5 or 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-pvrd9r">Even bets are most expensive when the Point is 5 or 9 because you have to bet all four
					Even bets and you need to pay commission for both the 4 and 10.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/112-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/112-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/112-even-numbers_1280x720.webp",
                    title: "Betting $112 Even",
                    alt: "$112 Even numbers with the point on 5."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4 or 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1a9n9ca">When the Point is 4 or 10 you only need to bet three out of the four Even bets. These
					are your second most expensive Even bets.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/86-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/86-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/86-even-numbers_1280x720.webp",
                    title: "Betting $86 Even Numbers",
                    alt: "$86 even numbers with the point on 4."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1qy208x">The least expensive Even bet is when the Point is 6 or 8. You only need to bet three out
					of the four Even bets and you only need to pay for either the 6 or the 8, not both.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/82-even-numbers_640x360.webp",
                    mdImg: "src/images/" + url + "/82-even-numbers_960x540.webp",
                    lgImg: "src/images/" + url + "/82-even-numbers_1280x720.webp",
                    title: "Betting $82 Even Numbers",
                    alt: "$82 even numbers with the point on 8"
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
