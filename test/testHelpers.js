import ReactDOM from "react-dom";
import ReactTestRendererShallow from "react-test-renderer/shallow";

export function renderShallow(component) {
    const renderer = ReactTestRendererShallow.createRenderer();
    renderer.render(component);
    return renderer.getRenderOutput();
}

export function renderIntoDocument(component, root = document.createElement("div")) {
    return ReactDOM.render(component, root);
}
