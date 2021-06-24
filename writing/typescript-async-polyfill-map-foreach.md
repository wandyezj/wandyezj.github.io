## map foreach

https://tc39.es/ecma262/#sec-map.prototype.foreach

Same logic could be used for set

```typescript


if (!Map.prototype.forEachAsync){
  Object.defineProperty(Map.prototype, 'forEachAsync', {
    value: async function(func: any, thisArg: any) {
      
      // needs to throw the same errors if the func is not right
      // currently not correct
      if ( ! (typeof func === 'function') && this) {
        throw new TypeError();
      }

      var kValue;
      if (thisArg === undefined){
          for ([key, value] of this.entries()) {
               (await(func(key, value, this)));
          }
      }
      else{
        for ([key, value] of this.entries()) {
          (await(func.call(thisArg, key, value, this)));
        }
      }

    },
    // no updates
    configurable: false,
    // no updates
    writable: false
  });
}


```