import React from "react";
import ReactCardFlip from "react-card-flip";

import { InputPropType } from "./input.type";

import { wordCompareResult } from "@/constants/wordCompareResult";

import inputStyles from "./input.module.scss";

const FLIP_SPEED = 2;

function Input({ value, status, isFlipped }: InputPropType) {
  const inputFlippedClass =
    status === wordCompareResult.characterMatched
      ? inputStyles.input__matched
      : status === wordCompareResult.characterIncluded
      ? inputStyles.input__included
      : inputStyles.input__not__included;

  const getInputProps = (config: any) => ({
    type: "text",
    maxLength: 1,
    disabled: true,
    defaultValue: value,
    ...config,
  });
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={FLIP_SPEED}
      flipSpeedFrontToBack={FLIP_SPEED}
    >
      <input
        {...getInputProps({
          "aria-label": "input",
          className: inputStyles.input,
        })}
      />
      <input
        {...getInputProps({
          "aria-label": "flipped-input",
          className: `${inputStyles.input} ${inputFlippedClass}`,
        })}
      />
    </ReactCardFlip>
  );
}

export default Input;
