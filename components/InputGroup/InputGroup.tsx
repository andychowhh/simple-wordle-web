import React from "react";
import Input from "@/components/Input/Input";

import { InputValueType } from "@/types/types";

import styles from "./input-group.module.scss";

type InputGroupPropType = {
  inputValues: Array<InputValueType>;
  currentRow: number;
};

function InputGroup({ inputValues, currentRow }: InputGroupPropType) {
  var inputs = [1, 2, 3, 4, 5];
  return (
    <div className={styles.input__group}>
      {inputs.map((input, key) => {
        return (
          <Input
            key={key}
            value={inputValues[currentRow]["value"][key]}
            status={inputValues[currentRow]["status"][key]}
            isFlipped={inputValues[currentRow]["isFlipped"]}
          />
        );
      })}
    </div>
  );
}

export default InputGroup;
