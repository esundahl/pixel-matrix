

/**
 * Constructor
 *
 * @param {Array} array
 * @return {Pixels}
 * @api public
 */

function Pixels (array, ctx) {
	this.ctx = ctx;
	this.pixels = array;
	return this;
}


Pixels.prototype.set = function(color) {

	if (typeof color === 'string') {
		throw 'String colors not yet supported. Try passing an array of rgb values'
	}

	this.pixels.forEach(function(pixel) {
		pixel.color = color;
	});

	return this;
};


Pixels.prototype.fade = function(from, to, duration) {
	this.pixels.forEach(function(pixel) {

	});
	return this;
};


/**
 * Clears pixels
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Pixels.prototype.clear = function () {
	this.set([255, 255, 255]);
	return this;
}


Pixels.prototype.draw = function () {
	var ctx = this.ctx;
	this.pixels.forEach(function(pixel) {
		ctx.fillStyle = "rgb(" + pixel.color[0] + ", " + pixel.color[1] + ", " + pixel.color[2] + ")";
		ctx.fillRect(pixel.x * pixel.size, pixel.y * pixel.size, pixel.size, pixel.size);
	});
	return this;
}


/**
 * Exports
 */

module.exports = Pixels;