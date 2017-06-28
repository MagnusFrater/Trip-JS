/**
 * Sprite object constructor.
 *
 * @method Sprite
 *
 * @param {Location} sourceLocation - coordinate of top-left corner of sprite from within given spritesheet
 * @param {Size} sourceSize - size of sprite from within given spritesheet
 */
function Sprite (sourceLocation, sourceSize) {
    this.sourceLocation = sourceLocation;
    this.sourceSize = sourceSize;
}