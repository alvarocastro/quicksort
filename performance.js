const qs = require('.');

/**
 * Create an array with random elements, sort it and profile its time.
 * @param  {number} c Number of elements to generate.
 * @param  {[type]} n Number of test run.
 */
const perfTest = function (c, n) {
	const d = [];
	for (let i = 0; i < c; i++) {
		d.push((Math.random() * 2) - 1);
	}

	let start;
	let end;
	process.stdout.write(`#${n} - ${c} numbers\n`);
	start = Date.now();
	qs(d);
	end = Date.now();
	process.stdout.write(`> Quicksort: ${end - start}ms\n`);

	start = Date.now();
	d.sort();
	end = Date.now();
	process.stdout.write(`> Array.sort: ${end - start}ms\n`);
};

process.stdout.write('Sorting random numbers generated in the range [-1,1]:\n');
let n = 0;
for (let i = 10; i <= 1000000; i *= 10) {
	n++;
	perfTest(i, n);
}
