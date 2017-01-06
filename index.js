'use strict'

var sortKeys = require('sort-keys')
var kindOf = require('kind-of')

function sortObjectKeys (obj, compare) {
  return sortKeys(obj, compare)
}

function sortArray (arr, compare) {
  return arr.slice().sort(compare)
}

function sortObject (obj, compare) {
  var result = sortObjectKeys(obj, compare)

  Object.keys(obj).forEach(function (key) {
    var current = result[key]
    var type = kindOf(current)

    if (type === 'object') {
      result[key] = sortObject(current, compare)
      return
    }

    if (type === 'array') {
      result[key] = sortArray(current)
      return
    }
  })

  return result
}

function sort (something, compareFn) {
  var type = kindOf(something)
  if (sort[type]) return sort[type](something, compareFn)
  return something
}

sort.array = sortArray
sort.object = sortObject

module.exports = sort
