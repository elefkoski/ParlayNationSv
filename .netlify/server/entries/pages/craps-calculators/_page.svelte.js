import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
import { j as calculatePassLine, k as calculateSixEightOdds, l as calculateFiveNineOdds, m as calculateFourTenOdds, n as calculateMaxOdds, o as calculatePlaceSixEight, p as calculatePlaceFiveNine, q as calculatePlaceFourTen, b as calculateBuyFourTen, r as calculateHardSixEight, s as calculateHardFourTen, t as calculateAceDeuceYo, u as calculateAcesTwelve, d as calculateCAndESplit, e as calculateCAndE, a as calculateAnySeven, c as calculateAnyCraps, v as calculateSingleField, w as calculateDoubleField, x as calculateHighLow, y as calculateElevenTwelve, z as calculateAcesAceDeuce, A as calculateSevenEleven, B as calculateHighLowYo, D as calculateThreeWay, E as calculateHorn, F as calculateHornHighAces, G as calculateHornHighAceDeuce, H as calculateHornHighYo, I as calculateHornHighTwelve, J as calculateWorld, K as calculateHopLowSide, L as calculateHopHighSide, M as calculateHopFours, N as calculateHopFives, O as calculateHopNines, P as calculateHopTens, Q as calculateHopSixes, R as calculateHopSevens, S as calculateHopEights, T as calculateHopHardways, f as calculateComeBet, g as calculateSixEightComeOdds, h as calculateFiveNineComeOdds, i as calculateFourTenComeOdds, U as calculateDontPass, V as calculateSixEightLayOdds, W as calculateFiveNineLayOdds, X as calculateFourTenLayOdds, Y as calculateMaxLay, Z as calculateDontCome, _ as calculateSixEightDcLayOdds, $ as calculateFiveNineDcLayOdds, a0 as calculateFourTenDcLayOdds, a1 as calculateMaxDcLay, a2 as calculateSixEightOverlay, a3 as calculateFiveNineOverlay, a4 as calculateFourTenOverlay, C as CalcBox } from "../../../chunks/craps-calculators.js";
import { C as CalcInput } from "../../../chunks/CalcInput.js";
import { C as CalcInput2 } from "../../../chunks/CalcInput2.js";
import { C as CalcInput3 } from "../../../chunks/CalcInput3.js";
import { C as CalcInput4 } from "../../../chunks/CalcInput4.js";
import { C as CalcInput5 } from "../../../chunks/CalcInput5.js";
let title = "Craps Calculators";
let description = "Craps bet calculators for all the bets on the Craps table.";
let url = "craps-calculators";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1hzpdsu_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1b46b7f">{
			"@context": "http://schema.org",
			"@type": "WebPage",
			"url": "http://parlaynation.com/craps-calculators",
			"headline": "Craps Calculators",
			"description": "Craps bet calculators for all the bets on the Craps table.",
			"datePublished": "2025-01-01",
			"author": {
				"@type": "Person",
				"name": "Elvis Lefkoski"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Parlay Nation",
				"logo": {
					"@type": "ImageObject",
					"url": "http://parlaynation.com/images/assets/parlay-nation-stacked-logo_275x218.webp"
				}
			}
		}<\/script><!-- HEAD_svelte-1hzpdsu_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreCrapsLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<header aria-label="Craps Calculators" class="p-6 shadow-lg home-page-heading" data-svelte-h="svelte-f1merz"><h1 class="text-3xl font-bold mb-4">Craps Calculators</h1> <p class="mb-4 leading-7">Check the payment for all the bets on the Craps table.</p> <p class="mb-4 leading-7">Learn to make the bets in proper increments.</p> <p class="mb-4 leading-7">Check the outcome of payouts by choosing what number rolls.</p></header> <main aria-label="Main sections with calculators" class="home-page-body-bg-1 p-6 rounded-lg shadow-lg mt-6 flex-col space-y-6">${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a Pass Line Bet.",
          title: "Pass Line Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculatePassLine,
                id: "pass_line_pymnt_calc",
                pId: "pass_line_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Enter Pass Line Amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Odds on a Pass Line Bet.",
          title: "Pass Line Odds Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSixEightOdds,
                id: "six_eight_odds_pymnt_calc",
                pId: "six_eight_odds_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Enter Odds amount for Point 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFiveNineOdds,
                id: "five_nine_odds_pymnt_calc",
                pId: "five_nine_odds_calc_result",
                placeholder: "$2 minimum",
                step: 2,
                title: "Enter Odds amount for Point 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFourTenOdds,
                id: "four_ten_odds_pymnt_calc",
                pId: "four_ten_odds_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Odds amount for Point 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the total payment for a Pass Line with Max Odds when the table has 3x4x5x Odds.",
          title: "Max Odds Payment Calculator for 3x4x5x Odds"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateMaxOdds,
                id: "max_odds_pymnt_calc",
                pId: "max_odds_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Enter Pass Line Amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for the six different Place Bets.",
          title: "Place Bet Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculatePlaceSixEight,
                id: "place_six_eight_pymnt_calc",
                pId: "place_six_eight_calc_result",
                placeholder: "$6 minimum",
                step: 6,
                title: "Amount to Place on the 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                id: "place_five_nine_pymnt_calc",
                calculate: calculatePlaceFiveNine,
                pId: "place_five_nine_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Amount to Place on the 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculatePlaceFourTen,
                id: "place_four_ten_pymnt_calc",
                pId: "place_four_ten_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Amount to Place on the 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Buying a 4 or 10.",
          title: "Buy 4 or 10 Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateBuyFourTen,
                id: "buy_pymnt_calc",
                pId: "buy_calc_result",
                placeholder: "$20 minimum",
                step: 5,
                title: "Enter Buy Amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a Hardway bet.",
          title: "Hardway Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateHardSixEight,
                id: "hard_six_eight_pymnt_calc",
                pId: "hard_six_eight_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Hard 6 or 8 amount:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateHardFourTen,
                id: "hard_four_ten_pymnt_calc",
                pId: "hard_four_ten_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Hard 4 or 10 amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made Straight Up on the Aces, Ace Deuce, Yo or Twelve.",
          title: "Straight Up Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateAceDeuceYo,
                id: "straight_low_side_pymnt_calc",
                pId: "straight_low_side_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Ace Deuce or Yo amount:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateAcesTwelve,
                id: "straight_high_side_pymnt_calc",
                pId: "straight_high_side_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Aces or Twelve amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the C & E split.",
          title: "C & E Split Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateCAndESplit,
                id: "c_and_e_split_pymnt_calc",
                pId: "c_and_e_split_calc_result",
                placeholder: "$2 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 2,
                title: "Enter amount to split:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for the C & E when you only bet the C, when you only bet the E, or you bet them together.",
          title: "C & E Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput3, "CalcInput3").$$render(
              $$result,
              {
                calculate: calculateCAndE,
                id: "c_and_e_split_pymnt_calc",
                idTwo: "c_and_e_pymnt_calc",
                pId: "c_and_e_calc_result",
                placeholder: "$1 minimum",
                placeholderTwo: "$1 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 1,
                title: "Enter amount for the C (Any Craps):",
                titleTwo: "Enter amount for the E (Eleven):"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for an Any Seven bet.",
          title: "Any Seven Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateAnySeven,
                id: "any_seven_pymnt_calc",
                pId: "any_seven_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Any Seven Amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for an Any Craps bet.",
          title: "Any Craps Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateAnyCraps,
                id: "any_craps_pymnt_calc",
                pId: "any_craps_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Any Craps Amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for the Field.",
          title: "The Field Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSingleField,
                id: "single_field_pymnt_calc",
                pId: "single_field_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Amount for a roll of 3, 4, 9, 10, or 11:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateDoubleField,
                id: "double_field_pymnt_calc",
                pId: "double_field_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Amount for a roll of 2 or 12:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the High (12) and the Low (2).",
          title: "High - Low Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateHighLow,
                id: "high_low_pymnt_calc",
                pId: "high_low_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter amount on EACH the High & Low:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the Eleven - Twelve, often called ET.",
          title: "Eleven - Twelve Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateElevenTwelve,
                id: "eleven_twelve_pymnt_calc",
                pId: "eleven_twelve_calc_result",
                placeholder: "$1 minimum",
                rollValues: [11, 12],
                valueTitles: ["Eleven", "Twelve"],
                step: 1,
                title: "Enter amount on EACH the Eleven & Twelve:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the Aces - Ace Deuce.",
          title: "Aces - Ace Deuce Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateAcesAceDeuce,
                id: "aces_ace_deuce_pymnt_calc",
                pId: "aces_ace_deuce_calc_result",
                placeholder: "$1 minimum",
                rollValues: [2, 3],
                valueTitles: ["Aces", "Ace Deuce"],
                step: 1,
                title: "Enter amount on EACH the Aces & Ace Deuce:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the Seven - Eleven.",
          title: "Seven - Eleven Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateSevenEleven,
                id: "seven_eleven_pymnt_calc",
                pId: "seven_eleven_calc_result",
                placeholder: "$1 minimum",
                rollValues: [7, 11],
                valueTitles: ["Seven", "Eleven"],
                step: 1,
                title: "Enter amount on EACH the Seven & Eleven:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the High - Low - Yo.",
          title: "High - Low - Yo Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateHighLowYo,
                id: "high_low_yo_pymnt_calc",
                pId: "high_low_yo_calc_result",
                placeholder: "$1 minimum",
                rollValues: [2, 11, 12],
                valueTitles: ["Low", "Yo", "High"],
                step: 1,
                title: "Enter amount on EACH the High Low & Yo:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for when you bet the same amount on each the Three Way Craps.",
          title: "Three Way Craps Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateThreeWay,
                id: "three_way_pymnt_calc",
                pId: "three_way_calc_result",
                placeholder: "$1 minimum",
                rollValues: [2, 3, 12],
                valueTitles: ["Aces", "Ace Deuce", "Twelve"],
                step: 1,
                title: "Enter amount on EACH the Three Way Craps:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the Horn.",
          title: "Horn Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateHorn,
                id: "horn_pymnt_calc",
                pId: "horn_calc_result",
                placeholder: "$4 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 4,
                title: "Enter amount on the Horn:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the four Horn High bets.",
          title: "Horn High Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput4, "CalcInput4").$$render(
              $$result,
              {
                calculate: calculateHornHighAces,
                id: "horn_high_aces_pymnt_calc",
                mainTitle: "Horn High Aces",
                pId: "horn_high_aces_calc_result",
                placeholder: "$5 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 5,
                title: "Enter amount on the Horn High Aces:"
              },
              {},
              {}
            )} ${validate_component(CalcInput4, "CalcInput4").$$render(
              $$result,
              {
                calculate: calculateHornHighAceDeuce,
                id: "horn_high_ace_deuce_pymnt_calc",
                mainTitle: "Horn High Ace Deuce",
                pId: "horn_high_ace_deuce_calc_result",
                placeholder: "$5 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 5,
                title: "Enter amount on the Horn High Ace Deuce:"
              },
              {},
              {}
            )} ${validate_component(CalcInput4, "CalcInput4").$$render(
              $$result,
              {
                calculate: calculateHornHighYo,
                id: "horn_high_yo_pymnt_calc",
                mainTitle: "Horn High Yo",
                pId: "horn_high_yo_calc_result",
                placeholder: "$5 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 5,
                title: "Enter amount on the Horn High Yo:"
              },
              {},
              {}
            )} ${validate_component(CalcInput4, "CalcInput4").$$render(
              $$result,
              {
                calculate: calculateHornHighTwelve,
                id: "horn_high_twelve_pymnt_calc",
                mainTitle: "Horn High Twelve",
                pId: "horn_high_twelve_calc_result",
                placeholder: "$5 minimum",
                rollValues: [2, 3, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Yo", "Twelve"],
                step: 5,
                title: "Enter amount on the Horn High Twelve:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the World.",
          title: "World Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput2, "CalcInput2").$$render(
              $$result,
              {
                calculate: calculateWorld,
                id: "world_pymnt_calc",
                pId: "world_calc_result",
                placeholder: "$5 minimum",
                rollValues: [2, 3, 7, 11, 12],
                valueTitles: ["Aces", "Ace Deuce", "Seven", "Yo", "Twelve"],
                step: 5,
                title: "Enter amount on the World:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made Straight Up on any of the Hop bets.",
          title: "Hop Bet Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                id: "hop_low_side_pymnt_calc",
                pId: "hop_low_side_calc_result",
                calculate: calculateHopLowSide,
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter amount for any non-pair Hop bet:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateHopHighSide,
                id: "hop_high_side_pymnt_calc",
                pId: "hop_high_side_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter amount for any Hopping Hardway:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the Hopping 4's, 5's, 9's, or 10's.",
          title: "Two Number Hop Bet Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopFours,
                id: "hop_fours_pymnt_calc",
                mainTitle: "Hop 4's",
                pId: "hop_fours_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["3-1", "2-2"],
                valueTitles: ["Easy 4", "Hard 4"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopFives,
                id: "hop_fives_pymnt_calc",
                mainTitle: "Hop 5's",
                pId: "hop_fives_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["4-1", "3-2"],
                valueTitles: ["Forty-One", "Thirty-Two"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopNines,
                id: "hop_nines_pymnt_calc",
                mainTitle: "Hop 9's",
                pId: "hop_nines_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["6-3", "5-4"],
                valueTitles: ["Sixty-Three", "Fifty-Four"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopTens,
                id: "hop_tens_pymnt_calc",
                mainTitle: "Hop 10's",
                pId: "hop_tens_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["6-4", "5-5"],
                valueTitles: ["Easy 10", "Hard 10"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the Hopping 6's, 7's, or 8's.",
          title: "Three Number Hop Bet Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopSixes,
                id: "hop_sixes_pymnt_calc",
                mainTitle: "Hop 6's",
                pId: "hop_sixes_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["5-1", "4-2", "3-3"],
                valueTitles: ["Fifty-One", "Forty-Two", "Hard 6"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopSevens,
                id: "hop_sevens_pymnt_calc",
                mainTitle: "Hop 7's",
                pId: "hop_sevens_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["6-1", "5-2", "4-3"],
                valueTitles: ["Sixty-One", "Fifty-Two", "Forty-Three"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )} ${validate_component(CalcInput5, "CalcInput5").$$render(
              $$result,
              {
                calculate: calculateHopEights,
                id: "hop_eights_pymnt_calc",
                mainTitle: "Hop 8's",
                pId: "hop_eights_calc_result",
                placeholder: "$1 minimum",
                rollCombo: ["6-2", "5-3", "4-4"],
                valueTitles: ["Sixty-Two", "Fifty-Three", "Hard 8"],
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a bet made on the Hopping Hardways.",
          title: "Hopping Hardways Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateHopHardways,
                id: "hop_hardways_pymnt_calc",
                pId: "hop_hardways_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter amount to bet on EACH Hop:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a Come Bet.",
          title: "Come Bet Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateComeBet,
                id: "come_bet_pymnt_calc",
                pId: "come_bet_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Enter Come Bet amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Odds on a Come Bet.",
          title: "Come Bet Odds Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSixEightComeOdds,
                id: "six_eight_come_odds_pymnt_calc",
                pId: "six_eight_come_odds_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Enter Odds amount for Point 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFiveNineComeOdds,
                id: "five_nine_come_odds_pymnt_calc",
                pId: "five_nine_come_odds_calc_result",
                placeholder: "$2 minimum",
                step: 2,
                title: "Enter Odds amount for Point 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFourTenComeOdds,
                id: "four_ten_come_odds_pymnt_calc",
                pId: "four_ten_come_odds_calc_result",
                placeholder: "$1 minimum",
                step: 1,
                title: "Enter Odds amount for Point 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a Don't Pass Bet.",
          title: "Don't Pass Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateDontPass,
                id: "dont_pass_pymnt_calc",
                pId: "dont_pass_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Enter Don't Pass amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Lay Odds on the Don't Pass.",
          title: "Don't Pass Lay Odds Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSixEightLayOdds,
                id: "six_eight_lay_odds_pymnt_calc",
                pId: "six_eight_lay_odds_calc_result",
                placeholder: "$6 minimum",
                step: 6,
                title: "Enter Lay Odds amount for 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFiveNineLayOdds,
                id: "five_nine_lay_odds_pymnt_calc",
                pId: "five_nine_lay_odds_calc_result",
                placeholder: "$3 minimum",
                step: 3,
                title: "Enter Lay Odds amount for 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFourTenLayOdds,
                id: "four_ten_lay_odds_pymnt_calc",
                pId: "four_ten_lay_odds_calc_result",
                placeholder: "$2 minimum",
                step: 2,
                title: "Enter Lay Odds amount for 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the Max Lay Odds for your bet on the Don't Pass.",
          title: "Check Max Don't Pass Lay Odds"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateMaxLay,
                id: "max_lay_pymnt_calc",
                pId: "max_lay_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Enter Don't Pass amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for a Don't Come Bet.",
          title: "Don't Come Payment Calculator"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateDontCome,
                id: "dont_come_pymnt_calc",
                pId: "dont_come_calc_result",
                placeholder: "$5 minimum",
                step: 5,
                title: "Enter Don't Come amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Lay Odds on the Don't Come.",
          title: "Don't Come Lay Odds Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSixEightDcLayOdds,
                id: "six_eight_dont_come_lay_odds_pymnt_calc",
                pId: "six_eight_dont_come_lay_odds_calc_result",
                placeholder: "$6 minimum",
                step: 6,
                title: "Enter Lay Odds amount for 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFiveNineDcLayOdds,
                id: "five_nine_dont_come_lay_odds_pymnt_calc",
                pId: "five_nine_dont_come_lay_odds_calc_result",
                placeholder: "$3 minimum",
                step: 3,
                title: "Enter Lay Odds amount for 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFourTenDcLayOdds,
                id: "four_ten_dont_come_lay_odds_pymnt_calc",
                pId: "four_ten_dont_come_lay_odds_calc_result",
                placeholder: "$2 minimum",
                step: 2,
                title: "Enter Lay Odds amount for 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the Max Lay Odds for your bet on the Don't Come.",
          title: "Check Max Don't Come Lay Odds"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateMaxDcLay,
                id: "max_dont_come_lay_pymnt_calc",
                pId: "max_dont_come_lay_calc_result",
                placeholder: "Table minimum",
                step: 5,
                title: "Enter Don't Come amount:"
              },
              {},
              {}
            )}`;
          }
        }
      )} ${validate_component(CalcBox, "CalcBox").$$render(
        $$result,
        {
          description: "Check the payment for Overlays against any Point.",
          title: "Overlay Payment Calculators"
        },
        {},
        {
          default: () => {
            return `${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateSixEightOverlay,
                id: "six_eight_overlay_pymnt_calc",
                pId: "six_eight_overlay_calc_result",
                placeholder: "$24 minimum",
                step: 6,
                title: "Enter Overlay amount for 6 or 8:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFiveNineOverlay,
                id: "five_nine_overlay_pymnt_calc",
                pId: "five_nine_overlay_calc_result",
                placeholder: "$30 minimum",
                step: 6,
                title: "Enter Overlay amount for 5 or 9:"
              },
              {},
              {}
            )} ${validate_component(CalcInput, "CalcInput").$$render(
              $$result,
              {
                calculate: calculateFourTenOverlay,
                id: "four_ten_overlay_pymnt_calc",
                pId: "four_ten_overlay_calc_result",
                placeholder: "$40 minimum",
                step: 10,
                title: "Enter Overlay amount for 4 or 10:"
              },
              {},
              {}
            )}`;
          }
        }
      )}</main>`;
    }
  })}`;
});
export {
  Page as default
};
