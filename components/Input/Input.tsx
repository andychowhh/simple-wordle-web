import React from "react";
import ReactCardFlip from "react-card-flip";

import { wordCompareResult } from "@/constants/wordCompareResult";

import inputStyles from "./input.module.scss";

type InputPropType = {
  value: string;
  status: string | undefined;
  isFlipped: boolean;
};

function Input(props: InputPropType): JSX.Element {
  const { value, status, isFlipped } = props;
  const inputFlippedClass: string =
    status === wordCompareResult.characterMatched
      ? inputStyles.input__matched
      : status === wordCompareResult.characterIncluded
      ? inputStyles.input__included
      : inputStyles.input__not__included;
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <input
        type="text"
        maxLength={1}
        className={inputStyles.input}
        defaultValue={value}
        disabled={true}
      />
      <input
        type="text"
        maxLength={1}
        className={`${inputStyles.input} ${inputFlippedClass}`}
        defaultValue={value}
        disabled={true}
      />
    </ReactCardFlip>
  );
}

export default Input;
