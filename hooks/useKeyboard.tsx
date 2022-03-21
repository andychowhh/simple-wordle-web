import React, { useState, Dispatch, SetStateAction } from "react";

import { WORDS } from "@/constants/wordList";

import { wordCompare } from "@/utils/utils";

import { InputValueType } from "@/types/types";
import {WordCompareResultType} from "@/utils/utils";

function useKeyboard(
  selectedWord: string,
  inputValues: Array<InputValueType>,
  setInputValues: Dispatch<SetStateAction<Array<InputValueType>>>
) {
  const [currentRow, setCurrentRow] = useState<number>(0);
  // store wordResults for key color
  const [wordResults, setWordResults] = useState<Array<any>>([
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
        let updatedInputValuesTemp = currentRowValue.slice(0, -1);
        inputValuesTemp[currentRow]["value"] = updatedInputValuesTemp;
        setInputValues(inputValuesTemp);
      }
    } else if (button === "{enter}") {
      if (currentRowValue.length === 5) {
        console.log(selectedWord);
        // check if the input is a valid word
        let input: string = currentRowValue.join("").toLowerCase();
        const isInputValid = WORDS.includes(input);
        if (isInputValid) {
          let currentRowValueTemp = currentRowValue;
          let result: Array<WordCompareResultType> = wordCompare(
            currentRowValueTemp,
            selectedWord
          );
          console.log(result)
          inputValuesTemp[currentRow]["status"] = result;
          inputValuesTemp[currentRow]["isFlipped"] = true;
          setInputValues(inputValuesTemp);
          setCurrentRow((x) => x + 1);
        } else {
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

  return [inputValues, onKeyPress];
}

export default useKeyboard;
