# yno
_pronounced: (y - no)_

A bare-bone utility set, inspired by lodash, meant to be:
* slim
* independent
* intuitive
* accessible
* tested

## Installation
```
$ npm i -S yno
```

## Usage
```js
const y = require('yno');

y.isArray([1, 2, 3]) // => true

y.isString('hello world') // => true

y.isBoolean('i am a boolean!') // => false

let foo;
y.isPresent(foo) // => false

foo = 'bar';
y.isPresent(foo) // => true
```

## Testing
_Yno uses vowsjs and shouldjs._
```
$ npm test
```
