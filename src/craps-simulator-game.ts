import { writable } from 'svelte/store';

export const firstDieImage = writable('src/images/craps-simulator/dice/die_ne.png');
export const secondDieImage = writable('src/images/craps-simulator/dice/die_sw.png');

let comeoutRoll = true;
let rollHard = false;
let rollTotal = 0;
let pointMade = false;
let sevenOut = false;
const count = {
	totalPoints: 0
};

export function rollDice(): void {
	cycleDice();
	// Wait for the dice to finish rolling
	setTimeout(() => {
		sayStickCall();
	}, 2500);
}
// Helper function to cycle dice images
function cycleDice() {
	let interval1 = 100;
	let interval2 = 100;

	const rollInterval1 = setInterval(() => {
		const roll = createDiceObject();
		firstDieImage.set(roll.firstDieImage);
		if (interval1 < 200) {
			interval1 += 10;
		}
	}, interval1);

	const rollInterval2 = setInterval(() => {
		const roll = createDiceObject();
		secondDieImage.set(roll.secondDieImage);
		if (interval2 < 200) {
			interval2 += 10;
		}
	}, interval2);

	const stopRolling = () => {
		clearInterval(rollInterval1);
		clearInterval(rollInterval2);
	};

	setTimeout(stopRolling, 2000); // Stop rolling after 2 seconds
}
// Helper function to create dice object
function createDiceObject(): {
	firstDie: number;
	secondDie: number;
	total: number;
	cameHard: boolean;
	firstDieImage: string;
	secondDieImage: string;
} {
	const firstDie = Math.floor(Math.random() * 6) + 1;
	const secondDie = Math.floor(Math.random() * 6) + 1;
	const total = firstDie + secondDie;
	rollTotal = total;
	const cameHard = firstDie === secondDie;
	const firstDieImage = `src/images/craps-simulator/dice/die_${firstDie}.jpg`;
	const secondDieImage = `src/images/craps-simulator/dice/die_${secondDie}.jpg`;
	console.log(`Rolled dice: ${firstDie}, ${secondDie}, total: ${total}, cameHard: ${cameHard}`);
	return { firstDie, secondDie, total, cameHard, firstDieImage, secondDieImage };
}

