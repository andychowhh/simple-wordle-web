import { wordCompareResult } from "@/constants/wordCompareResult";

import { WordCompareResultType } from "@/types/types";

type CheckType = {
  character: string;
  index: number;
};

type ResultType = {
  character: string;
  result: string;
  index: number;
};

export const wordCompare = (
  input: Array<string>,
  target: string
): Array<WordCompareResultType> => {
  let matchedArr: Array<CheckType> = [];
  let includedArr: Array<CheckType> = [];

  let result: Array<ResultType> = [];
  // put matched/included char in corresponding arrays
  input.map((letter: string, i: number) => {
    let targetArr: Array<string> = target.split("");
    if (targetArr[i] === letter) {
      matchedArr.push({
        character: letter,
        index: i,
      });
    } else if (targetArr.includes(letter)) {
      includedArr.push({
        character: letter,
        index: i,
      });
    }
  });
  // use targetArr to control the word which is already handled
  let targetArr: Array<string | null> = target.split("");
  // if matched, remove the element from the targetArr based on its index, and push it to result[]
  matchedArr.map((matched: CheckType) => {
    let index: number = matched.index;
    if (targetArr[index] !== null) {
      result.push({
        character: matched.character,
        result: wordCompareResult.characterMatched,
        index: matched.index,
      });
      targetArr[index] = null;
    }
  });
  // if included, remove the element in targetArr after locating its index
  includedArr.map((included: CheckType) => {
    let characterIndex: number = targetArr.findIndex(
      (x) => x === included.character
    );
    if (characterIndex !== -1) {
      result.push({
        character: included.character,
        result: wordCompareResult.characterIncluded,
        index: included.index,
      });
      targetArr[characterIndex] = null;
    }
  });

  let formattedResult: Array<WordCompareResultType> = input.map(
    (ele: string, i: number) => {
      let charResult: ResultType | undefined = result.find(
        (resultItem: ResultType) => {
          return resultItem.index === i;
        }
      );
      let formattedCharResult: string = charResult
        ? charResult.result
        : wordCompareResult.characterNotIncluded;

      return {
        character: ele,
        result: formattedCharResult,
      };
    }
  );
  return formattedResult;
};
