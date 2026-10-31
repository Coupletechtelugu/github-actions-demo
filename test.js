const { add } = require('./index');

if (add(2, 3) !== 5) {
  throw new Error('Addition test failed');
}

console.log('All tests passed');