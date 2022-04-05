import { renderHook } from '@testing-library/react-hooks';

import useRandomWord from "@/hooks/useRandomWord";

describe("Test for useRandomWord", () => {
  it("generate a word with length 5", () => {
    const hook = renderHook(() => useRandomWord());
    const word = hook.result.current;
    expect(word.length).toBe(5);
  });
  it("generate a english word", () => {
    const hook = renderHook(() => useRandomWord());
    const word = hook.result.current;
    expect(word).toMatch(/^[A-Z]*$/);
  });
});
