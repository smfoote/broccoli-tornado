'use strict';
import Filter from 'broccoli-filter';
import tornado from 'tornado.js';

function Tornado(inputTree, options) {
  // No options yet, but will use options for compiler options
  options = options || {};
	if (!(this instanceof Tornado)) {
		return new Tornado(inputTree, options);
	}

	this.inputTree = inputTree;
}

Tornado.prototype = Object.create(Filter.prototype);
Tornado.prototype.constructor = Tornado;

Tornado.prototype.extensions = ['dust'];
Tornado.prototype.targetExtension = 'js';

Tornado.prototype.processString = function (str, relativePath) {
	return tornado.compile(str, relativePath, this.options);
};

export default Tornado;
