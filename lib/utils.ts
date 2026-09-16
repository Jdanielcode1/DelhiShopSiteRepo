import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Groups sentences into short, easy-to-scan product-description paragraphs. */
export function descriptionParagraphs(description: string, sentencesPerParagraph = 2) {
  const sentences = description.split(/(?<=[.!?])\s+/).filter(Boolean);

  return sentences.reduce<string[]>((paragraphs, sentence, index) => {
    const paragraphIndex = Math.floor(index / sentencesPerParagraph);
    paragraphs[paragraphIndex] = `${paragraphs[paragraphIndex] ? `${paragraphs[paragraphIndex]} ` : ""}${sentence}`;
    return paragraphs;
  }, []);
}
