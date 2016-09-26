import React, { Component } from 'react'
import {Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li className="active"><Link to="/">首页</Link></li>
          <li><Link to="/user">用户</Link></li>
          <li><Link to="/another">其他</Link></li>
        </ul>
      </div>
    )
  }
}

module.exports = Header