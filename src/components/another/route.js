module.exports = {
  	path: 'another',
  	// 异步加载
  	getComponent(nextState, cb) {
	    require.ensure([], (require) => {
	      	cb(null, require('./Another'))
	    })
	}
}
