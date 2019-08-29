const {comparatorAscending, pickMiddleValue} = require('./utils');

const qs = function (arr, compare = comparatorAscending, getPivot = pickMiddleValue) {
	if (arr.length < 2) {
		return arr;
	}

	const pivot = getPivot(arr);
	const left = [];
	const equal = [];
	const right = [];

	for (const el of arr) {
		const r = compare(el, pivot);
		if (r < 0) {
			left.push(el);
		} else if (r > 0) {
			right.push(el);
		} else {
			equal.push(el);
		}
	}

	return qs(left, compare, getPivot)
		.concat(equal)
		.concat(qs(right, compare, getPivot));
};

module.exports = qs;
