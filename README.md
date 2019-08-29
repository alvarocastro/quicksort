# Quicksort
[![NPM](https://img.shields.io/npm/v/@alvarocastro/quicksort.svg)](https://www.npmjs.com/package/@alvarocastro/quicksort)
[![Build Status](https://travis-ci.org/alvarocastro/quicksort.svg?branch=master)](https://travis-ci.org/alvarocastro/quicksort)
[![codebeat badge](https://codebeat.co/badges/155a70c2-4faa-4adc-b4fd-228fd86f3e43)](https://codebeat.co/projects/github-com-alvarocastro-quicksort-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/quicksort/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/quicksort?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Yet another implementation of quicksort in JavaScript aimed to be flexible, lightweight and fast.

- [Install](#install)
- [Usage](#usage)
- [Performance](#performance)
- [More examples](#more-examples)

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
Default: [comparatorAscending](utils.js#L2)

The function to use to compare two elements and find their sorting order.
The expected return of the function is:
* `-1` to sort the element to the left.
* `1` to sort the element to the right.
* `0` when the elements are the same, no sorting is made.

A descending function is also provided in [utils.js](utils.js).

#### getPivot

Type: `Function`
Default: [pickMiddleValue](utils.js#L20)

The function to use to pick a _pivot_ value from the array.
The expected return of the function is one element from the array being sorted.

## Performance

Want to test the performance?

Included is the command `npm run performance` that will run a battery of profiled tests for your needs.

## More examples

### Reverse order

```js
const sort = require('@alvarocastro/quicksort');
const {comparatorDescending} = require('@alvarocastro/quicksort/utils');

const elements = [8, -1, 3, 0.5, 200];
sort(elements, comparatorDescending);
// => [200, 8, 3, 0.5, -1]
```

### Custom elements

```js
const sort = require('@alvarocastro/quicksort');

const elements = [
	{name: 'Sarah Connor', firstAppearance: 'The Terminator'},
	{name: 'T-800', firstAppearance: 'The Terminator'},
	{name: 'Kyle Reese', firstAppearance: 'The Terminator'},
	{name: 'John Connor', firstAppearance: 'Terminator 2: Judgement Day'},
	{name: 'T-1000', firstAppearance: 'Terminator 2: Judgement Day'}
];
const comparator = function (a, b) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	}
	return 0;
};
sort(elements, comparator);
// => [
// {name: 'John Connor', firstAppearance: 'Terminator 2: Judgement Day'},
// {name: 'Kyle Reese', firstAppearance: 'The Terminator'},
// {name: 'Sarah Connor', firstAppearance: 'The Terminator'},
// {name: 'T-800', firstAppearance: 'The Terminator'},
// {name: 'T-1000', firstAppearance: 'Terminator 2: Judgement Day'}
// ]
```
