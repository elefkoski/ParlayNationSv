export interface Coordinate {
	id: string;
	x: number;
	y: number;
}

export const coordinates: Coordinate[] = [
	{ id: 'pass-line-bet', x: 40, y: 75.5 },
	{ id: 'pass-line-odds', x: 40, y: 81.5 },
	{ id: 'dont-pass-bet', x: 40, y: 69 },
	{ id: 'dont-pass-lay-odds', x: 35, y: 69 },
	{ id: 'field-bet', x: 40, y: 60.5 },
	{ id: 'come-bet', x: 40, y: 49 },
	{ id: 'come-bet-point-four', x: 24.5, y: 39 },
	{ id: 'come-bet-point-five', x: 31.5, y: 39 },
	{ id: 'come-bet-point-six', x: 38.5, y: 39 },
	{ id: 'come-bet-point-eight', x: 45.25, y: 39 },
	{ id: 'come-bet-point-nine', x: 52.25, y: 39 },
	{ id: 'come-bet-point-ten', x: 59.25, y: 39 },
	{ id: 'come-bet-odds-point-four', x: 24.5, y: 40.25 },
	{ id: 'come-bet-odds-point-five', x: 31.5, y: 40.25 },
	{ id: 'come-bet-odds-point-six', x: 38.5, y: 40.25 },
	{ id: 'come-bet-odds-point-eight', x: 45.25, y: 40.25 },
	{ id: 'come-bet-odds-point-nine', x: 52.25, y: 40.25 },
	{ id: 'come-bet-odds-point-ten', x: 59.25, y: 40.25 },
	{ id: 'place-four', x: 28.25, y: 42 },
	{ id: 'place-five', x: 35.25, y: 42 },
	{ id: 'place-six', x: 42.25, y: 42 },
	{ id: 'place-eight', x: 49, y: 42 },
	{ id: 'place-nine', x: 56, y: 42 },
	{ id: 'place-ten', x: 63, y: 42 },
	{ id: 'dont-come-bet', x: 21, y: 34 },
	{ id: 'dont-come-point-four', x: 26.5, y: 28 },
	{ id: 'dont-come-point-five', x: 33.5, y: 28 },
	{ id: 'dont-come-point-six', x: 40.25, y: 28 },
	{ id: 'dont-come-point-eight', x: 47, y: 28 },
	{ id: 'dont-come-point-nine', x: 54, y: 28 },
	{ id: 'dont-come-point-ten', x: 61, y: 28 },
	{ id: 'dont-come-lay-odds-point-four', x: 24.25, y: 26.25 },
	{ id: 'dont-come-lay-odds-point-five', x: 31.25, y: 26.25 },
	{ id: 'dont-come-lay-odds-point-six', x: 38.25, y: 26.25 },
	{ id: 'dont-come-lay-odds-point-eight', x: 45, y: 26.25 },
	{ id: 'dont-come-lay-odds-point-nine', x: 52, y: 26.25 },
	{ id: 'dont-come-lay-odds-point-ten', x: 59, y: 26.25 },
	{ id: 'overlay-four', x: 28.5, y: 26 },
	{ id: 'overlay-five', x: 35.5, y: 26 },
	{ id: 'overlay-six', x: 42.25, y: 26 },
	{ id: 'overlay-eight', x: 49, y: 26 },
	{ id: 'overlay-nine', x: 56, y: 26 },
	{ id: 'overlay-ten', x: 63, y: 26 },
	{ id: 'c-and-e-split', x: 70.25, y: 71.75 },
	{ id: 'world-bet', x: 69.5, y: 41 },
	{ id: 'hard-four', x: 76.75, y: 50 },
	{ id: 'hard-six', x: 76.75, y: 42 },
	{ id: 'hard-eight', x: 89.25, y: 42 },
	{ id: 'hard-ten', x: 89.25, y: 50 },
	{ id: 'any-seven', x: 82.75, y: 53.25 },
	{ id: 'any-craps', x: 82.75, y: 76.5 },
	{ id: 'horn-bet', x: 83.75, y: 70.75 },
	{ id: 'horn-high-aces', x: 87, y: 59.5 },
	{ id: 'horn-high-ace-deuce', x: 80.75, y: 59.5 },
	{ id: 'horn-high-yo', x: 74.25, y: 59.5 },
	{ id: 'horn-high-twelve', x: 93.25, y: 59.5 },
	{ id: 'straight-aces', x: 75.25, y: 66 },
	{ id: 'straight-ace-deuce', x: 75.25, y: 72.5 },
	{ id: 'straight-yo', x: 92.25, y: 72.5 },
	{ id: 'straight-twelve', x: 92.25, y: 66 }
	// { id: 'center-four', x: 26.25, y: 36.5 },
	// { id: 'center-five', x: 33.5, y: 36.5 },
	// { id: 'center-six', x: 40.25, y: 36.5 },
	// { id: 'center-eight', x: 47, y: 36.5 },
	// { id: 'center-nine', x: 54, y: 36.5 },
	// { id: 'center-ten', x: 61, y: 36.5 },
];

