import { wordCompareResult } from "@/constants/wordCompareResult";

export type InputPropType = {
  value: string;
  status: wordCompareResult | undefined;
  isFlipped: boolean;
};
