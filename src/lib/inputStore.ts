import { create } from "zustand"
import { convert } from "./convert"

interface inputstore {
	result: string
	convert: (s: string) => void
}

export const inputStore = create<inputstore>((set) => ({
	result: "",
	convert: (s: string) => set({ result: convert(s) }),
}))
