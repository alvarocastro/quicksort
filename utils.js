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

	pickMiddleValue(arr) {
		return arr[Math.floor(arr.length / 2)];
	}
};
