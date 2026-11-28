import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { a as Content_h2, C as Content_img } from "../../../chunks/Content-img.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Watching Your Money at the Craps Table";
let description = "You must pay attention to your money at the Craps Table. Know how much your bets cost, placement of those bets, your presses, and your payments.";
let url = "your-money";
let phref = "buying-place-bets";
let prev = "Buying Place Bets";
let nhref = "presses";
let next = "Presses";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Getting the Right Change",
      href: "#rightChange",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Checking Bet Placement",
      href: "#rightSpot",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Checking Proper Numbers",
      href: "#rightNumber",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.jpg"
  };
  return `${$$result.head += `<!-- HEAD_svelte-133ot4_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-15altqd">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Watching Your Money at the Craps Table",
  "description": "A guide to vigilance with your money at the Craps table, including ensuring correct change, bet placement, and bet numbers.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-12",
  "url": "http://parlaynation.com/your-money",
  "image": "http://parlaynation.com/images/your-money/your-money-header.webp",
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
    "@id": "http://parlaynation.com/your-money"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Place Bets",
      "description": "Key considerations for players at the Craps table to ensure they are vigilant about their money, including tips on making sure you're getting the right change, your bets are in the correct spot, and on the right number.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Are You Getting the Right Change for Your Craps Bets?",
          "description": "Advice on knowing the cost of your bets to ensure you receive the correct change, highlighting the importance of being vigilant to avoid mistakes by dealers."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Are Your Craps Bets in the Correct Spot?",
          "description": "Tips on ensuring your bets are placed in the correct location on the table to avoid payment errors."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Are Your Craps Bets on the Right Number?",
          "description": "Guidance on making sure your bets are placed on the intended numbers to prevent misplacement."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/bet-cost-and-change_640x360.webp",
      "caption": "$52 across with $55 dollars in the COME and $3 change near the apron."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/correct-spot_640x360.webp",
      "caption": "A $15 place bet with a transparent $15 place bet next to it signifying the wrong spot."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/your-money/correct-number_640x360.webp",
      "caption": "$12 place bet on the eight with a transparent $12 place bet on the six signifying the wrong number."
    }
  ]
}<\/script><!-- HEAD_svelte-133ot4_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Place Bets",
          title: "Watching Your Money at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-udn040">Pay attention to your money! Craps seems to be the only game where even seasoned players
				don&#39;t know where their money is. When a Craps game is blowing up, it&#39;s moving fast, and many
				players are making multiple bets, it&#39;s easy to understand that a dealer might make a
				mistake. At the same time, when a table only has two or three players on it, some dealers
				will become so nonchalant about it that they don&#39;t pay attention at all. Learn what to watch
				for as the game moves along.</p>`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "rightChange",
          title: "Are You Getting the Right Change for Your Craps Bets?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">To begin with, know how much your bets cost. If you don&#39;t know how much your bets cost, you
				can never know how much change you&#39;re supposed to receive. Dealers will make mistakes, and
				if you&#39;re not paying attention, you may get back the wrong amount of money. It could be too
				much… it could be not enough… You should give back money if you know they gave you extra.
				It&#39;s technically stealing. If they didn&#39;t give you enough back, then you&#39;re being robbed.
				The best way to win an argument with a dealer and/or
				${validate_component(Link, "Link").$$render($$result, { text: "Boxperson", href: "the-crew" }, {}, {})} is to know how much the bet cost, how much money you
				gave the dealer, and how much change you received.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/bet-cost-and-change_640x360.webp",
                mdImg: "/images/" + url + "/bet-cost-and-change_960x540.webp",
                lgImg: "/images/" + url + "/bet-cost-and-change_1280x720.webp",
                title: "Bet Cost and Change",
                alt: "$52 across with $55 dollars in the COME and $3 change near the apron."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "rightSpot",
          title: "Are Your Craps Bets in the Correct Spot?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">Make sure your bets are being put in the correct spot on the layout. If the dealer puts your
				bet in someone else&#39;s spot when it&#39;s time to get paid, they&#39;ll pay the wrong person. You
				will even have players try to take advantage of these mistakes by claiming those bets
				belonged to them and then shrug while saying, ${validate_component(Quote, "Quote").$$render(
              $$result,
              {
                text: "That's my $15 ten. I don't know what happened to yours..."
              },
              {},
              {}
            )}</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/correct-spot_640x360.webp",
                mdImg: "/images/" + url + "/correct-spot_960x540.webp",
                lgImg: "/images/" + url + "/correct-spot_1280x720.webp",
                title: "Are Your Bets in the Right Spot",
                alt: "A $15 place bet with a transparent $15 place bet next to it signifying the wrong spot."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "rightNumber",
          title: "Are Your Craps Bets on the Right Number?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1izel4j">You should make sure the dealer is putting your bets on the correct number. Even if the
				dealer heard what your bet was and repeated it back to you, they could very easily put that
				bet on a wrong Place Bet number. Watch the dealer as they set up your bets to ensure there
				aren’t problems in the future.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/correct-number_640x360.webp",
                mdImg: "/images/" + url + "/correct-number_960x540.webp",
                lgImg: "/images/" + url + "/correct-number_1280x720.webp",
                title: "Are Your Bets on the Right Number",
                alt: "$12 place bet on the eight with a transparent $12 place bet on the six signifying the wrong number."
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
