<script lang="ts">
	import MoreCrapsLayout from '$lib/clients/components/layouts/MoreCrapsLayout.svelte';
	import CalcBox from '$lib/clients/components/calculators/CalcBox.svelte';
	import CalcInput from '$lib/clients/components/calculators/CalcInput.svelte';
	import CalcInput2 from '$lib/clients/components/calculators/CalcInput2.svelte';
	import CalcInput3 from '$lib/clients/components/calculators/CalcInput3.svelte';
	import CalcInput4 from '$lib/clients/components/calculators/CalcInput4.svelte';
	import CalcInput5 from '$lib/clients/components/calculators/CalcInput5.svelte';
	import {
		calculatePassLine,
		calculateSixEightOdds,
		calculateFiveNineOdds,
		calculateFourTenOdds,
		calculateMaxOdds,
		calculatePlaceSixEight,
		calculatePlaceFiveNine,
		calculatePlaceFourTen,
		calculateBuyFourTen,
		calculateHardSixEight,
		calculateHardFourTen,
		calculateAcesTwelve,
		calculateAceDeuceYo,
		calculateCAndESplit,
		calculateCAndE,
		calculateAnySeven,
		calculateAnyCraps,
		calculateSingleField,
		calculateDoubleField,
		calculateHighLow,
		calculateElevenTwelve,
		calculateAcesAceDeuce,
		calculateSevenEleven,
		calculateHighLowYo,
		calculateThreeWay,
		calculateHorn,
		calculateHornHighAces,
		calculateHornHighAceDeuce,
		calculateHornHighYo,
		calculateHornHighTwelve,
		calculateWorld,
		calculateHopHighSide,
		calculateHopLowSide,
		calculateHopFours,
		calculateHopFives,
		calculateHopNines,
		calculateHopTens,
		calculateHopSixes,
		calculateHopSevens,
		calculateHopEights,
		calculateHopHardways,
		calculateComeBet,
		calculateSixEightComeOdds,
		calculateFiveNineComeOdds,
		calculateFourTenComeOdds,
		calculateDontPass,
		calculateSixEightLayOdds,
		calculateFiveNineLayOdds,
		calculateFourTenLayOdds,
		calculateMaxLay,
		calculateDontCome,
		calculateSixEightDcLayOdds,
		calculateFiveNineDcLayOdds,
		calculateFourTenDcLayOdds,
		calculateMaxDcLay,
		calculateSixEightOverlay,
		calculateFiveNineOverlay,
		calculateFourTenOverlay
	} from '$lib/utils/calculations';

	let title: string = 'Craps Calculators';
	let description: string = 'Craps bet calculators for all the bets on the Craps table.';
	let url: string = 'craps-calculators';
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta property="og:url" content={'http://parlaynation.com/' + url} />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:image" content={'images/' + url + '/' + url + '-header.jpg'} />
	<!-- TODO Schema-->
</svelte:head>

