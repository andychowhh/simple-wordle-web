import { wordCompareResult } from "@/constants/wordCompareResult";

import { WordCompareResultType } from "@/types/types";

import { WORDS } from "@/constants/wordList";

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
  input: string[],
  target: string
): WordCompareResultType[] => {
  let matchedArr: CheckType[] = [];
  let includedArr: CheckType[] = [];

  let result: ResultType[] = [];
  // put matched/included char in corresponding arrays
  input.map((letter, i) => {
    const targetArr = target.split("");
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
    const index = matched.index;
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
    const characterIndex = targetArr.findIndex((x) => x === included.character);
    if (characterIndex !== -1) {
      result.push({
        character: included.character,
        result: wordCompareResult.characterIncluded,
        index: included.index,
      });
      targetArr[characterIndex] = null;
    }
  });

  let formattedResult: WordCompareResultType[] = input.map((ele, i) => {
    const charResult: ResultType | undefined = result.find(
      (resultItem: ResultType) => {
        return resultItem.index === i;
      }
    );
    const formattedCharResult = charResult
      ? charResult.result
      : wordCompareResult.characterNotIncluded;

    return {
      character: ele,
      result: formattedCharResult,
    };
  });
  return formattedResult;
};

export const generateRandomWord = () => {
  const wordFilteredByLength = WORDS.filter((word) => word.length === 5);
  const randomWord =
    wordFilteredByLength[
      Math.floor(Math.random() * wordFilteredByLength.length)
    ].toUpperCase();
  return randomWord;
};
