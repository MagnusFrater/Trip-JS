//
// Trip-JS
// -------
// Basic Javascript game development framework.
//

//
// GAME
//

/**
 * Creates game loop.
 *
 * @method createGameLoop
 * 
 * @param {callback} tickCallback - callback that handles updating all necessary game data
 * @param {callback} renderCallback - callback that handles rendering all necessary game objects
 * @param {integer} desired_ups - describes how many times per second the tick and render callbacks should be called per second
 */
function createGameLoop (tickCallback, renderCallback, desired_ups) {
	setInterval(function () {
		tickCallback();
		renderCallback();
	}, (1000 / desired_ups));
}

//
// INPUT HANDLERS
//

/**
 * Attaches the 'mousemove' event to a specified callback.
 *
 * @method addMouseMoveHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} mouseMoveCallback - callback that handles the 'mousemove' event
 */
function addMouseMoveHandler (canvas, mouseMoveCallback) {
	canvas.addEventListener('mousemove', mouseMoveCallback(e));
}

 /**
 * Attaches the 'mousedown' event to a specified callback.
 *
 * @method addMouseDownHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} mouseDownCallback - callback that handles the 'mousedown' event
 */
function addMouseDownHandler (canvas, mouseDownCallback) {
	canvas.addEventListener('mousedown', mouseDownCallback(e));
}

/**
 * Attaches the 'mouseup' event to a specified callback.
 *
 * @method addMouseUpHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} mouseUpCallback - callback that handles the 'mouseup' event
 */
function addMouseUpHandler (canvas, mouseUpCallback) {
	canvas.addEventListener('mouseup', mouseUpCallback(e));
}

/**
 * Attaches the 'keydown' event to a specified callback.
 *
 * @method addKeyDownHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} keyDownHandler - callback that handles the 'keydown' event
 */
function addKeyDownHandler (canvas, keyDownHandler) {
	canvas.addEventListener('keydown', keyDownHandler(e));
}

/**
 * Attaches the 'keyup' event to a specified callback.
 *
 * @method addKeyUpHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} keyUpHandler - callback that handles the 'keyup' event
 */
function addKeyUpHandler (canvas, keyUpHandler) {
	canvas.addEventListener('keyup', keyUpHandler(e));
}

/**
 * Attaches the 'touchmove' event to a specified callback.
 *
 * @method addTouchMoveHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} touchMoveHandler - callback that handles the 'touchmove' event
 */
function addTouchMoveHandler (canvas, touchMoveHandler) {
	canvas.addEventListener('touchmove', touchMoveHandler(e));
}

/**
 * Attaches the 'touchstart' event to a specified callback.
 *
 * @method addTouchStartHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} touchStartHandler - callback that handles the 'touchstart' event
 */
function addTouchStartHandler (canvas, touchStartHandler) {
	canvas.addEventListener('touchstart', touchStartHandler(e));
}

/**
 * Attaches the 'touchend' event to a specified callback.
 *
 * @method addTouchEndHandler
 *
 * @param {element} canvas - html canvas element
 * @param {callback} touchEndHandler - callback that handles the 'touchend' event
 */
function addTouchEndHandler (canvas, touchEndHandler) {
	canvas.addEventListener('touchend', touchEndHandler(e));
}

//
// COLLISION DETECTION (FLAT-EDGE)
//

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
	return collideUp(rect1.y, rect2.y + rect2.height, step);
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
	return collideDown(rect1.y + rect1.height, rect2.y, step);
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
	return collideLeft(rect1.x, rect2.x + rect2.width, step);
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
	return collideRight(rect1.x + rect1.width, rect2.x, step);
}

//
// RANDOM NUMBER GENERATION
//

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

//
// OBJECTS
//

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
