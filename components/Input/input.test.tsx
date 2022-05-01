import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

import { InputPropType } from "./input.type";

import { wordCompareResult } from "@/constants/wordCompareResult";

const setup = ({ value, status, isFlipped }: InputPropType) => {
  const utils = render(
    <Input value={value} status={status} isFlipped={isFlipped} />
  );
  const input = utils.getByLabelText(isFlipped ? "flipped-input" : "input");
  return {
    input,
    ...utils,
  };
};

describe("Testing Input component", () => {
  let input: HTMLInputElement;
  beforeEach(() => {
    const props = {
      value: "",
      status: undefined,
      isFlipped: false,
    };
    input = setup(props).input as HTMLInputElement;
  });

  it("should not allow letters to be inputted through keyboard", () => {
    expect(input.value).toBe("");
    userEvent.type(input, "H");
    expect(input.value).toBe("");
  });
  it("should not be focused after clicking", () => {
    userEvent.click(input);
    expect(input).not.toHaveFocus();
  });
});

describe("Testing Input component after flipped", () => {
  // some enzyme ways
  it("test the className when the status is matched", () => {
    const { input } = setup({
      value: "A",
      status: wordCompareResult.characterMatched,
      isFlipped: true,
    });
    expect(input.classList).toContain("input__matched");
  });
  it("test the className when the status is included", () => {
    const { input } = setup({
      value: "A",
      status: wordCompareResult.characterIncluded,
      isFlipped: true,
    });
    expect(input.classList).toContain("input__included");
  });
  it("test the className when the status is notIncluded", () => {
    const { input } = setup({
      value: "A",
      status: wordCompareResult.characterNotIncluded,
      isFlipped: true,
    });
    expect(input.classList).toContain("input__not__included");
  });
});
