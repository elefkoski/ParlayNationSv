import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { P as PracticeCrapsLayout } from "../../../chunks/PracticeCrapsLayout.js";
const PracticeDownloadable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { description: description2 } = $$props;
  let { imageUrlSm } = $$props;
  let { imageUrlLg } = $$props;
  let { pageUrl } = $$props;
  let { pdfUrl } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.description === void 0 && $$bindings.description && description2 !== void 0)
    $$bindings.description(description2);
  if ($$props.imageUrlSm === void 0 && $$bindings.imageUrlSm && imageUrlSm !== void 0)
    $$bindings.imageUrlSm(imageUrlSm);
  if ($$props.imageUrlLg === void 0 && $$bindings.imageUrlLg && imageUrlLg !== void 0)
    $$bindings.imageUrlLg(imageUrlLg);
  if ($$props.pageUrl === void 0 && $$bindings.pageUrl && pageUrl !== void 0)
    $$bindings.pageUrl(pageUrl);
  if ($$props.pdfUrl === void 0 && $$bindings.pdfUrl && pdfUrl !== void 0)
    $$bindings.pdfUrl(pdfUrl);
  return `<div class="flex flex-col home-page-body-bg-3 shadow-lg rounded-lg p-4"><div class="flex-shrink-0 relative"><picture><source media="(min-width: 768px)"${add_attribute("srcset", imageUrlLg, 0)}> <img class="h-100 w-full object-cover"${add_attribute("src", imageUrlSm, 0)}${add_attribute("alt", title2, 0)}></picture> <div class="absolute inset-0 image-cover dark:opacity-20"></div></div> <div class="mt-4 flex items-center"><div class="text-lg leading-7 font-semibold"><h3>${escape(title2)}</h3></div></div> <div class="mt-2"><p>${escape(description2)}</p></div> <div class="mt-4 flex justify-between"><a data-track="${"view-pdf-" + escape(pageUrl, true)}"${add_attribute("href", pageUrl, 0)} class="px-3 py-2 text-xs font-medium rounded practice-view-btn">View</a> <a data-track="${"dwnld-pdf-" + escape(pageUrl, true)}"${add_attribute("href", pdfUrl, 0)} target="_blank" rel="noopener noreferrer" class="px-3 py-2 text-xs font-medium rounded flex items-center space-x-2 practice-dwnld-btn">Download
			<svg class="fill-current w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg></a></div></div>`;
});
const DownloadableSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(items, (item) => {
    return `${validate_component(PracticeDownloadable, "Downloadable").$$render(
      $$result,
      {
        title: item.title,
        description: item.description,
        imageUrlSm: item.imageUrlSm,
        imageUrlLg: item.imageUrlLg,
        pageUrl: item.pageUrl,
        pdfUrl: item.pdfUrl
      },
      {},
      {}
    )}`;
  })}</div>`;
});
let title = "Practice Craps";
let description = "Downloadable PDFs for Craps. Practice Math Printouts, Dice and Table Printouts, and more.";
let url = "practice";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sections = [
    {
      items: [
        {
          title: "Pass Line Odds - 6 & 8",
          description: "Practice three levels of difficulty with cut-out Pass Line Odds Payments on the 6 & 8.",
          imageUrlSm: "/images/practice/pdf-cover-pass-line-odds-6-8_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-pass-line-odds-6-8_960x1242.webp",
          pageUrl: "practice-pass-line-odds-payments-6-8",
          pdfUrl: "src/pdf/pass-line-odds-6-8.pdf"
        },
        {
          title: "Pass Line Odds - 5 & 9",
          description: "Practice three levels of difficulty with cut-out Pass Line Odds Payments on the 5 & 9.",
          imageUrlSm: "/images/practice/pdf-cover-pass-line-odds-5-9_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-pass-line-odds-5-9_960x1242.webp",
          pageUrl: "practice-pass-line-odds-payments-5-9",
          pdfUrl: "src/pdf/pass-line-odds-5-9.pdf"
        },
        {
          title: "Pass Line Odds - 4 & 10",
          description: "Practice two levels of difficulty with cut-out Pass Line Odds Payments on the 4 & 10.",
          imageUrlSm: "/images/practice/pdf-cover-pass-line-odds-4-10_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-pass-line-odds-4-10_960x1242.webp",
          pageUrl: "practice-pass-line-odds-payments-4-10",
          pdfUrl: "src/pdf/pass-line-odds-4-10.pdf"
        }
      ]
    }
  ];
  let sections2 = [
    {
      items: [
        {
          title: "Place Bet Payments - 6 & 8",
          description: "Practice three levels of difficulty with cut-out Place Bet Payments on the 6 & 8.",
          imageUrlSm: "/images/practice/pdf-cover-place-bets-6-8_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-place-bets-6-8_960x1242.webp",
          pageUrl: "practice-place-bet-payments-6-8",
          pdfUrl: "src/pdf/place-bet-payments-6-8.pdf"
        },
        {
          title: "Place Bet Payments - 5 & 9",
          description: "Practice three levels of difficulty with cut-out Place Bet Payments on the 5 & 9.",
          imageUrlSm: "/images/practice/pdf-cover-place-bets-5-9_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-place-bets-5-9_960x1242.webp",
          pageUrl: "practice-place-bet-payments-5-9",
          pdfUrl: "src/pdf/place-bet-payments-5-9.pdf"
        },
        {
          title: "Place Bet Payments - 4 & 10",
          description: "Practice two levels of difficulty with cut-out Place Bet Payments on the 4 & 10.",
          imageUrlSm: "/images/practice/pdf-cover-place-bets-4-10_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-place-bets-4-10_960x1242.webp",
          pageUrl: "practice-place-bet-payments-4-10",
          pdfUrl: "src/pdf/place-bet-payments-4-10.pdf"
        }
      ]
    }
  ];
  let sections3 = [
    {
      items: [
        {
          title: "Come Bet w/Odds Payments 6 & 8",
          description: "Practice three levels of difficulty with cut-out Come Bet w/Odds Payments on the 6 & 8.",
          imageUrlSm: "/images/practice/pdf-cover-come-bet-w-odds-6-8_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-come-bet-w-odds-6-8_960x1242.webp",
          pageUrl: "practice-come-bet-w-odds-payments-6-8",
          pdfUrl: "src/pdf/come-bet-with-odds-6-8.pdf"
        },
        {
          title: "Come Bet w/Odds Payments 5 & 9",
          description: "Practice three levels of difficulty with cut-out Come Bet w/Odds Payments on the 5 & 9.",
          imageUrlSm: "/images/practice/pdf-cover-come-bet-w-odds-5-9_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-come-bet-w-odds-5-9_960x1242.webp",
          pageUrl: "practice-come-bet-w-odds-payments-5-9",
          pdfUrl: "src/pdf/come-bet-with-odds-5-9.pdf"
        },
        {
          title: "Come Bet w/Odds Payments 4 & 10",
          description: "Practice two levels of difficulty with cut-out Come Bet w/Odds Payments on the 4 & 10.",
          imageUrlSm: "/images/practice/pdf-cover-come-bet-w-odds-4-10_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-come-bet-w-odds-4-10_960x1242.webp",
          pageUrl: "practice-come-bet-w-odds-payments-4-10",
          pdfUrl: "src/pdf/come-bet-with-odds-4-10.pdf"
        }
      ]
    }
  ];
  let sections31 = [
    {
      items: [
        {
          title: "Lay Odds Payments 6 & 8",
          description: "Practice three levels of difficulty with cut-out Lay Odds Payments on the 6 & 8.",
          imageUrlSm: "/images/practice/pdf-cover-lay-odds-6-8_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-lay-odds-6-8_960x1242.webp",
          pageUrl: "practice-lay-odds-payments-6-8",
          pdfUrl: "src/pdf/lay-odds-payments-6-8.pdf"
        },
        {
          title: "Lay Odds Payments 5 & 9",
          description: "Practice three levels of difficulty with cut-out Lay Odds Payments on the 5 & 9.",
          imageUrlSm: "/images/practice/pdf-cover-lay-odds-5-9_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-lay-odds-5-9_960x1242.webp",
          pageUrl: "practice-lay-odds-payments-5-9",
          pdfUrl: "src/pdf/lay-odds-payments-5-9.pdf"
        },
        {
          title: "Lay Odds Payments 4 & 10",
          description: "Practice two levels of difficulty with cut-out Lay Odds Payments on the 4 & 10.",
          imageUrlSm: "/images/practice/pdf-cover-lay-odds-4-10_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-lay-odds-4-10_960x1242.webp",
          pageUrl: "practice-lay-odds-payments-4-10",
          pdfUrl: "src/pdf/lay-odds-payments-4-10.pdf"
        }
      ]
    }
  ];
  let sections4 = [
    {
      items: [
        {
          title: "Craps Cards - Black",
          description: "36 Black Craps Cards show you every combination of the dice so you can play or practice Craps with cards.",
          imageUrlSm: "/images/practice/pdf-cover-black-dice-combinations_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-black-dice-combinations_960x1242.webp",
          pageUrl: "practice-craps-cards-black",
          pdfUrl: "src/pdf/black-craps-cards.pdf"
        },
        {
          title: "Craps Cards - Grey",
          description: "36 Grey Craps Cards show you every combination of the dice so you can play or practice Craps with cards.",
          imageUrlSm: "/images/practice/pdf-cover-grey-dice-combinations_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-grey-dice-combinations_960x1242.webp",
          pageUrl: "practice-craps-cards-grey",
          pdfUrl: "src/pdf/grey-craps-cards.pdf"
        }
      ]
    }
  ];
  let sections5 = [
    {
      items: [
        {
          title: "60mm Foldable Craps Dice",
          description: "Practice playing Craps by printing a couple 60mm foldable Craps dice.",
          imageUrlSm: "/images/practice/pdf-cover-60mm-foldable-craps-dice_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-60mm-foldable-craps-dice_960x1242.webp",
          pageUrl: "practice-60mm-craps-dice",
          pdfUrl: "src/pdf/60mm-foldable-craps-dice.pdf"
        },
        {
          title: "40mm Foldable Craps Dice",
          description: "Practice playing Craps with a pair of 40mm foldable Craps dice.",
          imageUrlSm: "/images/practice/pdf-cover-40mm-foldable-craps-dice_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-40mm-foldable-craps-dice_960x1242.webp",
          pageUrl: "practice-40mm-craps-dice",
          pdfUrl: "src/pdf/40mm-foldable-craps-dice.pdf"
        },
        {
          title: "19mm Foldable Craps Dice",
          description: "Practice playing Craps with six 19mm foldable Craps dice.",
          imageUrlSm: "/images/practice/pdf-cover-19mm-foldable-craps-dice_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-19mm-foldable-craps-dice_960x1242.webp",
          pageUrl: "practice-19mm-craps-dice",
          pdfUrl: "src/pdf/19mm-foldable-craps-dice.pdf"
        }
      ]
    }
  ];
  let sections6 = [
    {
      items: [
        {
          title: "Full Craps Table Layout",
          description: "Practice learning Craps by studying the Craps table layout.",
          imageUrlSm: "/images/practice/pdf-cover-craps-table-layout_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-craps-table-layout_960x1242.webp",
          pageUrl: "practice-full-craps-table-layout",
          pdfUrl: "src/pdf/full-craps-table-layout.pdf"
        },
        {
          title: "Half Craps Table Layout",
          description: "Practice learning Craps by studying half of the Craps table layout.",
          imageUrlSm: "/images/practice/pdf-cover-half-craps-table-layout_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-half-craps-table-layout_960x1242.webp",
          pageUrl: "practice-half-craps-table-layout",
          pdfUrl: "src/pdf/half-craps-table-layout.pdf"
        }
      ]
    }
  ];
  let sections7 = [
    {
      items: [
        {
          title: "Random Horn High Generator",
          description: "Practice Horn High Payments with this Random Horn High Generator.",
          imageUrlSm: "/images/practice/pdf-cover-hh-world-generator_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-hh-world-generator_960x1242.webp",
          pageUrl: "practice-horn-high-generator",
          pdfUrl: "src/pdf/horn-high-generator.pdf"
        }
      ]
    }
  ];
  let sections8 = [
    {
      items: [
        {
          title: "Craps Roll Cards",
          description: "Practice determining what is considered a roll or not a roll in craps.",
          imageUrlSm: "/images/practice/pdf-cover-craps-roll-cards_640x828.webp",
          imageUrlLg: "/images/practice/pdf-cover-craps-roll-cards_960x1242.webp",
          pageUrl: "practice-craps-roll-cards",
          pdfUrl: "src/pdf/craps-roll-cards.pdf"
        }
      ]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-qsobv8_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-8ons6x">{
		  "@context": "http://schema.org/",
		  "@type": "ItemList",
		  "itemListElement":[
			{
			  "@type": "ListItem",
			  "position": "1",
			  "name": "Pass Line Odds Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "2",
			  "name": "Pass Line Odds Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "3",
			  "name": "Pass Line Odds Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Pass Line Odds Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-pass-line-odds-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "4",
			  "name": "Place Bet Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "5",
			  "name": "Place Bet Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "6",
			  "name": "Place Bet Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Place Bet Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-place-bet-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "7",
			  "name": "Come Bet w/Odds Payments 6 &amp; 8",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 6 &amp; 8. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-6-8.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "8",
			  "name": "Come Bet w/Odds Payments 5 &amp; 9",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 5 &amp; 9. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-5-9.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "9",
			  "name": "Come Bet w/Odds Payments 4 &amp; 10",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Come Bet with Odds Payments on the 4 &amp; 10. Downloadable PDF to practice Craps.",
				"url": "https://parlaynation.com/practice-come-bet-w-odds-payments-4-10.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "10",
			  "name": "Practice Craps Cards - Black",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing Craps with Craps Cards. Play Craps with cards using 36 black cut-out cards.",
				"url": "https://parlaynation.com/practice-craps-cards-black.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "11",
			  "name": "Practice Craps Cards - Grey",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing Craps with Craps Cards. Play Craps with cards using 36 grey cut-out cards.",
				"url": "https://parlaynation.com/practice-craps-cards-grey.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "12",
			  "name": "Practice 60mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing Craps with dice by making your own Craps dice. Print out a couple of these huge 60mm Craps dice. These dice are more than triple the size of real Craps dice.",
				"url": "https://parlaynation.com/practice-60mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "13",
			  "name": "Practice 40mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing Craps with dice by making your own Craps dice. Print out a pair of 40mm Craps dice that can be cut-out and folded into 3D Craps dice.",
				"url": "https://parlaynation.com/practice-40mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "14",
			  "name": "Practice 19mm Craps Dice",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice playing Craps by making your own Craps dice. Print out six 19mm Craps dice that can be cut-out and folded into 3D Craps dice.",
				"url": "https://parlaynation.com/practice-19mm-craps-dice.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "15",
			  "name": "Practice Full Craps Table",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice using a printable Craps table layout. First page has the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.",
				"url": "https://parlaynation.com/practice-full-craps-table-layout.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "16",
			  "name": "Practice Half Craps Table",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice using a printable Craps table layout. First page has the Craps table layout filled out for studying while page two has an empty Craps table layout for testing.",
				"url": "https://parlaynation.com/practice-half-craps-table-layout.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "17",
			  "name": "Practice Horn High Generator",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice Horn High payments with this random Horn High Generator. Pull one of each type of card and figure out the payment.",
				"url": "https://parlaynation.com/practice-horn-high-generator.html"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": "18",
			  "name": "Practice Craps Roll Cards",
			  "item":{
				"@type": "DigitalDocument",
				"author":{
				  "@type": "Person",
				  "name": "Elvis Lefkoski"
				},
				"about": "Practice determining what is a roll or not a roll with Craps Roll Cards.",
				"url": "https://parlaynation.com/practice-craps-roll-cards.html"
			  }
			}
		  ]
		}<\/script><!-- HEAD_svelte-qsobv8_END -->`, ""} ${validate_component(PracticeCrapsLayout, "PracticeLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<header aria-label="Practice Craps" class="p-6 shadow-md home-page-heading" data-svelte-h="svelte-96szi4"><h1 class="text-3xl font-bold mb-4">Practice Craps</h1> <p class="mb-4 leading-7">Practice Craps payments for the Pass Line, Place Bets, and Come Bets.</p> <p class="mb-4 leading-7">Print the Craps table layout with or without text.</p> <p class="mb-4 leading-7">Three sizes of printable dice and more!</p></header> <main aria-label="Main sections with downloadables" class="home-page-body-bg-1 p-6 rounded-lg shadow-lg mt-6"><section aria-label="Practice Math Printouts" class="home-page-body-bg-2 p-6 rounded-lg shadow-lg"><h2 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1qmgtkd">Practice Math Printouts</h2> <p class="mb-4 leading-7" data-svelte-h="svelte-7glg7o">Each practice math printout has 20 easy, 20 medium, and 20 hard cut-outs.</p> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-1agj3l0">Pass Line Odds</h3> ${each(sections, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })} <div class="pb-6"></div> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-l4wigm">Place Bet Payments</h3> ${each(sections2, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })} <div class="pb-6"></div> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-zt5orp">Come Bet w/Odds Payments</h3> ${each(sections3, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })} <div class="pb-6"></div> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-852c6i">Lay Odds Payments</h3> ${each(sections31, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })}</section> <section aria-label="Craps Cards Printouts" class="home-page-body-bg-2 p-6 rounded-lg shadow-lg mt-8"><h2 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1doc8qu">Craps Cards</h2> <p class="mb-4 leading-7" data-svelte-h="svelte-1gmosbc">Black Craps Cards are meant to be printed on heavy stock paper so as not to show through the
				back side. Light grey Craps Cards are meant to be printed on normal stock paper and
				shouldn&#39;t show through the back.</p> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-72akdl">Craps Cards</h3> ${each(sections4, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })}</section> <section aria-label="Dice Printouts" class="home-page-body-bg-2 p-6 rounded-lg shadow-lg mt-8"><h2 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1fbb0jc">Craps Dice</h2> <p class="mb-4 leading-7" data-svelte-h="svelte-4xqbnq">Print then cut-out and fold these dice to practice playing Craps.</p> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-8cpo5w">Foldable Craps Dice</h3> ${each(sections5, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })}</section> <section aria-label="Table Layout Printouts" class="home-page-body-bg-2 p-6 rounded-lg shadow-lg mt-8"><h2 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1ol15mw">Table Layout Printouts</h2> <p class="mb-4 leading-7" data-svelte-h="svelte-fihzrt">Both Craps table printouts have pages with and without text.</p> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-16knu1x">Craps Table Layouts</h3> ${each(sections6, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })}</section> <section aria-label="Other Craps Practice Printouts" class="home-page-body-bg-2 p-6 rounded-lg shadow-lg mt-8"><h2 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1pqskoa">Other Craps Practice Printouts</h2> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-4sj9lw">Random Horn High Generator</h3> <p class="mb-4 leading-7" data-svelte-h="svelte-16i9k98">Random Horn High Generator includes instructions with payout table, a bet page, an
				amount page, and a roll page.</p> ${each(sections7, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })} <div class="pb-6"></div> <h3 class="text-2xl text-center font-semibold mb-2" data-svelte-h="svelte-d1v85u">Craps Roll Cards</h3> <p class="mb-4 leading-7" data-svelte-h="svelte-43xa99">Craps Roll Cards are meant to practice what may or may not be a roll.</p> ${each(sections8, (section, i) => {
        return `${validate_component(DownloadableSection, "DownloadableSection").$$render($$result, { items: section.items }, {}, {})}`;
      })}</section></main>`;
    }
  })}`;
});
export {
  Page as default
};
