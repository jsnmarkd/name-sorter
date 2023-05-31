const nameSorter = (unsortedNames) => {
  const namesArray = unsortedNames.split("\n");

  const sortedNames = namesArray.sort((a, b) => {
    const nameA = a.split(" ");
    const nameB = b.split(" ");

    const lastNameA = nameA[nameA.length - 1];
    const lastNameB = nameB[nameB.length - 1];
    if (lastNameA > lastNameB) return 1;
    if (lastNameA < lastNameB) return -1;

    const givenNamesA = nameA.slice(0, nameA.length - 1);
    const givenNamesB = nameB.slice(0, nameB.length - 1);

    return givenNamesA.join(" ").localeCompare(givenNamesB.join(" "));
  });

  return sortedNames.join('\n');
};

console.log(nameSorter(`Janet Parsons
Vaughn Lewis
Adonis Julius Archer
Shelby Nathan Yoder
Marin Alvarez
London Lindsey
Beau Tristan Bentley
Leo Gardner
Hunter Uriah Mathew Clarke
Mikayla Lopez
Frankie Conner Ritter`));
