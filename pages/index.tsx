import React, { useState, useRef } from "react";

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

const Home: NextPage = () => {
  const [inputValues, setInputValues] = useState<Array<InputValueType>>([
    { id: 0, value: [], isFlipped: false, status: [], isInvalid: false },
    { id: 1, value: [], isFlipped: false, status: [], isInvalid: false },
    { id: 2, value: [], isFlipped: false, status: [], isInvalid: false },
    { id: 3, value: [], isFlipped: false, status: [], isInvalid: false },
    { id: 4, value: [], isFlipped: false, status: [], isInvalid: false },
    { id: 5, value: [], isFlipped: false, status: [], isInvalid: false },
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
        {[...Array(6)].map((_, index) => {
          return <InputGroup key={index} inputValue={inputValues[index]} />;
        })}
      </div>
      <KeyBoard keyboardRef={keyboardRef} onKeyPress={onKeyPress} />
    </>
  );
};

export default Home;
