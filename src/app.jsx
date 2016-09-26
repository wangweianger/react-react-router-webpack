import React, { Component } from 'react'
import Header from './commonjsx/Header'
import Footer from './commonjsx/Footer'
import Home from './components/index/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children || <Home />}
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = App