'use strict';
require('coffee-script').register();
SortRecursive = require('./lib/SortRecursive');

module.exports = function (obj, compareFn) {
  return SortRecursive.object(obj);
}
