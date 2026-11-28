import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { H as HomeHeader, a as HomeSections } from "../../../chunks/HomeSections.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
let title = "Come Bets";
let description = "Very similar to the Pass Line, Come Bets can offer great odds but can begin to get expensive. You can only make Come Bets during the Intermediate Roll.";
let url = "come-bets";
let phref = "hop-bets";
let prev = "Hop Bets";
let nhref = "come-bet-basics";
let next = "Come Bet Basics";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections = [
    {
      // Come Bet Basics
      aria: "Come Bet Basics",
      smImg: "/images/" + url + "/come-bet-basics-header_600x600.webp",
      mdImg: "/images/" + url + "/come-bet-basics-header_992x558.webp",
      lgImg: "/images/" + url + "/come-bet-basics-wide-header.webp",
      alt: "Come Bet Basics",
      title: "Come Bet Basics",
      href: "come-bet-basics",
      body: "There are two stages to a Come Bet. Learn how to bet them and how they win.",
      badges: [
        "Betting Come Bets",
        "Come Bets Always Work",
        "Come Bet Stages",
        "Come Bet Placement",
        "Come Bet Payment",
        "Come Bet Terms",
        "Dealer Come Bets"
      ]
    },
    {
      // Come Bet Odds
      aria: "Come Bet Odds",
      smImg: "/images/" + url + "/come-bet-odds-header_600x600.webp",
      mdImg: "/images/" + url + "/come-bet-odds-header_992x558.webp",
      lgImg: "/images/" + url + "/come-bet-odds-wide-header.webp",
      alt: "Come Bet Odds",
      title: "Come Bet Odds",
      href: "come-bet-odds",
      body: "Like the Pass Line, you can add Odds to your Come bet which have no advantage for the casino.",
      badges: [
        "Betting Come Odds",
        "Come Odds Placement",
        "Odds OFF During CR",
        "Come Odds Payment",
        "3x 4x 5x Odds",
        "Dealer Come Odds"
      ]
    },
    {
      // Coming Down w/Odds
      aria: "Coming Down w/Odds",
      smImg: "/images/" + url + "/coming-down-with-odds-header_600x600.webp",
      mdImg: "/images/" + url + "/coming-down-with-odds-header_992x558.webp",
      lgImg: "/images/" + url + "/coming-down-with-odds-wide-header.webp",
      alt: "Coming Down w/Odds",
      title: "Coming Down w/Odds",
      href: "coming-down-with-odds",
      body: "When you play a Come and Place Bet at the same time you should take the Place Bet down and add Odds to your Come Bet.",
      badges: ["The Setup", "Come Bet Moves", "Handed Off"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-16ytodm_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1f3r8hr">{
		  "@context": "http://schema.org/",
		  "@type": "ItemList",
		  "itemListElement":[
			{
			  "@type": "ListItem",
			  "position": "1",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/come-bet-basics.html",
				"name": "Come Bet Basics",
				"image": "https://parlaynation.com/src/images/come-bet-basics/come-bet-basics-header.jpg",
				"description": "Come Bets are mini Pass Line Bets except you play them during the Intermediate Roll. After moving into a Point you can add Odds to the Come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/come-bet-odds.html",
				"name": "Come Bet Odds",
				"image": "https://parlaynation.com/src/images/come-bet-odds-header.jpg",
				"description": "Odds for a Come bet get Paid True Odds so there is a maximum amount of money you can add to them. Odds pay different depending on the Point they are on."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/coming-down-with-odds.html",
				"name": "Coming Down w/Odds",
				"image": "https://parlaynation.com/src/images/coming-down-with-odds/coming-down-with-odds-header.jpg",
				"description": "When you are playing Place Bets and Come bets at the same time you don’t need both on a Point. Coming Down w/Odds uses the Place Bet for Odds on the Come bet."
			  }
			}
		  ]
		}<\/script><!-- HEAD_svelte-16ytodm_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col space-y-8 my-6">${validate_component(HomeHeader, "HomeHeader").$$render(
        $$result,
        {
          aria: "Come bet header",
          title: "Come Bet in Craps",
          pOne: "Gain an in-depth understanding of Come Bets in Craps, exploring their mechanics during different stages of the game.",
          pTwo: "Analyze the payout structure and betting odds associated with Come Bets, a crucial aspect of strategic gameplay.",
          pThree: "Explore the strategy of 'Coming Down with Odds', a nuanced technique that involves leveraging Place Bets as odds for the Come Bet.",
          button: "Learn come bets",
          href: "come-bet-basics"
        },
        {},
        {}
      )} ${each(sections, (section) => {
        return `${validate_component(HomeSections, "HomeSections").$$render($$result, Object.assign({}, section), {}, {})}`;
      })}</main> ${validate_component(PrevNext2, "PrevNext2").$$render($$result, { phref, prev, nhref, next }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
