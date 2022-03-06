import React, { useState, useEffect } from "react";

import type { NextPage } from "next";

import InputGroup from "@/components/InputGroup/InputGroup";

import "@/styles/Home.module.scss";

type InputValueType = {
  id: number;
  value: string;
};

const Home: NextPage = () => {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);

  // const InputGroup = (): JSX.Element => {
  //   let numOfInputs: number = 5;
  //   var rows: Array<any> = [];
  //   for (var i = 0; i < numOfInputs; i++) {
  //     let inputValue: InputValueType = inputValues[i];
  //     rows.push(
  //       <Input
  //         key={inputValue.id}
  //         value={inputValue.value}
  //         setValue={(event:string) => {
  //           let inputValuesTemp = inputValues;
  //           inputValuesTemp[i]["value"] += event;
  //           console.log(inputValuesTemp)
  //           setInputValues(inputValuesTemp);
  //         }}
  //       />
  //     );
  //   }
  //   return <>{rows}</>;
  // };

  return (
    <div className="container">
      <InputGroup />
    </div>
  );
};

export default Home;
