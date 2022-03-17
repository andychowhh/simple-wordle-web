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
    <input type="text" maxLength={1} className={styles.input} defaultValue={value}/>
    // <ReactCardFlip
    //   isFlipped={isFlipped}
    //   flipSpeedBackToFront={2}
    //   flipSpeedFrontToBack={2}
    // >
    //   <input type="text" maxLength={1} className={styles.input} value={value}/>
    // </ReactCardFlip>
  );
}

export default Input;
