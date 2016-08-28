# sort-keys-recursive

[![Build Status](http://img.shields.io/travis/Kikobeats/sort-keys-recursive/master.svg?style=flat)](https://travis-ci.org/Kikobeats/sort-keys-recursive)
[![Dependency status](http://img.shields.io/david/Kikobeats/sort-keys-recursive.svg?style=flat)](https://david-dm.org/Kikobeats/sort-keys-recursive)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/sort-keys-recursive.svg?style=flat)](https://david-dm.org/Kikobeats/sort-keys-recursive#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sort-keys-recursive.svg?style=flat)](https://www.npmjs.org/package/sort-keys-recursive)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Sort the keys of an object recursively

## Install

```bash
npm install sort-keys-recursive --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install sort-keys-recursive --save
```

and later link in your HTML:

```html
<script src="bower_components/sort-keys-recursive/dist/sort-keys-recursive.js"></script>
```

## Usage

```js
recursive = require('sort-keys-recursive');

var object = {
  c: 0,
  a: {
    c: ['c', 'a', 'b'],
    a: 0,
    b: 0
  },
  b: 0
};

console.log(recursive(object));

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


