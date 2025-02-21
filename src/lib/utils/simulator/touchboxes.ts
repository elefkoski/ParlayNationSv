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
	{ id: 'the-field', x: 40, y: 60.5 },
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
	{ id: 'dont-come-lay-odds-point-four', x: 24.25, y: 26 },
	{ id: 'dont-come-lay-odds-point-five', x: 31.25, y: 26 },
	{ id: 'dont-come-lay-odds-point-six', x: 38.25, y: 26 },
	{ id: 'dont-come-lay-odds-point-eight', x: 45, y: 26 },
	{ id: 'dont-come-lay-odds-point-nine', x: 52, y: 26 },
	{ id: 'dont-come-lay-odds-point-ten', x: 59, y: 26 },
	{ id: 'c-and-e', x: 70, y: 61 },
	{ id: 'world', x: 70, y: 38.5 },
	{ id: 'hard-six', x: 79, y: 40 },
	{ id: 'hard-eight', x: 92, y: 40 },
	{ id: 'hard-four', x: 79, y: 48 },
	{ id: 'hard-ten', x: 92, y: 48 },
	{ id: 'any-seven', x: 85.5, y: 53.25 },
	{ id: 'any-craps', x: 85.5, y: 76.5 },
	{ id: 'horn-high-yo', x: 75.75, y: 58.5 },
	{ id: 'horn-high-ace-deuce', x: 82.25, y: 58.5 },
	{ id: 'horn-bet', x: 85.25, y: 68 },
	{ id: 'horn-high-aces', x: 88.5, y: 58.5 },
	{ id: 'horn-high-twelve', x: 94.75, y: 58.5 },
	{ id: 'straight-aces', x: 76.75, y: 65 },
	{ id: 'straight-twelve', x: 93.75, y: 65 },
	{ id: 'straight-ace-deuce', x: 76.75, y: 71.5 },
	{ id: 'straight-yo', x: 93.75, y: 71.5 }
	// { id: 'center-four', x: 26.25, y: 36.5 },
	// { id: 'center-five', x: 33.5, y: 36.5 },
	// { id: 'center-six', x: 40.25, y: 36.5 },
	// { id: 'center-eight', x: 47, y: 36.5 },
	// { id: 'center-nine', x: 54, y: 36.5 },
	// { id: 'center-ten', x: 61, y: 36.5 },
	// { id: 'center-behind-four', x: 26.375, y: 27 },
	// { id: 'center-behind-five', x: 33.25, y: 27 },
	// { id: 'center-behind-six', x: 40.25, y: 27 },
	// { id: 'center-behind-eight', x: 47, y: 27 },
	// { id: 'center-behind-nine', x: 54, y: 27 },
	// { id: 'center-behind-ten', x: 61, y: 27 },
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
		dataX: 85.25,
		dataY: 68,
		dataWidth: 7.5,
		dataHeight: 8,
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
