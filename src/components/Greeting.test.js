import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('should render "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElem = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElem).toBeInTheDocument();
  });

  test('should render "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);
    const outputEl = screen.getByText("Hello World", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });

  test('should render "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    // Assert
    const outputEl = screen.getByText("Changed!");
    expect(outputEl).toBeInTheDocument();
  });

  test('should not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    // Assert
    const outputEl = screen.queryByText("good to see you", { exact: false });
    // expect(outputEl).not.toBeInTheDocument();
    expect(outputEl).toBeNull();
  });
});
