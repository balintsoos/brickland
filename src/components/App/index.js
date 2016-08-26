import React from 'react'

import Hero from 'components/Hero'
import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Hero />
        <Header />

        <div className="content-wrapper">
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
