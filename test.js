'use strict';

const yno = require('./yno');
const should = require('should');
const vows = require('vows');
const reporter = require('vows/lib/vows/reporters/spec');
const suite = vows.describe('Yno');

function isFunc(fn) {
  should(fn).be.an.instanceOf(Function);
}

function shouldHaveFunc(obj, fn) {
  should(obj).have.property(fn);
  isFunc(obj[fn]);
}

function hasFunc(fn) {
  return function(obj) {
    shouldHaveFunc(obj, fn);
  };
}

function shouldEqual(fn, args, fate) {
  return function(obj) {
    should(obj[fn].apply(obj, args)).equal(fate);
  };
}

function isFalse() {
  const args = Array.from(arguments);
  const fn = args.shift();
  return shouldEqual(fn, args, false);
}

function isTrue() {
  const args = Array.from(arguments);
  const fn = args.shift();
  return shouldEqual(fn, args, true);
}

const fixtures = {
  arry1: [1, 2, 3, 4, 5],
  arry2: [3, 4, 5, 6, 7],
  obj: { a: { b: 'c' }, b: 10, c: true },
  str: 'hello world',
  num: 100,
  bool: true,
  nil: null,
};

let undefinedVal;

suite.addBatch({
  'Utility Methods': {
    topic: yno,

    'should have function "_is"': hasFunc('_is'),

    '_is(Array, {}) should be false': isFalse('_is', Array, {}),

    '_is(Array, []) should be true': isTrue('_is', Array, []),

    'should have function "isArray"': hasFunc('isArray'),

    'isArray(fixtures.obj) should be false': isFalse('isArray', fixtures.obj),

    'isArray(fixtures.arry1) should be true': isTrue('isArray', fixtures.arry1),

    'should have function "isObject"': hasFunc('isObject'),

    'isObject(fixtures.arry1) should be false': isFalse('isObject', fixtures.arry1),

    'isObject(fixtures.obj) should be true': isTrue('isObject', fixtures.obj),

    'should have function "isString"': hasFunc('isString'),

    'isString(fixtures.arry1) should be false': isFalse('isString', fixtures.arry1),

    'isString(fixtures.str) should be true': isTrue('isString', fixtures.str),

    'should have function "isInt"': hasFunc('isInt'),

    'isInt(fixtures.arry1) should be false': isFalse('isInt', fixtures.arry1),

    'isInt(fixtures.num) should be true': isTrue('isInt', fixtures.num),

    'should have function "isNumber"': hasFunc('isNumber'),

    'isNumber(fixtures.arry1) should be false': isFalse('isNumber', fixtures.arry1),

    'isNumber(fixtures.num) should be true': isTrue('isNumber', fixtures.num),

    'should have function "isBoolean"': hasFunc('isBoolean'),

    'isBoolean(fixtures.arry1) should be false': isFalse('isBoolean', fixtures.arry1),

    'isBoolean(fixtures.bool) should be true': isTrue('isBoolean', fixtures.bool),

    'should have function "isUndefined"': hasFunc('isUndefined'),

    'isUndefined(fixtures.arry1) should be false': isFalse('isUndefined', fixtures.arry1),

    'isUndefined(undefinedVal) should be true': isTrue('isUndefined', undefinedVal),

    'should have function "isNull"': hasFunc('isNull'),

    'isNull(fixtures.arry1) should be false': isFalse('isNull', fixtures.arry1),

    'isNull(fixtures.nil) should be true': isTrue('isNull', fixtures.nil),

    'should have function "isPresent"': hasFunc('isPresent'),

    'isPresent(undefinedVal) should be false': isFalse('isPresent', undefinedVal),

    'isPresent(fixtures.obj) should be true': isTrue('isPresent', fixtures.obj),
  },
});


// Utilities
// Object
// Array

suite.run({ reporter });
