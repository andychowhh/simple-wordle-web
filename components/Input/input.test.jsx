import React, { useState } from "react";
import Input from "@/components/Input/Input";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Testing Input component", () => {
  it("renders a Input and show correct value", () => {
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
});
