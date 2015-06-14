'use strict'
sortKeys = require 'sort-keys'

module.exports = class SortRecursive

  @array: (array, compareFn) ->
    array.sort compareFn

  @objectKeys: (object, compareFn) ->
    sortKeys object

  @object: (object, compareFn) ->
    object = @objectKeys object, compareFn
    for key, keyValue of object
      if (typeof keyValue is 'object')
        unless keyValue instanceof Array
          object[key] = @object keyValue
        else
          object[key] = @array keyValue
    object
