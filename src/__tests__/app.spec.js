import React from "react";
import { renderShallow, renderIntoDocument } from "../../test/testHelpers";
import ReactDOM from "react-dom";
import ReactTestUtils, { Simulate } from "react-dom/test-utils";
import App from "../app";
import Waiting from "../waiting";

jest.useFakeTimers();

describe("App", () => {
    it("renders", () => {
        const tree = renderShallow(<App />);
        expect(tree).toMatchSnapshot();
    });

    it("renders fetching state", () => {
        const root = document.createElement("div");
        const tree = renderIntoDocument(<App />, root);
        const waiting = ReactTestUtils.findRenderedComponentWithType(tree, Waiting);

        expect(waiting.props.loading).toBe(false);

        const button = root.querySelector("button");
        Simulate.click(button);

        expect(waiting.props.loading).toBe(true);

        jest.runAllTimers();
        expect(waiting.props.loading).toBe(false);
    });
});
