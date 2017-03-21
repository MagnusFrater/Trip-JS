/**
 * Rectangle object constructor.
 *
 * @method Rectangle
 *
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
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

	this.draw = function (fill) {
		
	}

	this.collideUp = function (rect) {
		return rectCollideUp(this, rect);
	}

	this.collideDown = function (rect) {
		return rectCollideDown(this, rect);
	}

	this.collideLeft = function (rect) {
		return rectCollideLeft(this, rect);
	}

	this.collideRight = function (rect) {
		return rectCollideRight(this, rect);
	}

	this.intersects = function (rect) {
		return rectIntersects(this, rect);
	}
}
