import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Managing Your Craps Bankroll";
let description = "Bankroll strategies for Craps success: Discover how to play within your budget, optimize your bets, and enjoy the thrill of Craps without breaking the bank.";
let url = "managing-your-craps-bankroll";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "General Tips for Gamblers",
      href: "#generalTips",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Have a Betting Strategy in Mind",
      href: "#bettingStrategy",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Watch Table Limits",
      href: "#tableLimits",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Know Which Bets Are Good and Bad",
      href: "#knowWhich",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Getting Comped at the Table",
      href: "#gettingComped",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1ok3nig_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-w3fk09">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Managing Your Bankroll at the Craps Table",
  "description": "A comprehensive guide on how to effectively manage your money while playing Craps, including tips on setting limits, understanding bets, and leveraging casino comps.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/managing-your-craps-bankroll",
  "image": "http://parlaynation.com/images/managing-your-craps-bankroll/managing-your-craps-bankroll-header.webp",
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
    "@id": "http://parlaynation.com/managing-your-craps-bankroll"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "General Tips for Gamblers",
      "description": "Universal tips for managing finances at the casino, emphasizing the importance of playing within one's budget and setting clear limits to avoid overspending.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Financial Discipline",
          "description": "Strategies for ensuring responsible gambling, such as playing with affordable amounts, setting withdrawal limits, and having clear objectives."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Have a Betting Strategy In Mind",
      "description": "The significance of having a predefined betting strategy to monitor and adjust one's gambling approach based on table conditions.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strategic Betting",
          "description": "Advice on tracking bet amounts, adjusting strategies according to the game's flow, and sticking to familiar bets for better financial control."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Watch the Table Limits",
      "description": "Guidance on choosing tables with appropriate minimum and maximum bet limits to extend gameplay and maximize the gambling budget.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Table Selection",
          "description": "Factors to consider when selecting a Craps table, including bet limits and the impact on one's bankroll management."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Know Which Bets Are Good and Bad",
      "description": "Insight into the best and worst bets on the Craps table, advising players on where to place their money for optimal results.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bet Selection",
          "description": "Recommendations for prioritizing bets with the best odds and avoiding those with high house edges to preserve the bankroll."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Getting Comped",
      "description": "Tips on earning comps while playing Craps, including strategies for increasing one's average bet rating and negotiating with casino staff.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Leveraging Comps",
          "description": "Approaches for maximizing complimentary services from the casino as part of overall bankroll management."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-1ok3nig_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Money Management",
          title: "Managing Your Bankroll At the Craps Table",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs" data-svelte-h="svelte-s2l74v"><p class="pb-4">Craps can get a little crazy at times, and while you can&#39;t control the outcome of each roll,
				you can control how you manage your money. And in a game as inconsistent as craps, effective
				bankroll management isn&#39;t just a good idea – it&#39;s a necessity.</p> <p class="pb-4">From setting limits to understanding the best and worst bets on the table, this guide offers
				a look at how to manage your money while playing Craps.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "second-base-hook-looking-at-craps-table-layout",
          title: "Hook Looking at Craps Table Layout",
          alt: "Second base hook looking at Craps table layout"
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "generalTips",
          title: "General Tips for Gamblers"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-q98wg9">These tips aren’t exclusive to the Craps table and should help anyone worried about
				overspending at the casino.</p> <ol><li><span data-svelte-h="svelte-lute38">Play with money you can afford to lose - </span>If you can’t afford to lose it, then
					you shouldn’t be playing. You will get emotional, make mistakes you usually wouldn’t make,
					or ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "act in a manner",
                href: "not-to-do-at-craps-table"
              },
              {},
              {}
            )} that is unlike you. Knowing
					you can stay calm, cool, and collected knowing it’s not a big deal if you lose the money.</li> <li data-svelte-h="svelte-1ebmj8g"><span>Create limits - </span>I’ve seen players hit the ATM 3, 4, 5+ times in a night,
					dropping piles of crisp 20’s and 100’s like it’s no big deal. A few hours later, they
					unfold the receipts, add them up, and wonder what happened. Don’t be that person. Find a
					number and set that as your limit.
					<p class="pt-4">Here are some tips for not going over your limit.</p> <ol><li><span>Only bring the cash you are willing to spend - </span>ATM fees are enough not to
							want me to touch them, and many of them force you to take 100’s. I want none of that.
							I’ll hit my ATM for free, bring cash with me, and when it’s gone, it’s gone.</li> <li><span>Leave credit cards behind or hand them off to friends - </span>Make it as hard
							to get money as possible. Leave your cards in the room, at home, or in your vehicle. A
							friend could always say they lost your card when you want to be a glutton for
							punishment.</li> <li><span>Gamble alone - </span>You’re in a tough spot when you lose your money, are
							itching to get it back, but cannot leave. This is when an Uber may be cheaper than
							sticking around.</li> <li><span>Agree beforehand not to lend money - </span>If your friend is up big and you are
							broke, it’s easy to borrow money and easy for them to lend. If you decide to lend, get
							it back as soon as they make a big enough rally.</li> <li><span>Call your bank beforehand and lower the withdrawal limit - </span>It’s a small
							help in limiting losses but may still be circumvented with 24-hour customer service.</li> <li><span>Set a time to leave - </span>The last option is to leave at a particular time.
							The casino’s lack of windows and clocks is meant to have you lose track of time, but
							you can always set the alarm.</li></ol></li> <li><span data-svelte-h="svelte-zl8mb">Set goals - </span>Too many players have no idea how much money they want to win.
					Everybody’s number is different, but you need to be satisfied at some point. It’s painful
					to watch players win loads of money and then lose it all back because they didn’t know
					when to stop.
					<ul><li><span data-svelte-h="svelte-1qr6fjz">Pick a number and go for it - </span>If you ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "hit your goal",
                href: "a-great-craps-roll"
              },
              {},
              {}
            )}, you can adjust it to something higher and quit at your original goal if you fall
							back to it.</li> <li data-svelte-h="svelte-m7utpg"><span>You don’t need to hit the goal - </span>You’re allowed to stop whenever you feel
							happy with what you have. In the moments when you are extremely close to your goal,
							know that the small amount needed to get there isn’t worth everything you worked for
							up to that point. If you were in for $100 with a goal of $1,000, and you’re sitting on
							$940, it’s ok to quit the moment things start to sour.</li></ul></li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "bettingStrategy",
          title: "Have a Betting Strategy in Mind"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-7a9upp">A strategy lets you have an idea of how far your money can take you. It also allows you to
				follow the game more easily, which helps mitigate mistakes.</p> <ol><li><span data-svelte-h="svelte-1flbp87">Know how much money you’re betting - </span>Most Craps players don’t know how much
					money they’re betting. If you got $10 w/$10 Odds, $40 outside, and ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "$5 Hard Eight",
                href: "the-hardways"
              },
              {},
              {}
            )}, and it comes Point 7, then you had $65 on the table. If you came with $200, you could
					only try that three times before you ran out of money. Keep track of how much money you
					are winning on your bets, and try to figure out when you’re ahead of the roll (the $65 you
					started with). After I’m ahead of the roll is when I start to press.</li> <li><span data-svelte-h="svelte-zkqldq">Adjust your strategy - </span>You cannot keep the same strategy all night long. The
					table will run hot and cold, so you must adjust accordingly.
					<ul><li data-svelte-h="svelte-1prgser">When hot, you should increase your bets earlier; add more to your Odds, press bets, or
							add more numbers; try a parlay.</li> <li>When cold, avoid extra bets, presses, and parlays. Stick to the best-paying bets. When
							I’m on my last stand, I always use the money as ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})}.</li></ul></li> <li data-svelte-h="svelte-1a9ilsg"><span>Stick to bets you know - </span>Since there are dozens of bets on the Craps table
					it’s easy to throw money around. When you do, you have no clue how much you expect to win,
					how much you have spent, and which bets you have.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "pass-line-paid-quarters",
          title: "Multiple Pass Line Bets Paid",
          alt: "Multiple pass line bets paid."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "tableLimits",
          title: "Watch Table Limits"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-cu31zw">An easy way to kill your bankroll is to go to a table with a higher minimum than necessary.
				Don’t play at the first table you find; look around the limits and play at the cheapest
				table. You can bet more if it’s hot and the bare minimum when it’s cold.</p> <p data-svelte-h="svelte-17wqiq2">Here are some things to consider about table limits:</p> <ol><li data-svelte-h="svelte-bt9ddj">Odds can be less than the table minimum. Since the Odds have no advantage for the casino,
					they allow you to bet less. The min on the 6 &amp; 8 is 5, the 5 &amp; 9 is $2, and the 4 &amp; 10 is
					$1.</li> <li>Proposition bets are less than the table minimum. Most of these are one-roll bets and pay
					better than everything else on the table.
					<ol><li>The ${validate_component(Link, "Link").$$render($$result, { text: "Straight Up", href: "straight-up" }, {}, {})} and Horn Highs have a $1 min.</li> <li>The ${validate_component(Link, "Link").$$render($$result, { text: "C & E", href: "c-and-e" }, {}, {})} has a $2 min.</li> <li>Three Way Craps and ${validate_component(Link, "Link").$$render($$result, { text: "High Low Yo", href: "multi-bets" }, {}, {})} are $3 min.</li> <li>The ${validate_component(Link, "Link").$$render($$result, { text: "Horn", href: "horn" }, {}, {})} is a $4 min.</li> <li>The ${validate_component(Link, "Link").$$render($$result, { text: "Horn High", href: "horn-high" }, {}, {})} and ${validate_component(Link, "Link").$$render($$result, { text: "World", href: "world" }, {}, {})} have
							a $5 min.</li></ol></li> <li data-svelte-h="svelte-1dbxufz">Proposition minimums may change on $25 games. On a quarter game, the minimums change from
					$1 on all the Props to $5. These are the limits for a $25 game.
					<ol><li>The Straight Up and Horn Highs have a $5 min.</li> <li>The C &amp; E has a $10 min.</li> <li>Three Way Craps and High Low Yo are $15 min.</li> <li>The Horn is a $20 min.</li> <li>The Horn High and World have a $25 min.</li></ol></li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "knowWhich",
          title: "Know Which Bets Are Good and Bad"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-e8jidg">One of the worst things you can do to your bankroll is slowly wither it away by betting too
				many bad bets.</p> <p class="pb-4" data-svelte-h="svelte-euzc6l">Odds and Lay Odds are the best bets on the table. Odds you add to Pass Line and Come bets,
				while Lay Odds are for Don’t Pass and Don’t Come Bets. Odds are not required but highly
				recommended.</p> <p data-svelte-h="svelte-m4454z">Here are the best bets on the table after Odds:</p> <ol class="pb-4"><li data-svelte-h="svelte-ldcqiz"><span>The Don’t Pass and Don’t Come - </span>They are better than Pass Line and Come Bets
					by 0.05%, but not as fun to play.</li> <li><span data-svelte-h="svelte-1ug58ar">Pass Line and Come Bets - </span>I recommend the Pass Line because most of the table
					plays it, and the camaraderie makes Craps so much fun to play. You don’t get that same
					camaraderie with ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Come bets",
                href: "come-bet-basics"
              },
              {},
              {}
            )}, so while still as
					lucrative as the Pass Line, it’s not as much fun to play.</li> <li data-svelte-h="svelte-7hmdkn"><span>Place 6 or 8 - </span>These two are a lot of fun. They have a low house edge, roll
					all the time, and you could do cool presses with them.</li> <li data-svelte-h="svelte-am7yof"><span>Overlay a Point - </span>You can Overlay any Point at any time for a 5% commission
					on its winnings.</li> <li data-svelte-h="svelte-19paidr"><span>Place 5 or 9 - </span>While not as fun as 6 &amp; 8, they roll enough and pay well
					enough to make them a good bet.</li></ol> <p data-svelte-h="svelte-1pela8f">Here are some of the worst bets on the table:</p> <ol><li data-svelte-h="svelte-1geqa1p"><span>The Any Seven - </span>The Any Seven is the worst bet on the table with a house edge
					of 16.66%. It doesn’t pay enough when you’re hedging and has a negative connotation.</li> <li data-svelte-h="svelte-agxmay"><span>Straight 2 or 12 - </span>The High and the Low. People love them because they can
					make you rich quickly, but in the long run, they will suck your money away.</li> <li><span data-svelte-h="svelte-18bg253">World - </span>Since this bet includes the top two worst bets, it’s not one of the
					best bets. For some reason, I am still a fan of this bet for people who want to bet
					Propositions every ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}. It pushes when the 7
					rolls and prevents you from having to make another Comeout Roll Proposition bet.</li> <li data-svelte-h="svelte-wrzmoc"><span>Horn Highs and Horns - </span>These are not very good for the same reason as the
					World but they are still fun to play. For those who like to bet props, I recommend these
					for the Intermediate Roll.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "horn-bet-separated",
          title: "Four Dollar Horn Separated",
          alt: "Four dollar horn separated into multiple Straight Up bets."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "gettingComped",
          title: "Getting Comped at the Table"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-t0o3ol">Free stuff at the casino can be included in your bankroll. You should know, Odds at the
				Craps table do not count toward your average bet since the casino has no advantage, so don’t
				get upset when you don’t get a lot of points for your play. An excellent way to get a
				slightly higher avg bet is to take care of the dealers. They will take care of you if they
				see you are taking care of us.</p> <p class="pb-4" data-svelte-h="svelte-nzpoww">Regardless of how many points you may have acquired while playing, it will never hurt to ask
				the floor supervisor if there is anything they can do for you. Maybe enough for two to eat
				or a high-end drink.</p> <p data-svelte-h="svelte-1edggxa">One last thing. The server can be a major detriment to your bankroll if you decide to wait
				for a drink to arrive before leaving. I’ve seen too many players buy back into a game while
				waiting for a drink, only to lose it all. That’s an expensive drink. Save yourself. Walk in
				the direction you think they may be coming from to try and cut them off.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs"><p class="pb-4" data-svelte-h="svelte-j5s876">Managing your bankroll is essential for a successful session at the Craps table. From
				setting financial limits to choosing your bets wisely, each decision makes a difference to
				your overall game plan. With the right betting strategy, you can extend your playtime and
				increase your chances of hitting those hot streaks.</p> <p>So, whether you&#39;re a seasoned veteran or a ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "first-timer",
          href: "first-time-player"
        },
        {},
        {}
      )}, always play within your means and stick to bets you understand. It&#39;s not just about the
				bets on the table; it&#39;s about the thought and preparation that goes into each wager. Play
				smart, and let this strategy be your guide.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
