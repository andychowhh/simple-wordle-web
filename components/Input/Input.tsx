import React from "react";
import OtpInput from "react-otp-input";
import ReactCardFlip from "react-card-flip";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
  isFlipped: boolean;
};

const OtpInputComponent = ({ value }: { value: string }) => {
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
};

function Input(props: InputPropType): JSX.Element {
  const { value, isFlipped } = props;
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <OtpInputComponent value={value} />
      <OtpInputComponent value={value} />
    </ReactCardFlip>
  );
}

export default Input;
