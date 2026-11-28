import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "./ssr.js";
const Practice_h1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "The Title" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h1 class="text-2xl font-bold mb-8">${escape(title)}</h1>`;
});
const PracticeDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  let { description = "A description" } = $$props;
  let { listPara = "List Paragraph" } = $$props;
  let { listItems = ["Item 1", "Item 2"] } = $$props;
  let { downloadUrl = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.listPara === void 0 && $$bindings.listPara && listPara !== void 0)
    $$bindings.listPara(listPara);
  if ($$props.listItems === void 0 && $$bindings.listItems && listItems !== void 0)
    $$bindings.listItems(listItems);
  if ($$props.downloadUrl === void 0 && $$bindings.downloadUrl && downloadUrl !== void 0)
    $$bindings.downloadUrl(downloadUrl);
  return `<div class="w-full"><h2 class="text-lg font-bold">${escape(title)}</h2> <p>${escape(description)}</p> ${listItems.length > 0 ? `<div class="p-4"><p class="practice-list-title">${escape(listPara)}</p> <ul class="ml-4 list-disc practice-list-text">${each(listItems, (listItem) => {
    return `<li>${escape(listItem)}</li>`;
  })}</ul></div>` : ``} <a data-track="${"dwnld-" + escape(downloadUrl, true)}"${add_attribute("href", downloadUrl, 0)} target="_blank" rel="noopener noreferrer" class="float-right px-4 py-2 mt-4 font-medium rounded practice-download-btn focus:outline-none"><div class="flex items-center" data-svelte-h="svelte-tkog47">Download Now
			<svg class="fill-current w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg></div></a></div>`;
});
const PracticeThumbnailCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = [
    {
      url: "src/images/practice/pdf-cover-pass-line-odds-6-8_640x828.webp",
      href: "practice-pass-line-odds-payments-6-8",
      title: "Pass Line Odds 6/8"
    },
    {
      url: "src/images/practice/pdf-cover-pass-line-odds-5-9_640x828.webp",
      href: "practice-pass-line-odds-payments-5-9",
      title: "Pass Line Odds 5/9"
    },
    {
      url: "src/images/practice/pdf-cover-pass-line-odds-4-10_640x828.webp",
      href: "practice-pass-line-odds-payments-4-10",
      title: "Pass Line Odds 4/10"
    },
    {
      url: "src/images/practice/pdf-cover-place-bets-6-8_640x828.webp",
      href: "practice-place-bet-payments-6-8",
      title: "Place Bet Payments 6/8"
    },
    {
      url: "src/images/practice/pdf-cover-place-bets-5-9_640x828.webp",
      href: "practice-place-bet-payments-5-9",
      title: "Place Bet Payments 5/9"
    },
    {
      url: "src/images/practice/pdf-cover-place-bets-4-10_640x828.webp",
      href: "practice-place-bet-payments-4-10",
      title: "Place Bet Payments 4/10"
    },
    {
      url: "src/images/practice/pdf-cover-come-bet-w-odds-6-8_640x828.webp",
      href: "practice-come-bet-w-odds-payments-6-8",
      title: "Come Bet w/Odds 6/8"
    },
    {
      url: "src/images/practice/pdf-cover-come-bet-w-odds-5-9_640x828.webp",
      href: "practice-come-bet-w-odds-payments-5-9",
      title: "Come Bet w/Odds 5/9"
    },
    {
      url: "src/images/practice/pdf-cover-come-bet-w-odds-4-10_640x828.webp",
      href: "practice-come-bet-w-odds-payments-4-10",
      title: "Come Bet w/Odds 4/10"
    },
    {
      url: "src/images/practice/pdf-cover-lay-odds-6-8_640x828.webp",
      href: "practice-lay-odds-payments-6-8",
      title: "Don't Side Lay Odds 6/8"
    },
    {
      url: "src/images/practice/pdf-cover-lay-odds-5-9_640x828.webp",
      href: "practice-lay-odds-payments-5-9",
      title: "Don't Side Lay Odds 5/9"
    },
    {
      url: "src/images/practice/pdf-cover-lay-odds-4-10_640x828.webp",
      href: "practice-lay-odds-payments-4-10",
      title: "Don't Side Lay Odds 4/10"
    },
    {
      url: "src/images/practice/pdf-cover-black-dice-combinations_640x828.webp",
      href: "practice-craps-cards-black",
      title: "Craps Dice - Black"
    },
    {
      url: "src/images/practice/pdf-cover-grey-dice-combinations_640x828.webp",
      href: "practice-craps-cards-grey",
      title: "Craps Dice - Grey"
    },
    {
      url: "src/images/practice/pdf-cover-60mm-foldable-craps-dice_640x828.webp",
      href: "practice-60mm-craps-dice",
      title: "60mm Foldable Dice"
    },
    {
      url: "src/images/practice/pdf-cover-40mm-foldable-craps-dice_640x828.webp",
      href: "practice-40mm-craps-dice",
      title: "40mm Foldable Dice"
    },
    {
      url: "src/images/practice/pdf-cover-19mm-foldable-craps-dice_640x828.webp",
      href: "practice-19mm-craps-dice",
      title: "19mm Foldable Dice"
    },
    {
      url: "src/images/practice/pdf-cover-craps-table-layout_640x828.webp",
      href: "practice-full-craps-table-layout",
      title: "Full Craps Table Layout"
    },
    {
      url: "src/images/practice/pdf-cover-half-craps-table-layout_640x828.webp",
      href: "practice-half-craps-table-layout",
      title: "Half Craps Table Layout"
    },
    {
      url: "src/images/practice/pdf-cover-hh-world-generator_640x828.webp",
      href: "practice-horn-high-generator",
      title: "Horn High Generator"
    },
    {
      url: "src/images/practice/pdf-cover-craps-roll-cards_640x828.webp",
      href: "practice-craps-roll-cards",
      title: "Craps Roll Cards"
    }
  ];
  let scrollContainer;
  return `<div class="relative p-8 w-full self-center rounded-lg text-center transition-colors duration-500 home-page-body-bg-1"><h3 class="text-xl lg:text-2xl font-bold" data-svelte-h="svelte-1g5mj0">More Downloadable PDF&#39;s</h3> <p class="mt-2" data-svelte-h="svelte-sjv43n">Check out other PDF&#39;s that you can use to practice Craps.</p> <div class="flex overflow-x-auto mt-4 space-x-2 scrollbar-hide"${add_attribute("this", scrollContainer, 0)}>${each(options, ({ url, href, title }, i) => {
    return `<a data-track="${"carousel-" + escape(href, true)}"${add_attribute("href", href, 0)} rel="noopener noreferrer" class="focus:outline-none flex-shrink-0 inline-block w-36"><div class="relative"><img class="w-36 h-auto border-2 border-transparent practice-carousel-border transition-colors duration-200"${add_attribute("src", url, 0)}${add_attribute("alt", `Thumbnail ${i + 1}`, 0)}> <div class="pointer-events-none absolute inset-0 image-cover dark:opacity-20"></div></div> <h4 class="w-3/4 mx-auto">${escape(title)}</h4> </a>`;
  })}</div> <button class="prev absolute top-[55%] left-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full shadow-lg z-10" data-svelte-h="svelte-971sx">❮</button> <button class="next absolute top-[55%] right-4 transform -translate-y-1/2 practice-page-left-right-btn p-2 rounded-full shadow-lg z-10" data-svelte-h="svelte-1u7e5kg">❯</button></div>`;
});
export {
  Practice_h1 as P,
  PracticeDescription as a,
  PracticeThumbnailCarousel as b
};
