// The result type come from WordCompareResult.ts
export type WordCompareResultType = {
  character: string;
  result: string;
};

// Use in Keyboard buttonTheme, store ALL results in terms of key
export type WordResultType = {
  status: string; // matched || included || notIncluded
  characters: string,
}

export type InputValueType = {
  id: number;
  value: Array<string>;
  isFlipped: boolean;
  status: Array<WordCompareResultType>;
  isInvalid: boolean;
};
