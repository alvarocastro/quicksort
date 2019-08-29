# Quicksort
[![NPM](https://img.shields.io/npm/v/@alvarocastro/quicksort.svg)](https://www.npmjs.com/package/@alvarocastro/quicksort)
[![Build Status](https://travis-ci.org/alvarocastro/quicksort.svg?branch=master)](https://travis-ci.org/alvarocastro/quicksort)
[![codebeat badge](https://codebeat.co/badges/155a70c2-4faa-4adc-b4fd-228fd86f3e43)](https://codebeat.co/projects/github-com-alvarocastro-quicksort-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/quicksort/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/quicksort?branch=master)

Yet another implementation of quicksort in JavaScript aimed to be flexible, lightweight and fast.

- [Install](#install)
- [Usage](#usage)
- [Randomness](#random-number-generation)

## Install

```bash
npm install @alvarocastro/quicksort
```

## Usage

```js
const sort = require('@alvarocastro/quicksort');

const elements = [8, -1, 3, 0.5, 200];
sort(elements);
// => [-1, 0.5, 3, 8, 200]
```

### sort(elements[, compare[, getPivot]])

Returns a new sorted array based on the `compare` function criteria.

#### elements

Type: `Array`

List of elements to sort.

#### compare

Type: `Function`
Default: `[comparatorAscending](blob/master/utils.js#L2)`

The function to use to compare two elements and find their sorting order.
The expected return of the function is:
* `-1` to sort the element to the left.
* `1` to sort the element to the right.
* `0` when the elements are the same, no sorting is made.

A descending function is also provided in [utils.js](blob/master/utils.js).

#### getPivot

Type: `Function`
Default: `[pickMiddleValue](blob/master/utils.js#L20)`

The function to use to pick a _pivot_ value from the array.
The expected return of the function is one element from the array being sorted.
