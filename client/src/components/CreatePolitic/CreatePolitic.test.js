import React from "react";
import { shallow } from "enzyme";
import CreatePolitic from "./CreatePolitic";

describe("CreatePolitic", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreatePolitic />);
    expect(wrapper).toMatchSnapshot();
  });
});
