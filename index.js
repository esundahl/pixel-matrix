

/**
 * Private Variables
 */

var pixelTmpl = document.createElement('li');
pixelTmpl.classList.add('pixel');


/**
 * Matrix constructor
 * @param {Number} x Number of pixels on the x axis
 * @param {Number} y Number of pixels on the y axis
 * @param {Number} size Pixel size
 * @api public
 */

function Matrix (x, y, size) {
	this.matrix = document.createElement('ul');
	this.matrix.classList.add('matrix');
	this.matrix.style.width = ((x * size) + (x * 2)) + 'px';
	console.log(((x * size) + (x * 2)));
	this.matrix.style.height = ((y * size) + (y * 2)) + 'px';
	console.log(((y * size) + (y * 2)));
	this.pixels = [];
	for (var i = 0; i < (x * y); i++) {
		var pixel = pixelTmpl.cloneNode(true);
		pixel.style.width = size + 'px';
		pixel.style.height = size + 'px';
		this.pixels.push(pixel);
		this.matrix.appendChild(pixel);
	}
	this.x = x;
	this.y = y;
	return this;
}


/**
 * Returns the matrix dom element
 * @return {Element}
 * @api    public
 */

Matrix.prototype.el = function () {
	return this.matrix;
}


/**
 * Exports
 */

module.exports = Matrix;