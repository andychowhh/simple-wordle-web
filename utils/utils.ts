import { wordCompareResult } from "@/constants/wordCompareResult";

import { WordCompareResultType } from "@/types/types";

export const wordCompare = (
  input: Array<string>,
  target: string
): Array<WordCompareResultType> => {
  let matchedArr: Array<any> = [];
  let includedArr: Array<any> = [];

  let result: Array<any> = [];
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
    return;
  });
  // use targetArr to control the word which is already handled
  let targetArr: Array<string | null> = target.split("");
  // if matched, remove the element from the targetArr based on its index, and push it to result[]
  matchedArr.map((matched) => {
    let index = matched.index;
    if (targetArr[index] !== null) {
      result.push({
        character: matched.character,
        result: wordCompareResult.characterMatched,
        index: matched.index,
      });
      targetArr[index] = null;
    }
  });
  // console.log("targetArr", targetArr);
  // console.log("result", result);
  // if included, remove the element in targetArr after locating its index
  includedArr.map((included) => {
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
  console.log("targetArr", targetArr);
  console.log("result", result);

  let filteredResult = input.map((ele: string, i: number) => {
    let obj = {
      character: ele,
    };
    let charResult = result.find((resultItem) => {
      return resultItem.index === i;
    });
    let formattedCharResult = charResult
      ? charResult.result
      : wordCompareResult.characterNotIncluded;

    return {
      ...obj,
      result: formattedCharResult,
    };
  });
  return filteredResult;
};
