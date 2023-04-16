import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(inputs: ClassValue, ...classes: any) {
  return twMerge(clsx(inputs, ...classes));
}
