/**
 * Rectangle object constructor.
 *
 * @method Rectangle
 *
 * @param {Location} location - location of Rectangle's top left corner
 * @param {Size} size - size
 * @param {color} color - color
 */
function Rectangle (location, size, color) {
	this.location = location;
	this.size = size;
	this.color = color;
}

/**
 * Returns Rectangle's top left corner x-coordinate.
 *
 * @method Rectangle.x
 *
 * @return {number} x-coordinate of Rectangle's top left corner
 */
Rectangle.prototype.x = function () {
	return this.location.x;
}

/**
 * Returns Rectangle's top left corner y-coordinate.
 *
 * @method Rectangle.y
 *
 * @return {number} y-coordinate of Rectangle's top left corner
 */
Rectangle.prototype.y = function () {
	return this.location.y;
}

/**
 * Returns Rectangle's width.
 *
 * @method Rectangle.width
 *
 * @return {number} returns Rectangle's width
 */
Rectangle.prototype.width = function () {
	return this.size.width;
}

/**
 * Returns Rectangle's height.
 *
 * @method Rectangle.height
 *
 * @return {number} returns Rectangle's height
 */
Rectangle.prototype.height = function () {
	return this.size.height;
}

/**
 * Returns Rectangle's top bound y-coordinate.
 *
 * @method Rectangle.top
 *
 * @return {number} y-coordinate of Rectangle's top bound
 */
Rectangle.prototype.top = function () {
	return this.location.y;
}

/**
 * Returns Rectangle's bottom bound y-coordinate.
 *
 * @method Rectangle.bottom
 *
 * @return {number} y-coordinate of Rectangle's bottom bound
 */
Rectangle.prototype.bottom = function () {
	return this.location.y + this.size.height;
}

/**
 * Returns Rectangle's left bound x-coordinate.
 *
 * @method Rectangle.left
 *
 * @return {number} x-coordinate of Rectangle's left bound
 */
Rectangle.prototype.left = function () {
	return this.location.x;
}

/**
 * Returns Rectangle's right bound x-coordinate.
 *
 * @method Rectangle.right
 *
 * @return {number} x-coordinate of Rectangle's right bound
 */
Rectangle.prototype.right = function () {
	return this.location.x + this.size.width;
}

/**
 * Checks if this Rectangle collides upwards with another Rectangle.
 *
 * @method Rectangle.collideUp
 *
 * @param {Rectangle} rect - other Rectangle
 * @param {number} step - number of pixels towards target to check
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
Rectangle.prototype.collideUp = function (rect, step) {
	return rectCollideUp(this, rect, step);
}

/**
 * Checks if this Rectangle collides downwards with another Rectangle.
 *
 * @method Rectangle.collideDown
 *
 * @param {Rectangle} rect - other Rectangle
 * @param {number} step - number of pixels towards target to check
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
Rectangle.prototype.collideDown = function (rect, step) {
	return rectCollideDown(this, rect, step);
}

/**
 * Checks if this Rectangle collides leftwards with another Rectangle.
 *
 * @method Rectangle.collideLeft
 *
 * @param {Rectangle} rect - other Rectangle
 * @param {number} step - number of pixels towards target to check
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
Rectangle.prototype.collideLeft = function (rect, step) {
	return rectCollideLeft(this, rect, step);
}

/**
 * Checks if this Rectangle collides rightwards with another Rectangle.
 *
 * @method Rectangle.collideRight
 *
 * @param {Rectangle} rect - other Rectangle
 * @param {number} step - number of pixels towards target to check
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
Rectangle.prototype.collideRight = function (rect, step) {
	return rectCollideRight(this, rect, step);
}

/**
 * Checks if this Rectangle collides with another Rectangle.
 *
 * @method Rectangle.intersects
 *
 * @param {Rectangle} rect - other Rectangle
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
Rectangle.prototype.intersects = function (rect) {
	return rectIntersects(this, rect);
}

/**
 * Moves Rectangle to a given coordinate.
 *
 * @method Rectangle.move
 *
 * @param {number} x - new x-coordinate
 * @param {number} y - new y-coordinate
 */
Rectangle.prototype.move = function (x, y) {
	this.location.x = x;
	this.location.y = y;
}

/**
 * Offsets Rectangle on a given offset.
 *
 * @method Rectangle.traverse
 *
 * @param {number} xOffset - number of pixels to offset the x-coordinate
 * @param {number} yOffset - number of pixels to offset the y-coordinate
 */
Rectangle.prototype.traverse = function (xOffset, yOffset) {
	this.location.x += xOffset;
	this.location.y += yOffset;
}

/**
 * Renders a Rectangle to a given CanvasContext.
 *
 * @method Rectangle.render
 *
 * @param {CanvasContext} canvasContext - CanvasContext
 * @param {boolean} fill - decides whether to fill the drawn Rectangle with its color
 */
Rectangle.prototype.render = function (canvasContext, fill) {
	// TODO
}