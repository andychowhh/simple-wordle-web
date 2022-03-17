import React from "react";
import Input from "@/components/Input/Input";

import { InputValueType } from "@/types/types";

import styles from "./input-group.module.scss";

type InputGroupPropType = {
  inputValues: Array<InputValueType>;
  currentRow: number;
};

function InputGroup({ inputValues, currentRow }: InputGroupPropType) {
  const inputValue: InputValueType = inputValues[currentRow];
  return (
    <div className={styles.input__group}>
      {[1, 2, 3, 4, 5].map((input, key) => {
        return (
          <Input
            key={key}
            value={inputValue["value"][key]}
            status={inputValue["status"][key]}
            isFlipped={inputValue["isFlipped"]}
          />
        );
      })}
    </div>
  );
}

export default InputGroup;
