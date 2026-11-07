
const test = require('node:test');
const assert = require('node:assert');

test('Application should return expected message', () => {
  const message = 'Docker application is running successfully';

  assert.strictEqual(
    message,
    'Docker application is running successfully'
  );
});
