/**
 * Returns a random integer.
 *
 * @method getRandInt
 *
 * @param {number} min - minimum bound for the random number being generated (inclusive)
 * @param {number} max - maximum bound for the random number being generated (inclusive)
 *
 * @return {integer} random number between min (inclusive) and max (inclusive)
 */
function getRandInt (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
