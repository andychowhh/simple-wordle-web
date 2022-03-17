import React from "react";
import Input from "@/components/Input/Input";

import { InputValueType } from "@/types/types";

import styles from "./input-group.module.scss";

type InputGroupPropType = {
  inputValue: InputValueType;
};

function InputGroup({ inputValue }: InputGroupPropType) {
  return (
    <div className={styles.input__group}>
      {[...Array(5)].map((_, index) => {
        return (
          <Input
            key={index}
            value={inputValue["value"][index]}
            status={inputValue["status"][index]}
            isFlipped={inputValue["isFlipped"]}
          />
        );
      })}
    </div>
  );
}

export default InputGroup;
