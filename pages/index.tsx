import React, { useState, useRef } from "react";

import type { NextPage } from "next";

// Components
import KeyBoard from "@/components/Keyboard/keyboard";
import InputGroup from "@/components/InputGroup/InputGroup";

// Containers
import ToastContainer from "@/containers/ToastContainer/ToastContainer";

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
  const [inputValues, setInputValues] = useState<InputValueType[]>(
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
    <ToastContainer>
      <div id={styles.home}>
        <div className={styles.input__group__container}>
          {inputValues.map((inputValue: InputValueType) => (
            <InputGroup key={inputValue.id} inputValue={inputValue} />
          ))}
        </div>
        <KeyBoard
          wordResults={wordResults}
          keyboardRef={keyboardRef}
          onKeyPress={onKeyPress}
        />
      </div>
    </ToastContainer>
  );
};

export default Home;
