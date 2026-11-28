import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { t as theme } from "../../../chunks/theme.js";
const CrapsPageSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { section } = $$props;
  if ($$props.section === void 0 && $$bindings.section && section !== void 0)
    $$bindings.section(section);
  {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", $theme);
    }
  }
  $$unsubscribe_theme();
  return `<div class="grid grid-cols-1 md:grid-cols-8 gap-8"><div class="grid md:col-span-3 content-center"><h2 class="text-3xl font-bold craps-home-page-section-title">${escape(section.title)}</h2> <h3 class="text-base craps-home-page-section-tag">${escape(section.subtitle)}</h3> <p class="pb-4">${escape(section.description)}</p> <a data-track="${"craps-home-section-" + escape(section.href, true)}"${add_attribute("href", section.href, 0)} class="justify-self-end craps-home-page-section-link">READ MORE</a></div> <div class="flex flex-col gap-2 md:col-span-5 justify-center"><ul class="space-y-2">${each(section.pages, (page) => {
    return `<li class="pl-2 rounded-lg transition-colors duration-200 craps-home-page-sub-section"><a data-track="${"craps-home-page-" + escape(page.href, true)}"${add_attribute("href", page.href, 0)} class="flex items-center space-x-2 craps-home-page-sub-section-text"><img${add_attribute("src", page.src, 0)}${add_attribute("alt", page.alt, 0)} class="${"w-6 h-6 mr-2 filter " + escape(
      $theme === "dark" ? "dark:invert dark:brightness-200 dark:saturate-150" : "",
      true
    ) + " " + escape(page.transform, true)}"> <span>${escape(page.sentence)}<span class="font-semibold craps-home-page-sub-section-link">${escape(page.name)}</span>.</span></a> </li>`;
  })}</ul></div></div>`;
});
let title = "Learn How to Play Craps";
let description = "Want to play the most exciting game in the casino? Learn How to Play Craps so you'll never miss another exciting moment on the table.";
let url = "craps";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections = [
    {
      title: "CRAPS BASICS",
      subtitle: "Your Craps Adventure Starts Here",
      description: "Hey there, eager to crack the code of Craps? Get the lowdown on the table crew, the table setup, and the rules that govern the game.",
      href: "craps-basics",
      pages: [
        {
          name: "The Crew",
          sentence: "Uncover the secrets of a smoothly running Craps game by understanding the roles and responsibilities of ",
          href: "the-crew",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        },
        {
          name: "The Craps Table",
          sentence: "Place your bets wisely and enhance your gaming experience by comprehending the four main sections of ",
          href: "the-craps-table",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        },
        {
          name: "The Dice",
          sentence: "Experience the thrill of holding the fate of the table at your fingertips, and understand the sacred role of ",
          href: "the-dice",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        },
        {
          name: "The Stages",
          sentence: "Overcome the confusion new players often face in Craps by understanding the intricacies of ",
          href: "the-stages",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        },
        {
          name: "Verbal Betting",
          sentence: "Stay in sync with the thrilling pace of Craps and comprehend the importance of ",
          href: "verbal-betting",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        },
        {
          name: "To Consider",
          sentence: "Sharpening your Craps skills involves keeping in mind elements like the nuances of self-service bets and effective dealer interactions, all crucial aspects ",
          href: "to-consider",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1"
        }
      ]
    }
  ];
  let sections2 = [
    {
      title: "THE PASS LINE",
      subtitle: "The First Bet to Learn on the Table",
      description: "What if there's a game where everyone's fate is intertwined, where winning and losing is a shared experience? Enter the world of Craps' Pass Line bet.",
      href: "the-pass-line",
      pages: [
        {
          name: "Pass Line Basics",
          sentence: "Realize the collective joy and pain of Craps betting by mastering the ",
          href: "pass-line-basics",
          src: "src/images/icons/die-2.svg",
          alt: "Die 2"
        },
        {
          name: "Pass Line Odds",
          sentence: "Add another layer to your Craps betting, understanding the varying limits of ",
          href: "pass-line-odds",
          src: "src/images/icons/die-2.svg",
          alt: "Die 2"
        },
        {
          name: "Max Odds on the Pass Line",
          sentence: "Maximize your winnings with the Pass Line bet from different casinos, a journey described as ",
          href: "max-odds",
          src: "src/images/icons/die-2.svg",
          alt: "Die 2"
        }
      ]
    }
  ];
  let sections3 = [
    {
      title: "PLACE BETS",
      subtitle: "A Versatile Way to Play Craps",
      description: "Master the intricacies of Place Bets in Craps, where your chances multiply with each roll and a single bet can lead to numerous wins.",
      href: "place-bets",
      pages: [
        {
          name: "Place Bet Basics",
          sentence: "There are six different Place Bets. Learn how they can win or lose based on the roll of the dice, an exciting aspect of the game known as ",
          href: "place-bet-basics",
          src: "src/images/icons/die-3.svg",
          alt: "Die 3"
        },
        {
          name: "Buying Place Bets",
          sentence: "Try the unique strategy of buying in Craps, understanding how paying a commission can lead to True Odds, a concept embodied in ",
          href: "buying-place-bets",
          src: "src/images/icons/die-3.svg",
          alt: "Die 3"
        },
        {
          name: "Your Money",
          sentence: "Don't forget the importance of keeping track of your bets, understanding the costs, and ensuring they're placed correctly, a crucial aspect of watching ",
          href: "your-money",
          src: "src/images/icons/die-3.svg",
          alt: "Die 3"
        },
        {
          name: "Presses",
          sentence: "Navigate through the intricate world of Craps where pressing your bets can lead to significant winnings, an exciting strategy encapsulated in ",
          href: "presses",
          src: "src/images/icons/die-3.svg",
          alt: "Die 3"
        }
      ]
    }
  ];
  let sections4 = [
    {
      title: "SPREAD BETS",
      subtitle: "The Easy Way of Betting Multiple Numbers At Once",
      description: "Explore different betting strategies in Craps. This guide will walk you through several tactics, including covering all bets, focusing on specific numbers, and more.",
      href: "spread-bets",
      pages: [
        {
          name: "Across",
          sentence: "Try your hand at placing all the Place Bets in the same amount, a technique known as betting ",
          href: "across",
          src: "src/images/icons/die-4.svg",
          alt: "Die 4"
        },
        {
          name: "Inside",
          sentence: "Discover this easy-peasy way of betting on the numbers 5, 6, 8, and 9 in Craps, known as ",
          href: "inside",
          src: "src/images/icons/die-4.svg",
          alt: "Die 4"
        },
        {
          name: "Outside",
          sentence: "A common way of betting the highest paying Place Bets can be found by betting ",
          href: "outside",
          src: "src/images/icons/die-4.svg",
          alt: "Die 4"
        },
        {
          name: "Uptown/Downtown",
          sentence: "The Craps players utilize the opposite side of the board in their betting strategy, a method known as ",
          href: "uptown-downtown",
          src: "src/images/icons/die-4.svg",
          alt: "Die 4"
        },
        {
          name: "Including the Point",
          sentence: "Learn about the unique betting strategy in Craps where players not on the Pass Line bet on all numbers, a method called ",
          href: "including-the-point",
          src: "src/images/icons/die-4.svg",
          alt: "Die 4"
        }
      ]
    }
  ];
  let sections5 = [
    {
      title: "PROPOSITION BETS",
      subtitle: "The Fastest Way to Turn a Little Into A Lot",
      description: "Let's dive into the world of high-risk moves that make Craps one of the most dynamic and unpredictable games in the casino.",
      href: "proposition-bets",
      pages: [
        {
          name: "Proposition Basics",
          sentence: "From the center of the table to the field, explore the engaging and complex world of ",
          href: "proposition-basics",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "The Hardways",
          sentence: "By offering good returns and the ability to win with your Pass Line Bet, the game's charm lies in ",
          href: "the-hardways",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Straight Up",
          sentence: "To rapidly increase your earnings, consider the high payouts and exciting dynamics of ",
          href: "straight-up",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "C & E",
          sentence: "If you're interested in a cost-effective alternative to the Horn, delve into the world of ",
          href: "c-and-e",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Any Seven",
          sentence: "Venture into the strategic world of Don't players and their unique utilization of ",
          href: "any-seven",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Any Craps",
          sentence: "Explore the similarities and differences between Three Way Craps and the ",
          href: "any-craps",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "The Field",
          sentence: "Discover the excitement of one-roll bets on a broad range of numbers anytime you want in ",
          href: "the-field",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Multi-Bets",
          sentence: "Enhance your gaming experience by understanding the dynamics and strategies of ",
          href: "multi-bets",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Horn",
          sentence: "Experience the convenience of betting all four Straight Up bets simultaneously through the ",
          href: "horn",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Horn High",
          sentence: "Spread your money around a bunch of prop bets and pick a special number to root for with ",
          href: "horn-high",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "World",
          sentence: "Mitigate the risk of losing to a roll of the 7 by embracing the unique strategy of the ",
          href: "world",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        },
        {
          name: "Hop Bets",
          sentence: "Betting strategies become more exciting when you engage with ",
          href: "hop-bets",
          src: "src/images/icons/die-5.svg",
          alt: "Die 5"
        }
      ]
    }
  ];
  let sections6 = [
    {
      title: "COME BETS",
      subtitle: "Another Great Bet on the Craps Table",
      description: "Have you ever wondered about the unique concept of Come Bets in Craps? Let's explore it together.",
      href: "come-bets",
      pages: [
        {
          name: "Come Bet Basics",
          sentence: "Discover the intricacies of mini Pass Line bets and the potential of adding Odds in ",
          href: "come-bet-basics",
          src: "src/images/icons/die-6.svg",
          alt: "Die 6"
        },
        {
          name: "Come Bet Odds",
          sentence: "Learn about the flexibility of betting less than the table minimum and non-contract nature of Odds in ",
          href: "come-bet-odds",
          src: "src/images/icons/die-6.svg",
          alt: "Die 6"
        },
        {
          name: "Coming Down w/Odds",
          sentence: "Learn the setup and nuances of using your Place Bet and its payment as Odds in ",
          href: "coming-down-with-odds",
          src: "src/images/icons/die-6.svg",
          alt: "Die 6"
        }
      ]
    }
  ];
  let sections7 = [
    {
      title: "THE DON'TS",
      subtitle: "The Dark Side of Craps Can Be Very Profitable",
      description: "Understand the pivotal role of Don't Pass Bets in the game of Craps and how they affect the gaming experience.",
      href: "the-donts",
      pages: [
        {
          name: "Don't Pass",
          sentence: "To master the art of Craps, familiarize yourself with betting the ",
          href: "dont-pass",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1 turned",
          transform: "transform rotate-45"
        },
        {
          name: "Don't Pass Lay Odds",
          sentence: "Leverage your Craps game with a deeper understanding of the ",
          href: "dont-pass-lay-odds",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1 turned",
          transform: "transform rotate-45"
        },
        {
          name: "Don't Come",
          sentence: "Enhance your Craps strategy with a comprehensive understanding of the ",
          href: "dont-come",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1 turned",
          transform: "transform rotate-45"
        },
        {
          name: "Don't Come Lay Odds",
          sentence: "Make your Craps game more exciting and strategic by understanding ",
          href: "dont-come-lay-odds",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1 turned",
          transform: "transform rotate-45"
        },
        {
          name: "Overlays",
          sentence: "Stand a cut above the rest in Craps by mastering the art of betting ",
          href: "overlays",
          src: "src/images/icons/die-1.svg",
          alt: "Die 1 turned",
          transform: "transform rotate-45"
        }
      ]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-k2v5zx_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1for3r2">{
		  "@context": "http://schema.org/",
		  "@type": "Course",
		  "name": "Learn How to Play Craps",
		  "description": "In this course you will learn how to play Craps in a casino.",
		  "provider": {
			"@type": "Organization",
			"name": "Parlay Nation",
			"url": "https://parlaynation.com",
			"logo": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
		  }
		}<\/script><!-- HEAD_svelte-k2v5zx_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnCrapsLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<div class="flex float-right" data-svelte-h="svelte-1qwa3jg"><a data-track="nxt-1-craps-basics" href="craps-basics" class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn">Craps Basics
			<svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div> <main aria-label="Main content" class="my-6"><header data-svelte-h="svelte-1lrmhox"><span class="text-lg uppercase font-semibold craps-home-page-title">Craps</span> <h1 class="text-3xl pb-2 font-bold craps-home-page-title-two">Learn to Play Craps</h1></header> <div class="flex flex-col space-y-16"><section aria-label="Craps basics">${each(sections, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="The Pass Line">${each(sections2, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="Place Bets">${each(sections3, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="Spread Bets">${each(sections4, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="Proposition Bets">${each(sections5, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="Come Bets">${each(sections6, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section> <section aria-label="Dont Bets">${each(sections7, (section) => {
        return `${validate_component(CrapsPageSection, "CrapsPageSection").$$render($$result, { section }, {}, {})}`;
      })}</section></div></main> <div class="flex float-right" data-svelte-h="svelte-waeind"><a data-track="nxt-2-craps-basics" href="craps-basics" class="flex items-center justify-center px-4 h-10 text-base font-medium border rounded-lg prev-next-btn">Craps Basics
			<svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div>`;
    }
  })}`;
});
export {
  Page as default
};
