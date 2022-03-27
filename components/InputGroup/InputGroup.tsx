import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";

import Input from "@/components/Input/Input";

import { InputValueType } from "@/types/types";

import inputGroupStyles from "./input-group.module.scss";

type InputGroupPropType = {
  inputValue: InputValueType;
};

function InputGroup({ inputValue }: InputGroupPropType) {
  const [styles, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const numOfLoop: React.MutableRefObject<number> = useRef(0);

  useEffect(() => {
    if (inputValue.isInvalid) {
      toast(inputValue.errorMessage, {
        style: {
          backgroundColor: "black",
          color: "#ffffff",
          width: "auto",
          whiteSpace: "nowrap",
        },
      });
      api.start({
        to: [{ x: -3 }, { x: 3 }, { x: 0 }],
        loop: () => 3 > numOfLoop.current++,
        config: { duration: 50 },
      });
      numOfLoop.current = 0;
    }
  }, [inputValue]);

  return (
    <animated.div
      className={inputGroupStyles.input__group}
      arial-label="input-group"
      style={{ ...styles }}
    >
      {[...Array(5)].map((_, index) => {
        return (
          <Input
            key={index}
            value={inputValue["value"][index]}
            status={inputValue["status"][index]?.result}
            isFlipped={inputValue["isFlipped"]}
          />
        );
      })}
    </animated.div>
  );
}

export default InputGroup;
