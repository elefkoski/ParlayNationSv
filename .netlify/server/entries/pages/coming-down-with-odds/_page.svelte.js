import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { a as Content_h2, C as Content_img } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Coming Down w/Odds in Craps";
let description = "When you are playing Place Bets and Come bets at the same time you don't need both on a Point. Coming Down w/Odds uses the Place Bet for Odds on the Come bet.";
let url = "coming-down-with-odds";
let phref = "come-bet-odds";
let prev = "Come Bet Odds";
let nhref = "the-donts";
let next = "The Don'ts";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Part 1: The Setup",
      href: "#partOne",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Part 2: Come Bet Moves",
      href: "#partTwo",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Part 3: Handed Off",
      href: "#partThree",
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
  return `${$$result.head += `<!-- HEAD_svelte-1gvlwea_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-odzm2v">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Coming Down w/Odds In Craps",
  "description": "A strategic guide to optimizing bets in Craps by coming down with odds, combining Place and Come bets for a potential higher payout.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/coming-down-with-odds",
  "image": "http://parlaynation.com/images/coming-down-with-odds/coming-down-with-odds-header.webp",
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
    "@id": "http://parlaynation.com/coming-down-with-odds"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Coming Down with Odds Process",
      "description": "Explains the process of optimizing Craps bets by utilizing Place and Come bets efficiently to come down with odds.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Setup",
          "description": "Describes the initial conditions required for coming down with odds, involving both Place and Come bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Come Bet Moves and Place Bet Paid",
          "description": "Details the event when a Point rolls that has a Place Bet on it, leading to the movement of the Come bet."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Odds Are Added to the Come Bet",
          "description": "Explains the final step of adding odds to the Come bet and the significance of communicating with the dealer."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/coming-down-with-odds/the-setup_640x360.webp",
      "caption": "Initial setup for coming down with odds."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/coming-down-with-odds/point-rolled-place-paid_640x360.webp",
      "caption": "Moment when the Point rolls that has a Place bet, initiating the next steps."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/coming-down-with-odds/odds-added-rest-handed-off_640x360.webp",
      "caption": "Conclusion of adding odds to the Come bet and handling the remainder of the stake."
    }
  ]
}<\/script><!-- HEAD_svelte-1gvlwea_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Come Bets",
          title: "Coming Down w/Odds in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1rjyvem">If you&#39;re playing both Come bets and Place Bets, you will have times when the Come bet will
				move into the number that your Place Bet is on. Since betting both would be redundant and
				Odds pay better than Place Bets, you&#39;re going to want to take down the Place Bet and use it
				as Odds for the Come bet. The act of using your Place Bet and/or its payment as Odds is
				called &#39;Coming Down with Odds&#39;.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "partOne",
          title: "Part 1: The Setup"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">It takes both a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bet",
                href: "place-bet-basics"
              },
              {},
              {}
            )} and a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bet",
                href: "come-bet-basics"
              },
              {},
              {}
            )} in order to Come Down w/Odds. If you&#39;re playing both Come bets and Place Bets then you should
				expect to be Coming Down w/Odds and you should be thinking about how many Odds you&#39;ll be coming
				down with.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-setup_640x360.webp",
                mdImg: "/images/" + url + "/the-setup_960x540.webp",
                lgImg: "/images/" + url + "/the-setup_1280x720.webp",
                title: "Coming Down w/Odds - The Setup",
                alt: "$10 in the come and a $12 place bet on the point eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "partTwo",
          title: "Part 2: Come Bet Moves and Place Bet Paid"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-7dc6ry">If a Point rolls that doesn&#39;t have a Place Bet on it then nothing matters. The process
				starts when the Point that the Place Bet is on rolls. The Come bet moves behind the Place
				bet then the dealer pays the Place Bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/point-rolled-place-paid_640x360.webp",
                mdImg: "/images/" + url + "/point-rolled-place-paid_960x540.webp",
                lgImg: "/images/" + url + "/point-rolled-place-paid_1280x720.webp",
                title: "Coming Down w/Odds - Point Rolled and Place Paid",
                alt: "$14 cut out in come. $10 moved behind the $12 place bet. Two orange dice show 5-3."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "partThree",
          title: "Part 3: Odds Are Added to the Come Bet and the Rest Is Handed Off"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-io9l9r">The dealer keeps as much money as they need for Odds and hands off the remainder. Tell the
				dealer how many Odds you would like. If you don&#39;t tell the dealer anything they might give
				you a Come bet with no Odds and leave your Place Bet where it is when you should have taken
				your Place Bet down and added Odds because they have no house advantage.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/odds-added-rest-handed-off_640x360.webp",
                mdImg: "/images/" + url + "/odds-added-rest-handed-off_960x540.webp",
                lgImg: "/images/" + url + "/odds-added-rest-handed-off_1280x720.webp",
                title: "Coming Down w/Odds - Odds Added and Rest Handed Off",
                alt: "Three way split image. Left shows $12 place bet and $14 payment. Top shows $10 come bet with $20 odds. Bottom shows $6 handed off to player."
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
