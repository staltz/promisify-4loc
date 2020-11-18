module.exports = (fn) => (...args) =>
  new Promise((resolve, reject) => {
    fn(...args, (err, val) => err ? reject(err) : resolve(val))
  })
