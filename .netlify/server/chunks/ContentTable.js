import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "./ssr.js";
const ContentTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tblAria = "A table label" } = $$props;
  let { tblHeaders = ["Title 1", "Title 2", "Title 3", "Title 4"] } = $$props;
  let { tblRows = [
    ["Comeout Roll", "Even Money", "7 or 11", "2,3, or 12"],
    ["Intermediate Roll", "Even Money", "When point rolls", "7"]
  ] } = $$props;
  let { tblPnts = [
    "The first note on the table",
    "The second note on the table",
    "The third note on the table"
  ] } = $$props;
  if ($$props.tblAria === void 0 && $$bindings.tblAria && tblAria !== void 0)
    $$bindings.tblAria(tblAria);
  if ($$props.tblHeaders === void 0 && $$bindings.tblHeaders && tblHeaders !== void 0)
    $$bindings.tblHeaders(tblHeaders);
  if ($$props.tblRows === void 0 && $$bindings.tblRows && tblRows !== void 0)
    $$bindings.tblRows(tblRows);
  if ($$props.tblPnts === void 0 && $$bindings.tblPnts && tblPnts !== void 0)
    $$bindings.tblPnts(tblPnts);
  return `<section${add_attribute("aria-label", tblAria, 0)} class="w-full px-4"><table class="table-auto w-full text-center"><thead class="content-table"><tr>${each(tblHeaders, (header) => {
    return `<th class="content-table-border border-2 px-4 py-2">${escape(header)}</th>`;
  })}</tr></thead> <tbody>${each(tblRows, (row) => {
    return `<tr>${each(row, (cell) => {
      return `<td class="content-table-border border-2 px-4 py-2">${escape(cell)}</td>`;
    })} </tr>`;
  })}</tbody></table></section> <ul class="m-4 list-disc list-inside space-y-1">${each(tblPnts, (tblePnt) => {
    return `<li class="">${escape(tblePnt)}</li>`;
  })}</ul>`;
});
export {
  ContentTable as C
};
