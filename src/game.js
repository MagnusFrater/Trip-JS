/**
 * Initializes the game.
 *
 * @method initGame
 *
 * @param {callback} tickCallback - method that updates all game data
 * @param {callback} renderCallback - method that renders all game data
 * @param {number} desired_ups - desired number of updates-per-second for both tick/render callbacks
 */
function initGame (tickCallback, renderCallback, desired_ups) {
	// create the canvas and canvasContext
	createCanvas();

	// create the game loop for tick and render
	createGameLoop(tickCallback, renderCallback, desired_ups);
}

/**
 * Creates a canvas object and canvasContext.
 *
 * @method createCanvas
 */
function createCanvas (){
	// create canvas, get canvasContext
	canvas = document.createElement("canvas");
	canvasContext = canvas.getContext("2d");

	// add canvas to body
	document.body.appendChild(canvas);
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