export const touchBoxes = [
	{
		id: 'touch-pass-line',
		dataX: 40.25,
		dataY: 75.5,
		dataWidth: 15,
		dataHeight: 4.5,
		toggleKey: 'passLinePopupKey'
	},
	{
		id: 'touch-pass-line-odds',
		dataX: 40.25,
		dataY: 81.5,
		dataWidth: 15,
		dataHeight: 4.5,
		toggleKey: 'passLineOddsPopupKey'
	},
	{
		id: 'touch-dont-pass',
		dataX: 40.25,
		dataY: 69,
		dataWidth: 15,
		dataHeight: 4.5,
		toggleKey: 'dontPassPopupKey'
	},
	{
		id: 'touch-the-field',
		dataX: 40.25,
		dataY: 60.5,
		dataWidth: 32,
		dataHeight: 9,
		toggleKey: 'theFieldPopupKey'
	},
	{
		id: 'touch-come-bet',
		dataX: 40.25,
		dataY: 49,
		dataWidth: 32,
		dataHeight: 9,
		toggleKey: 'comeBetPopupKey'
	},
	{
		id: 'touch-dont-come',
		dataX: 21,
		dataY: 34,
		dataWidth: 3.25,
		dataHeight: 12,
		toggleKey: 'dontComePopupKey'
	},
	{
		id: 'touch-inside-four',
		dataX: 26.25,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideFourPopupKey'
	},
	{
		id: 'touch-behind-four',
		dataX: 26.375,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindFourPopupKey'
	},
	{
		id: 'touch-inside-five',
		dataX: 33.5,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideFivePopupKey'
	},
	{
		id: 'touch-behind-five',
		dataX: 33.25,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindFivePopupKey'
	},
	{
		id: 'touch-inside-six',
		dataX: 40.25,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideSixPopupKey'
	},
	{
		id: 'touch-behind-six',
		dataX: 40.25,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindSixPopupKey'
	},
	{
		id: 'touch-inside-eight',
		dataX: 47,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideEightPopupKey'
	},
	{
		id: 'touch-behind-eight',
		dataX: 47,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindEightPopupKey'
	},
	{
		id: 'touch-inside-nine',
		dataX: 54,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideNinePopupKey'
	},
	{
		id: 'touch-behind-nine',
		dataX: 54,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindNinePopupKey'
	},
	{
		id: 'touch-inside-ten',
		dataX: 61,
		dataY: 36.5,
		dataWidth: 6,
		dataHeight: 9,
		toggleKey: 'insideTenPopupKey'
	},
	{
		id: 'touch-behind-ten',
		dataX: 61,
		dataY: 27,
		dataWidth: 6.25,
		dataHeight: 4.5,
		toggleKey: 'behindTenPopupKey'
	},
	{
		id: 'touch-c-and-e',
		dataX: 70,
		dataY: 61,
		dataWidth: 4.75,
		dataHeight: 35,
		toggleKey: 'cAndEPopupKey'
	},
	{
		id: 'touch-world',
		dataX: 70,
		dataY: 38.5,
		dataWidth: 4.75,
		dataHeight: 7,
		toggleKey: 'worldPopupKey'
	},
	{
		id: 'touch-hard-six',
		dataX: 79,
		dataY: 40,
		dataWidth: 9,
		dataHeight: 5,
		toggleKey: 'hardSixPopupKey'
	},
	{
		id: 'touch-hard-eight',
		dataX: 92,
		dataY: 40,
		dataWidth: 9,
		dataHeight: 5,
		toggleKey: 'hardEightPopupKey'
	},
	{
		id: 'touch-hard-four',
		dataX: 79,
		dataY: 48,
		dataWidth: 9,
		dataHeight: 5,
		toggleKey: 'hardFourPopupKey'
	},
	{
		id: 'touch-hard-ten',
		dataX: 92,
		dataY: 48,
		dataWidth: 9,
		dataHeight: 5,
		toggleKey: 'hardTenPopupKey'
	},
	{
		id: 'touch-any-seven',
		dataX: 85.5,
		dataY: 53.25,
		dataWidth: 10,
		dataHeight: 3,
		toggleKey: 'anySevenPopupKey'
	},
	{
		id: 'touch-any-craps',
		dataX: 85.5,
		dataY: 76.5,
		dataWidth: 10,
		dataHeight: 3,
		toggleKey: 'anyCrapsPopupKey'
	},
	{
		id: 'touch-horn-high-yo',
		dataX: 75.75,
		dataY: 58.5,
		dataWidth: 5,
		dataHeight: 5,
		toggleKey: 'hornHighYoPopupKey'
	},
	{
		id: 'touch-horn-high-ace-deuce',
		dataX: 82.25,
		dataY: 58.5,
		dataWidth: 5,
		dataHeight: 5,
		toggleKey: 'hornHighAceDeucePopupKey'
	},
	{
		id: 'touch-horn-bet',
		dataX: 85.375,
		dataY: 68.125,
		dataWidth: 8,
		dataHeight: 8.5,
		toggleKey: 'hornBetPopupKey'
	},
	{
		id: 'touch-horn-high-aces',
		dataX: 88.5,
		dataY: 58.5,
		dataWidth: 5,
		dataHeight: 5,
		toggleKey: 'hornHighAcesPopupKey'
	},
	{
		id: 'touch-horn-high-twelve',
		dataX: 94.75,
		dataY: 58.5,
		dataWidth: 5,
		dataHeight: 5,
		toggleKey: 'hornHighTwelvePopupKey'
	},
	{
		id: 'touch-straight-aces',
		dataX: 76.75,
		dataY: 65,
		dataWidth: 6,
		dataHeight: 5,
		toggleKey: 'straightAcesPopupKey'
	},
	{
		id: 'touch-straight-twelve',
		dataX: 93.75,
		dataY: 65,
		dataWidth: 6,
		dataHeight: 5,
		toggleKey: 'straightTwelvePopupKey'
	},
	{
		id: 'touch-straight-ace-deuce',
		dataX: 76.75,
		dataY: 71.5,
		dataWidth: 6,
		dataHeight: 5,
		toggleKey: 'straightAceDeucePopupKey'
	},
	{
		id: 'touch-straight-yo',
		dataX: 93.75,
		dataY: 71.5,
		dataWidth: 6,
		dataHeight: 5,
		toggleKey: 'straightYoPopupKey'
	}
];
