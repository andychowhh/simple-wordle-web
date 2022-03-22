import React, { useState, Dispatch, SetStateAction } from "react";

import { WORDS } from "@/constants/wordList";

import { wordCompare } from "@/utils/utils";

import {
  WordResultType,
  WordCompareResultType,
  InputValueType,
} from "@/types/types";

import { wordCompareResult } from "@/constants/wordCompareResult";

function useKeyboard(
  selectedWord: string,
  inputValues: Array<InputValueType>,
  setInputValues: Dispatch<SetStateAction<Array<InputValueType>>>
) {
  const [currentRow, setCurrentRow] = useState<number>(0);
  // store wordResults for key color
  const [wordResults, setWordResults] = useState<Array<WordResultType>>([
    {
      status: "matched",
      characters: "",
    },
    {
      status: "included",
      characters: "",
    },
    {
      status: "notIncluded",
      characters: "",
    },
  ]);

  const onKeyPress = (button: string): void => {
    var english: RegExp = /^[A-Z]*$/;
    const inputValuesTemp: Array<InputValueType> = [...inputValues];
    let currentRowValue: Array<string> = inputValuesTemp[currentRow]["value"];
    if (english.test(button)) {
      if (currentRowValue.length < 5) {
        inputValuesTemp[currentRow]["value"].push(button);
        setInputValues(inputValuesTemp);
      }
    } else if (button === "{bksp}") {
      if (currentRowValue.length > 0) {
        let updatedInputValuesTemp: Array<string> = currentRowValue.slice(
          0,
          -1
        );
        inputValuesTemp[currentRow]["value"] = updatedInputValuesTemp;
        setInputValues(inputValuesTemp);
      }
    } else if (button === "{enter}") {
      if (currentRowValue.length === 5) {
        console.log(selectedWord);
        // check if the input is a valid word
        let input: string = currentRowValue.join("").toLowerCase();
        const isInputValid: boolean = WORDS.includes(input);
        if (isInputValid) {
          let currentRowValueTemp: Array<string> = currentRowValue;
          let results: Array<WordCompareResultType> = wordCompare(
            currentRowValueTemp,
            selectedWord
          );
          // store the result and send it to Keyboard for the buttonTheme
          let wordResultsTemp: Array<WordResultType> = [...wordResults];
          results.map((result: WordCompareResultType) => {
            const isCharOnMatched: boolean = wordResultsTemp[0][
              "characters"
            ].includes(result.character);
            const isCharOnIncluded: boolean = wordResultsTemp[1][
              "characters"
            ].includes(result.character);
            const isCharOnNotIncluded: boolean = wordResultsTemp[2][
              "characters"
            ].includes(result.character);

            switch (result.result) {
              // if wordResultsTemp[1]/wordResultsTemp[2] includes the char, remove it, and then add the char in wordResultsTemp[0].
              case wordCompareResult.characterMatched:
                if (!isCharOnMatched) {
                  if (isCharOnIncluded) {
                    wordResultsTemp[1]["characters"] = wordResultsTemp[1][
                      "characters"
                    ].replace(result.character, "");
                  } else if (isCharOnNotIncluded) {
                    wordResultsTemp[2]["characters"] = wordResultsTemp[2][
                      "characters"
                    ].replace(result.character, "");
                  }
                  wordResultsTemp[0]["characters"] += result.character;
                }
                break;
              // if wordResultsTemp[0] includes the char, remove it from arr and then add it to wordResultsTemp[1]
              case wordCompareResult.characterIncluded:
                if (!isCharOnMatched && !isCharOnIncluded) {
                  if (isCharOnNotIncluded) {
                    wordResultsTemp[0]["characters"] = wordResultsTemp[0][
                      "characters"
                    ].replace(result.character, "");
                  }
                  wordResultsTemp[1]["characters"] += result.character;
                }
                break;
              // if wordResultsTemp[0]/wordResultsTemp[1] does not include the char, add it to wordResultsTemp[2]
              case wordCompareResult.characterNotIncluded:
                if (
                  !isCharOnMatched &&
                  !isCharOnIncluded &&
                  !isCharOnNotIncluded
                ) {
                  wordResultsTemp[2]["characters"] += result.character;
                }
                break;
              default:
                break;
            }
          });
          let wordResultsTempWithSpace: Array<WordResultType> = wordResultsTemp.map(
            (wordResult: WordResultType) => {
              return {
                ...wordResult,
                characters: wordResult.characters,
              };
            }
          );
          console.log(wordResultsTempWithSpace);
          inputValuesTemp[currentRow]["status"] = results;
          inputValuesTemp[currentRow]["isFlipped"] = true;
          setWordResults(wordResultsTempWithSpace);
          setInputValues(inputValuesTemp);
          setCurrentRow((x) => x + 1);
        } else {
          // The input is invalid(Not a meaningful word)
          let temp = inputValuesTemp.map((inputValue) => {
            if (inputValue.id === currentRow) {
              return {
                ...inputValue,
                isInvalid: true,
              };
            }
            return inputValue;
          });
          setInputValues(temp);
        }
      } else {
        console.log("Not enough letters");
      }
    }
  };

  return [wordResults, onKeyPress];
}

export default useKeyboard;
