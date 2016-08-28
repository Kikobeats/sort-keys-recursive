const sortKeys = require('sort-keys')

class SortRecursive {

  static object(obj, compare) {
    let result = this.objectKeys(obj, compare);
    for( let key in obj ) {
      const current = result[key];
      if ( typeof current === 'object' ) {
        if ( current instanceof Array ) {
          result[key] = this.array(current);
        } else {
          result[key] = this.object(current);
        }
      }
    }
    return result;
  }

  static array( arr, compare ) {
    return arr.sort(compare)
  }

  static objectKeys(obj, compare) {
    return sortKeys(obj, compare)
  }

}

module.exports = SortRecursive;
