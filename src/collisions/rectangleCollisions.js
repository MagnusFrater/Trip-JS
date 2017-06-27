/**
 * Checks for a collision between Rectangles one step in the future.
 *
 * @method rectCollideUp
 *
 * @param {Rectangle} rect1 - primary Rectangle
 * @param {Rectangle} rect2 - secondary Rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function rectCollideUp (rect1, rect2, step) {
	return collideUp(rect1.top(), rect2.bottom(), step);
}

/**
 * Checks for a collision between Rectangles one step in the future.
 *
 * @method rectCollideDown
 *
 * @param {Rectangle} rect1 - primary Rectangle
 * @param {Rectangle} rect2 - secondary Rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function rectCollideDown (rect1, rect2, step) {
	return collideDown(rect1.bottom(), rect2.top(), step);
}

/**
 * Checks for a collision between Rectangles one step in the future.
 *
 * @method rectCollideLeft
 *
 * @param {Rectangle} rect1 - primary Rectangle
 * @param {Rectangle} rect2 - secondary Rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function rectCollideLeft (rect1, rect2, step) {
	return collideLeft(rect1.left(), rect2.right(), step);
}

/**
 * Checks for a collision between Rectangles one step in the future.
 *
 * @method rectCollideRight
 *
 * @param {Rectangle} rect1 - primary Rectangle
 * @param {Rectangle} rect2 - secondary Rectangle
 * @param {number} step - number of pixels to look ahead for a collision
 *
 * @return {boolean} true if collision imminent, false if otherwise
 */
function rectCollideRight (rect1, rect2, step) {
	return collideRight(rect1.right(), rect2.left(), step);
}

/**
 * Checks if two Rectangles intersect with each other.
 *
 * @method rectIntersects
 *
 * @param {Rectangle} rect1 - primary Rectangle
 * @param {Rectangle} rect2 - secondary Rectangle
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
function rectIntersects (rect1, rect2) {
	// TODO
}