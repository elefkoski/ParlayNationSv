<script>
	import { onDestroy } from 'svelte';
	import tableLayout from '../../images/craps-simulator/craps-simulator-table-layout.webp';
	import die1 from '../../images/craps-simulator/dice/die_1.jpg';
	import die2 from '../../images/craps-simulator/dice/die_2.jpg';
	import die3 from '../../images/craps-simulator/dice/die_3.jpg';
	import die4 from '../../images/craps-simulator/dice/die_4.jpg';
	import die5 from '../../images/craps-simulator/dice/die_5.jpg';
	import die6 from '../../images/craps-simulator/dice/die_6.jpg';
	import whiteCheque from '../../images/craps-simulator/white_cheque.webp';
	import stickwoman from '../../images/craps-simulator/stickwoman.webp';
	import redCheque from '../../images/craps-simulator/red_cheque.webp';
	import greenCheque from '../../images/craps-simulator/green_cheque.webp';
	import blackCheque from '../../images/craps-simulator/black_cheque.webp';
	import purpleCheque from '../../images/craps-simulator/purple_cheque.webp';
	import orangeCheque from '../../images/craps-simulator/orange_cheque.webp';
	import puckOn from '../../images/craps-simulator/puck_on.webp';
	import puckOff from '../../images/craps-simulator/puck_off.webp';

	const diceImages = [die1, die2, die3, die4, die5, die6];
	const chequeImages = { 1: whiteCheque, 5: redCheque, 25: greenCheque, 100: blackCheque, 500: purpleCheque, 1000: orangeCheque };
	const betLabels = { passLine: 'Pass Line', passOdds: 'Pass Line Odds', dontPass: "Don't Pass", dontOdds: "Don't Pass Lay Odds", field: 'Field', place4: 'Place 4', place5: 'Place 5', place6: 'Place 6', place8: 'Place 8', place9: 'Place 9', place10: 'Place 10', come: 'Come', dontCome: "Don't Come" };
	const spots = [
		{ key: 'place4', label: 'Place 4', cls: 'spot-place4' },
		{ key: 'place5', label: 'Place 5', cls: 'spot-place5' },
		{ key: 'place6', label: 'Place 6', cls: 'spot-place6' },
		{ key: 'place8', label: 'Place 8', cls: 'spot-place8' },
		{ key: 'place9', label: 'Place 9', cls: 'spot-place9' },
		{ key: 'place10', label: 'Place 10', cls: 'spot-place10' },
		{ key: 'field', label: 'Field', cls: 'spot-field' },
		{ key: 'come', label: 'Come', cls: 'spot-come' },
		{ key: 'dontCome', label: "Don't Come", cls: 'spot-dontcome' },
		{ key: 'dontPass', label: "Don't Pass", cls: 'spot-dontpass' },
		{ key: 'passLine', label: 'Pass Line', cls: 'spot-pass' },
		{ key: 'passOdds', label: 'Odds', cls: 'spot-odds' }
	];

	let bankroll = 1000;
	let bets = { passLine: 0, passOdds: 0, dontPass: 0, dontOdds: 0, field: 0, place4: 0, place5: 0, place6: 0, place8: 0, place9: 0, place10: 0, come: 0, dontCome: 0 };
	let wins = { passLine: 0, passOdds: 0, dontPass: 0, dontOdds: 0, field: 0, come: 0, dontCome: 0 };
	let comePts = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let comePtWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let comeOdds = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let comeOddsWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let comePile = 0;
	let comePileBet = 0;
	let comePileWin = 0;
	let comePileOffAndOn = false;
	let comePileOrigBet = 0;
	let comePileWinOdds = 0;
	let comePileOffFor = 0;
	let comeOffForFollowUp = 0;
	let comePileOdds = 0;
	let comePileOddsOff = false;
	let dontComePts = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let dontComePtWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let dontComeOdds = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let dontComeOddsWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let overlays = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let overlayVigs = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let overlayWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 };
	let ceremonyActive = false;
	let ceremonyPuckPt = 0;
	let ceremonyLines = [];
	let ceremonyQueue = [];
	let ceremonyTimer = null;
	let dcPile = 0;
	let dcPileAt = 'dcbar';
	let dcFlyAmt = 0;
	let dcFlyX = 0;
	let dcFlyY = 0;
	let dcPileMenu = false;
	let ceremonyLowZ = false;
	let dcPileFromComeout = false;
	let overlayWinsPosted = [];
	let overlayWinMenu = null;
	let overlayWinQueue = [];
	let overlayWinPending = false;
	let overlayWinTimer = null;
	let winAfterPoint = { passLine: false, dontPass: false };
	let winPoint = { passOdds: 0, dontOdds: 0 };
	let testRolls = '';
	let buys = { place4: false, place10: false };
	let buyVigTotal = 0;
	function totalBuyAction() { return (buys.place4 ? bets.place4 : 0) + (buys.place10 ? bets.place10 : 0); }
	function owedVig(action) { return Math.floor(action / 20); }
	function killBuyVigOnWin(key, betAmt, isBuy) { if (!isBuy) return; buyVigTotal = Math.max(0, buyVigTotal - Math.floor(betAmt / 20)); }
	function pickupTotal(key) { let t = (bets[key] || 0) + (wins[key] || 0); if (buys[key]) t += buyVigTotal - owedVig(totalBuyAction() - (bets[key] || 0)); return t; }
	function buyCanAfford(key, amount) { let oldBet = bets[key] || 0; let oldIsBuy = buys[key]; let actionAfterDown = totalBuyAction() - (oldIsBuy ? oldBet : 0); let vigAfterDown = owedVig(actionAfterDown); let refund = oldIsBuy ? buyVigTotal - vigAfterDown : 0; let newOwed = owedVig(actionAfterDown + amount); let cost = amount + (newOwed - vigAfterDown); return bankroll + oldBet + refund >= cost; }
	let placeLammer = { place4: null, place5: null, place6: null, place8: null, place9: null, place10: null };
	let placeForeverOff = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false };
	let placeOnDuringCR = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false };
	const placeOrderInsideOut = ['place10', 'place9', 'place8', 'place6', 'place5', 'place4'];
	function placeWorkingWith(lammers, key) { let idx = placeOrderInsideOut.indexOf(key); for (let i = idx; i >= 0; i--) { let k = placeOrderInsideOut[i]; if (lammers[k]) return lammers[k] === 'on'; } return point !== 0; }
	function placeWorking(key) { return placeWorkingWith(placeLammer, key); }
	function comeOddsWorking(num) { if (point !== 0) return !comeOddsOff[num]; return !comeOddsOff[num] && (placeWorking('place' + num) || comeOddsDeclaredOn[num]); }
	function comeOddsWorkingWith(num, offs, lammers, declared, overrides, pt) { if (pt !== 0) return !offs[num]; return !offs[num] && (placeWorkingWith(lammers, 'place' + num) || declared[num]); }
	function anyPlaceBetUp(betsObj) { for (let n of [4, 5, 6, 8, 9, 10]) { if (betsObj['place' + n] > 0) return true; } return false; }
	function anyPlaceWorking(betsObj, lammers) { for (let n of [4, 5, 6, 8, 9, 10]) { if (betsObj['place' + n] > 0 && placeWorkingWith(lammers, 'place' + n)) return true; } return false; }
	function anyPlaceOff(betsObj, lammers) { for (let n of [4, 5, 6, 8, 9, 10]) { if (betsObj['place' + n] > 0 && !placeWorkingWith(lammers, 'place' + n)) return true; } return false; }
	function anyOddsUp(odds) { for (let n of [4, 5, 6, 8, 9, 10]) { if (odds[n] > 0) return true; } return false; }
	function anyOddsWorking(odds, offs, lammers, declared, overrides, pt) { for (let n of [4, 5, 6, 8, 9, 10]) { if (odds[n] > 0 && comeOddsWorkingWith(n, offs, lammers, declared, overrides, pt)) return true; } return false; }
	function anyOddsOff(odds, offs, lammers, declared, overrides, pt) { for (let n of [4, 5, 6, 8, 9, 10]) { if (odds[n] > 0 && !comeOddsWorkingWith(n, offs, lammers, declared, overrides, pt)) return true; } return false; }
	function comeWinFigureWith(num, pts, odds, offs, lammers, declared, overrides, pt) { let w = pts[num] || 0; if ((odds[num] || 0) > 0 && comeOddsWorkingWith(num, offs, lammers, declared, overrides, pt)) w += oddsWinOld(odds[num], num); return w; }
	function comeOddsBoundary(num, odds, offs, lammers, declared, overrides, pt) { let order = [10, 9, 8, 6, 5, 4]; let running = true; for (let i = 0; i < order.length; i++) { let n = order[i]; if (lammers['place' + n]) running = lammers['place' + n] === 'on'; if (!(odds[n] > 0)) continue; let w = comeOddsWorkingWith(n, offs, lammers, declared, overrides, pt); if (n === num) return w !== running ? (w ? 'on' : 'off') : null; if (w !== running) running = w; } return null; }
	function combinedScanPositions(odds, offs, placeBets, lammers) { let order = [10, 9, 8, 6, 5, 4]; let positions = []; for (let i = 0; i < order.length; i++) { let n = order[i]; if (odds[n] > 0) positions.push({ kind: 'odds', num: n, working: !offs[n] }); if (placeBets['place' + n] > 0) positions.push({ kind: 'place', num: n, working: placeWorkingWith(lammers, 'place' + n) }); } return positions; }
	function combinedMarkerFor(kind, num, odds, offs, placeBets, lammers) { let running = true; let positions = combinedScanPositions(odds, offs, placeBets, lammers); for (let i = 0; i < positions.length; i++) { let p = positions[i]; if (p.kind === kind && p.num === num) return p.working !== running ? (p.working ? 'on' : 'off') : null; if (p.working !== running) running = p.working; } return null; }
	function combinedDeclaringFor(kind, num, odds, offs, placeBets, lammers) { let running = true; let declaring = null; let positions = combinedScanPositions(odds, offs, placeBets, lammers); for (let i = 0; i < positions.length; i++) { let p = positions[i]; if (p.kind === kind && p.num === num) return declaring; if (p.working !== running) { running = p.working; declaring = p; } } return null; }
	function displayLammerFor(key) { if (placeLammer[key]) return placeLammer[key]; if (point === 0 && placeForeverOff[key]) return 'off'; return null; }
	let displayLammers = {};
	$: displayLammers = { place10: placeLammer.place10 || (point === 0 && placeForeverOff.place10 ? 'off' : null), place9: placeLammer.place9 || (point === 0 && placeForeverOff.place9 ? 'off' : null), place8: placeLammer.place8 || (point === 0 && placeForeverOff.place8 ? 'off' : null), place6: placeLammer.place6 || (point === 0 && placeForeverOff.place6 ? 'off' : null), place5: placeLammer.place5 || (point === 0 && placeForeverOff.place5 ? 'off' : null), place4: placeLammer.place4 || (point === 0 && placeForeverOff.place4 ? 'off' : null) };
	function ensureDisplayLammerAngles() { for (let k of placeOrderInsideOut) if (bets[k] > 0 && displayLammerFor(k)) lammerAngles[k] = randomAngle(); lammerAngles = lammerAngles; }
	function markOnDuringCR(beforeWorking) { if (point !== 0) return; for (let k of placeOrderInsideOut) if (bets[k] > 0 && placeWorking(k) && !beforeWorking[k]) placeOnDuringCR[k] = true; placeOnDuringCR = placeOnDuringCR; }
	function placeLammerExplanation(key, odds, offs, placeBets, lammers) { if (point !== 0) { let scanNum = placeNum(key); let scanMarker = combinedMarkerFor('place', scanNum, odds, offs, placeBets, lammers); if (scanMarker) return 'Lammer on this bet: ' + scanMarker.toUpperCase() + '. Bets outside this bet without their own lammer follow this lammer.'; let declaring = combinedDeclaringFor('place', scanNum, odds, offs, placeBets, lammers); if (declaring) return 'No lammer on this bet. It follows the ' + (declaring.working ? 'ON' : 'OFF') + ' lammer on ' + (declaring.kind === 'odds' ? 'the ' + declaring.num + ' Odds' : declaring.num) + ' inside it.'; return 'No lammer on this bet. Intermediate roll, so it is ON by default.'; } if (point === 0 && placeForeverOff[key]) return 'Forever OFF lammer on this bet. This bet was specifically turned off and stays off until you call it back on, not just off because the puck is off.'; if (placeLammer[key]) return 'Lammer on this bet: ' + placeLammer[key].toUpperCase() + '. Bets outside this bet without their own lammer follow this lammer.'; let idx = placeOrderInsideOut.indexOf(key); for (let i = idx; i >= 0; i--) { let k = placeOrderInsideOut[i]; if (placeLammer[k]) return 'No lammer on this bet. It follows the ' + placeLammer[k].toUpperCase() + ' lammer on ' + placeNum(k) + ' inside it.'; } return 'No lammer on this bet. ' + (point === 0 ? 'Comeout, so it is OFF by default.' : 'Intermediate roll, so it is ON by default.'); }
	function cleanupLammers() { for (let k of placeOrderInsideOut) if (placeLammer[k] && bets[k] === 0) placeLammer[k] = null; let changed = true; while (changed) { changed = false; for (let k of placeOrderInsideOut) { if (!placeLammer[k]) continue; let saved = placeLammer[k]; let before = {}; for (let b of placeOrderInsideOut) if (bets[b] > 0) before[b] = placeWorking(b); placeLammer[k] = null; let same = true; for (let b of placeOrderInsideOut) if (bets[b] > 0 && placeWorking(b) !== before[b]) same = false; if (same) { changed = true; break; } else placeLammer[k] = saved; } } placeLammer = placeLammer; }
	function reanchorPlaceLammers(desired) { let oldLammer = {}; for (let k of placeOrderInsideOut) oldLammer[k] = placeLammer[k]; let current = point !== 0; let newLammer = {}; for (let k of placeOrderInsideOut) { if (bets[k] === 0 || desired[k] === undefined) { newLammer[k] = null; continue; } if (desired[k] !== current) { newLammer[k] = desired[k] ? 'on' : 'off'; current = desired[k]; } else newLammer[k] = null; } placeLammer = newLammer; for (let k of placeOrderInsideOut) if (placeLammer[k]) lammerAngles[k] = randomAngle(); lammerAngles = lammerAngles; cleanupLammers(); placeLammer = placeLammer; }
	function togglePlaceLammer(key) { let working = placeWorking(key); let desiredWorking = !working; let beforeWorkingToggle = {}; for (let k of placeOrderInsideOut) if (bets[k] > 0) beforeWorkingToggle[k] = placeWorking(k); let wasOnDuringCR = placeOnDuringCR[key]; if (desiredWorking) placeForeverOff[key] = false; else if (point !== 0) placeForeverOff[key] = true; else placeForeverOff[key] = wasOnDuringCR ? false : true; placeForeverOff = placeForeverOff; let desired = {}; for (let k of placeOrderInsideOut) if (bets[k] > 0) desired[k] = k === key ? desiredWorking : placeWorking(k); let current = point !== 0; let newLammer = {}; for (let k of placeOrderInsideOut) { if (bets[k] === 0) { newLammer[k] = null; continue; } if (k === key) { newLammer[k] = desiredWorking ? 'on' : 'off'; current = desiredWorking; } else if (desired[k] !== current) { newLammer[k] = desired[k] ? 'on' : 'off'; current = desired[k]; } else newLammer[k] = null; } let oldLammerForToggle = {}; for (let k of placeOrderInsideOut) oldLammerForToggle[k] = placeLammer[k]; placeLammer = newLammer; for (let k of placeOrderInsideOut) if (placeLammer[k]) lammerAngles[k] = randomAngle(); lammerAngles = lammerAngles; cleanupLammers(); if (!desiredWorking && placeForeverOff[key]) placeLammer[key] = 'off'; ensureDisplayLammerAngles(); markOnDuringCR(beforeWorkingToggle); placeLammer = placeLammer; let workingList = placeOrderInsideOut.filter((k) => bets[k] > 0 && placeWorking(k)).map((k) => placeNum(k)).reverse().join(', '); let numWord = key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place6' ? 'Six' : key === 'place8' ? 'Eight' : key === 'place9' ? 'Nine' : 'Ten'; let toggleMsg = desiredWorking ? (buys[key] ? 'Your Buy ' + numWord + ' is ON.' : 'Your Place ' + numWord + ' is ON.') : (buys[key] ? 'Your Buy ' + numWord + ' is OFF. It is OFF until you turn it back ON.' : 'Your Place ' + placeNum(key) + ' is OFF. It is OFF until you turn it back ON.'); showInform(toggleMsg + ' Working Place bets now: ' + (workingList || 'none') + '.'); closePopup(); }
	let offGateBet = null;
	let subMenu = null;
	let subMenuReturn = null;
	let popupReturn = null;
	let each68 = 6;
	let each59 = 5;
	let each410 = 5;
	let each68Err = '';
	let each59Err = '';
	let each410Err = '';

	function winChips(key) {
		if (!wins[key] || !bets[key]) return 0;
		return Math.max(1, Math.round(wins[key] / bets[key]));
	}

	function stackFieldWin() { if (wins.field <= 0) return; let room = 5000 - bets.field; if (room <= 0) { bankroll += wins.field; } else if (wins.field > room) { bets.field = 5000; bankroll += wins.field - room; } else { bets.field += wins.field; } wins.field = 0; assignChipAngles('field'); }
	function railHornWin() { if (hornWin > 0) { bankroll += hornWin; hornWin = 0; } }
	function railAnyWins() { if (anySevenWin > 0) { bankroll += anySevenWin; anySevenWin = 0; } if (anyCrapsWin > 0) { bankroll += anyCrapsWin; anyCrapsWin = 0; } }
	function railWorldWin() { if (worldWin > 0) { bankroll += worldWin; worldWin = 0; } }
	function railCeWins() { if (ceSplitWin > 0) { bankroll += ceSplitWin; ceSplitWin = 0; } if (ceCWin > 0) { bankroll += ceCWin; ceCWin = 0; } if (ceEWin > 0) { bankroll += ceEWin; ceEWin = 0; } }
	function railHhWins() { let any = false; for (let d of hhDefs) { if (hhWins[d.key] > 0) { bankroll += hhWins[d.key]; hhWins[d.key] = 0; any = true; } } if (any) hhWins = hhWins; }
	function autoSameBetOverlays() {
		let changed = false;
		for (let num of [4, 5, 6, 8, 9, 10]) {
			if (overlayWins[num] > 0 && overlays[num] > 0) { let win = overlayWins[num]; let vig = overlayVigFor(overlays[num], num); bankroll += win; overlayWins[num] = 0; if (bankroll >= vig) { bankroll -= vig; overlayVigs[num] = vig; } else { bankroll += overlays[num]; overlays[num] = 0; overlayVigs[num] = 0; chipAngles['overlay' + num] = undefined; } changed = true; }
			else if (overlayWins[num] > 0) { bankroll += overlayWins[num]; overlayWins[num] = 0; changed = true; }
		}
		if (changed) { overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles = chipAngles; }
		cancelOverlayWinSequence();
	}
	function stackComeWins() {
		autoSameBetOverlays();
		if (dcPile > 0 && dcPileAt === 'come') { bankroll += dcPile; dcPile = 0; ceremonyLines = []; }
		if (comePile > 0) { bankroll += comePile; comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; pendingComeMenu = false; pendingComeOddsMenu = 0; comeOffForFollowUp = 0; }
		if (sevenOutFlag && point === 0) { let railCome = bets.come + wins.come; if (railCome > 0) { bankroll += railCome; bets.come = 0; wins.come = 0; chipAngles['come'] = undefined; chipAngles = chipAngles; comeRailNote = railCome; } }
		if (wins.come > 0) { let room = 5000 - bets.come; if (room <= 0) bankroll += wins.come; else if (wins.come > room) { bets.come = 5000; bankroll += wins.come - room; } else bets.come += wins.come; wins.come = 0; assignChipAngles('come'); }
		if (wins.dontCome > 0) { let room = 5000 - bets.dontCome; if (room <= 0) bankroll += wins.dontCome; else if (wins.dontCome > room) { bets.dontCome = 5000; bankroll += wins.dontCome - room; } else bets.dontCome += wins.dontCome; wins.dontCome = 0; assignChipAngles('dontCome'); }
		for (let num of [4, 5, 6, 8, 9, 10]) {
			if (comePtWins[num] > 0) { let room = 5000 - comePts[num]; if (room <= 0) bankroll += comePtWins[num]; else if (comePtWins[num] > room) { comePts[num] = 5000; bankroll += comePtWins[num] - room; } else comePts[num] += comePtWins[num]; comePtWins[num] = 0; assignComeAngles(num); }
			if (dontComePtWins[num] > 0) { let room = 5000 - dontComePts[num]; if (room <= 0) bankroll += dontComePtWins[num]; else if (dontComePtWins[num] > room) { dontComePts[num] = 5000; bankroll += dontComePtWins[num] - room; } else dontComePts[num] += dontComePtWins[num]; dontComePtWins[num] = 0; assignDcAngles(num); }
		}
		bets = bets; wins = wins; comePts = comePts; dontComePts = dontComePts; comePtWins = comePtWins; dontComePtWins = dontComePtWins;
	}
	function combineWins() {
		stackFieldWin();
		stackComeWins();
		cancelHornWinSequence();
		cancelAnySevenWinSequence();
		cancelAnyCrapsWinSequence();
		cancelWorldWinSequence();
		cancelCeSplitWinSequence();
		cancelCeCWinSequence();
		cancelCeEWinSequence();
		cancelHhWinSequence();
		sweepPropComboLosers();
		cancelPropComboSequence();
		railHornWin();
		railAnyWins();
		railWorldWin();
		railCeWins();
		railHhWins();
		railStraightUpWins();
		if (point === 0) {
			if (wins.passLine > 0) { if (winAfterPoint.passLine) bankroll += wins.passLine; else { bets.passLine += wins.passLine; assignChipAngles('passLine'); } wins.passLine = 0; winAfterPoint.passLine = false; }
			if (wins.dontPass > 0) { if (winAfterPoint.dontPass) bankroll += wins.dontPass; else { bets.dontPass += wins.dontPass; assignChipAngles('dontPass'); } wins.dontPass = 0; winAfterPoint.dontPass = false; }
			if (wins.dontOdds > 0) { bankroll += bets.dontOdds + wins.dontOdds; bets.dontOdds = 0; wins.dontOdds = 0; winPoint.dontOdds = 0; }
			if (wins.passOdds > 0) { bankroll += bets.passOdds + wins.passOdds; bets.passOdds = 0; wins.passOdds = 0; winPoint.passOdds = 0; }
		}
		bets = bets; wins = wins;
	}
	let point = 0;
	let diceA = 0;
	let diceB = 0;
	let rolling = false;
	let message = 'Tap a bet on the table, pick a preset amount, then roll. Table minimum is $5.';
	let messageKind = 'normal';
	let bubbleMode = 'action';
	function fmt(n) { let s = Number(n).toFixed(2); if (s.endsWith('.00')) s = s.slice(0, -3); return '$' + s; }
	function fmtSigned(n) { return n < 0 ? '-' + fmt(-n) : fmt(n); }
	function showAlert(t) { message = t; messageKind = 'alert'; bubbleMode = 'action'; }
	function showNotify(t) { message = t; messageKind = 'notify'; bubbleMode = 'action'; }
	function showInform(t) { message = t; messageKind = 'inform'; bubbleMode = 'action'; }
	function showGuide(t) { message = t; messageKind = 'normal'; bubbleMode = 'action'; }
	function showAsk(t) { message = t; messageKind = 'ask'; bubbleMode = 'action'; }
	function oddsMin() { if (point === 5 || point === 9) return 2; if (point === 6 || point === 8) return 5; return 1; }
	function oddsWinOld(amount, pt) { if (pt === 6 || pt === 8) return Math.floor(amount / 5) * 6 + (amount % 5); if (pt === 5 || pt === 9) return Math.floor((amount / 2) * 3); return amount * 2; }
	const oldStickComeout = { 2: "Two Craps two, Line em in, the Don'ts win, double the Field.", 3: "Three Craps three, Line em in, the Don'ts win, single the Field.", 4: 'Four easy four, mark the four, the Point is four. Single the Field, it came easy, bet it back hard', 5: 'Five, no Field five, mark the five, the Point is five. Place the nine, even Odds in the back.', 6: 'Six easy six, mark the six, the Point is six. No Field, it came easy, bet it back hard.', 7: 'Seven winner seven, front Line winner! Take the Don\'ts, pay the Line, save Odds, pay behind.', 8: 'Eight easy eight, mark the eight, the Point is eight. No Field, it came easy, bet it back hard.', 9: 'Nine, center Field nine, mark the nine, the Point is nine. Place the five, even Odds in the back.', 10: 'Ten, easy ten, mark the ten, the Point is ten. Single the Field, it came easy, bet it back hard.', 11: "Yo eleven Yo, front Line winner! Take the Don'ts, pay the Line, single the Field.", 12: "Twelve Craps Twelve, Line em in, bar the Don'ts, double the Field." };
	const oldStickComeoutHard = { 4: 'Four hard four, mark the four, the Point is four. Single the Field, it came hard, bet it back hard.', 6: 'Six hard six, mark the six, the Point is six. No Field, it came hard, bet it back hard.', 8: 'Eight hard eight, mark the eight, the Point is eight. No Field, it came hard, bet it back hard.', 10: 'Ten, hard ten, mark the ten, the Point is ten. Single the Field, it came hard, bet it back hard.' };
	const oldStickIntermediate = { 2: 'Two Craps two, take the Come, pay the Don\'t Come, double the Field.', 3: 'Three Craps three, take the Come, pay the Don\'t Come, single the Field.', 4: 'Four easy four, down behind four, single the Field, Don\'ts and Come\'s to the four.', 5: 'Five, no Field five, down behind five, Don\'ts and Come\'s to the five.', 6: 'Six easy six, down behind six, no Field, Don\'ts and Come\'s to the six.', 8: 'Eight, easy eight, down behind eight, no Field, Don\'ts and Come\'s to the eight.', 9: 'Nine, center Field nine, down behind nine, Don\'ts and Come\'s to the nine.', 10: 'Ten, easy ten, down behind ten, single the Field, Don\'ts and Come\'s to the ten.', 11: 'Yo eleven Yo, take the Don\'t Come, good in the Field, good in the Come.', 12: 'Twelve Craps Twelve, take the Come, Bar the Don\'t Come, double the Field.' };
	const oldStickIntermediateHard = { 4: 'Four hard four, down behind four, single the Field, Don\'ts and Come\'s to the four.', 6: 'Six hard six, down behind six, no Field, Don\'ts and Come\'s to the six.', 8: 'Eight, hard eight, down behind eight, no Field, Don\'ts and Come\'s to the eight.', 10: 'Ten, hard ten, down behind ten, single the Field, Don\'ts and Come\'s to the ten.' };
	const oldStickDecision = { 4: 'Four winner four, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the four, it came easy.', 5: 'Five winner five, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the five.', 6: 'Six winner six, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the six, it came easy.', 7: 'Seven out seven. Line em in, the Don\'ts win, last Come get some, pay behind.', 8: 'Eight winner eight, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the eight, it came easy.', 9: 'Nine winner nine, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the nine.', 10: 'Ten winner ten, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the ten, it came easy.' };
	const oldStickDecisionHard = { 4: 'Four winner four, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the four, it came hard.', 6: 'Six winner six, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the six, it came hard.', 8: 'Eight winner eight, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the eight, it came hard.', 10: 'Ten winner ten, front Line winner! Take the Don\'ts, pay the Line, Don\'ts and Come\'s to the ten, it came hard.' };
	const oldCrCalls = ["Alright folks, we\'re coming out again, same shooter. Center bets while the dice are in the middle. We\'re goin for point number two.", "Ok, we got a roll goin. We\'re coming out a third time. Center bets, World\'s, Horn\'s, Yo\'s, Hi Low\'s. While the dice are in the middle please.", "We found a shooter ladies and gentleman. We\'re coming out and looking for Point number four. Throw in your center bets now while the dice are in the middle.", "The shooter is hot and we\'re coming out! Get em now while the dice are in the middle. World\'s, Horn\'s Yo\'s, Hi\'s and Low\'s, C\'s and E\'s.", "Hot shooter coming out again!. We\'re looking for point number six. Get your bets while the dice are in the middle. Center bets?", "The Shooter is on fire!. We\'re coming out! World\'s, Horn\'s, Yo\', Hi Low\'s, C & E\'s, get em while the dice are in the middle.", "The shooter has the magic hands tonight! They\'ve made 7 Points and we\'re goin for Point number 8! Center bets while the dice are in the middle!", "This is gonna be the roll of the night ladies and gentleman! Pick up your winnings and let\'s get those center bets in right now!", "We can\'t slow the shooter down! Get your prop bets in now!"];
	const oldDiceOutCalls = ['Dice are moving, watch your hands, and no fingers over the edge!', 'Dice are goin! Hands up!', 'Ok, dice are out, watch your hands, and no throwing bets in front of the shooter!', 'Alright, the dice are moving. Get your hands up!', 'Ok, dice are goin, watch the hands, use your words!', 'Dice are out, hands high!', 'Dice are movin, watch those hands, dice hurt!', 'We gotta go, dice are out, watch your mittens!', 'Dice are goin, pick up your hands!'];
	function oldSevenOutCall(n) { if (n === 0) return 'The game is over. You didn\'t make any Points but that\'s ok, it happens all the time.'; if (n === 1) return 'The game is over. You made one Point. If you make at least one Point while you\'re shooting the dice then you did your job for the table.'; if (n === 2) return 'The game is over. You made two Points. Good job. No one is gonna be mad about that.'; if (n === 3) return 'The game is over. You made three Points which is a really good. You should be happy with this roll.'; if (n === 4) return 'The game is over. You made four Points. That was a great roll! You should be proud.'; if (n === 5) return 'The game is over. You made five Points. That was a really great roll. The table should be really happy!'; if (n === 6) return 'The game is over. You made six Points! That roll was fantastic! You probably won\'t see anybody beat that roll while playing at the tables!'; if (n === 7) return 'The game is over. You made seven Points! That\'s tremendous! You should get a standing ovation for that!'; if (n === 8) return 'The game is over. You made eight Points! That\'s just incredible. You may never do that again in your dice career.'; if (n === 9) return 'The game is over. You made nine Points! If someone hasn\'t given you money for this role then something is wrong.'; return 'The game is over. ' + n + ' Points is insane! This is a story you could tell your family for years to come.'; }
	function oldStickCallFor(total, wasPoint, isDecision, isSevenOut) { let hard = diceA === diceB; if (isSevenOut) return oldStickDecision[7]; if (wasPoint === 0) return hard && oldStickComeoutHard[total] ? oldStickComeoutHard[total] : oldStickComeout[total]; if (isDecision) return hard && oldStickDecisionHard[total] ? oldStickDecisionHard[total] : oldStickDecision[total]; return hard && oldStickIntermediateHard[total] ? oldStickIntermediateHard[total] : oldStickIntermediate[total]; }
	let stickCall = 'Shooter, dice are out. Place your bets.';
	$: bubbleText = bubbleMode === 'stick' ? stickCall : (message !== '' ? message : stickCall);
	$: bubbleKind = bubbleMode === 'stick' ? 'normal' : messageKind;
	$: anyMenuOpen = popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeOddsMenu || ceremonyActive || dcPileMenu || overlayWinMenu || overlayWinPending || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || worldWinMenu || worldWinPending || ceSplitWinMenu || ceSplitWinPending || ceCWinMenu || ceCWinPending || ceEWinMenu || ceEWinPending || hornWinMenu || hornWinPending || anySevenWinMenu || anySevenWinPending || anyCrapsWinMenu || anyCrapsWinPending || propComboMenu || propComboPending || hhMenu || hhWinMenuKey || hhWinPendingKey || hopChooser || hopSub;
	$: if (comeMovePending && !popupPending && !payMenu && !fieldPayMenu && !comeMoveDecision) comeMoveDecision = { ...comeMovePending };
	$: if (dcMovePending && !popupPending && !payMenu && !fieldPayMenu && !comeMoveDecision && !dcMoveDecision) dcMoveDecision = { ...dcMovePending };
	$: if (comeAfterPay && !payMenu && !comeMoveDecision) { let n = comeAfterPay; comeAfterPay = 0; openComePtMenu(n, true); }
	$: if (pendingComeMenu && comePile > 0 && !popupPending && !payMenu && !fieldPayMenu && !comeMoveDecision && !dcMoveDecision && !comeMovePending && !popupBet && !comePtMenu && !dcPtMenu && !comeDownMenu && !pointChooser && !mustBetPopup && !offGateBet && !subMenu) { pendingComeMenu = false; scrollTableIntoView(); popupBet = 'come'; customAmount = 25; } else if (pendingComeOddsMenu && !popupPending && !payMenu && !fieldPayMenu && !comeMoveDecision && !dcMoveDecision && !dcMovePending && !comeMovePending && !popupBet && !comePtMenu && !dcPtMenu && !comeDownMenu && !pointChooser && !mustBetPopup && !offGateBet && !subMenu) { let n = pendingComeOddsMenu; pendingComeOddsMenu = 0; if (comePts[n] > 0) { scrollTableIntoView(); comeOddsCustom = oddsMinFor(n); comePtMenuChoice = !!comeTravelMadePt[n]; if (comeTravelMadePt[n]) { comeTravelMadePt[n] = false; comeTravelMadePt = comeTravelMadePt; } comePtMenuTravel = true; comePtMenu = n; } }
	let lastRoll = 0;
	let rolls = 0;
	let pointsMade = 0;
	let popupBet = null;
	let payMenu = null;
	let fieldPayMenu = null;
	let fieldSplit = null;
	let comePtMenu = null;
	let comePtMenuTravel = false;
	let comePtMenuChoice = false;
	let dcPtMenu = null;
	let overlayMenu = null;
	let bandChooser = null;
	let hornBet = 0;
	let hornWin = 0;
	let hornMenu = false;
	let hornWinPending = false;
	let hornWinMenu = false;
	let hornWinTimer = null;
	let hornCustom = '';
	let hornErr = '';
	let hornWinCustom = '';
	let hornWinErr = '';
	const hhDefs = [
		{ key: 'aces', propKey: 'hhAces', name: 'Aces', total: 2, dice: [1, 1], max: 2500, left: 5.3, top: 71, amtStyle: 'left: calc(5.3% + 16px); right: auto; top: 71%;' },
		{ key: 'aceDeuce', propKey: 'hhAceDeuce', name: 'Ace Deuce', total: 3, dice: [1, 2], max: 5000, left: 30.6, top: 71, amtStyle: 'left: calc(30.6% + 16px); right: auto; top: 71%;' },
		{ key: 'yo', propKey: 'hhYo', name: 'Yo', total: 11, dice: [5, 6], max: 5000, left: 56.4, top: 71, amtStyle: 'left: calc(56.4% + 16px); right: auto; top: 71%;' },
		{ key: 'twelve', propKey: 'hhTwelve', name: 'Twelve', total: 12, dice: [6, 6], max: 2500, left: 86.6, top: 71, amtStyle: 'left: calc(86.6% + 16px); right: auto; top: 71%;' }
	];
	let hhBets = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 };
	let hhWins = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 };
	let hhMenu = false;
	let hhInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' };
	let hhErr = '';
	let hhClampErr = '';
	let hhWinPendingKey = '';
	let hhWinMenuKey = '';
	let hhWinTimer = null;
	let hhWinCustom = '';
	let hhWinErr = '';
	let anySevenBet = 0;
	let anySevenWin = 0;
	let anySevenMenu = false;
	let anySevenCustom = '';
	let anySevenErr = '';
	let anyCrapsBet = 0;
	let anyCrapsWin = 0;
	let anyCrapsMenu = false;
	let anyCrapsCustom = '';
	let anyCrapsErr = '';
	let anySevenWinPending = false;
	let anySevenWinMenu = false;
	let anySevenWinTimer = null;
	let anySevenWinCustom = '';
	let anySevenWinErr = '';
	let anyCrapsWinPending = false;
	let anyCrapsWinMenu = false;
	let anyCrapsWinTimer = null;
	let anyCrapsWinCustom = '';
	let anyCrapsWinErr = '';
	let worldBet = 0;
	let worldWin = 0;
	let worldMenu = false;
	let worldCustom = '';
	let worldErr = '';
	let worldWinPending = false;
	let worldWinMenu = false;
	let worldWinTimer = null;
	let worldWinCustom = '';
	let worldWinErr = '';
	let worldPushPending = false;
	let ceSplitBet = 0;
	let ceSplitWin = 0;
	let ceMenu = false;
	let ceSplitCustom = '';
	let ceSplitErr = '';
	let ceEBet = 0;
	let ceEWin = 0;
	let ceEInput = '';
	let ceCBet = 0;
	let ceCWin = 0;
	let ceCInput = '';
	let cePairErr = '';
	let ceSplitWinPending = false;
	let ceSplitWinMenu = false;
	let ceSplitWinTimer = null;
	let ceSplitWinCustom = '';
	let ceSplitWinErr = '';
	let ceCWinPending = false;
	let ceCWinMenu = false;
	let ceCWinTimer = null;
	let ceCWinCustom = '';
	let ceCWinErr = '';
	let ceEWinPending = false;
	let ceEWinMenu = false;
	let ceEWinTimer = null;
	let ceEWinCustom = '';
	let ceEWinErr = '';
	let hopChooser = false;
	const suDefs = [
		{ key: 'aces', name: 'Aces', total: 2, mult: 30, left: 9, top: 33.5, amtStyle: 'left: calc(9% + 16px); right: auto; top: 33.5%;' },
		{ key: 'aceDeuce', name: 'Ace Deuce', total: 3, mult: 15, left: 8.8, top: 80.9, amtStyle: 'left: calc(8.8% + 16px); right: auto; top: 80.9%;' },
		{ key: 'yo', name: 'Yo', total: 11, mult: 15, left: 77.5, top: 80.9, amtStyle: 'left: calc(77.5% + 16px); right: auto; top: 80.9%;' },
		{ key: 'twelve', name: 'Twelve', total: 12, mult: 30, left: 77.5, top: 33.8, amtStyle: 'left: calc(77.5% + 16px); right: auto; top: 33.8%;' }
	];
	let suBets = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 };
	let suWins = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 };
	let suGroups = [];
	let hopSub = null;
	let hopInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' };
	let hopErr = '';
	let hopClampErr = '';
	const splitRowDefs = [
		{ id: 'highLow', title: 'High - Low', tiles: [12, 2], comps: ['twelve', 'aces'] },
		{ id: 'elevenTwelve', title: 'Eleven - Twelve', tiles: [11, 12], comps: ['yo', 'twelve'] },
		{ id: 'acesAceDeuce', title: 'Aces - Ace Deuce', tiles: [2, 3], comps: ['aces', 'aceDeuce'] },
		{ id: 'sevenEleven', title: 'Seven - Eleven', tiles: [7, 11], comps: ['anySeven', 'yo'] }
	];
	const multiRowDefs = [
		{ id: 'highLowYo', title: 'High - Low - Yo', tiles: [12, 2, 11], comps: ['twelve', 'aces', 'yo'] },
		{ id: 'threeWayCrap', title: 'Three Way Crap', tiles: [2, 3, 12], comps: ['aces', 'aceDeuce', 'twelve'] }
	];
	let splitInputs = { highLow: '', elevenTwelve: '', acesAceDeuce: '', sevenEleven: '' };
	let splitErr = '';
	let splitClampErrs = {};
	let multiInputs = { highLowYo: '', threeWayCrap: '' };
	let multiErr = '';
	let multiClampErrs = {};
	let propCombo = null;
	let propComboPending = false;
	let propComboMenu = false;
	let propComboTimer = null;
	let propComboChoices = {};
	let propComboCustoms = {};
	let propComboErrs = {};
	let propComboSubmitErr = '';
	let comeMovePending = null;
	let comeMoveDecision = null;
	let deferredPayMenu = null;
	let comeDownMenu = null;
	let comeDownCustom = 5;
	let comeAfterPay = 0;
	let pointChooser = null;
	let dcNoAction68 = 'ask';
	let dcMovePending = null;
	let dcMoveDecision = null;
	let popupPending = false;
	let popupTimer = null;
	let pendingPayMenu = null;
	let pendingComeMenu = false;
	let pendingComeOddsMenu = 0;
	let pendingDcMenu = 0;
	let dcMenuTimer = null;
	let sevenOutFlag = false;
	let comeRailNote = 0;
	let comeTravelStaged = 0;
	function schedulePopupDelay(payPayload) { popupPending = true; if (payPayload) pendingPayMenu = payPayload; if (popupTimer) clearTimeout(popupTimer); popupTimer = setTimeout(releasePopupDelay, 1500); }
	function releasePopupDelay() { popupTimer = null; popupPending = false; comeTravelStaged = 0; if (pendingPayMenu) { let p = pendingPayMenu; pendingPayMenu = null; scrollTableIntoView(); payMenu = p.menu; payCustom = p.custom; payBuyAmount = p.buy; } }
	function cancelPopupDelay() { if (popupTimer) { clearTimeout(popupTimer); popupTimer = null; } popupPending = false; pendingPayMenu = null; pendingComeMenu = false; pendingComeOddsMenu = 0; comeOffForFollowUp = 0; comeTravelStaged = 0; }
	function scheduleDcTravelMenu(num) { pendingDcMenu = num; schedulePopupDelay(null); maybePopDcMenu(); }
	function clearPendingDcMenu() { pendingDcMenu = 0; if (dcMenuTimer) { clearTimeout(dcMenuTimer); dcMenuTimer = null; } }
	function maybePopDcMenu() { if (!pendingDcMenu) return; if (dcMenuTimer) return; if (dcPtMenu || ceremonyActive || popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || dcMovePending || comeMovePending || comeOffForFollowUp || deferredPayMenu || overlayWinMenu || overlayWinPending || hopChooser || hopSub || hhMenu || hhWinMenuKey) { dcMenuTimer = setTimeout(() => { dcMenuTimer = null; maybePopDcMenu(); }, 300); return; } let num = pendingDcMenu; pendingDcMenu = 0; if (dontComePts[num] > 0) { clearInputErrs(); dcOddsCustom = layStepFor(num); dcReduceCustom = ''; scrollTableIntoView(); dcPtMenu = num; } }
	let comeCorner = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeOddsOff = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeOddsDeclaredOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeOddsOverrideOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeTravelMadePt = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeMadePtComeout = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false };
	let comeOddsCustom = 5;
	let dcOddsCustom = 6;
	let dpReduceCustom = '';
	let dcReduceCustom = '';
	let fieldCustom = 25;
	let payCustom = 25;
	let payBuyAmount = 25;
	let inTestRoll = false;
	let customAmount = 25;
	let customErr = '';
	let payCustomErr = '';
	let payBuyErr = '';
	let fieldErr = '';
	let comeOddsErr = '';
	let dcOddsErr = '';
	let dpReduceErr = '';
	let dcReduceErr = '';
	let overlayCustom = 40;
	let overlayErr = '';
	let comeDownErr = '';
	function clearInputErrs() { customErr = ''; payCustomErr = ''; payBuyErr = ''; each68Err = ''; each59Err = ''; each410Err = ''; fieldErr = ''; comeOddsErr = ''; dcOddsErr = ''; comeDownErr = ''; dpReduceErr = ''; dcReduceErr = ''; anySevenErr = ''; anyCrapsErr = ''; hornErr = ''; hornWinErr = ''; anySevenWinErr = ''; anyCrapsWinErr = ''; worldErr = ''; worldWinErr = ''; hhErr = ''; hhWinErr = ''; ceSplitErr = ''; cePairErr = ''; ceSplitWinErr = ''; ceCWinErr = ''; ceEWinErr = ''; hopErr = ''; hopClampErr = ''; splitErr = ''; splitClampErrs = {}; multiErr = ''; multiClampErrs = {}; }
	function customMaxFor() { return popupBet === 'passOdds' ? oddsMax() : popupBet === 'dontOdds' ? dontLayMax() : popupBet && popupBet.startsWith('place') ? placeMax(popupBet) : 5000; }
	function onCustomAmountInput(e) { let m = customMaxFor(); let v = Number(e.target.value); if (v > m) { customAmount = m; e.target.value = m; customErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (customErr) customErr = ''; }
	function onPayCustomInput(e) { if (!payMenu) return; let m = placeMax(payMenu.key); let v = Number(e.target.value); if (v > m) { payCustom = m; e.target.value = m; payCustomErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (payCustomErr) payCustomErr = ''; }
	function onPayBuyInput(e) { let v = Number(e.target.value); if (v > 5000) { payBuyAmount = 5000; e.target.value = 5000; payBuyErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (payBuyErr) payBuyErr = ''; }
	function onEach68Input(e) { let v = Number(e.target.value); if (v > 6000) { each68 = 6000; e.target.value = 6000; each68Err = 'Max on this bet is ' + fmt(6000) + '.'; } else if (each68Err) each68Err = ''; }
	function onEach59Input(e) { let v = Number(e.target.value); if (v > 5000) { each59 = 5000; e.target.value = 5000; each59Err = 'Max on this bet is ' + fmt(5000) + '.'; } else if (each59Err) each59Err = ''; }
	function onEach410Input(e) { let v = Number(e.target.value); if (v > 5000) { each410 = 5000; e.target.value = 5000; each410Err = 'Max on this bet is ' + fmt(5000) + '.'; } else if (each410Err) each410Err = ''; }
	function onFieldCustomInput(e) { let v = Number(e.target.value); if (v > 5000) { fieldCustom = 5000; e.target.value = 5000; fieldErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (fieldErr) fieldErr = ''; }
	function onComeOddsInput(e) { if (!comePtMenu) return; let m = oddsMaxFor(comePtMenu); let v = Number(e.target.value); if (v > m) { comeOddsCustom = m; e.target.value = m; comeOddsErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (comeOddsErr) comeOddsErr = ''; }
	function onDcOddsInput(e) { if (!dcPtMenu) return; let m = layMaxFor(dcPtMenu); let v = Number(e.target.value); if (v > m) { dcOddsCustom = m; e.target.value = m; dcOddsErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (dcOddsErr) dcOddsErr = ''; }
	function onDpReduceInput(e) { let v = Number(e.target.value); if (v > bets.dontPass) { dpReduceCustom = bets.dontPass; e.target.value = bets.dontPass; dpReduceErr = 'Max on this bet is ' + fmt(bets.dontPass) + '.'; } else if (dpReduceErr) dpReduceErr = ''; }
	function onDcReduceInput(e) { if (!dcPtMenu) return; let m = dontComePts[dcPtMenu]; let v = Number(e.target.value); if (v > m) { dcReduceCustom = m; e.target.value = m; dcReduceErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (dcReduceErr) dcReduceErr = ''; }
	function onOverlayInput(e) { if (!overlayMenu) return; let v = Number(e.target.value); if (v > 5000) { overlayCustom = 5000; e.target.value = 5000; overlayErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (overlayErr) overlayErr = ''; }
	function onComeDownInput(e) { let m = comeMoveMaxOdds(); let v = Number(e.target.value); if (v > m) { comeDownCustom = m; e.target.value = m; comeDownErr = 'Max on this bet is ' + fmt(m) + '.'; } else if (comeDownErr) comeDownErr = ''; }
	let showSpots = true;
	let showAmounts = true;
	let showStickwoman = true;
	let showStickCalls = true;
	let darkMode = false;
	let mustBetPopup = false;
	let canShootFromPlace = false;

	$: onTable = Object.values(bets).reduce((a, b) => a + b, 0) + Object.values(wins).reduce((a, b) => a + b, 0) + Object.values(comePts).reduce((a, b) => a + b, 0) + Object.values(dontComePts).reduce((a, b) => a + b, 0) + Object.values(comeOdds).reduce((a, b) => a + b, 0) + Object.values(dontComeOdds).reduce((a, b) => a + b, 0) + Object.values(comePtWins).reduce((a, b) => a + b, 0) + Object.values(dontComePtWins).reduce((a, b) => a + b, 0) + Object.values(comeOddsWins).reduce((a, b) => a + b, 0) + Object.values(dontComeOddsWins).reduce((a, b) => a + b, 0) + (payMenu ? payMenu.win : 0) + (deferredPayMenu ? deferredPayMenu.win : 0) + (pendingPayMenu ? pendingPayMenu.menu.win : 0) + (comeMovePending ? comeMovePending.amount : 0) + comePile + buyVigTotal + Object.values(overlays).reduce((a, b) => a + b, 0) + Object.values(overlayVigs).reduce((a, b) => a + b, 0) + Object.values(overlayWins).reduce((a, b) => a + b, 0) + dcPile + dcFlyAmt + worldBet + worldWin + anySevenBet + anySevenWin + anyCrapsBet + anyCrapsWin + hornBet + hornWin + ceSplitBet + ceSplitWin + ceCBet + ceCWin + ceEBet + ceEWin + Object.values(suBets).reduce((a, b) => a + b, 0) + Object.values(suWins).reduce((a, b) => a + b, 0) + Object.values(hhBets).reduce((a, b) => a + b, 0) + Object.values(hhWins).reduce((a, b) => a + b, 0);
	$: totalBankroll = bankroll + onTable;
	let scrollLocked = false;
	let savedScrollY = 0;
	$: if (typeof document !== 'undefined' && typeof window !== 'undefined') { let locked = !!(popupBet || offGateBet || subMenu || mustBetPopup || payMenu || fieldPayMenu || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || dcPileMenu || overlayWinMenu || hornWinMenu || hornMenu || anySevenMenu || anyCrapsMenu || anySevenWinMenu || worldMenu || worldWinMenu || ceMenu || ceSplitWinMenu || ceCWinMenu || ceEWinMenu || anyCrapsWinMenu || propComboMenu || hopChooser || hopSub); if (locked && !scrollLocked) { scrollLocked = true; savedScrollY = window.scrollY; document.body.style.position = 'fixed'; document.body.style.top = '-' + savedScrollY + 'px'; document.body.style.width = '100%'; document.body.style.overflow = 'hidden'; document.documentElement.style.overflow = 'hidden'; } else if (!locked && scrollLocked) { scrollLocked = false; document.body.style.position = ''; document.body.style.top = ''; document.body.style.width = ''; document.body.style.overflow = ''; document.documentElement.style.overflow = ''; window.scrollTo(0, savedScrollY); } }
	onDestroy(() => { cancelPopupDelay(); cancelDcCeremony(); cancelOverlayWinSequence(); cancelHornWinSequence(); cancelAnySevenWinSequence(); cancelAnyCrapsWinSequence(); cancelWorldWinSequence(); cancelPropComboSequence(); clearPendingDcMenu(); if (typeof document !== 'undefined') { document.body.style.position = ''; document.body.style.top = ''; document.body.style.width = ''; document.body.style.overflow = ''; document.documentElement.style.overflow = ''; } });

	function railStacks(amount) {
		let remaining = amount;
		let stacks = [];
		for (let value of [1000, 500, 100, 25, 5, 1]) {
			let count = Math.floor(remaining / value);
			if (count > 0) { stacks.push({ value, count, img: chequeImages[value] }); remaining -= count * value; }
		}
		return stacks;
	}
	$: rail = railStacks(bankroll);

	const directionOffsets = {
		n: { dx: 0, dy: -0.375 },
		ne: { dx: 0.375, dy: -0.375 },
		e: { dx: 0.375, dy: 0 },
		se: { dx: 0.375, dy: 0.375 },
		s: { dx: 0, dy: 0.375 },
		sw: { dx: -0.375, dy: 0.375 },
		w: { dx: -0.375, dy: 0 },
		nw: { dx: -0.375, dy: -0.375 },
		z: { dx: 0, dy: 0 }
	};
	const chipDirections = { passLine: 'n', dontPass: 's', dontOdds: 'w', field: 's', passOdds: 'n', place4: 's', place5: 's', place6: 's', place8: 's', place9: 's', place10: 's', come: 's', dontCome: 's' };
	const chequeImagesByType = { Gray: orangeCheque, Orange: orangeCheque, Purple: purpleCheque, Black: blackCheque, Green: greenCheque, Red: redCheque, White: whiteCheque };

	function stackCheques(amount) {
		if (!amount) return [];
		const num = amount.toString(); const len = num.length;
		const onesDig = len >= 1 ? parseInt(num[len - 1]) : 0;
		const tensDig = len >= 2 ? parseInt(num[len - 2]) : 0;
		const hundredsDig = len >= 3 ? parseInt(num[len - 3]) : 0;
		const thousandsDig = len >= 4 ? parseInt(num[len - 4]) : 0;
		const isAtLeastTwoDigNum = len >= 2; const isAtLeastThreeDigNum = len >= 3; const isAtLeastFourDigNum = len >= 4;
		const theTwoDigNum = isAtLeastTwoDigNum ? parseInt(tensDig + '' + onesDig) : 0;
		const bannedRedNum = [25, 26, 27, 28, 29, 50, 51, 52, 53, 54, 75, 76, 77, 78, 79];
		const lowRedNum = [5, 6, 7, 8, 9];
		const chequeTypes = [
			{ type: 'Gray', condition: amount >= 5000 },
			{ type: 'Orange', condition: isAtLeastFourDigNum && thousandsDig !== 0 && thousandsDig !== 5 },
			{ type: 'Purple', condition: isAtLeastThreeDigNum && hundredsDig >= 5 },
			{ type: 'Black', condition: isAtLeastThreeDigNum && hundredsDig !== 0 && hundredsDig !== 5 },
			{ type: 'Green', condition: isAtLeastTwoDigNum && theTwoDigNum >= 25 },
			{ type: 'Red', condition: lowRedNum.includes(amount) || (theTwoDigNum >= 10 && !bannedRedNum.includes(theTwoDigNum)) },
			{ type: 'White', condition: amount > 0 && onesDig !== 0 && onesDig !== 5 }
		];
		return chequeTypes.filter((c) => c.condition).map((c) => c.type);
	}

	function puckLeft(pointValue) {
		let centers = { 4: 26.95, 5: 33.75, 6: 40.55, 8: 47.35, 9: 54.15, 10: 60.95 };
		return (centers[pointValue] || 54.15) - 2;
	}

	function oddsMax() {
		if (point === 6 || point === 8) return bets.passLine * 5;
		if (point === 5 || point === 9) return bets.passLine * 4;
		if (point === 4 || point === 10) return bets.passLine * 3;
		return 0;
	}

	function dontLayMax() { return bets.dontPass * 6; }

	function layStep() { if (point === 6 || point === 8) return 6; if (point === 5 || point === 9) return 3; if (point === 4 || point === 10) return 2; return 5; }

	function layWin(amount) {
		if (point === 6 || point === 8) return Math.round(amount * 5 / 6);
		if (point === 5 || point === 9) return Math.round(amount * 2 / 3);
		if (point === 4 || point === 10) return amount / 2;
		return 0;
	}
	function numWord(num) { return { 4: 'four', 5: 'five', 6: 'six', 8: 'eight', 9: 'nine', 10: 'ten' }[num]; }
	function comePtLeft(num) { return { 4: 24.3, 5: 31.4, 6: 38.3, 8: 45.1, 9: 52.0, 10: 58.9 }[num]; }
	function oddsMinFor(num) { if (num === 5 || num === 9) return 2; if (num === 6 || num === 8) return 5; return 1; }
	function oddsMaxFor(num) { let mult = (num === 6 || num === 8) ? 5 : (num === 5 || num === 9) ? 4 : 3; return comePts[num] * mult; }
	function comeOddsStep(num) { if (num === 6 || num === 8) return 5; if (num === 5 || num === 9) return 2; return 1; }
	function comeOddsMath(num) { if (num === 6 || num === 8) return '6 to 5'; if (num === 5 || num === 9) return '3 to 2'; return '2 to 1'; }
	function layStepFor(num) { if (num === 6 || num === 8) return 6; if (num === 5 || num === 9) return 3; return 2; }
	function layWinFor(amount, num) { if (num === 6 || num === 8) return Math.round(amount * 5 / 6); if (num === 5 || num === 9) return Math.round(amount * 2 / 3); return amount / 2; }
	function layMaxFor(num) { return dontComePts[num] * 6; }
	function comeOddsPresets(num) { let units = Math.floor(comePts[num] / 5); if (units === 0) return []; let all = []; if (num === 6 || num === 8) all = [units * 5, units * 10, units * 15, units * 20]; else if (num === 5 || num === 9) { let u = units * 5; all = [u % 2 === 1 ? u + 1 : u, u * 2, u % 2 === 1 ? u * 3 + 1 : u * 3, u * 4]; } else all = [units * 5, units * 10, units * 15]; return [...new Set(all)].filter((a) => a > 0 && a <= oddsMaxFor(num)); }
	function dcLayPresets(num, flat) { let units = Math.floor((flat || 0) / 5); if (units === 0) return []; return [...new Set([units * 6, units * 12, units * 18, units * 24])].filter((a) => a > 0 && a <= (flat || 0) * 6); }
	function overlayUnitFor(num) { if (num === 4 || num === 10) return 40; if (num === 5 || num === 9) return 30; return 24; }
	function overlayWinFor(lay, num) { if (num === 4 || num === 10) return lay / 2; if (num === 5 || num === 9) return Math.round(lay * 2 / 3); return Math.round(lay * 5 / 6); }
	function overlayVigFor(lay, num) { return Math.floor(overlayWinFor(lay, num) / 20); }
	function overlayRatioFor(num) { if (num === 4 || num === 10) return '2:1'; if (num === 5 || num === 9) return '3:2'; return '6:5'; }
	function overlayLayProblem(lay, num) { lay = Number(lay); if (!lay || lay <= 0 || Math.floor(lay) !== lay) return 'Type a whole dollar lay amount.'; if (lay < overlayUnitFor(num)) return 'Minimum Overlay lay on the ' + num + ' is ' + fmt(overlayUnitFor(num)) + '.'; if (lay > 5000) return 'Max Overlay on the ' + num + ' lays ' + fmt(5000) + '.'; if (lay % layStepFor(num) !== 0) return 'Overlay lays on the ' + num + ' go in ' + fmt(layStepFor(num)) + ' steps, so the win pays whole dollars.'; return ''; }
	function overlayLayValid(lay, num) { return overlayLayProblem(lay, num) === ''; }
	function overlayCustomVig(layVal, num) { let lay = Number(layVal); return overlayLayValid(lay, num) ? overlayVigFor(lay, num) : 0; }
	function overlaySplit(total, num) { total = Number(total); if (!total || total <= 0 || Math.floor(total) !== total) return null; let maxVig = Math.floor(total / 20) + 1; for (let lay = total - 1; lay >= total - maxVig && lay >= overlayUnitFor(num); lay--) { if (!overlayLayValid(lay, num)) continue; let win = overlayWinFor(lay, num); let vig = overlayVigFor(lay, num); if (lay + vig === total) return { lay: lay, win: win, vig: vig }; } return null; }
	function overlayPresetLays(num) { if (num === 4 || num === 10) return [40, 50, 100, 200]; if (num === 5 || num === 9) return [30, 75, 150, 300]; return [24, 60, 120, 240]; }
	function assignComeAngles(num) { chipAngles['come' + num] = stackCheques(comePts[num]).map(() => randomAngle()); chipAngles = chipAngles; }
	function assignDcAngles(num) { chipAngles['dc' + num] = stackCheques(dontComePts[num]).map(() => randomAngle()); chipAngles = chipAngles; }

	function betCheque(amount) {
		if (amount >= 1000) return orangeCheque;
		if (amount >= 500) return purpleCheque;
		if (amount >= 100) return blackCheque;
		if (amount >= 25) return greenCheque;
		if (amount >= 5) return redCheque;
		return whiteCheque;
	}

	function presetLabelFor(key) {
		if (key === 'passLine') return 'Amount to bet on the Pass Line:';
		if (key === 'passOdds') return 'Amount to bet as Odds:';
		if (key === 'dontPass') return "Amount to bet on the Don't Pass:";
		if (key === 'dontOdds') return 'Amount to bet as Lay Odds:';
		if (key === 'field') return 'Amount to bet in the Field:';
		if (key === 'come') return 'Amount to bet in the COME:';
		if (key === 'dontCome') return "Amount to bet in the Don't Come:";
		if (key && key.startsWith('place')) return 'Place the ' + key.slice(5) + ' for:';
		return 'Amount to bet:';
	}

	function presetAmounts(key, flat) {
		if (key === 'place6' || key === 'place8') return [6, 12, 18, 24, 30, 48, 60, 90];
		if (key === 'place5' || key === 'place9') return [5, 10, 15, 25, 35, 50, 75, 100];
		if (key === 'place4' || key === 'place10') return [5, 10, 15];
		if (key === 'passLine' || key === 'field' || key === 'dontPass' || key === 'come' || key === 'dontCome') return [5, 10, 25, 50];
		if (key === 'dontOdds') {
			let units = Math.floor((flat || 0) / 5); if (units === 0) return [];
			return [...new Set([units * 6, units * 12, units * 18, units * 24])].filter((a) => a > 0 && a <= (flat || 0) * 6);
		}
		if (key === 'passOdds') {
			let units = Math.floor(bets.passLine / 5); if (units === 0) return [];
			let all = [];
			if (point === 6 || point === 8) all = [units * 5, units * 10, units * 15, units * 20];
			else if (point === 5 || point === 9) { let u = units * 5; all = [u % 2 === 1 ? u + 1 : u, u * 2, u % 2 === 1 ? u * 3 + 1 : u * 3, u * 4]; }
			else if (point === 4 || point === 10) all = [units * 5, units * 10, units * 15];
			return [...new Set(all)].filter((a) => a > 0 && a <= oddsMax());
		}
		return [5, 10, 25, 100, 500];
	}
	function buyAmounts(key) { return key === 'place4' || key === 'place10' ? [25, 35, 50, 75, 100] : []; }

	function placeMax(key) { return key === 'place6' || key === 'place8' ? 6000 : 5000; }

	function betMaxBet(key) {
		// Old game bet.max: return the old bet to the rail first, then bet the max total. If rail plus old bet does not cover the max, old game refused with "You don't have enough money for that bet." No partial max.
		pickupPileBeforeBet(key);
		if (key === 'place4' || key === 'place10') { let actionAfterDown = totalBuyAction() - (buys[key] ? bets[key] : 0); let vigAfterDown = owedVig(actionAfterDown); let refund = buys[key] ? buyVigTotal - vigAfterDown : 0; let totalAvail = bankroll + bets[key] + refund; let maxCost = 5000 + (owedVig(actionAfterDown + 5000) - vigAfterDown); if (totalAvail < maxCost) { showAlert("You don't have enough money for that bet."); return; } if (bets[key] > 0) takeDown(key); placeBuy(key, 5000); if (bets[key] >= 5000) showInform('Max bet on the ' + (key === 'place4' ? 'Four' : 'Ten') + '!'); return; }
		let maxTotal = key === 'passOdds' ? oddsMax() : key === 'dontOdds' ? dontLayMax() : key.startsWith('place') ? placeMax(key) : 5000;
		let amount = maxTotal;
		if (key === 'passOdds') { let step = point === 5 || point === 9 ? 2 : point === 6 || point === 8 ? 5 : 1; amount = Math.floor(amount / step) * step; }
		if (key === 'dontOdds') amount = Math.floor(amount / layStep()) * layStep();
		if (key === 'place6' || key === 'place8') amount = Math.floor(amount / 6) * 6;
		if (key === 'place5' || key === 'place9') amount = Math.floor(amount / 5) * 5;
		if (amount <= 0) { showAlert('Already at the max for ' + betLabels[key] + '.'); return; }
		if (amount > bankroll + bets[key]) { showAlert("You don't have enough money for that bet."); return; } placeBet(key, amount); let maxMsg = key === 'passLine' ? 'Table max on the Pass Line!' : key === 'field' ? 'Table max in the Field!' : key === 'passOdds' ? 'Max Odds play! With 3x4x5x Odds, the total payment of your Pass Line & Odds will always be 7x your Pass Line bet or ' + fmt(7 * bets.passLine) + '.' : key.startsWith('place') ? 'Max bet on the ' + (key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place6' ? 'Six' : key === 'place8' ? 'Eight' : key === 'place9' ? 'Nine' : 'Ten') + '!' : null; if (maxMsg && bets[key] >= maxTotal) showInform(maxMsg);
	}

	function betAllIn(key) {
		// Old game bet.all: use every dollar in the rail plus the old bet. If that total is over the max, old game gave the max instead and said "That's a little too much. We gave you the max instead."
		pickupPileBeforeBet(key);
		if (key === 'place4' || key === 'place10') { let actionAfterDown = totalBuyAction() - (buys[key] ? bets[key] : 0); let vigAfterDown = owedVig(actionAfterDown); let refund = buys[key] ? buyVigTotal - vigAfterDown : 0; let totalAvail = bankroll + bets[key] + refund; if (totalAvail <= 0) { showAlert("You don't have any more money."); return; } let maxCost = 5000 + (owedVig(actionAfterDown + 5000) - vigAfterDown); if (totalAvail > maxCost) { betMaxBet(key); showAlert("That's a little too much. We gave you the max instead."); return; } if (totalAvail <= 20) { if (bets[key] > 0) takeDown(key); let amt = Math.floor(totalAvail / 5) * 5; if (amt < 5) { showAlert("You don't have enough money for that bet."); return; } placeBet(key, amt); showNotify('All in! Good luck.'); return; } if (bets[key] > 0) takeDown(key); let totalBuy = totalAvail; while (totalBuy > 20 && totalBuy + (owedVig(actionAfterDown + totalBuy) - vigAfterDown) > totalAvail) totalBuy -= 1; placeBuy(key, totalBuy); showNotify('All in! Good luck.'); return; }
		let maxTotal = key === 'passOdds' ? oddsMax() : key === 'dontOdds' ? dontLayMax() : key.startsWith('place') ? placeMax(key) : 5000;
		let totalAvail = bankroll + bets[key];
		if (totalAvail <= 0) { showAlert("You don't have any more money."); return; }
		let capped = totalAvail > maxTotal;
		let amount = Math.min(totalAvail, maxTotal);
		if (key === 'passOdds') { let step = point === 5 || point === 9 ? 2 : point === 6 || point === 8 ? 5 : 1; amount = Math.floor(amount / step) * step; }
		if (key === 'dontOdds') amount = Math.floor(amount / layStep()) * layStep();
		if (key === 'place6' || key === 'place8') amount = Math.floor(amount / 6) * 6;
		if (key === 'place5' || key === 'place9') amount = Math.floor(amount / 5) * 5;
		if (amount <= 0) { showAlert('Already at the max for ' + betLabels[key] + '.'); return; }
		placeBet(key, amount); if (capped) showAlert("That's a little too much. We gave you the max instead."); else showNotify('All in! Good luck.');
	}

	function placeNum(key) { return { place4: 4, place5: 5, place6: 6, place8: 8, place9: 9, place10: 10 }[key]; }
	function placeUnit(key) { let n = placeNum(key); return n === 6 || n === 8 ? 6 : 5; }
	function buyCustomVig(key, amount) { amount = Number(amount) || 0; if (amount <= 0) return 0; let actionAfterDown = totalBuyAction() - (buys[key] ? (bets[key] || 0) : 0); return owedVig(actionAfterDown + amount) - owedVig(actionAfterDown); }
	function placeKey(num) { return 'place' + num; }
	$: bothBetsMap = { 4: bets.place4 > 0 && comePts[4] > 0, 5: bets.place5 > 0 && comePts[5] > 0, 6: bets.place6 > 0 && comePts[6] > 0, 8: bets.place8 > 0 && comePts[8] > 0, 9: bets.place9 > 0 && comePts[9] > 0, 10: bets.place10 > 0 && comePts[10] > 0 };
	function amtFontSize(n) { let len = String(Math.round(n)).length; if (len >= 6) return 7; if (len === 5) return 8; if (len === 4) return 9; return 11; }
	function bothAmtFontSize(n) { let len = String(Math.round(n)).length; if (len >= 6) return 6; if (len === 5) return 7; if (len === 4) return 8; if (len === 3) return 9; return 11; }
	function comeLineLen(flat, odds) { return Math.max(('$' + Math.round(flat)).length, 2, ('$' + Math.round(odds)).length); }
	function comeSideFontSize(flat, odds) { let len = comeLineLen(flat, odds); if (len >= 7) return 5; if (len === 6) return 6; if (len === 5) return 7; if (len === 4) return 8; return 9; }
	function comeCenterFontSize(flat, odds) { let len = comeLineLen(flat, odds); if (len >= 7) return 7; if (len === 6) return 8; if (len === 5) return 9; if (len === 4) return 10; return 11; }
	function dcEmW(text) { const W = { '$': 0.556, ' ': 0.278, '/': 0.278, 'w': 0.944, 'i': 0.278, 'n': 0.611, 's': 0.556, 'L': 0.611, 'a': 0.556, 'y': 0.556, 'e': 0.556, 'v': 0.556, 'm': 0.889, 'o': 0.611, 'D': 0.722, 'C': 0.722 }; let t = 0; for (let ch of text) t += (ch >= '0' && ch <= '9') ? 0.556 : (W[ch] !== undefined ? W[ch] : 0.556); return t; }
	function dcThirdLines(lines, fs) { let n = 0; for (let line of lines) { let words = line.split(' '); let cur = ''; let cnt = 1; for (let w of words) { let trial = cur === '' ? w : cur + ' ' + w; if (cur !== '' && dcEmW(trial) * fs > 24.93) { cnt++; cur = w; } else cur = trial; } n += cnt; } return n; }
	function dcThirdFont(lines, capFs) { let steps = [9, 8, 7.5, 7, 6.5, 6, 5.5, 5]; let toks = lines.join(' ').split(' '); let tokOk = (fs) => toks.every((t) => dcEmW(t) * fs <= 13.13); let lineOk = (fs) => lines.every((L) => dcEmW(L) * fs <= 24.93); for (let fs of steps) { if (fs <= capFs && tokOk(fs) && lineOk(fs)) return fs; } for (let fs of steps) { if (fs <= capFs && tokOk(fs)) return fs; } return 5; }
	function dcAmtFont(amount) { return dcThirdFont(['$' + Math.round(amount)], 9); }
	function dcCombinedFont(flat, lay, tight) { return dcThirdFont(['$' + Math.round(flat) + ' w/', '$' + Math.round(lay) + ' Lay'], 9); }
	function dcLayStep(len) { if (len <= 1) return 0; return 3.75; }
	function dcWinRowTop(flatLen, layLen, dcWin, layWin, ovWin, flat, lay, tight) { let r = 0; if (layWin > 0) r = Math.max(r, 26.3 + (layLen - 1) * 3.75 + dcAmtFont(layWin) * 1.15 + 2); if (dcWin > 0) { r = Math.max(r, 18.8 + (flatLen - 1) * 1.5 + dcAmtFont(dcWin) * 1.15 + 2); if (lay > 0) { let pTop = dcPortraitTopD(flatLen, layLen, layWin, ovWin, flat, lay, tight); if (layWin > 0) r = Math.max(r, pTop + 2 + dcAmtFont(layWin) * 1.15 + 2); } } if (ovWin > 0 && lay > 0 && dcWin <= 0) { let cfs = dcCombinedWinFont(flat, lay, tight, layLen, layWin, ovWin); r = Math.max(r, 7.55 + (flatLen - 1) * 1.5 + dcThirdLines(['$' + Math.round(flat) + ' w/', '$' + Math.round(lay) + ' Lay'], cfs) * cfs * 1.15 + 2); } return Math.round(r * 100) / 100; }
	function dcWinBoxW(text, fs) { return 6 + text.length * 0.7 * fs; }
	function dcWinBoxShift(layLen, layWin, dcWin, ovWin) { if (layWin <= 0 || dcWin <= 0) return 0; let layRight = 18.56 - (layLen - 1) * 3.75 + dcWinBoxW('$' + Math.round(layWin), dcAmtFont(layWin)) / 2; let dcHalf = dcWinBoxW('$' + Math.round(dcWin), dcAmtFont(dcWin)) / 2; let need = layRight + 0.5 - (42.69 - dcHalf); if (need <= 0) return 0; let rightLimit = 84.16; if (ovWin > 0) rightLimit = Math.min(rightLimit, 82.8 - dcWinBoxW('$' + Math.round(ovWin), dcAmtFont(ovWin)) / 2 - 0.5); return Math.max(0, Math.min(need, rightLimit - 42.69 - dcHalf)); }
	function dcCombinedWinFont(flat, lay, tight, layLen, layWin, ovWin) { return dcCombinedFont(flat, lay, tight); }
	function dcCombinedWinLeft(layLen, layWin, flat, lay, tight, ovWin, fs) { let w = Math.max(dcWinBoxW('$' + Math.round(flat) + ' w/', fs), dcWinBoxW('$' + Math.round(lay) + ' Lay', fs)); let leftMin = 18.56 - (layLen - 1) * 3.75 + 10.25; if (layWin > 0) leftMin = Math.max(leftMin, 18.56 - (layLen - 1) * 3.75 + dcWinBoxW('$' + Math.round(layWin), dcAmtFont(layWin)) / 2 + 0.25); let left = Math.max(48.26 - w / 2, leftMin); if (ovWin > 0) left = Math.min(left, 72.55 - w); if (left < leftMin) left = leftMin; return Math.round(left * 100) / 100; }
	function dcPortraitFont(flat, lay, tight, layLen, layWin, ovWin) { return dcThirdFont(['$' + Math.round(flat), 'wins $' + Math.round(flat), 'even money'], dcCombinedWinFont(flat, lay, tight, layLen, layWin, ovWin)); }
	function dcStackPortraitFont(flat, flatLen, ovWin, ovLayAmt) { let lines = ['$' + Math.round(flat) + ' DC', 'wins', '$' + Math.round(flat)]; let base = ovWin > 0 ? 28 : 16.09 + (flatLen - 1) * 1.5; let steps = [9, 8, 7.5, 7, 6.5, 6, 5.5, 5]; let fs = dcThirdFont(lines, 9); while (fs > 5 && base + dcThirdLines(lines, fs) * fs * 1.15 + 2 > 46) fs = steps[steps.indexOf(fs) + 1]; return fs; }
	function dcPortraitTopD(flatLen, layLen, layWin, ovWin, flat, lay, tight) { let pBot = Math.max(18.8 + (flatLen - 1) * 1.5, layWin > 0 ? 31.14 + (layLen - 1) * 3.75 : (layLen - 1) * 3.75 + 7.2, layWin <= 0 && ovWin > 0 ? 28 : 0); let fs = dcPortraitFont(flat, lay, tight, layLen, layWin, ovWin); return pBot + dcThirdLines(['$' + Math.round(flat), 'wins $' + Math.round(flat), 'even money'], fs) * fs * 1.15 + 2; }
	function ovPortraitBottomD(flatLen, layLen, dcWin, layWin, ovWin, flat, lay, tight) { let b = 26; if (dcWin > 0 && lay > 0) b = Math.max(b, dcPortraitTopD(flatLen, layLen, layWin, ovWin, flat, lay, tight) + 2); else if (dcWin > 0) { let sfs = dcStackPortraitFont(flat, flatLen, true, 0); b = Math.max(b, Math.max(18.8 + (flatLen - 1) * 1.5, 28) + dcThirdLines(['$' + Math.round(flat) + ' DC', 'wins', '$' + Math.round(flat)], sfs) * sfs * 1.15 + 2 + 2); } else if (lay > 0) { let cfs = dcCombinedWinFont(flat, lay, tight, layLen, layWin, ovWin); b = Math.max(b, (flatLen - 1) * 1.5 + 7.55 + dcThirdLines(['$' + Math.round(flat) + ' w/', '$' + Math.round(lay) + ' Lay'], cfs) * cfs * 1.15 + 2 + 2); } return Math.round(b * 100) / 100; }
	function ovPortraitFont(lay, win, bottomD) { let lines = ['$' + Math.round(lay) + ' Lay', 'wins', '$' + Math.round(win)]; let steps = [9, 8, 7.5, 7, 6.5, 6, 5.5, 5]; let fs = dcThirdFont(lines, 9); while (fs > 5 && bottomD + dcThirdLines(lines, fs) * fs * 1.15 + 2 > 47.5) fs = steps[steps.indexOf(fs) + 1]; return fs; }
	
	let placementCount = {};
	function bumpPlacement(key) { placementCount[key] = (placementCount[key] || 0) + 1; placementCount = placementCount; }
	function chipAngle(key, amount, index) { let h = 0; let s = key + ':' + amount + ':' + index + ':' + (placementCount[key] || 0); for (let c of s) h = (h * 31 + c.charCodeAt(0)) % 100000; return (h * 137) % 360; }
	function lammerAngle(key, amount) { let h = 0; let s = 'lammer:' + key + ':' + amount + ':' + (placementCount[key] || 0); for (let c of s) h = (h * 31 + c.charCodeAt(0)) % 100000; return (h * 149) % 360; }
	let chipAngles = {}; let lammerAngles = {}; let buyLammerAngles = {};
	function randomAngle() { return Math.floor(Math.random() * 360); }
	function assignChipAngles(key) { chipAngles[key] = stackCheques(bets[key]).map(() => randomAngle()); lammerAngles[key] = randomAngle(); buyLammerAngles[key] = randomAngle(); chipAngles = chipAngles; lammerAngles = lammerAngles; buyLammerAngles = buyLammerAngles; }
	function assignChipAnglesGroup(keys) { for (let k of keys) if (bets[k] > 0) assignChipAngles(k); }
	function getChipAngle(key, amount, index) { if (chipAngles[key] && chipAngles[key][index] !== undefined) return chipAngles[key][index]; return chipAngle(key, amount, index); }
	function getLammerAngle(key, amount, stored) { if (stored !== undefined) return stored; if (lammerAngles[key] !== undefined) return lammerAngles[key]; return lammerAngle(key, amount); }
	function getBuyLammerAngle(key, amount, stored) { if (stored !== undefined) return stored; if (buyLammerAngles[key] !== undefined) return buyLammerAngles[key]; return lammerAngle(key, amount); }
	function hasPlaceBet() { return ['place4', 'place5', 'place6', 'place8', 'place9', 'place10'].some((k) => bets[k] > 0); }
	function hasVestedBet() { return bets.passLine > 0 || bets.dontPass > 0 || (canShootFromPlace && hasPlaceBet()); }
	function shootErrorMessage() { if (canShootFromPlace && point !== 0) return 'You picked up your Don\'t Pass bet during the intermediate roll. You can shoot from a Place bet or Buy, or Come Down on the Pass Line. Coming down pays even money, so placing usually pays more.'; if (canShootFromPlace) return 'You picked up your Don\'t Pass bet. You now need to make a Place bet or Buy to shoot.'; if (point !== 0) return 'You need a Pass Line bet made after the point to shoot.'; return 'On comeout you need a Pass Line or Don\'t Pass bet to shoot.'; }

	function applyPlaceGroup(parts) {
		let detail = [];
		let newAction = totalBuyAction(); let oldReturn = 0; let newTotal = 0;
		for (let p of parts) {
			let key = p.key; let per = p.amount; let isBuy = !!p.buy;
			// Old game placeIt / buyIt take the old bet down first, then put the new bet up. Bet Each and Spread replace each bet with the new amount, they do not add to it. A Buy can replace a Place and a Place can replace a Buy. The vig is charged on the total Buy action, so the whole group is priced at once, not per bet.
			if (per > placeMax(key)) return { ok: false, msg: 'That would put ' + betLabels[key] + ' over its ' + fmt(placeMax(key)) + ' max.' };
			let oldBet = bets[key] || 0; let oldWin = wins[key] || 0;
			if (buys[key]) newAction -= oldBet;
			if (isBuy) newAction += per;
			oldReturn += oldBet + oldWin; newTotal += per;
			detail.push({ key, per, isBuy, oldBet, oldWin });
		}
		let newOwed = owedVig(newAction);
		let totalCost = newTotal + (newOwed - buyVigTotal) - oldReturn;
		if (bankroll < totalCost) return { ok: false, msg: 'Not enough in the rail. That spread costs ' + fmt(totalCost) + ', you have ' + fmt(bankroll) + '.' };
		bankroll -= totalCost;
		let desiredBeforeGroup = {}; for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredBeforeGroup[k] = placeWorking(k);
		for (let d of detail) { if (d.oldWin > 0) { wins[d.key] = 0; if (winAfterPoint[d.key] !== undefined) winAfterPoint[d.key] = false; } bets[d.key] = d.per; buys[d.key] = d.isBuy; bumpPlacement(d.key); if (comePts[placeNum(d.key)] > 0) comeCorner[placeNum(d.key)] = true; } comeCorner = comeCorner;
		buyVigTotal = newOwed;
		assignChipAnglesGroup(detail.map((d) => d.key));
		let desiredGroup = { ...desiredBeforeGroup }; for (let d of detail) { desiredGroup[d.key] = true; placeForeverOff[d.key] = false; if (point === 0) placeOnDuringCR[d.key] = true; } placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR; reanchorPlaceLammers(desiredGroup); markOnDuringCR(desiredBeforeGroup);
		bets = bets; buys = buys; placeLammer = placeLammer;
		return { ok: true, totalCost };
	}

	function betEachGroup(group, per) {
		if (rolling) { showAlert('Dice are rolling, wait a second.'); return; }
		if (!per || isNaN(per) || per <= 0) { showAlert('Pick an amount for each number.'); return; }
		let parts = [];
		if (group === 'sixEight') { if (per % 6 !== 0) { showAlert('You must bet Place bets on the 6 or 8 in increments of $6.'); return; } parts = [{ key: 'place6', amount: per }, { key: 'place8', amount: per }]; }
		else if (group === 'fiveNine') { if (per % 5 !== 0) { showAlert('You must bet Place bets on the 4, 5, 9, or 10 in increments of $5.'); return; } parts = [{ key: 'place5', amount: per }, { key: 'place9', amount: per }]; }
		else if (group === 'fourTen') { if (per <= 15) parts = [{ key: 'place4', amount: per }, { key: 'place10', amount: per }]; else parts = [{ key: 'place4', amount: per, buy: true }, { key: 'place10', amount: per, buy: true }]; }
		let r = applyPlaceGroup(parts);
		if (!r.ok) { showAlert(r.msg); return; }
		let label = group === 'sixEight' ? '6 & 8' : group === 'fiveNine' ? '5 & 9' : '4 & 10';
		let betVerb = group === 'fourTen' && per > 15 ? 'Buy' : 'Place';
		showAsk(betVerb + ' ' + fmt(per) + ' each ' + label + (point === 0 ? ', working on the Comeout Roll.' : '.') + (r.totalCost >= 0 ? ' ' + fmt(r.totalCost) + ' total.' : ' You got ' + fmt(-r.totalCost) + ' back to the rail.')); closePopup();
	}

	function spreadBreakdown(group, level) {
		let base = {
			Across: { place4: 5, place5: 5, place6: 6, place8: 6, place9: 5, place10: 5 },
			Inside: { place5: 5, place6: 6, place8: 6, place9: 5 },
			Outside: { place4: 5, place5: 5, place9: 5, place10: 5 },
			Uptown: { place8: 6, place9: 5, place10: 5 },
			Downtown: { place4: 5, place5: 5, place6: 6 }
		}[group];
		let out = {};
		for (let k of Object.keys(base)) {
			let amt = base[k];
			if (level === 1) amt *= 2;
			if (level === 2) amt *= 3;
			if (level === 3) amt *= 5;
			if (level === 4) amt *= 10;
			if (level === 5) amt *= 20;
			out[k] = { amount: amt, buy: (k === 'place4' || k === 'place10') && level >= 3 };
		}
		return out;
	}

	function spreadGroups() {
		let groups = [];
		let pt = point;
		let allGroups = pt === 0 ? ['Across', 'Inside', 'Outside', 'Uptown', 'Downtown'] : pt <= 6 ? ['Across', 'Inside', 'Outside', 'Uptown', 'AcrossIncluding'] : ['Across', 'Inside', 'Outside', 'Downtown', 'AcrossIncluding'];
		for (let g of allGroups) {
			let baseGroup = g === 'AcrossIncluding' ? 'Across' : g;
			let levels = [];
			for (let level = 0; level <= 5; level++) {
				let bd = spreadBreakdown(baseGroup, level);
				if (g !== 'AcrossIncluding' && pt !== 0) { let pk = placeKey(pt); delete bd[pk]; }
				let betSum = Object.values(bd).reduce((a, b) => a + b.amount, 0);
				let buyAction = (bd.place4 && bd.place4.buy ? bd.place4.amount : 0) + (bd.place10 && bd.place10.buy ? bd.place10.amount : 0);
				let total = betSum + Math.floor(buyAction / 20);
				levels.push({ total, parts: bd });
			}
			groups.push({ name: g, levels });
		}
		return groups;
	}

	function betSpread(group, level, fromTest = false) {
		if (rolling && !fromTest) { showAlert('Dice are rolling, wait a second.'); return false; }
		let g = spreadGroups().find((x) => x.name === group); if (!g) return false;
		let lv = g.levels[level];
		let parts = Object.keys(lv.parts).map((k) => ({ key: k, amount: lv.parts[k].amount, buy: lv.parts[k].buy }));
		let r = applyPlaceGroup(parts);
		if (!r.ok) { showAlert(r.msg); return false; }
		showAsk(fmt(lv.total) + ' ' + group + (group === 'AcrossIncluding' ? ', including the Point.' : point === 0 ? ', working on the Comeout Roll.' : '.')); closePopup(); return true;
	}

	function betSpreadByTotal(group, total) {
		let g = spreadGroups().find((x) => x.name === group);
		let li = g ? g.levels.findIndex((lv) => lv.total === total) : -1;
		if (li < 0) { showAlert('no ' + fmt(total) + ' ' + group + ' spread.'); return false; }
		return betSpread(group, li, true);
	}

	function handleSpotClick(e, key) { if (key === 'dontPass' && wins.dontOdds > 0) { let rect = e.currentTarget.getBoundingClientRect(); let x = e.clientX - rect.left; if (x < rect.width / 2 - 20) { popupBet = 'dontOdds'; dpReduceCustom = ''; return; } } if (key.startsWith('place')) { openPointBox(placeNum(key)); return; } popupReturn = null; openPopup(key); }

	function openPopup(key, force = false) {
		if (rolling) { showAlert('Dice are rolling, wait a second.'); return; }
		if (ceremonyActive) return;
		clearInputErrs();
		if (typeof document !== 'undefined') { let tableEl = document.querySelector('.table-wrap'); if (tableEl) tableEl.scrollIntoView({ behavior: 'auto', block: 'center' }); }
		if (key === 'field' && wins.field > 0) { scrollTableIntoView(); fieldPayMenu = { bet: bets.field, win: wins.field, isDouble: wins.field === bets.field * 2 }; fieldCustom = bets.field; popupBet = null; subMenu = null; return; }
		if (key === 'dontPass' && point !== 0 && bets.dontPass > 0) { popupBet = 'dontOdds'; customAmount = layStep(); dpReduceCustom = ''; subMenu = null; return; }
		if (key === 'dontPass' && point !== 0) { showAlert("Don't Pass can only be bet on the comeout roll, when the puck is OFF."); return; }
		if (key === 'come' && point === 0 && !(bets.come > 0 && wins.come > 0)) { showAlert('Come bets can only be made after a point is set.'); return; }
		if (key === 'dontCome' && point === 0) { showAlert("Don't Come bets can only be made after a point is set."); return; }
		if (key === 'passOdds' && point === 0 && bets.passOdds === 0 && wins.passOdds === 0) { showAlert('You need a point first before you can bet Pass Line Odds.'); return; }
		if (key === 'passOdds' && bets.passLine === 0 && bets.passOdds === 0 && wins.passOdds === 0) { showAlert('Bet the Pass Line first, then add Odds behind it.'); return; }
		if (key === 'dontOdds' && point === 0) { showAlert('You need a point first before you can lay odds.'); return; }
		if (key === 'dontOdds' && bets.dontPass === 0) { showAlert("Bet Don't Pass first, then lay odds behind it."); return; }
		if (!force && key.startsWith('place') && point === 0 && bets[key] === 0) { offGateBet = key; popupBet = null; subMenu = null; return; }
		offGateBet = null;
		popupBet = key;
		customAmount = key === 'place6' || key === 'place8' ? 30 : key === 'passOdds' ? oddsMin() : key === 'dontOdds' ? layStep() : 25;
	}
	function closePopup() { if (popupBet === 'come' && comeOffForFollowUp) { pendingComeOddsMenu = comeOffForFollowUp; comeOffForFollowUp = 0; } popupBet = null; subMenu = null; subMenuReturn = null; offGateBet = null; popupReturn = null; clearInputErrs(); }

	function placeBuy(key, amount, fromTest = false) {
		if (rolling && !fromTest) { showAlert('Dice are rolling, wait a second.'); return false; }
		if (!amount || isNaN(amount) || amount < 20) { showAlert(key === 'place4' ? 'The minimum buy on the Four is $20 for $1 commission.' : 'The minimum buy on the Ten is $20 for $1 commission.'); return false; }
		if (amount > 5000) { showAlert("I know you're excited, but we got limits here. Max bet on the " + (key === 'place4' ? 'Four' : 'Ten') + ' is $5000. Try again.'); return false; }
		if (!buys[key] && bets[key] > 0) { showAlert('You already have a Place bet on ' + betLabels[key] + '. Pickup that bet first, then Buy it.'); return false; }
		let oldBet = bets[key] || 0; let oldIsBuy = buys[key];
		let actionAfterDown = totalBuyAction() - (oldIsBuy ? oldBet : 0);
		let vigAfterDown = owedVig(actionAfterDown);
		let refund = oldIsBuy ? buyVigTotal - vigAfterDown : 0;
		let newOwed = owedVig(actionAfterDown + amount);
		let cost = amount + (newOwed - vigAfterDown);
		let oldBack = oldBet + refund;
		if (bankroll + oldBack < cost) { showAlert('Not enough in the rail for a ' + fmt(amount) + ' Buy.'); return false; }
		bankroll += oldBack;
		bankroll -= cost;
		let desiredBeforeBuy = {}; for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredBeforeBuy[k] = placeWorking(k);
		let beforeBuyWorking = { ...desiredBeforeBuy }; bets[key] = amount; buys[key] = true; buyVigTotal = newOwed; bumpPlacement(key); assignChipAngles(key); desiredBeforeBuy[key] = true; placeForeverOff[key] = false; placeForeverOff = placeForeverOff; reanchorPlaceLammers(desiredBeforeBuy); markOnDuringCR(beforeBuyWorking); if (point === 0) placeOnDuringCR[key] = true; placeOnDuringCR = placeOnDuringCR; if (comePts[placeNum(key)] > 0) { comeCorner[placeNum(key)] = true; comeCorner = comeCorner; }
		bets = bets; buys = buys; placeLammer = placeLammer;
		showAsk('Buy the ' + (key === 'place4' ? 'Four' : 'Ten') + ' for  ' + fmt(amount) + (point === 0 ? ', working on the Comeout Roll.' : '.') + ' On the table now: ' + fmt(totalBuyAction() + buyVigTotal) + ' total Buy action.'); 
		closePopup(); return true;
	}

	function placeBuyCustom(key) { placeBuy(key, Number(customAmount)); }

	function pickupPileBeforeBet(key) { if (key === 'come' && comePile > 0) { bankroll += comePile; comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; pendingComeMenu = false; } }
	function placeBet(key, amount, fromTest = false) {
		if (rolling && !fromTest) { showAlert('Dice are rolling, wait a second.'); return false; }
		pickupPileBeforeBet(key);
		if (key === 'dontPass' && point !== 0) { showAlert("Don't Pass can only be bet on the comeout roll, when the puck is OFF."); return false; }
		if ((key === 'come' || key === 'dontCome') && point === 0) { showAlert((key === 'come' ? 'Come' : "Don't Come") + ' bets can only be made after a point is set.'); return false; }
		if (key === 'passOdds' && point === 0) { showAlert('You need a point first before you can bet Pass Line Odds.'); return false; }
		if (key === 'passOdds' && bets.passLine === 0) { showAlert('Bet the Pass Line first, then add Odds behind it.'); return false; }
		if (key === 'passOdds' && amount > oddsMax()) { let mult = (point === 6 || point === 8) ? 5 : (point === 5 || point === 9) ? 4 : 3; let pair = (point === 6 || point === 8) ? '6 & 8' : (point === 5 || point === 9) ? '5 & 9' : '4 & 10'; showAlert('Max odds on the ' + pair + ' are ' + mult + 'x your bet or ' + fmt(oddsMax()) + '. Try double dipping instead.'); return false; }
		if (key === 'passOdds' && amount < oddsMin()) { let pair = (point === 6 || point === 8) ? '6 & 8' : (point === 5 || point === 9) ? '5 & 9' : '4 & 10'; showAlert('The min Odds bet on the ' + pair + ' is ' + fmt(oddsMin()) + '.'); return false; }
		if (key === 'dontOdds' && point === 0) { showAlert('You need a point first before you can lay odds.'); return false; }
		if (key === 'dontOdds' && bets.dontPass === 0) { showAlert("Bet Don't Pass first, then lay odds behind it."); return false; }
		if (key === 'dontOdds' && amount > dontLayMax()) { showAlert('That is over the max Lay Odds for this point. Max Lay right now is ' + fmt(dontLayMax()) + ', to win ' + fmt(layWin(dontLayMax())) + '.'); return false; }
		if (key === 'dontOdds' && (amount < layStep() || amount % layStep() !== 0)) { showAlert('Lay Odds on ' + point + ' must be in ' + fmt(layStep()) + ' increments, so they pay correctly.'); return false; }
		if ((key === 'place4' || key === 'place10') && buys[key]) { showAlert('You already have a Buy bet on ' + betLabels[key] + '. Pickup that bet first, then Place it.'); return false; }
		if (key === 'passLine' && amount > 5000) { showAlert("I know you're excited, but we got limits here. Max bet on the Pass Line is $5000. Try again."); return false; }
		if (key === 'field' && amount > 5000) { showAlert('Table max in the Field is $5000. Try again.'); return false; }
		if ((key === 'come' || key === 'dontCome') && amount > 5000) { showAlert("I know you're excited, but we got limits here. Max bet on the " + (key === 'come' ? 'Come' : "Don't Come") + ' is $5000. Try again.'); return false; }
		if (key.startsWith('place') && amount > placeMax(key)) { let numWord = key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place6' ? 'Six' : key === 'place8' ? 'Eight' : key === 'place9' ? 'Nine' : 'Ten'; showAlert("I know you're excited, but we got limits here. Max bet on the " + numWord + ' is ' + fmt(placeMax(key)) + '. Try again.'); return false; }
		if (key === 'passLine' && amount < 5) { showAlert('Sorry, but the minimum on the Pass Line is $5.'); return false; }
		if (key === 'field' && amount < 5) { showAlert('The minimum in the Field is $5. Try again.'); return false; }
		if ((key === 'place4' || key === 'place5' || key === 'place9' || key === 'place10') && amount < 5) { let numWord = key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place9' ? 'Nine' : 'Ten'; showAlert('The minimum Place bet on the ' + numWord + ' is $5.'); return false; }
		if ((key === 'place6' || key === 'place8') && amount < 6) { let numWord = key === 'place6' ? 'Six' : 'Eight'; showAlert('The minimum Place bet on the ' + numWord + ' is $6.'); return false; }
		if (amount < 5 && key !== 'passOdds' && key !== 'dontOdds') { showAlert('Table minimum is $5.'); return false; }
		if (bankroll + bets[key] < amount) { showAlert('Not enough in the rail for ' + fmt(amount) + ', even after returning your ' + fmt(bets[key]) + ' bet.'); return false; }
		if (key === 'passLine' && point !== 0 && bets[key] > 0 && amount < bets[key]) { showAlert('Pass Line cannot be taken back after a point is set, you can only increase it.'); return false; }
		let newTotal = amount;
		if ((key === 'place6' || key === 'place8') && newTotal % 6 !== 0) { showAlert('You must bet Place bets on the 6 or 8 in increments of $6.'); return false; }
		if ((key === 'place5' || key === 'place9' || key === 'place4' || key === 'place10') && newTotal % 5 !== 0) { showAlert('You must bet Place bets on the 4, 5, 9, or 10 in increments of $5.'); return false; }
		let oldBet = bets[key]; let oldWin = wins[key] || 0; let desiredBeforePlace = {}; if (key.startsWith('place')) for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredBeforePlace[k] = placeWorking(k); if (oldWin > 0) { bankroll += oldWin; wins[key] = 0; if (winAfterPoint[key] !== undefined) winAfterPoint[key] = false; } bankroll += oldBet; bankroll -= amount;
		bets[key] = newTotal;
		if (key === 'field') fieldSplit = null;
		if (key.startsWith('place')) { let beforePlaceWorking = { ...desiredBeforePlace }; desiredBeforePlace[key] = true; placeForeverOff[key] = false; placeForeverOff = placeForeverOff; reanchorPlaceLammers(desiredBeforePlace); markOnDuringCR(beforePlaceWorking); if (point === 0) placeOnDuringCR[key] = true; placeOnDuringCR = placeOnDuringCR; if (comePts[placeNum(key)] > 0) { comeCorner[placeNum(key)] = true; comeCorner = comeCorner; } }
		bumpPlacement(key); assignChipAngles(key);
		bets = bets; wins = wins; winAfterPoint = winAfterPoint;
		if (key === 'passOdds') { let pay = oddsWinOld(amount, point); let ratio = point === 6 || point === 8 ? '6:5' : point === 5 || point === 9 ? '3:2' : '2:1'; showInform(fmt(amount) + ' Odds play. They pay ' + ratio + ' and will win ' + fmt(pay) + ' if you roll the Point.'); if ((point === 6 || point === 8) && amount % 5 !== 0) showAlert('You should bet Odds in multiples of 5. Every dollar above a multiple of five will get paid even money. Your Odds pay ' + fmt(pay) + '.'); else if ((point === 5 || point === 9) && amount % 2 === 1) showAlert('Uneven odds will cost you 50 cents when the Point is 5 or 9. Your Odds pay ' + fmt(amount / 2 * 3) + ', but your payment will be rounded down to ' + fmt(pay) + '.'); } else if (key.startsWith('place')) { let numWord = key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place6' ? 'Six' : key === 'place8' ? 'Eight' : key === 'place9' ? 'Nine' : 'Ten'; showAsk('Place the ' + numWord + ' for  ' + fmt(amount) + (point === 0 ? ', working on the Comeout Roll.' : '.')); } else if (key === 'passLine' && point === 0 && oldBet === 0) { showGuide(oldDiceOutCalls[Math.floor(Math.random() * oldDiceOutCalls.length)]); } else { showAsk((oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' bet with ' + fmt(amount) + ' on ' + betLabels[key] + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amount) + ' on ' + betLabels[key] + '.') + ' On the table now: ' + fmt(bets[key]) + '.' + (key === 'dontOdds' ? ' That lay wins ' + fmt(layWin(amount)) + ' if a 7 rolls before the point.' : '')); }
		closePopup(); mustBetPopup = false; return true;
	}

	function takeDown(key) {
		if (rolling) return;
		if (key === 'passLine' && point !== 0) { showAlert('Pass Line cannot be taken down after a point is set.'); return; }
		if (key === 'dontPass' && point !== 0) { showAlert("Don't Pass cannot be taken down from here after a point is set. Use the Lay Odds menu on the Don't Pass bar to pick it up."); return; }
		if (bets[key] > 0 || (wins[key] || 0) > 0) { if (key === 'dontPass') canShootFromPlace = true; if (key === 'field') fieldSplit = null; let desiredAfterTakeDown = {}; if (key.startsWith('place')) for (let k of placeOrderInsideOut) if (k !== key && bets[k] > 0) desiredAfterTakeDown[k] = placeWorking(k); let total = pickupTotal(key); bankroll += total; let removeMsg = key === 'passLine' ? 'You picked up your Pass Line bet.' : key === 'passOdds' ? 'You picked up your Odds.' : key === 'field' ? 'You picked up your Field Bet.' : key.startsWith('place') ? (buys[key] ? 'Your Buy is down on the ' + (key === 'place4' ? 'Four' : 'Ten') + '.' : "You're down on the " + (key === 'place4' ? 'Four' : key === 'place5' ? 'Five' : key === 'place6' ? 'Six' : key === 'place8' ? 'Eight' : key === 'place9' ? 'Nine' : 'Ten') + '.') : 'Picked up your ' + betLabels[key] + '.'; showInform(removeMsg + ' ' + fmt(total) + ' back to the rail.'); bets[key] = 0; buys[key] = false; if (key.startsWith('place')) { placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false; buyVigTotal = owedVig(totalBuyAction()); placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR; if (comePts[placeNum(key)] > 0) { comeCorner[placeNum(key)] = false; comeCorner = comeCorner; } } chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined; if (wins[key] !== undefined) wins[key] = 0; if (winAfterPoint[key] !== undefined) winAfterPoint[key] = false; bets = bets; wins = wins; winAfterPoint = winAfterPoint; buys = buys; placeLammer = placeLammer; chipAngles = chipAngles; lammerAngles = lammerAngles; if (key.startsWith('place')) reanchorPlaceLammers(desiredAfterTakeDown); else { cleanupLammers(); placeLammer = placeLammer; } }
		closePopup();
	}

	function collectWinnings() {
		if (rolling) return;
		if (wins.passLine > 0 || wins.passOdds > 0) { let wasPointMade = winAfterPoint.passLine; let total = wins.passLine + bets.passOdds + wins.passOdds; bankroll += total; wins.passLine = 0; bets.passOdds = 0; wins.passOdds = 0; winPoint.passOdds = 0; winAfterPoint.passLine = false; bets = bets; wins = wins; winPoint = winPoint; winAfterPoint = winAfterPoint; showInform('Collected ' + fmt(total) + ', original Pass Line bet stays.'); if (wasPointMade && pointsMade > 0) stickCall = oldCrCalls[Math.min(pointsMade - 1, oldCrCalls.length - 1)]; return; }
		if (wins.dontPass > 0 || wins.dontOdds > 0) { let total = wins.dontPass + bets.dontOdds + wins.dontOdds; bankroll += total; wins.dontPass = 0; bets.dontOdds = 0; wins.dontOdds = 0; winPoint.dontOdds = 0; winAfterPoint.dontPass = false; bets = bets; wins = wins; winPoint = winPoint; winAfterPoint = winAfterPoint; showInform('Collected ' + fmt(total) + ", original Don't Pass bet stays."); return; }
	}

	function passOddsMath() { if (winPoint.passOdds === 6 || winPoint.passOdds === 8) return '6 to 5'; if (winPoint.passOdds === 5 || winPoint.passOdds === 9) return '3 to 2'; if (winPoint.passOdds === 4 || winPoint.passOdds === 10) return '2 to 1'; return ''; }
	function layOddsMath() { if (winPoint.dontOdds === 6 || winPoint.dontOdds === 8) return '5 to 6'; if (winPoint.dontOdds === 5 || winPoint.dontOdds === 9) return '2 to 3'; if (winPoint.dontOdds === 4 || winPoint.dontOdds === 10) return '1 to 2'; return ''; }
	function pickUpPassWinnings() { if (wins.passLine > 0) { bankroll += wins.passLine; showInform('Picked up Pass Line winnings ' + fmt(wins.passLine) + ', original Pass Line bet stays.'); wins.passLine = 0; winAfterPoint.passLine = false; wins = wins; winAfterPoint = winAfterPoint; } closePopup(); }
	function pickUpDontWinnings() { if (wins.dontPass > 0) { bankroll += wins.dontPass; showInform('Picked up Don\'t Pass winnings ' + fmt(wins.dontPass) + ', original Don\'t Pass bet stays.'); wins.dontPass = 0; winAfterPoint.dontPass = false; wins = wins; winAfterPoint = winAfterPoint; } closePopup(); }
	function pickUpPassOddsWinnings() { if (wins.passOdds > 0) { let total = bets.passOdds + wins.passOdds; bankroll += total; showInform('Picked up Pass Line Odds winnings ' + fmt(wins.passOdds) + ' plus the ' + fmt(bets.passOdds) + ' Odds bet, ' + fmt(total) + ' to the rail. Original Pass Line bet stays.'); bets.passOdds = 0; wins.passOdds = 0; winPoint.passOdds = 0; bets = bets; wins = wins; winPoint = winPoint; } closePopup(); }
	function pickUpLayWinnings() { if (wins.dontOdds > 0) { let total = bets.dontOdds + wins.dontOdds; bankroll += total; showInform('Picked up Lay Odds winnings ' + fmt(wins.dontOdds) + ' plus the ' + fmt(bets.dontOdds) + ' Lay Odds bet, ' + fmt(total) + ' to the rail. Original Don\'t Pass bet stays.'); bets.dontOdds = 0; wins.dontOdds = 0; winPoint.dontOdds = 0; bets = bets; wins = wins; winPoint = winPoint; } closePopup(); }

	function pickupDontPassAfterPoint() {
		if (rolling) return;
		if (point === 0) { takeDown('dontPass'); return; }
		canShootFromPlace = true;
		let total = bets.dontPass + (wins.dontPass || 0) + bets.dontOdds + (wins.dontOdds || 0); bankroll += total; showInform('Picked up your Don\'t Pass bet, ' + fmt(total) + ' back to the rail, including ' + fmt(bets.dontOdds + (wins.dontOdds || 0)) + ' Lay Odds.'); bets.dontPass = 0; bets.dontOdds = 0; wins.dontPass = 0; wins.dontOdds = 0; bets = bets; wins = wins; closePopup();
	}

	function reduceDontPass(amount) {
		if (rolling) return;
		amount = Math.floor(Number(amount));
		if (!amount || amount < 5) { showAlert('Table minimum is $5.'); return; }
		if (amount >= bets.dontPass) { showAlert('Your Don\'t Pass bet is ' + fmt(bets.dontPass) + ' now. Enter a smaller amount to reduce it.'); return; }
		let back = bets.dontPass - amount;
		bankroll += back;
		bets.dontPass = amount;
		let layNote = '';
		if (wins.dontOdds === 0 && bets.dontOdds > dontLayMax()) { let layBack = bets.dontOdds - dontLayMax(); bankroll += layBack; bets.dontOdds = dontLayMax(); assignChipAngles('dontOdds'); layNote = ' Lay Odds dropped to ' + fmt(bets.dontOdds) + ', ' + fmt(layBack) + ' back to the rail.'; }
		bets = bets;
		assignChipAngles('dontPass');
		dpReduceCustom = ''; dpReduceErr = '';
		showInform('Reduced your Don\'t Pass bet to ' + fmt(amount) + '. ' + fmt(back) + ' back to the rail.' + layNote);
	}

	function takeDownAll() {
		if (rolling) return;
		if (ceremonyActive) return;
		for (let key of Object.keys(bets)) { if ((key === 'passLine' || key === 'dontPass') && point !== 0) continue; bankroll += pickupTotal(key); bets[key] = 0; buys[key] = false; if (key.startsWith('place')) { placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false; buyVigTotal = owedVig(totalBuyAction()); } chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined; if (wins[key] !== undefined) wins[key] = 0; } placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR;
		for (let num of [4, 5, 6, 8, 9, 10]) { bankroll += (dontComePts[num] || 0) + (dontComePtWins[num] || 0) + (dontComeOdds[num] || 0) + (dontComeOddsWins[num] || 0) + (comeOdds[num] || 0) + (comeOddsWins[num] || 0); dontComePts[num] = 0; dontComePtWins[num] = 0; dontComeOdds[num] = 0; dontComeOddsWins[num] = 0; comeOdds[num] = 0; comeOddsWins[num] = 0; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; } dontComePts = dontComePts; dontComePtWins = dontComePtWins; dontComeOdds = dontComeOdds; dontComeOddsWins = dontComeOddsWins; comeOdds = comeOdds; comeOddsWins = comeOddsWins; comeOddsOff = comeOddsOff; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn = comeOddsOverrideOn; comeTravelMadePt = comeTravelMadePt; comeMadePtComeout = comeMadePtComeout;
		for (let num of [4, 5, 6, 8, 9, 10]) comeCorner[num] = false; comeCorner = comeCorner;
		bets = bets; wins = wins; buys = buys; placeLammer = placeLammer; chipAngles = chipAngles; lammerAngles = lammerAngles; buyLammerAngles = buyLammerAngles; cleanupLammers(); placeLammer = placeLammer; fieldSplit = null; if (comePile > 0) { bankroll += comePile; comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; pendingComeMenu = false; } pendingComeOddsMenu = 0; showInform('Took down all bets that can be taken down.'); closePopup();
	}

	function allPlaceBetsDown() {
		if (rolling) return;
		let total = 0;
		for (let key of ['place4', 'place5', 'place6', 'place8', 'place9', 'place10']) { total += bets[key]; bets[key] = 0; buys[key] = false; placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false; chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined; } total += buyVigTotal; buyVigTotal = 0; bankroll += total; placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR;
		for (let num of [4, 5, 6, 8, 9, 10]) comeCorner[num] = false; comeCorner = comeCorner;
		bets = bets; buys = buys; placeLammer = placeLammer; buyLammerAngles = buyLammerAngles; showInform(total > 0 ? 'All your Place bets are down. ' + fmt(total) + ' back to the rail.' : 'No Place bets to take down.'); closePopup();
	}

	function turnOffAllPlace() {
		for (let key of placeOrderInsideOut) { placeLammer[key] = null; if (bets[key] > 0) placeForeverOff[key] = point !== 0 ? true : (placeOnDuringCR[key] ? false : true); } placeForeverOff = placeForeverOff; let inner = placeOrderInsideOut.find((k) => bets[k] > 0); if (inner) placeLammer[inner] = 'off'; cleanupLammers(); ensureDisplayLammerAngles();
		placeLammer = placeLammer; showInform('Your Place bets have been turned OFF. Bets are OFF until you turn them back ON.'); closePopup();
	}

	function turnOnAllPlace() {
		let beforeWorkingOn = {};
		for (let k of placeOrderInsideOut) if (bets[k] > 0) beforeWorkingOn[k] = placeWorking(k);
		for (let key of placeOrderInsideOut) placeForeverOff[key] = false;
		placeForeverOff = placeForeverOff;
		let desiredOn = {};
		for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredOn[k] = true;
		reanchorPlaceLammers(desiredOn);
		markOnDuringCR(beforeWorkingOn);
		ensureDisplayLammerAngles();
		placeLammer = placeLammer; showInform('Your Place bets have been turned ON.'); closePopup();
	}

	function turnOffAllBets() {
		for (let num of [4, 5, 6, 8, 9, 10]) if (comeOdds[num] > 0) { comeOddsOff[num] = true; comeOddsOverrideOn[num] = false; }
		comeOddsOff = comeOddsOff; comeOddsOverrideOn = comeOddsOverrideOn;
		turnOffAllPlace();
		showInform('All your bets have been turned OFF. Place bets and Come Odds are OFF until you turn them back ON.');
	}

	function turnOnAllBets() {
		for (let num of [4, 5, 6, 8, 9, 10]) if (comeOdds[num] > 0) comeOddsOff[num] = false;
		comeOddsOff = comeOddsOff;
		turnOnAllPlace();
		showInform('All your bets have been turned ON. Place bets and Come Odds are working.');
	}

	function allBetsDown() {
		if (rolling) return;
		let total = 0;
		for (let num of [4, 5, 6, 8, 9, 10]) { if (comeOdds[num] > 0 || comeOddsWins[num] > 0) { total += comeOdds[num] + comeOddsWins[num]; comeOdds[num] = 0; comeOddsWins[num] = 0; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['comeOdds' + num] = undefined; } }
		comeOdds = comeOdds; comeOddsWins = comeOddsWins; comeOddsOff = comeOddsOff; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn = comeOddsOverrideOn; comeTravelMadePt = comeTravelMadePt; comeMadePtComeout = comeMadePtComeout; chipAngles = chipAngles;
		for (let key of ['place4', 'place5', 'place6', 'place8', 'place9', 'place10']) { total += bets[key]; bets[key] = 0; buys[key] = false; placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false; chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined; } total += buyVigTotal; buyVigTotal = 0; bankroll += total; placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR;
		for (let num of [4, 5, 6, 8, 9, 10]) comeCorner[num] = false; comeCorner = comeCorner;
		bets = bets; buys = buys; placeLammer = placeLammer; buyLammerAngles = buyLammerAngles; showInform(total > 0 ? 'All your Place bets are down. ' + fmt(total) + ' back to the rail.' : 'No Place bets to take down.'); closePopup();
	}

	function turnOffAllComeBetOdds() {
		for (let num of [4, 5, 6, 8, 9, 10]) if (comeOdds[num] > 0) { comeOddsOff[num] = true; comeOddsOverrideOn[num] = false; }
		comeOddsOff = comeOddsOff; comeOddsOverrideOn = comeOddsOverrideOn;
		showInform('All your Come Bet Odds have been turned OFF.');
		comePtMenu = null;
	}

	function turnOnAllComeBetOdds() {
		for (let num of [4, 5, 6, 8, 9, 10]) if (comeOdds[num] > 0) comeOddsOff[num] = false;
		comeOddsOff = comeOddsOff;
		showInform('All your Come Bet Odds have been turned ON.');
		comePtMenu = null;
	}

	function allComeBetOddsDown() {
		if (rolling) return;
		let total = 0;
		for (let num of [4, 5, 6, 8, 9, 10]) { if (comeOdds[num] > 0 || comeOddsWins[num] > 0) { total += comeOdds[num] + comeOddsWins[num]; comeOdds[num] = 0; comeOddsWins[num] = 0; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['comeOdds' + num] = undefined; } }
		comeOdds = comeOdds; comeOddsWins = comeOddsWins; comeOddsOff = comeOddsOff; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn = comeOddsOverrideOn; comeTravelMadePt = comeTravelMadePt; comeMadePtComeout = comeMadePtComeout; chipAngles = chipAngles;
		bankroll += total;
		showInform(total > 0 ? 'All your Come Bet Odds are down. ' + fmt(total) + ' back to the rail.' : 'No Come Bet Odds to take down.');
		comePtMenu = null;
	}

	function resetGame() {
		rollSnapshot = null;
		cancelPopupDelay();
		cancelDcCeremony();
		cancelOverlayWinSequence();
		cancelHornWinSequence();
		cancelAnySevenWinSequence();
		cancelAnyCrapsWinSequence();
		cancelWorldWinSequence();
		cancelCeSplitWinSequence();
		cancelCeCWinSequence();
		cancelCeEWinSequence();
		cancelHhWinSequence();
		cancelPropComboSequence();
		clearPendingDcMenu(); sevenOutFlag = false; comeRailNote = 0;
		bankroll = 1000; bets = { passLine: 0, passOdds: 0, dontPass: 0, dontOdds: 0, field: 0, place4: 0, place5: 0, place6: 0, place8: 0, place9: 0, place10: 0, come: 0, dontCome: 0 }; wins = { passLine: 0, passOdds: 0, dontPass: 0, dontOdds: 0, field: 0, come: 0, dontCome: 0 }; comePts = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; comePtWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; comeOdds = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; comeOddsWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; dontComePts = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; dontComePtWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; dontComeOdds = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; dontComeOddsWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; overlays = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; overlayVigs = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; overlayWins = { 4: 0, 5: 0, 6: 0, 8: 0, 9: 0, 10: 0 }; buys = { place4: false, place10: false }; buyVigTotal = 0; placeLammer = { place4: null, place5: null, place6: null, place8: null, place9: null, place10: null }; placeForeverOff = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false }; placeOnDuringCR = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false }; chipAngles = {}; lammerAngles = {}; buyLammerAngles = {}; offGateBet = null; subMenu = null; subMenuReturn = null; popupReturn = null; payMenu = null; fieldPayMenu = null; fieldSplit = null; comePtMenu = null; dcPtMenu = null; overlayMenu = null; bandChooser = null; comeMovePending = null; comeMoveDecision = null; deferredPayMenu = null; comeDownMenu = null; comeAfterPay = 0; pointChooser = null; dcMovePending = null; dcMoveDecision = null; comeCorner = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeOddsOff = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; inTestRoll = false; comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; pendingComeOddsMenu = 0; comeOddsDeclaredOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeOddsOverrideOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeTravelMadePt = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeMadePtComeout = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comePtMenuChoice = false;
		hornBet = 0; hornWin = 0; hornMenu = false; anySevenBet = 0; anySevenWin = 0; anySevenMenu = false; anyCrapsBet = 0; anyCrapsWin = 0; anyCrapsMenu = false; worldBet = 0; worldWin = 0; worldMenu = false; worldPushPending = false; ceSplitBet = 0; ceSplitWin = 0; ceMenu = false; ceCBet = 0; ceCWin = 0; ceEBet = 0; ceEWin = 0; hhBets = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 }; hhWins = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 }; hhMenu = false; hhInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' }; suBets = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 }; suWins = { aces: 0, aceDeuce: 0, yo: 0, twelve: 0 }; suGroups = []; hopChooser = false; hopSub = null; hopInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' }; splitInputs = { highLow: '', elevenTwelve: '', acesAceDeuce: '', sevenEleven: '' }; multiInputs = { highLowYo: '', threeWayCrap: '' };
		point = 0; diceA = 0; diceB = 0; lastRoll = 0; rolls = 0; pointsMade = 0; popupBet = null; mustBetPopup = false; canShootFromPlace = false; winAfterPoint = { passLine: false, dontPass: false }; winPoint = { passOdds: 0, dontOdds: 0 };
		showInform('New game. Bankroll reset to $1000.'); stickCall = 'Shooter, dice are out. Place your bets.'; messageKind = 'inform';
	}

	function fieldSameBet() { if (!fieldPayMenu) return; bankroll += fieldPayMenu.win; wins.field = 0; wins = wins; showAsk('Same Field bet ' + fmt(fieldPayMenu.bet) + ', ' + fmt(fieldPayMenu.win) + ' to the rail.'); fieldPayMenu = null; }
	function closeFieldMenu() { fieldPayMenu = null; }
	function fieldCollectAll() { if (!fieldPayMenu) return; let total = fieldPayMenu.bet + fieldPayMenu.win; bankroll += total; bets.field = 0; wins.field = 0; chipAngles.field = undefined; bets = bets; wins = wins; showAsk('Collect All, ' + fmt(total) + ' to the rail, Field bet is down.'); fieldSplit = null; fieldPayMenu = null; }
	function fieldStackIt() { if (!fieldPayMenu) return; let total = fieldPayMenu.bet + fieldPayMenu.win; if (total > 5000) { showAlert('Stack It would be over the $5000 Field max.'); return; } bets.field = total; wins.field = 0; assignChipAngles('field'); bets = bets; wins = wins; showAsk('Stack It, Field bet now ' + fmt(total) + '.'); fieldPayMenu = null; }
	function fieldTakeThird() { if (!fieldPayMenu || fieldPayMenu.win !== fieldPayMenu.bet * 2) return; bankroll += fieldPayMenu.bet; bets.field = fieldPayMenu.bet * 2; wins.field = 0; assignChipAngles('field'); bets = bets; wins = wins; showAsk('Take a third, ' + fmt(fieldPayMenu.bet) + ' to the rail, Field bet now ' + fmt(bets.field) + '.'); fieldSplit = { left: fieldPayMenu.bet, right: fieldPayMenu.bet }; fieldPayMenu = null; }
	function fieldRebet(amt) { if (!fieldPayMenu) return; amt = Number(amt); if (!amt || amt < 5) { showAlert('Field minimum is $5.'); return; } if (amt > 5000) { showAlert('Field max is $5000.'); return; } let total = fieldPayMenu.bet + fieldPayMenu.win; if (amt > total + bankroll) { showAlert('Not enough in the rail, even with the Field win, to rebet ' + fmt(amt) + '.'); return; } bankroll += total - amt; bets.field = amt; wins.field = 0; assignChipAngles('field'); bets = bets; wins = wins; showAsk('Rebet Field ' + fmt(amt) + '.'); fieldPayMenu = null; }
	function fieldCustomRebet() { fieldRebet(fieldCustom); }
	function openComePtMenu(num, fromTravel = false) { if (rolling) return; if (ceremonyActive) return; if (!comePts[num]) return; if (pendingComeOddsMenu === num) pendingComeOddsMenu = 0; clearInputErrs(); comeOddsCustom = oddsMinFor(num); comePtMenuChoice = !!comeTravelMadePt[num]; if (comeTravelMadePt[num]) { comeTravelMadePt[num] = false; comeTravelMadePt = comeTravelMadePt; } comePtMenuTravel = fromTravel; comePtMenu = num; }
	function openDcPtMenu(num) { if (rolling) return; if (ceremonyActive) return; clearInputErrs(); if (dontComePts[num] > 0 || dontComeOdds[num] > 0) { bandChooser = num; return; } overlayCustom = overlayUnitFor(num); overlayErr = ''; overlayMenu = num; }
	function chooseBandDc() { if (!bandChooser) return; let n = bandChooser; bandChooser = null; clearInputErrs(); dcOddsCustom = layStepFor(n); dcReduceCustom = ''; dcPtMenu = n; }
	function chooseBandOverlay() { if (!bandChooser) return; let n = bandChooser; bandChooser = null; clearInputErrs(); overlayCustom = overlayUnitFor(n); overlayErr = ''; overlayMenu = n; }
	function bandTakeDownLayOdds() { if (!bandChooser) return; let n = bandChooser; bandChooser = null; pickupDcOdds(n); }
	function bandTakeDownDc() { if (!bandChooser) return; let n = bandChooser; bandChooser = null; pickupDcPt(n); }
	function bandTakeDownOverlay() { if (!bandChooser) return; let n = bandChooser; bandChooser = null; pickupOverlay(n); }
	function placeComeOdds(num, amount, fromTest = false) {
		if (rolling && !fromTest) return false;
		if (!comePts[num]) { showAlert('No Come bet on ' + num + ' to put Odds behind.'); return false; }
		amount = Number(amount);
		if (!amount || amount < oddsMinFor(num)) { showAlert('The min Come Odds bet on ' + num + ' is ' + fmt(oddsMinFor(num)) + '.'); return false; }
		if (amount > oddsMaxFor(num)) { showAlert('Max Come Odds on ' + num + ' is ' + fmt(oddsMaxFor(num)) + '.'); return false; }
		if (bankroll + comeOdds[num] + comeOddsWins[num] < amount) { showAlert('Not enough in the rail for ' + fmt(amount) + ' Come Odds.'); return false; }
		bankroll += comeOdds[num] + comeOddsWins[num]; bankroll -= amount;
		comeOdds[num] = amount; comeOddsWins[num] = 0;
		chipAngles['comeOdds' + num] = stackCheques(amount).map(() => randomAngle()); chipAngles = chipAngles;
		let pay = oddsWinOld(amount, num);
		showInform(fmt(amount) + ' Come Odds on ' + num + '. They pay ' + comeOddsMath(num) + ' and will win ' + fmt(pay) + ' if you roll the ' + num + '.');
		if ((num === 6 || num === 8) && amount % 5 !== 0) showAlert('You should bet Odds in multiples of 5. Every dollar above a multiple of five will get paid even money. Your Odds pay ' + fmt(pay) + '.');
		else if ((num === 5 || num === 9) && amount % 2 === 1) showAlert('Uneven odds will cost you 50 cents when the Point is 5 or 9. Your Odds pay ' + fmt(amount / 2 * 3) + ', but your payment will be rounded down to ' + fmt(pay) + '.');
		comePtMenu = null; return true;
	}
	function pickupComeOdds(num) { if (rolling) return; if (comeOdds[num] > 0 || comeOddsWins[num] > 0) { let total = comeOdds[num] + comeOddsWins[num]; bankroll += total; showInform('Picked up Come Odds ' + fmt(total) + ' to the rail. Come bet stays on ' + num + '.'); comeOdds[num] = 0; comeOddsWins[num] = 0; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn[num] = false; comeOddsOverrideOn = comeOddsOverrideOn; comeTravelMadePt[num] = false; comeTravelMadePt = comeTravelMadePt; comeMadePtComeout[num] = false; comeMadePtComeout = comeMadePtComeout; chipAngles['comeOdds' + num] = undefined; chipAngles = chipAngles; } comePtMenu = null; }
	function pickUpComePtWin(num) { if (comePtWins[num] > 0) { bankroll += comePtWins[num]; showInform('Picked up Come winnings ' + fmt(comePtWins[num]) + ' on ' + num + ', Come bet stays.'); comePtWins[num] = 0; comePtWins = comePtWins; } comePtMenu = null; }
	function collectComeWin() { if (wins.come > 0) { bankroll += wins.come; showInform('Picked up Come winnings ' + fmt(wins.come) + ', Come bet stays.'); wins.come = 0; wins = wins; } closePopup(); }
	function collectComePile() { if (comePile > 0) { bankroll += comePile; showInform('Picked up your money ' + fmt(comePile) + ' from the COME.'); comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; } closePopup(); }
	function collectComePileWinnings() { if (comePile > 0) { let winPart = comePileWin; let betPart = comePileBet; let oddsPart = (!comePileOffAndOn && comePileOdds > 0) ? comePileOdds : 0; let pickedUp = winPart + oddsPart; let stayPart = betPart - oddsPart; bankroll += pickedUp; let room = 5000 - bets.come; if (stayPart > 0) { if (room <= 0) bankroll += stayPart; else if (stayPart > room) { bets.come = 5000; bankroll += stayPart - room; } else bets.come += stayPart; assignChipAngles('come'); } comePile = 0; comePileBet = 0; comePileWin = 0; comePileOffAndOn = false; comePileOrigBet = 0; comePileWinOdds = 0; comePileOffFor = 0; comePileOdds = 0; comePileOddsOff = false; pendingComeMenu = false; bets = bets; showInform('Picked up your winnings ' + fmt(pickedUp) + ' from the COME, your ' + fmt(stayPart) + ' bet stays in the COME.'); } closePopup(); }
	function toggleComeOddsOff(num) { if (rolling) return; if (point === 0) { if (comeOddsWorking(num)) { comeOddsOff[num] = true; comeOddsOff = comeOddsOff; comeOddsDeclaredOn[num] = false; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn[num] = false; comeOddsOverrideOn = comeOddsOverrideOn; showInform('Come Odds on ' + num + ' are OFF, they will not win or lose.'); } else { comeOddsOff[num] = false; comeOddsOff = comeOddsOff; comeOddsDeclaredOn[num] = true; comeOddsDeclaredOn = comeOddsDeclaredOn; showInform('Come Odds on ' + num + ' are ON.'); } comePtMenu = null; return; } comeOddsOff[num] = !comeOddsOff[num]; comeOddsOff = comeOddsOff; if (comeOddsOff[num]) { comeOddsOverrideOn[num] = false; comeOddsOverrideOn = comeOddsOverrideOn; showInform('Come Odds on ' + num + ' are OFF, they will not win or lose.'); } else showInform('Come Odds on ' + num + ' are ON.'); comePtMenu = null; }
	function keepComeOddsOff(num) { comeOddsDeclaredOn[num] = false; comeOddsDeclaredOn = comeOddsDeclaredOn; }
	function turnComeOddsOn(num) { comeOddsDeclaredOn[num] = true; comeOddsDeclaredOn = comeOddsDeclaredOn; }
	function takeDownPlaceForCome(key) {
		if ((bets[key] || 0) <= 0) return { bet: 0 };
		let desiredAfterTakeDown = {};
		for (let k of placeOrderInsideOut) if (k !== key && bets[k] > 0) desiredAfterTakeDown[k] = placeWorking(k);
		let betAmt = bets[key] || 0;
		let wasBuy = buys[key];
		let newOwed = wasBuy ? owedVig(totalBuyAction() - betAmt) : buyVigTotal;
		let bet = betAmt + (wasBuy ? buyVigTotal - newOwed : 0);
		bets[key] = 0; buys[key] = false; buyVigTotal = newOwed;
		placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false;
		chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined;
		bets = bets; placeLammer = placeLammer; placeForeverOff = placeForeverOff; placeOnDuringCR = placeOnDuringCR; chipAngles = chipAngles; lammerAngles = lammerAngles; buyLammerAngles = buyLammerAngles;
		reanchorPlaceLammers(desiredAfterTakeDown); placeLammer = placeLammer;
		return { bet };
	}
	function comeMoveMaxOdds() { if (!comeMoveDecision) return 0; let num = comeMoveDecision.num; let mult = (num === 6 || num === 8) ? 5 : (num === 5 || num === 9) ? 4 : 3; return comeMoveDecision.amount * mult; }
	function setPlaceWorking(key, desired) {
		let beforeWorking = {};
		for (let k of placeOrderInsideOut) if (bets[k] > 0) beforeWorking[k] = placeWorking(k);
		if (desired) placeForeverOff[key] = false;
		else if (point !== 0) placeForeverOff[key] = true;
		else placeForeverOff[key] = placeOnDuringCR[key] ? false : true;
		placeForeverOff = placeForeverOff;
		if (placeWorking(key) !== desired) {
			let desiredMap = {};
			for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredMap[k] = k === key ? desired : placeWorking(k);
			reanchorPlaceLammers(desiredMap);
			markOnDuringCR(beforeWorking);
		}
		if (!desired && placeForeverOff[key] && bets[key] > 0) placeLammer[key] = 'off';
		ensureDisplayLammerAngles();
		placeLammer = placeLammer;
	}
	function openPointBox(num) {
		if (rolling) return;
		if (ceremonyActive) return;
		popupReturn = null;
		let key = 'place' + num;
		if (comePts[num] > 0) { pointChooser = num; return; }
		openPopup(key);
	}
	function openComeDownMenu() {
		if (!comeMoveDecision) return;
		clearInputErrs();
		comeDownCustom = comeDownFirstOption();
		let num = comeMoveDecision.num;
		comeDownMenu = { num, amount: comeMoveDecision.amount, placeBet: bets['place' + num] || 0, placeWin: deferredPayMenu ? deferredPayMenu.win : 0, placeTotal: comeDownPool() };
	}
	function comeDownFirstOption() {
		if (!comeMoveDecision) return 0;
		let num = comeMoveDecision.num; let key = 'place' + num;
		let step = (num === 6 || num === 8) ? 5 : (num === 5 || num === 9) ? 2 : 1;
		let first = Math.floor((bets[key] || 0) / step) * step;
		let min = oddsMinFor(num); let max = comeMoveMaxOdds();
		if (first < min) first = min;
		if (first > max) first = max;
		return first;
	}
	function comeDownPool() {
		if (!comeMoveDecision) return 0;
		let num = comeMoveDecision.num; let key = 'place' + num;
		let netWin = deferredPayMenu ? deferredPayMenu.win : 0;
		let bet = bets[key] || 0;
		let excess = 0;
		if (deferredPayMenu && deferredPayMenu.isBuy) excess = buyVigTotal - owedVig(totalBuyAction() - bet);
		return bet + netWin + excess;
	}
	function comeDownOptions() {
		if (!comeMoveDecision) return [];
		let num = comeMoveDecision.num;
		let step = (num === 6 || num === 8) ? 5 : (num === 5 || num === 9) ? 2 : 1;
		let min = oddsMinFor(num);
		let max = comeMoveMaxOdds();
		let pool = comeDownPool();
		let fundable = pool + bankroll;
		let first = comeDownFirstOption();
		let poolOpt = Math.min(pool, max);
		let map = new Map();
		let add = (amount, label) => { if (!amount || amount < min || amount > max || amount > fundable || amount % step !== 0) return; map.set(amount, label); };
		add(min, '$' + min);
		add(first, '$' + first);
		for (let a of [5, 10, 25, 50, 100, 250, 500]) add(a, '$' + a);
		add(poolOpt, 'Place + win $' + poolOpt);
		add(max, 'Max Odds $' + max);
		return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([amount, label]) => ({ amount, label, isMax: label.startsWith('Max Odds') }));
	}
	function chooseComeDownOdds(amount) {
		if (!comeMoveDecision || !comeDownMenu) return;
		let num = comeMoveDecision.num; let comeAmt = comeMoveDecision.amount;
		let key = 'place' + num;
		amount = Number(amount);
		let min = oddsMinFor(num); let max = comeMoveMaxOdds();
		if (!amount || amount < min) { showAlert('The min Come Odds bet on ' + num + ' is ' + fmt(min) + '.'); return; }
		if (amount > max) { showAlert('Max Come Odds on ' + num + ' is ' + fmt(max) + '.'); return; }
		let pool = comeDownPool();
		if (amount > pool + bankroll) { showAlert('Not enough in the rail for ' + fmt(amount) + ' Come Odds. The Place bet and win cover ' + fmt(pool) + ', you have ' + fmt(bankroll) + ' in the rail.'); return; }
		let netWin = deferredPayMenu ? deferredPayMenu.win : 0;
		let taken = takeDownPlaceForCome(key);
		bankroll += taken.bet + netWin - amount;
		comePts[num] = (comePts[num] || 0) + comeAmt;
		comeOdds[num] = amount; comeOddsWins[num] = 0;
		comeOddsOff[num] = !comeMoveDecision.segWorking; comeOddsOff = comeOddsOff;
		comeOddsOverrideOn[num] = false; comeOddsOverrideOn = comeOddsOverrideOn;
		assignComeAngles(num); chipAngles['comeOdds' + num] = stackCheques(amount).map(() => randomAngle()); chipAngles = chipAngles;
		comeTravelMadePt[num] = false; comeTravelMadePt = comeTravelMadePt; deferredPayMenu = null; comeMovePending = null; comeMoveDecision = null; comeDownMenu = null;
		showInform('Came down with ' + fmt(amount) + ' Odds on the ' + num + '.');
		if ((num === 6 || num === 8) && amount % 5 !== 0) showAlert('You should bet Odds in multiples of 5. Every dollar above a multiple of five will get paid even money. Your Odds pay ' + fmt(oddsWinOld(amount, num)) + '.');
		else if ((num === 5 || num === 9) && amount % 2 === 1) showAlert('Uneven odds will cost you 50 cents when the Point is 5 or 9. Your Odds pay ' + fmt(amount / 2 * 3) + ', but your payment will be rounded down to ' + fmt(oddsWinOld(amount, num)) + '.');
	}
	function chooseComeMoveKeep() {
		if (!comeMoveDecision) return;
		let num = comeMoveDecision.num; let amount = comeMoveDecision.amount;
		comePts[num] = (comePts[num] || 0) + amount;
		assignComeAngles(num);
		comeMovePending = null; comeMoveDecision = null;
		if (deferredPayMenu) { clearInputErrs(); payMenu = deferredPayMenu; payCustom = deferredPayMenu.bet; payBuyAmount = deferredPayMenu.bet; deferredPayMenu = null; comeAfterPay = num; }
		else openComePtMenu(num);
		showInform('Come bet is on the ' + num + ', Place bet stays.');
	}
	function chooseDcMove() {
		if (!dcMoveDecision) return;
		let num = dcMoveDecision.num; let amount = dcMoveDecision.amount;
		dontComePts[num] = (dontComePts[num] || 0) + amount;
		assignDcAngles(num);
		dontComePts = dontComePts;
		showInform("Don't Come is behind the " + numWord(num) + ' for ' + fmt(amount) + '.');
		dcMovePending = null; dcMoveDecision = null;
		scheduleDcTravelMenu(num);
	}
	function chooseDcNoAction() {
		if (!dcMoveDecision) return;
		let num = dcMoveDecision.num; let amount = dcMoveDecision.amount;
		bets.dontCome = (bets.dontCome || 0) + amount;
		bets = bets;
		showInform('No Action on the ' + num + ', DC bet stays.');
		dcMovePending = null; dcMoveDecision = null;
	}
	function chooseDcAlways() { if (!dcMoveDecision) return; dcNoAction68 = 'always'; chooseDcMove(); }
	function chooseDcNever() { if (!dcMoveDecision) return; dcNoAction68 = 'never'; chooseDcNoAction(); }
	function placeDcOdds(num, amount, fromTest = false) {
		if (rolling && !fromTest) return false;
		if (!dontComePts[num]) { showAlert("No Don't Come bet behind " + num + ' to lay Odds behind.'); return false; }
		amount = Number(amount);
		if (!amount || amount < layStepFor(num) || amount % layStepFor(num) !== 0) { showAlert('Lay Odds behind ' + num + ' must be in ' + fmt(layStepFor(num)) + ' increments.'); return false; }
		if (amount > layMaxFor(num)) { showAlert('Max Lay behind ' + num + ' is ' + fmt(layMaxFor(num)) + ', to win ' + fmt(layWinFor(layMaxFor(num), num)) + '.'); return false; }
		if (bankroll + dontComeOdds[num] + dontComeOddsWins[num] < amount) { showAlert('Not enough in the rail for ' + fmt(amount) + ' Lay Odds.'); return false; }
		bankroll += dontComeOdds[num] + dontComeOddsWins[num]; bankroll -= amount;
		dontComeOdds[num] = amount; dontComeOddsWins[num] = 0;
		chipAngles['dcOdds' + num] = stackCheques(amount).map(() => randomAngle()); chipAngles = chipAngles;
		showInform(fmt(amount) + ' Lay Odds behind ' + num + '. That lay wins ' + fmt(layWinFor(amount, num)) + ' if a 7 rolls before the ' + num + '.');
		dcPtMenu = null; return true;
	}
	function pickupDcOdds(num) { if (rolling) return; if (dontComeOdds[num] > 0 || dontComeOddsWins[num] > 0) { let total = dontComeOdds[num] + dontComeOddsWins[num]; bankroll += total; showInform('Picked up Lay Odds ' + fmt(total) + ' to the rail. ' + "Don't Come bet stays behind " + num + '.'); dontComeOdds[num] = 0; dontComeOddsWins[num] = 0; chipAngles['dcOdds' + num] = undefined; chipAngles = chipAngles; } dcPtMenu = null; }
	function pickUpDcPtWin(num) { if (dontComePtWins[num] > 0) { bankroll += dontComePtWins[num]; showInform("Picked up Don't Come winnings " + fmt(dontComePtWins[num]) + ' behind ' + num + ', bet stays.'); dontComePtWins[num] = 0; dontComePtWins = dontComePtWins; } dcPtMenu = null; }
	function reduceDcPt(num, amount) {
		if (rolling) return;
		amount = Math.floor(Number(amount));
		if (!amount || amount < 5) { showAlert('Table minimum is $5.'); return; }
		if (amount >= dontComePts[num]) { showAlert('Your Don\'t Come bet behind ' + num + ' is ' + fmt(dontComePts[num]) + ' now. Enter a smaller amount to reduce it.'); return; }
		let back = dontComePts[num] - amount;
		bankroll += back;
		dontComePts[num] = amount; dontComePts = dontComePts;
		let layNote = '';
		if (dontComeOddsWins[num] === 0 && dontComeOdds[num] > layMaxFor(num)) { let layBack = dontComeOdds[num] - layMaxFor(num); bankroll += layBack; dontComeOdds[num] = layMaxFor(num); dontComeOdds = dontComeOdds; chipAngles['dcOdds' + num] = stackCheques(dontComeOdds[num]).map(() => randomAngle()); chipAngles = chipAngles; layNote = ' Lay Odds dropped to ' + fmt(dontComeOdds[num]) + ', ' + fmt(layBack) + ' back to the rail.'; }
		assignDcAngles(num);
		dcReduceCustom = ''; dcReduceErr = '';
		showInform('Reduced your Don\'t Come bet behind ' + num + ' to ' + fmt(amount) + '. ' + fmt(back) + ' back to the rail.' + layNote);
	}
	function pickupDcPt(num) { if (rolling) return; let total = dontComePts[num] + dontComeOdds[num] + dontComePtWins[num] + dontComeOddsWins[num]; if (total <= 0) return; bankroll += total; showInform("Picked up your Don't Come bet behind " + num + ', ' + fmt(total) + ' back to the rail.'); dontComePts[num] = 0; dontComeOdds[num] = 0; dontComePtWins[num] = 0; dontComeOddsWins[num] = 0; dontComePts = dontComePts; dontComeOdds = dontComeOdds; dontComePtWins = dontComePtWins; dontComeOddsWins = dontComeOddsWins; chipAngles['dc' + num] = undefined; chipAngles['dcOdds' + num] = undefined; chipAngles = chipAngles; dcPtMenu = null; }
	function placeOverlayLay(num, lay, fromTest = false) {
		if (rolling && !fromTest) return false;
		lay = Number(lay);
		let problem = overlayLayProblem(lay, num);
		if (problem) { if (fromTest) showAlert(problem); else overlayErr = problem; return false; }
		let win = overlayWinFor(lay, num); let vig = overlayVigFor(lay, num); let total = lay + vig;
		if (bankroll + overlays[num] + overlayVigs[num] + overlayWins[num] < total) { showAlert('Not enough in the rail for a ' + fmt(total) + ' Overlay.'); return false; }
		bankroll += overlays[num] + overlayVigs[num] + overlayWins[num]; bankroll -= total;
		overlays[num] = lay; overlayVigs[num] = vig; overlayWins[num] = 0;
		overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins;
		chipAngles['overlay' + num] = stackCheques(lay).map(() => randomAngle()); chipAngles = chipAngles;
		showInform('Overlay on the ' + num + ': laid ' + fmt(lay) + ' to win ' + fmt(win) + ', ' + fmt(vig) + ' vig, ' + fmt(total) + ' handed over.');
		overlayMenu = null; bandChooser = null; return true;
	}
	function placeOverlay(num, total, fromTest = false) {
		if (rolling && !fromTest) return false;
		total = Number(total);
		let split = overlaySplit(total, num);
		if (!split) { showAlert('No Overlay total of ' + fmt(total) + ' on the ' + num + '. A total is a lay plus its vig: the minimum is lay ' + fmt(overlayUnitFor(num)) + ' to win $20 with $1 vig, ' + fmt(overlayUnitFor(num) + 1) + ' total.'); return false; }
		return placeOverlayLay(num, split.lay, fromTest);
	}
	function pickupOverlayWin(num) { if (rolling) return; if (overlayWins[num] > 0) { let win = overlayWins[num]; let vig = overlayVigFor(overlays[num], num); bankroll += win; if (bankroll >= vig) { bankroll -= vig; overlayVigs[num] = vig; overlayVigs = overlayVigs; overlayWins[num] = 0; overlayWins = overlayWins; showInform('Picked up Overlay winnings ' + fmt(win) + ' on the ' + num + '. Dropped ' + fmt(vig) + ' to keep the Overlay up to win again.'); } else { bankroll += overlays[num]; showInform('Picked up Overlay winnings ' + fmt(win) + ' on the ' + num + ', but the rail could not cover the ' + fmt(vig) + ' drop, so the Overlay came down. ' + fmt(overlays[num] + win) + ' back to the rail.'); overlays[num] = 0; overlayVigs[num] = 0; overlayWins[num] = 0; overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles['overlay' + num] = undefined; chipAngles = chipAngles; } } overlayMenu = null; }
	function pickupOverlay(num) { if (rolling) return; if (overlays[num] <= 0 && overlayWins[num] <= 0) return; let won = overlayWins[num] > 0; let vigBack = won ? 0 : overlayVigs[num]; let total = overlays[num] + overlayWins[num] + vigBack; bankroll += total; showInform('Picked up your Overlay on ' + num + ', ' + fmt(total) + ' back to the rail.' + (won && overlayVigFor(overlays[num], num) > 0 ? ' The ' + fmt(overlayVigFor(overlays[num], num)) + ' vig stays with the house on a win.' : '')); overlays[num] = 0; overlayVigs[num] = 0; overlayWins[num] = 0; overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles['overlay' + num] = undefined; chipAngles = chipAngles; overlayMenu = null; bandChooser = null; }
	function assignHornAngles() { chipAngles['horn'] = stackCheques(hornBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function openHornMenu() { if (rolling) return; clearInputErrs(); hornCustom = ''; hornMenu = true; }
	function placeHorn(amt, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		amt = Number(amt);
		if (!amt || amt <= 0) return false;
		if (amt > 5000) { showAlert('Table max on the Horn is $5000.'); return false; }
		if (bankroll + hornBet + hornWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on the Horn.'); return false; }
		let oldBet = hornBet; let oldWin = hornWin;
		if (oldWin > 0) { bankroll += oldWin; hornWin = 0; }
		cancelHornWinSequence();
		cancelPropComboSequence();
		bankroll += oldBet; bankroll -= amt;
		hornBet = amt;
		assignHornAngles();
		showAsk(oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' Horn bet with ' + fmt(amt) + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amt) + ' on the Horn.');
		hornMenu = false;
		return true;
	}
	function onHornInput(e) { let v = Number(e.target.value); if (v > 5000) { hornCustom = 5000; e.target.value = 5000; hornErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (hornErr) hornErr = ''; }
	function placeHornCustom() {
		if (rolling) return;
		let amt = Number(hornCustom);
		if (!amt || amt < 4) { hornErr = 'Minimum Horn bet is $4.'; return; }
		if (amt % 4 !== 0) { hornErr = 'Horn bets go in $4 steps, so each number gets its share.'; return; }
		hornErr = '';
		placeHorn(amt);
	}
	function takeDownHorn() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (hornBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); hornMenu = false; } return; }
		let total = hornBet + hornWin;
		bankroll += total;
		showInform('Took down your Horn bet. ' + fmt(total) + ' back to the rail.' + (hornWin > 0 ? ' That includes your ' + fmt(hornWin) + ' win.' : ''));
		hornBet = 0; hornWin = 0; chipAngles['horn'] = undefined; chipAngles = chipAngles;
		cancelHornWinSequence();
		cancelPropComboSequence();
		hornMenu = false;
	}
	function takeDownAllProps() {
		if (rolling) return;
		sweepPropComboLosers();
		let total = 0;
		if (hornBet > 0 || hornWin > 0) { total += hornBet + hornWin; hornBet = 0; hornWin = 0; chipAngles['horn'] = undefined; chipAngles = chipAngles; }
		if (anySevenBet > 0 || anySevenWin > 0) { total += anySevenBet + anySevenWin; anySevenBet = 0; anySevenWin = 0; chipAngles['anySeven'] = undefined; chipAngles = chipAngles; }
		if (anyCrapsBet > 0 || anyCrapsWin > 0) { total += anyCrapsBet + anyCrapsWin; anyCrapsBet = 0; anyCrapsWin = 0; chipAngles['anyCraps'] = undefined; chipAngles = chipAngles; }
		if (worldBet > 0 || worldWin > 0) { total += worldBet + worldWin; worldBet = 0; worldWin = 0; chipAngles['world'] = undefined; chipAngles = chipAngles; }
		if (ceSplitBet > 0 || ceSplitWin > 0) { total += ceSplitBet + ceSplitWin; ceSplitBet = 0; ceSplitWin = 0; chipAngles['ceSplit'] = undefined; chipAngles = chipAngles; }
		if (ceCBet > 0 || ceCWin > 0) { total += ceCBet + ceCWin; ceCBet = 0; ceCWin = 0; chipAngles['ceC'] = undefined; chipAngles = chipAngles; }
		if (ceEBet > 0 || ceEWin > 0) { total += ceEBet + ceEWin; ceEBet = 0; ceEWin = 0; chipAngles['ceE'] = undefined; chipAngles = chipAngles; }
		for (let d of hhDefs) { if (hhBets[d.key] > 0 || hhWins[d.key] > 0) { total += hhBets[d.key] + hhWins[d.key]; hhBets[d.key] = 0; hhWins[d.key] = 0; chipAngles[d.propKey] = undefined; } }
		hhBets = hhBets; hhWins = hhWins;
		for (let d of suDefs) { if (suBets[d.key] > 0 || suWins[d.key] > 0) { total += suBets[d.key] + suWins[d.key]; suBets[d.key] = 0; suWins[d.key] = 0; chipAngles['su' + d.key] = undefined; } }
		suBets = suBets; suWins = suWins; chipAngles = chipAngles;
		suGroups = [];
		if (total <= 0) return;
		bankroll += total;
		showInform('All your proposition bets are down. ' + fmt(total) + ' back to the rail.');
		cancelHornWinSequence();
		cancelAnySevenWinSequence();
		cancelAnyCrapsWinSequence();
		cancelWorldWinSequence();
		cancelCeSplitWinSequence();
		cancelCeCWinSequence();
		cancelCeEWinSequence();
		cancelHhWinSequence();
		cancelPropComboSequence();
		hornMenu = false; hhMenu = false; anySevenMenu = false; anyCrapsMenu = false; worldMenu = false; ceMenu = false; hopChooser = false; hopSub = null;
	}
	function assignWorldAngles() { chipAngles['world'] = stackCheques(worldBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function openWorldMenu() { if (rolling) return; clearInputErrs(); worldCustom = ''; worldMenu = true; }
	function openHopChooser() { if (rolling) return; clearInputErrs(); hopErr = ''; hopClampErr = ''; splitErr = ''; splitClampErrs = {}; multiErr = ''; multiClampErrs = {}; hopInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' }; splitInputs = { highLow: '', elevenTwelve: '', acesAceDeuce: '', sevenEleven: '' }; multiInputs = { highLowYo: '', threeWayCrap: '' }; hopSub = null; hopChooser = true; }
	function closeHopMenus() { hopChooser = false; hopSub = null; }
	function backToHopMain() { hopSub = null; splitErr = ''; multiErr = ''; }
	function openHopSub(which) { hopErr = ''; splitErr = ''; multiErr = ''; hopSub = which; }
	function suDef(key) { return suDefs.find((d) => d.key === key); }
	function suName(key) { return suDef(key).name; }
	function suWinFor(key, stake, total) { let d = suDef(key); return total === d.total ? stake * d.mult : 0; }
	function railStraightUpWins() { let any = false; for (let d of suDefs) { if (suWins[d.key] > 0) { bankroll += suWins[d.key]; suWins[d.key] = 0; any = true; } } if (any) suWins = suWins; }
	function assignSuAngles(key) { chipAngles['su' + key] = stackCheques(suBets[key]).map(() => randomAngle()); chipAngles = chipAngles; }
	function hopEntriesFrom(inputs) { let out = []; for (let d of suDefs) { let v = Math.floor(Number(inputs[d.key])); if (v >= 1) out.push({ key: d.key, amt: Math.min(v, 5000) }); } return out; }
	function joinBetList(parts) { if (parts.length === 0) return ''; if (parts.length === 1) return parts[0]; if (parts.length === 2) return parts[0] + ' and ' + parts[1]; return parts.slice(0, -1).join(', ') + ', and ' + parts[parts.length - 1]; }
	function hopBetButtonLabel(inputs) { let entries = hopEntriesFrom(inputs); if (entries.length === 0) return 'Bet Straight Up'; return 'Bet ' + joinBetList(entries.map((e) => fmt(e.amt) + ' ' + suName(e.key))); }
	function hopCurrentText(betsObj) { let parts = []; for (let d of suDefs) { if (betsObj[d.key] > 0) parts.push(fmt(betsObj[d.key]) + ' ' + d.name); } return parts.join(', ') + '.'; }
	function hopRowAmt(raw) { let v = Math.floor(Number(raw)); return v >= 1 ? Math.min(v, 5000) : 0; }
	function splitRowLabel(row, raw) { let amt = hopRowAmt(raw); return amt >= 1 ? 'Bet ' + fmt(amt) + ' Each ' + row.title : 'Bet Each ' + row.title; }
	function multiRowLabel(row, raw) { let amt = hopRowAmt(raw); return amt >= 1 ? 'Bet ' + fmt(amt) + ' Each ' + row.title : 'Bet Each ' + row.title; }
	function onHopInput(key, e) { let v = Number(e.target.value); if (v > 5000) { hopInputs[key] = 5000; e.target.value = 5000; hopClampErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (hopClampErr) hopClampErr = ''; hopInputs = hopInputs; hopErr = ''; }
	function onSplitRowInput(id, e) { let v = Number(e.target.value); if (v > 5000) { splitInputs[id] = 5000; e.target.value = 5000; splitClampErrs[id] = 'Max on this bet is ' + fmt(5000) + '.'; } else if (splitClampErrs[id]) splitClampErrs[id] = ''; splitInputs = splitInputs; splitClampErrs = splitClampErrs; splitErr = ''; }
	function onMultiRowInput(id, e) { let v = Number(e.target.value); if (v > 5000) { multiInputs[id] = 5000; e.target.value = 5000; multiClampErrs[id] = 'Max on this bet is ' + fmt(5000) + '.'; } else if (multiClampErrs[id]) multiClampErrs[id] = ''; multiInputs = multiInputs; multiClampErrs = multiClampErrs; multiErr = ''; }
	function focusHopInput(key) { if (typeof document !== 'undefined') { let el = document.getElementById('hop-in-' + key); if (el) { el.focus(); if (el.select) el.select(); } } }
	function compStakeOf(comp) { return comp === 'anySeven' ? anySevenBet : suBets[comp]; }
	function compWinOf(comp) { return comp === 'anySeven' ? anySevenWin : suWins[comp]; }
	function grpRowFor(id) { return splitRowDefs.find((r) => r.id === id) || multiRowDefs.find((r) => r.id === id) || null; }
	function grpKeyOf(id) { return 'grp:' + id; }
	function grpIdOf(key) { return key.slice(4); }
	function grpPartsOf(key) { let row = grpRowFor(grpIdOf(key)); return row ? row.comps : []; }
	function groupCovering(comp) { return suGroups.find((g) => g.parts.includes(comp)) || null; }
	function isGroupedComp(comp) { return !!groupCovering(comp); }
	function registerSuGroup(row, each) { suGroups = suGroups.filter((g) => g.id !== row.id && !g.parts.some((c) => row.comps.includes(c))); suGroups.push({ id: row.id, title: row.title, parts: row.comps.slice(), each: each }); suGroups = suGroups; }
	function removeSuGroup(id) { suGroups = suGroups.filter((g) => g.id !== id); suGroups = suGroups; }
	function dissolveGroupsCovering(comp) { if (suGroups.some((g) => g.parts.includes(comp))) { suGroups = suGroups.filter((g) => !g.parts.includes(comp)); suGroups = suGroups; } }
	function setCompStake(comp, v) { if (comp === 'anySeven') anySevenBet = v; else { suBets[comp] = v; suBets = suBets; } }
	function setCompWin(comp, v) { if (comp === 'anySeven') anySevenWin = v; else { suWins[comp] = v; suWins = suWins; } }
	function grpStakeOf(key) { let t = 0; for (let c of grpPartsOf(key)) t += compStakeOf(c); return t; }
	function grpWinOf(key) { let t = 0; for (let c of grpPartsOf(key)) t += compWinOf(c); return t; }
	function grpSetBet(key, total) { let parts = grpPartsOf(key); if (parts.length === 0) return; let each = total / parts.length; for (let c of parts) setCompStake(c, each); }
	function grpSetWin(key, v) { for (let c of grpPartsOf(key)) setCompWin(c, v); }
	function grpAssignAngles(key) { for (let c of grpPartsOf(key)) { if (c === 'anySeven') assignAnySevenAngles(); else assignSuAngles(c); } }
	function grpClearAngles(key) { for (let c of grpPartsOf(key)) { if (c === 'anySeven') chipAngles['anySeven'] = undefined; else chipAngles['su' + c] = undefined; } chipAngles = chipAngles; }
	function groupWinFor(g, total) { for (let c of g.parts) { if (c === 'anySeven') { if (total === 7) return true; } else if (suWinFor(c, g.each, total) > 0) return true; } return false; }
	function reconcileSuGroups() { let kept = suGroups.filter((g) => g.parts.every((c) => compStakeOf(c) === g.each)); if (kept.length !== suGroups.length) { suGroups = kept; suGroups = suGroups; } }
	function grpPressTargets(entry) { let n = entry.parts.length; return anyPressTargets(entry.each, entry.net, bankroll).map((p) => ({ target: p.target * n, inc: p.inc * n })); }
	function grpPressTargetsLoser(entry, grossWins, rail) { let n = entry.parts.length; let limit = entry.stake + grossWins + rail; let out = []; if (entry.each <= 25) { for (let inc of [1, 5, 10, 25]) { let t = entry.each + inc; if (t <= 5000 && t * n <= limit) out.push({ target: t * n, inc: inc * n }); } return out; } for (let m of [2, 3, 4, 5]) { let t = entry.each * m; if (t <= 5000 && t * n <= limit) out.push({ target: t * n, inc: 0 }); } return out; }
	function applyGroupOutcome(e, type, target) { if (!e.group) return; if (type === 'down') { removeSuGroup(e.id); return; } if (type === 'target') { let g = suGroups.find((x) => x.id === e.id); if (g) { g.each = target / e.parts.length; suGroups = suGroups; } } }
	function placePropEntries(entries, needTotal, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		let total = 0; for (let e of entries) total += e.amt;
		let need = (typeof needTotal === 'number' && needTotal > total) ? needTotal : total;
		let avail = bankroll; for (let e of entries) avail += compStakeOf(e.comp) + compWinOf(e.comp);
		if (avail < need) return false;
		cancelPropComboSequence();
		for (let e of entries) {
			if (e.comp === 'anySeven') {
				if (anySevenWin > 0) { bankroll += anySevenWin; anySevenWin = 0; }
				cancelAnySevenWinSequence();
				bankroll += anySevenBet; bankroll -= e.amt;
				anySevenBet = e.amt;
				assignAnySevenAngles();
			} else {
				if (suWins[e.comp] > 0) { bankroll += suWins[e.comp]; suWins[e.comp] = 0; }
				bankroll += suBets[e.comp]; bankroll -= e.amt;
				suBets[e.comp] = e.amt;
				assignSuAngles(e.comp);
			}
		}
		suBets = suBets; suWins = suWins;
		return true;
	}
	function filledSplitRows(inputs) { return splitRowDefs.filter((r) => hopRowAmt(inputs[r.id]) >= 1).map((r) => ({ row: r, amt: hopRowAmt(inputs[r.id]) })); }
	function filledMultiRows(inputs) { return multiRowDefs.filter((r) => hopRowAmt(inputs[r.id]) >= 1).map((r) => ({ row: r, amt: hopRowAmt(inputs[r.id]) })); }
	function submitEntriesFor(filled) { let seen = {}; let order = []; for (let f of filled) { for (let c of f.row.comps) { if (!(c in seen)) order.push(c); seen[c] = f.amt; } } return order.map((c) => ({ comp: c, amt: seen[c] })); }
	function placeStraightUpGroup(entries, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		let total = 0; for (let e of entries) total += e.amt;
		let avail = bankroll; for (let e of entries) avail += suBets[e.key] + suWins[e.key];
		if (avail < total) return false;
		cancelPropComboSequence();
		for (let e of entries) {
			if (suWins[e.key] > 0) { bankroll += suWins[e.key]; suWins[e.key] = 0; }
			bankroll += suBets[e.key]; bankroll -= e.amt;
			suBets[e.key] = e.amt;
			assignSuAngles(e.key);
		}
		suBets = suBets; suWins = suWins;
		return true;
	}
	function placeHopMain() {
		if (rolling) return;
		let entries = hopEntriesFrom(hopInputs);
		if (entries.length === 0) return;
		if (!placeStraightUpGroup(entries)) { let total = entries.reduce((a, e) => a + e.amt, 0); hopErr = 'That needs ' + fmt(total) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		hopErr = '';
		for (let e of entries) dissolveGroupsCovering(e.key);
		showAsk('Bet ' + joinBetList(entries.map((e) => fmt(e.amt) + ' ' + suName(e.key))) + '.');
		hopChooser = false; hopSub = null;
	}
	function placeSplitRow(row) {
		if (rolling) return;
		let amt = hopRowAmt(splitInputs[row.id]);
		if (!(amt >= 1)) return;
		let entries = row.comps.map((c) => ({ comp: c, amt: amt }));
		if (!placePropEntries(entries)) { splitErr = 'That needs ' + fmt(amt * row.comps.length) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		splitErr = '';
		for (let c of row.comps) dissolveGroupsCovering(c);
		registerSuGroup(row, amt);
		showAsk('Bet ' + fmt(amt) + ' Each ' + row.title + '.');
		hopChooser = false; hopSub = null;
	}
	function placeMultiRow(row) {
		if (rolling) return;
		let amt = hopRowAmt(multiInputs[row.id]);
		if (!(amt >= 1)) return;
		let entries = row.comps.map((c) => ({ comp: c, amt: amt }));
		if (!placePropEntries(entries)) { multiErr = 'That needs ' + fmt(amt * row.comps.length) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		multiErr = '';
		for (let c of row.comps) dissolveGroupsCovering(c);
		registerSuGroup(row, amt);
		showAsk('Bet ' + fmt(amt) + ' Each ' + row.title + '.');
		hopChooser = false; hopSub = null;
	}
	function placeSplitSubmit() {
		if (rolling) return;
		let filled = filledSplitRows(splitInputs);
		if (filled.length === 0) return;
		let gross = 0; for (let f of filled) gross += f.amt * f.row.comps.length;
		if (!placePropEntries(submitEntriesFor(filled), gross)) { splitErr = 'That needs ' + fmt(gross) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		splitErr = '';
		let seenSplit = {}; for (let f of filled) for (let c of f.row.comps) seenSplit[c] = f.amt;
		for (let f of filled) for (let c of f.row.comps) dissolveGroupsCovering(c);
		for (let f of filled) if (f.row.comps.every((c) => seenSplit[c] === f.amt)) registerSuGroup(f.row, f.amt);
		showAsk('Bet ' + joinBetList(filled.map((f) => fmt(f.amt) + ' Each ' + f.row.title)) + '.');
		hopChooser = false; hopSub = null;
	}
	function placeMultiSubmit() {
		if (rolling) return;
		let filled = filledMultiRows(multiInputs);
		if (filled.length === 0) return;
		let gross = 0; for (let f of filled) gross += f.amt * f.row.comps.length;
		if (!placePropEntries(submitEntriesFor(filled), gross)) { multiErr = 'That needs ' + fmt(gross) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		multiErr = '';
		let seenMulti = {}; for (let f of filled) for (let c of f.row.comps) seenMulti[c] = f.amt;
		for (let f of filled) for (let c of f.row.comps) dissolveGroupsCovering(c);
		for (let f of filled) if (f.row.comps.every((c) => seenMulti[c] === f.amt)) registerSuGroup(f.row, f.amt);
		showAsk('Bet ' + joinBetList(filled.map((f) => fmt(f.amt) + ' Each ' + f.row.title)) + '.');
		hopChooser = false; hopSub = null;
	}
	function takeDownStraightUp(key) {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (suBets[key] <= 0) { if (hadPropCombo) cancelPropComboSequence(); return; }
		let win = suWins[key];
		let total = suBets[key] + win;
		bankroll += total;
		showInform('Took down your ' + suName(key) + ' bet. ' + fmt(total) + ' back to the rail.' + (win > 0 ? ' That includes your ' + fmt(win) + ' win.' : ''));
		suBets[key] = 0; suWins[key] = 0; suBets = suBets; suWins = suWins; chipAngles['su' + key] = undefined; chipAngles = chipAngles;
		dissolveGroupsCovering(key);
		cancelPropComboSequence();
	}
	function resolveStraightUps(total, deferGroups) {
		for (let d of suDefs) {
			if (suBets[d.key] === 0) continue;
			let w = suWinFor(d.key, suBets[d.key], total);
			if (w > 0) { suWins[d.key] = w; message = message ? message + ' ' + d.name + ' won ' + fmt(w) + '.' : d.name + ' won ' + fmt(w) + '.'; }
			else if (deferGroups && isGroupedComp(d.key)) { message = message ? message + ' ' + d.name + ' loses on ' + total + '.' : d.name + ' loses on ' + total + '.'; }
			else { message = message ? message + ' ' + d.name + ' loses on ' + total + '.' : d.name + ' loses on ' + total + '.'; suBets[d.key] = 0; suWins[d.key] = 0; chipAngles['su' + d.key] = undefined; }
		}
		suBets = suBets; suWins = suWins; chipAngles = chipAngles;
	}
	function placeWorld(amt, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		amt = Number(amt);
		if (!amt || amt <= 0) return false;
		if (amt > 5000) { showAlert('Table max on the World is $5000.'); return false; }
		if (bankroll + worldBet + worldWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on the World.'); return false; }
		let oldBet = worldBet; let oldWin = worldWin;
		if (oldWin > 0) { bankroll += oldWin; worldWin = 0; }
		cancelWorldWinSequence();
		cancelPropComboSequence();
		bankroll += oldBet; bankroll -= amt;
		worldBet = amt;
		assignWorldAngles();
		showAsk(oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' World bet with ' + fmt(amt) + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amt) + ' on the World.');
		worldMenu = false;
		return true;
	}
	function onWorldInput(e) { let v = Number(e.target.value); if (v > 5000) { worldCustom = 5000; e.target.value = 5000; worldErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (worldErr) worldErr = ''; }
	function placeWorldCustom() {
		if (rolling) return;
		let amt = Number(worldCustom);
		if (!amt || amt < 5) { worldErr = 'Minimum World bet is $5.'; return; }
		if (amt % 5 !== 0) { worldErr = 'World bets go in $5 steps.'; return; }
		worldErr = '';
		placeWorld(amt);
	}
	function takeDownWorld() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (worldBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); worldMenu = false; } return; }
		let total = worldBet + worldWin;
		bankroll += total;
		showInform('Took down your World bet. ' + fmt(total) + ' back to the rail.' + (worldWin > 0 ? ' That includes your ' + fmt(worldWin) + ' win.' : ''));
		worldBet = 0; worldWin = 0; chipAngles['world'] = undefined; chipAngles = chipAngles;
		cancelWorldWinSequence();
		cancelPropComboSequence();
		worldMenu = false;
	}
	function assignCeSplitAngles() { chipAngles['ceSplit'] = stackCheques(ceSplitBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function assignCeCAngles() { chipAngles['ceC'] = stackCheques(ceCBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function assignCeEAngles() { chipAngles['ceE'] = stackCheques(ceEBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function openCeMenu() { if (rolling) return; clearInputErrs(); ceSplitCustom = ''; ceEInput = ''; ceCInput = ''; ceMenu = true; }
	function focusCeInput(which) { if (typeof document !== 'undefined') { let el = document.getElementById('ce-in-' + which); if (el) { el.focus(); if (el.select) el.select(); } } }
	function ceCurrentText() { let parts = []; if (ceSplitBet > 0) parts.push(fmt(ceSplitBet) + ' C & E Split'); if (ceEBet > 0) parts.push(fmt(ceEBet) + ' E'); if (ceCBet > 0) parts.push(fmt(ceCBet) + ' C'); return parts.join(', ') + '.'; }
	function onCeSplitInput(e) { let v = Number(e.target.value); if (v > 5000) { ceSplitCustom = 5000; e.target.value = 5000; ceSplitErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (ceSplitErr) ceSplitErr = ''; }
	function placeCeSplit(amt, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		amt = Number(amt);
		if (!amt || amt <= 0) return false;
		if (amt > 5000) { showAlert('Table max on the C & E Split is $5000.'); return false; }
		if (bankroll + ceSplitBet + ceSplitWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on the C & E Split.'); return false; }
		let oldBet = ceSplitBet; let oldWin = ceSplitWin;
		if (oldWin > 0) { bankroll += oldWin; ceSplitWin = 0; }
		cancelCeSplitWinSequence();
		cancelPropComboSequence();
		bankroll += oldBet; bankroll -= amt;
		ceSplitBet = amt;
		assignCeSplitAngles();
		showAsk(oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' C & E Split bet with ' + fmt(amt) + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amt) + ' on the C & E Split.');
		ceMenu = false;
		return true;
	}
	function placeCeSplitCustom() {
		if (rolling) return;
		let amt = Number(ceSplitCustom);
		if (!amt || amt < 2) { ceSplitErr = 'Minimum C & E split bet is $2.'; return; }
		if (Math.round(amt * 100) % 50 !== 0) { ceSplitErr = 'C & E split bets go in 50 cent steps, so each side gets its share.'; return; }
		ceSplitErr = '';
		placeCeSplit(amt);
	}
	function cePairAmtE(raw) { let v = Math.floor(Number(raw)); return v >= 1 ? Math.min(v, 5000) : 0; }
	function cePairAmtC(raw) { let v = Math.floor(Number(raw)); return v >= 1 ? Math.min(v, 5000) : 0; }
	function cePairButtonLabel(eRaw, cRaw) { let e = cePairAmtE(eRaw); let c = cePairAmtC(cRaw); if (e >= 1 && c >= 1) return 'Bet ' + fmt(e) + ' on the E and ' + fmt(c) + ' on the C'; if (e >= 1) return 'Bet ' + fmt(e) + ' on the E'; if (c >= 1) return 'Bet ' + fmt(c) + ' on the C'; return 'Bet the C and E'; }
	function onCeEInput(e) { let v = Number(e.target.value); if (v > 5000) { ceEInput = 5000; e.target.value = 5000; cePairErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (cePairErr) cePairErr = ''; }
	function onCeCInput(e) { let v = Number(e.target.value); if (v > 5000) { ceCInput = 5000; e.target.value = 5000; cePairErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (cePairErr) cePairErr = ''; }
	function placeCePair() {
		if (rolling) return;
		sweepPropComboLosers();
		let eAmt = cePairAmtE(ceEInput); let cAmt = cePairAmtC(ceCInput);
		if (eAmt < 1 && cAmt < 1) return;
		if (eAmt >= 1 && eAmt === cAmt) {
			let add = eAmt + cAmt;
			if (ceSplitBet + add > 5000) { cePairErr = 'That would take the C & E Split over the $5000 max.'; return; }
			let convAvail = bankroll + ceEBet + ceEWin + ceCBet + ceCWin;
			if (convAvail < add) { cePairErr = 'That needs ' + fmt(add) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
			cePairErr = '';
			if (ceEWin > 0) { bankroll += ceEWin; ceEWin = 0; }
			if (ceCWin > 0) { bankroll += ceCWin; ceCWin = 0; }
			if (ceSplitWin > 0) { bankroll += ceSplitWin; ceSplitWin = 0; }
			cancelCeEWinSequence(); cancelCeCWinSequence(); cancelCeSplitWinSequence();
			cancelPropComboSequence();
			bankroll += ceEBet + ceCBet; bankroll -= add;
			ceEBet = 0; ceCBet = 0; chipAngles['ceE'] = undefined; chipAngles['ceC'] = undefined;
			ceSplitBet += add;
			assignCeSplitAngles();
			chipAngles = chipAngles;
			showAsk('Bet ' + fmt(add) + ' on the C & E Split.');
			ceMenu = false;
			return;
		}
		let total = eAmt + cAmt;
		let avail = bankroll + ceEBet + ceEWin + ceCBet + ceCWin;
		if (avail < total) { cePairErr = 'That needs ' + fmt(total) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		cePairErr = '';
		if (ceEWin > 0) { bankroll += ceEWin; ceEWin = 0; }
		if (ceCWin > 0) { bankroll += ceCWin; ceCWin = 0; }
		cancelCeEWinSequence(); cancelCeCWinSequence();
		cancelPropComboSequence();
		bankroll += ceEBet + ceCBet; bankroll -= total;
		ceEBet = eAmt; ceCBet = cAmt;
		if (ceEBet > 0) assignCeEAngles(); else chipAngles['ceE'] = undefined;
		if (ceCBet > 0) assignCeCAngles(); else chipAngles['ceC'] = undefined;
		chipAngles = chipAngles;
		showAsk(eAmt >= 1 && cAmt >= 1 ? 'Bet ' + fmt(eAmt) + ' on the E and ' + fmt(cAmt) + ' on the C.' : eAmt >= 1 ? 'Bet ' + fmt(eAmt) + ' on the E.' : 'Bet ' + fmt(cAmt) + ' on the C.');
		ceMenu = false;
	}
	function takeDownCeSplit() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (ceSplitBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); ceMenu = false; } return; }
		let total = ceSplitBet + ceSplitWin;
		bankroll += total;
		showInform('Took down your C & E Split bet. ' + fmt(total) + ' back to the rail.' + (ceSplitWin > 0 ? ' That includes your ' + fmt(ceSplitWin) + ' win.' : ''));
		ceSplitBet = 0; ceSplitWin = 0; chipAngles['ceSplit'] = undefined; chipAngles = chipAngles;
		cancelCeSplitWinSequence();
		cancelPropComboSequence();
		ceMenu = false;
	}
	function takeDownCeC() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (ceCBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); ceMenu = false; } return; }
		let total = ceCBet + ceCWin;
		bankroll += total;
		showInform('Took down your C bet. ' + fmt(total) + ' back to the rail.' + (ceCWin > 0 ? ' That includes your ' + fmt(ceCWin) + ' win.' : ''));
		ceCBet = 0; ceCWin = 0; chipAngles['ceC'] = undefined; chipAngles = chipAngles;
		cancelCeCWinSequence();
		cancelPropComboSequence();
		ceMenu = false;
	}
	function takeDownCeE() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (ceEBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); ceMenu = false; } return; }
		let total = ceEBet + ceEWin;
		bankroll += total;
		showInform('Took down your E bet. ' + fmt(total) + ' back to the rail.' + (ceEWin > 0 ? ' That includes your ' + fmt(ceEWin) + ' win.' : ''));
		ceEBet = 0; ceEWin = 0; chipAngles['ceE'] = undefined; chipAngles = chipAngles;
		cancelCeEWinSequence();
		cancelPropComboSequence();
		ceMenu = false;
	}
	function ceSplitWinFor(stake, total) { if (total === 2 || total === 3 || total === 12) return stake * 3; if (total === 11) return stake * 7; return 0; }
	function ceCWinFor(stake, total) { return (total === 2 || total === 3 || total === 12) ? stake * 7 : 0; }
	function ceEWinFor(stake, total) { return total === 11 ? stake * 15 : 0; }
	function resolveCeSplit(total, deferLoss) {
		if (ceSplitBet === 0) return;
		let ceMsg = '';
		let w = ceSplitWinFor(ceSplitBet, total);
		if (w > 0) { ceSplitWin = w; ceMsg = 'C & E won ' + fmt(w) + ' on ' + total + '.'; }
		else { ceMsg = 'C & E loses on ' + total + '.'; if (!deferLoss) { ceSplitBet = 0; ceSplitWin = 0; chipAngles['ceSplit'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + ceMsg : ceMsg;
	}
	function resolveCeC(total, deferLoss) {
		if (ceCBet === 0) return;
		let ceMsg = '';
		let w = ceCWinFor(ceCBet, total);
		if (w > 0) { ceCWin = w; ceMsg = 'C won ' + fmt(w) + ' on ' + total + '.'; }
		else { ceMsg = 'C loses on ' + total + '.'; if (!deferLoss) { ceCBet = 0; ceCWin = 0; chipAngles['ceC'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + ceMsg : ceMsg;
	}
	function resolveCeE(total, deferLoss) {
		if (ceEBet === 0) return;
		let ceMsg = '';
		let w = ceEWinFor(ceEBet, total);
		if (w > 0) { ceEWin = w; ceMsg = 'E won ' + fmt(w) + ' on ' + total + '.'; }
		else { ceMsg = 'E loses on ' + total + '.'; if (!deferLoss) { ceEBet = 0; ceEWin = 0; chipAngles['ceE'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + ceMsg : ceMsg;
	}
	function ceSplitPressTargets(stake, win, rail) { let avail = stake + win; let cap = hornDropCap(stake); let out = []; if (stake <= 18) { for (let inc of [2, 4, 6, 10]) { let t = stake + inc; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = stake * m; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: 0 }); } return out; }
	function ceSplitParlayOption(stake, win, rail) { let avail = stake + win; let availC = Math.round(avail * 100); let pC = Math.floor(availC / 50) * 50; if (pC === availC) { return pC / 100 > stake && pC <= 500000 ? { target: pC / 100, drop: 0 } : null; } let nextC = pC + 50; let drop = (nextC - availC) / 100; if (nextC <= 500000 && drop <= hornDropCap(stake) && rail >= drop) return { target: nextC / 100, drop: drop }; return pC / 100 > stake ? { target: pC / 100, drop: 0 } : null; }
	function ceSplitHundredParlayOption(stake, win, rail) { let avail = stake + win; let h = Math.floor(avail / 100) * 100 + 100; if (h > 5000) return null; let drop = h - avail; if (drop > Math.max(10, avail / 10) || rail < drop) return null; let std = ceSplitParlayOption(stake, win, rail); if (std && std.target === h) return null; return { target: h, drop: drop }; }
	function cancelCeSplitWinSequence() { if (ceSplitWinTimer) { clearTimeout(ceSplitWinTimer); ceSplitWinTimer = null; } ceSplitWinPending = false; ceSplitWinMenu = false; }
	function queueCeSplitWinMenu() { if (!(ceSplitBet > 0 && ceSplitWin > 0)) { ceSplitWinPending = false; return; } ceSplitWinPending = true; if (!ceremonyActive && !ceSplitWinMenu && !ceSplitWinTimer) { ceSplitWinTimer = setTimeout(() => { ceSplitWinTimer = null; maybePopCeSplitWinMenu(); }, 1500); } }
	function maybePopCeSplitWinMenu() { if (!ceSplitWinPending || ceSplitWinMenu || ceremonyActive) return; if (ceSplitWinTimer) return; if (!(ceSplitWin > 0 && ceSplitBet > 0)) { ceSplitWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || worldWinMenu || ceCWinMenu || ceEWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { ceSplitWinTimer = setTimeout(() => { ceSplitWinTimer = null; maybePopCeSplitWinMenu(); }, 300); return; } clearInputErrs(); ceSplitWinCustom = ''; scrollTableIntoView(); ceSplitWinMenu = true; }
	function closeCeSplitWinMenu() { if (ceSplitWinMenu && ceSplitWin > 0 && ceSplitBet > 0) { let w = ceSplitWin; bankroll += w; ceSplitWin = 0; showInform('Picked up your C & E winnings ' + fmt(w) + '. Your ' + fmt(ceSplitBet) + ' C & E bet stays up.'); } ceSplitWinMenu = false; ceSplitWinPending = false; }
	function ceSplitWinSameBet() { let w = ceSplitWin; let b = ceSplitBet; ceSplitWin = 0; ceSplitWinMenu = false; ceSplitWinPending = false; bankroll += w; showInform('Picked up your C & E winnings ' + fmt(w) + '. Your ' + fmt(b) + ' C & E bet stays up.'); }
	function ceSplitWinSameBetDown() { let s = ceSplitBet; let w = ceSplitWin; let total = s + w; ceSplitBet = 0; ceSplitWin = 0; chipAngles['ceSplit'] = undefined; chipAngles = chipAngles; ceSplitWinMenu = false; ceSplitWinPending = false; bankroll += total; showInform('Took your ' + fmt(s) + ' C & E down. ' + fmt(total) + ' to the rail.'); }
	function ceSplitWinPressTo(target, parlayed) { let s = ceSplitBet; let w = ceSplitWin; let avail = s + w; let drop = Math.max(0, target - avail); if (target > 5000) { showAlert('Table max on the C & E is $5000.'); return; } if (drop > bankroll) { showAlert('That press needs ' + fmt(drop) + ' more from the rail.'); return; } bankroll -= drop; let excess = avail - target; if (excess > 0) bankroll += excess; ceSplitBet = target; ceSplitWin = 0; assignCeSplitAngles(); ceSplitWinMenu = false; ceSplitWinPending = false; showInform((parlayed ? 'Parlayed your ' + fmt(s) + ' C & E to ' + fmt(target) + '.' : 'Pressed your ' + fmt(s) + ' C & E to ' + fmt(target) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : '')); }
	function onCeSplitWinInput(e) { let v = Number(e.target.value); if (v > 5000) { ceSplitWinCustom = 5000; e.target.value = 5000; ceSplitWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (ceSplitWinErr) ceSplitWinErr = ''; }
	function placeCeSplitWinCustom() {
		if (ceSplitWin <= 0 || ceSplitBet <= 0) { closeCeSplitWinMenu(); return; }
		let amt = Number(ceSplitWinCustom);
		if (!amt || amt < 2) { ceSplitWinErr = 'Minimum C & E split bet is $2.'; return; }
		if (Math.round(amt * 100) % 50 !== 0) { ceSplitWinErr = 'C & E split bets go in 50 cent steps, so each side gets its share.'; return; }
		let s = ceSplitBet; let w = ceSplitWin; let avail = s + w; let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { ceSplitWinErr = 'That needs ' + fmt(drop) + ' more from the rail.'; return; }
		bankroll -= drop;
		let excess = avail - amt;
		if (excess > 0) bankroll += excess;
		ceSplitBet = amt; ceSplitWin = 0;
		assignCeSplitAngles();
		ceSplitWinMenu = false; ceSplitWinPending = false;
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' C & E to ' + fmt(amt) + '.' : 'Your C & E is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : ''));
	}
	function cancelCeCWinSequence() { if (ceCWinTimer) { clearTimeout(ceCWinTimer); ceCWinTimer = null; } ceCWinPending = false; ceCWinMenu = false; }
	function queueCeCWinMenu() { if (!(ceCBet > 0 && ceCWin > 0)) { ceCWinPending = false; return; } ceCWinPending = true; if (!ceremonyActive && !ceCWinMenu && !ceCWinTimer) { ceCWinTimer = setTimeout(() => { ceCWinTimer = null; maybePopCeCWinMenu(); }, 1500); } }
	function maybePopCeCWinMenu() { if (!ceCWinPending || ceCWinMenu || ceremonyActive) return; if (ceCWinTimer) return; if (!(ceCWin > 0 && ceCBet > 0)) { ceCWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || worldWinMenu || ceSplitWinMenu || ceEWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { ceCWinTimer = setTimeout(() => { ceCWinTimer = null; maybePopCeCWinMenu(); }, 300); return; } clearInputErrs(); ceCWinCustom = ''; scrollTableIntoView(); ceCWinMenu = true; }
	function closeCeCWinMenu() { if (ceCWinMenu && ceCWin > 0 && ceCBet > 0) { let w = ceCWin; bankroll += w; ceCWin = 0; showInform('Picked up your C winnings ' + fmt(w) + '. Your ' + fmt(ceCBet) + ' C bet stays up.'); } ceCWinMenu = false; ceCWinPending = false; }
	function ceCWinSameBet() { let w = ceCWin; let b = ceCBet; ceCWin = 0; ceCWinMenu = false; ceCWinPending = false; bankroll += w; showInform('Picked up your C winnings ' + fmt(w) + '. Your ' + fmt(b) + ' C bet stays up.'); }
	function ceCWinSameBetDown() { let s = ceCBet; let w = ceCWin; let total = s + w; ceCBet = 0; ceCWin = 0; chipAngles['ceC'] = undefined; chipAngles = chipAngles; ceCWinMenu = false; ceCWinPending = false; bankroll += total; showInform('Took your ' + fmt(s) + ' C down. ' + fmt(total) + ' to the rail.'); }
	function ceCWinPressTo(target, parlayed) { let s = ceCBet; let w = ceCWin; let avail = s + w; let drop = Math.max(0, target - avail); if (target > 5000) { showAlert('Table max on the C is $5000.'); return; } if (drop > bankroll) { showAlert('That press needs ' + fmt(drop) + ' more from the rail.'); return; } bankroll -= drop; let excess = avail - target; if (excess > 0) bankroll += excess; ceCBet = target; ceCWin = 0; assignCeCAngles(); ceCWinMenu = false; ceCWinPending = false; showInform((parlayed ? 'Parlayed your ' + fmt(s) + ' C to ' + fmt(target) + '.' : 'Pressed your ' + fmt(s) + ' C to ' + fmt(target) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : '')); }
	function onCeCWinInput(e) { let v = Number(e.target.value); if (v > 5000) { ceCWinCustom = 5000; e.target.value = 5000; ceCWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (ceCWinErr) ceCWinErr = ''; }
	function placeCeCWinCustom() {
		if (ceCWin <= 0 || ceCBet <= 0) { closeCeCWinMenu(); return; }
		let amt = Number(ceCWinCustom);
		if (!amt || amt < 1) { ceCWinErr = 'Minimum C bet is $1.'; return; }
		if (Math.round(amt * 100) % 100 !== 0) { ceCWinErr = 'C bets go in whole dollars.'; return; }
		let s = ceCBet; let w = ceCWin; let avail = s + w; let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { ceCWinErr = 'That needs ' + fmt(drop) + ' more from the rail.'; return; }
		bankroll -= drop;
		let excess = avail - amt;
		if (excess > 0) bankroll += excess;
		ceCBet = amt; ceCWin = 0;
		assignCeCAngles();
		ceCWinMenu = false; ceCWinPending = false;
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' C to ' + fmt(amt) + '.' : 'Your C is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : ''));
	}
	function cancelCeEWinSequence() { if (ceEWinTimer) { clearTimeout(ceEWinTimer); ceEWinTimer = null; } ceEWinPending = false; ceEWinMenu = false; }
	function queueCeEWinMenu() { if (!(ceEBet > 0 && ceEWin > 0)) { ceEWinPending = false; return; } ceEWinPending = true; if (!ceremonyActive && !ceEWinMenu && !ceEWinTimer) { ceEWinTimer = setTimeout(() => { ceEWinTimer = null; maybePopCeEWinMenu(); }, 1500); } }
	function maybePopCeEWinMenu() { if (!ceEWinPending || ceEWinMenu || ceremonyActive) return; if (ceEWinTimer) return; if (!(ceEWin > 0 && ceEBet > 0)) { ceEWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || worldWinMenu || ceSplitWinMenu || ceCWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { ceEWinTimer = setTimeout(() => { ceEWinTimer = null; maybePopCeEWinMenu(); }, 300); return; } clearInputErrs(); ceEWinCustom = ''; scrollTableIntoView(); ceEWinMenu = true; }
	function closeCeEWinMenu() { if (ceEWinMenu && ceEWin > 0 && ceEBet > 0) { let w = ceEWin; bankroll += w; ceEWin = 0; showInform('Picked up your E winnings ' + fmt(w) + '. Your ' + fmt(ceEBet) + ' E bet stays up.'); } ceEWinMenu = false; ceEWinPending = false; }
	function ceEWinSameBet() { let w = ceEWin; let b = ceEBet; ceEWin = 0; ceEWinMenu = false; ceEWinPending = false; bankroll += w; showInform('Picked up your E winnings ' + fmt(w) + '. Your ' + fmt(b) + ' E bet stays up.'); }
	function ceEWinSameBetDown() { let s = ceEBet; let w = ceEWin; let total = s + w; ceEBet = 0; ceEWin = 0; chipAngles['ceE'] = undefined; chipAngles = chipAngles; ceEWinMenu = false; ceEWinPending = false; bankroll += total; showInform('Took your ' + fmt(s) + ' E down. ' + fmt(total) + ' to the rail.'); }
	function ceEWinPressTo(target, parlayed) { let s = ceEBet; let w = ceEWin; let avail = s + w; let drop = Math.max(0, target - avail); if (target > 5000) { showAlert('Table max on the E is $5000.'); return; } if (drop > bankroll) { showAlert('That press needs ' + fmt(drop) + ' more from the rail.'); return; } bankroll -= drop; let excess = avail - target; if (excess > 0) bankroll += excess; ceEBet = target; ceEWin = 0; assignCeEAngles(); ceEWinMenu = false; ceEWinPending = false; showInform((parlayed ? 'Parlayed your ' + fmt(s) + ' E to ' + fmt(target) + '.' : 'Pressed your ' + fmt(s) + ' E to ' + fmt(target) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : '')); }
	function onCeEWinInput(e) { let v = Number(e.target.value); if (v > 5000) { ceEWinCustom = 5000; e.target.value = 5000; ceEWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (ceEWinErr) ceEWinErr = ''; }
	function placeCeEWinCustom() {
		if (ceEWin <= 0 || ceEBet <= 0) { closeCeEWinMenu(); return; }
		let amt = Number(ceEWinCustom);
		if (!amt || amt < 1) { ceEWinErr = 'Minimum E bet is $1.'; return; }
		if (Math.round(amt * 100) % 100 !== 0) { ceEWinErr = 'E bets go in whole dollars.'; return; }
		let s = ceEBet; let w = ceEWin; let avail = s + w; let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { ceEWinErr = 'That needs ' + fmt(drop) + ' more from the rail.'; return; }
		bankroll -= drop;
		let excess = avail - amt;
		if (excess > 0) bankroll += excess;
		ceEBet = amt; ceEWin = 0;
		assignCeEAngles();
		ceEWinMenu = false; ceEWinPending = false;
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' E to ' + fmt(amt) + '.' : 'Your E is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : drop > 0 ? ' Took ' + fmt(drop) + ' from the rail.' : ''));
	}
	function takeDownAllBehind(num) { if (rolling) return; let dcTotal = dontComePts[num] + dontComeOdds[num] + dontComePtWins[num] + dontComeOddsWins[num]; let won = overlayWins[num] > 0; let vigBack = won ? 0 : overlayVigs[num]; let ovTotal = overlays[num] + overlayWins[num] + vigBack; let total = dcTotal + ovTotal; if (total <= 0) { bandChooser = null; return; } bankroll += total; showInform('All your bets behind ' + num + ' are down, ' + fmt(total) + ' back to the rail.' + (won && overlayVigFor(overlays[num], num) > 0 ? ' The ' + fmt(overlayVigFor(overlays[num], num)) + ' Overlay vig stays with the house on a win.' : '')); dontComePts[num] = 0; dontComeOdds[num] = 0; dontComePtWins[num] = 0; dontComeOddsWins[num] = 0; overlays[num] = 0; overlayVigs[num] = 0; overlayWins[num] = 0; dontComePts = dontComePts; dontComeOdds = dontComeOdds; dontComePtWins = dontComePtWins; dontComeOddsWins = dontComeOddsWins; overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles['dc' + num] = undefined; chipAngles['dcOdds' + num] = undefined; chipAngles['overlay' + num] = undefined; chipAngles = chipAngles; bandChooser = null; }
	function startDcCeremony(pt, comeoutMode = false) {
		ceremonyLines = [];
		for (let n of [4, 5, 6, 8, 9, 10]) { if (dontComePts[n] > 0 || dontComeOdds[n] > 0) ceremonyLines.push({ num: n, flat: dontComePts[n], flatWin: dontComePtWins[n], lay: dontComeOdds[n], layWin: dontComeOddsWins[n] }); }
		if (ceremonyLines.length === 0) return;
		ceremonyQueue = [];
		for (let line of ceremonyLines) { if (line.layWin > 0) ceremonyQueue.push({ num: line.num, kind: 'layWin', amt: line.layWin }); if (line.lay > 0) ceremonyQueue.push({ num: line.num, kind: 'lay', amt: line.lay }); if (line.flatWin > 0) ceremonyQueue.push({ num: line.num, kind: 'dcWin', amt: line.flatWin }); if (line.flat > 0) ceremonyQueue.push({ num: line.num, kind: 'dc', amt: line.flat }); }
		ceremonyActive = true; ceremonyPuckPt = comeoutMode ? 0 : pt; ceremonyLowZ = !!comeoutMode; dcPileFromComeout = !!comeoutMode; dcPile = 0; dcPileAt = 'dcbar'; dcFlyAmt = 0; dcPileMenu = false;
		ceremonyTimer = setTimeout(() => runCeremonyComponent(0), 2000);
	}
	function cancelDcCeremony() { if (ceremonyTimer) { clearTimeout(ceremonyTimer); ceremonyTimer = null; } ceremonyActive = false; ceremonyPuckPt = 0; ceremonyLines = []; ceremonyQueue = []; dcPile = 0; dcFlyAmt = 0; dcPileMenu = false; ceremonyLowZ = false; dcPileFromComeout = false; }
	function bandComponentPos(num, kind) {
		if (typeof document === 'undefined') return { x: comePtLeft(num) + 2, y: 27.1 };
		let wrap = document.querySelector('.table-wrap');
		let btn = document.querySelector('.spot-dc-pt[aria-label="Behind the ' + num + '"]');
		if (!wrap || !btn) return { x: comePtLeft(num) + 2, y: 27.1 };
		let wr = wrap.getBoundingClientRect(); let br = btn.getBoundingClientRect();
		let rx, ry;
		if (kind === 'layWin') { let len = Math.max(1, stackCheques(dontComeOdds[num]).length); let step = dcLayStep(len); rx = 0.2 * br.width - (len - 1) * step; ry = 0.14 * br.height - (len - 1) * step - 22; }
		else if (kind === 'lay') { let len = Math.max(1, stackCheques(dontComeOdds[num]).length); let step = dcLayStep(len); rx = 0.2 * br.width - (len - 1) * step * 0.5; ry = 0.14 * br.height - (len - 1) * step * 0.5; }
		else if (kind === 'dcWin') { let len = Math.max(1, stackCheques(dontComePtWins[num]).length); rx = 0.46 * br.width; ry = 0.55 * br.height - 20 - (len - 1) * 0.75; }
		else { let len = Math.max(1, stackCheques(dontComePts[num]).length); rx = 0.46 * br.width; ry = 0.55 * br.height + (len - 1) * 0.75; }
		return { x: (br.left - wr.left + rx) / wr.width * 100, y: (br.top - wr.top + ry) / wr.height * 100 };
	}
	function runCeremonyComponent(i) {
		if (!ceremonyActive) return;
		if (i >= ceremonyQueue.length) { startDcPileFinalFlight(); return; }
		let comp = ceremonyQueue[i];
		let pos = bandComponentPos(comp.num, comp.kind);
		if (comp.kind === 'layWin') { dontComeOddsWins[comp.num] = 0; dontComeOddsWins = dontComeOddsWins; }
		else if (comp.kind === 'lay') { dontComeOdds[comp.num] = 0; dontComeOdds = dontComeOdds; }
		else if (comp.kind === 'dcWin') { dontComePtWins[comp.num] = 0; dontComePtWins = dontComePtWins; }
		else { dontComePts[comp.num] = 0; dontComePts = dontComePts; }
		if (dontComeOdds[comp.num] === 0 && dontComeOddsWins[comp.num] === 0) chipAngles['dcOdds' + comp.num] = undefined;
		if (dontComePts[comp.num] === 0 && dontComePtWins[comp.num] === 0) chipAngles['dc' + comp.num] = undefined;
		chipAngles = chipAngles;
		dcFlyAmt = comp.amt; dcFlyX = pos.x; dcFlyY = pos.y;
		ceremonyTimer = setTimeout(() => { if (!ceremonyActive) return; dcFlyX = 21.25; dcFlyY = 32.75; ceremonyTimer = setTimeout(() => { if (!ceremonyActive) return; dcPile += comp.amt; dcFlyAmt = 0; ceremonyTimer = setTimeout(() => runCeremonyComponent(i + 1), 180); }, 620); }, 40);
	}
	function startDcPileFinalFlight() {
		if (!ceremonyActive) return;
		if (dcPile <= 0) { ceremonyActive = false; ceremonyPuckPt = 0; ceremonyLowZ = false; ceremonyTimer = null; maybeStartOverlayWinMenus(); return; }
		let targetX = (bets.come > 0 && wins.come > 0) ? 33 : 29;
		dcFlyAmt = dcPile; dcPile = 0; dcFlyX = 21.25; dcFlyY = 32.75;
		ceremonyTimer = setTimeout(() => { if (!ceremonyActive) return; dcFlyX = targetX; dcFlyY = 48.25; ceremonyTimer = setTimeout(() => { if (!ceremonyActive) return; dcPile = dcFlyAmt; dcFlyAmt = 0; dcPileAt = 'come'; ceremonyActive = false; ceremonyPuckPt = 0; ceremonyLowZ = false; ceremonyTimer = null; maybeStartOverlayWinMenus(); }, 620); }, 40);
	}
	function openDcPileMenu() { if (ceremonyActive || dcPile <= 0 || dcPileAt !== 'come') return; scrollTableIntoView(); dcPileMenu = true; }
	function pickupDcPile() { if (dcPile <= 0) { dcPileMenu = false; return; } let total = dcPile; bankroll += total; dcPile = 0; ceremonyLines = []; dcPileMenu = false; showInform("Picked up your Don't Come money " + fmt(total) + ' from the COME.'); }
	function onOverlayWinInput(e) { if (!overlayWinMenu) return; let v = Number(e.target.value); if (v > 5000) { overlayCustom = 5000; e.target.value = 5000; overlayErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (overlayErr) overlayErr = ''; }
	function cancelOverlayWinSequence() { if (overlayWinTimer) { clearTimeout(overlayWinTimer); overlayWinTimer = null; } overlayWinQueue = []; overlayWinPending = false; overlayWinMenu = null; overlayWinsPosted = []; }
	function queueOverlayWinSequence() { for (let n of [4, 5, 6, 8, 9, 10]) { if (overlayWins[n] > 0 && !overlayWinQueue.includes(n) && overlayWinMenu !== n) overlayWinQueue.push(n); } if (overlayWinQueue.length === 0) return; overlayWinPending = true; if (!ceremonyActive && !overlayWinMenu && !overlayWinTimer) { overlayWinTimer = setTimeout(() => { overlayWinTimer = null; maybeStartOverlayWinMenus(); }, 1500); } }
	function maybeStartOverlayWinMenus() { if (!overlayWinPending || overlayWinMenu || ceremonyActive) return; if (overlayWinTimer) return; while (overlayWinQueue.length > 0 && !(overlayWins[overlayWinQueue[0]] > 0 && overlays[overlayWinQueue[0]] > 0)) overlayWinQueue.shift(); if (overlayWinQueue.length === 0) { overlayWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { overlayWinTimer = setTimeout(() => { overlayWinTimer = null; maybeStartOverlayWinMenus(); }, 300); return; } let num = overlayWinQueue.shift(); overlayWinQueue = overlayWinQueue; overlayCustom = overlayUnitFor(num); overlayErr = ''; scrollTableIntoView(); overlayWinMenu = num; }
	function advanceOverlayWinSequence() { if (overlayWinQueue.length === 0) { overlayWinPending = false; return; } overlayWinTimer = setTimeout(() => { overlayWinTimer = null; maybeStartOverlayWinMenus(); }, 350); }
	function closeOverlayWinMenu() { if (!overlayWinMenu) return; overlayWinMenu = null; advanceOverlayWinSequence(); }
	function overlayWinCollectDown(num) { if (overlayWins[num] <= 0 || overlays[num] <= 0) { closeOverlayWinMenu(); return; } let win = overlayWins[num]; let lay = overlays[num]; let total = lay + win; bankroll += total; showInform('Collected ' + fmt(win) + ' and down on your Overlay on ' + num + ', ' + fmt(total) + ' back to the rail. The vig stays with the house, it paid for the win.'); overlays[num] = 0; overlayVigs[num] = 0; overlayWins[num] = 0; overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles['overlay' + num] = undefined; chipAngles = chipAngles; overlayWinMenu = null; advanceOverlayWinSequence(); }
	function overlayWinSameBet(num) { if (overlayWins[num] <= 0 || overlays[num] <= 0) { closeOverlayWinMenu(); return; } let win = overlayWins[num]; let lay = overlays[num]; let vig = overlayVigFor(lay, num); bankroll += win; overlayWins[num] = 0; if (bankroll >= vig) { bankroll -= vig; overlayVigs[num] = vig; showInform('Picked up Overlay winnings ' + fmt(win) + ' on the ' + num + '. Dropped ' + fmt(vig) + ' to keep the Overlay up to win again.'); } else { bankroll += lay; overlays[num] = 0; overlayVigs[num] = 0; chipAngles['overlay' + num] = undefined; chipAngles = chipAngles; showInform('Picked up Overlay winnings ' + fmt(win) + ' on the ' + num + ', but the rail could not cover the ' + fmt(vig) + ' drop, so the Overlay came down. ' + fmt(lay + win) + ' back to the rail.'); } overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; overlayWinMenu = null; advanceOverlayWinSequence(); }
	function overlayWinBetNew(num, lay) { lay = Number(lay); let problem = overlayLayProblem(lay, num); if (problem) { overlayErr = problem; return; } let total = lay + overlayVigFor(lay, num); if (bankroll + overlays[num] + overlayWins[num] < total) { overlayErr = 'Not enough in the rail for a ' + fmt(total) + ' Overlay.'; return; } overlayErr = ''; overlayWinMenu = null; let ok = placeOverlayLay(num, lay); if (ok) advanceOverlayWinSequence(); else { overlayWinMenu = num; overlayErr = 'That Overlay could not be placed.'; } }
	function resolveCome(total) {
		let servicedTravel = 0;
		let travelMode = null;
		for (let num of [4, 5, 6, 8, 9, 10]) {
			if (comePts[num] > 0) {
				if (total === num) { let flatBet = comePts[num]; let oddsBet = comeOdds[num]; let oddsWorked = oddsBet > 0 && comeOddsWorking(num); let oddsWinAmt = oddsWorked ? oddsWinOld(oddsBet, num) : 0; let waitingBet = bets.come; let hasPlace = bets['place' + num] > 0 || buys['place' + num]; let path = waitingBet === 0 ? 'offFor' : (waitingBet === flatBet ? 'offAndOn' : 'offForOnFor'); messageKind = 'notify'; if (path === 'offAndOn') { comePileBet += flatBet; comePileWin += flatBet + oddsWinAmt; comePile = comePileBet + comePileWin; comePileOdds = 0; comePileOddsOff = false; comePileOffAndOn = true; comePileOrigBet = flatBet; comePileWinOdds = oddsBet; comePileOffFor = 0; comePts[num] = 0; comeOddsWins[num] = 0; comeCorner[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['come' + num] = undefined; message += " You're Off and On for " + fmt(flatBet + oddsWinAmt) + '.'; if (oddsWorked) message += ' Come Odds win ' + fmt(oddsWinAmt) + ', in the COME with your payout.'; else if (oddsBet > 0) message += ' Come Odds were OFF, they stay on your bet.'; servicedTravel = num; travelMode = 'offAndOn'; pendingComeMenu = true; schedulePopupDelay(null); } else if (path === 'offFor') { comePileBet += flatBet + oddsBet; comePileWin += flatBet + oddsWinAmt; comePile = comePileBet + comePileWin; comePileOdds = oddsBet; comePileOddsOff = oddsBet > 0 && !oddsWorked; comePileOffAndOn = false; comePileOrigBet = 0; comePts[num] = 0; comeOdds[num] = 0; comeOddsWins[num] = 0; comeCorner[num] = false; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['come' + num] = undefined; chipAngles['comeOdds' + num] = undefined; message += " You're off the " + numWord(num) + ' for ' + fmt(flatBet) + '.'; if (oddsWorked) message += ' Come Odds win ' + fmt(oddsWinAmt) + ', in the COME with your payout.'; else if (oddsBet > 0) message += ' Come Odds were OFF, ' + fmt(oddsBet) + ' back in the COME.'; if (!hasPlace) { comePileOffFor = num; servicedTravel = num; pendingComeMenu = true; schedulePopupDelay(null); } else comePileOffFor = 0; } else { comePileBet += flatBet + oddsBet; comePileWin += flatBet + oddsWinAmt; comePile = comePileBet + comePileWin; comePileOdds = oddsBet; comePileOddsOff = oddsBet > 0 && !oddsWorked; comePileOffAndOn = false; comePileOrigBet = 0; comePileOffFor = num; comePts[num] = 0; comeOdds[num] = 0; comeOddsWins[num] = 0; comeCorner[num] = false; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['come' + num] = undefined; chipAngles['comeOdds' + num] = undefined; message += " You're off the " + numWord(num) + ' for ' + fmt(flatBet) + ', and on for ' + fmt(waitingBet) + '.'; if (oddsWorked) message += ' Come Odds win ' + fmt(oddsWinAmt) + ', in the COME with your payout.'; else if (oddsBet > 0) message += ' Come Odds were OFF, ' + fmt(oddsBet) + ' back in the COME.'; servicedTravel = num; travelMode = 'offForOnFor'; if (hasPlace) { comeOffForFollowUp = num; } else { pendingComeOddsMenu = num; pendingComeMenu = true; schedulePopupDelay(null); } } }
				else if (total === 7) { message += ' Come on ' + num + ' loses on 7.'; if (comeOdds[num] > 0 && !comeOddsWorking(num)) { bankroll += comeOdds[num]; message += ' Come Odds were OFF, ' + fmt(comeOdds[num]) + ' back to the rail.'; } comePts[num] = 0; comeOdds[num] = 0; comeOddsWins[num] = 0; comePtWins[num] = 0; comeCorner[num] = false; comeOddsOff[num] = false; comeOddsDeclaredOn[num] = false; comeOddsOverrideOn[num] = false; comeTravelMadePt[num] = false; comeMadePtComeout[num] = false; chipAngles['come' + num] = undefined; chipAngles['comeOdds' + num] = undefined; }
			}
		}
		if (bets.come > 0) {
			if (total === 7 || total === 11) { wins.come = (wins.come || 0) + bets.come; message += ' Come wins ' + fmt(bets.come) + ' on ' + total + '.'; messageKind = 'notify'; }
			else if (total === 2 || total === 3 || total === 12) { message += ' Come loses on ' + total + '.'; bets.come = 0; }
			else { if (travelMode === 'offAndOn' || travelMode === 'offForOnFor') { comePts[total] = (comePts[total] || 0) + bets.come; assignComeAngles(total); } else if (travelMode === 'decision' || ((bets['place' + total] > 0 || buys['place' + total]) && !comePts[total])) { let segKeyCD = 'place' + total; let segOffOwnCD = false; if (!placeWorking(segKeyCD)) { let idxCD = placeOrderInsideOut.indexOf(segKeyCD); for (let iCD = idxCD; iCD >= 0; iCD--) { let kCD = placeOrderInsideOut[iCD]; if (placeLammer[kCD]) { segOffOwnCD = kCD === segKeyCD && placeLammer[kCD] === 'off'; break; } } } let segOnOwnCD = false; if (placeLammer[segKeyCD] === 'on' && placeWorking(segKeyCD)) { let idxCD2 = placeOrderInsideOut.indexOf(segKeyCD); let withoutCD = point !== 0; for (let iCD2 = idxCD2 - 1; iCD2 >= 0; iCD2--) { let kCD2 = placeOrderInsideOut[iCD2]; if (placeLammer[kCD2]) { withoutCD = placeLammer[kCD2] === 'on'; break; } } segOnOwnCD = !withoutCD; } comeMovePending = { num: total, amount: bets.come, segOffOwn: segOffOwnCD, segOnOwn: segOnOwnCD, segWorking: placeWorking(segKeyCD) }; if (point !== 0 && total === point) { comeTravelMadePt[total] = true; comeMadePtComeout[total] = true; } schedulePopupDelay(null); message += " You're on the " + numWord(total) + ' for ' + fmt(bets.come) + '. Pick what to do with the Place bet.'; } else { let freshTravel = !comePts[total] && !(bets['place' + total] > 0 || buys['place' + total]) && servicedTravel !== total; comePts[total] = (comePts[total] || 0) + bets.come; assignComeAngles(total); if (point !== 0 && total === point) { comeTravelMadePt[total] = true; comeMadePtComeout[total] = true; } if (servicedTravel !== total) message += " You're on the " + numWord(total) + ' for ' + fmt(bets.come) + '.'; if (freshTravel) { comeTravelStaged = total; pendingComeOddsMenu = total; schedulePopupDelay(null); } else if (servicedTravel !== total && !(bets['place' + total] > 0 || buys['place' + total]) && comePts[total] > bets.come) { comeTravelStaged = total; pendingComeOddsMenu = total; schedulePopupDelay(null); } } bets.come = 0; }
		}
		bets = bets; wins = wins; comePts = comePts; comeOdds = comeOdds; comePtWins = comePtWins; comeOddsWins = comeOddsWins; comeCorner = comeCorner; comeOddsOff = comeOddsOff; comeOddsDeclaredOn = comeOddsDeclaredOn; comeOddsOverrideOn = comeOddsOverrideOn; comeTravelMadePt = comeTravelMadePt; comeMadePtComeout = comeMadePtComeout; chipAngles = chipAngles;
	}
	function resolveDontCome(total) {
		for (let num of [4, 5, 6, 8, 9, 10]) {
			if (dontComePts[num] > 0) {
				if (total === 7) { dontComePtWins[num] = (dontComePtWins[num] || 0) + dontComePts[num]; if (dontComeOdds[num] > 0) dontComeOddsWins[num] = (dontComeOddsWins[num] || 0) + layWinFor(dontComeOdds[num], num); message += " Don't Come behind " + num + ' wins ' + fmt(dontComePts[num]) + ' on 7.'; messageKind = 'notify'; }
				else if (total === num) { message += " Don't Come behind " + num + ' loses, ' + num + ' rolled.'; dontComePts[num] = 0; dontComeOdds[num] = 0; dontComeOddsWins[num] = 0; dontComePtWins[num] = 0; chipAngles['dc' + num] = undefined; chipAngles['dcOdds' + num] = undefined; }
			}
		}
		if (bets.dontCome > 0) {
			if (total === 2 || total === 3) { wins.dontCome = (wins.dontCome || 0) + bets.dontCome; message += " Don't Come wins " + fmt(bets.dontCome) + ' on ' + total + '.'; messageKind = 'notify'; }
			else if (total === 7 || total === 11) { message += " Don't Come loses on " + total + '.'; bets.dontCome = 0; }
			else if (total === 12) { message += " Don't Come pushes on 12, bet stays."; }
			else if ((total === 6 || total === 8) && dcNoAction68 === 'never') { message += ' No Action on the ' + total + ', DC bet stays.'; }
			else if ((total === 6 || total === 8) && dcNoAction68 === 'ask') { dcMovePending = { num: total, amount: bets.dontCome }; schedulePopupDelay(null); message += " Don't Come " + fmt(bets.dontCome) + ' would move behind the ' + total + '. Move or No Action?'; bets.dontCome = 0; }
			else { dontComePts[total] = (dontComePts[total] || 0) + bets.dontCome; assignDcAngles(total); message += " Don't Come is behind the " + numWord(total) + ' for ' + fmt(bets.dontCome) + '.'; bets.dontCome = 0; scheduleDcTravelMenu(total); }
		}
		bets = bets; wins = wins; dontComePts = dontComePts; dontComeOdds = dontComeOdds; dontComePtWins = dontComePtWins; dontComeOddsWins = dontComeOddsWins; chipAngles = chipAngles;
	}
	function resolveOverlays(total) {
		for (let num of [4, 5, 6, 8, 9, 10]) {
			if (overlays[num] > 0) {
				if (total === 7) { let w = overlayWinFor(overlays[num], num); overlayWins[num] = (overlayWins[num] || 0) + w; overlayVigs[num] = 0; overlayWinsPosted.push(num); message += ' Overlay on ' + num + ' wins ' + fmt(w) + ' on 7.'; messageKind = 'notify'; }
				else if (total === num) { message += ' Overlay on ' + num + ' loses, ' + num + ' rolled. ' + fmt(overlays[num] + overlayVigs[num]) + ' gone.'; overlays[num] = 0; overlayVigs[num] = 0; overlayWins[num] = 0; chipAngles['overlay' + num] = undefined; }
			}
		}
		overlays = overlays; overlayVigs = overlayVigs; overlayWins = overlayWins; chipAngles = chipAngles;
	}
	function hornWinFor(stake, total) { if (total === 2 || total === 12) return (stake / 4) * 27; if (total === 3 || total === 11) return stake * 3; return 0; }
	function resolveHorn(total, deferLoss) {
		if (hornBet === 0) return;
		let hornMsg = '';
		let w = hornWinFor(hornBet, total);
		if (w > 0) { hornWin = w; hornMsg = 'Horn won ' + fmt(w) + ' on ' + total + '.'; }
		else { hornMsg = 'Horn loses on ' + total + '.'; if (!deferLoss) { hornBet = 0; hornWin = 0; chipAngles['horn'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + hornMsg : hornMsg;
	}

	function hornDropCap(stake) { return Math.min(15, Math.max(4, stake / 4)); }
	function hornPressTargets(stake, win, rail) { let avail = stake + win; let cap = hornDropCap(stake); let out = []; if (stake <= 36) { for (let inc of [4, 8, 12, 20]) { let t = stake + inc; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = stake * m; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: 0 }); } return out; }
	function hornParlayOption(stake, win, rail) { let avail = stake + win; let p = Math.floor(avail / 4) * 4; if (p === avail) { return p > stake && p <= 5000 ? { target: p, drop: 0 } : null; } let next = p + 4; let drop = next - avail; if (next <= 5000 && drop <= hornDropCap(stake) && rail >= drop) return { target: next, drop: drop }; return p > stake ? { target: p, drop: 0 } : null; }
	function hornHundredParlayOption(stake, win, rail) { let avail = stake + win; let h = Math.floor(avail / 100) * 100 + 100; if (h > 5000) return null; let drop = h - avail; if (drop > Math.max(10, avail / 10) || rail < drop) return null; let std = hornParlayOption(stake, win, rail); if (std && std.target === h) return null; return { target: h, drop: drop }; }
	function cancelHornWinSequence() { if (hornWinTimer) { clearTimeout(hornWinTimer); hornWinTimer = null; } hornWinPending = false; hornWinMenu = false; }
	function queueHornWinMenu() { if (!(hornBet > 0 && hornWin > 0)) { hornWinPending = false; return; } hornWinPending = true; if (!ceremonyActive && !hornWinMenu && !hornWinTimer) { hornWinTimer = setTimeout(() => { hornWinTimer = null; maybePopHornWinMenu(); }, 1500); } }
	function maybePopHornWinMenu() { if (!hornWinPending || hornWinMenu || ceremonyActive) return; if (hornWinTimer) return; if (!(hornWin > 0 && hornBet > 0)) { hornWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || worldWinMenu || overlayWinMenu || overlayWinPending || anySevenWinMenu || anyCrapsWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { hornWinTimer = setTimeout(() => { hornWinTimer = null; maybePopHornWinMenu(); }, 300); return; } clearInputErrs(); hornWinCustom = ''; scrollTableIntoView(); hornWinMenu = true; }
	function closeHornWinMenu() { if (hornWinMenu && hornWin > 0 && hornBet > 0) { let w = hornWin; bankroll += w; hornWin = 0; showInform('Picked up your Horn winnings ' + fmt(w) + '. Your ' + fmt(hornBet) + ' Horn bet stays up.'); } hornWinMenu = false; hornWinPending = false; }
	function hornWinSameBet() { if (hornWin <= 0 || hornBet <= 0) { closeHornWinMenu(); return; } let w = hornWin; bankroll += w; hornWin = 0; showInform('Picked up your Horn winnings ' + fmt(w) + '. Your ' + fmt(hornBet) + ' Horn bet stays up.'); closeHornWinMenu(); }
	function hornWinPressTo(target, parlayed) { if (hornWin <= 0 || hornBet <= 0) { closeHornWinMenu(); return; } let s = hornBet; let avail = hornBet + hornWin; let excess = Math.max(0, avail - target); let drop = Math.max(0, target - avail); if (drop > bankroll) { closeHornWinMenu(); return; } bankroll += excess; bankroll -= drop; hornBet = target; hornWin = 0; assignHornAngles(); showInform((parlayed ? 'Parlayed your ' : 'Pressed your ') + fmt(s) + ' Horn to ' + fmt(target) + '.' + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : '')); closeHornWinMenu(); }
	function onHornWinInput(e) { let v = Number(e.target.value); if (v > 5000) { hornWinCustom = 5000; e.target.value = 5000; hornWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (hornWinErr) hornWinErr = ''; }
	function placeHornWinCustom() {
		if (hornWin <= 0 || hornBet <= 0) { closeHornWinMenu(); return; }
		let amt = Number(hornWinCustom);
		if (!amt || amt < 4) { hornWinErr = 'Minimum Horn bet is $4.'; return; }
		if (amt % 4 !== 0) { hornWinErr = 'Horn bets go in $4 steps, so each number gets its share.'; return; }
		let s = hornBet; let avail = hornBet + hornWin; let excess = Math.max(0, avail - amt); let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { hornWinErr = 'That bet needs a ' + fmt(drop) + ' drop and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		hornWinErr = '';
		bankroll += excess; bankroll -= drop; hornBet = amt; hornWin = 0; assignHornAngles();
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' Horn to ' + fmt(amt) + '.' : 'Your Horn is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : ''));
		closeHornWinMenu();
	}
	function hornWinSameBetDown() { if (hornWin <= 0 || hornBet <= 0) { closeHornWinMenu(); return; } let s = hornBet; let total = hornBet + hornWin; bankroll += total; hornBet = 0; hornWin = 0; chipAngles['horn'] = undefined; chipAngles = chipAngles; showInform('Took your ' + fmt(s) + ' Horn down. ' + fmt(total) + ' to the rail.'); closeHornWinMenu(); }
	function hhDef(key) { return hhDefs.find((d) => d.key === key); }
	function hhName(key) { return hhDef(key).name; }
	function hhMaxFor(key) { return hhDef(key).max; }
	function hhPicksCap(picks) { return picks.length ? Math.min(...picks.map((k) => hhMaxFor(k))) : 5000; }
	function assignHhAngles(key) { let d = hhDef(key); chipAngles[d.propKey] = stackCheques(hhBets[key]).map(() => randomAngle()); chipAngles = chipAngles; }
	function hhWinFor(key, stake, total) { let d = hhDef(key); let u = stake / 5; if (total === d.total) return u * (d.total === 2 || d.total === 12 ? 57 : 27); if (total === 2 || total === 12) return u * 26; if (total === 3 || total === 11) return u * 11; return 0; }
	function resolveHornHigh(total, deferLoss) {
		for (let d of hhDefs) {
			if (hhBets[d.key] === 0) continue;
			let w = hhWinFor(d.key, hhBets[d.key], total);
			let hhMsg = '';
			if (w > 0) { hhWins[d.key] = w; hhMsg = 'Horn High ' + d.name + ' won ' + fmt(w) + ' on ' + total + '.'; }
			else { hhMsg = 'Horn High ' + d.name + ' loses on ' + total + '.'; if (!deferLoss) { hhBets[d.key] = 0; hhWins[d.key] = 0; chipAngles[d.propKey] = undefined; } }
			message = message ? message + ' ' + hhMsg : hhMsg;
		}
		hhBets = hhBets; hhWins = hhWins; chipAngles = chipAngles;
	}
	function openHornHighMenu() { if (rolling) return; clearInputErrs(); hhInputs = { aces: '', aceDeuce: '', yo: '', twelve: '' }; hhErr = ''; hhClampErr = ''; hhMenu = true; }
	function hhCurrentText(betsObj) { let parts = []; for (let d of hhDefs) { if (betsObj[d.key] > 0) parts.push(fmt(betsObj[d.key]) + ' Horn High ' + d.name); } return parts.join(', ') + '.'; }
	function hhEntriesFrom(inputs) { let out = []; for (let d of hhDefs) { let v = Math.floor(Number(inputs[d.key])); if (v >= 5) out.push({ key: d.key, amt: v }); } return out; }
	function hhBetButtonLabel(inputs) { let entries = hhEntriesFrom(inputs); if (entries.length === 0) return 'Bet Horn High'; return 'Bet ' + joinBetList(entries.map((e) => fmt(e.amt) + ' Horn High ' + hhName(e.key))); }
	function focusHhInput(key) { if (typeof document !== 'undefined') { let el = document.getElementById('hh-in-' + key); if (el) { el.focus(); if (el.select) el.select(); } } }
	function onHhUnitInput(key, e) { let v = Number(e.target.value); let cap = hhMaxFor(key); if (v > cap) { hhInputs[key] = cap; e.target.value = cap; hhClampErr = 'Max on this bet is ' + fmt(cap) + '.'; } else if (hhClampErr) hhClampErr = ''; hhInputs = hhInputs; hhErr = ''; }
	function setHhInput(key, amt) { hhInputs[key] = Math.min(amt, hhMaxFor(key)); hhInputs = hhInputs; hhClampErr = ''; hhErr = ''; }
	function placeHornHighGroup(entries, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		let total = 0; for (let e of entries) total += e.amt;
		let avail = bankroll; for (let e of entries) avail += hhBets[e.key] + hhWins[e.key];
		if (avail < total) return false;
		cancelPropComboSequence();
		if (hhWinPendingKey && entries.some((e) => e.key === hhWinPendingKey)) cancelHhWinSequence();
		for (let e of entries) { bankroll += hhBets[e.key] + hhWins[e.key]; bankroll -= e.amt; hhBets[e.key] = e.amt; hhWins[e.key] = 0; assignHhAngles(e.key); }
		hhBets = hhBets; hhWins = hhWins;
		return true;
	}
	function placeHornHighMain() {
		if (rolling) return;
		let entries = hhEntriesFrom(hhInputs);
		if (entries.length === 0) return;
		for (let e of entries) {
			if (e.amt < 5) { hhErr = 'Minimum Horn High bet is $5.'; return; }
			if (e.amt % 5 !== 0) { hhErr = 'Horn High bets go in $5 steps, so each unit gets its share.'; return; }
			if (e.amt > hhMaxFor(e.key)) { showAlert('Table max on a Horn High bet is ' + fmt(hhMaxFor(e.key)) + '.'); return; }
		}
		if (!placeHornHighGroup(entries)) { let total = entries.reduce((a, e) => a + e.amt, 0); hhErr = 'That needs ' + fmt(total) + ' and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		hhErr = '';
		showAsk('Bet ' + joinBetList(entries.map((e) => fmt(e.amt) + ' Horn High ' + hhName(e.key))) + '.');
		hhMenu = false;
	}
	function takeDownHornHigh(key) {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (hhBets[key] <= 0) { if (hadPropCombo) { cancelPropComboSequence(); hhMenu = false; } return; }
		let total = hhBets[key] + hhWins[key];
		bankroll += total;
		showInform('Took down your Horn High ' + hhName(key) + ' bet. ' + fmt(total) + ' back to the rail.' + (hhWins[key] > 0 ? ' That includes your ' + fmt(hhWins[key]) + ' win.' : ''));
		hhBets[key] = 0; hhWins[key] = 0; hhBets = hhBets; hhWins = hhWins; chipAngles[hhDef(key).propKey] = undefined; chipAngles = chipAngles;
		if (hhWinPendingKey === key || hhWinMenuKey === key) cancelHhWinSequence();
		cancelPropComboSequence();
		hhMenu = false;
	}
	function hhPressTargets(stake, win, rail, max) { let avail = stake + win; let cap = hornDropCap(stake); let out = []; if (stake <= 45) { for (let inc of [5, 10, 15, 25]) { let t = stake + inc; if (t > max) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = stake * m; if (t > max) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: 0 }); } return out; }
	function hhParlayOption(stake, win, rail, max) { let avail = stake + win; let p = Math.floor(avail / 5) * 5; if (p === avail) { return p > stake && p <= max ? { target: p, drop: 0 } : null; } let next = p + 5; let drop = next - avail; if (next <= max && drop <= hornDropCap(stake) && rail >= drop) return { target: next, drop: drop }; return p > stake ? { target: p, drop: 0 } : null; }
	function hhHundredParlayOption(stake, win, rail, max) { let avail = stake + win; let h = Math.floor(avail / 100) * 100 + 100; if (h > max) return null; let drop = h - avail; if (drop > Math.max(10, avail / 10) || rail < drop) return null; let std = hhParlayOption(stake, win, rail, max); if (std && std.target === h) return null; return { target: h, drop: drop }; }
	function cancelHhWinSequence() { if (hhWinTimer) { clearTimeout(hhWinTimer); hhWinTimer = null; } hhWinPendingKey = ''; hhWinMenuKey = ''; }
	function queueHhWinMenu(key) { if (!(hhBets[key] > 0 && hhWins[key] > 0)) { if (hhWinPendingKey === key) hhWinPendingKey = ''; return; } hhWinPendingKey = key; if (!ceremonyActive && !hhWinMenuKey && !hhWinTimer) { hhWinTimer = setTimeout(() => { hhWinTimer = null; maybePopHhWinMenu(); }, 1500); } }
	function maybePopHhWinMenu() { if (!hhWinPendingKey || hhWinMenuKey || ceremonyActive) return; if (hhWinTimer) return; let key = hhWinPendingKey; if (!(hhWins[key] > 0 && hhBets[key] > 0)) { hhWinPendingKey = ''; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || hhMenu || worldWinMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || ceSplitWinMenu || ceCWinMenu || ceEWinMenu || propComboMenu || propComboPending || hopChooser || hopSub) { hhWinTimer = setTimeout(() => { hhWinTimer = null; maybePopHhWinMenu(); }, 300); return; } clearInputErrs(); hhWinCustom = ''; scrollTableIntoView(); hhWinMenuKey = key; }
	function closeHhWinMenu() { if (hhWinMenuKey && hhWins[hhWinMenuKey] > 0 && hhBets[hhWinMenuKey] > 0) { let key = hhWinMenuKey; let w = hhWins[key]; bankroll += w; hhWins[key] = 0; hhWins = hhWins; showInform('Picked up your Horn High ' + hhName(key) + ' winnings ' + fmt(w) + '. Your ' + fmt(hhBets[key]) + ' Horn High ' + hhName(key) + ' bet stays up.'); } hhWinMenuKey = ''; hhWinPendingKey = ''; }
	function hhWinSameBet() { let key = hhWinMenuKey; if (!key || hhWins[key] <= 0 || hhBets[key] <= 0) { closeHhWinMenu(); return; } let w = hhWins[key]; bankroll += w; hhWins[key] = 0; hhWins = hhWins; showInform('Picked up your Horn High ' + hhName(key) + ' winnings ' + fmt(w) + '. Your ' + fmt(hhBets[key]) + ' Horn High ' + hhName(key) + ' bet stays up.'); closeHhWinMenu(); }
	function hhWinSameBetDown() { let key = hhWinMenuKey; if (!key || hhWins[key] <= 0 || hhBets[key] <= 0) { closeHhWinMenu(); return; } let s = hhBets[key]; let total = hhBets[key] + hhWins[key]; bankroll += total; hhBets[key] = 0; hhWins[key] = 0; hhBets = hhBets; hhWins = hhWins; chipAngles[hhDef(key).propKey] = undefined; chipAngles = chipAngles; showInform('Took your ' + fmt(s) + ' Horn High ' + hhName(key) + ' down. ' + fmt(total) + ' to the rail.'); closeHhWinMenu(); }
	function hhWinPressTo(target, parlayed) { let key = hhWinMenuKey; if (!key || hhWins[key] <= 0 || hhBets[key] <= 0) { closeHhWinMenu(); return; } let s = hhBets[key]; let avail = hhBets[key] + hhWins[key]; let excess = Math.max(0, avail - target); let drop = Math.max(0, target - avail); if (drop > bankroll) { closeHhWinMenu(); return; } bankroll += excess; bankroll -= drop; hhBets[key] = target; hhWins[key] = 0; hhBets = hhBets; hhWins = hhWins; assignHhAngles(key); showInform((parlayed ? 'Parlayed your ' : 'Pressed your ') + fmt(s) + ' Horn High ' + hhName(key) + ' to ' + fmt(target) + '.' + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : '')); closeHhWinMenu(); }
	function onHhWinInput(e) { let v = Number(e.target.value); let cap = hhWinMenuKey ? hhMaxFor(hhWinMenuKey) : 5000; if (v > cap) { hhWinCustom = cap; e.target.value = cap; hhWinErr = 'Max on this bet is ' + fmt(cap) + '.'; } else if (hhWinErr) hhWinErr = ''; }
	function placeHhWinCustom() {
		let key = hhWinMenuKey;
		if (!key || hhWins[key] <= 0 || hhBets[key] <= 0) { closeHhWinMenu(); return; }
		let amt = Number(hhWinCustom);
		if (!amt || amt < 5) { hhWinErr = 'Minimum Horn High bet is $5.'; return; }
		if (amt % 5 !== 0) { hhWinErr = 'Horn High bets go in $5 steps, so each unit gets its share.'; return; }
		let s = hhBets[key]; let avail = hhBets[key] + hhWins[key]; let excess = Math.max(0, avail - amt); let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { hhWinErr = 'That bet needs a ' + fmt(drop) + ' drop and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		hhWinErr = '';
		bankroll += excess; bankroll -= drop; hhBets[key] = amt; hhWins[key] = 0; hhBets = hhBets; hhWins = hhWins; assignHhAngles(key);
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' Horn High ' + hhName(key) + ' to ' + fmt(amt) + '.' : 'Your Horn High ' + hhName(key) + ' is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : ''));
		closeHhWinMenu();
	}
	function anyPressTargets(stake, win, rail) { let avail = stake + win; let cap = hornDropCap(stake); let out = []; if (stake <= 25) { for (let inc of [1, 5, 10, 25]) { let t = stake + inc; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = stake * m; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: 0 }); } return out; }
	function anyParlayOption(stake, win, rail) { let avail = stake + win; if (avail <= stake || avail > 5000) return null; return { target: avail, drop: 0 }; }
	function anyHundredParlayOption(stake, win, rail) { let avail = stake + win; let h = Math.floor(avail / 100) * 100 + 100; if (h > 5000) return null; let drop = h - avail; if (drop > Math.max(10, avail / 10) || rail < drop) return null; return { target: h, drop: drop }; }
	function cancelAnySevenWinSequence() { if (anySevenWinTimer) { clearTimeout(anySevenWinTimer); anySevenWinTimer = null; } anySevenWinPending = false; anySevenWinMenu = false; }
	function queueAnySevenWinMenu() { if (!(anySevenBet > 0 && anySevenWin > 0)) { anySevenWinPending = false; return; } anySevenWinPending = true; if (!ceremonyActive && !anySevenWinMenu && !anySevenWinTimer) { anySevenWinTimer = setTimeout(() => { anySevenWinTimer = null; maybePopAnySevenWinMenu(); }, 1500); } }
	function maybePopAnySevenWinMenu() { if (!anySevenWinPending || anySevenWinMenu || ceremonyActive) return; if (anySevenWinTimer) return; if (!(anySevenWin > 0 && anySevenBet > 0)) { anySevenWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || overlayWinMenu || overlayWinPending || hornWinMenu || hornWinPending || anyCrapsWinMenu || worldMenu || ceMenu || worldWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { anySevenWinTimer = setTimeout(() => { anySevenWinTimer = null; maybePopAnySevenWinMenu(); }, 300); return; } clearInputErrs(); anySevenWinCustom = ''; scrollTableIntoView(); anySevenWinMenu = true; }
	function closeAnySevenWinMenu() { if (anySevenWinMenu && anySevenWin > 0 && anySevenBet > 0) { let w = anySevenWin; bankroll += w; anySevenWin = 0; showInform('Picked up your Any Seven winnings ' + fmt(w) + '. Your ' + fmt(anySevenBet) + ' Any Seven bet stays up.'); } anySevenWinMenu = false; anySevenWinPending = false; }
	function anySevenWinSameBet() { if (anySevenWin <= 0 || anySevenBet <= 0) { closeAnySevenWinMenu(); return; } let w = anySevenWin; bankroll += w; anySevenWin = 0; showInform('Picked up your Any Seven winnings ' + fmt(w) + '. Your ' + fmt(anySevenBet) + ' Any Seven bet stays up.'); closeAnySevenWinMenu(); }
	function anySevenWinSameBetDown() { if (anySevenWin <= 0 || anySevenBet <= 0) { closeAnySevenWinMenu(); return; } let s = anySevenBet; let total = anySevenBet + anySevenWin; bankroll += total; anySevenBet = 0; anySevenWin = 0; chipAngles['anySeven'] = undefined; chipAngles = chipAngles; showInform('Took your ' + fmt(s) + ' Any Seven down. ' + fmt(total) + ' to the rail.'); closeAnySevenWinMenu(); }
	function anySevenWinPressTo(target, parlayed) { if (anySevenWin <= 0 || anySevenBet <= 0) { closeAnySevenWinMenu(); return; } let s = anySevenBet; let avail = anySevenBet + anySevenWin; let excess = Math.max(0, avail - target); let drop = Math.max(0, target - avail); if (drop > bankroll) { closeAnySevenWinMenu(); return; } bankroll += excess; bankroll -= drop; anySevenBet = target; anySevenWin = 0; assignAnySevenAngles(); showInform((parlayed ? 'Parlayed your ' : 'Pressed your ') + fmt(s) + ' Any Seven to ' + fmt(target) + '.' + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : '')); closeAnySevenWinMenu(); }
	function onAnySevenWinInput(e) { let v = Number(e.target.value); if (v > 5000) { anySevenWinCustom = 5000; e.target.value = 5000; anySevenWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (anySevenWinErr) anySevenWinErr = ''; }
	function placeAnySevenWinCustom() {
		if (anySevenWin <= 0 || anySevenBet <= 0) { closeAnySevenWinMenu(); return; }
		let amt = Number(anySevenWinCustom);
		if (!amt || amt < 1) { anySevenWinErr = 'Minimum Any Seven bet is $1.'; return; }
		let s = anySevenBet; let avail = anySevenBet + anySevenWin; let excess = Math.max(0, avail - amt); let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { anySevenWinErr = 'That bet needs a ' + fmt(drop) + ' drop and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		anySevenWinErr = '';
		bankroll += excess; bankroll -= drop; anySevenBet = amt; anySevenWin = 0; assignAnySevenAngles();
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' Any Seven to ' + fmt(amt) + '.' : 'Your Any Seven is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : ''));
		closeAnySevenWinMenu();
	}
	function cancelAnyCrapsWinSequence() { if (anyCrapsWinTimer) { clearTimeout(anyCrapsWinTimer); anyCrapsWinTimer = null; } anyCrapsWinPending = false; anyCrapsWinMenu = false; }
	function queueAnyCrapsWinMenu() { if (!(anyCrapsBet > 0 && anyCrapsWin > 0)) { anyCrapsWinPending = false; return; } anyCrapsWinPending = true; if (!ceremonyActive && !anyCrapsWinMenu && !anyCrapsWinTimer) { anyCrapsWinTimer = setTimeout(() => { anyCrapsWinTimer = null; maybePopAnyCrapsWinMenu(); }, 1500); } }
	function maybePopAnyCrapsWinMenu() { if (!anyCrapsWinPending || anyCrapsWinMenu || ceremonyActive) return; if (anyCrapsWinTimer) return; if (!(anyCrapsWin > 0 && anyCrapsBet > 0)) { anyCrapsWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || overlayWinMenu || overlayWinPending || hornWinMenu || hornWinPending || anySevenWinMenu || anySevenWinPending || worldMenu || ceMenu || worldWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { anyCrapsWinTimer = setTimeout(() => { anyCrapsWinTimer = null; maybePopAnyCrapsWinMenu(); }, 300); return; } clearInputErrs(); anyCrapsWinCustom = ''; scrollTableIntoView(); anyCrapsWinMenu = true; }
	function closeAnyCrapsWinMenu() { if (anyCrapsWinMenu && anyCrapsWin > 0 && anyCrapsBet > 0) { let w = anyCrapsWin; bankroll += w; anyCrapsWin = 0; showInform('Picked up your Any Craps winnings ' + fmt(w) + '. Your ' + fmt(anyCrapsBet) + ' Any Craps bet stays up.'); } anyCrapsWinMenu = false; anyCrapsWinPending = false; }
	const propDefs = [ { key: 'horn', name: 'Horn' }, { key: 'hhAces', name: 'Horn High Aces' }, { key: 'hhAceDeuce', name: 'Horn High Ace Deuce' }, { key: 'hhYo', name: 'Horn High Yo' }, { key: 'hhTwelve', name: 'Horn High Twelve' }, { key: 'anySeven', name: 'Any Seven' }, { key: 'anyCraps', name: 'Any Craps' }, { key: 'world', name: 'World' }, { key: 'ceSplit', name: 'C & E' }, { key: 'ceC', name: 'C' }, { key: 'ceE', name: 'E' } ];
	const HH_PROP_KEYS = { hhAces: 'aces', hhAceDeuce: 'aceDeuce', hhYo: 'yo', hhTwelve: 'twelve' };
	function propBetOf(key) { if (key.startsWith('grp:')) return grpStakeOf(key); if (HH_PROP_KEYS[key]) return hhBets[HH_PROP_KEYS[key]]; return key === 'horn' ? hornBet : key === 'anySeven' ? anySevenBet : key === 'anyCraps' ? anyCrapsBet : key === 'world' ? worldBet : key === 'ceSplit' ? ceSplitBet : key === 'ceC' ? ceCBet : ceEBet; }
	function propWinOf(key) { if (key.startsWith('grp:')) return grpWinOf(key); if (HH_PROP_KEYS[key]) return hhWins[HH_PROP_KEYS[key]]; return key === 'horn' ? hornWin : key === 'anySeven' ? anySevenWin : key === 'anyCraps' ? anyCrapsWin : key === 'world' ? worldWin : key === 'ceSplit' ? ceSplitWin : key === 'ceC' ? ceCWin : ceEWin; }
	function setPropBet(key, v) { if (key.startsWith('grp:')) { grpSetBet(key, v); return; } if (HH_PROP_KEYS[key]) { hhBets[HH_PROP_KEYS[key]] = v; hhBets = hhBets; return; } if (key === 'horn') hornBet = v; else if (key === 'anySeven') anySevenBet = v; else if (key === 'anyCraps') anyCrapsBet = v; else if (key === 'world') worldBet = v; else if (key === 'ceSplit') ceSplitBet = v; else if (key === 'ceC') ceCBet = v; else ceEBet = v; }
	function setPropWin(key, v) { if (key.startsWith('grp:')) { grpSetWin(key, v); return; } if (HH_PROP_KEYS[key]) { hhWins[HH_PROP_KEYS[key]] = v; hhWins = hhWins; return; } if (key === 'horn') hornWin = v; else if (key === 'anySeven') anySevenWin = v; else if (key === 'anyCraps') anyCrapsWin = v; else if (key === 'world') worldWin = v; else if (key === 'ceSplit') ceSplitWin = v; else if (key === 'ceC') ceCWin = v; else ceEWin = v; }
	function assignPropAngles(key) { if (key.startsWith('grp:')) { grpAssignAngles(key); return; } if (HH_PROP_KEYS[key]) { assignHhAngles(HH_PROP_KEYS[key]); return; } if (key === 'horn') assignHornAngles(); else if (key === 'anySeven') assignAnySevenAngles(); else if (key === 'anyCraps') assignAnyCrapsAngles(); else if (key === 'world') assignWorldAngles(); else if (key === 'ceSplit') assignCeSplitAngles(); else if (key === 'ceC') assignCeCAngles(); else assignCeEAngles(); }
	function clearPropAngles(key) { if (key.startsWith('grp:')) { grpClearAngles(key); return; } chipAngles[key] = undefined; chipAngles = chipAngles; }
	function propPressOptions(entry) { return entry.key.startsWith('grp:') ? grpPressTargets(entry) : entry.key === 'horn' ? hornPressTargets(entry.stake, entry.win, bankroll) : entry.key.startsWith('hh') ? hhPressTargets(entry.stake, entry.win, bankroll, (hhDefs.find((d) => d.propKey === entry.key) || {}).max || 5000) : entry.key === 'world' ? worldPressTargets(entry.stake, entry.win, bankroll) : entry.key === 'ceSplit' ? ceSplitPressTargets(entry.stake, entry.win, bankroll) : anyPressTargets(entry.stake, entry.win, bankroll); }
	function propPressOptionsLoser(entry, grossWins, rail) { if (entry.key.startsWith('grp:')) return grpPressTargetsLoser(entry, grossWins, rail); let limit = entry.stake + grossWins + rail; let cap = entry.key.startsWith('hh') ? ((hhDefs.find((d) => d.propKey === entry.key) || {}).max || 5000) : 5000; let incs = entry.key === 'horn' ? (entry.stake <= 36 ? [4, 8, 12, 20] : null) : entry.key.startsWith('hh') ? (entry.stake <= 45 ? [5, 10, 15, 25] : null) : entry.key === 'world' ? (entry.stake <= 25 ? [5, 10, 15, 25] : null) : entry.key === 'ceSplit' ? (entry.stake <= 18 ? [2, 4, 6, 10] : null) : (entry.stake <= 25 ? [1, 5, 10, 25] : null); let out = []; if (incs) { for (let inc of incs) { let t = entry.stake + inc; if (t <= cap && t <= limit) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = entry.stake * m; if (t <= cap && t <= limit) out.push({ target: t, inc: 0 }); } return out; }
	function propComboLoserList() { if (!propCombo) return ''; let names = []; for (let e of propCombo.entries) if (e.win <= 0 && !e.pushed) names.push(e.name); if (names.length < 2) return names.join(''); return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1]; }
	function buildPropCombo(stakes, groups) { let entries = []; for (let d of propDefs) { let stake = stakes[d.key] || 0; if (stake > 0) entries.push({ key: d.key, name: d.name, stake: stake, win: propWinOf(d.key), pushed: d.key === 'world' && worldPushPending, lossStakes: 0 }); } for (let e of entries) { if (!e.pushed && e.win <= 0) e.lossStakes = e.stake; } let groupWin = false; if (groups) { for (let g of groups) { let total = 0; let gross = 0; let loss = 0; for (let c of g.parts) { let st = compStakeOf(c); let w = compWinOf(c); total += st; gross += w; if (w <= 0) loss += st; } if (total > 0) { entries.push({ key: grpKeyOf(g.id), name: g.title, stake: total, win: gross, pushed: false, lossStakes: loss, group: true, id: g.id, parts: g.parts.slice(), each: g.each, net: gross - loss }); if (gross > 0) groupWin = true; } } } let grossWins = 0; let losingStakes = 0; let totalStakes = 0; for (let e of entries) { if (e.pushed) continue; totalStakes += e.stake; if (e.win > 0) grossWins += e.win; losingStakes += e.lossStakes; } return { entries: entries, grossWins: grossWins, losingStakes: losingStakes, net: grossWins - losingStakes, totalStakes: totalStakes, winningStakes: totalStakes - losingStakes, groupWin: groupWin }; }
	function initPropComboChoices() { propComboChoices = {}; propComboCustoms = {}; propComboErrs = {}; propComboSubmitErr = ''; if (!propCombo) return; for (let e of propCombo.entries) { propComboChoices[e.key] = { type: 'same', target: 0 }; propComboCustoms[e.key] = ''; propComboErrs[e.key] = ''; } }
	function cancelPropComboSequence() { if (propComboTimer) { clearTimeout(propComboTimer); propComboTimer = null; } propComboPending = false; propComboMenu = false; propCombo = null; propComboChoices = {}; propComboCustoms = {}; propComboErrs = {}; propComboSubmitErr = ''; worldPushPending = false; }
	function queuePropComboMenu(stakes, groups) { let c = buildPropCombo(stakes, groups); worldPushPending = false; if (c.grossWins <= 0) return; if (c.entries.length < 2 && !c.groupWin) return; propCombo = c; initPropComboChoices(); propComboPending = true; if (!ceremonyActive && !propComboMenu && !propComboTimer) { propComboTimer = setTimeout(() => { propComboTimer = null; maybePopPropComboMenu(); }, 1500); } }
	function rearmPropCombo() { if (!propComboPending || !propCombo) return; initPropComboChoices(); if (!ceremonyActive && !propComboMenu && !propComboTimer) { propComboTimer = setTimeout(() => { propComboTimer = null; maybePopPropComboMenu(); }, 1500); } }
	function propComboStillLive() { if (!propCombo) return false; for (let e of propCombo.entries) { if (propBetOf(e.key) !== e.stake) return false; if (e.win > 0 && propWinOf(e.key) !== e.win) return false; } return true; }
	function maybePopPropComboMenu() { if (!propComboPending || propComboMenu || ceremonyActive) return; if (propComboTimer) return; if (!propComboStillLive()) { cancelPropComboSequence(); return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || ceMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || worldMenu || worldWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { propComboTimer = setTimeout(() => { propComboTimer = null; maybePopPropComboMenu(); }, 300); return; } clearInputErrs(); scrollTableIntoView(); propComboMenu = true; }
	function finishPropCombo() { propComboMenu = false; propComboPending = false; propCombo = null; propComboChoices = {}; propComboCustoms = {}; propComboErrs = {}; propComboSubmitErr = ''; }
	function propComboRebetLosers() { for (let e of propCombo.entries) { if (!e.pushed && e.win <= 0 && propBetOf(e.key) !== e.stake) { setPropBet(e.key, e.stake); assignPropAngles(e.key); } } }
	function propComboZeroWins() { for (let e of propCombo.entries) if (e.win > 0) setPropWin(e.key, 0); }
	function sweepPropComboLosers() { if (!propCombo) return; for (let e of propCombo.entries) { if (!e.pushed && e.win <= 0 && propBetOf(e.key) > 0) { setPropBet(e.key, 0); clearPropAngles(e.key); if (e.key.startsWith('grp:')) removeSuGroup(grpIdOf(e.key)); } } }
	function closePropComboMenu() { if (!propComboMenu || !propCombo) { propComboMenu = false; return; } if (propCombo.net >= 0) propComboSameBetAll(); else propComboSameBetWinners(); }
	function propComboSameBetAll() { if (!propCombo) { finishPropCombo(); return; } let c = propCombo; bankroll += c.net; propComboZeroWins(); propComboRebetLosers(); showInform('Same Bet on all your prop bets. ' + (c.losingStakes > 0 ? 'Your losers are re-bet, and ' : '') + fmt(c.net) + ' banked to the rail.'); finishPropCombo(); }
	function propComboSameBetDownAll() { if (!propCombo) { finishPropCombo(); return; } let c = propCombo; let total = c.grossWins + c.winningStakes; bankroll += total; for (let e of c.entries) { if (e.win > 0) { setPropBet(e.key, 0); setPropWin(e.key, 0); clearPropAngles(e.key); } } sweepPropComboLosers(); for (let e of c.entries) if (e.group) removeSuGroup(e.id); showInform('Took your winning prop bets down. ' + fmt(total) + ' to the rail.'); finishPropCombo(); }
	function propComboSameBetWinners() { if (!propCombo) { finishPropCombo(); return; } let c = propCombo; bankroll += c.grossWins; propComboZeroWins(); sweepPropComboLosers(); showInform('Picked up your prop winnings ' + fmt(c.grossWins) + '. Your winning bets stay up, your losers stay down.'); finishPropCombo(); }
	function propComboDropToKeepUp() { if (!propCombo) { finishPropCombo(); return; } let c = propCombo; let short = c.losingStakes - c.grossWins; if (short <= 0 || bankroll < short) return; bankroll -= short; propComboZeroWins(); propComboRebetLosers(); showInform('Dropped ' + fmt(short) + ' to keep all your prop bets up to win again.'); finishPropCombo(); }
	function propComboChoose(key, type, target) { propComboChoices[key] = { type: type, target: target || 0 }; propComboChoices = propComboChoices; propComboSubmitErr = ''; }
	function propComboPlan(c, choices) { let need = 0; let downStakes = 0; for (let e of c.entries) { let ch = choices[e.key] || { type: 'same', target: 0 }; if (e.pushed) continue; if (e.win <= 0) { if (ch.type === 'target') need += ch.target; else if (ch.type === 'same') need += e.stake; continue; } if (ch.type === 'down') downStakes += e.stake - (e.lossStakes || 0); else if (ch.type === 'target') need += ch.target - e.stake + (e.lossStakes || 0); else need += (e.lossStakes || 0); } let railDraw = Math.max(0, need - c.grossWins); return { need: need, railDraw: railDraw, downStakes: downStakes, banked: c.grossWins - need + downStakes }; }
	function propComboSubmit() { if (!propCombo || propCombo.net < 0) return; let plan = propComboPlan(propCombo, propComboChoices); if (plan.railDraw > bankroll) { propComboSubmitErr = 'You need ' + fmt(plan.railDraw - bankroll) + ' more to do all that.'; return; } for (let e of propCombo.entries) { let ch = propComboChoices[e.key] || { type: 'same', target: 0 }; if (e.pushed) continue; if (e.win <= 0) { if (ch.type === 'down') { setPropBet(e.key, 0); clearPropAngles(e.key); } else if (ch.type === 'target' && ch.target !== e.stake) { setPropBet(e.key, ch.target); assignPropAngles(e.key); } else if (propBetOf(e.key) !== e.stake) { setPropBet(e.key, e.stake); assignPropAngles(e.key); } if (e.group) applyGroupOutcome(e, ch.type, ch.target); continue; } if (ch.type === 'down') { setPropBet(e.key, 0); clearPropAngles(e.key); } else if (ch.type === 'target') { setPropBet(e.key, ch.target); assignPropAngles(e.key); } setPropWin(e.key, 0); if (e.group) applyGroupOutcome(e, ch.type, ch.target); } bankroll += plan.banked; showInform('Settled your prop bets. ' + fmt(Math.max(0, plan.banked)) + ' to the rail.' + (plan.railDraw > 0 ? ' ' + fmt(plan.railDraw) + ' dropped from the rail.' : '')); finishPropCombo(); }
	function onPropComboCustomInput(key, e) { let v = Number(e.target.value); let cap = 5000; if (key.startsWith('hh')) { let d = hhDefs.find((x) => x.propKey === key); if (d) cap = d.max; } if (v > cap) { propComboCustoms[key] = cap; e.target.value = cap; propComboErrs[key] = 'Max on this bet is ' + fmt(cap) + '.'; } else if (propComboErrs[key]) propComboErrs[key] = ''; propComboCustoms = propComboCustoms; propComboErrs = propComboErrs; }
	function propComboChooseCustom(key) { if (!propCombo) return; let entry = null; for (let e of propCombo.entries) if (e.key === key) entry = e; if (!entry) return; let amt = Number(propComboCustoms[key]); let problem = ''; if (key === 'horn') { if (!amt || amt < 4) problem = 'Minimum Horn bet is $4.'; else if (amt % 4 !== 0) problem = 'Horn bets go in $4 steps, so each number gets its share.'; } else if (key === 'world') { if (!amt || amt < 5) problem = 'Minimum World bet is $5.'; else if (amt % 5 !== 0) problem = 'World bets go in $5 steps.'; } else if (key.startsWith('hh')) { let hhMax = (hhDefs.find((x) => x.propKey === key) || {}).max || 5000; if (!amt || amt < 5) problem = 'Minimum Horn High bet is $5.'; else if (amt % 5 !== 0) problem = 'Horn High bets go in $5 steps.'; else if (amt > hhMax) problem = 'Table max on a Horn High bet is ' + fmt(hhMax) + '.'; } else if (key === 'ceSplit') { if (!amt || amt < 2) problem = 'Minimum C & E split bet is $2.'; else if (Math.round(amt * 100) % 50 !== 0) problem = 'C & E split bets go in 50 cent steps.'; } else if (key === 'ceC' || key === 'ceE') { if (!amt || amt < 1) problem = 'Minimum ' + entry.name + ' bet is $1.'; else if (Math.round(amt * 100) % 100 !== 0) problem = entry.name + ' bets go in whole dollars.'; } else if (key.startsWith('grp:')) { if (!amt || amt < 1) problem = 'Minimum ' + entry.name + ' bet is $1.'; else if (Math.round(amt * 100) % 100 !== 0) problem = entry.name + ' bets go in whole dollars.'; } else if (!amt || amt < 1) problem = 'Minimum ' + entry.name + ' bet is $1.'; if (problem) { propComboErrs[key] = problem; propComboErrs = propComboErrs; return; } propComboErrs[key] = ''; propComboErrs = propComboErrs; propComboChoose(key, 'target', key.startsWith('grp:') ? amt * entry.parts.length : amt); }
	function anyCrapsWinSameBet() { if (anyCrapsWin <= 0 || anyCrapsBet <= 0) { closeAnyCrapsWinMenu(); return; } let w = anyCrapsWin; bankroll += w; anyCrapsWin = 0; showInform('Picked up your Any Craps winnings ' + fmt(w) + '. Your ' + fmt(anyCrapsBet) + ' Any Craps bet stays up.'); closeAnyCrapsWinMenu(); }
	function anyCrapsWinSameBetDown() { if (anyCrapsWin <= 0 || anyCrapsBet <= 0) { closeAnyCrapsWinMenu(); return; } let s = anyCrapsBet; let total = anyCrapsBet + anyCrapsWin; bankroll += total; anyCrapsBet = 0; anyCrapsWin = 0; chipAngles['anyCraps'] = undefined; chipAngles = chipAngles; showInform('Took your ' + fmt(s) + ' Any Craps down. ' + fmt(total) + ' to the rail.'); closeAnyCrapsWinMenu(); }
	function anyCrapsWinPressTo(target, parlayed) { if (anyCrapsWin <= 0 || anyCrapsBet <= 0) { closeAnyCrapsWinMenu(); return; } let s = anyCrapsBet; let avail = anyCrapsBet + anyCrapsWin; let excess = Math.max(0, avail - target); let drop = Math.max(0, target - avail); if (drop > bankroll) { closeAnyCrapsWinMenu(); return; } bankroll += excess; bankroll -= drop; anyCrapsBet = target; anyCrapsWin = 0; assignAnyCrapsAngles(); showInform((parlayed ? 'Parlayed your ' : 'Pressed your ') + fmt(s) + ' Any Craps to ' + fmt(target) + '.' + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : '')); closeAnyCrapsWinMenu(); }
	function onAnyCrapsWinInput(e) { let v = Number(e.target.value); if (v > 5000) { anyCrapsWinCustom = 5000; e.target.value = 5000; anyCrapsWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (anyCrapsWinErr) anyCrapsWinErr = ''; }
	function placeAnyCrapsWinCustom() {
		if (anyCrapsWin <= 0 || anyCrapsBet <= 0) { closeAnyCrapsWinMenu(); return; }
		let amt = Number(anyCrapsWinCustom);
		if (!amt || amt < 1) { anyCrapsWinErr = 'Minimum Any Craps bet is $1.'; return; }
		let s = anyCrapsBet; let avail = anyCrapsBet + anyCrapsWin; let excess = Math.max(0, avail - amt); let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { anyCrapsWinErr = 'That bet needs a ' + fmt(drop) + ' drop and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		anyCrapsWinErr = '';
		bankroll += excess; bankroll -= drop; anyCrapsBet = amt; anyCrapsWin = 0; assignAnyCrapsAngles();
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' Any Craps to ' + fmt(amt) + '.' : 'Your Any Craps is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : ''));
		closeAnyCrapsWinMenu();
	}

	function assignAnySevenAngles() { chipAngles['anySeven'] = stackCheques(anySevenBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function assignAnyCrapsAngles() { chipAngles['anyCraps'] = stackCheques(anyCrapsBet).map(() => randomAngle()); chipAngles = chipAngles; }
	function openAnySevenMenu() { if (rolling) return; clearInputErrs(); anySevenCustom = ''; anySevenMenu = true; }
	function openAnyCrapsMenu() { if (rolling) return; clearInputErrs(); anyCrapsCustom = ''; anyCrapsMenu = true; }
	function onAnySevenInput(e) { let v = Number(e.target.value); if (v > 5000) { anySevenCustom = 5000; e.target.value = 5000; anySevenErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (anySevenErr) anySevenErr = ''; }
	function onAnyCrapsInput(e) { let v = Number(e.target.value); if (v > 5000) { anyCrapsCustom = 5000; e.target.value = 5000; anyCrapsErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (anyCrapsErr) anyCrapsErr = ''; }
	function placeAnySeven(amt, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		amt = Number(amt);
		if (!amt || amt <= 0) return false;
		if (amt > 5000) { showAlert('Table max on Any Seven is $5000.'); return false; }
		if (bankroll + anySevenBet + anySevenWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on Any Seven.'); return false; }
		let oldBet = anySevenBet; let oldWin = anySevenWin;
		if (oldWin > 0) { bankroll += oldWin; anySevenWin = 0; }
		cancelAnySevenWinSequence();
		cancelPropComboSequence();
		dissolveGroupsCovering('anySeven');
		bankroll += oldBet; bankroll -= amt;
		anySevenBet = amt;
		assignAnySevenAngles();
		showAsk(oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' Any Seven bet with ' + fmt(amt) + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amt) + ' on Any Seven.');
		anySevenMenu = false;
		return true;
	}
	function placeAnyCraps(amt, fromTest = false) {
		if (rolling && !fromTest) return false;
		sweepPropComboLosers();
		amt = Number(amt);
		if (!amt || amt <= 0) return false;
		if (amt > 5000) { showAlert('Table max on Any Craps is $5000.'); return false; }
		if (bankroll + anyCrapsBet + anyCrapsWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on Any Craps.'); return false; }
		let oldBet = anyCrapsBet; let oldWin = anyCrapsWin;
		if (oldWin > 0) { bankroll += oldWin; anyCrapsWin = 0; }
		cancelAnyCrapsWinSequence();
		cancelPropComboSequence();
		bankroll += oldBet; bankroll -= amt;
		anyCrapsBet = amt;
		assignAnyCrapsAngles();
		showAsk(oldBet > 0 ? 'Replaced ' + fmt(oldBet) + ' Any Craps bet with ' + fmt(amt) + '.' + (oldWin > 0 ? ' Win ' + fmt(oldWin) + ' returned to the rail.' : '') : 'Bet ' + fmt(amt) + ' on Any Craps.');
		anyCrapsMenu = false;
		return true;
	}
	function takeDownAnySeven() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (anySevenBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); anySevenMenu = false; } return; }
		let total = anySevenBet + anySevenWin;
		bankroll += total;
		showInform('Took down your Any Seven bet. ' + fmt(total) + ' back to the rail.' + (anySevenWin > 0 ? ' That includes your ' + fmt(anySevenWin) + ' win.' : ''));
		anySevenBet = 0; anySevenWin = 0; chipAngles['anySeven'] = undefined; chipAngles = chipAngles;
		dissolveGroupsCovering('anySeven');
		cancelAnySevenWinSequence();
		cancelPropComboSequence();
		anySevenMenu = false;
	}
	function takeDownAnyCraps() {
		if (rolling) return;
		let hadPropCombo = !!propCombo;
		sweepPropComboLosers();
		if (anyCrapsBet <= 0) { if (hadPropCombo) { cancelPropComboSequence(); anyCrapsMenu = false; } return; }
		let total = anyCrapsBet + anyCrapsWin;
		bankroll += total;
		showInform('Took down your Any Craps bet. ' + fmt(total) + ' back to the rail.' + (anyCrapsWin > 0 ? ' That includes your ' + fmt(anyCrapsWin) + ' win.' : ''));
		anyCrapsBet = 0; anyCrapsWin = 0; chipAngles['anyCraps'] = undefined; chipAngles = chipAngles;
		cancelAnyCrapsWinSequence();
		cancelPropComboSequence();
		anyCrapsMenu = false;
	}
	function resolveAnySeven(total, deferLoss) {
		if (anySevenBet === 0) return;
		let anyMsg = '';
		if (total === 7) { anySevenWin = anySevenBet * 4; anyMsg = 'Any Seven won ' + fmt(anySevenWin) + '.'; }
		else { anyMsg = 'Any Seven loses on ' + total + '.'; if (!deferLoss) { anySevenBet = 0; anySevenWin = 0; chipAngles['anySeven'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + anyMsg : anyMsg;
	}
	function resolveAnyCraps(total, deferLoss) {
		if (anyCrapsBet === 0) return;
		let anyMsg = '';
		if (total === 2 || total === 3 || total === 12) { anyCrapsWin = anyCrapsBet * 7; anyMsg = 'Any Craps won ' + fmt(anyCrapsWin) + ' on ' + total + '.'; }
		else { anyMsg = 'Any Craps loses on ' + total + '.'; if (!deferLoss) { anyCrapsBet = 0; anyCrapsWin = 0; chipAngles['anyCraps'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + anyMsg : anyMsg;
	}
	function worldWinFor(stake, total) { if (total === 2 || total === 12) return (stake / 5) * 26; if (total === 3 || total === 11) return (stake / 5) * 11; return 0; }
	function resolveWorld(total, deferLoss) {
		if (worldBet === 0) return;
		let worldMsg = '';
		let w = worldWinFor(worldBet, total);
		if (w > 0) { worldWin = w; worldMsg = 'World won ' + fmt(w) + ' on ' + total + '.'; }
		else if (total === 7) { worldPushPending = true; worldMsg = 'World pushes on the 7.'; }
		else { worldMsg = 'World loses on ' + total + '.'; if (!deferLoss) { worldBet = 0; worldWin = 0; chipAngles['world'] = undefined; chipAngles = chipAngles; } }
		message = message ? message + ' ' + worldMsg : worldMsg;
	}
	function worldPressTargets(stake, win, rail) { let avail = stake + win; let cap = hornDropCap(stake); let out = []; if (stake <= 25) { for (let inc of [5, 10, 15, 25]) { let t = stake + inc; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: inc }); } return out; } for (let m of [2, 3, 4, 5]) { let t = stake * m; if (t > 5000) continue; let drop = Math.max(0, t - avail); if (drop <= cap && rail >= drop) out.push({ target: t, inc: 0 }); } return out; }
	function worldParlayOption(stake, win, rail) { let avail = stake + win; let p = Math.floor(avail / 5) * 5; if (p === avail) { return p > stake && p <= 5000 ? { target: p, drop: 0 } : null; } let next = p + 5; let drop = next - avail; if (next <= 5000 && drop <= hornDropCap(stake) && rail >= drop) return { target: next, drop: drop }; return p > stake ? { target: p, drop: 0 } : null; }
	function worldHundredParlayOption(stake, win, rail) { let avail = stake + win; let h = Math.floor(avail / 100) * 100 + 100; if (h > 5000) return null; let drop = h - avail; if (drop > Math.max(10, avail / 10) || rail < drop) return null; let std = worldParlayOption(stake, win, rail); if (std && std.target === h) return null; return { target: h, drop: drop }; }
	function cancelWorldWinSequence() { if (worldWinTimer) { clearTimeout(worldWinTimer); worldWinTimer = null; } worldWinPending = false; worldWinMenu = false; }
	function queueWorldWinMenu() { if (!(worldBet > 0 && worldWin > 0)) { worldWinPending = false; return; } worldWinPending = true; if (!ceremonyActive && !worldWinMenu && !worldWinTimer) { worldWinTimer = setTimeout(() => { worldWinTimer = null; maybePopWorldWinMenu(); }, 1500); } }
	function maybePopWorldWinMenu() { if (!worldWinPending || worldWinMenu || ceremonyActive) return; if (worldWinTimer) return; if (!(worldWin > 0 && worldBet > 0)) { worldWinPending = false; return; } if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || comePtMenu || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || overlayMenu || bandChooser || popupPending || pendingComeMenu || pendingPayMenu || pendingComeOddsMenu || dcPileMenu || pendingDcMenu || hornMenu || anySevenMenu || anyCrapsMenu || worldMenu || ceMenu || overlayWinMenu || overlayWinPending || hornWinMenu || anySevenWinMenu || anyCrapsWinMenu || hopChooser || hopSub || hhMenu || hhWinMenuKey) { worldWinTimer = setTimeout(() => { worldWinTimer = null; maybePopWorldWinMenu(); }, 300); return; } clearInputErrs(); worldWinCustom = ''; scrollTableIntoView(); worldWinMenu = true; }
	function closeWorldWinMenu() { if (worldWinMenu && worldWin > 0 && worldBet > 0) { let w = worldWin; bankroll += w; worldWin = 0; showInform('Picked up your World winnings ' + fmt(w) + '. Your ' + fmt(worldBet) + ' World bet stays up.'); } worldWinMenu = false; worldWinPending = false; }
	function worldWinSameBet() { if (worldWin <= 0 || worldBet <= 0) { closeWorldWinMenu(); return; } let w = worldWin; bankroll += w; worldWin = 0; showInform('Picked up your World winnings ' + fmt(w) + '. Your ' + fmt(worldBet) + ' World bet stays up.'); closeWorldWinMenu(); }
	function worldWinSameBetDown() { if (worldWin <= 0 || worldBet <= 0) { closeWorldWinMenu(); return; } let s = worldBet; let total = worldBet + worldWin; bankroll += total; worldBet = 0; worldWin = 0; chipAngles['world'] = undefined; chipAngles = chipAngles; showInform('Took your ' + fmt(s) + ' World down. ' + fmt(total) + ' to the rail.'); closeWorldWinMenu(); }
	function worldWinPressTo(target, parlayed) { if (worldWin <= 0 || worldBet <= 0) { closeWorldWinMenu(); return; } let s = worldBet; let avail = worldBet + worldWin; let excess = Math.max(0, avail - target); let drop = Math.max(0, target - avail); if (drop > bankroll) { closeWorldWinMenu(); return; } bankroll += excess; bankroll -= drop; worldBet = target; worldWin = 0; assignWorldAngles(); showInform((parlayed ? 'Parlayed your ' : 'Pressed your ') + fmt(s) + ' World to ' + fmt(target) + '.' + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : '')); closeWorldWinMenu(); }
	function onWorldWinInput(e) { let v = Number(e.target.value); if (v > 5000) { worldWinCustom = 5000; e.target.value = 5000; worldWinErr = 'Max on this bet is ' + fmt(5000) + '.'; } else if (worldWinErr) worldWinErr = ''; }
	function placeWorldWinCustom() {
		if (worldWin <= 0 || worldBet <= 0) { closeWorldWinMenu(); return; }
		let amt = Number(worldWinCustom);
		if (!amt || amt < 5) { worldWinErr = 'Minimum World bet is $5.'; return; }
		if (amt % 5 !== 0) { worldWinErr = 'World bets go in $5 steps.'; return; }
		let s = worldBet; let avail = worldBet + worldWin; let excess = Math.max(0, avail - amt); let drop = Math.max(0, amt - avail);
		if (drop > bankroll) { worldWinErr = 'That bet needs a ' + fmt(drop) + ' drop and you have ' + fmt(bankroll) + ' in the rail.'; return; }
		worldWinErr = '';
		bankroll += excess; bankroll -= drop; worldBet = amt; worldWin = 0; assignWorldAngles();
		showInform((amt > s ? 'Pressed your ' + fmt(s) + ' World to ' + fmt(amt) + '.' : 'Your World is now ' + fmt(amt) + '.') + (excess > 0 ? ' ' + fmt(excess) + ' back to the rail.' : '') + (drop > 0 ? ' ' + fmt(drop) + ' dropped from the rail.' : ''));
		closeWorldWinMenu();
	}
	function resolveField(total) {
		if (bets.field === 0) return;
		let fieldMsg = '';
		if (total === 2 || total === 12) { wins.field = bets.field * 2; fieldMsg = 'Field won ' + fmt(wins.field) + ' on ' + total + ', 2 to 1.'; }
		else if ([3, 4, 9, 10, 11].includes(total)) { wins.field = bets.field; fieldMsg = 'Field won ' + fmt(wins.field) + ' on ' + total + '.'; }
		else { fieldMsg = 'Field loses on ' + total + '.'; bets.field = 0; }
		message = message ? message + ' ' + fieldMsg : fieldMsg;
		wins = wins;
		if (wins.field > 0) { message += ' Tap Field to decide.'; messageKind = 'notify'; }
	}

	function placeWinAmount(key, betAmt, isBuy, num) { if (isBuy) return betAmt * 2; if (num === 6 || num === 8) return Math.floor(betAmt / 6) * 7 + betAmt % 6; if (num === 5 || num === 9) return Math.floor(betAmt / 5) * 7 + betAmt % 5; return Math.floor(betAmt / 5) * 9 + betAmt % 5; }
	function payNetWin() { if (!payMenu) return 0; return payMenu.win; }
	function paySameBetNet() { if (!payMenu) return 0; return payMenu.win - (payMenu.isBuy ? Math.floor(payMenu.bet / 20) : 0); }
	function scrollTableIntoView() { clearInputErrs(); if (typeof document !== 'undefined') { let tableEl = document.querySelector('.table-wrap'); if (tableEl) tableEl.scrollIntoView({ behavior: 'auto', block: 'center' }); } }
	function payUnit(key) { return (key === 'place6' || key === 'place8') ? 6 : 5; }
	// Original Place pay menus, ported from the old game (showPlace*Btns, fixed old TS).
	// Entry: [exact bets, ranges, press buttons 1=one unit 2=five units 3=press it 4=full press, goTo [[target,label]], double [[target,label]], tableMax 0/1, disclaimer 0=hidden 1=default 2=move 3=move-full 4=hit-max 5=table-max].
	// Range menus never use a plus label, and only offer Go To buttons the win covers for the whole range.
	// Bet amounts with no old menu case at all fall back to the clean ladder: $140 and $145 on Four/Ten only.
	const payMenuTable = {
	  '4-10': [
	    [[5], [], '13', [[10, "$10"], [15, "+1 to $15"]], [[10, "+1 to $10e 4 & 10"]], 0, 0],
	    [[10], [], '1', [[15, "$15"], [20, "b$20"], [25, "b$25"]], [[15, "$15e 4 & 10"]], 0, 0],
	    [[15], [], '1', [[20, "b$20"], [25, "b$25"], [35, "b$35"], [40, "b$40"]], [[20, "b$20e 4 & 10"], [25, "b$25e 4 & 10"]], 0, 0],
	    [[20], [], '13', [[25, "b$25"], [35, "b$35"], [50, "b$50"], [60, "+3 to b$60"]], [[25, "$25e 4 & 10"], [30, "$30e 4 & 10"], [35, "$35e 4 & 10"], [40, "+3 to $40e 4 & 10"]], 0, 0],
	    [[], [[21, 24]], '', [[25, "b$25"], [30, "b$30"], [40, "b$40"], [50, "b$50"]], [], 0, 1],
	    [[25], [], '123', [[30, "b$30"], [35, "b$35"], [50, "b$50"], [75, "+3 to b$75"]], [[30, "$30e 4 & 10"], [35, "$35e 4 & 10"], [40, "$40e 4 & 10"], [50, "+3 to $50e 4 & 10"]], 0, 0],
	    [[], [[26, 29]], '', [[30, "b$30"], [35, "b$35"], [50, "b$50"], [60, "b$60"]], [], 0, 1],
	    [[30], [], '13', [[35, "b$35"], [50, "b$50"], [75, "b$75"], [90, "+4 to b$90"]], [[35, "$35e 4 & 10"], [40, "$40e 4 & 10"], [50, "$50e 4 & 10"]], 0, 0],
	    [[], [[31, 34]], '', [[35, "b$35"], [50, "b$50"], [60, "b$60"], [75, "b$75"]], [], 0, 1],
	    [[35], [], '13', [[40, "b$40"], [50, "b$50"], [75, "b$75"], [100, "b$100"]], [[40, "$40e 4 & 10"], [50, "$50e 4 & 10"]], 0, 0],
	    [[], [[36, 39]], '', [[40, "b$40"], [50, "b$50"], [75, "b$75"], [100, "b$100"]], [], 0, 1],
	    [[40], [], '13', [[50, "b$50"], [75, "b$75"], [100, "b$100"], [120, "+6 to b$120"]], [[50, "$50e 4 & 10"], [75, "$75e 4 & 10"]], 0, 0],
	    [[], [[41, 44]], '', [[50, "b$50"], [60, "b$60"], [75, "b$75"], [100, "b$100"]], [], 0, 1],
	    [[45], [], '13', [[50, "b$50"], [75, "b$75"], [100, "b$100"], [125, "b$125"]], [], 0, 0],
	    [[], [[46, 49]], '', [[50, "b$50"], [75, "b$75"], [100, "b$100"], [125, "b$125"]], [], 0, 1],
	    [[50], [], '23', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "+7 to b$150"]], [[75, "$75e 4 & 10"], [100, "+8 to $100e 4 & 10"]], 0, 0],
	    [[], [[51, 54]], '', [[60, "b$60"], [75, "b$75"], [100, "b$100"], [125, "b$125"]], [], 0, 1],
	    [[55], [], '3', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 0],
	    [[], [[56, 59]], '', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 1],
	    [[60], [], '3', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 0],
	    [[], [[61, 64]], '', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 1],
	    [[65], [], '', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 0],
	    [[], [[66, 69]], '', [[75, "b$75"], [100, "b$100"], [125, "b$125"], [150, "b$150"]], [], 0, 1],
	    [[70], [], '', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [], 0, 0],
	    [[], [[71, 74]], '', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [], 0, 1],
	    [[75], [], '23', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [[100, "$100e 4 & 10"], [125, "$125e 4 & 10"], [150, "+11 to $150e 4 & 10"]], 0, 0],
	    [[], [[76, 79]], '', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [], 0, 1],
	    [[80, 85], [], '', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [], 0, 0],
	    [[], [[81, 84], [86, 89]], '', [[100, "b$100"], [125, "b$125"], [150, "b$150"], [200, "b$200"]], [], 0, 1],
	    [[90, 95], [], '', [[100, "b$100"], [125, "b$125"], [200, "b$200"], [250, "b$250"]], [], 0, 0],
	    [[], [[91, 94], [96, 99]], '', [[100, "b$100"], [125, "b$125"], [200, "b$200"], [250, "b$250"]], [], 0, 1],
	    [[100], [], '23', [[125, "b$125"], [150, "b$150"], [200, "b$200"], [300, "+15 to b$300"]], [[150, "b$150e 4 & 10"], [200, "+15 to b$200e 4 & 10"]], 0, 0],
	    [[], [[101, 104]], '', [[125, "b$125"], [150, "b$150"], [200, "b$200"], [250, "b$250"]], [], 0, 1],
	    [[105, 110, 115, 120], [], '', [[150, "b$150"], [200, "b$200"], [250, "b$250"], [300, "b$300"]], [], 0, 0],
	    [[], [[106, 109], [111, 114], [116, 119], [121, 124]], '', [[150, "b$150"], [200, "b$200"], [250, "b$250"], [300, "b$300"]], [], 0, 1],
	    [[125], [], '23', [[150, "b$150"], [200, "b$200"], [250, "b$250"], [350, "b$350"]], [], 0, 0],
	    [[], [[126, 134]], '', [[150, "b$150"], [200, "b$200"], [250, "b$250"], [350, "b$350"]], [], 0, 1],
	    [[135, 149], [], '', [[150, "b$150"], [200, "b$200"], [300, "b$300"], [400, "b$400"]], [], 0, 1],
	    [[150], [], '23', [[200, "b$200"], [250, "b$250"], [400, "b$400"], [450, "+22 to b$450"]], [[200, "b$200e 4 & 10"], [250, "b$250e 4 & 10"]], 0, 0],
	    [[], [[151, 174]], '', [[200, "b$200"], [250, "b$250"], [400, "b$400"], [450, "b$450"]], [], 0, 1],
	    [[175], [], '23', [[200, "b$200"], [300, "b$300"], [400, "b$400"], [500, "b$500"]], [], 0, 0],
	    [[], [[176, 199]], '', [[200, "b$200"], [300, "b$300"], [400, "b$400"], [500, "b$500"]], [], 0, 1],
	    [[200], [], '3', [[300, "b$300"], [400, "b$400"], [500, "b$500"], [600, "+30 to b$600"]], [[250, "b$250e 4 & 10"]], 0, 0],
	    [[], [[201, 224]], '', [[250, "b$250"], [300, "b$300"], [400, "b$400"], [500, "b$500"]], [], 0, 1],
	    [[225], [], '23', [[300, "b$300"], [400, "b$400"], [500, "b$500"], [600, "b$600"]], [], 0, 0],
	    [[], [[226, 249]], '', [[300, "b$300"], [400, "b$400"], [500, "b$500"], [600, "b$600"]], [], 0, 1],
	    [[250], [], '3', [[400, "b$400"], [500, "b$500"], [600, "b$600"], [750, "+37 to b$750"]], [], 0, 0],
	    [[], [[251, 299]], '', [[400, "b$400"], [500, "b$500"], [600, "b$600"], [700, "b$700"]], [], 0, 1],
	    [[300], [], '3', [[400, "b$400"], [500, "b$500"], [750, "b$750"], [900, "+45 to b$900"]], [], 0, 0],
	    [[], [[301, 349]], '', [[400, "b$400"], [500, "b$500"], [750, "b$750"], [800, "b$800"]], [], 0, 1],
	    [[350], [], '3', [[400, "b$400"], [500, "b$500"], [750, "b$750"], [1000, "b$1,000"]], [], 0, 0],
	    [[], [[351, 399], [401, 449], [451, 499]], '', [[500, "b$500"], [600, "b$600"], [750, "b$750"], [1000, "b$1,000"]], [], 0, 1],
	    [[400, 450], [], '3', [[500, "b$500"], [600, "b$600"], [750, "b$750"], [1000, "b$1,000"]], [], 0, 0],
	    [[500], [], '3', [[600, "b$600"], [750, "b$750"], [1000, "b$1,000"], [1500, "+75 to b$1,500"]], [], 0, 0],
	    [[], [[501, 599]], '', [[600, "b$600"], [750, "b$750"], [800, "b$800"], [1000, "b$1,000"]], [], 0, 1],
	    [[600], [], '', [[750, "b$750"], [1000, "b$1,000"], [1500, "b$1,500"], [2000, "+300 to b$2,000"]], [], 0, 0],
	    [[], [[601, 699]], '', [[750, "b$750"], [1000, "b$1,000"], [1500, "b$1,500"]], [], 0, 1],
	    [[700, 750, 800], [], '', [[900, "b$900"], [1000, "b$1,000"], [1500, "b$1,500"], [2000, "b$2,000"]], [], 0, 0],
	    [[], [[701, 749], [751, 799], [801, 899]], '', [[900, "b$900"], [1000, "b$1,000"], [1500, "b$1,500"], [2000, "b$2,000"]], [], 0, 1],
	    [[900], [], '', [[1000, "b$1,000"], [1500, "b$1,500"], [2000, "b$2,000"], [2500, "b$2,500"]], [], 0, 0],
	    [[], [[901, 999]], '', [[1000, "b$1,000"], [1500, "b$1,500"], [2000, "b$2,000"], [2500, "b$2,500"]], [], 0, 1],
	    [[1000], [], '3', [[1500, "b$1,500"], [2000, "b$2,000"], [2500, "b$2,500"], [3000, "+150 to b$3,000"]], [], 0, 0],
	    [[], [[1001, 1049]], '', [[1500, "b$1,500"], [2000, "b$2,000"], [2500, "b$2,500"]], [], 0, 1],
	    [[], [[1050, 1499]], '', [[1500, "b$1,500"], [2000, "b$2,000"], [2500, "b$2,500"], [3000, "b$3,000"]], [], 0, 1],
	    [[1500], [], '3', [[2500, "b$2,500"], [3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"]], [], 0, 0],
	    [[], [[1501, 1999]], '', [[2500, "b$2,500"], [3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"]], [], 0, 1],
	    [[2000], [], '3', [[2500, "b$2,500"], [3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"]], [], 1, 0],
	    [[], [[2001, 2499]], '', [[2500, "b$2,500"], [3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"]], [], 1, 1],
	    [[2500], [], '3', [[3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 0],
	    [[], [[2501, 2999]], '', [[3000, "b$3,000"], [3500, "b$3,500"], [4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 1],
	    [[3000], [], '', [[3500, "b$3,500"], [4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 0],
	    [[], [[3001, 3499]], '', [[3500, "b$3,500"], [4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 1],
	    [[3500], [], '', [[4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 0],
	    [[], [[3501, 3999]], '', [[4000, "b$4,000"], [4500, "b$4,500"]], [], 1, 1],
	    [[4000], [], '', [[4500, "b$4,500"]], [], 1, 0],
	    [[], [[4001, 4499]], '', [[4500, "b$4,500"]], [], 1, 1],
	    [[4500], [], '', [], [], 1, 0],
	    [[], [[4501, 4999]], '', [], [], 1, 1],
	    [[5000], [], '', [], [], 0, 5],
  ],
  '5-9': [
    [[5], [], '134', [[10, "$10"], [15, "+3 to $15"]], [[10, "+3 to $10e 5 & 9"]], 0, 0],
    [[10], [], '134', [[15, "$15"], [20, "$20"], [25, "+1 to $25"]], [[15, "$15e 5 & 9"]], 0, 0],
    [[15], [], '134', [[20, "$20"], [25, "$25"], [30, "$30"], [35, "$35"]], [[20, "$20e 5 & 9"], [25, "$25e 5 & 9"]], 0, 0],
    [[20], [], '134', [[25, "$25"], [30, "$30"], [35, "$35"], [50, "+2 to $50"]], [[25, "$25e 5 & 9"], [30, "$30e 5 & 9"], [35, "+2 to $35e 5 & 9"]], 0, 0],
    [[25], [], '1234', [[30, "$30"], [35, "$35"], [50, "$50"], [60, "$60"]], [[30, "$30e 5 & 9"], [35, "$35e 5 & 9"], [40, "$40e 5 & 9"], [45, "+5 to $45e 5 & 9"]], 0, 0],
    [[30], [], '134', [[35, "$35"], [50, "$50"], [60, "$60"], [75, "+3 to $75"]], [[35, "$35e 5 & 9"], [40, "$40e 5 & 9"], [45, "$45e 5 & 9"], [50, "$50e 5 & 9"]], 0, 0],
    [[35], [], '134', [[40, "$40"], [50, "$50"], [60, "$60"], [75, "$75"]], [[40, "$40e 5 & 9"], [45, "$45e 5 & 9"], [50, "$50e 5 & 9"], [60, "+1 to $60e 5 & 9"]], 0, 0],
    [[40], [], '134', [[50, "$50"], [60, "$60"], [75, "$75"], [100, "+4 to $100"]], [[45, "$45e 5 & 9"], [50, "$50e 5 & 9"], [60, "$60e 5 & 9"]], 0, 0],
    [[45], [], '134', [[50, "$50"], [60, "$60"], [75, "$75"], [100, "$100"]], [[50, "$50e 5 & 9"], [60, "$60e 5 & 9"], [75, "$75e 5 & 9"]], 0, 0],
    [[50], [], '1234', [[60, "$60"], [75, "$75"], [100, "$100"], [125, "+5 to $125"]], [[60, "$60e 5 & 9"], [75, "$75e 5 & 9"]], 0, 0],
    [[55], [], '134', [[60, "$60"], [75, "$75"], [100, "$100"], [125, "$125"]], [], 0, 0],
    [[60], [], '134', [[75, "$75"], [100, "$100"], [125, "$125"], [150, "+6 to $150"]], [[75, "$75e 5 & 9"], [100, "$100e 5 & 9"]], 0, 0],
    [[65, 70], [], '134', [[75, "$75"], [100, "$100"], [125, "$125"], [150, "$150"]], [], 0, 0],
    [[75], [], '1234', [[100, "$100"], [125, "$125"], [150, "$150"], [175, "$175"]], [[100, "$100e 5 & 9"], [125, "$125e 5 & 9"]], 0, 0],
    [[80], [], '134', [[100, "$100"], [125, "$125"], [150, "$150"], [200, "+8 to $200"]], [], 0, 0],
    [[85, 90, 95], [], '134', [[100, "$100"], [125, "$125"], [150, "$150"], [200, "$200"]], [], 0, 0],
    [[100], [], '234', [[125, "$125"], [150, "$150"], [200, "$200"], [250, "+10 to $250"]], [[125, "$125e 5 & 9"], [150, "$150e 5 & 9"]], 0, 0],
    [[105], [], '4', [[125, "$125"], [150, "$150"], [200, "$200"], [250, "$250"]], [], 0, 1],
    [[110], [], '', [[125, "$125"], [150, "$150"], [200, "$200"], [250, "$250"]], [], 0, 2],
    [[115], [], '', [[125, "$125"], [150, "$150"], [200, "$200"], [250, "$250"]], [], 0, 1],
    [[120], [], '4', [[125, "$125"], [150, "$150"], [200, "$200"], [250, "$250"]], [], 0, 3],
    [[125], [], '23', [[150, "$150"], [200, "$200"], [250, "$250"], [300, "$300"]], [[150, "$150e 5 & 9"], [200, "$200e 5 & 9"]], 0, 0],
    [[130, 140], [], '4', [[150, "$150"], [200, "$200"], [250, "$250"], [300, "$300"]], [], 0, 3],
    [[135, 145], [], '', [[150, "$150"], [200, "$200"], [250, "$250"], [300, "$300"]], [], 0, 1],
    [[150], [], '23', [[200, "$200"], [250, "$250"], [300, "$300"], [350, "$350"]], [[200, "$200e 5 & 9"], [250, "$250e 5 & 9"]], 0, 0],
    [[155, 165], [], '4', [[200, "$200"], [250, "$250"], [300, "$300"], [350, "$350"]], [], 0, 1],
    [[160], [], '', [[200, "$200"], [250, "$250"], [300, "$300"], [350, "$350"]], [], 0, 2],
    [[170], [], '', [[200, "$200"], [250, "$250"], [350, "$350"], [400, "$400"]], [], 0, 2],
    [[175], [], '23', [[200, "$200"], [250, "$250"], [350, "$350"], [400, "$400"]], [], 0, 0],
    [[180], [], '4', [[200, "$200"], [250, "$250"], [350, "$350"], [400, "$400"]], [], 0, 3],
    [[185], [], '', [[200, "$200"], [250, "$250"], [350, "$350"], [400, "$400"]], [], 0, 1],
    [[190], [], '4', [[200, "$200"], [250, "$250"], [350, "$350"], [450, "$450"]], [], 0, 3],
    [[195, 205], [], '', [[200, "$200"], [250, "$250"], [350, "$350"], [450, "$450"]], [], 0, 1],
    [[200], [], '34', [[250, "$250"], [300, "$300"], [400, "$400"], [500, "+20 to $500"]], [[250, "$250e 5 & 9"], [300, "$300e 5 & 9"], [350, "+20 to $350e 5 & 9"]], 0, 0],
    [[210, 220, 230, 235, 245], [], '', [[250, "$250"], [300, "$300"], [350, "$350"], [500, "$500"]], [], 0, 1],
    [[215, 225, 240], [], '4', [[250, "$250"], [300, "$300"], [350, "$350"], [500, "$500"]], [], 0, 1],
    [[250], [], '34', [[300, "$300"], [350, "$350"], [500, "$500"], [600, "$600"]], [[300, "$300e 5 & 9"], [350, "$350e 5 & 9"], [400, "$400e 5 & 9"]], 0, 0],
    [[], [[255, 280]], '', [[300, "$300"], [350, "$350"], [500, "$500"], [600, "$600"]], [], 0, 1],
    [[285], [], '4', [[300, "$300"], [350, "$350"], [500, "$500"], [600, "$600"]], [], 0, 1],
    [[290, 295], [], '', [[300, "$300"], [350, "$350"], [500, "$500"], [600, "$600"]], [], 0, 1],
    [[300], [], '3', [[350, "$350"], [400, "$400"], [500, "$500"], [750, "+30 to $750"]], [[350, "$350e 5 & 9"], [400, "$400e 5 & 9"], [500, "$500e 5 & 9"]], 0, 0],
    [[305], [], '', [[350, "$350"], [500, "$500"], [600, "$600"], [700, "$700"]], [], 0, 1],
    [[310], [], '4', [[350, "$350"], [500, "$500"], [600, "$600"], [700, "$700"]], [], 0, 1],
    [[315, 320, 325, 330, 340, 345], [], '', [[350, "$350"], [500, "$500"], [600, "$600"], [750, "$750"]], [], 0, 1],
    [[335], [], '4', [[350, "$350"], [500, "$500"], [600, "$600"], [750, "$750"]], [], 0, 1],
    [[350], [], '3', [[400, "$400"], [500, "$500"], [600, "$600"], [750, "$750"]], [[400, "$400e 5 & 9"], [500, "$500e 5 & 9"], [600, "$+10 $600e 5 & 9"]], 0, 0],
    [[], [[355, 365], [375, 390]], '', [[400, "$400"], [500, "$500"], [600, "$600"], [750, "$750"]], [], 0, 1],
    [[370, 395], [], '4', [[400, "$400"], [500, "$500"], [600, "$600"], [750, "$750"]], [], 0, 1],
    [[400], [], '3', [[500, "$500"], [600, "$600"], [750, "$750"], [1000, "+40 to $1,000"]], [[500, "$500e 5 & 9"], [600, "$600e 5 & 9"]], 0, 0],
    [[405, 410, 415], [], '', [[450, "$450"], [500, "$500"], [600, "$600"], [750, "$750"]], [], 0, 1],
    [[420, 425], [[435, 445], [460, 475], [485, 495]], '', [[500, "$500"], [600, "$600"], [750, "$750"], [1000, "$1,000"]], [], 0, 1],
    [[430, 455, 480], [], '4', [[500, "$500"], [600, "$600"], [750, "$750"], [1000, "$1,000"]], [], 0, 1],
    [[450], [], '3', [[500, "$500"], [600, "$600"], [750, "$750"], [1000, "$1,000"]], [[500, "$500e 5 & 9"], [600, "$600e 5 & 9"], [750, "$750e 5 & 9"]], 0, 0],
    [[500], [], '3', [[600, "$600"], [750, "$750"], [900, "$900"], [1000, "$1,000"]], [[600, "$600e 5 & 9"], [750, "$750e 5 & 9"]], 0, 0],
    [[505, 510], [[520, 535], [545, 570], [580, 595]], '', [[600, "$600"], [750, "$750"], [900, "$900"], [1000, "$1,000"]], [], 0, 1],
    [[515, 540, 575], [], '4', [[600, "$600"], [750, "$750"], [900, "$900"], [1000, "$1,000"]], [], 0, 1],
    [[600], [], '4', [[750, "$750"], [900, "$900"], [1000, "$1,000"], [1500, "+60 to $1,500"]], [[750, "$750e 5 & 9"], [1000, "$1,000e 5 & 9"]], 0, 0],
    [[], [[605, 620]], '', [[750, "$750"], [900, "$900"], [1000, "$1,000"]], [], 0, 1],
    [[745], [[625, 675], [685, 695], [705, 735]], '', [[750, "$750"], [900, "$900"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 1],
    [[680], [], '4', [[750, "$750"], [900, "$900"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 1],
    [[700], [], '', [[750, "$750"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 2],
    [[740], [], '4', [[750, "$750"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 1],
    [[750], [], '', [[900, "$900"], [1000, "$1,000"], [1500, "$1,500"]], [[1000, "$1,000e 5 & 9"]], 0, 0],
    [[], [[755, 795], [805, 830]], '', [[900, "$900"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 1],
    [[800], [], '4', [[900, "$900"], [1000, "$1,000"], [1500, "$1,500"]], [], 0, 3],
    [[890, 895], [[835, 880], [905, 940], [950, 995]], '', [[1000, "$1,000"], [1500, "$1,500"], [2000, "$2,000"]], [], 0, 1],
    [[885, 945], [], '4', [[1000, "$1,000"], [1500, "$1,500"], [2000, "$2,000"]], [], 0, 1],
    [[900], [], '', [[1000, "$1,000"], [1500, "$1,500"], [2000, "$2,000"]], [], 0, 0],
    [[1000], [], '3', [[1500, "$1,500"], [2000, "$2,000"], [2500, "+100 to $2,500"]], [[1500, "$1,500e 5 & 9"]], 0, 0],
    [[1035, 1040], [[1005, 1025]], '', [[1500, "$1,500"], [2000, "$2,000"]], [], 0, 1],
    [[1030], [], '4', [[1500, "$1,500"], [2000, "$2,000"]], [], 0, 1],
    [[1240, 1245], [[1045, 1085], [1095, 1145], [1155, 1230]], '', [[1500, "$1,500"], [2000, "$2,000"], [2500, "$2,500"]], [], 0, 1],
    [[1090, 1150, 1235], [], '4', [[1500, "$1,500"], [2000, "$2,000"], [2500, "$2,500"]], [], 0, 1],
    [[], [[1250, 1290], [1300, 1375], [1385, 1435], [1445, 1495]], '', [[1500, "$1,500"], [2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"]], [], 0, 1],
    [[1440], [], '4', [[1500, "$1,500"], [2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"]], [], 0, 1],
    [[1295, 1380], [], '4', [[1500, "$1,500"], [2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"]], [], 0, 1],
    [[1500], [], '3', [[2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"]], [[2000, "$2,000e 5 & 9"], [2500, "$2,500e 5 & 9"]], 0, 0],
    [[], [[1505, 1625], [1635, 1665]], '', [[2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"]], [], 0, 1],
    [[1630], [], '4', [[2000, "$2,000"], [2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"]], [], 0, 1],
    [[], [[1670, 1770], [1780, 1795], [1805, 1870]], '', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 0, 1],
    [[1800], [], '', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 0, 2],
    [[1775], [], '4', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 0, 1],
    [[], [[1875, 1915], [1925, 1995], [2005, 2080]], '', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4500, "$4,500"]], [], 0, 1],
    [[1920], [], '4', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4500, "$4,500"]], [], 0, 1],
    [[2000], [], '3', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4500, "$4,500"]], [[2500, "$2,500e 5 & 9"]], 0, 0],
    [[], [[2085, 2115], [2125, 2260], [2270, 2465], [2475, 2495]], '', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 1, 1],
    [[2265, 2120, 2470], [], '', [[2500, "$2,500"], [3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 1, 4],
    [[2500], [], '3', [[3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"], [4500, "$4,500"]], [], 1, 0],
    [[], [[2505, 2610], [2620, 2755], [2765, 2955], [2965, 2995]], '', [[3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 1, 1],
    [[2615, 2760, 2960], [], '', [[3000, "$3,000"], [3500, "$3,500"], [4000, "$4,000"]], [], 1, 4],
    [[3000], [], '3', [[3500, "$3,500"], [4000, "$4,000"], [4500, "$4,500"]], [], 1, 0],
    [[], [[3005, 3100], [3110, 3305], [3315, 3450], [3460, 3495]], '', [[3500, "$3,500"], [4000, "$4,000"], [4500, "$4,500"]], [], 1, 1],
    [[3105, 3310, 3455], [], '', [[3500, "$3,500"], [4000, "$4,000"], [4500, "$4,500"]], [], 1, 4],
    [[3500], [], '', [[4000, "$4,000"], [4500, "$4,500"]], [], 1, 0],
    [[], [[3505, 3905], [3915, 3995]], '', [[4000, "$4,000"], [4500, "$4,500"]], [], 1, 1],
    [[3910], [], '', [[4000, "$4,000"], [4500, "$4,500"]], [], 1, 4],
    [[4000], [], '', [[4500, "$4,500"]], [], 1, 0],
    [[], [[4005, 4255], [4265, 4495]], '', [[4500, "$4,500"]], [], 1, 1],
    [[4260], [], '', [[4500, "$4,500"]], [], 1, 4],
    [[4500], [], '', [], [], 1, 0],
    [[], [[4505, 4600], [4610, 4995]], '', [], [], 1, 1],
    [[4605], [], '', [], [], 1, 4],
    [[5000], [], '', [], [], 0, 5],
  ],
  '6-8': [
    [[6], [], '134', [[12, "$12"], [18, "+5 to $18"]], [[12, "+5 to $12e 6 & 8"]], 0, 0],
    [[12], [], '134', [[18, "$18"], [24, "$24"], [30, "+4 to $30"]], [[18, "$18e 6 & 8"]], 0, 0],
    [[18], [], '134', [[24, "$24"], [30, "$30"], [36, "$36"], [42, "+3 to $42"]], [[24, "$24e 6 & 8"], [30, "+3 to $30e 6 & 8"]], 0, 0],
    [[24], [], '134', [[36, "$36"], [42, "$42"], [48, "$48"], [54, "+2 to $54"]], [[30, "$30e 6 & 8"], [36, "$36e 6 & 8"]], 0, 0],
    [[30], [], '1234', [[42, "$42"], [48, "$48"], [54, "$54"], [66, "+1 to $66"]], [[36, "$36e 6 & 8"], [42, "$42e 6 & 8"], [48, "+1 to $48e 6 & 8"]], 0, 0],
    [[36], [], '134', [[48, "$48"], [54, "$54"], [60, "$60"], [66, "$66"]], [[42, "$42e 6 & 8"], [48, "$48e 6 & 8"], [60, "+6 to $60e 6 & 8"]], 0, 0],
    [[42], [], '134', [[54, "$54"], [60, "$60"], [72, "$72"], [78, "$78"]], [[48, "$48e 6 & 8"], [54, "$54e 6 & 8"], [60, "$60e 6 & 8"]], 0, 0],
    [[48], [], '134', [[60, "$60"], [72, "$72"], [90, "$90"], [102, "$102"]], [[54, "$54e 6 & 8"], [60, "$60e 6 & 8"], [72, "$72e 6 & 8"], [78, "+4 to $78e 6 & 8"]], 0, 0],
    [[54], [], '134', [[60, "$60"], [72, "$72"], [90, "$90"], [120, "+3 to $120"]], [[60, "$60e 6 & 8"], [72, "$72e 6 & 8"], [78, "$78e 6 & 8"]], 0, 0],
    [[60], [], '1234', [[72, "$72"], [78, "$78"], [90, "$90"], [120, "$120"]], [[72, "$72e 6 & 8"], [78, "$78e 6 & 8"], [90, "$90e 6 & 8"]], 0, 0],
    [[66], [], '134', [[78, "$78"], [90, "$90"], [120, "$120"], [150, "+7 to $150"]], [], 0, 0],
    [[72], [], '134', [[90, "$90"], [102, "$102"], [120, "$120"], [150, "$150"]], [[78, "$78e 6 & 8"], [90, "$90e 6 & 8"]], 0, 0],
    [[78], [], '134', [[90, "$90"], [102, "$102"], [120, "$120"], [150, "$150"]], [[90, "$90e 6 & 8"], [120, "$120e 6 & 8"]], 0, 0],
    [[84], [], '134', [[90, "$90"], [102, "$102"], [120, "$120"], [150, "$150"]], [], 0, 0],
    [[90], [], '1234', [[102, "$102"], [120, "$120"], [150, "$150"], [180, "$180"]], [[120, "$120e 6 & 8"], [150, "+15 to $150e 6 & 8"]], 0, 0],
    [[96], [], '134', [[120, "$120"], [150, "$150"], [180, "$180"], [210, "+2 to $210"]], [], 0, 0],
    [[102], [], '4', [[120, "$120"], [150, "$150"], [180, "$180"], [210, "$210"]], [], 0, 1],
    [[108], [], '', [[120, "$120"], [150, "$150"], [180, "$180"], [210, "$210"]], [], 0, 2],
    [[114], [], '4', [[120, "$120"], [150, "$150"], [180, "$180"], [240, "$240"]], [], 0, 1],
    [[120], [], '123', [[150, "$150"], [180, "$180"], [210, "$210"], [240, "$240"]], [[150, "$150e 6 & 8"], [180, "$180e 6 & 8"]], 0, 0],
    [[126, 138], [], '4', [[150, "$150"], [180, "$180"], [210, "$210"], [240, "$240"]], [], 0, 1],
    [[132], [], '', [[150, "$150"], [180, "$180"], [210, "$210"], [240, "$240"]], [], 0, 2],
    [[144], [], '', [[150, "$150"], [180, "$180"], [240, "$240"], [300, "$300"]], [], 0, 2],
    [[150], [], '23', [[180, "$180"], [210, "$210"], [240, "$240"], [300, "$300"]], [[180, "$180e 6 & 8"], [210, "$210e 6 & 8"], [240, "+5 to $240e 6 & 8"]], 0, 0],
    [[156], [], '4', [[180, "$180"], [210, "$210"], [240, "$240"], [300, "$300"]], [], 0, 1],
    [[162], [], '', [[180, "$180"], [210, "$210"], [240, "$240"], [300, "$300"]], [], 0, 1],
    [[168], [], '4', [[180, "$180"], [240, "$240"], [300, "$300"], [360, "$360"]], [], 0, 3],
    [[174], [], '', [[180, "$180"], [240, "$240"], [300, "$300"], [360, "$360"]], [], 0, 1],
    [[180], [], '234', [[210, "$210"], [240, "$240"], [300, "$300"], [360, "$360"]], [[210, "$210e 6 & 8"], [240, "$240e 6 & 8"], [300, "+30 to $300e 6 & 8"]], 0, 0],
    [[186], [], '', [[210, "$210"], [240, "$240"], [300, "$300"], [360, "$360"]], [], 0, 1],
    [[192], [], '4', [[210, "$210"], [240, "$240"], [300, "$300"], [360, "$360"]], [], 0, 3],
    [[198], [], '', [[240, "$240"], [300, "$300"], [360, "$360"], [420, "$420"]], [], 0, 1],
    [[204], [], '4', [[240, "$240"], [300, "$300"], [360, "$360"], [420, "$420"]], [], 0, 1],
    [[210], [], '23', [[300, "$300"], [360, "$360"], [420, "$420"], [450, "$450"]], [[240, "$240e 6 & 8"], [300, "$300e 6 & 8"]], 0, 0],
    [[216], [], '4', [[300, "$300"], [360, "$360"], [420, "$420"], [450, "$450"]], [], 0, 1],
    [[222, 228, 234], [], '', [[300, "$300"], [360, "$360"], [420, "$420"], [480, "$480"]], [], 0, 1],
    [[240], [], '23', [[300, "$300"], [360, "$360"], [420, "$420"], [480, "$480"]], [[300, "$300e 6 & 8"], [360, "$360e 6 & 8"]], 0, 0],
    [[246], [], '4', [[300, "$300"], [360, "$360"], [420, "$420"], [480, "$480"]], [], 0, 1],
    [[], [[252, 264]], '', [[300, "$300"], [360, "$360"], [480, "$480"], [540, "$540"]], [], 0, 1],
    [[270], [], '234', [[300, "$300"], [360, "$360"], [480, "$480"], [540, "$540"]], [], 0, 0],
    [[276], [], '', [[300, "$300"], [360, "$360"], [480, "$480"], [540, "$540"]], [], 0, 1],
    [[282, 288], [], '', [[360, "$360"], [480, "$480"], [540, "$540"], [600, "$600"]], [], 0, 1],
    [[294], [], '4', [[360, "$360"], [480, "$480"], [540, "$540"], [600, "$600"]], [], 0, 1],
    [[300], [], '3', [[360, "$360"], [420, "$420"], [480, "$480"], [540, "$540"]], [[360, "$360e 6 & 8"], [420, "$420e 6 & 8"], [450, "$450e 6 & 8"], [480, "+10 to $480e 6 & 8"]], 0, 0],
    [[], [[306, 330]], '', [[360, "$360"], [480, "$480"], [540, "$540"], [600, "$600"]], [], 0, 1],
    [[336], [], '4', [[360, "$360"], [480, "$480"], [600, "$600"], [720, "$720"]], [], 0, 1],
    [[], [[342, 354]], '', [[360, "$360"], [480, "$480"], [600, "$600"], [720, "$720"]], [], 0, 1],
    [[360], [], '34', [[420, "$420"], [540, "$540"], [600, "$600"], [780, "$780"]], [[420, "$420e 6 & 8"], [450, "$450e 6 & 8"], [480, "$480e 6 & 8"], [600, "+60 to $600e 6 & 8"]], 0, 0],
    [[], [[366, 384], [396, 408]], '', [[420, "$420"], [540, "$540"], [600, "$600"], [780, "$780"]], [], 0, 1],
    [[390, 414], [], '4', [[420, "$420"], [540, "$540"], [600, "$600"], [780, "$780"]], [], 0, 1],
    [[420], [], '3', [[540, "$540"], [600, "$600"], [780, "$780"], [900, "$900"]], [[450, "$450e 6 & 8"], [480, "$480e 6 & 8"], [600, "$600e 6 & 8"]], 0, 0],
    [[426, 432, 444, 456, 462, 474, 534], [[486, 522]], '', [[540, "$540"], [600, "$600"], [780, "$780"], [900, "$900"]], [], 0, 1],
    [[438, 468, 528], [], '4', [[540, "$540"], [600, "$600"], [780, "$780"], [900, "$900"]], [], 0, 1],
    [[450], [], '23', [[540, "$540"], [600, "$600"], [780, "$780"], [900, "$900"]], [[480, "$480e 6 & 8"], [600, "$600e 6 & 8"]], 0, 0],
    [[480], [], '3', [[540, "$540"], [600, "$600"], [780, "$780"], [900, "$900"]], [[600, "$600e 6 & 8"], [720, "$720e 6 & 8"]], 0, 0],
    [[540], [], '3', [[600, "$600"], [720, "$720"], [780, "$780"], [900, "$900"]], [], 0, 0],
    [[546, 552], [], '', [[600, "$600"], [720, "$720"], [780, "$780"], [900, "$900"]], [], 0, 1],
    [[588, 594], [[558, 576]], '', [[600, "$600"], [780, "$780"], [900, "$900"], [1200, "$1,200"]], [], 0, 1],
    [[582], [], '4', [[600, "$600"], [780, "$780"], [900, "$900"], [1200, "$1,200"]], [], 0, 1],
    [[600], [], '3', [[780, "$780"], [900, "$900"], [960, "$960"], [1200, "$1,200"]], [[720, "$720e 6 & 8"], [780, "$780e 6 & 8"], [900, "$900e 6 & 8"]], 0, 0],
    [[], [[606, 630], [642, 690]], '', [[780, "$780"], [900, "$900"], [960, "$960"], [1200, "$1,200"]], [], 0, 1],
    [[636], [], '4', [[780, "$780"], [900, "$900"], [960, "$960"], [1200, "$1,200"]], [], 0, 1],
    [[], [[696, 714], [732, 744], [756, 774]], '', [[780, "$780"], [900, "$900"], [1200, "$1,200"], [1500, "$1,500"]], [], 0, 1],
    [[720], [], '2', [[780, "$780"], [900, "$900"], [1200, "$1,200"], [1500, "$1,500"]], [[780, "$780e 6 & 8"], [900, "$900e 6 & 8"]], 0, 0],
    [[726], [], '4', [[780, "$780"], [900, "$900"], [1200, "$1,200"], [1500, "$1,500"]], [], 0, 1],
    [[750], [], '23', [[780, "$780"], [900, "$900"], [1200, "$1,200"], [1500, "$1,500"]], [], 0, 0],
    [[780], [], '4', [[900, "$900"], [960, "$960"], [1200, "$1,200"], [1500, "$1,500"]], [[900, "$900e 6 & 8"], [1200, "1,200e 6 & 8"]], 0, 0],
    [[], [[786, 828]], '', [[900, "$900"], [960, "$960"], [1200, "$1,200"], [1500, "$1,500"]], [], 0, 1],
    [[834], [[846, 888]], '', [[900, "$900"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [], 0, 1],
    [[840], [], '4', [[900, "$900"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [], 0, 3],
    [[894], [], '4', [[900, "$900"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [], 0, 1],
    [[900], [], '3', [[960, "$960"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [[1200, "$1,200e 6 & 8"], [1500, "+150 to $1,500e 6 & 8"]], 0, 0],
    [[954], [[906, 942]], '', [[960, "$960"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [], 0, 1],
    [[948], [], '4', [[960, "$960"], [1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"]], [], 0, 1],
    [[960], [], '', [[1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"], [2100, "+20 to $2,100"]], [], 0, 2],
    [[966], [], '', [[1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"], [2100, "+7 to $2,100"]], [], 0, 1],
    [[], [[972, 1008], [1020, 1074], [1086, 1104]], '', [[1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"]], [], 0, 1],
    [[1014], [], '4', [[1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"]], [], 0, 1],
    [[1080], [], '', [[1200, "$1,200"], [1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"]], [], 0, 2],
    [[], [[1110, 1134], [1146, 1194], [1206, 1254], [1266, 1290]], '', [[1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"]], [], 0, 1],
    [[1140, 1260], [], '4', [[1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"]], [], 0, 1],
    [[1200], [], '3', [[1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"]], [[1500, "$1,500e 6 & 8"], [1800, "$1,800e 6 & 8"]], 0, 0],
    [[1380], [[1296, 1368]], '', [[1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"]], [], 0, 1],
    [[1374], [], '4', [[1500, "$1,500"], [1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"]], [], 0, 1],
    [[], [[1386, 1494], [1506, 1566], [1578, 1656]], '', [[1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"]], [], 0, 1],
    [[1500], [], '3', [[1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"]], [[1800, "$1,800e 6 & 8"], [2100, "$2,100e 6 & 8"], [2400, "+50 to $2,400e 6 & 8"]], 0, 0],
    [[1572], [], '4', [[1800, "$1,800"], [2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"]], [], 0, 1],
    [[1938], [[1662, 1680], [1692, 1794], [1806, 1812], [1824, 1926]], '', [[2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"], [3600, "$3,600"]], [], 0, 1],
    [[1686, 1818, 1932], [], '4', [[2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"], [3600, "$3,600"]], [], 0, 1],
    [[1800], [], '3', [[2100, "$2,100"], [2400, "$2,400"], [3000, "$3,000"], [3600, "$3,600"]], [[2100, "$2,100e 6 & 8"], [2400, "$2,400e 6 & 8"], [3000, "+300 to $3,000e 6 & 8"]], 0, 0],
    [[], [[1944, 2046], [2058, 2076]], '', [[2400, "$2,400"], [3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"]], [], 0, 1],
    [[2052], [], '4', [[2400, "$2,400"], [3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"]], [], 0, 1],
    [[], [[2082, 2094], [2106, 2190], [2202, 2214]], '', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4500, "$4,500"]], [], 0, 1],
    [[2100], [], '3', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4500, "$4,500"]], [[2400, "$2,400e 6 & 8"], [3000, "$3,000e 6 & 8"]], 0, 0],
    [[2196], [], '4', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4500, "$4,500"]], [], 0, 1],
    [[], [[2220, 2394], [2406, 2460], [2472, 2490]], '', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"]], [], 0, 1],
    [[2400], [], '3', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"]], [[3000, "$3,000e 6 & 8"]], 0, 0],
    [[2466], [], '4', [[3000, "$3,000"], [3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"]], [], 0, 1],
    [[], [[2496, 2724], [2736, 2766]], '', [[3000, "$3,000"], [3600, "$3,600"], [4800, "$4,800"], [5400, "$5,400"]], [], 0, 1],
    [[2730], [], '4', [[3000, "$3,000"], [3600, "$3,600"], [4800, "$4,800"], [5400, "$5,400"]], [], 0, 1],
    [[], [[2772, 2970], [2982, 2994]], '', [[3000, "$3,000"], [3600, "$3,600"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 1],
    [[2976], [], '', [[3000, "$3,000"], [3600, "$3,600"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 4],
    [[3000], [], '3', [[3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 0],
    [[], [[3006, 3396], [3408, 3594]], '', [[3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 1],
    [[3402], [], '', [[3600, "$3,600"], [4200, "$4,200"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 4],
    [[3600], [], '', [[4200, "$4,200"], [4500, "$4,500"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 0],
    [[], [[3606, 3642], [3654, 3930], [3942, 4176], [4188, 4194]], '', [[4200, "$4,200"], [4500, "$4,500"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 1],
    [[3648, 3936, 4182], [], '', [[4200, "$4,200"], [4500, "$4,500"], [4800, "$4,800"], [5400, "$5,400"]], [], 1, 4],
    [[4200], [], '', [[4500, "$4,500"], [4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"]], [], 1, 0],
    [[], [[4206, 4440], [4452, 4494]], '', [[4500, "$4,500"], [4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"]], [], 1, 1],
    [[4446], [], '', [[4500, "$4,500"], [4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"]], [], 1, 4],
    [[4500], [], '', [[4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"], [5700, "$5,700"]], [], 1, 0],
    [[], [[4506, 4752], [4764, 4794]], '', [[4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"], [5700, "$5,700"]], [], 1, 1],
    [[4758], [], '', [[4800, "$4,800"], [5100, "$5,100"], [5400, "$5,400"], [5700, "$5,700"]], [], 1, 4],
    [[4800], [], '', [[5400, "$5,400"], [5700, "$5,700"]], [], 1, 0],
    [[], [[4806, 5334], [5346, 5394]], '', [[5400, "$5,400"], [5700, "$5,700"]], [], 1, 1],
    [[5340], [], '', [[5400, "$5,400"], [5700, "$5,700"]], [], 1, 4],
    [[5400], [], '', [[5700, "$5,700"]], [], 1, 0],
    [[], [[5406, 5904], [5916, 5994]], '', [], [], 1, 1],
    [[5910], [], '', [], [], 1, 4],
    [[6000], [], '', [], [], 0, 5]
	  ],
	};
	function payLadder(key) { return (key === 'place6' || key === 'place8') ? [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 72, 78, 90, 102, 120, 150, 180, 210, 240, 300, 360, 420, 480, 540, 600, 720, 780, 900, 960, 1200, 1500, 1800, 2100, 2400, 3000, 3600, 4200, 4800, 5400, 6000] : [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 75, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]; }
	function payNewIsBuy(key, total, currentIsBuy) { if (currentIsBuy) return true; if ((key === 'place4' || key === 'place10') && total >= 20) return true; return false; }
	function payNewVig(key, total, newIsBuy) { if (!newIsBuy) return 0; let newVig = Math.floor(total / 20); if (!buys[key]) return newVig; if (payMenu && key === payMenu.key) return newVig; return newVig - Math.floor((bets[key] || 0) / 20); }
	function payCostFor(key, total, newIsBuy) { let newVig = payNewVig(key, total, newIsBuy); return (total - bets[key]) + newVig; }
	function payGoToLabel(key, total) { let newIsBuy = payNewIsBuy(key, total, buys[key]); let cost = payCostFor(key, total, newIsBuy); let need = cost - payNetWin(); let prefix = newIsBuy && !buys[key] ? 'Buy ' : ''; if (need <= 0) return prefix + '$' + total; return '+$' + need + ' to ' + prefix + '$' + total; }
	function applyPayTo(key, total, label) { if (!payMenu || payMenu.key !== key) return; let newIsBuy = payNewIsBuy(key, total, buys[key]); let newVig = payNewVig(key, total, newIsBuy); let cost = payCostFor(key, total, newIsBuy); if (total > placeMax(key)) { showAlert('That is over the max for this bet.'); return; } if (total < (key === 'place6' || key === 'place8' ? 6 : 5)) { showAlert('That is under the minimum for this bet.'); return; } if (total % payUnit(key) !== 0) { showAlert('That amount is not a proper increment for this bet.'); return; } if (cost > payNetWin() + bankroll) { showAlert('Not enough in the rail, even with the win, to get to ' + fmt(total) + '.'); return; } let leftover = payNetWin() - cost; bankroll += leftover; bets[key] = total; buys[key] = newIsBuy; buyVigTotal = owedVig(totalBuyAction()); assignChipAngles(key); bets = bets; buys = buys; payMenu = null; showAsk(label + ' Bet now ' + fmt(total) + (newIsBuy ? ', Buy, vig ' + fmt(newVig) + '.' : '.')); }
	function paySameBet() { if (!payMenu) return; let net = paySameBetNet(); bankroll += net; if (payMenu.isBuy) buyVigTotal += Math.floor(payMenu.bet / 20); showAsk('Same bet. Bet stays ' + fmt(payMenu.bet) + ', ' + fmt(net) + ' to the rail' + (payMenu.isBuy ? ' after ' + fmt(Math.floor(payMenu.bet / 20)) + ' commission on the ' + fmt(payMenu.win) + ' win.' : '.')); payMenu = null; }
	function paySameBetAndDown() { if (!payMenu) return; let key = payMenu.key; let newOwed = payMenu.isBuy ? owedVig(totalBuyAction() - payMenu.bet) : buyVigTotal; let excess = payMenu.isBuy ? buyVigTotal - newOwed : 0; let total = payMenu.bet + payMenu.win + excess; bankroll += total; let desired = {}; for (let k of placeOrderInsideOut) if (k !== key && bets[k] > 0) desired[k] = placeWorking(k); bets[key] = 0; buys[key] = false; buyVigTotal = newOwed; placeLammer[key] = null; placeForeverOff[key] = false; placeOnDuringCR[key] = false; chipAngles[key] = undefined; lammerAngles[key] = undefined; buyLammerAngles[key] = undefined; bets = bets; buys = buys; placeLammer = placeLammer; reanchorPlaceLammers(desired); showInform('Same bet and down. ' + fmt(total) + ' back to the rail.'); payMenu = null; }
	function payPress(target, label) { if (!payMenu) return; applyPayTo(payMenu.key, target, label); }
	function payFullPress() { if (!payMenu) return; let key = payMenu.key; let unit = payUnit(key); let target = payMenu.bet + payNetWin(); target = Math.floor(target / unit) * unit; while (target > payMenu.bet) { let newIsBuy = payNewIsBuy(key, target, buys[key]); let cost = payCostFor(key, target, newIsBuy); if (cost <= payNetWin()) break; target -= unit; } if (target <= payMenu.bet) { showAlert('The win is not enough to press this bet one unit.'); return; } applyPayTo(key, target, 'Full press to ' + fmt(target) + '.'); }
	function payDouble(target) { if (!payMenu) return; let key = payMenu.key; let pair = key === 'place4' ? 'place10' : key === 'place10' ? 'place4' : key === 'place5' ? 'place9' : key === 'place9' ? 'place5' : key === 'place6' ? 'place8' : 'place6'; if (!bets[pair] || bets[pair] !== payMenu.bet) { showAlert('Double press needs the paired bet at the same amount.'); return; } let newIsBuy1 = payNewIsBuy(key, target, buys[key]); let newIsBuy2 = payNewIsBuy(pair, target, buys[pair]); let vigCharge = payNewVig(key, target, newIsBuy1) + payNewVig(pair, target, newIsBuy2); let cost = (target - bets[key]) + (target - bets[pair]) + vigCharge; if (target > placeMax(key) || target > placeMax(pair)) { showAlert('That is over the max for this pair.'); return; } if (cost > payNetWin() + bankroll) { showAlert('Not enough in the rail, even with the win, to double press to ' + fmt(target) + ' each.'); return; } bankroll += payNetWin() - cost; bets[key] = target; bets[pair] = target; buys[key] = newIsBuy1; buys[pair] = newIsBuy2; buyVigTotal = owedVig(totalBuyAction()); assignChipAngles(key); assignChipAngles(pair); bets = bets; buys = buys; payMenu = null; showAsk('Double press to ' + fmt(target) + ' each on ' + placeNum(key) + ' and ' + placeNum(pair) + '.'); }
	function payCustomPlace() { if (!payMenu) return; let amt = Number(payCustom); if (!amt || amt <= 0) { showAlert('Pick a custom amount first.'); return; } applyPayTo(payMenu.key, amt, 'Go to ' + fmt(amt) + '.'); }
	function payCustomBuy() { if (!payMenu) return; let amt = Number(payBuyAmount); if (!amt || amt < 20) { showAlert('Buy amount must be $20 or more.'); return; } if (payMenu.key !== 'place4' && payMenu.key !== 'place10') { showAlert('Buy is only for the 4 and 10.'); return; } let newVig = payNewVig(payMenu.key, amt, true); let cost = payCostFor(payMenu.key, amt, true); if (cost > payNetWin() + bankroll) { showAlert('Not enough in the rail, even with the win, to buy ' + fmt(amt) + '.'); return; } bankroll += payNetWin() - cost; bets[payMenu.key] = amt; buys[payMenu.key] = true; buyVigTotal = owedVig(totalBuyAction()); assignChipAngles(payMenu.key); bets = bets; buys = buys; payMenu = null; showAsk('Buy ' + fmt(amt) + ', vig ' + fmt(newVig) + '.'); }
	function payMenuGroup() { if (!payMenu) return null; if (payMenu.key === 'place4' || payMenu.key === 'place10') return '4-10'; if (payMenu.key === 'place5' || payMenu.key === 'place9') return '5-9'; return '6-8'; }
	function payMenuEntry() { if (!payMenu) return null; let group = payMenuGroup(); let list = payMenuTable[group] || []; let bet = payMenu.bet; for (let e of list) { if (e[0].includes(bet)) return e; for (let r of e[1]) { if (bet >= r[0] && bet <= r[1]) return e; } } return null; }
	function payDisclaimerText() { let e = payMenuEntry(); let code = e ? e[6] : 1; if (code === 0) return null; if (code === 1) return "Try and stick to bets in normal increments. Use the 'Go to ' menu for normal betting amounts."; if (code === 2) return "If only pressing, you should move to a normal amount now. Try the bets in the 'Go to ' menus to help the game run more efficiently."; if (code === 3) { let amt = payMenuGroup() === '5-9' ? '$25 or $50' : '$120 or $300'; return "If only pressing, you should move to a normal amount now. Try the bets in the 'Go to ' menus to help the game run more efficiently. Full pressers can shoot for the stars. Otherwise, you should be pressing by " + amt + "."; } if (code === 4) return "If you're full pressing then you're gonna hit table max right now!"; let n = payMenu.num; let tot = n === 4 || n === 10 ? '$20,000 ($5K with $15K odds) to win 35K plus your 10K here is a 45K potential max win on the ' + n : n === 5 || n === 9 ? '$25,000 ($5K with $20K odds) to win 35K plus your 7K here is a 42K potential max win on the ' + n : '$30,000 ($5K with $25K odds) to win 35K plus your 7K here is a 42K potential max win on the ' + n; return 'You hit at table max!! If you go to table max on this bet, you will be betting ' + tot + '.'; }
	function paySameBetLabel() { return 'Same Bet, take ' + fmt(paySameBetNet()) + ' to the rail'; }
	function payPressList() { if (!payMenu) return []; let unit = payUnit(payMenu.key); let kinds = []; let e = payMenuEntry(); if (e) { kinds = e[2].split('').map((c) => Number(c)); } else { kinds = [1, 2, 3, 4]; } let out = []; for (let k of kinds) { if (k === 1) { let t = payMenu.bet + unit; out.push({ kind: 1, target: t, label: 'Press one unit to $' + t, disabled: payCostFor(payMenu.key, t, payNewIsBuy(payMenu.key, t, buys[payMenu.key])) > payNetWin() + bankroll }); } if (k === 2) { let t = payMenu.bet + 5 * unit; out.push({ kind: 2, target: t, label: 'Press $' + (5 * unit) + ' to $' + t, disabled: payCostFor(payMenu.key, t, payNewIsBuy(payMenu.key, t, buys[payMenu.key])) > payNetWin() + bankroll }); } if (k === 3) { let t = payMenu.bet * 2; out.push({ kind: 3, target: t, label: 'Press it to $' + t, disabled: t > placeMax(payMenu.key) || payCostFor(payMenu.key, t, payNewIsBuy(payMenu.key, t, buys[payMenu.key])) > payNetWin() + bankroll }); } if (k === 4) { let t = payFullPressTargetValue(); if (t) out.push({ kind: 4, target: t, label: 'Full press to $' + t, disabled: false }); } } return out; }
	function payPressByKind(item) { if (item.kind === 4) { payFullPress(); return; } let label = item.kind === 1 ? 'Press one unit to $' + item.target + '.' : item.kind === 2 ? 'Press $' + (5 * payUnit(payMenu.key)) + ' to $' + item.target + '.' : 'Press it to $' + item.target + '.'; payPress(item.target, label); }
	function payGoToList() { if (!payMenu) return []; let e = payMenuEntry(); if (e) { return e[3].map((g) => { let t = g[0]; let newIsBuy = payNewIsBuy(payMenu.key, t, buys[payMenu.key]); let cost = payCostFor(payMenu.key, t, newIsBuy); return { total: t, label: g[1], disabled: cost > payNetWin() + bankroll }; }); } return payLadder(payMenu.key).filter((t) => t > payMenu.bet && t <= placeMax(payMenu.key)).slice(0, 4).map((t) => { let newIsBuy = payNewIsBuy(payMenu.key, t, buys[payMenu.key]); let cost = payCostFor(payMenu.key, t, newIsBuy); return { total: t, label: payGoToLabel(payMenu.key, t), disabled: cost > payNetWin() + bankroll }; }); }
	function payDoubleList() { if (!payMenu) return []; let key = payMenu.key; let pair = key === 'place4' ? 'place10' : key === 'place10' ? 'place4' : key === 'place5' ? 'place9' : key === 'place9' ? 'place5' : key === 'place6' ? 'place8' : 'place6'; if (!bets[pair] || bets[pair] !== payMenu.bet) return []; let e = payMenuEntry(); if (e) { return e[4].map((g) => { let t = g[0]; let newIsBuy1 = payNewIsBuy(key, t, buys[key]); let newIsBuy2 = payNewIsBuy(pair, t, buys[pair]); let cost = payCostFor(key, t, newIsBuy1) + payCostFor(pair, t, newIsBuy2); return { total: t, label: g[1], disabled: cost > payNetWin() + bankroll }; }); } return payLadder(key).filter((t) => t > payMenu.bet && t <= placeMax(key) && t <= placeMax(pair)).slice(0, 2).map((t) => { let newIsBuy1 = payNewIsBuy(key, t, buys[key]); let newIsBuy2 = payNewIsBuy(pair, t, buys[pair]); let cost = payCostFor(key, t, newIsBuy1) + payCostFor(pair, t, newIsBuy2); let need = cost - payNetWin(); return { total: t, label: need <= 0 ? '$' + t + ' each ' + placeNum(key) + ' and ' + placeNum(pair) : '+$' + need + ' to $' + t + ' each ' + placeNum(key) + ' and ' + placeNum(pair), disabled: cost > payNetWin() + bankroll }; }); }
	function payFullPressTargetValue() { if (!payMenu) return null; let key = payMenu.key; let unit = payUnit(key); let target = payMenu.bet + payNetWin(); target = Math.floor(target / unit) * unit; while (target > payMenu.bet) { let newIsBuy = payNewIsBuy(key, target, buys[key]); let cost = payCostFor(key, target, newIsBuy); if (cost <= payNetWin()) break; target -= unit; } return target > payMenu.bet ? target : null; }
	function resolvePlace(total) {
		let map = { 4: 'place4', 5: 'place5', 6: 'place6', 8: 'place8', 9: 'place9', 10: 'place10' };
		let key = map[total]; if (!key || bets[key] === 0) return;
		if (!placeWorking(key)) { message += ' Place ' + total + ' is OFF, so it does not pay.'; return; }
		let win = placeWinAmount(key, bets[key], buys[key], total);
		killBuyVigOnWin(key, bets[key], buys[key]);
		if (bets.come > 0 && !comePts[total]) { scrollTableIntoView(); deferredPayMenu = { key, num: total, bet: bets[key], win, isBuy: buys[key] }; message += ' Place ' + total + ' wins ' + fmt(win) + '.'; messageKind = 'notify'; return; } schedulePopupDelay({ menu: { key, num: total, bet: bets[key], win, isBuy: buys[key] }, custom: bets[key], buy: bets[key] }); message += ' Place ' + total + ' wins ' + fmt(win) + '. Pick what to do with it.'; messageKind = 'notify';
	}

	function resolveRoll(total) {
		rolls += 1; lastRoll = total; message = ''; messageKind = 'normal'; overlayWinsPosted = []; worldPushPending = false;
		let propStakesAtRoll = { horn: hornBet, hhAces: hhBets.aces, hhAceDeuce: hhBets.aceDeuce, hhYo: hhBets.yo, hhTwelve: hhBets.twelve, anySeven: anySevenBet, anyCraps: anyCrapsBet, world: worldBet, ceSplit: ceSplitBet, ceC: ceCBet, ceE: ceEBet };
		let groupsAtRoll = suGroups.map((g) => ({ id: g.id, title: g.title, parts: g.parts.slice(), each: g.each }));
		if (groupsAtRoll.some((g) => g.id === 'sevenEleven')) propStakesAtRoll.anySeven = 0;
		let classicUpAtRoll = ((propStakesAtRoll.horn > 0 ? 1 : 0) + (propStakesAtRoll.anySeven > 0 ? 1 : 0) + (propStakesAtRoll.anyCraps > 0 ? 1 : 0) + (propStakesAtRoll.world > 0 ? 1 : 0) + (propStakesAtRoll.ceSplit > 0 ? 1 : 0) + (propStakesAtRoll.ceC > 0 ? 1 : 0) + (propStakesAtRoll.ceE > 0 ? 1 : 0) + (propStakesAtRoll.hhAces > 0 ? 1 : 0) + (propStakesAtRoll.hhAceDeuce > 0 ? 1 : 0) + (propStakesAtRoll.hhYo > 0 ? 1 : 0) + (propStakesAtRoll.hhTwelve > 0 ? 1 : 0));
		let classicWinForRoll = ((propStakesAtRoll.horn > 0 && hornWinFor(propStakesAtRoll.horn, total) > 0) || (propStakesAtRoll.anySeven > 0 && total === 7) || (propStakesAtRoll.anyCraps > 0 && (total === 2 || total === 3 || total === 12)) || (propStakesAtRoll.world > 0 && worldWinFor(propStakesAtRoll.world, total) > 0) || (propStakesAtRoll.ceSplit > 0 && ceSplitWinFor(propStakesAtRoll.ceSplit, total) > 0) || (propStakesAtRoll.ceC > 0 && ceCWinFor(propStakesAtRoll.ceC, total) > 0) || (propStakesAtRoll.ceE > 0 && ceEWinFor(propStakesAtRoll.ceE, total) > 0) || (propStakesAtRoll.hhAces > 0 && hhWinFor('aces', propStakesAtRoll.hhAces, total) > 0) || (propStakesAtRoll.hhAceDeuce > 0 && hhWinFor('aceDeuce', propStakesAtRoll.hhAceDeuce, total) > 0) || (propStakesAtRoll.hhYo > 0 && hhWinFor('yo', propStakesAtRoll.hhYo, total) > 0) || (propStakesAtRoll.hhTwelve > 0 && hhWinFor('twelve', propStakesAtRoll.hhTwelve, total) > 0));
		let groupWinForRoll = groupsAtRoll.some((g) => groupWinFor(g, total));
		let deferPropLoss = groupWinForRoll || ((classicUpAtRoll + groupsAtRoll.length) >= 2 && classicWinForRoll);
		if (point === 0) {
			if (total === 7 || total === 11) { stickCall = oldStickCallFor(total, 0, false, false); if (bets.passLine > 0) { wins.passLine = (wins.passLine || 0) + bets.passLine; winAfterPoint.passLine = false; message = 'Pass Line wins ' + fmt(wins.passLine) + '. Shoot again.'; messageKind = 'notify'; } if (total === 7) { let workingBefore7 = {}; for (let pk of placeOrderInsideOut) if (bets[pk] > 0) workingBefore7[pk] = placeWorking(pk); let lost7 = []; for (let pk of placeOrderInsideOut) if (bets[pk] > 0 && workingBefore7[pk]) { lost7.push(placeNum(pk)); bets[pk] = 0; buys[pk] = false; placeLammer[pk] = null; placeForeverOff[pk] = false; placeOnDuringCR[pk] = false; chipAngles[pk] = undefined; lammerAngles[pk] = undefined; buyLammerAngles[pk] = undefined; } if (lost7.length > 0) { message += ' Place bets that were ON lose on 7: ' + lost7.join(', ') + '.'; if (messageKind === 'normal') messageKind = 'alert'; cleanupLammers(); placeLammer = placeLammer; buyVigTotal = owedVig(totalBuyAction()); } } }
			else if (total === 2 || total === 3 || total === 12) { stickCall = oldStickCallFor(total, 0, false, false); if (bets.passLine > 0) { message = 'Pass Line loses ' + fmt(bets.passLine) + ' on craps. Bet Pass Line to shoot again.'; messageKind = 'alert'; bets.passLine = 0; wins.passLine = 0; winAfterPoint.passLine = false; } }
			else { let placeMapCO = { 4: 'place4', 5: 'place5', 6: 'place6', 8: 'place8', 9: 'place9', 10: 'place10' }; let placeKeyCO = placeMapCO[total]; let placeWasWorkingCO = placeKeyCO && bets[placeKeyCO] > 0 && placeWorking(placeKeyCO); let placeWinCO = placeWasWorkingCO ? placeWinAmount(placeKeyCO, bets[placeKeyCO], buys[placeKeyCO], total) : 0; let placeBetCO = placeWasWorkingCO ? bets[placeKeyCO] : 0; let placeIsBuyCO = placeWasWorkingCO ? buys[placeKeyCO] : false; if (placeWasWorkingCO) killBuyVigOnWin(placeKeyCO, placeBetCO, placeIsBuyCO); sevenOutFlag = false; point = total; comeOddsDeclaredOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeOddsOverrideOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; comeMadePtComeout = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; let desiredFromForeverOff = {}; for (let k of placeOrderInsideOut) if (bets[k] > 0) desiredFromForeverOff[k] = !placeForeverOff[k]; reanchorPlaceLammers(desiredFromForeverOff); placeOnDuringCR = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false }; stickCall = oldStickCallFor(total, 0, false, false); let oddsMinTxt = total === 4 || total === 10 ? '$1 on the 4 and 10' : total === 5 || total === 9 ? '$2 on the 5 and 9' : '$5 on the 6 and 8'; message = 'Point is ' + total + '. Minimum Odds ' + oddsMinTxt + '.'; messageKind = 'inform'; if (placeWasWorkingCO) { if (bets.come > 0 && !comePts[total]) { scrollTableIntoView(); deferredPayMenu = { key: placeKeyCO, num: total, bet: placeBetCO, win: placeWinCO, isBuy: placeIsBuyCO }; message += ' Place ' + total + ' wins ' + fmt(placeWinCO) + '.'; } else { schedulePopupDelay({ menu: { key: placeKeyCO, num: total, bet: placeBetCO, win: placeWinCO, isBuy: placeIsBuyCO }, custom: placeBetCO, buy: placeBetCO }); message += ' Place ' + total + ' wins ' + fmt(placeWinCO) + '. Pick what to do with it.'; } messageKind = 'notify'; } }
			if (bets.dontPass > 0) {
				if (total === 2 || total === 3) { wins.dontPass = (wins.dontPass || 0) + bets.dontPass; winAfterPoint.dontPass = false; message += " Don't Pass wins " + fmt(bets.dontPass) + '.'; }
				else if (total === 12) { message += " Don't Pass pushes on 12, bet stays."; }
				else if (total === 7 || total === 11) { message += " Don't Pass loses " + fmt(bets.dontPass) + '.'; bets.dontPass = 0; wins.dontPass = 0; winAfterPoint.dontPass = false; }
				else { message += " Don't Pass stays up."; }
			}
			resolveField(total);
			resolveHorn(total, deferPropLoss);
			resolveHornHigh(total, deferPropLoss);
			resolveAnySeven(total, deferPropLoss);
			resolveAnyCraps(total, deferPropLoss);
			resolveWorld(total, deferPropLoss);
			resolveCeSplit(total, deferPropLoss);
			resolveCeC(total, deferPropLoss);
			resolveCeE(total, deferPropLoss);
			resolveStraightUps(total, deferPropLoss);
			resolveCome(total);
			resolveDontCome(total);
			resolveOverlays(total);
			if (total === 7 && [4, 5, 6, 8, 9, 10].some((n) => dontComePts[n] > 0 || dontComeOdds[n] > 0)) startDcCeremony(0, true);
		} else {
			resolveField(total);
			resolveHorn(total, deferPropLoss);
			resolveHornHigh(total, deferPropLoss);
			resolveAnySeven(total, deferPropLoss);
			resolveAnyCraps(total, deferPropLoss);
			resolveWorld(total, deferPropLoss);
			resolveCeSplit(total, deferPropLoss);
			resolveCeC(total, deferPropLoss);
			resolveCeE(total, deferPropLoss);
			resolveStraightUps(total, deferPropLoss);
			resolvePlace(total);
			resolveCome(total);
			resolveDontCome(total);
			resolveOverlays(total);
			if (total === 7) { stickCall = oldStickCallFor(total, point, false, true); let sevenOutPt = point; let dontWin = bets.dontPass; if (dontWin > 0) { wins.dontPass = (wins.dontPass || 0) + dontWin; winAfterPoint.dontPass = true; } let layWinAmt = bets.dontOdds > 0 ? layWin(bets.dontOdds) : 0; if (bets.dontOdds > 0) { wins.dontOdds = layWinAmt; winPoint.dontOdds = point; } message += ' Seven out. Pass, Odds, and Place bets lose.' + (dontWin > 0 ? " Don't Pass wins " + fmt(dontWin) + '.' : '') + (bets.dontOdds > 0 ? ' Lay wins ' + fmt(layWinAmt) + '.' : '') + ' ' + oldSevenOutCall(pointsMade); messageKind = 'normal'; bets.passLine = 0; wins.passLine = 0; winAfterPoint.passLine = false; bets.passOdds = 0; wins.passOdds = 0; let keptOff = false; for (let pk of ['place4', 'place5', 'place6', 'place8', 'place9', 'place10']) { if (bets[pk] > 0 && !placeWorking(pk)) keptOff = true; else if (placeWorking(pk)) { bets[pk] = 0; buys[pk] = false; placeLammer[pk] = null; placeForeverOff[pk] = false; } } placeForeverOff = placeForeverOff; placeLammer = placeLammer; buyVigTotal = owedVig(totalBuyAction()); if (keptOff) message += ' Place bets that were OFF stay up for the next shooter.'; sevenOutFlag = true; point = 0; comeOddsOverrideOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; for (let k of placeOrderInsideOut) placeLammer[k] = null; placeLammer = placeLammer; placeOnDuringCR = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false }; canShootFromPlace = false; ensureDisplayLammerAngles(); if ([4, 5, 6, 8, 9, 10].some((n) => dontComePts[n] > 0 || dontComeOdds[n] > 0)) startDcCeremony(sevenOutPt); }
			else if (total === point) { stickCall = oldStickCallFor(total, point, true, false); let win = bets.passLine; let dontLose = bets.dontPass; let oddsWin = 0; if (bets.passOdds > 0) { oddsWin = oddsWinOld(bets.passOdds, point); } if (oddsWin > 0) { wins.passOdds = oddsWin; winPoint.passOdds = point; } if (win > 0) { wins.passLine = (wins.passLine || 0) + win; winAfterPoint.passLine = true; } message += ' Point made! Pass Line wins ' + fmt(win) + (oddsWin > 0 ? '. Odds wins ' + fmt(oddsWin) : '') + (dontLose > 0 ? ". Don't Pass loses " + fmt(dontLose) : '') + (bets.dontOdds > 0 ? '. Lay Odds loses ' + fmt(bets.dontOdds) : '') + '.'; messageKind = 'notify'; bets.dontPass = 0; wins.dontPass = 0; winAfterPoint.dontPass = false; bets.dontOdds = 0; wins.dontOdds = 0; pointsMade += 1; point = 0; comeOddsOverrideOn = { 4: false, 5: false, 6: false, 8: false, 9: false, 10: false }; for (let k of placeOrderInsideOut) placeLammer[k] = null; placeLammer = placeLammer; placeOnDuringCR = { place4: false, place5: false, place6: false, place8: false, place9: false, place10: false }; canShootFromPlace = false; ensureDisplayLammerAngles(); }
			else { stickCall = oldStickCallFor(total, point, false, false); }
		}
		if (comeRailNote > 0) { message += ' Picked up your money ' + fmt(comeRailNote) + ' from the COME.'; comeRailNote = 0; } if (overlayWinsPosted.length > 0) queueOverlayWinSequence(); let propUpNow = (propStakesAtRoll.horn > 0 ? 1 : 0) + (propStakesAtRoll.hhAces > 0 ? 1 : 0) + (propStakesAtRoll.hhAceDeuce > 0 ? 1 : 0) + (propStakesAtRoll.hhYo > 0 ? 1 : 0) + (propStakesAtRoll.hhTwelve > 0 ? 1 : 0) + (propStakesAtRoll.anySeven > 0 ? 1 : 0) + (propStakesAtRoll.anyCraps > 0 ? 1 : 0) + (propStakesAtRoll.world > 0 ? 1 : 0) + (propStakesAtRoll.ceSplit > 0 ? 1 : 0) + (propStakesAtRoll.ceC > 0 ? 1 : 0) + (propStakesAtRoll.ceE > 0 ? 1 : 0); let propWonNow = (propStakesAtRoll.horn > 0 && hornWin > 0) || (propStakesAtRoll.hhAces > 0 && hhWins.aces > 0) || (propStakesAtRoll.hhAceDeuce > 0 && hhWins.aceDeuce > 0) || (propStakesAtRoll.hhYo > 0 && hhWins.yo > 0) || (propStakesAtRoll.hhTwelve > 0 && hhWins.twelve > 0) || (propStakesAtRoll.anySeven > 0 && anySevenWin > 0) || (propStakesAtRoll.anyCraps > 0 && anyCrapsWin > 0) || (propStakesAtRoll.world > 0 && worldWin > 0) || (propStakesAtRoll.ceSplit > 0 && ceSplitWin > 0) || (propStakesAtRoll.ceC > 0 && ceCWin > 0) || (propStakesAtRoll.ceE > 0 && ceEWin > 0); let groupWonNow = groupsAtRoll.some((g) => grpWinOf(grpKeyOf(g.id)) > 0); if ((propUpNow + groupsAtRoll.length >= 2 && (propWonNow || groupWonNow)) || groupWonNow) queuePropComboMenu(propStakesAtRoll, groupsAtRoll); else { if (hornBet > 0 && hornWin > 0) queueHornWinMenu(); for (let d of hhDefs) { if (hhBets[d.key] > 0 && hhWins[d.key] > 0) queueHhWinMenu(d.key); } if (anySevenBet > 0 && anySevenWin > 0 && !groupsAtRoll.some((g) => g.id === 'sevenEleven')) queueAnySevenWinMenu(); if (anyCrapsBet > 0 && anyCrapsWin > 0) queueAnyCrapsWinMenu(); if (worldBet > 0 && worldWin > 0) queueWorldWinMenu(); if (ceSplitBet > 0 && ceSplitWin > 0) queueCeSplitWinMenu(); if (ceCBet > 0 && ceCWin > 0) queueCeCWinMenu(); if (ceEBet > 0 && ceEWin > 0) queueCeEWinMenu(); }
		reconcileSuGroups();
		bets = bets; wins = wins; if (!message) message = 'Rolled ' + total + '. No change to your bets.'; bubbleMode = 'stick';
	}

	function testCollect() { stackFieldWin(); stackComeWins(); cancelHornWinSequence(); cancelAnySevenWinSequence(); cancelAnyCrapsWinSequence(); cancelWorldWinSequence(); cancelCeSplitWinSequence(); cancelCeCWinSequence(); cancelCeEWinSequence(); cancelHhWinSequence(); sweepPropComboLosers(); cancelPropComboSequence(); railHornWin(); railAnyWins(); railWorldWin(); railCeWins(); railHhWins(); railStraightUpWins(); if (wins.passLine > 0) { bankroll += wins.passLine; wins.passLine = 0; winAfterPoint.passLine = false; } if (wins.dontPass > 0) { bankroll += wins.dontPass; wins.dontPass = 0; winAfterPoint.dontPass = false; } if (point === 0) { if (wins.passOdds > 0) { bankroll += bets.passOdds + wins.passOdds; bets.passOdds = 0; wins.passOdds = 0; winPoint.passOdds = 0; } if (wins.dontOdds > 0) { bankroll += bets.dontOdds + wins.dontOdds; bets.dontOdds = 0; wins.dontOdds = 0; winPoint.dontOdds = 0; } } bets = bets; wins = wins; }
	function placeScriptedProp(parsed) {
		let amt = parsed.amount;
		if (parsed.fn === 'horn') { if (!amt || amt < 4) { showAlert('Minimum Horn bet is $4.'); return false; } if (amt % 4 !== 0) { showAlert('Horn bets go in $4 steps, so each number gets its share.'); return false; } return placeHorn(amt, true); }
		if (parsed.fn === 'hornHigh') { if (!amt || amt < 5) { showAlert('Minimum Horn High bet is $5.'); return false; } if (amt % 5 !== 0) { showAlert('Horn High bets go in $5 steps, so each unit gets its share.'); return false; } if (amt > hhMaxFor(parsed.key)) { showAlert('Table max on a Horn High bet is ' + fmt(hhMaxFor(parsed.key)) + '.'); return false; } if (!placeHornHighGroup([{ key: parsed.key, amt: amt }], true)) { showAlert('That needs ' + fmt(amt) + ' and you have ' + fmt(bankroll) + ' in the rail.'); return false; } showAsk('Bet ' + fmt(amt) + ' Horn High ' + hhName(parsed.key) + '.'); return true; }
		if (parsed.fn === 'anySeven') return placeAnySeven(amt, true);
		if (parsed.fn === 'anyCraps') return placeAnyCraps(amt, true);
		if (parsed.fn === 'world') { if (!amt || amt < 5) { showAlert('Minimum World bet is $5.'); return false; } if (amt % 5 !== 0) { showAlert('World bets go in $5 steps.'); return false; } return placeWorld(amt, true); }
		if (parsed.fn === 'ceSplit') { if (!amt || amt < 2) { showAlert('Minimum C & E split bet is $2.'); return false; } return placeCeSplit(amt, true); }
		if (parsed.fn === 'ceC') { if (!amt || amt < 1) { showAlert('Minimum C bet is $1.'); return false; } if (amt > 5000) { showAlert('Max on this bet is ' + fmt(5000) + '.'); return false; } if (bankroll + ceCBet + ceCWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on the C.'); return false; } sweepPropComboLosers(); if (ceCWin > 0) { bankroll += ceCWin; ceCWin = 0; } cancelCeCWinSequence(); cancelPropComboSequence(); bankroll += ceCBet; bankroll -= amt; ceCBet = amt; assignCeCAngles(); showAsk('Bet ' + fmt(amt) + ' on the C.'); return true; }
		if (parsed.fn === 'ceE') { if (!amt || amt < 1) { showAlert('Minimum E bet is $1.'); return false; } if (amt > 5000) { showAlert('Max on this bet is ' + fmt(5000) + '.'); return false; } if (bankroll + ceEBet + ceEWin < amt) { showAlert('Not enough in the rail for ' + fmt(amt) + ' on the E.'); return false; } sweepPropComboLosers(); if (ceEWin > 0) { bankroll += ceEWin; ceEWin = 0; } cancelCeEWinSequence(); cancelPropComboSequence(); bankroll += ceEBet; bankroll -= amt; ceEBet = amt; assignCeEAngles(); showAsk('Bet ' + fmt(amt) + ' on the E.'); return true; }
		if (parsed.fn === 'straightUp') { if (!amt || amt < 1) { showAlert('Minimum Straight Up bet is $1.'); return false; } if (amt > 5000) { showAlert('Max on this bet is ' + fmt(5000) + '.'); return false; } if (!placeStraightUpGroup([{ key: parsed.key, amt: amt }], true)) { showAlert('That needs ' + fmt(amt) + ' and you have ' + fmt(bankroll) + ' in the rail.'); return false; } dissolveGroupsCovering(parsed.key); showAsk('Bet ' + fmt(amt) + ' ' + suName(parsed.key) + '.'); return true; }
		if (parsed.fn === 'suGroup') { let row = grpRowFor(parsed.id); if (!row) return false; if (!amt || amt < 1) { showAlert('Minimum bet on a Split or Multi-Bet is $1 each.'); return false; } if (amt > 5000) { showAlert('Max on this bet is ' + fmt(5000) + '.'); return false; } let entries = row.comps.map((c) => ({ comp: c, amt: amt })); if (!placePropEntries(entries, undefined, true)) { showAlert('That needs ' + fmt(amt * row.comps.length) + ' and you have ' + fmt(bankroll) + ' in the rail.'); return false; } for (let c of row.comps) dissolveGroupsCovering(c); registerSuGroup(row, amt); showAsk('Bet ' + fmt(amt) + ' Each ' + row.title + '.'); return true; }
		return false;
	}
	function parseTestToken(raw) {
		let t = raw.toUpperCase();
		if (/^\d+$/.test(t)) { let n = Number(t); return n >= 2 && n <= 12 ? { kind: 'roll', total: n } : null; }
		let sm = t.match(/^(\d+)(ACROSSINCLUDING|ACROSS|INSIDE|OUTSIDE|UPTOWN|DOWNTOWN)$/);
		if (sm) { let spreadName = { ACROSS: 'Across', INSIDE: 'Inside', OUTSIDE: 'Outside', UPTOWN: 'Uptown', DOWNTOWN: 'Downtown', ACROSSINCLUDING: 'AcrossIncluding' }[sm[2]]; return { kind: 'bet', fn: 'spread', group: spreadName, amount: Number(sm[1]) }; }
		let m = t.match(/^(\d+)(PL|DP|CB|DC|PO|LO|P10|P[45689]|B10|B4|CO10|CO[45689]|DO10|DO[45689]|NO10|NO[45689]|HH12|HH11|HH2|HH3|SU12|SU11|SU2|SU3|HLY|HL|TWC|AD|ET|SE|A7|AC|CE|H|W|C|E|F)$/);
		if (!m) return null;
		let amount = Number(m[1]); let code = m[2];
		if (code === 'PL') return { kind: 'bet', fn: 'place', key: 'passLine', amount };
		if (code === 'DP') return { kind: 'bet', fn: 'place', key: 'dontPass', amount };
		if (code === 'F') return { kind: 'bet', fn: 'place', key: 'field', amount };
		if (code === 'CB') return { kind: 'bet', fn: 'place', key: 'come', amount };
		if (code === 'DC') return { kind: 'bet', fn: 'place', key: 'dontCome', amount };
		if (code === 'PO') return { kind: 'bet', fn: 'place', key: 'passOdds', amount };
		if (code === 'LO') return { kind: 'bet', fn: 'place', key: 'dontOdds', amount };
		if (code.charAt(0) === 'P') return { kind: 'bet', fn: 'place', key: 'place' + code.slice(1), amount };
		if (code.charAt(0) === 'B') return { kind: 'bet', fn: 'buy', key: 'place' + code.slice(1), amount };
		if (code.startsWith('CO')) return { kind: 'bet', fn: 'comeOdds', num: Number(code.slice(2)), amount };
		if (code.startsWith('NO')) return { kind: 'bet', fn: 'overlay', num: Number(code.slice(2)), amount };
		if (code === 'H') return { kind: 'bet', fn: 'horn', amount };
		if (code.startsWith('HH')) return { kind: 'bet', fn: 'hornHigh', key: { '2': 'aces', '3': 'aceDeuce', '11': 'yo', '12': 'twelve' }[code.slice(2)], amount };
		if (code === 'A7') return { kind: 'bet', fn: 'anySeven', amount };
		if (code === 'AC') return { kind: 'bet', fn: 'anyCraps', amount };
		if (code === 'W') return { kind: 'bet', fn: 'world', amount };
		if (code === 'CE') return { kind: 'bet', fn: 'ceSplit', amount };
		if (code === 'C') return { kind: 'bet', fn: 'ceC', amount };
		if (code === 'E') return { kind: 'bet', fn: 'ceE', amount };
		if (code.startsWith('SU')) return { kind: 'bet', fn: 'straightUp', key: { '2': 'aces', '3': 'aceDeuce', '11': 'yo', '12': 'twelve' }[code.slice(2)], amount };
		if (code === 'HL') return { kind: 'bet', fn: 'suGroup', id: 'highLow', amount };
		if (code === 'HLY') return { kind: 'bet', fn: 'suGroup', id: 'highLowYo', amount };
		if (code === 'AD') return { kind: 'bet', fn: 'suGroup', id: 'acesAceDeuce', amount };
		if (code === 'ET') return { kind: 'bet', fn: 'suGroup', id: 'elevenTwelve', amount };
		if (code === 'SE') return { kind: 'bet', fn: 'suGroup', id: 'sevenEleven', amount };
		if (code === 'TWC') return { kind: 'bet', fn: 'suGroup', id: 'threeWayCrap', amount };
		return { kind: 'bet', fn: 'dcOdds', num: Number(code.slice(2)), amount };
	}
	function testHeadComeOddsPromptPt() { if (popupBet || payMenu || fieldPayMenu || offGateBet || subMenu || mustBetPopup || dcPtMenu || comeMoveDecision || dcMoveDecision || comeDownMenu || pointChooser || pendingComeMenu || pendingPayMenu) return 0; let pt = (comePtMenu && comePtMenuTravel) ? comePtMenu : pendingComeOddsMenu; if (!pt) return 0; let parts = testRolls.split(','); for (let p of parts) { let s = p.trim(); if (s === '') continue; let parsed = parseTestToken(s); return (parsed && parsed.kind === 'bet' && parsed.fn === 'comeOdds' && parsed.num === pt) ? pt : 0; } return 0; }
	function rollTest() { let parts = testRolls.split(','); let steps = []; for (let p of parts) { let s = p.trim(); if (s === '') continue; steps.push(s); } if (steps.length === 0) return; if (payMenu || fieldPayMenu) { showAlert('Pick what to do with your win first.'); return; } fieldSplit = null; inTestRoll = true; rolling = true; showGuide(oldDiceOutCalls[Math.floor(Math.random() * oldDiceOutCalls.length)]); let queue = steps.slice(); let finishTest = (stopped) => { inTestRoll = false; rolling = false; if (!stopped) { message = 'Test rolls done. ' + message; testRolls = ''; } else testRolls = queue.join(', '); }; let tryScriptedComeOdds = () => { let pt = comeTravelStaged || pendingComeOddsMenu; if (!pt || pendingComeMenu || pendingPayMenu || queue.length === 0) return 'none'; let parsed = parseTestToken(queue[0]); if (!parsed || parsed.kind !== 'bet' || parsed.fn !== 'comeOdds' || parsed.num !== pt) return 'none'; let token = queue[0]; if (!placeComeOdds(parsed.num, parsed.amount, true)) { message = 'Test stopped at ' + token + ': ' + message; finishTest(true); return 'failed'; } cancelPopupDelay(); queue.shift(); return 'answered'; }; let tryScriptedDcOdds = () => { let pt = pendingDcMenu; if (!pt || pendingComeMenu || pendingPayMenu || queue.length === 0) return 'none'; let parsed = parseTestToken(queue[0]); if (!parsed || parsed.kind !== 'bet' || parsed.fn !== 'dcOdds' || parsed.num !== pt) return 'none'; let token = queue[0]; if (!placeDcOdds(parsed.num, parsed.amount, true)) { message = 'Test stopped at ' + token + ': ' + message; finishTest(true); return 'failed'; } clearPendingDcMenu(); queue.shift(); return 'answered'; }; let nextTestStep = () => { if (queue.length === 0) { finishTest(false); return; } if (payMenu || fieldPayMenu) { message += ' Test stopped, win to decide first.'; finishTest(true); return; } if (comeMoveDecision || comeMovePending) { message += ' Test stopped, Come move to decide first.'; finishTest(true); return; } if (dcMoveDecision || dcMovePending) { message += ' Test stopped, No Action to decide first.'; finishTest(true); return; } if (comeTravelStaged || pendingComeOddsMenu) { let ans = tryScriptedComeOdds(); if (ans === 'answered') { nextTestStep(); return; } if (ans === 'failed') return; if (comeTravelStaged) { message += ' Test stopped, Come bet traveled to the ' + comeTravelStaged + '.'; finishTest(true); return; } } if (pendingComeMenu) { message += ' Test stopped, Come payout, pick up your winnings.'; finishTest(true); return; } if (pendingDcMenu) { let ansDc = tryScriptedDcOdds(); if (ansDc === 'answered') { nextTestStep(); return; } if (ansDc === 'failed') return; message += " Test stopped, Don't Come bet traveled behind the " + pendingDcMenu + '.'; finishTest(true); return; } let token = queue[0]; let parsed = parseTestToken(token); if (!parsed) { message += " Test stopped, didn't understand '" + token + "'."; finishTest(true); return; } if (parsed.kind === 'bet') { let ok; if (parsed.fn === 'place') ok = placeBet(parsed.key, parsed.amount, true); else if (parsed.fn === 'buy') ok = placeBuy(parsed.key, parsed.amount, true); else if (parsed.fn === 'comeOdds') ok = placeComeOdds(parsed.num, parsed.amount, true); else if (parsed.fn === 'spread') ok = betSpreadByTotal(parsed.group, parsed.amount); else if (parsed.fn === 'overlay') ok = placeOverlay(parsed.num, parsed.amount, true); else if (parsed.fn === 'dcOdds') ok = placeDcOdds(parsed.num, parsed.amount, true); else ok = placeScriptedProp(parsed); if (!ok) { message = 'Test stopped at ' + token + ': ' + message; finishTest(true); return; } queue.shift(); nextTestStep(); return; } if (!hasVestedBet()) { message += ' Test stopped, no vested bet left.'; finishTest(true); return; } captureRollSnapshot(); testCollect(); let total = parsed.total; queue.shift(); let a = total <= 7 ? total - 1 : 6; let b = total - a; let ticks = 0; let interval = setInterval(() => { diceA = Math.floor(Math.random() * 6); diceB = Math.floor(Math.random() * 6); ticks += 1; if (ticks >= 9) { clearInterval(interval); diceA = a - 1; diceB = b - 1; resolveRoll(total); if (ceremonyActive) { message += ' Test stopped, Don\'t Come bets being paid behind.'; finishTest(true); return; } if (payMenu || pendingPayMenu) { message += ' Test stopped, Place win, pick what to do with it.'; finishTest(true); return; } if (fieldPayMenu) { message += ' Test stopped, Field win, pick what to do with it.'; finishTest(true); return; } if (comeMoveDecision || comeMovePending) { message += ' Test stopped, Come move to decide first.'; finishTest(true); return; } if (dcMoveDecision || dcMovePending) { message += ' Test stopped, No Action to decide first.'; finishTest(true); return; } if (comeTravelStaged || pendingComeOddsMenu) { let ans = tryScriptedComeOdds(); if (ans === 'answered') { nextTestStep(); return; } if (ans === 'failed') return; if (comeTravelStaged) { message += ' Test stopped, Come bet traveled to the ' + comeTravelStaged + '.'; finishTest(true); return; } } if (pendingComeMenu) { message += ' Test stopped, Come payout, pick up your winnings.'; finishTest(true); return; } if (pendingDcMenu) { let ansDc = tryScriptedDcOdds(); if (ansDc === 'answered') { nextTestStep(); return; } if (ansDc === 'failed') return; if (queue.length > 0) { message += " Test stopped, Don't Come bet traveled behind the " + pendingDcMenu + '.'; finishTest(true); return; } } nextTestStep(); } }, 100); }; nextTestStep(); }
	let rollSnapshot = null;
	function deepCopyState(v) { return v === undefined ? v : JSON.parse(JSON.stringify(v)); }
	function captureRollSnapshot() {
		rollSnapshot = {
			bankroll: bankroll, bets: deepCopyState(bets), wins: deepCopyState(wins),
			comePts: deepCopyState(comePts), comePtWins: deepCopyState(comePtWins), comeOdds: deepCopyState(comeOdds), comeOddsWins: deepCopyState(comeOddsWins),
			comePile: comePile, comePileBet: comePileBet, comePileWin: comePileWin, comePileOffAndOn: comePileOffAndOn, comePileOrigBet: comePileOrigBet, comePileWinOdds: comePileWinOdds, comePileOffFor: comePileOffFor, comeOffForFollowUp: comeOffForFollowUp, comePileOdds: comePileOdds, comePileOddsOff: comePileOddsOff,
			dontComePts: deepCopyState(dontComePts), dontComePtWins: deepCopyState(dontComePtWins), dontComeOdds: deepCopyState(dontComeOdds), dontComeOddsWins: deepCopyState(dontComeOddsWins),
			overlays: deepCopyState(overlays), overlayVigs: deepCopyState(overlayVigs), overlayWins: deepCopyState(overlayWins),
			buys: deepCopyState(buys), buyVigTotal: buyVigTotal,
			placeLammer: deepCopyState(placeLammer), placeForeverOff: deepCopyState(placeForeverOff), placeOnDuringCR: deepCopyState(placeOnDuringCR),
			comeCorner: deepCopyState(comeCorner), comeOddsOff: deepCopyState(comeOddsOff), comeOddsDeclaredOn: deepCopyState(comeOddsDeclaredOn), comeOddsOverrideOn: deepCopyState(comeOddsOverrideOn), comeTravelMadePt: deepCopyState(comeTravelMadePt), comeMadePtComeout: deepCopyState(comeMadePtComeout),
			chipAngles: deepCopyState(chipAngles), lammerAngles: deepCopyState(lammerAngles), buyLammerAngles: deepCopyState(buyLammerAngles), placementCount: deepCopyState(placementCount),
			point: point, diceA: diceA, diceB: diceB, lastRoll: lastRoll, rolls: rolls, pointsMade: pointsMade,
			fieldSplit: deepCopyState(fieldSplit), hornBet: hornBet, hornWin: hornWin, anySevenBet: anySevenBet, anySevenWin: anySevenWin, anyCrapsBet: anyCrapsBet, anyCrapsWin: anyCrapsWin, worldBet: worldBet, worldWin: worldWin, ceSplitBet: ceSplitBet, ceSplitWin: ceSplitWin, ceCBet: ceCBet, ceCWin: ceCWin, ceEBet: ceEBet, ceEWin: ceEWin, suBets: deepCopyState(suBets), suWins: deepCopyState(suWins), suGroups: deepCopyState(suGroups), hhBets: deepCopyState(hhBets), hhWins: deepCopyState(hhWins),
			winAfterPoint: deepCopyState(winAfterPoint), winPoint: deepCopyState(winPoint), canShootFromPlace: canShootFromPlace,
			sevenOutFlag: sevenOutFlag, comeRailNote: comeRailNote, comeTravelStaged: comeTravelStaged,
			comeMovePending: deepCopyState(comeMovePending), dcMovePending: deepCopyState(dcMovePending), deferredPayMenu: deepCopyState(deferredPayMenu),
			dcPile: dcPile, dcPileAt: dcPileAt, dcFlyAmt: dcFlyAmt, dcFlyX: dcFlyX, dcFlyY: dcFlyY, ceremonyPuckPt: ceremonyPuckPt, ceremonyLines: deepCopyState(ceremonyLines), ceremonyQueue: deepCopyState(ceremonyQueue), ceremonyLowZ: ceremonyLowZ, dcPileFromComeout: dcPileFromComeout,
			overlayWinsPosted: deepCopyState(overlayWinsPosted), overlayWinQueue: deepCopyState(overlayWinQueue), overlayWinPending: overlayWinPending, hornWinPending: hornWinPending, anySevenWinPending: anySevenWinPending, anyCrapsWinPending: anyCrapsWinPending, worldWinPending: worldWinPending, worldPushPending: worldPushPending, ceSplitWinPending: ceSplitWinPending, ceCWinPending: ceCWinPending, ceEWinPending: ceEWinPending, hhWinPendingKey: hhWinPendingKey, propCombo: deepCopyState(propCombo), propComboPending: propComboPending,
			message: message, messageKind: messageKind, bubbleMode: bubbleMode, stickCall: stickCall
		};
	}
	function undoLastRoll() {
		if (!rollSnapshot || rolling || ceremonyActive) return;
		cancelPopupDelay();
		cancelDcCeremony();
		cancelOverlayWinSequence();
		cancelHornWinSequence();
		cancelAnySevenWinSequence();
		cancelAnyCrapsWinSequence();
		cancelWorldWinSequence();
		cancelCeSplitWinSequence();
		cancelCeCWinSequence();
		cancelCeEWinSequence();
		cancelHhWinSequence();
		cancelPropComboSequence();
		clearPendingDcMenu();
		popupBet = null; popupReturn = null; payMenu = null; fieldPayMenu = null; comePtMenu = null; comePtMenuTravel = false; comePtMenuChoice = false; dcPtMenu = null; overlayMenu = null; bandChooser = null; hornMenu = false; hornWinMenu = false; hhMenu = false; hhWinMenuKey = ''; anySevenMenu = false; anyCrapsMenu = false; anySevenWinMenu = false; anyCrapsWinMenu = false; worldMenu = false; worldWinMenu = false; ceMenu = false; ceSplitWinMenu = false; ceCWinMenu = false; ceEWinMenu = false; hopChooser = false; hopSub = null; pointChooser = null; comeMoveDecision = null; dcMoveDecision = null; comeDownMenu = null; dcPileMenu = false; mustBetPopup = false; offGateBet = null; subMenu = null; subMenuReturn = null;
		let s = rollSnapshot; rollSnapshot = null;
		bankroll = s.bankroll; bets = s.bets; wins = s.wins;
		comePts = s.comePts; comePtWins = s.comePtWins; comeOdds = s.comeOdds; comeOddsWins = s.comeOddsWins;
		comePile = s.comePile; comePileBet = s.comePileBet; comePileWin = s.comePileWin; comePileOffAndOn = s.comePileOffAndOn; comePileOrigBet = s.comePileOrigBet; comePileWinOdds = s.comePileWinOdds; comePileOffFor = s.comePileOffFor; comeOffForFollowUp = s.comeOffForFollowUp; comePileOdds = s.comePileOdds; comePileOddsOff = s.comePileOddsOff;
		dontComePts = s.dontComePts; dontComePtWins = s.dontComePtWins; dontComeOdds = s.dontComeOdds; dontComeOddsWins = s.dontComeOddsWins;
		overlays = s.overlays; overlayVigs = s.overlayVigs; overlayWins = s.overlayWins;
		buys = s.buys; buyVigTotal = s.buyVigTotal;
		placeLammer = s.placeLammer; placeForeverOff = s.placeForeverOff; placeOnDuringCR = s.placeOnDuringCR;
		comeCorner = s.comeCorner; comeOddsOff = s.comeOddsOff; comeOddsDeclaredOn = s.comeOddsDeclaredOn; comeOddsOverrideOn = s.comeOddsOverrideOn; comeTravelMadePt = s.comeTravelMadePt; comeMadePtComeout = s.comeMadePtComeout;
		chipAngles = s.chipAngles; lammerAngles = s.lammerAngles; buyLammerAngles = s.buyLammerAngles; placementCount = s.placementCount;
		point = s.point; diceA = s.diceA; diceB = s.diceB; lastRoll = s.lastRoll; rolls = s.rolls; pointsMade = s.pointsMade;
		fieldSplit = s.fieldSplit; hornBet = s.hornBet; hornWin = s.hornWin; anySevenBet = s.anySevenBet; anySevenWin = s.anySevenWin; anyCrapsBet = s.anyCrapsBet; anyCrapsWin = s.anyCrapsWin; worldBet = s.worldBet; worldWin = s.worldWin; worldPushPending = s.worldPushPending; ceSplitBet = s.ceSplitBet; ceSplitWin = s.ceSplitWin; ceCBet = s.ceCBet; ceCWin = s.ceCWin; ceEBet = s.ceEBet; ceEWin = s.ceEWin; suBets = s.suBets; suWins = s.suWins; suGroups = s.suGroups || []; hhBets = s.hhBets; hhWins = s.hhWins;
		winAfterPoint = s.winAfterPoint; winPoint = s.winPoint; canShootFromPlace = s.canShootFromPlace;
		sevenOutFlag = s.sevenOutFlag; comeRailNote = s.comeRailNote; comeTravelStaged = s.comeTravelStaged;
		comeMovePending = s.comeMovePending; dcMovePending = s.dcMovePending; deferredPayMenu = s.deferredPayMenu;
		dcPile = s.dcPile; dcPileAt = s.dcPileAt; dcFlyAmt = s.dcFlyAmt; dcFlyX = s.dcFlyX; dcFlyY = s.dcFlyY; ceremonyPuckPt = s.ceremonyPuckPt; ceremonyLines = s.ceremonyLines; ceremonyQueue = s.ceremonyQueue; ceremonyLowZ = s.ceremonyLowZ; dcPileFromComeout = s.dcPileFromComeout;
		overlayWinsPosted = s.overlayWinsPosted; overlayWinQueue = s.overlayWinQueue; overlayWinPending = s.overlayWinPending;
		hornWinPending = s.hornWinPending; if (hornWinPending) queueHornWinMenu();
		anySevenWinPending = s.anySevenWinPending; if (anySevenWinPending) queueAnySevenWinMenu();
		anyCrapsWinPending = s.anyCrapsWinPending; if (anyCrapsWinPending) queueAnyCrapsWinMenu();
		worldWinPending = s.worldWinPending; if (worldWinPending) queueWorldWinMenu();
		ceSplitWinPending = s.ceSplitWinPending; if (ceSplitWinPending) queueCeSplitWinMenu();
		ceCWinPending = s.ceCWinPending; if (ceCWinPending) queueCeCWinMenu();
		ceEWinPending = s.ceEWinPending; if (ceEWinPending) queueCeEWinMenu();
		hhWinPendingKey = s.hhWinPendingKey; if (hhWinPendingKey) queueHhWinMenu(hhWinPendingKey);
		propCombo = s.propCombo; propComboPending = s.propComboPending; if (propComboPending) rearmPropCombo();
		message = s.message; messageKind = s.messageKind; stickCall = s.stickCall;
		showInform('Undid the last roll.');
	}
	function rollDice() {
		if (rolling) return;
		if (payMenu) { showAlert('Pick what to do with your Place ' + payMenu.num + ' win first.'); return; }
		if (fieldPayMenu) { showAlert('Pick what to do with your Field win first.'); return; }
		if (anyMenuOpen) { if (testRolls.trim() !== '' && testHeadComeOddsPromptPt()) { rollTest(); return; } return; }
		if (testRolls.trim() !== '') { rollTest(); return; }
		if (bankroll + onTable < 5) { showAlert("You don't have enough money to shoot. Reset the game to start again."); return; }
		if (!hasVestedBet()) { mustBetPopup = true; showAlert(shootErrorMessage()); return; }
		captureRollSnapshot();
		fieldSplit = null;
		combineWins();
		rolling = true; showGuide(oldDiceOutCalls[Math.floor(Math.random() * oldDiceOutCalls.length)]); let ticks = 0;
		let interval = setInterval(() => { diceA = Math.floor(Math.random() * 6); diceB = Math.floor(Math.random() * 6); ticks += 1; if (ticks >= 9) { clearInterval(interval); let a = Math.floor(Math.random() * 6) + 1; let b = Math.floor(Math.random() * 6) + 1; diceA = a - 1; diceB = b - 1; rolling = false; resolveRoll(a + b); } }, 100);
	}
</script>

<svelte:head><title>Craps Simulator 2 | Parlay Nation</title></svelte:head>

<main class="cs2" class:dark={darkMode}>
	<h1>Craps Simulator 2 <span class="tag">New clean test page</span></h1>
	<p class="intro">Tap a bet right on the table. A popup will ask how much you want to bet, with preset amounts. Your chips will then show on that spot on the layout. No chip picker first, no bet buttons underneath first. The buttons below the table do the same thing, in case a table spot is hard to tap on a phone.</p>
	<label class="spot-toggle"><input type="checkbox" bind:checked={showSpots} /> Show bet boxes on the table</label>
	<label class="spot-toggle"><input type="checkbox" bind:checked={showAmounts} /> Show dollar amounts on the table</label>
	<label class="spot-toggle"><input type="checkbox" bind:checked={darkMode} /> Dark mode</label>
	<label class="spot-toggle"><input type="checkbox" bind:checked={showStickwoman} /> Show stickwoman</label>
	<label class="spot-toggle"><input type="checkbox" bind:checked={showStickCalls} /> Show stick calls</label>

	<section class="totals">
		<div><strong>In Rail</strong><span>${bankroll}</span></div>
		<div><strong>On Table</strong><span>${onTable}</span></div>
		<div><strong>Bankroll</strong><span>${totalBankroll}</span></div>
		<div><strong>Point</strong><span>{point === 0 ? 'OFF' : point}</span></div>
		<div><strong>Last Roll</strong><span>{lastRoll === 0 ? '-' : lastRoll}</span></div>
		<div><strong>Rolls / Points</strong><span>{rolls} / {pointsMade}</span></div>
	</section>

	<section class="table-wrap">
		<img class="table-img" src={tableLayout} alt="Craps table layout" />
		{#if showStickwoman}<img class="stickwoman" src={stickwoman} alt="Stickwoman" />{/if}
		{#if showStickCalls && bubbleText}<div class="stick-bubble {bubbleKind}">{bubbleText}</div>{/if}
		{#each spots as spot}
			{#if (spot.key !== 'passOdds' || (point !== 0 && bets.passLine > 0) || bets.passOdds > 0 || wins.passOdds > 0) && (spot.key !== 'dontPass' || point === 0 || bets.dontPass > 0) && ((spot.key !== 'come' && spot.key !== 'dontCome') || point !== 0 || (spot.key === 'come' && bets.come > 0 && wins.come > 0)) }
			<button class="spot {spot.cls}" class:spot-hidden={!showSpots} class:has-lay={spot.key === 'dontPass' && bets.dontOdds > 0} class:has-win={spot.key === 'dontPass' && wins.dontPass > 0} class:come-split={spot.key === 'come' && dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0} on:click={(e) => handleSpotClick(e, spot.key)} aria-label={spot.label}>{#if spot.key === 'come' && dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0}<span class="come-half come-half-left" class:spot-hidden={!showSpots}></span><span class="come-half come-half-right" class:spot-hidden={!showSpots}></span>{/if}
				{#if bets[spot.key] > 0 || (spot.key === 'come' && comePile > 0)}<span class="spot-bet">{#if showAmounts && !(spot.key.startsWith('place') && comeMovePending && comeMovePending.num === placeNum(spot.key))}{#if spot.key.startsWith('place')}{#if bothBetsMap[placeNum(spot.key)]}<span class="spot-amount both-amt" style="font-size: {bothAmtFontSize(bets[spot.key])}px; bottom: {buys[spot.key] ? 24 + (stackCheques(bets[spot.key]).length - 1) * 4 : 10}px;">${bets[spot.key]}</span>{:else}<span class="spot-amount" style="left: calc(50% - 4px); top: auto; bottom: {buys[spot.key] ? 24 + (stackCheques(bets[spot.key]).length - 1) * 4 : 10}px; transform: translateX(-50%);">${bets[spot.key]}</span>{/if}{:else if spot.key === 'come'}{#if bets[spot.key] > 0}<span class="spot-amount" style="font-size: {amtFontSize(bets[spot.key])}px;{dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0 ? ' right: calc(25% + 16px);' : ''}">${bets[spot.key]}</span>{/if}{:else if spot.key === 'dontCome'}<span class="spot-amount" style="font-size: {amtFontSize(bets[spot.key])}px; left: 50%; right: auto; top: calc(50% - 10px); transform: translate(-50%, -100%);">${bets[spot.key]}</span>{:else if spot.key === 'field' && fieldSplit}<span class="spot-amount" style="right: calc(50% + 20px); top: 50%; transform: translateY(-50%); font-size: {amtFontSize(fieldSplit.left)}px;">${fieldSplit.left}</span><span class="spot-amount" style="left: calc(50% + 20px); right: auto; top: 50%; transform: translateY(-50%); font-size: {amtFontSize(fieldSplit.right)}px;">${fieldSplit.right}</span>{:else}<span class="spot-amount">${bets[spot.key]}</span>{/if}{/if}{#if spot.key.startsWith('place')}{#each stackCheques(bets[spot.key]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: {bothBetsMap[placeNum(spot.key)] ? '30%' : '50%'}; bottom: calc({buys[spot.key] ? 4 + ci * 4 : -10 - ci * 4}px); transform: translateX(-50%) rotate({getChipAngle(spot.key, bets[spot.key], ci)}deg);" />{/each}{#if buys[spot.key]}<span class="lammer buy-lammer" style="left: {bothBetsMap[placeNum(spot.key)] ? '30%' : '50%'}; bottom: calc({6 + (stackCheques(bets[spot.key]).length - 1) * 2}px); transform: translateX(-50%) rotate({getBuyLammerAngle(spot.key, bets[spot.key], buyLammerAngles[spot.key])}deg);">BUY</span>{/if}{#if point === 0}{#if displayLammers[spot.key]}<span class="lammer {displayLammers[spot.key] === 'on' ? 'on-lammer' : 'off-lammer'}" style="left: {bothBetsMap[placeNum(spot.key)] ? '30%' : '50%'}; bottom: calc({buys[spot.key] ? 8 + (stackCheques(bets[spot.key]).length - 1) * 2 : -8 - (stackCheques(bets[spot.key]).length - 1) * 2}px); transform: translateX(-50%) rotate({getLammerAngle(spot.key, bets[spot.key], lammerAngles[spot.key])}deg);">{displayLammers[spot.key] === 'on' ? 'ON' : 'OFF'}</span>{/if}{:else}{#if combinedMarkerFor('place', placeNum(spot.key), comeOdds, comeOddsOff, bets, placeLammer) === 'off'}<span class="lammer off-lammer" style="left: {bothBetsMap[placeNum(spot.key)] ? '30%' : '50%'}; bottom: calc({buys[spot.key] ? 8 + (stackCheques(bets[spot.key]).length - 1) * 2 : -8 - (stackCheques(bets[spot.key]).length - 1) * 2}px); transform: translateX(-50%) rotate({getLammerAngle(spot.key, bets[spot.key], lammerAngles[spot.key])}deg);">OFF</span>{/if}{#if combinedMarkerFor('place', placeNum(spot.key), comeOdds, comeOddsOff, bets, placeLammer) === 'on'}<span class="lammer on-lammer" style="left: {bothBetsMap[placeNum(spot.key)] ? '30%' : '50%'}; bottom: calc({buys[spot.key] ? 8 + (stackCheques(bets[spot.key]).length - 1) * 2 : -8 - (stackCheques(bets[spot.key]).length - 1) * 2}px); transform: translateX(-50%) rotate({getLammerAngle(spot.key, bets[spot.key], lammerAngles[spot.key])}deg);">ON</span>{/if}{/if}{:else if spot.key === 'field' && fieldSplit}{#each stackCheques(fieldSplit.left) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(50% - 10px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('field', fieldSplit.left, ci)}deg);" />{/each}{#each stackCheques(fieldSplit.right) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(50% + 10px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('field', fieldSplit.right, ci)}deg);" />{/each}{:else if spot.key === 'come'}{#each stackCheques(bets[spot.key]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc({dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0 ? '75%' : '50%'} + {directionOffsets[chipDirections[spot.key]].dx * ci * 10}px); top: calc(50% + {directionOffsets[chipDirections[spot.key]].dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle(spot.key, bets[spot.key], ci)}deg);" />{/each}{:else}{#each stackCheques(bets[spot.key]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(50% + {directionOffsets[chipDirections[spot.key]].dx * ci * 10}px); top: calc(50% + {directionOffsets[chipDirections[spot.key]].dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle(spot.key, bets[spot.key], ci)}deg);" />{/each}{/if}{#if wins[spot.key] > 0 && spot.key !== 'come'}{#each Array.from({ length: winChips(spot.key) }) as _, wi}{#each stackCheques(bets[spot.key]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} winning cheque" style="left: calc(50% + {10 + wi * 20}px); top: calc(50% + {directionOffsets[chipDirections[spot.key]].dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle(spot.key, wins[spot.key], wi * 10 + ci)}deg);" />{/each}{/each}{#if showAmounts}<span class="win-amount" style="left: calc(50% + {winChips(spot.key) * 20 + 10}px); top: 50%; transform: translateY(-50%);">${spot.key === 'dontPass' ? bets[spot.key] + wins[spot.key] : wins[spot.key]}</span>{/if}{/if}{#if spot.key === 'come' && wins.come > 0}{#each stackCheques(wins.come) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} winning cheque" style="left: calc({dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0 ? '75%' : '50%'} + 10px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle('come', wins.come, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style="left: calc({dcPile > 0 && dcPileAt === 'come' && bets.come > 0 && wins.come > 0 ? '75%' : '50%'} + 30px); top: 50%; transform: translateY(-50%);">${wins.come}</span>{/if}{/if}{#if spot.key === 'come' && comePile > 0}{#if comePileOffAndOn && bets.come === 0}{#if showAmounts}<span class="spot-amount" style="font-size: {amtFontSize(comePileBet)}px;">${comePileBet}</span>{/if}{#each stackCheques(comePileBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + {directionOffsets[chipDirections[spot.key]].dx * ci * 10}px); top: calc(50% + {directionOffsets[chipDirections[spot.key]].dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle(spot.key, comePileBet, ci)}deg);" />{/each}{#each stackCheques(comePileWin) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + {(comePileWin !== comePileBet ? 16 : 10) + directionOffsets.se.dx * ci * 10}px); top: calc(50% + {directionOffsets.se.dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle('come', comePileWin, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style="left: calc(50% + {(comePileWin !== comePileBet ? 36 : 30) + (stackCheques(comePileWin).length - 1) * directionOffsets.se.dx * 10}px); top: 50%; transform: translateY(-50%);">${comePileWin}</span>{/if}{:else if comePileOffFor > 0 && bets.come === 0}{#if showAmounts}<span class="spot-amount" style="font-size: {comePileOdds > 0 ? comeSideFontSize(comePileBet - comePileOdds, comePileOdds) : amtFontSize(comePileBet)}px;">{comePileOdds > 0 ? fmt(comePileBet - comePileOdds) + ' w/ ' + fmt(comePileOdds) + ' Odds' : '$' + comePileBet}</span>{/if}{#each stackCheques(comePileBet - comePileOdds) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + {directionOffsets[chipDirections[spot.key]].dx * ci * 10}px); top: calc(50% + {directionOffsets[chipDirections[spot.key]].dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle(spot.key, comePileBet - comePileOdds, ci)}deg);" />{/each}{#if comePileOdds > 0 && comePileOddsOff}{#each stackCheques(comePileOdds) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="Come odds cheque" style="left: calc(50% + {20 + directionOffsets.s.dx * ci * 10}px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('comeOdds' + comePileOffFor, comePileOdds, ci)}deg);" />{/each}{:else if comePileOdds > 0}{#each stackCheques(comePileOdds) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="Come odds cheque" style="left: calc(50% + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + 8px); transform: translate(-50%, -50%) rotate({getChipAngle('comeOdds' + comePileOffFor, comePileOdds, ci)}deg);" />{/each}{/if}{#each stackCheques(comePileWin) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + {(comePileOdds > 0 && comePileOddsOff ? 30 : comePileOdds > 0 ? 16 : 10) + directionOffsets.se.dx * ci * 10}px); top: calc(50% + {directionOffsets.se.dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle('come', comePileWin, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style="left: calc(50% + {(comePileOdds > 0 && comePileOddsOff ? 50 : comePileOdds > 0 ? 36 : 30) + (stackCheques(comePileWin).length - 1) * directionOffsets.se.dx * 10}px); top: 50%; transform: translateY(-50%);">${comePileWin}</span>{/if}{:else}{#each stackCheques(comePileBet) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + 20px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle('come', comePileBet, ci)}deg);" />{/each}{#each stackCheques(comePileWin) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} payout cheque" style="left: calc(50% + 40px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translateY(-50%) rotate({chipAngle('come', comePileWin, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style="right: calc(50% - 10px); left: auto; top: 50%; transform: translateY(-50%); font-size: {comePileOdds > 0 ? comeSideFontSize(comePileBet - comePileOdds, comePileOdds) : amtFontSize(comePileBet)}px;">{comePileOdds > 0 ? fmt(comePileBet - comePileOdds) + ' w/ ' + fmt(comePileOdds) + ' Odds' : '$' + comePileBet}</span><span class="win-amount" style="left: calc(50% + 50px); top: 50%; transform: translateY(-50%); font-size: {amtFontSize(comePileWin)}px;">${comePileWin}</span>{/if}{/if}{/if}</span>{/if}
				{#if spot.key.startsWith('place') && showAmounts && comePts[placeNum(spot.key)] > 0 && !(comeMovePending && comeMovePending.num === placeNum(spot.key))}<span class="spot-amount come-amt {bothBetsMap[placeNum(spot.key)] ? 'come-amt-side' : 'come-amt-center'}" style="font-size: {bothBetsMap[placeNum(spot.key)] ? comeSideFontSize(comePts[placeNum(spot.key)], comeOdds[placeNum(spot.key)]) : comeCenterFontSize(comePts[placeNum(spot.key)], comeOdds[placeNum(spot.key)])}px; bottom: {bothBetsMap[placeNum(spot.key)] ? (buys[spot.key] ? 26 + (stackCheques(bets[spot.key]).length - 1) * 4 : 26) : 26}px;">{#if comeOdds[placeNum(spot.key)] > 0}${comePts[placeNum(spot.key)]}<br />w/<br />${comeOdds[placeNum(spot.key)]}{:else}${comePts[placeNum(spot.key)]}{/if}</span>{/if}
				{#if spot.key.startsWith('place') && comeMovePending && comeMovePending.num === placeNum(spot.key)}{#each stackCheques(comeMovePending.amount) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: 50%; bottom: calc({(buys[spot.key] ? 24 + (stackCheques(bets[spot.key]).length - 1) * 4 : 10) + ci * 4}px); transform: translateX(-50%) rotate({getChipAngle('come' + comeMovePending.num, comeMovePending.amount, ci)}deg);" />{/each}{/if}
				{#if spot.key === 'dontPass' && bets.dontOdds > 0}
					{#each stackCheques(bets.dontOdds) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="Lay odds cheque" style="left: calc(50% - 30px + {directionOffsets.w.dx * ci * 10}px); top: 50%; transform: translate(-50%, -50%) rotate({getChipAngle('dontOdds', bets.dontOdds, ci)}deg);" />{/each}
					{#if showAmounts}<span class="spot-amount" style="right: calc(50% + 46px); top: 50%; transform: translateY(-50%);">${bets.dontOdds}</span>{/if}
					{#if wins.dontOdds > 0}
						{#each stackCheques(bets.dontOdds) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="Lay odds winning cheque" style="left: calc(50% - 30px + {directionOffsets.w.dx * ci * 10}px); top: calc(50% - 24px); transform: translate(-50%, -50%) rotate({chipAngle('dontOdds', wins.dontOdds, ci)}deg);" />{/each}
						{#if showAmounts}<span class="win-amount" style="right: calc(50% + 46px); top: calc(50% - 24px); transform: translateY(-50%);">${wins.dontOdds}</span>{/if}
					{/if}
				{/if}
			</button>
			{/if}
		{/each}
		{#each [4, 5, 6, 8, 9, 10] as num}
			{#if comePts[num] > 0}
			<button class="spot spot-come-pt" style="left: {bothBetsMap[num] ? 'calc(' + comePtLeft(num) + '% + 1.3%)' : comePtLeft(num) + '%'}; top: 36%; width: 4.1%; height: 7%;" on:click={() => openPointBox(num)} aria-label="Come bet on {num}">
				{#each stackCheques(comePts[num]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(50% + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('come' + num, comePts[num], ci)}deg);" />{/each}
				
				{#if comeOdds[num] > 0}
					{#each stackCheques(comeOdds[num]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="Come odds cheque" style="left: calc(50% + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + 8px); transform: translate(-50%, -50%) rotate({getChipAngle('comeOdds' + num, comeOdds[num], ci)}deg);" />{/each}
					
					{#if (point === 0 && comeOdds[num] > 0 && (comeOddsOff[num] || (!placeWorkingWith(placeLammer, 'place' + num) && !(point === 0 && comeOddsDeclaredOn[num]) && !(point !== 0 && comeOddsOverrideOn[num]))) && !(point === 0 && comeMadePtComeout[num])) || (point !== 0 && comeOdds[num] > 0 && combinedMarkerFor('odds', num, comeOdds, comeOddsOff, bets, placeLammer) === 'off')}<span class="lammer off-lammer" style="left: 50%; top: calc(50% + 8px); transform: translate(-50%, -50%);">OFF</span>{/if}{#if (point === 0 && comeOdds[num] > 0 && comeOddsDeclaredOn[num] && !comeOddsOff[num]) || (point !== 0 && comeOdds[num] > 0 && combinedMarkerFor('odds', num, comeOdds, comeOddsOff, bets, placeLammer) === 'on')}<span class="lammer on-lammer" style="left: 50%; top: calc(50% + 8px); transform: translate(-50%, -50%);">ON</span>{/if}
				{/if}
				{#if comePtWins[num] > 0}
					{#each stackCheques(comePts[num]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="Come winning cheque" style="left: calc(50% + 24px + {directionOffsets.s.dx * ci * 10}px); top: 50%; transform: translate(-50%, -50%) rotate({chipAngle('come' + num, comePtWins[num], ci)}deg);" />{/each}
					{#if showAmounts}<span class="win-amount" style="left: calc(50% + 38px); top: 50%; transform: translateY(-50%);">${comePtWins[num]}</span>{/if}
				{/if}
				{#if comeOddsWins[num] > 0}
					{#each stackCheques(comeOdds[num]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="Come odds winning cheque" style="left: calc(50% + 24px + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + 8px); transform: translate(-50%, -50%) rotate({chipAngle('comeOdds' + num, comeOddsWins[num], ci)}deg);" />{/each}
					{#if showAmounts}<span class="win-amount" style="left: calc(50% + 38px); top: calc(50% + 8px); transform: translateY(-50%);">${comeOddsWins[num]}</span>{/if}
				{/if}
			</button>
			{/if}
			<button class="spot spot-dc-pt" class:spot-hidden={!showSpots} style="left: {comePtLeft(num) - 1.2}%; top: 24.6%; width: 6.4%; height: 5%;" on:click={() => openDcPtMenu(num)} aria-label="Behind the {num}">
				{#if dontComeOdds[num] > 0}
					{#each stackCheques(dontComeOdds[num]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="Lay odds cheque" style="left: calc(20% - {ci * dcLayStep(stackCheques(dontComeOdds[num]).length)}px); top: calc(14% - {ci * dcLayStep(stackCheques(dontComeOdds[num]).length)}px); transform: translate(-50%, -50%) rotate({getChipAngle('dcOdds' + num, dontComeOdds[num], ci)}deg);" />{/each}
				{/if}
				{#each stackCheques(dontComePts[num]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: 46%; top: calc(55% + {directionOffsets.s.dy * ci * 4}px); transform: translate(-50%, -50%) rotate({getChipAngle('dc' + num, dontComePts[num], ci)}deg);" />{/each}
				{#if overlays[num] > 0}
					{#each stackCheques(overlays[num]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(100% - 10px); top: 10px; transform: translate(-50%, -50%) rotate({getChipAngle('overlay' + num, overlays[num], ci)}deg);" />{/each}
					<span class="lammer lay-lammer" style="left: calc(100% - 10px); top: 10px; transform: translate(-50%, -50%);">LAY</span>
				{/if}
				{#if dontComeOddsWins[num] > 0}
					{#each stackCheques(dontComeOdds[num]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="Lay odds winning cheque" style="left: calc(20% - {(stackCheques(dontComeOdds[num]).length - 1) * dcLayStep(stackCheques(dontComeOdds[num]).length)}px); top: calc(14% - {(stackCheques(dontComeOdds[num]).length - 1) * dcLayStep(stackCheques(dontComeOdds[num]).length) + 22}px); transform: translate(-50%, -50%) rotate({chipAngle('dcOdds' + num, dontComeOddsWins[num], ci)}deg);" />{/each}
				{/if}
				{#if dontComePtWins[num] > 0}
					{#each stackCheques(dontComePts[num]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="Don't Come winning cheque" style="left: 46%; top: calc(55% - 20px + {directionOffsets.n.dy * ci * 4}px); transform: translate(-50%, -50%) rotate({chipAngle('dc' + num, dontComePtWins[num], ci)}deg);" />{/each}
				{/if}
				{#if overlayWins[num] > 0}
					{#each stackCheques(overlays[num]) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} winning cheque" style="left: calc(100% - 10px); top: -16px; transform: translate(-50%, -50%) rotate({chipAngle('overlay' + num, overlayWins[num], ci)}deg);" />{/each}
				{/if}
				{#if showAmounts}
					{#if dontComeOddsWins[num] > 0}<span class="dc-amt" style="{dontComePtWins[num] > 0 ? 'left: 0; top: -' + dcWinRowTop(stackCheques(dontComePts[num]).length, stackCheques(dontComeOdds[num]).length, dontComePtWins[num], dontComeOddsWins[num], overlayWins[num], dontComePts[num], dontComeOdds[num], overlays[num] > 0) + 'px; font-size: ' + dcAmtFont(dontComeOddsWins[num]) + 'px;' : 'left: 0; bottom: calc(100% + ' + ((stackCheques(dontComeOdds[num]).length - 1) * dcLayStep(stackCheques(dontComeOdds[num]).length) + 26.3) + 'px); font-size: ' + dcAmtFont(dontComeOddsWins[num]) + 'px;'}">${dontComeOddsWins[num]}</span>{/if}
					{#if dontComePtWins[num] > 0 && dontComeOdds[num] === 0}<span class="dc-amt" style="left: 50%; bottom: {overlayWins[num] > 0 ? 'max(calc(45% + ' + (30 + (stackCheques(dontComePts[num]).length - 1) * 1.5) + 'px), calc(100% + 28px))' : 'calc(45% + ' + (30 + (stackCheques(dontComePts[num]).length - 1) * 1.5) + 'px)'}; transform: translateX(-50%); font-size: {dcStackPortraitFont(dontComePts[num], stackCheques(dontComePts[num]).length, overlayWins[num] > 0, overlays[num])}px; text-align: center;">${dontComePts[num]} DC<br/>wins<br/>${dontComePts[num]}</span>{/if}
					{#if overlayWins[num] > 0}<span class="dc-amt" style="right: 0; bottom: calc(100% + {ovPortraitBottomD(stackCheques(dontComePts[num]).length, stackCheques(dontComeOdds[num]).length, dontComePtWins[num], dontComeOddsWins[num], overlayWins[num], dontComePts[num], dontComeOdds[num], overlays[num] > 0)}px); font-size: {ovPortraitFont(overlays[num], overlayWins[num], ovPortraitBottomD(stackCheques(dontComePts[num]).length, stackCheques(dontComeOdds[num]).length, dontComePtWins[num], dontComeOddsWins[num], overlayWins[num], dontComePts[num], dontComeOdds[num], overlays[num] > 0))}px; text-align: center;">${overlays[num]} Lay<br/>wins<br/>${overlayWins[num]}</span>{/if}
					{#if dontComePts[num] > 0 && dontComeOdds[num] > 0}
						{#if dontComePtWins[num] > 0}<span class="dc-amt" style="left: 50%; bottom: calc(45% + {30 + (stackCheques(dontComePts[num]).length - 1) * 1.5}px); transform: translateX(-50%); font-size: {dcPortraitFont(dontComePts[num], dontComeOdds[num], overlays[num] > 0, stackCheques(dontComeOdds[num]).length, dontComeOddsWins[num], overlayWins[num])}px; text-align: center;">${dontComePts[num]}<br/>wins ${dontComePts[num]}<br/>even money</span>{:else}<span class="dc-amt" style="left: 50%; bottom: calc(45% + 10px); font-size: {dcCombinedFont(dontComePts[num], dontComeOdds[num], overlays[num] > 0)}px; text-align: center; transform: translateX(-50%);">${dontComePts[num]} w/<br/>${dontComeOdds[num]} Lay</span>{/if}
					{:else if dontComePts[num] > 0 && dontComePtWins[num] > 0}
						<!-- the DC portrait above covers this state -->
					{:else if dontComePts[num] > 0 && dontComeOdds[num] === 0 && overlays[num] === 0}
						<span class="dc-amt" style="left: 50%; bottom: calc(45% + 10px); transform: translateX(-50%); font-size: {dcAmtFont(dontComePts[num])}px;">${dontComePts[num]}</span>
					{:else if dontComePts[num] > 0}
						<span class="dc-amt" style="left: 50%; bottom: calc(45% + 10px); transform: translateX(-50%); font-size: {dcAmtFont(dontComePts[num])}px;">${dontComePts[num]}</span>
					{:else if dontComeOdds[num] > 0}
						{#if dontComeOddsWins[num] > 0}<span class="dc-amt" style="left: 0; bottom: calc(100% + {(stackCheques(dontComeOdds[num]).length - 1) * dcLayStep(stackCheques(dontComeOdds[num]).length) + 40.7}px); font-size: {dcAmtFont(dontComeOdds[num])}px;">${dontComeOdds[num]}</span>{:else}<span class="dc-amt" style="left: 0; bottom: calc(100% + {(stackCheques(dontComeOdds[num]).length - 1) * dcLayStep(stackCheques(dontComeOdds[num]).length) + 6.5}px); font-size: {dcAmtFont(dontComeOdds[num])}px;">${dontComeOdds[num]}</span>{/if}
					{/if}
					{#if overlays[num] > 0 && overlayWins[num] === 0}<span class="dc-amt" style="right: 0; bottom: 100%; font-size: {dcAmtFont(overlays[num])}px;">${overlays[num]}</span>{/if}
				{/if}
			</button>
		{/each}
		<button class="spot spot-prop-ce" class:spot-hidden={!showSpots} on:click={openCeMenu} aria-label="C and E">{#if ceEBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount" style="left: {ceSplitBet > 0 && ceCBet > 0 ? 'calc(54% - 27px)' : ceSplitBet > 0 ? 'calc(38% - 13.5px)' : ceCBet > 0 ? 'calc(54% - 13.5px)' : '24%'}; right: auto; top: calc(83% - {10 + (stackCheques(ceEBet).length - 1) * 3.75}px); transform: translate(-50%, -100%); z-index: 2;">{fmt(ceEBet)}</span>{/if}{#each stackCheques(ceEBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(24% + {directionOffsets.n.dx * ci * 10}px); top: calc(83% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('ceE', ceEBet, ci)}deg);" />{/each}</span>{/if}{#if ceSplitBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount" style="left: {ceEBet > 0 && ceCBet > 0 ? '54%' : ceEBet > 0 ? 'calc(38% + 13.5px)' : ceCBet > 0 ? 'calc(68% - 13.5px)' : '52%'}; right: auto; top: calc(83% - {10 + (stackCheques(ceSplitBet).length - 1) * 3.75}px); transform: translate(-50%, -100%); z-index: 2;">{fmt(ceSplitBet)}</span>{/if}{#each stackCheques(ceSplitBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(52% + {directionOffsets.n.dx * ci * 10}px); top: calc(83% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('ceSplit', ceSplitBet, ci)}deg);" />{/each}</span>{/if}{#if ceCBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount" style="left: {ceEBet > 0 && ceSplitBet > 0 ? 'calc(54% + 27px)' : ceEBet > 0 ? 'calc(54% + 13.5px)' : ceSplitBet > 0 ? 'calc(68% + 13.5px)' : '84%'}; right: auto; top: calc(83% - {10 + (stackCheques(ceCBet).length - 1) * 3.75}px); transform: translate(-50%, -100%); z-index: 2;">{fmt(ceCBet)}</span>{/if}{#each stackCheques(ceCBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(84% + {directionOffsets.n.dx * ci * 10}px); top: calc(83% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('ceC', ceCBet, ci)}deg);" />{/each}</span>{/if}</button>
		<button class="spot spot-prop-world" class:spot-hidden={!showSpots} on:click={openWorldMenu} aria-label="World">{#if worldBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount">${worldBet}</span>{/if}{#each stackCheques(worldBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(31% + {directionOffsets.n.dx * ci * 10}px); top: calc(83% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('world', worldBet, ci)}deg);" />{/each}</span>{/if}</button>
		<div class="spot spot-prop spot-prop-hardways" class:spot-hidden={!showSpots} aria-hidden="true"></div>
		<button class="spot spot-prop-anyseven" class:spot-hidden={!showSpots} on:click={openAnySevenMenu} aria-label="Any Seven">{#if anySevenBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount">${anySevenBet}</span>{/if}{#each stackCheques(anySevenBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(33% + {directionOffsets.n.dx * ci * 10}px); top: calc(50% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('anySeven', anySevenBet, ci)}deg);" />{/each}</span>{/if}</button>
		<button class="spot spot-prop-hornhigh" class:spot-hidden={!showSpots} on:click={openHornHighMenu} aria-label="Horn High bets">{#each hhDefs as d}{#if hhBets[d.key] > 0}{#if showAmounts}<span class="spot-amount" style={d.amtStyle}>${hhBets[d.key]}</span>{/if}{#each stackCheques(hhBets[d.key]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc({d.left}% + {directionOffsets.n.dx * ci * 10}px); top: calc({d.top}% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle(d.propKey, hhBets[d.key], ci)}deg);" />{/each}{/if}{/each}</button>
		<button class="spot spot-prop-anycraps" class:spot-hidden={!showSpots} on:click={openAnyCrapsMenu} aria-label="Any Craps">{#if anyCrapsBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount">${anyCrapsBet}</span>{/if}{#each stackCheques(anyCrapsBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(33.5% + {directionOffsets.n.dx * ci * 10}px); top: calc(50% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('anyCraps', anyCrapsBet, ci)}deg);" />{/each}</span>{/if}</button>
		<button class="spot spot-prop-hop" class:spot-hidden={!showSpots} on:click={openHopChooser} aria-label="Hop bets">{#each suDefs as d}{#if suBets[d.key] > 0}{#if showAmounts}<span class="spot-amount" style={d.amtStyle}>${suBets[d.key]}</span>{/if}{#each stackCheques(suBets[d.key]) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc({d.left}% + {directionOffsets.n.dx * ci * 10}px); top: calc({d.top}% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('su' + d.key, suBets[d.key], ci)}deg);" />{/each}{/if}{/each}</button>
		<button class="spot spot-horn" class:spot-hidden={!showSpots} on:click={openHornMenu} aria-label="Horn">{#if hornBet > 0}<span class="spot-bet">{#if showAmounts}<span class="spot-amount">${hornBet}</span>{/if}{#each stackCheques(hornBet) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(25% + {directionOffsets.n.dx * ci * 10}px); top: calc(75% + {directionOffsets.n.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('horn', hornBet, ci)}deg);" />{/each}</span>{/if}</button>
		{#if wins.dontOdds > 0}<button class="spot" style="left: calc(40.95% - 50px); top: 66.8%; width: 40px; height: 5%; display: none;" on:click={() => openPopup('dontOdds') }>{#each stackCheques(bets.dontOdds) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} style="left: 50%; top: 50%; transform: translate(-50%, -50%);" />{/each}</button>{/if}
		{#if wins.passLine > 0 || wins.passOdds > 0}<button class="collect-btn" on:click={collectWinnings} style="left: 57.5%; top: calc(75.15% - 20px);">Collect</button>{:else if wins.dontPass > 0 || wins.dontOdds > 0}<button class="collect-btn" on:click={collectWinnings} style="left: 57.5%; top: calc(69.3% - 20px);">Collect</button>{/if}
		{#if ceremonyPuckPt > 0}<img class="table-puck" src={puckOn} alt={'Puck on, point is ' + ceremonyPuckPt} style="left: {puckLeft(ceremonyPuckPt)}%; top: 26.5%;" />
		{:else if point === 0}<img class="table-puck" src={puckOff} alt="Puck off, in Don't Come Bar" style="left: 19.1%; top: 29%;" />
		{:else}<img class="table-puck" src={puckOn} alt={'Puck on, point is ' + point} style="left: {puckLeft(point)}%; top: 26.5%;" />{/if}
	{#if ceremonyActive}<div class="ceremony-shield"></div>{/if}
	{#if dcPile > 0}<button type="button" class="dc-pile" class:under-puck={ceremonyLowZ} style="left: {dcPileAt === 'come' ? (bets.come > 0 && wins.come > 0 ? 33 : 29) : 21.25}%; top: {dcPileAt === 'come' ? 48.25 : 32.75}%;" aria-label="Don't Come winnings pile, {fmt(dcPile)}" on:click={openDcPileMenu}>{#each stackCheques(dcPile) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: calc(50% + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({getChipAngle('dcPile', dcPile, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style={dcPileAt === 'come' ? 'left: calc(50% + 30px); top: 50%; transform: translateY(-50%);' : 'left: 50%; top: -6px; transform: translate(-50%, -100%);'}>{fmt(dcPile)}</span>{/if}</button>{/if}
	{#if hornWin + hhWins.aces + hhWins.aceDeuce + hhWins.yo + hhWins.twelve + anySevenWin + anyCrapsWin + worldWin + ceSplitWin + ceCWin + ceEWin + suWins.aces + suWins.aceDeuce + suWins.yo + suWins.twelve > 0}<div class="prop-payout" aria-hidden="true">{#each stackCheques(hornWin + hhWins.aces + hhWins.aceDeuce + hhWins.yo + hhWins.twelve + anySevenWin + anyCrapsWin + worldWin + ceSplitWin + ceCWin + ceEWin + suWins.aces + suWins.aceDeuce + suWins.yo + suWins.twelve) as cheque, ci}<img class="win-chip" src={chequeImagesByType[cheque]} alt="{cheque} winning cheque" style="left: calc(50% + {directionOffsets.s.dx * ci * 10}px); top: calc(50% + {directionOffsets.s.dy * ci * 10}px); transform: translate(-50%, -50%) rotate({chipAngle('propPayout', hornWin + hhWins.aces + hhWins.aceDeuce + hhWins.yo + hhWins.twelve + anySevenWin + anyCrapsWin + worldWin + ceSplitWin + ceCWin + ceEWin + suWins.aces + suWins.aceDeuce + suWins.yo + suWins.twelve, ci)}deg);" />{/each}{#if showAmounts}<span class="win-amount" style="left: calc(50% + 16px); top: 50%; transform: translateY(-50%);">${hornWin + hhWins.aces + hhWins.aceDeuce + hhWins.yo + hhWins.twelve + anySevenWin + anyCrapsWin + worldWin + ceSplitWin + ceCWin + ceEWin + suWins.aces + suWins.aceDeuce + suWins.yo + suWins.twelve}</span>{/if}</div>{/if}
	{#if dcFlyAmt > 0}<div class="dc-fly" class:under-puck={ceremonyLowZ} style="left: {dcFlyX}%; top: {dcFlyY}%;">{#each stackCheques(dcFlyAmt) as cheque, ci}<img class="stack-chip" src={chequeImagesByType[cheque]} alt="{cheque} cheque" style="left: 50%; top: 50%; transform: translate(-50%, -50%) rotate({chipAngle('dcFly', dcFlyAmt, ci)}deg);" />{/each}</div>{/if}
	{#if popupBet}
		<div class="popup-backdrop" on:click={closePopup}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header">{#if popupReturn}<button class="back-btn" on:click={() => { let pr = popupReturn; popupReturn = null; popupBet = null; if (pr.kind === 'mustBet') mustBetPopup = true; else if (pr.kind === 'offGate') offGateBet = pr.key; }} aria-label="Back">←</button>{/if}<h2>{popupBet === 'passLine' && point !== 0 && bets.passLine === 0 ? 'Come Down on the Pass Line' : popupBet === 'come' ? (comePile > 0 && comePileOffAndOn ? 'Off and On' : comePile > 0 && comePileOffFor > 0 ? "You're Off the " + comePileOffFor + ' for ' + fmt(comePileWin) : 'COME') : betLabels[popupBet]}</h2><button class="popup-x" on:click={closePopup} aria-label="Close">×</button></div>
				<div class="popup-body">
				{#if popupBet === 'come' && comePile > 0 && comePileOffAndOn}<p>You're Off and On for {fmt(comePileWin)}.</p>{/if}
				{#if popupBet === 'come' && comePile > 0 && comePileOffAndOn}{#if comePileWin - comePileOrigBet > 0}<p>Your {fmt(comePileOrigBet)} Come Bet wins {fmt(comePileOrigBet)} plus the {fmt(comePileWinOdds)} Odds win {fmt(comePileWin - comePileOrigBet)} - {fmt(comePileWin)} Total.</p>{:else}<p>Your {fmt(comePileOrigBet)} Come Bet wins even money.</p>{/if}{/if}
				{#if popupBet === 'come' && comePile > 0 && comePileOffFor > 0}<p>You're Off the {comePileOffFor} for {fmt(comePileWin)}.</p>{#if comePileOdds > 0}<p>Your {fmt(comePileBet - comePileOdds)} Come bet wins even money and your {fmt(comePileOdds)} Odds win {fmt(comePileWin - (comePileBet - comePileOdds))} - {fmt(comePileWin)} total.</p>{:else}<p>Your {fmt(comePileBet - comePileOdds)} Come bet on the {comePileOffFor} wins even money.</p>{/if}{/if}
				{#if !(popupBet === 'come' && comePile > 0)}{#if popupBet.startsWith('place')}<p>A Place Bet wins when it rolls before the 7. Every {fmt(placeUnit(popupBet))} you bet on the {placeNum(popupBet)} wins {fmt(placeWinAmount(popupBet, placeUnit(popupBet), false, placeNum(popupBet)))}.</p>{/if}{#if popupBet === 'field'}<p>The Field wins on 2, 3, 4, 9, 10, 11, or 12. The 2 and 12 pay double, the others pay even money. Any other number loses.</p>{/if}{#if popupBet === 'passLine' && point === 0}<p>A Pass Line bet wins on 7 or 11 on the comeout and loses on 2, 3, or 12. Any other number becomes the point, and the bet wins when the point rolls again before a 7.</p>{/if}{#if popupBet === 'dontPass'}<p>A Don't Pass bet loses on 7 or 11 on the comeout and wins on 2 or 3. The 12 is a push. Any other number becomes the point, and the bet wins when a 7 rolls before the point.</p>{/if}
				{#if popupBet === 'dontOdds' && wins.dontOdds === 0}<p>Don't Pass Lay Odds: bet more to win less. On point {point}, lay in {fmt(layStep())} increments. A {fmt(layStep())} lay wins {fmt(layWin(layStep()))}.</p>{/if}
				{#if popupBet === 'come' && !(comePile > 0 && comePileOffAndOn) && !(comePile > 0 && comePileOffFor > 0)}<p>Come bets can only be made after a point is set. Wins on 7 or 11, loses on 2, 3, or 12. Any other number and the bet moves into that Point, where it wins when the Point rolls and loses on 7.</p>{/if}
				{#if popupBet === 'dontCome'}<p>Don't Come bets can only be made after a point is set. Wins on 2 or 3, loses on 7 or 11, pushes on 12. Any other number and the bet moves behind that Point, where it wins on 7 and loses if the Point rolls.</p>{/if}
				{#if popupBet === 'passLine' && point !== 0 && bets.passLine === 0}<p>It's usually better to place the point instead, because a Place bet pays more than even money. A $50 Place bet on 5 pays $70, while a $50 Pass Line bet pays $50. Adding Odds only lowers the edge, it doesn't remove it. Even with max Odds, you never beat what the same total Place bet would pay.</p>{/if}
				{#if popupBet === 'passLine' && point !== 0}<p>This is a Pass Line bet made after the point, what we call coming down on the Pass Line. It wins only if the point is made, loses on a seven out, and cannot be taken back. Only during the comeout roll can you take back a Pass Line bet with no issues. You can add Odds behind it.</p>{/if}
				{#if popupBet.startsWith('place') && bets[popupBet] > 0}<p>{placeWorking(popupBet) ? 'This bet is ON.' : 'This bet is OFF. It will not pay until you turn it back ON.'} {placeLammerExplanation(popupBet, comeOdds, comeOddsOff, bets, placeLammer)}</p>{/if}
				{#if popupBet === 'passOdds' && wins.passOdds > 0}<p>Point was {winPoint.passOdds}. Pass Line Odds on {winPoint.passOdds} pays {passOddsMath()}. You had {fmt(bets.passOdds)} Odds, so it wins {fmt(wins.passOdds)}, the winnings are {fmt(wins.passOdds)}, not {fmt(bets.passOdds + wins.passOdds)}. Picking up your money returns {fmt(bets.passOdds + wins.passOdds)} to the rail, {fmt(bets.passOdds)} bet plus {fmt(wins.passOdds)} win. Your original Pass Line bet stays on the table.</p>{/if}
				{#if popupBet === 'dontOdds' && wins.dontOdds > 0}<p>Point was {winPoint.dontOdds}. Lay Odds on {winPoint.dontOdds} pays {layOddsMath()}. You laid {fmt(bets.dontOdds)}, so it wins {fmt(wins.dontOdds)}. Picking up your money returns {fmt(bets.dontOdds + wins.dontOdds)} to the rail, {fmt(bets.dontOdds)} lay plus {fmt(wins.dontOdds)} win. Your original Don't Pass bet stays on the table.</p>{/if}
				{#if popupBet.startsWith('place') && bets[popupBet] > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(bets[popupBet])}</span></span><span class="lb-right"><span class="lb-small">and it</span><span class="lb-big">wins {fmt(placeWorkingWith(placeLammer, popupBet) ? placeWinAmount(popupBet, bets[popupBet], buys[popupBet], placeNum(popupBet)) : 0)}</span></span></p>{/if}
				{#if (popupBet === 'field' || popupBet === 'passLine' || popupBet === 'dontPass' || popupBet === 'dontCome') && bets[popupBet] > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(bets[popupBet])}</span></span></p>{/if}
				{#if popupBet === 'passOdds'}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(bets.passOdds + (wins.passOdds || 0))}</span></span>{#if wins.passOdds > 0 || point !== 0}<span class="lb-right">{#if wins.passOdds > 0}<span class="lb-small">(bet {fmt(bets.passOdds)} + winnings {fmt(wins.passOdds)} left on the table)</span>{/if}{#if point !== 0}<span class="lb-big">Max Odds {fmt(oddsMax())}</span>{/if}</span>{/if}</p>{/if}
				{#if popupBet === 'dontOdds' && wins.dontOdds === 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(bets.dontOdds)}</span></span>{#if point !== 0}<span class="lb-right"><span class="lb-small">Don't Pass bet {fmt(bets.dontPass)}</span><span class="lb-big">Max Lay {fmt(bets.dontPass * 6)} to win {fmt(layWin(bets.dontPass * 6))}</span></span>{/if}</p>{/if}
				{#if popupBet === 'come' && bets.come > 0 && !(comePile > 0 && comePileOffAndOn) && !(comePile > 0 && comePileOffFor > 0)}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(bets.come)}</span></span><span class="lb-right"><span class="lb-small">and it</span><span class="lb-big">wins {fmt(bets.come)}</span></span></p>{/if}
				{/if}
				{#if popupBet === 'dontCome'}<div class="noaction-section"><p>No Action on 6/8: when a Don't Come bet in the DC would move behind a 6 or 8, what should happen?</p><div class="btn-pair"><button class="custom-btn {dcNoAction68 === 'ask' ? 'active-opt' : ''}" on:click={() => dcNoAction68 = 'ask'}>Ask every time</button><button class="custom-btn {dcNoAction68 === 'always' ? 'active-opt' : ''}" on:click={() => dcNoAction68 = 'always'}>Always move</button></div><button class="custom-btn {dcNoAction68 === 'never' ? 'active-opt' : ''}" on:click={() => dcNoAction68 = 'never'}>Never move</button></div>{/if}
				{#if (popupBet === 'passOdds' && wins.passOdds > 0) || (popupBet === 'dontOdds' && wins.dontOdds > 0)}
					{#if popupBet === 'passOdds'}<button class="take-btn" on:click={pickUpPassOddsWinnings}>{'Pick up your money (' + fmt(bets.passOdds + wins.passOdds) + ')'}</button>
					{:else}<button class="take-btn" on:click={pickUpLayWinnings}>{'Pick up your money (' + fmt(bets.dontOdds + wins.dontOdds) + ')'}</button>{#if bets.dontPass > 0}<button class="custom-btn" on:click={() => { popupBet = 'dontPass'; }}>Back to Don't Pass</button>{/if}{/if}
				{:else}
				<p>{#if popupBet === 'come' && comePile > 0 && comePileOffFor > 0}Make a new Come Bet:{:else}{presetLabelFor(popupBet)}{/if}</p>
				{#if popupBet.startsWith('place') && buys[popupBet]}<p>This is a Buy bet, paying 2 to 1. Commission is $1 per $20 on the total of all Buy bets, charged when you buy and held with the bets. When a Buy bet wins you pay commission only on the amount that won. Pressing it pays the full $1 per $20 on the new bet. If you take the bet down before it wins, the part of the commission it was carrying comes back with it.</p>{/if}
				<div class="preset-grid">
					{#each presetAmounts(popupBet, bets.dontPass) as amount}<button on:click={() => { placeBet(popupBet, amount); }} disabled={bankroll + (bets[popupBet] || 0) < amount}>{popupBet === 'dontOdds' ? 'Lay $' + amount + ' to win $' + layWin(amount) : '$' + amount}</button>{/each}
				{#if popupBet === 'place4' || popupBet === 'place10'}{#each buyAmounts(popupBet) as amount}<button on:click={() => { placeBuy(popupBet, amount); }} disabled={!buyCanAfford(popupBet, amount)}>Buy ${amount}</button>{/each}{/if}
				{#if popupBet === 'passLine' || popupBet === 'field' || popupBet === 'passOdds' || popupBet === 'dontPass' || popupBet === 'dontOdds' || popupBet === 'come' || popupBet === 'dontCome' || popupBet.startsWith('place')}<button class="max-btn" on:click={() => betMaxBet(popupBet)}>{popupBet === 'passOdds' ? 'Max Odds' : popupBet === 'dontOdds' ? 'Max Lay' : 'Max Bet'}</button><button class="max-btn" on:click={() => betAllIn(popupBet)}>All In</button>{/if}
				</div>
				{#if presetAmounts(popupBet, bets.dontPass).length === 0}<p>No preset amounts fit right now. Check the max Odds or your rail.</p>{/if}
				<div class="custom-row"><label>{popupBet === 'dontOdds' ? 'Bet other Lay Odds: ' : 'Bet something else: '}<input type="number" min={popupBet === 'place6' || popupBet === 'place8' ? 6 : popupBet === 'passOdds' ? oddsMin() : popupBet === 'dontOdds' ? layStep() : 5} max="5000" step={popupBet === 'place6' || popupBet === 'place8' ? 6 : popupBet === 'passOdds' ? (point === 5 || point === 9 ? 2 : point === 6 || point === 8 ? 5 : 1) : popupBet === 'dontOdds' ? layStep() : 5} bind:value={customAmount} on:input={onCustomAmountInput} on:keydown={(e) => { if (e.key === 'Enter') placeBet(popupBet, Number(customAmount)); }} /></label>{#if popupBet === 'place4' || popupBet === 'place10'}<button class="custom-btn" on:click={() => placeBet(popupBet, Number(customAmount))}>Place the {placeNum(popupBet)} for{Number(customAmount) > 0 ? ' ' + fmt(Number(customAmount)) : ''}</button><button class="custom-btn" on:click={() => placeBuyCustom(popupBet)}>Buy the {placeNum(popupBet)} for{Number(customAmount) > 0 ? ' ' + fmt(Number(customAmount)) + ' + ' + fmt(buyCustomVig(popupBet, Number(customAmount))) + ' vig' : ''}</button>{:else if popupBet.startsWith('place')}<button class="custom-btn" on:click={() => placeBet(popupBet, Number(customAmount))}>Place the {placeNum(popupBet)} for{Number(customAmount) > 0 ? ' ' + fmt(Number(customAmount)) : ''}</button>{:else}<button class="custom-btn" on:click={() => placeBet(popupBet, Number(customAmount))}>{popupBet === 'come' ? 'Bet ' + (Number(customAmount) > 0 ? fmt(Number(customAmount)) + ' ' : '') + 'in the COME' : 'Bet ' + (Number(customAmount) > 0 ? fmt(Number(customAmount)) + ' ' : '') + betLabels[popupBet]}</button>{/if}</div>
				{#if customErr}<p class="max-err">{customErr}</p>{/if}
				{#if popupBet === 'dontOdds' && bets.dontPass > 5 && wins.dontPass === 0 && wins.dontOdds === 0}<div class="custom-row"><label>Reduce your Don't Pass Bet: <input type="number" min="5" max={bets.dontPass} step="1" bind:value={dpReduceCustom} on:input={onDpReduceInput} on:keydown={(e) => { if (e.key === 'Enter') reduceDontPass(Number(dpReduceCustom)); }} /></label><button type="button" class="custom-btn" on:click={() => reduceDontPass(Number(dpReduceCustom))}>Reduce Don't Pass Bet{Number(dpReduceCustom) > 0 ? ' to ' + fmt(Number(dpReduceCustom)) : ''}</button></div>{#if dpReduceErr}<p class="max-err">{dpReduceErr}</p>{/if}{/if}
				{#if popupBet.startsWith('place')}<div class="btn-pair"><button class="custom-btn" on:click={() => { clearInputErrs(); subMenuReturn = popupBet; popupBet = null; subMenu = 'betEach'; }}>Bet Each</button><button class="custom-btn" on:click={() => { subMenuReturn = popupBet; popupBet = null; subMenu = 'spread'; }}>Bet a Spread Bet</button></div>{/if}
				{#if popupBet.startsWith('place') && bets[popupBet] > 0}<div class="btn-pair"><button class="custom-btn" on:click={() => togglePlaceLammer(popupBet)}>{placeWorking(popupBet) ? 'Turn ' + placeNum(popupBet) + ' OFF' : 'Turn ' + placeNum(popupBet) + ' ON'}</button><button class="take-btn" on:click={() => takeDown(popupBet)}>{'Down on your ' + fmt(pickupTotal(popupBet)) + ' ' + placeNum(popupBet)}</button></div>{#if anyPlaceBetUp(bets) || anyOddsUp(comeOdds)}<p>All My Bets:</p>{#if anyPlaceBetUp(bets)}<div class="btn-pair">{#if anyPlaceWorking(bets, placeLammer)}<button class="custom-btn" on:click={turnOffAllPlace}>All Place Off</button>{/if}{#if anyPlaceOff(bets, placeLammer)}<button class="custom-btn" on:click={turnOnAllPlace}>All Place On</button>{/if}</div>{/if}<div class="btn-pair">{#if anyPlaceWorking(bets, placeLammer) || anyOddsWorking(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={turnOffAllBets}>All Bets Off</button>{/if}{#if anyPlaceOff(bets, placeLammer) || anyOddsOff(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={turnOnAllBets}>All Bets On</button>{/if}</div><div class="btn-pair">{#if anyPlaceBetUp(bets)}<button class="custom-btn" on:click={allPlaceBetsDown}>All Place Down</button>{/if}<button class="take-btn" on:click={allBetsDown}>All Bets Down</button></div>{/if}{/if}
				{#if popupBet === 'dontOdds' && bets.dontPass > 0}<button class="take-btn" on:click={pickupDontPassAfterPoint}>{'Pickup' + (((wins.dontPass || 0) > 0 || (wins.dontOdds || 0) > 0) ? ' all ' : ' ') + fmt(bets.dontPass + (wins.dontPass || 0) + bets.dontOdds + (wins.dontOdds || 0)) + ' on the ' + betLabels.dontPass}</button>{/if}
				{#if popupBet === 'passLine' && wins.passLine > 0}<button class="take-btn" on:click={pickUpPassWinnings}>{'Pick up your winnings (' + fmt(wins.passLine) + ')'}</button>{/if}
				{#if popupBet === 'dontPass' && wins.dontPass > 0}<button class="take-btn" on:click={pickUpDontWinnings}>{'Pick up your winnings (' + fmt(wins.dontPass) + ')'}</button>{/if}
				{#if popupBet === 'come' && wins.come > 0}<button class="take-btn" on:click={collectComeWin}>{'Pick up your winnings (' + fmt(wins.come) + ')'}</button>{/if}
				{#if popupBet === 'come' && comePile > 0}<button class="take-btn" on:click={collectComePileWinnings}>{!comePileOffAndOn && comePileOdds > 0 ? 'Pick up your winnings (' + fmt(comePileWin) + ') and Odds (' + fmt(comePileOdds) + ') - ' + fmt(comePileWin + comePileOdds) + ' Total' : 'Pick up your winnings (' + fmt(comePileWin) + ')'}</button><button class="take-btn" on:click={collectComePile}>{'Pick up all your money in the COME (' + fmt(comePile) + ')'}</button>{/if}
				{#if popupBet === 'dontPass' && wins.dontOdds > 0}<button class="custom-btn" on:click={() => { popupBet = 'dontOdds'; }}>{'Lay Odds money (' + fmt(bets.dontOdds) + ' lay, ' + fmt(wins.dontOdds) + ' win)'}</button>{/if}
				{#if (bets[popupBet] > 0 || (wins[popupBet] || 0) > 0) && !(point !== 0 && popupBet === 'passLine') && !popupBet.startsWith('place')}<button class="take-btn" on:click={() => takeDown(popupBet)}>{popupBet === 'dontOdds' ? 'Pickup ' + fmt(bets.dontOdds) + ' on the ' + betLabels[popupBet] : popupBet === 'field' ? 'Pickup' + ((wins[popupBet] || 0) > 0 ? ' all ' : ' ') + fmt(bets[popupBet] + (wins[popupBet] || 0)) + ' in the ' + betLabels[popupBet] : popupBet === 'come' ? 'Pickup' + ((wins[popupBet] || 0) > 0 ? ' all ' : ' ') + fmt(bets[popupBet] + (wins[popupBet] || 0)) + ' in the COME' : popupBet === 'dontCome' ? 'Pickup' + ((wins[popupBet] || 0) > 0 ? ' all ' : ' ') + fmt(bets[popupBet] + (wins[popupBet] || 0)) + ' in the ' + betLabels[popupBet] : 'Pickup' + ((wins[popupBet] || 0) > 0 ? ' all ' : ' ') + fmt(bets[popupBet] + (wins[popupBet] || 0)) + ' on the ' + betLabels[popupBet]}</button>{/if}
				{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if payMenu}
		<div class="popup-backdrop" on:click={paySameBet}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(payMenu.bet)} {payMenu.isBuy ? 'Buy ' : 'Place '} {payMenu.num} won {fmt(payMenu.win)}.</h2><button class="popup-x" on:click={paySameBet} aria-label="Close, take Same Bet">×</button></div>
				<div class="popup-body">
				<p>{payMenu.isBuy ? 'Buy pays 2 to 1. You won ' + fmt(payMenu.win) + '. Same Bet keeps the bet and takes ' + fmt(Math.floor(payMenu.bet / 20)) + ' commission from the win.' : ''} Pick what to do with the win. Win first, then rail if you need it. Tap the X or outside this box to take Same Bet.</p>
				{#if payDisclaimerText()}<p>{payDisclaimerText()}</p>{/if}
				{#if payPressList().length > 0}<p>Presses</p><div class="preset-grid">{#each payPressList() as p}<button on:click={() => payPressByKind(p)} disabled={p.disabled}>{p.label}</button>{/each}</div>{/if}
				{#if payGoToList().length > 0}<p>Go to</p><div class="preset-grid">{#each payGoToList() as opt}<button on:click={() => applyPayTo(payMenu.key, opt.total, 'Go to $' + opt.total + '.')} disabled={opt.disabled}>{opt.label}</button>{/each}</div>{/if}
				{#if payDoubleList().length > 0}<p>Double press</p><div class="preset-grid">{#each payDoubleList() as opt}<button on:click={() => payDouble(opt.total)} disabled={opt.disabled}>{opt.label}</button>{/each}</div>{/if}
				<button class="custom-btn" on:click={paySameBet}>{paySameBetLabel()}</button>
				<button class="take-btn" on:click={paySameBetAndDown}>Same Bet and Down, take {fmt(payMenu.bet + payMenu.win)} to the rail</button>
				<div class="custom-row"><label>Place other: <input type="number" min="5" step={payUnit(payMenu.key)} bind:value={payCustom} on:input={onPayCustomInput} /></label><button class="custom-btn" on:click={payCustomPlace}>Place {Number(payCustom) > 0 ? fmt(Number(payCustom)) + ' ' : ''}on the {payMenu.key.slice(5)}</button></div>
				{#if payCustomErr}<p class="max-err">{payCustomErr}</p>{/if}
				{#if payMenu.key === 'place4' || payMenu.key === 'place10'}<div class="custom-row"><label>Buy other: <input type="number" min="20" step="5" bind:value={payBuyAmount} on:input={onPayBuyInput} /></label><button class="custom-btn" on:click={payCustomBuy}>Buy {Number(payBuyAmount) > 0 ? fmt(Number(payBuyAmount)) + ' ' : ''}on the {payMenu.key.slice(5)}</button></div>{#if payBuyErr}<p class="max-err">{payBuyErr}</p>{/if}{/if}
				{#if payMenuEntry() && payMenuEntry()[5]}<button class="max-btn" on:click={() => applyPayTo(payMenu.key, placeMax(payMenu.key), 'Table max.')} disabled={payCostFor(payMenu.key, placeMax(payMenu.key), payNewIsBuy(payMenu.key, placeMax(payMenu.key), buys[payMenu.key])) > payNetWin() + bankroll}>Bet Table Max ${placeMax(payMenu.key)}</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if offGateBet}
		<div class="popup-backdrop" on:click={() => (offGateBet = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Place Bets are OFF.</h2><button class="popup-x" on:click={() => (offGateBet = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Place bets are OFF during the Comeout Roll. You can turn any number of Place bets ON by asking the dealer.</p>
				<button class="custom-btn" on:click={() => { let g = offGateBet; offGateBet = null; openPopup(g, true); popupReturn = { kind: 'offGate', key: g }; }}>Place {placeNum(offGateBet)} and work it.</button>
				</div>
			</div>
		</div>
	{/if}

	{#if subMenu === 'betEach'}
		<div class="popup-backdrop" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><button class="back-btn" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }} aria-label="Back">←</button><h2>Bet Each Menu</h2><button class="popup-x" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }} aria-label="Close, back to Place menu">×</button></div>
				<div class="popup-body">
				<p>6 and 8:</p><div class="preset-grid">{#each [6, 12, 18, 24, 30, 60, 90, 120] as per}<button on:click={() => betEachGroup('sixEight', per)}>${per} each (${per * 2})</button>{/each}</div>
				<div class="custom-row"><label>Bet each 6 and 8 other: <input type="number" min="6" step="6" bind:value={each68} on:input={onEach68Input} on:keydown={(e) => { if (e.key === 'Enter') betEachGroup('sixEight', Number(each68)); }} /></label><button class="custom-btn" on:click={() => betEachGroup('sixEight', Number(each68))}>Bet {Number(each68) > 0 ? fmt(Number(each68)) + ' ' : ''}each 6 and 8</button></div>
				{#if each68Err}<p class="max-err">{each68Err}</p>{/if}
				<p>5 and 9:</p><div class="preset-grid">{#each [5, 10, 15, 20, 25, 50, 75, 100] as per}<button on:click={() => betEachGroup('fiveNine', per)}>${per} each (${per * 2})</button>{/each}</div>
				<div class="custom-row"><label>Bet each 5 and 9 other: <input type="number" min="5" step="5" bind:value={each59} on:input={onEach59Input} on:keydown={(e) => { if (e.key === 'Enter') betEachGroup('fiveNine', Number(each59)); }} /></label><button class="custom-btn" on:click={() => betEachGroup('fiveNine', Number(each59))}>Bet {Number(each59) > 0 ? fmt(Number(each59)) + ' ' : ''}each 5 and 9</button></div>
				{#if each59Err}<p class="max-err">{each59Err}</p>{/if}
				<p>4 and 10:</p><div class="preset-grid">{#each [{ per: 5, total: 10 }, { per: 10, total: 20 }, { per: 15, total: 30 }, { per: 20, total: 42 }, { per: 25, total: 52 }, { per: 35, total: 73 }, { per: 50, total: 105 }, { per: 100, total: 210 }] as item}<button on:click={() => betEachGroup('fourTen', item.per)}>{item.per >= 20 ? 'Buy $' + item.per + ' each ($' + item.total + ')' : '$' + item.per + ' each ($' + item.total + ')'}</button>{/each}</div>
				<div class="custom-row"><label>Bet each 4 and 10 other: <input type="number" min="5" step="5" bind:value={each410} on:input={onEach410Input} on:keydown={(e) => { if (e.key === 'Enter') betEachGroup('fourTen', Number(each410)); }} /></label><button class="custom-btn" on:click={() => betEachGroup('fourTen', Number(each410))}>Bet {Number(each410) > 0 ? fmt(Number(each410)) + ' ' : ''}each 4 and 10</button></div>
				{#if each410Err}<p class="max-err">{each410Err}</p>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if subMenu === 'spread'}
		<div class="popup-backdrop" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><button class="back-btn" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }} aria-label="Back">←</button><h2>Spread Bets</h2><button class="popup-x" on:click={() => { let r = subMenuReturn; subMenu = null; subMenuReturn = null; if (r) openPopup(r, true); }} aria-label="Close, back to Place menu">×</button></div>
				<div class="popup-body">
				{#if point === 0}<p>Comeout roll, Across includes all six numbers.</p>{:else}<p>Point is {point}, Across excludes the point, AcrossIncluding includes it.</p>{/if}
				{#each spreadGroups() as g}<p>{g.name}:</p><div class="preset-grid">{#each g.levels as lv, li}<button on:click={() => betSpread(g.name, li)}>${lv.total}</button>{/each}</div>{/each}
				</div>
			</div>
		</div>
	{/if}

	{#if mustBetPopup}
		<div class="popup-backdrop" on:click={() => (mustBetPopup = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Bet to shoot</h2><button class="popup-x" on:click={() => (mustBetPopup = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				{#if canShootFromPlace && point !== 0}<p>You picked up your Don't Pass bet during the intermediate roll. You can shoot from a Place bet or Buy, or Come Down on the Pass Line. Coming down pays even money, so placing usually pays more.</p>{:else if canShootFromPlace}<p>You picked up your Don't Pass bet. You now need to make a Place bet or Buy to shoot.</p>{:else if point !== 0}<p>You need a Pass Line bet made after the point to shoot.</p>{:else}<p>On comeout you need a Pass Line or Don't Pass bet to shoot.</p>{/if}
				<p>Place a bet:</p>
				{#if canShootFromPlace}<div class="preset-grid">{#each [4, 5, 6, 8, 9, 10] as num}<button on:click={() => { mustBetPopup = false; openPopup(placeKey(num)); popupReturn = { kind: 'mustBet' }; }}>Place {num}</button>{/each}</div>{/if}
				{#if point !== 0}<button class="custom-btn" on:click={() => { mustBetPopup = false; openPopup('passLine'); popupReturn = { kind: 'mustBet' }; }}>Come Down on the Pass Line</button>{:else}<button class="custom-btn" on:click={() => { mustBetPopup = false; openPopup('passLine'); popupReturn = { kind: 'mustBet' }; }}>Bet Pass Line</button><button class="custom-btn" on:click={() => { mustBetPopup = false; openPopup('dontPass'); popupReturn = { kind: 'mustBet' }; }}>Bet Don't Pass</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if fieldPayMenu && !payMenu}
		<div class="popup-backdrop" on:click={closeFieldMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>You won in the Field</h2><button class="popup-x" on:click={closeFieldMenu} aria-label="Close without deciding">×</button></div>
				<div class="popup-body">
				<p>Your {fmt(fieldPayMenu.bet)} Field bet won {fmt(fieldPayMenu.win)}. You now have {fmt(fieldPayMenu.bet + fieldPayMenu.win)} in the Field. Pick what you would like to do.</p>
				<p>Amount to bet in the Field:</p><div class="preset-grid">{#each [5, 10, 25, 50] as amt}<button on:click={() => fieldRebet(amt)} disabled={amt > fieldPayMenu.bet + fieldPayMenu.win + bankroll}>${amt} Field</button>{/each}</div>
				<div class="btn-pair"><button class="custom-btn" on:click={fieldStackIt} disabled={fieldPayMenu.bet + fieldPayMenu.win > 5000}>Stack it, {fmt(fieldPayMenu.bet + fieldPayMenu.win)} Field</button>{#if !fieldPayMenu.isDouble}<button class="custom-btn" on:click={fieldSameBet}>Take Half, keep {fmt(fieldPayMenu.bet)} Field</button>{:else}<button class="custom-btn" on:click={fieldTakeThird}>Take a Third, {fmt(fieldPayMenu.bet)} to Rail, {fmt(fieldPayMenu.bet * 2)} in Field</button>{/if}</div>
				{#if fieldPayMenu.isDouble}<button class="custom-btn" on:click={fieldSameBet}>Take Two Thirds, {fmt(fieldPayMenu.win)} to Rail, {fmt(fieldPayMenu.bet)} in Field</button>{/if}
				<div class="btn-pair"><button class="max-btn" style="margin-top: 0;" on:click={() => fieldRebet(5000)} disabled={5000 > fieldPayMenu.bet + fieldPayMenu.win + bankroll}>Max Bet $5000</button><button class="max-btn" style="margin-top: 0;" on:click={() => fieldRebet(Math.min(fieldPayMenu.bet + fieldPayMenu.win + bankroll, 5000))}>All In ${Math.min(fieldPayMenu.bet + fieldPayMenu.win + bankroll, 5000)}</button></div>
				<div class="custom-row"><label>Bet something else: <input type="number" min="5" max="5000" step="1" bind:value={fieldCustom} on:input={onFieldCustomInput} /></label><button class="custom-btn" on:click={fieldCustomRebet}>Bet {Number(fieldCustom) > 0 ? fmt(Number(fieldCustom)) + ' ' : ''}Field</button></div>
				{#if fieldErr}<p class="max-err">{fieldErr}</p>{/if}
				<button class="take-btn" on:click={fieldCollectAll}>Take down all {fmt(fieldPayMenu.bet + fieldPayMenu.win)} in the Field</button>
				</div>
			</div>
		</div>
	{/if}

	{#if comePtMenu}
		<div class="popup-backdrop" on:click={() => (comePtMenu = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>{comePtMenuTravel ? "You're On the " + comePtMenu + ' for ' + fmt(comePts[comePtMenu]) : 'Odds for the ' + fmt(comePts[comePtMenu]) + ' Come Bet on the ' + comePtMenu}</h2><button class="popup-x" on:click={() => (comePtMenu = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Your {fmt(comePts[comePtMenu])} Come Bet on the {comePtMenu} is a contract bet and cannot be taken back.</p>
				<p>Come Bet Odds pay true odds, {comeOddsMath(comePtMenu)}. Max Odds {fmt(oddsMaxFor(comePtMenu))}, min {fmt(oddsMinFor(comePtMenu))}. Come Bet Odds are not a contract bet, you can take them back any time.</p>
				{#if comePtMenuChoice}<p>Odds are Off during the Comeout Roll.</p>{/if}
				{#if comeOdds[comePtMenu] > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Come Bet Odds now</span><span class="lb-amt">{fmt(comeOdds[comePtMenu])}</span></span>{#if comeOddsWins[comePtMenu] > 0}<span class="lb-right"><span class="lb-big">win {fmt(comeOddsWins[comePtMenu])}</span></span>{/if}</p>{/if}
				{#if comePtWins[comePtMenu] > 0}<button class="take-btn" on:click={() => pickUpComePtWin(comePtMenu)}>Pick up your winnings ({fmt(comePtWins[comePtMenu])})</button>{/if}
				{#if comePtMenuChoice}<div class="btn-pair"><button class="custom-btn {!comeOddsDeclaredOn[comePtMenu] ? 'active-opt' : ''}" on:click={() => keepComeOddsOff(comePtMenu)}>Keep my Odds Off</button><button class="custom-btn {comeOddsDeclaredOn[comePtMenu] ? 'active-opt' : ''}" on:click={() => turnComeOddsOn(comePtMenu)}>Turn my Odds On</button></div>{/if}
				<p>Amount to bet as Odds:</p>
				<div class="preset-grid">{#each comeOddsPresets(comePtMenu) as amount}<button on:click={() => placeComeOdds(comePtMenu, amount)} disabled={bankroll + comeOdds[comePtMenu] + comeOddsWins[comePtMenu] < amount}>${amount}</button>{/each}</div>
				<button class="max-btn" on:click={() => placeComeOdds(comePtMenu, oddsMaxFor(comePtMenu))}>Max Odds {fmt(oddsMaxFor(comePtMenu))}</button>
				<div class="custom-row"><label>Pick your own Odds: <input type="number" min={oddsMinFor(comePtMenu)} step={comeOddsStep(comePtMenu)} bind:value={comeOddsCustom} on:input={onComeOddsInput} on:keydown={(e) => { if (e.key === 'Enter') placeComeOdds(comePtMenu, Number(comeOddsCustom)); }} /></label><button class="custom-btn" on:click={() => placeComeOdds(comePtMenu, Number(comeOddsCustom))}>Bet {Number(comeOddsCustom) > 0 ? fmt(Number(comeOddsCustom)) + ' ' : ''}Odds</button></div>
				{#if comeOddsErr}<p class="max-err">{comeOddsErr}</p>{/if}
				{#if comeOdds[comePtMenu] > 0 || comeOddsWins[comePtMenu] > 0}<div class="btn-pair">{#if comeOdds[comePtMenu] > 0}<button class="custom-btn" on:click={() => toggleComeOddsOff(comePtMenu)}>{point === 0 ? ((!comeOddsOff[comePtMenu] && (placeWorkingWith(placeLammer, 'place' + comePtMenu) || comeOddsDeclaredOn[comePtMenu])) ? 'Turn Come Bet Odds OFF' : 'Turn Come Bet Odds ON') : (comeOddsOff[comePtMenu] ? 'Turn Come Bet Odds ON' : 'Turn Come Bet Odds OFF')}</button>{/if}{#if comeOddsWins[comePtMenu] > 0}<button class="take-btn" on:click={() => pickupComeOdds(comePtMenu)}>Pick up your money ({fmt(comeOdds[comePtMenu] + comeOddsWins[comePtMenu])})</button>{:else if comeOdds[comePtMenu] > 0}<button class="take-btn" on:click={() => pickupComeOdds(comePtMenu)}>Pickup {fmt(comeOdds[comePtMenu])} Come Bet Odds</button>{/if}</div>{/if}
				{#if comeOdds[4] > 0 || comeOdds[5] > 0 || comeOdds[6] > 0 || comeOdds[8] > 0 || comeOdds[9] > 0 || comeOdds[10] > 0}{#if anyOddsUp(comeOdds) || anyPlaceBetUp(bets)}<p>All My Bets:</p>{/if}<div class="btn-pair">{#if anyOddsWorking(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={turnOffAllComeBetOdds}>All Come Bet Odds Off</button>{/if}{#if anyOddsOff(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={turnOnAllComeBetOdds}>All Come Bet Odds On</button>{/if}</div>{#if anyPlaceBetUp(bets) || anyOddsUp(comeOdds)}<div class="btn-pair">{#if anyPlaceWorking(bets, placeLammer) || anyOddsWorking(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={() => { turnOffAllBets(); comePtMenu = null; }}>All Bets Off</button>{/if}{#if anyPlaceOff(bets, placeLammer) || anyOddsOff(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={() => { turnOnAllBets(); comePtMenu = null; }}>All Bets On</button>{/if}</div>{/if}<div class="btn-pair">{#if anyOddsUp(comeOdds)}<button class="custom-btn" on:click={allComeBetOddsDown}>All Come Bet Odds Down</button>{/if}{#if anyPlaceBetUp(bets) || anyOddsUp(comeOdds)}<button class="take-btn" on:click={() => { allBetsDown(); comePtMenu = null; }}>All Bets Down</button>{/if}</div>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if dcPtMenu}
		<div class="popup-backdrop" on:click={() => (dcPtMenu = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Don't Come Lay Odds behind {dcPtMenu}</h2><button class="popup-x" on:click={() => (dcPtMenu = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Your Don't Come bet is not a contract bet. You can take it back at any time.</p>
				<p>Don't Come Lay Odds: bet more to win less. Max Lay {fmt(dontComePts[dcPtMenu] * 6)}, to win {fmt(layWinFor(dontComePts[dcPtMenu] * 6, dcPtMenu))}, in {fmt(layStepFor(dcPtMenu))} increments.</p>
				{#if dontComeOdds[dcPtMenu] > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Lay Odds now</span><span class="lb-amt">{fmt(dontComeOdds[dcPtMenu])}</span></span>{#if dontComeOddsWins[dcPtMenu] > 0}<span class="lb-right"><span class="lb-big">win {fmt(dontComeOddsWins[dcPtMenu])}</span></span>{/if}</p>{/if}
				{#if dontComePtWins[dcPtMenu] > 0}<button class="take-btn" on:click={() => pickUpDcPtWin(dcPtMenu)}>Pick up your winnings ({fmt(dontComePtWins[dcPtMenu])})</button>{/if}
				<p>Amount to bet as Lay Odds:</p>
				<div class="preset-grid">{#each dcLayPresets(dcPtMenu, dontComePts[dcPtMenu]) as amount}<button on:click={() => placeDcOdds(dcPtMenu, amount)} disabled={bankroll + dontComeOdds[dcPtMenu] + dontComeOddsWins[dcPtMenu] < amount}>Lay ${amount} to win ${layWinFor(amount, dcPtMenu)}</button>{/each}</div>
				<button class="max-btn" on:click={() => placeDcOdds(dcPtMenu, layMaxFor(dcPtMenu))}>Max Lay {fmt(layMaxFor(dcPtMenu))}</button>
				<div class="custom-row"><label>Bet other Lay Odds: <input type="number" min={layStepFor(dcPtMenu)} step={layStepFor(dcPtMenu)} bind:value={dcOddsCustom} on:input={onDcOddsInput} on:keydown={(e) => { if (e.key === 'Enter') placeDcOdds(dcPtMenu, Number(dcOddsCustom)); }} /></label><button class="custom-btn" on:click={() => placeDcOdds(dcPtMenu, Number(dcOddsCustom))}>Bet {Number(dcOddsCustom) > 0 ? fmt(Number(dcOddsCustom)) + ' ' : ''}Lay Odds{Number(dcOddsCustom) > 0 ? ' to win ' + fmt(layWinFor(Number(dcOddsCustom), dcPtMenu)) : ''}</button></div>
				{#if dcOddsErr}<p class="max-err">{dcOddsErr}</p>{/if}
				{#if dontComePts[dcPtMenu] > 5 && dontComePtWins[dcPtMenu] === 0 && dontComeOddsWins[dcPtMenu] === 0}<div class="custom-row"><label>Reduce your Don't Come Bet: <input type="number" min="5" max={dontComePts[dcPtMenu]} step="1" bind:value={dcReduceCustom} on:input={onDcReduceInput} on:keydown={(e) => { if (e.key === 'Enter') reduceDcPt(dcPtMenu, Number(dcReduceCustom)); }} /></label><button type="button" class="custom-btn" on:click={() => reduceDcPt(dcPtMenu, Number(dcReduceCustom))}>Reduce Don't Come Bet{Number(dcReduceCustom) > 0 ? ' to ' + fmt(Number(dcReduceCustom)) : ''}</button></div>{#if dcReduceErr}<p class="max-err">{dcReduceErr}</p>{/if}{/if}
				{#if dontComeOddsWins[dcPtMenu] > 0}<button class="take-btn" on:click={() => pickupDcOdds(dcPtMenu)}>Pick up your money ({fmt(dontComeOdds[dcPtMenu] + dontComeOddsWins[dcPtMenu])})</button>{:else if dontComeOdds[dcPtMenu] > 0}<button class="take-btn" on:click={() => pickupDcOdds(dcPtMenu)}>Pickup {fmt(dontComeOdds[dcPtMenu])} Lay Odds</button>{/if}
				<button class="take-btn" on:click={() => pickupDcPt(dcPtMenu)}>Pickup {fmt(dontComePts[dcPtMenu] + dontComeOdds[dcPtMenu] + dontComePtWins[dcPtMenu] + dontComeOddsWins[dcPtMenu])} Don't Come bet</button>
				<button class="custom-btn" on:click={() => { takeDownAllBehind(dcPtMenu); dcPtMenu = null; }}>Take Down All Bets Behind {dcPtMenu}</button>
				</div>
			</div>
		</div>
	{/if}

	{#if bandChooser}
		<div class="popup-backdrop" on:click={() => (bandChooser = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Behind the {bandChooser}</h2><button class="popup-x" on:click={() => (bandChooser = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Your {fmt(dontComePts[bandChooser])} Don't Come{#if dontComeOdds[bandChooser] > 0}{' '}with {fmt(dontComeOdds[bandChooser])} Lay Odds{/if} behind the {bandChooser} wins even money ({fmt(dontComePts[bandChooser])}){#if dontComeOdds[bandChooser] > 0}{' '}and its Lay Odds win {fmt(layWinFor(dontComeOdds[bandChooser], bandChooser))}{/if}.</p>{#if overlays[bandChooser] > 0}<p>Your {fmt(overlays[bandChooser])} Overlay against the {bandChooser} wins {fmt(overlayWinFor(overlays[bandChooser], bandChooser))}.</p>{/if}
				<div class="btn-pair"><button class="custom-btn" on:click={chooseBandDc}>View DC</button>{#if overlays[bandChooser] > 0}<button class="custom-btn" on:click={chooseBandOverlay}>View Overlay</button>{:else}<button class="custom-btn" on:click={chooseBandOverlay}>Make Overlay</button>{/if}</div>
				<div class="btn-pair band-take">{#if dontComeOdds[bandChooser] > 0}<button class="custom-btn" on:click={bandTakeDownLayOdds}>Take Down Lay Odds</button>{/if}
				{#if dontComePts[bandChooser] > 0}<button class="custom-btn" on:click={bandTakeDownDc}>Take Down My DC</button>{/if}
				{#if overlays[bandChooser] > 0}<button class="custom-btn" on:click={bandTakeDownOverlay}>Take Down My Overlay</button>{/if}</div>
				{#if (dontComePts[bandChooser] > 0 || dontComeOdds[bandChooser] > 0) && overlays[bandChooser] > 0}<button class="custom-btn" on:click={() => takeDownAllBehind(bandChooser)}>All bets Down behind the {bandChooser}</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if overlayMenu}
		<div class="popup-backdrop" on:click={() => (overlayMenu = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Overlay the {overlayMenu}</h2><button class="popup-x" on:click={() => (overlayMenu = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>An Overlay on the {overlayMenu} pays {overlayRatioFor(overlayMenu)} with a 5% commission. It wins if a 7 rolls before the {overlayMenu}, and loses if the {overlayMenu} rolls. It is not a contract bet, you can take it down any time.</p>
				{#if overlays[overlayMenu] > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">You Overlayed the {overlayMenu}</span><span class="lb-amt">{fmt(overlays[overlayMenu])}</span></span><span class="lb-right"><span class="lb-small">{fmt(overlayVigs[overlayMenu])} vig, {fmt(overlays[overlayMenu] + overlayVigs[overlayMenu])} total</span><span class="lb-big">to win {fmt(overlayWinFor(overlays[overlayMenu], overlayMenu))}</span></span></p><p>When it wins, you can drop {fmt(overlayVigFor(overlays[overlayMenu], overlayMenu))} to keep the bet up to win again.</p>{/if}
				{#if overlayWins[overlayMenu] > 0}<p>It has won {fmt(overlayWins[overlayMenu])}. The vig is not returned on a win.</p>{/if}
{#if overlayWins[overlayMenu] > 0}<button class="take-btn" on:click={() => pickupOverlayWin(overlayMenu)}>Pick up your winnings ({fmt(overlayWins[overlayMenu])})</button>{/if}
				<p>Amount to Overlay:</p>
				<div class="preset-grid">{#each overlayPresetLays(overlayMenu) as lay}<button on:click={() => placeOverlayLay(overlayMenu, lay)} disabled={bankroll + overlays[overlayMenu] + overlayVigs[overlayMenu] + overlayWins[overlayMenu] < lay + overlayVigFor(lay, overlayMenu)}>Lay ${lay} to win ${overlayWinFor(lay, overlayMenu)} (${lay + overlayVigFor(lay, overlayMenu)} total)</button>{/each}</div>
				<div class="custom-row"><label>Overlay Amount: <input type="number" min={overlayUnitFor(overlayMenu)} step={layStepFor(overlayMenu)} bind:value={overlayCustom} on:input={onOverlayInput} on:keydown={(e) => { if (e.key === 'Enter') placeOverlayLay(overlayMenu, Number(overlayCustom)); }} /></label><span class="vig-note">+ {fmt(overlayCustomVig(overlayCustom, overlayMenu))} vig</span><button class="custom-btn" on:click={() => placeOverlayLay(overlayMenu, Number(overlayCustom))}>Bet {Number(overlayCustom) + overlayCustomVig(overlayCustom, overlayMenu) > 0 ? fmt(Number(overlayCustom) + overlayCustomVig(overlayCustom, overlayMenu)) + ' ' : ''}No {overlayMenu}</button></div>
				{#if overlayErr}<p class="max-err">{overlayErr}</p>{/if}
				{#if overlays[overlayMenu] > 0 || overlayWins[overlayMenu] > 0}<button class="take-btn" on:click={() => pickupOverlay(overlayMenu)}>{overlayWins[overlayMenu] > 0 ? 'Pickup all ' + fmt(overlays[overlayMenu] + overlayWins[overlayMenu]) + ' Overlay' : 'Pickup ' + fmt(overlays[overlayMenu] + overlayVigs[overlayMenu]) + ' Overlay'}</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if overlayWinMenu}
		<div class="popup-backdrop" on:click={closeOverlayWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(overlays[overlayWinMenu])} Overlay behind the {overlayWinMenu} won {fmt(overlayWins[overlayWinMenu])}</h2><button class="popup-x" on:click={closeOverlayWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				<p>Bet a new Overlay:</p>
				<div class="preset-grid">{#each overlayPresetLays(overlayWinMenu) as lay}<button on:click={() => overlayWinBetNew(overlayWinMenu, lay)} disabled={bankroll + overlayWins[overlayWinMenu] + overlays[overlayWinMenu] < lay + overlayVigFor(lay, overlayWinMenu)}>Lay ${lay} to win ${overlayWinFor(lay, overlayWinMenu)} (${lay + overlayVigFor(lay, overlayWinMenu)} total)</button>{/each}</div>
				<div class="custom-row"><label>Overlay Amount: <input type="number" min={overlayUnitFor(overlayWinMenu)} step={layStepFor(overlayWinMenu)} bind:value={overlayCustom} on:input={onOverlayWinInput} on:keydown={(e) => { if (e.key === 'Enter') overlayWinBetNew(overlayWinMenu, Number(overlayCustom)); }} /></label><span class="vig-note">+ {fmt(overlayCustomVig(overlayCustom, overlayWinMenu))} vig</span><button class="custom-btn" on:click={() => overlayWinBetNew(overlayWinMenu, Number(overlayCustom))}>Bet {Number(overlayCustom) + overlayCustomVig(overlayCustom, overlayWinMenu) > 0 ? fmt(Number(overlayCustom) + overlayCustomVig(overlayCustom, overlayWinMenu)) + ' ' : ''}No {overlayWinMenu}</button></div>
				{#if overlayErr}<p class="max-err">{overlayErr}</p>{/if}
				<button class="take-btn" on:click={() => overlayWinCollectDown(overlayWinMenu)}>Collect {fmt(overlayWins[overlayWinMenu])} and Down for {fmt(overlays[overlayWinMenu])} - {fmt(overlayWins[overlayWinMenu] + overlays[overlayWinMenu])} Total</button>
				<button class="take-btn" on:click={() => overlayWinSameBet(overlayWinMenu)}>Same Bet for {fmt(overlayVigFor(overlays[overlayWinMenu], overlayWinMenu))} and collect {fmt(overlayWins[overlayWinMenu])}</button>
				</div>
			</div>
		</div>
	{/if}

	{#if hornMenu}
		<div class="popup-backdrop" on:click={() => (hornMenu = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Horn</h2><button class="popup-x" on:click={() => (hornMenu = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>The Horn is a one-roll bet on the horn numbers, 2, 3, 11, and 12, bet in four equal parts, one part on each number. The Horn pays 3x your bet if the 3, or 11 roll and 7x-1/4 if the 2 or 12 roll.</p>
				{#if hornBet > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(hornBet)}</span></span></p>{/if}
				<p>Amount to bet on the Horn:</p>
				<div class="preset-grid">{#each [4, 8, 12, 20] as amt}<button on:click={() => placeHorn(amt)} disabled={bankroll + hornBet + hornWin < amt}>${amt}</button>{/each}</div>
				<div class="custom-row"><label>Amt to bet on Horn: <input type="number" min="4" max="5000" step="4" bind:value={hornCustom} on:input={onHornInput} on:keydown={(e) => { if (e.key === 'Enter') placeHornCustom(); }} /></label><button class="custom-btn" on:click={placeHornCustom}>Bet {Number(hornCustom) > 0 ? fmt(Number(hornCustom)) + ' ' : ''}on the Horn</button></div>
				{#if hornErr}<p class="max-err">{hornErr}</p>{/if}
				{#if hornBet > 0}<button class="take-btn" on:click={takeDownHorn}>Take my {fmt(hornBet)} Horn Down</button>{/if}
				{#if hornBet > 0 || hornWin > 0}<button class="take-btn" on:click={takeDownAllProps}>Take my All my Props Down</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if hhMenu}
	<div class="popup-backdrop" on:click={() => (hhMenu = false)}>
		<div class="popup" on:click|stopPropagation>
			<div class="popup-header"><h2>Horn High</h2><button class="popup-x" on:click={() => (hhMenu = false)} aria-label="Close">×</button></div>
			<div class="popup-body">
			<p>A Horn High is a one-roll bet on the horn numbers, 2, 3, 11, and 12, bet in five equal units. Two units ride on the number you pick as high, and one unit rides on each of the other three. The 2 and 12 pay 30 to 1, and the 3 and 11 pay 15 to 1.</p>
			{#if hhBets.aces > 0 || hhBets.aceDeuce > 0 || hhBets.yo > 0 || hhBets.twelve > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bets</span><span class="lb-amt">{hhCurrentText(hhBets)}</span></span></p>{/if}
			<p class="su-section">Bet Horn High</p>
			<div class="su-row">{#each hhDefs as d}<span class="su-unit"><button type="button" class="su-pick {Number(hhInputs[d.key]) >= 5 ? 'active-opt' : ''}" on:click={() => focusHhInput(d.key)}><span class="su-hh-label">Horn High</span><span class="su-dice">{#each d.dice as face}<img src={diceImages[face - 1]} alt="Die showing {face}" />{/each}</span><span class="su-name">{d.name}</span></button><input id="hh-in-{d.key}" class="su-input" type="number" min="5" max={d.max} step="5" bind:value={hhInputs[d.key]} on:input={(e) => onHhUnitInput(d.key, e)} on:keydown={(e) => { if (e.key === 'Enter') placeHornHighMain(); }} /><span class="su-presets">{#each [5, 10, 25, 100] as amt}<button type="button" class="su-preset {Number(hhInputs[d.key]) === amt ? 'active-opt' : ''}" on:click={() => setHhInput(d.key, amt)}>${amt}</button>{/each}</span></span>{/each}</div>
			{#if hhClampErr}<p class="max-err">{hhClampErr}</p>{/if}
			<button class="custom-btn su-bet-btn" on:click={placeHornHighMain} disabled={hhEntriesFrom(hhInputs).length === 0}>{hhBetButtonLabel(hhInputs)}</button>
			{#if hhErr}<p class="max-err">{hhErr}</p>{/if}
			{#each hhDefs as d}{#if hhBets[d.key] > 0}<button class="take-btn" on:click={() => takeDownHornHigh(d.key)}>Down on your {fmt(hhBets[d.key])} Horn High {d.name}</button>{/if}{/each}
			{#if hhBets.aces > 0 || hhBets.aceDeuce > 0 || hhBets.yo > 0 || hhBets.twelve > 0}<button class="take-btn" on:click={takeDownAllProps}>All Props Down</button>{/if}
			</div>
		</div>
	</div>
{/if}
{#if hornWinMenu}
		<div class="popup-backdrop" on:click={closeHornWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(hornBet)} Horn won {fmt(hornWin)}</h2><button class="popup-x" on:click={closeHornWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if hornPressTargets(hornBet, hornWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each hornPressTargets(hornBet, hornWin, bankroll) as p}<button on:click={() => hornWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} Horn{:else}Press to {fmt(p.target)} Horn{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="4" max="5000" step="4" bind:value={hornWinCustom} on:input={onHornWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeHornWinCustom(); }} /></label><button class="custom-btn" on:click={placeHornWinCustom}>Bet {Number(hornWinCustom) > 0 ? fmt(Number(hornWinCustom)) + ' ' : ''}Horn</button></div>
				{#if hornWinErr}<p class="max-err">{hornWinErr}</p>{/if}
				{#if hornParlayOption(hornBet, hornWin, bankroll) || hornHundredParlayOption(hornBet, hornWin, bankroll)}<div class="btn-pair">{#if hornParlayOption(hornBet, hornWin, bankroll)}<button class="take-btn" on:click={() => hornWinPressTo(hornParlayOption(hornBet, hornWin, bankroll).target, true)}>Parlay to {fmt(hornParlayOption(hornBet, hornWin, bankroll).target)} Horn{#if hornParlayOption(hornBet, hornWin, bankroll).drop > 0} (drop {fmt(hornParlayOption(hornBet, hornWin, bankroll).drop)}){/if}</button>{/if}{#if hornHundredParlayOption(hornBet, hornWin, bankroll)}<button class="take-btn" on:click={() => hornWinPressTo(hornHundredParlayOption(hornBet, hornWin, bankroll).target, true)}>Parlay to {fmt(hornHundredParlayOption(hornBet, hornWin, bankroll).target)} Horn (drop {fmt(hornHundredParlayOption(hornBet, hornWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={hornWinSameBet}>Same Bet</button><button class="take-btn" on:click={hornWinSameBetDown}>Same Bet and Down ({fmt(hornBet)} + {fmt(hornWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}

	{#if hhWinMenuKey && hhWins[hhWinMenuKey] > 0 && hhBets[hhWinMenuKey] > 0}
	<div class="popup-backdrop" on:click={closeHhWinMenu}>
		<div class="popup" on:click|stopPropagation>
			<div class="popup-header"><h2>Your {fmt(hhBets[hhWinMenuKey])} Horn High {hhName(hhWinMenuKey)} won {fmt(hhWins[hhWinMenuKey])}</h2><button class="popup-x" on:click={closeHhWinMenu} aria-label="Close">×</button></div>
			<div class="popup-body">
			<p>What would you like to do?</p>
			{#if hhPressTargets(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).length > 0}<p>Press It:</p>
			<div class="preset-grid">{#each hhPressTargets(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)) as p}<button on:click={() => hhWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} Horn High {hhName(hhWinMenuKey)}{:else}Press to {fmt(p.target)} Horn High {hhName(hhWinMenuKey)}{/if}</button>{/each}</div>{/if}
			<div class="custom-row"><label>Bet something else: <input type="number" min="5" max={hhMaxFor(hhWinMenuKey)} step="5" bind:value={hhWinCustom} on:input={onHhWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeHhWinCustom(); }} /></label><button class="custom-btn" on:click={placeHhWinCustom}>Bet {Number(hhWinCustom) > 0 ? fmt(Number(hhWinCustom)) + ' ' : ''}Horn High {hhName(hhWinMenuKey)}</button></div>
			{#if hhWinErr}<p class="max-err">{hhWinErr}</p>{/if}
			{#if hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)) || hhHundredParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey))}<div class="btn-pair">{#if hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey))}<button class="take-btn" on:click={() => hhWinPressTo(hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).target, true)}>Parlay to {fmt(hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).target)} Horn High {hhName(hhWinMenuKey)}{#if hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).drop > 0} (drop {fmt(hhParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).drop)}){/if}</button>{/if}{#if hhHundredParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey))}<button class="take-btn" on:click={() => hhWinPressTo(hhHundredParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).target, true)}>Parlay to {fmt(hhHundredParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).target)} Horn High {hhName(hhWinMenuKey)} (drop {fmt(hhHundredParlayOption(hhBets[hhWinMenuKey], hhWins[hhWinMenuKey], bankroll, hhMaxFor(hhWinMenuKey)).drop)})</button>{/if}</div>{/if}
			<div class="btn-pair"><button class="take-btn" on:click={hhWinSameBet}>Same Bet</button><button class="take-btn" on:click={hhWinSameBetDown}>Same Bet and Down ({fmt(hhBets[hhWinMenuKey])} + {fmt(hhWins[hhWinMenuKey])})</button></div>
			</div>
		</div>
	</div>
{/if}
{#if anySevenWinMenu}
		<div class="popup-backdrop" on:click={closeAnySevenWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(anySevenBet)} Any Seven won {fmt(anySevenWin)}</h2><button class="popup-x" on:click={closeAnySevenWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if anyPressTargets(anySevenBet, anySevenWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each anyPressTargets(anySevenBet, anySevenWin, bankroll) as p}<button on:click={() => anySevenWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} Any Seven{:else}Press to {fmt(p.target)} Any Seven{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={anySevenWinCustom} on:input={onAnySevenWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeAnySevenWinCustom(); }} /></label><button class="custom-btn" on:click={placeAnySevenWinCustom}>Bet {Number(anySevenWinCustom) > 0 ? fmt(Number(anySevenWinCustom)) + ' ' : ''}Any Seven</button></div>
				{#if anySevenWinErr}<p class="max-err">{anySevenWinErr}</p>{/if}
				{#if anyParlayOption(anySevenBet, anySevenWin, bankroll) || anyHundredParlayOption(anySevenBet, anySevenWin, bankroll)}<div class="btn-pair">{#if anyParlayOption(anySevenBet, anySevenWin, bankroll)}<button class="take-btn" on:click={() => anySevenWinPressTo(anyParlayOption(anySevenBet, anySevenWin, bankroll).target, true)}>Parlay to {fmt(anyParlayOption(anySevenBet, anySevenWin, bankroll).target)} Any Seven{#if anyParlayOption(anySevenBet, anySevenWin, bankroll).drop > 0} (drop {fmt(anyParlayOption(anySevenBet, anySevenWin, bankroll).drop)}){/if}</button>{/if}{#if anyHundredParlayOption(anySevenBet, anySevenWin, bankroll)}<button class="take-btn" on:click={() => anySevenWinPressTo(anyHundredParlayOption(anySevenBet, anySevenWin, bankroll).target, true)}>Parlay to {fmt(anyHundredParlayOption(anySevenBet, anySevenWin, bankroll).target)} Any Seven (drop {fmt(anyHundredParlayOption(anySevenBet, anySevenWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={anySevenWinSameBet}>Same Bet</button><button class="take-btn" on:click={anySevenWinSameBetDown}>Same Bet and Down ({fmt(anySevenBet)} + {fmt(anySevenWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}

	{#if anyCrapsWinMenu}
		<div class="popup-backdrop" on:click={closeAnyCrapsWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(anyCrapsBet)} Any Craps won {fmt(anyCrapsWin)}</h2><button class="popup-x" on:click={closeAnyCrapsWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if anyPressTargets(anyCrapsBet, anyCrapsWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each anyPressTargets(anyCrapsBet, anyCrapsWin, bankroll) as p}<button on:click={() => anyCrapsWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} Any Craps{:else}Press to {fmt(p.target)} Any Craps{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={anyCrapsWinCustom} on:input={onAnyCrapsWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeAnyCrapsWinCustom(); }} /></label><button class="custom-btn" on:click={placeAnyCrapsWinCustom}>Bet {Number(anyCrapsWinCustom) > 0 ? fmt(Number(anyCrapsWinCustom)) + ' ' : ''}Any Craps</button></div>
				{#if anyCrapsWinErr}<p class="max-err">{anyCrapsWinErr}</p>{/if}
				{#if anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll) || anyHundredParlayOption(anyCrapsBet, anyCrapsWin, bankroll)}<div class="btn-pair">{#if anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll)}<button class="take-btn" on:click={() => anyCrapsWinPressTo(anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll).target, true)}>Parlay to {fmt(anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll).target)} Any Craps{#if anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll).drop > 0} (drop {fmt(anyParlayOption(anyCrapsBet, anyCrapsWin, bankroll).drop)}){/if}</button>{/if}{#if anyHundredParlayOption(anyCrapsBet, anyCrapsWin, bankroll)}<button class="take-btn" on:click={() => anyCrapsWinPressTo(anyHundredParlayOption(anyCrapsBet, anyCrapsWin, bankroll).target, true)}>Parlay to {fmt(anyHundredParlayOption(anyCrapsBet, anyCrapsWin, bankroll).target)} Any Craps (drop {fmt(anyHundredParlayOption(anyCrapsBet, anyCrapsWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={anyCrapsWinSameBet}>Same Bet</button><button class="take-btn" on:click={anyCrapsWinSameBetDown}>Same Bet and Down ({fmt(anyCrapsBet)} + {fmt(anyCrapsWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}

	{#if worldWinMenu}
		<div class="popup-backdrop" on:click={closeWorldWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(worldBet)} World won {fmt(worldWin)}</h2><button class="popup-x" on:click={closeWorldWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if worldPressTargets(worldBet, worldWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each worldPressTargets(worldBet, worldWin, bankroll) as p}<button on:click={() => worldWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} World{:else}Press to {fmt(p.target)} World{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="5" max="5000" step="5" bind:value={worldWinCustom} on:input={onWorldWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeWorldWinCustom(); }} /></label><button class="custom-btn" on:click={placeWorldWinCustom}>Bet {Number(worldWinCustom) > 0 ? fmt(Number(worldWinCustom)) + ' ' : ''}World</button></div>
				{#if worldWinErr}<p class="max-err">{worldWinErr}</p>{/if}
				{#if worldParlayOption(worldBet, worldWin, bankroll) || worldHundredParlayOption(worldBet, worldWin, bankroll)}<div class="btn-pair">{#if worldParlayOption(worldBet, worldWin, bankroll)}<button class="take-btn" on:click={() => worldWinPressTo(worldParlayOption(worldBet, worldWin, bankroll).target, true)}>Parlay to {fmt(worldParlayOption(worldBet, worldWin, bankroll).target)} World{#if worldParlayOption(worldBet, worldWin, bankroll).drop > 0} (drop {fmt(worldParlayOption(worldBet, worldWin, bankroll).drop)}){/if}</button>{/if}{#if worldHundredParlayOption(worldBet, worldWin, bankroll)}<button class="take-btn" on:click={() => worldWinPressTo(worldHundredParlayOption(worldBet, worldWin, bankroll).target, true)}>Parlay to {fmt(worldHundredParlayOption(worldBet, worldWin, bankroll).target)} World (drop {fmt(worldHundredParlayOption(worldBet, worldWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={worldWinSameBet}>Same Bet</button><button class="take-btn" on:click={worldWinSameBetDown}>Same Bet and Down ({fmt(worldBet)} + {fmt(worldWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}

	{#if ceSplitWinMenu}
		<div class="popup-backdrop" on:click={closeCeSplitWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(ceSplitBet)} C & E won {fmt(ceSplitWin)}</h2><button class="popup-x" on:click={closeCeSplitWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if ceSplitPressTargets(ceSplitBet, ceSplitWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each ceSplitPressTargets(ceSplitBet, ceSplitWin, bankroll) as p}<button on:click={() => ceSplitWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} C & E{:else}Press to {fmt(p.target)} C & E{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="2" max="5000" step="0.5" bind:value={ceSplitWinCustom} on:input={onCeSplitWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeCeSplitWinCustom(); }} /></label><button class="custom-btn" on:click={placeCeSplitWinCustom}>Bet {Number(ceSplitWinCustom) > 0 ? fmt(Number(ceSplitWinCustom)) + ' ' : ''}C & E</button></div>
				{#if ceSplitWinErr}<p class="max-err">{ceSplitWinErr}</p>{/if}
				{#if ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll) || ceSplitHundredParlayOption(ceSplitBet, ceSplitWin, bankroll)}<div class="btn-pair">{#if ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll)}<button class="take-btn" on:click={() => ceSplitWinPressTo(ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll).target, true)}>Parlay to {fmt(ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll).target)} C & E{#if ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll).drop > 0} (drop {fmt(ceSplitParlayOption(ceSplitBet, ceSplitWin, bankroll).drop)}){/if}</button>{/if}{#if ceSplitHundredParlayOption(ceSplitBet, ceSplitWin, bankroll)}<button class="take-btn" on:click={() => ceSplitWinPressTo(ceSplitHundredParlayOption(ceSplitBet, ceSplitWin, bankroll).target, true)}>Parlay to {fmt(ceSplitHundredParlayOption(ceSplitBet, ceSplitWin, bankroll).target)} C & E (drop {fmt(ceSplitHundredParlayOption(ceSplitBet, ceSplitWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={ceSplitWinSameBet}>Same Bet</button><button class="take-btn" on:click={ceSplitWinSameBetDown}>Same Bet and Down ({fmt(ceSplitBet)} + {fmt(ceSplitWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}
	{#if ceCWinMenu}
		<div class="popup-backdrop" on:click={closeCeCWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(ceCBet)} C won {fmt(ceCWin)}</h2><button class="popup-x" on:click={closeCeCWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if anyPressTargets(ceCBet, ceCWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each anyPressTargets(ceCBet, ceCWin, bankroll) as p}<button on:click={() => ceCWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} C{:else}Press to {fmt(p.target)} C{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={ceCWinCustom} on:input={onCeCWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeCeCWinCustom(); }} /></label><button class="custom-btn" on:click={placeCeCWinCustom}>Bet {Number(ceCWinCustom) > 0 ? fmt(Number(ceCWinCustom)) + ' ' : ''}C</button></div>
				{#if ceCWinErr}<p class="max-err">{ceCWinErr}</p>{/if}
				{#if anyParlayOption(ceCBet, ceCWin, bankroll) || anyHundredParlayOption(ceCBet, ceCWin, bankroll)}<div class="btn-pair">{#if anyParlayOption(ceCBet, ceCWin, bankroll)}<button class="take-btn" on:click={() => ceCWinPressTo(anyParlayOption(ceCBet, ceCWin, bankroll).target, true)}>Parlay to {fmt(anyParlayOption(ceCBet, ceCWin, bankroll).target)} C{#if anyParlayOption(ceCBet, ceCWin, bankroll).drop > 0} (drop {fmt(anyParlayOption(ceCBet, ceCWin, bankroll).drop)}){/if}</button>{/if}{#if anyHundredParlayOption(ceCBet, ceCWin, bankroll)}<button class="take-btn" on:click={() => ceCWinPressTo(anyHundredParlayOption(ceCBet, ceCWin, bankroll).target, true)}>Parlay to {fmt(anyHundredParlayOption(ceCBet, ceCWin, bankroll).target)} C (drop {fmt(anyHundredParlayOption(ceCBet, ceCWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={ceCWinSameBet}>Same Bet</button><button class="take-btn" on:click={ceCWinSameBetDown}>Same Bet and Down ({fmt(ceCBet)} + {fmt(ceCWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}
	{#if ceEWinMenu}
		<div class="popup-backdrop" on:click={closeCeEWinMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Your {fmt(ceEBet)} E won {fmt(ceEWin)}</h2><button class="popup-x" on:click={closeCeEWinMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>What would you like to do?</p>
				{#if anyPressTargets(ceEBet, ceEWin, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each anyPressTargets(ceEBet, ceEWin, bankroll) as p}<button on:click={() => ceEWinPressTo(p.target, false)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)} E{:else}Press to {fmt(p.target)} E{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={ceEWinCustom} on:input={onCeEWinInput} on:keydown={(e) => { if (e.key === 'Enter') placeCeEWinCustom(); }} /></label><button class="custom-btn" on:click={placeCeEWinCustom}>Bet {Number(ceEWinCustom) > 0 ? fmt(Number(ceEWinCustom)) + ' ' : ''}E</button></div>
				{#if ceEWinErr}<p class="max-err">{ceEWinErr}</p>{/if}
				{#if anyParlayOption(ceEBet, ceEWin, bankroll) || anyHundredParlayOption(ceEBet, ceEWin, bankroll)}<div class="btn-pair">{#if anyParlayOption(ceEBet, ceEWin, bankroll)}<button class="take-btn" on:click={() => ceEWinPressTo(anyParlayOption(ceEBet, ceEWin, bankroll).target, true)}>Parlay to {fmt(anyParlayOption(ceEBet, ceEWin, bankroll).target)} E{#if anyParlayOption(ceEBet, ceEWin, bankroll).drop > 0} (drop {fmt(anyParlayOption(ceEBet, ceEWin, bankroll).drop)}){/if}</button>{/if}{#if anyHundredParlayOption(ceEBet, ceEWin, bankroll)}<button class="take-btn" on:click={() => ceEWinPressTo(anyHundredParlayOption(ceEBet, ceEWin, bankroll).target, true)}>Parlay to {fmt(anyHundredParlayOption(ceEBet, ceEWin, bankroll).target)} E (drop {fmt(anyHundredParlayOption(ceEBet, ceEWin, bankroll).drop)})</button>{/if}</div>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={ceEWinSameBet}>Same Bet</button><button class="take-btn" on:click={ceEWinSameBetDown}>Same Bet and Down ({fmt(ceEBet)} + {fmt(ceEWin)})</button></div>
				</div>
			</div>
		</div>
	{/if}
	{#if propComboMenu && propCombo}
		<div class="popup-backdrop" on:click={closePropComboMenu}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>{#if propCombo.net >= 0}Your Proposition Bets Won {fmt(propCombo.net)}{:else}You're -{fmt(-propCombo.net)} on your Proposition Bets{/if}</h2><button class="popup-x" on:click={closePropComboMenu} aria-label="Close">×</button></div>
				<div class="popup-body">
				{#each propCombo.entries as e}<p>Your {fmt(e.group ? e.each : e.stake)}{e.group ? ' each' : ''} {e.name} {e.pushed ? 'pushed' : e.win > 0 ? 'won ' + fmt(e.group ? e.net : e.win) : 'lost'}</p>{/each}
				{#if propCombo.net >= 0}<p>You won {fmt(propCombo.net)}.</p>
				{#each propCombo.entries as e}{#if !e.pushed && e.win > 0}<p><strong>{fmt(e.group ? e.each : e.stake)}{e.group ? ' each' : ''} {e.name}</strong></p>
				<div class="btn-pair"><button class="take-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'same' ? 'active-opt' : ''}" on:click={() => propComboChoose(e.key, 'same', 0)}>Same Bet</button><button class="take-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'down' ? 'active-opt' : ''}" on:click={() => propComboChoose(e.key, 'down', 0)}>Same Bet and Down ({fmt(e.stake)} + {fmt(e.group ? e.net : e.win)})</button></div>
				{#if propPressOptions(e).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each propPressOptions(e) as p}<button class={(propComboChoices[e.key] || { type: 'same' }).type === 'target' && (propComboChoices[e.key] || { target: 0 }).target === p.target ? 'active-opt' : ''} on:click={() => propComboChoose(e.key, 'target', p.target)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)}{e.group ? 'e' : ''} {e.name}{:else}Press to {fmt(p.target)}{e.group ? 'e' : ''} {e.name}{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet another amt: <input type="number" min={e.key === 'horn' ? 4 : e.key.startsWith('hh') ? 5 : e.key === 'world' ? 5 : e.key === 'ceSplit' ? 2 : 1} max={e.key.startsWith('hh') ? (hhDefs.find((d) => d.propKey === e.key) || {}).max || 5000 : 5000} step={e.key === 'horn' ? 4 : e.key.startsWith('hh') ? 5 : e.key === 'world' ? 5 : e.key === 'ceSplit' ? 0.5 : 1} bind:value={propComboCustoms[e.key]} on:input={(ev) => onPropComboCustomInput(e.key, ev)} on:keydown={(ev) => { if (ev.key === 'Enter') propComboChooseCustom(e.key); }} /></label><button class="custom-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'target' && Number(propComboCustoms[e.key]) > 0 && (propComboChoices[e.key] || { target: 0 }).target === Number(propComboCustoms[e.key]) ? 'active-opt' : ''}" on:click={() => propComboChooseCustom(e.key)}>Bet {Number(propComboCustoms[e.key]) > 0 ? fmt(Number(propComboCustoms[e.key])) + (e.group ? 'e ' : ' ') : ''}{e.name}</button></div>
				{#if propComboErrs[e.key]}<p class="max-err">{propComboErrs[e.key]}</p>{/if}
				{:else if !e.pushed}<p><strong>{fmt(e.group ? e.each : e.stake)}{e.group ? ' each' : ''} {e.name}</strong></p>
				<div class="btn-pair"><button class="take-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'same' ? 'active-opt' : ''}" on:click={() => propComboChoose(e.key, 'same', 0)}>Same Bet</button><button class="take-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'down' ? 'active-opt' : ''}" on:click={() => propComboChoose(e.key, 'down', 0)}>Take Down</button></div>
				{#if propPressOptionsLoser(e, propCombo.grossWins, bankroll).length > 0}<p>Press It:</p>
				<div class="preset-grid">{#each propPressOptionsLoser(e, propCombo.grossWins, bankroll) as p}<button class={(propComboChoices[e.key] || { type: 'same' }).type === 'target' && (propComboChoices[e.key] || { target: 0 }).target === p.target ? 'active-opt' : ''} on:click={() => propComboChoose(e.key, 'target', p.target)}>{#if p.inc > 0}Press {fmt(p.inc)} to {fmt(p.target)}{e.group ? 'e' : ''} {e.name}{:else}Press to {fmt(p.target)}{e.group ? 'e' : ''} {e.name}{/if}</button>{/each}</div>{/if}
				<div class="custom-row"><label>Bet another amt: <input type="number" min={e.key === 'horn' ? 4 : e.key.startsWith('hh') ? 5 : e.key === 'world' ? 5 : e.key === 'ceSplit' ? 2 : 1} max={e.key.startsWith('hh') ? (hhDefs.find((d) => d.propKey === e.key) || {}).max || 5000 : 5000} step={e.key === 'horn' ? 4 : e.key.startsWith('hh') ? 5 : e.key === 'world' ? 5 : e.key === 'ceSplit' ? 0.5 : 1} bind:value={propComboCustoms[e.key]} on:input={(ev) => onPropComboCustomInput(e.key, ev)} on:keydown={(ev) => { if (ev.key === 'Enter') propComboChooseCustom(e.key); }} /></label><button class="custom-btn {(propComboChoices[e.key] || { type: 'same' }).type === 'target' && Number(propComboCustoms[e.key]) > 0 && (propComboChoices[e.key] || { target: 0 }).target === Number(propComboCustoms[e.key]) ? 'active-opt' : ''}" on:click={() => propComboChooseCustom(e.key)}>Bet {Number(propComboCustoms[e.key]) > 0 ? fmt(Number(propComboCustoms[e.key])) + (e.group ? 'e ' : ' ') : ''}{e.name}</button></div>
				{#if propComboErrs[e.key]}<p class="max-err">{propComboErrs[e.key]}</p>{/if}
				{/if}{/each}
				<button class="take-btn" on:click={propComboSubmit}>Submit ({fmtSigned(propComboPlan(propCombo, propComboChoices).banked)})</button>
				{#if propComboSubmitErr}<p class="max-err">{propComboSubmitErr}</p>{/if}
				<div class="btn-pair"><button class="take-btn" on:click={propComboSameBetAll}>Same Bet ({fmt(propCombo.net)})</button><button class="take-btn" on:click={propComboSameBetDownAll}>Same Bet and Down ({fmt(propCombo.totalStakes)} + {fmt(propCombo.net)})</button></div>
				{:else}<p>You need to drop {fmt(propCombo.losingStakes - propCombo.grossWins)} to keep your bets up to win again.</p>
				<button class="take-btn" on:click={propComboDropToKeepUp} disabled={bankroll < propCombo.losingStakes - propCombo.grossWins}>Drop {fmt(propCombo.losingStakes - propCombo.grossWins)} to keep your bets up</button>
				<button class="take-btn" on:click={propComboSameBetWinners}>Same Bet on Winning Bets ({fmt(propCombo.grossWins)}); Take down {propComboLoserList()}.</button>
				<button class="take-btn" on:click={propComboSameBetDownAll}>Same Bet and Down ({fmt(propCombo.winningStakes)} + {fmt(propCombo.grossWins)})</button>
				{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if anySevenMenu}
		<div class="popup-backdrop" on:click={() => (anySevenMenu = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Any Seven</h2><button class="popup-x" on:click={() => (anySevenMenu = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Any Seven is a one-roll bet. It wins if the next roll is a 7 and pays 4 to 1. Any other number loses.</p>
				{#if anySevenBet > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(anySevenBet)}</span></span></p>{/if}
				<p>Amount to bet on the Any Seven:</p>
				<div class="preset-grid">{#each [1, 5, 10, 25] as amt}<button on:click={() => placeAnySeven(amt)} disabled={bankroll + anySevenBet + anySevenWin < amt}>${amt}</button>{/each}</div>
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={anySevenCustom} on:input={onAnySevenInput} on:keydown={(e) => { if (e.key === 'Enter') placeAnySeven(Number(anySevenCustom)); }} /></label><button class="custom-btn" on:click={() => placeAnySeven(Number(anySevenCustom))}>Bet {Number(anySevenCustom) > 0 ? fmt(Number(anySevenCustom)) + ' ' : ''}Any Seven</button></div>
				{#if anySevenErr}<p class="max-err">{anySevenErr}</p>{/if}
				{#if anySevenBet > 0}<button class="take-btn" on:click={takeDownAnySeven}>{fmt(anySevenBet)} Any Seven Down</button>{/if}
				{#if anySevenBet > 0 || anySevenWin > 0 || anyCrapsBet > 0 || anyCrapsWin > 0 || hornBet > 0 || hornWin > 0}<button class="take-btn" on:click={takeDownAllProps}>All Props Down</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if anyCrapsMenu}
		<div class="popup-backdrop" on:click={() => (anyCrapsMenu = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Any Craps</h2><button class="popup-x" on:click={() => (anyCrapsMenu = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Any Craps is a one-roll bet. It wins if the next roll is a 2, 3, or 12 and pays 7 to 1. Any other number loses.</p>
				{#if anyCrapsBet > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(anyCrapsBet)}</span></span></p>{/if}
				<p>Amount to bet on the Any Craps:</p>
				<div class="preset-grid">{#each [1, 5, 10, 25] as amt}<button on:click={() => placeAnyCraps(amt)} disabled={bankroll + anyCrapsBet + anyCrapsWin < amt}>${amt}</button>{/each}</div>
				<div class="custom-row"><label>Bet something else: <input type="number" min="1" max="5000" step="1" bind:value={anyCrapsCustom} on:input={onAnyCrapsInput} on:keydown={(e) => { if (e.key === 'Enter') placeAnyCraps(Number(anyCrapsCustom)); }} /></label><button class="custom-btn" on:click={() => placeAnyCraps(Number(anyCrapsCustom))}>Bet {Number(anyCrapsCustom) > 0 ? fmt(Number(anyCrapsCustom)) + ' ' : ''}Any Craps</button></div>
				{#if anyCrapsErr}<p class="max-err">{anyCrapsErr}</p>{/if}
				{#if anyCrapsBet > 0}<button class="take-btn" on:click={takeDownAnyCraps}>{fmt(anyCrapsBet)} Any Craps Down</button>{/if}
				{#if anyCrapsBet > 0 || anyCrapsWin > 0 || anySevenBet > 0 || anySevenWin > 0 || hornBet > 0 || hornWin > 0}<button class="take-btn" on:click={takeDownAllProps}>All Props Down</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if worldMenu}
		<div class="popup-backdrop" on:click={() => (worldMenu = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>World</h2><button class="popup-x" on:click={() => (worldMenu = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>The World is a one-roll bet on the 2, 3, 7, 11, and 12. It wins on the 2, 3, 11, or 12, pushes on the 7, and loses on any other number.</p>
				<p>For every $5 bet on the World it will win $26 if the 2 or 12 roll, $11 if the 3 or 11 roll, and it's a push if the 7 rolls.</p>
				{#if worldBet > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bet</span><span class="lb-amt">{fmt(worldBet)}</span></span></p>{/if}
				<p>Amount to bet on the World:</p>
				<div class="preset-grid">{#each [5, 10, 15, 20] as amt}<button on:click={() => placeWorld(amt)} disabled={bankroll + worldBet + worldWin < amt}>${amt}</button>{/each}</div>
				<div class="custom-row"><label>Amt to bet on World: <input type="number" min="5" max="5000" step="5" bind:value={worldCustom} on:input={onWorldInput} on:keydown={(e) => { if (e.key === 'Enter') placeWorldCustom(); }} /></label><button class="custom-btn" on:click={placeWorldCustom}>Bet {Number(worldCustom) > 0 ? fmt(Number(worldCustom)) + ' ' : ''}on the World</button></div>
				{#if worldErr}<p class="max-err">{worldErr}</p>{/if}
				{#if worldBet > 0}<button class="take-btn" on:click={takeDownWorld}>Take my {fmt(worldBet)} World Down</button>{/if}
				{#if worldBet > 0 || worldWin > 0 || hornBet > 0 || hornWin > 0 || anySevenBet > 0 || anySevenWin > 0 || anyCrapsBet > 0 || anyCrapsWin > 0}<button class="take-btn" on:click={takeDownAllProps}>Take my All my Props Down</button>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if ceMenu}
		<div class="popup-backdrop" on:click={() => (ceMenu = false)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>C & E</h2><button class="popup-x" on:click={() => (ceMenu = false)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>C & E is the combination of two bets: the C, any craps (2, 3, or 12), and the E, the eleven. You can bet them individually or as a pair. The E pays 15 to 1 and the C pays 7 to 1. Bet as a split, it pays 3 to 1 when a craps rolls and 7 to 1 when the eleven rolls.</p>
				{#if ceSplitBet > 0 || ceCBet > 0 || ceEBet > 0}<p class="ledger-bar"><span class="lb-left"><span class="lb-label">Current Bets</span><span class="lb-amt">{ceCurrentText()}</span></span></p>{/if}
				<p class="su-section">Bet C & E Split</p>
				<div class="preset-grid">{#each [2, 5, 10, 25] as amt}<button on:click={() => placeCeSplit(amt)} disabled={bankroll + ceSplitBet + ceSplitWin < amt}>${amt}</button>{/each}</div>
				<div class="custom-row"><label>Amt to bet on the C & E split: <input type="number" min="2" max="5000" step={Number(ceSplitCustom) >= 20 ? 5 : 1} bind:value={ceSplitCustom} on:input={onCeSplitInput} on:keydown={(e) => { if (e.key === 'Enter') placeCeSplitCustom(); }} /></label><button class="custom-btn" on:click={placeCeSplitCustom}>Bet {Number(ceSplitCustom) > 0 ? fmt(Number(ceSplitCustom)) + ' ' : ''}on the C & E Split</button></div>
				{#if ceSplitErr}<p class="max-err">{ceSplitErr}</p>{/if}
				<p class="su-section">Each C and E</p>
				<p>Choose how much to bet on each:</p>
				<div class="su-row"><span class="su-unit"><button type="button" class="su-pick {Number(ceEInput) >= 1 ? 'active-opt' : ''}" on:click={() => focusCeInput('e')}><span class="su-num">E</span><span class="su-name">Eleven</span></button><input id="ce-in-e" class="su-input" type="number" min="1" max="5000" step={Number(ceEInput) >= 20 ? 5 : 1} bind:value={ceEInput} on:input={onCeEInput} on:keydown={(e) => { if (e.key === 'Enter') placeCePair(); }} /></span><span class="su-unit"><button type="button" class="su-pick {Number(ceCInput) >= 1 ? 'active-opt' : ''}" on:click={() => focusCeInput('c')}><span class="su-num">C</span><span class="su-name">Any Craps</span></button><input id="ce-in-c" class="su-input" type="number" min="1" max="5000" step={Number(ceCInput) >= 20 ? 5 : 1} bind:value={ceCInput} on:input={onCeCInput} on:keydown={(e) => { if (e.key === 'Enter') placeCePair(); }} /></span></div>
				{#if cePairErr}<p class="max-err">{cePairErr}</p>{/if}
				<button class="custom-btn su-bet-btn" on:click={placeCePair} disabled={cePairAmtE(ceEInput) < 1 && cePairAmtC(ceCInput) < 1}>{cePairButtonLabel(ceEInput, ceCInput)}</button>
				{#if ceSplitBet > 0}<button class="take-btn" on:click={takeDownCeSplit}>{fmt(ceSplitBet)} C & E Split Down</button>{/if}
				{#if ceCBet > 0}<button class="take-btn" on:click={takeDownCeC}>{fmt(ceCBet)} C Down</button>{/if}
				{#if ceEBet > 0}<button class="take-btn" on:click={takeDownCeE}>{fmt(ceEBet)} E Down</button>{/if}
				{#if ceSplitBet > 0 || ceSplitWin > 0 || ceCBet > 0 || ceCWin > 0 || ceEBet > 0 || ceEWin > 0 || hornBet > 0 || hornWin > 0 || anySevenBet > 0 || anySevenWin > 0 || anyCrapsBet > 0 || anyCrapsWin > 0 || worldBet > 0 || worldWin > 0}<button class="take-btn" on:click={takeDownAllProps}>All Props Down</button>{/if}
				</div>
			</div>
		</div>
	{/if}
	{#if hopChooser && !hopSub}
		<div class="popup-backdrop" on:click={closeHopMenus}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Straight Up, Splits, and Multi-Bets</h2><button class="popup-x" on:click={closeHopMenus} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>A Straight Up bet is a one-roll bet on one exact number. It wins only if that number rolls on the next roll, and loses on any other number. The Aces and Twelve pay 30 to 1, and the Ace Deuce and Yo pay 15 to 1.</p>
				<p>Splits/Each are a combination of two Straight Up bets. They are one-roll bets.</p>
				<p>Multi-Bets are a combination of three Straight Up bets. They are also one-roll bets.</p>
				{#if suBets.aces > 0 || suBets.aceDeuce > 0 || suBets.yo > 0 || suBets.twelve > 0}
				<p>Current Bets: {hopCurrentText(suBets)}</p>
				<div class="su-downs">{#each suDefs as d}{#if suBets[d.key] > 0}<button class="take-btn" on:click={() => takeDownStraightUp(d.key)}>Take my {fmt(suBets[d.key])} {d.name} Down</button>{/if}{/each}{#if hornBet > 0 || hornWin > 0 || anySevenBet > 0 || anySevenWin > 0 || anyCrapsBet > 0 || anyCrapsWin > 0 || worldBet > 0 || worldWin > 0 || suBets.aces > 0 || suBets.aceDeuce > 0 || suBets.yo > 0 || suBets.twelve > 0 || suWins.aces > 0 || suWins.aceDeuce > 0 || suWins.yo > 0 || suWins.twelve > 0}<button class="take-btn" on:click={takeDownAllProps}>Take my All my Props Down</button>{/if}</div>
				{/if}
				<p class="su-section">Bet Straight Up</p>
				<p>Choose how much to bet on each:</p>
				<div class="su-row">{#each suDefs as d}<span class="su-unit"><button type="button" class="su-pick {Number(hopInputs[d.key]) >= 1 ? 'active-opt' : ''}" on:click={() => focusHopInput(d.key)}><span class="su-num">{d.total}</span><span class="su-name">{d.name}</span></button><input id="hop-in-{d.key}" class="su-input" type="number" min="1" max="5000" step="1" bind:value={hopInputs[d.key]} on:input={(e) => onHopInput(d.key, e)} on:keydown={(e) => { if (e.key === 'Enter') placeHopMain(); }} /></span>{/each}</div>
				{#if hopClampErr}<p class="max-err">{hopClampErr}</p>{/if}
				<button class="custom-btn su-bet-btn" on:click={placeHopMain} disabled={hopEntriesFrom(hopInputs).length === 0}>{hopBetButtonLabel(hopInputs)}</button>
				{#if hopErr}<p class="max-err">{hopErr}</p>{/if}
				<p class="su-section">Other Bets</p>
				<div class="btn-pair"><button class="custom-btn" on:click={() => openHopSub('splits')}>Bet Splits/Each</button><button class="custom-btn" on:click={() => openHopSub('multi')}>Bet Multi-Bets</button></div>
				</div>
			</div>
		</div>
	{/if}

	{#if hopSub === 'splits'}
		<div class="popup-backdrop" on:click={backToHopMain}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><button class="back-btn" on:click={backToHopMain} aria-label="Back">←</button><h2>Splits/Each</h2><button class="popup-x" on:click={backToHopMain} aria-label="Close, back to Straight Up menu">×</button></div>
				<div class="popup-body">
				<p>Splits/Each are a combination of two Straight Up bets. They are one-roll bets.</p>
				<p class="su-section">Choose an amount to bet on EACH</p>
				{#each splitRowDefs as row}<div class="su-line"><span class="su-line-name">{row.title}</span><span class="su-tiles">{#each row.tiles as t}<span class="su-tile">{t}</span>{/each}</span><input id="split-in-{row.id}" class="su-input su-line-input" type="number" min="1" max="5000" step="1" bind:value={splitInputs[row.id]} on:input={(e) => onSplitRowInput(row.id, e)} on:keydown={(e) => { if (e.key === 'Enter') placeSplitRow(row); }} /><button class="custom-btn su-line-btn" on:click={() => placeSplitRow(row)} disabled={!(hopRowAmt(splitInputs[row.id]) >= 1)}>{splitRowLabel(row, splitInputs[row.id])}</button></div>{#if splitClampErrs[row.id]}<p class="max-err">{splitClampErrs[row.id]}</p>{/if}{/each}
				{#if splitErr}<p class="max-err">{splitErr}</p>{/if}
				<button class="custom-btn su-bet-btn" on:click={placeSplitSubmit} disabled={filledSplitRows(splitInputs).length === 0}>Submit</button>
				</div>
			</div>
		</div>
	{/if}

	{#if hopSub === 'multi'}
		<div class="popup-backdrop" on:click={backToHopMain}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><button class="back-btn" on:click={backToHopMain} aria-label="Back">←</button><h2>Multi-Bets</h2><button class="popup-x" on:click={backToHopMain} aria-label="Close, back to Straight Up menu">×</button></div>
				<div class="popup-body">
				<p>Multi-Bets are a combination of three Straight Up bets. They are also one-roll bets.</p>
				<p class="su-section">Choose an amount to bet on EACH</p>
				{#each multiRowDefs as row}<div class="su-line"><span class="su-line-name">{row.title}</span><span class="su-tiles">{#each row.tiles as t}<span class="su-tile">{t}</span>{/each}</span><input id="multi-in-{row.id}" class="su-input su-line-input" type="number" min="1" max="5000" step="1" bind:value={multiInputs[row.id]} on:input={(e) => onMultiRowInput(row.id, e)} on:keydown={(e) => { if (e.key === 'Enter') placeMultiRow(row); }} /><button class="custom-btn su-line-btn" on:click={() => placeMultiRow(row)} disabled={!(hopRowAmt(multiInputs[row.id]) >= 1)}>{multiRowLabel(row, multiInputs[row.id])}</button></div>{#if multiClampErrs[row.id]}<p class="max-err">{multiClampErrs[row.id]}</p>{/if}{/each}
				{#if multiErr}<p class="max-err">{multiErr}</p>{/if}
				<button class="custom-btn su-bet-btn" on:click={placeMultiSubmit} disabled={filledMultiRows(multiInputs).length === 0}>Submit</button>
				</div>
			</div>
		</div>
	{/if}

	{#if comeMoveDecision}
		<div class="popup-backdrop" on:click={chooseComeMoveKeep}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>You're On the {comeMoveDecision.num} for {fmt(comeMoveDecision.amount)}</h2><button class="popup-x" on:click={chooseComeMoveKeep} aria-label="Close, keep both bets">×</button></div>
				<div class="popup-body">
				<p>You have a Place bet and a Come bet. What would you like to do?</p>
				<p style="display: flex; gap: 28px; flex-wrap: wrap;"><span>Place Bet: {fmt(bets['place' + comeMoveDecision.num])}</span><span>Come Bet: {fmt(comeMoveDecision.amount)}</span></p>
				<button class="custom-btn" on:click={openComeDownMenu}>1. Come Down with Odds</button>
				<button class="custom-btn" on:click={chooseComeMoveKeep}>2. Keep Come and Place Bets</button>
				</div>
			</div>
		</div>
	{/if}

	{#if comeDownMenu}
		<div class="popup-backdrop" on:click={() => { comeDownMenu = null; }}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Coming Down with Odds</h2><button class="popup-x" on:click={() => { comeDownMenu = null; }} aria-label="Back to decision">×</button></div>
				<div class="popup-body">
				<p>Your {fmt(comeDownMenu.amount)} Come bet is going on the {comeDownMenu.num}. Take the Place bet down and use it for Come Odds. Max Odds {fmt(comeMoveMaxOdds())}.</p>
				<p style="display: flex; gap: 28px; flex-wrap: wrap;"><span>Place Bet: {fmt(comeDownMenu.placeBet)}</span><span>Won: {fmt(comeDownMenu.placeWin)}</span><span>Total: {fmt(comeDownMenu.placeTotal)}</span></p>
				<div class="preset-grid">{#each comeDownOptions().filter((o) => !o.isMax) as opt}<button on:click={() => chooseComeDownOdds(opt.amount)}>{opt.label}</button>{/each}</div>
				{#each comeDownOptions().filter((o) => o.isMax) as opt}<button class="max-btn" on:click={() => chooseComeDownOdds(opt.amount)}>{opt.label}</button>{/each}
				<div class="custom-row"><label>Pick your own Odds: <input type="number" min={oddsMinFor(comeDownMenu.num)} step={comeOddsStep(comeDownMenu.num)} bind:value={comeDownCustom} on:input={onComeDownInput} on:keydown={(e) => { if (e.key === 'Enter') chooseComeDownOdds(Number(comeDownCustom)); }} /></label><button class="custom-btn" on:click={() => chooseComeDownOdds(Number(comeDownCustom))}>Bet {Number(comeDownCustom) > 0 ? fmt(Number(comeDownCustom)) + ' ' : ''}Odds</button></div>
				{#if comeDownErr}<p class="max-err">{comeDownErr}</p>{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if dcMoveDecision}
		<div class="popup-backdrop" on:click={chooseDcMove}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Don't Come bet and the {dcMoveDecision.num}</h2><button class="popup-x" on:click={chooseDcMove} aria-label="Close, move behind">×</button></div>
				<div class="popup-body">
				<p>Your {fmt(dcMoveDecision.amount)} Don't Come bet would move behind the {dcMoveDecision.num}. Move it behind, or No Action?</p>
				<div class="btn-pair"><button class="custom-btn" on:click={chooseDcMove}>Move behind the {dcMoveDecision.num}</button><button class="custom-btn" on:click={chooseDcNoAction}>No Action, stay in DC</button></div>
				<label class="check-row"><input type="checkbox" checked={dcNoAction68 === 'always'} on:change={chooseDcAlways} /> Always take action on 6/8</label>
				<label class="check-row"><input type="checkbox" checked={dcNoAction68 === 'never'} on:change={chooseDcNever} /> Never take action on 6/8</label>
				</div>
			</div>
		</div>
	{/if}

	{#if pointChooser}
		<div class="popup-backdrop" on:click={() => (pointChooser = null)}>
			<div class="popup" on:click|stopPropagation>
				<div class="popup-header"><h2>Bet on the {pointChooser}</h2><button class="popup-x" on:click={() => (pointChooser = null)} aria-label="Close">×</button></div>
				<div class="popup-body">
				<p>Current Bets:</p>
				{#if bets['place' + pointChooser] > 0}<p>{fmt(bets['place' + pointChooser])} {buys['place' + pointChooser] ? 'Buy' : 'Place'} Bet wins {fmt(placeWorkingWith(placeLammer, 'place' + pointChooser) ? placeWinAmount('place' + pointChooser, bets['place' + pointChooser], buys['place' + pointChooser], pointChooser) : 0)}.</p>{/if}
				{#if comePts[pointChooser] > 0}<p>{fmt(comePts[pointChooser])} Come Bet{#if comeOdds[pointChooser] > 0} w/ {fmt(comeOdds[pointChooser])} Odds{/if} wins {fmt(comeWinFigureWith(pointChooser, comePts, comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point))}.</p>{/if}
				<div class="btn-pair"><button class="custom-btn" on:click={() => { let n = pointChooser; pointChooser = null; openPopup('place' + n); }}>{bets['place' + pointChooser] > 0 ? 'View Place Bet' : 'Make Place Bet'}</button><button class="custom-btn" on:click={() => { let n = pointChooser; pointChooser = null; openComePtMenu(n); }}>View Come Bet Odds</button></div>
				{#if anyPlaceBetUp(bets) || anyOddsUp(comeOdds)}<div class="btn-pair">{#if anyPlaceOff(bets, placeLammer) || anyOddsOff(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={() => { turnOnAllBets(); pointChooser = null; }}>Turn all my bets ON</button>{/if}{#if anyPlaceWorking(bets, placeLammer) || anyOddsWorking(comeOdds, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point)}<button class="custom-btn" on:click={() => { turnOffAllBets(); pointChooser = null; }}>Turn all my bets OFF</button>{/if}</div>{/if}
				{#if anyPlaceBetUp(bets) || anyOddsUp(comeOdds)}<button class="take-btn" on:click={() => { allBetsDown(); pointChooser = null; }}>Take all my bets down</button>{/if}
				</div>
			</div>
		</div>
	{/if}
	{#if dcPileMenu}<div class="popup-backdrop" role="presentation" on:click={() => (dcPileMenu = false)}><div class="popup" role="dialog" aria-modal="true" aria-label="Don't Come winnings" on:click|stopPropagation><div class="popup-header"><h3>Don't Come winnings</h3><button type="button" class="popup-x" aria-label="Close" on:click={() => (dcPileMenu = false)}>X</button></div><div class="popup-body"><p>Your Don't Come bets behind the numbers won on the {dcPileFromComeout ? 'comeout 7' : 'seven out'}:</p>{#each ceremonyLines as line}{#if line.flat > 0}<p>Don't Come behind the {line.num}: {fmt(line.flat)} bet won {fmt(line.flatWin)}.</p>{/if}{#if line.lay > 0}<p>Lay Odds behind the {line.num}: {fmt(line.lay)} won {fmt(line.layWin)}.</p>{/if}{/each}<p>Total: {fmt(dcPile)}.</p><button type="button" class="take-btn" on:click={pickupDcPile}>Pick up {fmt(dcPile)}</button></div></div></div>{/if}
	</section>

	<section class="dice">
		{#if diceA >= 0}<img src={diceImages[diceA]} alt="Die one" />{/if}
		{#if diceB >= 0}<img src={diceImages[diceB]} alt="Die two" />{/if}
		<button class="roll" on:click={rollDice} disabled={rolling || anyMenuOpen}>{rolling ? 'Rolling...' : 'Roll Dice'}</button><button class="quick-bet" on:click={() => placeBet('passLine', 10)} disabled={rolling || anyMenuOpen}>Bet $10 Pass</button><input class="test-rolls" type="text" bind:value={testRolls} placeholder="Test, e.g. 10PL, 4, 10CB, 6" on:keydown={(e) => { if (e.key === 'Enter') rollDice(); }} /><button class="undo-roll" on:click={undoLastRoll} disabled={!rollSnapshot || rolling || inTestRoll || anyMenuOpen || ceremonyActive}>Undo last roll</button>
	</section>

	<section class="bet-states" aria-label="Bet states">
		<span class="bs-caption">Bet states</span>
		<div class="bs-row">{#each [4, 5, 6, 8, 9, 10] as n}<div class="bs-cell"><span class="bs-num" class:bs-dim={!bets['place' + n] && !comeOdds[n]}>{n}</span>{#if bets['place' + n] > 0}<span class="bs-entry">{buys['place' + n] ? 'Buy' : 'Place'} {placeWorkingWith(placeLammer, 'place' + n) ? 'ON' : 'OFF'}</span>{/if}{#if comeOdds[n] > 0}<span class="bs-entry">Odds {comeOddsWorkingWith(n, comeOddsOff, placeLammer, comeOddsDeclaredOn, comeOddsOverrideOn, point) ? 'ON' : 'OFF'}</span>{/if}</div>{/each}</div>
	</section>

	<section class="stick"><strong>Stick call:</strong> {stickCall}</section>

	<section class="bets">
		<h2>Bet buttons, same popup as the table</h2>
		<p>These are only a backup for small screens. Tap one and the same preset popup opens.</p>
		<div class="bet-grid">
			{#each spots as spot}{#if (spot.key !== 'passOdds' || (point !== 0 && bets.passLine > 0) || bets.passOdds > 0 || wins.passOdds > 0) && (spot.key !== 'dontPass' || point === 0 || bets.dontPass > 0) && ((spot.key !== 'come' && spot.key !== 'dontCome') || point !== 0 || (spot.key === 'come' && bets.come > 0 && wins.come > 0))}<button on:click={() => spot.key.startsWith('place') ? openPointBox(placeNum(spot.key)) : openPopup(spot.key)}>{spot.label}<br /><span>${bets[spot.key] + (wins[spot.key] || 0) + (spot.key === 'come' ? comePile : 0)}</span></button>{/if}{/each}
		</div>
		<div class="actions">
			<button on:click={takeDownAll}>Take Down All</button>
			<button on:click={resetGame}>Reset to $1000</button>
			<a href="/craps-simulator">Back to old simulator page</a>
		</div>
		<p class="rules">The object of Craps is to establish a Point (4, 5, 6, 8, 9, or 10) and then roll that Point again before a 7 to win. When the puck is OFF, this is the Comeout Roll and the time to bet the Pass Line. If you roll 7 or 11 during the Comeout Roll you automatically win on the Pass Line. If you roll a 2, 3, or 12 during the Comeout Roll, you automatically lose on the Pass Line. Otherwise, you Establish a Point. When the puck is On, this is the Intermediate Roll. If you roll your Point before you roll a 7, you win on the Pass Line. If you roll a 7 before you roll your Point, you lose. Pass Line pays 1 to 1. Pass Odds: 6 and 8 pay 6 to 5, 5 and 9 pay 3 to 2, 4 and 10 pay 2 to 1. Don't Pass pays 1 to 1, wins on 2 or 3 comeout, pushes on 12 comeout and the bet stays, loses on 7 or 11 comeout, then wins if 7 rolls before the point and loses if the point is made. Lay Odds: bet more to win less, max lay is 6 times the Don't Pass bet, 6 and 8 lay 6 to win 5, 5 and 9 lay 3 to win 2, 4 and 10 lay 2 to win 1, lay odds can be taken down at any time. Lay Odds chips sit to the left of the Don't Pass chip, close enough to cover the P in Don't Pass, stacking west, with the Lay Odds amount box to the left of the lay chip and the Don't Pass amount box moved to the right of its chip, and when Lay Odds win, the lay amount box and the win amount box stay separate to the left of their chips, no total. Pass Odds wins stay on the table, butted up on the right of the odds bet with the amount box on the right of the winning chip, until collected. When a Pass Line or Don't Pass bet wins, a green Collect button appears over the right side of that bet, square-ish with a white border, and Collect picks up everything except the original bet: Pass win plus Odds bet plus Odds win, or Don't win plus Lay bet plus Lay win, to the rail, original bet stays. Odds and Lay pickup is called Pick up your money, because the total is bet plus win, while Pass and Don't pickup is called Pick up your winnings, because it picks up only the win and leaves the original bet to shoot. Chips are anchored, they do not move to new box centers. After a Don't win with Lay Odds, a small dark opaque clickable box, 40 by 24px, sits underneath only the lay bet, centered on the lay chip at 30px left of the Don't chip, with no label, and it is the box that brings up the Lay winnings menu, because Don't Pass has its own menu; it does not overlay other boxes and does not cover the Field, its right edge touches the Don't chip left edge, and tapping the left part of the Don't bar also opens the Lay menu, tapping the right part opens the Don't menu. Pass Odds are different: Pass Odds are in their own space below Pass Line, so win chips extending to the right past the Odds bet are kept as before, butted right with amount box on the right, kept on the table until collected, winnings-only menu with Pick up your money. Wins: a win on a comeout roll stacks into the bet if you do not pick it up and you roll again, while a win after a point, a point made for Pass Line or a seven out for Don't Pass, goes to the rail on the next roll, leaving only the original bet up for the new comeout roll, and Lay Odds plus its win also go to the rail on that next roll. On a seven out, the Don't Pass winning chip sits butted up against the Don't Pass chip on the right, with a box showing the bet plus win total, and the Lay Odds winning chip sits just above the lay chip, close but not butted, with a box to the left of both showing the lay bet plus win total. That lay total goes to the rail on the next comeout roll. Tap the Don't Pass bar after a point is set to open Lay Odds, there is no separate Lay Odds bar. Vested interest: on comeout you need a Pass Line or Don't Pass bet to roll. The only exception is after you pick up a Don't Pass bet: then you can shoot from Place bets, and if you try to shoot with no Place bet or Buy after picking up Don't Pass, you will get an error saying you now need to make a Place bet or Buy. During the intermediate roll only, a Don't Pass player who picked up their bet can also Come Down on the Pass Line instead of placing, even though coming down pays even money and placing usually pays more, so the attempted roll popup for that case shows both Place buttons and the Come Down on the Pass Line button. That Place or Come Down choice does not apply initially, initially the popup shows only Come Down after a point, or Pass or Don't on comeout, with no Place buttons. That Place shooting permission clears when a point is made, on seven out, or on reset, so the next comeout again needs Pass or Don't. You can pick up Place/Buy and Don't Pass bets at any time, but if you then try to roll with no vested bet, you will get a Bet to shoot menu with Pass Line or Don't Pass on comeout, or Come Down on the Pass Line after a point, and with six Place buttons only after you have picked up a Don't Pass bet. After a point, tapping Pass Line with no Pass bet opens the Pass Line menu titled Come Down on the Pass Line, which says it is usually better to place the point instead, because a Place bet pays more than even money, and a Pass Line bet made after the point wins only if the point is made, loses on seven out, cannot be taken back, and allows Odds. Only during the comeout roll can you take back a Pass Line bet with no issues. You can pick up a Don't Pass bet after a point from the Lay Odds menu. Place: 6 and 8 pay 7 to 6, 5 and 9 pay 7 to 5, 4 and 10 pay 9 to 5. Buy 4 and 10 pay 2 to 1. The vig is $1 per $20 on the total of all Buy bets, charged when you buy and refunded when you take a bet down. When a Buy bet wins you pay vig only on the amount that won. Pressing a Buy bet pays the full $1 per $20 on the new bet amount. Take the winning bet down and you pay no new vig, and the rounding extra comes back. Come: after a point is set, bet in the COME box. Wins on 7 or 11, loses on 2, 3, or 12, otherwise the bet moves into that Point, where it wins when the Point rolls and loses on 7. Once inside a Point it is a contract bet and cannot be taken back, but you can add Come Odds behind it at true odds. Come Odds can be turned off, the flat Come bet cannot. Don't Come: bet in the Don't Come Bar after a point is set. Wins on 2 or 3, loses on 7 or 11, pushes on 12, otherwise the bet moves behind that Point, where it wins on 7 and loses if the Point rolls. On a 6 or 8 you can say No Action and leave the bet in the DC instead; the Don't Come menu sets Ask every time, Always move, or Never move for 6 and 8. Don't Come is not a contract bet, you can take it back any time, and you can lay Odds behind it. A Don't Come bet behind a point sits in the bottom left corner of the empty space above the Place numbers, against the left wall, and its Lay Odds sit just above and to the left of it, stacking up and to the left. Place bets do not win or lose on the comeout roll, and a Place bet tapped on the comeout first shows the Place Bets are OFF gate, then Place and work it opens the menu. A Place bet turned OFF does not pay until turned back ON. Bet Each places the same amount on a pair, Spread Bets place Across, Inside, Outside, Uptown, Downtown, or AcrossIncluding, with the point excluded except on AcrossIncluding. Pass Line wins on 7 or 11 comeout, loses on 2, 3, or 12 comeout, otherwise sets a point. Bet $10 Pass button adds $10 Pass Line quickly. Test rolls collect previous wins to the rail before the next test roll, so 7, 7, 4 ends with $20 in the rail, bet $10, point 4, and the test input clears after Roll Dice is pressed. Clicking a preset or custom amount in a bet menu replaces that bet, it does not add to it. The old bet returns to the rail, then the new bet is made, for example $10 Pass Line clicked to $25 becomes $25, not $35. Bet Each and Spread replace Place bets, they do not add to them, but the chips are still taken down and put back down for the new total, with fresh random angles. Buy bets sit inside the Place square, not straddling its bottom border, with the bottom of the chip 4px above the spot bottom so it butts up against the inner second line, stacking upward inside the square, and a small BUY lammer sits on top in the center of the Buy bet every time there is a Buy bet. Lammers are round discs on top of the chips, like the Buy photo, 16px across on a 20px chip, with no border, no shadow, no text shadow, and no filter on the lammer, chip edges showing around the disc. Place ON and OFF lammers work inside to out, inside is closest to the proposition bets, so 10, 9, 8, 6, 5, 4, and every lammer affects itself and every bet outside it without its own lammer, until the next lammer outward. One lammer per bet, ON removes OFF and OFF removes ON on that same bet, and a bet stops working when it gets an OFF lammer. Comeout: bets are OFF by default, so ON on 10 means 4, 6, 8, 9, 10 all work, ON on 8 means 4, 6, 8 work and 10 is off because it is inside the ON lammer, ON on 10 plus OFF on 4 means 4 is off and the rest work, ON on 10 plus OFF on 8 plus ON on 6 means 8 is off and 4, 6, 9, 10 work. Intermediate: bets are ON by default, so OFF on 8 means 4, 5, 6, 8 are off, OFF on 5 means 4, 5 are off, OFF on 10 means all are off, OFF on 10 plus ON on 6 means 4, 5, 6 work and 8, 9, 10 are off, OFF on 10 plus ON on 8 plus OFF on 5 means 4, 5, 9, 10 are off and 6, 8 work. When the point is marked, lammers are cleaned up under the new ON default, so an ON lammer that is no longer needed comes off, for example ON on 10 plus OFF on 8 plus ON on 5 during comeout becomes OFF on 8 plus ON on 5 after the point, and if there was never an OFF lammer during comeout the ON lammer just comes off. On comeout, a bet that is off by default gets no OFF lammer, for example turning 10 off when 4, 5, 9, 10 are working leaves only ON on 9, no OFF on 10, because 10 is already off by default and ON on 9 only affects 9 and outside. The same logic applies in reverse during the intermediate roll: a bet that is on by default gets no ON lammer, for example turning 8 back on when everything is working leaves no lammer at all, and taking down the OFF bet that an ON lammer was overriding also leaves no lammer, because ON is the intermediate default. An ON lammer is only kept when it is needed to override an OFF lammer inside it. Lammers are cleaned up after every placement, toggle, take down, point set, point made, and seven out, so a redundant lammer does not stay behind after the bet that made it necessary is gone. Picking up a bet does not turn the other bets off, it just takes that bet back, so the other bets keep the working state they had before, and the lammers are automatically re-placed from those working states using the inside to out walk, for example picking up 10 when 4, 5, 9, 10 are working on comeout automatically puts ON on 9, so 4, 5, and 9 stay working. The same re-placing happens when you place, Buy, or Spread a bet, so a new bet does not accidentally turn on or off a bet that was not in that menu, for example placing 6 on when 4 and 5 were off during intermediate automatically adds OFF on 5 to keep 4 and 5 off, while 6 stays on, and Spread Inside during intermediate when 10 is OFF automatically puts ON on 9, so Inside bets 5, 6, 8, and 9 stay on while 10 stays off, and if 4 was also off it also gets OFF on 4 to keep 4 off. Off bets stay off until called on. There are two kinds of lammer, and they are not the same. A forever OFF is when a player explicitly says a bet is off during intermediate, or uses All Place OFF, and it stays off until that bet is explicitly called back on, even across a point made and a new point set. The only exception is comeout: no Place or Buy bet can ever be on by default during comeout, so a player has to explicitly say on to work a bet on comeout, and if that bet is then turned back off again before the point is set, that is just a change of mind, nevermind on turning it on, not a forever OFF. That bet starts off during comeout, gets turned on during comeout, then back off before the point is set, so it is a regular off, and it will be working when the next point is set. A bet turned off during comeout without first being turned on during that same comeout is still a forever OFF, because the player explicitly said off for it. A combat lammer is just a marker to override another lammer in the current phase, for example ON on 5 to override OFF on 9 during intermediate, or OFF on 5 to override ON on 10 during comeout, and a combat lammer can disappear when the phase changes. After a point is made, all Place lammers come off, so Place bets that were on during intermediate are now off on comeout, and a combat ON lammer like ON on 5 does not stay to keep 5 and 4 working on comeout. If a player wants them working on comeout, they can work them then. After a new point is set, lammers are rebuilt from forever OFF only, so a bet that was forever OFF stays off, with a combat ON lammer added only if it is needed to keep a non-forever OFF bet on, and a bet that was only off by comeout default, or only off because of a combat OFF lammer, becomes on again. During comeout, forever OFF bets also show their own OFF lammer, even if that lammer is redundant by segment rules, so a dealer can tell which bets are specifically turned off and which bets are just off because the puck is off. For example, point 10, forever OFF on 4 and 5, point made, comeout, turn on 9, the display is ON on 9, OFF on 8, OFF on 5, and OFF on 4, with no lammer on 6, because 6 is just off due to the puck, not forever off. Working state is still segment based, so those extra comeout OFF markers do not change payouts. When the point is marked back up, the display goes back to default segment rules, for example intermediate with forever OFF on 4 and 5 shows only OFF on 5, with 4 following OFF on 5. Puck ON sits in the middle of the double lines on the backside, top side, of the Place boxes, like Place bets sit in the middle of the double lines on the front side, top 26.5%, below the single white line at the top of the empty row above the Place numbers, in the double lines just above the Place numbers. Buy bets count as Place bets for lammers, so if a Buy bet has an ON or OFF lammer it gets both discs, with the ON or OFF disc moved 2px up from the BUY disc so you can see there are two. Colors: BUY yellow with black text, ON white with black text at 7px, LAY blue with white text at 6px, OFF black with white text at 6px. Place bets show an ON or OFF lammer only where a lammer is placed, on top in the center of the Place bet, bets outside that lammer without their own lammer follow it, and Lay Odds bets never show a LAY lammer. Lammers are labels only, tapping through them still opens the bet menu. Chips and lammers are rotated in place, every new chip on the table gets a fresh random angle from all 360 degrees, Math.random times 360, no matter what bet, series of bets, or menu put that chip there, single bet, custom bet, Max Bet, All In, Bet Each, Spread, Buy, Pass, Field, Don't, Odds, or Lay, just random per placement, no minimum angle apart. The stack shown is for the total amount only, it is not a pile of chips added one by one, for example adding $10 to $10 does not make a bunch of $5 chips, it makes a $20 stack. When you add money to a bet, or a win stacks into a bet, the bet is taken down and put right back down for the new total amount, with all chips getting fresh random angles, old angles are not kept. Turning a Place bet off in its menu preserves the other bets working state, for example turning 9 off when 5, 6, 8, 9 are working gives OFF on 9 and ON on 8, so 5, 6, and 8 are still working. BUY text is at 17px line height on a 16px disc, halfway between the first and second versions, so it sits in the middle.</p>
	</section>
</main>

<style>
	.cs2 { max-width: 920px; margin: 0 auto; padding: 16px; font-family: system-ui, sans-serif; color: #111827; background: #ffffff; color-scheme: light; }
	.cs2.dark { background: #0f172a; color: #e5e7eb; color-scheme: dark; }
	.cs2.dark .totals div { background: #1e293b; color: #ffffff; }
	.cs2.dark .rail { background: #12291a; border-color: #22c55e; }
	.cs2.dark .stick-bubble, .cs2.dark .stick { background: #1e293b; border-color: #f59e0b; color: #fde68a; }
	.cs2.dark .bet-grid button { background: #1e293b; color: #e5e7eb; border-color: #334155; }
	.cs2.dark .actions button { background: #1e293b; color: #e5e7eb; border-color: #334155; }
	.cs2.dark .actions a { color: #93c5fd; }
	.cs2.dark .rules { color: #cbd5e1; }
	.cs2 h1 { font-size: clamp(24px, 5vw, 36px); margin: 8px 0; }
	.tag { font-size: 14px; background: #166534; color: #fff; padding: 4px 8px; border-radius: 999px; vertical-align: middle; }
	.intro { line-height: 1.5; }
	.spot-toggle { display: inline-block; margin: 8px 0; font-weight: 700; }
	.totals { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; margin: 16px 0; }
	.totals div { background: #111827; color: #fff; padding: 10px; border-radius: 8px; display: flex; flex-direction: column; }
	.totals span { font-size: 20px; font-weight: 700; }
	.rail { border: 2px solid #166534; border-radius: 12px; padding: 12px; margin: 16px 0; background: #f0fdf4; }
	.rail h2 small { font-weight: 400; font-size: 13px; }
	.rail-stacks { display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; }
	.stack { display: flex; flex-direction: column; align-items: center; }
	.stack img { width: clamp(28px, 7vw, 44px); height: auto; margin-top: -14px; transition: transform 0.3s ease; }
	.stack img:first-child { margin-top: 0; }
	.stack span { font-size: 12px; margin-top: 4px; }
	.puck { width: 40px; height: auto; margin-top: 10px; }
	.puck-label { display: block; font-weight: 700; margin-top: 4px; }
	.table-wrap { position: relative; width: 100%; margin: 16px 0 4px; }
	.table-img { width: 100%; height: auto; display: block; border-radius: 12px; }
	.spot { position: absolute; background: rgba(0,0,0,0.28); border: none; border-radius: 6px; color: #fff; text-shadow: 0 1px 2px #000; padding: 2px 4px; font-weight: 700; font-size: clamp(9px, 1.6vw, 12px); cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; }
	.spot:disabled { opacity: 0.45; cursor: not-allowed; }
	.table-puck { position: absolute; width: 4%; height: auto; z-index: 5; pointer-events: none; }
	.collect-btn { position: absolute; width: 52px; height: 40px; border-radius: 12px; background: #166534; color: #ffffff; font-size: 12px; font-weight: 800; border: 2px solid #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.4); z-index: 6; cursor: pointer; display: flex; align-items: center; justify-content: center; }
	
	.cs2.dark .collect-btn { background: #22c55e; color: #0f172a; border-color: #ffffff; }
	.spot-hidden { background: transparent; border-color: transparent; color: transparent; text-shadow: none; }
	.spot-hidden .spot-chip, .spot-hidden .spot-amount, .spot-hidden .stack-chip { opacity: 1; }
	.stack-chip { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; position: absolute; }
	.spot-chip { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
	.spot-amount { font-size: clamp(10px, 2vw, 13px); background: #000; color: #fff; padding: 2px 6px; border-radius: 4px; display: inline-block; position: absolute; right: calc(50% + 16px); top: 50%; transform: translateY(-50%); white-space: nowrap; }
	.spot-hidden .spot-amount { color: #fff; text-shadow: 0 1px 2px #000; }
	.win-chip { width: 20px; height: 20px; object-fit: contain; position: absolute; }
	.win-amount { font-size: clamp(10px, 2vw, 13px); font-weight: 700; background: #000; color: #fff; padding: 2px 6px; border-radius: 4px; position: absolute; white-space: nowrap; }
	.spot-bet { display: flex; align-items: center; justify-content: center; width: 100%; gap: 6px; }
	.spot-place4 { left: 23.1%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place5 { left: 30.2%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place6 { left: 37.1%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place8 { left: 43.9%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place9 { left: 50.8%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place10 { left: 57.7%; top: 30%; width: 6.5%; height: 12%; overflow: visible; }
	.spot-place4, .spot-place5, .spot-place6, .spot-place8, .spot-place9, .spot-place10 { z-index: 1; }
	.spot-place4 .spot-amount, .spot-place5 .spot-amount, .spot-place6 .spot-amount, .spot-place8 .spot-amount, .spot-place9 .spot-amount, .spot-place10 .spot-amount { padding: 2px 4px; }
	.spot-place4 .spot-chip, .spot-place5 .spot-chip, .spot-place6 .spot-chip, .spot-place8 .spot-chip, .spot-place9 .spot-chip, .spot-place10 .spot-chip { width: 20px; height: 20px; }
	.spot-place4 .spot-bet, .spot-place5 .spot-bet, .spot-place6 .spot-bet, .spot-place8 .spot-bet, .spot-place9 .spot-bet, .spot-place10 .spot-bet { position: absolute; inset: 0; gap: 0; }
	.spot-place4 .spot-chip, .spot-place5 .spot-chip, .spot-place6 .spot-chip, .spot-place8 .spot-chip, .spot-place9 .spot-chip, .spot-place10 .spot-chip { position: absolute; left: 50%; top: auto; transform: translateX(-50%); bottom: -10px; }
	.spot-place4 .spot-amount, .spot-place5 .spot-amount, .spot-place6 .spot-amount, .spot-place8 .spot-amount, .spot-place9 .spot-amount, .spot-place10 .spot-amount { position: absolute; left: 50%; right: auto; top: auto; bottom: 10px; transform: translateX(-50%); white-space: nowrap; }
	.spot-place4 .spot-amount.both-amt, .spot-place5 .spot-amount.both-amt, .spot-place6 .spot-amount.both-amt, .spot-place8 .spot-amount.both-amt, .spot-place9 .spot-amount.both-amt, .spot-place10 .spot-amount.both-amt { left: 0; right: auto; top: auto; transform: none; width: calc(50% - 3px); text-align: center; white-space: nowrap; overflow: hidden; padding: 2px 1px; }
	.spot-amount.come-amt { top: auto; bottom: 10px; transform: none; text-align: center; white-space: normal; line-height: 1.15; padding: 2px 1px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; overflow: hidden; }
	.spot-amount.come-amt-center { left: 50%; right: auto; transform: translateX(-50%); }
	.spot-amount.come-amt-side { left: calc(50% + 3px); right: auto; width: calc(50% - 3px); }
	.lammer { position: absolute; width: 16px; height: 16px; line-height: 16px; font-size: 6px; font-weight: 700; text-align: center; background: #ffdd00; color: #000000; border: none; border-radius: 50%; z-index: 5; pointer-events: none; white-space: nowrap; box-shadow: none; filter: none; text-shadow: none; }
	.on-lammer { background: #ffffff; color: #000000; font-size: 7px; }
	.lay-lammer { background: #1d4ed8; color: #ffffff; }
	.off-lammer { background: #000000; color: #ffffff; }
	.buy-lammer { background: #ffdd00; color: #000000; line-height: 17px; }
	.spot-odds { left: 25%; top: 80%; width: 31.9%; height: 5%; }
	.spot-pass { left: 25%; top: 72.5%; width: 31.9%; height: 5.3%; text-align: center; }
	.spot-dontpass { left: 25%; top: 66.8%; width: 31.9%; height: 5%; }
	.spot-dontpass.has-lay .spot-bet .spot-amount { left: calc(50% + 16px); right: auto; transform: translateY(-50%); }
	.spot-dontpass.has-win .spot-bet .spot-amount { display: none; }
	.spot-field { left: 25%; top: 54.7%; width: 31.8%; height: 11.5%; }
	.spot-come { left: 25%; top: 43%; width: 31.8%; height: 10.5%; }
	.spot-dontcome { left: 19.25%; top: 25%; width: 4.0%; height: 15.5%; }
	.spot-come-pt { background: transparent; z-index: 2; }
	.spot-dc-pt { z-index: 3; padding: 0; }
	.dc-amt { position: absolute; background: #000; color: #fff; padding: 1px 3px; border-radius: 4px; font-weight: 700; white-space: normal; line-height: 1.15; max-width: 33.333%; box-sizing: border-box; }
	.dc-pile { position: absolute; width: 6%; height: 8%; background: transparent; border: none; padding: 0; margin: 0; z-index: 6; cursor: pointer; transform: translate(-50%, -50%); }
	.prop-payout { position: absolute; left: 54.5%; top: 48.25%; width: 6%; height: 8%; transform: translate(-50%, -50%); pointer-events: none; z-index: 6; }
	.dc-fly { position: absolute; width: 20px; height: 20px; z-index: 70; pointer-events: none; transform: translate(-50%, -50%); transition: left 0.6s ease-in-out, top 0.6s ease-in-out; }
	.ceremony-shield { position: absolute; inset: 0; z-index: 55; background: transparent; touch-action: none; }
	.dc-pile.under-puck { z-index: 4; }
	.dc-fly.under-puck { z-index: 4; }
	.spot-come.come-split { background: transparent; }
	.come-half { position: absolute; top: 0; height: 100%; width: calc(50% - 3px); background: rgba(0,0,0,0.28); border-radius: 6px; pointer-events: none; }
	.come-half-left { left: 0; }
	.come-half-right { right: 0; }
	.spot-hidden.come-half { background: transparent; }
	.spot-hidden .dc-amt { opacity: 1; color: #fff; text-shadow: 0 1px 2px #000; }
	.spot-prop { z-index: 1; pointer-events: none; padding: 0; }
	.spot-prop-ce { left: 67.7%; top: 44.4%; width: 4.5%; height: 33.2%; }
	.spot-prop-world { left: 68.1%; top: 34.8%; width: 3.9%; height: 7.6%; }
	.spot-prop-hardways { left: 72.8%; top: 36.5%; width: 25.1%; height: 15.1%; }
	.spot-prop-anyseven { left: 72.8%; top: 51.6%; width: 25.1%; height: 3.3%; }
	.spot-prop-hornhigh { left: 72.8%; top: 55%; width: 25.1%; height: 6.4%; }
	.spot-prop-anycraps { left: 72.8%; top: 74.8%; width: 25.1%; height: 3.2%; }
	.spot-prop-hop { left: 72.8%; top: 61.4%; width: 25.1%; height: 13.4%; z-index: 1; padding: 0; }
	.spot-horn { left: 81.15%; top: 63.52%; width: 8.39%; height: 9.17%; z-index: 2; padding: 0; }
	.spot-horn .spot-amount { left: calc(25% + 16px); right: auto; top: 75%; }
	.spot-prop-anyseven .spot-amount { right: calc(67% + 16px); }
	.spot-prop-anycraps .spot-amount { right: calc(66.5% + 16px); }
	.spot-prop-world .spot-amount { right: calc(69% + 16px); top: 83%; }
	.table-note { font-size: 13px; color: #444; }
	.popup-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 50; padding: 12px; touch-action: none; overscroll-behavior: contain; }
	.popup-backdrop .popup { touch-action: pan-y; }
	.popup { background: #ffffff; color: #111827; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px; max-width: 680px; width: 100%; font-size: 13px; line-height: 1.4; box-shadow: 0 10px 30px rgba(0,0,0,0.25); max-height: min(92%, 90vh); overflow: hidden; display: flex; flex-direction: column; }
	.popup h2 { margin: 0 0 4px; font-size: 17px; }
	.popup-header { display: flex; align-items: center; gap: 8px; flex: none; padding-bottom: 6px; margin-bottom: 4px; border-bottom: 1px solid #e5e7eb; }
	.popup-header h2 { margin: 0; flex: 1; font-size: 17px; }
	.popup-body { overflow-y: auto; overflow-x: hidden; flex: 1; min-height: 0; }
	.popup-x { flex: none; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; line-height: 1; border-radius: 6px; border: 1px solid #d1d5db; background: #f8fafc; color: #374151; cursor: pointer; transform: translateY(-1px); }
	.popup-x:hover { background: #eef2f7; }
	.cs2.dark .popup-header { border-color: #334155; }
	.cs2.dark .popup-x { background: #0f172a; color: #e2e8f0; border-color: #475569; }
	.back-btn { flex: none; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; padding: 0; font-size: 16px; font-weight: 700; line-height: 1; border-radius: 6px; border: 1px solid #d1d5db; background: #f8fafc; color: #374151; cursor: pointer; }
	.back-btn:hover { background: #eef2f7; }
	.cs2.dark .back-btn { background: #0f172a; color: #e2e8f0; border-color: #475569; }
	.popup p { margin: 6px 0; font-size: 13px; }
	.popup .ledger-bar { background: #141414; color: #ffffff; border-top: 2px solid #c9a227; border-bottom: 2px solid #c9a227; padding: 8px 14px; margin: 10px -14px 12px; display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; }
	.ledger-bar .lb-left { display: flex; flex-direction: column; gap: 1px; }
	.ledger-bar .lb-right { display: flex; flex-direction: column; gap: 1px; align-items: flex-end; text-align: right; }
	.ledger-bar .lb-label { font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #c9a227; }
	.ledger-bar .lb-amt { font-size: 17px; font-weight: 700; line-height: 1.15; color: #ffffff; }
	.ledger-bar .lb-small { font-size: 11px; line-height: 1.15; color: #ffffff; }
	.ledger-bar .lb-big { font-size: 17px; font-weight: 700; line-height: 1.15; color: #ffffff; }
	.preset-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin: 8px 0; }
	@media (max-width: 520px) { .preset-grid { grid-template-columns: repeat(3, 1fr); } }
	.preset-grid button { padding: 7px 4px; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 8px; border: 1px solid #d1d5db; background: #f8fafc; color: #111827; }
	.preset-grid button:hover { background: #dcfce7; }
	.preset-grid button.max-btn { background: #166534; color: #ffffff; border-color: #166534; }
	.popup button.max-btn { display: block; width: 100%; padding: 7px 8px; margin-top: 6px; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 8px; background: #166534; color: #ffffff; border: 1px solid #166534; }
	.preset-grid button:disabled { opacity: 0.4; }
	.popup input { width: 84px; padding: 5px 7px; font-size: 13px; margin: 4px 0; background: #ffffff; color: #111827; border: 1px solid #cbd5e1; border-radius: 6px; color-scheme: light; }
	.popup label { font-size: 13px; }
	.custom-row { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; margin-top: 6px; }
	.custom-row label { display: flex; align-items: center; gap: 6px; flex: none; white-space: nowrap; }
	.custom-row input { flex: none; width: 12ch; margin: 0; }
	.custom-row .vig-note { flex: none; white-space: nowrap; }
	.custom-row .custom-btn { flex: 1; width: auto; margin-top: 0; }
	.max-err { color: rgb(248, 79, 49); font-size: 12px; margin: 4px 0 0; }
	.custom-btn, .take-btn, .close-btn { display: block; width: 100%; padding: 7px 8px; margin-top: 6px; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 8px; border: 1px solid #d1d5db; background: #f8fafc; color: #111827; }
	.btn-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px; }
	.btn-pair .custom-btn, .btn-pair .take-btn { margin-top: 0; }
	.btn-pair > button:only-child { grid-column: 1 / -1; }
	.btn-pair.band-take > button:nth-child(3) { grid-column: 1 / -1; }
	.check-row { display: flex; align-items: center; gap: 8px; margin-top: 10px; font-weight: 600; font-size: 13px; cursor: pointer; }
	.check-row input { width: 18px; height: 18px; cursor: pointer; }
	.custom-btn.active-opt { background: #166534; color: #fff; border-color: #166534; }
	.take-btn.active-opt, .preset-grid button.active-opt { background: #166534; color: #fff; border-color: #166534; }
	.noaction-section { margin-top: 10px; padding-top: 8px; border-top: 1px solid #d1d5db; }
	.take-btn { background: #fef3c7; border-color: #f59e0b; }
	.su-row { display: flex; gap: 6px; margin: 8px 0; }
	.su-unit { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; }
	.su-pick { flex: none; width: 100%; min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px 2px; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 8px; border: 1px solid #d1d5db; background: #f8fafc; color: #111827; }
	.su-pick:hover { background: #dcfce7; }
	.su-pick.active-opt { background: #166534; color: #fff; border-color: #166534; }
	.su-num { font-size: 17px; line-height: 1.1; }
	.su-name { font-size: 10px; font-weight: 400; line-height: 1.1; white-space: nowrap; }
	.su-dice { display: flex; gap: 3px; align-items: center; justify-content: center; }
	.su-dice img { width: clamp(20px, 6vw, 30px); height: auto; border-radius: 5px; display: block; }
	.su-hh-label { font-size: 11px; font-weight: 700; line-height: 1.15; white-space: nowrap; margin-bottom: 2px; }
	.popup .su-input { flex: none; width: 100%; margin: 0; box-sizing: border-box; }
	.su-presets { display: flex; gap: 3px; }
	.su-preset { flex: 1; min-width: 0; padding: 4px 0; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 6px; border: 1px solid #d1d5db; background: #f8fafc; color: #111827; }
	.su-preset:hover { background: #dcfce7; }
	.su-preset.active-opt { background: #166534; color: #fff; border-color: #166534; }
	.su-section { font-weight: 700; margin-top: 10px; }
	.su-downs { display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0; }
	.su-downs .take-btn { width: auto; flex: 1 1 auto; margin-top: 0; }
	.su-bet-btn:disabled { opacity: 0.45; cursor: default; }
	.su-line { display: flex; align-items: center; gap: 6px; margin: 6px 0; }
	.su-line-name { flex: none; width: 132px; font-weight: 700; font-size: 13px; white-space: nowrap; }
	.su-tiles { display: flex; gap: 3px; flex: none; }
	.su-tile { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 6px; border: 1px solid #d1d5db; background: #f8fafc; color: #111827; font-size: 14px; font-weight: 700; }
	.popup .su-line-input { flex: none; width: 9ch; margin: 0; }
	.su-line-btn { flex: 1; min-width: 0; }
	.su-line-btn:disabled { opacity: 0.45; cursor: default; }
	.cs2.dark .su-tile { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.cs2.dark .su-pick { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.cs2.dark .su-pick:hover { background: #14532d; }
	.cs2.dark .su-pick.active-opt { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.cs2.dark .su-preset { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.cs2.dark .su-preset:hover { background: #14532d; }
	.cs2.dark .su-preset.active-opt { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.close-btn { background: transparent; border-color: transparent; color: #6b7280; }
	.cs2.dark .popup { background: #1e293b; color: #f1f5f9; border-color: #334155; }
	.cs2.dark .preset-grid button { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.cs2.dark .preset-grid button:hover { background: #14532d; }
	.cs2.dark .preset-grid button.max-btn { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.cs2.dark .popup button.max-btn { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.cs2.dark .popup input { background: #0f172a; color: #f1f5f9; border-color: #475569; color-scheme: dark; }
	.cs2.dark .custom-btn { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.cs2.dark .custom-btn.active-opt { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.cs2.dark .take-btn.active-opt, .cs2.dark .preset-grid button.active-opt { background: #22c55e; color: #0f172a; border-color: #22c55e; }
	.cs2.dark .noaction-section { border-top-color: #475569; }
	.cs2.dark .take-btn { background: #422006; border-color: #f59e0b; color: #fde68a; }
	.cs2.dark .close-btn { color: #94a3b8; }
	.dice { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin: 16px 0; }
	.dice img { width: clamp(48px, 12vw, 72px); height: auto; border-radius: 8px; }
	.roll { background: #b91c1c; color: #fff; border: none; padding: 14px 22px; font-size: 18px; font-weight: 800; border-radius: 10px; cursor: pointer; }
	.roll:disabled { opacity: 0.6; }
	.quick-bet { background: #166534; color: #fff; border: none; padding: 14px 16px; font-size: 16px; font-weight: 800; border-radius: 10px; cursor: pointer; }
	.quick-bet:disabled { opacity: 0.6; }
	.test-rolls { width: 220px; padding: 10px 12px; font-size: 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #ffffff; color: #111827; }
	.undo-roll { background: #374151; color: #ffffff; border: none; padding: 10px 14px; font-size: 14px; font-weight: 700; border-radius: 8px; cursor: pointer; margin-left: 8px; }
	.undo-roll:disabled { opacity: 0.5; cursor: default; }
	.cs2.dark .test-rolls { background: #0f172a; color: #f1f5f9; border-color: #475569; }
	.bet-states { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; border: 1px solid #d1d5db; border-radius: 8px; background: #f9fafb; padding: 6px 10px; margin: 8px 0; }
	.cs2.dark .bet-states { background: #1e293b; border-color: #334155; }
	.bs-caption { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
	.bs-row { display: flex; gap: 6px; flex: 1; }
	.bs-cell { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 1px; text-align: center; }
	.bs-num { font-size: 13px; font-weight: 700; }
	.bs-dim { opacity: 0.4; }
	.bs-entry { font-size: clamp(9px, 2.4vw, 12px); white-space: nowrap; }
	.stick { background: #fef9c3; border-left: 4px solid #ca8a04; padding: 10px; margin: 8px 0; line-height: 1.4; }
	.stickwoman { position: absolute; top: 3%; left: 0.5%; width: 24%; height: auto; pointer-events: none; z-index: 2; }
	.stick-bubble { position: absolute; top: 5%; left: 25%; width: clamp(160px, 15vw, 260px); max-height: 20%; overflow-y: auto; background: #fef9c3; border: 1px solid #ca8a04; border-radius: 12px; padding: 0.25vw 0.5vw; display: flex; justify-content: left; align-items: center; font-size: clamp(11px, 0.75vw, 14px); line-height: 1.4; z-index: 2; }
	.stick-bubble.alert { color: rgb(248, 79, 49); border: 1px solid rgb(248, 79, 49); }
	.stick-bubble.notify { color: rgb(0, 158, 86); border: 2px solid rgb(0, 158, 86); }
	.stick-bubble.inform { color: rgb(8, 142, 158); border: 1px solid rgb(8, 142, 158); }
	.stick-bubble.ask { color: rgb(158, 114, 24); border: 1px solid rgb(158, 114, 24); }
	.cs2.dark .stick-bubble.ask { background: #1e293b; color: rgb(158, 114, 24); border-color: rgb(158, 114, 24); }
	.cs2.dark .stick-bubble.alert { background: #1e293b; color: rgb(248, 79, 49); border-color: rgb(248, 79, 49); }
	.cs2.dark .stick-bubble.notify { background: #1e293b; color: rgb(0, 158, 86); border-color: rgb(0, 158, 86); }
	.cs2.dark .stick-bubble.inform { background: #1e293b; color: rgb(8, 142, 158); border-color: rgb(8, 142, 158); }
	.bet-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }
	.bet-grid button { padding: 9px; font-size: 13px; font-weight: 700; border-radius: 10px; border: 1px solid #d1d5db; background: #ffffff; color: #111827; cursor: pointer; }
	.bet-grid button:disabled { opacity: 0.5; }
	.actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; align-items: center; }
	.actions button { padding: 8px 12px; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 8px; border: 1px solid #d1d5db; background: #ffffff; color: #111827; }
	.rules { font-size: 13px; line-height: 1.5; color: #333; }
</style>
