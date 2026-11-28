import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Dealer Pet Peeves";
let description = "Navigate the Craps table like a pro: Avoid dealer pet peeves with these insider tips on betting etiquette, chip handling, and respectful gameplay.";
let url = "craps-dealer-pet-peeves";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "Things You Should Avoid",
      href: "#shouldAvoid",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Things to Watch Out For",
      href: "#watchOut",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Things We Don't Like",
      href: "#weDontLike",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1ux7sk3_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-16mpks4">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Craps Dealer Pet Peeves",
  "description": "An inside look at the common frustrations and pet peeves of Craps dealers, offering players insights on casino etiquette and how to create a positive table atmosphere.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/craps-dealer-pet-peeves",
  "image": "http://parlaynation.com/images/craps-dealer-pet-peeves/craps-dealer-pet-peeves-header.webp",
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
    "@id": "http://parlaynation.com/craps-dealer-pet-peeves"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Late Bets",
      "description": "Dealers express frustration when players attempt to place bets after the shooter has the dice. It disrupts the game flow and increases the chance for mistakes.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Disrupting Game Flow",
          "description": "The challenge late bets pose to maintaining a smooth and fair gaming experience."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Touching the Dice",
      "description": "Some players try to touch or influence the dice after they've been thrown, which is a serious breach of casino etiquette and security.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Security and Etiquette Breach",
          "description": "The implications of interfering with the dice, including potential security concerns and game integrity issues."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Ignoring Table Minimums/Maximums",
      "description": "Players who do not adhere to the posted table minimums and maximums create unnecessary delays as dealers have to enforce these rules.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Enforcing Table Rules",
          "description": "The extra effort required by dealers to remind players of and enforce betting limits."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Disputing Every Payment",
      "description": "Players who frequently question or dispute payments can slow down the game and create a tense atmosphere at the table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Creating Tension",
          "description": "The impact of constant disputes on game pace and table atmosphere."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Poor Tipping Etiquette",
      "description": "While tipping is not mandatory, dealers appreciate recognition for their hard work and expertise. Poor tipping or a complete lack of tipping can be disheartening.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Recognition of Service",
          "description": "The role of tipping in acknowledging and appreciating dealer effort and expertise."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Not Paying Attention",
      "description": "Dealers are frustrated by players who do not pay attention to the game, causing delays and requiring repeated instructions.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Game Delays",
          "description": "How inattentive players contribute to slowdowns and operational inefficiencies."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Throwing Chips",
      "description": "Tossing chips onto the betting areas instead of placing them can create confusion and slow down the process of collecting and paying out bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Causing Confusion",
          "description": "The challenges and delays caused by improperly tossed chips on the betting layout."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-1ux7sk3_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Dealing With Dealers",
          title: "Dealer Pet Peeves to Avoid",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4" data-svelte-h="svelte-w78wpz">Believe it or not, there are unspoken rules at the Craps table, a set of guidelines that can
				make or break your experience—and ours. Ever wonder why we don’t like “cheque change” right
				before we know you’re going to make a bet? Or why we groan when you ask for &quot;partial color&quot;
				in the middle of a roll?</p> <p class="pb-4">This is where we&#39;ll talk about the do&#39;s and don&#39;ts from the dealer&#39;s perspective. We&#39;ll
				explain why certain behaviors are discouraged and provide you with tips to make your time at
				the Craps table smooth and enjoyable. We&#39;ll also offer tips on what to watch out for, from
				making sure your ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})} are properly placed to understanding
				the importance of ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "tipping your dealer",
          href: "tipping-the-dealers"
        },
        {},
        {}
      )}.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "craps-dice-in-place-bets",
          title: "Craps Dice Resting in Place Bet Boxes",
          alt: "Two purple Craps dice sitting in the place bet boxes"
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "shouldAvoid",
          title: "Things You Should Avoid"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1e85599">These are the actions I suppose you should be allowed to do while playing but generally we
				don’t want it done.</p> <ol><li><span data-svelte-h="svelte-58fgqn">Asking for Partial Color - </span>If you want bigger chips, let me know and that’s
					what I’ll pay you with. We don’t want to interrupt the game unless you are leaving. If
					you’re going to stay then get rid of them other ways.
					<ul><li>Use the chips to make bets. If you’re holding 15 dollar chips, you can give the dealer
							10 of ‘em when making a Place or ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Proposition bet",
                href: "proposition-bets"
              },
              {},
              {}
            )}. Alternatively, you can place them as your Pass Line bet or in the Field and have
							the dealer convert them to nickels.</li> <li data-svelte-h="svelte-1dojp51">If you have more than a couple of stacks (20 chips/stack; 40 total) of the same color,
							you might get away with being allowed to do a partial color. Partial colors should
							always be perfect stacks of 20 chips and when ready ask the dealer “Can I color these
							stacks?” while holding them in the air. They can take the stack and slide it directly
							into the bank without having to count it, making the whole process quick and seamless.</li></ul></li> <li><span data-svelte-h="svelte-8vw6n0">Getting ‘cheque change’ to make a bet - </span>Consider the scenario where you want
					to place the 6 for $12. If you hand me a quarter and ask for &#39;cheque change,&#39; I&#39;ll give
					you five nickels. Afterward, you decide to make your bet by giving back three nickels,
					which results in unnecessary steps. Instead, simply drop the quarter and state your bet: &#39;${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place the six for $12",
                href: "place-bet-basics"
              },
              {},
              {}
            )}.&#39; This straightforward approach is more efficient, as I would then give you $13 in
					change, making the whole process one step.</li> <li data-svelte-h="svelte-gr3e27"><span>Bet Place Bets or Hardways during the Comeout Roll and stay off - </span>Avoid
					making Place or Hardway bets during the Comeout Roll, particularly if you&#39;re betting on
					the Pass Line. If the Place Bet becomes the Point, it must be moved, creating extra work.
					Players often bet more on the Hardway that becomes the Point, causing even more work for
					the dealer. To streamline the game, make Place Bets and Hardways during the Intermediate
					Roll unless you want to turn them ON during the Comeout Roll.</li> <li><span data-svelte-h="svelte-1sv34r5">Color up in the middle of a roll - </span>Most players won’t interrupt the game by
					coloring up during the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Intermediate Roll",
                href: "the-stages"
              },
              {},
              {}
            )}; they wait for
					the Comeout Roll which is only a few minutes away. Don’t be afraid to tell the dealers you
					need to go if that’s the case though. They will always accept your color, and it’s your
					right to leave at any time. But normally, I would wait until the puck turns OFF, then drop
					my money on the table.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "craps-table-layout-third-base",
          title: "Third Base Craps Table Layout",
          alt: "Third base overhead view of the Craps layout with many chips."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "watchOut",
          title: "Things You Should Watch Out For"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1lirtlk">These are things that are simple and common. Mistakes that happen when the player isn’t
				paying – simple mistakes that can easily be fixed.</p> <ol><li><span data-svelte-h="svelte-68ejoz">Odds being too close to your Pass Line - </span>You need to have enough space for
					the dice to land between your ${validate_component(Link, "Link").$$render($$result, { text: "Pass Line", href: "the-pass-line" }, {}, {})} and its Odds.
					The width of two fingers is a good gauge to use. If the dice get caught between two bets, the
					dealer will have to make a call. Many times the call will be one that the table does not agree
					with causing some resentment and killing the vibe. We try to avoid this by making sure enough
					space is given to mitigate that issue altogether.</li> <li data-svelte-h="svelte-17smeak"><span>Your Pass Line Odds being improper - </span>The best thing about Odds is that it has
					no advantage for the casino, but when you make improper Odds, you’re giving an edge back
					to the casino – something you never want to do. When it comes to the dealers reminding you
					of this fact, some of them will and some of them won’t, so I wouldn’t count on them in
					this department. You need to stay on your game and bet 6 &amp; 8 Odds in multiples of $5 and
					anything even as Odds on the 5 &amp; 9.</li> <li data-svelte-h="svelte-15ihyih"><span>Leaving money on the table - </span>The dealers are constantly reminding players
					that some money on the table belongs to them. Maybe they were not paying attention or
					confused about what happened but either way, when the dealer tells you to pick up money,
					do it.
					<ol><li><span>You don’t pick up your payment - </span>People forget they make bets all the
							time. You may leave a bet in the Field if it wins or not know I handed you a Place bet
							payment.</li> <li><span>You don’t grab your change - </span>Many times it can take a couple of minutes
							for the dealer to get to setting up your bets. When they finally do give the change,
							the player forgets they never got it.</li> <li><span>You thought your bet lost but it didn’t - </span>Some players will hear the
							wrong number or don’t know how long a certain bet will last, causing them to think
							they don’t have a bet anymore. In contrast, they won, and money is on the layout
							waiting for them to scoop it up.</li></ol></li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "craps-stick-with-dice",
          title: "The Stick with Two Purple Craps Dice",
          alt: "The stick pulling two dice next to the mirror."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "weDontLike",
          title: "Things We Don't Like"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ud277l">There really isn’t anything wrong with all of this stuff. Not really. Some dealers don’t
				care either but I can say, for the most part, we&#39;re thinking something.</p> <ol><li><span data-svelte-h="svelte-h6zvsp">Asking if the payment is correct over and over again - </span>Everyone makes
					mistakes but if you don’t know what your bet is supposed to pay then learn. Use one of my
					${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "calculators",
                href: "craps-calculators"
              },
              {},
              {}
            )}. Figure out the payment before you
					even make the bet. If you know what the correct payment is then by all means ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "say something",
                href: "win-a-craps-dispute"
              },
              {},
              {}
            )}, “You gave me $12; is this correct? I thought a $4 Horn paid $27 when the 12 rolled.” I
					would say, “Yea, it does. Oops, here you go.” But none of this. “Are you sure?”, “Is this
					right?”, “This doesn’t look like enough” over and over again.</li> <li data-svelte-h="svelte-1l3wga2"><span>Tipping other players w/o tipping the dealer - </span>Sometimes our feelings get a
					little hurt when you take care of the other players, like the shooter, without
					acknowledging our efforts. While the shooter&#39;s role in rolling the dice is important, it
					doesn&#39;t involve the same level of work and skill as our responsibilities. We manage
					every aspect of the game, ensuring a smooth and fun experience for everyone. So, it&#39;s important
					to appreciate our hard work with appropriate tipping.</li> <li data-svelte-h="svelte-1dvudtg"><span>Dragging a chair to the table if you don’t need to - </span>A chair takes too much
					real estate. If you are an old, fragile person, sure, grab a chair. If you have some
					medical issues and need to sit, go ahead and grab a chair. If you’re a lazy person who
					wants to sit, I’m going to shake my head and hope the floor tells you to put it back. I
					know players in their 90’s that stand, so you can too.</li> <li data-svelte-h="svelte-fqlm7"><span>Leaving with a ton of chips - </span>There is no need to walk away with a bunch of
					chips. A simple bump and you’re picking them off the ground, hoping you didn’t lose one or
					another player hasn’t pinched one. We try to avoid putting fills on the game as much as
					possible, so when a player walks away with a pile of chips, we know they will soon have to
					be replaced.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs"><p class="pb-4">Knowing the do&#39;s and don&#39;ts at the Craps table can make your experience smoother and more
				enjoyable. From avoiding unnecessary ${validate_component(Link, "Link").$$render($$result, { text: "color-ups", href: "the-stages" }, {}, {})} in the middle
				of a roll to being mindful of leaving money on the table, these tips are designed to help you
				navigate the game efficiently. It&#39;s not just about understanding the game&#39;s mechanics, but also
				about respecting the flow and the other players.</p> <p data-svelte-h="svelte-aldvfp">Your next step is to apply these guidelines the next time you find yourself at a Craps
				table. Whether it&#39;s watching your Odds or avoiding unnecessary actions, you&#39;ll not only
				enjoy the game more but also earn the respect of dealers and other players.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
