'use strict'
recursive = require '../lib/SortRecursive'
should    = require 'should'

describe 'sort-keys-recursive ::', ->

  it 'sort array', ->
    recursive.array(['foo', 'bar']).should.eql ['bar', 'foo']

  it 'sort object keys', ->
    recursive.objectKeys({hello: 'world', foo: 'bar'}).should.eql {foo: 'bar', hello: 'world'}

  it 'sort keys nested ', ->
    object =
      c: 0
      a:
        c: 0
        a: 0
        b: 0
      b: 0

    sort =
      a:
        a: 0
        b: 0
        c: 0
      b: 0
      c: 0
    recursive.object(object).should.eql sort

  it 'sort object',->
    object =
      c: 0
      a:
        c: ['c', 'a', 'b']
        a: 0
        b: 0
      b: 0

    sort =
      a:
        a: 0
        b: 0
        c: ['a', 'b', 'c']
      b: 0
      c: 0
    recursive.object(object).should.eql sort
