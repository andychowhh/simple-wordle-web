import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

const setup = () => {
  let value: string = "";
  let status: undefined = undefined;
  let isFlipped: boolean = false;
  const utils: RenderResult = render(
    <Input value={value} status={status} isFlipped={isFlipped} />
  );
  const input: HTMLElement = utils.getByLabelText("input");
  return {
    input,
    ...utils,
  };
};

describe("Testing Input component", () => {
  it("It should not allow letters to be inputted through keyboard", () => {
    const { input } = setup();
    expect((input as HTMLInputElement).value).toBe("");
    userEvent.type(input, "H");
    expect((input as HTMLInputElement).value).toBe("");
  });
  it("It should be focused after clicking", () => {
    const { input } = setup();
    userEvent.click(input);
    expect(input).not.toHaveFocus();
  })
});
