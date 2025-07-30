/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== 'number') return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== 'number') return NaN;
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  if (typeof n !== 'number') return null;
  if (n <= 0) return [];

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  return arr;

  // return [...Array(n).keys()].map((i) => i + 1);
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let currentLongest = '';

  for (let i of strings) {
    if (i.length > currentLongest.length) {
      currentLongest = i;
    }
  }

  return currentLongest;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  return attendance.reduce(
    (numPresent, student) => numPresent + Number(student),
    0
  );
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if (typeof dna !== 'string') return null;

  let complement = '';

  dna.split('').forEach((sym) => {
    if (sym === 'A') {
      complement += 'T';
    } else if (sym === 'T') {
      complement += 'A';
    } else if (sym === 'C') {
      complement += 'G';
    } else if (sym === 'G') {
      complement += 'C';
    }
  });

  return complement;
}
