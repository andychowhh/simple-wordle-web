import React, { useState } from "react";
import {PinInput, PinInputField} from "@chakra-ui/react";
import InputField from "../InputField/InputField"

function InputFieldGroup() {
//   const [value, setValue] = useState<string>("");
  return (
    <PinInput>
        <InputField/>
        <InputField/>
    </PinInput>
  );
}

export default InputFieldGroup;
