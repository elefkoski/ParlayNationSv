import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { C as ContentTable } from "../../../chunks/ContentTable.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting Across at the Craps Table";
let description = "Betting Across is a Spread Bet where you are betting all the Place Bets, not including the Point in the same unit amount. At high enough units you will have to include the cost of commission.";
let url = "across";
let phref = "spread-bets";
let prev = "Spread Bets";
let nhref = "inside";
let next = "Inside";
let tblAria = "Across betting options table";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting Across w/o Commission",
      href: "#acrossWoCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Across w/Commission",
      href: "#acrossWCommission",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.jpg"
  };
  let tblHeaders = ["The Spread", "Total Bet"];
  let tblRows = [
    ["*One Unit: $5/number", "$26/27 Across"],
    ["Two Units: $10/number", "$52/54 Across"],
    ["Three Units: $15/number", "$78/81 Across"],
    ["*One Unit: $25/number", "$132/136/137 Across"],
    ["Two Units: $50/number", "$265/272/275 Across"]
  ];
  let tblPnts = [
    "One Unit can be $5 or $25 on the 4, 5, 9, and 10. One Unit can be $6 or $30 on the 6 or 8."
  ];
  return `${$$result.head += `<!-- HEAD_svelte-sg0exy_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1ia53n">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Across at the Craps Table",
  "description": "A detailed guide on how to bet Across at the Craps table, including strategies for betting with and without commission based on the point.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/across",
  "image": "http://parlaynation.com/images/across/across-header.webp",
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
    "@id": "http://parlaynation.com/across"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Spread Bets",
      "description": "Explaining how to bet Across on the Craps table, including the calculation and examples of $54 and $52 Across bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Across",
          "description": "An overview of Across betting at the Craps table, specifying the amounts placed on different numbers excluding the Point."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet Across on the Craps Table?",
          "description": "Detailed breakdown of Across betting strategies when the point is 6 or 8, and when the point is 4, 5, 9, or 10."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Do You Bet Across with a Commission in a Craps Game?",
          "description": "Explanation of Across betting involving commission for buying the 4 and/or 10, with cost adjustments based on the point."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/across_640x360.webp",
      "caption": "Puck is on point six and points 4, 5, 8, 9, and 10 are highlighted."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/52-across_640x360.webp",
      "caption": "$52 across with the point on six."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/54-across_640x360.webp",
      "caption": "$54 across with the point on five."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/132-across_640x360.webp",
      "caption": "$132 across with the point on eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/137-across_640x360.webp",
      "caption": "$137 across with the point on nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/across/136-across_640x360.webp",
      "caption": "$136 across with the point on 10."
    }
  ]
}<\/script><!-- HEAD_svelte-sg0exy_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Spread Bets",
          title: "Betting Across at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When you bet Across, you are betting all the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )}, in the same amount, not including the Point. E.g. Suppose the Point was 4 and you wanted
				$54 Across. It would be $10 on the 5, $12 on 6, $12 on the 8, $10 on the 9, and $10 on the
				10. $10 + $12 + $12 + $10 + $10 = $54. After the Point has been established, tell the dealer, ${validate_component(Quote, "Quote").$$render($$result, { text: "I would like 54 across." }, {}, {})} and they&#39;ll repeat ${validate_component(Quote, "Quote").$$render($$result, { text: "54 across." }, {}, {})}</p> ${validate_component(ContentTable, "ContentTable").$$render($$result, { tblAria, tblHeaders, tblRows, tblPnts }, {}, {})} ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/across_640x360.webp",
                mdImg: "src/images/" + url + "/across_960x540.webp",
                lgImg: "src/images/" + url + "/across_1280x720.webp",
                title: "Across at the Craps Table",
                alt: "Puck is on point six and points 4, 5, 8, 9, and 10 are highlighted."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "acrossWoCommission",
          title: "How Do You Bet Across on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1gfc5vf">When you bet Across at lower limits there are going to be two different options you can
				take: when the Point is 6 or 8 and when the Point is 4, 5, 9, or 10. Because all the numbers
				aren&#39;t bet in the same amounts, the amount changes based on what the Point is.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-vvxtda">When the Point is 6 or 8 the amount of your bet across is going to be less. This is
					because it costs more to bet on the 6 or 8 and the fact that it is the Point and you are
					not betting it, the total cost of the bet is going to be less.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/52-across_640x360.webp",
                    mdImg: "src/images/" + url + "/52-across_960x540.webp",
                    lgImg: "src/images/" + url + "/52-across_1280x720.webp",
                    title: "Betting $52 Across",
                    alt: "$52 across with the point on six."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4, 5, 9, 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-11kts7g">When the Point is anything other than the 6 or 8, the cost of the bet will be larger. 6&#39;s
					and 8&#39;s cost more and because they are not the Point and you will be including them in
					your bet, the total cost of the bet will be larger.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/54-across_640x360.webp",
                    mdImg: "src/images/" + url + "/54-across_960x540.webp",
                    lgImg: "src/images/" + url + "/54-across_1280x720.webp",
                    title: "Betting $54 Across",
                    alt: "$54 across with the point on five."
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
          id: "acrossWCommission",
          title: "How Do You Bet Across with a Commission in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-rhub2b">Whenever you bet Across large enough that you are going to have to buy the 4 and/or 10, the
				cost of the bet goes up again because you need to include the commission needed to be paid
				on those numbers.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 6 or 8" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-gcgsrn">When the Point is 6 or 8 the cost of your bet will be the smallest because you&#39;re saving
					money on the fact the 6 and 8 cost more and you won&#39;t have to pay for one of them. You will
					also be buying the 4 and 10, which means you have to pay commission for both of those
					numbers and you need to add those costs in.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/132-across_640x360.webp",
                    mdImg: "src/images/" + url + "/132-across_960x540.webp",
                    lgImg: "src/images/" + url + "/132-across_1280x720.webp",
                    title: "Betting $132 Across",
                    alt: "$132 across with the point on eight."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 5 or 9" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-iscfdh">When the Point is 5 or 9 the cost of the bet is at its highest. You need to include the
					cost of both the 6 and 8, which cost the most, and you need to add in the commission for
					both the 4 and 10, which is additional money.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/137-across_640x360.webp",
                    mdImg: "src/images/" + url + "/137-across_960x540.webp",
                    lgImg: "src/images/" + url + "/137-across_1280x720.webp",
                    title: "Betting $137 Across",
                    alt: "$137 across with the point on nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Point 4 or 10" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-s4bngo">When the Point is 4 or 10 the cost of the bet is in the middle of the three possible
					options. This is because you need to pay the higher cost of the 6 and 8 but only need to
					pay the commission on either the 4 or 10. The fact that one of those numbers is the Point
					means you won&#39;t include it in your bet and therefore won&#39;t have to pay the commission for
					it.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/136-across_640x360.webp",
                    mdImg: "src/images/" + url + "/136-across_960x540.webp",
                    lgImg: "src/images/" + url + "/136-across_1280x720.webp",
                    title: "Betting $136 Across",
                    alt: "$136 across with the point on 10."
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
