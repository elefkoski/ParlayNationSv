// calculations.ts

export function validateGeneralInput(input: any, pId: string): boolean {
	if (input == null || isNaN(input) || input <= 0 || typeof input !== 'number' || input % 1 !== 0) {
		setMessage(pId, 'Choose a whole number above zero.', true);
		return false;
	}
	return true;
}

export function validateAmount(
	amt: number,
	pId: string,
	conditions: { condition: (amt: number) => boolean; message: string }[]
) {
	for (const { condition, message } of conditions) {
		if (condition(amt)) {
			setMessage(pId, message, true);
			return false;
		}
	}
	return true;
}

type Condition = {
	condition: (input: any) => boolean;
	message: string;
};

export function commonValidation(amt: number, pId: string, conditions: Condition[]): boolean {
	if (!validateGeneralInput(amt, pId)) return false;
	if (!validateAmount(amt, pId, conditions)) return false;
	return true;
}

export function setMessage(pId: string, message: string, isError: boolean = false) {
	const pElement = document.getElementById(pId);
	if (pElement) {
		pElement.innerText = message;
		pElement.style.color = isError ? 'red' : 'yellow';
		pElement.style.marginTop = '8px';
	}
}

export function numCommas(x: number) {
	var parts = x.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return parts.join('.');
}

export function calculatePassLine(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum bet on the Pass Line is $5.' },
		{ condition: (amt: number) => amt > 5000, message: 'Maximum bet on the Pass Line is $5,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'The Pass Line wins even money. A $' +
			numCommas(amt) +
			' Pass Line bet wins $' +
			numCommas(amt) +
			'.'
	);
}

export function calculateSixEightOdds(amt: number, pId: string) {
	const totalUnits = Math.floor(amt / 5);
	const correctBetPymnt = totalUnits * 6;
	const sixEightPymnt = correctBetPymnt + (amt % 5);

	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum Pass Line Odds on the 6 & 8 are $5.' },
		{
			condition: (amt: number) => amt > 25000,
			message: 'Maximum Pass Line Odds on the 6 & 8 are $25,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message:
				'Odds on the 6 & 8 should be made in multiples of 5. Anything above a multiple of 5 will get paid even money. This bet will pay $' +
				numCommas(sixEightPymnt) +
				'.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Odds on the 6 or 8 win $' + numCommas(sixEightPymnt) + '.'
	);
}

