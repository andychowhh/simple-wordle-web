import React, { useState } from "react";

import type { NextPage } from "next";

import Input from "@/components/Input/Input";

import "@/styles/Home.module.scss";

type InputValueType = {
  id: number;
  value: string;
};

const InputGroup = (): JSX.Element => {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);
  let numOfInputs: number = 5;
  var rows: Array<any> = [];
  for (let i = 0; i < numOfInputs; i++) {
    let inputValue: InputValueType = inputValues[i];
    rows.push(
      <Input
        key={inputValue.id}
        value={inputValue.value}
        setValue={(event: string) => {
          let inputValuesTemp = [...inputValues];
          inputValuesTemp[i]["value"] = event;
          setInputValues(inputValuesTemp);
        }}
      />
    );
  }
  return <>{rows}</>;
};

const Home: NextPage = () => {
  return (
    <div className="container">
      <InputGroup />
    </div>
  );
};

export default Home;
