const {comparatorAscending, pickMiddleValue} = require('./utils');

const qs = function (array, compare = comparatorAscending, getPivot = pickMiddleValue) {
	if (array.length < 2) {
		return array;
	}

	const pivot = getPivot(array);
	const left = [];
	const equal = [];
	const right = [];

	for (const element of array) {
		const r = compare(element, pivot);
		if (r < 0) {
			left.push(element);
		} else if (r > 0) {
			right.push(element);
		} else {
			equal.push(element);
		}
	}

	return qs(left, compare, getPivot)
		.concat(equal)
		.concat(qs(right, compare, getPivot));
};

module.exports = qs;