export function calculateFiveNineOdds(amt: number, pId: string) {
	const fiveNinePymnt = Math.floor((amt / 2) * 3);

	const conditions = [
		{ condition: (amt: number) => amt < 2, message: 'Minimum Pass Line Odds on the 5 & 9 are $2.' },
		{
			condition: (amt: number) => amt > 20000,
			message: 'Maximum Pass Line Odds on the 5 & 9 are $20,000.'
		},
		{
			condition: (amt: number) => amt % 2 != 0,
			message:
				'Odds on the 5 & 9 should be even. You lose $0.50 when you bet uneven Odds. This bet will pay $' +
				numCommas(fiveNinePymnt) +
				'.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Odds on the 5 or 9 win $' + numCommas(fiveNinePymnt) + '.'
	);
}

export function calculateFourTenOdds(amt: number, pId: string) {
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum Pass Line Odds on the 4 & 10 are $1.'
		},
		{
			condition: (amt: number) => amt > 15000,
			message: 'Maximum Pass Line Odds on the 4 & 10 are $15,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, '$' + numCommas(amt) + ' Odds on the 4 or 10 win $' + numCommas(amt * 2) + '.');
}

export function calculateMaxOdds(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum bet on the Pass Line is $5.' },
		{ condition: (amt: number) => amt > 5000, message: 'Maximum bet on the Pass Line is $5,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'The total payout for a $' +
			numCommas(amt) +
			' Pass Line with Max Odds is $' +
			numCommas(amt * 7) +
			'. The total payment for a Pass Line with Max Odds will always be 7x the Pass Line Bet.'
	);
}

export function calculatePlaceSixEight(amt: number, pId: string) {
	const totalUnits = Math.floor(amt / 6);
	const sixEightPymnt = totalUnits * 7;

	const conditions = [
		{ condition: (amt: number) => amt < 6, message: 'Minimum Place bet on the 6 & 8 is $6.' },
		{
			condition: (amt: number) => amt > 6000,
			message: 'Max Place bet on the 6 & 8 is $6,000.'
		},
		{
			condition: (amt: number) => amt % 6 != 0,
			message: 'You must make Place bets on the 6 & 8 in increments of $6.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' Place bet on the 6 or 8 wins $' + numCommas(sixEightPymnt) + '.'
	);
}

export function calculatePlaceFiveNine(amt: number, pId: string) {
	const totalUnits = Math.floor(amt / 5);
	const fiveNinePymnt = totalUnits * 7;

	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum Place bet on the 5 & 9 is $5.' },
		{
			condition: (amt: number) => amt > 5000,
			message: 'Max Place bet on the 5 & 9 is $5,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'You must make Place bets on the 5 & 9 in increments of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' Place bet on the 5 or 9 wins $' + numCommas(fiveNinePymnt) + '.'
	);
}

export function calculatePlaceFourTen(amt: number, pId: string) {
	const totalUnits = Math.floor(amt / 5);
	const fourTenPymnt = totalUnits * 9;

	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum Place bet on the 4 & 10 is $5.' },
		{
			condition: (amt: number) => amt > 5000,
			message: 'Max Place bet on the 4 & 10 is $5,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'You must make Place bets on the 4 & 10 in increments of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' Place bet on the 4 or 10 wins $' + numCommas(fourTenPymnt) + '.'
	);
}

export function calculateBuyFourTen(amt: number, pId: string) {
	const fourTenPymnt = amt * 2;
	const vig = Math.floor(amt / 20);
	const totalBuyCost = amt + vig;

	const conditions = [
		{ condition: (amt: number) => amt < 20, message: 'Table minimum to Buy the 4 or 10 is $20.' },
		{ condition: (amt: number) => amt > 5000, message: 'Max Buy on the 4 or 10 is $5,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Buy on the 4 or 10 costs $' +
			numCommas(totalBuyCost) +
			'. It pays $' +
			numCommas(fourTenPymnt) +
			' and requres another $' +
			vig +
			' to Buy it again after it wins.'
	);
}

export function calculateHardSixEight(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the Hard 6 & 8 is $1.' },
		{ condition: (amt: number) => amt > 4000, message: 'Max bet on the Hard 6 & 8 is $4,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, 'A $' + numCommas(amt) + ' Hard 6 or 8 wins $' + numCommas(amt * 9) + '.');
}

export function calculateHardFourTen(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the Hard 4 & 10 is $1.' },
		{ condition: (amt: number) => amt > 5000, message: 'Max bet on the Hard 4 & 10 is $5,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, 'A $' + numCommas(amt) + ' Hard 4 or 10 wins $' + numCommas(amt * 7) + '.');
}

export function calculateAceDeuceYo(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the low side is $1.' },
		{ condition: (amt: number) => amt > 2000, message: 'Max bet on the low side is $2,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' bet on the Ace Deuce or Yo wins $' + numCommas(amt * 15) + '.'
	);
}

export function calculateAcesTwelve(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the high side is $1.' },
		{ condition: (amt: number) => amt > 1000, message: 'Max bet on the high side is $1,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' bet on the Aces or Twelve wins $' + numCommas(amt * 30) + '.'
	);
}

export function calculateCAndESplit(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{ condition: (amt: number) => amt < 2, message: 'Minimum bet on the C & E split is $2.' },
		{ condition: (amt: number) => amt > 4000, message: 'Max bet on the C & E split is $4,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' bet on the C & E split wins $' +
			numCommas(amt * 7) +
			' if the Yo rolls.';
	} else if (roll == 2 || roll == 3 || roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' bet on the C & E split wins $' +
			numCommas(amt * 3) +
			' if any of the Craps roll (2, 3, 12).';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateCAndE(amt: any, amtTwo: any, roll: number, pId: string) {
	let message: string;

	// Case 1: Both amounts are empty or don't pass general input validation
	if (
		(!validateGeneralInput(amt, pId) && !validateGeneralInput(amtTwo, pId)) ||
		(amt == null && amtTwo == null)
	) {
		setMessage(pId, 'Please enter a bet.', true);
		return;
	}

	// Case 2: Bet on the any crap (amt) with amtTwo being null
	if (amt != null && validateGeneralInput(amt, pId) && amtTwo == null) {
		if (amt < 1) {
			message = 'The minimum bet on the Any Crap $1.';
			setMessage(pId, message, true);
			return;
		} else if (amt > 4000) {
			message = 'The maximum bet on the Any Crap is $4,000.';
			setMessage(pId, message, true);
			return;
		} else if (roll === 2 || roll === 3 || roll === 12)
			message = `Your $${amt} Any Crap (C) pays $${amt * 7} when any of the Craps (2, 3, 12) roll.`;
		else if (roll === 11) message = `Your $${amt} Any Crap lost.`;
		else {
			message = 'Please pick what rolled.';
			setMessage(pId, message, true); // Error message in red
			return;
		}
		setMessage(pId, message);
		return;
	}

	// Case 3: Bet on the Yo (amtTwo) with amt being null
	if (amtTwo != null && validateGeneralInput(amtTwo, pId) && amt == null) {
		if (amtTwo < 1) {
			message = 'The minimum bet on the Yo is $1.';
			setMessage(pId, message, true);
			return;
		} else if (amtTwo > 2000) {
			message = 'The maximum bet on the Yo is $2,000.';
			setMessage(pId, message, true);
			return;
		} else if (roll === 11) message = `Your $${amtTwo} Yo paid $${amtTwo * 15}.`;
		else if (roll === 2 || roll === 3 || roll === 12) message = `Your $${amtTwo} Yo lost.`;
		else {
			message = 'Please pick what rolled.';
			setMessage(pId, message, true); // Error message in red
			return;
		}
		setMessage(pId, message);
		return;
	}

	// Case 4: Both bets are present and valid
	if (validateGeneralInput(amt, pId) && validateGeneralInput(amtTwo, pId)) {
		let cAndETtlPymnt = 0;
		let losingDiff = 0;
		const elevenPymnt = amtTwo * 15;
		const crapPymnt = amt * 7;

		if (amt < 1) {
			message = 'The minimum bet on the Any Crap $1.';
			setMessage(pId, message, true);
			return;
		} else if (amt > 5000) {
			message = 'The maximum bet on the Any Crap is $5,000.';
			setMessage(pId, message, true);
			return;
		} else if (amtTwo < 1) {
			message = 'The minimum bet on the Yo is $1.';
			setMessage(pId, message, true);
			return;
		} else if (amtTwo > 2000) {
			message = 'The maximum bet on the Yo is $2,000.';
			setMessage(pId, message, true);
			return;
		} else if (roll == 11) {
			cAndETtlPymnt = elevenPymnt - amt;
			losingDiff = Math.abs(cAndETtlPymnt);
			if (cAndETtlPymnt < 0)
				message = `Your $${amtTwo} Yo won $${elevenPymnt}, which is not enough to cover your $${amt} Crap that lost. You need to throw in $${losingDiff} to keep this bet up to win again, or take the Crap down and collect your winnings.`;
			else if (cAndETtlPymnt == 0) message = 'Your bet is a push. It is up to win again.';
			else message = `A $${amt}C - $${amtTwo}E wins $${cAndETtlPymnt} when the Yo rolls.`;
		} else {
			cAndETtlPymnt = crapPymnt - amtTwo;
			losingDiff = Math.abs(cAndETtlPymnt);
			if (cAndETtlPymnt < 0)
				message = `Your $${amt} Crap won $${crapPymnt}, which is not enough to cover your $${amtTwo} Yo that lost. You need to throw in $${losingDiff} to keep this bet up to win again, or take the Yo down and collect your winnings.`;
			else if (cAndETtlPymnt == 0) message = 'Your bet is a push. It is up to win again.';
			else
				message = `A $${amt}C - $${amtTwo}E wins $${cAndETtlPymnt} when any of the Craps (2, 3, 12) roll.`;
		}
		setMessage(pId, message);
	}
}

export function calculateAnySeven(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the Any Seven is $1.' },
		{ condition: (amt: number) => amt > 7500, message: 'Maximum bet on the Any Seven is $7,500.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, 'A $' + numCommas(amt) + ' Any Seven wins $' + numCommas(amt * 4) + '.');
}

export function calculateAnyCraps(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the Any Craps is $1.' },
		{ condition: (amt: number) => amt > 5000, message: 'Maximum bet on the Any Craps is $5,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, 'A $' + numCommas(amt) + ' Any Craps wins $' + numCommas(amt * 7) + '.');
}

export function calculateSingleField(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'You must bet the table minimim of $5.' },
		{ condition: (amt: number) => amt > 15000, message: 'Maximum bet on The Field is $15,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Field bet wins $' +
			numCommas(amt) +
			' (even money) when the 3, 4, 9, 10, or 11 rolls.'
	);
}

export function calculateDoubleField(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'You must bet the table minimim of $5.' },
		{ condition: (amt: number) => amt > 15000, message: 'Maximum bet on The Field is $15,000.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Field bet wins $' +
			numCommas(amt * 2) +
			' (double) when the 2 or 12 rolls.'
	);
}

export function calculateHighLow(amt: number, pId: string) {
	const eachHighLowPymnt = amt * 30 - amt;
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on the High - Low is $1 each.' },
		{ condition: (amt: number) => amt > 1000, message: 'Max bet on the High - Low is $1,000 each.' }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' +
			numCommas(amt) +
			' each High - Low costs a total of $' +
			numCommas(amt * 2) +
			' and pays $' +
			numCommas(eachHighLowPymnt) +
			' when either one rolls.'
	);
}

export function calculateElevenTwelve(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum bet on the Eleven - Twelve is $1 each.'
		},
		{
			condition: (amt: number) => amt > 1000,
			message: 'Max bet on the Eleven - Twelve is $1,000 each.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' each Eleven - Twelve costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' each Eleven - Twelve costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 30 - amt) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateAcesAceDeuce(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum bet on the Aces - Ace Deuce is $1 each.'
		},
		{
			condition: (amt: number) => amt > 1000,
			message: 'Max bet on the Aces - Ace Deuce is $1,000 each.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' each Aces - Ace Deuce costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 30 - amt) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' each Aces - Ace Deuce costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Ace Deuce rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateSevenEleven(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum bet on the Seven - Eleven is $1 each.'
		},
		{
			condition: (amt: number) => amt > 2000,
			message: 'Max bet on the Seven - Eleven is $2,000 each.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 7) {
		message =
			'A $' +
			numCommas(amt) +
			' each Seven - Eleven costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 4 - amt) +
			' if the Seven rolls.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' each Seven - Eleven costs a total of $' +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Eleven rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHighLowYo(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum each High - Low - Yo is $1 each.'
		},
		{
			condition: (amt: number) => amt > 1000,
			message: 'Max each High - Low - Yo is $1,000 each.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' each High - Low - Yo costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Aces roll.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' each High - Low - Yo costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' each High - Low - Yo costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateThreeWay(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: 'Minimum each Three Way Crap is $1 each.'
		},
		{
			condition: (amt: number) => amt > 1000,
			message: 'Max each Three Way Crap is $1,000 each.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' each Three Way Crap costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' each Three Way Crap costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Ace Deuce rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' each Three Way Crap costs a total of $' +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHorn(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 4,
			message: 'The minimum on the Horn is $4.'
		},
		{
			condition: (amt: number) => amt > 4000,
			message: 'Max bet on the Horn is $4000.'
		},
		{
			condition: (amt: number) => amt % 4 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $4.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' + numCommas(amt) + ' Horn wins $' + numCommas((amt / 4) * 27) + ' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn wins $' +
			numCommas((amt / 4) * 12) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' + numCommas(amt) + ' Horn wins $' + numCommas((amt / 4) * 12) + ' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' + numCommas(amt) + ' Horn wins $' + numCommas((amt / 4) * 27) + ' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHornHighAces(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 5,
			message: 'The minimum for the Horn High Aces is $5.'
		},
		{
			condition: (amt: number) => amt > 2500,
			message: 'Max bet on the Horn High Aces is $2,500.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Aces wins $' +
			numCommas((amt / 5) * 57) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Aces wins $' +
			numCommas((amt / 5) * 11) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Aces wins $' +
			numCommas((amt / 5) * 11) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Aces wins $' +
			numCommas((amt / 5) * 26) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHornHighAceDeuce(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 5,
			message: 'The minimum for the Horn High Ace Deuce is $5.'
		},
		{
			condition: (amt: number) => amt > 5000,
			message: 'Max bet on the Horn High Ace Deuce is $5,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Ace Deuce wins $' +
			numCommas((amt / 5) * 26) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Ace Deuce wins $' +
			numCommas((amt / 5) * 27) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Ace Deuce wins $' +
			numCommas((amt / 5) * 11) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Ace Deuce wins $' +
			numCommas((amt / 5) * 26) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHornHighYo(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 5,
			message: 'The minimum for the Horn High Yo is $5.'
		},
		{
			condition: (amt: number) => amt > 5000,
			message: 'Max bet on the Horn High Yo is $5,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Yo wins $' +
			numCommas((amt / 5) * 26) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Yo wins $' +
			numCommas((amt / 5) * 11) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Yo wins $' +
			numCommas((amt / 5) * 27) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Yo wins $' +
			numCommas((amt / 5) * 26) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHornHighTwelve(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 5,
			message: 'The minimum for the Horn High Twelve is $5.'
		},
		{
			condition: (amt: number) => amt > 2500,
			message: 'Max bet on the Horn High Twelve is $2,500.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Twelve wins $' +
			numCommas((amt / 5) * 26) +
			' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Twelve wins $' +
			numCommas((amt / 5) * 11) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Twelve wins $' +
			numCommas((amt / 5) * 11) +
			' if the Yo rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' Horn High Twelve wins $' +
			numCommas((amt / 5) * 57) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateWorld(amt: number, roll: number, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 4,
			message: 'The minimum on the World is $5.'
		},
		{
			condition: (amt: number) => amt > 4000,
			message: 'Max bet on the World is $5,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message: 'This is an improper bet. Please make a bet in a multiple of $5.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == 2) {
		message =
			'A $' + numCommas(amt) + ' World wins $' + numCommas((amt / 5) * 26) + ' if the Aces roll.';
	} else if (roll == 3) {
		message =
			'A $' +
			numCommas(amt) +
			' World wins $' +
			numCommas((amt / 5) * 11) +
			' if the Ace Deuce rolls.';
	} else if (roll == 11) {
		message =
			'A $' + numCommas(amt) + ' World wins $' + numCommas((amt / 5) * 11) + ' if the Yo rolls.';
	} else if (roll == 7) {
		message = 'A $' + numCommas(amt) + ' World is a push when the Seven rolls.';
	} else if (roll == 12) {
		message =
			'A $' +
			numCommas(amt) +
			' World wins $' +
			numCommas((amt / 5) * 26) +
			' if the Twelve rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopLowSide(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Table minimum for a non-pair Hop bet is $1.' },
		{
			condition: (amt: number) => amt > 2000,
			message: 'Maximum bet for a non-pair Hop bet is $2,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + " on any Hop bet that isn't a pair wins $" + numCommas(amt * 15) + '.'
	);
}

export function calculateHopHighSide(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Table minimum for a Hopping Hardway is $1.' },
		{
			condition: (amt: number) => amt > 2000,
			message: 'Maximum bet for a Hopping Hardway is $1,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' + numCommas(amt) + ' on any Hopping Hardway wins $' + numCommas(amt * 30) + '.'
	);
}

export function calculateHopFours(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 4's is $1 each."
		},
		{
			condition: (amt: number) => amt > 1000,
			message: "Max bet on the Hop 4's is $1,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '3-1') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 4's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Easy 4 rolls.';
	} else if (roll == '2-2') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 4's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 30 - amt) +
			' if the Hard 4 rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopFives(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 5's is $1 each."
		},
		{
			condition: (amt: number) => amt > 2000,
			message: "Max bet on the Hop 5's is $2,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '3-2') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 5's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Thirty-Two rolls.';
	} else if (roll == '4-1') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 5's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Forty-One rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopNines(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 9's is $1 each."
		},
		{
			condition: (amt: number) => amt > 2000,
			message: "Max bet on the Hop 9's is $2,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '5-4') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 9's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Fifty-Four rolls.';
	} else if (roll == '6-3') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 9's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Sixty-Three rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopTens(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 10's is $1 each."
		},
		{
			condition: (amt: number) => amt > 1000,
			message: "Max bet on the Hop 10's is $1,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '6-4') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 10's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 15 - amt) +
			' if the Easy 10 rolls.';
	} else if (roll == '5-5') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 10's costs a total of $" +
			numCommas(amt * 2) +
			', and wins $' +
			numCommas(amt * 30 - amt) +
			' if the Hard 10 rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopSixes(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 6's is $1 each."
		},
		{
			condition: (amt: number) => amt > 1000,
			message: "Max bet on the Hop 6's is $1,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '5-1') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 6's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Fifty-One rolls.';
	} else if (roll == '4-2') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 6's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Forty-Two rolls.';
	} else if (roll == '3-3') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 6's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Hard 6 rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopSevens(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 7's is $1 each."
		},
		{
			condition: (amt: number) => amt > 2000,
			message: "Max bet on the Hop 7's is $2,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '6-1') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 7's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Sixty-One rolls.';
	} else if (roll == '5-2') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 7's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Fifty-Two rolls.';
	} else if (roll == '4-3') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 7's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Forty-Three rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopEights(amt: number, roll: string, pId: string) {
	let message: string;
	const conditions = [
		{
			condition: (amt: number) => amt < 1,
			message: "Minimum bet on the Hop 8's is $1 each."
		},
		{
			condition: (amt: number) => amt > 1000,
			message: "Max bet on the Hop 8's is $1,000 each."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	if (roll == '6-2') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 8's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Sixty-Two rolls.';
	} else if (roll == '5-3') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 8's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 15 - amt * 2) +
			' if the Fifty-Three rolls.';
	} else if (roll == '4-4') {
		message =
			'A $' +
			numCommas(amt) +
			" each Hop 8's costs a total of $" +
			numCommas(amt * 3) +
			', and wins $' +
			numCommas(amt * 30 - amt * 2) +
			' if the Hard 8 rolls.';
	} else {
		message = 'Please pick what rolled.';
		setMessage(pId, message, true);
		return;
	}

	setMessage(pId, message);
}

export function calculateHopHardways(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum bet on a Hopping Hardway is $1.' },
		{
			condition: (amt: number) => amt > 1000,
			message: 'Maximum bet on a Hopping Hardway is $1,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' each Hopping Hardway costs a total of $' +
			numCommas(amt * 4) +
			', and wins $' +
			numCommas(amt * 30 - amt * 3) +
			' if any of them roll.'
	);
}

export function calculateComeBet(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum bet on a Come bet is $5.' },
		{
			condition: (amt: number) => amt > 5000,
			message: 'Maximum bet on a Come bet is $5,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Come bet wins $' +
			numCommas(amt) +
			'. Come bets always win even money.'
	);
}

export function calculateSixEightComeOdds(amt: number, pId: string) {
	const totalUnits = Math.floor(amt / 5);
	const correctBetPymnt = totalUnits * 6;
	const sixEightPymnt = correctBetPymnt + (amt % 5);

	const conditions = [
		{ condition: (amt: number) => amt < 5, message: 'Minimum Come Bet Odds on the 6 & 8 are $5.' },
		{
			condition: (amt: number) => amt > 25000,
			message: 'Maximum Come Bet Odds on the 6 & 8 are $25,000.'
		},
		{
			condition: (amt: number) => amt % 5 != 0,
			message:
				'Odds on the 6 & 8 should be made in multiples of 5. Anything above a multiple of 5 will get paid even money. This bet will pay $' +
				numCommas(sixEightPymnt) +
				'.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Odds on the 6 or 8 win $' + numCommas(sixEightPymnt) + '.'
	);
}

export function calculateFiveNineComeOdds(amt: number, pId: string) {
	const fiveNinePymnt = Math.floor((amt / 2) * 3);

	const conditions = [
		{ condition: (amt: number) => amt < 2, message: 'Minimum Come Bet Odds on the 5 & 9 are $2.' },
		{
			condition: (amt: number) => amt > 20000,
			message: 'Maximum Come Bet Odds on the 5 & 9 are $20,000.'
		},
		{
			condition: (amt: number) => amt % 2 != 0,
			message:
				'Odds on the 5 & 9 should be even. You lose $0.50 when you bet uneven Odds. This bet will pay $' +
				numCommas(fiveNinePymnt) +
				'.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Odds on the 5 or 9 win $' + numCommas(fiveNinePymnt) + '.'
	);
}

export function calculateFourTenComeOdds(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 1, message: 'Minimum Come Bet Odds on the 4 & 10 are 1.' },
		{
			condition: (amt: number) => amt > 15000,
			message: 'Maximum Come Bet Odds on the 4 & 10 are $15,000.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(pId, '$' + numCommas(amt) + ' Odds on the 4 or 10 win $' + numCommas(amt * 2) + '.');
}

export function calculateDontPass(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: "Minimum bet on the Don't Pass is $5." },
		{ condition: (amt: number) => amt > 5000, message: "Maximum bet on the Don't Pass is $5,000." }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		"The Don't Pass wins even money. A $" +
			numCommas(amt) +
			" Don't Pass bet wins $" +
			numCommas(amt) +
			'.'
	);
}

export function calculateSixEightLayOdds(amt: number, pId: string) {
	const sixEightLayOddsPymnt = (amt / 6) * 5;

	const conditions = [
		{
			condition: (amt: number) => amt < 6,
			message: 'Minimum Lay Odds on the 6 & 8 are $6.'
		},
		{
			condition: (amt: number) => amt > 36000,
			message: 'Maximum Lay Odds on the 6 & 8 are $36,000.'
		},
		{
			condition: (amt: number) => amt % 6 != 0,
			message: 'Lay Odds on the 6 & 8 need to be made in multiples of $6.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Lay Odds on the 6 or 8 win $' + numCommas(sixEightLayOddsPymnt) + '.'
	);
}

export function calculateFiveNineLayOdds(amt: number, pId: string) {
	const fiveNineLayOddsPymnt = (amt / 3) * 2;

	const conditions = [
		{ condition: (amt: number) => amt < 3, message: 'Minimum Lay Odds on the 5 & 9 are $3.' },
		{
			condition: (amt: number) => amt > 45000,
			message: 'Maximum Lay Odds on the 5 & 9 are $45,000.'
		},
		{
			condition: (amt: number) => amt % 3 != 0,
			message: 'Lay Odds on the 5 & 9 need to be made in multiples of $3.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Lay Odds on the 5 or 9 win $' + numCommas(fiveNineLayOddsPymnt) + '.'
	);
}

export function calculateFourTenLayOdds(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 2, message: 'Minimum Lay Odds on the 4 & 10 are $2.' },
		{
			condition: (amt: number) => amt > 60000,
			message: 'Maximum Lay Odds on the 4 & 10 are $60,000.'
		},
		{
			condition: (amt: number) => amt % 2 != 0,
			message: 'Lay Odds on the 4 & 10 need to be even.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + ' Lay Odds on the 4 or 10 win $' + numCommas(amt / 2) + '.'
	);
}

export function calculateMaxLay(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: "Minimum bet on the Don't Pass is $5." },
		{ condition: (amt: number) => amt > 5000, message: "Maximum bet on the Don't Pass is $5,000." }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		"Max Lay Odds for a Don't Pass bet with $" + numCommas(amt) + ' is $' + numCommas(amt * 6) + '.'
	);
}

export function calculateDontCome(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: "Minimum bet on the Don't Come is $5." },
		{ condition: (amt: number) => amt > 5000, message: "Maximum bet on the Don't Come is $5,000." }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		"The Don't Come wins even money. A $" +
			numCommas(amt) +
			" Don't Come bet wins $" +
			numCommas(amt) +
			'.'
	);
}

