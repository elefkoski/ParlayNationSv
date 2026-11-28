import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "The Craps Table";
let description = "Don't walk up to the Craps Table clueless. Learn the different betting areas as well as all the equipment the dealers use on the game.";
let url = "the-craps-table";
let phref = "the-crew";
let prev = "The Crew";
let nhref = "the-dice";
let next = "The Dice";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "The Rail",
      href: "#railArea",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Proposition Bets",
      href: "#propArea",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Betting Areas",
      href: "#betArea",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Craps Bank",
      href: "#bankArea",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Checking Table Limits",
      href: "#tableLimits",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Puck",
      href: "#thePuck",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Stick",
      href: "#theStick",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Bowl",
      href: "#theBowl",
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
  return `${$$result.head += `<!-- HEAD_svelte-ww71qf_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1d7l4tc">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Craps Table",
  "description": "An overview of the Craps table layout, including the Rail, Betting Areas, Proposition Betting Area, Bank, and the essential tools like the Puck, Stick, and the Bowl.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-craps-table",
  "image": "http://parlaynation.com/images/the-craps-table/the-craps-table-header.webp",
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
    "@id": "http://parlaynation.com/the-craps-table"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "Detailed explanation of the Craps table layout and components, including the Rail, Betting Areas, Bank, and the roles of the Puck, Stick, and the Bowl in the game.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Rail on a Craps Table",
          "description": "Describes the Rail's function for holding player's cheques and personal items."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Proposition Bets on the Craps Table",
          "description": "Explores the area dedicated to Proposition Bets and its accessibility to all players."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Craps Table Betting Areas",
          "description": "Outlines the main areas where players place the majority of their bets."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "The Craps Table Bank",
          "description": "Explains the Bank's role in managing the game's finances."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Are You Watching the Craps Table Limits?",
          "description": "Advises on selecting tables based on their minimum and maximum betting limits."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "What Is the Puck for on a Craps Game?",
          "description": "Details the Puck's purpose in indicating the game's current stage."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "What Is the Stick for on a Craps Table?",
          "description": "Describes the Stick's use in managing the dice and facilitating the game."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Why Is There a Bowl on the Craps Table?",
          "description": "Explains the Bowl's function in holding the extra dice."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-craps-table/the-table_640x360.webp",
      "caption": "Overhead view of Craps table with highlighted areas of the bank, betting areas, proposition bets, and the rail."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-craps-table/craps-table-limits_640x360.webp",
      "caption": "Craps table limit sign with $10 minimum bet and $50 maximum bet."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-craps-table/puck-off_640x360.webp",
      "caption": "The Puck sitting in the OFF position in the Don't Come."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-craps-table/the-stick_640x360.webp",
      "caption": "Two dice near spot twelve on the layout. The dice are being pulled back by a black stick and it's being reflected in the mirror."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-craps-table/the-craps-bowl_640x360.webp",
      "caption": "An empty table with the stick laying flat and the bowl resting on top of the stick. Five dice sit in the bowl."
    }
  ]
}<\/script><!-- HEAD_svelte-ww71qf_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Basics",
          title: "The Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-udbmzy">Here is the Craps table. I know there&#39;s a lot on there but once you start to break it down
				piece by piece, bet by bet you realize you don&#39;t need to be concerned with most of it. It&#39;s
				got four main sections: the Rail, the Betting Area, Proposition Betting Area, and the Bank.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-table_640x360.webp",
                mdImg: "/images/" + url + "/the-table_960x540.webp",
                lgImg: "/images/" + url + "/the-table_1280x720.webp",
                title: "The Craps Table",
                alt: "Overhead view of Craps table with highlighted areas of the bank, betting areas, proposition bets, and the rail."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "railArea",
          title: "The Rail on a Craps Table"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1ug3gea">The rail is where you place your cheques. It&#39;s divided into sections, and each section is
				for a player. After you buy in, you put your cheques in the rail sideways, and you&#39;re ready
				to play. Under the rail is a second rail where you place other objects such as drinks or an
				ashtray. Be careful using this rail underneath with your belongings. People leave their
				stuff on it, players spill their drinks on it, and I would be afraid of players
				pickpocketing a purse or anything similar. Just be careful down there.</p>`;
          }
        }
      )} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "propArea",
          title: "Proposition Bets on the Craps Table"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">This whole middle area of the Craps table is reserved for ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Proposition Bets",
                href: "proposition-bets"
              },
              {},
              {}
            )}, most of which are one-roll bets. It serves both sides of the table, so all 16 players
				can bet on this area simultaneously. And believe me, when they do, all you see is a skyline
				of cheques covering everything. It gets crazy.</p>`;
          }
        }
      )} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "betArea",
          title: "Craps Table Betting Areas"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">You play the majority of the game in these two areas. The left side can serve up to eight
				players, and the right side another eight. You are playing the same game at the same time
				but on opposite ends of the Craps Table. The Betting Area is where you make your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line Bets",
                href: "the-pass-line"
              },
              {},
              {}
            )}, ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Don't Pass Bets",
                href: "the-donts"
              },
              {},
              {}
            )}, ${validate_component(Link, "Link").$$render($$result, { text: "Place Bets", href: "place-bets" }, {}, {})}, ${validate_component(Link, "Link").$$render($$result, { text: "Come Bets", href: "come-bets" }, {}, {})}.</p>`;
          }
        }
      )} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "bankArea",
          title: "The Craps Table Bank"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The money the casino uses to run the game is called The Bank. Players&#39; ${validate_component(Link, "Link").$$render($$result, { text: "buy-ins", href: "the-stages" }, {}, {})} and ${validate_component(Link, "Link").$$render($$result, { text: "color-ups ", href: "the-stages" }, {}, {})}come from there and are where dealers get
				their money to deal the game.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "tableLimits",
          title: "Are You Watching the Craps Table Limits?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-qrnxh6">The first thing is first: find the table with the lowest minimum bet. You&#39;ll find tables at
				their lowest limits during the day or middle of the week and at their highest on the
				weekends. A $5 game can eat $100 in a matter of minutes so make your money last by finding
				the cheapest table.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/craps-table-limits_640x360.webp",
                mdImg: "/images/" + url + "/craps-table-limits_960x540.webp",
                lgImg: "/images/" + url + "/craps-table-limits_1280x720.webp",
                title: "Craps Table Limits",
                alt: "Craps table limit sign with $10 minimum bet and $50 maximum bet."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "thePuck",
          title: "What Is the Puck for on a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-13koh5r">The Puck is double-sided and tells you which of the two stages the Craps game is in. One
				side is black and reads OFF. The other is white and reads ON.</p> <p class="mb-4">When the Puck reads OFF it will sit in the Don&#39;t Come betting area. This is known as the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Comeout\n			Roll",
                href: "the-stages"
              },
              {},
              {}
            )} and is the beginning of the game. This is the time to make your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} and ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})} bets.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/puck-off_640x360.webp",
                mdImg: "/images/" + url + "/puck-off_960x540.webp",
                lgImg: "/images/" + url + "/puck-off_1280x720.webp",
                title: "Puck Off",
                alt: "The Puck sitting in the OFF position in the Don't Come."
              },
              {},
              {}
            )} <p class="my-4">When the puck reads ON it will be sitting in one of the 6 Points: 4, 5, 6, 8, 9, or 10. This
				is known as the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Intermediate Roll",
                href: "the-stages"
              },
              {},
              {}
            )} and means the players are
				in the middle of the game. This is the time to make your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place Bets",
                href: "place-bet-basics"
              },
              {},
              {}
            )}, ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come Bets",
                href: "come-bet-basics"
              },
              {},
              {}
            )}, ${validate_component(Link, "Link").$$render($$result, { text: "Don't Come", href: "dont-come" }, {}, {})} Bets, and any ${validate_component(Link, "Link").$$render($$result, { text: "Hardways", href: "the-hardways" }, {}, {})} you may want.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/puck-on_640x360.webp",
                mdImg: "/images/" + url + "/puck-on_960x540.webp",
                lgImg: "/images/" + url + "/puck-on_1280x720.webp",
                title: "Puck On",
                alt: "The Puck sitting in the ON position and sitting in the Point 6."
              },
              {},
              {}
            )} <p class="mt-4" data-svelte-h="svelte-1t94hj3">Both Pucks must always be in the same position as the opposite side of the table. If you
				ever see either of these Pucks in a different position than the other you must tell the
				Dealer or Boxperson immediately because that&#39;s a HUGE mistake that needs to be fixed.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "theStick",
          title: "What Is the Stick for on a Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Stick is used to send dice to the players and collect them after the roll since some
				tables can be as long as 16ft. It is usually made of rattan, the material used in wicker,
				and is incredibly flexible, helping to navigate the dice around the layout. The stick is
				used by a dealer called ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Stickperson",
                href: "the-crew"
              },
              {},
              {}
            )}, who uses it to run
				the game&#39;s pace, point at people who need to get paid or push cheques all over the place.
				It&#39;s pretty fun to play with the stick.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-stick_640x360.webp",
                mdImg: "/images/" + url + "/the-stick_960x540.webp",
                lgImg: "/images/" + url + "/the-stick_1280x720.webp",
                title: "The Stick",
                alt: "Two dice near spot twelve on the layout. The dice are being pulled back by a black stick and it's being reflected in the mirror."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "theBowl",
          title: "Why Is There a Bowl on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Bowl is used to hold the extra dice not being used by ${validate_component(Link, "Link").$$render($$result, { text: "the shooter", href: "the-dice" }, {}, {})}. The Stickperson will lay the bowl down, place the remaining three dice inside, and place
				it against the mirror while the shooter is shooting. If a die or both dice land in the bowl
				during a roll then it is considered a no-roll.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-craps-bowl_640x360.webp",
                mdImg: "/images/" + url + "/the-craps-bowl_960x540.webp",
                lgImg: "/images/" + url + "/the-craps-bowl_1280x720.webp",
                title: "The Craps Bowl",
                alt: "An empty table with the stick laying flat and the bowl resting on top of the stick. Five dice sit in the bowl."
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
