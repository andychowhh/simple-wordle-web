import React, { useState } from "react";

import type { NextPage } from "next";

// Components
import Input from "@/components/Input/Input";
import KeyBoard from "@/components/Keyboard/keyboard";

// Hooks
import useKeyboard from "@/hooks/useKeyboard";
import useRandomWord from "@/hooks/useRandomWord";

import "@/styles/Home.module.scss";

type InputValueType = {
  id: number;
  value: string;
};

type InputGroupPropType = {
  inputValues: Array<InputValueType>;
};

const InputGroup = ({ inputValues }: InputGroupPropType): JSX.Element => {
  var rows: Array<any> = [];
  inputValues.map((inputValue: InputValueType) => {
    rows.push(<Input key={inputValue.id} value={inputValue.value} />);
  });
  return <>{rows}</>;
};

const Home: NextPage = () => {
  const [currentRow, setCurrentRow] = useState<number>(0);

  const selectedWord = useRandomWord();
  const [inputValues, keyboardRef, onChangeInput, onKeyPress] = useKeyboard(
    currentRow, selectedWord
  );

  return (
    <div className="container">
      <InputGroup inputValues={inputValues} />
      <KeyBoard
        keyboardRef={keyboardRef}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Home;