<MoreCrapsLayout>
	<header aria-label="Craps Calculators" class="p-6 bg-gray-100 dark:bg-gray-900">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">Craps Calculators</h1>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Check the payment for all the bets on the Craps table.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Learn to make the bets in proper increments.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Check the outcome of payouts by choosing what number rolls.
		</p>
	</header>
	<main
		aria-label="Main sections with calculators"
		class="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg mt-6 flex-col space-y-6"
	>
		<CalcBox
			description="Check the payment for a Pass Line Bet."
			title="Pass Line Payment Calculator"
		>
			<CalcInput
				calculate={calculatePassLine}
				id="pass_line_pymnt_calc"
				pId="pass_line_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Enter Pass Line Amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for Odds on a Pass Line Bet."
			title="Pass Line Odds Payment Calculators"
		>
			<CalcInput
				calculate={calculateSixEightOdds}
				id="six_eight_odds_pymnt_calc"
				pId="six_eight_odds_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Enter Odds amount for Point 6 or 8:"
			/>
			<CalcInput
				calculate={calculateFiveNineOdds}
				id="five_nine_odds_pymnt_calc"
				pId="five_nine_odds_calc_result"
				placeholder="$2 minimum"
				step={2}
				title="Enter Odds amount for Point 5 or 9:"
			/>
			<CalcInput
				calculate={calculateFourTenOdds}
				id="four_ten_odds_pymnt_calc"
				pId="four_ten_odds_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Odds amount for Point 4 or 10:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the total payment for a Pass Line with Max Odds when the table has 3x4x5x Odds."
			title="Max Odds Payment Calculator for 3x4x5x Odds"
		>
			<CalcInput
				calculate={calculateMaxOdds}
				id="max_odds_pymnt_calc"
				pId="max_odds_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Enter Pass Line Amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for the six different Place bets."
			title="Place Bet Payment Calculators"
		>
			<CalcInput
				calculate={calculatePlaceSixEight}
				id="place_six_eight_pymnt_calc"
				pId="place_six_eight_calc_result"
				placeholder="$6 minimum"
				step={6}
				title="Amount to Place on the 6 or 8:"
			/>
			<CalcInput
				id="place_five_nine_pymnt_calc"
				calculate={calculatePlaceFiveNine}
				pId="place_five_nine_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Amount to Place on the 5 or 9:"
			/>
			<CalcInput
				calculate={calculatePlaceFourTen}
				id="place_four_ten_pymnt_calc"
				pId="place_four_ten_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Amount to Place on the 4 or 10:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a Buying a 4 or 10."
			title="Buy 4 or 10 Payment Calculator"
		>
			<CalcInput
				calculate={calculateBuyFourTen}
				id="buy_pymnt_calc"
				pId="buy_calc_result"
				placeholder="$20 minimum"
				step={5}
				title="Enter Buy Amount:"
			/>
		</CalcBox>
		<CalcBox description="Check the payment for a Hardway bet." title="Hardway Payment Calculators">
			<CalcInput
				calculate={calculateHardSixEight}
				id="hard_six_eight_pymnt_calc"
				pId="hard_six_eight_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Hard 6 or 8 amount:"
			/>
			<CalcInput
				calculate={calculateHardFourTen}
				id="hard_four_ten_pymnt_calc"
				pId="hard_four_ten_calc_result"
				placeholder="$1 minumum"
				step={1}
				title="Enter Hard 4 or 10 amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made straight up on the Aces, Ace Deuce, Yo or Twelve."
			title="Straight Up Payment Calculators"
		>
			<CalcInput
				calculate={calculateAceDeuceYo}
				id="straight_low_side_pymnt_calc"
				pId="straight_low_side_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Ace Deuce or Yo amount:"
			/>
			<CalcInput
				calculate={calculateAcesTwelve}
				id="straight_high_side_pymnt_calc"
				pId="straight_high_side_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Aces or Twelve amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the C & E split."
			title="C & E Split Payment Calculator"
		>
			<CalcInput2
				calculate={calculateCAndESplit}
				id="c_and_e_split_pymnt_calc"
				pId="c_and_e_split_calc_result"
				placeholder="$2 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={2}
				title="Enter amount to split:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for the C & E when you only bet the C, when you only bet the E, or you bet them together."
			title="C & E Payment Calculator"
		>
			<CalcInput3
				calculate={calculateCAndE}
				id="c_and_e_split_pymnt_calc"
				idTwo="c_and_e_pymnt_calc"
				pId="c_and_e_calc_result"
				placeholder="$1 minimum"
				placeholderTwo="$1 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={1}
				title="Enter amount for the C (Any Craps):"
				titleTwo="Enter amount for the E (Eleven):"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for an Any Seven bet."
			title="Any Seven Payment Calculator"
		>
			<CalcInput
				calculate={calculateAnySeven}
				id="any_seven_pymnt_calc"
				pId="any_seven_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Any Seven Amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for an Any Craps bet."
			title="Any Craps Payment Calculator"
		>
			<CalcInput
				calculate={calculateAnyCraps}
				id="any_craps_pymnt_calc"
				pId="any_craps_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Any Craps Amount:"
			/>
		</CalcBox>
		<CalcBox description="Check the payment for the Field." title="The Field Payment Calculator">
			<CalcInput
				calculate={calculateSingleField}
				id="single_field_pymnt_calc"
				pId="single_field_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Amount for a roll of 3, 4, 9, 10, or 11:"
			/>
			<CalcInput
				calculate={calculateDoubleField}
				id="double_field_pymnt_calc"
				pId="double_field_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Amount for a roll of 2 or 12:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for when you bet the same amount on each the High (12) and the Low (2)."
			title="High - Low Payment Calculator"
		>
			<CalcInput
				calculate={calculateHighLow}
				id="high_low_pymnt_calc"
				pId="high_low_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter amount on EACH the High & Low:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for when you bet the same amount on each the Eleven - Twelve, often called ET."
			title="Eleven - Twelve Payment Calculator"
		>
			<CalcInput2
				calculate={calculateElevenTwelve}
				id="eleven_twelve_pymnt_calc"
				pId="eleven_twelve_calc_result"
				placeholder="$1 minimum"
				rollValues={[11, 12]}
				valueTitles={['Eleven', 'Twelve']}
				step={1}
				title="Enter amount on EACH the Eleven & Twelve:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for when you bet the same amount on each the Aces - Ace Deuce."
			title="Aces - Ace Deuce Payment Calculator"
		>
			<CalcInput2
				calculate={calculateAcesAceDeuce}
				id="aces_ace_deuce_pymnt_calc"
				pId="aces_ace_deuce_calc_result"
				placeholder="$1 minimum"
				rollValues={[2, 3]}
				valueTitles={['Aces', 'Ace Deuce']}
				step={1}
				title="Enter amount on EACH the Aces & Ace Deuce:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for when you bet the same amount on each the Seven - Eleven."
			title="Seven - Eleven Payment Calculator"
		>
			<CalcInput2
				calculate={calculateSevenEleven}
				id="seven_eleven_pymnt_calc"
				pId="seven_eleven_calc_result"
				placeholder="$1 minimum"
				rollValues={[7, 11]}
				valueTitles={['Seven', 'Eleven']}
				step={1}
				title="Enter amount on EACH the Seven & Eleven:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for when you bet the same amount on each the High - Low - Yo."
			title="High - Low - Yo Payment Calculator"
		>
			<CalcInput2
				calculate={calculateHighLowYo}
				id="high_low_yo_pymnt_calc"
				pId="high_low_yo_calc_result"
				placeholder="$1 minimum"
				rollValues={[2, 11, 12]}
				valueTitles={['Low', 'Yo', 'High']}
				step={1}
				title="Enter amount on EACH the High Low & Yo:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for for when you bet the same amount on each the Three Way Crap."
			title="Three Way Crap Payment Calculator"
		>
			<CalcInput2
				calculate={calculateThreeWay}
				id="three_way_pymnt_calc"
				pId="three_way_calc_result"
				placeholder="$1 minimum"
				rollValues={[2, 3, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Twelve']}
				step={1}
				title="Enter amount on EACH the Three Way Crap:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the Horn."
			title="Horn Payment Calculator"
		>
			<CalcInput2
				calculate={calculateHorn}
				id="horn_pymnt_calc"
				pId="horn_calc_result"
				placeholder="$4 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={4}
				title="Enter amount on the Horn:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the four Horn High bets."
			title="Horn High Payment Calculators"
		>
			<CalcInput4
				calculate={calculateHornHighAces}
				id="horn_high_aces_pymnt_calc"
				mainTitle="Horn High Aces"
				pId="horn_high_aces_calc_result"
				placeholder="$5 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={5}
				title="Enter amount on the Horn High Aces:"
			/>
			<CalcInput4
				calculate={calculateHornHighAceDeuce}
				id="horn_high_ace_deuce_pymnt_calc"
				mainTitle="Horn High Ace Deuce"
				pId="horn_high_ace_deuce_calc_result"
				placeholder="$5 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={5}
				title="Enter amount on the Horn High Ace Deuce:"
			/>
			<CalcInput4
				calculate={calculateHornHighYo}
				id="horn_high_yo_pymnt_calc"
				mainTitle="Horn High Yo"
				pId="horn_high_yo_calc_result"
				placeholder="$5 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={5}
				title="Enter amount on the Horn High Yo:"
			/>
			<CalcInput4
				calculate={calculateHornHighTwelve}
				id="horn_high_twelve_pymnt_calc"
				mainTitle="Horn High Twelve"
				pId="horn_high_twelve_calc_result"
				placeholder="$5 minimum"
				rollValues={[2, 3, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Yo', 'Twelve']}
				step={5}
				title="Enter amount on the Horn High Twelve:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the World."
			title="World Payment Calculator"
		>
			<CalcInput2
				calculate={calculateWorld}
				id="world_pymnt_calc"
				pId="world_calc_result"
				placeholder="$5 minimum"
				rollValues={[2, 3, 7, 11, 12]}
				valueTitles={['Aces', 'Ace Deuce', 'Seven', 'Yo', 'Twelve']}
				step={5}
				title="Enter amount on the World:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made straight up on any of the Hop bets."
			title="Hop Bet Payment Calculator"
		>
			<CalcInput
				id="hop_low_side_pymnt_calc"
				pId="hop_low_side_calc_result"
				calculate={calculateHopLowSide}
				placeholder="$1 minimum"
				step={1}
				title="Enter amount for any non-pair Hop bet:"
			/>
			<CalcInput
				calculate={calculateHopHighSide}
				id="hop_high_side_pymnt_calc"
				pId="hop_high_side_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter amount for any Hopping Hardway:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the Hopping 4's, 5's, 9's, or 10's."
			title="Two Number Hop Bet Payment Calculators"
		>
			<CalcInput5
				calculate={calculateHopFours}
				id="hop_fours_pymnt_calc"
				mainTitle="Hop 4's"
				pId="hop_fours_calc_result"
				placeholder="$1 minimum"
				rollCombo={['3-1', '2-2']}
				valueTitles={['Easy 4', 'Hard 4']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
			<CalcInput5
				calculate={calculateHopFives}
				id="hop_fives_pymnt_calc"
				mainTitle="Hop 5's"
				pId="hop_fives_calc_result"
				placeholder="$1 minimum"
				rollCombo={['4-1', '3-2']}
				valueTitles={['Forty-One', 'Thirty-Two']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
			<CalcInput5
				calculate={calculateHopNines}
				id="hop_nines_pymnt_calc"
				mainTitle="Hop 9's"
				pId="hop_nines_calc_result"
				placeholder="$1 minimum"
				rollCombo={['6-3', '5-4']}
				valueTitles={['Sixty-Three', 'Fifty-Four']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
			<CalcInput5
				calculate={calculateHopTens}
				id="hop_tens_pymnt_calc"
				mainTitle="Hop 10's"
				pId="hop_tens_calc_result"
				placeholder="$1 minimum"
				rollCombo={['6-4', '5-5']}
				valueTitles={['Easy 10', 'Hard 10']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the Hopping 6's, 7's, or 8's."
			title="Three Number Hop Bet Payment Calculators"
		>
			<CalcInput5
				calculate={calculateHopSixes}
				id="hop_sixes_pymnt_calc"
				mainTitle="Hop 6's"
				pId="hop_sixes_calc_result"
				placeholder="$1 minimum"
				rollCombo={['5-1', '4-2', '3-3']}
				valueTitles={['Fifty-One', 'Forty-Two', 'Hard 6']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
			<CalcInput5
				calculate={calculateHopSevens}
				id="hop_sevens_pymnt_calc"
				mainTitle="Hop 7's"
				pId="hop_sevens_calc_result"
				placeholder="$1 minimum"
				rollCombo={['6-1', '5-2', '4-3']}
				valueTitles={['Sixty-One', 'Fifty-Two', 'Forty-Three']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
			<CalcInput5
				calculate={calculateHopEights}
				id="hop_eights_pymnt_calc"
				mainTitle="Hop 8's"
				pId="hop_eights_calc_result"
				placeholder="$1 minimum"
				rollCombo={['6-2', '5-3', '4-4']}
				valueTitles={['Sixty-Two', 'Fifty-Three', 'Hard 8']}
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a bet made on the Hopping Hardways."
			title="Hopping Hardways Payment Calculator"
		>
			<CalcInput
				calculate={calculateHopHardways}
				id="hop_hardways_pymnt_calc"
				pId="hop_hardways_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter amount to bet on EACH Hop:"
			/>
		</CalcBox>
		<CalcBox description="Check the payment for a Come Bet." title="Come Bet Payment Calculator">
			<CalcInput
				calculate={calculateComeBet}
				id="come_bet_pymnt_calc"
				pId="come_bet_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Enter Come bet amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for Odds on a Come bet."
			title="Come Bet Odds Payment Calculators"
		>
			<CalcInput
				calculate={calculateSixEightComeOdds}
				id="six_eight_come_odds_pymnt_calc"
				pId="six_eight_come_odds_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Enter Odds amount for Point 6 or 8:"
			/>
			<CalcInput
				calculate={calculateFiveNineComeOdds}
				id="five_nine_come_odds_pymnt_calc"
				pId="five_nine_come_odds_calc_result"
				placeholder="$2 minimum"
				step={2}
				title="Enter Odds amount for Point 5 or 9:"
			/>
			<CalcInput
				calculate={calculateFourTenComeOdds}
				id="four_ten_come_odds_pymnt_calc"
				pId="four_ten_come_odds_calc_result"
				placeholder="$1 minimum"
				step={1}
				title="Enter Odds amount for Point 4 or 10:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a Don't Pass bet."
			title="Don't Pass Payment Calculator"
		>
			<CalcInput
				calculate={calculateDontPass}
				id="dont_pass_pymnt_calc"
				pId="dont_pass_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Enter Don't Pass amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for Lay Odds on the Don't Pass."
			title="Don't Pass Lay Odds Payment Calculators"
		>
			<CalcInput
				calculate={calculateSixEightLayOdds}
				id="six_eight_lay_odds_pymnt_calc"
				pId="six_eight_lay_odds_calc_result"
				placeholder="$6 minimum"
				step={6}
				title="Enter Lay Odds amount for 6 or 8:"
			/>
			<CalcInput
				calculate={calculateFiveNineLayOdds}
				id="five_nine_lay_odds_pymnt_calc"
				pId="five_nine_lay_odds_calc_result"
				placeholder="$3 minimum"
				step={3}
				title="Enter Lay Odds amount for 5 or 9:"
			/>
			<CalcInput
				calculate={calculateFourTenLayOdds}
				id="four_ten_lay_odds_pymnt_calc"
				pId="four_ten_lay_odds_calc_result"
				placeholder="$2 minimum"
				step={2}
				title="Enter Lay Odds amount for 4 or 10:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the Max Lay Odds for your bet on the Don't Pass."
			title="Check Max Don't Pass Lay Odds"
		>
			<CalcInput
				calculate={calculateMaxLay}
				id="max_lay_pymnt_calc"
				pId="max_lay_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Enter Don't Pass amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for a Don't Come bet."
			title="Don't Come Payment Calculator"
		>
			<CalcInput
				calculate={calculateDontCome}
				id="dont_come_pymnt_calc"
				pId="dont_come_calc_result"
				placeholder="$5 minimum"
				step={5}
				title="Enter Don't Come amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for Lay Odds on the Don't Come."
			title="Don't Come Lay Odds Payment Calculators"
		>
			<CalcInput
				calculate={calculateSixEightDcLayOdds}
				id="six_eight_dont_come_lay_odds_pymnt_calc"
				pId="six_eight_dont_come_lay_odds_calc_result"
				placeholder="$6 minimum"
				step={6}
				title="Enter Lay Odds amount for 6 or 8:"
			/>
			<CalcInput
				calculate={calculateFiveNineDcLayOdds}
				id="five_nine_dont_come_lay_odds_pymnt_calc"
				pId="five_nine_dont_come_lay_odds_calc_result"
				placeholder="$3 minimum"
				step={3}
				title="Enter Lay Odds amount for 5 or 9:"
			/>
			<CalcInput
				calculate={calculateFourTenDcLayOdds}
				id="four_ten_dont_come_lay_odds_pymnt_calc"
				pId="four_ten_dont_come_lay_odds_calc_result"
				placeholder="$2 minimum"
				step={2}
				title="Enter Lay Odds amount for 4 or 10:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the Max Lay Odds for your bet on the Don't Come."
			title="Check Max Don't Come Lay Odds"
		>
			<CalcInput
				calculate={calculateMaxDcLay}
				id="max_dont_come_lay_pymnt_calc"
				pId="max_dont_come_lay_calc_result"
				placeholder="Table minimum"
				step={5}
				title="Enter Don't Come amount:"
			/>
		</CalcBox>
		<CalcBox
			description="Check the payment for Overlays against any Point."
			title="Overlay Payment Calculators"
		>
			<CalcInput
				calculate={calculateSixEightOverlay}
				id="six_eight_overlay_pymnt_calc"
				pId="six_eight_overlay_calc_result"
				placeholder="$24 minimum"
				step={6}
				title="Enter Overlay amount for 6 or 8:"
			/>
			<CalcInput
				calculate={calculateFiveNineOverlay}
				id="five_nine_overlay_pymnt_calc"
				pId="five_nine_overlay_calc_result"
				placeholder="$30 minimum"
				step={6}
				title="Enter Overlay amount for 5 or 9:"
			/>
			<CalcInput
				calculate={calculateFourTenOverlay}
				id="four_ten_overlay_pymnt_calc"
				pId="four_ten_overlay_calc_result"
				placeholder="$40 minimum"
				step={10}
				title="Enter Overlay amount for 4 or 10:"
			/>
		</CalcBox>
	</main>
</MoreCrapsLayout>
