"use client";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

const renderButton = (disabled: boolean = false) => {
  const spy = vi.fn();
  render(
    <Button
      onClick={spy}
      disabled={disabled}
      className="bg-blue-500 text-white"
    >
      Click
    </Button>
  );
  const button = screen.getByRole("button", { name: "Click" });
  return { spy, button };
};

it("prop으로 받은 className을 버튼의 className으로 적용한다", () => {
  const { button } = renderButton();
  expect(button).toHaveClass("bg-blue-500 text-white");
});

it("버튼을 클릭시 onClick 함수가 실행된다", async () => {
  const { spy, button } = renderButton();
  screen.debug();
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(1);
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(2);
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(3);
});
it("버튼이 disabled 일 경우 클릭해도 onClick 함수가 호출되지 않는다", async () => {
  const { button, spy } = renderButton(true);
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(0);
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(0);
  await userEvent.click(button);
  expect(spy).toHaveBeenCalledTimes(0);
});

it("prop으로 받은 children을 텍스트로 출력한다", () => {
  const { button } = renderButton();
  expect(button).toHaveTextContent("Click");
});
