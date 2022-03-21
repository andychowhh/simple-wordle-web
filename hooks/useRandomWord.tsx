import React, { useState, useEffect } from "react";
import { WORDS } from "@/constants/wordList";

// use to generate random word from wordList
function useRandomWord() {
  const [word, setWord] = useState<string>("");
  useEffect(() => {
    let wordFilteredByLength: Array<string> = WORDS.filter(
      (word: string) => word.length === 5
    );
    let randomWord: string = wordFilteredByLength[
      Math.floor(Math.random() * wordFilteredByLength.length)
    ].toUpperCase();
    setWord(randomWord);
  }, []);

  return word;
}

export default useRandomWord;
