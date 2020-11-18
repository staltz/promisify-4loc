const test = require('tape');
const pify = require('./index');
const fs = require('fs');

test('it can be used on fs.readFile', async t => {
  t.plan(2);
  try {
    const val = await pify(fs.readFile)('./test.js');
    t.ok(val);
    t.ok(val.length > 10);
  } catch (err) {
    t.fail(err)
  }
});

test('it handles errors', async t => {
  t.plan(1);
  try {
    await pify((cb) => {
      cb(new Error('oops'))
    })();
    t.fail('should not resolve')
  } catch (err) {
    t.equals(err.message, 'oops')
  }
});
