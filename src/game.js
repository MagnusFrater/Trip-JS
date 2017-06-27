/**
 * Initializes the game.
 *
 * @method initGame
 *
 * @param {callback} tickCallback - method that updates all game data
 * @param {callback} renderCallback - method that renders all game data
 * @param {number} desired_ups - desired number of updates-per-second for both tick/render callbacks
 *
 * @return {object} returns an object containing a canvas and canvasContext
 */
function initGame (tickCallback, renderCallback, desired_ups) {
	let canvasMaterials = createCanvas();

	createGameLoop(tickCallback, renderCallback, desired_ups);

	return canvasMaterials;
}

/**
 * Creates a canvas object and canvasContext.
 *
 * @method createCanvas
 *
 * @return {object} returns an object containing a canvas and canvasContext.
 */
function createCanvas (){
	// create canvas, get context
	let canvas = document.createElement("canvas");
	let canvasContext = canvas.getContext("2d");

	// add canvas to body
	document.body.appendChild(canvas);

	return {
		canvas,
		canvasContext
	}
}

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