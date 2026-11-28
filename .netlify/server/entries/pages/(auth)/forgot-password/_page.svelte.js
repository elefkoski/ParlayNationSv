import { c as create_ssr_component, a as subscribe, d as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { E as EmptyLayout } from "../../../../chunks/EmptyLayout.js";
import { getAuth } from "firebase/auth";
import { w as writable } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errorMessage, $$unsubscribe_errorMessage;
  getAuth();
  const errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  let email = "";
  $$unsubscribe_errorMessage();
  return `${$$result.head += `<!-- HEAD_svelte-52jzi4_START -->${$$result.title = `<title>Forgot Password | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical" href="http://parlaynation.com/forgot-password"><meta name="description" content="Forgot your password? Enter your email and Parlay Nation will send you a link to reset your password and get back to learning craps."><meta property="og:url" content="http://parlaynation.com/forgot-password"><meta property="og:title" content="Forgot Password | Parlay Nation - How to Play Craps"><meta property="og:description" content="Forgot your password? Enter your email and Parlay Nation will send you a link to reset your password and get back to learning craps."><meta property="og:image"${add_attribute("content", "images/forgot-password/forgot-password-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/forgot-password/forgot-password-header.jpg", 0)}><!-- HEAD_svelte-52jzi4_END -->`, ""} ${validate_component(EmptyLayout, "EmptyLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center lg:px-8 min-h-full px-6 py-12"><div class="sm:max-w-sm sm:mx-auto sm:w-full" data-svelte-h="svelte-xc90xs"><img alt="Parlay Nation" class="h-20 mb-8 mx-auto w-auto" src="/images/assets/parlay-nation-logo_1048x298.webp"> <h2 class="dark:text-gray-100 font-bold leading-9 pb-4 text-2xl text-center text-gray-900 tracking-tight">Reset Your Password</h2> <p>Enter your email and you&#39;ll be sent a link to reset your password.</p></div> <div class="mt-10 sm:max-w-sm sm:mx-auto sm:w-full"><form action="" class="space-y-6" method="POST"><div><label class="block dark:text-gray-300 font-medium leading-6 text-gray-900 text-sm" for="email" data-svelte-h="svelte-1906dly">Email</label> <div class="mt-2"><input autocomplete="email" class="block border-0 dark:bg-gray-700 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:ring-gray-600 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 focus:ring-inset pl-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" id="email" name="email" required type="email"${add_attribute("value", email, 0)}></div></div> <div data-svelte-h="svelte-1ojl0h1"><button class="bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-gray-200 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold hover:bg-indigo-500 justify-center leading-6 px-3 py-1.5 rounded-md shadow-sm text-sm text-white w-full" data-track="sign_in" type="submit">RESET PASSWORD</button></div></form> ${$errorMessage ? `<div class="error-message mt-6 text-red-500">${escape($errorMessage)}</div>` : ``} <div class="mt-8 text-center text-sm" data-svelte-h="svelte-12aqnpj"><a href="login" class="cursor-pointer dark:hover:text-indigo-300 dark:text-indigo-400 font-semibold hover:text-indigo-500 leading-6 text-indigo-600" data-track="back-to-login" tabindex="0" role="button">Back to Sign In</a></div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
