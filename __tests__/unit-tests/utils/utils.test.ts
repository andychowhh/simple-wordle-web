import { wordCompare } from "@/utils/utils";
import { wordCompareResult } from "@/constants/wordCompareResult";

import { WordCompareResultType } from "@/types/types";

describe("Test for wordCompare", () => {
  it("tests correct input", () => {
    let input: string[] = ["A", "P", "P", "L", "E"];
    let target: string = "APPLE";

    let comparedResult: WordCompareResultType[] = wordCompare(input, target);
    let expectedResult: WordCompareResultType[] = [
      {
        character: "A",
        result: wordCompareResult.characterMatched,
      },
      {
        character: "P",
        result: wordCompareResult.characterMatched,
      },
      {
        character: "P",
        result: wordCompareResult.characterMatched,
      },
      {
        character: "L",
        result: wordCompareResult.characterMatched,
      },
      {
        character: "E",
        result: wordCompareResult.characterMatched,
      },
    ];
    expect(comparedResult).toEqual(expectedResult);
  });
  it("tests partially correct input", () => {
    let input: string[] = ["O", "P", "E", "R", "A"];
    let target: string = "APPLE";

    let comparedResult: WordCompareResultType[] = wordCompare(input, target);
    let expectedResult: WordCompareResultType[] = [
      {
        character: "O",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "P",
        result: wordCompareResult.characterMatched,
      },
      {
        character: "E",
        result: wordCompareResult.characterIncluded,
      },
      {
        character: "R",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "A",
        result: wordCompareResult.characterIncluded,
      },
    ];
    expect(comparedResult).toEqual(expectedResult);
  });
  it("tests totally incorrect input", () => {
    let input: string[] = ["M", "O", "I", "S", "T"];
    let target: string = "APPLE";

    let comparedResult: WordCompareResultType[] = wordCompare(input, target);
    let expectedResult: WordCompareResultType[] = [
      {
        character: "M",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "O",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "I",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "S",
        result: wordCompareResult.characterNotIncluded,
      },
      {
        character: "T",
        result: wordCompareResult.characterNotIncluded,
      },
    ];
    expect(comparedResult).toEqual(expectedResult);
  });
});
