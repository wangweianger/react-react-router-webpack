import React, { Component } from 'react'
import Header from './commonjsx/Header'
import Footer from './commonjsx/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = App