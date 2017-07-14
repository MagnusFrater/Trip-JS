/**
 * Fills TripGameCanvasContext with a specified color.
 *
 * @method clearGameScreen
 * 
 * @param {color} color - color
 */
function clearGameScreen (color) {
	TripGameCanvasContext.fillStyle = color;
	TripGameCanvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Matchs TripGameCanvas's size to the window's size.
 *
 * @method setGameCanvasFullcreen
 */
function setGameCanvasFullscreen () {
    // TripGameCanvas.width = window.innerWidth;
	// TripGameCanvas.height = window.innerHeight;

	// TripGameCanvas.style.width = "100%";
	// TripGameCanvas.style.height = "100%";

	document.body.style.margin = 0;
	document.body.style.padding = 0;
	TripGameCanvas.style.width = "100%";
	TripGameCanvas.style.height = "100%";
}

/**
 * Resizes TripGameCanvas to a specified size.
 *
 * @method resizeGameCanvas
 * 
 * @param {number} width - new width
 * @param {number} height - new height
 */
function resizeGameCanvas (width, height) {
	//TripGameCanvas.width = width;
	//TripGameCanvas.height = height;
	TripGameCanvas.style.width = width;
	TripGameCanvas.style.height = height;
}