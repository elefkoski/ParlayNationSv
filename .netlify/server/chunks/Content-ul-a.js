import { c as create_ssr_component, f as each, e as escape } from "./ssr.js";
const Content_ul_a = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { liAs = [
    {
      title: "This is the intro to list 1",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    },
    {
      title: "This is the intro to list 2",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    },
    {
      title: "This is the intro to list 3",
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    }
  ] } = $$props;
  if ($$props.liAs === void 0 && $$bindings.liAs && liAs !== void 0)
    $$bindings.liAs(liAs);
  return `<ul class="ml-4 flex flex-col space-y-2">${each(liAs, (list) => {
    return `<li class="rounded shadow-lg dark:shadow-none"><h4 class="text-lg font-semibold ul-h4">${escape(list.title)}</h4> <ul class="list-disc list-inside space-y-1">${each(list.items, (item) => {
      return `<li class="ul-li ml-1">${escape(item)}</li>`;
    })}</ul> </li>`;
  })}</ul>`;
});
export {
  Content_ul_a as C
};
