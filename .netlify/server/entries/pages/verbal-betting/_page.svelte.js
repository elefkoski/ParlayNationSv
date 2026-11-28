import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { a as Content_h2, C as Content_img } from "../../../chunks/Content-img.js";
import { C as Content_ul_a } from "../../../chunks/Content-ul-a.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Verbal Betting at the Craps Table";
let description = "Craps is a verbal game. All bets in Craps can be made verbally as long as the dealer has called it a bet. You shouldn't get caught with your hands on the table when the dice are out!";
let url = "verbal-betting";
let phref = "/the-stages";
let prev = "The Stages";
let nhref = "/to-consider";
let next = "To Consider";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Verbal Declaration of a Bet",
      href: "#verbalDeclaration",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Dealers Repeating Bets",
      href: "#repeatingBets",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "No Call Bets",
      href: "#noCall",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Getting No Bet",
      href: "#noBet",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Turning Bets On",
      href: "#imOn",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Turning Bets Off",
      href: "#imOff",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let liAs = [
    {
      title: "Here are some ways you can turn your bets On:",
      items: [
        `You can turn all your bets 'On' by saying, "Turn all my bets On."`,
        `You can turn certain groups of bets 'On' by saying, "Turn my place bets on", "Turn my hardways on.", or "Turn my come bet odds on."`,
        `You can turn specific bets 'On' by saying things like, "Turn on my six and eight.", or "Turn on my hard ten."`
      ]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.jpg"
  };
  return `${$$result.head += `<!-- HEAD_svelte-9y1tzr_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1r88zjk">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Making Verbal Bets at the Craps Table",
  "description": "Learn about making verbal bets at the Craps table, including how and when to do it, the importance of dealer confirmation, and the meanings behind 'no call' and 'no bet' statuses.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/verbal-betting",
  "image": "http://parlaynation.com/images/verbal-betting/verbal-betting-header.webp",
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
    "@id": "http://parlaynation.com/verbal-betting"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "Understanding the basics of making verbal bets at the Craps table, including dealer interactions and bet status.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is Verbal Declaration of a Bet in Craps?",
          "description": "Explains the process of making a verbal bet at the Craps table and the dealer's role in confirming these bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Are the Dealers Repeating Your Bets on the Craps Game?",
          "description": "Highlights the importance of dealers repeating your bets for clarity and confirmation."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What Is a No Call Bet in Craps?",
          "description": "Defines what 'no call bets' are and how they affect the gameplay at the Craps table."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Does 'No Bet' Mean in Craps?",
          "description": "Explains the term 'no bet' and situations that might lead to a dealer declaring a bet as such."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "What Does 'My Bets are ON' Mean at the Craps Table?",
          "description": "Describes the meaning and implications of having your bets 'On' during specific stages of the game."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "What Does 'My Bets Are OFF' Mean in a Craps Game?",
          "description": "Explores the meaning and strategy behind declaring your bets as 'Off' during certain times in the game."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/verbal-betting/verbal-declaration_640x360.webp",
      "caption": "An outline of a person with a red thought bubble next to another outlined person with a blue talking bubble and a cheque in their hand."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/verbal-betting/my-bets-are-on_640x360.webp",
      "caption": "The puck is off and in the Don't Come. There is a $10 place bet on the Point Ten with an 'On' button on top."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/verbal-betting/my-bets-are-off_640x360.webp",
      "caption": "The puck is on and sitting in the point six. There is a $50 place bet on the point five with an off button on top."
    }
  ]
}<\/script><!-- HEAD_svelte-9y1tzr_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Basics",
          title: "Making Verbal Bets at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "Dice are moving!" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "We're goin!" }, {}, {})}, ${validate_component(Quote, "Quote").$$render($$result, { text: "We're rollin!" }, {}, {})},
				${validate_component(Quote, "Quote").$$render($$result, { text: "Dice!" }, {}, {})}... these are all warnings. It&#39;s what the Stickperson says when they
				send the dice to the shooter and your cue to stop putting your hands on the table, hanging
				them over the edge of the rail, dropping money, throwing cheques, pointing at things, or
				anything that may change how the dice were going to land. Right now, the shooter has the
				dice and is about to throw them. If your hands are on the table when the shooter throws the
				dice and hits you, and that roll causes everybody to lose, guess whose fault it&#39;s going to
				be? That&#39;s right... yours.</p> <p class="pb-4">You can play Craps by talking to the dealers. You can make bets, move bets, take down bets,
				ask bets to be turned OFF and ON, and a host of other options. You DO NOT need to throw your
				money on the table to make a bet. I repeat you do not need to throw your money on the table
				to make a bet. You can make a verbal declaration of what you want, and as long as the dealer
				repeats it back to you, it is considered a ${validate_component(Quote, "Quote").$$render($$result, { text: "bet." }, {}, {})} After ${validate_component(Link, "Link").$$render($$result, { text: "the dice", href: "the-dice" }, {}, {})} have landed, you can drop your money on the table, and the dealer will set up your bet.</p>`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "verbalDeclaration",
          title: "What Is Verbal Declaration of a Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Many times the dice are out, and you want to make a bet. As long as the dealers can see you
				have the money for the bet, you can make it verbally, and the dealers will book it. E.g., if
				the dice are out and you want $5 in ${validate_component(Link, "Link").$$render($$result, { text: "the Field", href: "the-field" }, {}, {})}, you can look
				at the dealer and say, ${validate_component(Quote, "Quote").$$render($$result, { text: "I want $5 in the field." }, {}, {})} The dealer will repeat it back
				to you, and after the dice have landed, you can put the money on the table. Verbal bets will
				help you avoid getting hit with the dice and save you from being yelled at by the other players.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/verbal-declaration_640x360.webp",
                mdImg: "src/images/" + url + "/verbal-declaration_960x540.webp",
                lgImg: "src/images/" + url + "/verbal-declaration_1280x720.webp",
                title: "Verbal Declaration of a Bet",
                alt: "An outline of a person with a red thought bubble next to another outlined person with a blue talking bubble and a cheque in their hand."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "repeatingBets",
          title: "Are the Dealers Repeating Your Bets on the Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Having a dealer repeat your bet is one of the most important things that need to happen in
				Craps. Any bet you ask for that is not repeated back to you can be considered a ${validate_component(Quote, "Quote").$$render($$result, { text: "No bet." }, {}, {})}
				Dealers repeat the bet to let you know they heard you, make sure it&#39;s the bet you actually want,
				and so ${validate_component(Link, "Link").$$render($$result, { text: "the Box", href: "the-crew" }, {}, {})} can know what&#39;s happening at the table. If the
				dealer does not repeat your bet back to you, then you should repeat yourself.</p> <p class="pb-4">The dealers can also say ${validate_component(Quote, "Quote").$$render($$result, { text: "Bet" }, {}, {})} as a way of confirming your action. If you hear
				them say ${validate_component(Quote, "Quote").$$render($$result, { text: "Bet" }, {}, {})}
				instead of repeating your action, then you&#39;re still good to go.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "noCall",
          title: "What Is a No Call Bet in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Tables labeled with &#39;No Call Bets&#39; mean you cannot walk up to a Craps table and verbally ask
				for a bet without showing that you have the money for the bet. If the dealers can&#39;t see
				money, then it will be a ${validate_component(Quote, "Quote").$$render($$result, { text: "No bet" }, {}, {})}.</p>`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "noBet",
          title: "What Does “No Bet” Mean in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">${validate_component(Quote, "Quote").$$render($$result, { text: "No bet" }, {}, {})} is a phrase used when the dealer doesn&#39;t accept your bet. There can be
				many reasons a dealer doesn&#39;t accept a bet, such as making a bet too late, not understanding
				what your bet is, or making an improper bet. Try to make sure you find out why the dealer said
				${validate_component(Quote, "Quote").$$render($$result, { text: "No bet" }, {}, {})}
				so you don&#39;t repeat the same mistake twice.</p> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}`;
          }
        }
      )} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "imOn",
          title: "What Does “My Bets are ON” Mean at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Place Bets, Come Bet Odds, and Hardways are all &#39;Off&#39; during the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})}, meaning they won&#39;t win or lose. If you want, you can have those bets working by telling
				the dealer you would like to turn those bets &#39;On&#39;.</p> ${validate_component(Content_ul_a, "ContentUl").$$render($$result, { liAs }, {}, {})} <div class="mb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/my-bets-are-on_640x360.webp",
                mdImg: "src/images/" + url + "/my-bets-are-on_960x540.webp",
                lgImg: "src/images/" + url + "/my-bets-are-on_1280x720.webp",
                title: "My Bets are On",
                alt: "The puck is off and in the Don't Come. There is a $10 place bet on the Point Ten with an 'On' button on top."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "imOff",
          title: "What Does “My Bets Are OFF” Mean in a Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">During the Intermediate Roll, all your bets are already turned On. You can tell the dealer
				that you want all your bets or specific bets turned Off. When you say, ${validate_component(Quote, "Quote").$$render($$result, { text: "I'm off" }, {}, {})} the dealer will say, ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "Odds work unless you pick them up."
              },
              {},
              {}
            )}, meaning that
				it&#39;s your own responsibility to pick up any ${validate_component(Link, "Link").$$render($$result, { text: "Odds", href: "pass-line-odds" }, {}, {})} you have
				for your ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Pass Line",
                href: "pass-line-basics"
              },
              {},
              {}
            )}
				bet. You might also hear,
				${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "Hardways are also working unless called off."
              },
              {},
              {}
            )} meaning that you must also say
				that you would like your ${validate_component(Link, "Link").$$render($$result, { text: "Hardways", href: "the-hardways" }, {}, {})} Off.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/my-bets-are-off_640x360.webp",
                mdImg: "src/images/" + url + "/my-bets-are-off_960x540.webp",
                lgImg: "src/images/" + url + "/my-bets-are-off_1280x720.webp",
                title: "My Bets are Off",
                alt: "The puck is on and sitting in the point six. There is a $50 place bet on the point five with an off button on top."
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
