import { w as writable } from "./index.js";
console.log("Entering theme.ts");
const theme = writable(getInitialTheme());
function getInitialTheme() {
  return "light";
}
console.log("Exiting theme.ts");
export {
  theme as t
};
