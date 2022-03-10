import React from "react";
import OtpInput from "react-otp-input";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
};

function Input(props: InputPropType): JSX.Element {
  const { value } = props;
  return (
    <OtpInput
      value={value}
      numInputs={5}
      containerStyle={styles.input__container}
      inputStyle={styles.input__item}
      data-testid={`input`}
      isDisabled={true}
    />
  );
}

export default Input;
