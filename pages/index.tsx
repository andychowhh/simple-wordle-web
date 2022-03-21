import React, { useState, useRef } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import type { NextPage } from "next";

// Components
import KeyBoard from "@/components/Keyboard/keyboard";
import InputGroup from "@/components/InputGroup/InputGroup";

// types
import { InputValueType } from "@/types/types";

// Hooks
import useKeyboard from "@/hooks/useKeyboard";
import useRandomWord from "@/hooks/useRandomWord";

// Styles
import styles from "@/styles/Home.module.scss";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    {
      id: 0,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
    {
      id: 1,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
    {
      id: 2,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
    {
      id: 3,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
    {
      id: 4,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
    {
      id: 5,
      value: [],
      isFlipped: false,
      status: [],
      isInvalid: false,
    },
  ]);
  const keyboardRef: any = useRef(null);

  const selectedWord: string = useRandomWord();
  const [currentRow, onKeyPress] = useKeyboard(
    selectedWord,
    inputValues,
    setInputValues
  );

  return (
    <>
      <div className={styles.input__group__container}>
        {inputValues.map((inputValue: InputValueType) => {
          return <InputGroup key={inputValue.id} inputValue={inputValue} />;
        })}
      </div>
      <KeyBoard keyboardRef={keyboardRef} onKeyPress={onKeyPress} />
      <ToastContainer
        transition={Zoom}
        position="top-center"
        autoClose={200}
        hideProgressBar={true}
        draggable={false}
        closeButton={false}
        style={{
          transform: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          left: "50%",
          right: "50%",
          textAlign: "center",
        }}
      />
    </>
  );
};

export default Home;
