import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: any;
  onKeyPress: any;
  keyboardRef: MutableRefObject<any>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  onKeyPress,
  keyboardRef,
}) => {
  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName="default"
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength={5}
    />
  );
};

export default KeyboardWrapper;
