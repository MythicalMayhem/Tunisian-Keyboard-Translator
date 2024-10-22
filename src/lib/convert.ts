type alphabet = { [s: string]: string }
const map: alphabet = {
	a: "ا",
	b: "ب",
	c: "ك",
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
	u: "",
	v: "ڥ",
	w: "و",
	x: "كس",
	y: "ى",
	z: "ز",
	A: "أ",
	S: "ص",
	T: "ط",
	O: "و",
	X: "كس",
	Y: "ي",
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
		if (i === s.length - 1) {
			res = res + (map[letter] ?? letter)
			continue
		}
		const next: string = s[i + 1]
		if (i === 0) {
			if (letter === "o") {
				res = res + map["O"]
			}
			if (letter === "\\") {
				res = res + map[next.toLowerCase()]
				shouldSkip = true
				continue
			}
		}
		if (letter.toLowerCase() === "c" && next.toLowerCase() === "h") {
			shouldSkip = true
			res = res + map["ch"]
		} else if (next === "'")
			switch (letter) {
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
				case "y":
					shouldSkip = true
					res = res + map["Y"]
					break
				default:
					shouldSkip = true
					res = res + (map[letter.toLowerCase()] ?? " ")
					break
			}
		else if ("ao".includes(next) && letter === " ") {
			shouldSkip = true
			res = res + " " + map["A"]
		} else if (next === "u" && letter.toLowerCase() === "o") {
			shouldSkip = true
			res = res + map["O"]
		} else res = res + (map[letter] ?? " ")
	}
	return res
}
