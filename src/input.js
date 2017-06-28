/**
 * Attaches the 'mousemove' event to a specified callback.
 *
 * @method addMouseMoveHandler
 *
 * @param {callback} mouseMoveCallback - callback that handles the 'mousemove' event
 */
function addMouseMoveHandler (mouseMoveCallback) {
	TripGameCanvas.addEventListener('mousemove', mouseMoveCallback(e));
}

 /**
 * Attaches the 'mousedown' event to a specified callback.
 *
 * @method addMouseDownHandler
 *
 * @param {callback} mouseDownCallback - callback that handles the 'mousedown' event
 */
function addMouseDownHandler (mouseDownCallback) {
	TripGameCanvas.addEventListener('mousedown', mouseDownCallback(e));
}

/**
 * Attaches the 'mouseup' event to a specified callback.
 *
 * @method addMouseUpHandler
 *
 * @param {callback} mouseUpCallback - callback that handles the 'mouseup' event
 */
function addMouseUpHandler (mouseUpCallback) {
	TripGameCanvas.addEventListener('mouseup', mouseUpCallback(e));
}

/**
 * Attaches the 'keydown' event to a specified callback.
 *
 * @method addKeyDownHandler
 *
 * @param {callback} keyDownHandler - callback that handles the 'keydown' event
 */
function addKeyDownHandler (keyDownHandler) {
	TripGameCanvas.addEventListener('keydown', keyDownHandler(e));
}

/**
 * Attaches the 'keyup' event to a specified callback.
 *
 * @method addKeyUpHandler
 *
 * @param {callback} keyUpHandler - callback that handles the 'keyup' event
 */
function addKeyUpHandler (keyUpHandler) {
	TripGameCanvas.addEventListener('keyup', keyUpHandler(e));
}

/**
 * Attaches the 'touchmove' event to a specified callback.
 *
 * @method addTouchMoveHandler
 *
 * @param {callback} touchMoveHandler - callback that handles the 'touchmove' event
 */
function addTouchMoveHandler (touchMoveHandler) {
	TripGameCanvas.addEventListener('touchmove', touchMoveHandler(e));
}

/**
 * Attaches the 'touchstart' event to a specified callback.
 *
 * @method addTouchStartHandler
 *
 * @param {callback} touchStartHandler - callback that handles the 'touchstart' event
 */
function addTouchStartHandler (touchStartHandler) {
	TripGameCanvas.addEventListener('touchstart', touchStartHandler(e));
}

/**
 * Attaches the 'touchend' event to a specified callback.
 *
 * @method addTouchEndHandler
 *
 * @param {callback} touchEndHandler - callback that handles the 'touchend' event
 */
function addTouchEndHandler (touchEndHandler) {
	TripGameCanvas.addEventListener('touchend', touchEndHandler(e));
}
