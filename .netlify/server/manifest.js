export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.52638fcf.js","app":"_app/immutable/entry/app.22ff28ac.js","imports":["_app/immutable/entry/start.52638fcf.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/singletons.edeb4930.js","_app/immutable/chunks/index.07126387.js","_app/immutable/entry/app.22ff28ac.js","_app/immutable/chunks/scheduler.c4994d38.js","_app/immutable/chunks/index.3b77a6b7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js')),
			__memo(() => import('./nodes/53.js')),
			__memo(() => import('./nodes/54.js')),
			__memo(() => import('./nodes/55.js')),
			__memo(() => import('./nodes/56.js')),
			__memo(() => import('./nodes/57.js')),
			__memo(() => import('./nodes/58.js')),
			__memo(() => import('./nodes/59.js')),
			__memo(() => import('./nodes/60.js')),
			__memo(() => import('./nodes/61.js')),
			__memo(() => import('./nodes/62.js')),
			__memo(() => import('./nodes/63.js')),
			__memo(() => import('./nodes/64.js')),
			__memo(() => import('./nodes/65.js')),
			__memo(() => import('./nodes/66.js')),
			__memo(() => import('./nodes/67.js')),
			__memo(() => import('./nodes/68.js')),
			__memo(() => import('./nodes/69.js')),
			__memo(() => import('./nodes/70.js')),
			__memo(() => import('./nodes/71.js')),
			__memo(() => import('./nodes/72.js')),
			__memo(() => import('./nodes/73.js')),
			__memo(() => import('./nodes/74.js')),
			__memo(() => import('./nodes/75.js')),
			__memo(() => import('./nodes/76.js')),
			__memo(() => import('./nodes/77.js')),
			__memo(() => import('./nodes/78.js')),
			__memo(() => import('./nodes/79.js')),
			__memo(() => import('./nodes/80.js')),
			__memo(() => import('./nodes/81.js')),
			__memo(() => import('./nodes/82.js')),
			__memo(() => import('./nodes/83.js')),
			__memo(() => import('./nodes/84.js')),
			__memo(() => import('./nodes/85.js')),
			__memo(() => import('./nodes/86.js')),
			__memo(() => import('./nodes/87.js')),
			__memo(() => import('./nodes/88.js')),
			__memo(() => import('./nodes/89.js')),
			__memo(() => import('./nodes/90.js')),
			__memo(() => import('./nodes/91.js')),
			__memo(() => import('./nodes/92.js')),
			__memo(() => import('./nodes/93.js')),
			__memo(() => import('./nodes/94.js')),
			__memo(() => import('./nodes/95.js')),
			__memo(() => import('./nodes/96.js')),
			__memo(() => import('./nodes/97.js')),
			__memo(() => import('./nodes/98.js')),
			__memo(() => import('./nodes/99.js')),
			__memo(() => import('./nodes/100.js')),
			__memo(() => import('./nodes/101.js')),
			__memo(() => import('./nodes/102.js')),
			__memo(() => import('./nodes/103.js')),
			__memo(() => import('./nodes/104.js')),
			__memo(() => import('./nodes/105.js')),
			__memo(() => import('./nodes/106.js')),
			__memo(() => import('./nodes/107.js')),
			__memo(() => import('./nodes/108.js')),
			__memo(() => import('./nodes/109.js')),
			__memo(() => import('./nodes/110.js')),
			__memo(() => import('./nodes/111.js')),
			__memo(() => import('./nodes/112.js')),
			__memo(() => import('./nodes/113.js')),
			__memo(() => import('./nodes/114.js')),
			__memo(() => import('./nodes/115.js'))
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
})();
