import checkBoundaries from "./utils/checkBoundaries";
import createGrid from "./utils/createGrid";

test("checkBundaries should return false", () => {
  expect(checkBoundaries()).toBeFalsy();
});

describe("arrayContaining", () => {
  const expected = createGrid();
  it("should return array", () => {
    expect([]).toEqual(expect.arrayContaining(expected));
  });
});
