import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Input from "@/components/Input/Input";

import { InputValueType } from "@/types/types";

import inputGroupStyles from "./input-group.module.scss";

type InputGroupPropType = {
  inputValue: InputValueType;
};

function InputGroup({ inputValue }: InputGroupPropType) {
  const [styles, api] = useSpring(() => ({
    from: { x: -3 },
  }));

  useEffect(() => {
    console.log(inputValue.isInvalid)
    if (inputValue.isInvalid) {
      api({
        x: 3,
        loop: { reverse: true },
      });
    }
  }, [inputValue]);

  return (
    <animated.div
      className={inputGroupStyles.input__group}
      style={{ ...styles }}
    >
      {[...Array(5)].map((_, index) => {
        return (
          <Input
            key={index}
            value={inputValue["value"][index]}
            status={inputValue["status"][index]}
            isFlipped={inputValue["isFlipped"]}
          />
        );
      })}
    </animated.div>
  );
}

export default InputGroup;
