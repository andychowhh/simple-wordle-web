import { render, screen } from "@testing-library/react";

import ToastContainer, {
  showToast,
} from "@/containers/ToastContainer/ToastContainer";

import ComponentMock from "../../__mocks__/componentMock";

describe("ToastContainer", () => {
  describe("ToastContainer Component", () => {
    test("should include className toast-container", () => {
      const { container } = render(
        <ToastContainer>
          <ComponentMock />
        </ToastContainer>
      );

      expect(container.firstChild).toHaveClass("toast-container");
      expect(container.firstChild?.firstChild).toHaveClass("Toastify");
    });
  });

  describe("showToast", () => {
    test("should show toast text in the screen", async () => {
      render(
        <ToastContainer>
          <ComponentMock />
        </ToastContainer>
      );

      showToast("Toast Text");
      expect(await screen.findByText("Toast Text")).toBeInTheDocument();
    });
  });
});
