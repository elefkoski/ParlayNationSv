import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "The Stages of a Craps Game";
let description = "There are two stages to Craps: the Comeout Roll and the Intermediate Roll. Some bets work during the Comeout Roll while some don't. Certain bets can only be made during certain stages of the game.";
let url = "the-stages";
let phref = "the-dice";
let prev = "The Dice";
let nhref = "verbal-betting";
let next = "Verbal Betting";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "The Comeout Roll",
      href: "#comeoutRoll",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Intermediate Roll",
      href: "#intermediateRoll",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Buying In",
      href: "#buyingIn",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Coloring Up",
      href: "#colorUp",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "The Number Seven",
      href: "#numberSeven",
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
  return `${$$result.head += `<!-- HEAD_svelte-5anlkw_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-10vywal">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Stages of a Craps Game",
  "description": "An in-depth look at the two main stages of a Craps game, strategies for buying in and cashing out, and the significance of the number 7.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-stages",
  "image": "http://parlaynation.com/images/the-stages/the-stages-header.webp",
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
    "@id": "http://parlaynation.com/the-stages"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "Exploring the fundamental stages and procedures of playing Craps, including the unique aspects of the number 7.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "The Comeout Roll Is the First Stage of a Craps Game",
          "description": "Introduces the Comeout Roll as the initial phase of Craps, outlining the bets placed during this stage and their working status."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Intermediate Roll Is the Second Stage of a Craps Game",
          "description": "Describes the Intermediate Roll, where the game intensifies with established points, and all bets are active."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Do You Buy In at the Craps Table?",
          "description": "Offers guidelines for buying in during the Comeout Roll to avoid disrupting the game's flow."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Is it to 'Color Up' at the Craps Table?",
          "description": "Explains the process of cashing out or 'coloring up' cheques for larger denominations at the appropriate game stage."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "What's With the Number 7 in a Craps Game?",
          "description": "Examines the superstitions surrounding the number 7 and its impact on betting strategies during different stages of the game."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-stages/the-comeout-roll_640x360.webp",
      "caption": "The Puck in the Don't Come in the Off position with bets on the Pass Line and the Don't Pass."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-stages/the-intermediate-roll_640x360.webp",
      "caption": "A Craps table with the Puck in the ON position sitting on the Six. There are a lot of bets on the layout."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-stages/buying-in_640x360.webp",
      "caption": "Three one-hundred dollar bills laid out on the Craps table in front of the Box."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-stages/cashing-out-a_640x360.webp",
      "caption": "Four stacks of cheques on the layout next to the mirror representing a player coloring up."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-stages/the-number-7_640x360.webp",
      "caption": "Two blue dice on green felt. First has the six up and the second a one."
    }
  ]
}<\/script><!-- HEAD_svelte-5anlkw_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Basics",
          title: "The Stages of a Craps Game",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-15oa5q">One of the biggest problems new Craps players have is understanding that the game is played in
				two stages. Sometimes a seven will cause you to win while other times you&#39;ll lose. Sometimes
				they take your money when a 2 rolls. Sometimes they don&#39;t. Other times you may think you won a
				bet... but you didn&#39;t. It was the wrong stage of the game. Understanding the two stages of
				the game is key to understanding Craps.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/" + url + "_640x360.webp",
                mdImg: "src/images/" + url + "/" + url + "_960x540.webp",
                lgImg: "src/images/" + url + "/" + url + "_1280x720.webp",
                title: "The Stages of a Craps Game",
                alt: "Overhead view of the Craps table with one Puck ON and another Puck OFF representing the two stages of a Craps game."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "comeoutRoll",
          title: "The Comeout Roll Is the First Stage of a Craps Game"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The Comeout Roll, when ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the puck",
                href: "the-craps-table"
              },
              {},
              {}
            )} is OFF, is the beginning
				of the Craps game, when the shooter is trying to determine a Point for the rest of the table.
				Before they try for a point, though, the dealers have to get everyone situated. Sort of the calm
				before the storm. This is when new players should be buying in, and people who are leaving should
				be coloring up. It&#39;s the best time to be checking your phone if you have to, making a strategy
				for when the Point is established, or mentioning the number 7.</p> <p class="pb-4">After buy-ins and color-ups, it&#39;s time to start betting. If you want to bet with the
				shooter, then get on the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}. If you want to
				bet against the shooter, get on the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})}. The Comeout
				Roll is also when most people bet their Proposition Bets like the ${validate_component(Link, "Link").$$render($$result, { text: "World", href: "world" }, {}, {})}, the ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Any\n		Craps",
                href: "any-craps"
              },
              {},
              {}
            )}, or the ${validate_component(Link, "Link").$$render($$result, { text: "Yo", href: "straight-up" }, {}, {})}.</p> <p class="pb-4">Also, not all bets on the Craps table are &#39;working&#39; or &#39;ON&#39; during the Comeout Roll. When a
				bet is &#39;working,&#39; it CAN win or lose on the next roll. When a bet is &#39;not working&#39; or &#39;OFF&#39;,
				it CAN NOT win or lose on the next roll. The bets that are &#39;not working&#39; or &#39;OFF&#39; during the
				Comeout Roll are ${validate_component(Link, "Link").$$render(
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
                text: "Come Bet Odds",
                href: "come-bet-odds"
              },
              {},
              {}
            )} and the ${validate_component(Link, "Link").$$render($$result, { text: "Hardways", href: "the-hardways" }, {}, {})}. You can always say to the dealer ${validate_component(Quote, "Quote").$$render($$result, { text: "Turn\n		my ____ bets on" }, {}, {})} or say you want them ${validate_component(Quote, "Quote").$$render($$result, { text: "working." }, {}, {})} The dealer will put an ON lammer on top of
				one of your bets, and you are now ready to get paid if your bet hits.</p> <p class="pb-4">One last thing to consider is that there are bets that you cannot bet during the Comeout
				Roll.
				${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line Odds",
                href: "pass-line-odds"
              },
              {},
              {}
            )}, ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Don't Pass Lay Odds",
                href: "dont-pass-lay-odds"
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
            )}, and the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Come", href: "dont-come" }, {}, {})} are all reserved for the next stage, the Intermediate Roll.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/the-comeout-roll_640x360.webp",
                mdImg: "src/images/" + url + "/the-comeout-roll_960x540.webp",
                lgImg: "src/images/" + url + "/the-comeout-roll_1280x720.webp",
                title: "The Comeout Roll",
                alt: "The Puck in the Don't Come in the Off position with bets on the Pass Line and the Don't Pass."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "intermediateRoll",
          title: "The Intermediate Roll Is the Second Stage of a Craps Game"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-abcl9h">The Intermediate Roll is when the Puck turns ON, and a Point has been established. This is
				when the shooter tries to make their Point so everyone at the Craps table can win. You start
				to see mountains of cheques on the layout, and your head explodes, wondering how the dealers
				keep track of it all.</p> <p class="pb-4">The Intermediate Roll is where the betting world of Place Bets comes to life with ${validate_component(Link, "Link").$$render($$result, { text: "Buys", href: "buying-place-bets" }, {}, {})} and ${validate_component(Link, "Link").$$render($$result, { text: "Power Presses", href: "presses" }, {}, {})}! Hardways being parlayed! Odds being
				maxed! And Come Bets being very boring... like they usually are. It&#39;s when nothing is OFF,
				and everybody is holding their breath every roll. It&#39;s when you really start to feel the
				essence of what Craps has to offer. The flow of a Craps game.</p> <p class="pb-4" data-svelte-h="svelte-1kse1m9">So don&#39;t go messing up the flow of the game by buying in during the Intermediate Roll. Don&#39;t
				be coloring up. Don&#39;t be sticking your hands on the table when the dice are out. Don&#39;t be
				making late bets, and be ready for what you want to do next. Keeping the flow of the game
				makes playing Craps so much more fun for everyone.</p> <p class="pb-4">Keep in mind during the Intermediate Roll, you can take back or remove all bets from the
				table except for the Pass Line or a Come Bet after it has traveled into a Point. You can
				also say to the dealer ${validate_component(Quote, "Quote").$$render($$result, { text: "Turn my bets OFF" }, {}, {})} if you only want to skip a roll or two
				but remember to turn them back on when you&#39;re ready.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/the-intermediate-roll_640x360.webp",
                mdImg: "src/images/" + url + "/the-intermediate-roll_960x540.webp",
                lgImg: "src/images/" + url + "/the-intermediate-roll_1280x720.webp",
                title: "The Intermediate Roll",
                alt: "A Craps table with the Puck in the ON position sitting on the Six. There are a lot of bets on the layout."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "buyingIn",
          title: "How Do You Buy In at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">It&#39;s suggested to wait until the Comeout Roll to buy cheques because some players feel that
				if you buy cheques in the middle of a roll it messes with the flow of the game, although it
				is your right to make a bet any time. You can walk up, put money on the table and tell them
				what bet you want. After ${validate_component(Link, "Link").$$render($$result, { text: "the Boxperson", href: "the-crew" }, {}, {})} has counted out your money,
				one of the Base Dealers will hand you your cheques. You can then pick them up, put them in ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "the rail",
                href: "the-craps-table"
              },
              {},
              {}
            )}, and be ready to play.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/buying-in_640x360.webp",
                mdImg: "src/images/" + url + "/buying-in_960x540.webp",
                lgImg: "src/images/" + url + "/buying-in_1280x720.webp",
                title: "Buying In",
                alt: "Three one-hundred dollar bills laid out on the Craps table in front of the Box."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "colorUp",
          title: "What Is it to 'Color Up' at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">When it&#39;s time to go, please don&#39;t walk away with the cheques unless you have a handful or
				less. It would be best to wait until the current roll has ended and it&#39;s a new Comeout Roll.
				If you color up in the middle of a roll, you are saying the shooter isn&#39;t going to win, and
				you want to get out before they cost you any money. When the roll is over, tell the base
				dealer that you would like to ${validate_component(Quote, "Quote").$$render($$result, { text: "color up" }, {}, {})} and place your cheques on the table.
				You&#39;re doing this so you can convert your smaller cheques into larger ones to take to the cashiers&#39;
				window.</p> <p class="pb-4" data-svelte-h="svelte-bsgcgy">When you are ready to leave, wait for the puck to turn OFF and start placing your money on
				the layout. You do not need to worry about sorting it or making even piles. The Box will
				take care of that.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/cashing-out-a_640x360.webp",
                mdImg: "src/images/" + url + "/cashing-out-a_960x540.webp",
                lgImg: "src/images/" + url + "/cashing-out-a_1280x720.webp",
                title: "Cashing Out - Putting Money Down",
                alt: "Four stacks of cheques on the layout next to the mirror representing a player coloring up."
              },
              {},
              {}
            )} <p class="py-4" data-svelte-h="svelte-13gl2on">After the Box has counted your money, they will give the total amount to the Base Dealer who
				will cut out your money in the COME. Color ups need to be approved by the supervisor so do
				not try to grab your money. Only after the supervisor has agreed with the total will the
				Base Dealer hand your money to you and you are good to pick it up. You&#39;ll then have to take
				those cheques to the cashier to turn into cash.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/cashing-out-b_640x360.webp",
                mdImg: "src/images/" + url + "/cashing-out-b_960x540.webp",
                lgImg: "src/images/" + url + "/cashing-out-b_1280x720.webp",
                title: "Cashing Out - Money Counted Out",
                alt: "Your cheques counted out in front of the Box and your colored money sitting in the come waiting to be handed off."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "numberSeven",
          title: "What's With the Number 7 in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">The number 7 is a double-edged sword. During the Comeout Roll, the players usually win.
				During the Intermediate Roll, it&#39;s usually how all the players lose, so they don&#39;t want to
				hear anyone say ${validate_component(Quote, "Quote").$$render($$result, { text: "seven" }, {}, {})}.</p> <p class="pb-4">When betting an ${validate_component(Link, "Link").$$render($$result, { text: "Any Seven", href: "any-seven" }, {}, {})}, many players will use the phrase ${validate_component(Quote, "Quote").$$render($$result, { text: "big red" }, {}, {})} in place of ${validate_component(Quote, "Quote").$$render($$result, { text: "any\n			seven" }, {}, {})}because it&#39;s written on the table in red letters. E.g., “Can I have $1 big red?” They
				phrase it that way as a courtesy to the other players, so they don&#39;t hear ${validate_component(Quote, "Quote").$$render($$result, { text: "seven." }, {}, {})} It&#39;s only ok for players to say ${validate_component(Quote, "Quote").$$render($$result, { text: "seven" }, {}, {})} during the Comeout Roll when most players
				are on the Pass Line, and it wins for them.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/the-number-7_640x360.webp",
                mdImg: "src/images/" + url + "/the-number-7_960x540.webp",
                lgImg: "src/images/" + url + "/the-number-7_1280x720.webp",
                title: "The Number Seven",
                alt: "Two blue dice on green felt. First has the six up and the second a one."
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
