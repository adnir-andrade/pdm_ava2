import React from "react";
import { render } from "@testing-library/react-native";
import FormInput from "../FormInput";

describe("<FormInput />", () => {
  it("renders placeholder correctly", () => {
    const { getByPlaceholderText } = render(
      <FormInput placeholder="I am a poor wayfaring stranger" />
    );
    expect(getByPlaceholderText("I am a poor wayfaring stranger")).toBeTruthy();
  });

  it("displays the label correctly", () => {
    const { getByText } = render(<FormInput label="Username" />);
    expect(getByText("Username")).toBeTruthy();
  });
});
