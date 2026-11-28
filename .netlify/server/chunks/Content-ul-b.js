import { c as create_ssr_component, f as each, e as escape } from "./ssr.js";
const Content_ul_b = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { liBs = [
    {
      title: "This is the intro to list 1",
      subTitle: ["there is a title"],
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    },
    {
      title: "This is the intro to list 2",
      subTitle: ["there is another title"],
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    },
    {
      title: "This is the intro to list 3",
      subTitle: ["there is a third title"],
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    }
  ] } = $$props;
  if ($$props.liBs === void 0 && $$bindings.liBs && liBs !== void 0)
    $$bindings.liBs(liBs);
  return `<ul class="ml-4 flex flex-col space-y-2">${each(liBs, (section, sectionIndex) => {
    return `<li class="rounded shadow-lg dark:shadow-none">${section.title ? `<h4 class="text-lg font-semibold ul-h4">${escape(section.title)} </h4>` : ``} ${section.items ? `<ul class="list-disc list-inside space-y-1">${each(section.items, (item, index) => {
      return `<li class="ul-li ml-1"> ${section.subTitle && section.subTitle.length > index ? `<span class="font-bold uppercase">${escape(section.subTitle[index])}</span>` : ``} ${escape(item)} </li>`;
    })} </ul>` : ``} </li>`;
  })}</ul>`;
});
export {
  Content_ul_b as C
};
