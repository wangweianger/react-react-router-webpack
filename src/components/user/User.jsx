import React, { Component } from 'react'
import {Link} from 'react-router'
require('./user.scss')

class User extends Component {
	// 默认数据
	static defaultProps = {
		datas:[
			{id:1,name:'wangwei',time:'2016-15-12'},
			{id:2,name:'zhangsan',time:'2016-12-03'},
			{id:3,name:'xiaofang',time:'2016-12-03'}
		]
	}
  	render() {
	    return (
		    <div>
		        <div className="tc mt20 largesize">
		          	{this.props.datas.map(item => (
			            <li key={item.id}>
			            	<Link to="/user/userDetails" >{item.name}</Link>
				            <span className="ml15">{item.time}</span>
			            </li>
			        ))}
		        </div>
		    </div>
	    )
  	}
}
module.exports = User

//to={`/user/userDetails/${item.id}`} 