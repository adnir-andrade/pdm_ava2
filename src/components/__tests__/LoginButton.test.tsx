import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginButton from "../LoginButton";

describe("<LoginButton />", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<LoginButton />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("passes father's onPress function correctly", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<LoginButton onPress={onPressMock} />);
    const button = getByTestId("login-button");

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
