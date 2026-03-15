import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function truncate(str, length = 8) {
  if (!str || str.length <= length * 2) {
    return str;
  }
  return `${str.slice(0, length)}...${str.slice(-length)}`;
}
