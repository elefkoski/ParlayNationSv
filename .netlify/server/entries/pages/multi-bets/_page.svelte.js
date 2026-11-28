import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { L as LearnCrapsLayout } from "../../../chunks/LearnCrapsLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { x as calculateHighLow, y as calculateElevenTwelve, z as calculateAcesAceDeuce, A as calculateSevenEleven, B as calculateHighLowYo, D as calculateThreeWay, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcContainer } from "../../../chunks/CalcContainer.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { C as CalcInput2 } from "../../../chunks/CalcInput2.js";
import { P as PrevNext, a as PrevNext2 } from "../../../chunks/PrevNext2.js";
import { C as Content_h1 } from "../../../chunks/Content-h1.js";
import { C as Content_img, a as Content_h2 } from "../../../chunks/Content-img.js";
import { C as Content_h3 } from "../../../chunks/Content-h3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
import { Q as Quote } from "../../../chunks/Quote.js";
let title = "Betting Multi-Bets in Craps";
let description = "Multi-Bets are combinations of several different proposition bets at once. The C&E, Horn, Horn High, and World are the most common but there are plenty more.";
let url = "multi-bets";
let phref = "the-field";
let prev = "The Field";
let nhref = "horn";
let next = "Horn";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageLinks = [
    {
      title: "Each vs Split",
      href: "#eachVsSplit",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "Two Number Bets",
      href: "#twoNumber",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "High - Low Calculator",
      href: "#highLowCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Eleven - Twelve Calculator",
      href: "#elevenTwelveCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Aces - Ace Deuce Calculator",
      href: "#acesAceDeuceCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Seven - Eleven Calculator",
      href: "#sevenElevenCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Three Number Multi-Bets",
      href: "#threeNumber",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "High - Low - Yo Calculator",
      href: "#highLowYoCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    },
    {
      title: "Three Way Craps Calculator",
      href: "#threeWayCalc",
      iconD: ["M0 0h24v24H0V0z", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],
      iconFills: ["none", "#38BDF8"]
    }
  ];
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "/images/" + url + "/" + url + "-header.jpg"
  };
  return `${$$result.head += `<!-- HEAD_svelte-ua57z4_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-ozvbod">{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Betting Multi-Bets at the Craps Table",
  "description": "An in-depth look at Multi-Bets in Craps, including strategies for two and three number combinations and the proper terminology for placing these bets.",
  "author": {
    "@type": "Person",
    "name": "Elvis Lefkoski"
  },
  "datePublished": "2024-03-04",
  "url": "http://parlaynation.com/multi-bets",
  "image": "http://parlaynation.com/images/multi-bets/multi-bets-header.webp",
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
    "@id": "http://parlaynation.com/multi-bets"
  },
  "articleSection": [
    {
      "@type": "ItemList",
      "name": "Multi-Bet Strategies",
      "description": "Strategies and terminology for placing Multi-Bets in Craps, focusing on combinations of two and three Straight Up bets.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Each vs Split",
          "description": "Explains the difference between betting 'each' for betting the same amount on two different numbers and 'split' for dividing a bet amount over two numbers."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Common Two Number Multi-Bets",
          "description": "Details on common two-number combinations, including High-Low, Eleven-Twelve (ET), Aces-Ace Deuce, and Seven-Eleven."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Common Three Number Multi-Bets",
          "description": "Overview of popular three-number bet combinations like High-Low-Yo and Three Way Craps."
        }
      ]
    }
  ],
  "image": [
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/multi-bets_640x360.webp",
      "caption": "Multiple bets in the proposition area: $2 split on the eleven twelve, a high low yo, and a $5 c and e split."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/high-low_640x360.webp",
      "caption": "$1 each on the two and the twelve."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/eleven-twelve_640x360.webp",
      "caption": "$1 each on the eleven and the twelve."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/aces-ace-deuce_640x360.webp",
      "caption": "$1 each on the aces and the ace deuce."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/seven-eleven_640x360.webp",
      "caption": "$1 each on the seven and the eleven."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/high-low-yo_640x360.webp",
      "caption": "$1 each on the twelve, the aces, and the yo."
    },
    {
      "@type": "ImageObject",
      "url": "http://parlaynation.com/images/multi-bets/three-way-craps_640x360.webp",
      "caption": "$1 each on the aces, ace deuce, and the twelve."
    }
  ]
}<\/script><!-- HEAD_svelte-ua57z4_END -->`, ""} ${validate_component(LearnCrapsLayout, "LearnLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `${validate_component(PrevNext, "PrevNext").$$render($$result, { phref, prev, nhref, next }, {}, {})} <main aria-label="Main content" class="flex flex-col my-6">${validate_component(Content_h1, "ContentHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "Proposition Bets",
          title: "Betting Multi-Bets at the Craps Table",
          pageData
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-7wtn3o">Multi-Bets are betting the same amount on 2 or 3 different Straight Up bets. This page goes
				over the most common two and three Multi-Bet combinations that you&#39;ll see other players
				betting and the proper way to say them.</p> ${validate_component(Content_img, "ContentImg").$$render(
              $$result,
              {
                caption: "",
                smImg: "/images/" + url + "/multi-bets_640x360.webp",
                mdImg: "/images/" + url + "/multi-bets_960x540.webp",
                lgImg: "/images/" + url + "/multi-bets_1280x720.webp",
                title: "Multi-Bets",
                alt: "Multiple bets in the proposition area: $2 split on the eleven twelve, a high low yo, and a $5 c and e split."
              },
              {},
              {}
            )}`;
          }
        }
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "eachVsSplit",
          title: "Each vs Split in Craps"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Betting Each" }, {}, {
              default: () => {
                return `<p class="pb-4">When you use the phrase ${validate_component(Quote, "Quote").$$render($$result, { text: "Each" }, {}, {})} you&#39;re betting the same amount of money on two
					different numbers. E.g. ${validate_component(Quote, "Quote").$$render($$result, { text: "Can I have $1 'each' High-Low?" }, {}, {})}</p>`;
              }
            })} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Betting Split" }, {}, {
              default: () => {
                return `<p class="pb-4">You can split two different numbers with an odd amount (like $5) with the phrase ${validate_component(Quote, "Quote").$$render($$result, { text: "Split" }, {}, {})}. E.g. ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "Can I have a nickel split on the Aces-Ace Deuce?"
                  },
                  {},
                  {}
                )} Some casinos won&#39;t
					allow odd amounted splits ($5) because they&#39;re improper ($2.50 on each).</p>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "twoNumber",
          title: "What Are Some Common Two Number Multi-Bets in Craps?"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "High - Low" }, {}, {
              default: () => {
                return `<p class="pb-4">It&#39;s the ${validate_component(Link, "Link").$$render($$result, { text: "Aces", href: "straight-up" }, {}, {})} and the Twelve but when you bet them together
					they are the highest number (12) and the lowest number (2) so we call them ${validate_component(Quote, "Quote").$$render($$result, { text: "High-Low" }, {}, {})}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/high-low_640x360.webp",
                    mdImg: "/images/" + url + "/high-low_960x540.webp",
                    lgImg: "/images/" + url + "/high-low_1280x720.webp",
                    title: "High-Low",
                    alt: "$1 each on the two and the twelve."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "High low payment calculator",
                    id: "highLowCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the High (12) and the Low (2).",
                          title: "High - Low Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput, "CalcInput").$$render(
                              $$result,
                              {
                                calculate: calculateHighLow,
                                id: "high_low_pymnt_calc",
                                pId: "high_low_calc_result",
                                placeholder: "$1 minimum",
                                step: 1,
                                title: "Enter amount on EACH the High & Low:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Eleven - Twelve (ET)" }, {}, {
              default: () => {
                return `<p class="pb-4">While you normally would use the word ${validate_component(Quote, "Quote").$$render($$result, { text: "Yo" }, {}, {})} when betting an eleven, when you
					bet it with the twelve, you would use the word ${validate_component(Quote, "Quote").$$render($$result, { text: "Eleven" }, {}, {})}. Example: ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "Can I have a nickel each\n				eleven-twelve?"
                  },
                  {},
                  {}
                )}People also use the letter combination &#39;ET&#39;. Example: ${validate_component(Quote, "Quote").$$render($$result, { text: "Can I have a nickel each ET?" }, {}, {})}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/eleven-twelve_640x360.webp",
                    mdImg: "/images/" + url + "/eleven-twelve_960x540.webp",
                    lgImg: "/images/" + url + "/eleven-twelve_1280x720.webp",
                    title: "Eleven - Twelve",
                    alt: "$1 each on the eleven and the twelve."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Eleven twelve payment calculator",
                    id: "elevenTwelveCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the Eleven - Twelve, often called ET.",
                          title: "Eleven - Twelve Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput2, "CalcInput2").$$render(
                              $$result,
                              {
                                calculate: calculateElevenTwelve,
                                id: "eleven_twelve_pymnt_calc",
                                pId: "eleven_twelve_calc_result",
                                placeholder: "$1 minimum",
                                rollValues: [11, 12],
                                valueTitles: ["Eleven", "Twelve"],
                                step: 1,
                                title: "Enter amount on EACH the Eleven & Twelve:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Aces - Ace Deuce" }, {}, {
              default: () => {
                return `<p class="pb-4">You&#39;re not going to say anything special for these two. You just say ${validate_component(Quote, "Quote").$$render(
                  $$result,
                  {
                    text: "Can I have $1 each Aces - Ace Deuce?"
                  },
                  {},
                  {}
                )}</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/aces-ace-deuce_640x360.webp",
                    mdImg: "/images/" + url + "/aces-ace-deuce_960x540.webp",
                    lgImg: "/images/" + url + "/aces-ace-deuce_1280x720.webp",
                    title: "Aces - Ace Deuce",
                    alt: "$1 each on the aces and the ace deuce."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Aces ace deuce payment calculator",
                    id: "acesAceDeuceCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the Aces - Ace Deuce.",
                          title: "Aces - Ace Deuce Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput2, "CalcInput2").$$render(
                              $$result,
                              {
                                calculate: calculateAcesAceDeuce,
                                id: "aces_ace_deuce_pymnt_calc",
                                pId: "aces_ace_deuce_calc_result",
                                placeholder: "$1 minimum",
                                rollValues: [2, 3],
                                valueTitles: ["Aces", "Ace Deuce"],
                                step: 1,
                                title: "Enter amount on EACH the Aces & Ace Deuce:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Seven - Eleven" }, {}, {
              default: () => {
                return `<p class="pb-4">Not only does it rhyme but when you&#39;re betting the ${validate_component(Link, "Link").$$render($$result, { text: "Don't Pass", href: "dont-pass" }, {}, {})}
					you can use those two numbers to ${validate_component(Link, "Link").$$render(
                  $$result,
                  {
                    text: "hedge your bet",
                    href: "to-consider"
                  },
                  {},
                  {}
                )}.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/seven-eleven_640x360.webp",
                    mdImg: "/images/" + url + "/seven-eleven_960x540.webp",
                    lgImg: "/images/" + url + "/seven-eleven_1280x720.webp",
                    title: "Seven - Eleven",
                    alt: "$1 each on the seven and the eleven."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Seven eleven payment calculator",
                    id: "sevenElevenCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the Seven - Eleven.",
                          title: "Seven - Eleven Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput2, "CalcInput2").$$render(
                              $$result,
                              {
                                calculate: calculateSevenEleven,
                                id: "seven_eleven_pymnt_calc",
                                pId: "seven_eleven_calc_result",
                                placeholder: "$1 minimum",
                                rollValues: [7, 11],
                                valueTitles: ["Seven", "Eleven"],
                                step: 1,
                                title: "Enter amount on EACH the Seven & Eleven:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h2, "ContentHeaderTwo").$$render(
        $$result,
        {
          id: "threeNumber",
          title: "What Are Some Common Three Number Multi-Bets in Craps?"
        },
        {},
        {
          default: () => {
            return `<p class="pb-4" data-svelte-h="svelte-craahv">There are a couple popular bets that include three numbers and they must be bet in multiples
				of three.</p> ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "High-Low-Yo" }, {}, {
              default: () => {
                return `<p class="pb-4" data-svelte-h="svelte-1rijch3">This is betting the 12, the Aces, and the Yo. Most people love the Yo and who doesn&#39;t like
					the High and the Low, they are the two highest paid bets on the table.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/high-low-yo_640x360.webp",
                    mdImg: "/images/" + url + "/high-low-yo_960x540.webp",
                    lgImg: "/images/" + url + "/high-low-yo_1280x720.webp",
                    title: "High - Low - Yo",
                    alt: "$1 each on the twelve, the aces, and the yo."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "High low yo payment calculator",
                    id: "highLowYoCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the High - Low - Yo.",
                          title: "High - Low - Yo Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput2, "CalcInput2").$$render(
                              $$result,
                              {
                                calculate: calculateHighLowYo,
                                id: "high_low_yo_pymnt_calc",
                                pId: "high_low_yo_calc_result",
                                placeholder: "$1 minimum",
                                rollValues: [2, 11, 12],
                                valueTitles: ["Low", "Yo", "High"],
                                step: 1,
                                title: "Enter amount on EACH the High Low & Yo:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
              }
            })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Content_h3, "ContentHeaderThree").$$render($$result, { title: "Three Way Craps" }, {}, {
              default: () => {
                return `<p class="pb-4">The Three Way Craps bets the Aces, Ace Deuce, and the Twelve. It is more of a hedge bet.
					Whenever people bet the Pass Line on the ${validate_component(Link, "Link").$$render($$result, { text: "Comeout Roll", href: "the-stages" }, {}, {})} they
					lose when any of those three numbers are rolled so it&#39;s not a bad bet when you&#39;re deciding
					to hedge.</p> <p class="pb-4" data-svelte-h="svelte-18gq7rz">The Three Way Craps and Any Craps are similar because they both bet the same numbers but
					different in how the money is distributed. A Three Way is betting each of the numbers
					individually so depending on which one rolls, the payment is different. The Any Craps is
					betting whether or not any of the three will come and it pays the same regardless of
					which rolls.</p> ${validate_component(Content_img, "ContentImg").$$render(
                  $$result,
                  {
                    caption: "",
                    smImg: "/images/" + url + "/three-way-craps_640x360.webp",
                    mdImg: "/images/" + url + "/three-way-craps_960x540.webp",
                    lgImg: "/images/" + url + "/three-way-craps_1280x720.webp",
                    title: "Three Way Craps",
                    alt: "$1 each on the aces, ace deuce, and the twelve."
                  },
                  {},
                  {}
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(CalcContainer, "CalcContainer").$$render(
                  $$result,
                  {
                    aria: "Three way craps payment calculator",
                    id: "threeWayCalc"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(CalcBox, "CalcBox").$$render(
                        $$result,
                        {
                          description: "Check the payment for when you bet the same amount on each the Three Way Craps.",
                          title: "Three Way Craps Payment Calculator"
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(CalcInput2, "CalcInput2").$$render(
                              $$result,
                              {
                                calculate: calculateThreeWay,
                                id: "three_way_pymnt_calc",
                                pId: "three_way_calc_result",
                                placeholder: "$1 minimum",
                                rollValues: [2, 3, 12],
                                valueTitles: ["Aces", "Ace Deuce", "Twelve"],
                                step: 1,
                                title: "Enter amount on EACH the Three Way Craps:"
                              },
                              {},
                              {}
                            )}`;
                          }
                        }
                      )}`;
                    }
                  }
                )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}`;
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
