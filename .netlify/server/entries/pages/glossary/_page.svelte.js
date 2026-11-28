import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { M as MoreCrapsLayout } from "../../../chunks/MoreCrapsLayout.js";
let title = "Craps Glossary";
let description = "A list of casino related terms and phrases. Learn the language of the casinos. Find all the terms you'll hear at the Craps table here.";
let url = "glossary";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sets = [
    {
      word: "3x4x5 Odds",
      definition: "The max odds bet you can take on the Craps table. Three times your flat bet on the 4 and 10. Four times your flat bet on the 5 and 9. Five times your flat bet on the 6 and 8."
    },
    {
      word: "2x Odds",
      definition: "The max odds you can take is two times your flat bet. Otherwise known as double odds."
    },
    {
      word: "3x Odds",
      definition: "The max odds you can take is three times your flat bet."
    },
    {
      word: "5x Odds",
      definition: "The max odds you can take is five times your flat bet."
    },
    {
      word: "10x Odds",
      definition: "The max odds you can take is 10 times your flat bet."
    },
    {
      word: "Across",
      definition: "A bet on all the box numbers not including the point."
    },
    {
      word: "Any Craps",
      definition: "A one-roll bet on the 2, 3, and the 12. It pays 7 to 1."
    },
    {
      word: "Any Seven",
      definition: "A one-roll bet on the 7. It pays 4 to 1."
    },
    {
      word: "Apron",
      definition: "The outer section of the table layout. This is where you place your odds bet and where bets are handed off to the players."
    },
    {
      word: "Back Wall",
      definition: "Usually green, the back wall is the rubber wall with diamonds on it at both ends of the table. The shooter must try to hit the wall with both dice in order to assure a random number being rolled."
    },
    {
      word: "Bank",
      definition: "All the cheques in front of the Boxperson that are used to run the game."
    },
    {
      word: "Bar",
      definition: "Another word for “Push”. Usually only used when a 12 is rolled during the Comeout Roll and a player is playing the Don't Pass."
    },
    {
      word: "Barber Pole",
      definition: "When you place a bet with a group of cheques that are out of ascending order such as putting a $25 cheque between a $1 and $5 cheque."
    },
    {
      word: "Base Dealer",
      definition: "A dealer who is in charge of one of the bases of the table. The base dealer is the one who pays off and collects bets from players."
    },
    {
      word: "Behind the Line",
      definition: "This is where the odds bet is placed, behind the pass line or the come bet."
    },
    {
      word: "Big 6/Big 8",
      definition: "A bet that a 6 or 8 will be rolled before a 7. This bet is placed in the big 6/big 8 box on the corner of the Craps table."
    },
    {
      word: "Big Red",
      definition: "A term for the number 7."
    },
    {
      word: "Boxcars",
      definition: "A term for the number 12."
    },
    {
      word: "Box Numbers",
      definition: "The numbers 4, 5, 6, 8, 9, and 10."
    },
    {
      word: "Boxperson",
      definition: "The person in charge of the bank. They watch the game and help settle disputes."
    },
    {
      word: "Broke Money",
      definition: "Money given to a player by the casino when they run out of money. Also known as a line of credit."
    },
    {
      word: "Buffalo",
      definition: "A bet on all the hardways and any seven."
    },
    {
      word: "Buy Bet",
      definition: "A bet where a player pays a 5% commission to get true odds on the numbers 4, 5, 6, 8, 9, and 10."
    },
    {
      word: "C and E",
      definition: "A one-roll bet that the next roll will be any craps (2, 3, 12) or 11."
    },
    {
      word: "Change Only",
      definition: "An expression used by the Boxperson to let the base dealers know that a player wants to exchange cash for cheques."
    },
    {
      word: "Cheques",
      definition: "The term used by dealers to refer to what players commonly call chips."
    },
    {
      word: "Come Bet",
      definition: "A bet made after the comeout roll but works just like a pass line bet."
    },
    {
      word: "Comeout Roll",
      definition: "The first roll of the dice in a betting round. The outcome of the comeout roll determines the point for the pass and don't pass line bets."
    },
    {
      word: "Contract Bet",
      definition: "A bet that cannot be taken down once it is made. Pass Line and Come bets are contract bets."
    },
    {
      word: "Craps",
      definition: "The name of the game, also a roll of 2, 3, or 12."
    },
    {
      word: "Crew",
      definition: "The dealers working the Craps table. Two Base Dealers, a Stickperson, and the Boxperson."
    },
    {
      word: "Dark Side",
      definition: "The Don't side of the table. Players on the Dark Side bet the Don't Pass or the Don't Come."
    },
    {
      word: "Dealer",
      definition: "The casino employee who manages the bets and payouts at the Craps table."
    },
    {
      word: "Don't Come Bet",
      definition: "A bet made after the comeout roll, it works just like a don't pass line bet."
    },
    {
      word: "Don't Pass Line Bet",
      definition: "A bet placed before the comeout roll that a 7 will be rolled before the point number."
    },
    {
      word: "Double Odds",
      definition: "An odds bet that is twice the size of the original pass/come bet."
    },
    {
      word: "Easy Way",
      definition: "A roll of 4, 6, 8, or 10 in which the dice show different numbers (as in 3-1, 3-2, 4-2, 5-1)."
    },
    {
      word: "Field Bet",
      definition: "A bet that the next roll will be a 2, 3, 4, 9, 10, 11, or 12. This bet can be placed at any time and has a single roll payout."
    },
    {
      word: "Front Line",
      definition: "Another term for a pass line bet."
    },
    {
      word: "Hi-Lo",
      definition: "A one-roll bet that the next roll will be a 2 or 12."
    },
    {
      word: "Hi-Lo-Yo",
      definition: "A one-roll bet on 2, 12 and 11."
    },
    {
      word: "Hop Bet",
      definition: "A bet that a specific combination of numbers will appear on the very next roll."
    },
    {
      word: "Hard Way",
      definition: "When the shooter rolls a 4, 6, 8, or 10 that comes as a pair such as rolling an eight as 4-4 as opposed to 5-3."
    },
    {
      word: "Hardways",
      definition: "A bet on 4, 6, 8, or 10. It wins if it rolls the hard way. It loses if it rolls the easy way or if a seven rolls. The 6 and 8 get paid 9 to 1. The 4 and 10 get paid 7 to 1."
    },
    {
      word: "Hawking the Dice",
      definition: "When a dealer on one base is watching the dice land on the opposite side of the table."
    },
    {
      word: "Hedge",
      definition: "Making a bet that wins when another bet loses at the same time."
    },
    {
      word: "High",
      definition: "Another name for Twelve."
    },
    {
      word: "High Low",
      definition: "A phrase used to bet the Aces and Twelve at the same time."
    },
    {
      word: "High Low Yo",
      definition: "A phrase used to bet the Aces, Twelve, and Yo at the same time."
    },
    {
      word: "High Side",
      definition: "A phrase referring to the dice landing on aces or twelve when making a world, horn, or horn high bet."
    },
    {
      word: "Hook",
      definition: "The curved area on both sides of the table where the players stand."
    },
    {
      word: "Hop Bets",
      definition: "A one-roll bet on a specific combination of the dice not including the 2, 3, 11, or 12. They win 15 to 1 if they roll the easy way and 30 to one if they roll the hard way."
    },
    {
      word: "Horn",
      definition: "A one-roll bet that the 2, 3, 11, or 12 will roll. You must make the bet in multiples of four with an even amount on each of the four numbers."
    },
    {
      word: "Horn High",
      definition: "A horn with an extra unit on either the 2, 3, 11, or 12. I.e. A $5 horn high twelve is $1 on each of the 2, 3, and 11 and $2 on the twelve. It is a one-roll bet and gets paid differently depending on what rolls."
    },
    {
      word: "Hot",
      definition: 'When a table is in a constant mode of winning, the table is considered "hot."'
    },
    {
      word: "Inside",
      definition: "The point numbers 5, 6, 8, and 9."
    },
    {
      word: "Intermediate Roll",
      definition: "After the Comeout Roll when the point has been established. It's the middle of the game when the puck is turned ON."
    },
    {
      word: "Lammer",
      definition: "Round plastic disks smaller and thinner than cheques. You put them on cheques to signify one of four scenarios: ON, OFF, BUY, and LAY."
    },
    {
      word: "Late Bet",
      definition: 'A bet made while the dice are not in the middle of the table or that are made without enough time before the dice land. Repeat offenders will be "No bet."'
    },
    {
      word: "Layout",
      definition: "The felt the game is played on."
    },
    {
      word: "Lights Out",
      definition: "The act of turning the puck from ON to OFF. This only occurs after the decision roll when the point has or has not been made."
    },
    {
      word: "Lock it Up",
      definition: "When a dealer picks up a cheque(s) because it currently serves no purpose and puts it back on their working stacks."
    },
    {
      word: "Low",
      definition: "Another name for Aces."
    },
    {
      word: "Low Side",
      definition: "A phrase referring to the dice landing on an ace deuce or yo when making a world, horn or horn high bet."
    },
    {
      word: "Marker",
      definition: "When a player borrows money from the casino. Players can have a pre-set line of credit that they can pull money from."
    },
    {
      word: "Multi-Bet",
      definition: "Certain sets of proposition bets that are bet at the same time."
    },
    {
      word: "Natural",
      definition: "A roll of 2, 3, 7, 11, or 12."
    },
    {
      word: "No Bet",
      definition: "A phrase used by the dealers towards the players when they make a late or improper bet."
    },
    {
      word: "No Roll",
      definition: "A roll that doesn't count. There can be many reasons for a no roll, but the shooter will throw the dice again."
    },
    {
      word: "Off",
      definition: "When a player doesn't want any multitude of bets to win or lose, they can turn those bets off."
    },
    {
      word: "Off Coming Out",
      definition: "You placed a bet that is not working."
    },
    {
      word: "On",
      definition: "When certain bets aren't working (they can't currently win or lose), players can ask those bets to be turned on so they are eligible to win and lose."
    },
    {
      word: "One Roll Bet",
      definition: "A bet that must win on the very next roll or it loses."
    },
    {
      word: "One Unit Press",
      definition: "Adding one unit to an existing place bet."
    },
    {
      word: "Outside",
      definition: "The point numbers 4, 5, 9, and 10."
    },
    {
      word: "Overlay",
      definition: "A bet against a box number that gets paid true odds. You pay a 5% commission on the amount of money the bet is going to win. A seven must roll before the number you are laying against in order to win. A lammer marked “Lay” is placed on the bet to signify you are betting against that number."
    },
    {
      word: "Parlay",
      definition: 'A term used by players when a bet has won, and then they take those winnings and put it back on the bet to win again. "Parlay" is generally only used on proposition bets.'
    },
    {
      word: "Pass Line",
      definition: "A bet generally only made on the Comeout Roll. The pass line is betting on the point. During the Comeout Roll, the pass line wins on 7 or 11 and loses on 2, 3, and 12. After a point is made, the pass line is betting that the point is going to be rolled before a 7. The pass line always wins even money."
    },
    {
      word: "Pass Line Odds",
      definition: "An extra bet that you can add to your pass line bet. It can only be made during the intermediate roll, and it gets paid true odds."
    },
    {
      word: "Past Posting",
      definition: "When a player adds money to a bet after it has won. This is otherwise known as cheating and will get you in a lot of trouble."
    },
    {
      word: "Pip",
      definition: "The dots on the dice."
    },
    {
      word: "Pit",
      definition: "A section of the casino that is comprised of table games. Players are not allowed inside the pit, and floor supervisors walk around watching the games, dealers, and players."
    },
    {
      word: "Pit Boss",
      definition: "The supervisor in charge of all the floors in that pit."
    },
    {
      word: "Place Bets",
      definition: "A bet that one of the box numbers (4, 5, 6, 8, 9, or 10) will be rolled before a 7."
    },
    {
      word: "Point",
      definition: "During the intermediate roll, it is the number that the puck is on. If that number is rolled before a 7, the pass line wins, and the don't pass loses. If a 7 is rolled before that number, the don't pass wins, and the pass line loses."
    },
    {
      word: "Power Press",
      definition: "When a place bet wins, and the player puts everything it won plus more of their own money back on that place bet."
    },
    {
      word: "Press",
      definition: "The act of adding money to an existing place bet. There are multiple types of presses that increase the money added in different amounts."
    },
    {
      word: "Proposition Bet",
      definition: "Also known as center bets, these bets are in the middle of the table. The majority are one-roll bets, meaning they lose on the next roll but pay the most because of this reason."
    },
    {
      word: "Puck",
      definition: 'The puck is a double-sided disk that reads "OFF" on one side and "ON" on the opposite side. When the puck is "OFF," it is the Comeout Roll. When a point is established, it will turn "ON" and move to that number.'
    },
    {
      word: "Push",
      definition: "When a bet doesn't win or lose."
    },
    {
      word: "Rail",
      definition: "The grooves on the outer wall of the table that players place their cheques in."
    },
    {
      word: "Right Better",
      definition: "A bettor who bets with the shooter. They are hoping the shooter will throw the point."
    },
    {
      word: "Same Bet",
      definition: "A phrase used by the dealers when paying players for a place bet."
    },
    {
      word: "Seven Out",
      definition: "When the shooter throws the 7 before throwing their point."
    },
    {
      word: "Shooter",
      definition: "The person who is throwing the dice. It is their responsibility to make the point."
    },
    {
      word: "Split",
      definition: "A bet that is comprised of two different bets with an equal amount of money on both bets."
    },
    {
      word: "Spread Bets",
      definition: "A bet on multiple place bet numbers at the same time. Each bet has the same number of units on each number."
    },
    {
      word: "Stick",
      definition: 'The wooden "L" shaped stick used by the stickperson to retrieve the dice after the shooter has thrown them.'
    },
    {
      word: "Stick Call",
      definition: "A set of phrases used by the stickperson to advertise bets on the table. They are also used to tell the base dealers what number has rolled and the order of payment for multiple bets on the table."
    },
    {
      word: "Stickperson",
      definition: "The dealer in the middle of the table across from the Boxperson. They retrieve the dice and control the pace of the game."
    },
    {
      word: "Straight Out",
      definition: "A place on the table where the players stand. It is the short straight part of the table."
    },
    {
      word: "Straight Up",
      definition: "A phrase used to bet on the 2, 3, 11, and 12."
    },
    {
      word: "Stroker",
      definition: "A player whose sole purpose in life is to annoy the dealers."
    },
    {
      word: "Take Odds",
      definition: "When a player adds odds to their pass line or come bet."
    },
    {
      word: "Three-Way Bets",
      definition: "Three bets made on the same bet at the same time. One for you, the shooter, and the dealer."
    },
    {
      word: "Three Way Craps",
      definition: "An equal amount bet on each the 2, 3, and 12."
    },
    {
      word: "Toke",
      definition: "A tip for the dealers."
    },
    {
      word: "True Odds",
      definition: "The ratio of the number of ways you can win compared to the number of ways you can lose. When you get paid true odds, there is no advantage for the casino."
    },
    {
      word: "Twelve",
      definition: "A roll of twelve on the dice."
    },
    {
      word: "Two-Way Bets",
      definition: "Two bets made on the same bet at the same time. One for you and one for the dealers."
    },
    {
      word: "Unit",
      definition: "Usually only used as a reference for place bets. A unit is the minimum amount of money you can put on a bet."
    },
    {
      word: "Up and Off",
      definition: "You placed a bet that is not working."
    },
    {
      word: "Uptown",
      definition: "The point numbers 8, 9, and 10."
    },
    {
      word: "Vigorish",
      definition: "Another term for commission."
    },
    {
      word: "Working",
      definition: "When a player wants bets that normally don't work, such as during the Comeout Roll, to be turned on so they are able to win or lose."
    },
    {
      word: "Working Stacks",
      definition: "The stacks of cheques in front of the base dealers. They use these stacks to make payments to players or to put losing cheques on."
    },
    {
      word: "World/Whirl",
      definition: "A horn with an extra unit on the 7. I.e. A $5 world is $1 on each of the 2, 3, 11, 12, and 7. It is a one-roll bet and gets paid differently depending on what rolls."
    },
    {
      word: "Wrong Better",
      definition: "A bettor who bets against the shooter. They are hoping the shooter seven outs."
    },
    {
      word: "Yo",
      definition: "Another term for a roll of 11."
    },
    {
      word: "Yo Bet",
      definition: "A one-roll bet on the Yo, the 11."
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-zote7l_START -->${$$result.title = `<title>${escape(title)} | Parlay Nation - How to Play Craps</title>`, ""}<link rel="canonical"${add_attribute("href", "http://parlaynation.com/" + url, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:url"${add_attribute("content", "http://parlaynation.com/" + url, 0)}><meta property="og:title"${add_attribute("content", title + " | Parlay Nation - How to Play Craps", 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><meta name="twitter:image"${add_attribute("content", "images/" + url + "/" + url + "-header.jpg", 0)}><script type="application/ld+json" data-svelte-h="svelte-1iew3yi">{
		  "@context": "https://schema.org",
		  "@type": "ItemList",
		  "itemListElement": [
			{
			  "@type": "ListItem",
			  "position": 1,
			  "item": {
				"@type": "DefinedTerm",
				"name": "3x4x5 Odds",
				"description": "The max odds bet you can take on the Craps table. Three times your flat bet on the 4 and 10. Four times your flat bet on the 5 and 9. Five times your flat bet on the 6 and 8."
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
				"description": "A one-roll bet on the 2, 3, and the 12. It pays 7 to 1."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 8,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Any Seven",
				"description": "A one-roll bet on the 7. It pays 4 to 1."
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
				"description": "All the cheques in front of the Boxperson that are used to run the game."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 12,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Bar",
				"description": "Another word for “Push”. Usually only used when a 12 is rolled during the Comeout Roll and a player is playing the Don't Pass."
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
				"name": "Base Dealer",
				"description": "A dealer who is in charge of one of the bases of the table. The base dealer is the one who pays off and collects bets from players."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 15,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Behind the Line",
				"description": "This is where the odds bet is placed, behind the pass line or the come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 16,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Big 6/Big 8",
				"description": "A bet that a 6 or 8 will be rolled before a 7. This bet is placed in the big 6/big 8 box on the corner of the Craps table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 17,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Big Red",
				"description": "A term for the number 7."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 18,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Boxcars",
				"description": "A term for the number 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 19,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Box Numbers",
				"description": "The numbers 4, 5, 6, 8, 9, and 10."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 20,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Boxperson",
				"description": "The person in charge of the bank. They watch the game and help settle disputes."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 21,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Broke Money",
				"description": "Money given to a player by the casino when they run out of money. Also known as a line of credit."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 22,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Buffalo",
				"description": "A bet on all the hardways and any seven."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 23,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Buy Bet",
				"description": "A bet where a player pays a 5% commission to get true odds on the numbers 4, 5, 6, 8, 9, and 10."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 24,
			  "item": {
				"@type": "DefinedTerm",
				"name": "C and E",
				"description": "A one-roll bet that the next roll will be any craps (2, 3, 12) or 11."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 25,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Change Only",
				"description": "An expression used by the Boxperson to let the base dealers know that a player wants to exchange cash for cheques."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 26,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Cheques",
				"description": "The term used by dealers to refer to what players commonly call chips."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 27,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Come Bet",
				"description": "A bet made after the comeout roll but works just like a pass line bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 28,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Comeout Roll",
				"description": "The first roll of the dice in a betting round. The outcome of the comeout roll determines the point for the pass and don't pass line bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 29,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Contract Bet",
				"description": "A bet that cannot be taken down once it is made. Pass Line and Come bets are contract bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 30,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Craps",
				"description": "The name of the game, also a roll of 2, 3, or 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 31,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Crew",
				"description": "The dealers working the Craps table. Two Base Dealers, a Stickperson, and the Boxperson."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 32,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Dark Side",
				"description": "The Don't side of the table. Players on the Dark Side bet the Don't Pass or the Don't Come."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 33,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Dealer",
				"description": "The casino employee who manages the bets and payouts at the Craps table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 34,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Come Bet",
				"description": "A bet made after the comeout roll, it works just like a don't pass line bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 35,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Don't Pass Line Bet",
				"description": "A bet placed before the comeout roll that a 7 will be rolled before the point number."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 36,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Double Odds",
				"description": "An odds bet that is twice the size of the original pass/come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 37,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Easy Way",
				"description": "A roll of 4, 6, 8, or 10 in which the dice show different numbers (as in 3-1, 3-2, 4-2, 5-1)."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 38,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Field Bet",
				"description": "A bet that the next roll will be a 2, 3, 4, 9, 10, 11, or 12. This bet can be placed at any time and has a single roll payout."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 39,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Front Line",
				"description": "Another term for a pass line bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 40,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hi-Lo",
				"description": "A one-roll bet that the next roll will be a 2 or 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 41,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hi-Lo-Yo",
				"description": "A one-roll bet on 2, 12 and 11."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 42,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hop Bet",
				"description": "A bet that a specific combination of numbers will appear on the very next roll."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 43,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hard Way",
				"description": "When the shooter rolls a 4, 6, 8, or 10 that comes as a pair such as rolling an eight as 4-4 as opposed to 5-3."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 44,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hardways",
				"description": "A bet on 4, 6, 8, or 10. It wins if it rolls the hard way. It loses if it rolls the easy way or if a seven rolls. The 6 and 8 get paid 9 to 1. The 4 and 10 get paid 7 to 1."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 45,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hawking the Dice",
				"description": "When a dealer on one base is watching the dice land on the opposite side of the table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 46,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hedge",
				"description": "Making a bet that wins when another bet loses at the same time."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 47,
			  "item": {
				"@type": "DefinedTerm",
				"name": "High",
				"description": "Another name for Twelve."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 48,
			  "item": {
				"@type": "DefinedTerm",
				"name": "High Low",
				"description": "A phrase used to bet the Aces and Twelve at the same time."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 49,
			  "item": {
				"@type": "DefinedTerm",
				"name": "High Low Yo",
				"description": "A phrase used to bet the Aces, Twelve, and Yo at the same time."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 50,
			  "item": {
				"@type": "DefinedTerm",
				"name": "High Side",
				"description": "A phrase referring to the dice landing on aces or twelve when making a world, horn, or horn high bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 51,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hook",
				"description": "The curved area on both sides of the table where the players stand."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 52,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hop Bets",
				"description": "A one-roll bet on a specific combination of the dice not including the 2, 3, 11, or 12. They win 15 to 1 if they roll the easy way and 30 to one if they roll the hard way."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 53,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Horn",
				"description": "A one-roll bet that the 2, 3, 11, or 12 will roll. You must make the bet in multiples of four with an even amount on each of the four numbers."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 54,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Horn High",
				"description": "A horn with an extra unit on either the 2, 3, 11, or 12. I.e. A $5 horn high twelve is $1 on each of the 2, 3, and 11 and $2 on the twelve. It is a one-roll bet and gets paid differently depending on what rolls."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 55,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Hot",
				"description": "When a table is in a constant mode of winning, the table is considered \\"hot.\\""
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 56,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Inside",
				"description": "The point numbers 5, 6, 8, and 9."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 57,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Intermediate Roll",
				"description": "After the Comeout Roll when the point has been established. It's the middle of the game when the puck is turned ON."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 58,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Lammer",
				"description": "Round plastic disks smaller and thinner than cheques. You put them on cheques to signify one of four scenarios: ON, OFF, BUY, and LAY."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 59,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Late Bet",
				"description": "A bet made while the dice are not in the middle of the table or that are made without enough time before the dice land. Repeat offenders will be \\"No bet.\\""
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 60,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Layout",
				"description": "The felt the game is played on."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 61,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Lights Out",
				"description": "The act of turning the puck from ON to OFF. This only occurs after the decision roll when the point has or has not been made."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 62,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Lock it Up",
				"description": "When a dealer picks up a cheque(s) because it currently serves no purpose and puts it back on their working stacks."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 63,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Low",
				"description": "Another name for Aces."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 64,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Low Side",
				"description": "A phrase referring to the dice landing on an ace deuce or yo when making a world, horn or horn high bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 65,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Marker",
				"description": "When a player borrows money from the casino. Players can have a pre-set line of credit that they can pull money from."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 66,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Multi-Bet",
				"description": "Certain sets of proposition bets that are bet at the same time."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 67,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Natural",
				"description": "A roll of 2, 3, 7, 11, or 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 68,
			  "item": {
				"@type": "DefinedTerm",
				"name": "No Bet",
				"description": "A phrase used by the dealers towards the players when they make a late or improper bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 69,
			  "item": {
				"@type": "DefinedTerm",
				"name": "No Roll",
				"description": "A roll that doesn't count. There can be many reasons for a no roll, but the shooter will throw the dice again."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 70,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Off",
				"description": "When a player doesn't want any multitude of bets to win or lose, they can turn those bets off."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 71,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Off Coming Out",
				"description": "You placed a bet that is not working."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 72,
			  "item": {
				"@type": "DefinedTerm",
				"name": "On",
				"description": "When certain bets aren't working (they can't currently win or lose), players can ask those bets to be turned on so they are eligible to win and lose."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 73,
			  "item": {
				"@type": "DefinedTerm",
				"name": "One Roll Bet",
				"description": "A bet that must win on the very next roll or it loses."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 74,
			  "item": {
				"@type": "DefinedTerm",
				"name": "One Unit Press",
				"description": "Adding one unit to an existing place bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 75,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Outside",
				"description": "The point numbers 4, 5, 9, and 10."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 76,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Overlay",
				"description": "A bet against a box number that gets paid true odds. You pay a 5% commission on the amount of money the bet is going to win. A seven must roll before the number you are laying against in order to win. A lammer marked “Lay” is placed on the bet to signify you are betting against that number."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 77,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Parlay",
				"description": "A term used by players when a bet has won, and then they take those winnings and put it back on the bet to win again. \\"Parlay\\" is generally only used on proposition bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 78,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Pass Line",
				"description": "A bet generally only made on the Comeout Roll. The pass line is betting on the point. During the Comeout Roll, the pass line wins on 7 or 11 and loses on 2, 3, and 12. After a point is made, the pass line is betting that the point is going to be rolled before a 7. The pass line always wins even money."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 79,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Pass Line Odds",
				"description": "An extra bet that you can add to your pass line bet. It can only be made during the intermediate roll, and it gets paid true odds."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 80,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Past Posting",
				"description": "When a player adds money to a bet after it has won. This is otherwise known as cheating and will get you in a lot of trouble."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 81,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Pip",
				"description": "The dots on the dice."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 82,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Pit",
				"description": "A section of the casino that is comprised of table games. Players are not allowed inside the pit, and floor supervisors walk around watching the games, dealers, and players."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 83,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Pit Boss",
				"description": "The supervisor in charge of all the floors in that pit."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 84,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Place Bets",
				"description": "A bet that one of the box numbers (4, 5, 6, 8, 9, or 10) will be rolled before a 7."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 85,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Point",
				"description": "During the intermediate roll, it is the number that the puck is on. If that number is rolled before a 7, the pass line wins, and the don't pass loses. If a 7 is rolled before that number, the don't pass wins, and the pass line loses."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 86,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Power Press",
				"description": "When a place bet wins, and the player puts everything it won plus more of their own money back on that place bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 87,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Press",
				"description": "The act of adding money to an existing place bet. There are multiple types of presses that increase the money added in different amounts."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 88,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Proposition Bet",
				"description": "Also known as center bets, these bets are in the middle of the table. The majority are one-roll bets, meaning they lose on the next roll but pay the most because of this reason."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 89,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Puck",
				"description": "The puck is a double-sided disk that reads \\"OFF\\" on one side and \\"ON\\" on the opposite side. When the puck is \\"OFF,\\" it is the Comeout Roll. When a point is established, it will turn \\"ON\\" and move to that number."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 90,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Push",
				"description": "When a bet doesn't win or lose."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 91,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Rail",
				"description": "The grooves on the outer wall of the table that players place their cheques in."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 92,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Right Better",
				"description": "A bettor who bets with the shooter. They are hoping the shooter will throw the point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 93,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Same Bet",
				"description": "A phrase used by the dealers when paying players for a place bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 94,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Seven Out",
				"description": "When the shooter throws the 7 before throwing their point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 95,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Shooter",
				"description": "The person who is throwing the dice. It is their responsibility to make the point."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 96,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Split",
				"description": "A bet that is comprised of two different bets with an equal amount of money on both bets."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 97,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Spread Bets",
				"description": "A bet on multiple place bet numbers at the same time. Each bet has the same number of units on each number."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 98,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Stick",
				"description": "The wooden \\"L\\" shaped stick used by the stickperson to retrieve the dice after the shooter has thrown them."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 99,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Stick Call",
				"description": "A set of phrases used by the stickperson to advertise bets on the table. They are also used to tell the base dealers what number has rolled and the order of payment for multiple bets on the table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 100,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Stickperson",
				"description": "The dealer in the middle of the table across from the Boxperson. They retrieve the dice and control the pace of the game."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 101,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Straight Out",
				"description": "A place on the table where the players stand. It is the short straight part of the table."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 102,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Straight Up",
				"description": "A phrase used to bet on the 2, 3, 11, and 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 103,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Stroker",
				"description": "A player whose sole purpose in life is to annoy the dealers."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 104,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Take Odds",
				"description": "When a player adds odds to their pass line or come bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 105,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Three-Way Bets",
				"description": "Three bets made on the same bet at the same time. One for you, the shooter, and the dealer."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 106,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Three Way Craps",
				"description": "An equal amount bet on each the 2, 3, and 12."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 107,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Toke",
				"description": "A tip for the dealers."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 108,
			  "item": {
				"@type": "DefinedTerm",
				"name": "True Odds",
				"description": "The ratio of the number of ways you can win compared to the number of ways you can lose. When you get paid true odds, there is no advantage for the casino."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 109,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Twelve",
				"description": "A roll of twelve on the dice."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 110,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Two-Way Bets",
				"description": "Two bets made on the same bet at the same time. One for you and one for the dealers."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 111,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Unit",
				"description": "Usually only used as a reference for place bets. A unit is the minimum amount of money you can put on a bet."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 112,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Up and Off",
				"description": "You placed a bet that is not working."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 113,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Uptown",
				"description": "The point numbers 8, 9, and 10."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 114,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Vigorish",
				"description": "Another term for commission."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 115,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Working",
				"description": "When a player wants bets that normally don't work, such as during the Comeout Roll, to be turned on so they are able to win or lose."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 116,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Working Stacks",
				"description": "The stacks of cheques in front of the base dealers. They use these stacks to make payments to players or to put losing cheques on."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 117,
			  "item": {
				"@type": "DefinedTerm",
				"name": "World/Whirl",
				"description": "A horn with an extra unit on the 7. I.e. A $5 world is $1 on each of the 2, 3, 11, 12, and 7. It is a one-roll bet and gets paid differently depending on what rolls."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 118,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Wrong Better",
				"description": "A bettor who bets against the shooter. They are hoping the shooter seven outs."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 119,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Yo",
				"description": "Another term for a roll of 11."
			  }
			},
			{
			  "@type": "ListItem",
			  "position": 120,
			  "item": {
				"@type": "DefinedTerm",
				"name": "Yo Bet",
				"description": "A one-roll bet on the Yo, the 11."
			  }
			}
		  ]
		}<\/script><!-- HEAD_svelte-zote7l_END -->`, ""} ${validate_component(MoreCrapsLayout, "MoreLayout").$$render($$result, { showContentMenuBox: false }, {}, {
    default: () => {
      return `<main aria-label="Main content" class="p-6"><h1 class="text-4xl font-bold mb-10 text-center" data-svelte-h="svelte-c58tav">Craps Glossary</h1> <div class="space-y-4">${each(sets, (set) => {
        return `<p><strong class="text-lg glossary-word">${escape(set.word)}</strong> - ${escape(set.definition)}</p>`;
      })}</div></main>`;
    }
  })}`;
});
export {
  Page as default
};
