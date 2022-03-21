import React, { FunctionComponent, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import { KEYBOARD_KEYS } from "@/constants/keyboardKeys";

import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onKeyPress: any;
  keyboardRef: MutableRefObject<any>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onKeyPress,
  keyboardRef,
}) => {
  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName="default"
      onKeyPress={onKeyPress}
      maxLength={5}
      layout={KEYBOARD_KEYS}
    />
  );
};

export default KeyboardWrapper;
