import { render, screen } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";
import { ChangeEvent } from "react";
import React from "react";

const renderInput = () => {
  const spy = vi.fn();
  render(
    <Input
      className="h-20 w-80"
      onChange={spy}
      value="hello"
      placeholder="텍스트를 입력해주세요."
    />
  );
  const input = screen.getByPlaceholderText("텍스트를 입력해주세요.");
  return { spy, input };
};

it("onChange 이벤트가 발생하면 외부 핸들러 onChange 함수가 호출된다", async () => {
  const { spy, input } = renderInput();

  const mockEvent: ChangeEvent<HTMLInputElement> = {
    target: { value: "zz" },
    currentTarget: input,
  } as ChangeEvent<HTMLInputElement>;

  await userEvent.type(input, "zz");
  screen.debug();
  expect(spy).toHaveBeenCalledTimes(2);
  expect(spy).toBeCalledWith("helloz");
});
it("props로 전달받은 className이 input 요소에 적용된다", () => {
  const { input } = renderInput();
  expect(input).toHaveClass("h-20 w-80");
});

it("props로 전달받은 placeholder input 요소에 적용된다", () => {
  const { input } = renderInput();
  expect(input).toBeInTheDocument();
});
