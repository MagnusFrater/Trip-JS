/**
 * Returns an image resource from a given resource path.
 *
 * @method getImage
 *
 * @param {string} assetsPath - path to an image resource folder
 * @param {string} fileName - image file's name (with file extension)
 *
 * @return {boolean} true if intersection exists, false if otherwise
 */
function getImage (assetsPath, fileName) {
	const img = new Image();
	img.src = assetsPath + fileName;
	return img;
}