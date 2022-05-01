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

// Styles
import styles from "@/styles/home.module.scss";
import "react-toastify/dist/ReactToastify.css";

// Utils
import { generateRandomWord } from "@/utils/utils";

import { TOTAL_NUM_OF_ROW } from "@/constants/variables";

const selectedWord = generateRandomWord();

const Home: NextPage = () => {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>(
    [...Array(TOTAL_NUM_OF_ROW)].map((_, index) => {
      return {
        id: index,
        value: [],
        isFlipped: false,
        status: [],
        isInvalid: false,
        errorMessage: "",
      };
    })
  );
  const keyboardRef = useRef(null);

  const { wordResults, onKeyPress } = useKeyboard(
    selectedWord,
    inputValues,
    setInputValues
  );

  return (
    <>
      <div id={styles.home}>
        <div className={styles.input__group__container}>
          {inputValues.map((inputValue: InputValueType) => {
            return <InputGroup key={inputValue.id} inputValue={inputValue} />;
          })}
        </div>
        <KeyBoard
          wordResults={wordResults}
          keyboardRef={keyboardRef}
          onKeyPress={onKeyPress}
        />
      </div>
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
          fontWeight: "700",
        }}
      />
    </>
  );
};

export default Home;
