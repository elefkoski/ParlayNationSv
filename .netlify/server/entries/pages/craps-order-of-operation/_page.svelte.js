import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Craps Order of Operation";
let description = "Discover the critical order of operations at the Craps table with our detailed guide. Learn stick calls and betting sequences to anticipate dealer actions and optimize your strategy.";
let url = "craps-order-of-operation";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "What Are the Stick Calls",
      href: "#stickCalls",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Order of Operation - Pass & Don't Pass",
      href: "#oOoPassDont",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Order of Operation - Place & Come Bets",
      href: "#oOoPlaceCome",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Order of Operation - Don't Come and Overlays",
      href: "#oOoDcOverlays",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Order of Operation - Paying Proposition Bets",
      href: "#oOoProps",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Order of Operation - Betting Importance",
      href: "#oOoBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-7pakfv_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-6m6cuk">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Order of Operation At the Craps Table",
  "description": "A detailed guide to understanding the sequence of actions following a stick call in Craps, aiming to enhance player awareness and gameplay fluidity.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/craps-order-of-operation",
  "image": "http://parlaynation.com/images/craps-order-of-operation/craps-order-of-operation-header.webp",
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
    "@id": "http://parlaynation.com/craps-order-of-operation"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Stick Calls Explained",
      "description": "An introduction to stick calls in Craps and their significance in guiding the game's flow.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Function of Stick Calls",
          "description": "Detailed explanation of how stick calls instruct dealer actions and maintain order at the Craps table."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Order of Operation for Specific Bets",
      "description": "A breakdown of the specific order in which bets are paid and collected at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Pass Line and Don’t Pass Bets",
          "description": "Illustrating the procedure for paying out Pass Line and Don’t Pass bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Place Bets and Come Bets",
          "description": "Explaining the sequence of actions for paying Place and Come bets."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Don’t Come and Overlays",
          "description": "Detailing the order for paying Don’t Come Bets and Overlays."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Proposition Bets",
          "description": "Outlining the payment order for Proposition bets based on where the dice land."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Importance of Betting Order",
      "description": "Guidance on prioritizing bets to ensure strategic play and maintain balance at the table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Betting Priorities",
          "description": "Recommendations for the sequence of making bets to maximize potential winnings and manage risks."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-7pakfv_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Betting",
          title: "Order of Operation At the Craps Table",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4">We all know Craps can be overwhelming. Between the rapid stick calls and the flurry of
				betting actions, it&#39;s easy to lose track. This guide aims to be your anchor, offering a
				comprehensive understanding of how a stick call guides the dealers and the order in which
				bets are paid. If you can figure out the Order of Operation you’ll be able to anticipate
				what is going to happen and ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "be ready",
          href: "be-an-efficient-craps-player"
        },
        {},
        {}
      )} for
				when it’s your turn, allowing the game to develop a flow.</p> <p class="pb-4">We’ll walk you through a sample stick call, explaining how it leads to specific actions like
				paying out on the ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "Pass Line",
          href: "pass-line-basics"
        },
        {},
        {}
      )} or collecting losing bets.
				You’ll get the hang of not only what&#39;s happening but also why it&#39;s happening with each call and
				action. And whether you&#39;re the first or last to be paid, understanding the stick calls will give
				you a clearer path through the game.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "third-base-hook-looking-at-craps-layout",
          title: "Third Base Hook Looking At Craps Layout",
          alt: "Third base hook looking at Craps layout."
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "stickCalls",
          title: "What Are the Stick Calls"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1p43d0b">After the dice land in a game of Craps, the Stickperson makes a call that is known as a
				&quot;stick call”. They call out the number that was rolled and then instruct the Base Dealer on
				what action to take in a specific order. For novice dealers, stick calls are essential,
				reminding them of their actions whenever they tend to freeze up.</p> <p class="pb-4">Let&#39;s consider a stick call made when a 7 is rolled during the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}. This is the full stick call and how I would say it at a Craps table if I knew the base
				dealer had to complete all these actions after the roll:</p> <p class="pb-4 font-bold" data-svelte-h="svelte-f21rau">“Seven, winner seven, front line winner, take the don’ts, no field, pay the line, all
				working bets have action, save odds, pay behind.”</p> <ol class="pb-4"><li data-svelte-h="svelte-15j6iit"><span>“Seven, winner seven, front line winner” - </span>Let everyone know what happened;
					everyone on the front line (Pass Line) won.</li> <li data-svelte-h="svelte-8v4o4u"><span>“… take the don’ts” and “… no field”- </span>Take the two losing self-service bets –
					the Don’t Pass and the Field.</li> <li data-svelte-h="svelte-4zjw1h"><span>… pay the line” - </span>The ‘line’ is referring to the Pass Line.</li> <li><span data-svelte-h="svelte-1pnpzp0">“… all working bets have action” - </span>Take down all losing bets that were
					working. If the Player has any bets that are normally ‘off’, like Hardways or ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Odds for a\n					Come bet",
                href: "come-bet-odds"
              },
              {},
              {}
            )}, that are turned ‘on’, they will lose.</li> <li data-svelte-h="svelte-bkfbwp"><span>“save odds” - </span>Return bets with no action. Since the Odds on a Come bet are
					‘off’ during the Comeout Roll, they will be saved (returned), and the flat bet will lose.</li> <li><span data-svelte-h="svelte-v5uwku">“… pay behind” - </span>Pay the Don’ts that won. These are the ${validate_component(Link, "Link").$$render($$result, { text: "Don’t Come", href: "dont-come" }, {}, {})} and ${validate_component(Link, "Link").$$render($$result, { text: "Overlay", href: "overlays" }, {}, {})} bets that are located in the boxes ‘behind’
					the Place Bet boxes. These bets win when the 7 rolls, so they get paid.</li></ol> <p class="pb-4" data-svelte-h="svelte-1d1m01i">Experienced dealers do not need to say the entire stick call as they are already aware of
				what to do. It is more intended for novice dealers who require a little guidance. Also, if
				these bets are not being placed, then the entire call is unnecessary. There is a different
				stick call for each outcome of the dice during the Comeout Roll, the Intermediate Roll, and
				the Decision Rolls.</p> <p class="pb-4" data-svelte-h="svelte-18j2my8">95% of the time, all losing bets will be taken first, and the winners will be paid
				afterward. Taking an established Come bet during the Comeout Roll is the exception to the
				rule. When the 7 rolls, we return the Odds, pay the Don’ts, and then pick up the dead Come
				Bets.</p> <p data-svelte-h="svelte-fvpfzl">With that in mind, the order of operation for paying the rest of these bets involves taking
				all the losing bets before paying the winning bets. In all instances where there is a player
				bet and a dealer bet that wins, the player will always get paid first.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "oOoPassDont",
          title: "Order of Operation for Pass & Don't Pass"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-aihyxe">The Pass and Don’t Pass Bets are first to be taken care of when it comes time to pay.</p> <ul class="pb-4" data-svelte-h="svelte-1jdcocd"><li><span>Base to Stick - </span>When paying the Pass Line and the Don’t Pass, the dealers
					will always pay starting with the person closest to base and work towards the Stickperson.
					The player next to the Stickperson is the last to get paid.</li></ul> <p>If Odds are behind the Pass Line, ${validate_component(Link, "Link").$$render($$result, { text: "the Odds", href: "pass-line-odds" }, {}, {})} will be paid,
				then the Pass Line. The same applies to Lay Odds for the Don’t Pass. Lay Odds get paid, then
				the Don’t Pass.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "second-base-up-close-pass-and-dont-pass-bets",
          title: "Second Base Up Close Looking At Pass & Don't Pass Bets",
          alt: "Second base up close looking at pass and don't pass bets."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "oOoPlaceCome",
          title: "Order of Operation for Place & Come Bets"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1dkuyny">Place and Come bets are normally paid during the Intermediate Roll but during the Comeout
				Roll you can have a “working” Place Bet or an established Come Bet.</p> <ol data-svelte-h="svelte-1hh5bzv"><li><span>Order of Operation For Paying Come Bets</span> <ul><li><span>Stick to Base - </span>Just like Place Bets, Come bets are paid starting with
							the player next to the Stickperson and working down toward base.</li></ul></li> <li><span>Order of Operation For Paying Place Bets</span> <ul><li><span>Stick to Base - </span>The player next to the Stickperson is the first to get
							paid on Place Bets, while next to base is the last. BUYs are considered Place Bets
							when using order of operation, so those players will fall in line with the other Place
							bet bettors.</li></ul></li> <li><span>Order of Operation For Paying Both Come Bets and Place Bets</span> <ul><li><span>Come then Place - </span>It’s a little tricky, but you take care of all the
							players who have Come Bets, stick to base, then return to the player next to stick and
							pay all the Place Bets, stick to base.</li></ul></li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "oOoDcOverlays",
          title: "Order of Operation for Don't Come and Overlays"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When it comes time to pay ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Don’t Come and Overlays",
                href: "the-donts"
              },
              {},
              {}
            )}, it means
				there was a 7-out during the Intermediate Roll or a 7-winner during the Comeout Roll.</p> <ol data-svelte-h="svelte-p65pji"><li><span>Order of Operation For Paying Don’t Come Bets</span> <ul><li><span>Base to Stick - </span>The player closest to the Base Dealer gets paid first
							moving toward the Stickperson.</li></ul></li> <li><span>Order of Operation For Paying Overlays</span> <ul><span>Base to Stick - </span>Lay Odds are paid in order with Don’t Come Bets.</ul></li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "oOoProps",
          title: "Order of Operation for Paying Proposition Bets"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1p19bhd">Proposition Bets can be paid on any roll because you can bet them at any time and they are
				always working.</p> <ol data-svelte-h="svelte-1gjluu9"><li><span>Side Dice Land On - </span>The side of the table the dice land on is the side of the
					table that gets paid first. The shooters’ side of the table gets paid second.</li> <li><span>Base to Stick - </span>Like winning Pass and Don’t Pass bets, Proposition bets get
					paid starting with the player closest to the Base Dealer and then working their way toward
					the player next to the Stickperson.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "pass-line-paid",
          title: "The Pass Line Paid",
          alt: "The pass line paid."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "oOoBetting",
          title: "Order of Operation for Betting Importance"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-7fpg1k">Players get so caught up thinking about betting one thing that they’ll forget to bet
				another. Such as players waiting in line to get their Place Bets set up, and as soon as they
				get through the line, they sit back and relax, therefore missing their Odds bet. Or they are
				thinking so much about the Hardways that they forget to make a Place Bet.</p> <p data-svelte-h="svelte-1cnn69b">If you’re going to be paid on a bet, you want to ensure the best bets are set up first, then
				follow down the line.</p> <ol><li data-svelte-h="svelte-18i6yv7"><span>Make the Pass or Don’t Pass Bet - </span>The Don’t Pass is ranked 2 and the Pass
					Line is ranked 3 as the best bets on the table and are required to make the Odds bet.</li> <li data-svelte-h="svelte-wyufzy"><span>Bet Odds or Lay Odds - </span>These are the best bets on the table and in the
					building. They have no advantage for the casino.</li> <li data-svelte-h="svelte-12sxy7v"><span>Bet Come or Don’t Come Bets - </span>Just as good as the Pass and Don’t Pass because
					they win and lose the same way.</li> <li data-svelte-h="svelte-1c1279v"><span>Make your Place Bets - </span>The best ones are the 6 &amp; 8. So you know, placing the
					4 &amp; 10 isn’t really that great; the Field is a better bet. But buying the 4 &amp; 10 is a
					different story – those are great bets.</li> <li data-svelte-h="svelte-1m9p23x"><span>Bet any Overlays - </span>These are some top-level bets no matter which number you
					decide to Overlay.</li> <li><span data-svelte-h="svelte-l2oqxj">Bet the Field - </span>Of all the bets you can make on the table, ${validate_component(Link, "Link").$$render($$result, { text: "the Field", href: "the-field" }, {}, {})} is not the worst but not near the most important when it’s crunch time to make bets.</li> <li data-svelte-h="svelte-1njhths"><span>Bet your Hardways - </span>Of all the one-roll Propositions, the Hardways are the
					best.</li> <li data-svelte-h="svelte-6jvq3v"><span>Bet the rest of the Propositions - </span>These should be the least of your
					concerns. If you’re running out of time and you have to choose between making a
					Proposition bet and any other type of bet, you should go with the other bet.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs" data-svelte-h="svelte-5h76ta"><p class="pb-4">Stick calls and betting order in Craps are far from random; they are designed to maintain a
				smooth and fair game. From taking all losing bets first to paying all the winners, each
				procedure has its purpose. Knowing these procedures is essential not just for dealers but
				also for players to navigate the game efficiently.</p> <p>When you finally understand the dealer&#39;s workflow, you can watch the game on a completely
				different level. You can notice when you’re about to be paid, how much time you have left to
				make a bet, and when the game is slowing down. Additionally, you can notice when the
				Stickperson sends the dice, and balances that timing with the payments of the Base Dealer.
				This deeper understanding of the game adds another level of flow and appreciation to playing
				Craps.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
