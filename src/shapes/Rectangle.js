/**
 * Rectangle object constructor.
 *
 * @method Rectangle
 *
 * @param {number} x - x-coordinate of the rectangle's top left corner
 * @param {number} y - y-coordinate of the rectangle's top left corner
 * @param {number} width - width
 * @param {number} height - height
 * @param {color} color - color
 */
function Rectangle (x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
}

/**
 * Returns Rectangle's right x-coordinate.
 *
 * @method Rectangle.right
 *
 * @return {number} x-coordinate of Rectangle's right side
 */
Rectangle.prototype.right = function () {
	return this.x + this.width;
}

/**
 * Returns Rectangle's bottom y-coordinate.
 *
 * @method Rectangle.bottom
 *
 * @return {number} y-coordinate of Rectangle's bottom side
 */
Rectangle.prototype.bottom = function () {
	return this.y + this.height;
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
	this.x = x;
	this.y = y;
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
	this.x += xOffset;
	this.y += yOffset;
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