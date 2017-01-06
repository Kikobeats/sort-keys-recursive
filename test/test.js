'use strict'

var sort = require('..')
var test = require('ava')

test('sort array', (t) => {
  t.deepEqual(
    sort(['foo', 'bar']),
    ['bar', 'foo']
  )
})

test('sort object kyes', (t) => {
  t.deepEqual(
    sort({hello: 'world', foo: 'bar'}),
    {foo: 'bar', hello: 'world'}
  )
})

test('sort keys nested ', (t) => {
  var object = {
    c: 0,
    a: {
      c: 0,
      a: 0,
      b: 0
    },
    b: 0
  }

  var sorted = {
    a: {
      a: 0,
      b: 0,
      c: 0
    },
    b: 0,
    c: 0
  }
  t.deepEqual(sort(object), sorted)
})

test('sort object', (t) => {
  var object = {
    c: 0,
    a: {
      c: ['c', 'a', 'b'],
      a: 0,
      b: 0
    },
    b: 0
  }

  var sorted = {
    a: {
      a: 0,
      b: 0,
      c: ['a', 'b', 'c']
    },
    b: 0,
    c: 0
  }
  t.deepEqual(sort(object), sorted)
})
