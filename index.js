'use strict';
require('coffee-script/register');
var typeOf = require('fn-typeof');
var sort = require('./lib/SortRecursive');

module.exports = function(something, compareFn) {
  var type = typeOf(something);
  if (sort[type]) return sort[type](something, compareFn);
  return something;
};
