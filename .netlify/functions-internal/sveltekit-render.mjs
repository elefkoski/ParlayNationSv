import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/.DS_Store","images/a-great-craps-roll/.DS_Store","images/a-great-craps-roll/a-great-craps-roll-header.webp","images/a-great-craps-roll/craps-bets-turned-on_1280x720.webp","images/a-great-craps-roll/craps-bets-turned-on_640x360.webp","images/a-great-craps-roll/craps-bets-turned-on_960x540.webp","images/a-great-craps-roll/two-craps-dice_1280x720.webp","images/a-great-craps-roll/two-craps-dice_640x360.webp","images/a-great-craps-roll/two-craps-dice_960x540.webp","images/a-great-craps-roll/up-close-craps-layout_1280x720.webp","images/a-great-craps-roll/up-close-craps-layout_640x360.webp","images/a-great-craps-roll/up-close-craps-layout_960x540.webp","images/a-perfect-craps-bet/.DS_Store","images/a-perfect-craps-bet/a-perfect-craps-bet-header.webp","images/a-perfect-craps-bet/across-including_1280x720.webp","images/a-perfect-craps-bet/across-including_640x360.webp","images/a-perfect-craps-bet/across-including_960x540.webp","images/a-perfect-craps-bet/place-bet-on-point-six_1280x720.webp","images/a-perfect-craps-bet/place-bet-on-point-six_640x360.webp","images/a-perfect-craps-bet/place-bet-on-point-six_960x540.webp","images/a-perfect-craps-bet/straight-up-twelve_1280x720.webp","images/a-perfect-craps-bet/straight-up-twelve_640x360.webp","images/a-perfect-craps-bet/straight-up-twelve_960x540.webp","images/about/about-header.jpg","images/across/132-across.webp","images/across/132-across_1280x720.webp","images/across/132-across_320x180.webp","images/across/132-across_640x360.webp","images/across/132-across_960x540.webp","images/across/136-across.webp","images/across/136-across_1280x720.webp","images/across/136-across_320x180.webp","images/across/136-across_640x360.webp","images/across/136-across_960x540.webp","images/across/137-across.webp","images/across/137-across_1280x720.webp","images/across/137-across_320x180.webp","images/across/137-across_640x360.webp","images/across/137-across_960x540.webp","images/across/52-across.webp","images/across/52-across_1280x720.webp","images/across/52-across_320x180.webp","images/across/52-across_640x360.webp","images/across/52-across_960x540.webp","images/across/54-across.webp","images/across/54-across_1280x720.webp","images/across/54-across_320x180.webp","images/across/54-across_640x360.webp","images/across/54-across_960x540.webp","images/across/across-header.jpg","images/across/across.webp","images/across/across_1280x720.webp","images/across/across_320x180.webp","images/across/across_640x360.webp","images/across/across_960x540.webp","images/any-craps/any-craps-header.jpg","images/any-craps/any-craps.webp","images/any-craps/any-craps_1280x720.webp","images/any-craps/any-craps_320x180.webp","images/any-craps/any-craps_640x360.webp","images/any-craps/any-craps_960x540.webp","images/any-craps/placement-of-the-any-craps.webp","images/any-craps/placement-of-the-any-craps_1280x720.webp","images/any-craps/placement-of-the-any-craps_320x180.webp","images/any-craps/placement-of-the-any-craps_640x360.webp","images/any-craps/placement-of-the-any-craps_960x540.webp","images/any-craps/what-does-the-any-craps-pay.webp","images/any-craps/what-does-the-any-craps-pay_1280x720.webp","images/any-craps/what-does-the-any-craps-pay_320x180.webp","images/any-craps/what-does-the-any-craps-pay_640x360.webp","images/any-craps/what-does-the-any-craps-pay_960x540.webp","images/any-seven/any-seven-header.jpg","images/any-seven/any-seven.webp","images/any-seven/any-seven_1280x720.webp","images/any-seven/any-seven_320x180.webp","images/any-seven/any-seven_640x360.webp","images/any-seven/any-seven_960x540.webp","images/any-seven/placement-of-the-any-seven.webp","images/any-seven/placement-of-the-any-seven_1280x720.webp","images/any-seven/placement-of-the-any-seven_320x180.webp","images/any-seven/placement-of-the-any-seven_640x360.webp","images/any-seven/placement-of-the-any-seven_960x540.webp","images/any-seven/what-does-the-any-seven-pay.webp","images/any-seven/what-does-the-any-seven-pay_1280x720.webp","images/any-seven/what-does-the-any-seven-pay_320x180.webp","images/any-seven/what-does-the-any-seven-pay_640x360.webp","images/any-seven/what-does-the-any-seven-pay_960x540.webp","images/art-of-verbal-betting/.DS_Store","images/art-of-verbal-betting/art-of-verbal-betting-header.webp","images/art-of-verbal-betting/c-and-e_1280x720.webp","images/art-of-verbal-betting/c-and-e_640x360.webp","images/art-of-verbal-betting/c-and-e_960x540.webp","images/art-of-verbal-betting/high-low-yo_1280x720.webp","images/art-of-verbal-betting/high-low-yo_640x360.webp","images/art-of-verbal-betting/high-low-yo_960x540.webp","images/art-of-verbal-betting/outside-place-bets_1280x720.webp","images/art-of-verbal-betting/outside-place-bets_640x360.webp","images/art-of-verbal-betting/outside-place-bets_960x540.webp","images/assets/.DS_Store","images/assets/book.webp","images/assets/craps-table-long-view.jpg","images/assets/die-icon.webp","images/assets/envelope.webp","images/assets/favicon-die-one_32x32.webp","images/assets/logo-die-one_256x256.webp","images/assets/logo-die-one_512x512.webp","images/assets/moon-black-icon.png","images/assets/moon-white-icon.png","images/assets/parlay-nation-logo-dm_1048x298.webp","images/assets/parlay-nation-logo-dm_524x149.webp","images/assets/parlay-nation-logo.webp","images/assets/parlay-nation-logo_1048x298.webp","images/assets/parlay-nation-logo_524x149.webp","images/assets/parlay-nation-stacked-logo-dm_275x218.webp","images/assets/parlay-nation-stacked-logo_275x218.webp","images/assets/parlayNationDice.webp","images/assets/pn-favicon-32x32.png","images/assets/pn-favicon-512x512.png","images/assets/question-mark.webp","images/assets/sun-black-icon.png","images/assets/sun-white-icon.png","images/assets/white-logo.webp","images/assets/white-logo_475x129.webp","images/assets/white-logo_950x257.webp","images/be-an-efficient-craps-player/.DS_Store","images/be-an-efficient-craps-player/be-an-efficient-craps-player-header.webp","images/be-an-efficient-craps-player/place-bets-170-inside_1280x720.webp","images/be-an-efficient-craps-player/place-bets-170-inside_640x360.webp","images/be-an-efficient-craps-player/place-bets-170-inside_960x540.webp","images/be-an-efficient-craps-player/stick-toward-second-base_1280x720.webp","images/be-an-efficient-craps-player/stick-toward-second-base_640x360.webp","images/be-an-efficient-craps-player/stick-toward-second-base_960x540.webp","images/be-an-efficient-craps-player/up-close-place-bets-on-9_1280x720.webp","images/be-an-efficient-craps-player/up-close-place-bets-on-9_640x360.webp","images/be-an-efficient-craps-player/up-close-place-bets-on-9_960x540.webp","images/better-craps-shooter/.DS_Store","images/better-craps-shooter/better-craps-shooter-header.webp","images/better-craps-shooter/come-bet-in-the-come_1280x720.webp","images/better-craps-shooter/come-bet-in-the-come_640x360.webp","images/better-craps-shooter/come-bet-in-the-come_960x540.webp","images/better-craps-shooter/five-purple-dice_1280x720.webp","images/better-craps-shooter/five-purple-dice_640x360.webp","images/better-craps-shooter/five-purple-dice_960x540.webp","images/better-craps-shooter/pass-line-overhead_1280x720.webp","images/better-craps-shooter/pass-line-overhead_640x360.webp","images/better-craps-shooter/pass-line-overhead_960x540.webp","images/bridging-lay-odds/.DS_Store","images/bridging-lay-odds/10-w-20-bridge-4-and-10-paid_1280x720.webp","images/bridging-lay-odds/10-w-20-bridge-4-and-10-paid_640x360.webp","images/bridging-lay-odds/10-w-20-bridge-4-and-10-paid_960x540.webp","images/bridging-lay-odds/10-w-20-bridge-4-and-10_1280x720.webp","images/bridging-lay-odds/10-w-20-bridge-4-and-10_640x360.webp","images/bridging-lay-odds/10-w-20-bridge-4-and-10_960x540.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9-paid_1280x720.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9-paid_640x360.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9-paid_960x540.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9_1280x720.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9_640x360.webp","images/bridging-lay-odds/20-w-30-bridge-5-and-9_960x540.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8-paid_1280x720.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8-paid_640x360.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8-paid_960x540.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8_1280x720.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8_640x360.webp","images/bridging-lay-odds/50-w-60-bridge-6-and-8_960x540.webp","images/bridging-lay-odds/bridging-lay-odds-header.webp","images/bridging-lay-odds/bridging-lay-odds_1280x720.webp","images/bridging-lay-odds/bridging-lay-odds_640x360.webp","images/bridging-lay-odds/bridging-lay-odds_960x540.webp","images/bridging-lay-odds/improper-bridge-10-w-12-4-and-10_1280x720.webp","images/bridging-lay-odds/improper-bridge-10-w-12-4-and-10_640x360.webp","images/bridging-lay-odds/improper-bridge-10-w-12-4-and-10_960x540.webp","images/bridging-lay-odds/improper-bridge-10-w-60-4-and-10_1280x720.webp","images/bridging-lay-odds/improper-bridge-10-w-60-4-and-10_640x360.webp","images/bridging-lay-odds/improper-bridge-10-w-60-4-and-10_960x540.webp","images/bridging-lay-odds/improper-bridge-10-w-60-6-and-8_1280x720.webp","images/bridging-lay-odds/improper-bridge-10-w-60-6-and-8_640x360.webp","images/bridging-lay-odds/improper-bridge-10-w-60-6-and-8_960x540.webp","images/bridging-lay-odds/improper-bridge-15-w-18-5-and-9_1280x720.webp","images/bridging-lay-odds/improper-bridge-15-w-18-5-and-9_640x360.webp","images/bridging-lay-odds/improper-bridge-15-w-18-5-and-9_960x540.webp","images/bridging-lay-odds/improper-bridge-15-w-90-6-and-8_1280x720.webp","images/bridging-lay-odds/improper-bridge-15-w-90-6-and-8_640x360.webp","images/bridging-lay-odds/improper-bridge-15-w-90-6-and-8_960x540.webp","images/bridging-lay-odds/improper-bridge-5-w-30-5-and-9_1280x720.webp","images/bridging-lay-odds/improper-bridge-5-w-30-5-and-9_640x360.webp","images/bridging-lay-odds/improper-bridge-5-w-30-5-and-9_960x540.webp","images/buying-place-bets/buy-place-ex-1.webp","images/buying-place-bets/buy-place-ex-1_1280x720.webp","images/buying-place-bets/buy-place-ex-1_320x180.webp","images/buying-place-bets/buy-place-ex-1_640x360.webp","images/buying-place-bets/buy-place-ex-1_960x540.webp","images/buying-place-bets/buy-place-ex-2.webp","images/buying-place-bets/buy-place-ex-2_1280x720.webp","images/buying-place-bets/buy-place-ex-2_320x180.webp","images/buying-place-bets/buy-place-ex-2_640x360.webp","images/buying-place-bets/buy-place-ex-2_960x540.webp","images/buying-place-bets/buy-place-ex-3.webp","images/buying-place-bets/buy-place-ex-3_1280x720.webp","images/buying-place-bets/buy-place-ex-3_320x180.webp","images/buying-place-bets/buy-place-ex-3_640x360.webp","images/buying-place-bets/buy-place-ex-3_960x540.webp","images/buying-place-bets/buying-place-bets-header.jpg","images/buying-place-bets/buying-place-bets.webp","images/buying-place-bets/buying-place-bets_1280x720.webp","images/buying-place-bets/buying-place-bets_320x180.webp","images/buying-place-bets/buying-place-bets_640x360.webp","images/buying-place-bets/buying-place-bets_960x540.webp","images/buying-place-bets/how-to-bet-a-buy-bet.webp","images/buying-place-bets/how-to-bet-a-buy-bet_1280x720.webp","images/buying-place-bets/how-to-bet-a-buy-bet_320x180.webp","images/buying-place-bets/how-to-bet-a-buy-bet_640x360.webp","images/buying-place-bets/how-to-bet-a-buy-bet_960x540.webp","images/buying-place-bets/placement-of-a-buy-bet.webp","images/buying-place-bets/placement-of-a-buy-bet_1280x720.webp","images/buying-place-bets/placement-of-a-buy-bet_320x180.webp","images/buying-place-bets/placement-of-a-buy-bet_640x360.webp","images/buying-place-bets/placement-of-a-buy-bet_960x540.webp","images/c-and-e/4-c-1-e.webp","images/c-and-e/4-c-1-e_1280x720.webp","images/c-and-e/4-c-1-e_320x180.webp","images/c-and-e/4-c-1-e_640x360.webp","images/c-and-e/4-c-1-e_960x540.webp","images/c-and-e/5-c-and-e-split.webp","images/c-and-e/5-c-and-e-split_1280x720.webp","images/c-and-e/5-c-and-e-split_320x180.webp","images/c-and-e/5-c-and-e-split_640x360.webp","images/c-and-e/5-c-and-e-split_960x540.webp","images/c-and-e/c-and-e-header.jpg","images/c-and-e/c-and-e.webp","images/c-and-e/c-and-e_1280x720.webp","images/c-and-e/c-and-e_320x180.webp","images/c-and-e/c-and-e_640x360.webp","images/c-and-e/c-and-e_960x540.webp","images/c-and-e/placement-of-c-and-e.webp","images/c-and-e/placement-of-c-and-e_1280x720.webp","images/c-and-e/placement-of-c-and-e_320x180.webp","images/c-and-e/placement-of-c-and-e_640x360.webp","images/c-and-e/placement-of-c-and-e_960x540.webp","images/come-bet-basics/come-bet-basics-header.jpg","images/come-bet-basics/come-bet.webp","images/come-bet-basics/come-bet_1280x720.webp","images/come-bet-basics/come-bet_320x180.webp","images/come-bet-basics/come-bet_640x360.webp","images/come-bet-basics/come-bet_960x540.webp","images/come-bet-basics/come-bets-always-work.webp","images/come-bet-basics/come-bets-always-work_1280x720.webp","images/come-bet-basics/come-bets-always-work_320x180.webp","images/come-bet-basics/come-bets-always-work_640x360.webp","images/come-bet-basics/come-bets-always-work_960x540.webp","images/come-bet-basics/come-bets-even-money-a.webp","images/come-bet-basics/come-bets-even-money-a_1280x720.webp","images/come-bet-basics/come-bets-even-money-a_320x180.webp","images/come-bet-basics/come-bets-even-money-a_640x360.webp","images/come-bet-basics/come-bets-even-money-a_960x540.webp","images/come-bet-basics/come-bets-even-money-b.webp","images/come-bet-basics/come-bets-even-money-b_1280x720.webp","images/come-bet-basics/come-bets-even-money-b_320x180.webp","images/come-bet-basics/come-bets-even-money-b_640x360.webp","images/come-bet-basics/come-bets-even-money-b_960x540.webp","images/come-bet-basics/dealer-come-bet.webp","images/come-bet-basics/dealer-come-bet_1280x720.webp","images/come-bet-basics/dealer-come-bet_320x180.webp","images/come-bet-basics/dealer-come-bet_640x360.webp","images/come-bet-basics/dealer-come-bet_960x540.webp","images/come-bet-basics/how-to-bet-a-come-bet.webp","images/come-bet-basics/how-to-bet-a-come-bet_1280x720.webp","images/come-bet-basics/how-to-bet-a-come-bet_320x180.webp","images/come-bet-basics/how-to-bet-a-come-bet_640x360.webp","images/come-bet-basics/how-to-bet-a-come-bet_960x540.webp","images/come-bet-basics/off-and-on-for.webp","images/come-bet-basics/off-and-on-for_1280x720.webp","images/come-bet-basics/off-and-on-for_320x180.webp","images/come-bet-basics/off-and-on-for_640x360.webp","images/come-bet-basics/off-and-on-for_960x540.webp","images/come-bet-basics/off-for-on-for.webp","images/come-bet-basics/off-for-on-for_1280x720.webp","images/come-bet-basics/off-for-on-for_320x180.webp","images/come-bet-basics/off-for-on-for_640x360.webp","images/come-bet-basics/off-for-on-for_960x540.webp","images/come-bet-basics/off-for.webp","images/come-bet-basics/off-for_1280x720.webp","images/come-bet-basics/off-for_320x180.webp","images/come-bet-basics/off-for_640x360.webp","images/come-bet-basics/off-for_960x540.webp","images/come-bet-basics/on-for.webp","images/come-bet-basics/on-for_1280x720.webp","images/come-bet-basics/on-for_320x180.webp","images/come-bet-basics/on-for_640x360.webp","images/come-bet-basics/on-for_960x540.webp","images/come-bet-basics/placement-of-a-come-bet-inside-point.webp","images/come-bet-basics/placement-of-a-come-bet-inside-point_1280x720.webp","images/come-bet-basics/placement-of-a-come-bet-inside-point_320x180.webp","images/come-bet-basics/placement-of-a-come-bet-inside-point_640x360.webp","images/come-bet-basics/placement-of-a-come-bet-inside-point_960x540.webp","images/come-bet-basics/stage-one-of-a-come-bet.webp","images/come-bet-basics/stage-one-of-a-come-bet_1280x720.webp","images/come-bet-basics/stage-one-of-a-come-bet_320x180.webp","images/come-bet-basics/stage-one-of-a-come-bet_640x360.webp","images/come-bet-basics/stage-one-of-a-come-bet_960x540.webp","images/come-bet-basics/stage-two-of-a-come-bet.webp","images/come-bet-basics/stage-two-of-a-come-bet_1280x720.webp","images/come-bet-basics/stage-two-of-a-come-bet_320x180.webp","images/come-bet-basics/stage-two-of-a-come-bet_640x360.webp","images/come-bet-basics/stage-two-of-a-come-bet_960x540.webp","images/come-bet-odds/4-10-come-bet-odds.webp","images/come-bet-odds/4-10-come-bet-odds_1280x720.webp","images/come-bet-odds/4-10-come-bet-odds_320x180.webp","images/come-bet-odds/4-10-come-bet-odds_640x360.webp","images/come-bet-odds/4-10-come-bet-odds_960x540.webp","images/come-bet-odds/4-10-come-bet-payment.webp","images/come-bet-odds/4-10-come-bet-payment_1280x720.webp","images/come-bet-odds/4-10-come-bet-payment_320x180.webp","images/come-bet-odds/4-10-come-bet-payment_640x360.webp","images/come-bet-odds/4-10-come-bet-payment_960x540.webp","images/come-bet-odds/5-9-come-bet-odds.webp","images/come-bet-odds/5-9-come-bet-odds_1280x720.webp","images/come-bet-odds/5-9-come-bet-odds_320x180.webp","images/come-bet-odds/5-9-come-bet-odds_640x360.webp","images/come-bet-odds/5-9-come-bet-odds_960x540.webp","images/come-bet-odds/5-9-come-bet-payment.webp","images/come-bet-odds/5-9-come-bet-payment_1280x720.webp","images/come-bet-odds/5-9-come-bet-payment_320x180.webp","images/come-bet-odds/5-9-come-bet-payment_640x360.webp","images/come-bet-odds/5-9-come-bet-payment_960x540.webp","images/come-bet-odds/6-8-come-bet-odds.webp","images/come-bet-odds/6-8-come-bet-odds_1280x720.webp","images/come-bet-odds/6-8-come-bet-odds_320x180.webp","images/come-bet-odds/6-8-come-bet-odds_640x360.webp","images/come-bet-odds/6-8-come-bet-odds_960x540.webp","images/come-bet-odds/6-8-come-bet-payment.webp","images/come-bet-odds/6-8-come-bet-payment_1280x720.webp","images/come-bet-odds/6-8-come-bet-payment_320x180.webp","images/come-bet-odds/6-8-come-bet-payment_640x360.webp","images/come-bet-odds/6-8-come-bet-payment_960x540.webp","images/come-bet-odds/come-bet-odds-header.jpg","images/come-bet-odds/come-bet-odds.webp","images/come-bet-odds/come-bet-odds_1280x720.webp","images/come-bet-odds/come-bet-odds_320x180.webp","images/come-bet-odds/come-bet-odds_640x360.webp","images/come-bet-odds/come-bet-odds_960x540.webp","images/come-bet-odds/dealer-come-bet-with-odds.webp","images/come-bet-odds/dealer-come-bet-with-odds_1280x720.webp","images/come-bet-odds/dealer-come-bet-with-odds_320x180.webp","images/come-bet-odds/dealer-come-bet-with-odds_640x360.webp","images/come-bet-odds/dealer-come-bet-with-odds_960x540.webp","images/come-bet-odds/how-to-bet-come-bet-odds.webp","images/come-bet-odds/how-to-bet-come-bet-odds_1280x720.webp","images/come-bet-odds/how-to-bet-come-bet-odds_320x180.webp","images/come-bet-odds/how-to-bet-come-bet-odds_640x360.webp","images/come-bet-odds/how-to-bet-come-bet-odds_960x540.webp","images/come-bet-odds/max-come-bet-odds-4-10.webp","images/come-bet-odds/max-come-bet-odds-4-10_1280x720.webp","images/come-bet-odds/max-come-bet-odds-4-10_320x180.webp","images/come-bet-odds/max-come-bet-odds-4-10_640x360.webp","images/come-bet-odds/max-come-bet-odds-4-10_960x540.webp","images/come-bet-odds/max-come-bet-odds-5-9.webp","images/come-bet-odds/max-come-bet-odds-5-9_1280x720.webp","images/come-bet-odds/max-come-bet-odds-5-9_320x180.webp","images/come-bet-odds/max-come-bet-odds-5-9_640x360.webp","images/come-bet-odds/max-come-bet-odds-5-9_960x540.webp","images/come-bet-odds/max-come-bet-odds-6-and-8.webp","images/come-bet-odds/max-come-bet-odds-6-and-8_1280x720.webp","images/come-bet-odds/max-come-bet-odds-6-and-8_320x180.webp","images/come-bet-odds/max-come-bet-odds-6-and-8_640x360.webp","images/come-bet-odds/max-come-bet-odds-6-and-8_960x540.webp","images/come-bet-odds/odds-are-off-during-the-comeout-roll.webp","images/come-bet-odds/odds-are-off-during-the-comeout-roll_1280x720.webp","images/come-bet-odds/odds-are-off-during-the-comeout-roll_320x180.webp","images/come-bet-odds/odds-are-off-during-the-comeout-roll_640x360.webp","images/come-bet-odds/odds-are-off-during-the-comeout-roll_960x540.webp","images/come-bet-odds/placement-of-come-bet-odds.webp","images/come-bet-odds/placement-of-come-bet-odds_1280x720.webp","images/come-bet-odds/placement-of-come-bet-odds_320x180.webp","images/come-bet-odds/placement-of-come-bet-odds_640x360.webp","images/come-bet-odds/placement-of-come-bet-odds_960x540.webp","images/come-bets/come-bet-basics-header_600x600.webp","images/come-bets/come-bet-basics-header_992x558.webp","images/come-bets/come-bet-basics-wide-header.webp","images/come-bets/come-bet-odds-header_600x600.webp","images/come-bets/come-bet-odds-header_992x558.webp","images/come-bets/come-bet-odds-wide-header.webp","images/come-bets/come-bets-header.jpg","images/come-bets/coming-down-with-odds-header_600x600.webp","images/come-bets/coming-down-with-odds-header_992x558.webp","images/come-bets/coming-down-with-odds-wide-header.webp","images/come-vs-place-bets/.DS_Store","images/come-vs-place-bets/come-bets-on-point-five_1280x720.webp","images/come-vs-place-bets/come-bets-on-point-five_640x360.webp","images/come-vs-place-bets/come-bets-on-point-five_960x540.webp","images/come-vs-place-bets/come-vs-place-bets-header.webp","images/come-vs-place-bets/place-bet-on-point-five_1280x720.webp","images/come-vs-place-bets/place-bet-on-point-five_640x360.webp","images/come-vs-place-bets/place-bet-on-point-five_960x540.webp","images/come-vs-place-bets/place-bets-point-six_1280x720.webp","images/come-vs-place-bets/place-bets-point-six_640x360.webp","images/come-vs-place-bets/place-bets-point-six_960x540.webp","images/coming-down-with-odds/coming-down-with-odds-header.jpg","images/coming-down-with-odds/odds-added-rest-handed-off.webp","images/coming-down-with-odds/odds-added-rest-handed-off_1280x720.webp","images/coming-down-with-odds/odds-added-rest-handed-off_320x180.webp","images/coming-down-with-odds/odds-added-rest-handed-off_640x360.webp","images/coming-down-with-odds/odds-added-rest-handed-off_960x540.webp","images/coming-down-with-odds/point-rolled-place-paid.webp","images/coming-down-with-odds/point-rolled-place-paid_1280x720.webp","images/coming-down-with-odds/point-rolled-place-paid_320x180.webp","images/coming-down-with-odds/point-rolled-place-paid_640x360.webp","images/coming-down-with-odds/point-rolled-place-paid_960x540.webp","images/coming-down-with-odds/the-setup.webp","images/coming-down-with-odds/the-setup_1280x720.webp","images/coming-down-with-odds/the-setup_320x180.webp","images/coming-down-with-odds/the-setup_640x360.webp","images/coming-down-with-odds/the-setup_960x540.webp","images/contact/contact-header.jpg","images/contact/puck-on-nine_1280x720.webp","images/contact/puck-on-nine_320x180.webp","images/contact/puck-on-nine_640x360.webp","images/contact/puck-on-nine_960x540.webp","images/craps/craps-heading.jpg","images/craps/craps-paths-dm_2300x450.webp","images/craps/craps-paths-lm_2300x450.webp","images/craps/craps-paths.webp","images/craps/m-craps-paths-dm_1950x500.webp","images/craps/m-craps-paths-dm_600x154.webp","images/craps/m-craps-paths-dm_992x254.webp","images/craps/m-craps-paths-lm_1950x500.webp","images/craps/m-craps-paths-lm_600x154.webp","images/craps/m-craps-paths-lm_992x254.webp","images/craps-basics/craps-basics-heading.jpg","images/craps-basics/the-craps-table-header_600x600.webp","images/craps-basics/the-craps-table-header_992x558.webp","images/craps-basics/the-craps-table-wide-header.webp","images/craps-basics/the-crew-header_600x600.webp","images/craps-basics/the-crew-header_992x558.webp","images/craps-basics/the-crew-wide-header.webp","images/craps-basics/the-dice-header_600x600.webp","images/craps-basics/the-dice-header_992x558.webp","images/craps-basics/the-dice-wide-header.webp","images/craps-basics/the-stages-header_600x600.webp","images/craps-basics/the-stages-header_992x558.webp","images/craps-basics/the-stages-wide-header.webp","images/craps-basics/to-consider-header_600x600.webp","images/craps-basics/to-consider-header_992x558.webp","images/craps-basics/to-consider-wide-header.webp","images/craps-basics/verbal-betting-header_600x600.webp","images/craps-basics/verbal-betting-header_992x558.webp","images/craps-basics/verbal-betting-wide-header.webp","images/craps-corner/craps-corner-header.jpg","images/craps-dealer-pet-peeves/.DS_Store","images/craps-dealer-pet-peeves/craps-dealer-pet-peeves-header.webp","images/craps-dealer-pet-peeves/craps-dice-in-place-bets_1280x720.webp","images/craps-dealer-pet-peeves/craps-dice-in-place-bets_640x360.webp","images/craps-dealer-pet-peeves/craps-dice-in-place-bets_960x540.webp","images/craps-dealer-pet-peeves/craps-stick-with-dice_1280x720.webp","images/craps-dealer-pet-peeves/craps-stick-with-dice_640x360.webp","images/craps-dealer-pet-peeves/craps-stick-with-dice_960x540.webp","images/craps-dealer-pet-peeves/craps-table-layout-third-base_1280x720.webp","images/craps-dealer-pet-peeves/craps-table-layout-third-base_640x360.webp","images/craps-dealer-pet-peeves/craps-table-layout-third-base_960x540.webp","images/craps-money-techniques/.DS_Store","images/craps-money-techniques/craps-money-techniques-header.webp","images/craps-money-techniques/payment-place-bet-point-four_1280x720.webp","images/craps-money-techniques/payment-place-bet-point-four_640x360.webp","images/craps-money-techniques/payment-place-bet-point-four_960x540.webp","images/craps-money-techniques/place-bets-inside_1280x720.webp","images/craps-money-techniques/place-bets-inside_640x360.webp","images/craps-money-techniques/place-bets-inside_960x540.webp","images/craps-money-techniques/third-base-up-close-craps-table-layout_1280x720.webp","images/craps-money-techniques/third-base-up-close-craps-table-layout_640x360.webp","images/craps-money-techniques/third-base-up-close-craps-table-layout_960x540.webp","images/craps-myths/.DS_Store","images/craps-myths/buy-ten_1280x720.webp","images/craps-myths/buy-ten_640x360.webp","images/craps-myths/buy-ten_960x540.webp","images/craps-myths/craps-dice-on-puck_1280x720.webp","images/craps-myths/craps-dice-on-puck_640x360.webp","images/craps-myths/craps-dice-on-puck_960x540.webp","images/craps-myths/craps-myths-header.webp","images/craps-myths/overlay-point-six_1280x720.webp","images/craps-myths/overlay-point-six_640x360.webp","images/craps-myths/overlay-point-six_960x540.webp","images/craps-order-of-operation/.DS_Store","images/craps-order-of-operation/craps-order-of-operation-header.webp","images/craps-order-of-operation/pass-line-paid_1280x720.webp","images/craps-order-of-operation/pass-line-paid_640x360.webp","images/craps-order-of-operation/pass-line-paid_960x540.webp","images/craps-order-of-operation/second-base-up-close-pass-and-dont-pass-bets_1280x720.webp","images/craps-order-of-operation/second-base-up-close-pass-and-dont-pass-bets_640x360.webp","images/craps-order-of-operation/second-base-up-close-pass-and-dont-pass-bets_960x540.webp","images/craps-order-of-operation/third-base-hook-looking-at-craps-layout_1280x720.webp","images/craps-order-of-operation/third-base-hook-looking-at-craps-layout_640x360.webp","images/craps-order-of-operation/third-base-hook-looking-at-craps-layout_960x540.webp","images/craps-simulator/.DS_Store","images/craps-simulator/black_cheque.webp","images/craps-simulator/chips/.DS_Store","images/craps-simulator/chips/1000_chip_1.jpg","images/craps-simulator/chips/1000_chip_10.jpg","images/craps-simulator/chips/1000_chip_11.jpg","images/craps-simulator/chips/1000_chip_12.jpg","images/craps-simulator/chips/1000_chip_2.jpg","images/craps-simulator/chips/1000_chip_3.jpg","images/craps-simulator/chips/1000_chip_4.jpg","images/craps-simulator/chips/1000_chip_5.jpg","images/craps-simulator/chips/1000_chip_6.jpg","images/craps-simulator/chips/1000_chip_7.jpg","images/craps-simulator/chips/1000_chip_8.jpg","images/craps-simulator/chips/1000_chip_9.jpg","images/craps-simulator/chips/100_chip_1.jpg","images/craps-simulator/chips/100_chip_10.jpg","images/craps-simulator/chips/100_chip_11.jpg","images/craps-simulator/chips/100_chip_12.jpg","images/craps-simulator/chips/100_chip_2.jpg","images/craps-simulator/chips/100_chip_3.jpg","images/craps-simulator/chips/100_chip_4.jpg","images/craps-simulator/chips/100_chip_5.jpg","images/craps-simulator/chips/100_chip_6.jpg","images/craps-simulator/chips/100_chip_7.jpg","images/craps-simulator/chips/100_chip_8.jpg","images/craps-simulator/chips/100_chip_9.jpg","images/craps-simulator/chips/1_chip_1.jpg","images/craps-simulator/chips/1_chip_10.jpg","images/craps-simulator/chips/1_chip_11.jpg","images/craps-simulator/chips/1_chip_12.jpg","images/craps-simulator/chips/1_chip_2.jpg","images/craps-simulator/chips/1_chip_3.jpg","images/craps-simulator/chips/1_chip_4.jpg","images/craps-simulator/chips/1_chip_5.jpg","images/craps-simulator/chips/1_chip_6.jpg","images/craps-simulator/chips/1_chip_7.jpg","images/craps-simulator/chips/1_chip_8.jpg","images/craps-simulator/chips/1_chip_9.jpg","images/craps-simulator/chips/25_chip_1.jpg","images/craps-simulator/chips/25_chip_10.jpg","images/craps-simulator/chips/25_chip_11.jpg","images/craps-simulator/chips/25_chip_12.jpg","images/craps-simulator/chips/25_chip_2.jpg","images/craps-simulator/chips/25_chip_3.jpg","images/craps-simulator/chips/25_chip_4.jpg","images/craps-simulator/chips/25_chip_5.jpg","images/craps-simulator/chips/25_chip_6.jpg","images/craps-simulator/chips/25_chip_7.jpg","images/craps-simulator/chips/25_chip_8.jpg","images/craps-simulator/chips/25_chip_9.jpg","images/craps-simulator/chips/5000_chip_1.jpg","images/craps-simulator/chips/5000_chip_10.jpg","images/craps-simulator/chips/5000_chip_11.jpg","images/craps-simulator/chips/5000_chip_12.jpg","images/craps-simulator/chips/5000_chip_2.jpg","images/craps-simulator/chips/5000_chip_3.jpg","images/craps-simulator/chips/5000_chip_4.jpg","images/craps-simulator/chips/5000_chip_5.jpg","images/craps-simulator/chips/5000_chip_6.jpg","images/craps-simulator/chips/5000_chip_7.jpg","images/craps-simulator/chips/5000_chip_8.jpg","images/craps-simulator/chips/5000_chip_9.jpg","images/craps-simulator/chips/500_chip_1.jpg","images/craps-simulator/chips/500_chip_10.jpg","images/craps-simulator/chips/500_chip_11.jpg","images/craps-simulator/chips/500_chip_12.jpg","images/craps-simulator/chips/500_chip_2.jpg","images/craps-simulator/chips/500_chip_3.jpg","images/craps-simulator/chips/500_chip_4.jpg","images/craps-simulator/chips/500_chip_5.jpg","images/craps-simulator/chips/500_chip_6.jpg","images/craps-simulator/chips/500_chip_7.jpg","images/craps-simulator/chips/500_chip_8.jpg","images/craps-simulator/chips/500_chip_9.jpg","images/craps-simulator/chips/5_chip_1.jpg","images/craps-simulator/chips/5_chip_10.jpg","images/craps-simulator/chips/5_chip_11.jpg","images/craps-simulator/chips/5_chip_12.jpg","images/craps-simulator/chips/5_chip_2.jpg","images/craps-simulator/chips/5_chip_3.jpg","images/craps-simulator/chips/5_chip_4.jpg","images/craps-simulator/chips/5_chip_5.jpg","images/craps-simulator/chips/5_chip_6.jpg","images/craps-simulator/chips/5_chip_7.jpg","images/craps-simulator/chips/5_chip_8.jpg","images/craps-simulator/chips/5_chip_9.jpg","images/craps-simulator/craps-simulator-table-layout.webp","images/craps-simulator/dice/die_1.jpg","images/craps-simulator/dice/die_2.jpg","images/craps-simulator/dice/die_3.jpg","images/craps-simulator/dice/die_4.jpg","images/craps-simulator/dice/die_5.jpg","images/craps-simulator/dice/die_6.jpg","images/craps-simulator/dice/die_ne.png","images/craps-simulator/dice/die_sw.png","images/craps-simulator/empty_pass_line.webp","images/craps-simulator/green_cheque.webp","images/craps-simulator/orange_cheque.webp","images/craps-simulator/pass_line_bet.webp","images/craps-simulator/pass_line_bet_paid.webp","images/craps-simulator/puck_off.webp","images/craps-simulator/puck_off_1.webp","images/craps-simulator/puck_on.webp","images/craps-simulator/puck_point_10.webp","images/craps-simulator/puck_point_4.webp","images/craps-simulator/puck_point_5.webp","images/craps-simulator/puck_point_6.webp","images/craps-simulator/puck_point_8.webp","images/craps-simulator/puck_point_9.webp","images/craps-simulator/purple_cheque.webp","images/craps-simulator/red_cheque.webp","images/craps-simulator/red_cheque_2.webp","images/craps-simulator/settings-icon.png","images/craps-simulator/stickwoman.webp","images/craps-simulator/table_layout.webp","images/craps-simulator/white_cheque.webp","images/craps-superstitions/.DS_Store","images/craps-superstitions/any-seven_1280x720.webp","images/craps-superstitions/any-seven_640x360.webp","images/craps-superstitions/any-seven_960x540.webp","images/craps-superstitions/craps-superstitions-header.webp","images/craps-superstitions/hop-bets_1280x720.webp","images/craps-superstitions/hop-bets_640x360.webp","images/craps-superstitions/hop-bets_960x540.webp","images/craps-superstitions/third-base-overhead_1280x720.webp","images/craps-superstitions/third-base-overhead_640x360.webp","images/craps-superstitions/third-base-overhead_960x540.webp","images/dealing-with-new-craps-players/.DS_Store","images/dealing-with-new-craps-players/dealing-with-new-craps-players-header.webp","images/dealing-with-new-craps-players/pass-line-with-odds_1280x720.webp","images/dealing-with-new-craps-players/pass-line-with-odds_640x360.webp","images/dealing-with-new-craps-players/pass-line-with-odds_960x540.webp","images/dealing-with-new-craps-players/puck-off-in-dont-come_1280x720.webp","images/dealing-with-new-craps-players/puck-off-in-dont-come_640x360.webp","images/dealing-with-new-craps-players/puck-off-in-dont-come_960x540.webp","images/dealing-with-new-craps-players/two-green-craps-dice_1280x720.webp","images/dealing-with-new-craps-players/two-green-craps-dice_640x360.webp","images/dealing-with-new-craps-players/two-green-craps-dice_960x540.webp","images/dont-come/betting-a-dont-come-for-the-dealers.webp","images/dont-come/betting-a-dont-come-for-the-dealers_1280x720.webp","images/dont-come/betting-a-dont-come-for-the-dealers_320x180.webp","images/dont-come/betting-a-dont-come-for-the-dealers_640x360.webp","images/dont-come/betting-a-dont-come-for-the-dealers_960x540.webp","images/dont-come/dont-come-bets-are-always-working.webp","images/dont-come/dont-come-bets-are-always-working_1280x720.webp","images/dont-come/dont-come-bets-are-always-working_320x180.webp","images/dont-come/dont-come-bets-are-always-working_640x360.webp","images/dont-come/dont-come-bets-are-always-working_960x540.webp","images/dont-come/dont-come-bets-get-even-money-a.webp","images/dont-come/dont-come-bets-get-even-money-a_1280x720.webp","images/dont-come/dont-come-bets-get-even-money-a_320x180.webp","images/dont-come/dont-come-bets-get-even-money-a_640x360.webp","images/dont-come/dont-come-bets-get-even-money-a_960x540.webp","images/dont-come/dont-come-bets-get-even-money-b.webp","images/dont-come/dont-come-bets-get-even-money-b_1280x720.webp","images/dont-come/dont-come-bets-get-even-money-b_320x180.webp","images/dont-come/dont-come-bets-get-even-money-b_640x360.webp","images/dont-come/dont-come-bets-get-even-money-b_960x540.webp","images/dont-come/dont-come-header.jpg","images/dont-come/dont-come.webp","images/dont-come/dont-come_1280x720.webp","images/dont-come/dont-come_320x180.webp","images/dont-come/dont-come_640x360.webp","images/dont-come/dont-come_960x540.webp","images/dont-come/how-to-bet-a-dont-come.webp","images/dont-come/how-to-bet-a-dont-come_1280x720.webp","images/dont-come/how-to-bet-a-dont-come_320x180.webp","images/dont-come/how-to-bet-a-dont-come_640x360.webp","images/dont-come/how-to-bet-a-dont-come_960x540.webp","images/dont-come/no-action.webp","images/dont-come/no-action_1280x720.webp","images/dont-come/no-action_320x180.webp","images/dont-come/no-action_640x360.webp","images/dont-come/no-action_960x540.webp","images/dont-come/placement-of-a-dont-come-behind-a-point.webp","images/dont-come/placement-of-a-dont-come-behind-a-point_1280x720.webp","images/dont-come/placement-of-a-dont-come-behind-a-point_320x180.webp","images/dont-come/placement-of-a-dont-come-behind-a-point_640x360.webp","images/dont-come/placement-of-a-dont-come-behind-a-point_960x540.webp","images/dont-come/stage-one-of-a-dont-come.webp","images/dont-come/stage-one-of-a-dont-come_1280x720.webp","images/dont-come/stage-one-of-a-dont-come_320x180.webp","images/dont-come/stage-one-of-a-dont-come_640x360.webp","images/dont-come/stage-one-of-a-dont-come_960x540.webp","images/dont-come/stage-two-of-a-dont-come.webp","images/dont-come/stage-two-of-a-dont-come_1280x720.webp","images/dont-come/stage-two-of-a-dont-come_320x180.webp","images/dont-come/stage-two-of-a-dont-come_640x360.webp","images/dont-come/stage-two-of-a-dont-come_960x540.webp","images/dont-come-lay-odds/dont-come-lay-odds-4-10.webp","images/dont-come-lay-odds/dont-come-lay-odds-4-10_1280x720.webp","images/dont-come-lay-odds/dont-come-lay-odds-4-10_320x180.webp","images/dont-come-lay-odds/dont-come-lay-odds-4-10_640x360.webp","images/dont-come-lay-odds/dont-come-lay-odds-4-10_960x540.webp","images/dont-come-lay-odds/dont-come-lay-odds-5-9.webp","images/dont-come-lay-odds/dont-come-lay-odds-5-9_1280x720.webp","images/dont-come-lay-odds/dont-come-lay-odds-5-9_320x180.webp","images/dont-come-lay-odds/dont-come-lay-odds-5-9_640x360.webp","images/dont-come-lay-odds/dont-come-lay-odds-5-9_960x540.webp","images/dont-come-lay-odds/dont-come-lay-odds-6-8.webp","images/dont-come-lay-odds/dont-come-lay-odds-6-8_1280x720.webp","images/dont-come-lay-odds/dont-come-lay-odds-6-8_320x180.webp","images/dont-come-lay-odds/dont-come-lay-odds-6-8_640x360.webp","images/dont-come-lay-odds/dont-come-lay-odds-6-8_960x540.webp","images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers.webp","images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_1280x720.webp","images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_320x180.webp","images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_640x360.webp","images/dont-come-lay-odds/dont-come-lay-odds-for-the-dealers_960x540.webp","images/dont-come-lay-odds/dont-come-lay-odds-header.jpg","images/dont-come-lay-odds/dont-come-lay-odds.webp","images/dont-come-lay-odds/dont-come-lay-odds_1280x720.webp","images/dont-come-lay-odds/dont-come-lay-odds_320x180.webp","images/dont-come-lay-odds/dont-come-lay-odds_640x360.webp","images/dont-come-lay-odds/dont-come-lay-odds_960x540.webp","images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds.webp","images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_1280x720.webp","images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_320x180.webp","images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_640x360.webp","images/dont-come-lay-odds/how-to-bet-dont-come-lay-odds_960x540.webp","images/dont-come-lay-odds/max-lay-odds-for-the-dont-come.webp","images/dont-come-lay-odds/max-lay-odds-for-the-dont-come_1280x720.webp","images/dont-come-lay-odds/max-lay-odds-for-the-dont-come_320x180.webp","images/dont-come-lay-odds/max-lay-odds-for-the-dont-come_640x360.webp","images/dont-come-lay-odds/max-lay-odds-for-the-dont-come_960x540.webp","images/dont-come-lay-odds/placement-of-dont-come-lay-odds.webp","images/dont-come-lay-odds/placement-of-dont-come-lay-odds_1280x720.webp","images/dont-come-lay-odds/placement-of-dont-come-lay-odds_320x180.webp","images/dont-come-lay-odds/placement-of-dont-come-lay-odds_640x360.webp","images/dont-come-lay-odds/placement-of-dont-come-lay-odds_960x540.webp","images/dont-pass/dealer-dont-pass.webp","images/dont-pass/dealer-dont-pass_1280x720.webp","images/dont-pass/dealer-dont-pass_320x180.webp","images/dont-pass/dealer-dont-pass_640x360.webp","images/dont-pass/dealer-dont-pass_960x540.webp","images/dont-pass/dont-pass-header.jpg","images/dont-pass/dont-pass-stage-one.webp","images/dont-pass/dont-pass-stage-one_1280x720.webp","images/dont-pass/dont-pass-stage-one_320x180.webp","images/dont-pass/dont-pass-stage-one_640x360.webp","images/dont-pass/dont-pass-stage-one_960x540.webp","images/dont-pass/dont-pass-stage-two.webp","images/dont-pass/dont-pass-stage-two_1280x720.webp","images/dont-pass/dont-pass-stage-two_320x180.webp","images/dont-pass/dont-pass-stage-two_640x360.webp","images/dont-pass/dont-pass-stage-two_960x540.webp","images/dont-pass/dont-pass-wins-even-money-a.webp","images/dont-pass/dont-pass-wins-even-money-a_1280x720.webp","images/dont-pass/dont-pass-wins-even-money-a_320x180.webp","images/dont-pass/dont-pass-wins-even-money-a_640x360.webp","images/dont-pass/dont-pass-wins-even-money-a_960x540.webp","images/dont-pass/dont-pass-wins-even-money-b.webp","images/dont-pass/dont-pass-wins-even-money-b_1280x720.webp","images/dont-pass/dont-pass-wins-even-money-b_320x180.webp","images/dont-pass/dont-pass-wins-even-money-b_640x360.webp","images/dont-pass/dont-pass-wins-even-money-b_960x540.webp","images/dont-pass/dont-pass.webp","images/dont-pass/dont-pass_1280x720.webp","images/dont-pass/dont-pass_320x180.webp","images/dont-pass/dont-pass_640x360.webp","images/dont-pass/dont-pass_960x540.webp","images/dont-pass/how-to-bet-the-dont-pass.webp","images/dont-pass/how-to-bet-the-dont-pass_1280x720.webp","images/dont-pass/how-to-bet-the-dont-pass_320x180.webp","images/dont-pass/how-to-bet-the-dont-pass_640x360.webp","images/dont-pass/how-to-bet-the-dont-pass_960x540.webp","images/dont-pass-lay-odds/dont-pass-lay-odds-header.jpg","images/dont-pass-lay-odds/dont-pass-lay-odds.webp","images/dont-pass-lay-odds/dont-pass-lay-odds_1280x720.webp","images/dont-pass-lay-odds/dont-pass-lay-odds_320x180.webp","images/dont-pass-lay-odds/dont-pass-lay-odds_640x360.webp","images/dont-pass-lay-odds/dont-pass-lay-odds_960x540.webp","images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds.webp","images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_1280x720.webp","images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_320x180.webp","images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_640x360.webp","images/dont-pass-lay-odds/how-to-bet-dont-pass-lay-odds_960x540.webp","images/dont-pass-lay-odds/lay-odds-4-10-a.webp","images/dont-pass-lay-odds/lay-odds-4-10-a_1280x720.webp","images/dont-pass-lay-odds/lay-odds-4-10-a_320x180.webp","images/dont-pass-lay-odds/lay-odds-4-10-a_640x360.webp","images/dont-pass-lay-odds/lay-odds-4-10-a_960x540.webp","images/dont-pass-lay-odds/lay-odds-4-10-b.webp","images/dont-pass-lay-odds/lay-odds-4-10-b_1280x720.webp","images/dont-pass-lay-odds/lay-odds-4-10-b_320x180.webp","images/dont-pass-lay-odds/lay-odds-4-10-b_640x360.webp","images/dont-pass-lay-odds/lay-odds-4-10-b_960x540.webp","images/dont-pass-lay-odds/lay-odds-5-9-a.webp","images/dont-pass-lay-odds/lay-odds-5-9-a_1280x720.webp","images/dont-pass-lay-odds/lay-odds-5-9-a_320x180.webp","images/dont-pass-lay-odds/lay-odds-5-9-a_640x360.webp","images/dont-pass-lay-odds/lay-odds-5-9-a_960x540.webp","images/dont-pass-lay-odds/lay-odds-5-9-b.webp","images/dont-pass-lay-odds/lay-odds-5-9-b_1280x720.webp","images/dont-pass-lay-odds/lay-odds-5-9-b_320x180.webp","images/dont-pass-lay-odds/lay-odds-5-9-b_640x360.webp","images/dont-pass-lay-odds/lay-odds-5-9-b_960x540.webp","images/dont-pass-lay-odds/lay-odds-6-8-a.webp","images/dont-pass-lay-odds/lay-odds-6-8-a_1280x720.webp","images/dont-pass-lay-odds/lay-odds-6-8-a_320x180.webp","images/dont-pass-lay-odds/lay-odds-6-8-a_640x360.webp","images/dont-pass-lay-odds/lay-odds-6-8-a_960x540.webp","images/dont-pass-lay-odds/lay-odds-6-8-b.webp","images/dont-pass-lay-odds/lay-odds-6-8-b_1280x720.webp","images/dont-pass-lay-odds/lay-odds-6-8-b_320x180.webp","images/dont-pass-lay-odds/lay-odds-6-8-b_640x360.webp","images/dont-pass-lay-odds/lay-odds-6-8-b_960x540.webp","images/dont-pass-lay-odds/lay-odds-for-the-dealers.webp","images/dont-pass-lay-odds/lay-odds-for-the-dealers_1280x720.webp","images/dont-pass-lay-odds/lay-odds-for-the-dealers_320x180.webp","images/dont-pass-lay-odds/lay-odds-for-the-dealers_640x360.webp","images/dont-pass-lay-odds/lay-odds-for-the-dealers_960x540.webp","images/dont-pass-lay-odds/max-lay-odds-on-the-dont-pass.webp","images/dont-pass-lay-odds/max-lay-odds-on-the-dont-pass_1280x720.webp","images/dont-pass-lay-odds/max-lay-odds-on-the-dont-pass_320x180.webp","images/dont-pass-lay-odds/max-lay-odds-on-the-dont-pass_640x360.webp","images/dont-pass-lay-odds/max-lay-odds-on-the-dont-pass_960x540.webp","images/even-numbers/.DS_Store","images/even-numbers/112-even-numbers_1280x720.webp","images/even-numbers/112-even-numbers_640x360.webp","images/even-numbers/112-even-numbers_960x540.webp","images/even-numbers/32-even-numbers_1280x720.webp","images/even-numbers/32-even-numbers_640x360.webp","images/even-numbers/32-even-numbers_960x540.webp","images/even-numbers/34-even-numbers_1280x720.webp","images/even-numbers/34-even-numbers_640x360.webp","images/even-numbers/34-even-numbers_960x540.webp","images/even-numbers/44-even-numbers_1280x720.webp","images/even-numbers/44-even-numbers_640x360.webp","images/even-numbers/44-even-numbers_960x540.webp","images/even-numbers/82-even-numbers_1280x720.webp","images/even-numbers/82-even-numbers_640x360.webp","images/even-numbers/82-even-numbers_960x540.webp","images/even-numbers/86-even-numbers_1280x720.webp","images/even-numbers/86-even-numbers_640x360.webp","images/even-numbers/86-even-numbers_960x540.webp","images/even-numbers/even-numbers-header.webp","images/even-numbers/even-numbers_1280x720.webp","images/even-numbers/even-numbers_640x360.webp","images/even-numbers/even-numbers_960x540.webp","images/faq/faq-header.jpg","images/first-time-craps-player/.DS_Store","images/first-time-craps-player/empty-come-bet-area_1280x720.webp","images/first-time-craps-player/empty-come-bet-area_640x360.webp","images/first-time-craps-player/empty-come-bet-area_960x540.webp","images/first-time-craps-player/first-time-craps-player-header.webp","images/first-time-craps-player/pass-line-w-dice_1280x720.webp","images/first-time-craps-player/pass-line-w-dice_640x360.webp","images/first-time-craps-player/pass-line-w-dice_960x540.webp","images/first-time-craps-player/world-proposition-bet_1280x720.webp","images/first-time-craps-player/world-proposition-bet_640x360.webp","images/first-time-craps-player/world-proposition-bet_960x540.webp","images/glossary/glossary-header.jpg","images/home-page/.DS_Store","images/home-page/craps-blog_1280x720.webp","images/home-page/craps-blog_640x360.webp","images/home-page/craps-blog_960x540.webp","images/home-page/craps-calculators.webp","images/home-page/craps-calculators_1280x720.webp","images/home-page/craps-calculators_320x180.webp","images/home-page/craps-calculators_640x360.webp","images/home-page/craps-calculators_960x540.webp","images/home-page/craps-table-layout-mobile.jpg","images/home-page/craps-table-layout-mobile_600x316.webp","images/home-page/craps-table-layout.jpg","images/home-page/green-table-layout-up-close_2800x705.webp","images/home-page/htpc-cover_612x792.webp","images/home-page/learn-craps.webp","images/home-page/learn-craps_1280x720.webp","images/home-page/learn-craps_320x180.webp","images/home-page/learn-craps_640x360.webp","images/home-page/learn-craps_960x540.webp","images/home-page/play-craps.webp","images/home-page/play-craps_1280x720.webp","images/home-page/play-craps_320x180.webp","images/home-page/play-craps_640x360.webp","images/home-page/play-craps_960x540.webp","images/home-page/practice-craps.webp","images/home-page/practice-craps_1280x720.webp","images/home-page/practice-craps_320x180.webp","images/home-page/practice-craps_640x360.webp","images/home-page/practice-craps_960x540.webp","images/hop-bets/2-number-hops.webp","images/hop-bets/2-number-hops_1280x720.webp","images/hop-bets/2-number-hops_320x180.webp","images/hop-bets/2-number-hops_640x360.webp","images/hop-bets/2-number-hops_960x540.webp","images/hop-bets/3-number-hops.webp","images/hop-bets/3-number-hops_1280x720.webp","images/hop-bets/3-number-hops_320x180.webp","images/hop-bets/3-number-hops_640x360.webp","images/hop-bets/3-number-hops_960x540.webp","images/hop-bets/4-number-hops.webp","images/hop-bets/4-number-hops_1280x720.webp","images/hop-bets/4-number-hops_320x180.webp","images/hop-bets/4-number-hops_640x360.webp","images/hop-bets/4-number-hops_960x540.webp","images/hop-bets/dealer-hop-bet.webp","images/hop-bets/dealer-hop-bet_1280x720.webp","images/hop-bets/dealer-hop-bet_320x180.webp","images/hop-bets/dealer-hop-bet_640x360.webp","images/hop-bets/dealer-hop-bet_960x540.webp","images/hop-bets/high-side-hop-payment.webp","images/hop-bets/high-side-hop-payment_1280x720.webp","images/hop-bets/high-side-hop-payment_320x180.webp","images/hop-bets/high-side-hop-payment_640x360.webp","images/hop-bets/high-side-hop-payment_960x540.webp","images/hop-bets/hop-bets-header.jpg","images/hop-bets/hop-bets.webp","images/hop-bets/hop-bets_1280x720.webp","images/hop-bets/hop-bets_320x180.webp","images/hop-bets/hop-bets_640x360.webp","images/hop-bets/hop-bets_960x540.webp","images/hop-bets/low-side-hop-payment.webp","images/hop-bets/low-side-hop-payment_1280x720.webp","images/hop-bets/low-side-hop-payment_320x180.webp","images/hop-bets/low-side-hop-payment_640x360.webp","images/hop-bets/low-side-hop-payment_960x540.webp","images/hop-bets/placement-of-hops.webp","images/hop-bets/placement-of-hops_1280x720.webp","images/hop-bets/placement-of-hops_320x180.webp","images/hop-bets/placement-of-hops_640x360.webp","images/hop-bets/placement-of-hops_960x540.webp","images/horn/24-horn-high-side-a.webp","images/horn/24-horn-high-side-a_1280x720.webp","images/horn/24-horn-high-side-a_320x180.webp","images/horn/24-horn-high-side-a_640x360.webp","images/horn/24-horn-high-side-a_960x540.webp","images/horn/24-horn-low-side.webp","images/horn/24-horn-low-side_1280x720.webp","images/horn/24-horn-low-side_320x180.webp","images/horn/24-horn-low-side_640x360.webp","images/horn/24-horn-low-side_960x540.webp","images/horn/4-horn.webp","images/horn/4-horn_1280x720.webp","images/horn/4-horn_320x180.webp","images/horn/4-horn_640x360.webp","images/horn/4-horn_960x540.webp","images/horn/4-winner-high-side.webp","images/horn/4-winner-high-side_1280x720.webp","images/horn/4-winner-high-side_320x180.webp","images/horn/4-winner-high-side_640x360.webp","images/horn/4-winner-high-side_960x540.webp","images/horn/4-winner-low-side.webp","images/horn/4-winner-low-side_1280x720.webp","images/horn/4-winner-low-side_320x180.webp","images/horn/4-winner-low-side_640x360.webp","images/horn/4-winner-low-side_960x540.webp","images/horn/8-horn-high-side-a.webp","images/horn/8-horn-high-side-a_1280x720.webp","images/horn/8-horn-high-side-a_320x180.webp","images/horn/8-horn-high-side-a_640x360.webp","images/horn/8-horn-high-side-a_960x540.webp","images/horn/8-horn-low-side.webp","images/horn/8-horn-low-side_1280x720.webp","images/horn/8-horn-low-side_320x180.webp","images/horn/8-horn-low-side_640x360.webp","images/horn/8-horn-low-side_960x540.webp","images/horn/betting-a-horn-for-the-dealers.webp","images/horn/betting-a-horn-for-the-dealers_1280x720.webp","images/horn/betting-a-horn-for-the-dealers_320x180.webp","images/horn/betting-a-horn-for-the-dealers_640x360.webp","images/horn/betting-a-horn-for-the-dealers_960x540.webp","images/horn/horn-header.jpg","images/horn/horn.webp","images/horn/horn_1280x720.webp","images/horn/horn_320x180.webp","images/horn/horn_640x360.webp","images/horn/horn_960x540.webp","images/horn/placement-of-a-horn.webp","images/horn/placement-of-a-horn_1280x720.webp","images/horn/placement-of-a-horn_320x180.webp","images/horn/placement-of-a-horn_640x360.webp","images/horn/placement-of-a-horn_960x540.webp","images/horn-high/5-dealer-horn-high.webp","images/horn-high/5-dealer-horn-high_1280x720.webp","images/horn-high/5-dealer-horn-high_320x180.webp","images/horn-high/5-dealer-horn-high_640x360.webp","images/horn-high/5-dealer-horn-high_960x540.webp","images/horn-high/5-hh-ace-deuce-direct.webp","images/horn-high/5-hh-ace-deuce-direct_1280x720.webp","images/horn-high/5-hh-ace-deuce-direct_320x180.webp","images/horn-high/5-hh-ace-deuce-direct_640x360.webp","images/horn-high/5-hh-ace-deuce-direct_960x540.webp","images/horn-high/5-hh-ace-deuce-high-side.webp","images/horn-high/5-hh-ace-deuce-high-side_1280x720.webp","images/horn-high/5-hh-ace-deuce-high-side_320x180.webp","images/horn-high/5-hh-ace-deuce-high-side_640x360.webp","images/horn-high/5-hh-ace-deuce-high-side_960x540.webp","images/horn-high/5-hh-ace-deuce-opp-low.webp","images/horn-high/5-hh-ace-deuce-opp-low_1280x720.webp","images/horn-high/5-hh-ace-deuce-opp-low_320x180.webp","images/horn-high/5-hh-ace-deuce-opp-low_640x360.webp","images/horn-high/5-hh-ace-deuce-opp-low_960x540.webp","images/horn-high/5-hh-aces-direct.webp","images/horn-high/5-hh-aces-direct_1280x720.webp","images/horn-high/5-hh-aces-direct_320x180.webp","images/horn-high/5-hh-aces-direct_640x360.webp","images/horn-high/5-hh-aces-direct_960x540.webp","images/horn-high/5-hh-aces-low-side.webp","images/horn-high/5-hh-aces-low-side_1280x720.webp","images/horn-high/5-hh-aces-low-side_320x180.webp","images/horn-high/5-hh-aces-low-side_640x360.webp","images/horn-high/5-hh-aces-low-side_960x540.webp","images/horn-high/5-hh-aces-opp-high.webp","images/horn-high/5-hh-aces-opp-high_1280x720.webp","images/horn-high/5-hh-aces-opp-high_320x180.webp","images/horn-high/5-hh-aces-opp-high_640x360.webp","images/horn-high/5-hh-aces-opp-high_960x540.webp","images/horn-high/5-hh-twelve-direct.webp","images/horn-high/5-hh-twelve-direct_1280x720.webp","images/horn-high/5-hh-twelve-direct_320x180.webp","images/horn-high/5-hh-twelve-direct_640x360.webp","images/horn-high/5-hh-twelve-direct_960x540.webp","images/horn-high/5-hh-twelve-low-side.webp","images/horn-high/5-hh-twelve-low-side_1280x720.webp","images/horn-high/5-hh-twelve-low-side_320x180.webp","images/horn-high/5-hh-twelve-low-side_640x360.webp","images/horn-high/5-hh-twelve-low-side_960x540.webp","images/horn-high/5-hh-twelve-opp-high.webp","images/horn-high/5-hh-twelve-opp-high_1280x720.webp","images/horn-high/5-hh-twelve-opp-high_320x180.webp","images/horn-high/5-hh-twelve-opp-high_640x360.webp","images/horn-high/5-hh-twelve-opp-high_960x540.webp","images/horn-high/5-hh-yo-direct.webp","images/horn-high/5-hh-yo-direct_1280x720.webp","images/horn-high/5-hh-yo-direct_320x180.webp","images/horn-high/5-hh-yo-direct_640x360.webp","images/horn-high/5-hh-yo-direct_960x540.webp","images/horn-high/5-hh-yo-high-side.webp","images/horn-high/5-hh-yo-high-side_1280x720.webp","images/horn-high/5-hh-yo-high-side_320x180.webp","images/horn-high/5-hh-yo-high-side_640x360.webp","images/horn-high/5-hh-yo-high-side_960x540.webp","images/horn-high/5-hh-yo-opp-low.webp","images/horn-high/5-hh-yo-opp-low_1280x720.webp","images/horn-high/5-hh-yo-opp-low_320x180.webp","images/horn-high/5-hh-yo-opp-low_640x360.webp","images/horn-high/5-hh-yo-opp-low_960x540.webp","images/horn-high/5-horn-high-ace-deuce-1.webp","images/horn-high/5-horn-high-ace-deuce-1_1280x720.webp","images/horn-high/5-horn-high-ace-deuce-1_320x180.webp","images/horn-high/5-horn-high-ace-deuce-1_640x360.webp","images/horn-high/5-horn-high-ace-deuce-1_960x540.webp","images/horn-high/5-horn-high-ace-deuce-2.webp","images/horn-high/5-horn-high-ace-deuce-2_1280x720.webp","images/horn-high/5-horn-high-ace-deuce-2_320x180.webp","images/horn-high/5-horn-high-ace-deuce-2_640x360.webp","images/horn-high/5-horn-high-ace-deuce-2_960x540.webp","images/horn-high/5-horn-high-aces-1.webp","images/horn-high/5-horn-high-aces-1_1280x720.webp","images/horn-high/5-horn-high-aces-1_320x180.webp","images/horn-high/5-horn-high-aces-1_640x360.webp","images/horn-high/5-horn-high-aces-1_960x540.webp","images/horn-high/5-horn-high-aces-2.webp","images/horn-high/5-horn-high-aces-2_1280x720.webp","images/horn-high/5-horn-high-aces-2_320x180.webp","images/horn-high/5-horn-high-aces-2_640x360.webp","images/horn-high/5-horn-high-aces-2_960x540.webp","images/horn-high/5-horn-high-twelve-1.webp","images/horn-high/5-horn-high-twelve-1_1280x720.webp","images/horn-high/5-horn-high-twelve-1_320x180.webp","images/horn-high/5-horn-high-twelve-1_640x360.webp","images/horn-high/5-horn-high-twelve-1_960x540.webp","images/horn-high/5-horn-high-twelve-2.webp","images/horn-high/5-horn-high-twelve-2_1280x720.webp","images/horn-high/5-horn-high-twelve-2_320x180.webp","images/horn-high/5-horn-high-twelve-2_640x360.webp","images/horn-high/5-horn-high-twelve-2_960x540.webp","images/horn-high/5-horn-high-yo-1.webp","images/horn-high/5-horn-high-yo-1_1280x720.webp","images/horn-high/5-horn-high-yo-1_320x180.webp","images/horn-high/5-horn-high-yo-1_640x360.webp","images/horn-high/5-horn-high-yo-1_960x540.webp","images/horn-high/5-horn-high-yo-2.webp","images/horn-high/5-horn-high-yo-2_1280x720.webp","images/horn-high/5-horn-high-yo-2_320x180.webp","images/horn-high/5-horn-high-yo-2_640x360.webp","images/horn-high/5-horn-high-yo-2_960x540.webp","images/horn-high/horn-high-header.jpg","images/horn-high/horn-high.webp","images/horn-high/horn-high_1280x720.webp","images/horn-high/horn-high_320x180.webp","images/horn-high/horn-high_640x360.webp","images/horn-high/horn-high_960x540.webp","images/horn-high/placement-of-a-horn-high.webp","images/horn-high/placement-of-a-horn-high_1280x720.webp","images/horn-high/placement-of-a-horn-high_320x180.webp","images/horn-high/placement-of-a-horn-high_640x360.webp","images/horn-high/placement-of-a-horn-high_960x540.webp","images/icons/.DS_Store","images/icons/arrow-forward.svg","images/icons/arrow-right.svg","images/icons/bookmark_add_black.svg","images/icons/bookmark_black.svg","images/icons/bookmark_border_black.svg","images/icons/bookmarks_black.svg","images/icons/bullseye-black-icon.png","images/icons/bullseye-white-icon.png","images/icons/bullseye.svg","images/icons/calculator-black-icon.png","images/icons/calculator-white-icon.png","images/icons/calculator.svg","images/icons/check-black.svg","images/icons/chevron-right-black.svg","images/icons/close.svg","images/icons/collections_bookmark_black.svg","images/icons/controller-black-icon.png","images/icons/controller-white-icon.png","images/icons/controller.svg","images/icons/dice-5b.svg","images/icons/die-1.svg","images/icons/die-2.svg","images/icons/die-3.svg","images/icons/die-4.svg","images/icons/die-5.svg","images/icons/die-6.svg","images/icons/feed.svg","images/icons/glossary-black-icon.png","images/icons/glossary-white-icon.png","images/icons/grad-hat-black-icon.png","images/icons/grad-hat-white-icon.png","images/icons/grad-hat.svg","images/icons/hand.svg","images/icons/home.svg","images/icons/icons.psd","images/icons/last-page.svg","images/icons/library.svg","images/icons/more-black-icon.png","images/icons/more-white-icon.png","images/icons/more.svg","images/icons/paper-black-icon.png","images/icons/paper-white-icon.png","images/icons/plus-sign.svg","images/icons/q-and-a.svg","images/icons/question-black-icon.png","images/icons/question-white-icon.png","images/icons/start.svg","images/icons/visibility_black.svg","images/icons/visibility_off_black.svg","images/including-the-point/162-across-including-the-point.webp","images/including-the-point/162-across-including-the-point_1280x720.webp","images/including-the-point/162-across-including-the-point_320x180.webp","images/including-the-point/162-across-including-the-point_640x360.webp","images/including-the-point/162-across-including-the-point_960x540.webp","images/including-the-point/32-across-including-the-point.webp","images/including-the-point/32-across-including-the-point_1280x720.webp","images/including-the-point/32-across-including-the-point_320x180.webp","images/including-the-point/32-across-including-the-point_640x360.webp","images/including-the-point/32-across-including-the-point_960x540.webp","images/including-the-point/including-the-point-header.jpg","images/inside/32-inside.webp","images/inside/32-inside_1280x720.webp","images/inside/32-inside_320x180.webp","images/inside/32-inside_640x360.webp","images/inside/32-inside_960x540.webp","images/inside/34-inside.webp","images/inside/34-inside_1280x720.webp","images/inside/34-inside_320x180.webp","images/inside/34-inside_640x360.webp","images/inside/34-inside_960x540.webp","images/inside/44-inside.webp","images/inside/44-inside_1280x720.webp","images/inside/44-inside_320x180.webp","images/inside/44-inside_640x360.webp","images/inside/44-inside_960x540.webp","images/inside/inside-header.jpg","images/inside/inside.webp","images/inside/inside_1280x720.webp","images/inside/inside_320x180.webp","images/inside/inside_640x360.webp","images/inside/inside_960x540.webp","images/leaving-the-craps-table/.DS_Store","images/leaving-the-craps-table/craps-dice-on-place-bet_1280x720.webp","images/leaving-the-craps-table/craps-dice-on-place-bet_640x360.webp","images/leaving-the-craps-table/craps-dice-on-place-bet_960x540.webp","images/leaving-the-craps-table/leaving-the-craps-table-header.webp","images/leaving-the-craps-table/pass-line-with-odds-paid_1280x720.webp","images/leaving-the-craps-table/pass-line-with-odds-paid_640x360.webp","images/leaving-the-craps-table/pass-line-with-odds-paid_960x540.webp","images/leaving-the-craps-table/third-base-next-to-stick-looking-at-craps-layout_1280x720.webp","images/leaving-the-craps-table/third-base-next-to-stick-looking-at-craps-layout_640x360.webp","images/leaving-the-craps-table/third-base-next-to-stick-looking-at-craps-layout_960x540.webp","images/lure-of-craps-proposition-bets/.DS_Store","images/lure-of-craps-proposition-bets/center-proposition-bet-area_1280x720.webp","images/lure-of-craps-proposition-bets/center-proposition-bet-area_640x360.webp","images/lure-of-craps-proposition-bets/center-proposition-bet-area_960x540.webp","images/lure-of-craps-proposition-bets/lure-of-craps-proposition-bets-header.webp","images/lure-of-craps-proposition-bets/multi-bets_1280x720.webp","images/lure-of-craps-proposition-bets/multi-bets_640x360.webp","images/lure-of-craps-proposition-bets/multi-bets_960x540.webp","images/lure-of-craps-proposition-bets/third-base-next-to-stick_1280x720.webp","images/lure-of-craps-proposition-bets/third-base-next-to-stick_640x360.webp","images/lure-of-craps-proposition-bets/third-base-next-to-stick_960x540.webp","images/managing-your-craps-bankroll/.DS_Store","images/managing-your-craps-bankroll/horn-bet-separated_1280x720.webp","images/managing-your-craps-bankroll/horn-bet-separated_640x360.webp","images/managing-your-craps-bankroll/horn-bet-separated_960x540.webp","images/managing-your-craps-bankroll/managing-your-craps-bankroll-header.webp","images/managing-your-craps-bankroll/pass-line-paid-quarters_1280x720.webp","images/managing-your-craps-bankroll/pass-line-paid-quarters_640x360.webp","images/managing-your-craps-bankroll/pass-line-paid-quarters_960x540.webp","images/managing-your-craps-bankroll/second-base-hook-looking-at-craps-table-layout_1280x720.webp","images/managing-your-craps-bankroll/second-base-hook-looking-at-craps-table-layout_640x360.webp","images/managing-your-craps-bankroll/second-base-hook-looking-at-craps-table-layout_960x540.webp","images/max-odds/3x-on-4-10.webp","images/max-odds/3x-on-4-10_1280x720.webp","images/max-odds/3x-on-4-10_320x180.webp","images/max-odds/3x-on-4-10_640x360.webp","images/max-odds/3x-on-4-10_960x540.webp","images/max-odds/4x-on-5-9.webp","images/max-odds/4x-on-5-9_1280x720.webp","images/max-odds/4x-on-5-9_320x180.webp","images/max-odds/4x-on-5-9_640x360.webp","images/max-odds/4x-on-5-9_960x540.webp","images/max-odds/5x-on-6-8.webp","images/max-odds/5x-on-6-8_1280x720.webp","images/max-odds/5x-on-6-8_320x180.webp","images/max-odds/5x-on-6-8_640x360.webp","images/max-odds/5x-on-6-8_960x540.webp","images/max-odds/double-odds.webp","images/max-odds/double-odds_1280x720.webp","images/max-odds/double-odds_320x180.webp","images/max-odds/double-odds_640x360.webp","images/max-odds/double-odds_960x540.webp","images/max-odds/five-times-max-odds.webp","images/max-odds/five-times-max-odds_1280x720.webp","images/max-odds/five-times-max-odds_320x180.webp","images/max-odds/five-times-max-odds_640x360.webp","images/max-odds/five-times-max-odds_960x540.webp","images/max-odds/max-odds-header.jpg","images/max-odds/max-odds-on-the-pass-line.webp","images/max-odds/max-odds-on-the-pass-line_1280x720.webp","images/max-odds/max-odds-on-the-pass-line_320x180.webp","images/max-odds/max-odds-on-the-pass-line_640x360.webp","images/max-odds/max-odds-on-the-pass-line_960x540.webp","images/max-odds/one-hundred-times-max-odds.webp","images/max-odds/one-hundred-times-max-odds_1280x720.webp","images/max-odds/one-hundred-times-max-odds_320x180.webp","images/max-odds/one-hundred-times-max-odds_640x360.webp","images/max-odds/one-hundred-times-max-odds_960x540.webp","images/max-odds/single-odds.webp","images/max-odds/single-odds_1280x720.webp","images/max-odds/single-odds_320x180.webp","images/max-odds/single-odds_640x360.webp","images/max-odds/single-odds_960x540.webp","images/max-odds/ten-times-max-odds.webp","images/max-odds/ten-times-max-odds_1280x720.webp","images/max-odds/ten-times-max-odds_320x180.webp","images/max-odds/ten-times-max-odds_640x360.webp","images/max-odds/ten-times-max-odds_960x540.webp","images/multi-bets/aces-ace-deuce.webp","images/multi-bets/aces-ace-deuce_1280x720.webp","images/multi-bets/aces-ace-deuce_320x180.webp","images/multi-bets/aces-ace-deuce_640x360.webp","images/multi-bets/aces-ace-deuce_960x540.webp","images/multi-bets/eleven-twelve.webp","images/multi-bets/eleven-twelve_1280x720.webp","images/multi-bets/eleven-twelve_320x180.webp","images/multi-bets/eleven-twelve_640x360.webp","images/multi-bets/eleven-twelve_960x540.webp","images/multi-bets/high-low-yo.webp","images/multi-bets/high-low-yo_1280x720.webp","images/multi-bets/high-low-yo_320x180.webp","images/multi-bets/high-low-yo_640x360.webp","images/multi-bets/high-low-yo_960x540.webp","images/multi-bets/high-low.webp","images/multi-bets/high-low_1280x720.webp","images/multi-bets/high-low_320x180.webp","images/multi-bets/high-low_640x360.webp","images/multi-bets/high-low_960x540.webp","images/multi-bets/multi-bets-header.jpg","images/multi-bets/multi-bets.webp","images/multi-bets/multi-bets_1280x720.webp","images/multi-bets/multi-bets_320x180.webp","images/multi-bets/multi-bets_640x360.webp","images/multi-bets/multi-bets_960x540.webp","images/multi-bets/seven-eleven.webp","images/multi-bets/seven-eleven_1280x720.webp","images/multi-bets/seven-eleven_320x180.webp","images/multi-bets/seven-eleven_640x360.webp","images/multi-bets/seven-eleven_960x540.webp","images/multi-bets/three-way-craps.webp","images/multi-bets/three-way-craps_1280x720.webp","images/multi-bets/three-way-craps_320x180.webp","images/multi-bets/three-way-craps_640x360.webp","images/multi-bets/three-way-craps_960x540.webp","images/not-to-do-at-craps-table/.DS_Store","images/not-to-do-at-craps-table/craps-dice-in-bank_1280x720.webp","images/not-to-do-at-craps-table/craps-dice-in-bank_640x360.webp","images/not-to-do-at-craps-table/craps-dice-in-bank_960x540.webp","images/not-to-do-at-craps-table/not-to-do-at-craps-table-header.webp","images/not-to-do-at-craps-table/place-bet-on-nine_1280x720.webp","images/not-to-do-at-craps-table/place-bet-on-nine_640x360.webp","images/not-to-do-at-craps-table/place-bet-on-nine_960x540.webp","images/not-to-do-at-craps-table/third-base-next-to-base-looking-at-craps-layout_1280x720.webp","images/not-to-do-at-craps-table/third-base-next-to-base-looking-at-craps-layout_640x360.webp","images/not-to-do-at-craps-table/third-base-next-to-base-looking-at-craps-layout_960x540.webp","images/outside/102-outside.webp","images/outside/102-outside_1280x720.webp","images/outside/102-outside_320x180.webp","images/outside/102-outside_640x360.webp","images/outside/102-outside_960x540.webp","images/outside/45-outside.webp","images/outside/45-outside_1280x720.webp","images/outside/45-outside_320x180.webp","images/outside/45-outside_640x360.webp","images/outside/45-outside_960x540.webp","images/outside/60-outside.webp","images/outside/60-outside_1280x720.webp","images/outside/60-outside_320x180.webp","images/outside/60-outside_640x360.webp","images/outside/60-outside_960x540.webp","images/outside/76-outside.webp","images/outside/76-outside_1280x720.webp","images/outside/76-outside_320x180.webp","images/outside/76-outside_640x360.webp","images/outside/76-outside_960x540.webp","images/outside/77-outside.webp","images/outside/77-outside_1280x720.webp","images/outside/77-outside_320x180.webp","images/outside/77-outside_640x360.webp","images/outside/77-outside_960x540.webp","images/outside/outside-header.jpg","images/outside/outside.webp","images/outside/outside_1280x720.webp","images/outside/outside_320x180.webp","images/outside/outside_640x360.webp","images/outside/outside_960x540.webp","images/overlays/25-no-six-paid.webp","images/overlays/25-no-six-paid_1280x720.webp","images/overlays/25-no-six-paid_320x180.webp","images/overlays/25-no-six-paid_640x360.webp","images/overlays/25-no-six-paid_960x540.webp","images/overlays/25-no-six.webp","images/overlays/25-no-six_1280x720.webp","images/overlays/25-no-six_320x180.webp","images/overlays/25-no-six_640x360.webp","images/overlays/25-no-six_960x540.webp","images/overlays/31-no-five-paid.webp","images/overlays/31-no-five-paid_1280x720.webp","images/overlays/31-no-five-paid_320x180.webp","images/overlays/31-no-five-paid_640x360.webp","images/overlays/31-no-five-paid_960x540.webp","images/overlays/31-no-five.webp","images/overlays/31-no-five_1280x720.webp","images/overlays/31-no-five_320x180.webp","images/overlays/31-no-five_640x360.webp","images/overlays/31-no-five_960x540.webp","images/overlays/41-no-four-paid.webp","images/overlays/41-no-four-paid_1280x720.webp","images/overlays/41-no-four-paid_320x180.webp","images/overlays/41-no-four-paid_640x360.webp","images/overlays/41-no-four-paid_960x540.webp","images/overlays/41-no-four.webp","images/overlays/41-no-four_1280x720.webp","images/overlays/41-no-four_320x180.webp","images/overlays/41-no-four_640x360.webp","images/overlays/41-no-four_960x540.webp","images/overlays/how-to-bet-an-overlay.webp","images/overlays/how-to-bet-an-overlay_1280x720.webp","images/overlays/how-to-bet-an-overlay_320x180.webp","images/overlays/how-to-bet-an-overlay_640x360.webp","images/overlays/how-to-bet-an-overlay_960x540.webp","images/overlays/overlays-header.jpg","images/overlays/overlays.webp","images/overlays/overlays_1280x720.webp","images/overlays/overlays_320x180.webp","images/overlays/overlays_640x360.webp","images/overlays/overlays_960x540.webp","images/overlays/placement-of-an-overlay.webp","images/overlays/placement-of-an-overlay_1280x720.webp","images/overlays/placement-of-an-overlay_320x180.webp","images/overlays/placement-of-an-overlay_640x360.webp","images/overlays/placement-of-an-overlay_960x540.webp","images/pass-line-basics/coming-down-on-pass-line.webp","images/pass-line-basics/coming-down-on-pass-line_1280x720.webp","images/pass-line-basics/coming-down-on-pass-line_320x180.webp","images/pass-line-basics/coming-down-on-pass-line_640x360.webp","images/pass-line-basics/coming-down-on-pass-line_960x540.webp","images/pass-line-basics/how-to-bet-the-pass-line.webp","images/pass-line-basics/how-to-bet-the-pass-line_1280x720.webp","images/pass-line-basics/how-to-bet-the-pass-line_320x180.webp","images/pass-line-basics/how-to-bet-the-pass-line_640x360.webp","images/pass-line-basics/how-to-bet-the-pass-line_960x540.webp","images/pass-line-basics/pass-line-basics-header.jpg","images/pass-line-basics/pass-line-for-the-dealers.webp","images/pass-line-basics/pass-line-for-the-dealers_1280x720.webp","images/pass-line-basics/pass-line-for-the-dealers_320x180.webp","images/pass-line-basics/pass-line-for-the-dealers_640x360.webp","images/pass-line-basics/pass-line-for-the-dealers_960x540.webp","images/pass-line-basics/pass-line-pay-a.webp","images/pass-line-basics/pass-line-pay-a_1280x720.webp","images/pass-line-basics/pass-line-pay-a_320x180.webp","images/pass-line-basics/pass-line-pay-a_640x360.webp","images/pass-line-basics/pass-line-pay-a_960x540.webp","images/pass-line-basics/pass-line-pay-b.webp","images/pass-line-basics/pass-line-pay-b_1280x720.webp","images/pass-line-basics/pass-line-pay-b_320x180.webp","images/pass-line-basics/pass-line-pay-b_640x360.webp","images/pass-line-basics/pass-line-pay-b_960x540.webp","images/pass-line-basics/stage-one-of-pass-line.webp","images/pass-line-basics/stage-one-of-pass-line_1280x720.webp","images/pass-line-basics/stage-one-of-pass-line_320x180.webp","images/pass-line-basics/stage-one-of-pass-line_640x360.webp","images/pass-line-basics/stage-one-of-pass-line_960x540.webp","images/pass-line-basics/stage-two-of-pass-line.webp","images/pass-line-basics/stage-two-of-pass-line_1280x720.webp","images/pass-line-basics/stage-two-of-pass-line_320x180.webp","images/pass-line-basics/stage-two-of-pass-line_640x360.webp","images/pass-line-basics/stage-two-of-pass-line_960x540.webp","images/pass-line-basics/the-pass-line.webp","images/pass-line-basics/the-pass-line_1280x720.webp","images/pass-line-basics/the-pass-line_320x180.webp","images/pass-line-basics/the-pass-line_640x360.webp","images/pass-line-basics/the-pass-line_960x540.webp","images/pass-line-odds/dealer-pass-line-with-odds.webp","images/pass-line-odds/dealer-pass-line-with-odds_1280x720.webp","images/pass-line-odds/dealer-pass-line-with-odds_320x180.webp","images/pass-line-odds/dealer-pass-line-with-odds_640x360.webp","images/pass-line-odds/dealer-pass-line-with-odds_960x540.webp","images/pass-line-odds/how-to-bet-the-pass-line-with-odds.webp","images/pass-line-odds/how-to-bet-the-pass-line-with-odds_1280x720.webp","images/pass-line-odds/how-to-bet-the-pass-line-with-odds_320x180.webp","images/pass-line-odds/how-to-bet-the-pass-line-with-odds_640x360.webp","images/pass-line-odds/how-to-bet-the-pass-line-with-odds_960x540.webp","images/pass-line-odds/pass-line-odds-header.jpg","images/pass-line-odds/pass-line-odds-pay-4-10-a.webp","images/pass-line-odds/pass-line-odds-pay-4-10-a_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-4-10-a_320x180.webp","images/pass-line-odds/pass-line-odds-pay-4-10-a_640x360.webp","images/pass-line-odds/pass-line-odds-pay-4-10-a_960x540.webp","images/pass-line-odds/pass-line-odds-pay-4-10-b.webp","images/pass-line-odds/pass-line-odds-pay-4-10-b_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-4-10-b_320x180.webp","images/pass-line-odds/pass-line-odds-pay-4-10-b_640x360.webp","images/pass-line-odds/pass-line-odds-pay-4-10-b_960x540.webp","images/pass-line-odds/pass-line-odds-pay-5-9-a.webp","images/pass-line-odds/pass-line-odds-pay-5-9-a_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-5-9-a_320x180.webp","images/pass-line-odds/pass-line-odds-pay-5-9-a_640x360.webp","images/pass-line-odds/pass-line-odds-pay-5-9-a_960x540.webp","images/pass-line-odds/pass-line-odds-pay-5-9-b.webp","images/pass-line-odds/pass-line-odds-pay-5-9-b_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-5-9-b_320x180.webp","images/pass-line-odds/pass-line-odds-pay-5-9-b_640x360.webp","images/pass-line-odds/pass-line-odds-pay-5-9-b_960x540.webp","images/pass-line-odds/pass-line-odds-pay-6-8-a.webp","images/pass-line-odds/pass-line-odds-pay-6-8-a_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-6-8-a_320x180.webp","images/pass-line-odds/pass-line-odds-pay-6-8-a_640x360.webp","images/pass-line-odds/pass-line-odds-pay-6-8-a_960x540.webp","images/pass-line-odds/pass-line-odds-pay-6-8-b.webp","images/pass-line-odds/pass-line-odds-pay-6-8-b_1280x720.webp","images/pass-line-odds/pass-line-odds-pay-6-8-b_320x180.webp","images/pass-line-odds/pass-line-odds-pay-6-8-b_640x360.webp","images/pass-line-odds/pass-line-odds-pay-6-8-b_960x540.webp","images/pass-line-odds/pass-line-odds.webp","images/pass-line-odds/pass-line-odds_1280x720.webp","images/pass-line-odds/pass-line-odds_320x180.webp","images/pass-line-odds/pass-line-odds_640x360.webp","images/pass-line-odds/pass-line-odds_960x540.webp","images/place-bet-basics/dealer-place-bet-4-10.webp","images/place-bet-basics/dealer-place-bet-4-10_1280x720.webp","images/place-bet-basics/dealer-place-bet-4-10_320x180.webp","images/place-bet-basics/dealer-place-bet-4-10_640x360.webp","images/place-bet-basics/dealer-place-bet-4-10_960x540.webp","images/place-bet-basics/dealer-place-bet-5-9.webp","images/place-bet-basics/dealer-place-bet-5-9_1280x720.webp","images/place-bet-basics/dealer-place-bet-5-9_320x180.webp","images/place-bet-basics/dealer-place-bet-5-9_640x360.webp","images/place-bet-basics/dealer-place-bet-5-9_960x540.webp","images/place-bet-basics/dealer-place-bet-6-8.webp","images/place-bet-basics/dealer-place-bet-6-8_1280x720.webp","images/place-bet-basics/dealer-place-bet-6-8_320x180.webp","images/place-bet-basics/dealer-place-bet-6-8_640x360.webp","images/place-bet-basics/dealer-place-bet-6-8_960x540.webp","images/place-bet-basics/how-to-bet-place-bets.webp","images/place-bet-basics/how-to-bet-place-bets_1280x720.webp","images/place-bet-basics/how-to-bet-place-bets_320x180.webp","images/place-bet-basics/how-to-bet-place-bets_640x360.webp","images/place-bet-basics/how-to-bet-place-bets_960x540.webp","images/place-bet-basics/not-behind-boxes.webp","images/place-bet-basics/not-behind-boxes_1280x720.webp","images/place-bet-basics/not-behind-boxes_320x180.webp","images/place-bet-basics/not-behind-boxes_640x360.webp","images/place-bet-basics/not-behind-boxes_960x540.webp","images/place-bet-basics/place-bet-basics-header.jpg","images/place-bet-basics/place-bets.webp","images/place-bet-basics/place-bets_1280x720.webp","images/place-bet-basics/place-bets_320x180.webp","images/place-bet-basics/place-bets_640x360.webp","images/place-bet-basics/place-bets_960x540.webp","images/place-bet-basics/place-pay-4-10.webp","images/place-bet-basics/place-pay-4-10_1280x720.webp","images/place-bet-basics/place-pay-4-10_320x180.webp","images/place-bet-basics/place-pay-4-10_640x360.webp","images/place-bet-basics/place-pay-4-10_960x540.webp","images/place-bet-basics/place-pay-5-9.webp","images/place-bet-basics/place-pay-5-9_1280x720.webp","images/place-bet-basics/place-pay-5-9_320x180.webp","images/place-bet-basics/place-pay-5-9_640x360.webp","images/place-bet-basics/place-pay-5-9_960x540.webp","images/place-bet-basics/place-pay-6-8.webp","images/place-bet-basics/place-pay-6-8_1280x720.webp","images/place-bet-basics/place-pay-6-8_320x180.webp","images/place-bet-basics/place-pay-6-8_640x360.webp","images/place-bet-basics/place-pay-6-8_960x540.webp","images/place-bet-basics/placement-of-a-place-bet.webp","images/place-bet-basics/placement-of-a-place-bet_1280x720.webp","images/place-bet-basics/placement-of-a-place-bet_320x180.webp","images/place-bet-basics/placement-of-a-place-bet_640x360.webp","images/place-bet-basics/placement-of-a-place-bet_960x540.webp","images/place-bets/buying-place-bets-header_600x600.webp","images/place-bets/buying-place-bets-header_992x558.webp","images/place-bets/buying-place-bets-wide-header.webp","images/place-bets/place-bet-basics-header_600x600.webp","images/place-bets/place-bet-basics-header_992x558.webp","images/place-bets/place-bet-basics-wide-header.webp","images/place-bets/place-bets-header.jpg","images/place-bets/presses-header_600x600.webp","images/place-bets/presses-header_992x558.webp","images/place-bets/presses-wide-header.webp","images/place-bets/spread-bets-header_600x600.webp","images/place-bets/spread-bets-header_992x558.webp","images/place-bets/spread-bets-wide-header.webp","images/place-bets/your-money-header_600x600.webp","images/place-bets/your-money-header_992x558.webp","images/place-bets/your-money-wide-header.webp","images/playing-the-donts/.DS_Store","images/playing-the-donts/dont-come-bar_1280x720.webp","images/playing-the-donts/dont-come-bar_640x360.webp","images/playing-the-donts/dont-come-bar_960x540.webp","images/playing-the-donts/dont-come-bets-with-lay-odds_1280x720.webp","images/playing-the-donts/dont-come-bets-with-lay-odds_640x360.webp","images/playing-the-donts/dont-come-bets-with-lay-odds_960x540.webp","images/playing-the-donts/dont-pass-with-lay-odds_1280x720.webp","images/playing-the-donts/dont-pass-with-lay-odds_640x360.webp","images/playing-the-donts/dont-pass-with-lay-odds_960x540.webp","images/playing-the-donts/playing-the-donts-header.webp","images/practice/.DS_Store","images/practice/pdf-cover-19mm-foldable-craps-dice_640x828.webp","images/practice/pdf-cover-19mm-foldable-craps-dice_960x1242.webp","images/practice/pdf-cover-40mm-foldable-craps-dice_640x828.webp","images/practice/pdf-cover-40mm-foldable-craps-dice_960x1242.webp","images/practice/pdf-cover-60mm-foldable-craps-dice_640x828.webp","images/practice/pdf-cover-60mm-foldable-craps-dice_960x1242.webp","images/practice/pdf-cover-black-dice-combinations_640x828.webp","images/practice/pdf-cover-black-dice-combinations_960x1242.webp","images/practice/pdf-cover-come-bet-w-odds-4-10_640x828.webp","images/practice/pdf-cover-come-bet-w-odds-4-10_960x1242.webp","images/practice/pdf-cover-come-bet-w-odds-5-9_640x828.webp","images/practice/pdf-cover-come-bet-w-odds-5-9_960x1242.webp","images/practice/pdf-cover-come-bet-w-odds-6-8_640x828.webp","images/practice/pdf-cover-come-bet-w-odds-6-8_960x1242.webp","images/practice/pdf-cover-craps-roll-cards_640x828.webp","images/practice/pdf-cover-craps-roll-cards_960x1242.webp","images/practice/pdf-cover-craps-table-layout_640x828.webp","images/practice/pdf-cover-craps-table-layout_960x1242.webp","images/practice/pdf-cover-grey-dice-combinations_640x828.webp","images/practice/pdf-cover-grey-dice-combinations_960x1242.webp","images/practice/pdf-cover-half-craps-table-layout_640x828.webp","images/practice/pdf-cover-half-craps-table-layout_960x1242.webp","images/practice/pdf-cover-hh-world-generator_640x828.webp","images/practice/pdf-cover-hh-world-generator_960x1242.webp","images/practice/pdf-cover-lay-odds-4-10_640x828.webp","images/practice/pdf-cover-lay-odds-4-10_960x1242.webp","images/practice/pdf-cover-lay-odds-5-9_640x828.webp","images/practice/pdf-cover-lay-odds-5-9_960x1242.webp","images/practice/pdf-cover-lay-odds-6-8_640x828.webp","images/practice/pdf-cover-lay-odds-6-8_960x1242.webp","images/practice/pdf-cover-pass-line-odds-4-10_640x828.webp","images/practice/pdf-cover-pass-line-odds-4-10_960x1242.webp","images/practice/pdf-cover-pass-line-odds-5-9_640x828.webp","images/practice/pdf-cover-pass-line-odds-5-9_960x1242.webp","images/practice/pdf-cover-pass-line-odds-6-8_640x828.webp","images/practice/pdf-cover-pass-line-odds-6-8_960x1242.webp","images/practice/pdf-cover-place-bets-4-10_640x828.webp","images/practice/pdf-cover-place-bets-4-10_960x1242.webp","images/practice/pdf-cover-place-bets-5-9_640x828.webp","images/practice/pdf-cover-place-bets-5-9_960x1242.webp","images/practice/pdf-cover-place-bets-6-8_640x828.webp","images/practice/pdf-cover-place-bets-6-8_960x1242.webp","images/practice/practice-header.jpg","images/practice-19mm-craps-dice/.DS_Store","images/practice-19mm-craps-dice/19mm-foldable-craps-dice_1200x630.webp","images/practice-19mm-craps-dice/19mm-foldable-craps-dice_960x1242.webp","images/practice-19mm-craps-dice/practice-19mm-craps-dice-header.jpg","images/practice-40mm-craps-dice/.DS_Store","images/practice-40mm-craps-dice/40mm-foldable-craps-dice_1200x630.webp","images/practice-40mm-craps-dice/40mm-foldable-craps-dice_960x1242.webp","images/practice-40mm-craps-dice/practice-40mm-craps-dice-header.jpg","images/practice-60mm-craps-dice/.DS_Store","images/practice-60mm-craps-dice/60mm-foldable-craps-dice_1200x630.webp","images/practice-60mm-craps-dice/60mm-foldable-craps-dice_960x1242.webp","images/practice-60mm-craps-dice/practice-60mm-craps-dice-header.jpg","images/practice-come-bet-odds-payments-4-10/.DS_Store","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-1_1200x630.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-1_960x1242.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-2_1200x630.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-2_960x1242.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-3_1200x630.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-3_960x1242.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-4_1200x630.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-4_960x1242.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-5_1200x630.webp","images/practice-come-bet-odds-payments-4-10/come-bet-w-odds-payments-4-10-page-5_960x1242.webp","images/practice-come-bet-odds-payments-4-10/practice-come-bet-odds-payments-4-10-header.jpg","images/practice-come-bet-odds-payments-5-9/.DS_Store","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-1_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-1_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-2_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-2_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-3_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-3_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-4_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-4_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-5_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-5_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-6_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-6_960x1242.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-7_1200x630.webp","images/practice-come-bet-odds-payments-5-9/come-bet-w-odds-payments-5-9-page-7_960x1242.webp","images/practice-come-bet-odds-payments-5-9/practice-come-bet-odds-payments-5-9-header.jpg","images/practice-come-bet-odds-payments-6-8/.DS_Store","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-1_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-1_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-2_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-2_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-3_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-3_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-4_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-4_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-5_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-5_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-6_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-6_960x1242.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-7_1200x630.webp","images/practice-come-bet-odds-payments-6-8/come-bet-w-odds-payments-6-8-page-7_960x1242.webp","images/practice-come-bet-odds-payments-6-8/practice-come-bet-odds-payments-6-8-header.jpg","images/practice-craps-cards-black/.DS_Store","images/practice-craps-cards-black/black-craps-cards-page-1_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-1_960x1242.webp","images/practice-craps-cards-black/black-craps-cards-page-2_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-2_960x1242.webp","images/practice-craps-cards-black/black-craps-cards-page-3_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-3_960x1242.webp","images/practice-craps-cards-black/black-craps-cards-page-4_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-4_960x1242.webp","images/practice-craps-cards-black/black-craps-cards-page-5_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-5_960x1242.webp","images/practice-craps-cards-black/black-craps-cards-page-6_1200x630.webp","images/practice-craps-cards-black/black-craps-cards-page-6_960x1242.webp","images/practice-craps-cards-black/practice-craps-cards-black-header.jpg","images/practice-craps-cards-grey/.DS_Store","images/practice-craps-cards-grey/grey-craps-cards-page-1_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-1_960x1242.webp","images/practice-craps-cards-grey/grey-craps-cards-page-2_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-2_960x1242.webp","images/practice-craps-cards-grey/grey-craps-cards-page-3_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-3_960x1242.webp","images/practice-craps-cards-grey/grey-craps-cards-page-4_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-4_960x1242.webp","images/practice-craps-cards-grey/grey-craps-cards-page-5_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-5_960x1242.webp","images/practice-craps-cards-grey/grey-craps-cards-page-6_1200x630.webp","images/practice-craps-cards-grey/grey-craps-cards-page-6_960x1242.webp","images/practice-craps-cards-grey/practice-craps-cards-grey-header.jpg","images/practice-craps-roll-cards/.DS_Store","images/practice-craps-roll-cards/craps-roll-cards-page-1_1200x630.webp","images/practice-craps-roll-cards/craps-roll-cards-page-1_960x1242.webp","images/practice-craps-roll-cards/craps-roll-cards-page-2_1200x630.webp","images/practice-craps-roll-cards/craps-roll-cards-page-2_960x1242.webp","images/practice-craps-roll-cards/craps-roll-cards-page-3_1200x630.webp","images/practice-craps-roll-cards/craps-roll-cards-page-3_960x1242.webp","images/practice-craps-roll-cards/practice-craps-roll-cards-header.jpg","images/practice-full-craps-table-layout/.DS_Store","images/practice-full-craps-table-layout/full-craps-table-layout-empty_1200x630.webp","images/practice-full-craps-table-layout/full-craps-table-layout-empty_1200x923.webp","images/practice-full-craps-table-layout/full-craps-table-layout_1200x630.webp","images/practice-full-craps-table-layout/full-craps-table-layout_1200x923.webp","images/practice-full-craps-table-layout/practice-full-craps-table-layout-header.jpg","images/practice-half-craps-table-layout/.DS_Store","images/practice-half-craps-table-layout/half-craps-table-layout-empty_1200x630.webp","images/practice-half-craps-table-layout/half-craps-table-layout-empty_1200x923.webp","images/practice-half-craps-table-layout/half-craps-table-layout_1200x630.webp","images/practice-half-craps-table-layout/half-craps-table-layout_1200x923.webp","images/practice-half-craps-table-layout/practice-half-craps-table-layout-header.jpg","images/practice-horn-high-generator/.DS_Store","images/practice-horn-high-generator/amount-cards_1200x630.webp","images/practice-horn-high-generator/amount-cards_960x1242.webp","images/practice-horn-high-generator/bet-cards_1200x630.webp","images/practice-horn-high-generator/bet-cards_960x1242.webp","images/practice-horn-high-generator/practice-horn-high-generator-header.jpg","images/practice-horn-high-generator/roll-cards_1200x630.webp","images/practice-horn-high-generator/roll-cards_960x1242.webp","images/practice-lay-odds-payments-4-10/.DS_Store","images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-1_960x1242.webp","images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-2_960x1242.webp","images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-3_960x1242.webp","images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-4_960x1242.webp","images/practice-lay-odds-payments-4-10/lay-odds-payments-4-10-page-5_960x1242.webp","images/practice-lay-odds-payments-4-10/practice-lay-odds-payments-4-10-header.jpg","images/practice-lay-odds-payments-5-9/.DS_Store","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-1_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-2_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-3_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-4_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-5_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-6_960x1242.webp","images/practice-lay-odds-payments-5-9/lay-odds-payments-5-9-page-7_960x1242.webp","images/practice-lay-odds-payments-5-9/practice-lay-odds-payments-5-9-header.jpg","images/practice-lay-odds-payments-6-8/.DS_Store","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-1_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-2_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-3_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-4_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-5_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-6_960x1242.webp","images/practice-lay-odds-payments-6-8/lay-odds-payments-6-8-page-7_960x1242.webp","images/practice-lay-odds-payments-6-8/practice-lay-odds-payments-6-8-header.jpg","images/practice-pass-line-odds-4-10/.DS_Store","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-1_1200x630.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-1_960x1242.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-2_1200x630.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-2_960x1242.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-3_1200x630.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-3_960x1242.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-4_1200x630.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-4_960x1242.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-5_1200x630.webp","images/practice-pass-line-odds-4-10/pass-line-odds-payments-4-10-page-5_960x1242.webp","images/practice-pass-line-odds-4-10/practice-pass-line-odds-4-10-header.jpg","images/practice-pass-line-odds-5-9/.DS_Store","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-1_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-1_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-2_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-2_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-3_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-3_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-4_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-4_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-5_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-5_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-6_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-6_960x1242.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-7_1200x630.webp","images/practice-pass-line-odds-5-9/pass-line-odds-payments-5-9-page-7_960x1242.webp","images/practice-pass-line-odds-5-9/practice-pass-line-odds-5-9-header.jpg","images/practice-pass-line-odds-6-8/.DS_Store","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-1_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-1_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-2_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-2_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-3_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-3_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-4_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-4_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-5_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-5_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-6_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-6_960x1242.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-7_1200x630.webp","images/practice-pass-line-odds-6-8/pass-line-odds-payments-6-8-page-7_960x1242.webp","images/practice-pass-line-odds-6-8/practice-pass-line-odds-6-8-header.jpg","images/practice-place-bet-payments-4-10/.DS_Store","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-1_1200x630.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-1_960x1242.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-2_1200x630.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-2_960x1242.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-3_1200x630.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-3_960x1242.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-4_1200x630.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-4_960x1242.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-5_1200x630.webp","images/practice-place-bet-payments-4-10/place-bet-payments-4-10-page-5_960x1242.webp","images/practice-place-bet-payments-4-10/practice-place-bet-payments-4-10-header.jpg","images/practice-place-bet-payments-5-9/.DS_Store","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-1_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-1_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-2_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-2_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-3_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-3_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-4_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-4_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-5_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-5_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-6_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-6_960x1242.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-7_1200x630.webp","images/practice-place-bet-payments-5-9/place-bet-payments-5-9-page-7_960x1242.webp","images/practice-place-bet-payments-5-9/practice-place-bet-payments-5-9-header.jpg","images/practice-place-bet-payments-6-8/.DS_Store","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-1_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-1_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-2_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-2_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-3_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-3_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-4_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-4_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-5_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-5_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-6_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-6_960x1242.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-7_1200x630.webp","images/practice-place-bet-payments-6-8/place-bet-payments-6-8-page-7_960x1242.webp","images/practice-place-bet-payments-6-8/practice-place-bet-payments-6-8-header.jpg","images/presses/across-pressure.webp","images/presses/across-pressure_1280x720.webp","images/presses/across-pressure_320x180.webp","images/presses/across-pressure_640x360.webp","images/presses/across-pressure_960x540.webp","images/presses/double-unit-odd-press.webp","images/presses/double-unit-odd-press_1280x720.webp","images/presses/double-unit-odd-press_320x180.webp","images/presses/double-unit-odd-press_640x360.webp","images/presses/double-unit-odd-press_960x540.webp","images/presses/double-unit-press.webp","images/presses/double-unit-press_1280x720.webp","images/presses/double-unit-press_320x180.webp","images/presses/double-unit-press_640x360.webp","images/presses/double-unit-press_960x540.webp","images/presses/full-press.webp","images/presses/full-press_1280x720.webp","images/presses/full-press_320x180.webp","images/presses/full-press_640x360.webp","images/presses/full-press_960x540.webp","images/presses/odd-press.webp","images/presses/odd-press_1280x720.webp","images/presses/odd-press_320x180.webp","images/presses/odd-press_640x360.webp","images/presses/odd-press_960x540.webp","images/presses/one-unit-press.webp","images/presses/one-unit-press_1280x720.webp","images/presses/one-unit-press_320x180.webp","images/presses/one-unit-press_640x360.webp","images/presses/one-unit-press_960x540.webp","images/presses/power-press.webp","images/presses/power-press_1280x720.webp","images/presses/power-press_320x180.webp","images/presses/power-press_640x360.webp","images/presses/power-press_960x540.webp","images/presses/press-it.webp","images/presses/press-it_1280x720.webp","images/presses/press-it_320x180.webp","images/presses/press-it_640x360.webp","images/presses/press-it_960x540.webp","images/presses/presses-header.jpg","images/presses/presses.webp","images/presses/presses_1280x720.webp","images/presses/presses_320x180.webp","images/presses/presses_640x360.webp","images/presses/presses_960x540.webp","images/presses/what-is-a-unit.webp","images/presses/what-is-a-unit_1280x720.webp","images/presses/what-is-a-unit_320x180.webp","images/presses/what-is-a-unit_640x360.webp","images/presses/what-is-a-unit_960x540.webp","images/proposition-basics/how-to-bet-prop-bets.webp","images/proposition-basics/how-to-bet-prop-bets_1280x720.webp","images/proposition-basics/how-to-bet-prop-bets_320x180.webp","images/proposition-basics/how-to-bet-prop-bets_640x360.webp","images/proposition-basics/how-to-bet-prop-bets_960x540.webp","images/proposition-basics/proposition-basics-header.jpg","images/proposition-basics/proposition-bets.webp","images/proposition-basics/proposition-bets_1280x720.webp","images/proposition-basics/proposition-bets_320x180.webp","images/proposition-basics/proposition-bets_640x360.webp","images/proposition-basics/proposition-bets_960x540.webp","images/proposition-bets/any-craps-header_600x600.webp","images/proposition-bets/any-craps-header_992x558.webp","images/proposition-bets/any-craps-wide-header.webp","images/proposition-bets/any-seven-header_600x600.webp","images/proposition-bets/any-seven-header_992x558.webp","images/proposition-bets/any-seven-wide-header.webp","images/proposition-bets/c-and-e-header_600x600.webp","images/proposition-bets/c-and-e-header_992x558.webp","images/proposition-bets/c-and-e-wide-header.webp","images/proposition-bets/hop-bets-header_600x600.webp","images/proposition-bets/hop-bets-header_992x558.webp","images/proposition-bets/hop-bets-wide-header.webp","images/proposition-bets/horn-header_600x600.webp","images/proposition-bets/horn-header_992x558.webp","images/proposition-bets/horn-high-header_600x600.webp","images/proposition-bets/horn-high-header_992x558.webp","images/proposition-bets/horn-high-wide-header.webp","images/proposition-bets/horn-wide-header.webp","images/proposition-bets/multi-bets-header_600x600.webp","images/proposition-bets/multi-bets-header_992x558.webp","images/proposition-bets/multi-bets-wide-header.webp","images/proposition-bets/proposition-basics-header_600x600.webp","images/proposition-bets/proposition-basics-header_992x558.webp","images/proposition-bets/proposition-basics-wide-header.webp","images/proposition-bets/proposition-bets-header.jpg","images/proposition-bets/straight-up-header_600x600.webp","images/proposition-bets/straight-up-header_992x558.webp","images/proposition-bets/straight-up-wide-header.webp","images/proposition-bets/the-field-header_600x600.webp","images/proposition-bets/the-field-header_992x558.webp","images/proposition-bets/the-field-wide-header.webp","images/proposition-bets/the-hardways-header_600x600.webp","images/proposition-bets/the-hardways-header_992x558.webp","images/proposition-bets/the-hardways-wide-header.webp","images/proposition-bets/world-header_600x600.webp","images/proposition-bets/world-header_992x558.webp","images/proposition-bets/world-wide-header.webp","images/protecting-your-money/.DS_Store","images/protecting-your-money/field_1280x720.webp","images/protecting-your-money/field_640x360.webp","images/protecting-your-money/field_960x540.webp","images/protecting-your-money/protecting-your-money-header.webp","images/protecting-your-money/second-base-overhead-looking-at-craps-layout_1280x720.webp","images/protecting-your-money/second-base-overhead-looking-at-craps-layout_640x360.webp","images/protecting-your-money/second-base-overhead-looking-at-craps-layout_960x540.webp","images/protecting-your-money/second-base-up-close-with-place-and-come-bets_1280x720.webp","images/protecting-your-money/second-base-up-close-with-place-and-come-bets_640x360.webp","images/protecting-your-money/second-base-up-close-with-place-and-come-bets_960x540.webp","images/rank-of-craps-bets/.DS_Store","images/rank-of-craps-bets/eight-dollar-horn-bet_1280x720.webp","images/rank-of-craps-bets/eight-dollar-horn-bet_640x360.webp","images/rank-of-craps-bets/eight-dollar-horn-bet_960x540.webp","images/rank-of-craps-bets/pass-line-paid_1280x720.webp","images/rank-of-craps-bets/pass-line-paid_640x360.webp","images/rank-of-craps-bets/pass-line-paid_960x540.webp","images/rank-of-craps-bets/rank-of-craps-bets-header.webp","images/rank-of-craps-bets/up-close-place-bets-third-base_1280x720.webp","images/rank-of-craps-bets/up-close-place-bets-third-base_640x360.webp","images/rank-of-craps-bets/up-close-place-bets-third-base_960x540.webp","images/right-craps-table/.DS_Store","images/right-craps-table/come-bet_1280x720.webp","images/right-craps-table/come-bet_640x360.webp","images/right-craps-table/come-bet_960x540.webp","images/right-craps-table/puck-point-six_1280x720.webp","images/right-craps-table/puck-point-six_640x360.webp","images/right-craps-table/puck-point-six_960x540.webp","images/right-craps-table/right-craps-table-header.webp","images/right-craps-table/stick-toward-third-base-looking-at-craps-layout_1280x720.webp","images/right-craps-table/stick-toward-third-base-looking-at-craps-layout_640x360.webp","images/right-craps-table/stick-toward-third-base-looking-at-craps-layout_960x540.webp","images/spread-bets/across-header_600x600.webp","images/spread-bets/across-header_992x558.webp","images/spread-bets/across-wide-header.webp","images/spread-bets/including-the-point-header_600x600.webp","images/spread-bets/including-the-point-header_992x558.webp","images/spread-bets/including-the-point-wide-header.webp","images/spread-bets/inside-header_600x600.webp","images/spread-bets/inside-header_992x558.webp","images/spread-bets/inside-wide-header.webp","images/spread-bets/outside-header_600x600.webp","images/spread-bets/outside-header_992x558.webp","images/spread-bets/outside-wide-header.webp","images/spread-bets/spread-bets-header.jpg","images/spread-bets/uptown-downtown-header_600x600.webp","images/spread-bets/uptown-downtown-header_992x558.webp","images/spread-bets/uptown-downtown-wide-header.webp","images/straight-up/dealer-straight-up.webp","images/straight-up/dealer-straight-up_1280x720.webp","images/straight-up/dealer-straight-up_320x180.webp","images/straight-up/dealer-straight-up_640x360.webp","images/straight-up/dealer-straight-up_960x540.webp","images/straight-up/high-side-straight-up-payment.webp","images/straight-up/high-side-straight-up-payment_1280x720.webp","images/straight-up/high-side-straight-up-payment_320x180.webp","images/straight-up/high-side-straight-up-payment_640x360.webp","images/straight-up/high-side-straight-up-payment_960x540.webp","images/straight-up/low-side-straight-up-payment.webp","images/straight-up/low-side-straight-up-payment_1280x720.webp","images/straight-up/low-side-straight-up-payment_320x180.webp","images/straight-up/low-side-straight-up-payment_640x360.webp","images/straight-up/low-side-straight-up-payment_960x540.webp","images/straight-up/placement-of-straight-up.webp","images/straight-up/placement-of-straight-up_1280x720.webp","images/straight-up/placement-of-straight-up_320x180.webp","images/straight-up/placement-of-straight-up_640x360.webp","images/straight-up/placement-of-straight-up_960x540.webp","images/straight-up/straight-up-bets.webp","images/straight-up/straight-up-bets_1280x720.webp","images/straight-up/straight-up-bets_320x180.webp","images/straight-up/straight-up-bets_640x360.webp","images/straight-up/straight-up-bets_960x540.webp","images/straight-up/straight-up-header.jpg","images/the-craps-table/craps-table-limits.webp","images/the-craps-table/craps-table-limits_1280x720.webp","images/the-craps-table/craps-table-limits_320x180.webp","images/the-craps-table/craps-table-limits_640x360.webp","images/the-craps-table/craps-table-limits_960x540.webp","images/the-craps-table/puck-off.webp","images/the-craps-table/puck-off_1280x720.webp","images/the-craps-table/puck-off_320x180.webp","images/the-craps-table/puck-off_640x360.webp","images/the-craps-table/puck-off_960x540.webp","images/the-craps-table/puck-on.webp","images/the-craps-table/puck-on_1280x720.webp","images/the-craps-table/puck-on_320x180.webp","images/the-craps-table/puck-on_640x360.webp","images/the-craps-table/puck-on_960x540.webp","images/the-craps-table/the-craps-bowl.webp","images/the-craps-table/the-craps-bowl_1280x720.webp","images/the-craps-table/the-craps-bowl_320x180.webp","images/the-craps-table/the-craps-bowl_640x360.webp","images/the-craps-table/the-craps-bowl_960x540.webp","images/the-craps-table/the-craps-table-header.jpg","images/the-craps-table/the-stick.webp","images/the-craps-table/the-stick_1280x720.webp","images/the-craps-table/the-stick_320x180.webp","images/the-craps-table/the-stick_640x360.webp","images/the-craps-table/the-stick_960x540.webp","images/the-craps-table/the-table.webp","images/the-craps-table/the-table_1280x720.webp","images/the-craps-table/the-table_320x180.webp","images/the-craps-table/the-table_640x360.webp","images/the-craps-table/the-table_960x540.webp","images/the-crew/.DS_Store","images/the-crew/the-crew-header.jpg","images/the-crew/the-crew_1280x720.webp","images/the-crew/the-crew_640x360.webp","images/the-crew/the-crew_960x540.webp","images/the-dice/getting-hit-with-the-dice.webp","images/the-dice/getting-hit-with-the-dice_1280x720.webp","images/the-dice/getting-hit-with-the-dice_320x180.webp","images/the-dice/getting-hit-with-the-dice_640x360.webp","images/the-dice/getting-hit-with-the-dice_960x540.webp","images/the-dice/the-craps-dice.webp","images/the-dice/the-craps-dice_1280x720.webp","images/the-dice/the-craps-dice_320x180.webp","images/the-dice/the-craps-dice_640x360.webp","images/the-dice/the-craps-dice_960x540.webp","images/the-dice/the-dice-header.jpg","images/the-dice/watching-the-dice.webp","images/the-dice/watching-the-dice_1280x720.webp","images/the-dice/watching-the-dice_320x180.webp","images/the-dice/watching-the-dice_640x360.webp","images/the-dice/watching-the-dice_960x540.webp","images/the-donts/dont-come-header_600x600.webp","images/the-donts/dont-come-header_992x558.webp","images/the-donts/dont-come-lay-odds-header_600x600.webp","images/the-donts/dont-come-lay-odds-header_992x558.webp","images/the-donts/dont-come-lay-odds-wide-header.webp","images/the-donts/dont-come-wide-header.webp","images/the-donts/dont-pass-header_600x600.webp","images/the-donts/dont-pass-header_992x558.webp","images/the-donts/dont-pass-lay-odds-header_600x600.webp","images/the-donts/dont-pass-lay-odds-header_992x558.webp","images/the-donts/dont-pass-lay-odds-wide-header.webp","images/the-donts/dont-pass-wide-header.webp","images/the-donts/overlays-header_600x600.webp","images/the-donts/overlays-header_992x558.webp","images/the-donts/overlays-wide-header.webp","images/the-donts/the-donts-header.jpg","images/the-field/field-bet-for-the-dealers.webp","images/the-field/field-bet-for-the-dealers_1280x720.webp","images/the-field/field-bet-for-the-dealers_320x180.webp","images/the-field/field-bet-for-the-dealers_640x360.webp","images/the-field/field-bet-for-the-dealers_960x540.webp","images/the-field/placement-of-the-field.webp","images/the-field/placement-of-the-field_1280x720.webp","images/the-field/placement-of-the-field_320x180.webp","images/the-field/placement-of-the-field_640x360.webp","images/the-field/placement-of-the-field_960x540.webp","images/the-field/the-field-header.jpg","images/the-field/the-field.webp","images/the-field/the-field_1280x720.webp","images/the-field/the-field_320x180.webp","images/the-field/the-field_640x360.webp","images/the-field/the-field_960x540.webp","images/the-field/what-does-the-field-pay-a.webp","images/the-field/what-does-the-field-pay-a_1280x720.webp","images/the-field/what-does-the-field-pay-a_320x180.webp","images/the-field/what-does-the-field-pay-a_640x360.webp","images/the-field/what-does-the-field-pay-a_960x540.webp","images/the-field/what-does-the-field-pay-b.webp","images/the-field/what-does-the-field-pay-b_1280x720.webp","images/the-field/what-does-the-field-pay-b_320x180.webp","images/the-field/what-does-the-field-pay-b_640x360.webp","images/the-field/what-does-the-field-pay-b_960x540.webp","images/the-hardways/buffalo.webp","images/the-hardways/buffalo_1280x720.webp","images/the-hardways/buffalo_320x180.webp","images/the-hardways/buffalo_640x360.webp","images/the-hardways/buffalo_960x540.webp","images/the-hardways/dealer-hardways.webp","images/the-hardways/dealer-hardways_1280x720.webp","images/the-hardways/dealer-hardways_320x180.webp","images/the-hardways/dealer-hardways_640x360.webp","images/the-hardways/dealer-hardways_960x540.webp","images/the-hardways/hardways-pay-4-10.webp","images/the-hardways/hardways-pay-4-10_1280x720.webp","images/the-hardways/hardways-pay-4-10_320x180.webp","images/the-hardways/hardways-pay-4-10_640x360.webp","images/the-hardways/hardways-pay-4-10_960x540.webp","images/the-hardways/hardways-pay-6-8.webp","images/the-hardways/hardways-pay-6-8_1280x720.webp","images/the-hardways/hardways-pay-6-8_320x180.webp","images/the-hardways/hardways-pay-6-8_640x360.webp","images/the-hardways/hardways-pay-6-8_960x540.webp","images/the-hardways/hardways.webp","images/the-hardways/hardways_1280x720.webp","images/the-hardways/hardways_320x180.webp","images/the-hardways/hardways_640x360.webp","images/the-hardways/hardways_960x540.webp","images/the-hardways/placement-of-the-hardways.webp","images/the-hardways/placement-of-the-hardways_1280x720.webp","images/the-hardways/placement-of-the-hardways_320x180.webp","images/the-hardways/placement-of-the-hardways_640x360.webp","images/the-hardways/placement-of-the-hardways_960x540.webp","images/the-hardways/the-hardways-header.jpg","images/the-pass-line/max-odds-header_600x600.webp","images/the-pass-line/max-odds-header_992x558.webp","images/the-pass-line/max-odds-wide-header.webp","images/the-pass-line/pass-line-basics-header_600x600.webp","images/the-pass-line/pass-line-basics-header_992x558.webp","images/the-pass-line/pass-line-basics-wide-header.webp","images/the-pass-line/pass-line-odds-header_600x600.webp","images/the-pass-line/pass-line-odds-header_992x558.webp","images/the-pass-line/pass-line-odds-wide-header.webp","images/the-pass-line/the-pass-line-header.jpg","images/the-stages/buying-in.webp","images/the-stages/buying-in_1280x720.webp","images/the-stages/buying-in_320x180.webp","images/the-stages/buying-in_640x360.webp","images/the-stages/buying-in_960x540.webp","images/the-stages/cashing-out-a.webp","images/the-stages/cashing-out-a_1280x720.webp","images/the-stages/cashing-out-a_320x180.webp","images/the-stages/cashing-out-a_640x360.webp","images/the-stages/cashing-out-a_960x540.webp","images/the-stages/cashing-out-b.webp","images/the-stages/cashing-out-b_1280x720.webp","images/the-stages/cashing-out-b_320x180.webp","images/the-stages/cashing-out-b_640x360.webp","images/the-stages/cashing-out-b_960x540.webp","images/the-stages/the-comeout-roll.webp","images/the-stages/the-comeout-roll_1280x720.webp","images/the-stages/the-comeout-roll_320x180.webp","images/the-stages/the-comeout-roll_640x360.webp","images/the-stages/the-comeout-roll_960x540.webp","images/the-stages/the-intermediate-roll.webp","images/the-stages/the-intermediate-roll_1280x720.webp","images/the-stages/the-intermediate-roll_320x180.webp","images/the-stages/the-intermediate-roll_640x360.webp","images/the-stages/the-intermediate-roll_960x540.webp","images/the-stages/the-number-7.webp","images/the-stages/the-number-7_1280x720.webp","images/the-stages/the-number-7_320x180.webp","images/the-stages/the-number-7_640x360.webp","images/the-stages/the-number-7_960x540.webp","images/the-stages/the-stages-header.jpg","images/the-stages/the-stages.webp","images/the-stages/the-stages_1280x720.webp","images/the-stages/the-stages_320x180.webp","images/the-stages/the-stages_640x360.webp","images/the-stages/the-stages_960x540.webp","images/tipping-the-dealers/.DS_Store","images/tipping-the-dealers/third-base-up-close-empty_1280x720.webp","images/tipping-the-dealers/third-base-up-close-empty_640x360.webp","images/tipping-the-dealers/third-base-up-close-empty_960x540.webp","images/tipping-the-dealers/three-way-bet_1280x720.webp","images/tipping-the-dealers/three-way-bet_640x360.webp","images/tipping-the-dealers/three-way-bet_960x540.webp","images/tipping-the-dealers/tipping-the-dealers-header.webp","images/tipping-the-dealers/two-way-pass-line_1280x720.webp","images/tipping-the-dealers/two-way-pass-line_640x360.webp","images/tipping-the-dealers/two-way-pass-line_960x540.webp","images/to-consider/hedging.webp","images/to-consider/hedging_1280x720.webp","images/to-consider/hedging_320x180.webp","images/to-consider/hedging_640x360.webp","images/to-consider/hedging_960x540.webp","images/to-consider/lays-it-plays.webp","images/to-consider/lays-it-plays_1280x720.webp","images/to-consider/lays-it-plays_320x180.webp","images/to-consider/lays-it-plays_640x360.webp","images/to-consider/lays-it-plays_960x540.webp","images/to-consider/self-service.webp","images/to-consider/self-service_1280x720.webp","images/to-consider/self-service_320x180.webp","images/to-consider/self-service_640x360.webp","images/to-consider/self-service_960x540.webp","images/to-consider/three-way-bet.webp","images/to-consider/three-way-bet_1280x720.webp","images/to-consider/three-way-bet_320x180.webp","images/to-consider/three-way-bet_640x360.webp","images/to-consider/three-way-bet_960x540.webp","images/to-consider/to-consider-header.jpg","images/to-consider/two-way-bet.webp","images/to-consider/two-way-bet_1280x720.webp","images/to-consider/two-way-bet_320x180.webp","images/to-consider/two-way-bet_640x360.webp","images/to-consider/two-way-bet_960x540.webp","images/uptown-downtown/16-downtown.webp","images/uptown-downtown/16-downtown_1280x720.webp","images/uptown-downtown/16-downtown_320x180.webp","images/uptown-downtown/16-downtown_640x360.webp","images/uptown-downtown/16-downtown_960x540.webp","images/uptown-downtown/16-uptown.webp","images/uptown-downtown/16-uptown_1280x720.webp","images/uptown-downtown/16-uptown_320x180.webp","images/uptown-downtown/16-uptown_640x360.webp","images/uptown-downtown/16-uptown_960x540.webp","images/uptown-downtown/65-downtown.webp","images/uptown-downtown/65-downtown_1280x720.webp","images/uptown-downtown/65-downtown_320x180.webp","images/uptown-downtown/65-downtown_640x360.webp","images/uptown-downtown/65-downtown_960x540.webp","images/uptown-downtown/65-uptown.webp","images/uptown-downtown/65-uptown_1280x720.webp","images/uptown-downtown/65-uptown_320x180.webp","images/uptown-downtown/65-uptown_640x360.webp","images/uptown-downtown/65-uptown_960x540.webp","images/uptown-downtown/downtown.webp","images/uptown-downtown/downtown_1280x720.webp","images/uptown-downtown/downtown_320x180.webp","images/uptown-downtown/downtown_640x360.webp","images/uptown-downtown/downtown_960x540.webp","images/uptown-downtown/uptown-downtown-header.jpg","images/uptown-downtown/uptown.webp","images/uptown-downtown/uptown_1280x720.webp","images/uptown-downtown/uptown_320x180.webp","images/uptown-downtown/uptown_640x360.webp","images/uptown-downtown/uptown_960x540.webp","images/verbal-betting/my-bets-are-off.webp","images/verbal-betting/my-bets-are-off_1280x720.webp","images/verbal-betting/my-bets-are-off_320x180.webp","images/verbal-betting/my-bets-are-off_640x360.webp","images/verbal-betting/my-bets-are-off_960x540.webp","images/verbal-betting/my-bets-are-on.webp","images/verbal-betting/my-bets-are-on_1280x720.webp","images/verbal-betting/my-bets-are-on_320x180.webp","images/verbal-betting/my-bets-are-on_640x360.webp","images/verbal-betting/my-bets-are-on_960x540.webp","images/verbal-betting/verbal-betting-header.jpg","images/verbal-betting/verbal-declaration.webp","images/verbal-betting/verbal-declaration_1280x720.webp","images/verbal-betting/verbal-declaration_320x180.webp","images/verbal-betting/verbal-declaration_640x360.webp","images/verbal-betting/verbal-declaration_960x540.webp","images/win-a-craps-dispute/.DS_Store","images/win-a-craps-dispute/place-bets-off_1280x720.webp","images/win-a-craps-dispute/place-bets-off_640x360.webp","images/win-a-craps-dispute/place-bets-off_960x540.webp","images/win-a-craps-dispute/three-way-crap_1280x720.webp","images/win-a-craps-dispute/three-way-crap_640x360.webp","images/win-a-craps-dispute/three-way-crap_960x540.webp","images/win-a-craps-dispute/up-close-hardways_1280x720.webp","images/win-a-craps-dispute/up-close-hardways_640x360.webp","images/win-a-craps-dispute/up-close-hardways_960x540.webp","images/win-a-craps-dispute/win-a-craps-dispute-header.webp","images/world/5-world-7-rolls.webp","images/world/5-world-7-rolls_1280x720.webp","images/world/5-world-7-rolls_320x180.webp","images/world/5-world-7-rolls_640x360.webp","images/world/5-world-7-rolls_960x540.webp","images/world/5-world-ace-deuce-hits.webp","images/world/5-world-ace-deuce-hits_1280x720.webp","images/world/5-world-ace-deuce-hits_320x180.webp","images/world/5-world-ace-deuce-hits_640x360.webp","images/world/5-world-ace-deuce-hits_960x540.webp","images/world/5-world-aces-hit.webp","images/world/5-world-aces-hit_1280x720.webp","images/world/5-world-aces-hit_320x180.webp","images/world/5-world-aces-hit_640x360.webp","images/world/5-world-aces-hit_960x540.webp","images/world/5-world-twelve-hits.webp","images/world/5-world-twelve-hits_1280x720.webp","images/world/5-world-twelve-hits_320x180.webp","images/world/5-world-twelve-hits_640x360.webp","images/world/5-world-twelve-hits_960x540.webp","images/world/5-world-yo-hits.webp","images/world/5-world-yo-hits_1280x720.webp","images/world/5-world-yo-hits_320x180.webp","images/world/5-world-yo-hits_640x360.webp","images/world/5-world-yo-hits_960x540.webp","images/world/5-world.webp","images/world/5-world_1280x720.webp","images/world/5-world_320x180.webp","images/world/5-world_640x360.webp","images/world/5-world_960x540.webp","images/world/dealer-world.webp","images/world/dealer-world_1280x720.webp","images/world/dealer-world_320x180.webp","images/world/dealer-world_640x360.webp","images/world/dealer-world_960x540.webp","images/world/placement-of-a-world-b.webp","images/world/placement-of-a-world-b_1280x720.webp","images/world/placement-of-a-world-b_320x180.webp","images/world/placement-of-a-world-b_640x360.webp","images/world/placement-of-a-world-b_960x540.webp","images/world/placement-of-world-a.webp","images/world/placement-of-world-a_1280x720.webp","images/world/placement-of-world-a_320x180.webp","images/world/placement-of-world-a_640x360.webp","images/world/placement-of-world-a_960x540.webp","images/world/world-header.jpg","images/world/world.webp","images/world/world_1280x720.webp","images/world/world_320x180.webp","images/world/world_640x360.webp","images/world/world_960x540.webp","images/your-money/bet-cost-and-change.webp","images/your-money/bet-cost-and-change_1280x720.webp","images/your-money/bet-cost-and-change_320x180.webp","images/your-money/bet-cost-and-change_640x360.webp","images/your-money/bet-cost-and-change_960x540.webp","images/your-money/correct-number.webp","images/your-money/correct-number_1280x720.webp","images/your-money/correct-number_320x180.webp","images/your-money/correct-number_640x360.webp","images/your-money/correct-number_960x540.webp","images/your-money/correct-spot.webp","images/your-money/correct-spot_1280x720.webp","images/your-money/correct-spot_320x180.webp","images/your-money/correct-spot_640x360.webp","images/your-money/correct-spot_960x540.webp","images/your-money/your-money-header.jpg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml",".psd":"image/vnd.adobe.photoshop"},
	_: {
		client: {"start":"_app/immutable/entry/start.dc2e7ac0.js","app":"_app/immutable/entry/app.38bd1459.js","imports":["_app/immutable/entry/start.dc2e7ac0.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/singletons.97627f7c.js","_app/immutable/chunks/index.07126387.js","_app/immutable/entry/app.38bd1459.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/index.3b77a6b7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js')),
			__memo(() => import('../server/nodes/14.js')),
			__memo(() => import('../server/nodes/15.js')),
			__memo(() => import('../server/nodes/16.js')),
			__memo(() => import('../server/nodes/17.js')),
			__memo(() => import('../server/nodes/18.js')),
			__memo(() => import('../server/nodes/19.js')),
			__memo(() => import('../server/nodes/20.js')),
			__memo(() => import('../server/nodes/21.js')),
			__memo(() => import('../server/nodes/22.js')),
			__memo(() => import('../server/nodes/23.js')),
			__memo(() => import('../server/nodes/24.js')),
			__memo(() => import('../server/nodes/25.js')),
			__memo(() => import('../server/nodes/26.js')),
			__memo(() => import('../server/nodes/27.js')),
			__memo(() => import('../server/nodes/28.js')),
			__memo(() => import('../server/nodes/29.js')),
			__memo(() => import('../server/nodes/30.js')),
			__memo(() => import('../server/nodes/31.js')),
			__memo(() => import('../server/nodes/32.js')),
			__memo(() => import('../server/nodes/33.js')),
			__memo(() => import('../server/nodes/34.js')),
			__memo(() => import('../server/nodes/35.js')),
			__memo(() => import('../server/nodes/36.js')),
			__memo(() => import('../server/nodes/37.js')),
			__memo(() => import('../server/nodes/38.js')),
			__memo(() => import('../server/nodes/39.js')),
			__memo(() => import('../server/nodes/40.js')),
			__memo(() => import('../server/nodes/41.js')),
			__memo(() => import('../server/nodes/42.js')),
			__memo(() => import('../server/nodes/43.js')),
			__memo(() => import('../server/nodes/44.js')),
			__memo(() => import('../server/nodes/45.js')),
			__memo(() => import('../server/nodes/46.js')),
			__memo(() => import('../server/nodes/47.js')),
			__memo(() => import('../server/nodes/48.js')),
			__memo(() => import('../server/nodes/49.js')),
			__memo(() => import('../server/nodes/50.js')),
			__memo(() => import('../server/nodes/51.js')),
			__memo(() => import('../server/nodes/52.js')),
			__memo(() => import('../server/nodes/53.js')),
			__memo(() => import('../server/nodes/54.js')),
			__memo(() => import('../server/nodes/55.js')),
			__memo(() => import('../server/nodes/56.js')),
			__memo(() => import('../server/nodes/57.js')),
			__memo(() => import('../server/nodes/58.js')),
			__memo(() => import('../server/nodes/59.js')),
			__memo(() => import('../server/nodes/60.js')),
			__memo(() => import('../server/nodes/61.js')),
			__memo(() => import('../server/nodes/62.js')),
			__memo(() => import('../server/nodes/63.js')),
			__memo(() => import('../server/nodes/64.js')),
			__memo(() => import('../server/nodes/65.js')),
			__memo(() => import('../server/nodes/66.js')),
			__memo(() => import('../server/nodes/67.js')),
			__memo(() => import('../server/nodes/68.js')),
			__memo(() => import('../server/nodes/69.js')),
			__memo(() => import('../server/nodes/70.js')),
			__memo(() => import('../server/nodes/71.js')),
			__memo(() => import('../server/nodes/72.js')),
			__memo(() => import('../server/nodes/73.js')),
			__memo(() => import('../server/nodes/74.js')),
			__memo(() => import('../server/nodes/75.js')),
			__memo(() => import('../server/nodes/76.js')),
			__memo(() => import('../server/nodes/77.js')),
			__memo(() => import('../server/nodes/78.js')),
			__memo(() => import('../server/nodes/79.js')),
			__memo(() => import('../server/nodes/80.js')),
			__memo(() => import('../server/nodes/81.js')),
			__memo(() => import('../server/nodes/82.js')),
			__memo(() => import('../server/nodes/83.js')),
			__memo(() => import('../server/nodes/84.js')),
			__memo(() => import('../server/nodes/85.js')),
			__memo(() => import('../server/nodes/86.js')),
			__memo(() => import('../server/nodes/87.js')),
			__memo(() => import('../server/nodes/88.js')),
			__memo(() => import('../server/nodes/89.js')),
			__memo(() => import('../server/nodes/90.js')),
			__memo(() => import('../server/nodes/91.js')),
			__memo(() => import('../server/nodes/92.js')),
			__memo(() => import('../server/nodes/93.js')),
			__memo(() => import('../server/nodes/94.js')),
			__memo(() => import('../server/nodes/95.js')),
			__memo(() => import('../server/nodes/96.js')),
			__memo(() => import('../server/nodes/97.js')),
			__memo(() => import('../server/nodes/98.js')),
			__memo(() => import('../server/nodes/99.js')),
			__memo(() => import('../server/nodes/100.js')),
			__memo(() => import('../server/nodes/101.js')),
			__memo(() => import('../server/nodes/102.js')),
			__memo(() => import('../server/nodes/103.js')),
			__memo(() => import('../server/nodes/104.js')),
			__memo(() => import('../server/nodes/105.js')),
			__memo(() => import('../server/nodes/106.js')),
			__memo(() => import('../server/nodes/107.js')),
			__memo(() => import('../server/nodes/108.js')),
			__memo(() => import('../server/nodes/109.js')),
			__memo(() => import('../server/nodes/110.js')),
			__memo(() => import('../server/nodes/111.js')),
			__memo(() => import('../server/nodes/112.js')),
			__memo(() => import('../server/nodes/113.js')),
			__memo(() => import('../server/nodes/114.js')),
			__memo(() => import('../server/nodes/115.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/a-great-craps-roll",
				pattern: /^\/a-great-craps-roll\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/a-perfect-craps-bet",
				pattern: /^\/a-perfect-craps-bet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/across",
				pattern: /^\/across\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/any-craps",
				pattern: /^\/any-craps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/any-seven",
				pattern: /^\/any-seven\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/art-of-verbal-betting",
				pattern: /^\/art-of-verbal-betting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/be-an-efficient-craps-player",
				pattern: /^\/be-an-efficient-craps-player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/better-craps-shooter",
				pattern: /^\/better-craps-shooter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/bridging-lay-odds",
				pattern: /^\/bridging-lay-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/buying-place-bets",
				pattern: /^\/buying-place-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/c-and-e",
				pattern: /^\/c-and-e\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/come-bet-basics",
				pattern: /^\/come-bet-basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/come-bet-odds",
				pattern: /^\/come-bet-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/come-bets",
				pattern: /^\/come-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/come-vs-place-bets",
				pattern: /^\/come-vs-place-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/coming-down-with-odds",
				pattern: /^\/coming-down-with-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/craps-basics",
				pattern: /^\/craps-basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/craps-blog",
				pattern: /^\/craps-blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/craps-calculators",
				pattern: /^\/craps-calculators\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/craps-corner",
				pattern: /^\/craps-corner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/craps-dealer-pet-peeves",
				pattern: /^\/craps-dealer-pet-peeves\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/craps-money-techniques",
				pattern: /^\/craps-money-techniques\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/craps-myths",
				pattern: /^\/craps-myths\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/craps-order-of-operation",
				pattern: /^\/craps-order-of-operation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/craps-simulator2",
				pattern: /^\/craps-simulator2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/craps-simulator",
				pattern: /^\/craps-simulator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/craps-superstitions",
				pattern: /^\/craps-superstitions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/craps",
				pattern: /^\/craps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/dealing-with-new-craps-players",
				pattern: /^\/dealing-with-new-craps-players\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/dont-come-lay-odds",
				pattern: /^\/dont-come-lay-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/dont-come",
				pattern: /^\/dont-come\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/dont-pass-lay-odds",
				pattern: /^\/dont-pass-lay-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/dont-pass",
				pattern: /^\/dont-pass\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/even-numbers",
				pattern: /^\/even-numbers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/first-time-craps-player",
				pattern: /^\/first-time-craps-player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(auth)/forgot-password",
				pattern: /^\/forgot-password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/glossary",
				pattern: /^\/glossary\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/hop-bets",
				pattern: /^\/hop-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/horn-high",
				pattern: /^\/horn-high\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/horn",
				pattern: /^\/horn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/including-the-point",
				pattern: /^\/including-the-point\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/inside",
				pattern: /^\/inside\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/leaving-the-craps-table",
				pattern: /^\/leaving-the-craps-table\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lure-of-craps-proposition-bets",
				pattern: /^\/lure-of-craps-proposition-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/managing-your-craps-bankroll",
				pattern: /^\/managing-your-craps-bankroll\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/max-odds",
				pattern: /^\/max-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/multi-bets",
				pattern: /^\/multi-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/not-to-do-at-craps-table",
				pattern: /^\/not-to-do-at-craps-table\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/outside",
				pattern: /^\/outside\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/overlays",
				pattern: /^\/overlays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/pass-line-basics",
				pattern: /^\/pass-line-basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/pass-line-odds",
				pattern: /^\/pass-line-odds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/place-bet-basics",
				pattern: /^\/place-bet-basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/place-bets",
				pattern: /^\/place-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/playing-the-donts",
				pattern: /^\/playing-the-donts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/practice-19mm-craps-dice",
				pattern: /^\/practice-19mm-craps-dice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/practice-40mm-craps-dice",
				pattern: /^\/practice-40mm-craps-dice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/practice-60mm-craps-dice",
				pattern: /^\/practice-60mm-craps-dice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/practice-come-bet-w-odds-payments-4-10",
				pattern: /^\/practice-come-bet-w-odds-payments-4-10\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/practice-come-bet-w-odds-payments-5-9",
				pattern: /^\/practice-come-bet-w-odds-payments-5-9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/practice-come-bet-w-odds-payments-6-8",
				pattern: /^\/practice-come-bet-w-odds-payments-6-8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/practice-craps-cards-black",
				pattern: /^\/practice-craps-cards-black\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/practice-craps-cards-grey",
				pattern: /^\/practice-craps-cards-grey\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/practice-craps-roll-cards",
				pattern: /^\/practice-craps-roll-cards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/practice-craps",
				pattern: /^\/practice-craps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/practice-full-craps-table-layout",
				pattern: /^\/practice-full-craps-table-layout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/practice-half-craps-table-layout",
				pattern: /^\/practice-half-craps-table-layout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/practice-horn-high-generator",
				pattern: /^\/practice-horn-high-generator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/practice-lay-odds-payments-4-10",
				pattern: /^\/practice-lay-odds-payments-4-10\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/practice-lay-odds-payments-5-9",
				pattern: /^\/practice-lay-odds-payments-5-9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/practice-lay-odds-payments-6-8",
				pattern: /^\/practice-lay-odds-payments-6-8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/practice-pass-line-odds-payments-4-10",
				pattern: /^\/practice-pass-line-odds-payments-4-10\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/practice-pass-line-odds-payments-5-9",
				pattern: /^\/practice-pass-line-odds-payments-5-9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/practice-pass-line-odds-payments-6-8",
				pattern: /^\/practice-pass-line-odds-payments-6-8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/practice-place-bet-payments-4-10",
				pattern: /^\/practice-place-bet-payments-4-10\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/practice-place-bet-payments-5-9",
				pattern: /^\/practice-place-bet-payments-5-9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/practice-place-bet-payments-6-8",
				pattern: /^\/practice-place-bet-payments-6-8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/presses",
				pattern: /^\/presses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(auth)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/proposition-basics",
				pattern: /^\/proposition-basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/proposition-bets",
				pattern: /^\/proposition-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/protecting-your-money",
				pattern: /^\/protecting-your-money\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/rank-of-craps-bets",
				pattern: /^\/rank-of-craps-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/right-craps-table",
				pattern: /^\/right-craps-table\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/site-map",
				pattern: /^\/site-map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/spread-bets",
				pattern: /^\/spread-bets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/straight-up",
				pattern: /^\/straight-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/terms-of-service",
				pattern: /^\/terms-of-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/the-craps-table",
				pattern: /^\/the-craps-table\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/the-crew",
				pattern: /^\/the-crew\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/the-dice",
				pattern: /^\/the-dice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/the-donts",
				pattern: /^\/the-donts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/the-field",
				pattern: /^\/the-field\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/the-hardways",
				pattern: /^\/the-hardways\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/the-pass-line",
				pattern: /^\/the-pass-line\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/the-stages",
				pattern: /^\/the-stages\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/tipping-the-dealers",
				pattern: /^\/tipping-the-dealers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/to-consider",
				pattern: /^\/to-consider\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/uptown-downtown",
				pattern: /^\/uptown-downtown\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/verbal-betting",
				pattern: /^\/verbal-betting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/win-a-craps-dispute",
				pattern: /^\/win-a-craps-dispute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/world",
				pattern: /^\/world\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/your-money",
				pattern: /^\/your-money\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/z-template-blog",
				pattern: /^\/z-template-blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/z-template-learn",
				pattern: /^\/z-template-learn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/z-template-more",
				pattern: /^\/z-template-more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/z-template-practice",
				pattern: /^\/z-template-practice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/z-template-single-col",
				pattern: /^\/z-template-single-col\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 115 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
