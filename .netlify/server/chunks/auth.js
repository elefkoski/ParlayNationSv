import "firebase/auth";
import { d as derived, w as writable } from "./index.js";
import { p as playerBets } from "./userDataOperations.js";
import { g as get_store_value } from "./ssr.js";
console.log("Entering simulator-calculations.ts");
const railTotal = writable(1026);
const layoutTotal = derived(
  playerBets,
  ($playerBets) => $playerBets.reduce((total, bet) => total + bet.amount, 0)
);
const currentBankroll = derived(
  [railTotal, layoutTotal],
  ([$railTotal, $layoutTotal]) => $railTotal + $layoutTotal
);
const variableOddsOption = writable(345);
const variableGameLimit = writable(true);
const fixedGameLimit = writable(5);
const vigUpFront = writable(true);
derived(
  variableGameLimit,
  ($variableGameLimit, set) => {
    if ($variableGameLimit) {
      const currentHour = (/* @__PURE__ */ new Date()).getHours();
      let limit = 5;
      if (currentHour >= 2 && currentHour < 11) {
        limit = 5;
      } else if (currentHour >= 11 && currentHour < 18) {
        limit = 10;
      } else if (currentHour >= 18 && currentHour < 22) {
        limit = 15;
      } else {
        limit = 25;
      }
      set(limit);
    } else {
      fixedGameLimit.subscribe((value) => set(value));
    }
  },
  10
  // default value
);
derived(
  variableOddsOption,
  ($variableOddsOption) => $variableOddsOption
);
derived(vigUpFront, ($vigUpFront) => $vigUpFront);
console.log("Exiting simulator-calculations.ts");
console.log("Entering craps-simulator-bank.ts");
const chips = {
  1: writable([]),
  // $1 chips
  5: writable([]),
  // $5 chips
  25: writable([]),
  // $25 chips
  100: writable([]),
  // $100 chips
  500: writable([]),
  // $500 chips
  1e3: writable([]),
  // $1000 chips
  5e3: writable([])
  // $5000 chips
};
const optimumAddRanges = [
  {
    min: 0,
    max: 124,
    dollars: 10,
    nickels: 20,
    quarters: 4,
    hundreds: 2,
    fiveHundreds: 2,
    thousands: 0,
    fiveThousands: 0
  },
  {
    min: 125,
    max: 299,
    dollars: 10,
    nickels: 20,
    quarters: 6,
    hundreds: 2,
    fiveHundreds: 2,
    thousands: 0,
    fiveThousands: 0
  },
  {
    min: 300,
    max: 699,
    dollars: 10,
    nickels: 20,
    quarters: 16,
    hundreds: 0,
    fiveHundreds: 0,
    thousands: 0,
    fiveThousands: 0
  },
  {
    min: 700,
    max: 999,
    dollars: 10,
    nickels: 20,
    quarters: 16,
    hundreds: 4,
    fiveHundreds: 0,
    thousands: 0,
    fiveThousands: 0
  },
  {
    min: 1e3,
    max: 5999,
    dollars: 5,
    nickels: 15,
    quarters: 15,
    hundreds: 15,
    fiveHundreds: 10,
    thousands: 0,
    fiveThousands: 0
  },
  {
    min: 6e3,
    max: 9999,
    dollars: 5,
    nickels: 10,
    quarters: 10,
    hundreds: 10,
    fiveHundreds: 4,
    thousands: 5,
    fiveThousands: 0
  },
  {
    min: 1e4,
    max: 24999,
    dollars: 5,
    nickels: 5,
    quarters: 8,
    hundreds: 10,
    fiveHundreds: 10,
    thousands: 15,
    fiveThousands: 2
  },
  {
    min: 25e3,
    max: 49999,
    dollars: 5,
    nickels: 10,
    quarters: 8,
    hundreds: 10,
    fiveHundreds: 10,
    thousands: 20,
    fiveThousands: 2
  },
  {
    min: 5e4,
    max: 999999,
    dollars: 5,
    nickels: 10,
    quarters: 8,
    hundreds: 10,
    fiveHundreds: 15,
    thousands: 20,
    fiveThousands: 50
  }
];
async function placeChipsInRail(amount) {
  console.log("placeChipsInRail called with amount:", amount);
  const range = getOptimumAddRange();
  if (!range)
    return;
  let remainingAmount = amount;
  let deficitValues = calculateChipValues(range, chips, true);
  deficitValues = sortChipValues(deficitValues, [5, 25, 1, 100, 500, 1e3, 5e3]);
  remainingAmount = applyChipOperation(deficitValues, remainingAmount, "add");
  const optimalOrder = [5e3, 1e3, 500, 100, 25, 5, 1];
  let optimalValues = optimalOrder.map((denom) => ({ denom, count: Infinity }));
  remainingAmount = applyChipOperation(optimalValues, remainingAmount, "add");
}
function getOptimumAddRange() {
  let theCurrentBankroll = get_store_value(currentBankroll);
  return optimumAddRanges.find(
    (range) => theCurrentBankroll >= range.min && theCurrentBankroll <= range.max
  );
}
function calculateChipValues(range, currentChips, isDeficit) {
  const chipValues = [
    { denom: 1, count: (range.dollars ?? 0) - get_store_value(currentChips[1]).length },
    { denom: 5, count: (range.nickels ?? 0) - get_store_value(currentChips[5]).length },
    { denom: 25, count: (range.quarters ?? 0) - get_store_value(currentChips[25]).length },
    { denom: 100, count: (range.hundreds ?? 0) - get_store_value(currentChips[100]).length },
    { denom: 500, count: (range.fiveHundreds ?? 0) - get_store_value(currentChips[500]).length },
    { denom: 1e3, count: (range.thousands ?? 0) - get_store_value(currentChips[1e3]).length },
    { denom: 5e3, count: (range.fiveThousands ?? 0) - get_store_value(currentChips[5e3]).length }
  ];
  return chipValues.map(({ denom, count }) => ({
    denom,
    count: isDeficit ? Math.max(count, 0) : Math.max(-count, 0)
  }));
}
function sortChipValues(values, customOrder, ascending = true) {
  return values.sort((a, b) => {
    const indexA = customOrder.indexOf(a.denom);
    const indexB = customOrder.indexOf(b.denom);
    return ascending ? indexA - indexB : indexB - indexA;
  });
}
function applyChipOperation(values, remainingAmount, operation) {
  for (let { denom, count } of values) {
    if (remainingAmount <= 0 || count <= 0)
      continue;
    const chipsToOperate = Math.min(Math.floor(remainingAmount / denom), count);
    if (operation === "add") {
      addChips(denom, chipsToOperate);
    } else {
      removeChips(denom, chipsToOperate);
    }
    remainingAmount -= chipsToOperate * denom;
  }
  return remainingAmount;
}
function displayChipCounts() {
  const chipCounts = Object.entries(chips).map(([denomination, store]) => {
    const count = get_store_value(store).length;
    const totalValue2 = count * Number(denomination);
    return { denomination: Number(denomination), count, totalValue: totalValue2 };
  });
  const totalChipCount = chipCounts.reduce((acc, { count }) => acc + count, 0);
  console.log(`Total number of chips: ${totalChipCount}`);
  const totalValue = chipCounts.reduce((acc, { totalValue: totalValue2 }) => acc + totalValue2, 0);
  console.log(`Total Value of all chips: $${totalValue}`);
}
function getRandomChip(denomination) {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  return `/images/craps-simulator/chips/${denomination}_chip_${randomNumber}.jpg`;
}
function addChips(denomination, count) {
  chips[denomination].update((current) => {
    const newChips = [...current];
    for (let i = 0; i < count; i++) {
      newChips.push(getRandomChip(denomination));
    }
    return newChips;
  });
}
function removeChips(denomination, count) {
  console.log(`removeChips called with denomination: ${denomination}, count: ${count}`);
  chips[denomination].update((current) => {
    const newChips = [...current];
    for (let i = 0; i < count; i++) {
      newChips.pop();
    }
    console.log(`New chips array for denomination ${denomination}:`, newChips);
    return newChips;
  });
  console.log(`Removed ${count} chips of denomination ${denomination}`);
}
placeChipsInRail(get_store_value(railTotal));
displayChipCounts();
console.log("Rail Total: ", get_store_value(railTotal));
console.log("Layout Total: ", get_store_value(layoutTotal));
console.log("Total Bankroll: ", get_store_value(currentBankroll));
console.log("Exiting craps-simulator-bank.ts");
console.log("Entering craps-simulator-layout.ts");
async function scaleElement(type = null) {
  console.log("Entering scaleElement");
  await new Promise((resolve) => setTimeout(resolve, 100));
  const gameArea = document.getElementById("game-area");
  if (!gameArea) {
    console.log("scaleElement: gameArea not found");
    return;
  }
  const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();
  console.log("Container dimensions:", { containerWidth, containerHeight });
  const selector = type ? `.game-element[data-type="${type}"]` : ".game-element";
  console.log("Selector:", selector);
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const x = parseFloat(el.dataset.x ?? "") || null;
    const y = parseFloat(el.dataset.y ?? "") || null;
    const fontSize = parseFloat(el.dataset.fontsize ?? "") || null;
    const height = parseFloat(el.dataset.height ?? "") || null;
    const width = parseFloat(el.dataset.width ?? "") || null;
    const paddingLR = parseFloat(el.dataset.paddinglr ?? "") || null;
    const paddingTB = parseFloat(el.dataset.paddingtb ?? "") || null;
    const marginLR = parseFloat(el.dataset.marginlr ?? "") || null;
    const marginTB = parseFloat(el.dataset.margintb ?? "") || null;
    const border = parseFloat(el.dataset.border ?? "") || null;
    const borderRadius = parseFloat(el.dataset.borderradius ?? "") || null;
    const rowGap = parseFloat(el.dataset.rowgap ?? "") || null;
    const gap = parseFloat(el.dataset.gap ?? "") || null;
    if (x !== null) {
      el.style.left = `${x / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("left");
    }
    if (y !== null) {
      el.style.top = `${y / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("top");
    }
    if (fontSize !== null) {
      el.style.fontSize = `${fontSize / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("fontSize");
    }
    if (height !== null) {
      el.style.height = `${height / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("height");
    }
    if (width !== null) {
      el.style.width = `${width / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("width");
    }
    if (paddingLR !== null) {
      el.style.paddingLeft = el.style.paddingRight = `${paddingLR / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("paddingLeft");
      el.style.removeProperty("paddingRight");
    }
    if (paddingTB !== null) {
      el.style.paddingTop = el.style.paddingBottom = `${paddingTB / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("paddingTop");
      el.style.removeProperty("paddingBottom");
    }
    if (marginLR !== null) {
      el.style.marginLeft = el.style.marginRight = `${marginLR / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("marginLeft");
      el.style.removeProperty("marginRight");
    }
    if (marginTB !== null) {
      el.style.marginTop = el.style.marginBottom = `${marginTB / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("marginTop");
      el.style.removeProperty("marginBottom	");
    }
    if (border !== null) {
      el.style.borderWidth = `${border / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("borderWidth");
    }
    if (borderRadius !== null) {
      el.style.borderRadius = `${borderRadius / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("borderRadius");
    }
    if (gap !== null) {
      el.style.gap = `${gap / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("gap");
    }
    if (rowGap !== null) {
      el.style.rowGap = `${rowGap / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("rowGap");
    }
    el.classList.remove("hidden");
    const childElements = el.querySelectorAll(".hidden");
    childElements.forEach((child) => child.classList.remove("hidden"));
    console.log(`Scaling element:`, {
      name: el,
      left: el.style.left,
      top: el.style.top,
      width: el.style.width,
      height: el.style.height
    });
  });
  console.log("Leaving scaleElement");
}
async function scalePopup(type = null) {
  console.log("Entering scalePopup");
  await new Promise((resolve) => setTimeout(resolve, 100));
  const gameArea = document.getElementById("game-area");
  if (!gameArea) {
    console.log("scalePopup: gameArea not found");
    return;
  }
  const { width: containerWidth, height: containerHeight } = gameArea.getBoundingClientRect();
  const selector = type ? `[data-type="${type}"]` : ".popup";
  console.log("Selector:", selector);
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.classList.remove("hidden");
  });
  elements.forEach((el) => {
    const x = parseFloat(el.dataset.x ?? "") || null;
    const y = parseFloat(el.dataset.y ?? "") || null;
    const fontSize = parseFloat(el.dataset.fontsize ?? "") || null;
    const height = parseFloat(el.dataset.height ?? "") || null;
    const width = parseFloat(el.dataset.width ?? "") || null;
    const paddingLR = parseFloat(el.dataset.paddinglr ?? "") || null;
    const paddingTB = parseFloat(el.dataset.paddingtb ?? "") || null;
    const marginLR = parseFloat(el.dataset.marginlr ?? "") || null;
    const marginTB = parseFloat(el.dataset.margintb ?? "") || null;
    const border = parseFloat(el.dataset.border ?? "") || null;
    const borderRadius = parseFloat(el.dataset.borderradius ?? "") || null;
    const rowGap = parseFloat(el.dataset.rowgap ?? "") || null;
    const gap = parseFloat(el.dataset.gap ?? "") || null;
    if (x !== null) {
      el.style.left = `${x / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("left");
    }
    if (y !== null) {
      el.style.top = `${y / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("top");
    }
    if (fontSize !== null) {
      el.style.fontSize = `${fontSize / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("fontSize");
    }
    if (height !== null) {
      el.style.height = `${height / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("height");
    }
    if (width !== null) {
      el.style.width = `${width / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("width");
    }
    if (paddingLR !== null) {
      el.style.paddingLeft = el.style.paddingRight = `${paddingLR / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("paddingLeft");
      el.style.removeProperty("paddingRight");
    }
    if (paddingTB !== null) {
      el.style.paddingTop = el.style.paddingBottom = `${paddingTB / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("paddingTop");
      el.style.removeProperty("paddingBottom");
    }
    if (marginLR !== null) {
      el.style.marginLeft = el.style.marginRight = `${marginLR / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("marginLeft");
      el.style.removeProperty("marginRight");
    }
    if (marginTB !== null) {
      el.style.marginTop = el.style.marginBottom = `${marginTB / 100 * containerHeight}px`;
    } else {
      el.style.removeProperty("marginTop");
      el.style.removeProperty("marginBottom	");
    }
    if (border !== null) {
      el.style.borderWidth = `${border / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("borderWidth");
    }
    if (borderRadius !== null) {
      el.style.borderRadius = `${borderRadius / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("borderRadius");
    }
    if (gap !== null) {
      el.style.gap = `${gap / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("gap");
    }
    if (rowGap !== null) {
      el.style.rowGap = `${rowGap / 100 * containerWidth}px`;
    } else {
      el.style.removeProperty("rowGap");
    }
    el.classList.add("scaled");
  });
  const stickCallElement = document.querySelector(".stick-call");
  if (stickCallElement) {
    stickCallElement.classList.remove("hidden");
  }
  console.log(`Total number of elements scaled: ${elements.length}`);
  console.log("Leaving scalePopup");
}
async function scaleChipsToFit() {
  console.log("Entering scaleChipsToFit");
  await new Promise((resolve) => setTimeout(resolve, 100));
  const chipArea = document.querySelector(".chip-area");
  if (!chipArea) {
    console.log("scaleChipsToFit: .chip-area not found");
    return;
  }
  const renderedWidth = chipArea.getBoundingClientRect().width;
  console.log("Rendered width:", renderedWidth);
  const numberOfChips = 70;
  const chipWidth = renderedWidth / numberOfChips;
  console.log("chipWidth: ", chipWidth);
  const chips2 = chipArea.querySelectorAll(".chip-image");
  chips2.forEach((chip) => {
    chip.style.width = `${chipWidth}px`;
    chip.classList.remove("hidden");
  });
  console.log("Leaving scaleChipsToFit");
}
if (typeof window !== "undefined") {
  const handleResizeOrOrientationChange = () => {
    console.log("Entering handleResizeOrOrientationChange");
    console.log("Window resized or device orientation changed");
    scaleElement();
    scaleChipsToFit();
    scalePopup();
    console.log("Leaving handleResizeOrOrientationChange");
  };
  window.addEventListener("resize", handleResizeOrOrientationChange);
  window.addEventListener("orientationchange", handleResizeOrOrientationChange);
  window.addEventListener("fullscreenchange", handleResizeOrOrientationChange);
}
console.log("Exiting craps-simulator-layout.ts");
console.log("Entering auth.ts");
const isInitializing = writable(false);
const isLoggingOut = writable(false);
const isLoggingIn = writable(false);
const isLoadingGuestData = writable(false);
derived(
  [isInitializing, isLoggingOut, isLoggingIn, isLoadingGuestData],
  ([$isInitializing, $isLoggingOut, $isLoggingIn, $isLoadingGuestData]) => !$isInitializing && !$isLoggingOut && !$isLoggingIn && !$isLoadingGuestData
);
console.log("Exiting auth.ts");
export {
  isInitializing as i
};
