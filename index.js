'use strict'

const sortKeys = require('sort-keys')
const kindOf = require('kind-of')

const inArray = (value, arr) => (
  !arr || kindOf(arr) !== 'array'
    ? false
    : arr.indexOf(value) > -1
)

const sortObjectKeys = (obj, compare) => sortKeys(obj, { compare })

const sortArray = (arr, opts) => {
  const compareFunction = opts && opts.compareFunction
  return arr.slice().sort(compareFunction)
}

function sortObject (obj, opts) {
  const compareFunction = opts && opts.compareFunction
  const result = sortObjectKeys(obj, compareFunction)

  Object.keys(obj).forEach(function (key) {
    const current = result[key]
    const type = kindOf(current)

    if (type === 'object') {
      if (!opts || !inArray(key, opts.ignoreObjectAtKeys)) {
        result[key] = sortObject(current, opts)
      }
      return
    }

    if (type === 'array') {
      if (!opts || !inArray(key, opts.ignoreArrayAtKeys)) {
        result[key] = sortArray(current, opts)
      }
    }
  })

  return result
}

const sort = (something, opts) => {
  const type = kindOf(something)
  return sort[type] ? sort[type](something, opts) : something
}

sort.array = sortArray
sort.object = sortObject

module.exports = sort
