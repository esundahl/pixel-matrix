/**
 * Dependencies
 */


/**
 * Constructor
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} index
 * @param {Array} color
 * @return {Pixel}
 * @api public
 */

function Pixel (args) {
	this.ctx = args.ctx;
	this.x = args.x;
	this.y = args.y;
	this.index = args.index;
	this.size = args.size;
	this.color = [255, 255, 255];
	return this;
}


/**
 * Sets the pixels color
 *
 * @param {array|string} color
 * @return {void}
 * @api public
 */

Pixel.prototype.set = function (color) {
	if (typeof color === 'string') {
		throw 'String colors not yet supported. Try passing an array of rgb values'
	}
	this.color = color;
	this.draw();
}


/**
 * Fades the pixel from one color to another
 *
 * @param {array|string} from
 * @param {array|string} to
 * @param {number} duration
 * @return {void}
 * @api public
 */

Pixel.prototype.fade = function (from, to, duration) {
	return this;
}


/**
 * Draws the pixel on the canvas
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Pixel.prototype.draw = function () {
	this.ctx.fillStyle = "rgb(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ")";
	this.ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
}


/**
 * Exports
 */

module.exports = Pixel;