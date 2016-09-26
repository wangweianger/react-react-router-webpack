module.exports = {
  path: 'user',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        {
        	path: 'userDetails/:id',
        	getComponents(nextState, cb) {
			    require.ensure([], (require) => {
				    cb(null, require('./UserDetails'))
			    })
			}
        }
      ])
    })
  },

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./User'))
    })
  }

}
