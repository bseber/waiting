import React from "react";
import ReactTestRendererShallow from "react-test-renderer/shallow";
import App from "../app";

describe("App", () => {
    it("renders", () => {
        const tree = renderShallow(<App />);
        expect(tree).toMatchSnapshot();
    });
});

function renderShallow(component) {
    const renderer = ReactTestRendererShallow.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}
