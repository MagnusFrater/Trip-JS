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
 * @param {Canvas} canvas - html Canvas element
 */
function setCanvasFullscreen (canvas) {
    canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}