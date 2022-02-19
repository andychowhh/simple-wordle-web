import React, { useState } from "react";
import OtpInput from "react-otp-input";

import styles from "./input-group.module.scss";

function InputGroup() {
  const [value, setValue] = useState<string>("");
  return (
    <OtpInput
      value={value}
      onChange={(e: any) => {
        setValue(e);
      }}
      numInputs={5}
      containerStyle={styles.input__group__container}
      inputStyle={styles.input__group__item}
    />
  );
}

export default InputGroup;
