import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogLayout } from "../../../chunks/BlogLayout.js";
import { P as PageMenuBox } from "../../../chunks/Structure-Remaining.js";
import { B as BlogH1, a as Blog_img, b as BlogH2 } from "../../../chunks/Blog-img.js";
import { B as BlogH3 } from "../../../chunks/BlogH3.js";
import { D as Divider } from "../../../chunks/Divider.js";
import { L as Link } from "../../../chunks/Link.js";
let title = "The Title";
let description = "The's description";
let url = "the-page-url";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData = {
    title,
    description,
    pageUrl: url,
    imageUrl: "src/images/" + url + "/" + url + "-header.webp"
  };
  let pageLinks = [
    {
      title: "LinkTitle1",
      href: "#linkRef1",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "LinkTitle2",
      href: "#linkRef2",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "LinkTitle3",
      href: "#linkRef3",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "LinkTitle4",
      href: "#linkRef4",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "LinkTitle5",
      href: "#linkRef5",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    },
    {
      title: "LinkTitle6",
      href: "#linkRef6",
      iconD: ["M0 0h24v24H0V0z", "M10 17l5-5-5-5v10z"],
      iconFills: ["none", "orange"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-uagtxg_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.webp", 0)}><script type="application/ld+json" data-svelte-h="svelte-vl39vx">///Schema needs to be added<\/script><!-- HEAD_svelte-uagtxg_END -->`, ""} ${validate_component(BlogLayout, "BlogLayout").$$render($$result, { pageLinks }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="flex flex-col my-6">${validate_component(BlogH1, "BlogHeaderOne").$$render(
        $$result,
        {
          sectionTitle: "sectionTitle",
          title: "pageTitle's",
          pageData
        },
        {},
        {}
      )} <section aria-label="Opening paragraphs" data-svelte-h="svelte-711qc0"><p class="pb-4">OpenOne</p> <p class="pb-4">OpenTwo</p></section> ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "image",
          title: "ImageTitle",
          alt: "ImageAlt"
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "image",
          title: "ImageTitle",
          alt: "ImageAlt"
        },
        {},
        {}
      )} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(Blog_img, "BlogImg").$$render(
        $$result,
        {
          caption: "",
          url,
          img: "image",
          title: "ImageTitle",
          alt: "ImageAlt"
        },
        {},
        {}
      )} <div class="lg:hidden">${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <div class="m-auto md:max-w-md">${validate_component(PageMenuBox, "ContentMenuBox").$$render($$result, { pageLinks }, {}, {})}</div></div> ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef1", title: "LinkTitle1" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol data-svelte-h="svelte-zxplga"><li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li></ol>`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef2", title: "LinkTitle2" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol data-svelte-h="svelte-zxplga"><li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li></ol>`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef3", title: "LinkTitle3" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol data-svelte-h="svelte-zxplga"><li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li></ol>`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef4", title: "LinkTitle4" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol data-svelte-h="svelte-zxplga"><li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li></ol>`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef5", title: "LinkTitle5" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol data-svelte-h="svelte-zxplga"><li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li> <li><span>W</span>Para</li></ol>`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} ${validate_component(BlogH2, "BlogH2").$$render($$result, { id: "linkRef6", title: "LinkTitle6" }, {}, {
        default: () => {
          return `<p class="pb-4" data-svelte-h="svelte-1uanz1">para1</p> <ol><li data-svelte-h="svelte-129952a"><span>W</span>Para</li> <li data-svelte-h="svelte-129952a"><span>W</span>Para</li> <li data-svelte-h="svelte-129952a"><span>W</span>Para</li> <li data-svelte-h="svelte-129952a"><span>W</span>Para</li> <li><span data-svelte-h="svelte-5gv2t1">W</span>${validate_component(Link, "Link").$$render($$result, { text: "Para", href: "/" }, {}, {})}</li></ol> ${validate_component(BlogH3, "BlogH3").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})} <section aria-label="Closing paragraphs" data-svelte-h="svelte-19i9fu"><p class="pb-4">closing1</p> <p>closing2</p></section></main>`;
    }
  })}`;
});
export {
  Page as default
};
