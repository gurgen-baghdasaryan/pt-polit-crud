import React from "react";
import { shallow } from "enzyme";
import Politic from "./Politic";

describe("Politic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Politic />);
    expect(wrapper).toMatchSnapshot();
  });
});
