import React, { useState, useEffect, useRef, ChangeEvent } from "react";

import type { NextPage } from "next";

import Input from "@/components/Input/Input";
import KeyBoard from "@/components/Keyboard/keyboard";

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
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const keyboard: any = useRef(null);

  const onChangeInput = (event: string): void => {
    const inputValuesTemp = [...inputValues];
    console.log(inputValuesTemp);
    console.log(keyboard);
    if (inputValuesTemp[currentRow].value.length < 5) {
      inputValuesTemp[currentRow]["value"] = event;
      setInputValues(inputValuesTemp);
    }
  };

  return (
    <div className="container">
      <InputGroup inputValues={inputValues} />
      <KeyBoard keyboardRef={keyboard} onChange={onChangeInput} />
    </div>
  );
};

export default Home;
