import { wordCompareResult } from "@/constants/wordCompareResult";

import { WordCompareResultType } from "@/types/types";

export const wordCompare = (
  input: Array<string>,
  target: string
): Array<WordCompareResultType> => {
  let result: Array<WordCompareResultType> = input.map(
    (letter: string, i: number) => {
      let targetArr: Array<string> = target.split("");
      if (targetArr[i] === letter)
        return {
          character: letter,
          result: wordCompareResult.characterMatched,
        };
      if (targetArr.includes(letter))
        return {
          character: letter,
          result: wordCompareResult.characterIncluded,
        };
      return {
        character: letter,
        result: wordCompareResult.characterNotIncluded,
      };
    }
  );
  return result;
};
