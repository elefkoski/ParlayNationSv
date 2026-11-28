import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Using Presses at the Craps Table";
let description = "When you Press you are adding money to an existing bet. You could Press One Unit, Double it (Press It), Full Press, Odd Press, Power Press, or Multiple Unit Presses.";
let url = "presses";
let phref = "your-money";
let prev = "Your Money";
let nhref = "spread-bets";
let next = "Spread Bets";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Betting with Units",
      href: "#unitBetting",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Standard Presses",
      href: "#standardPresses",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Odd & Power Presses",
      href: "#oddPowerPresses",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Multiple Unit Presses",
      href: "#multipleUnitPresses",
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
  return `${$$result.head += `<!-- HEAD_svelte-p2wokn_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-ssvgow">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Pressing Place Bets in Craps",
  "description": "Explore the strategy of pressing place bets in Craps to maximize potential winnings, including unit understanding, standard, odd, power, and multiple number presses.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/presses",
  "image": "http://parlaynation.com/images/presses/presses-header.webp",
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
    "@id": "http://parlaynation.com/presses"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Place Bets",
      "description": "A guide on the various pressing strategies for Place Bets in Craps, including how to effectively increase your bets for bigger wins.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "What Is a Unit in Craps?",
          "description": "Defines a 'unit' in Craps betting and its significance in pressing bets."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "What Are Some Standard Presses on the Craps Table?",
          "description": "Explains the most common pressing phrases and their meanings, such as 'Go Up One Unit,' 'Press it,' and 'Full Press.'"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "What is an Odd Press or Power Press in Craps?",
          "description": "Delves into more advanced pressing techniques, including Odd Presses and Power Pressing, for experienced players."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "What Are Multiple Number Presses in Craps?",
          "description": "Expands on strategies for pressing across multiple numbers simultaneously for spread betting and maximizing returns."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/presses/presses_640x360.webp",
      "caption": "$12 place bet on the eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/presses/one-unit-press_640x360.webp",
      "caption": "$12 eight pressed one unit to an $18 eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/presses/press-it_640x360.webp",
      "caption": "$15 nine pressed to $30 nine."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/presses/full-press_640x360.webp",
      "caption": "$36 eight full pressed to $78 eight."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/presses/power-press_640x360.webp",
      "caption": "$10 five pressed with $1 to $25 five."
    }
  ]
}<\/script><!-- HEAD_svelte-p2wokn_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Place Bets",
          title: "Pressing Place Bets in Craps",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">If you&#39;re serious about making money playing Craps, then you&#39;re going to have to press your
				bets. Pressing means you are adding money to an existing ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "Place bet",
                href: "place-bet-basics"
              },
              {},
              {}
            )} so you can win more. You have the option to give the dealer money and tell them to press your
				bet or use money from a winning bet to press itself and/or other bets.</p> <p class="pb-4" data-svelte-h="svelte-r092zm">You can press one Place Bet or multiple Place Bets with a few of your winnings or all of
				them. The best time to press a bet is right before the dealer pays you for that winning bet,
				but learning presses is key in becoming a skilled Craps player no matter how you do it.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/presses_640x360.webp",
                mdImg: "src/images/" + url + "/presses_960x540.webp",
                lgImg: "src/images/" + url + "/presses_1280x720.webp",
                title: "Craps Presses",
                alt: "$12 place bet on the eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "unitBetting",
          title: "What Is a Unit in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1ybeti5">In Craps, a unit is a certain amount of money. Generally speaking, a unit is $5 or $6. On
				the 6 and 8 a unit is $6. On the 4, 5, 9 and 10 a unit is $5. For higher limit players, one
				unit can be considered $30 on the 6 and 8 and $25 on each the 4, 5, 9, and 10.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "src/images/" + url + "/what-is-a-unit_640x360.webp",
                mdImg: "src/images/" + url + "/what-is-a-unit_960x540.webp",
                lgImg: "src/images/" + url + "/what-is-a-unit_1280x720.webp",
                title: "What Is a Unit in Craps?",
                alt: "A $6, $12, $18, and $24 place bet on the eight."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "standardPresses",
          title: "What Are Some Standard Presses on the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-2py56k">Standard Presses are the ones you see most often. When you make a standard press, you tell
				the dealer one of these three phrases, and the dealer will know what to do automatically.
				After learning these presses, you&#39;ll have the tools to take advantage of a good roll.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Go Up One Unit" }, {}, {
              default: () => {
                return `<p class="pb-4">One Unit is the easiest and the most common press you&#39;ll see on the Craps table. It&#39;s
					adding the bare minimum, five or six dollars, to an existing Point. When it gets to be
					your turn, tell the dealer, ${validate_component(Quote, "Quote").$$render($$result, { text: "Press me one unit" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "One unit" }, {}, {})}, and the dealer would say ${validate_component(Quote, "Quote").$$render($$result, { text: "Going up one unit " }, {}, {})}or ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "Going to (the amount your bet will be pressed to)"
                  },
                  {},
                  {}
                )}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/one-unit-press_640x360.webp",
                    mdImg: "src/images/" + url + "/one-unit-press_960x540.webp",
                    lgImg: "src/images/" + url + "/one-unit-press_1280x720.webp",
                    title: "One Unit Press",
                    alt: "$12 eight pressed one unit to an $18 eight"
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Press it" }, {}, {
              default: () => {
                return `<p class="pb-4">Another easy one. When you tell the dealer to “Press it”, you&#39;re saying double your bet.
					When it&#39;s your turn, say ${validate_component(Quote, "Quote").$$render($$result, { text: "Press it." }, {}, {})} The dealer should say ${validate_component(Quote, "Quote").$$render($$result, { text: "Going to (whatever)" }, {}, {})}, or they&#39;ll repeat, ${validate_component(Quote, "Quote").$$render($$result, { text: "Press it" }, {}, {})}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/press-it_640x360.webp",
                    mdImg: "src/images/" + url + "/press-it_960x540.webp",
                    lgImg: "src/images/" + url + "/press-it_1280x720.webp",
                    title: "",
                    alt: "$15 nine pressed to $30 nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Full Press" }, {}, {
              default: () => {
                return `<p class="pb-4">When you say ${validate_component(Quote, "Quote").$$render($$result, { text: "Full press" }, {}, {})}, you are in it to win it. A Full Press adds as
					much of the payment as possible back into the bet while still keeping it proper. They are
					for people who don&#39;t want to risk any more money but want to increase their bet as much as
					possible. When you Full Press, the dealer will repeat ${validate_component(Quote, "Quote").$$render($$result, { text: "Full press" }, {}, {})}, then
					add as much as possible to your bet and hand you the change.</p> <p class="pb-4" data-svelte-h="svelte-rlq410">When Full Presses get above $100, you should make them normal increments and not full
					press anymore. On the 6 and 8, it would be something like $120 or $150. On the 5 and 9, it
					would be something like $125 or $150. The dealer should tell you what a normal increment
					is and give you normal presses at that point.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/full-press_640x360.webp",
                    mdImg: "src/images/" + url + "/full-press_960x540.webp",
                    lgImg: "src/images/" + url + "/full-press_1280x720.webp",
                    title: "Full Press",
                    alt: "$36 eight full pressed to $78 eight."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "oddPowerPresses",
          title: "What is an Odd Press or Power Press in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1j4uwtu">Presses other than standard presses require you know more about what you&#39;re doing. These are
				more like systems. People know how much they&#39;re starting with and know how much they are
				going to up every time their bet hits.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Odd Press" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-18ifs0p">Odd Presses are presses that don&#39;t conform to the other types of presses. There is an
					unlimited amount, but for the most part, people only use a handful. If a player takes a
					$25 Place bet on the 9 and presses to $35 after it hits, they are only adding $10 to the
					bet. It&#39;s not a one unit press or a full press or a power press or any other press. It&#39;s
					just going to $35, and $35 on the 9 is a very normal bet, and this is a very commonly seen
					press.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/odd-press_640x360.webp",
                    mdImg: "src/images/" + url + "/odd-press_960x540.webp",
                    lgImg: "src/images/" + url + "/odd-press_1280x720.webp",
                    title: "Odd Press",
                    alt: "$42 six pressed to $60 six."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Power Press" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-lmj79v">Power Pressing is tough. It&#39;s full pressing plus adding more of your own money to get the
					bet as high as possible as fast as possible. You know how much you need to start with,
					what the bets pay, how much more money you need to give to the dealer, what amount you are
					going to, how many times you need your number to hit before you reach your goal, and how
					many times you can try before you run out of money.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/power-press_640x360.webp",
                    mdImg: "src/images/" + url + "/power-press_960x540.webp",
                    lgImg: "src/images/" + url + "/power-press_1280x720.webp",
                    title: "Power Press",
                    alt: "$10 five pressed with $1 to $25 five."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "multipleUnitPresses",
          title: "What Are Multiple Number Presses in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-11jbmcf">When you start to press multiple numbers, you have a pretty good idea of what you&#39;re doing.
				you&#39;re tracking your bets, knowing what they pay, how much you&#39;re going to add to each
				number, what those numbers are going to end up at, and whether or not you need to add more
				money to make it proper. Instead of putting all your cheques on one bet, you&#39;re spreading
				them out, so multiple bets get increased every time.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Double Unit Presses" }, {}, {
              default: () => {
                return `<p class="pb-4">Double Unit presses are when you take the payment of a Place bet and press itself and its
					opposite number the same amount. 6 is opposite 8; 5 opposite 9; 4 opposite 10. When making
					double unit presses, you use the phrase ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "Go to (an amount you want each bet to go to) each (the\n				two Place bets you would like to increase)."
                  },
                  {},
                  {}
                )} For example, if you have $12 each 6 and 8. One of them hits, and you want to press them
					both to $18 each. When it&#39;s your turn to get paid, but before the dealer pays you, you would
					say, ${validate_component(Quote, "Quote").$$render($$result, { text: "Go to $18\n				each 6 and 8." }, {}, {})} The dealer should then repeat, ${validate_component(Quote, "Quote").$$render($$result, { text: "Going to $18 each 6 and 8." }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Double Unit Press: $12 each 6 and 8 to $18 each",
                    smImg: "src/images/" + url + "/double-unit-press_640x360.webp",
                    mdImg: "src/images/" + url + "/double-unit-press_960x540.webp",
                    lgImg: "src/images/" + url + "/double-unit-press_1280x720.webp",
                    title: "Double Unit Press",
                    alt: "$12 each six and eight pressed one unit each to $18 each six and eight."
                  },
                  {},
                  {}
                )} <div class="pb-4"></div> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "Double Unit Press: $15 each 5 and 9 to $25 each",
                    smImg: "src/images/" + url + "/double-unit-odd-press_640x360.webp",
                    mdImg: "src/images/" + url + "/double-unit-odd-press_960x540.webp",
                    lgImg: "src/images/" + url + "/double-unit-odd-press_1280x720.webp",
                    title: "Double Unit Odds Press",
                    alt: "$15 each five and nine pressed one unit to $25 each five and nine."
                  },
                  {},
                  {}
                )}`;
              }
            })} <div class="pb-4"></div> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Across/Inside/Outside Pressure" }, {}, {
              default: () => {
                return `<p class="pb-4">You can press more than one or two numbers at once. If you&#39;re going to press more than two
					numbers simultaneously, you&#39;re likely going to do it in ${validate_component(Link, "Link").$$render($$result, { text: "spread bet", href: "spread-bets" }, {}, {})} fashion. You should first know how much you&#39;re going to get paid and how much it will cost
					to make your presses. That will tell you if you need to give the dealer more money to complete
					the cost or how much change you should be getting.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "src/images/" + url + "/across-pressure_640x360.webp",
                    mdImg: "src/images/" + url + "/across-pressure_960x540.webp",
                    lgImg: "src/images/" + url + "/across-pressure_1280x720.webp",
                    title: "Across Pressure",
                    alt: "$26 across pressure to $52 across."
                  },
                  {},
                  {}
                )}`;
              }
            })}`;
          }
        }
      )}</main> ${validate_component(PrevNext2, "PrevNext2").$$render($$result, { phref, prev, nhref, next }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
