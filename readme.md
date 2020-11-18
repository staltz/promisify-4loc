# promisify-4loc

Convert a Node.js-style callback API `(err, val) => void` to a Promise. Much like [pify](https://github.com/sindresorhus/pify), but implemented in just 4 lines of code, with only the core functionality provided.

```
npm install --save promisify-4loc
```

**Before:**

```js
const fs = require('fs')

function main() {
  fs.readFile('./test.js', (err, val) => {
    if (err) console.error(err)
    else console.log(val)
  })
}

main()
```

**After:**

```js
const fs = require('fs')
const pify = require('promisify-4loc')

async function main() {
  try {
    const val = await pify(fs.readFile)('./test.js')
    console.log(val)
  } catch (err) {
    console.error(err)
  }
}

main()
```

## Source code

It's called "4loc" because the implementation is only 4 lines of code:

```js
module.exports = (fn) => (...args) =>
  new Promise((resolve, reject) => {
    fn(...args, (err, val) => err ? reject(err) : resolve(val))
  })
```

That's 144 bytes.

## License

[MIT](LICENSE)
