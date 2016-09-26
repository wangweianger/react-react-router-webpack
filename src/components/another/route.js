module.exports = {
  path: 'another',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Another'))
    })
  }
}
