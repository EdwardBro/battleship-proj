import checkBoundaries from "./utils/checkBoundaries";
import createGrid from "./utils/createGrid";

describe("Boundaries", () => {
  it("checkBundaries should return false", () => {
    expect(checkBoundaries([[0, 0]], 2, 3)).toBeFalsy();
  });
});

describe("arrayContaining", () => {
  const expected = createGrid(10, 10);
  it("should return array with 10 rows", () => {
    expect(expected.length).toEqual(10);
  });
  it("should return array with 10 colls", () => {
    expect(expected[0].length).toEqual(10);
  });
});
