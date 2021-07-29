import { add } from "./index";
import { assert } from "chai";

describe("math", () => {
    it("add", () => {
        assert.equal(3, add(1, 2));
    })
});
