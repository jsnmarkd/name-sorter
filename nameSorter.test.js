const { nameSorter } = require("./nameSorter.js");

describe("nameSorter", () => {
  it("should sort names by lastname correctly", () => {
    const unsortedNames = `Janet Parsons
Vaughn Lewis
Adonis Julius Archer
Shelby Nathan Yoder
Marin Alvarez
London Lindsey
Beau Tristan Bentley
Leo Gardner
Hunter Uriah Mathew Clarke
Mikayla Lopez
Frankie Conner Ritter`;

    const expectedSortedNames = `Marin Alvarez
Adonis Julius Archer
Beau Tristan Bentley
Hunter Uriah Mathew Clarke
Leo Gardner
Vaughn Lewis
London Lindsey
Mikayla Lopez
Janet Parsons
Frankie Conner Ritter
Shelby Nathan Yoder`;

    const sortedNames = nameSorter(unsortedNames);

    expect(sortedNames).toMatch(expectedSortedNames);
  });
});
