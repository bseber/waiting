import React from "react";
import { renderShallow, renderIntoDocument } from "../../test/testHelpers";
import Waiting from "../waiting";

jest.useFakeTimers();

describe("Waiting", () => {
    it("renders default", () => {
        const root = document.createElement("div");
        renderIntoDocument(<Waiting />, root);
        expect(root.firstChild).toMatchSnapshot();
    });

    it("renders null for loading=false", () => {
        const tree = renderShallow(<Waiting loading={false} />);
        expect(tree).toBeNull();
    });

    it("does not render loading info when flag is toggled again within a short delay", () => {
        const root = document.createElement("div");

        renderIntoDocument(<Waiting loading={false} render={() => "-1-"} />, root);
        expect(root.textContent).toBe("-1-");

        renderIntoDocument(<Waiting loading={true} render={() => "-2-"} />, root);
        jest.runTimersToTime(99);
        expect(root.textContent).toBe(""); // note: not toBe("loading...")

        renderIntoDocument(<Waiting loading={false} render={() => "-3-"} />, root);
        //jest.runOnlyPendingTimers();
        expect(root.textContent).toBe("-3-");
    });

    it("does not delay rendering when loading flag is toggled to 'false'", () => {
        const root = document.createElement("div");

        renderIntoDocument(<Waiting loading={true} render={() => "-1-"} />, root);
        expect(root.textContent).toBe("loading...");

        renderIntoDocument(<Waiting loading={false} render={() => "-2-"} />, root);
        // no "jest.runTimersToTime(99);" on purpose
        // since loading info should be removed at once
        expect(root.textContent).toBe("-2-");
    });

    it("invokes render property to render content", () => {
        const root = document.createElement("div");
        renderIntoDocument(
            <Waiting
                loading={false}
                render={() => (
                    <ul>
                        <li>bruce</li>
                        <li>clark</li>
                    </ul>
                )}
            />,
            root,
        );
        expect(root.firstChild).toMatchSnapshot();
    });

    it("invokes prop.render on component update even when loading flag has not been toggled", () => {
        const root = document.createElement("div");

        renderIntoDocument(<Waiting loading={false} render={() => "my first data"} />, root);
        expect(root.textContent).toBe("my first data");

        renderIntoDocument(<Waiting loading={false} render={() => "my second data"} />, root);
        expect(root.textContent).toBe("my second data");
    });
});
