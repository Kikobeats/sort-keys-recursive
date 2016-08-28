'use strict'

const recursive = require('../lib/SortRecursive')
const test = require('ava');

test('sort array', (t) => {
  t.deepEqual(
    recursive.array(['foo', 'bar']),
    ['bar', 'foo']
  )
})

test('sort object kyes', (t) => {
  t.deepEqual(
    recursive.objectKeys({hello: 'world', foo: 'bar'}),
    {foo: 'bar', hello: 'world'}
  )
})

test('sort keys nested ', (t) => {
  const object = {
    c: 0,
    a: {
      c: 0,
      a: 0,
      b: 0,
    },
    b: 0
  }

  const sorted = {
    a: {
      a: 0,
      b: 0,
      c: 0,
    },
    b: 0,
    c: 0
  }
  t.deepEqual(recursive.object(object), sorted)
});

test('sort object', (t) => {
  const object = {
    c: 0,
    a: {
      c: ['c', 'a', 'b'],
      a: 0,
      b: 0
    },
    b: 0
  }

  const sorted = {
    a:  {
      a: 0,
      b: 0,
      c: ['a', 'b', 'c']
    },
    b: 0,
    c: 0
  }
  t.deepEqual(recursive.object(object), sorted)
});
