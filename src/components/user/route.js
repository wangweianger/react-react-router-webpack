module.exports = {
	path: 'user',
	component: require('./User'),
	childRoutes: [
    	{ 
    		path: 'userDetails', 
    		component: require('./UserDetails') 
    	}
  	]
}

