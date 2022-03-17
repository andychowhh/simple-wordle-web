import React, { useState, useRef } from "react";
import { wordCompare } from "@/utils/utils";

import { InputValueType } from "@/types/types";

function useKeyboard(currentRow: number, selectedWord: string) {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: [], isFlipped: false, status: "" },
    { id: 1, value: [], isFlipped: false, status: "" },
    { id: 2, value: [], isFlipped: false, status: "" },
    { id: 3, value: [], isFlipped: false, status: "" },
    { id: 4, value: [], isFlipped: false, status: "" },
  ]);
  const keyboardRef: any = useRef(null);

  const onKeyPress = (button: string) => {
    var english = /^[a-z]*$/;
    const inputValuesTemp = [...inputValues];
    let currentRowValue = inputValuesTemp[currentRow]["value"];
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
        let currentRowValueTemp = currentRowValue;
        let result = wordCompare(currentRowValueTemp, selectedWord);
        inputValuesTemp.map((inputValue: InputValueType, i: number) => {
          inputValuesTemp[i]["status"] = result[i];
        });
        console.log(result);
        inputValuesTemp[currentRow]["isFlipped"] = true;
        setInputValues(inputValuesTemp);
      } else {
        console.log("Not enough letters");
      }
    }
  };

  return [inputValues, keyboardRef, onKeyPress];
}

export default useKeyboard;
