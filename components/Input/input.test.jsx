import React, { useState } from "react";
import Input from "@/components/Input/Input";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Testing Input component", () => {
  it("renders a Input and show correct value in one single input box", () => {
    const mockSetValue = jest.fn((x) => {});
    render(
      <Input
        value={"b"}
        setValue={(e) => {
          mockSetValue(e);
        }}
      />
    );
    expect(screen.getByTestId("input-0")).toHaveValue("b");
  });

  it("renders a Input and show correct value in all 5 input boxes", () => {
    const mockSetValue = jest.fn((x) => {});
    render(
      <Input
        value={"abcde"}
        setValue={(e) => {
          mockSetValue(e);
        }}
      />
    );
    expect(screen.getByTestId("input-0")).toHaveValue("a");
    expect(screen.getByTestId("input-1")).toHaveValue("b");
    expect(screen.getByTestId("input-2")).toHaveValue("c");
    expect(screen.getByTestId("input-3")).toHaveValue("d");
    expect(screen.getByTestId("input-4")).toHaveValue("e");
  });

});
