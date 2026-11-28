import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Betting Proposition Bets in Craps";
let description = "Most Proposition Bets at the Craps table are one-roll bets while a handful is not. These bets pay the highest amounts on the Craps table and some are combinations of multiple bets at once.";
let url = "proposition-basics";
let phref = "proposition-bets";
let prev = "Proposition Bets";
let nhref = "the-hardways";
let next = "The Hardways";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "One Roll Bets",
      href: "#oneRoll",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Proposition Bets",
      href: "#bettingProp",
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
  return `${$$result.head += `<!-- HEAD_svelte-gf3jvx_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1poogr2">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Proposition Bets on the Craps Table",
  "description": "An in-depth look at Proposition Bets in Craps, covering one-roll bets, how to place these bets, and the thrilling potential payouts.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/proposition-basics",
  "image": "http://parlaynation.com/images/proposition-basics/proposition-basics-header.webp",
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
    "@id": "http://parlaynation.com/proposition-basics"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Proposition Bets",
      "description": "Exploration of Proposition Bets on the Craps table, including insights into one-roll bets and strategies for placing these high-stake bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is a One-Roll Bet in Craps?",
          "description": "Details the dynamics of One-Roll bets, their placement on the table, and their duration."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "How Do You Bet Proposition Bets at the Craps Table?",
          "description": "Guides on the correct method to place Proposition Bets through interaction with the Stickperson and ensuring bets are acknowledged."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/proposition-basics/proposition-bets_640x360.webp",
      "caption": "Overhead view of the proposition area on the Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/proposition-basics/how-to-bet-prop-bets_640x360.webp",
      "caption": "First person view of a player throwing a cheque towards the middle of the table."
    }
  ]
}<\/script><!-- HEAD_svelte-gf3jvx_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Proposition Bets on the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-2dclae">What is a Proposition Bet on the Craps table? Some would say it&#39;s a one-roll bet. Others
				would say they are any of the bets in the center of the table. For the most part,
				Proposition Bets are one-roll bets in the middle of the table, although some last more than
				one roll, and I consider the Field a Prop Bet, and that isn&#39;t in the middle of the table,
				so, who knows?</p> <p class="pb-4" data-svelte-h="svelte-sk82ww">Regardless of the definition, betting Proposition Bets can be a lot of fun! Most of them
				have a dollar minimum, so you won&#39;t have to bet a lot, and when they come two, three... four
				times in a row... and you realize that a single cheque can net you hundreds and maybe even
				thousands of dollars at the Craps table in only a couple minutes... you realize the allure.</p> <p class="pb-4" data-svelte-h="svelte-rcjgoa">The Craps table has a lot of Prop Bets, and the casino loves it. They pretty much suck the
				money out of you because you always have to throw money out there to hit one. Craps is a
				game where you want to use the money you win to make more bets, not constantly pull money
				out of the rail.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/proposition-bets_640x360.webp",
                mdImg: "src/images/" + url + "/proposition-bets_960x540.webp",
                lgImg: "src/images/" + url + "/proposition-bets_1280x720.webp",
                title: "Proposition Bets",
                alt: "Overhead view of the proposition area on the Craps table."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "oneRoll",
          title: "What Is a One-Roll Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-xxw261">A One-Roll bet is a bet that must win the next roll, or it loses. Most one-roll bets are
				found in the middle of the table, and have minimums ranging from $1 to $5. The Hardways are an
				exception because, while they have $1 minimum, and are in the middle of the table, they
				can last longer than one roll. The Field is a one-roll bet but has the table min. and is on
				each side of the table.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bettingProp",
          title: "How Do You Bet Proposition Bets at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Almost all Proposition Bets are in the middle of the table, so you give the money to the
				Stickperson, and they will set up the bet. Tell ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Stickperson",
                href: "the-crew"
              },
              {},
              {}
            )} how much you are betting and which bet you want, then throw the money into the middle of the
				table. You should really make eye contact with the Stickperson, so they know it is you betting.
				Even if they hear your bet and see the money come in, they can&#39;t be 100% sure it came from you.
				Your bets should also be repeated to you by at least one of the dealers. If ${validate_component(Link, "Link").$$render($$result, { text: "the dice", href: "the-dice" }, {}, {})} are out and the Stickpersons&#39; back is turned to you, you must tell the ${validate_component(Link, "Link").$$render($$result, { text: "Base Dealer", href: "the-crew" }, {}, {})}. If your bet is not repeated to you, then it isn&#39;t a bet.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/how-to-bet-prop-bets_640x360.webp",
                mdImg: "src/images/" + url + "/how-to-bet-prop-bets_960x540.webp",
                lgImg: "src/images/" + url + "/how-to-bet-prop-bets_1280x720.webp",
                title: "How to Bet Proposition Bets",
                alt: "First person view of a player throwing a cheque towards the middle of the table."
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
