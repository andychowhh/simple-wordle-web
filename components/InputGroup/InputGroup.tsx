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
  const numOfLoop = useRef(0);

  useEffect(() => {
    if (inputValue.isInvalid) {
      toast("Not in word list", {
        style: {
          backgroundColor: "black",
          color: "#ffffff",
          width: "150px",
          height: "30px",
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
