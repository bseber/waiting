import React from "react";
import { renderShallow, renderIntoDocument } from "../../test/testHelpers";
import Waiting from "../waiting";

jest.useFakeTimers();

describe("Waiting", () => {
    it("renders default", () => {
        const tree = renderShallow(<Waiting />);
        expect(tree).toMatchSnapshot();
    });

    it("renders null for loading=false", () => {
        const tree = renderShallow(<Waiting loading={false} />);
        expect(tree).toBeNull();
    });

    it("does not render loading info when flag is toggled again within a short delay", () => {
        const root = document.createElement("div");

        renderIntoDocument(<Waiting loading={false} />, root);
        expect(root.textContent).toBe("");

        renderIntoDocument(<Waiting loading={true} />, root);
        jest.runTimersToTime(99);
        expect(root.textContent).toBe("");

        renderIntoDocument(<Waiting loading={false} />, root);
        jest.runOnlyPendingTimers();
        expect(root.textContent).toBe("");
    });

    it("does not delay rendering when loading flag is toggled to 'false'", () => {
        const root = document.createElement("div");

        renderIntoDocument(<Waiting loading={true} />, root);
        expect(root.textContent).toBe("loading...");

        renderIntoDocument(<Waiting loading={false} />, root);
        // no "jest.runTimersToTime(99);" on purpose
        // since loading info should be removed at once
        expect(root.textContent).toBe("");
    });
});
