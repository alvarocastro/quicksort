const test = require('ava');
const {
	comparatorAscending,
	comparatorDescending,
	pickMiddleValue
} = require('./utils');
const qs = require('.');

test('Should sort an array of even length', t => {
	const value = [7, 1, 10, 6, 3, 2, 8, 5, 9, 4];
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	t.deepEqual(qs(value), expected);
});

test('Should sort an array of odd length', t => {
	const value = [5, 1, 7, 8, 2, 3, 6, 9, 4];
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	t.deepEqual(qs(value), expected);
});

test('Should work with an already sorted array', t => {
	const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	t.deepEqual(qs(value), expected);
});

test('Should work with if the array values are all the same', t => {
	const value = [4, 4, 4, 4, 4, 4, 4, 4];
	const expected = [4, 4, 4, 4, 4, 4, 4, 4];

	t.deepEqual(qs(value), expected);
});

test('Should work with an array of one value', t => {
	const value = [4];
	const expected = [4];

	t.deepEqual(qs(value), expected);
});

test('Should work with an empty array', t => {
	const value = [];
	const expected = [];

	t.deepEqual(qs(value), expected);
});

test('Should not sort the array in place', t => {
	const value = [1, 2, 3];

	t.false(qs(value) === value);
});

test('Should work with a custom comparator', t => {
	const value = [
		{order: 3},
		{order: 1},
		{order: 4},
		{order: 2}
	];
	const expected = [
		{order: 1},
		{order: 2},
		{order: 3},
		{order: 4}
	];
	const comparator = function (a, b) {
		if (a.order < b.order) {
			return -1;
		}

		if (a.order > b.order) {
			return 1;
		}

		return 0;
	};

	t.deepEqual(qs(value, comparator), expected);
});

test('Should work with a custom pivot function', t => {
	const value = [5, 2, 4, 1, 4];
	const expected = [1, 2, 4, 4, 5];
	const getPivot = function (array) {
		return array[0];
	};

	t.deepEqual(qs(value, undefined, getPivot), expected);
});

test('Ascending comparator should return -1 when first value is smaller', t => {
	t.true(comparatorAscending(1, 2) === -1);
});

test('Ascending comparator should return 1 when first value is greater', t => {
	t.true(comparatorAscending(2, 1) === 1);
});

test('Ascending comparator should return 0 when values are equal', t => {
	t.true(comparatorAscending(1, 1) === 0);
});

test('Descending comparator should return 1 when first value is smaller', t => {
	t.true(comparatorDescending(2, 1) === -1);
});

test('Descending comparator should return -1 when first value is greater', t => {
	t.true(comparatorDescending(1, 2) === 1);
});

test('Descending comparator should return 0 when values are equal', t => {
	t.true(comparatorDescending(1, 1) === 0);
});

test('Should return the middle value for odd arrays', t => {
	t.true(pickMiddleValue([1, 2, 3, 4, 5]) === 3);
});

test('Should return the middle-right value for even arrays', t => {
	t.true(pickMiddleValue([1, 2, 3, 4, 5, 6]) === 4);
});
