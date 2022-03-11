import React, { useState, useEffect } from "react";
import { WORDS } from "@/constants/wordList";

function useRandomWord() {
  const [word, setWord] = useState<string>("");
  useEffect(() => {
    let wordFilteredByLength: Array<string> = WORDS.filter(
      (word: string) => word.length === 5
    );
    let randomWord =
      wordFilteredByLength[
        Math.floor(Math.random() * wordFilteredByLength.length)
      ];
    setWord(randomWord);
  }, []);

  return [word];
}

export default useRandomWord;
