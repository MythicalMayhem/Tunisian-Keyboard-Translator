type alphabet = { [s: string]: string }
let bcdefghijklmnopqrstuvwxyz = ""
let BCDEFGHIJKLMNOPQRSTUVWXYZ = ""
const map: alphabet = {
	a: "ا",
	b: "ب",
	c: "ش",
	d: "د",
	e: "ى",
	f: "ف",
	g: "ڤ",
	h: "ه",
	i: "ي",
	j: "ج",
	k: "ك",
	l: "ل",
	m: "م",
	n: "ن",
	o: "و",
	p: "پ",
	q: "ك",
	r: "ر",
	s: "س",
	t: "ت",
	u: "ى",
	v: "ڥ",
	w: "و",
	y: "ي",
	z: "ز",
	A: "أ",
	S: "ص",
	T: "ط",
	O: "أُ",
	"2": "ء",
	"3": "ع",
	"7": "ح",
	"5": "خ",
	"8": "غ",
	"9": "ق",
	ch: "ش",
	thl: "ذ",
	th: "ث",
	dh: "ض",
	Dh: "ظ",
	st: "ة",
}

export const convert = (s: string) => {
	let res = ""
	let shouldSkip = false
	for (let i = 0; i < s.length; i++) {
		if (shouldSkip) {
			shouldSkip = false
			continue
		}
		const letter: string = s[i]
		if (i === 0 && letter === "o") {
			res = res + map["O"]
			continue
		}
		if (i === s.length - 1) {
			res = res + (map[letter] || letter)
			continue
		}
		const next: string = s[i + 1]
		if (letter.toLowerCase() === "c" && next.toLowerCase() === "h") {
			shouldSkip = true
			res = res + map["ch"]
		} else if (next.toLowerCase() === "'")
			switch (letter.toLowerCase()) {
				case "d":
					shouldSkip = true
					res = res + map["thl"]
					break
				case "t":
					shouldSkip = true
					res = res + map["th2"]
					break
				case "h":
					shouldSkip = true
					res = res + map["st"]
					break
				default:
					shouldSkip = true
					res = res + (map[letter] || letter)
					break
			}
		else if ("ao".includes(next) && letter === " ") {
			shouldSkip = true
			res = res + ' ' +map["A"]
		} else res = res + (map[letter] || letter)
	}
	return res
}
