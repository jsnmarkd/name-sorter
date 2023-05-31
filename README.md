<h1 align="center"> Name Sorter </h1>

A command-line tool to sort a list of names by last name. The sorted names are printed to the console and written to a file called <strong>"sorted-names-list.txt"</strong>.

<p align="center">
  • <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#running-tests">Running Tests</a> •
</p>

## Prerequisites

- Node.js installed on your machine. You can download it from the official Node.js website: [Node.js](https://nodejs.org)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in the terminal.

## Usage

1. Prepare a text file (`unsorted-names-list.txt`) containing the list of names you want to sort. Each name should be on a separate line.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:
```sh
npm install
```
4. Run the following command to execute the name sorter program and sort the names:
```sh
node nameSorter.js unsorted-names-list.txt
```
5. The sorted names will be printed to the console, and a file named `sorted-names-list.txt` will be created in the project directory, containing the sorted names.

## Running Tests

To run the unit tests for the name sorter, make sure you have Jest installed globally or locally. If you don't have it installed, you can install it by running:
```sh
npm install --global jest 
or 
npm install --save-dev jest
```

Once Jest is installed, run the following command in the terminal:
```sh
npm test
```
