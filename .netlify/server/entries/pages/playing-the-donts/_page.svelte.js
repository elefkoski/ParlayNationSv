import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Playing the Don’ts";
let description = "Winning quietly on the Craps table's Dark Side: Strategies for 'Don't' bettors on making smart bets, maintaining good relations, and enjoying victories subtly.";
let url = "playing-the-donts";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "Stand Next to the Base Dealer",
      href: "#baseDealer",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Make Come and Overlay Bets",
      href: "#comeOverlay",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: 'Use "Big Red" If Allowed',
      href: "#bigRed",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Celebrate Your Victories With Grace",
      href: "#withGrace",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Don't Root for the 7",
      href: "#noSeven",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-emgxji_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-1oefccn">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Playing the Don’ts Without the Table Hating You",
  "description": "Strategies for engaging in 'Don't' betting at the Craps table with etiquette tips to maintain a harmonious atmosphere despite betting against the majority.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/playing-the-donts",
  "image": "http://parlaynation.com/images/playing-the-donts/playing-the-donts-header.webp",
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
    "@id": "http://parlaynation.com/playing-the-donts"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Stand Next to the Base Dealer",
      "description": "Benefits of positioning yourself next to the Base Dealer for a smoother and less conspicuous Dark Side betting experience.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Optimal Positioning",
          "description": "Advantages of standing by the Base Dealer for strategic betting and reduced visibility among other players."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Make Don’t Come and Overlay Bets",
      "description": "Utilizing Don't Come and Overlay bets to engage in Dark Side betting without directly opposing the majority's Pass Line bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strategic Betting Choices",
          "description": "How Don't Come and Overlay bets allow for strategic, less confrontational betting against the table's trends."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Use “Big Red” if Allowed",
      "description": "The etiquette of using the term 'Big Red' for Any Seven bets as a respectful way to play without verbalizing the number seven at the table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Discreet Terminology",
          "description": "Adopting 'Big Red' as a discreet way to place certain bets, respecting table superstitions and maintaining harmony."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Celebrate Your Victories with Grace",
      "description": "Tips for modest celebration of wins to avoid antagonizing other players, especially when your win results from their loss.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Respectful Celebration",
          "description": "Approaches to celebrating Dark Side wins with discretion to keep the table atmosphere positive."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Do not Root for the 7",
      "description": "The importance of avoiding vocal support for the number seven during the game to prevent conflict and maintain table etiquette.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Maintaining Table Harmony",
          "description": "Why avoiding public support for the number seven is crucial for Dark Side players to coexist peacefully with others at the table."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-emgxji_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Betting",
          title: "Playing the Don'ts Without the Table Hating You",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4" data-svelte-h="svelte-ac95ht">Ever felt like the odd one out at a Craps table? If you&#39;re a &#39;Don&#39;t&#39; player, standing in a
				sea of Pass Line bettors, you&#39;re not alone. Most players don’t understand it, it requires
				some odd math, and it’s easier to have a negative connotation than to learn to accept it as
				part of the game. This is why many have not grown too fond of Don’t Players. The key is to
				win quietly, blending in yet standing out in your strategy.</p> <p class="pb-4">But there is nothing wrong with the Don’ts. It’s a better bet than the Pass Line by the
				slimmest of margins, so minuscule that its accumulation over a lifetime might barely afford
				a coffee, but it’s there. In this guide, we&#39;ll delve deep into the best practices of ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "Don't\n				betting",
          href: "the-donts"
        },
        {},
        {}
      )} — from choosing your spot next to the Base Dealer to utilizing Don&#39;t Come and Overlay bets.
				We&#39;ll even guide you through the etiquette of being a Don&#39;t bettor without antagonizing the crowd.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "dont-pass-with-lay-odds",
          title: "Don't Pass Bets With Lay Odds",
          alt: "Multiple don't pass bets with lay odds."
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "baseDealer",
          title: "Stand Next to the Base Dealer"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1fknuge">The Base Dealer is going to be your best friend at the table. Understanding what you’re
				doing, they should be able to have conversations that don’t require talking across other
				players, and be able to help with any convoluted math. Here are some advantages to the spot.</p> <ol><li data-svelte-h="svelte-hbmici"><span>You can become invisible - </span>Okay, not invisible, but it&#39;s right in the corner,
					a spot people can miss. Half the table won&#39;t know you&#39;re playing if you take a small step
					back on a busy game, and you don’t need to reach anywhere to make any bets so they don’t
					see you leaning across the table.</li> <li><span data-svelte-h="svelte-16h8w20">The Don’t Come is there - </span>Not too many players make ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Don’t Come Bets",
                href: "dont-come"
              },
              {},
              {}
            )}, but it’s conveniently placed where most Don’t players stand so it works well.</li> <li data-svelte-h="svelte-kucoxi"><span>You may get away with setting bets down in the apron - </span>When you’re betting
					Don’t Come Lay Odds, the dealer has to reach farther to retrieve your money in the COME
					than if you placed it straight down on the layout where you’re standing. You can expect
					some dealer to tell you to make sure you put the money in the COME.</li> <li data-svelte-h="svelte-4wj0vp"><span>You can get more personal help from the dealer - </span>Too many Don’t players don’t
					know how to play the Don’ts correctly. They don’t understand how to heel a bet, what side
					to put their Odds on, whether it’s bridgeable or not, what proper Lay Odds are, what their
					bets are supposed to win, or how to use commission on Overlays properly. You’re going to
					need the dealer at some point and standing right next to them makes life that much easier.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "comeOverlay",
          title: "Make Come and Overlay Bets"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1yfydf3">Don’t Come and Overlays may be my favorite way to play the Dark Side. You get to skip the
				Don’t Pass, avoiding a conflict of interest with the rest of the table, and you can be happy
				for them when they win. Makes for a more enjoyable game.</p> <ol><li><span data-svelte-h="svelte-bka5wf">Don’t Come Bets - </span>Don’t Come bets can only be made during the Intermediate
					Roll so the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )} has no bearing on them. They
					move into the next Point number that rolls and need the 7 to come before that Point. Since
					they are always betting against their Point, they can win during the Comeout Roll. When 7 rolls
					during ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Comeout Roll",
                href: "the-stages"
              },
              {},
              {}
            )}, the Pass Line Wins, and the
					Don’t Come Bets win. Wins all around!</li> <li><span data-svelte-h="svelte-qxeqdx">Overlay Bets - </span>You can bet and take down ${validate_component(Link, "Link").$$render($$result, { text: "Overlays", href: "overlays" }, {}, {})} at any time. For this reason, you can pick specific numbers people aren’t betting on or
					wait for the Comeout Roll to make the bets, so everyone wins when the 7 rolls.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "dont-come-bets-with-lay-odds",
          title: "Don't Come Bet With Lay Odds",
          alt: "Don't come bet with lay odds."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "bigRed",
          title: "Use 'Big Red' If Allowed"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">“Big Red” is a nickname for the ${validate_component(Link, "Link").$$render($$result, { text: "Any Seven", href: "any-seven" }, {}, {})} since it’s written in
				red on the layout. It is used as a courtesy to the rest of the table by avoiding saying “Seven”
				out loud. It can also be a disguise for other players not to know what you’re betting if they
				don’t know what “Big Red” means.</p> <p data-svelte-h="svelte-1k0y07q">Since the Any Craps and the COME bet are also written in red on the layout, some dealers
				will not accept that phrase and can say “No bet.” I think most dealers, myself included,
				will accept what you are saying and book the bet by saying “Any Seven” instead of repeating
				“Big Red”.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "withGrace",
          title: "Celebrate Your Victories With Grace"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ga54gv">I know it’s only fair you get to celebrate when you win; it’s why you’re here. But, while
				the rest of the table gets to give high-fives and props to the shooter, you’re usually left
				with your other hand, and the shooter isn’t looking for an ‘Atta boy’ from you.</p> <p>Oddly enough, going wild with celebrations and staying quiet can elicit the same response –
				${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "sneers and heckles",
                href: "not-to-do-at-craps-table"
              },
              {},
              {}
            )} from the table. Therefore,
				most Don’t players stay modest in their celebrations or are happy on the inside while also rooting
				for the other players when they decide to sit out a roll; garnering some goodwill.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "dont-come-bar",
          title: "Bet in Don't Come Betting Area",
          alt: "A bet sitting in the don't come bet area."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "noSeven",
          title: "Don't Root for the 7"
        },
        {},
        {
          default: () => {
            return `<p data-svelte-h="svelte-dopweq">Yelling “Seven! Seven! Seven! Seven! Seven!” during the Intermediate Roll is one of the most
				unwelcome actions you can make at the table. If you’re trying to start a war, this is the
				way to do it. When they inevitably win a round, you can bet at least half of them are going
				to have a word or two for you, so, to avoid conflict, maintain a composed demeanor while
				rooting for that 7 on the inside.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs"><p class="pb-4" data-svelte-h="svelte-cpckme">Being a successful Dark Side player in Craps requires a blend of strategy, discretion, and
				emotional control. From your table position to your betting choices and the terminology you
				use, every element plays a role. And while you may be playing against the tide, knowing how
				to celebrate discreetly ensures you remain in good standing with your fellow players.</p> <p>We may struggle to have acceptance of the ${validate_component(Link, "Link").$$render($$result, { text: "Dark Side", href: "dont-pass" }, {}, {})} for a long
				time to come but as more people learn it’s not a bad bet, the more people will be inclined to
				use it. You don’t need to wait though, go show people how it’s done.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
