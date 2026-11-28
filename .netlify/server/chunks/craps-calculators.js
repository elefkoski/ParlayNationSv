import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const CalcBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "The Title" } = $$props;
  let { description = "Here is your description" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<section${add_attribute("aria-label", title, 0)} class="home-page-body-bg-2 p-6 rounded-lg shadow-lg"><h2 class="text-2xl font-bold calculator-title mb-2">${escape(title)}</h2> <p class="mb-4 leading-7">${escape(description)}</p> <div class="flex-col space-y-4">${slots.default ? slots.default({}) : ``}</div></section>`;
});
console.log("Entering calculations.ts");
let { errorColor, successColor } = updateColors();
function updateColors() {
  if (typeof window === "undefined") {
    return { errorColor: "", successColor: "" };
  }
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const isDarkMode = currentTheme === "dark";
  const errorColor2 = isDarkMode ? "var(--dm-calculator-error-text)" : "var(--calculator-error-text)";
  const successColor2 = isDarkMode ? "var(--dm-calculator-success-text)" : "var(--calculator-success-text)";
  return { errorColor: errorColor2, successColor: successColor2 };
}
function validateGeneralInput(input, pId) {
  if (input == null || isNaN(input) || input <= 0 || typeof input !== "number" || input % 1 !== 0) {
    setMessage(pId, "Choose a whole number above zero.", true);
    return false;
  }
  return true;
}
function validateAmount(amt, pId, conditions) {
  for (const { condition, message } of conditions) {
    if (condition(amt)) {
      setMessage(pId, message, true);
      return false;
    }
  }
  return true;
}
function commonValidation(amt, pId, conditions) {
  if (!validateGeneralInput(amt, pId))
    return false;
  if (!validateAmount(amt, pId, conditions))
    return false;
  return true;
}
function setMessage(pId, message, isError = false) {
  const pElement = document.getElementById(pId);
  if (pElement) {
    pElement.innerText = message;
    pElement.style.color = isError ? errorColor : successColor;
    pElement.style.marginTop = "8px";
  }
}
function numCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
function calculatePassLine(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Pass Line is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Pass Line is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "The Pass Line wins even money. A $" + numCommas(amt) + " Pass Line bet wins $" + numCommas(amt) + "."
  );
}
function calculateSixEightOdds(amt, pId) {
  const totalUnits = Math.floor(amt / 5);
  const correctBetPymnt = totalUnits * 6;
  const sixEightPymnt = correctBetPymnt + amt % 5;
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum Pass Line Odds on the 6 & 8 are $5." },
    {
      condition: (amt2) => amt2 > 25e3,
      message: "Maximum Pass Line Odds on the 6 & 8 are $25,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "Odds on the 6 & 8 should be made in multiples of 5. Anything above a multiple of 5 will get paid even money. This bet will pay $" + numCommas(sixEightPymnt) + "."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Odds on the 6 or 8 win $" + numCommas(sixEightPymnt) + "."
  );
}
function calculateFiveNineOdds(amt, pId) {
  const fiveNinePymnt = Math.floor(amt / 2 * 3);
  const conditions = [
    { condition: (amt2) => amt2 < 2, message: "Minimum Pass Line Odds on the 5 & 9 are $2." },
    {
      condition: (amt2) => amt2 > 2e4,
      message: "Maximum Pass Line Odds on the 5 & 9 are $20,000."
    },
    {
      condition: (amt2) => amt2 % 2 != 0,
      message: "Odds on the 5 & 9 should be even. You lose $0.50 when you bet uneven Odds. This bet will pay $" + numCommas(fiveNinePymnt) + "."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Odds on the 5 or 9 win $" + numCommas(fiveNinePymnt) + "."
  );
}
function calculateFourTenOdds(amt, pId) {
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum Pass Line Odds on the 4 & 10 are $1."
    },
    {
      condition: (amt2) => amt2 > 15e3,
      message: "Maximum Pass Line Odds on the 4 & 10 are $15,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "$" + numCommas(amt) + " Odds on the 4 or 10 win $" + numCommas(amt * 2) + ".");
}
function calculateMaxOdds(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Pass Line is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Pass Line is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "The total payout for a $" + numCommas(amt) + " Pass Line with Max Odds is $" + numCommas(amt * 7) + ". The total payment for a Pass Line with Max Odds will always be 7x the Pass Line Bet."
  );
}
function calculatePlaceSixEight(amt, pId) {
  const totalUnits = Math.floor(amt / 6);
  const sixEightPymnt = totalUnits * 7;
  const conditions = [
    { condition: (amt2) => amt2 < 6, message: "Minimum Place bet on the 6 & 8 is $6." },
    {
      condition: (amt2) => amt2 > 6e3,
      message: "Max Place bet on the 6 & 8 is $6,000."
    },
    {
      condition: (amt2) => amt2 % 6 != 0,
      message: "You must make Place bets on the 6 & 8 in increments of $6."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Place bet on the 6 or 8 wins $" + numCommas(sixEightPymnt) + "."
  );
}
function calculatePlaceFiveNine(amt, pId) {
  const totalUnits = Math.floor(amt / 5);
  const fiveNinePymnt = totalUnits * 7;
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum Place bet on the 5 & 9 is $5." },
    {
      condition: (amt2) => amt2 > 5e3,
      message: "Max Place bet on the 5 & 9 is $5,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "You must make Place bets on the 5 & 9 in increments of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Place bet on the 5 or 9 wins $" + numCommas(fiveNinePymnt) + "."
  );
}
function calculatePlaceFourTen(amt, pId) {
  const totalUnits = Math.floor(amt / 5);
  const fourTenPymnt = totalUnits * 9;
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum Place bet on the 4 & 10 is $5." },
    {
      condition: (amt2) => amt2 > 5e3,
      message: "Max Place bet on the 4 & 10 is $5,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "You must make Place bets on the 4 & 10 in increments of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Place bet on the 4 or 10 wins $" + numCommas(fourTenPymnt) + "."
  );
}
function calculateBuyFourTen(amt, pId) {
  const fourTenPymnt = amt * 2;
  const vig = Math.floor(amt / 20);
  const totalBuyCost = amt + vig;
  const conditions = [
    { condition: (amt2) => amt2 < 20, message: "Table minimum to Buy the 4 or 10 is $20." },
    { condition: (amt2) => amt2 > 5e3, message: "Max Buy on the 4 or 10 is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Buy on the 4 or 10 costs $" + numCommas(totalBuyCost) + ". It pays $" + numCommas(fourTenPymnt) + " and requres another $" + vig + " to Buy it again after it wins."
  );
}
function calculateHardSixEight(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the Hard 6 & 8 is $1." },
    { condition: (amt2) => amt2 > 4e3, message: "Max bet on the Hard 6 & 8 is $4,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "A $" + numCommas(amt) + " Hard 6 or 8 wins $" + numCommas(amt * 9) + ".");
}
function calculateHardFourTen(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the Hard 4 & 10 is $1." },
    { condition: (amt2) => amt2 > 5e3, message: "Max bet on the Hard 4 & 10 is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "A $" + numCommas(amt) + " Hard 4 or 10 wins $" + numCommas(amt * 7) + ".");
}
function calculateAceDeuceYo(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the low side is $1." },
    { condition: (amt2) => amt2 > 2e3, message: "Max bet on the low side is $2,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " bet on the Ace Deuce or Yo wins $" + numCommas(amt * 15) + "."
  );
}
function calculateAcesTwelve(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the high side is $1." },
    { condition: (amt2) => amt2 > 1e3, message: "Max bet on the high side is $1,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " bet on the Aces or Twelve wins $" + numCommas(amt * 30) + "."
  );
}
function calculateCAndESplit(amt, roll, pId) {
  let message;
  const conditions = [
    { condition: (amt2) => amt2 < 2, message: "Minimum bet on the C & E split is $2." },
    { condition: (amt2) => amt2 > 4e3, message: "Max bet on the C & E split is $4,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 11) {
    message = "A $" + numCommas(amt) + " bet on the C & E split wins $" + numCommas(amt * 7) + " if the Yo rolls.";
  } else if (roll == 2 || roll == 3 || roll == 12) {
    message = "A $" + numCommas(amt) + " bet on the C & E split wins $" + numCommas(amt * 3) + " if any of the Craps roll (2, 3, 12).";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateCAndE(amt, amtTwo, roll, pId) {
  let message;
  if (!validateGeneralInput(amt, pId) && !validateGeneralInput(amtTwo, pId) || amt == null && amtTwo == null) {
    setMessage(pId, "Please enter a bet.", true);
    return;
  }
  if (amt != null && validateGeneralInput(amt, pId) && amtTwo == null) {
    if (amt < 1) {
      message = "The minimum bet on the Any Crap $1.";
      setMessage(pId, message, true);
      return;
    } else if (amt > 4e3) {
      message = "The maximum bet on the Any Crap is $4,000.";
      setMessage(pId, message, true);
      return;
    } else if (roll === 2 || roll === 3 || roll === 12)
      message = `Your $${amt} Any Crap (C) pays $${amt * 7} when any of the Craps (2, 3, 12) roll.`;
    else if (roll === 11)
      message = `Your $${amt} Any Crap lost.`;
    else {
      message = "Please pick what rolled.";
      setMessage(pId, message, true);
      return;
    }
    setMessage(pId, message);
    return;
  }
  if (amtTwo != null && validateGeneralInput(amtTwo, pId) && amt == null) {
    if (amtTwo < 1) {
      message = "The minimum bet on the Yo is $1.";
      setMessage(pId, message, true);
      return;
    } else if (amtTwo > 2e3) {
      message = "The maximum bet on the Yo is $2,000.";
      setMessage(pId, message, true);
      return;
    } else if (roll === 11)
      message = `Your $${amtTwo} Yo paid $${amtTwo * 15}.`;
    else if (roll === 2 || roll === 3 || roll === 12)
      message = `Your $${amtTwo} Yo lost.`;
    else {
      message = "Please pick what rolled.";
      setMessage(pId, message, true);
      return;
    }
    setMessage(pId, message);
    return;
  }
  if (validateGeneralInput(amt, pId) && validateGeneralInput(amtTwo, pId)) {
    let cAndETtlPymnt = 0;
    let losingDiff = 0;
    const elevenPymnt = amtTwo * 15;
    const crapPymnt = amt * 7;
    if (amt < 1) {
      message = "The minimum bet on the Any Crap $1.";
      setMessage(pId, message, true);
      return;
    } else if (amt > 5e3) {
      message = "The maximum bet on the Any Crap is $5,000.";
      setMessage(pId, message, true);
      return;
    } else if (amtTwo < 1) {
      message = "The minimum bet on the Yo is $1.";
      setMessage(pId, message, true);
      return;
    } else if (amtTwo > 2e3) {
      message = "The maximum bet on the Yo is $2,000.";
      setMessage(pId, message, true);
      return;
    } else if (roll == 11) {
      cAndETtlPymnt = elevenPymnt - amt;
      losingDiff = Math.abs(cAndETtlPymnt);
      if (cAndETtlPymnt < 0)
        message = `Your $${amtTwo} Yo won $${elevenPymnt}, which is not enough to cover your $${amt} Crap that lost. You need to throw in $${losingDiff} to keep this bet up to win again, or take the Crap down and collect your winnings.`;
      else if (cAndETtlPymnt == 0)
        message = "Your bet is a push. It is up to win again.";
      else
        message = `A $${amt}C - $${amtTwo}E wins $${cAndETtlPymnt} when the Yo rolls.`;
    } else {
      cAndETtlPymnt = crapPymnt - amtTwo;
      losingDiff = Math.abs(cAndETtlPymnt);
      if (cAndETtlPymnt < 0)
        message = `Your $${amt} Crap won $${crapPymnt}, which is not enough to cover your $${amtTwo} Yo that lost. You need to throw in $${losingDiff} to keep this bet up to win again, or take the Yo down and collect your winnings.`;
      else if (cAndETtlPymnt == 0)
        message = "Your bet is a push. It is up to win again.";
      else
        message = `A $${amt}C - $${amtTwo}E wins $${cAndETtlPymnt} when any of the Craps (2, 3, 12) roll.`;
    }
    setMessage(pId, message);
  }
}
function calculateAnySeven(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the Any Seven is $1." },
    { condition: (amt2) => amt2 > 7500, message: "Maximum bet on the Any Seven is $7,500." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "A $" + numCommas(amt) + " Any Seven wins $" + numCommas(amt * 4) + ".");
}
function calculateAnyCraps(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the Any Craps is $1." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Any Craps is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "A $" + numCommas(amt) + " Any Craps wins $" + numCommas(amt * 7) + ".");
}
function calculateSingleField(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "You must bet the table minimim of $5." },
    { condition: (amt2) => amt2 > 15e3, message: "Maximum bet on The Field is $15,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Field bet wins $" + numCommas(amt) + " (even money) when the 3, 4, 9, 10, or 11 rolls."
  );
}
function calculateDoubleField(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "You must bet the table minimim of $5." },
    { condition: (amt2) => amt2 > 15e3, message: "Maximum bet on The Field is $15,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Field bet wins $" + numCommas(amt * 2) + " (double) when the 2 or 12 rolls."
  );
}
function calculateHighLow(amt, pId) {
  const eachHighLowPymnt = amt * 30 - amt;
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on the High - Low is $1 each." },
    { condition: (amt2) => amt2 > 1e3, message: "Max bet on the High - Low is $1,000 each." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " each High - Low costs a total of $" + numCommas(amt * 2) + " and pays $" + numCommas(eachHighLowPymnt) + " when either one rolls."
  );
}
function calculateElevenTwelve(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Eleven - Twelve is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Eleven - Twelve is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 11) {
    message = "A $" + numCommas(amt) + " each Eleven - Twelve costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " each Eleven - Twelve costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 30 - amt) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateAcesAceDeuce(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Aces - Ace Deuce is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Aces - Ace Deuce is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " each Aces - Ace Deuce costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 30 - amt) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " each Aces - Ace Deuce costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Ace Deuce rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateSevenEleven(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Seven - Eleven is $1 each."
    },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Max bet on the Seven - Eleven is $2,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 7) {
    message = "A $" + numCommas(amt) + " each Seven - Eleven costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 4 - amt) + " if the Seven rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " each Seven - Eleven costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Eleven rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHighLowYo(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum each High - Low - Yo is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max each High - Low - Yo is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " each High - Low - Yo costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Aces roll.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " each High - Low - Yo costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " each High - Low - Yo costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateThreeWay(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum each Three Way Crap is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max each Three Way Crap is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " each Three Way Crap costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " each Three Way Crap costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Ace Deuce rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " each Three Way Crap costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHorn(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 4,
      message: "The minimum on the Horn is $4."
    },
    {
      condition: (amt2) => amt2 > 4e3,
      message: "Max bet on the Horn is $4000."
    },
    {
      condition: (amt2) => amt2 % 4 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $4."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " Horn wins $" + numCommas(amt / 4 * 27) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " Horn wins $" + numCommas(amt / 4 * 12) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " Horn wins $" + numCommas(amt / 4 * 12) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " Horn wins $" + numCommas(amt / 4 * 27) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHornHighAces(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 5,
      message: "The minimum for the Horn High Aces is $5."
    },
    {
      condition: (amt2) => amt2 > 2500,
      message: "Max bet on the Horn High Aces is $2,500."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " Horn High Aces wins $" + numCommas(amt / 5 * 57) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " Horn High Aces wins $" + numCommas(amt / 5 * 11) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " Horn High Aces wins $" + numCommas(amt / 5 * 11) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " Horn High Aces wins $" + numCommas(amt / 5 * 26) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHornHighAceDeuce(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 5,
      message: "The minimum for the Horn High Ace Deuce is $5."
    },
    {
      condition: (amt2) => amt2 > 5e3,
      message: "Max bet on the Horn High Ace Deuce is $5,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " Horn High Ace Deuce wins $" + numCommas(amt / 5 * 26) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " Horn High Ace Deuce wins $" + numCommas(amt / 5 * 27) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " Horn High Ace Deuce wins $" + numCommas(amt / 5 * 11) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " Horn High Ace Deuce wins $" + numCommas(amt / 5 * 26) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHornHighYo(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 5,
      message: "The minimum for the Horn High Yo is $5."
    },
    {
      condition: (amt2) => amt2 > 5e3,
      message: "Max bet on the Horn High Yo is $5,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " Horn High Yo wins $" + numCommas(amt / 5 * 26) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " Horn High Yo wins $" + numCommas(amt / 5 * 11) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " Horn High Yo wins $" + numCommas(amt / 5 * 27) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " Horn High Yo wins $" + numCommas(amt / 5 * 26) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHornHighTwelve(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 5,
      message: "The minimum for the Horn High Twelve is $5."
    },
    {
      condition: (amt2) => amt2 > 2500,
      message: "Max bet on the Horn High Twelve is $2,500."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " Horn High Twelve wins $" + numCommas(amt / 5 * 26) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " Horn High Twelve wins $" + numCommas(amt / 5 * 11) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " Horn High Twelve wins $" + numCommas(amt / 5 * 11) + " if the Yo rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " Horn High Twelve wins $" + numCommas(amt / 5 * 57) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateWorld(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 4,
      message: "The minimum on the World is $5."
    },
    {
      condition: (amt2) => amt2 > 4e3,
      message: "Max bet on the World is $5,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "This is an improper bet. Please make a bet in a multiple of $5."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == 2) {
    message = "A $" + numCommas(amt) + " World wins $" + numCommas(amt / 5 * 26) + " if the Aces roll.";
  } else if (roll == 3) {
    message = "A $" + numCommas(amt) + " World wins $" + numCommas(amt / 5 * 11) + " if the Ace Deuce rolls.";
  } else if (roll == 11) {
    message = "A $" + numCommas(amt) + " World wins $" + numCommas(amt / 5 * 11) + " if the Yo rolls.";
  } else if (roll == 7) {
    message = "A $" + numCommas(amt) + " World is a push when the Seven rolls.";
  } else if (roll == 12) {
    message = "A $" + numCommas(amt) + " World wins $" + numCommas(amt / 5 * 26) + " if the Twelve rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopLowSide(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Table minimum for a non-pair Hop bet is $1." },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Maximum bet for a non-pair Hop bet is $2,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " on any Hop bet that isn't a pair wins $" + numCommas(amt * 15) + "."
  );
}
function calculateHopHighSide(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Table minimum for a Hopping Hardway is $1." },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Maximum bet for a Hopping Hardway is $1,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " on any Hopping Hardway wins $" + numCommas(amt * 30) + "."
  );
}
function calculateHopFours(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 4's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Hop 4's is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "3-1") {
    message = "A $" + numCommas(amt) + " each Hop 4's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Easy 4 rolls.";
  } else if (roll == "2-2") {
    message = "A $" + numCommas(amt) + " each Hop 4's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 30 - amt) + " if the Hard 4 rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopFives(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 5's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Max bet on the Hop 5's is $2,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "3-2") {
    message = "A $" + numCommas(amt) + " each Hop 5's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Thirty-Two rolls.";
  } else if (roll == "4-1") {
    message = "A $" + numCommas(amt) + " each Hop 5's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Forty-One rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopNines(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 9's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Max bet on the Hop 9's is $2,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "5-4") {
    message = "A $" + numCommas(amt) + " each Hop 9's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Fifty-Four rolls.";
  } else if (roll == "6-3") {
    message = "A $" + numCommas(amt) + " each Hop 9's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Sixty-Three rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopTens(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 10's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Hop 10's is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "6-4") {
    message = "A $" + numCommas(amt) + " each Hop 10's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 15 - amt) + " if the Easy 10 rolls.";
  } else if (roll == "5-5") {
    message = "A $" + numCommas(amt) + " each Hop 10's costs a total of $" + numCommas(amt * 2) + ", and wins $" + numCommas(amt * 30 - amt) + " if the Hard 10 rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopSixes(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 6's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Hop 6's is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "5-1") {
    message = "A $" + numCommas(amt) + " each Hop 6's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Fifty-One rolls.";
  } else if (roll == "4-2") {
    message = "A $" + numCommas(amt) + " each Hop 6's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Forty-Two rolls.";
  } else if (roll == "3-3") {
    message = "A $" + numCommas(amt) + " each Hop 6's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Hard 6 rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopSevens(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 7's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 2e3,
      message: "Max bet on the Hop 7's is $2,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "6-1") {
    message = "A $" + numCommas(amt) + " each Hop 7's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Sixty-One rolls.";
  } else if (roll == "5-2") {
    message = "A $" + numCommas(amt) + " each Hop 7's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Fifty-Two rolls.";
  } else if (roll == "4-3") {
    message = "A $" + numCommas(amt) + " each Hop 7's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Forty-Three rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopEights(amt, roll, pId) {
  let message;
  const conditions = [
    {
      condition: (amt2) => amt2 < 1,
      message: "Minimum bet on the Hop 8's is $1 each."
    },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Max bet on the Hop 8's is $1,000 each."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  if (roll == "6-2") {
    message = "A $" + numCommas(amt) + " each Hop 8's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Sixty-Two rolls.";
  } else if (roll == "5-3") {
    message = "A $" + numCommas(amt) + " each Hop 8's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 15 - amt * 2) + " if the Fifty-Three rolls.";
  } else if (roll == "4-4") {
    message = "A $" + numCommas(amt) + " each Hop 8's costs a total of $" + numCommas(amt * 3) + ", and wins $" + numCommas(amt * 30 - amt * 2) + " if the Hard 8 rolls.";
  } else {
    message = "Please pick what rolled.";
    setMessage(pId, message, true);
    return;
  }
  setMessage(pId, message);
}
function calculateHopHardways(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum bet on a Hopping Hardway is $1." },
    {
      condition: (amt2) => amt2 > 1e3,
      message: "Maximum bet on a Hopping Hardway is $1,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " each Hopping Hardway costs a total of $" + numCommas(amt * 4) + ", and wins $" + numCommas(amt * 30 - amt * 3) + " if any of them roll."
  );
}
function calculateComeBet(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on a Come bet is $5." },
    {
      condition: (amt2) => amt2 > 5e3,
      message: "Maximum bet on a Come bet is $5,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Come bet wins $" + numCommas(amt) + ". Come bets always win even money."
  );
}
function calculateSixEightComeOdds(amt, pId) {
  const totalUnits = Math.floor(amt / 5);
  const correctBetPymnt = totalUnits * 6;
  const sixEightPymnt = correctBetPymnt + amt % 5;
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum Come Bet Odds on the 6 & 8 are $5." },
    {
      condition: (amt2) => amt2 > 25e3,
      message: "Maximum Come Bet Odds on the 6 & 8 are $25,000."
    },
    {
      condition: (amt2) => amt2 % 5 != 0,
      message: "Odds on the 6 & 8 should be made in multiples of 5. Anything above a multiple of 5 will get paid even money. This bet will pay $" + numCommas(sixEightPymnt) + "."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Odds on the 6 or 8 win $" + numCommas(sixEightPymnt) + "."
  );
}
function calculateFiveNineComeOdds(amt, pId) {
  const fiveNinePymnt = Math.floor(amt / 2 * 3);
  const conditions = [
    { condition: (amt2) => amt2 < 2, message: "Minimum Come Bet Odds on the 5 & 9 are $2." },
    {
      condition: (amt2) => amt2 > 2e4,
      message: "Maximum Come Bet Odds on the 5 & 9 are $20,000."
    },
    {
      condition: (amt2) => amt2 % 2 != 0,
      message: "Odds on the 5 & 9 should be even. You lose $0.50 when you bet uneven Odds. This bet will pay $" + numCommas(fiveNinePymnt) + "."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Odds on the 5 or 9 win $" + numCommas(fiveNinePymnt) + "."
  );
}
function calculateFourTenComeOdds(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 1, message: "Minimum Come Bet Odds on the 4 & 10 are 1." },
    {
      condition: (amt2) => amt2 > 15e3,
      message: "Maximum Come Bet Odds on the 4 & 10 are $15,000."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(pId, "$" + numCommas(amt) + " Odds on the 4 or 10 win $" + numCommas(amt * 2) + ".");
}
function calculateDontPass(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Don't Pass is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Don't Pass is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "The Don't Pass wins even money. A $" + numCommas(amt) + " Don't Pass bet wins $" + numCommas(amt) + "."
  );
}
function calculateSixEightLayOdds(amt, pId) {
  const sixEightLayOddsPymnt = amt / 6 * 5;
  const conditions = [
    {
      condition: (amt2) => amt2 < 6,
      message: "Minimum Lay Odds on the 6 & 8 are $6."
    },
    {
      condition: (amt2) => amt2 > 36e3,
      message: "Maximum Lay Odds on the 6 & 8 are $36,000."
    },
    {
      condition: (amt2) => amt2 % 6 != 0,
      message: "Lay Odds on the 6 & 8 need to be made in multiples of $6."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Lay Odds on the 6 or 8 win $" + numCommas(sixEightLayOddsPymnt) + "."
  );
}
function calculateFiveNineLayOdds(amt, pId) {
  const fiveNineLayOddsPymnt = amt / 3 * 2;
  const conditions = [
    { condition: (amt2) => amt2 < 3, message: "Minimum Lay Odds on the 5 & 9 are $3." },
    {
      condition: (amt2) => amt2 > 45e3,
      message: "Maximum Lay Odds on the 5 & 9 are $45,000."
    },
    {
      condition: (amt2) => amt2 % 3 != 0,
      message: "Lay Odds on the 5 & 9 need to be made in multiples of $3."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Lay Odds on the 5 or 9 win $" + numCommas(fiveNineLayOddsPymnt) + "."
  );
}
function calculateFourTenLayOdds(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 2, message: "Minimum Lay Odds on the 4 & 10 are $2." },
    {
      condition: (amt2) => amt2 > 6e4,
      message: "Maximum Lay Odds on the 4 & 10 are $60,000."
    },
    {
      condition: (amt2) => amt2 % 2 != 0,
      message: "Lay Odds on the 4 & 10 need to be even."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Lay Odds on the 4 or 10 win $" + numCommas(amt / 2) + "."
  );
}
function calculateMaxLay(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Don't Pass is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Don't Pass is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "Max Lay Odds for a Don't Pass bet with $" + numCommas(amt) + " is $" + numCommas(amt * 6) + "."
  );
}
function calculateDontCome(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Don't Come is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Don't Come is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "The Don't Come wins even money. A $" + numCommas(amt) + " Don't Come bet wins $" + numCommas(amt) + "."
  );
}
function calculateSixEightDcLayOdds(amt, pId) {
  const sixEightLayOddsPymnt = amt / 6 * 5;
  const conditions = [
    {
      condition: (amt2) => amt2 < 6,
      message: "Minimum Don't Come Lay Odds on the 6 & 8 are $6."
    },
    {
      condition: (amt2) => amt2 > 36e3,
      message: "Maximum Don't Come Lay Odds on the 6 & 8 are $36,000."
    },
    {
      condition: (amt2) => amt2 % 6 != 0,
      message: "Don't Come Lay Odds on the 6 & 8 need to be made in multiples of $6."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Don't Come Lay Odds on the 6 or 8 win $" + numCommas(sixEightLayOddsPymnt) + "."
  );
}
function calculateFiveNineDcLayOdds(amt, pId) {
  const fiveNineLayOddsPymnt = amt / 3 * 2;
  const conditions = [
    {
      condition: (amt2) => amt2 < 3,
      message: "Minimum Don't Come Lay Odds on the 5 & 9 are $3."
    },
    {
      condition: (amt2) => amt2 > 45e3,
      message: "Maximum Don't Come Lay Odds on the 5 & 9 are $45,000."
    },
    {
      condition: (amt2) => amt2 % 3 != 0,
      message: "Don't Come Lay Odds on the 5 & 9 need to be made in multiples of $3."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Don't Come Lay Odds on the 5 or 9 win $" + numCommas(fiveNineLayOddsPymnt) + "."
  );
}
function calculateFourTenDcLayOdds(amt, pId) {
  const conditions = [
    {
      condition: (amt2) => amt2 < 2,
      message: "Minimum Don't Come Lay Odds on the 4 & 10 are $2."
    },
    {
      condition: (amt2) => amt2 > 6e4,
      message: "Maximum Don't Come Lay Odds on the 4 & 10 are $60,000."
    },
    {
      condition: (amt2) => amt2 % 2 != 0,
      message: "Don't Come Lay Odds on the 4 & 10 need to be even."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "$" + numCommas(amt) + " Don't Come Lay Odds on the 4 or 10 win $" + numCommas(amt / 2) + "."
  );
}
function calculateMaxDcLay(amt, pId) {
  const conditions = [
    { condition: (amt2) => amt2 < 5, message: "Minimum bet on the Don't Come is $5." },
    { condition: (amt2) => amt2 > 5e3, message: "Maximum bet on the Don't Come is $5,000." }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "Max Lay Odds for a Don't Come bet with $" + numCommas(amt) + " is $" + numCommas(amt * 6) + "."
  );
}
function calculateSixEightOverlay(amt, pId) {
  const totalUnits = amt / 6;
  const overlay_six_eight_pymnt = totalUnits * 5;
  const vig = Math.floor(amt / 24);
  const totalOverlayCost = amt + vig;
  const conditions = [
    {
      condition: (amt2) => amt2 < 24,
      message: "Minimum Overlay on the 6 & 8 is $24 to win $20."
    },
    {
      condition: (amt2) => amt2 > 36e3,
      message: "Max Overlay on the 6 & 8 is $36,000 to win $30,000."
    },
    {
      condition: (amt2) => amt2 % 6 != 0,
      message: "Overlays on the 6 & 8 are made in multiples of $6."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Overlay against the 6 or 8 costs $" + numCommas(totalOverlayCost) + ". It pays $" + numCommas(overlay_six_eight_pymnt) + " and requres another $" + vig + " if you would like the bet to stay up to win again."
  );
}
function calculateFiveNineOverlay(amt, pId) {
  const totalUnits = amt / 3;
  const overlay_five_nine_pymnt = totalUnits * 2;
  const vig = Math.floor(amt / 30);
  const totalOverlayCost = amt + vig;
  const conditions = [
    {
      condition: (amt2) => amt2 < 30,
      message: "Minimum Overlay on the 5 & 9 is $30 to win $20."
    },
    {
      condition: (amt2) => amt2 > 45e3,
      message: "Max Overlay on the 5 & 9 is $45,000 to win $30,000."
    },
    {
      condition: (amt2) => amt2 % 3 != 0,
      message: "Overlays on the 5 & 9 are made in multiples of $3."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Overlay against the 5 or 9 costs $" + numCommas(totalOverlayCost) + ". It pays $" + numCommas(overlay_five_nine_pymnt) + " and requres another $" + vig + " if you would like the bet to stay up to win again."
  );
}
function calculateFourTenOverlay(amt, pId) {
  const overlay_four_ten_pymnt = amt / 2;
  const vig = Math.floor(amt / 40);
  const totalOverlayCost = amt + vig;
  const conditions = [
    {
      condition: (amt2) => amt2 < 40,
      message: "Minimum Overlay on the 4 & 10 is $40 to win $20."
    },
    {
      condition: (amt2) => amt2 > 6e4,
      message: "Max Overlay on the 4 & 10 is $60,000 to win $30,000"
    },
    {
      condition: (amt2) => amt2 % 2 != 0,
      message: "Overlays on the 4 & 10 must be even."
    }
  ];
  if (!commonValidation(amt, pId, conditions))
    return;
  setMessage(
    pId,
    "A $" + numCommas(amt) + " Overlay against the 4 & 10 costs $" + numCommas(totalOverlayCost) + ". It pays $" + numCommas(overlay_four_ten_pymnt) + " and requres another $" + vig + " if you would like the bet to stay up to win again."
  );
}
export {
  calculateFiveNineDcLayOdds as $,
  calculateSevenEleven as A,
  calculateHighLowYo as B,
  CalcBox as C,
  calculateThreeWay as D,
  calculateHorn as E,
  calculateHornHighAces as F,
  calculateHornHighAceDeuce as G,
  calculateHornHighYo as H,
  calculateHornHighTwelve as I,
  calculateWorld as J,
  calculateHopLowSide as K,
  calculateHopHighSide as L,
  calculateHopFours as M,
  calculateHopFives as N,
  calculateHopNines as O,
  calculateHopTens as P,
  calculateHopSixes as Q,
  calculateHopSevens as R,
  calculateHopEights as S,
  calculateHopHardways as T,
  calculateDontPass as U,
  calculateSixEightLayOdds as V,
  calculateFiveNineLayOdds as W,
  calculateFourTenLayOdds as X,
  calculateMaxLay as Y,
  calculateDontCome as Z,
  calculateSixEightDcLayOdds as _,
  calculateAnySeven as a,
  calculateFourTenDcLayOdds as a0,
  calculateMaxDcLay as a1,
  calculateSixEightOverlay as a2,
  calculateFiveNineOverlay as a3,
  calculateFourTenOverlay as a4,
  calculateBuyFourTen as b,
  calculateAnyCraps as c,
  calculateCAndESplit as d,
  calculateCAndE as e,
  calculateComeBet as f,
  calculateSixEightComeOdds as g,
  calculateFiveNineComeOdds as h,
  calculateFourTenComeOdds as i,
  calculatePassLine as j,
  calculateSixEightOdds as k,
  calculateFiveNineOdds as l,
  calculateFourTenOdds as m,
  calculateMaxOdds as n,
  calculatePlaceSixEight as o,
  calculatePlaceFiveNine as p,
  calculatePlaceFourTen as q,
  calculateHardSixEight as r,
  calculateHardFourTen as s,
  calculateAceDeuceYo as t,
  calculateAcesTwelve as u,
  calculateSingleField as v,
  calculateDoubleField as w,
  calculateHighLow as x,
  calculateElevenTwelve as y,
  calculateAcesAceDeuce as z
};
