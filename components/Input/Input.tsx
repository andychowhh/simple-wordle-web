import React from "react";
import ReactCardFlip from "react-card-flip";

import { wordCompareResult } from "@/constants/wordCompareResult";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
  status: string;
  isFlipped: boolean;
};

function Input(props: InputPropType): JSX.Element {
  const { value, status, isFlipped } = props;
  const inputFlippedClass =
    status === wordCompareResult.characterMatched
      ? styles.input__matched
      : status === wordCompareResult.characterIncluded
      ? styles.input__matched
      : styles.input__not__included;
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <input
        type="text"
        maxLength={1}
        className={styles.input}
        defaultValue={value}
      />
      <input
        type="text"
        maxLength={1}
        className={`${styles.input} ${inputFlippedClass}`}
        defaultValue={value}
      />
    </ReactCardFlip>
  );
}

export default Input;
