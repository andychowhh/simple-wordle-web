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
  const [layoutName, setLayoutName] = useState("default");

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
    />
  );
};

export default KeyboardWrapper;
