import { act, render, screen } from "@testing-library/react";
import Output from "./Output";
import userEvent from "@testing-library/user-event";

test("renders heading element with text 'the test component'", () => {
  render(<Output />);

  const headingElement = screen.getByText(/the test component/i);

  expect(headingElement).toBeInTheDocument();
});

test("renders 'toggle is false' when the button is NOT clicked", () => {
  render(<Output />);

  //   const pElement = screen.getByText(/toggle is false/, { exact: false });

  //   expect(pElement).toBeInTheDocument();

  const pElement = screen.queryByText(/toggle is false/, { exact: true });

  expect(pElement).not.toBeNull();
});

test("does NOT renders 'toggle is true' when the button is NOT clicked", () => {
  render(<Output />);

  const pElement = screen.queryByText(/toggle is true/, { exact: false });

  expect(pElement).toBeNull();
});

test("renders 'toggle is true' when the button is clcked", async () => {
  render(<Output />);

  const btnElement = screen.getByRole("button");

  act(() => {
    userEvent.click(btnElement);
  });

  const pElement = await screen.findByText(/toggle is true/);

  expect(pElement).not.toBeNull();
});

test("does not render 'toggle is false' when the button is clicked", () => {
  render(<Output />);

  const btnElement = screen.getByRole("button");

  act(() => {
    userEvent.click(btnElement);
  });

  const pElement = screen.queryByText(/toggle is false/, { exact: false });

  expect(pElement).not.toBeInTheDocument();
});
