import React, { useState } from "react";
import OtpInput from "react-otp-input";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputPropType): JSX.Element {
  const { value, setValue } = props;
  return (
    <OtpInput
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e);
      }}
      numInputs={5}
      containerStyle={styles.input__container}
      inputStyle={styles.input__item}
    />
  );
}

export default Input;
