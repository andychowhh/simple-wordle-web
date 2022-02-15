import React, { useState } from "react";
import OtpInput from "react-otp-input";

import "./input-group.module.scss"

function InputGroup() {
  const [value, setValue] = useState<string>("");
  return (
    <OtpInput
      value={value}
      onChange={(e: any) => {
        setValue(e);
      }}
      numInputs={5}
      separator={<span>-</span>}
      inputStyle="input__group__item"
    />
  );
}

export default InputGroup;
