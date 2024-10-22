import { create } from "zustand"
import { convert } from "./convert"

interface inputstore {
	result: string
	current: string
	convert: (s: string) => void
	setText: (s: string) => void
}

export const inputStore = create<inputstore>((set) => ({
	current: "",
	result: "",
	convert: (s: string) => set({ result: convert(s) }),
	setText: (s: string) => set({ current: s }),
}))
