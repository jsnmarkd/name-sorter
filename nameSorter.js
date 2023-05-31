/**
 * Returns a string of names sorted by lastname
 *
 * @param {string} unsortedNames - From txt file
 * @returns {string} of sorted names
 */

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

  return sortedNames.join("\n");
};

module.exports = { nameSorter };
