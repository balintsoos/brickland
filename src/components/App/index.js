import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './styles.module.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className={styles.wrapper}>
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
