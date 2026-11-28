import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "Terms of Service";
let description = "Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.";
let url = "terms-of-service";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-oaeowq_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-ge0qvj">{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Terms of Service",
			"description": "Read Parlay Nation's Terms and Conditions to understand user responsibilities, content policies, age requirements, and more. Stay informed while using our services.",
			"url": "http://parlaynation.com/terms-of-service",
			"mainEntity": {
				"@type": "FAQPage",
				"mainEntity": [
					{
						"@type": "Question",
						"name": "Introduction",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "We will refer to Parlay Nation as 'Website,' while the terms 'our,' 'us,' and 'we' represent Parlay Nation. The term 'you' refers to any individual registered or visiting this Website."
						}
					},
					{
						"@type": "Question",
						"name": "Newsletter Subscription",
						"acceptedAnswer": {
							"@type": "Answer",
							"text": "Upon newsletter subscription, you agree to the following: You are 18 years of age or older. You accept our Privacy Policy. Note: We may email you weekly with promotions and news."
						}
					}
				]
			}
		}<\/script><!-- HEAD_svelte-oaeowq_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="container mx-auto p-6" data-svelte-h="svelte-16drn67"><div class="transition duration-300 ease-in-out"><div class="container mx-auto p-6"><h1 class="text-4xl font-bold mb-10 text-center">Terms of Service</h1> <h2 class="text-2xl font-semibold mb-4">Introduction</h2> <p class="mb-4">We will refer to Parlay Nation as &quot;Website,&quot; while the terms &quot;our,&quot; &quot;us,&quot; and &quot;we&quot;
					represent Parlay Nation. The term &quot;you&quot; refers to any individual registered or visiting
					this Website.</p> <h2 class="text-2xl font-semibold mb-4">Newsletter Subscription</h2> <p class="mb-2">Upon newsletter subscription, you agree to the following:</p> <ul class="list-disc list-inside mb-4"><li>You are 18 years of age or older.</li> <li>You accept our <a data-track="tos-privacy-policy-link" href="privacy-policy" class="underline hyperlink">Privacy Policy.</a></li></ul> <p class="mb-4">Note: We may email you weekly with promotions and news.</p></div></div></main>`;
    }
  })}`;
});
export {
  Page as default
};
