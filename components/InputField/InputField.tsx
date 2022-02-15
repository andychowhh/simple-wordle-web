import React, { useState } from "react";
import { PinInputField } from "@chakra-ui/react";

function InputField() {
  const [value, setValue] = useState<string>("");
  return (
    <PinInputField
      // value={value}
      // onChange={(e) => {
      //   setValue(e.target.value);
      // }}
    />
  );
}

export default InputField;
