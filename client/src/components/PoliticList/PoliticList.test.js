import React from "react";
import { shallow } from "enzyme";
import PoliticList from "./PoliticList";

describe("PoliticList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PoliticList />);
    expect(wrapper).toMatchSnapshot();
  });
});
