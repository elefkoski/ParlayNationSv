// betLimits.ts

export interface BetLimits {
	min: number;
	max: number;
}

export interface BetLimitMapping {
	[betName: string]: {
		lowLimit: BetLimits; // for table limits 5,10,15
		highLimit: BetLimits; // for table limit 25
	};
}

// Mapping data – keys are bet type names normalized to lower-case.
export const betLimitData: BetLimitMapping = {
	'c-and-e-splt': { lowLimit: { min: 2, max: 1285 }, highLimit: { min: 5, max: 2140 } },
	'world-bet': { lowLimit: { min: 5, max: 1730 }, highLimit: { min: 25, max: 2880 } },
	'hard-four': { lowLimit: { min: 1, max: 1285 }, highLimit: { min: 5, max: 2142 } },
	'hard-six': { lowLimit: { min: 1, max: 1000 }, highLimit: { min: 5, max: 1666 } },
	'hard-eight': { lowLimit: { min: 1, max: 1000 }, highLimit: { min: 5, max: 1666 } },
	'hard-ten': { lowLimit: { min: 1, max: 1285 }, highLimit: { min: 5, max: 2142 } },
	'any-seven': { lowLimit: { min: 1, max: 2250 }, highLimit: { min: 5, max: 3750 } },
	'any-craps': { lowLimit: { min: 1, max: 1285 }, highLimit: { min: 5, max: 2142 } },
	'horn-bet': { lowLimit: { min: 4, max: 1332 }, highLimit: { min: 20, max: 2220 } },
	'horn-high-aces': { lowLimit: { min: 5, max: 785 }, highLimit: { min: 25, max: 2880 } },
	'horn-high-ace-deuce': { lowLimit: { min: 5, max: 1665 }, highLimit: { min: 25, max: 2880 } },
	'horn-high-yo': { lowLimit: { min: 5, max: 1665 }, highLimit: { min: 25, max: 2775 } },
	'horn-high-twelve': { lowLimit: { min: 5, max: 785 }, highLimit: { min: 25, max: 2775 } },
	'straight-aces': { lowLimit: { min: 1, max: 300 }, highLimit: { min: 5, max: 500 } },
	'straight-ace-deuce': { lowLimit: { min: 1, max: 600 }, highLimit: { min: 5, max: 1000 } },
	'straight-yo': { lowLimit: { min: 1, max: 600 }, highLimit: { min: 5, max: 1000 } },
	'straight-twelve': { lowLimit: { min: 1, max: 300 }, highLimit: { min: 5, max: 500 } }
};

/**
 * Returns the minimum bet for a given bet type and table limit.
 *
 * @param betType - The bet type (e.g. "Any Craps", "Hard 6", etc.)
 * @param tableLimit - The current table limit (one of 5, 10, 15, or 25)
 * @returns The minimum bet for that bet type at the given limit.
 */
export function getBetMin(betType: string, tableLimit: number): number {
	const key = betType.toLowerCase();
	const limits = betLimitData[key];
	if (!limits) {
		throw new Error(`No data for bet type: ${betType}`);
	}
	// Use lowLimit data if tableLimit is 5, 10, or 15; otherwise use highLimit.
	if ([5, 10, 15].includes(tableLimit)) {
		return limits.lowLimit.min;
	} else {
		return limits.highLimit.min;
	}
}

/**
 * Returns the maximum bet for a given bet type and table limit.
 *
 * @param betType - The bet type (e.g. "Any Craps", "Hard 6", etc.)
 * @param tableLimit - The current table limit (one of 5, 10, 15, or 25)
 * @returns The maximum bet for that bet type at the given limit.
 */
export function getBetMax(betType: string, tableLimit: number): number {
	const key = betType.toLowerCase();
	const limits = betLimitData[key];
	if (!limits) {
		throw new Error(`No data for bet type: ${betType}`);
	}
	if ([5, 10, 15].includes(tableLimit)) {
		return limits.lowLimit.max;
	} else {
		return limits.highLimit.max;
	}
}
