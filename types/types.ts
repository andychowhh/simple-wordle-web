export type WordCompareResultType = {
  character: string;
  result: string;
};

export type InputValueType = {
  id: number;
  value: Array<string>;
  isFlipped: boolean;
  status: Array<WordCompareResultType>;
  isInvalid: boolean;
};
