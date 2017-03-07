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
	canvas.addEventListener('mousemove', mouseMoveCallback(evt));
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
	canvas.addEventListener('mousedown', mouseDownCallback(evt));
}

//
// COLLISION DETECTION
//

/**
 * Checks for a collision one step in the future.
 *
 * @method collideUp
 *
 * @param {number} primaryTop - y-coordinate of primary object's upper bound
 * @param {number} secondaryBottom - y-coordinate of secondary object's lower bound
 * @param {number} step - number of pixels to extend primaryTop
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
 * @param {number} step - number of pixels to extend primaryBottom
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
 * @param {number} step - number of pixels to extend primaryLeft
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
 * @param {number} step - number of pixels to extend primaryRight
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
