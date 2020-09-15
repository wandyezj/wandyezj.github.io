# TypeScript Array Async Polyfills

Create async versions of array methods to execute asynchronous function calls.

## array.polyfill

```typescript

```

## array.filterAsync

```typescript

// Modified from (note 'change' comments)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#polyfill
// change - rename method
if (!Array.prototype.filterAsync){
  // change - async method
  // change Object.definePropertys
  Object.defineProperty(Array.prototype, 'filterAsync', {
    value: async function(func: any, thisArg: any) {
      // change if 
      if ( ! (typeof func === 'function') && this) {
        throw new TypeError();
      }

      var len = this.length >>> 0,
          res = new Array(len), // preallocate array
          t = this, c = 0, i = -1;

      var kValue;
      if (thisArg === undefined){
        while (++i !== len){
          // checks to see if the key was set
          if (i in this){
            kValue = t[i]; // in case t is changed in callback
            // change - await predicate
            const check = (await(func(t[i], i, t)));
            if (check){
              res[c++] = kValue;
            }
          }
        }
      }
      else{
        while (++i !== len){
          // checks to see if the key was set
          if (i in this){
            kValue = t[i];
            // change - await predicate
            const check = (await(func.call(thisArg, t[i], i, t)));
            if (check){
              res[c++] = kValue;
            }
          }
        }
      }
    
      res.length = c; // shrink down array to proper size
      return res;
    },
    // change - no updates
    configurable: false,
    // change - no updates
    writable: false
  });
}
```

## array.findAsync

```typescript
// Modified from (note 'change' comments)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
// https://tc39.github.io/ecma262/#sec-array.prototype.find
// change - rename method
if (!Array.prototype.findAsync) {
  Object.defineProperty(Array.prototype, 'findAsync', {
    // change - async method
    value: async function(predicate: any) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        // change - await predicate
        const check = (await (predicate.call(thisArg, kValue, k, o)));
        if (check) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    // change - no updates
    configurable: false,
    // change - no updates
    writable: false
  });
}

```

## array.findIndexAsync

```typescript
// Modified from (note 'change' comments)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#Polyfill
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
// change - rename method
if (!Array.prototype.findIndexAsync) {
  Object.defineProperty(Array.prototype, 'findIndexAsync', {
    // change - async method
    value: async function(predicate: any) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        // change await predicate
        const check = (await (predicate.call(thisArg, kValue, k, o)));
        if (check) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    // change - no updates
    configurable: false,
    // change - no updates
    writable: false
  });
}

```