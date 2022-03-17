import React, { useState } from "react";

import type { NextPage } from "next";

// Components
import Input from "@/components/Input/Input";
import KeyBoard from "@/components/Keyboard/keyboard";
import InputGroup from "@/components/InputGroup/InputGroup";

// Hooks
import useKeyboard from "@/hooks/useKeyboard";
import useRandomWord from "@/hooks/useRandomWord";

// Styles
import styles from "@/styles/Home.module.scss";

const Home: NextPage = () => {

  const selectedWord = useRandomWord();
  const [inputValues, currentRow, keyboardRef, onKeyPress] = useKeyboard(selectedWord);

  return (
    <>
      <div className={styles.input__group__container}>
        {[...Array(6)].map((_, index) => {
          return (
            <InputGroup
              key={index}
              inputValue={inputValues[index]}
            />
          );
        })}
      </div>
      <KeyBoard
        keyboardRef={keyboardRef}
        onKeyPress={onKeyPress}
        onChange={() => {}}
      />
    </>
  );
};

export default Home;
