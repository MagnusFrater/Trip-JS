/**
 * Fills the given canvasContext with a specified color.
 *
 * @method clearScreen
 *
 * @param {CanvasContext} canvasContext - CanvasContext
 * @param {color} color - color
 */
function clearScreen (canvasContext, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Matchs the given canvas's size to the window's size.
 *
 * @method setCanvasFullcreen
 *
 * @param {canvas} canvas - html canvas element
 */
function setCanvasFullscreen (canvas) {
    canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

/**
 * Resizes the given canvas to a specified size.
 *
 * @method resizeCanvas
 *
 * @param {canvas} canvas - html Canvas element
 * @param {number} width - new width (pixels)
 * @param {number} height - new height (pixels)
 */
function resizeCanvas (canvas, width, height) {
	canvas.width = width;
	canvas.height = height;
}