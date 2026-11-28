import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { B as BlogH3 } from "../../../chunks/BlogH3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "Protecting Your Money";
let description = "A player's guide to Craps awareness: Equip yourself with strategies to avoid distractions, understand dealer payouts, and correct mistakes swiftly for a smooth betting experience.";
let url = "protecting-your-money";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "Getting Distracted at the Tables",
      href: "#gettingDistracted",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Worrying About Other Players",
      href: "#otherPlayers",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Keeping an Eye on the Dealer",
      href: "#keepAnEye",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1i6soc3_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-2kf1mc">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Protecting Your Money At the Craps Table",
  "description": "A guide to recognizing and mitigating common mistakes at the Craps table, from player confusion to dealer errors, ensuring a secure and enjoyable gaming experience.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-08",
  "url": "http://parlaynation.com/protecting-your-money",
  "image": "http://parlaynation.com/images/protecting-your-money/protecting-your-money-header.webp",
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
    "@id": "http://parlaynation.com/protecting-your-money"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Getting Distracted",
      "description": "The most common mistakes at the Craps table often stem from player distraction, leading to missed or forgotten bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Avoiding Distractions",
          "description": "Tips for maintaining focus and awareness to prevent missing out on wins or placing unintended bets."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Worrying About Other Players",
      "description": "How to handle confusion when bets get mixed up with others', ensuring your bets and payouts are correctly identified.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Managing Bet Confusion",
          "description": "Strategies for avoiding and rectifying situations where bets or payouts are claimed by the wrong player."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Self-Service Mistakes",
      "description": "Guidance on minimizing errors with self-service bets, particularly in busy areas of the table like the Field and Come bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Mitigating Self-Service Errors",
          "description": "Recommendations for clear bet placement and vigilance to ensure your bets are recognized as yours."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Dealer Payout Mistakes",
      "description": "Common scenarios where dealers may pay out to the wrong player and how to quickly resolve these errors.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Correcting Dealer Errors",
          "description": "Approaches to address and correct payout mistakes without disrupting the flow of the game."
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Keeping an Eye on the Dealer",
      "description": "The importance of monitoring dealer actions to ensure bets are placed correctly and payouts are accurate.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Monitoring Dealer Actions",
          "description": "Tips for staying aware of dealer movements and ensuring your bets are managed properly."
        }
      ]
    }
  ]
}<\/script><!-- HEAD_svelte-1i6soc3_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Money Management",
          title: "Protecting Your Money At the Craps Table",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs"><p class="pb-4">Do you think Craps is only about dice and numbers? Think again. While the game has its
				inherent risks and rewards, there&#39;s another crucial factor at play: the human element. Yes,
				we&#39;re talking about you, your fellow players, and even ${validate_component(Link, "Link").$$render(
        $$result,
        {
          text: "the dealers",
          href: "tipping-the-dealers"
        },
        {},
        {}
      )}.</p> <p class="pb-4" data-svelte-h="svelte-ew29qj">We&#39;ll dive into the common mistakes that can happen at a Craps table—be it players mixing up
				bets, dealers placing things incorrectly, or payout mixups. Whether it&#39;s a player picking up
				a payment for a bet they didn&#39;t place or a dealer making an error in payment, our guide will
				prepare you to navigate these pitfalls and keep your game strong.</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "field",
          title: "Bets in the Field",
          alt: "Several bets sitting in the Field"
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "gettingDistracted",
          title: "Getting Distracted at the Tables"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-tujyav">Getting distracted is easy when you’re talking and having fun. Mix in some mood-altering
				substances and entire blocks of time disappear from people&#39;s memory. A player will ask,
				“What happened to my 6 &amp; 8!” while I respond, “ Sir, that was three rolls ago.” They reply,
				“Oh no, no, no.” while they look around at the other players are shaking their heads yes. It
				happens all the time.</p> <p>And what’s more funny, and ironic, is a minute later, the player standing next to that guy
				will ask me, “Where is my ${validate_component(Link, "Link").$$render($$result, { text: "6 & 8", href: "place-bet-basics" }, {}, {})}?” and, having been
				distracted, reply, “Uh oh, knew I was missing something!”</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "second-base-overhead-looking-at-craps-layout",
          title: "Second Base Looking At Craps Layout",
          alt: "Second base looking at Craps layout."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "otherPlayers",
          title: "Worrying About Other Players"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-n4e43h">You’ll find a fair share of confused players at the Craps table, resulting in your money
				accidentally being picked up by them. Sometimes they are under the impression they made a
				bet that they didn’t. Other times the dealer could give them money that was supposed to go to
				you but since you were distracted, it slipped by. These players may not be sure of what they
				bet, what they should be getting paid, or what even rolled, so they pick up any money placed
				in front of them.</p> ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Self-Service Mistakes" }, {}, {
              default: () => {
                return `<p class="pb-4">Many mistakes happen with self-service bets. This means watching the other players at the
					table. ${validate_component(Link, "Link").$$render($$result, { text: "The Field", href: "the-field" }, {}, {})} and ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "Come bets",
                    href: "come-bet-basics"
                  },
                  {},
                  {}
                )} are the two most notorious bets for players getting confused about whose bet is whose. When
					making these bets, try to place the bet in the same spot every time so you don’t need to question
					whether it may be yours or not.</p>`;
              }
            })} ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Dealer Payout Mistakes" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-15rrkbi">Another common mistake is when the wrong player picks up a payout handed off in the apron.
					This is usually not an egregious act and can be sorted out quickly.</p> <ol><li data-svelte-h="svelte-1q06mj"><span>A dealer may hand the payment to the wrong person - </span>A bet may be set up in
						the wrong spot or the players may have moved to a different spot at the table.</li> <li><span data-svelte-h="svelte-1ngvjhg">The stickperson could tell the Base Dealer to pay the wrong person - </span>The
						placement of certain bets on the layout is subjective, and paying the wrong player does
						happen when ${validate_component(Link, "Link").$$render($$result, { text: "two dealers", href: "the-crew" }, {}, {})} are not in sync with their bet placements.</li> <li data-svelte-h="svelte-lumngk"><span>The dealers may be paying the wrong bet - </span>This usually happens when the
						stickperson, who uses countless formulas to determine payment, uses the wrong formula to
						make your payment.</li> <li data-svelte-h="svelte-hm9v33"><span>The Base Dealer may have heard the wrong number - </span>If spotted fast enough,
						it’s no problem to undo. If the dealer finishes a lot of action, the game is coming to a
						stop and we have to reverse-engineer everything that happened. No fun at all. If you
						notice a dealer paying the wrong number, please don’t be afraid to say something.</li></ol>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "second-base-up-close-with-place-and-come-bets",
          title: "Up Close Craps Layout Looking at Come and Place Bets",
          alt: "Up close Craps layout looking at come and place bets."
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render(
        $$result,
        {
          id: "keepAnEye",
          title: "Keeping an Eye on the Dealer"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-nwrqs9">Many mistakes can be mitigated before they ever happen by keeping an eye on the dealer.
				Chips get shuffled around all the time and it isn’t hard to move the wrong person’s bet, put
				the bet on the wrong number, or press the wrong bet. You also have to worry about being paid
				incorrectly. If you don’t know your payments, you can never fight it.</p> ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Dealer Placements" }, {}, {
              default: () => {
                return `<p class="pb-4">First, you need to know where your spot is on the table. You can’t follow your money if
					you don’t know where your spot is. Watch the Base Dealer set up your Place Bets, and that
					will be your spot for each number across the board. ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "Proposition bets",
                    href: "proposition-bets"
                  },
                  {},
                  {}
                )} are more tricky because there is less space to deal with all the players’ bets.</p> <p class="pb-4" data-svelte-h="svelte-15fqr6v">Once you know where your spot is, you can watch the dealer while they are setting up your
					bets. It’s worth noting that different dealers set up bets in different spots, so as new
					dealers are coming in, you need to keep an eye on where that dealer places your money. It
					should stay close to where the previous dealer had your money set up.</p>`;
              }
            })} ${validate_component(BlogH3, "BlogH3").$$render($$result, { title: "Dealer Payments" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-pofx2e">Even the simplest payments get paid incorrectly. Not because the dealer can’t handle it
					but because we are human, and mistakes happen.</p> <ol class="pb-4"><li><span data-svelte-h="svelte-md3j1e">Bad math - </span>There is a lot of bad math in Craps. Plenty of experienced
						dealers will multiply, then add, then subtract, and then get the wrong answer. This is
						why we have multiple people verify the amount. Might everyone be wrong? Yes, so you
						still need to ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "worry about your payments",
                    href: "win-a-craps-dispute"
                  },
                  {},
                  {}
                )}.</li> <li data-svelte-h="svelte-1sg1l0c"><span>Chips were wrong - </span>Even if they intend to give you the right amount, there
						is still a chance they grabbed the wrong chips on accident. They may say, “$70 same
						bet,” and hand you $14. They grabbed the wrong chips. A quick fix when you ask, “What’s
						this?”</li> <li data-svelte-h="svelte-afpox3"><span>They saw the wrong bet - </span>This can happen when paying any bet. When paying,
						dealers may not notice higher denomination chips hiding under lower denomination chips.
						They will pay you while thinking the bet is something it is not.</li> <li data-svelte-h="svelte-1jrwl4c"><span>Heard the wrong amount - </span>The Base Dealers misinterpret the stickperson all
						the time. They can be telling the Base Dealer to pay a player $925 and they could have
						heard $525. Mixing nines and fives in Craps is pretty common.</li></ol> <p></p>
				The worst thing a dealer could do is take your money, lock it up, then never do anything else.
				This happens when they pick up money and then get interrupted. While dealing with this new problem
				they, without even realizing it, lock up your chips. There may be a chance they’re holding your
				bet in their head, but make sure they set it up in a timely manner, and remind them if they don’t.`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs" data-svelte-h="svelte-7xjx7e"><p class="pb-4">The moral of the story is there will always be mistakes. You’re not going to catch them all
				but you should at least be able to fend off the vast majority. I’d say the Craps crew does a
				well enough job protecting your money because they work as a team, and in the end,
				mistakes balance themselves out – sometimes you’ll get overpaid and sometimes underpaid.</p> <p>If you’re trying to be top-notch, the challenge is clear, be proactive, not reactive. Know
				your table position, watch the dealer&#39;s actions, and always be ready to speak up if
				something seems off. Mistakes can happen at any moment, affecting your game and possibly
				your winnings.</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
