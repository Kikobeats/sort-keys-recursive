# sort-keys-recursive

![Last version](https://img.shields.io/github/tag/Kikobeats/sort-keys-recursive.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/sort-keys-recursive/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/sort-keys-recursive)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/sort-keys-recursive.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/sort-keys-recursive)
[![Dependency status](https://img.shields.io/david/Kikobeats/sort-keys-recursive.svg?style=flat-square)](https://david-dm.org/Kikobeats/sort-keys-recursive)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/sort-keys-recursive.svg?style=flat-square)](https://david-dm.org/Kikobeats/sort-keys-recursive#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/str-match.svg?style=flat-square)](https://www.npmjs.org/package/str-match)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Sort the keys of an object recursively

## Install

```bash
npm install sort-keys-recursive --save
```

## Usage

```js
var sort = require('sort-keys-recursive')

var object = {
  c: 0,
  a: {
    c: ['c', 'a', 'b'],
    a: 0,
    b: 0
  },
  b: 0
}

var output = sort(object)

console.log(output)

// {
//   a: {
//     a: 0,
//     b: 0,
//     c: ['a', 'b', 'c']
//   },
//   b: 0,
//   c: 0
// };

```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
