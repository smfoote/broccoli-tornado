'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _broccoliFilter = require('broccoli-filter');

var _broccoliFilter2 = _interopRequireDefault(_broccoliFilter);

var _tornadoJs = require('tornado.js');

var _tornadoJs2 = _interopRequireDefault(_tornadoJs);

function Tornado(inputTree, options) {
	// No options yet, but will use options for compiler options
	options = options || {};
	if (!(this instanceof Tornado)) {
		return new Tornado(inputTree, options);
	}

	this.inputTree = inputTree;
}

Tornado.prototype = Object.create(_broccoliFilter2['default'].prototype);
Tornado.prototype.constructor = Tornado;

Tornado.prototype.extensions = ['dust'];
Tornado.prototype.targetExtension = 'js';

Tornado.prototype.processString = function (str, relativePath) {
	return _tornadoJs2['default'].compile(str, relativePath, this.options);
};

exports['default'] = Tornado;
module.exports = exports['default'];
