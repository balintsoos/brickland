import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className="wrapper">
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
