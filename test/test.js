'use strict'
import sortKeys from 'sort-keys'

class SortRecursive {
  static array( array, compareFn ) {
    return array.sort(compareFn)
  }

  static objectKeys(object, compareFn) {
    return sortKeys(object, compareFn)
  }

  static object(unorderObj, compareFn) {
    unorderObj = this.objectKeys(unorderObj, compareFn);
    for( let key in unorderObj ) {
      if ( typeof unorderObj[key] === 'object' ) {
        if ( unorderObj[key] instanceof Array ) {
          unorderObj[key] = this.array(unorderObj[key]);
        } else {
          unorderObj[key] = this.object( unorderObj[key] );
        }
      }
    }
    return unorderObj
  }
}
const recursive = SortRecursive;
import test from 'ava';

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
