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
