'use strict';
require('coffee-script/register');
var typeOf = require('fn-typeof');
var sort = require('./lib/SortRecursive');

module.exports = function(something, compareFn) {
  if (typeOf(something) === 'array') return sort.array(something, compareFn);
  if (typeOf(something) === 'object') return sort.object(something, compareFn);
  return something;
};
