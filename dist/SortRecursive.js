'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sortKeys = require('sort-keys');

var SortRecursive = function () {
  function SortRecursive() {
    _classCallCheck(this, SortRecursive);
  }

  _createClass(SortRecursive, null, [{
    key: 'object',
    value: function object(obj, compare) {
      var result = this.objectKeys(obj, compare);
      for (var key in obj) {
        var current = result[key];
        if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
          if (current instanceof Array) {
            result[key] = this.array(current);
          } else {
            result[key] = this.object(current);
          }
        }
      }
      return result;
    }
  }, {
    key: 'array',
    value: function array(arr, compare) {
      return arr.sort(compare);
    }
  }, {
    key: 'objectKeys',
    value: function objectKeys(obj, compare) {
      return sortKeys(obj, compare);
    }
  }]);

  return SortRecursive;
}();

module.exports = SortRecursive;