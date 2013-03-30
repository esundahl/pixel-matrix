

/**
 * Dependencies
 */

var Pixels = require('./lib/pixels');


/**
 * Matrix constructor
 * @param {Number} x Number of pixels on the x axis
 * @param {Number} y Number of pixels on the y axis
 * @param {Number} size Pixel size
 * @api public
 */

function Matrix (x, y, size) {

	this.canvas = document.createElement('canvas');
 	this.ctx = this.canvas.getContext('2d');
 	this.pixels = [];

	this.canvas.width = x * size;
	this.canvas.height = x * size;

	for (var i = 0; i < (x * y); i++) {
		var pX = i % x;
		var pY = Math.floor(i / x);
	  this.pixels.push({
	  	ctx: this.ctx,
	  	x: pX,
	  	y: pY,
	  	index: i,
	  	size: size
	  });
	}

	return this;
}


/**
 * Returns the canvas element
 * @return {HTMLCanvasElement}
 * @api public
 */

Matrix.prototype.el = function () {
	return this.canvas;
}


/**
 * Returns all pixels
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Matrix.prototype.all = function () {
	return new Pixels(this.pixels, this.ctx);
}

/**
 * Returns the pixel at index or x, y coordinates
 *
 * @param {Number} x
 * @param {TyNumberpe} y
 * @return {Type}
 * @api public
 */

Matrix.prototype.at = function (x, y) {
	if (y) {
	  return new Pixels([this.pixels[x + (y * this.y)]]);
	}
	return new Pixels([this.pixels[x]], this.ctx);
}


/**
 * Returns pixels in the given row 
 *
 * @param {Type} index
 * @return {Type}
 * @api public
 */

Matrix.prototype.row = function (row) {
	var result = this.pixels.filter(function (pixel, i) {
		return pixel.y === row;
	}, this);
	return new Pixels(result, this.ctx);
}


/**
 * Returns pixels in the given column
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Matrix.prototype.column = function (column) {
	var result = this.pixels.filter(function (pixel, i) {
		return pixel.x === column;
	}, this);
	return new Pixels(result, this.ctx);
}


/**
 * Exports
 */

module.exports = Matrix;