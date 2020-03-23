module.exports = {
	comparatorAscending(a, b) {
		if (a < b) {
			return -1;
		}

		if (a > b) {
			return 1;
		}

		return 0;
	},

	comparatorDescending(a, b) {
		if (a > b) {
			return -1;
		}

		if (a < b) {
			return 1;
		}

		return 0;
	},

	pickMiddleValue(array) {
		return array[Math.floor(array.length / 2)];
	}
};
