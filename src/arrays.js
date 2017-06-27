/**
 * Creates a 2D array.
 *
 * @method create2DArray
 *
 * @param {number} rows - number of rows
 * @param {number} columns - number of columns
 *
 * @return {2DArray} returns a 2D array object
 */
function create2DArray (rows, columns) {
	var arr = new Array(rows);

	for (var i = 0; i < rows; i++) {
		arr[i] = new Array(columns);
	}

	return arr;
}