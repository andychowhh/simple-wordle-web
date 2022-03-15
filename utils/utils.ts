import { wordCompareResult } from "@/constants/wordCompareResult";

export const wordCompare = (input: string, target: string): Array<string> => {
  let result: Array<string> = input
    .split("")
    .map((letter: string, i: number) => {
      let targetArr: Array<string> = target.split("");
      if (targetArr[i] === letter) return wordCompareResult.characterMatched;
      if (targetArr.includes(letter))
        return wordCompareResult.characterIncluded;
      return wordCompareResult.characterNotIncluded;
    });
  return result;
};
