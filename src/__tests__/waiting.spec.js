import React from "react";
import { renderShallow } from "../../test/testHelpers";
import Waiting from "../waiting";

describe("Waiting", () => {
    it("renders default", () => {
        const tree = renderShallow(<Waiting />);
        expect(tree).toMatchSnapshot();
    });

    it("renders null for loading=false", () => {
        const tree = renderShallow(<Waiting loading={false} />);
        expect(tree).toBeNull();
    });
});
