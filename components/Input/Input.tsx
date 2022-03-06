import React, { useState } from "react";
import OtpInput from "react-otp-input";

import styles from "./input.module.scss";

type InputPropType = {
  id: number;
  value: string;
  setValue: (event: string) => void;
};

function Input(props: InputPropType): JSX.Element {
  const { id, value, setValue } = props;
  const inputFocus = (elmnt: any): void => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next: number = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next: number = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  return (
    <input
      type="text"
      maxLength={1}
      tabIndex={id}
      className={styles.input}
      onKeyUp={(e) => {
        inputFocus(e);
      }}
    />
  );
}

export default Input;
