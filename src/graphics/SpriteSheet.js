/**
 * SpriteSheet object constructor.
 *
 * @method SpriteSheet
 *
 * @param {Image} img - image source
 * @param {number} tileSize - size of each Sprite tile
 */
function SpriteSheet (img, tileSize) {
    this.img = img;
    this.tileSize = tileSize;
}

/**
 * Returns a Sprite from a specified tile.
 *
 * @method SpriteSheet.getSprite
 *
 * @param {Rectangle} rect - other Rectangle
 * @param {number} step - number of pixels towards target to check
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
SpriteSheet.prototype.getSprite = function (tileX, tileY) {
    // TODO
}