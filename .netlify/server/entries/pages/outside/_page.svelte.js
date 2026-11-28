import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
let title = "Betting Outside at the Craps Table";
let description = "Betting Outside is a Spread Bet on either 3 or 4 of the Outside Points: Four, Five, Nine, and Ten. When betting Outside, you are betting all the Outside Points in the same unit amount, not including the Point.";
let url = "outside";
let phref = "inside";
let prev = "Inside";
let nhref = "uptown-downtown";
let next = "Uptown/Downtown";
let tblAria = "Outside betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Outside w/o Commission",
      href: "#bettingOutsideWoCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Outside w/Commission",
      href: "#bettingOutsideWCommission",
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
    ["*One Unit: $5/number", "$15/20 Outside"],
    ["Two Units: $10/number", "$30/40 Outside"],
    ["Three Units: $15/number", "$45/60 Outside"],
    ["*One Unit: $25/number", "$76/77/102 Outside"],
    ["Two Units: $50/number", "$152/155/205 Outside"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-15x63ko_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1eee97p">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Outside at the Craps Table",
  "description": "A comprehensive guide to understanding and placing 'Outside' bets in Craps, covering the strategies for betting without and with commission based on the game's Point.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/outside",
  "image": "http://parlaynation.com/images/outside/outside-header.webp",
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
    "@id": "http://parlaynation.com/outside"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Betting Outside Strategies",
      "description": "Exploration of betting strategies for Outside bets in Craps, including betting without commission and with commission.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Outside without Commission",
          "description": "Details on how to place Outside bets when no commission is required, focusing on the scenarios when the Point is 6 or 8 and the cost implications."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Betting Outside with Commission",
          "description": "Explanation on placing Outside bets that require commission, including the cost variations depending on whether the Point is 6, 8, 5, 9, 4, or 10."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/outside_640x360.webp",
      "caption": "Puck is on point eight and points 4, 5, 9, and 10 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/60-outside_640x360.webp",
      "caption": "Betting $60 Outside when the Point is 6 or 8."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/45-outside_640x360.webp",
      "caption": "Betting $45 Outside with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/102-outside_640x360.webp",
      "caption": "$102 outside with the point on eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/77-outside_640x360.webp",
      "caption": "$77 outside with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/outside/76-outside_640x360.webp",
      "caption": "$76 outside with the point on four."
    }
  ]
}<\/script><!-- HEAD_svelte-15x63ko_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Outside at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-wjx1a1">The four Outside Points are 4, 5, 9, and 10 — and you bet them in the same unit amount, not
				including the Point. If the point was 8 and you wanted to bet $10 on each of the numbers,
				you would have to bet the following: $10 on the 4, $10 on the 5, $10 on the 9, and $10 on
				the 10 — $10 + $10 + $10 + $10 = $40. This bet would be 40 Outside.</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/outside_640x360.webp",
                mdImg: "/images/" + url + "/outside_960x540.webp",
                lgImg: "/images/" + url + "/outside_1280x720.webp",
                title: "Outside Place Bets",
                alt: "Puck is on point eight and points 4, 5, 9, and 10 are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingOutsideWoCommission",
          title: "How Do You Bet Outside on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-l1qhjv">When you bet Outside at lower limits you don&#39;t have to worry about commission because you&#39;re
				not betting large enough that a vig needs to be charged. The bets on each number are also
				the same since you are not betting the 6 or 8. The only difference is if you&#39;re betting
				three or four numbers.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-p1dze2">When the Point is 6 or 8 you are betting all four Outside numbers. This is when the cost
					is going to be the most.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/60-outside_640x360.webp",
                    mdImg: "/images/" + url + "/60-outside_960x540.webp",
                    lgImg: "/images/" + url + "/60-outside_1280x720.webp",
                    title: "Betting $60 Outside",
                    alt: "$60 outside with the point on six or eight."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4, 5, 9, 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-18xbydv">When the Point is 4, 5, 9, or 10, the cost of the bet will be smaller. No 6s or 8&#39;s and
					you only need to bet three of the four outside bets.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/45-outside_640x360.webp",
                    mdImg: "/images/" + url + "/45-outside_960x540.webp",
                    lgImg: "/images/" + url + "/45-outside_1280x720.webp",
                    title: "Betting $45 Outside",
                    alt: "$45 outside with point on five"
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
          id: "bettingOutsideWCommission",
          title: "How Do You Bet Outside with a Commission in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-y69c7b">When the Point is 6 or 8 you are betting all four Outside numbers. This is when the cost is
				going to be the most.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-i39ak2">Outside bets are most expensive when the Point is 6 or 8 because you have to bet all four
					Outside bets. You need to pay commission for both the 4 and 10.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/102-outside_640x360.webp",
                    mdImg: "/images/" + url + "/102-outside_960x540.webp",
                    lgImg: "/images/" + url + "/102-outside_1280x720.webp",
                    title: "Betting $102 Outside",
                    alt: "$102 outside with the point on eight."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 5 or 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-upkqxo">When the Point is 5 or 9 you only need to bet three out of the four Outside bets and pay
					commission for both the 4 and 10. These are your second most expensive Outside bets.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/77-outside_640x360.webp",
                    mdImg: "/images/" + url + "/77-outside_960x540.webp",
                    lgImg: "/images/" + url + "/77-outside_1280x720.webp",
                    title: "Betting $77 Outside",
                    alt: "$77 outside with the point on five."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4 or 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1o5n3xt">The least expensive Outside bet is when the Point is 4 or 10. You only need to bet three
					out of the four Outside bets and you only need to pay commission for either the 4 or the
					10, not both.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/76-outside_640x360.webp",
                    mdImg: "/images/" + url + "/76-outside_960x540.webp",
                    lgImg: "/images/" + url + "/76-outside_1280x720.webp",
                    title: "Betting $76 Outside",
                    alt: "$76 outside with the point on four"
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