// Helper function to determine stick call
function numberToWords(num: number): string {
	const words = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve'
	];
	return words[num];
}
// Stick Calls
function sayStickCall() {
	let callType;
	const stickCallElement = document.getElementById('stick-call');
	if (!stickCallElement) {
		console.error('Element with ID "stick-call" not found.');
		return;
	}

	if (comeoutRoll) {
		callType = 'comeoutRollStickCalls';
	} else if (pointMade) {
		callType = 'decisionRollStickCalls';
	} else if (sevenOut) {
		stickCallElement.innerHTML = stickCall.decisionRollStickCalls.seven;
		return;
	} else {
		callType = 'intermediateRollStickCalls';
	}

	let callKey;
	const rollTotalWord = numberToWords(rollTotal);
	if (rollHard) {
		callKey = `${rollTotalWord}Hard`;
	} else if ([4, 6, 8, 10].includes(rollTotal)) {
		callKey = `${rollTotalWord}Easy`;
	} else {
		callKey = rollTotalWord;
	}

	const call = stickCall[callType][callKey];
	stickCallElement.innerHTML = call;
}
const stickCall = {
	comeoutRollStickCalls: {
		two: "Two Craps two, Line em in, the Don'ts win, double the Field.",
		three: "Three Craps three, Line em in, the Don'ts win, single the Field.",
		fourEasy:
			'Four easy four, mark the four, the Point is four. Single the Field, it came easy, bet it back hard',
		fourHard:
			'Four hard four, mark the four, the Point is four. Single the Field, it came hard, bet it back hard.',
		five: 'Five, no Field five, mark the five, the Point is five. Place the nine, even Odds in the back.',
		sixEasy:
			'Six easy six, mark the six, the Point is six. No Field, it came easy, bet it back hard.',
		sixHard:
			'Six hard six, mark the six, the Point is six. No Field, it came hard, bet it back hard.',
		seven:
			"Seven winner seven, front Line winner! Take the Don'ts, pay the Line, save Odds, pay behind.",
		eightEasy:
			'Eight easy eight, mark the eight, the Point is eight. No Field, it came easy, bet it back hard.',
		eightHard:
			'Eight hard eight, mark the eight, the Point is eight. No Field, it came hard, bet it back hard.',
		nine: 'Nine, center Field nine, mark the nine, the Point is nine. Place the five, even Odds in the back.',
		tenEasy:
			'Ten, easy ten, mark the ten, the Point is ten. Single the Field, it came easy, bet it back hard.',
		tenHard:
			'Ten, hard ten, mark the ten, the Point is ten. Single the Field, it came hard, bet it back hard.',
		eleven: "Yo eleven Yo, front Line winner! Take the Don'ts, pay the Line, single the Field.",
		twelve: "Twelve Craps Twelve, Line em in, bar the Don'ts, double the Field."
	},
	intermediateRollStickCalls: {
		two: 'Two Craps two, take the Come, pay the Don’t Come, double the Field.',
		three: 'Three Craps three, take the Come, pay the Don’t Come, single the Field.',
		fourEasy: "Four easy four, down behind four, single the Field, Don'ts and Come’s to the four.",
		fourHard: "Four hard four, down behind four, single the Field, Don'ts and Come’s to the four.",
		five: "Five, no Field five, down behind five, Don'ts and Come’s to the five.",
		sixEasy: "Six easy six, down behind six, no Field, Don'ts and Come’s to the six.",
		sixHard: "Six hard six, down behind six, no Field, Don'ts and Come’s to the six.",
		eightEasy: "Eight, easy eight, down behind eight, no Field, Don'ts and Come’s to the eight.",
		eightHard: "Eight, hard eight, down behind eight, no Field, Don'ts and Come’s to the eight.",
		nine: "Nine, center Field nine, down behind nine, Don'ts and Come’s to the nine.",
		tenEasy: "Ten, easy ten, down behind ten, single the Field, Don'ts and Come’s to the ten.",
		tenHard: "Ten, hard ten, down behind ten, single the Field, Don'ts and Come’s to the ten.",
		eleven: 'Yo eleven Yo, take the Don’t Come, good in the Field, good in the Come.',
		twelve: 'Twelve Craps Twelve, take the Come, Bar the Don’t Come, double the Field.'
	},
	decisionRollStickCalls: {
		fourEasy:
			"Four winner four, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the four, it came easy.",
		fourHard:
			"Four winner four, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the four, it came hard.",
		five: "Five winner five, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the five.",
		sixEasy:
			"Six winner six, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the six, it came easy.",
		sixHard:
			"Six winner six, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come's to the six, it came hard.",
		seven: "Seven out seven. Line em in, the Don'ts win, last Come get some, pay behind.",
		eightEasy:
			"Eight winner eight, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the eight, it came easy.",
		eightHard:
			"Eight winner eight, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come's to the eight, it came hard.",
		nine: "Nine winner nine, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the nine.",
		tenEasy:
			"Ten winner ten, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come’s to the ten, it came easy.",
		tenHard:
			"Ten winner ten, front Line winner! Take the Don'ts, pay the Line, Don'ts and Come's to the ten, it came hard."
	}
};
const crStickCall = {
	cr2: 'Alright folks, we’re coming out again, same shooter. Center bets while the dice are in the middle. We’re goin for point number two.',
	cr3: 'Ok, we got a roll goin. We’re coming out a third time. Center bets, World’s, Horn’s, Yo’s, Hi Low’s. While the dice are in the middle please.',
	cr4: 'We found a shooter ladies and gentleman. We’re coming out and looking for Point number four. Throw in your center bets now while the dice are in the middle.',
	cr5: 'The shooter is hot and we’re coming out! Get em now while the dice are in the middle. World’s, Horn’s Yo’s, Hi’s and Low’s, C’s and E’s.',
	cr6: 'Hot shooter coming out again!. We’re looking for point number six. Get your bets while the dice are in the middle. Center bets?',
	cr7: 'The Shooter is on fire!. We’re coming out! World’s, Horn’s, Yo’, Hi Low’s, C & E’s, get em while the dice are in the middle.',
	cr8: 'The shooter has the magic hands tonight! They’ve made 7 Points and we’re goin for Point number 8! Center bets while the dice are in the middle!',
	cr9: 'This is gonna be the roll of the night ladies and gentleman! Pick up your winnings and let’s get those center bets in right now!',
	cr10: 'We can’t slow the shooter down! Get your prop bets in now!'
};
const sevenOutCall = {
	pts0: 'The game is over. You didn’t make any Points but that’s ok, it happens all the time.',
	pts1: 'The game is over. You made one Point. If you make at least one Point while you’re shooting the dice then you did your job for the table.',
	pts2: 'The game is over. You made two Points. Good job. No one is gonna be mad about that.',
	pts3: 'The game is over. You made three Points which is a really good. You should be happy with this roll.',
	pts4: 'The game is over. You made four Points. That was a great roll! You should be proud.',
	pts5: 'The game is over. You made five Points. That was a really great roll. The table should be really happy!',
	pts6: "The game is over. You made six Points! That roll was fantastic! You probably won't see anybody beat that roll while playing at the tables!",
	pts7: 'The game is over. You made seven Points! That’s tremendous! You should get a standing ovation for that!',
	pts8: 'The game is over. You made eight Points! That’s just incredible. You may never do that again in your dice career.',
	pts9: 'The game is over. You made nine Points! If someone hasn’t given you money for this role then something is wrong.',
	pts10:
		'The game is over. ' +
		count.totalPoints +
		' Points is insane! This is a story you could tell your family for years to come.'
};
const rulesOfTheGame = {
	theObject:
		'The object of Craps is to establish a Point (4, 5, 6, 8, 9, or 10) and then roll that Point again before a 7 to win.',
	crSetup: 'When the puck is OFF, this is the Comeout Roll and the time to bet the Pass Line.',
	crRule1: 'If you roll 7 or 11 during the Comeout Roll you automatically win on the Pass Line.',
	crRule2:
		'If you roll a 2, 3, or 12 during the Comeout Roll, you automatically lose on the Pass Line.',
	crRule3: 'Otherwise, you Establish a Point.',
	irSetup: 'When the puck is On, this is the Intermediate Roll.',
	irRule1: 'If you roll your Point before you roll a 7, you win on the Pass Line.',
	irRule2: 'If you roll a 7 before you roll your Point, you lose.'
};
const diceAreOutCalls = [
	'Dice are moving, watch your hands, and no fingers over the edge!',
	'Dice are goin! Hands up!',
	'Ok, dice are out, watch your hands, and no throwing bets in front of the shooter!',
	'Alright, the dice are moving. Get your hands up!',
	'Ok, dice are goin, watch the hands, use your words!',
	'Dice are out, hands high!',
	'Dice are movin, watch those hands, dice hurt!',
	'We gotta go, dice are out, watch your mittens!',
	'Dice are goin, pick up your hands!'
];
