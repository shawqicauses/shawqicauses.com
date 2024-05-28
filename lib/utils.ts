// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export const cn = function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const clamp = function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

const utils = {cn, clamp}

export default utils
