import React, { useState, Dispatch, SetStateAction } from "react";

import { WORDS } from "@/constants/wordList";

import { wordCompare } from "@/utils/utils";

import { InputValueType } from "@/types/types";

function useKeyboard(
  selectedWord: string,
  inputValues: Array<InputValueType>,
  setInputValues: Dispatch<SetStateAction<Array<InputValueType>>>
) {
  const [currentRow, setCurrentRow] = useState<number>(0);

  const onKeyPress = (button: string): void => {
    var english: RegExp = /^[a-z]*$/;
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
        let input: string = currentRowValue.join("");
        const isInputValid = WORDS.includes(input);
        if (isInputValid) {
          let currentRowValueTemp = currentRowValue;
          let result = wordCompare(currentRowValueTemp, selectedWord);
          inputValuesTemp[currentRow]["status"] = result;
          console.log(result);
          inputValuesTemp[currentRow]["isFlipped"] = true;
          console.log(inputValuesTemp);
          setInputValues(inputValuesTemp);
          setCurrentRow((x) => x + 1);
        } else {
          console.log("Invalid Word");
          inputValuesTemp[currentRow]["isInvalid"] = true;
          setInputValues(inputValuesTemp);
        }
      } else {
        console.log("Not enough letters");
      }
    }
  };

  return [inputValues, onKeyPress];
}

export default useKeyboard;
