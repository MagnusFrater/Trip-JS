/**
 * Checks for a collision one step in the future.
 *
 * @method collideUp
 *
 * @param {number} primaryTop - y-coordinate of primary object's upper bound
 * @param {number} secondaryBottom - y-coordinate of secondary object's lower bound
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {bool} true if collision imminent, false if otherwise
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
 * @return {bool} true if collision imminent, false if otherwise
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
 * @return {bool} true if collision imminent, false if otherwise
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
 * @return {bool} true if collision imminent, false if otherwise
 */
function collideRight (primaryRight, secondaryLeft, step) {
	step = Math.abs(step);

	if (primaryRight + step > secondaryLeft) {
		return true;
	}

	return false;
}

/**
 * Checks for a collision between rectangles one step in the future.
 *
 * @method rectCollideUp
 *
 * @param {Rectangle} rect1 - primary rectangle
 * @param {Rectangle} rect2 - secondary rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {bool} true if collision imminent, false if otherwise
 */
function rectCollideUp (rect1, rect2, step) {
	return collideUp(rect1.y, rect2.bottom, step);
}

/**
 * Checks for a collision between rectangles one step in the future.
 *
 * @method rectCollideDown
 *
 * @param {Rectangle} rect1 - primary rectangle
 * @param {Rectangle} rect2 - secondary rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {bool} true if collision imminent, false if otherwise
 */
function rectCollideDown (rect1, rect2, step) {
	return collideDown(rect1.bottom, rect2.y, step);
}

/**
 * Checks for a collision between rectangles one step in the future.
 *
 * @method rectCollideLeft
 *
 * @param {Rectangle} rect1 - primary rectangle
 * @param {Rectangle} rect2 - secondary rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {bool} true if collision imminent, false if otherwise
 */
function rectCollideLeft (rect1, rect2, step) {
	return collideLeft(rect1.x, rect2.right, step);
}

/**
 * Checks for a collision between rectangles one step in the future.
 *
 * @method rectCollideRight
 *
 * @param {Rectangle} rect1 - primary rectangle
 * @param {Rectangle} rect2 - secondary rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {bool} true if collision imminent, false if otherwise
 */
function rectCollideRight (rect1, rect2, step) {
	return collideRight(rect1.right, rect2.x, step);
}

/**
 * Checks if two Rectangles intersect with each other.
 *
 * @method rectIntersects
 *
 * @param {Rectangle} rect1 - primary rectangle
 * @param {Rectangle} rect2 - secondary rectangle
 *
 * @return {bool} true if intersection exists, false if otherwise
 */
function rectIntersects (rect1, rect2) {
	
}