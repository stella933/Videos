import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CategoryImages } from "."

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export const  findTitleById = (id:string | undefined) => {
  console.log(id);
  const item = CategoryImages.find((obj) => obj.id === id);
  console.log(item);
  
  return item ? item.title : null;
}