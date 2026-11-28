import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { B as BlogH3 } from "../../../chunks/BlogH3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Win a Craps Dispute";
let description = "Master the art of resolving Craps disputes: Gain insights on dealer dynamics, track your bets accurately, and advocate effectively to protect your interests.";
let url = "win-a-craps-dispute";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "How You Can Be Wrong",
      href: "#betsCanBeWrong",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "How the Dealers Pay",
      href: "#howDealersPay",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "How Much Your Bet Pays",
      href: "#betPays",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Where Your Bets Are",
      href: "#knowWhere",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Be Careful of Common Mistakes",
      href: "#beCareful",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Get the Dealers on Your Side",
      href: "#dealersSide",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Be Careful of Slow Games",
      href: "#slowGames",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-17gqc6o_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-hh9p0h">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Win a Dispute at the Craps Table",
  "description": "A guide on navigating and resolving disputes at the Craps table, emphasizing understanding of gameplay, common mistakes, and strategies to align with dealers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/win-a-craps-dispute",
  "image": "http://parlaynation.com/images/win-a-craps-dispute/win-a-craps-dispute-header.webp",
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
    "@id": "http://parlaynation.com/win-a-craps-dispute"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Understanding How You Can Be Wrong",
      "description": "Recognizing common scenarios where players may misinterpret game outcomes or overlook their own actions at the Craps table.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Misinterpretations and Oversights",
          "description": "Examples include missing a losing bet, believing a non-existent bet was placed, and misremembering actions regarding bets."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Understanding How the Dealers Pay",
      "description": "Insight into the dealers' process for managing and paying out bets, emphasizing the importance of bet visibility and clarity for resolution.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Dealers' Payment Process",
          "description": "Explains the methodical approach dealers take to resolve bets and the critical nature of bet placement and acknowledgment."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Know How Much Your Bet Pays",
      "description": "Advice on understanding the payout amounts for various bets to ensure correct payment and facilitate dispute resolution.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Learning Standard Payouts",
          "description": "Strategies for keeping track of expected payouts for personal betting patterns to verify dealer accuracy."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Know Where Your Bets Are",
      "description": "Tips on maintaining awareness of bet placements relative to your position to prevent disputes.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bet Placement Awareness",
          "description": "Guidelines for monitoring the placement of bets to ensure they are recognized as yours."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Be Careful of the Common Mistakes",
      "description": "Highlighting frequent errors made by dealers and players, and how to preemptively address them.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Avoiding and Addressing Mistakes",
          "description": "Awareness of typical mistakes, such as automatic dealer actions and misunderstanding bet commands, to mitigate potential disputes."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Get the Dealer on Your Side",
      "description": "The importance of fostering a positive relationship with dealers for a better gaming experience and dispute resolution.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Building Rapport with Dealers",
          "description": "Encouragement of tipping and respectful interaction to gain dealers' support and benefit from their discretion in ambiguous situations."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Be Careful of Slow Games",
      "description": "Warnings about the increased risk of mistakes during slow game periods and strategies for maintaining vigilance.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Maintaining Focus in Slow Play",
          "description": "Advice on staying alert to prevent overlooked bets and errors during less active periods at the table."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-17gqc6o_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Dealing With Dealers",
          title: "How to Win a Dispute At the Craps Table",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4">Very early in your Craps career a mistake will be made by either you or the dealer. They
				happen all day, every day, without fail, and a wise player knows that the roll of the dice
				is only part of the game. The seriousness starts when you know you’re being ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "paid correctly",
          href: "your-money"
        },
        {},
        {}
      )}
				and you can keep an eagle eye on the dealer&#39;s moves.</p> <p class="pb-4" data-svelte-h="svelte-bm8735">In this guide, you’ll find methods to help understand what is happening, identify
				common mistakes dealers make, and learn tricks to have the dealer lean to your side.
				Consider this page an insider’s playbook to keeping things straight at the Craps tables.
				First up is trying to avoid confrontation by learning to look inward.</p></section> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "place-bets-off",
          title: "Off Button on Place Bet - Point 5",
          alt: "An off button on a place bet on the point five."
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "betsCanBeWrong",
          title: "Understand How You Can Be Wrong"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-125sqmj">Since Craps involves so much and moves so fast, it’s not hard to lose track of what’s
				happening. Here are some common instances where you may lose track of what happened.</p> <ol><li data-svelte-h="svelte-ltgbga"><span>Your bet lost - </span>Not noticing a losing bet is probably the most common issue.
					Turning around to talk to someone, looking down to grab your drink, glancing at your
					phone, being interrupted by the server, or even hearing/seeing the wrong number, are only
					some of the reasons you might have missed it. Find out what rolled by asking another
					player or the dealer and be sure that bet was supposed to lose before stirring up any
					trouble.</li> <li><span data-svelte-h="svelte-17jtofx">Your bet never existed - </span>“That was last roll.” is a commonly said statement.
					This usually means you’ve been making the same bet over and over, but this time did not,
					yet it feels like you did. It could also mean that you made those bets during the previous
					shooter. If they 7-out quickly, and the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "next shooter",
                href: "better-craps-shooter"
              },
              {},
              {}
            )} marks the same point just as quickly, you may look down at an empty layout thinking the
					dealer never set up or took down your money.</li> <li><span data-svelte-h="svelte-nsrh0c">You moved or took back your bet - </span>Usually you would bet a Place Bet on a
					number, then that number eventually becomes the Point. You take your Place Bet back
					because you have a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line Bet",
                href: "pass-line-basics"
              },
              {},
              {}
            )}, then when the
					next Point is established you ask where your original Place Bet was. You forgot it became
					the Point and you removed it previously.</li> <li data-svelte-h="svelte-16700x9"><span>It wasn’t your bet - </span>For those of you who know how to read the layout, being
					able to spot your money is a huge benefit. Sometimes, though, it can be a crutch. It
					starts when you question whether or not you had a bet, then you look down at the layout
					and see money that looks like it would be yours if you had made that very bet. That’s when
					you tell yourself that the bet does belong to you even though the dealer may have put it
					in the wrong spot or you are reading the layout the wrong way.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "howDealersPay",
          title: "Understand How the Dealers Pay"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1rur33b">When the table is busy, it’s near impossible for a dealer to remember all the bets given to
				them, so they read the bets on the layout like a book. We listen for the number that
				rolled, look at the number on the layout, we see a bet, we pay the player that corresponds
				to that bet, and then we’re done. To us, if a bet is not on the layout, it doesn’t exist.</p> <p class="pb-4" data-svelte-h="svelte-rq5lv5">If you say, “Hey, where’s my $150 Place bet on the 5?” I’ll look at your spot in the rail,
				I’ll look at your spot on the layout and if it’s not there, I’ll respond with, “I don’t have
				a bet there sir.” I can’t give you the bet because you asked me a question. Whether you’re
				right or wrong is almost irrelevant. We need to figure out what happened, and if neither
				side can explain it, the end result will lean toward an “I’m sorry sir.”</p> <p data-svelte-h="svelte-1313m3b">The way out of this situation is to be able to explain it all. You have to say, “Remember
				when my $15 Hard 8 rolled and I told you to parlay it and move it to the 5? You parlayed it
				but never moved it.” As I look at $150 on the Hard 8, I’ll say, “Oh yea, I remember. Many
				people parlay, but they never move it to a Place Bet. I’m sorry. My mistake.” And you won.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "three-way-crap",
          title: "Three Way Craps Proposition Bet",
          alt: "Three way crap set up."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "betPays",
          title: "Know How Much Your Bet Pays"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1j83udl">If the Dealers are having a tough time knowing what a Craps bet pays, I would expect you
				would as well. You don’t need to be doing Craps math every time you get paid, the easiest
				way is to learn only what your standard range of bets pay. For a novice player, this should
				be maybe a half dozen bets.</p> ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "The Pass Line and Odds" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-kq3l1e">The Pass Line will always get paid even money. $10 wins $10. $20 wins $20. The Odds pay
					differently depending on what the Point is but you don’t need to know that. You need to
					know that if your standard Odds bet is $10 then you should be getting $12 if the Point is
					6/8, $15 if the Point is 5/9, and $20 if the Point is 4/10. Remember $12, $15, and $20
					while keeping an eye on the Point and you’ll always know what you’re supposed to get paid.</p> <p class="pb-4">When you want to change your bet then scale the payment according to your bet. I.e. if you
					feel lucky and want to double your ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})} to $20 when the
					Point is Six and you know your standard $10 bet would pay $12, you can now double the payment
					and expect $24 when the Six is rolled.</p>`;
              }
            })} ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Place Bets" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1kiavmm">Like Odds, you only need to pay attention to what you’re getting paid on your bets, then
					scale up and down.</p> <p class="pb-4">${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "Place Bets",
                    href: "pass-line-basics"
                  },
                  {},
                  {}
                )} are also where you should pay attention
					to change. When you press the same way, you get the same change. Going from $12 to $18 on the
					6 or 8? $1 change. Going from $18 to $24? $15 change. Now you can tell something went wrong
					when you got change you weren’t expecting.</p>`;
              }
            })} ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Proposition Bets" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-rhh8rk">Proposition bets will get crazy. Try one or two bets. Learn what they pay, then add
					different bets from there. If you stick to the basic bets and amounts, then you should be
					able to learn your payments.</p> <p class="pb-4" data-svelte-h="svelte-ibcf7m">If you decide you want to go crazy and bet a bunch of stuff, then I would trust the
					dealer. Don’t ask, “Is this right?” if you don’t know what it should pay. If you want to
					fight it, you should at least know what happened, put your payout on the side, mentally
					prepare what you bet, then confront the dealer.</p> <p data-svelte-h="svelte-kh8x9r">Something like this:</p> <ul class="pb-4"><li>Wait for the dealer to be done with what they are doing, then say, “Excuse me, can you
						double-check this one more time? I have $91 here. I bet a $12 ${validate_component(Link, "Link").$$render($$result, { text: "horn", href: "horn" }, {}, {})}, $10 each ${validate_component(Link, "Link").$$render($$result, { text: "high low", href: "multi-bets" }, {}, {})}, and a $25 ${validate_component(Link, "Link").$$render($$result, { text: "C & E split", href: "c-and-e" }, {}, {})}. The yo rolled. Are you sure $91 is right?”</li> <li data-svelte-h="svelte-q4wr2">I’ll be like… “Umm… 7 times 25 is 175 + 12 times 3 is 36, so 175 and 36 is 211 minus 20
						is $191. I paid the C &amp; E 3x instead of 7x. My mistake; here you go.” You got me again.
						Nicely done.</li></ul> <p class="pb-4" data-svelte-h="svelte-nmb5ot">On the flip-side, be warned. If you are proven wrong even a couple of times, there will be
					no more of that. We don’t have time to be babysitting. We have a whole table to take care
					of.</p> <p data-svelte-h="svelte-1vhfc7x">Remember not to mix up your money. The moment it touches other cheques, it is mixed and
					things get really murky.</p>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "knowWhere",
          title: "Know Where Your Bets Are"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-ebabtf">Keeping track of your bets is easier than knowing what they pay. Your bets are aligned with
				where your cheques are in the rail.</p> <p class="pb-4" data-svelte-h="svelte-w3rh6q">Place Bets are placed in a horseshoe pattern for each side of the table. The four spots next
				to the stickperson are the front four spots of the boxes, and the four spots next to the
				Base Dealer are the four rear spots.</p> <p class="pb-4" data-svelte-h="svelte-tfon2m">As long as you’re not moving your cheques to different spots in the rail, your bets should
				always be in the same spot. Watch where the dealer is placing your money; that will be your
				spot. Look for your money to be put in your spot when you give it to the dealer.</p> <p>Remember, when setting up ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Proposition bets",
                href: "proposition-basics"
              },
              {},
              {}
            )},
				dealers are more subjective about placement, and each dealer may do things differently.
				Don’t get married to your spot. Go with what the dealer does.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "beCareful",
          title: "Be Careful of the Common Mistakes"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-13zmrjk">This stuff happens all the time. Stay on the lookout so you can be ready to say something in
				the moment.</p> <ol><li><span data-svelte-h="svelte-rtunj9">The dealer acts on instinct - </span>When players constantly make the same moves, we
					begin to do things automatically. So if you start to make variations to your play, the
					dealers can easily make mistakes.
					<ul><li><span data-svelte-h="svelte-1kujngi">Players usually place the opposite number of the Point - </span>The Point
							becomes 8. You say, ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "“Place 8”",
                href: "place-bet-basics"
              },
              {},
              {}
            )}. The dealer
							places 6.</li> <li data-svelte-h="svelte-16nhe7a"><span>Players usually press the same number - </span>It’s the Intermediate Roll and
							the 9 rolls. You say, “Press the 5.” The dealer presses the 9.</li> <li><span data-svelte-h="svelte-1yhf0pj">Players usually bet the Hardway the Point is - </span>The Point is 6. You say,
							${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "“$1 hard eight”",
                href: "the-hardways"
              },
              {},
              {}
            )}. The dealer places it on 6.</li></ul></li> <li data-svelte-h="svelte-1gnp3n2"><span>The bet is never set up - </span>This happens frequently enough and mostly on Place
					and Proposition Bets. The dealer will book your bet, take your money, then never set up
					the bet. This happens because we don’t stop the game to set up every bet. Many lose
					instantly, so we only set them up if they win. Watch what the dealer does with your money
					and if your bet didn’t lose, make sure they set it up after the roll.</li> <li data-svelte-h="svelte-17xxbqn"><span>Another person picks up your money - </span>This could happen because the dealer
					handed the money off to the wrong person, and they don’t know what’s going on, so they
					pick it up. Another is if multiple players are betting on the Field or the Come and
					someone picks up your money because they thought it was theirs.</li></ol>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "up-close-hardways",
          title: "Multiple Bets on Hardways",
          alt: "Multiple bets on the hard six and eight."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "dealersSide",
          title: "Get the Dealer on Your Side"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">This I can’t stress enough. ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Take care of the dealers",
                href: "tipping-the-dealers"
              },
              {},
              {}
            )}. If you are an awesome player, I will do whatever I can to help you. If you challenge
				something and I doubt myself, I’m just going to say you’re right. Most dealers do what they
				can to help out friendly players. We’re not here to rob you or fight you; most of the time,
				the amount is so insignificant that we’ll give it to you and move on.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "slowGames",
          title: "Be Careful of Slow Games"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-17yplcf">When a game is slow, the job becomes monotonous. So much that we act on autopilot which is a
				recipe for disaster. You go from working to daydreaming about the lunch menu. You can hand
				the dealer money and they put it away like they found it lying there.</p> <p data-svelte-h="svelte-1qhtopv">Another issue is the dealer&#39;s cross-firing. That’s when the dealers are more interested in
				talking to each other than taking care of the customers. Too many mistakes are made during
				this time, and if you’re not on them, they’ll do stuff they never had a clue happened.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs"><p class="pb-4">So, challenge yourself. The next time you&#39;re at the Craps table, pay close attention to the
				details. Make it your mission to spot at least one thing you would have missed otherwise.
				From ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "calculating your expected payouts",
          href: "craps-calculators"
        },
        {},
        {}
      )} to watching the
				dealer&#39;s actions closely, each detail could be the difference between a winning or losing session.</p> <p data-svelte-h="svelte-1gsxirb">I know you’re not here to work, and that’s what this all is—lots of work. Mastering the
				Craps table is no small feat; being vigilant and informed are your best assets in this game.
				If you put in the time to learn, the work will turn into skill, and the next time an issue
				arises at the table, you will be armed with the knowledge necessary to win any argument.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
