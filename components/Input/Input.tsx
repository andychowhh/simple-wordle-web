import React from "react";
import ReactCardFlip from "react-card-flip";

import styles from "./input.module.scss";

type InputPropType = {
  value: string;
  isFlipped: boolean;
};

function Input(props: InputPropType): JSX.Element {
  const { value, isFlipped } = props;
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={2}
      flipSpeedFrontToBack={2}
    >
      <input type="text" maxLength={1} className={styles.input}/>
      <input type="text" maxLength={1} className={styles.input}/>
    </ReactCardFlip>
  );
}

export default Input;
