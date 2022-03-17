import React, { useState, useRef } from "react";

import { WORDS } from "@/constants/wordList";

import { wordCompare } from "@/utils/utils";

import { InputValueType } from "@/types/types";

function useKeyboard(selectedWord: string) {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: [], isFlipped: false, status: [] },
    { id: 1, value: [], isFlipped: false, status: [] },
    { id: 2, value: [], isFlipped: false, status: [] },
    { id: 3, value: [], isFlipped: false, status: [] },
    { id: 4, value: [], isFlipped: false, status: [] },
    { id: 5, value: [], isFlipped: false, status: [] },
  ]);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const keyboardRef: any = useRef(null);

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
        }
      } else {
        console.log("Not enough letters");
      }
    }
  };

  return [inputValues, currentRow, keyboardRef, onKeyPress];
}

export default useKeyboard;
