export const wordCompare = (input: string, target: string): Array<string> => {
  let result: Array<string> = input
    .split("")
    .map((letter: string, i: number) => {
      let targetArr: Array<string> = target.split("");
      if (targetArr[i] === letter) return "Matched";
      if (targetArr.includes(letter)) return "Included";
      return "Not Matched";
    });
  return result;
};
