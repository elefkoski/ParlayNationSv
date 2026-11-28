import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { H as HomeHeader, a as HomeSections } from "../../../chunks/HomeSections.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
let title = "The Don'ts";
let description = "You don't have to bet that the shooter is going to make their Point. In fact after the Point is established, players on the Don't side are more likely to win.";
let url = "the-donts";
let phref = "coming-down-with-odds";
let prev = "Down w/Odds";
let nhref = "dont-pass";
let next = "Don't Pass";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections = [
    {
      // The Don\'t Pass
      aria: "The Don't Pass",
      smImg: "/images/" + url + "/dont-pass-header_600x600.webp",
      mdImg: "/images/" + url + "/dont-pass-header_992x558.webp",
      lgImg: "/images/" + url + "/dont-pass-wide-header.webp",
      alt: "The Don't Pass",
      title: "The Don't Pass",
      href: "dont-pass",
      body: "The Don't Pass is the opposite of the Pass Line. Where one wins, the other loses.",
      badges: [
        "Betting The Don'ts",
        "Don't Pass Stages",
        "Don't Pass Payment",
        "Dealer Don't Pass"
      ]
    },
    {
      // Don\'t Pass Lay Odds
      aria: "Don't Pass Lay Odds",
      smImg: "/images/" + url + "/dont-pass-lay-odds-header_600x600.webp",
      mdImg: "/images/" + url + "/dont-pass-lay-odds-header_992x558.webp",
      lgImg: "/images/" + url + "/dont-pass-lay-odds-wide-header.webp",
      alt: "Don't Pass Lay Odds",
      title: "Don't Pass Lay Odds",
      href: "dont-pass-lay-odds",
      body: "Lay Odds are an extra bet you can add to your Don't Pass that gets paid True Odds.",
      badges: [
        "Betting DP Lay Odds",
        "DP Lay Odds Payment",
        "Max Lay Odds",
        "Dealer DP Lay Odds"
      ]
    },
    {
      // Don\'t Come
      aria: "Don't Come",
      smImg: "/images/" + url + "/dont-come-header_600x600.webp",
      mdImg: "/images/" + url + "/dont-come-header_992x558.webp",
      lgImg: "/images/" + url + "/dont-come-wide-header.webp",
      alt: "Don't Come",
      title: "Don't Come",
      href: "dont-come",
      body: "Don't Comes are just like mini Don't Pass Bets. It's always betting against the next Point number to roll.",
      badges: [
        "Betting Don't Come",
        "Don't Come Stages",
        "No Action",
        "Don't Come Placement",
        "Don't Come Payment",
        "Always Working",
        "Dealer Don't Come"
      ]
    },
    {
      // Don\'t Come Lay Odds
      aria: "Don't Come Lay Odds",
      smImg: "/images/" + url + "/dont-come-lay-odds-header_600x600.webp",
      mdImg: "/images/" + url + "/dont-come-lay-odds-header_992x558.webp",
      lgImg: "/images/" + url + "/dont-come-lay-odds-wide-header.webp",
      alt: "Don't Come Lay Odds",
      title: "Don't Come Lay Odds",
      href: "dont-come-lay-odds",
      body: "Just like the Don't Pass, you can add Lay Odds to your Don't Come Bet which gets paid True Odds.",
      badges: [
        "Betting DC Lay Odds",
        "DC Lay Odds Placement",
        "DC Lay Odds Payment",
        "Max DC Lay Odds",
        "Dealer DC Lay Odds"
      ]
    },
    {
      // Overlays
      aria: "Overlays",
      smImg: "/images/" + url + "/overlays-header_600x600.webp",
      mdImg: "/images/" + url + "/overlays-header_992x558.webp",
      lgImg: "/images/" + url + "/overlays-wide-header.webp",
      alt: "Overlays",
      title: "Overlays",
      href: "overlays",
      body: "If you can make a proper Overlay, vig and all, I'd say you've learned how to play Craps.",
      badges: [
        "5% Commission",
        "Betting Overlays",
        "Overlay Placement",
        "Overlay Payments"
      ]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-8txg78_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-c24cix">{
		  "@context": "http://schema.org/",
		  "@type": "ItemList",
		  "itemListElement":[
			{
			  "@type": "ListItem",
			  "position": "1",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-pass.html",
				"name": "Don't Pass",
				"image": "https://parlaynation.com/src/images/dont-pass/dont-pass-header.jpg",
				"description": "The Don't Pass is the opposite of the Pass Line. When the Don't Pass wins the Pass Line loses and vice versa."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-pass-lay-odds.html",
				"name": "Don't Pass Lay Odds",
				"image": "https://parlaynation.com/src/images/dont-pass-lay-odds/dont-pass-lay-odds-header.jpg",
				"description": "Lay Odds get paid True Odds and have no advantage to a casino so there is a limit on the amount you can add."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-come.html",
				"name": "Don't Come",
				"image": "https://parlaynation.com/src/images/dont-come/dont-come-header.jpg",
				"description": "The Don't Come Bet is like a mini Don't Pass Bet. They both win and lose the same way and there are two stages to a Don't Come Bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/dont-come-lay-odds.html",
				"name": "Don't Come Lay Odds",
				"image": "https://parlaynation.com/src/images/dont-come-lay-odds/dont-come-lay-odds-header.jpg",
				"description": "Don't Come Lay Odds get paid True Odds so the casinos have no advantage. You want to take advantage of this bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "item":{
				"@type": "Course",
				"provider": "Parlay Nation",
				"url": "https://parlaynation.com/overlays.html",
				"name": "Overlays",
				"image": "https://parlaynation.com/src/images/overlays/overlays-header.jpg",
				"description": "An Overlay is the opposite of a Buy bet. You bet the 7 will be rolled before a Point and pay a commission based on how much it wins."
			  }
			}
		  ]
		}<\/script><!-- HEAD_svelte-8txg78_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col space-y-8 my-6">${validate_component(HomeHeader, "HomeHeadings").$$render(
        $$result,
        {
          aria: "The Don'ts header",
          title: "The Don'ts",
          pOne: "Gain a comprehensive understanding of 'Don't' bets in Craps, including 'Don't Pass', 'Don't Come', and the associated 'Lay Odds'.",
          pTwo: "Analyze the payout structure and betting procedures for each type of 'Don't' bet, enhancing your strategic gameplay.",
          pThree: "Delve into the strategy of 'Overlay' betting, a nuanced technique that involves betting directly against a chosen Point.",
          button: "Learn the don't pass",
          href: "dont-pass"
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
