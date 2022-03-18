import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

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
    />
  );
};

export default KeyboardWrapper;
