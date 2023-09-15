<script lang="ts">
	import MoreLayout from '$lib/clients/components/layouts/MoreCrapsLayout.svelte';

	let title: string = 'Craps Glossary';
	let description: string =
		"A list of casino related terms and phrases. Learn the language of the casinos. Find all the terms you'll hear at the craps table here.";
	let url: string = 'glossary';

	let sets = [
		{
			word: '3x4x5 Odds',
			definition:
				'The max odds bet you can take on the craps table. Three times your flat bet on the 4 and 10. Four times your flat bet on the 5 and 9. Five times your flat bet on the 6 and 8.'
		},
		{
			word: '2x Odds',
			definition:
				'The max odds you can take is two times your flat bet. Otherwise known as double odds.'
		},
		{
			word: '3x Odds',
			definition: 'The max odds you can take is three times your flat bet.'
		},
		{
			word: '5x Odds',
			definition: 'The max odds you can take is five times your flat bet.'
		},
		{
			word: '10x Odds',
			definition: 'The max odds you can take is 10 times your flat bet.'
		},
		{
			word: 'Across',
			definition: 'A bet on all the box numbers not including the point.'
		},
		{
			word: 'Any Craps',
			definition: 'A one roll bet on the 2, 3, and the 12. It pays 7 to 1.'
		},
		{
			word: 'Any Seven',
			definition: 'A one roll bet on the 7. It pays 4 to 1.'
		},
		{
			word: 'Apron',
			definition:
				'The outer section of the table layout. This is where you place your odds bet and where bets are handed off to the players.'
		},
		{
			word: 'Back Wall',
			definition:
				'Usually green, the back wall is the rubber wall with diamonds on it at both ends of the table. The shooter must try to hit the wall with both dice in order to assure a random number being rolled.'
		},
		{
			word: 'Bank',
			definition: 'All the cheques in front of the box person that are used to run the game.'
		},
		{
			word: 'Bar',
			definition:
				"Another word for “Push”. Usually only used when a 12 is rolled during the comeout roll and a player is playing the Don't Pass."
		},
		{
			word: 'Barber Pole',
			definition:
				'When you place a bet with a group of cheques that are out of ascending order such as putting a $25 cheque between a $1 and $5 cheque.'
		},
		{
			word: 'Base Dealer',
			definition:
				'A dealer who is in charge of one of the bases of the table. The base dealer is the one who pays off and collects bets from players.'
		},
		{
			word: 'Behind the Line',
			definition: 'This is where the odds bet is placed, behind the pass line or the come bet.'
		},
		{
			word: 'Big 6/Big 8',
			definition:
				'A bet that a 6 or 8 will be rolled before a 7. This bet is placed in the big 6/big 8 box on the corner of the craps table.'
		},
		{
			word: 'Big Red',
			definition: 'A term for the number 7.'
		},
		{
			word: 'Boxcars',
			definition: 'A term for the number 12.'
		},
		{
			word: 'Box Numbers',
			definition: 'The numbers 4, 5, 6, 8, 9, and 10.'
		},
		{
			word: 'Box Person',
			definition: 'The person in charge of the bank. They watch the game and help settle disputes.'
		},
		{
			word: 'Broke Money',
			definition:
				'Money given to a player by the casino when they run out of money. Also known as a line of credit.'
		},
		{
			word: 'Buffalo',
			definition: 'A bet on all the hardways and any seven.'
		},
		{
			word: 'Buy Bet',
			definition:
				'A bet where a player pays a 5% commission to get true odds on the numbers 4, 5, 6, 8, 9, and 10.'
		},
		{
			word: 'C and E',
			definition: 'A one roll bet that the next roll will be any craps (2, 3, 12) or 11.'
		},
		{
			word: 'Change Only',
			definition:
				'An expression used by the box person to let the base dealers know that a player wants to exchange cash for cheques.'
		},
		{
			word: 'Cheques',
			definition: 'The term used by dealers to refer to what players commonly call chips.'
		},
		{
			word: 'Come Bet',
			definition: 'A bet made after the come out roll but works just like a pass line bet.'
		},
		{
			word: 'Come Out Roll',
			definition:
				"The first roll of the dice in a betting round. The outcome of the come out roll determines the point for the pass and don't pass line bets."
		},
		{
			word: 'Craps',
			definition: 'The name of the game, also a roll of 2, 3, or 12.'
		},
		{
			word: 'Dealer',
			definition: 'The casino employee who manages the bets and payouts at the craps table.'
		},
		{
			word: "Don't Come Bet",
			definition: "A bet made after the come out roll, it works just like a don't pass line bet."
		},
		{
			word: "Don't Pass Line Bet",
			definition:
				'A bet placed before the come out roll that a 7 will be rolled before the point number.'
		},
		{
			word: 'Double Odds',
			definition: 'An odds bet that is twice the size of the original pass/come bet.'
		},
		{
			word: 'Easy Way',
			definition:
				'A roll of 4, 6, 8, or 10 in which the dice show different numbers (as in 3-1, 3-2, 4-2, 5-1).'
		},
		{
			word: 'Field Bet',
			definition:
				'A bet that the next roll will be a 2, 3, 4, 9, 10, 11, or 12. This bet can be placed at any time and has a single roll payout.'
		},
		{
			word: 'Front Line',
			definition: 'Another term for a pass line bet.'
		},
		{
			word: 'Hard Way',
			definition:
				'A roll of 4, 6, 8, or 10 in which the dice show the same number (as in 2-2, 3-3, 4-4, 5-5). Also, a bet that a specific hard way will come up before a 7 or any other easy way combination.'
		},
		{
			word: 'Hi-Lo',
			definition: 'A one roll bet that the next roll will be a 2 or 12.'
		},
		{
			word: 'Hi-Lo-Yo',
			definition: 'A one roll bet on 2, 12 and 11.'
		},
		{
			word: 'Hop Bet',
			definition: 'A bet that a specific combination of numbers will appear on the very next roll.'
		},
		{
			word: 'Hard Way',
			definition:
				'When the shooter rolls a 4, 6, 8, or 10 that comes as a pair such as rolling an eight as 4-4 as opposed to 5-3.'
		},
		{
			word: 'Hardways',
			definition:
				'A bet on 4, 6, 8, or 10. It wins if it rolls the hard way. It loses if it rolls the easy way or if a seven rolls. The 6 and 8 get paid 9 to 1. The 4 and 10 get paid 7 to 1.'
		},
		{
			word: 'Hawking the Dice',
			definition:
				'When a dealer on one base is watching the dice land on the opposite side of the table.'
		},
		{
			word: 'Hedge',
			definition: 'Making a bet that wins when another bet loses at the same time.'
		},
		{
			word: 'High',
			definition: 'Another name for Twelve.'
		},
		{
			word: 'High Low',
			definition: 'A phrase used to bet the Aces and Twelve at the same time.'
		},
		{
			word: 'High Low Yo',
			definition: 'A phrase used to bet the Aces, Twelve, and Yo at the same time.'
		},
		{
			word: 'High Side',
			definition:
				'A phrase referring to the dice landing on aces or twelve when making a world, horn, or horn high bet.'
		},
		{
			word: 'Hook',
			definition: 'The curved area on both sides of the table where the players stand.'
		},
		{
			word: 'Hop Bets',
			definition:
				'A one roll bet on a specific combination of the dice not including the 2, 3, 11, or 12. They win 15 to 1 if they roll the easy way and 30 to one if they roll the hard way.'
		},
		{
			word: 'Horn',
			definition:
				'A one roll bet that the 2, 3, 11, or 12 will roll. You must make the bet in multiples of four with an even amount on each of the four numbers.'
		},
		{
			word: 'Horn High',
			definition:
				'A horn with an extra unit on either the 2, 3, 11, or 12. I.e. A $5 horn high twelve is $1 on each of the 2, 3, and 11 and $2 on the twelve. It is a one roll bet and gets paid differently depending on what rolls.'
		},
		{
			word: 'Hot',
			definition: 'When a table is in a constant mode of winning, the table is considered "hot."'
		},
		{
			word: 'Inside',
			definition: 'The point numbers 5, 6, 8, and 9.'
		},
		{
			word: 'Intermediate Roll',
			definition:
				"After the comeout roll when the point has been established. It's the middle of the game when the puck is turned ON."
		},
		{
			word: 'Lammer',
			definition:
				'Round plastic disks smaller and thinner than cheques. You put them on cheques to signify one of four scenarios: ON, OFF, BUY, and LAY.'
		},
		{
			word: 'Late Bet',
			definition:
				'A bet made while the dice are not in the middle of the table or that are made without enough time before the dice land. Repeat offenders will be "No bet."'
		},
		{
			word: 'Layout',
			definition: 'The felt the game is played on.'
		},
		{
			word: 'Lights Out',
			definition:
				'The act of turning the puck from ON to OFF. This only occurs after the decision roll when the point has or has not been made.'
		},
		{
			word: 'Lock it Up',
			definition:
				'When a dealer picks up a cheque(s) because it currently serves no purpose and puts it back on their working stacks.'
		},
		{
			word: 'Low',
			definition: 'Another name for Aces.'
		},
		{
			word: 'Low Side',
			definition:
				'A phrase referring to the dice landing on an ace deuce or yo when making a world, horn or horn high bet.'
		},
		{
			word: 'Marker',
			definition:
				'When a player borrows money from the casino. Players can have a pre-set line of credit that they can pull money from.'
		},
		{
			word: 'Multi-Bet',
			definition: 'Certain sets of proposition bets that are bet at the same time.'
		},
		{
			word: 'Natural',
			definition: 'A roll of 2, 3, 7, 11, or 12.'
		},
		{
			word: 'No Bet',
			definition:
				'A phrase used by the dealers towards the players when they make a late or improper bet.'
		},
		{
			word: 'No Roll',
			definition:
				"A roll that doesn't count. There can be many reasons for a no roll, but the shooter will throw the dice again."
		},
		{
			word: 'Off',
			definition:
				"When a player doesn't want any multitude of bets to win or lose, they can turn those bets off."
		},
		{
			word: 'Off Coming Out',
			definition: 'You placed a bet that is not working.'
		},
		{
			word: 'On',
			definition:
				"When certain bets aren't working (they can't currently win or lose), players can ask those bets to be turned on so they are eligible to win and lose."
		},
		{
			word: 'One Roll Bet',
			definition: 'A bet that must win on the very next roll or it loses.'
		},
		{
			word: 'One Unit Press',
			definition: 'Adding one unit to an existing place bet.'
		},
		{
			word: 'Outside',
			definition: 'The point numbers 4, 5, 9, and 10.'
		},
		{
			word: 'Overlay',
			definition:
				'A bet against a box number that gets paid true odds. You pay a 5% commission on the amount of money the bet is going to win. A seven must roll before the number you are laying against in order to win. A lammer marked “Lay” is placed on the bet to signify you are betting against that number.'
		},
		{
			word: 'Parlay',
			definition:
				'A term used by players when a bet has won, and then they take those winnings and put it back on the bet to win again. "Parlay" is generally only used on proposition bets.'
		},
		{
			word: 'Pass Line',
			definition:
				'A bet generally only made on the comeout roll. The pass line is betting on the point. During the comeout roll, the pass line wins on 7 or 11 and loses on 2, 3, and 12. After a point is made, the pass line is betting that the point is going to be rolled before a 7. The pass line always wins even money.'
		},
		{
			word: 'Pass Line Odds',
			definition:
				'An extra bet that you can add to your pass line bet. It can only be made during the intermediate roll, and it gets paid true odds.'
		},
		{
			word: 'Past Posting',
			definition:
				'When a player adds money to a bet after it has won. This is otherwise known as cheating and will get you in a lot of trouble.'
		},
		{
			word: 'Pip',
			definition: 'The dots on the dice.'
		},
		{
			word: 'Pit',
			definition:
				'A section of the casino that is comprised of table games. Players are not allowed inside the pit, and floor supervisors walk around watching the games, dealers, and players.'
		},
		{
			word: 'Pit Boss',
			definition: 'The supervisor in charge of all the floors in that pit.'
		},
		{
			word: 'Place Bets',
			definition:
				'A bet that one of the box numbers (4, 5, 6, 8, 9, or 10) will be rolled before a 7.'
		},
		{
			word: 'Point',
			definition:
				"During the intermediate roll, it is the number that the puck is on. If that number is rolled before a 7, the pass line wins, and the don't pass loses. If a 7 is rolled before that number, the don't pass wins, and the pass line loses."
		},
		{
			word: 'Power Press',
			definition:
				'When a place bet wins, and the player puts everything it won plus more of their own money back on that place bet.'
		},
		{
			word: 'Press',
			definition:
				'The act of adding money to an existing place bet. There are multiple types of presses that increase the money added in different amounts.'
		},
		{
			word: 'Proposition Bet',
			definition:
				'Also known as center bets, these bets are in the middle of the table. The majority are one-roll bets, meaning they lose on the next roll but pay the most because of this reason.'
		},
		{
			word: 'Puck',
			definition:
				'The puck is a double-sided disk that reads "OFF" on one side and "ON" on the opposite side. When the puck is "OFF," it is the comeout roll. When a point is established, it will turn "ON" and move to that number.'
		},
		{
			word: 'Push',
			definition: "When a bet doesn't win or lose."
		},
		{
			word: 'Rail',
			definition: 'The grooves on the outer wall of the table that players place their cheques in.'
		},
		{
			word: 'Right Better',
			definition:
				'A bettor who bets with the shooter. They are hoping the shooter will throw the point.'
		},
		{
			word: 'Same Bet',
			definition: 'A phrase used by the dealers when paying players for a place bet.'
		},
		{
			word: 'Seven Out',
			definition: 'When the shooter throws the 7 before throwing their point.'
		},
		{
			word: 'Shooter',
			definition:
				'The person who is throwing the dice. It is their responsibility to make the point.'
		},
		{
			word: 'Split',
			definition:
				'A bet that is comprised of two different bets with an equal amount of money on both bets.'
		},
		{
			word: 'Spread Bets',
			definition:
				'A bet on multiple place bet numbers at the same time. Each bet has the same number of units on each number.'
		},
		{
			word: 'Stick',
			definition:
				'The wooden "L" shaped stick used by the stickperson to retrieve the dice after the shooter has thrown them.'
		},
		{
			word: 'Stick Call',
			definition:
				'A set of phrases used by the stickperson to advertise bets on the table. They are also used to tell the base dealers what number has rolled and the order of payment for multiple bets on the table.'
		},
		{
			word: 'Stickperson',
			definition:
				'The dealer in the middle of the table across from the box person. They retrieve the dice and control the pace of the game.'
		},
		{
			word: 'Straight Out',
			definition:
				'A place on the table where the players stand. It is the short straight part of the table.'
		},
		{
			word: 'Straight Up',
			definition: 'A phrase used to bet on the 2, 3, 11, and 12.'
		},
		{
			word: 'Stroker',
			definition: 'A player whose sole purpose in life is to annoy the dealers.'
		},
		{
			word: 'Take Odds',
			definition: 'When a player adds odds to their pass line or come bet.'
		},
		{
			word: 'Three Way Bets',
			definition:
				'Three bets made on the same bet at the same time. One for you, the shooter, and the dealer.'
		},
		{
			word: 'Three Way Craps',
			definition: 'An equal amount bet on each the 2, 3, and 12.'
		},
		{
			word: 'Toke',
			definition: 'A tip for the dealers.'
		},
		{
			word: 'True Odds',
			definition:
				'The ratio of the number of ways you can win compared to the number of ways you can lose. When you get paid true odds, there is no advantage for the casino.'
		},
		{
			word: 'Twelve',
			definition: 'A roll of twelve on the dice.'
		},
		{
			word: 'Two Way Bets',
			definition:
				'Two bets made on the same bet at the same time. One for you and one for the dealers.'
		},
		{
			word: 'Unit',
			definition:
				'Usually only used as a reference for place bets. A unit is the minimum amount of money you can put on a bet.'
		},
		{
			word: 'Up and Off',
			definition: 'You placed a bet that is not working.'
		},
		{
			word: 'Uptown',
			definition: 'The point numbers 8, 9, and 10.'
		},
		{
			word: 'Vigorish',
			definition: 'Another term for commission.'
		},
		{
			word: 'Working',
			definition:
				"When a player wants bets that normally don't work, such as during the comeout roll, to be turned on so they are able to win or lose."
		},
		{
			word: 'Working Stacks',
			definition:
				'The stacks of cheques in front of the base dealers. They use these stacks to make payments to players or to put losing cheques on.'
		},
		{
			word: 'World/Whirl',
			definition:
				'A horn with an extra unit on the 7. I.e. A $5 world is $1 on each of the 2, 3, 11, 12, and 7. It is a one-roll bet and gets paid differently depending on what rolls.'
		},
		{
			word: 'Wrong Better',
			definition: 'A bettor who bets against the shooter. They are hoping the shooter seven outs.'
		},
		{
			word: 'Yo',
			definition: 'Another term for a roll of 11.'
		}
	];
