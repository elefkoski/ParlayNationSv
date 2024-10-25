<script lang="ts">
	import MoreCrapsLayout from '$lib/clients/components/layouts/MoreCrapsLayout.svelte';
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

	let title: string = 'Craps Simulator';
	let description: string = 'Practice playing craps.';
	("Downloadable PDF's for Craps. Practice Math Printouts, Dice and Table Printouts, and more.");
	let url: string = 'craps-simulator';
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
	<link rel="stylesheet" href="src/w3.css" />
	<link rel="stylesheet" href="src/styles.css" />
	<link rel="stylesheet" href="src/craps-simulator.css" />
	<script defer type="module" src="src/lib/utils/craps-simulator.ts"></script>

	<!-- TODO Schema-->
</svelte:head>

<MoreCrapsLayout>
	<header aria-label="Craps simulator" class="p-6 bg-gray-100 dark:bg-gray-900">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">Craps Simulator</h1>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			This Craps Simulator will help you learn some of the most basic bets in Craps: The Pass Line,
			Pass Line Odds, Place Bets, and the Field.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Once you learn how to play the Pass Line, you will be able to play Craps. The simulator will
			guide you through making a Point, adding Odds, and letting you roll until you seven out.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			Place bets allow betting each or spread bets, and can be turned ON and OFF. Payments allow
			same bet, and presses include one-unit, press, full press, and double unit presses.
		</p>
		<p class="text-gray-700 dark:text-gray-300 mb-4 leading-7">
			The simulator tracks the number of Points you make and how many times you rolled each number.
		</p>
	</header>
	<main aria-label="Main sections with craps simulator" class="mt-6">
		<section aria-label="Rules of craps" class="craps-rules">
			<h2>Objective:</h2>
			<p>
				Roll the dice to establish a Point of 4, 5, 6, 8, 9, or 10. Roll that Point again before a 7
				to win.
			</p>
			<p class="pb-4">
				During the Comeout Roll, when the Puck is OFF, you win if you roll 7 or 11, and lose if you
				roll a 2, 3, or 12.
			</p>
			<h2>Payouts:</h2>
			<section aria-label="Craps payouts and Odds" class="craps-payouts">
				<div>
					<h3>The Pass Line</h3>
					<ul>
						<li>The Pass Line always pays 1:1 (even money).</li>
					</ul>
					<h3>Pass Line Odds</h3>
					<ul>
						<li>Point 6 or 8 pays 6:5</li>
						<li>Point 5 or 9 pays 3:2</li>
						<li>Point 4 or 10 pays 2:1</li>
					</ul>
					<h3>Max Pass Line Odds</h3>
					<ul>
						<li>Max Odds are 5x your Pass Line bet on the 6 & 8.</li>
						<li>Max Odds are 4x your Pass Line bet on the 5 & 9.</li>
						<li>Max Odds are 3x your Pass Line bet on the 4 & 10.</li>
					</ul>
				</div>
				<div>
					<h3>Place Bets</h3>
					<ul>
						<li>Place 6 or 8 pays 7:6</li>
						<li>Place 5 or 9 pays 7:5</li>
						<li>Place 4 or 10 pays 9:5</li>
						<li>Buy 4 or 10 pays 2:1 with a 5% commission</li>
					</ul>
					<h3>The Field</h3>
					<ul>
						<li>Pays 1:1 when 3, 4, 9, 10, 11 rolls.</li>
						<li>Pays 2:1 when 2 or 12 rolls.</li>
					</ul>
				</div>
			</section>
		</section>
		<div id="craps_game_container">
			<div id="the_craps_game">
				<h2 class="w3-center">Play Craps</h2>
				<section aria-label="Stage of game" class="stage-of-game">
					<div>
						<h3 id="stage_of_game">The Comeout Roll</h3>
						<h4>Previous Rolls:</h4>
						<h4 id="the_previous_rolls">&#8211;</h4>
						<!--<p id="test_me_11"></p>-->
					</div>
					<div class="display-point">
						<h4>Point</h4>
						<div class="center-the-point">
							<span id="the_point">&#8211;</span>
						</div>
					</div>
				</section>
				<section aria-label="The craps table" class="table-area">
					<img
						id="table-layout"
						alt="table layout"
						src="src/images/craps-simulator/table_layout.webp"
					/>
					<img
						id="puck_on"
						style="display:none;"
						alt="puck on"
						src="src/images/craps-simulator/puck_on.webp"
					/>
					<img id="puck_off" alt="puck off" src="src/images/craps-simulator/puck_off.webp" />

					<!--Transparent overlay buttons for bet and pay menu's-->
					<section aria-label="Bet menu buttons">
						<a onClick="showBetMenu(1)" id="show_pl_btn" />
						<a onClick="showBetMenu(3)" id="show_pl_odds_btn" style="display: none;" />
						<a onClick="showOffMenu(5)" id="show_place_four_btn" />
						<a onClick="showOffMenu(6)" id="show_place_five_btn" />
						<a onClick="showOffMenu(7)" id="show_place_six_btn" />
						<a onClick="showOffMenu(8)" id="show_place_eight_btn" />
						<a onClick="showOffMenu(9)" id="show_place_nine_btn" />
						<a onClick="showOffMenu(10)" id="show_place_ten_btn" />
						<a onClick="showBetMenu(11)" id="show_field_btn" />
					</section>

					<!--Off Menus-->
					<section
						id="place_four_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place four off menu"
					>
						<h3 id="off_header_four">Place Bets are OFF</h3>
						<p id="off_para_four" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="four_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(5)">Bet Place and turn ON</button
						>
						<button
							id="four_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(5)">Pickup Place Four</button
						>
						<button
							id="four_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(5)">Pickup Place Four</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_five_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place five off menu"
					>
						<h3 id="off_header_five">Place Bets are OFF</h3>
						<p id="off_para_five" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="five_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(6)">Bet Place and turn ON</button
						>
						<button
							id="five_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(6)">Pickup Place Five</button
						>
						<button
							id="five_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(6)">Pickup Place Five</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_six_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place six off menu"
					>
						<h3 id="off_header_six">Place Bets are OFF</h3>
						<p id="off_para_six" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="six_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(7)">Bet Place and turn ON</button
						>
						<button
							id="six_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(7)">Pickup Place Six</button
						>
						<button
							id="six_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(7)">Pickup Place Six</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_eight_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place eight off menu"
					>
						<h3 id="off_header_eight">Place Bets are OFF</h3>
						<p id="off_para_eight" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="eight_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(8)">Bet Place and turn ON</button
						>
						<button
							id="eight_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(8)">Pickup Place Eight</button
						>
						<button
							id="eight_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(8)">Pickup Place Eight</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_nine_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place nine off menu"
					>
						<h3 id="off_header_nine">Place Bets are OFF</h3>
						<p id="off_para_nine" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="nine_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(9)">Bet Place and turn ON</button
						>
						<button
							id="nine_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(9)">Pickup Place Nine</button
						>
						<button
							id="nine_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(9)">Pickup Place Nine</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_ten_off_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place ten off menu"
					>
						<h3 id="off_header_ten">Place Bets are OFF</h3>
						<p id="off_para_ten" class="a-disclaimer">
							Place bets are off during the Comeout Roll. You can turn any number of Place bets "ON"
							by asking the dealer.
						</p>
						<button
							id="ten_off_menu_btn_one"
							class="wide-btn"
							type="button"
							onClick="showBetMenu(10)">Bet Place and turn ON</button
						>
						<button
							id="ten_off_menu_btn_two"
							type="button"
							class="pickup-btn"
							onClick="removeBet(10)">Pickup Place Ten</button
						>
						<button
							id="ten_off_menu_btn_three"
							type="button"
							class="pickup-btn"
							onClick="removeBet(10)">Pickup Place Ten</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>

					<!--Bet Menus-->
					<section
						id="pass_line_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust pass line popup"
					>
						<h3>Bet Pass Line</h3>
						<div class="button-set">
							<button type="button" onClick="betPassLine(5)">$5</button>
							<button type="button" onClick="betPassLine(10)">$10</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betPassLine(25)">$25</button>
							<button type="button" onClick="betPassLine(50)">$50</button>
						</div>
						<button class="wide-btn" type="button" onClick="betMax(1)">Max Bet</button>
						<button class="wide-btn" type="button" onClick="betAll(1)">All In</button>
						<form onSubmit="return false;">
							<label for="pl_bet_amount">Bet something else: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="pl_bet_amount"
									name="pl_bet_amount"
									step="5"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betPassLine(parseInt(document.getElementById('pl_bet_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="removeBet(1)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="pass_line_odds_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust pass line odds popup"
					>
						<h3>Bet Pass Line Odds</h3>
						<div class="button-set">
							<button id="pl_odds_bet_btn_1" type="button" />
							<button id="pl_odds_bet_btn_2" type="button" />
						</div>
						<div class="button-set">
							<button id="pl_odds_bet_btn_3" type="button" />
							<button id="pl_odds_bet_btn_4" type="button" />
						</div>
						<button class="wide-btn" type="button" onClick="betMax(3)">Max Odds</button>
						<button class="wide-btn" type="button" onClick="betAll(3)">All In</button>
						<form onSubmit="return false;">
							<label for="pl_odds_bet_amount">Bet something else: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="pl_odds_bet_amount"
									name="pl_bet_amount"
									step="5"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betPassLineOdds(parseInt(document.getElementById('pl_odds_bet_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="removeBet(3)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="the_field_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the field popup"
					>
						<h3>Bet the Field</h3>
						<div class="button-set">
							<button type="button" onClick="betField(5)">$5 Field</button>
							<button type="button" onClick="betField(10)">$10 Field</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betField(25)">$25 Field</button>
							<button type="button" onClick="betField(50)">$50 Field</button>
						</div>
						<button class="wide-btn" type="button" onClick="betMax(11)">Max Bet</button>
						<button class="wide-btn" type="button" onClick="betAll(11)">All In</button>
						<form onSubmit="return false;">
							<label for="field_bet_amount">Bet something else: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="field_bet_amount"
									name="field_bet_amount"
									step="5"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betField(parseInt(document.getElementById('field_bet_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="removeBet(11)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_four_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place four popup"
					>
						<h3>Place the Four</h3>
						<div class="button-set">
							<button type="button" onClick="placeFour(5)">Place $5</button>
							<button type="button" onClick="placeFour(10)">Place $10</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeFour(15)">Place $15</button>
							<button type="button" onClick="buyFour(25)">Buy $25</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="buyFour(35)">Buy $35</button>
							<button type="button" onClick="buyFour(50)">Buy $50</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="buyFour(75)">Buy $75</button>
							<button type="button" onClick="buyFour(100)">Buy $100</button>
						</div>
						<div class="bet-other-boxes">
							<form onSubmit="return false;">
								<label for="place_four_amount">Place other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="place_four_amount"
										name="place_four_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="placeFour(parseInt(document.getElementById('place_four_amount').value))"
										>Bet</button
									>
								</div>
							</form>
							<form onSubmit="return false;">
								<label for="buy_four_amount">Buy other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="buy_four_amount"
										name="buy_four_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="buyFour(parseInt(document.getElementById('buy_four_amount').value))"
										>Buy</button
									>
								</div>
							</form>
						</div>
						<div class="button-set">
							<button type="button" onClick="betMax(5)">Max Bet</button>
							<button type="button" onClick="betAll(5)">All In</button>
						</div>
						<div class="button-set">
							<button spread-btn type="button" onClick="openBetEachMenu(5)">Bet Each</button>
							<button spread-btn type="button" onClick="openSpreadBetMenu(5)"
								>Bet a Spread Bet</button
							>
						</div>
						<div class="button-set">
							<button type="button" onClick="turnOffPlace(5)">Four OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</div>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(5)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_five_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place five bet menu"
					>
						<h3>Place the Five</h3>
						<div class="button-set">
							<button type="button" onClick="placeFive(5)">Place $5</button>
							<button type="button" onClick="placeFive(10)">Place $10</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeFive(15)">Place $15</button>
							<button type="button" onClick="placeFive(25)">Place $25</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeFive(35)">Place $35</button>
							<button type="button" onClick="placeFive(50)">Place $50</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeFive(75)">Place $75</button>
							<button type="button" onClick="placeFive(100)">Place $100</button>
						</div>
						<form onSubmit="return false;">
							<label for="place_five_amount">Place other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_five_amount"
									name="place_five_amount"
									step="5"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="placeFive(parseInt(document.getElementById('place_five_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<div class="button-set">
							<button type="button" onClick="betMax(6)">Max Bet</button>
							<button type="button" onClick="betAll(6)">All In</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="openBetEachMenu(6)">Bet Each</button>
							<button type="button" onClick="openSpreadBetMenu(6)">Bet a Spread Bet</button>
						</div>
						<section aria-label="Turn place bets off" class="button-set">
							<button type="button" onClick="turnOffPlace(6)">Five OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</section>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(6)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_six_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place six bet menu"
					>
						<h3>Place the Six</h3>
						<div class="button-set">
							<button type="button" onClick="placeSix(6)">Place $6</button>
							<button type="button" onClick="placeSix(12)">Place $12</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeSix(18)">Place $18</button>
							<button type="button" onClick="placeSix(24)">Place $24</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeSix(30)">Place $30</button>
							<button type="button" onClick="placeSix(48)">Place $48</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeSix(60)">Place $60</button>
							<button type="button" onClick="placeSix(90)">Place $90</button>
						</div>
						<form onSubmit="return false;">
							<label for="place_six_amount">Place other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_six_amount"
									name="place_six_amount"
									step="6"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="placeSix(parseInt(document.getElementById('place_six_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<div class="button-set">
							<button type="button" onClick="betMax(7)">Max Bet</button>
							<button type="button" onClick="betAll(7)">All In</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="openBetEachMenu(7)">Bet Each</button>
							<button type="button" onClick="openSpreadBetMenu(7)">Bet a Spread Bet</button>
						</div>
						<section aria-label="Turn place bets off" class="button-set">
							<button type="button" onClick="turnOffPlace(7)">Six OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</section>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(7)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_eight_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place eight bet menu"
					>
						<h3>Place the Eight</h3>
						<div class="button-set">
							<button type="button" onClick="placeEight(6)">Place $6</button>
							<button type="button" onClick="placeEight(12)">Place $12</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeEight(18)">Place $18</button>
							<button type="button" onClick="placeEight(24)">Place $24</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeEight(30)">Place $30</button>
							<button type="button" onClick="placeEight(48)">Place $48</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeEight(60)">Place $60</button>
							<button type="button" onClick="placeEight(90)">Place $90</button>
						</div>
						<form onSubmit="return false;">
							<label for="place_eight_amount">Place other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_eight_amount"
									name="place_eight_amount"
									step="6"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="placeEight(parseInt(document.getElementById('place_eight_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<div class="button-set">
							<button type="button" onClick="betMax(8)">Max Bet</button>
							<button type="button" onClick="betAll(8)">All In</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="openBetEachMenu(8)">Bet Each</button>
							<button type="button" onClick="openSpreadBetMenu(8)">Bet a Spread Bet</button>
						</div>
						<section aria-label="Turn place bets off" class="button-set">
							<button type="button" onClick="turnOffPlace(8)">Eight OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</section>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(8)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_nine_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place nine bet menu"
					>
						<h3>Place the Nine</h3>
						<div class="button-set">
							<button type="button" onClick="placeNine(5)">Place $5</button>
							<button type="button" onClick="placeNine(10)">Place $10</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeNine(15)">Place $15</button>
							<button type="button" onClick="placeNine(25)">Place $25</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeNine(35)">Place $35</button>
							<button type="button" onClick="placeNine(50)">Place $50</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeNine(75)">Place $75</button>
							<button type="button" onClick="placeNine(100)">Place $100</button>
						</div>
						<form onSubmit="return false;">
							<label for="place_nine_amount">Place other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_nine_amount"
									name="place_nine_amount"
									step="5"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="placeNine(parseInt(document.getElementById('place_nine_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<div class="button-set">
							<button type="button" onClick="betMax(9)">Max Bet</button>
							<button type="button" onClick="betAll(9)">All In</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="openBetEachMenu(9)">Bet Each</button>
							<button type="button" onClick="openSpreadBetMenu(9)">Bet a Spread Bet</button>
						</div>
						<section aria-label="Turn place bets off" class="button-set">
							<button type="button" onClick="turnOffPlace(9)">Nine OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</section>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(9)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>
					<section
						id="place_ten_bet_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Adjust the place ten bet menu"
					>
						<h3>Place the Ten</h3>
						<div class="button-set">
							<button type="button" onClick="placeTen(5)">Place $5</button>
							<button type="button" onClick="placeTen(10)">Place $10</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="placeTen(15)">Place $15</button>
							<button type="button" onClick="buyTen(25)">Buy $25</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="buyTen(35)">Buy $35</button>
							<button type="button" onClick="buyTen(50)">Buy $50</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="buyTen(75)">Buy $75</button>
							<button type="button" onClick="buyTen(100)">Buy $100</button>
						</div>
						<div class="bet-other-boxes">
							<form onSubmit="return false;">
								<label for="place_ten_amount">Place other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="place_ten_amount"
										name="place_ten_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="placeTen(parseInt(document.getElementById('place_ten_amount').value))"
										>Bet</button
									>
								</div>
							</form>
							<form onSubmit="return false;">
								<label for="buy_ten_amount">Buy other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="buy_ten_amount"
										name="buy_ten_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="buyTen(parseInt(document.getElementById('buy_ten_amount').value))"
										>Buy</button
									>
								</div>
							</form>
						</div>
						<div class="button-set">
							<button type="button" onClick="betMax(10)">Max Bet</button>
							<button type="button" onClick="betAll(10)">All In</button>
						</div>
						<button class="wide-btn spread-btn" type="button" onClick="openBetEachMenu(10)"
							>Bet Each</button
						>
						<button class="wide-btn spread-btn" type="button" onClick="openSpreadBetMenu(10)"
							>Bet a Spread Bet</button
						>
						<section aria-label="Turn place bets off" class="button-set">
							<button type="button" onClick="turnOffPlace(10)">Ten OFF</button>
							<button type="button" onClick="turnOffAllPlaceBets()">All Place OFF</button>
						</section>
						<button class="wide-btn spread-btn" type="button" onClick="allPlaceBetsDown()"
							>All Place Bets Down</button
						>
						<button type="button" class="pickup-btn" onClick="removeBet(10)">Pickup Bet</button>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>

					<!--Spread Bet Menus-->
					<section
						id="comeout_roll_spread_menu"
						style="display: none;"
						aria-label="Comeout roll spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="spread_btn_1" onClick="betAcrossIncluding(32)">$32</button>
							<button type="button" id="spread_btn_2" onClick="betAcrossIncluding(64)">$64</button>
							<button type="button" id="spread_btn_3" onClick="betAcrossIncluding(96)">$96</button>
							<button type="button" id="spread_btn_4" onClick="betAcrossIncluding(162)">$162</button
							>
							<button type="button" id="spread_btn_5" onClick="betAcrossIncluding(325)">$325</button
							>
							<button type="button" id="spread_btn_6" onClick="betAcrossIncluding(650)">$650</button
							>
						</div>
						<h5>Inside - Points 5, 6, 8, 9</h5>
						<div class="six-button-set">
							<button type="button" id="spread_btn_7" onClick="betInside(22)">$22</button>
							<button type="button" id="spread_btn_8" onClick="betInside(44)">$44</button>
							<button type="button" id="spread_btn_9" onClick="betInside(66)">$66</button>
							<button type="button" id="spread_btn_10" onClick="betInside(110)">$110</button>
							<button type="button" id="spread_btn_11" onClick="betInside(220)">$220</button>
							<button type="button" id="spread_btn_12" onClick="betInside(440)">$440</button>
						</div>
						<h5>Outside - Points 4, 5, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="spread_btn_13" onClick="betOutside(20)">$20</button>
							<button type="button" id="spread_btn_14" onClick="betOutside(40)">$40</button>
							<button type="button" id="spread_btn_15" onClick="betOutside(60)">$60</button>
							<button type="button" id="spread_btn_16" onClick="betOutside(102)">$102</button>
							<button type="button" id="spread_btn_17" onClick="betOutside(205)">$205</button>
							<button type="button" id="spread_btn_18" onClick="betOutside(410)">$410</button>
						</div>
						<h5>Uptown - Points 8, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="spread_btn_19" onClick="betUptown(16)">$16</button>
							<button type="button" id="spread_btn_20" onClick="betUptown(32)">$32</button>
							<button type="button" id="spread_btn_21" onClick="betUptown(48)">$48</button>
							<button type="button" id="spread_btn_22" onClick="betUptown(81)">$76</button>
							<button type="button" id="spread_btn_23" onClick="betUptown(162)">$162</button>
							<button type="button" id="spread_btn_24" onClick="betUptown(325)">$325</button>
						</div>
						<h5>Downtown - Points 4, 5, 6</h5>
						<div class="six-button-set">
							<button type="button" id="spread_btn_25" onClick="betDowntown(16)">$16</button>
							<button type="button" id="spread_btn_26" onClick="betDowntown(32)">$32</button>
							<button type="button" id="spread_btn_27" onClick="betDowntown(48)">$48</button>
							<button type="button" id="spread_btn_28" onClick="betDowntown(81)">$81</button>
							<button type="button" id="spread_btn_29" onClick="betDowntown(162)">$162</button>
							<button type="button" id="spread_btn_30" onClick="betDowntown(325)">$325</button>
						</div>
						<button
							id="crSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_four_spread_menu"
						style="display: none;"
						aria-label="Point four spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="four_spread_btn_1" onClick="betAcross(27)">$27</button>
							<button type="button" id="four_spread_btn_2" onClick="betAcross(54)">$54</button>
							<button type="button" id="four_spread_btn_3" onClick="betAcross(81)">$81</button>
							<button type="button" id="four_spread_btn_4" onClick="betAcross(136)">$136</button>
							<button type="button" id="four_spread_btn_5" onClick="betAcross(272)">$272</button>
							<button type="button" id="four_spread_btn_6" onClick="betAcross(545)">$545</button>
						</div>
						<h5>Inside - Points 5, 6, 8, 9</h5>
						<div class="six-button-set">
							<button type="button" id="four_spread_btn_7" onClick="betInside(22)">$22</button>
							<button type="button" id="four_spread_btn_8" onClick="betInside(44)">$44</button>
							<button type="button" id="four_spread_btn_9" onClick="betInside(66)">$66</button>
							<button type="button" id="four_spread_btn_10" onClick="betInside(110)">$110</button>
							<button type="button" id="four_spread_btn_11" onClick="betInside(220)">$220</button>
							<button type="button" id="four_spread_btn_12" onClick="betInside(440)">$440</button>
						</div>
						<h5>Outside - Points 5, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="four_spread_btn_13" onClick="betOutside(15)">$15</button>
							<button type="button" id="four_spread_btn_14" onClick="betOutside(30)">$30</button>
							<button type="button" id="four_spread_btn_15" onClick="betOutside(45)">$45</button>
							<button type="button" id="four_spread_btn_16" onClick="betOutside(76)">$76</button>
							<button type="button" id="four_spread_btn_17" onClick="betOutside(152)">$152</button>
							<button type="button" id="four_spread_btn_18" onClick="betOutside(305)">$305</button>
						</div>
						<h5>Uptown - Points 8, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="four_spread_btn_19" onClick="betUptown(16)">$16</button>
							<button type="button" id="four_spread_btn_20" onClick="betUptown(32)">$32</button>
							<button type="button" id="four_spread_btn_21" onClick="betUptown(48)">$48</button>
							<button type="button" id="four_spread_btn_22" onClick="betUptown(81)">$81</button>
							<button type="button" id="four_spread_btn_23" onClick="betUptown(162)">$162</button>
							<button type="button" id="four_spread_btn_24" onClick="betUptown(325)">$325</button>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="four_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="four_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="four_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="four_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="four_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="four_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="fourSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_five_spread_menu"
						style="display: none;"
						aria-label="Point five spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="five_spread_btn_1" onClick="betAcross(27)">$27</button>
							<button type="button" id="five_spread_btn_2" onClick="betAcross(54)">$54</button>
							<button type="button" id="five_spread_btn_3" onClick="betAcross(81)">$81</button>
							<button type="button" id="five_spread_btn_4" onClick="betAcross(137)">$137</button>
							<button type="button" id="five_spread_btn_5" onClick="betAcross(275)">$275</button>
							<button type="button" id="five_spread_btn_6" onClick="betAcross(550)">$550</button>
						</div>
						<h5>Inside - Points 6, 8, 9</h5>
						<div class="six-button-set">
							<button type="button" id="five_spread_btn_7" onClick="betInside(17)">$17</button>
							<button type="button" id="five_spread_btn_8" onClick="betInside(34)">$34</button>
							<button type="button" id="five_spread_btn_9" onClick="betInside(51)">$51</button>
							<button type="button" id="five_spread_btn_10" onClick="betInside(85)">$85</button>
							<button type="button" id="five_spread_btn_11" onClick="betInside(170)">$170</button>
							<button type="button" id="five_spread_btn_12" onClick="betInside(340)">$340</button>
						</div>
						<h5>Outside - Points 4, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="five_spread_btn_13" onClick="betOutside(15)">$15</button>
							<button type="button" id="five_spread_btn_14" onClick="betOutside(30)">$30</button>
							<button type="button" id="five_spread_btn_15" onClick="betOutside(45)">$45</button>
							<button type="button" id="five_spread_btn_16" onClick="betOutside(77)">$77</button>
							<button type="button" id="five_spread_btn_17" onClick="betOutside(155)">$155</button>
							<button type="button" id="five_spread_btn_18" onClick="betOutside(310)">$310</button>
						</div>
						<h5>Uptown - Points 8, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="five_spread_btn_19" onClick="betUptown(16)">$16</button>
							<button type="button" id="five_spread_btn_20" onClick="betUptown(32)">$32</button>
							<button type="button" id="five_spread_btn_21" onClick="betUptown(48)">$48</button>
							<button type="button" id="five_spread_btn_22" onClick="betUptown(81)">$81</button>
							<button type="button" id="five_spread_btn_23" onClick="betUptown(162)">$162</button>
							<button type="button" id="five_spread_btn_24" onClick="betUptown(325)">$325</button>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="five_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="five_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="five_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="five_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="five_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="five_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="fiveSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_six_spread_menu"
						style="display: none;"
						aria-label="Point six spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="six_spread_btn_1" onClick="betAcross(26)">$26</button>
							<button type="button" id="six_spread_btn_2" onClick="betAcross(52)">$52</button>
							<button type="button" id="six_spread_btn_3" onClick="betAcross(78)">$78</button>
							<button type="button" id="six_spread_btn_4" onClick="betAcross(132)">$132</button>
							<button type="button" id="six_spread_btn_5" onClick="betAcross(265)">$265</button>
							<button type="button" id="six_spread_btn_6" onClick="betAcross(530)">$530</button>
						</div>
						<h5>Inside - Points 5, 8, 9</h5>
						<div class="six-button-set">
							<button type="button" id="six_spread_btn_7" onClick="betInside(16)">$16</button>
							<button type="button" id="six_spread_btn_8" onClick="betInside(32)">$32</button>
							<button type="button" id="six_spread_btn_9" onClick="betInside(48)">$48</button>
							<button type="button" id="six_spread_btn_10" onClick="betInside(80)">$80</button>
							<button type="button" id="six_spread_btn_11" onClick="betInside(160)">$160</button>
							<button type="button" id="six_spread_btn_12" onClick="betInside(320)">$320</button>
						</div>
						<h5>Outside - Points 4, 5, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="six_spread_btn_13" onClick="betOutside(20)">$20</button>
							<button type="button" id="six_spread_btn_14" onClick="betOutside(40)">$40</button>
							<button type="button" id="six_spread_btn_15" onClick="betOutside(60)">$60</button>
							<button type="button" id="six_spread_btn_16" onClick="betOutside(102)">$102</button>
							<button type="button" id="six_spread_btn_17" onClick="betOutside(205)">$205</button>
							<button type="button" id="six_spread_btn_18" onClick="betOutside(410)">$410</button>
						</div>
						<h5>Uptown - Points 8, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="six_spread_btn_19" onClick="betUptown(16)">$16</button>
							<button type="button" id="six_spread_btn_20" onClick="betUptown(32)">$32</button>
							<button type="button" id="six_spread_btn_21" onClick="betUptown(48)">$48</button>
							<button type="button" id="six_spread_btn_22" onClick="betUptown(81)">$81</button>
							<button type="button" id="six_spread_btn_23" onClick="betUptown(162)">$162</button>
							<button type="button" id="six_spread_btn_24" onClick="betUptown(325)">$325</button>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="six_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="six_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="six_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="six_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="six_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="six_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="sixSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_eight_spread_menu"
						style="display: none;"
						aria-label="Point eight spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="eight_spread_btn_1" onClick="betAcross(26)">$26</button>
							<button type="button" id="eight_spread_btn_2" onClick="betAcross(52)">$52</button>
							<button type="button" id="eight_spread_btn_3" onClick="betAcross(78)">$78</button>
							<button type="button" id="eight_spread_btn_4" onClick="betAcross(132)">$132</button>
							<button type="button" id="eight_spread_btn_5" onClick="betAcross(265)">$265</button>
							<button type="button" id="eight_spread_btn_6" onClick="betAcross(530)">$530</button>
						</div>
						<h5>Inside - Points 5, 6, 9</h5>
						<div class="six-button-set">
							<button type="button" id="eight_spread_btn_7" onClick="betInside(16)">$16</button>
							<button type="button" id="eight_spread_btn_8" onClick="betInside(32)">$32</button>
							<button type="button" id="eight_spread_btn_9" onClick="betInside(48)">$48</button>
							<button type="button" id="eight_spread_btn_10" onClick="betInside(80)">$80</button>
							<button type="button" id="eight_spread_btn_11" onClick="betInside(160)">$160</button>
							<button type="button" id="eight_spread_btn_12" onClick="betInside(320)">$320</button>
						</div>
						<h5>Outside - Points 4, 5, 9, 10</h5>
						<div class="six-button-set">
							<button type="button" id="eight_spread_btn_13" onClick="betOutside(20)">$20</button>
							<button type="button" id="eight_spread_btn_14" onClick="betOutside(40)">$40</button>
							<button type="button" id="eight_spread_btn_15" onClick="betOutside(60)">$60</button>
							<button type="button" id="eight_spread_btn_16" onClick="betOutside(102)">$102</button>
							<button type="button" id="eight_spread_btn_17" onClick="betOutside(205)">$205</button>
							<button type="button" id="eight_spread_btn_18" onClick="betOutside(410)">$410</button>
						</div>
						<h5>Downtown - Points 4, 5, 6</h5>
						<div class="six-button-set">
							<button type="button" id="eight_spread_btn_19" onClick="betDowntown(16)">$16</button>
							<button type="button" id="eight_spread_btn_20" onClick="betDowntown(32)">$32</button>
							<button type="button" id="eight_spread_btn_21" onClick="betDowntown(48)">$48</button>
							<button type="button" id="eight_spread_btn_22" onClick="betDowntown(81)">$81</button>
							<button type="button" id="eight_spread_btn_23" onClick="betDowntown(162)">$162</button
							>
							<button type="button" id="eight_spread_btn_24" onClick="betDowntown(325)">$325</button
							>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="eight_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="eight_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="eight_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="eight_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="eight_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="eight_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="eightSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_nine_spread_menu"
						style="display: none;"
						aria-label="Point nine spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="nine_spread_btn_1" onClick="betAcross(27)">$27</button>
							<button type="button" id="nine_spread_btn_2" onClick="betAcross(54)">$54</button>
							<button type="button" id="nine_spread_btn_3" onClick="betAcross(81)">$81</button>
							<button type="button" id="nine_spread_btn_4" onClick="betAcross(137)">$137</button>
							<button type="button" id="nine_spread_btn_5" onClick="betAcross(275)">$275</button>
							<button type="button" id="nine_spread_btn_6" onClick="betAcross(550)">$550</button>
						</div>
						<h5>Inside - Points 5, 6, 8</h5>
						<div class="six-button-set">
							<button type="button" id="nine_spread_btn_7" onClick="betInside(17)">$17</button>
							<button type="button" id="nine_spread_btn_8" onClick="betInside(34)">$34</button>
							<button type="button" id="nine_spread_btn_9" onClick="betInside(51)">$51</button>
							<button type="button" id="nine_spread_btn_10" onClick="betInside(85)">$85</button>
							<button type="button" id="nine_spread_btn_11" onClick="betInside(170)">$170</button>
							<button type="button" id="nine_spread_btn_12" onClick="betInside(340)">$340</button>
						</div>
						<h5>Outside - Points 4, 5, 10</h5>
						<div class="six-button-set">
							<button type="button" id="nine_spread_btn_13" onClick="betOutside(15)">$15</button>
							<button type="button" id="nine_spread_btn_14" onClick="betOutside(30)">$30</button>
							<button type="button" id="nine_spread_btn_15" onClick="betOutside(45)">$45</button>
							<button type="button" id="nine_spread_btn_16" onClick="betOutside(77)">$77</button>
							<button type="button" id="nine_spread_btn_17" onClick="betOutside(155)">$155</button>
							<button type="button" id="nine_spread_btn_18" onClick="betOutside(310)">$310</button>
						</div>
						<h5>Downtown - Points 4, 5, 6</h5>
						<div class="six-button-set">
							<button type="button" id="nine_spread_btn_19" onClick="betDowntown(16)">$16</button>
							<button type="button" id="nine_spread_btn_20" onClick="betDowntown(32)">$32</button>
							<button type="button" id="nine_spread_btn_21" onClick="betDowntown(48)">$48</button>
							<button type="button" id="nine_spread_btn_22" onClick="betDowntown(81)">$81</button>
							<button type="button" id="nine_spread_btn_23" onClick="betDowntown(162)">$162</button>
							<button type="button" id="nine_spread_btn_24" onClick="betDowntown(325)">$325</button>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="nine_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="nine_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="nine_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="nine_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="nine_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="nine_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="nineSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>
					<section
						id="point_ten_spread_menu"
						style="display: none;"
						aria-label="Point ten spread menu"
						class="all-popups"
					>
						<h3>Spread Bets</h3>
						<h5>Across</h5>
						<div class="six-button-set">
							<button type="button" id="ten_spread_btn_1" onClick="betAcross(27)">$27</button>
							<button type="button" id="ten_spread_btn_2" onClick="betAcross(54)">$54</button>
							<button type="button" id="ten_spread_btn_3" onClick="betAcross(81)">$81</button>
							<button type="button" id="ten_spread_btn_4" onClick="betAcross(136)">$136</button>
							<button type="button" id="ten_spread_btn_5" onClick="betAcross(272)">$272</button>
							<button type="button" id="ten_spread_btn_6" onClick="betAcross(545)">$545</button>
						</div>
						<h5>Inside - Points 5, 6, 8, 9</h5>
						<div class="six-button-set">
							<button type="button" id="ten_spread_btn_7" onClick="betInside(22)">$22</button>
							<button type="button" id="ten_spread_btn_8" onClick="betInside(44)">$44</button>
							<button type="button" id="ten_spread_btn_9" onClick="betInside(66)">$66</button>
							<button type="button" id="ten_spread_btn_10" onClick="betInside(110)">$110</button>
							<button type="button" id="ten_spread_btn_11" onClick="betInside(220)">$220</button>
							<button type="button" id="ten_spread_btn_12" onClick="betInside(440)">$440</button>
						</div>
						<h5>Outside - Points 4, 5, 9</h5>
						<div class="six-button-set">
							<button type="button" id="ten_spread_btn_13" onClick="betOutside(15)">$15</button>
							<button type="button" id="ten_spread_btn_14" onClick="betOutside(30)">$30</button>
							<button type="button" id="ten_spread_btn_15" onClick="betOutside(45)">$45</button>
							<button type="button" id="ten_spread_btn_16" onClick="betOutside(76)">$76</button>
							<button type="button" id="ten_spread_btn_17" onClick="betOutside(152)">$152</button>
							<button type="button" id="ten_spread_btn_18" onClick="betOutside(305)">$305</button>
						</div>
						<h5>Downtown - Points 4, 5, 6</h5>
						<div class="six-button-set">
							<button type="button" id="ten_spread_btn_19" onClick="betDowntown(16)">$16</button>
							<button type="button" id="ten_spread_btn_20" onClick="betDowntown(32)">$32</button>
							<button type="button" id="ten_spread_btn_21" onClick="betDowntown(48)">$48</button>
							<button type="button" id="ten_spread_btn_22" onClick="betDowntown(81)">$81</button>
							<button type="button" id="ten_spread_btn_23" onClick="betDowntown(162)">$162</button>
							<button type="button" id="ten_spread_btn_24" onClick="betDowntown(325)">$325</button>
						</div>
						<h5>Across - Including the Point</h5>
						<div class="six-button-set">
							<button type="button" id="ten_spread_btn_25" onClick="betAcrossIncluding(32)"
								>$32</button
							>
							<button type="button" id="ten_spread_btn_26" onClick="betAcrossIncluding(64)"
								>$64</button
							>
							<button type="button" id="ten_spread_btn_27" onClick="betAcrossIncluding(96)"
								>$96</button
							>
							<button type="button" id="ten_spread_btn_28" onClick="betAcrossIncluding(162)"
								>$162</button
							>
							<button type="button" id="ten_spread_btn_29" onClick="betAcrossIncluding(325)"
								>$325</button
							>
							<button type="button" id="ten_spread_btn_30" onClick="betAcrossIncluding(650)"
								>$650</button
							>
						</div>
						<button
							id="tenSprdBckBtn"
							type="button"
							class="close-popup-btn"
							onClick="showPreviousMenu()">Back</button
						>
					</section>

					<!--Bet Each Menu-->
					<section
						id="bet_each_menu"
						style="display: none;"
						aria-label="Bet each menu"
						class="all-popups"
					>
						<h3>Bet Each Menu</h3>
						<h5>Each 6 &amp; 8</h5>
						<div class="button-set">
							<button type="button" onClick="betEach(68, 6)">$6 each ($12)</button>
							<button type="button" onClick="betEach(68, 12)">$12 each ($24)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(68, 18)">$18 each ($36)</button>
							<button type="button" onClick="betEach(68, 24)">$24 each ($48)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(68, 30)">$30 each ($60)</button>
							<button type="button" onClick="betEach(68, 60)">$60 each ($120)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(68, 90)">$90 each ($180)</button>
							<button type="button" onClick="betEach(68, 120)">$120 each ($240)</button>
						</div>
						<form onSubmit="return false;">
							<label for="each_six_eight_amt">Bet each 6 &amp; 8 other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="each_six_eight_amt"
									name="each_six_eight_amt"
									step="30"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betEach(68, parseInt(document.getElementById('each_six_eight_amt').value))"
									>Bet</button
								>
							</div>
						</form>
						<h5>Each 5 &amp; 9</h5>
						<div class="button-set">
							<button type="button" onClick="betEach(59, 5)">$5 each ($10)</button>
							<button type="button" onClick="betEach(59, 10)">$10 each ($20)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(59, 15)">$15 each ($30)</button>
							<button type="button" onClick="betEach(59, 20)">$20 each ($40)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(59, 25)">$25 each ($50)</button>
							<button type="button" onClick="betEach(59, 50)">$50 each ($100)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(59, 75)">$75 each ($150)</button>
							<button type="button" onClick="betEach(59, 100)" style="font-size: .667rem;"
								>$100 each ($200)</button
							>
						</div>
						<form onSubmit="return false;">
							<label for="each_five_nine_amt">Bet each 5 &amp; 9 other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="each_five_nine_amt"
									name="each_five_nine_amt"
									step="25"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betEach(59, parseInt(document.getElementById('each_five_nine_amt').value))"
									>Bet</button
								>
							</div>
						</form>
						<h5>Each 4 &amp; 10</h5>
						<div class="button-set">
							<button type="button" onClick="betEach(410, 5)">$5 each ($10)</button>
							<button type="button" onClick="betEach(410, 10)">$10 each ($20)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(410, 15)">$15 each ($30)</button>
							<button type="button" onClick="betEach(410, 20)">Buy $20 each ($42)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(410, 25)">Buy $25 each ($52)</button>
							<button type="button" onClick="betEach(410, 35)">Buy $35 each ($73)</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="betEach(410, 50)">Buy $50 each ($105)</button>
							<button type="button" onClick="betEach(410, 100)">Buy $100 each ($210)</button>
						</div>
						<form onSubmit="return false;">
							<label for="each_four_ten_amt">Bet each 4 &amp; 10 other: </label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="each_four_ten_amt"
									name="each_four_ten_amt"
									step="25"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="betEach(410, parseInt(document.getElementById('each_four_ten_amt').value))"
									>Bet</button
								>
							</div>
						</form>
						<button
							id="bet_each_bck_btn"
							type="button"
							class="close-popup-btn"
							onClick="hideBetMenu(12)">Back</button
						>
					</section>

					<!--Pay Place Menus-->
					<section
						id="place_four_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place four payment popup"
					>
						<h3 id="place_four_pay_header">You Won on your Place 4</h3>
						<p id="four_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="four_press_buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="four_press_btn_1"
									onClick="pressOneUnit(5)"
									style="display: none;">One Unit @ $5</button
								>
								<button
									type="button"
									id="four_press_btn_2"
									onClick="pressFiveUnits(5)"
									style="display: none;">One Unit @ $25</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="four_press_btn_3"
									onClick="pressIt(5)"
									style="display: none;">Press</button
								>
								<button
									type="button"
									id="four_press_btn_4"
									onClick="fullPress(5)"
									style="display: none;">Full Press</button
								>
							</div>
						</div>
						<div id="four_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="four_go_to_btn_1" onClick="goTo(5, 10)">$10</button>
								<button type="button" id="four_go_to_btn_2" onClick="goTo(5, 15)">+3 to $15</button>
							</div>
							<div class="button-set">
								<button type="button" id="four_go_to_btn_3" onClick="goTo(5, 25)">Hold</button>
								<button type="button" id="four_go_to_btn_4" onClick="goTo(5, 25)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="four_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(5, 5000)">Bet Table Max</button
						>
						<div id="place_four_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="four_dbl_press_btn_1" onClick="doubleUnitPress(5, 10)"
									>+1 to 10e 5 &amp; 9</button
								>
								<button type="button" id="four_dbl_press_btn_2" style="visibility: hidden;"
									>Hold</button
								>
							</div>
							<div class="button-set" id="four_dble_btn_box_two">
								<button type="button" id="four_dbl_press_btn_3" onClick="doubleUnitPress(5, 10)"
									>Hold</button
								>
								<button type="button" id="four_dbl_press_btn_4" style="visibility: hidden;"
									>Hold</button
								>
							</div>
						</div>
						<div class="bet-other-boxes">
							<form onSubmit="return false;">
								<label for="place_pay_four_amount">Place other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="place_pay_four_amount"
										name="place_pay_four_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="placeFour(parseInt(document.getElementById('place_pay_four_amount').value))"
										>Bet</button
									>
								</div>
							</form>
							<form onSubmit="return false;">
								<label for="buy_pay_four_amount">Buy other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="buy_pay_four_amount"
										name="buy_pay_four_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="buyFour(parseInt(document.getElementById('buy_pay_four_amount').value))"
										>Buy</button
									>
								</div>
							</form>
						</div>
						<button type="button" class="pickup-btn" onClick="sameAndDown(5)"
							>Same Bet and Down</button
						>
						<button
							id="four_same_bet_btn"
							type="button"
							class="close-popup-btn"
							onClick="sameBet(5)">Same Bet</button
						>
					</section>
					<section
						id="place_five_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place five payment popup"
					>
						<h3 id="place_five_pay_header">You Won on your Place 5</h3>
						<p id="five_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="five_press_buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="five_press_btn_1"
									onClick="pressOneUnit(6)"
									style="display: none;">One Unit @ $5</button
								>
								<button
									type="button"
									id="five_press_btn_2"
									onClick="pressFiveUnits(6)"
									style="display: none;">One Unit @ $25</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="five_press_btn_3"
									onClick="pressIt(6)"
									style="display: none;">Press</button
								>
								<button
									type="button"
									id="five_press_btn_4"
									onClick="fullPress(6)"
									style="display: none;">Full Press</button
								>
							</div>
						</div>
						<div id="five_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="five_go_to_btn_1" onClick="goTo(6, 10)">$10</button>
								<button type="button" id="five_go_to_btn_2" onClick="goTo(6, 15)">+3 to $15</button>
							</div>
							<div class="button-set">
								<button type="button" id="five_go_to_btn_3" onClick="goTo(6, 25)">Hold</button>
								<button type="button" id="five_go_to_btn_4" onClick="goTo(6, 25)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="five_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(6, 5000)">Bet Table Max</button
						>
						<div id="place_five_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="five_dbl_press_btn_1" onClick="doubleUnitPress(6, 10)"
									>+3 to 10e 5 &amp; 9</button
								>
								<button type="button" id="five_dbl_press_btn_2" style="visibility: hidden;"
									>Hold</button
								>
							</div>
							<div class="button-set" id="five_dble_btn_box_two">
								<button type="button" id="five_dbl_press_btn_3" onClick="doubleUnitPress(6, 10)"
									>Hold</button
								>
								<button type="button" id="five_dbl_press_btn_4" style="visibility: hidden;"
									>Hold</button
								>
							</div>
						</div>
						<form onSubmit="return false;">
							<label for="place_pay_five_amount">Bet something else</label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_pay_five_amount"
									name="place_pay_five_amount"
									step="5"
								/>
								<button type="button" class="bet-any-btn" onClick="betSomethingElse(6)">Bet</button>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="sameAndDown(6)"
							>Same Bet and Down</button
						>
						<button type="button" class="close-popup-btn" onClick="sameBet(6)">Same Bet</button>
					</section>
					<section
						id="place_six_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place six payment popup"
					>
						<h3 id="place_six_pay_header">You Won on your Place 6</h3>
						<p id="six_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="six_press_buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="six_press_btn_1"
									style="display: none;"
									onClick="pressOneUnit(7)">One Unit @ $6</button
								>
								<button
									type="button"
									id="six_press_btn_2"
									style="display: none;"
									onClick="pressFiveUnits(7)">One Unit @ $30</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="six_press_btn_3"
									style="display: none;"
									onClick="pressIt(7)">Press</button
								>
								<button
									type="button"
									id="six_press_btn_4"
									style="display: none;"
									onClick="fullPress(7)">Full Press</button
								>
							</div>
						</div>
						<div id="six_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="six_go_to_btn_1" onClick="goTo(7, 12)">$12</button>
								<button type="button" id="six_go_to_btn_2" onClick="goTo(7, 18)">+5 to $18</button>
							</div>
							<div class="button-set">
								<button type="button" id="six_go_to_btn_3" onClick="goTo(7, 30)">Hold</button>
								<button type="button" id="six_go_to_btn_4" onClick="goTo(7, 30)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="six_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(7, 6000)">Bet Table Max</button
						>
						<div id="place_six_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="six_dbl_press_btn_1" onClick="doubleUnitPress(7, 12)"
									>+5 to 12e 6 &amp; 8</button
								>
								<button type="button" id="six_dbl_press_btn_2" style="visibility: hidden;" />
							</div>
							<div class="button-set" id="six_dble_btn_box_two">
								<button type="button" id="six_dbl_press_btn_3" />
								<button type="button" id="six_dbl_press_btn_4" style="visibility: hidden;" />
							</div>
						</div>
						<form onSubmit="return false;">
							<label for="place_pay_six_amount">Bet something else</label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_pay_six_amount"
									name="place_pay_six_amount"
									step="6"
								/>
								<button type="button" class="bet-any-btn" onClick="betSomethingElse(7)">Bet</button>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="sameAndDown(7)"
							>Same Bet and Down</button
						>
						<button type="button" class="close-popup-btn" onClick="sameBet(7)">Same Bet</button>
					</section>
					<section
						id="place_eight_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place eight payment popup"
					>
						<h3 id="place_eight_pay_header">You Won on your Place 8</h3>
						<p id="eight_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="eight_press_buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="eight_press_btn_1"
									style="display: none;"
									onClick="pressOneUnit(8)">One Unit @ $6</button
								>
								<button
									type="button"
									id="eight_press_btn_2"
									style="display: none;"
									onClick="pressFiveUnits(8)">One Unit @ $30</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="eight_press_btn_3"
									style="display: none;"
									onClick="pressIt(8)">Press</button
								>
								<button
									type="button"
									id="eight_press_btn_4"
									style="display: none;"
									onClick="fullPress(8)">Full Press</button
								>
							</div>
						</div>
						<div id="eight_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="eight_go_to_btn_1" onClick="goTo(8, 12)">$12</button>
								<button type="button" id="eight_go_to_btn_2" onClick="goTo(8, 18)">+5 to $18</button
								>
							</div>
							<div class="button-set">
								<button type="button" id="eight_go_to_btn_3" onClick="goTo(8, 30)">Hold</button>
								<button type="button" id="eight_go_to_btn_4" onClick="goTo(8, 30)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="eight_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(8, 6000)">Bet Table Max</button
						>
						<div id="place_eight_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="eight_dbl_press_btn_1" onClick="doubleUnitPress(8, 12)"
									>+5 to 12e 6 &amp; 8</button
								>
								<button type="button" id="eight_dbl_press_btn_2" style="visibility: hidden;" />
							</div>
							<div class="button-set" id="eight_dble_btn_box_two">
								<button type="button" id="eight_dbl_press_btn_3" />
								<button type="button" id="eight_dbl_press_btn_4" style="visibility: hidden;" />
							</div>
						</div>
						<form onSubmit="return false;">
							<label for="place_pay_eight_amount">Bet something else</label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_pay_eight_amount"
									name="place_pay_eight_amount"
									step="6"
								/>
								<button type="button" class="bet-any-btn" onClick="betSomethingElse(8)">Bet</button>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="sameAndDown(8)"
							>Same Bet and Down</button
						>
						<button type="button" class="close-popup-btn" onClick="sameBet(8)">Same Bet</button>
					</section>
					<section
						id="place_nine_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place nine payment popup"
					>
						<h3 id="place_nine_pay_header">You Won on your Place 9</h3>
						<p id="nine_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="nine_press_buttons" class="press-buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="nine_press_btn_1"
									onClick="pressOneUnit(9)"
									style="display: none;">One Unit @ $5</button
								>
								<button
									type="button"
									id="nine_press_btn_2"
									onClick="pressFiveUnits(9)"
									style="display: none;">One Unit @ $25</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="nine_press_btn_3"
									onClick="pressIt(9)"
									style="display: none;">Press</button
								>
								<button
									type="button"
									id="nine_press_btn_4"
									onClick="fullPress(9)"
									style="display: none;">Full Press</button
								>
							</div>
						</div>
						<div id="nine_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="nine_go_to_btn_1" onClick="goTo(9, 10)">$10</button>
								<button type="button" id="nine_go_to_btn_2" onClick="goTo(9, 15)">+3 to $15</button>
							</div>
							<div class="button-set">
								<button type="button" id="nine_go_to_btn_3" onClick="goTo(9, 25)">Hold</button>
								<button type="button" id="nine_go_to_btn_4" onClick="goTo(9, 25)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="nine_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(9, 5000)">Bet Table Max</button
						>
						<div id="place_nine_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="nine_dbl_press_btn_1" onClick="doubleUnitPress(9, 10)"
									>+3 to 10e 5 &amp; 9</button
								>
								<button type="button" id="nine_dbl_press_btn_2" style="visibility: hidden;"
									>Hold</button
								>
							</div>
							<div class="button-set" id="nine_dble_btn_box_two">
								<button type="button" id="nine_dbl_press_btn_3" onClick="doubleUnitPress(9, 10)"
									>Hold</button
								>
								<button type="button" id="nine_dbl_press_btn_4" style="visibility: hidden;"
									>Hold</button
								>
							</div>
						</div>
						<form onSubmit="return false;">
							<label for="place_pay_nine_amount">Bet something else</label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="place_pay_nine_amount"
									name="place_pay_nine_amount"
									step="5"
								/>
								<button type="button" class="bet-any-btn" onClick="betSomethingElse(9)">Bet</button>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="sameAndDown(9)"
							>Same Bet and Down</button
						>
						<button type="button" class="close-popup-btn" onClick="sameBet(9)">Same Bet</button>
					</section>
					<section
						id="place_ten_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Place ten payment popup"
					>
						<h3 id="place_ten_pay_header">You Won on your Place 10</h3>
						<p id="ten_pay_disclaimer">
							Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting
							amounts.
						</p>
						<div id="ten_press_buttons">
							<h5>Presses</h5>
							<div class="button-set">
								<button
									type="button"
									id="ten_press_btn_1"
									onClick="pressOneUnit(10)"
									style="display: none;">One Unit @ $5</button
								>
								<button
									type="button"
									id="ten_press_btn_2"
									onClick="pressFiveUnits(10)"
									style="display: none;">One Unit @ $25</button
								>
							</div>
							<div class="button-set">
								<button
									type="button"
									id="ten_press_btn_3"
									onClick="pressIt(10)"
									style="display: none;">Press</button
								>
								<button
									type="button"
									id="ten_press_btn_4"
									onClick="fullPress(10)"
									style="display: none;">Full Press</button
								>
							</div>
						</div>
						<div id="ten_go_to_buttons">
							<h5>Go to</h5>
							<div class="button-set">
								<button type="button" id="ten_go_to_btn_1" onClick="goTo(10, 10)">$10</button>
								<button type="button" id="ten_go_to_btn_2" onClick="goTo(10, 15)">+1 to $15</button>
							</div>
							<div class="button-set">
								<button type="button" id="ten_go_to_btn_3" onClick="goTo(10, 25)">Hold</button>
								<button type="button" id="ten_go_to_btn_4" onClick="goTo(10, 25)">Hold</button>
							</div>
						</div>
						<button
							type="button"
							id="ten_tbl_max_btn"
							class="wide-btn"
							style="display: none;"
							onClick="goTo(10, 5000)">Bet Table Max</button
						>
						<div id="place_ten_dble_box" style="display: none;">
							<h5>Double Unit Presses</h5>
							<div class="button-set">
								<button type="button" id="ten_dbl_press_btn_1" onClick="doubleUnitPress(10, 10)"
									>+1 to 10e 4 &amp; 10</button
								>
								<button type="button" id="ten_dbl_press_btn_2" style="visibility: hidden;"
									>Hold</button
								>
							</div>
							<div class="button-set" id="ten_dble_btn_box_two">
								<button type="button" id="ten_dbl_press_btn_3" onClick="doubleUnitPress(10, 10)"
									>Hold</button
								>
								<button type="button" id="ten_dbl_press_btn_4" style="visibility: hidden;"
									>Hold</button
								>
							</div>
						</div>
						<div class="bet-other-boxes">
							<form onSubmit="return false;">
								<label for="place_pay_ten_amount">Place other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="place_pay_ten_amount"
										name="place_pay_ten_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="placeTen(parseInt(document.getElementById('place_pay_ten_amount').value))"
										>Bet</button
									>
								</div>
							</form>
							<form onSubmit="return false;">
								<label for="buy_pay_ten_amount">Buy other: </label>
								<div class="bet-any-container">
									<input
										class="bet-any-input"
										type="number"
										id="buy_pay_ten_amount"
										name="buy_pay_ten_amount"
										step="5"
									/>
									<button
										type="button"
										class="bet-any-btn"
										onClick="buyTen(parseInt(document.getElementById('buy_pay_ten_amount').value))"
										>Buy</button
									>
								</div>
							</form>
						</div>
						<button type="button" class="pickup-btn" onClick="sameAndDown(10)"
							>Same Bet and Down</button
						>
						<button
							id="ten_same_bet_btn"
							type="button"
							class="close-popup-btn"
							onClick="sameBet(10)">Same Bet</button
						>
					</section>

					<!--Pay Field Menu-->
					<section
						id="the_field_pay_menu"
						class="all-popups"
						style="display: none;"
						aria-label="Field payment popup"
					>
						<h3>You won in the Field</h3>
						<div class="button-set">
							<button type="button" onClick="rebetField(5)">$5 Field</button>
							<button type="button" onClick="rebetField(10)">$10 Field</button>
						</div>
						<div class="button-set">
							<button type="button" onClick="rebetField(25)">$25 Field</button>
							<button type="button" onClick="rebetField(50)">$50 Field</button>
						</div>
						<button class="wide-btn" type="button" onClick="betMax(11)">Max Bet</button>
						<button class="wide-btn" type="button" onClick="betAll(11)">All In</button>
						<button class="wide-btn" type="button" onClick="stackField()">Stack It</button>
						<button id="halfBtn" class="wide-btn" type="button" onClick="collectHalfField()"
							>Take Half</button
						>
						<button id="thirdBtn" class="wide-btn" type="button" onClick="collectThirdField()"
							>Take Third</button
						>
						<button id="twoThirdBtn" class="wide-btn" type="button" onClick="collectTwoThirdField()"
							>Take Two Thirds</button
						>
						<form onSubmit="return false;">
							<label for="field_bet_amount">Bet something else</label>
							<div class="bet-any-container">
								<input
									class="bet-any-input"
									type="number"
									id="field_bet_pay_menu_amount"
									name="field_bet_pay_menu_amount"
									step="1"
								/>
								<button
									type="button"
									class="bet-any-btn"
									onClick="rebetField(parseInt(document.getElementById('field_bet_pay_menu_amount').value))"
									>Bet</button
								>
							</div>
						</form>
						<button type="button" class="pickup-btn" onClick="collectAllField()">Collect All</button
						>
						<button type="button" class="close-popup-btn" onClick="hideAllMenus()">Close</button>
					</section>

					<!--Cheques-->
					<section aria-label="The cheques">
						<div>
							<img
								id="pass_line_1"
								style="display: none;"
								alt="white cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="pass_line_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="pass_line_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="pass_line_100"
								style="display: none;"
								alt="back cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="pass_line_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="pass_line_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="pass_line_payment_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="pass_line_payment_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="pass_line_payment_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="pass_line_payment_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="pass_line_payment_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="pass_line_payment_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="pass_line_odds_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="pass_line_odds_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="pass_line_odds_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="pass_line_odds_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="pass_line_odds_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="pass_line_odds_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="pass_line_odds_payment_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="pass_line_odds_payment_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="pass_line_odds_payment_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="pass_line_odds_payment_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="pass_line_odds_payment_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="pass_line_odds_payment_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_four_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_four_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_four_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_four_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_four_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_four_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_five_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_five_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_five_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_five_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_five_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_five_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_six_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_six_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_six_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_six_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_six_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_six_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_eight_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_eight_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_eight_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_eight_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_eight_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_eight_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_nine_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_nine_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_nine_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_nine_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_nine_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_nine_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="place_ten_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="place_ten_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="place_ten_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="place_ten_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="place_ten_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="place_ten_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="bet_field_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="bet_field_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="bet_field_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="bet_field_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="bet_field_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="bet_field_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="field_payment_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="field_payment_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="field_payment_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="field_payment_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="field_payment_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="field_payment_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<div>
							<img
								id="field_double_payment_1"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/white_cheque.webp"
							/>
							<img
								id="field_double_payment_5"
								style="display: none;"
								alt="red cheque"
								src="src/images/craps-simulator/red_cheque.webp"
							/>
							<img
								id="field_double_payment_25"
								style="display: none;"
								alt="green cheque"
								src="src/images/craps-simulator/green_cheque.webp"
							/>
							<img
								id="field_double_payment_100"
								style="display: none;"
								alt="black cheque"
								src="src/images/craps-simulator/black_cheque.webp"
							/>
							<img
								id="field_double_payment_500"
								style="display: none;"
								alt="purple cheque"
								src="src/images/craps-simulator/purple_cheque.webp"
							/>
							<img
								id="field_double_payment_1000"
								style="display: none;"
								alt="orange cheque"
								src="src/images/craps-simulator/orange_cheque.webp"
							/>
						</div>
						<img
							id="pass_line_payment"
							style="display:none;"
							alt="red cheque"
							src="src/images/craps-simulator/red_cheque_2.webp"
						/>
						<img
							id="pass_line_odds_payment"
							style="display:none;"
							alt="red cheque"
							src="src/images/craps-simulator/red_cheque_2.webp"
						/>
					</section>

					<!--Bet Amt Boxes-->
					<section class="bet-boxes" aria-label="The bet amount boxes">
						<p id="pl_amt_box" style="display: none;" />
						<p id="pl_pymnt_amt_box" style="display: none;" />
						<p id="pl_odds_amt_box" style="display: none;" />
						<p id="pl_odds_pymnt_amt_box" style="display: none;" />
						<p id="place_four_amt_box" style="display: none;" />
						<p id="place_five_amt_box" style="display: none;" />
						<p id="place_six_amt_box" style="display: none;" />
						<p id="place_eight_amt_box" style="display: none;" />
						<p id="place_nine_amt_box" style="display: none;" />
						<p id="place_ten_amt_box" style="display: none;" />
						<p id="field_amt_box" style="display: none;" />
						<p id="field_pymnt_amt_box" style="display: none;" />
						<p id="field_dble_pymnt_amt_box" style="display: none;" />
					</section>

					<!--On Buttons-->
					<section aria-label="On buttons">
						<p id="place_four_on_btn" style="display: none;">ON</p>
						<p id="place_five_on_btn" style="display: none;">ON</p>
						<p id="place_six_on_btn" style="display: none;">ON</p>
						<p id="place_eight_on_btn" style="display: none;">ON</p>
						<p id="place_nine_on_btn" style="display: none;">ON</p>
						<p id="place_ten_on_btn" style="display: none;">ON</p>
					</section>

					<!--Off Buttons-->
					<section aria-label="Off buttons">
						<p id="place_four_off_btn" style="display: none;">OFF</p>
						<p id="place_five_off_btn" style="display: none;">OFF</p>
						<p id="place_six_off_btn" style="display: none;">OFF</p>
						<p id="place_eight_off_btn" style="display: none;">OFF</p>
						<p id="place_nine_off_btn" style="display: none;">OFF</p>
						<p id="place_ten_off_btn" style="display: none;">OFF</p>
					</section>

					<!--Buy Buttons-->
					<section aria-label="Off buttons">
						<p id="place_ten_buy_btn" style="display: none;">BUY</p>
						<p id="place_four_buy_btn" style="display: none;">BUY</p>
					</section>

					<!--Bankroll, Point, Ttl Points-->
					<section aria-label="Bankroll, point, and total points section" class="my-bankroll">
						<h4>In Rail</h4>
						<p id="money_in_rail" />
						<h4>On Table</h4>
						<p id="money_on_table" />
						<h4>BankRoll</h4>
						<p id="total_bankroll" />
					</section>

					<!--Table Limit-->
					<section aria-label="Table limit sign" class="table-limit">
						<h3>Limits</h3>
						<h4>Max:</h4>
						<p id="max_bet" />
						<h4>Min:</h4>
						<p id="min_bet" />
					</section>
				</section>
				<section aria-label="Stickperson, guide, and previous" class="stick-person-calls">
					<div class="guide-box">
						<blockquote id="stick_person">
							We’re coming out. World’s, Horn’s, Yo’s, Hi Low’s, C&E’s. Get em while the dice are in
							the middle.
						</blockquote>
					</div>
					<div id="alert_to_do" class="guide-box">
						<p id="guide_calls">Bet the Pass Line in order to shoot the dice.</p>
					</div>
				</section>
				<section
					aria-label="Buttons and dice for game"
					class="dice-and-buttons"
					style="margin-top: 12px;"
				>
					<section aria-label="Dice for the game" class="dice-for-game">
						<img id="die_one" alt="die 1" src="src/images/craps-simulator/die_sw.png" />
						<img id="die_two" alt="die 2" src="src/images/craps-simulator/die_ne.png" />
					</section>
					<!--Game Buttons-->
					<section aria-label="Buttons for the game" class="buttons-for-game">
						<div class="button-set">
							<button type="button" id="button_one" onClick="shootDice()">Start Roll</button>
							<button type="button" id="button_two" onClick="betPassLine(5)">$5 Pass Line</button>
						</div>
						<div class="button-set">
							<button type="button" id="button_three" onClick="betPassLine(10)"
								>$10 Pass Line</button
							>
							<button type="button" id="button_four" onClick="showBetMenu(1)">Bet Other</button>
						</div>
						<button
							type="button"
							id="bet_pass_line_odds_button"
							onClick="betPassLineOdds()"
							style="display: none">Bet Pass Line Odds</button
						>
					</section>
				</section>
				<section aria-label="Point and roll counter" class="count-section point-section">
					<div>
						<h5>Points</h5>
						<p id="total_points">0</p>
					</div>
					<div>
						<h5>Rolls</h5>
						<p id="roll_count">0</p>
					</div>
					<div>
						<h5>Boxes</h5>
						<p id="box_count">0</p>
					</div>
				</section>
				<section aria-label="Invididual roll counter" class="count-section roll-section">
					<div>
						<h5>2s</h5>
						<p id="twosCounter">0</p>
					</div>
					<div>
						<h5>3s</h5>
						<p id="threesCounter">0</p>
					</div>
					<div>
						<h5>4s</h5>
						<p id="foursCounter">0</p>
					</div>
					<div>
						<h5>5s</h5>
						<p id="fivesCounter">0</p>
					</div>
					<div>
						<h5>6s</h5>
						<p id="sixesCounter">0</p>
					</div>
					<div>
						<h5>7s</h5>
						<p id="sevensCounter">0</p>
					</div>
					<div>
						<h5>8s</h5>
						<p id="eightsCounter">0</p>
					</div>
					<div>
						<h5>9s</h5>
						<p id="ninesCounter">0</p>
					</div>
					<div>
						<h5>10s</h5>
						<p id="tensCounter">0</p>
					</div>
					<div>
						<h5>11s</h5>
						<p id="elevensCounter">0</p>
					</div>
					<div>
						<h5>12s</h5>
						<p id="twelvesCounter">0</p>
					</div>
				</section>
				<section aria-label="Disclaimer" class="game-disclaimer">
					<div>
						<p id="the_disclaimer">
							Disclaimer: I will try and develop this game on a regular basis. I may break it
							sometimes because I'm a novice developer but please reach out to <a
								href="mailto:contact@parlaynation.com"
								target="_blank">contact&#64;parlaynation.com</a
							> if you notice something not working properly, and I'll do my best to fix it right away.
							Remember to check back often for new, updated versions of the Craps Simulator.
						</p>
					</div>
					<!-- <span id="show_hide_button" onClick="hide.disclaimer()">Hide</span> -->
				</section>
			</div>
		</div>
	</main>
</MoreCrapsLayout>
