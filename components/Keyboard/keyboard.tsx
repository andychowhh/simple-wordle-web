import React, { FunctionComponent, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import { KEYBOARD_KEYS } from "@/constants/keyboardKeys";

import keyboardStyle from "./keyboard.module.scss";
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
      buttonTheme={[
        {
          class: keyboardStyle.keyboard__matched,
          buttons: "Q W E R T Y q w e r t y",
        },
        {
          class: keyboardStyle.keyboard__included,
          buttons: "Q q",
        },
        {
          class: keyboardStyle.keyboard__not__included,
          buttons: "a",
        },
      ]}
    />
  );
};

export default KeyboardWrapper;
