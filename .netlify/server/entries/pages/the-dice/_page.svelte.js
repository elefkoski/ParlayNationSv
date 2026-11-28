import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_ul_b } from "../../../chunks/Content-ul-b.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Shooting Dice at the Craps Table";
let description = "Want to shoot the dice on a Craps game? There is a lot of responsibility involved with correctly handling the dice and courtesies to the shooter you should follow.";
let url = "the-dice";
let phref = "/the-craps-table";
let prev = "The Craps Table";
let nhref = "/the-stages";
let next = "The Stages";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Shooting the Dice",
      href: "#newShooter",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Watching the Dice",
      href: "#watchingTheDice",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Craps Courtesies",
      href: "#showCourtesies",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Being Hit w/the Dice",
      href: "#beingHit",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  let liBs = [
    {
      title: "Follow these rules when handling the dice:",
      subTitle: [
        "Do not go hand to hand with the dice - ",
        "Keep the dice over the table -",
        "Hit the back wall with both dice - ",
        "Do not pick up anything with the hand you have the dice in - ",
        "Throw them down the middle of the table - ",
        '"Same Dice" - '
      ],
      items: [
        "Once you pick up the dice with one hand, do not switch them to the other hand. Please keep them in the same hand! If you want to switch hands, place the dice back on the table and pick them up with your other hand.",
        "Do not grab the dice and turn around because the beverage server is coming around asking for drinks. If something is so imperative that you need to turn around, either keep your arm stretched out over the table or put the dice down and do what you gotta do. The dealers will bring the dice back to the middle of the table and give them back to you when you are ready.",
        "The back wall would be the wall on the opposite side you are shooting from. It is not the wall closest to you. If you do not hit the back wall with both dice, it is still considered a roll, but you may be reminded by one of the dealers or the Box to try and hit the back wall.",
        "Many players will pick up the dice ready to shoot but then decide they want to make a last-minute bet. They reach into the rail with the dice and pick up some cheques to make a bet. This is common but a no-no. Use your other hand or put the dice back down.",
        "There will be many times where the table is filled with bets, and there may be no other option but to hit some of them. Please do not try to hit these bets on purpose. Specifically: do not throw the dice in the Place Bet area. When these cheques get hit, they easily get mixed, and it becomes hard for the dealer to determine whose cheques belong to whom. Nobody wants an argument at the table. Please try not to hit the mirror either. It will easily chip off the corners of the dice.",
        "If you happen to throw one or both of the dice off the table, the stickperson will dump the bowl, and you will have to pick two more. If you want the same die/dice, you must tell the dealer “Same dice” before they dump the bowl to get your same dice back."
      ]
    }
  ];
  let liBs2 = [
    {
      title: "Couple things to consider:",
      subTitle: [
        "#1 Rule: Keep your hands up!! - ",
        "Do not bother the shooter as they are about to throw the dice - "
      ],
      items: [
        "When the shooter is about to roll the dice, do not reach down onto the table for any reason. If you want to make a last-second bet, make a verbal bet. If you want to add or remove money from a bet, tell the base dealer.",
        "It's pretty much ok for the table to root for the shooter as they're going to shoot the dice but trying to ask a question or start up a conversation as they're about to shoot is a big no-no."
      ]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.jpg"
  };
  return `${$$result.head += `<!-- HEAD_svelte-1tihvkq_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-om2fov">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Shooting the Dice",
  "description": "Delve into the thrill of shooting the dice in Craps, the etiquette involved, and the courtesies extended towards the shooter.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/the-dice",
  "image": "http://parlaynation.com/images/the-dice/the-dice-header.webp",
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
    "@id": "http://parlaynation.com/the-dice"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Craps Basics",
      "description": "A comprehensive overview on the excitement of shooting the dice, including how to do it properly, the importance of attention, and etiquette towards the shooter.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "New to Shooting Craps?",
          "description": "Guidelines for new shooters on how to select and shoot the dice, along with the etiquettes to follow."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Are You Watching the Dice at the Craps Table?",
          "description": "The significance of keeping an eye on the dice to maintain game flow and avoid disrupting other players."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Do You Show Courtesies to the Shooter During the Craps Game?",
          "description": "The importance of observing proper etiquettes towards the shooter, recognizing the role's pressure."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Have You Been Hit with the Dice at the Craps Table?",
          "description": "Advice on how to react if hit by the dice, and how such instances are adjudicated by the stickperson or Boxperson."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-dice/the-craps-dice_640x360.webp",
      "caption": "Five maroon colored Craps dice sitting on green felt."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-dice/watching-the-dice_640x360.webp",
      "caption": "A player with tunnel vision staring at dice at the opposite end of a Craps table."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/the-dice/getting-hit-with-the-dice_640x360.webp",
      "caption": "A statue of Caesar with his hand raised and a pointed finger."
    }
  ]
}<\/script><!-- HEAD_svelte-1tihvkq_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Craps Basics",
          title: "Shooting the Dice",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-1bermsl">Getting to throw the dice is one of the best parts of Craps. There&#39;s something special about
				having the fate of the entire table at your fingertips. Time almost slows down while the
				dice are in the air, and when you win, it&#39;s a feeling hard to match.</p> <p class="pb-4" data-svelte-h="svelte-1k7zrte">Every Craps table has five dice that are considered sacred. It&#39;s the dealers&#39; responsibility
				to know where all of them are, so you want to make sure to listen to the rules the dealers
				tell you to follow and don&#39;t do anything crazy. Treat the dice like they&#39;re gonna buy you a
				new pair of shoes.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/the-craps-dice_640x360.webp",
                mdImg: "/images/" + url + "/the-craps-dice_960x540.webp",
                lgImg: "/images/" + url + "/the-craps-dice_1280x720.webp",
                title: "The Craps Dice",
                alt: "Five maroon colored Craps dice sitting on green felt."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "newShooter",
          title: "New to Shooting Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-yduuh4">Everyone at the table has a chance to roll the dice but must follow certain rules. You
				cannot just pick up the dice and do what you want with them. The stickperson will send you
				five dice; you pick two, the dealer takes back the rest then it&#39;s time to shoot.</p> ${validate_component(Content_ul_b, "ContentUlb").$$render($$result, { liBs }, {}, {})}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "watchingTheDice",
          title: "Are You Watching the Dice at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">You must watch the dice at all times! The best time to make bets is when the dice are in the
				middle of the table. As soon as the dice leave the middle of the table, it would be best if
				you were done. If you don&#39;t watch the dice and the shooter throws them down the table and
				hits you, you&#39;ll very likely be blamed if everybody loses. Don&#39;t be that person. If you
				would like to make a bet while the dice are out, you can make a ${validate_component(Link, "Link").$$render(
              $$result,
              {
                text: "verbal bet",
                href: "verbal-betting"
              },
              {},
              {}
            )}.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/watching-the-dice_640x360.webp",
                mdImg: "/images/" + url + "/watching-the-dice_960x540.webp",
                lgImg: "/images/" + url + "/watching-the-dice_1280x720.webp",
                title: "Watching the Dice",
                alt: "A player with tunnel vision staring at dice at the opposite end of a Craps table."
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "showCourtesies",
          title: "Do You Show Courtesies to the Shooter During the Craps Game?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-uob7nx">The person shooting the dice bears the burden of whether or not the table wins or loses
				money. For most shooters, there is no skill in shooting the dice nor can they do anything to
				make the dice land on a certain number. Even though they can&#39;t control the game&#39;s outcome,
				other players still need to have etiquette towards the shooter.</p> ${validate_component(Content_ul_b, "ContentUlb").$$render($$result, { liBs: liBs2 }, {}, {})}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "beingHit",
          title: "Have You Been Hit with the Dice at the Craps Table?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4">How a player reacts to being hit by the dice determines whether a roll will be considered
				valid. Be a statue. If you see the dice are going to hit you and you don&#39;t move and the dice
				land back on the table, it will be considered a roll. As a very general rule of thumb, if a
				player makes a forward motion with any part of their body that keeps the dice on the table,
				it will be considered a &#39;No-Roll.&#39; It is at the discretion of the Stickperson and/or
				Boxperson to determine whether a player made a motion that they considered being &#39;forward&#39;
				and should say ${validate_component(Quote, "Quote").$$render($$result, { text: "That's a\n			roll" }, {}, {})} or ${validate_component(Quote, "Quote").$$render($$result, { text: "No-roll" }, {}, {})} before the dice come to a complete stop.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/getting-hit-with-the-dice_640x360.webp",
                mdImg: "/images/" + url + "/getting-hit-with-the-dice_960x540.webp",
                lgImg: "/images/" + url + "/getting-hit-with-the-dice_1280x720.webp",
                title: "Getting Hit with the Dice",
                alt: "A statue of Caesar with his hand raised and a pointed finger."
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
