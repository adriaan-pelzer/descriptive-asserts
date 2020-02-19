const assert = require('assert');

module.exports = {
  equal: name => value => expected => assert.strictEqual(
    value, expected, `${name} should be ${expected}, not ${value}`
  ),
  match: name => value => regex => assert.ok(
    regex.test(value), `${name} should match ${regex}, but is ${value}`
  ),
  notEqual: name => value => expected => assert.notStrictEqual(
    value, expected, `${name} should not be ${expected}`
  ),
  greaterThan: name => value => expected => assert.ok(
    value > expected, `${name} should be greater than ${expected}, but is ${value}`
  ),
  greaterThanOrEqual: name => value => expected => assert.ok(
    value >= expected, `${name} should be greater than or equal to ${expected}, but is ${value}`
  ),
  lessThan: name => value => expected => assert.ok(
    value < expected, `${name} should be less than ${expected}, but is ${value}`
  ),
  lessThanOrEqual: name => value => expected => assert.ok(
    value <= expected, `${name} should be less than or equal to ${expected}, but is ${value}`
  )
};
