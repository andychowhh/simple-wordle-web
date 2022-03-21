import React, { FunctionComponent, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import { KEYBOARD_KEYS } from "@/constants/keyboardKeys";

import keyboardStyle from "./keyboard.module.scss";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  wordResults: any;
  onKeyPress: any;
  keyboardRef: MutableRefObject<any>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  wordResults,
  onKeyPress,
  keyboardRef,
}) => {
  let buttonTheme: Array<any> = wordResults
    .map((wordResult: any) => {
      if (Boolean(wordResult.characters)) {
        if (wordResult.status === "match") {
          return {
            class: keyboardStyle.keyboard__matched,
            buttons: wordResult.characters,
          };
        } else if (wordResult.status === "included") {
          return {
            class: keyboardStyle.keyboard__included,
            buttons: wordResult.characters,
          };
        } else if (wordResult.status === "notIncluded") {
          return {
            class: keyboardStyle.keyboard__not__included,
            buttons: wordResult.characters,
          };
        }
      }
    })
    .filter((elem: any) => elem !== undefined);
  console.log(buttonTheme);
  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName="default"
      onKeyPress={onKeyPress}
      maxLength={5}
      layout={KEYBOARD_KEYS}
      buttonTheme={buttonTheme}
    />
  );
};

export default KeyboardWrapper;
