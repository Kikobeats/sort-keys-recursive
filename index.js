'use strict';
require('coffee-script').register();
var SortRecursive = require('./lib/SortRecursive');

module.exports = function (obj, compareFn) {
  return SortRecursive.object(obj, compareFn);
};