export function calculateSixEightDcLayOdds(amt: number, pId: string) {
	const sixEightLayOddsPymnt = (amt / 6) * 5;

	const conditions = [
		{
			condition: (amt: number) => amt < 6,
			message: "Minimum Don't Come Lay Odds on the 6 & 8 are $6."
		},
		{
			condition: (amt: number) => amt > 36000,
			message: "Maximum Don't Come Lay Odds on the 6 & 8 are $36,000."
		},
		{
			condition: (amt: number) => amt % 6 != 0,
			message: "Don't Come Lay Odds on the 6 & 8 need to be made in multiples of $6."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' +
			numCommas(amt) +
			" Don't Come Lay Odds on the 6 or 8 win $" +
			numCommas(sixEightLayOddsPymnt) +
			'.'
	);
}

export function calculateFiveNineDcLayOdds(amt: number, pId: string) {
	const fiveNineLayOddsPymnt = (amt / 3) * 2;

	const conditions = [
		{
			condition: (amt: number) => amt < 3,
			message: "Minimum Don't Come Lay Odds on the 5 & 9 are $3."
		},
		{
			condition: (amt: number) => amt > 45000,
			message: "Maximum Don't Come Lay Odds on the 5 & 9 are $45,000."
		},
		{
			condition: (amt: number) => amt % 3 != 0,
			message: "Don't Come Lay Odds on the 5 & 9 need to be made in multiples of $3."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' +
			numCommas(amt) +
			" Don't Come Lay Odds on the 5 or 9 win $" +
			numCommas(fiveNineLayOddsPymnt) +
			'.'
	);
}

export function calculateFourTenDcLayOdds(amt: number, pId: string) {
	const conditions = [
		{
			condition: (amt: number) => amt < 2,
			message: "Minimum Don't Come Lay Odds on the 4 & 10 are $2."
		},
		{
			condition: (amt: number) => amt > 60000,
			message: "Maximum Don't Come Lay Odds on the 4 & 10 are $60,000."
		},
		{
			condition: (amt: number) => amt % 2 != 0,
			message: "Don't Come Lay Odds on the 4 & 10 need to be even."
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'$' + numCommas(amt) + " Don't Come Lay Odds on the 4 or 10 win $" + numCommas(amt / 2) + '.'
	);
}

export function calculateMaxDcLay(amt: number, pId: string) {
	const conditions = [
		{ condition: (amt: number) => amt < 5, message: "Minimum bet on the Don't Come is $5." },
		{ condition: (amt: number) => amt > 5000, message: "Maximum bet on the Don't Come is $5,000." }
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		"Max Lay Odds for a Don't Come bet with $" + numCommas(amt) + ' is $' + numCommas(amt * 6) + '.'
	);
}

export function calculateSixEightOverlay(amt: number, pId: string) {
	const totalUnits = amt / 6;
	const overlay_six_eight_pymnt = totalUnits * 5;
	const vig = Math.floor(amt / 24);
	const totalOverlayCost = amt + vig;

	const conditions = [
		{
			condition: (amt: number) => amt < 24,
			message: 'Minimum Overlay on the 6 & 8 is $24 to win $20.'
		},
		{
			condition: (amt: number) => amt > 36000,
			message: 'Max Overlay on the 6 & 8 is $36,000 to win $30,000.'
		},
		{
			condition: (amt: number) => amt % 6 != 0,
			message: 'Overlays on the 6 & 8 are made in multiples of $6.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Overlay against the 6 or 8 costs $' +
			numCommas(totalOverlayCost) +
			'. It pays $' +
			numCommas(overlay_six_eight_pymnt) +
			' and requres another $' +
			vig +
			' if you would like the bet to stay up to win again.'
	);
}

export function calculateFiveNineOverlay(amt: number, pId: string) {
	const totalUnits = amt / 3;
	const overlay_five_nine_pymnt = totalUnits * 2;
	const vig = Math.floor(amt / 30);
	const totalOverlayCost = amt + vig;

	const conditions = [
		{
			condition: (amt: number) => amt < 30,
			message: 'Minimum Overlay on the 5 & 9 is $30 to win $20.'
		},
		{
			condition: (amt: number) => amt > 45000,
			message: 'Max Overlay on the 5 & 9 is $45,000 to win $30,000.'
		},
		{
			condition: (amt: number) => amt % 3 != 0,
			message: 'Overlays on the 5 & 9 are made in multiples of $3.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Overlay against the 5 or 9 costs $' +
			numCommas(totalOverlayCost) +
			'. It pays $' +
			numCommas(overlay_five_nine_pymnt) +
			' and requres another $' +
			vig +
			' if you would like the bet to stay up to win again.'
	);
}

export function calculateFourTenOverlay(amt: number, pId: string) {
	const overlay_four_ten_pymnt = amt / 2;
	const vig = Math.floor(amt / 40);
	const totalOverlayCost = amt + vig;
	const conditions = [
		{
			condition: (amt: number) => amt < 40,
			message: 'Minimum Overlay on the 4 & 10 is $40 to win $20.'
		},
		{
			condition: (amt: number) => amt > 60000,
			message: 'Max Overlay on the 4 & 10 is $60,000 to win $30,000'
		},
		{
			condition: (amt: number) => amt % 2 != 0,
			message: 'Overlays on the 4 & 10 must be even.'
		}
	];

	if (!commonValidation(amt, pId, conditions)) return;

	setMessage(
		pId,
		'A $' +
			numCommas(amt) +
			' Overlay against the 4 & 10 costs $' +
			numCommas(totalOverlayCost) +
			'. It pays $' +
			numCommas(overlay_four_ten_pymnt) +
			' and requres another $' +
			vig +
			' if you would like the bet to stay up to win again.'
	);
}
