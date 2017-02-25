'use strict'

var sortKeys = require('sort-keys')
var kindOf = require('kind-of')

function inArray (value, arr) {
  if (!arr || kindOf(arr) !== 'array') return false

  return arr.indexOf(value) > -1
}

function sortObjectKeys (obj, compare, options) {
  return sortKeys(obj, compare)
}

function sortArray (arr, compare) {
  return arr.slice().sort(compare)
}

function sortObject (obj, compare, options) {
  var result = sortObjectKeys(obj, compare)

  Object.keys(obj).forEach(function (key) {
    var current = result[key]
    var type = kindOf(current)

    if (type === 'object') {
      if (!options || !inArray(key, options.ignoreObjectAtKeys)) {
        result[key] = sortObject(current, compare, options)
      }
      return
    }

    if (type === 'array') {
      if (!options || !inArray(key, options.ignoreArrayAtKeys)) {
        result[key] = sortArray(current, compare, options)
      }
      return
    }
  })

  return result
}

function sort (something, compareFn, opts) {
  var type = kindOf(something)

  if (sort[type]) return sort[type](something, compareFn, opts)
  return something
}

sort.array = sortArray
sort.object = sortObject

module.exports = sort
