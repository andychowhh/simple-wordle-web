import React, { useState } from "react";
import OtpInput from "react-otp-input";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
  setValue: (event: string) => void;
};

function Input(props: InputPropType): JSX.Element {
  const { value, setValue } = props;
  return (
    <OtpInput
      value={value}
      onChange={(e: string) => {
        setValue(e);
      }}
      numInputs={5}
      containerStyle={styles.input__container}
      inputStyle={styles.input__item}
      data-testid={`input`}
    />
  );
}

export default Input;
