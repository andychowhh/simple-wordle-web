import React, { useState } from "react";
import OtpInput from "react-otp-input";

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
    />
  );
}

export default InputGroup;
