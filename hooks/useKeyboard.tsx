import React, { useState, useRef } from "react";

type InputValueType = {
  id: number;
  value: string;
};

function useKeyboard(currentRow: number) {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);
  const keyboardRef: any = useRef(null);

  const onChangeInput = (event: string): void => {
    const inputValuesTemp = [...inputValues];
    if (inputValuesTemp[currentRow].value.length < 5) {
      inputValuesTemp[currentRow]["value"] = event;
      setInputValues(inputValuesTemp);
    }
  };

  const onKeyPress = (button: string) => {
    if (button === "{bksp}") {
      const inputValuesTemp = [...inputValues];
      let currentRowValue = inputValuesTemp[currentRow]["value"];
      if (currentRowValue.length > 0) {
        let updatedInputValuesTemp = currentRowValue.slice(0, -1);
        inputValuesTemp[currentRow]["value"] = updatedInputValuesTemp;
        setInputValues(inputValuesTemp);
      }
    }
  };

  return [inputValues, keyboardRef, onChangeInput, onKeyPress];
}

export default useKeyboard;
