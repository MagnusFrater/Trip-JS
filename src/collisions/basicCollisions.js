/**
 * Checks for a collision one step in the future.
 *
 * @method collideUp
 *
 * @param {number} primaryTop - y-coordinate of primary object's upper bound
 * @param {number} secondaryBottom - y-coordinate of secondary object's lower bound
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function collideUp (primaryTop, secondaryBottom, step) {
	step = Math.abs(step);

	if (primaryTop - step < secondaryBottom) {
		return true;
	}

	return false;
}

/**
 * Checks for a collision one step in the future.
 *
 * @method collideDown
 *
 * @param {number} primaryBottom - y-coordinate of primary object's lower bound
 * @param {number} secondaryTop - y-coordinate of secondary object's upper bound
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function collideDown (primaryBottom, secondaryTop, step) {
	step = Math.abs(step);

	if (primaryBottom + step > secondaryTop) {
		return true;
	}

	return false;
}

/**
 * Checks for a collision one step in the future.
 *
 * @method collideLeft
 *
 * @param {number} primaryLeft - x-coordinate of primary object's left bound
 * @param {number} secondaryRight - x-coordinate of secondary object's right bound
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function collideLeft (primaryLeft, secondaryRight, step) {
	step = Math.abs(step);

	if (primaryLeft - step < secondaryRight) {
		return true;
	}

	return false;
}

/**
 * Checks for a collision one step in the future.
 *
 * @method collideRight
 *
 * @param {number} primaryRight - x-coordinate of primary object's right bound
 * @param {number} secondaryLeft - x-coordinate of secondary object's left bound
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function collideRight (primaryRight, secondaryLeft, step) {
	step = Math.abs(step);

	if (primaryRight + step > secondaryLeft) {
		return true;
	}

	return false;
}