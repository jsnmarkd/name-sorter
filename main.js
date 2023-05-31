const fs = require('fs');
const { nameSorter } =  require('./nameSorter.js');

// Read unsorted names file
const unsortedNames = fs.readFileSync(process.argv[2], "utf-8");

// Sort the names by lastname
const sortedNames = nameSorter(unsortedNames);

// Log the sorted names to the console
console.log(sortedNames);

// Write the sorted names to a file
fs.writeFileSync('sorted-names-list.txt', sortedNames);