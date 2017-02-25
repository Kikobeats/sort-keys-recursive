'use strict'

var sort = require('..')
var test = require('ava')

test('sort returns non-array/non-object as is', (t) => {
  const nonSortables = ['foo', null, 34]

  nonSortables.forEach(
    (nonSortable) => t.deepEqual(sort(nonSortable), nonSortable)
  )
})

test('sort array', (t) => {
  var arr = ['foo', 'bar']
  t.deepEqual(
    sort(arr),
    ['bar', 'foo']
  )

  t.deepEqual(
    arr,
    ['foo', 'bar']
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

test('sort object > compareFn', (t) => {
  const input = {
    a: {
      a: 0,
      c: ['c', 'a', 'b'],
      b: 0
    },
    c: 0,
    b: 0
  }

  const expectedResult = {
    c: 0,
    b: 0,
    a: {
      c: ['c', 'b', 'a'],
      b: 0,
      a: 0
    }
  }

  // Sort in reverse alphabetical order (instead of the default alphabetical order).
  const result = sort(input, (a, b) => a < b)

  t.deepEqual(result, expectedResult)

  // Check the ordering of the keys.
  t.deepEqual(Object.keys(result), Object.keys(expectedResult))
  t.deepEqual(Object.keys(result.a), Object.keys(expectedResult.a))
})

test('sort object > options.ignoreObjectAtKeys', (t) => {
  const input = {
    a: {
      b: ['a', 'c', 'b'],
      c: {
        d: [true, {f: 'g'}]
      },
      d: 'e'
    }
  }

  const options = {
    ignoreObjectAtKeys: [
      'c'
    ]
  }

  const result = sort(input, null, options)

  const expectedResult = {
    a: {
      b: ['a', 'b', 'c'],
      c: {
        d: [true, {f: 'g'}]
      },
      d: 'e'
    }
  }

  t.deepEqual(result, expectedResult)

  // Check the ordering of the keys.
  t.deepEqual(Object.keys(result.a), Object.keys(expectedResult.a))
})

test('sort object > options.ignoreArrayAtKeys', (t) => {
  const input = {
    a: {
      c: {
        d: [true, {f: 'g'}]
      },
      b: ['a', 'c', 'b'],
      d: 'e'
    }
  }

  const options = {
    ignoreArrayAtKeys: [
      'b'
    ]
  }

  const result = sort(input, null, options)

  const expectedResult = {
    a: {
      b: ['a', 'c', 'b'],
      c: {
        d: [{f: 'g'}, true]
      },
      d: 'e'
    }
  }

  t.deepEqual(result, expectedResult)

  // Check the ordering of the keys.
  t.deepEqual(Object.keys(result.a), Object.keys(expectedResult.a))
})
