

/**
 * Dependencies
 */

var enumerable = require('enumerable');


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
	this.matrix.style.height = ((y * size) + (y * 2)) + 'px';
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
 * @api public
 */

Matrix.prototype.el = function () {
	return this.matrix;
}


Matrix.prototype.clear = function () {
	for (var i = 0; i < this.pixels.length; i++) {
	  this.pixels[i].style.background = "rgb(255, 255, 255)";
	}
}

Matrix.prototype.all = function () {
	return this.pixels;
}

Matrix.prototype.at = function (index, y) {
	index -= 1;
	if (y) {
		y -= 1;
	  return [this.pixels[index + (y * this.y)]];
	}
	return [this.pixels[index]];
}

Matrix.prototype.row = function (index) {
	return this.pixels.filter(function (pixel, i) {
		var g = (index - 1) * this.x;
		return (i >= g && i < (g + this.x));
	}, this);
}

Matrix.prototype.column = function (index) {
	return this.pixels.filter(function (pixel, i) {
		return ((i + 1) % 8 === index);
	}, this);
}




/**
 * Exports
 */

module.exports = Matrix;