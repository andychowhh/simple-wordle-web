import { render } from "@testing-library/react";

import ToastContainer from "@/containers/ToastContainer/ToastContainer";

import ComponentMock from "../../__mocks__/componentMock";

describe("ToastContainer", () => {
  test("should include className toast-container", () => {
    const { container } = render(
      <ToastContainer>
        <ComponentMock />
      </ToastContainer>
    );

    expect(container.firstChild).toHaveClass("toast-container");
  });
});
