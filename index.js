'use strict';
var Filter =  require('broccoli-filter');
var tornado = require('tornado.js');

function Tornado(inputNode, options) {
  // No options yet, but will use options for compiler options
  options = options || {};
	if (!(this instanceof Tornado)) {
		return new Tornado(inputNode, options);
	}
	Filter.call(this, inputNode, options);
}

Tornado.prototype = Object.create(Filter.prototype);
Tornado.prototype.constructor = Tornado;

Tornado.prototype.extensions = ['td', 'tl', 'tmpl'];
Tornado.prototype.targetExtension = 'js';

Tornado.prototype.processString = function (str, relativePath) {
  console.log('str', str);
	return tornado.compile(str, relativePath, this.options);
};

module.exports = Tornado;
