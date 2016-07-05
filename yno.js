'use strict';

const y = module.exports = {};

y._is = (type, obj) => {
  return Object.getPrototypeOf(obj) === type.prototype;
};

y.isArray = (obj) => { return y._is(Array, obj); };

y.isObject = (obj) => { return y._is(Object, obj); };

y.isString = (obj) => { return y._is(String, obj); };

y.isInt = (obj) => { return y._is(Number, obj); };

y.isNumber = (obj) => { return y._is(Number, obj); };

y.isBoolean = (obj) => { return y._is(Boolean, obj); };

y.isUndefined = (obj) => { return Object.is(undefined, obj); };

y.isNull = (obj) => { return Object.is(null, obj); };

y.isPresent = (obj) => { return !y.isUndefined(obj) && !y.isNull(obj); };
