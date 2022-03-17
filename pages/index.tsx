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
import "@/styles/Home.module.scss";

const Home: NextPage = () => {
  const [currentRow, setCurrentRow] = useState<number>(0);

  const selectedWord = useRandomWord();
  const [inputValues, keyboardRef, onKeyPress] = useKeyboard(
    currentRow,
    selectedWord
  );

  return (
    <div className="container">
      <InputGroup inputValues={inputValues} currentRow={currentRow} />
      <KeyBoard
        keyboardRef={keyboardRef}
        onKeyPress={onKeyPress}
        onChange={() => {}}
      />
    </div>
  );
};

export default Home;
