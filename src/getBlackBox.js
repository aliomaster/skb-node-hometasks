const box = [
	1,
	18,
	243,
	3240,
	43254,
	577368,
	7706988,
	102876480,
	1373243544,
	18330699168,
	244686773808,
	3266193870720,
	43598688377184,
	581975750199168,
	7768485393179328,
	103697388221736960,
	1384201395738071424,
	18476969736848122368,
	246639261965462754048,
];

export default function getColor(query) {
	return (box[query.i]) ? String(box[query.i]) : undefined;
}