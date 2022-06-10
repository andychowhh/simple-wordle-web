import React, { useState, Dispatch, SetStateAction } from "react";

import { WORDS } from "@/constants/wordList";

import { wordCompare } from "@/utils/utils";

import {
  WordResultType,
  WordCompareResultType,
  InputValueType,
} from "@/types/types";

import { wordCompareResult } from "@/constants/wordCompareResult";
import { TOTAL_NUM_OF_ROW } from "@/constants/variables";

import { showToast } from "@/containers/ToastContainer/ToastContainer";

const DEFAULT_WORD_RESULTS = [
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
];

function useKeyboard(
  selectedWord: string,
  inputValues: InputValueType[],
  setInputValues: Dispatch<SetStateAction<InputValueType[]>>
) {
  const [currentRow, setCurrentRow] = useState<number>(0);
  // store wordResults for key color
  const [wordResults, setWordResults] =
    useState<WordResultType[]>(DEFAULT_WORD_RESULTS);

  // executes when the input is invalid, e.g. Not enough letter/Not in word list
  const setInputValuesToInvalid = (
    inputValues: InputValueType[],
    errorMsg: string
  ): void => {
    const temp = inputValues.map((inputValue) => {
      if (inputValue.id === currentRow) {
        return {
          ...inputValue,
          isInvalid: true,
          errorMessage: errorMsg,
        };
      }
      return inputValue;
    });
    setInputValues(temp);
  };

  const onKeyPress = (button: string): void => {
    let inputValuesTemp = [...inputValues];
    // currentRow === -1 means the game ends
    if (currentRow !== -1) {
      const currentRowValue = inputValuesTemp[currentRow]["value"];
      if (button === "{bksp}") {
        if (currentRowValue.length > 0) {
          const updatedInputValuesTemp = currentRowValue.slice(0, -1);
          inputValuesTemp[currentRow]["value"] = updatedInputValuesTemp;
          setInputValues(inputValuesTemp);
        }
      } else if (button === "{enter}") {
        if (currentRowValue.length === 5) {
          console.log(selectedWord);
          // check if the input is a valid word
          const input = currentRowValue.join("").toLowerCase();
          const isInputValid = WORDS.includes(input);
          if (isInputValid) {
            const currentRowValueTemp = currentRowValue;
            const results = wordCompare(currentRowValueTemp, selectedWord);
            // store the result and send it to Keyboard for the buttonTheme
            let wordResultsTemp = [...wordResults];
            results.map((result: WordCompareResultType) => {
              const isCharOnMatched = wordResultsTemp[0]["characters"].includes(
                result.character
              );
              const isCharOnIncluded = wordResultsTemp[1][
                "characters"
              ].includes(result.character);
              const isCharOnNotIncluded = wordResultsTemp[2][
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
            const wordResultsTempWithSpace = wordResultsTemp.map(
              (wordResult: WordResultType) => {
                return {
                  ...wordResult,
                  characters: wordResult.characters,
                };
              }
            );

            inputValuesTemp[currentRow]["status"] = results;
            inputValuesTemp[currentRow]["isFlipped"] = true;
            setWordResults(wordResultsTempWithSpace);
            setInputValues(inputValuesTemp);

            // check if all result are matched
            const isCorrectGuess = !results.some(
              (result) => result.result !== wordCompareResult.characterMatched
            );
            if (isCorrectGuess) {
              showToast("Great");
              setCurrentRow(-1);
            } else {
              const totalNumOfRows = TOTAL_NUM_OF_ROW;
              if (currentRow === totalNumOfRows - 1) {
                // users've used all chances -> show answer
                showToast(selectedWord);
                setCurrentRow(-1);
              } else {
                setCurrentRow((x) => x + 1);
              }
            }
          } else {
            // Not in word list
            setInputValuesToInvalid(inputValuesTemp, "Not in word list");
          }
        } else {
          // Not Enough Letter
          setInputValuesToInvalid(inputValuesTemp, "Not enough letter");
        }
      } else {
        if (currentRowValue.length < 5) {
          inputValuesTemp[currentRow]["value"].push(button);
          setInputValues(inputValuesTemp);
        }
      }
    }
  };

  return { wordResults, onKeyPress };
}

export default useKeyboard;
