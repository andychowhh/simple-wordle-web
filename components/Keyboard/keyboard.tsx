import React, { FunctionComponent, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import { KEYBOARD_KEYS } from "@/constants/keyboardKeys";

import { WordResultType } from "@/types/types";

import keyboardStyle from "./keyboard.module.scss";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  wordResults: Array<WordResultType>;
  onKeyPress: any;
  keyboardRef: MutableRefObject<any>;
}

export type ButtonThemeType = {
  class: string;
  buttons: string;
};

const KeyboardWrapper: FunctionComponent<IProps> = ({
  wordResults,
  onKeyPress,
  keyboardRef,
}) => {
  let buttonTheme: Array<any> = wordResults
    .map((wordResult: WordResultType) => {
      if (Boolean(wordResult.characters)) {
        let theme: ButtonThemeType | undefined = undefined;
        switch (wordResult.status) {
          case "matched":
            theme = {
              class: keyboardStyle.keyboard__matched,
              buttons: wordResult.characters.split("").join(" "),
            };
            break;
          case "included":
            theme = {
              class: keyboardStyle.keyboard__included,
              buttons: wordResult.characters.split("").join(" "),
            };
            break;
          case "notIncluded":
            theme = {
              class: keyboardStyle.keyboard__not__included,
              buttons: wordResult.characters.split("").join(" "),
            };
          default:
            break;
        }
        return theme;
      }
    })
    .filter((elem: ButtonThemeType | undefined) => elem !== undefined);
  return (
    <div className={keyboardStyle.keyboard__container}>
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        inputPattern="/^[A-Z]*$/"
        layoutName="default"
        onKeyPress={onKeyPress}
        maxLength={5}
        layout={KEYBOARD_KEYS}
        buttonTheme={buttonTheme}
        display={{
          "{enter}": "ENTER",
          "{bksp}": "DELETE",
        }}
      />
    </div>
  );
};

export default KeyboardWrapper;
