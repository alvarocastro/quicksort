const qs = require('./index');

/**
 * Create an array with random elements, sort it and profile its time.
 */
const perfTest = function (count, testNumber) {
  const d = [];
  for (let i = 0; i < count; i++) {
    d.push(Math.random() * 2 - 1);
  }

  process.stdout.write(`#${testNumber} - ${count} numbers`);
  const start = +new Date();
  const res = qs(d);
  const end = +new Date();
  process.stdout.write(`: ${end - start}ms\n`);
};

process.stdout.write('Sorting random numbers generated in the range [-1,1]:\n');
let n = 0;
for (let i = 1; i <= 1000000; i *= 10) {
  n++;
  perfTest(i, n);
}
