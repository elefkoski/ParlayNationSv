import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Come vs Place Bets";
let description = "Explore the strategic nuances of Come and Place Bets in Craps with our guide. Learn how to leverage their advantages for your gameplay style, ensuring you make informed decisions at the table.";
let url = "come-vs-place-bets";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "Advantages of a Come Bet",
      href: "#comeBetAdvantages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Disadvantages of a Come Bet",
      href: "#comeBetDisadvantages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Advantages of a Place Bet",
      href: "#placeBetAdvantages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Disadvantages of a Place Bet",
      href: "#placeBetDisadvantages",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1llw691_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-jrhxv2">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Rivalry of Come and Place Bets",
  "description": "A comprehensive exploration of Come and Place Bets in Craps, highlighting the strategic considerations, advantages, and disadvantages of each bet type.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/come-vs-place-bets",
  "image": "http://parlaynation.com/images/come-vs-place-bets/come-vs-place-bets-header.webp",
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
    "@id": "http://parlaynation.com/come-vs-place-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Advantages of a Come Bet",
      "description": "Exploring the benefits of Come bets, including their low house edge and the option to add free Odds, enhancing potential winnings.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strategic Benefits",
          "description": "Details on how Come bets provide strategic advantages, like minimizing losses and leveraging the low house edge."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Disadvantages of a Come Bet",
      "description": "A look into the challenges and considerations when placing Come bets, including their contract nature and the requirement for the bet to hit twice.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Considerations for Players",
          "description": "Insight into the potential downsides of Come bets, highlighting the risks involved with their continuous action and the necessity for strategic play."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Advantages of a Place Bet",
      "description": "Outlining the advantages of Place Bets, such as their flexibility in betting, the ability to press or take down bets, and their straightforward approach.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Flexibility and Control",
          "description": "Exploring how Place Bets offer players control over their bets with the option to adjust betting strategies on the fly."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Disadvantages of a Place Bet",
      "description": "Examining the disadvantages of Place Bets, including their higher house edge on certain numbers and the potential for players to chase losses.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Risks and Limitations",
          "description": "Analysis of the cons associated with Place Bets, such as the increased house edge and the behavioral pitfalls they may encourage."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-1llw691_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Betting",
          title: "The Rivalry of Come and Place Bets",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4">Craps is as much about strategy as it is about luck. One minute you’re raking in the chips
				with a hot streak, and the next, you&#39;re regretting your choice between ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "a Come Bet",
          href: "come-bet-basics"
        },
        {},
        {}
      )} and a Place Bet. If you’ve ever been caught in this dilemma, you&#39;re not alone.</p> <p class="pb-4">This guide aims to clear up the ongoing debate between Come and
				${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "Place Bets",
          href: "place-bet-basics"
        },
        {},
        {}
      )}. By the end, you&#39;ll have a nuanced
				understanding that will help you make the best bet for your style of play.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "place-bet-on-point-five",
          title: "Place Bets and COME Betting Area",
          alt: "Place bets and the come betting area"
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "comeBetAdvantages",
          title: "Advantages of a Come Bet"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1x59jv7">The Come bet is a traveling Pass Line during the Intermediate Roll. While in the COME, they
				win and lose the same as the Pass Line; otherwise, they travel into a Point, and then you
				can add Odds. Mathematically, Come bets are superb bets.</p> <ol><li><span data-svelte-h="svelte-13uyxce">Very Low House Edge - </span>The Come bet has the same house edge as ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}, making it tied for the second-best bet on the Craps table, not including Odds/Lay
					Odds.</li> <li data-svelte-h="svelte-12y5fkk"><span>Free Odds - </span>Odds have no advantage for the casino, so being able to add them
					to your Come bet lowers the house edge even more.</li> <li data-svelte-h="svelte-13gm97n"><span>Point 7 Minimum Loss - </span>The Point 7, when a shooter establishes a Point then
					immediately rolls a 7, is the worst roll you can have. Making a Come bet during that 7-out
					lets you win a bet while losing your Pass Line, making your loss the minimum loss.</li> <li data-svelte-h="svelte-1en9qd5"><span>You Don’t Pick the Number - </span>You can’t get mad at yourself for losing money if
					the dice chose the wrong number to travel to.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "come-bets-on-point-five",
          title: "Come Bets on the Point Five",
          alt: "Come bets on the point five."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "comeBetDisadvantages",
          title: "Disadvantages of a Come Bet"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-zlhr5b">Many new players can’t wrap their heads around Come bets. Knowing they are mathematically
				better, even seasoned players will choose not to play them because there are so many
				disadvantages.</p> <ol><li><span data-svelte-h="svelte-nopcmh">Short Rolls - </span>After establishing a Point, the shooter may throw a couple of
					boxes, lining up several ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come bet w/Odds",
                href: "come-bet-odds"
              },
              {},
              {}
            )}. If the
					shooter then 7s out, you will have lost the maximum amount of money.</li> <li data-svelte-h="svelte-wbwqg1"><span>Come Bets are Contract - </span>Once a Come bet moves into a Point, you cannot take
					it back or turn it off. Like the Pass Line, it must be resolved by rolling its Point or a
					7.</li> <li data-svelte-h="svelte-1ts919l"><span>Come Bets Always Work - </span>You always risk losing your established Come bets to
					the roll of a 7. Some players do not wish to be forced into that much risk at all times.</li> <li data-svelte-h="svelte-mdrf28"><span>More Expensive - </span>To take full advantage of Come Bets, you should max your
					Odds bet. This turns a cheap bet into an expensive one.</li> <li data-svelte-h="svelte-om9y00"><span>Must Hit Twice - </span>First, a number rolls and the Come bet moves to its Point,
					then that number must roll again for you to get paid. It’s hard enough to have the number
					once, right?</li> <li data-svelte-h="svelte-1l2hwsl"><span>Pays Even Money - </span>Even money is for suckers. It applies in Blackjack and
					Craps. The Come bet&#39;s full value lies in getting paid for Odds.</li> <li data-svelte-h="svelte-11fdkpd"><span>You Don’t Pick the Number - </span>It’s not up to you where your Come bet travels
					to. It could be fours and tens all night, causing you to shake your head every time.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "placeBetAdvantages",
          title: "Advantages of a Place Bet"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1ks06dj">Place Bets are the preferred bet by players because of their flexibility and minimal cost.
				The fact that they are not contracted leaves the possibilities endless.</p> <ol><li data-svelte-h="svelte-eg5f3"><span>Low Cost - </span>You don’t have to add anything extra to a Place Bet, making your
					investment much smaller than a Come bet with Odds.</li> <li data-svelte-h="svelte-1c0368u"><span>Reduce or Take Down - </span>Taking risk off the table should be a comfort to the
					players. If your gut tells you something is wrong, you can take your money back or reduce
					it to a minimal amount.</li> <li><span data-svelte-h="svelte-1gnrjai">Presses - </span>This is where you can learn how to add money to your existing bets.
					${validate_component(Link, "Link").$$render($$result, { text: "Pressing", href: "presses" }, {}, {})} is fun; it’s creative, and the possibilities are endless.</li> <li data-svelte-h="svelte-mow2q2"><span>Move It Around - </span>If another number is hot and you don’t want to add more
					money to the table, you can move it anytime.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "place-bets-point-six",
          title: "Place Bets on Point Six",
          alt: "Place bets on the point six."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "placeBetDisadvantages",
          title: "Disadvantages of a Place Bet"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-7rwetm">The disadvantages are there, so don’t think Place Bets are all upside. The problem is
				getting your money back. You can quickly spread yourself thin and get into some trouble.</p> <ol><li data-svelte-h="svelte-5yig3k"><span>House Edge - </span>The house edge on the 6 &amp; 8 is almost as good as a Come bet, but
					when you get to Placing the 4 &amp; 10, the house edge starts to get pretty bad.</li> <li><span data-svelte-h="svelte-clx0f5">Understanding the Nuances - </span>You must understand commission when dealing with
					${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "buys on the 4 & 10",
                href: "buying-place-bets"
              },
              {},
              {}
            )} and know the proper Place Bet amounts
					for the 6 &amp; 8. When you get into Spread Bets, variations involved with different Points and
					different units, you can get overwhelmed.</li> <li data-svelte-h="svelte-1u5q660"><span>Point 7 Max Loss - </span>When you’re making a Pass Line with Odds, a couple of
					Place Bets, and the shooter immediately throws a 7, you’re in for a considerable loss. A
					few times of that, and you can be broke.</li> <li data-svelte-h="svelte-lhttiy"><span>Induces Chasing - </span>Players will watch a number roll 3, 4, or 5+ times and then
					think it’s an excellent time to bet on that number. Most of the time, it never rolls
					again.</li> <li data-svelte-h="svelte-1y9kla8"><span>Move It Around - </span>I don’t know if you’ve ever played whack-a-mole but watching
					players chase numbers by moving a single bet is entertaining. They will move a single bet
					to a number that keeps rolling then the dice will land on the number they just moved it
					from.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs"><p class="pb-4">Whether you’re in the camp of Place or Come bets, players will not bother each other over
				the choice. Many people will use the math argument to say that Come bets are better, and
				from a long-term ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "expected return",
          href: "rank-of-craps-bets"
        },
        {},
        {}
      )}, they may be
				correct, but in a game where players’ emotions come into play, Place Bets are too flexible
				to let go of.</p> <p data-svelte-h="svelte-geys20">So, you&#39;ve learned the advantages and disadvantages of Come and Place Bets in Craps. But
				have you considered how these bets fit into your overall Craps strategy? Each bet type has
				its own set of opportunities and limitations, so choose the one that aligns with your game
				plan.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