</script>

<svelte:head>
	<title>{title} | Parlay Nation - How to Play Craps</title>
	<link rel="shortcut icon" href="src/images/assets/pn-favicon-32x32.png" />
	<link rel="canonical" href={'http://parlaynation.com/' + url} />
	<meta name="description" content={description} />
	<meta name="author" content="Elvis Lefkoski" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Parlay Nation" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title + ' | Parlay Nation - How to Play Craps'} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={'src/images/' + url + '/' + url + '-header.jpg'} />
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "ItemList",
		  "itemListElement": [
			{
			  "@type": "ListItem",
			  "position": 1,
			  "item": {
				"@type": "DefinedTerm",
				"name": "3x4x5 Odds",
				"description": "The max odds bet you can take on the craps table. Three times your flat bet on the 4 and 10. Four times your flat bet on the 5 and 9. Five times your flat bet on the 6 and 8."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 2,
			  "item": {
				"@type": "DefinedTerm",
				"name": "2x Odds",
				"description": "The max odds you can take is two times your flat bet. Otherwise known as double odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 3,
			  "item": {
				"@type": "DefinedTerm",
				"name": "3x Odds",
				"description": "The max odds you can take is three times your flat bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 4,
			  "item": {
				"@type": "DefinedTerm",
				"name": "5x Odds",
				"description": "The max odds you can take is five times your flat bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 5,
			  "item": {
				"@type": "DefinedTerm",
				"name": "10x Odds",
				"description": "The max odds you can take is 10 times your flat bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 6,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Across",
				"description": "A bet on all the box numbers not including the point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 7,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Any Craps",
				"description": "A one roll bet on the 2, 3, and the 12. It pays 7 to 1."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 8,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Any Seven",
				"description": "A one roll bet on the 7. It pays 4 to 1."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 9,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Apron",
				"description": "The outer section of the table layout. This is where you place your odds bet and where bets are handed off to the players."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 10,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Back Wall",
				"description": "Usually green, the back wall is the rubber wall with diamonds on it at both ends of the table. The shooter must try to hit the wall with both dice in order to assure a random number being rolled."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 11,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Bank",
				"description": "All the cheques in front of the box person that are used to run the game."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 12,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Bar",
				"description": "Another word for 'Push'. Usually only used when a 12 is rolled during the comeout roll and a player is playing the Don't Pass."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 13,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Barber Pole",
				"description": "When you place a bet with a group of cheques that are out of ascending order such as putting a $25 cheque between a $1 and $5 cheque."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 14,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Base",
				"description": "The areas on both sides of the box person where the dealers stand."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 15,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Base Dealers",
				"description": "The dealers on both sides of the box person whose job is to pay and take from the players."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 16,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Big Red",
				"description": "Another way to say 'Any seven'."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 17,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Big Six/Eight",
				"description": "A bet in the corner of the table that a 6 or an 8 will roll before the 7. It pays even money."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 18,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Black",
				"description": "Another word for a $100 cheque."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 19,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Bowl",
				"description": "Kept in front of the stickperson, the bowl is where the dealer holds the dice. It is usually made of acrylic or wood."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 20,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Box Numbers",
				"description": "The six numbers that can be points: 4, 5, 6, 8, 9, and 10."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 21,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Boxes",
				"description": "A place bet that can be paid during the intermediate roll."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 22,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Box Person",
				"description": "The person who sits in the middle of the table behind the bank. Their job is to make sure players are serviced correctly and make sure the game runs smoothly."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 23,
			  "item": {
				"@type": "DefinedTerm",
				"name": "The Boys",
				"description": "Another word for the dealers."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 24,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Bridging Lay Odds",
				"description": "The act of stacking cheques in a triangular fashion when playing the don\'ts and adding lay odds that win the same as the don\'t bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 25,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Buffalo",
				"description": "An equal amount bet on the any seven and all the hardways, working, during the comeout roll."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 26,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Buy",
				"description": "Paying a commission in order to turn a place bet into a bet that gets paid true odds. A lammer marked “Buy” is placed on the bet to signify it has been bought."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 27,
			  "item": {
				"@type": "DefinedTerm",
				"name": "C & E",
				"description": "A simultaneous bet on both the Any Craps 'C' and the eleven 'E'."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 28,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Call Bet",
				"description": "The act of telling the dealers you want a bet without showing that you have the money to pay for it."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 29,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Change Only",
				"description": "When a player drops cash on the table for cheques but doesn\'t want to make a bet, the dealer will call out 'Change only'."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 30,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Cheque",
				"description": "Like a 'chip' but has monetary value."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 31,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Cheque Change",
				"description": "The act of turning a large denomination cheque into smaller denomination cheques such as dropping a $100 cheque and wanting four $25 cheques."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 32,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Chip",
				"description": "Like a cheque but has NO monetary value."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 33,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Cold",
				"description": "When a table is in a constant mode of losing the table is considered 'cold'."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 34,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Color Up",
				"description": "The act of taking multiple smaller denomination cheques and turning them into larger denomination cheques such as turning twenty $5 cheques into one $100 cheque. This is usually only done when you're leaving the table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 35,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Come Area",
				"description": "The area on both sides of the table marked COME. This is where you make come bets and place your money for the dealers when making place bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 36,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Come Bets",
				"description": "They work exactly like a pass line bet but can only be bet during the intermediate roll. While in the COME area it wins on 7 or 11 and loses on 2, 3, and 12. Otherwise a point is rolled and it moves into that point. Once in the point, that point must be rolled before a seven in order to win. Come bets win even money but just like the pass line you can add an extra bet to the come bet called odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 37,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Come Bet Odds",
				"description": "An extra bet you can add to a come bet after it has moved into a point. It is also betting the point will be rolled before the seven. It gets paid true odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 38,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Comeout Roll",
				"description": "This is the start of the game when the puck is turned OFF. This is the best time to bet the pass line, which wins on 7 or 11 and loses on 2, 3, and 12. This is also the only time you can bet the don\'t pass line which wins on a 2 or 3 and loses on a 7 or 11. When the 12 rolls the don\'t pass is a push."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 39,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Commission",
				"description": "The money paid to 'buy' a place bet in order for it to get paid true odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 40,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Comp.",
				"description": "Complimentary items that are given to players by the casino such as food, drinks, cigarettes or even free rooms."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 41,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Crap Out",
				"description": "When the shooter throws a 2, 3, or 12 during the comeout roll so the pass line loses."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 42,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Crew",
				"description": "Another term for the dealers at the table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 43,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Decision Roll",
				"description": "During the intermediate roll the shooter will either win by making their point or lose by throwing a seven. The roll when either one happens is called the decision roll."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 44,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Dice",
				"description": "A cube with all six sides marked 1-6 using round dots called pips. There are five dice on each craps table that are made of colored, transparent plastic."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 45,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Dice are in the Middle",
				"description": "When the dice are sitting in front of the box person. This is the time you should be making your bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 46,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Dice Setting",
				"description": "The act of setting the dice on certain sides and combinations in order to try and get a certain outcome after throwing the dice. The casino staff is aware of dice setting and they will not tolerate it. If you follow the rules of craps and hit the back wall with the dice then dice setting will get you nowhere."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 47,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Come",
				"description": "The bet works exactly like a don\'t pass bet but can only be bet during the intermediate roll. While in the don\'t come area it loses on a 7 or 11 and wins with a 2 or 3. When 12 is rolled it is a push. Otherwise a point is rolled and it moves behind that point. It then wins is a seven is rolled before the point it is behind. Once behind a point you can add an extra bet called lay odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 48,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Come Lay Odds",
				"description": "An extra bet you can add to a don\'t come bet after it has moved behind a point. It is also betting the seven will be rolled before the point it is behind. It gets paid true odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 49,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Pass",
				"description": "It is the opposite of the pass line. You can only be the don\'t pass during the comeout roll and during this time it wins when a 2 or 3 is rolled. It loses when a 7 or 11 is rolled and when a 12 rolls it is a push. After a point has been established the don\'t pass is betting the 7 will roll before the point. You can add an extra bet called lay odds to it after a point has been established."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 50,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Pass Lay Odds",
				"description": "An extra bet you can add to a don\'t pass bet after a point has been established. It is also betting the seven will be rolled before the point and gets paid true odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 51,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Double Dip",
				"description": "When you are playing the pass line with odds and you decide to make a place bet on the point at the same time."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 52,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Double Unit Press",
				"description": "The act of adding money to two place bets at the same time while after being paid for one."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 53,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Down",
				"description": "The act of taking back a bet or multiple bets. You would say 'Take all my bets down.' or 'Take my Hard 6 down.'"
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 54,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Down Behind",
				"description": "The act of removing a don\'t come bet from behind a point after it has lost. The stickperson will call out 'down behind' during their stick call to remind the base dealer to take down the losing bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 55,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Down the Middle",
				"description": "The shooter should avoid throwing the dice into the box numbers or at pass line bets so it is recommended they throw the dice through the COME area or 'down the middle'."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 56,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Down with Odds",
				"description": "When a come bet moves into a point that also has a place bet on it the player will take down the place bet and add odds to their come bet. This is the act of coming down with odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 57,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Downtown",
				"description": "The point numbers 4, 5, and 6."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 58,
			  "item": {
				"@type": "DefinedTerm",
				"name": "ET",
				"description": "Another way to say Eleven-Twelve."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 59,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Easy Way",
				"description": "When the shooter rolls a 4, 6, 8, or 10 that doesn\'t come as a pair such as rolling a six as 4-2 as oppose to 3-3."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 60,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Edge",
				"description": "The % advantage the casino has on each bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 61,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Even Money",
				"description": "When a bet gets paid 1:1."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 62,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Field Bet",
				"description": "A bet that the next roll will be a 2, 3, 4, 9, 10, 11, or 12. The 2 and 12 usually get paid double but sometimes one or the other could get triple (never both). The rest of the numbers always win even money."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 63,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Fill",
				"description": "Adding cheques to the bank. It must be counted and verified by the box person, floor, and/or the dealer."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 64,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Fire Bet",
				"description": "A bet that the shooter will make at least three or four different points. The more different points that are made the more the bet pays."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 65,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Flat Bet",
				"description": "Another way to refer to your pass line bet or come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 66,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Floor",
				"description": "The person who stands behind the craps table and is responsible for watching multiple craps tables at the same time. If a problem cannot be resolved by a dealer or box person the problem goes to the next person in line: the floor."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 67,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Front Line",
				"description": "Another way to say the pass line."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 68,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Full Press",
				"description": "The highest amount you can take a bet without dropping money."
			  }
			},
      		{
      		  "@type": "ListItem",
      		  "position": 69,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hard Way",
      		    "description": "When the shooter rolls a 4, 6, 8, or 10 that comes as a pair such as rolling an eight as 4-4 as opposed to 5-3."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 70,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hardways",
      		    "description": "A bet on 4, 6, 8, or 10. It wins if it rolls the hard way. It loses if it rolls the easy way or if a seven rolls. The 6 and 8 get paid 9 to 1. The 4 and 10 get paid 7 to 1."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 71,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hawking the Dice",
      		    "description": "When a dealer on one base is watching the dice land on the opposite side of the table."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 72,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hedge",
      		    "description": "Making a bet that wins when another bet loses at the same time."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 73,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "High",
      		    "description": "Another name for Twelve."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 74,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "High Low",
      		    "description": "A phrase used to bet the Aces and Twelve at the same time."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 75,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "High Low Yo",
      		    "description": "A phrase used to bet the Aces, Twelve, and Yo at the same time."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 76,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "High Side",
      		    "description": "A phrase referring to the dice landing on aces or twelve when making a world, horn, or horn high bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 77,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hook",
      		    "description": "The curved area on both sides of the table where the players stand."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 78,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hop Bets",
      		    "description": "A one roll bet on a specific combination of the dice not including the 2, 3, 11, or 12. They win 15 to 1 if they roll the easy way and 30 to one if they roll the hard way."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 79,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Horn",
      		    "description": "A one roll bet that the 2, 3, 11, or 12 will roll. You must make the bet in multiples of four with an even amount on each of the four numbers."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 80,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Horn High",
      		    "description": "A horn with an extra unit on either the 2, 3, 11, or 12. I.e. A $5 horn high twelve is $1 on each of the 2, 3, and 11 and $2 on the twelve. It is a one roll bet and gets paid differently depending on what rolls."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 81,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Hot",
      		    "description": "When a table is in a constant mode of winning, the table is considered \"hot.\""
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 82,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Inside",
      		    "description": "The point numbers 5, 6, 8, and 9."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 83,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Intermediate Roll",
      		    "description": "After the comeout roll when the point has been established. It's the middle of the game when the puck is turned ON."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 84,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Lammer",
      		    "description": "Round plastic disks smaller and thinner than checks. You put them on checks to signify one of four scenarios: ON, OFF, BUY, and LAY."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 85,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Late Bet",
      		    "description": "A bet made while the dice are not in the middle of the table or that are made without enough time before the dice land. Repeat offenders will be \"No bet\"."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 86,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Layout",
      		    "description": "The felt the game is played on."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 87,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Lights Out",
      		    "description": "The act of turning the puck from ON to OFF. This only occurs after the decision roll when the point has or has not been made."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 88,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Lock it Up",
      		    "description": "When a dealer picks up a check(s) because it currently serves no purpose and puts it back on their working stacks."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 89,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Low",
      		    "description": "Another name for Aces."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 90,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Low Side",
      		    "description": "A phrase referring to the dice landing on an ace deuce or yo when making a world, horn, or horn high bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 91,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Marker",
      		    "description": "When a player borrows money from the casino. Players can have a pre-set line of credit that they can pull money from."
      		  }
      		},
	  		{
      		  "@type": "ListItem",
      		  "position": 92,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Multi-Bet",
      		    "description": "Certain sets of proposition bets that are bet at the same time."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 93,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Natural",
      		    "description": "A roll of 2, 3, 7, 11, or 12."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 94,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "No Bet",
      		    "description": "A phrase used by the dealers towards the players when they make a late or improper bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 95,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "No Roll",
      		    "description": "A roll that doesn\'t count. There can be many reasons for a no roll, but the shooter will throw the dice again."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 96,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Off",
      		    "description": "When a player doesn\'t want any multitude of bets to win or lose, they can turn those bets off."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 97,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Off Coming Out",
      		    "description": "You placed a bet that is not working."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 98,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "On",
      		    "description": "When certain bets aren\'t working (they can't currently win or lose), players can ask those bets to be turned on so they are eligible to win and lose."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 99,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "One Roll Bet",
      		    "description": "A bet that must win on the very next roll or it loses."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 100,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "One Unit Press",
      		    "description": "Adding one unit to an existing place bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 101,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Outside",
      		    "description": "The point numbers 4, 5, 9, and 10."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 102,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Overlay",
      		    "description": "A bet against a box number that gets paid true odds. You pay a 5% commission on the amount of money the bet is going to win. A seven must roll before the number you are laying against in order to win. A lammer marked “Lay” is placed on the bet to signify you are betting against that number."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 103,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Parlay",
      		    "description": "A term used by players when a bet has won, and then they take those winnings and put it back on the bet to win again. \"Parlay\" is generally only used on proposition bets."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 104,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Pass Line",
      		    "description": "A bet generally only made on the comeout roll. The pass line is betting on the point. During the comeout roll, the pass line wins on 7 or 11 and loses on 2, 3, and 12. After a point is made, the pass line is betting that the point is going to be rolled before a 7. The pass line always wins even money."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 105,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Pass Line Odds",
      		    "description": "An extra bet that you can add to your pass line bet. It can only be made during the intermediate roll, and it gets paid true odds."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 106,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Past Posting",
      		    "description": "When a player adds money to a bet after it has won. This is otherwise known as cheating and will get you in a lot of trouble."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 107,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Pip",
      		    "description": "The dots on the dice."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 108,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Pit",
      		    "description": "A section of the casino that is comprised of table games. Players are not allowed inside the pit, and floor supervisors walk around watching the games, dealers, and players."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 109,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Pit Boss",
      		    "description": "The supervisor in charge of all the floors in that pit."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 110,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Place Bets",
      		    "description": "A bet that one of the box numbers (4, 5, 6, 8, 9, or 10) will be rolled before a 7."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 111,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Point",
      		    "description": "During the intermediate roll, it is the number that the puck is on. If that number is rolled before a 7, the pass line wins and the don\'t pass loses. If the 7 is rolled before that number, the don\'t pass wins and the pass line loses."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 112,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Power Press",
      		    "description": "When a place bet wins, and the player puts everything it won plus more of their own money back on that place bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 113,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Press",
      		    "description": "The act of adding money to an existing place bet. There are multiple types of presses that increase the money added in different amounts."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 114,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Proposition Bet",
      		    "description": "Also known as center bets, these bets are in the middle of the table. The majority are one roll bets, meaning they lose the next roll but pay the most because of this reason."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 115,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Puck",
      		    "description": "The puck is a double-sided disk that reads “OFF” on one side and “ON” on the opposite side. When the puck is “OFF”, it is the comeout roll. When a point is established, it will turn “ON” and move to that number."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 116,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Push",
      		    "description": "When a bet doesn\'t win or lose."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 117,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Rail",
      		    "description": "The grooves on the outer wall of the table that players place their checks in."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 118,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Right Better",
      		    "description": "A bettor whose bets are with the shooter. They are hoping the shooter will throw the point."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 119,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Same Bet",
      		    "description": "A phrase used by the dealers when paying players for a place bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 120,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Seven Out",
      		    "description": "When the shooter throws the 7 before throwing their point."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 121,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Shooter",
      		    "description": "The person who is throwing the dice. It is their responsibility to make the point."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 122,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Split",
      		    "description": "A bet that is comprised of two different bets with an equal amount of money on both bets."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 123,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Spread Bets",
      		    "description": "A bet on multiple place bet numbers at the same time. Each bet has the same number of units on each number."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 124,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Stick",
      		    "description": "The wooden “L” shaped stick used by the stickperson to retrieve the dice after the shooter has thrown them."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 125,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Stick Call",
      		    "description": "A set of phrases used by the stickperson to advertise bets on the table. They are also used to tell the base dealers what number has rolled and the order of payment for multiple bets on the table."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 126,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Stickperson",
      		    "description": "The dealer in the middle of the table across from the box person. They retrieve the dice and control the pace of the game."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 127,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Straight Out",
      		    "description": "A place on the table where the players stand. It is the short straight part of the table."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 128,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Straight Up",
      		    "description": "A phrase used to bet the 2, 3, 11, and 12."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 129,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Stroker",
      		    "description": "A player whose sole purpose in life is to piss off the dealers."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 130,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Take Odds",
      		    "description": "When a player adds odds to their pass line or come bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 131,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Three Way Bets",
      		    "description": "Three bets made on the same bet at the same time. One for you, the shooter, and the dealer."
      		  }
      		},
	  		{
      		  "@type": "ListItem",
      		  "position": 132,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Three Way Craps",
      		    "description": "An equal amount bet on each of the 2, 3, and 12."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 133,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Toke",
      		    "description": "A tip for the dealers."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 134,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "True Odds",
      		    "description": "The ratio of the number of ways you can win compared to the number of ways you can lose. When you get paid true odds, there is no advantage for the casino."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 135,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Twelve",
      		    "description": "A roll of twelve on the dice."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 136,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Two Way Bets",
      		    "description": "Two bets made on the same bet at the same time. One for you and one for the dealers."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 137,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Unit",
      		    "description": "Usually only used as a reference for place bets. A unit is the minimum amount of money you can put on a bet."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 138,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Up and Off",
      		    "description": "You placed a bet that is not working."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 139,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Uptown",
      		    "description": "The point numbers 8, 9, and 10."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 140,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Vigorish",
      		    "description": "Another term for commission."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 141,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Working",
      		    "description": "When a player wants bets that normally don\'t work, such as during the comeout roll, to be turned on so they are able to win or lose."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 142,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Working Stacks",
      		    "description": "The stacks of checks in front of the base dealers. They use these stacks to make payments to players or to put losing checks on."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 143,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "World/Whirl",
      		    "description": "A horn with an extra unit on the 7. I.e. A $5 world is $1 on each of the 2, 3, 11, 12, and 7. It is a one roll bet and gets paid differently depending on what rolls."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 144,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Wrong Better",
      		    "description": "A bettor who bets against the shooter. They are hoping the shooter seven outs."
      		  }
      		},
      		{
      		  "@type": "ListItem",
      		  "position": 145,
      		  "item": {
      		    "@type": "DefinedTerm",
      		    "name": "Yo",
      		    "description": "Another term for a roll of 11."
      		  }
      		}
		  ]
		}
	</script>
</svelte:head>

<MoreLayout>
	<main
		aria-label="Main content"
		class="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-slate-400 p-6"
	>
		<h1 class="text-4xl font-bold mb-10 text-center dark:text-white">Craps Glossary</h1>
		<div class="space-y-4">
			{#each sets as set}
				<p><strong class="text-lg dark:text-stone-400">{set.word}</strong> - {set.definition}</p>
			{/each}
		</div>
	</main>
</MoreLayout>
