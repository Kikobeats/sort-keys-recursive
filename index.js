'use strict'

var sortKeys = require('sort-keys')
var kindOf = require('kind-of')

function inArray (value, arr) {
  if (!arr || kindOf(arr) !== 'array') return false

  return arr.indexOf(value) > -1
}

function sortObjectKeys (obj, compare) {
  return sortKeys(obj, compare)
}

function sortArray (arr, options) {
  const compareFunction = options && options.compareFunction

  return arr.slice().sort(compareFunction)
}

function sortObject (obj, options) {
  const compareFunction = options && options.compareFunction
  var result = sortObjectKeys(obj, compareFunction)

  Object.keys(obj).forEach(function (key) {
    var current = result[key]
    var type = kindOf(current)

    if (type === 'object') {
      if (!options || !inArray(key, options.ignoreObjectAtKeys)) {
        result[key] = sortObject(current, options)
      }
      return
    }

    if (type === 'array') {
      if (!options || !inArray(key, options.ignoreArrayAtKeys)) {
        result[key] = sortArray(current, options)
      }
    }
  })

  return result
}

function sort (something, opts) {
  var type = kindOf(something)

  if (sort[type]) return sort[type](something, opts)
  return something
}

sort.array = sortArray
sort.object = sortObject

module.exports = sort
